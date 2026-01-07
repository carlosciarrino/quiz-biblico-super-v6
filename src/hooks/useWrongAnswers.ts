import { useState, useEffect, useCallback } from 'react';

export interface WrongAnswer {
  questionId: number;
  wrongAnswerIndex: number;
  correctAnswerIndex: number;
  timestamp: string;
  attempts: number;
}

const STORAGE_KEY = 'bible_quiz_wrong_answers';

export const useWrongAnswers = () => {
  const [wrongAnswers, setWrongAnswers] = useState<WrongAnswer[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setWrongAnswers(JSON.parse(stored));
      } catch {
        setWrongAnswers([]);
      }
    }
  }, []);

  const saveWrongAnswers = useCallback((newWrongAnswers: WrongAnswer[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newWrongAnswers));
    setWrongAnswers(newWrongAnswers);
  }, []);

  const recordWrongAnswer = useCallback((questionId: number, wrongAnswerIndex: number, correctAnswerIndex: number) => {
    setWrongAnswers(prev => {
      const existing = prev.find(wa => wa.questionId === questionId);
      let updated: WrongAnswer[];

      if (existing) {
        // Increment attempts for existing wrong answer
        updated = prev.map(wa =>
          wa.questionId === questionId
            ? { ...wa, attempts: wa.attempts + 1, timestamp: new Date().toISOString() }
            : wa
        );
      } else {
        // Add new wrong answer
        updated = [
          ...prev,
          {
            questionId,
            wrongAnswerIndex,
            correctAnswerIndex,
            timestamp: new Date().toISOString(),
            attempts: 1,
          },
        ];
      }

      saveWrongAnswers(updated);
      return updated;
    });
  }, [saveWrongAnswers]);

  const removeWrongAnswer = useCallback((questionId: number) => {
    setWrongAnswers(prev => {
      const updated = prev.filter(wa => wa.questionId !== questionId);
      saveWrongAnswers(updated);
      return updated;
    });
  }, [saveWrongAnswers]);

  const getReviewQuestions = useCallback((limit: number = 10): number[] => {
    // Sort by attempts (most attempts first) and then by timestamp (oldest first)
    return [...wrongAnswers]
      .sort((a, b) => {
        if (b.attempts !== a.attempts) return b.attempts - a.attempts;
        return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
      })
      .slice(0, limit)
      .map(wa => wa.questionId);
  }, [wrongAnswers]);

  const clearAllWrongAnswers = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setWrongAnswers([]);
  }, []);

  return {
    wrongAnswers,
    recordWrongAnswer,
    removeWrongAnswer,
    getReviewQuestions,
    clearAllWrongAnswers,
    totalWrongAnswers: wrongAnswers.length,
  };
};
