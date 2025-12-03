import { useState, useEffect, useCallback } from 'react';

export interface Challenge {
  id: string;
  creatorName: string;
  creatorScore: number;
  total: number;
  percentage: number;
  category: string;
  quizType: string;
  createdAt: string;
  attempts: ChallengeAttempt[];
}

export interface ChallengeAttempt {
  name: string;
  score: number;
  percentage: number;
  date: string;
}

const STORAGE_KEY = 'bible_quiz_challenges';

const generateChallengeId = () => {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
};

export const useChallenge = () => {
  const [challenges, setChallenges] = useState<Record<string, Challenge>>({});

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setChallenges(JSON.parse(stored));
      } catch {
        setChallenges({});
      }
    }
  }, []);

  const saveChallenge = useCallback((newChallenges: Record<string, Challenge>) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newChallenges));
    setChallenges(newChallenges);
  }, []);

  const createChallenge = useCallback((data: {
    creatorName: string;
    creatorScore: number;
    total: number;
    percentage: number;
    category: string;
    quizType: string;
  }): string => {
    const id = generateChallengeId();
    const challenge: Challenge = {
      ...data,
      id,
      createdAt: new Date().toISOString(),
      attempts: [],
    };

    const newChallenges = { ...challenges, [id]: challenge };
    saveChallenge(newChallenges);

    return id;
  }, [challenges, saveChallenge]);

  const getChallenge = useCallback((id: string): Challenge | null => {
    return challenges[id] || null;
  }, [challenges]);

  const addAttempt = useCallback((challengeId: string, attempt: ChallengeAttempt) => {
    const challenge = challenges[challengeId];
    if (!challenge) return;

    const updatedChallenge: Challenge = {
      ...challenge,
      attempts: [...challenge.attempts, attempt].sort((a, b) => b.percentage - a.percentage),
    };

    const newChallenges = { ...challenges, [challengeId]: updatedChallenge };
    saveChallenge(newChallenges);
  }, [challenges, saveChallenge]);

  const getChallengeUrl = useCallback((challengeId: string): string => {
    return `${window.location.origin}/?challenge=${challengeId}`;
  }, []);

  return {
    challenges,
    createChallenge,
    getChallenge,
    addAttempt,
    getChallengeUrl,
  };
};
