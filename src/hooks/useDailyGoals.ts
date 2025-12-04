import { useState, useEffect, useCallback } from 'react';

export interface DailyGoals {
  quizzesTarget: number;
  quizzesCompleted: number;
  readingsTarget: number;
  readingsCompleted: number;
  date: string;
}

export interface WeeklyGoals {
  quizzesTarget: number;
  quizzesCompleted: number;
  readingsTarget: number;
  readingsCompleted: number;
  weekStart: string;
}

export interface GoalsState {
  daily: DailyGoals;
  weekly: WeeklyGoals;
  dailyStreak: number;
  weeklyStreak: number;
}

const STORAGE_KEY = 'bible_quiz_goals';

const getWeekStart = (date: Date): string => {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  d.setDate(diff);
  return d.toISOString().split('T')[0];
};

const defaultGoals: GoalsState = {
  daily: {
    quizzesTarget: 1,
    quizzesCompleted: 0,
    readingsTarget: 1,
    readingsCompleted: 0,
    date: new Date().toISOString().split('T')[0],
  },
  weekly: {
    quizzesTarget: 5,
    quizzesCompleted: 0,
    readingsTarget: 5,
    readingsCompleted: 0,
    weekStart: getWeekStart(new Date()),
  },
  dailyStreak: 0,
  weeklyStreak: 0,
};

export const useDailyGoals = () => {
  const [goals, setGoals] = useState<GoalsState>(defaultGoals);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const today = new Date().toISOString().split('T')[0];
        const currentWeekStart = getWeekStart(new Date());
        
        // Check if we need to reset daily goals
        if (parsed.daily.date !== today) {
          const wasGoalMet = parsed.daily.quizzesCompleted >= parsed.daily.quizzesTarget;
          parsed.daily = {
            ...defaultGoals.daily,
            date: today,
          };
          parsed.dailyStreak = wasGoalMet ? parsed.dailyStreak + 1 : 0;
        }
        
        // Check if we need to reset weekly goals
        if (parsed.weekly.weekStart !== currentWeekStart) {
          const wasWeeklyMet = parsed.weekly.quizzesCompleted >= parsed.weekly.quizzesTarget;
          parsed.weekly = {
            ...defaultGoals.weekly,
            weekStart: currentWeekStart,
          };
          parsed.weeklyStreak = wasWeeklyMet ? parsed.weeklyStreak + 1 : 0;
        }
        
        setGoals(parsed);
      } catch {
        setGoals(defaultGoals);
      }
    }
  }, []);

  const saveGoals = useCallback((newGoals: GoalsState) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newGoals));
    setGoals(newGoals);
  }, []);

  const recordQuizCompletion = useCallback(() => {
    setGoals(prev => {
      const updated = {
        ...prev,
        daily: {
          ...prev.daily,
          quizzesCompleted: prev.daily.quizzesCompleted + 1,
        },
        weekly: {
          ...prev.weekly,
          quizzesCompleted: prev.weekly.quizzesCompleted + 1,
        },
      };
      saveGoals(updated);
      return updated;
    });
  }, [saveGoals]);

  const recordReadingCompletion = useCallback(() => {
    setGoals(prev => {
      const updated = {
        ...prev,
        daily: {
          ...prev.daily,
          readingsCompleted: prev.daily.readingsCompleted + 1,
        },
        weekly: {
          ...prev.weekly,
          readingsCompleted: prev.weekly.readingsCompleted + 1,
        },
      };
      saveGoals(updated);
      return updated;
    });
  }, [saveGoals]);

  const setDailyTargets = useCallback((quizzes: number, readings: number) => {
    setGoals(prev => {
      const updated = {
        ...prev,
        daily: {
          ...prev.daily,
          quizzesTarget: quizzes,
          readingsTarget: readings,
        },
      };
      saveGoals(updated);
      return updated;
    });
  }, [saveGoals]);

  const setWeeklyTargets = useCallback((quizzes: number, readings: number) => {
    setGoals(prev => {
      const updated = {
        ...prev,
        weekly: {
          ...prev.weekly,
          quizzesTarget: quizzes,
          readingsTarget: readings,
        },
      };
      saveGoals(updated);
      return updated;
    });
  }, [saveGoals]);

  const isDailyGoalMet = goals.daily.quizzesCompleted >= goals.daily.quizzesTarget;
  const isWeeklyGoalMet = goals.weekly.quizzesCompleted >= goals.weekly.quizzesTarget;

  return {
    goals,
    recordQuizCompletion,
    recordReadingCompletion,
    setDailyTargets,
    setWeeklyTargets,
    isDailyGoalMet,
    isWeeklyGoalMet,
  };
};
