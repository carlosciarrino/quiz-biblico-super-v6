import { useMemo } from 'react';
import { UserStats } from './useUserStats';

export interface LevelInfo {
  level: number;
  currentXP: number;
  xpForNextLevel: number;
  totalXP: number;
  title: string;
  progress: number;
}

const LEVEL_TITLES = [
  'novice',
  'apprentice',
  'student',
  'scholar',
  'expert',
  'master',
  'sage',
  'prophet',
  'apostle',
  'patriarch'
];

const XP_PER_CORRECT = 10;
const XP_PER_QUIZ = 25;
const XP_PER_PERFECT = 100;
const XP_PER_STREAK_DAY = 15;

export const calculateXP = (stats: UserStats): number => {
  let totalXP = 0;
  
  // XP from correct answers
  totalXP += stats.totalCorrectAnswers * XP_PER_CORRECT;
  
  // XP from completed quizzes
  totalXP += stats.totalQuizzesCompleted * XP_PER_QUIZ;
  
  // XP from perfect scores
  const perfectScores = stats.quizHistory.filter(q => q.percentage === 100).length;
  totalXP += perfectScores * XP_PER_PERFECT;
  
  // XP from streak
  totalXP += stats.streakDays * XP_PER_STREAK_DAY;
  
  return totalXP;
};

export const calculateLevel = (totalXP: number): LevelInfo => {
  // XP required for each level: 100, 250, 500, 850, 1300, 1850, 2500, 3250, 4100, 5050...
  let level = 1;
  let xpRequired = 100;
  let accumulatedXP = 0;
  
  while (totalXP >= accumulatedXP + xpRequired && level < 100) {
    accumulatedXP += xpRequired;
    level++;
    xpRequired = 100 + (level - 1) * 150;
  }
  
  const currentLevelXP = totalXP - accumulatedXP;
  const nextLevelXP = 100 + (level) * 150;
  const progress = Math.min((currentLevelXP / nextLevelXP) * 100, 100);
  
  const titleIndex = Math.min(Math.floor((level - 1) / 10), LEVEL_TITLES.length - 1);
  
  return {
    level,
    currentXP: currentLevelXP,
    xpForNextLevel: nextLevelXP,
    totalXP,
    title: LEVEL_TITLES[titleIndex],
    progress
  };
};

export const useUserLevel = (stats: UserStats): LevelInfo => {
  return useMemo(() => {
    const totalXP = calculateXP(stats);
    return calculateLevel(totalXP);
  }, [stats]);
};
