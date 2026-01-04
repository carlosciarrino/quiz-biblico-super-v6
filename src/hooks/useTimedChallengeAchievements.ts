import { useState, useEffect, useCallback } from 'react';

export interface TimedChallengeAchievement {
  id: string;
  icon: string;
  tier: 'bronze' | 'silver' | 'gold' | 'platinum';
  condition: (stats: TimedChallengeStats) => boolean;
}

export interface TimedChallengeStats {
  highScore: number;
  bestStreak: number;
  totalGamesPlayed: number;
  totalQuestionsAnswered: number;
  totalCorrectAnswers: number;
  reachedHardDifficulty: boolean;
  perfectGames: number; // Games with 0 wrong answers and 10+ questions
}

const STORAGE_KEY = 'timed_challenge_stats';
const ACHIEVEMENTS_KEY = 'timed_challenge_achievements';

export const timedChallengeAchievements: TimedChallengeAchievement[] = [
  // Score-based achievements
  { id: 'rookie_scorer', icon: '🎯', tier: 'bronze', condition: (s) => s.highScore >= 100 },
  { id: 'rising_star', icon: '⭐', tier: 'bronze', condition: (s) => s.highScore >= 250 },
  { id: 'point_hunter', icon: '🏹', tier: 'silver', condition: (s) => s.highScore >= 500 },
  { id: 'score_master', icon: '👑', tier: 'gold', condition: (s) => s.highScore >= 1000 },
  { id: 'legendary_scorer', icon: '🏆', tier: 'platinum', condition: (s) => s.highScore >= 2000 },
  
  // Streak-based achievements
  { id: 'hot_streak', icon: '🔥', tier: 'bronze', condition: (s) => s.bestStreak >= 5 },
  { id: 'on_fire', icon: '💥', tier: 'silver', condition: (s) => s.bestStreak >= 10 },
  { id: 'unstoppable', icon: '⚡', tier: 'gold', condition: (s) => s.bestStreak >= 15 },
  { id: 'streak_legend', icon: '🌟', tier: 'platinum', condition: (s) => s.bestStreak >= 20 },
  
  // Games played achievements
  { id: 'first_challenge', icon: '🎮', tier: 'bronze', condition: (s) => s.totalGamesPlayed >= 1 },
  { id: 'challenger', icon: '🎲', tier: 'bronze', condition: (s) => s.totalGamesPlayed >= 5 },
  { id: 'dedicated', icon: '💪', tier: 'silver', condition: (s) => s.totalGamesPlayed >= 20 },
  { id: 'challenge_addict', icon: '🤩', tier: 'gold', condition: (s) => s.totalGamesPlayed >= 50 },
  
  // Questions answered achievements
  { id: 'quick_thinker', icon: '🧠', tier: 'bronze', condition: (s) => s.totalQuestionsAnswered >= 50 },
  { id: 'knowledge_seeker', icon: '📖', tier: 'silver', condition: (s) => s.totalQuestionsAnswered >= 200 },
  { id: 'bible_scholar', icon: '📚', tier: 'gold', condition: (s) => s.totalQuestionsAnswered >= 500 },
  
  // Special achievements
  { id: 'hard_mode', icon: '😈', tier: 'silver', condition: (s) => s.reachedHardDifficulty },
  { id: 'perfectionist', icon: '💎', tier: 'gold', condition: (s) => s.perfectGames >= 1 },
  { id: 'flawless', icon: '✨', tier: 'platinum', condition: (s) => s.perfectGames >= 5 },
];

const defaultStats: TimedChallengeStats = {
  highScore: 0,
  bestStreak: 0,
  totalGamesPlayed: 0,
  totalQuestionsAnswered: 0,
  totalCorrectAnswers: 0,
  reachedHardDifficulty: false,
  perfectGames: 0,
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
        setStats(JSON.parse(savedStats));
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
    }

    return newUnlocks;
  }, [unlockedAchievements]);

  // Record game result
  const recordGameResult = useCallback((result: {
    score: number;
    bestStreak: number;
    questionsAnswered: number;
    correctAnswers: number;
    reachedHard: boolean;
    isPerfect: boolean;
  }) => {
    const newStats: TimedChallengeStats = {
      highScore: Math.max(stats.highScore, result.score),
      bestStreak: Math.max(stats.bestStreak, result.bestStreak),
      totalGamesPlayed: stats.totalGamesPlayed + 1,
      totalQuestionsAnswered: stats.totalQuestionsAnswered + result.questionsAnswered,
      totalCorrectAnswers: stats.totalCorrectAnswers + result.correctAnswers,
      reachedHardDifficulty: stats.reachedHardDifficulty || result.reachedHard,
      perfectGames: stats.perfectGames + (result.isPerfect ? 1 : 0),
    };

    setStats(newStats);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newStats));
    
    // Also update the legacy high score for backwards compatibility
    if (result.score > stats.highScore) {
      localStorage.setItem('timed_challenge_high_score', result.score.toString());
    }

    return checkAchievements(newStats);
  }, [stats, checkAchievements]);

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
      case 'hot_streak': return { current: stats.bestStreak, target: 5 };
      case 'on_fire': return { current: stats.bestStreak, target: 10 };
      case 'unstoppable': return { current: stats.bestStreak, target: 15 };
      case 'streak_legend': return { current: stats.bestStreak, target: 20 };
      case 'first_challenge': return { current: stats.totalGamesPlayed, target: 1 };
      case 'challenger': return { current: stats.totalGamesPlayed, target: 5 };
      case 'dedicated': return { current: stats.totalGamesPlayed, target: 20 };
      case 'challenge_addict': return { current: stats.totalGamesPlayed, target: 50 };
      case 'quick_thinker': return { current: stats.totalQuestionsAnswered, target: 50 };
      case 'knowledge_seeker': return { current: stats.totalQuestionsAnswered, target: 200 };
      case 'bible_scholar': return { current: stats.totalQuestionsAnswered, target: 500 };
      default: return null;
    }
  }, [stats]);

  return {
    stats,
    unlockedAchievements,
    newlyUnlocked,
    recordGameResult,
    clearNewlyUnlocked,
    getAchievementProgress,
  };
};
