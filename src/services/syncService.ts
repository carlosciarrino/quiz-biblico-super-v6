import { supabase } from "@/integrations/supabase/client";

const DEVICE_ID_KEY = 'bible_quiz_device_id';
const SYNC_QUEUE_KEY = 'bible_quiz_sync_queue';
const LAST_SYNC_KEY = 'bible_quiz_last_sync';

// Generate or retrieve a unique device ID
export const getDeviceId = (): string => {
  let deviceId = localStorage.getItem(DEVICE_ID_KEY);
  if (!deviceId) {
    deviceId = 'device_' + crypto.randomUUID();
    localStorage.setItem(DEVICE_ID_KEY, deviceId);
  }
  return deviceId;
};

// Queue changes for sync when offline
export const queueForSync = (type: 'stats' | 'wrongAnswers', data: unknown): void => {
  const queue = JSON.parse(localStorage.getItem(SYNC_QUEUE_KEY) || '[]');
  queue.push({
    type,
    data,
    timestamp: new Date().toISOString(),
  });
  localStorage.setItem(SYNC_QUEUE_KEY, JSON.stringify(queue));
};

// Check if we have pending changes to sync
export const hasPendingSync = (): boolean => {
  const queue = JSON.parse(localStorage.getItem(SYNC_QUEUE_KEY) || '[]');
  return queue.length > 0;
};

// Sync progress to Supabase
export const syncProgressToServer = async (): Promise<boolean> => {
  if (!navigator.onLine) return false;

  const deviceId = getDeviceId();
  const stats = localStorage.getItem('bible_quiz_user_stats');
  const wrongAnswers = localStorage.getItem('bible_quiz_wrong_answers');

  try {
    // Check if record exists
    const { data: existing } = await supabase
      .from('user_progress')
      .select('id')
      .eq('device_id', deviceId)
      .single();

    const progressData = {
      device_id: deviceId,
      stats: stats ? JSON.parse(stats) : {},
      wrong_answers: wrongAnswers ? JSON.parse(wrongAnswers) : [],
      last_synced_at: new Date().toISOString(),
    };

    if (existing) {
      const { error } = await supabase
        .from('user_progress')
        .update(progressData)
        .eq('device_id', deviceId);

      if (error) throw error;
    } else {
      const { error } = await supabase
        .from('user_progress')
        .insert(progressData);

      if (error) throw error;
    }

    // Clear sync queue on success
    localStorage.removeItem(SYNC_QUEUE_KEY);
    localStorage.setItem(LAST_SYNC_KEY, new Date().toISOString());
    
    return true;
  } catch (error) {
    console.error('Sync error:', error);
    return false;
  }
};

// Load progress from Supabase
export const loadProgressFromServer = async (): Promise<{
  stats: unknown;
  wrongAnswers: unknown;
} | null> => {
  if (!navigator.onLine) return null;

  const deviceId = getDeviceId();

  try {
    const { data, error } = await supabase
      .from('user_progress')
      .select('stats, wrong_answers, last_synced_at')
      .eq('device_id', deviceId)
      .single();

    if (error || !data) return null;

    return {
      stats: data.stats,
      wrongAnswers: data.wrong_answers,
    };
  } catch {
    return null;
  }
};

// Merge local and server progress (local wins for newer data)
export const mergeProgress = (
  local: { stats: unknown; wrongAnswers: unknown },
  server: { stats: unknown; wrongAnswers: unknown } | null
): { stats: unknown; wrongAnswers: unknown } => {
  if (!server) return local;

  // For stats, merge taking the highest values
  const localStats = local.stats as Record<string, unknown> || {};
  const serverStats = server.stats as Record<string, unknown> || {};

  const mergedStats = {
    ...serverStats,
    ...localStats,
    totalQuizzesCompleted: Math.max(
      (localStats.totalQuizzesCompleted as number) || 0,
      (serverStats.totalQuizzesCompleted as number) || 0
    ),
    totalQuestionsAnswered: Math.max(
      (localStats.totalQuestionsAnswered as number) || 0,
      (serverStats.totalQuestionsAnswered as number) || 0
    ),
    totalCorrectAnswers: Math.max(
      (localStats.totalCorrectAnswers as number) || 0,
      (serverStats.totalCorrectAnswers as number) || 0
    ),
    streakDays: Math.max(
      (localStats.streakDays as number) || 0,
      (serverStats.streakDays as number) || 0
    ),
  };

  // For wrong answers, merge unique entries
  const localWrongAnswers = (local.wrongAnswers as Array<{ questionId: number }>) || [];
  const serverWrongAnswers = (server.wrongAnswers as Array<{ questionId: number }>) || [];
  
  const wrongAnswersMap = new Map();
  [...serverWrongAnswers, ...localWrongAnswers].forEach(wa => {
    wrongAnswersMap.set(wa.questionId, wa);
  });
  
  const mergedWrongAnswers = Array.from(wrongAnswersMap.values());

  return {
    stats: mergedStats,
    wrongAnswers: mergedWrongAnswers,
  };
};

// Get last sync time
export const getLastSyncTime = (): string | null => {
  return localStorage.getItem(LAST_SYNC_KEY);
};
