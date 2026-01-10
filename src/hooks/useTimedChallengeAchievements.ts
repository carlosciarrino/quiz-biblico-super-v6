import { useState, useEffect, useCallback } from 'react';

export interface TimedChallengeAchievement {
  id: string;
  icon: string;
  tier: 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond';
  xpReward: number;
  condition: (stats: TimedChallengeStats) => boolean;
  category: 'score' | 'streak' | 'games' | 'questions' | 'special';
}

export interface TimedChallengeStats {
  highScore: number;
  bestStreak: number;
  totalGamesPlayed: number;
  totalQuestionsAnswered: number;
  totalCorrectAnswers: number;
  reachedHardDifficulty: boolean;
  perfectGames: number;
  totalXpEarned: number;
  consecutiveDaysPlayed: number;
  lastPlayedDate: string | null;
}

const STORAGE_KEY = 'timed_challenge_stats';
const ACHIEVEMENTS_KEY = 'timed_challenge_achievements';

export const timedChallengeAchievements: TimedChallengeAchievement[] = [
  // Score-based achievements
  { id: 'rookie_scorer', icon: '🎯', tier: 'bronze', xpReward: 25, category: 'score', condition: (s) => s.highScore >= 100 },
  { id: 'rising_star', icon: '⭐', tier: 'bronze', xpReward: 50, category: 'score', condition: (s) => s.highScore >= 250 },
  { id: 'point_hunter', icon: '🏹', tier: 'silver', xpReward: 100, category: 'score', condition: (s) => s.highScore >= 500 },
  { id: 'score_master', icon: '👑', tier: 'gold', xpReward: 200, category: 'score', condition: (s) => s.highScore >= 1000 },
  { id: 'legendary_scorer', icon: '🏆', tier: 'platinum', xpReward: 500, category: 'score', condition: (s) => s.highScore >= 2000 },
  { id: 'mythical_scorer', icon: '💫', tier: 'diamond', xpReward: 1000, category: 'score', condition: (s) => s.highScore >= 5000 },
  
  // Streak-based achievements
  { id: 'hot_streak', icon: '🔥', tier: 'bronze', xpReward: 25, category: 'streak', condition: (s) => s.bestStreak >= 5 },
  { id: 'on_fire', icon: '💥', tier: 'silver', xpReward: 75, category: 'streak', condition: (s) => s.bestStreak >= 10 },
  { id: 'unstoppable', icon: '⚡', tier: 'gold', xpReward: 150, category: 'streak', condition: (s) => s.bestStreak >= 15 },
  { id: 'streak_legend', icon: '🌟', tier: 'platinum', xpReward: 300, category: 'streak', condition: (s) => s.bestStreak >= 20 },
  { id: 'streak_god', icon: '🌈', tier: 'diamond', xpReward: 750, category: 'streak', condition: (s) => s.bestStreak >= 30 },
  
  // Games played achievements
  { id: 'first_challenge', icon: '🎮', tier: 'bronze', xpReward: 10, category: 'games', condition: (s) => s.totalGamesPlayed >= 1 },
  { id: 'challenger', icon: '🎲', tier: 'bronze', xpReward: 30, category: 'games', condition: (s) => s.totalGamesPlayed >= 5 },
  { id: 'dedicated', icon: '💪', tier: 'silver', xpReward: 100, category: 'games', condition: (s) => s.totalGamesPlayed >= 20 },
  { id: 'challenge_addict', icon: '🤩', tier: 'gold', xpReward: 250, category: 'games', condition: (s) => s.totalGamesPlayed >= 50 },
  { id: 'challenge_master', icon: '🎖️', tier: 'platinum', xpReward: 500, category: 'games', condition: (s) => s.totalGamesPlayed >= 100 },
  
  // Questions answered achievements
  { id: 'quick_thinker', icon: '🧠', tier: 'bronze', xpReward: 25, category: 'questions', condition: (s) => s.totalQuestionsAnswered >= 50 },
  { id: 'knowledge_seeker', icon: '📖', tier: 'silver', xpReward: 75, category: 'questions', condition: (s) => s.totalQuestionsAnswered >= 200 },
  { id: 'bible_scholar', icon: '📚', tier: 'gold', xpReward: 200, category: 'questions', condition: (s) => s.totalQuestionsAnswered >= 500 },
  { id: 'bible_master', icon: '🎓', tier: 'platinum', xpReward: 400, category: 'questions', condition: (s) => s.totalQuestionsAnswered >= 1000 },
  
  // Special achievements
  { id: 'hard_mode', icon: '😈', tier: 'silver', xpReward: 50, category: 'special', condition: (s) => s.reachedHardDifficulty },
  { id: 'perfectionist', icon: '💎', tier: 'gold', xpReward: 150, category: 'special', condition: (s) => s.perfectGames >= 1 },
  { id: 'flawless', icon: '✨', tier: 'platinum', xpReward: 300, category: 'special', condition: (s) => s.perfectGames >= 5 },
  { id: 'divine_perfection', icon: '👼', tier: 'diamond', xpReward: 750, category: 'special', condition: (s) => s.perfectGames >= 10 },
  { id: 'daily_warrior', icon: '📅', tier: 'silver', xpReward: 100, category: 'special', condition: (s) => s.consecutiveDaysPlayed >= 7 },
  { id: 'monthly_devotion', icon: '🗓️', tier: 'gold', xpReward: 300, category: 'special', condition: (s) => s.consecutiveDaysPlayed >= 30 },
];

const defaultStats: TimedChallengeStats = {
  highScore: 0,
  bestStreak: 0,
  totalGamesPlayed: 0,
  totalQuestionsAnswered: 0,
  totalCorrectAnswers: 0,
  reachedHardDifficulty: false,
  perfectGames: 0,
  totalXpEarned: 0,
  consecutiveDaysPlayed: 0,
  lastPlayedDate: null,
};

export const useTimedChallengeAchievements = () => {
  const [stats, setStats] = useState<TimedChallengeStats>(defaultStats);
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);
  const [newlyUnlocked, setNewlyUnlocked] = useState<TimedChallengeAchievement[]>([]);

  // Load stats and achievements from localStorage
  useEffect(() => {
    const savedStats = localStorage.getItem(STORAGE_KEY);
    if (savedStats) {
      try {
        setStats({ ...defaultStats, ...JSON.parse(savedStats) });
      } catch {
        setStats(defaultStats);
      }
    }

    const savedAchievements = localStorage.getItem(ACHIEVEMENTS_KEY);
    if (savedAchievements) {
      try {
        setUnlockedAchievements(JSON.parse(savedAchievements));
      } catch {
        setUnlockedAchievements([]);
      }
    }
  }, []);

  // Check for new achievements
  const checkAchievements = useCallback((currentStats: TimedChallengeStats): TimedChallengeAchievement[] => {
    const newUnlocks: TimedChallengeAchievement[] = [];
    
    timedChallengeAchievements.forEach((achievement) => {
      if (!unlockedAchievements.includes(achievement.id) && achievement.condition(currentStats)) {
        newUnlocks.push(achievement);
      }
    });

    if (newUnlocks.length > 0) {
      const newUnlockedIds = [...unlockedAchievements, ...newUnlocks.map((a) => a.id)];
      setUnlockedAchievements(newUnlockedIds);
      localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(newUnlockedIds));
      setNewlyUnlocked(newUnlocks);
      
      // Award XP for achievements
      const totalXpReward = newUnlocks.reduce((sum, a) => sum + a.xpReward, 0);
      if (totalXpReward > 0) {
        const updatedStats = {
          ...currentStats,
          totalXpEarned: currentStats.totalXpEarned + totalXpReward,
        };
        setStats(updatedStats);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedStats));
        
        // Also update main user stats XP
        try {
          const mainStats = localStorage.getItem('bible_quiz_stats');
          if (mainStats) {
            const parsed = JSON.parse(mainStats);
            parsed.totalXP = (parsed.totalXP || 0) + totalXpReward;
            localStorage.setItem('bible_quiz_stats', JSON.stringify(parsed));
          }
        } catch {
          // Ignore errors
        }
      }
    }

    return newUnlocks;
  }, [unlockedAchievements]);

  // Check consecutive days
  const checkConsecutiveDays = useCallback((lastDate: string | null): number => {
    const today = new Date().toDateString();
    
    if (!lastDate) {
      return 1;
    }
    
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (lastDate === today) {
      return stats.consecutiveDaysPlayed;
    } else if (lastDate === yesterday.toDateString()) {
      return stats.consecutiveDaysPlayed + 1;
    } else {
      return 1;
    }
  }, [stats.consecutiveDaysPlayed]);

  // Record game result
  const recordGameResult = useCallback((result: {
    score: number;
    bestStreak: number;
    questionsAnswered: number;
    correctAnswers: number;
    reachedHard: boolean;
    isPerfect: boolean;
  }) => {
    const today = new Date().toDateString();
    const consecutiveDays = checkConsecutiveDays(stats.lastPlayedDate);
    
    const newStats: TimedChallengeStats = {
      highScore: Math.max(stats.highScore, result.score),
      bestStreak: Math.max(stats.bestStreak, result.bestStreak),
      totalGamesPlayed: stats.totalGamesPlayed + 1,
      totalQuestionsAnswered: stats.totalQuestionsAnswered + result.questionsAnswered,
      totalCorrectAnswers: stats.totalCorrectAnswers + result.correctAnswers,
      reachedHardDifficulty: stats.reachedHardDifficulty || result.reachedHard,
      perfectGames: stats.perfectGames + (result.isPerfect ? 1 : 0),
      totalXpEarned: stats.totalXpEarned,
      consecutiveDaysPlayed: consecutiveDays,
      lastPlayedDate: today,
    };

    setStats(newStats);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newStats));
    
    // Also update the legacy high score for backwards compatibility
    if (result.score > stats.highScore) {
      localStorage.setItem('timed_challenge_high_score', result.score.toString());
    }

    return checkAchievements(newStats);
  }, [stats, checkAchievements, checkConsecutiveDays]);

  const clearNewlyUnlocked = useCallback(() => {
    setNewlyUnlocked([]);
  }, []);

  const getAchievementProgress = useCallback((achievementId: string): { current: number; target: number } | null => {
    switch (achievementId) {
      case 'rookie_scorer': return { current: stats.highScore, target: 100 };
      case 'rising_star': return { current: stats.highScore, target: 250 };
      case 'point_hunter': return { current: stats.highScore, target: 500 };
      case 'score_master': return { current: stats.highScore, target: 1000 };
      case 'legendary_scorer': return { current: stats.highScore, target: 2000 };
      case 'mythical_scorer': return { current: stats.highScore, target: 5000 };
      case 'hot_streak': return { current: stats.bestStreak, target: 5 };
      case 'on_fire': return { current: stats.bestStreak, target: 10 };
      case 'unstoppable': return { current: stats.bestStreak, target: 15 };
      case 'streak_legend': return { current: stats.bestStreak, target: 20 };
      case 'streak_god': return { current: stats.bestStreak, target: 30 };
      case 'first_challenge': return { current: stats.totalGamesPlayed, target: 1 };
      case 'challenger': return { current: stats.totalGamesPlayed, target: 5 };
      case 'dedicated': return { current: stats.totalGamesPlayed, target: 20 };
      case 'challenge_addict': return { current: stats.totalGamesPlayed, target: 50 };
      case 'challenge_master': return { current: stats.totalGamesPlayed, target: 100 };
      case 'quick_thinker': return { current: stats.totalQuestionsAnswered, target: 50 };
      case 'knowledge_seeker': return { current: stats.totalQuestionsAnswered, target: 200 };
      case 'bible_scholar': return { current: stats.totalQuestionsAnswered, target: 500 };
      case 'bible_master': return { current: stats.totalQuestionsAnswered, target: 1000 };
      case 'perfectionist': return { current: stats.perfectGames, target: 1 };
      case 'flawless': return { current: stats.perfectGames, target: 5 };
      case 'divine_perfection': return { current: stats.perfectGames, target: 10 };
      case 'daily_warrior': return { current: stats.consecutiveDaysPlayed, target: 7 };
      case 'monthly_devotion': return { current: stats.consecutiveDaysPlayed, target: 30 };
      default: return null;
    }
  }, [stats]);

  const getTotalXpFromAchievements = useCallback(() => {
    return unlockedAchievements.reduce((total, id) => {
      const achievement = timedChallengeAchievements.find(a => a.id === id);
      return total + (achievement?.xpReward || 0);
    }, 0);
  }, [unlockedAchievements]);

  const getNextAchievementsByCategory = useCallback((category: string, limit = 2) => {
    return timedChallengeAchievements
      .filter(a => a.category === category && !unlockedAchievements.includes(a.id))
      .slice(0, limit);
  }, [unlockedAchievements]);

  return {
    stats,
    unlockedAchievements,
    newlyUnlocked,
    recordGameResult,
    clearNewlyUnlocked,
    getAchievementProgress,
    getTotalXpFromAchievements,
    getNextAchievementsByCategory,
  };
};
