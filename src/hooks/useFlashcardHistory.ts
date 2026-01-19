import { useState, useEffect, useCallback } from 'react';

export interface FlashcardSession {
  id: string;
  date: string;
  cardsReviewed: number;
  correct: number;
  incorrect: number;
  accuracy: number;
  duration: number; // in seconds
}

export interface DailyStats {
  date: string;
  cardsReviewed: number;
  correct: number;
  accuracy: number;
  sessions: number;
}

const HISTORY_KEY = 'bible_quiz_flashcard_history';
const STREAK_KEY = 'bible_quiz_flashcard_streak';

export const useFlashcardHistory = () => {
  const [sessions, setSessions] = useState<FlashcardSession[]>([]);
  const [streak, setStreak] = useState({ current: 0, best: 0, lastDate: '' });

  useEffect(() => {
    const storedSessions = localStorage.getItem(HISTORY_KEY);
    if (storedSessions) {
      try {
        setSessions(JSON.parse(storedSessions));
      } catch {
        setSessions([]);
      }
    }

    const storedStreak = localStorage.getItem(STREAK_KEY);
    if (storedStreak) {
      try {
        setStreak(JSON.parse(storedStreak));
      } catch {
        setStreak({ current: 0, best: 0, lastDate: '' });
      }
    }
  }, []);

  const saveSessions = useCallback((newSessions: FlashcardSession[]) => {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(newSessions));
    setSessions(newSessions);
  }, []);

  const saveStreak = useCallback((newStreak: typeof streak) => {
    localStorage.setItem(STREAK_KEY, JSON.stringify(newStreak));
    setStreak(newStreak);
  }, []);

  const recordSession = useCallback((sessionData: {
    cardsReviewed: number;
    correct: number;
    incorrect: number;
    duration: number;
  }) => {
    const now = new Date();
    const today = now.toISOString().split('T')[0];

    const newSession: FlashcardSession = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      date: now.toISOString(),
      ...sessionData,
      accuracy: sessionData.cardsReviewed > 0 
        ? Math.round((sessionData.correct / sessionData.cardsReviewed) * 100) 
        : 0,
    };

    setSessions(prev => {
      const updated = [...prev, newSession];
      saveSessions(updated);
      return updated;
    });

    // Update streak
    setStreak(prev => {
      const yesterday = new Date(now);
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];

      let newCurrent = prev.current;
      if (prev.lastDate === today) {
        // Already studied today, no change
        return prev;
      } else if (prev.lastDate === yesterdayStr) {
        // Consecutive day
        newCurrent = prev.current + 1;
      } else {
        // Streak broken or first day
        newCurrent = 1;
      }

      const newStreak = {
        current: newCurrent,
        best: Math.max(prev.best, newCurrent),
        lastDate: today,
      };
      saveStreak(newStreak);
      return newStreak;
    });
  }, [saveSessions, saveStreak]);

  const getDailyStats = useCallback((days: number = 7): DailyStats[] => {
    const result: DailyStats[] = [];
    const now = new Date();

    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];

      const daySessions = sessions.filter(s => 
        s.date.startsWith(dateStr)
      );

      const cardsReviewed = daySessions.reduce((sum, s) => sum + s.cardsReviewed, 0);
      const correct = daySessions.reduce((sum, s) => sum + s.correct, 0);

      result.push({
        date: dateStr,
        cardsReviewed,
        correct,
        accuracy: cardsReviewed > 0 ? Math.round((correct / cardsReviewed) * 100) : 0,
        sessions: daySessions.length,
      });
    }

    return result;
  }, [sessions]);

  const getWeeklyStats = useCallback(() => {
    const dailyStats = getDailyStats(7);
    const totalCards = dailyStats.reduce((sum, d) => sum + d.cardsReviewed, 0);
    const totalCorrect = dailyStats.reduce((sum, d) => sum + d.correct, 0);
    const totalSessions = dailyStats.reduce((sum, d) => sum + d.sessions, 0);
    const daysActive = dailyStats.filter(d => d.cardsReviewed > 0).length;

    return {
      totalCards,
      totalCorrect,
      totalSessions,
      daysActive,
      averageAccuracy: totalCards > 0 ? Math.round((totalCorrect / totalCards) * 100) : 0,
      averageCardsPerDay: daysActive > 0 ? Math.round(totalCards / daysActive) : 0,
    };
  }, [getDailyStats]);

  const getTotalStats = useCallback(() => {
    const totalCards = sessions.reduce((sum, s) => sum + s.cardsReviewed, 0);
    const totalCorrect = sessions.reduce((sum, s) => sum + s.correct, 0);
    const totalSessions = sessions.length;
    const totalTime = sessions.reduce((sum, s) => sum + s.duration, 0);

    return {
      totalCards,
      totalCorrect,
      totalSessions,
      totalTime,
      averageAccuracy: totalCards > 0 ? Math.round((totalCorrect / totalCards) * 100) : 0,
    };
  }, [sessions]);

  const clearHistory = useCallback(() => {
    localStorage.removeItem(HISTORY_KEY);
    localStorage.removeItem(STREAK_KEY);
    setSessions([]);
    setStreak({ current: 0, best: 0, lastDate: '' });
  }, []);

  return {
    sessions,
    streak,
    recordSession,
    getDailyStats,
    getWeeklyStats,
    getTotalStats,
    clearHistory,
  };
};
