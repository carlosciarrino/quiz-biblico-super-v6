import { useState, useEffect, useCallback } from 'react';

export interface LoginReward {
  day: number;
  xpBonus: number;
  claimed: boolean;
}

export interface DailyLoginState {
  lastLoginDate: string;
  consecutiveDays: number;
  totalLogins: number;
  todayRewardClaimed: boolean;
  currentReward: LoginReward;
}

const STORAGE_KEY = 'bible-quiz-daily-login';

const DAILY_REWARDS = [
  { day: 1, xpBonus: 10 },
  { day: 2, xpBonus: 15 },
  { day: 3, xpBonus: 25 },
  { day: 4, xpBonus: 35 },
  { day: 5, xpBonus: 50 },
  { day: 6, xpBonus: 75 },
  { day: 7, xpBonus: 100 },
];

const getToday = () => new Date().toISOString().split('T')[0];

const defaultState: DailyLoginState = {
  lastLoginDate: '',
  consecutiveDays: 0,
  totalLogins: 0,
  todayRewardClaimed: false,
  currentReward: { day: 1, xpBonus: 10, claimed: false }
};

export const useDailyLoginReward = () => {
  const [state, setState] = useState<DailyLoginState>(defaultState);
  const [showRewardPopup, setShowRewardPopup] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const today = getToday();
    
    if (stored) {
      const parsed: DailyLoginState = JSON.parse(stored);
      const lastLogin = new Date(parsed.lastLoginDate);
      const todayDate = new Date(today);
      const diffDays = Math.floor((todayDate.getTime() - lastLogin.getTime()) / (1000 * 60 * 60 * 24));
      
      if (diffDays === 0) {
        // Same day - no new reward
        setState(parsed);
      } else if (diffDays === 1) {
        // Consecutive day!
        const newConsecutive = parsed.consecutiveDays + 1;
        const dayIndex = (newConsecutive - 1) % 7;
        const reward = DAILY_REWARDS[dayIndex];
        
        const newState: DailyLoginState = {
          lastLoginDate: today,
          consecutiveDays: newConsecutive,
          totalLogins: parsed.totalLogins + 1,
          todayRewardClaimed: false,
          currentReward: { ...reward, claimed: false }
        };
        
        setState(newState);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
        setShowRewardPopup(true);
      } else {
        // Streak broken - reset
        const newState: DailyLoginState = {
          lastLoginDate: today,
          consecutiveDays: 1,
          totalLogins: parsed.totalLogins + 1,
          todayRewardClaimed: false,
          currentReward: { day: 1, xpBonus: 10, claimed: false }
        };
        
        setState(newState);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
        setShowRewardPopup(true);
      }
    } else {
      // First ever login
      const newState: DailyLoginState = {
        lastLoginDate: today,
        consecutiveDays: 1,
        totalLogins: 1,
        todayRewardClaimed: false,
        currentReward: { day: 1, xpBonus: 10, claimed: false }
      };
      
      setState(newState);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
      setShowRewardPopup(true);
    }
  }, []);

  const claimReward = useCallback(() => {
    const newState = {
      ...state,
      todayRewardClaimed: true,
      currentReward: { ...state.currentReward, claimed: true }
    };
    setState(newState);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
    setShowRewardPopup(false);
    
    return state.currentReward.xpBonus;
  }, [state]);

  const closePopup = useCallback(() => {
    setShowRewardPopup(false);
  }, []);

  const getUpcomingRewards = () => {
    const currentDay = state.consecutiveDays;
    return DAILY_REWARDS.map((reward, index) => ({
      ...reward,
      isToday: (currentDay - 1) % 7 === index,
      isPast: index < (currentDay - 1) % 7,
      isFuture: index > (currentDay - 1) % 7
    }));
  };

  return {
    state,
    showRewardPopup,
    claimReward,
    closePopup,
    getUpcomingRewards
  };
};
