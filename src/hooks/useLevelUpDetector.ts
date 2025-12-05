import { useState, useEffect, useCallback } from 'react';
import { LevelInfo, calculateLevel, calculateXP } from './useUserLevel';
import { UserStats } from './useUserStats';

interface LevelUpState {
  showLevelUp: boolean;
  newLevel: number;
  newTitle: string;
}

const STORAGE_KEY = 'bible-quiz-last-level';

export const useLevelUpDetector = (stats: UserStats) => {
  const [levelUpState, setLevelUpState] = useState<LevelUpState>({
    showLevelUp: false,
    newLevel: 1,
    newTitle: 'novice'
  });

  useEffect(() => {
    const currentXP = calculateXP(stats);
    const currentLevelInfo = calculateLevel(currentXP);
    
    const storedLevel = localStorage.getItem(STORAGE_KEY);
    const lastLevel = storedLevel ? parseInt(storedLevel, 10) : 1;
    
    if (currentLevelInfo.level > lastLevel && stats.totalQuizzesCompleted > 0) {
      // Level up detected!
      setLevelUpState({
        showLevelUp: true,
        newLevel: currentLevelInfo.level,
        newTitle: currentLevelInfo.title
      });
      localStorage.setItem(STORAGE_KEY, currentLevelInfo.level.toString());
    } else if (!storedLevel && stats.totalQuizzesCompleted === 0) {
      // Initialize for new users
      localStorage.setItem(STORAGE_KEY, '1');
    } else if (currentLevelInfo.level !== lastLevel) {
      // Sync storage with current level
      localStorage.setItem(STORAGE_KEY, currentLevelInfo.level.toString());
    }
  }, [stats]);

  const closeLevelUp = useCallback(() => {
    setLevelUpState(prev => ({ ...prev, showLevelUp: false }));
  }, []);

  return {
    ...levelUpState,
    closeLevelUp
  };
};
