// Push Notification Service for Bible Quiz

const NOTIFICATION_SETTINGS_KEY = 'bible_quiz_notification_settings';

export interface NotificationSettings {
  enabled: boolean;
  dailyChallengeTime: string; // HH:MM format
  studyReminderTime: string; // HH:MM format
  lastNotificationDate: string | null;
}

const defaultSettings: NotificationSettings = {
  enabled: false,
  dailyChallengeTime: '09:00',
  studyReminderTime: '20:00',
  lastNotificationDate: null,
};

// Get notification settings from localStorage
export const getNotificationSettings = (): NotificationSettings => {
  try {
    const stored = localStorage.getItem(NOTIFICATION_SETTINGS_KEY);
    if (stored) {
      return { ...defaultSettings, ...JSON.parse(stored) };
    }
  } catch (error) {
    console.error('Error reading notification settings:', error);
  }
  return defaultSettings;
};

// Save notification settings
export const saveNotificationSettings = (settings: Partial<NotificationSettings>): void => {
  const current = getNotificationSettings();
  const updated = { ...current, ...settings };
  localStorage.setItem(NOTIFICATION_SETTINGS_KEY, JSON.stringify(updated));
};

// Check if notifications are supported
export const isNotificationSupported = (): boolean => {
  return 'Notification' in window && 'serviceWorker' in navigator;
};

// Request notification permission
export const requestNotificationPermission = async (): Promise<NotificationPermission> => {
  if (!isNotificationSupported()) {
    console.warn('Notifications are not supported');
    return 'denied';
  }

  const permission = await Notification.requestPermission();
  
  if (permission === 'granted') {
    saveNotificationSettings({ enabled: true });
    // Register service worker for push notifications
    await registerPushSubscription();
  }
  
  return permission;
};

// Get current permission status
export const getNotificationPermission = (): NotificationPermission | 'unsupported' => {
  if (!isNotificationSupported()) {
    return 'unsupported';
  }
  return Notification.permission;
};

// Register for push notifications via service worker
const registerPushSubscription = async (): Promise<void> => {
  try {
    const registration = await navigator.serviceWorker.ready;
    console.log('Service Worker ready for push notifications');
    
    // Schedule local notifications since we don't have a push server
    scheduleLocalNotifications();
  } catch (error) {
    console.error('Error registering push subscription:', error);
  }
};

// Show a local notification
export const showNotification = (title: string, options?: NotificationOptions): void => {
  if (Notification.permission === 'granted') {
    const notification = new Notification(title, {
      icon: '/favicon.ico',
      badge: '/favicon.ico',
      tag: 'bible-quiz-notification',
      ...options,
    });

    notification.onclick = () => {
      window.focus();
      notification.close();
    };
  }
};

// Show daily challenge notification
export const showDailyChallengeNotification = (message: string): void => {
  showNotification('📖 Quiz Biblico', {
    body: message,
    tag: 'daily-challenge',
    data: { type: 'daily-challenge' },
  });
};

// Show study reminder notification
export const showStudyReminderNotification = (message: string): void => {
  showNotification('✝️ Promemoria Studio', {
    body: message,
    tag: 'study-reminder',
    data: { type: 'study-reminder' },
  });
};

// Show streak reminder notification
export const showStreakReminderNotification = (message: string): void => {
  showNotification('🔥 Non perdere la serie!', {
    body: message,
    tag: 'streak-reminder',
    data: { type: 'streak-reminder' },
  });
};

// Schedule local notifications (using setTimeout as fallback for web)
let dailyChallengeTimeout: NodeJS.Timeout | null = null;
let studyReminderTimeout: NodeJS.Timeout | null = null;

export const scheduleLocalNotifications = (): void => {
  const settings = getNotificationSettings();
  
  if (!settings.enabled || Notification.permission !== 'granted') {
    return;
  }

  // Clear existing timeouts
  if (dailyChallengeTimeout) clearTimeout(dailyChallengeTimeout);
  if (studyReminderTimeout) clearTimeout(studyReminderTimeout);

  const now = new Date();
  const today = now.toDateString();

  // Schedule daily challenge notification
  const [challengeHour, challengeMinute] = settings.dailyChallengeTime.split(':').map(Number);
  const challengeTime = new Date();
  challengeTime.setHours(challengeHour, challengeMinute, 0, 0);
  
  if (challengeTime <= now) {
    challengeTime.setDate(challengeTime.getDate() + 1);
  }
  
  const challengeDelay = challengeTime.getTime() - now.getTime();
  
  dailyChallengeTimeout = setTimeout(() => {
    const currentSettings = getNotificationSettings();
    if (currentSettings.enabled && currentSettings.lastNotificationDate !== today) {
      showDailyChallengeNotification('La tua sfida giornaliera ti aspetta!');
      saveNotificationSettings({ lastNotificationDate: today });
    }
    // Reschedule for next day
    scheduleLocalNotifications();
  }, Math.min(challengeDelay, 2147483647)); // Max setTimeout value

  // Schedule study reminder notification
  const [studyHour, studyMinute] = settings.studyReminderTime.split(':').map(Number);
  const studyTime = new Date();
  studyTime.setHours(studyHour, studyMinute, 0, 0);
  
  if (studyTime <= now) {
    studyTime.setDate(studyTime.getDate() + 1);
  }
  
  const studyDelay = studyTime.getTime() - now.getTime();
  
  studyReminderTimeout = setTimeout(() => {
    const currentSettings = getNotificationSettings();
    if (currentSettings.enabled) {
      showStudyReminderNotification('È ora di studiare la Bibbia!');
    }
    // Reschedule for next day
    scheduleLocalNotifications();
  }, Math.min(studyDelay, 2147483647));
};

// Initialize notifications on app load
export const initializeNotifications = (): void => {
  const settings = getNotificationSettings();
  
  if (settings.enabled && Notification.permission === 'granted') {
    scheduleLocalNotifications();
  }
};

// Disable notifications
export const disableNotifications = (): void => {
  if (dailyChallengeTimeout) clearTimeout(dailyChallengeTimeout);
  if (studyReminderTimeout) clearTimeout(studyReminderTimeout);
  
  saveNotificationSettings({ enabled: false });
};

// Update notification times
export const updateNotificationTimes = (
  dailyChallengeTime?: string,
  studyReminderTime?: string
): void => {
  const updates: Partial<NotificationSettings> = {};
  
  if (dailyChallengeTime) updates.dailyChallengeTime = dailyChallengeTime;
  if (studyReminderTime) updates.studyReminderTime = studyReminderTime;
  
  saveNotificationSettings(updates);
  
  // Reschedule with new times
  const settings = getNotificationSettings();
  if (settings.enabled) {
    scheduleLocalNotifications();
  }
};
