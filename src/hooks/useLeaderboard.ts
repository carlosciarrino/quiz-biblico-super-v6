import { useState, useEffect, useCallback } from 'react';

export interface LeaderboardEntry {
  id: string;
  username: string;
  score: number;
  total: number;
  percentage: number;
  category: string;
  date: string;
}

const STORAGE_KEY = 'bible_quiz_leaderboard';
const MAX_ENTRIES = 10;

export const useLeaderboard = () => {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setEntries(JSON.parse(stored));
      } catch {
        setEntries([]);
      }
    }
  }, []);

  const addEntry = useCallback((entry: Omit<LeaderboardEntry, 'id' | 'date'>) => {
    const newEntry: LeaderboardEntry = {
      ...entry,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    };

    setEntries(prev => {
      const updated = [...prev, newEntry]
        .sort((a, b) => b.percentage - a.percentage || b.score - a.score)
        .slice(0, MAX_ENTRIES);
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });

    return newEntry;
  }, []);

  const isHighScore = useCallback((percentage: number) => {
    if (entries.length < MAX_ENTRIES) return true;
    return percentage > (entries[entries.length - 1]?.percentage || 0);
  }, [entries]);

  const clearLeaderboard = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setEntries([]);
  }, []);

  return {
    entries,
    addEntry,
    isHighScore,
    clearLeaderboard,
  };
};
