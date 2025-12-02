import { useState, useEffect, useCallback } from 'react';

export interface QuizResult {
  category: string;
  score: number;
  total: number;
  percentage: number;
  date: string;
}

export interface CategoryStats {
  quizzesCompleted: number;
  totalScore: number;
  totalPossible: number;
  averagePercentage: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: string;
  condition: (stats: UserStats) => boolean;
}

export interface UserStats {
  totalQuizzesCompleted: number;
  totalQuestionsAnswered: number;
  totalCorrectAnswers: number;
  totalIncorrectAnswers: number;
  overallAveragePercentage: number;
  categoryStats: Record<string, CategoryStats>;
  quizHistory: QuizResult[];
  achievements: string[];
  streakDays: number;
  lastPlayedDate: string;
}

const STORAGE_KEY = 'bible_quiz_user_stats';

const defaultStats: UserStats = {
  totalQuizzesCompleted: 0,
  totalQuestionsAnswered: 0,
  totalCorrectAnswers: 0,
  totalIncorrectAnswers: 0,
  overallAveragePercentage: 0,
  categoryStats: {},
  quizHistory: [],
  achievements: [],
  streakDays: 0,
  lastPlayedDate: '',
};

export const achievements: Achievement[] = [
  {
    id: 'first_quiz',
    name: 'firstQuiz',
    description: 'firstQuizDesc',
    icon: '🎯',
    condition: (stats) => stats.totalQuizzesCompleted >= 1,
  },
  {
    id: 'five_quizzes',
    name: 'fiveQuizzes',
    description: 'fiveQuizzesDesc',
    icon: '📚',
    condition: (stats) => stats.totalQuizzesCompleted >= 5,
  },
  {
    id: 'ten_quizzes',
    name: 'tenQuizzes',
    description: 'tenQuizzesDesc',
    icon: '🏆',
    condition: (stats) => stats.totalQuizzesCompleted >= 10,
  },
  {
    id: 'perfect_score',
    name: 'perfectScore',
    description: 'perfectScoreDesc',
    icon: '⭐',
    condition: (stats) => stats.quizHistory.some(q => q.percentage === 100),
  },
  {
    id: 'scholar',
    name: 'scholar',
    description: 'scholarDesc',
    icon: '🎓',
    condition: (stats) => stats.overallAveragePercentage >= 80,
  },
  {
    id: 'explorer',
    name: 'explorer',
    description: 'explorerDesc',
    icon: '🗺️',
    condition: (stats) => Object.keys(stats.categoryStats).length >= 5,
  },
  {
    id: 'dedicated',
    name: 'dedicated',
    description: 'dedicatedDesc',
    icon: '🔥',
    condition: (stats) => stats.streakDays >= 3,
  },
  {
    id: 'master',
    name: 'master',
    description: 'masterDesc',
    icon: '👑',
    condition: (stats) => stats.totalQuestionsAnswered >= 500,
  },
];

export const useUserStats = () => {
  const [stats, setStats] = useState<UserStats>(defaultStats);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setStats(JSON.parse(stored));
      } catch {
        setStats(defaultStats);
      }
    }
  }, []);

  const saveStats = useCallback((newStats: UserStats) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newStats));
    setStats(newStats);
  }, []);

  const recordQuizResult = useCallback((result: QuizResult) => {
    setStats(prev => {
      const today = new Date().toISOString().split('T')[0];
      const lastPlayed = prev.lastPlayedDate;
      
      // Calculate streak
      let newStreak = prev.streakDays;
      if (lastPlayed) {
        const lastDate = new Date(lastPlayed);
        const todayDate = new Date(today);
        const diffDays = Math.floor((todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) {
          newStreak = prev.streakDays + 1;
        } else if (diffDays > 1) {
          newStreak = 1;
        }
      } else {
        newStreak = 1;
      }

      // Update category stats
      const categoryStats = { ...prev.categoryStats };
      const existingCat = categoryStats[result.category] || {
        quizzesCompleted: 0,
        totalScore: 0,
        totalPossible: 0,
        averagePercentage: 0,
      };
      
      categoryStats[result.category] = {
        quizzesCompleted: existingCat.quizzesCompleted + 1,
        totalScore: existingCat.totalScore + result.score,
        totalPossible: existingCat.totalPossible + result.total,
        averagePercentage: Math.round(
          ((existingCat.totalScore + result.score) / (existingCat.totalPossible + result.total)) * 100
        ),
      };

      const correctAnswers = Math.round((result.percentage / 100) * (result.total / 5));
      const incorrectAnswers = (result.total / 5) - correctAnswers;

      const newStats: UserStats = {
        totalQuizzesCompleted: prev.totalQuizzesCompleted + 1,
        totalQuestionsAnswered: prev.totalQuestionsAnswered + (result.total / 5),
        totalCorrectAnswers: prev.totalCorrectAnswers + correctAnswers,
        totalIncorrectAnswers: prev.totalIncorrectAnswers + incorrectAnswers,
        overallAveragePercentage: 0,
        categoryStats,
        quizHistory: [...prev.quizHistory.slice(-49), result],
        achievements: prev.achievements,
        streakDays: newStreak,
        lastPlayedDate: today,
      };

      // Calculate overall average
      if (newStats.quizHistory.length > 0) {
        newStats.overallAveragePercentage = Math.round(
          newStats.quizHistory.reduce((sum, q) => sum + q.percentage, 0) / newStats.quizHistory.length
        );
      }

      // Check for new achievements
      const newAchievements = [...prev.achievements];
      achievements.forEach(achievement => {
        if (!newAchievements.includes(achievement.id) && achievement.condition(newStats)) {
          newAchievements.push(achievement.id);
        }
      });
      newStats.achievements = newAchievements;

      saveStats(newStats);
      return newStats;
    });
  }, [saveStats]);

  const getStrongestCategory = useCallback((): string | null => {
    const categories = Object.entries(stats.categoryStats);
    if (categories.length === 0) return null;
    
    return categories.reduce((best, current) => 
      current[1].averagePercentage > best[1].averagePercentage ? current : best
    )[0];
  }, [stats.categoryStats]);

  const getWeakestCategory = useCallback((): string | null => {
    const categories = Object.entries(stats.categoryStats);
    if (categories.length === 0) return null;
    
    return categories.reduce((worst, current) => 
      current[1].averagePercentage < worst[1].averagePercentage ? current : worst
    )[0];
  }, [stats.categoryStats]);

  const resetStats = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setStats(defaultStats);
  }, []);

  return {
    stats,
    recordQuizResult,
    getStrongestCategory,
    getWeakestCategory,
    resetStats,
  };
};
