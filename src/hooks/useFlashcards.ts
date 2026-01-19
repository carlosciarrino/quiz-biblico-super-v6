import { useState, useEffect, useCallback } from 'react';
import { questions as allQuestions, Question } from '@/data/questions';

export interface Flashcard {
  questionId: number;
  box: number; // Leitner box 1-5 (1 = most frequent review)
  nextReviewDate: string;
  correctStreak: number;
  lastReviewDate: string;
  createdAt: string;
}

const STORAGE_KEY = 'bible_quiz_flashcards';

// Leitner system intervals (in days)
const BOX_INTERVALS = {
  1: 1,   // Review daily
  2: 2,   // Review every 2 days
  3: 4,   // Review every 4 days
  4: 7,   // Review weekly
  5: 14,  // Review every 2 weeks
};

const getNextReviewDate = (box: number): string => {
  const now = new Date();
  const days = BOX_INTERVALS[box as keyof typeof BOX_INTERVALS] || 1;
  now.setDate(now.getDate() + days);
  return now.toISOString();
};

export const useFlashcards = () => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setFlashcards(JSON.parse(stored));
      } catch {
        setFlashcards([]);
      }
    }
  }, []);

  const saveFlashcards = useCallback((newFlashcards: Flashcard[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newFlashcards));
    setFlashcards(newFlashcards);
  }, []);

  const addFlashcard = useCallback((questionId: number) => {
    setFlashcards(prev => {
      // Don't add if already exists
      if (prev.find(f => f.questionId === questionId)) {
        return prev;
      }

      const newFlashcard: Flashcard = {
        questionId,
        box: 1,
        nextReviewDate: new Date().toISOString(),
        correctStreak: 0,
        lastReviewDate: new Date().toISOString(),
        createdAt: new Date().toISOString(),
      };

      const updated = [...prev, newFlashcard];
      saveFlashcards(updated);
      return updated;
    });
  }, [saveFlashcards]);

  const addFlashcardsFromWrongAnswers = useCallback((wrongAnswerIds: number[]) => {
    setFlashcards(prev => {
      const existingIds = new Set(prev.map(f => f.questionId));
      const newCards = wrongAnswerIds
        .filter(id => !existingIds.has(id))
        .map(questionId => ({
          questionId,
          box: 1,
          nextReviewDate: new Date().toISOString(),
          correctStreak: 0,
          lastReviewDate: new Date().toISOString(),
          createdAt: new Date().toISOString(),
        }));

      if (newCards.length === 0) return prev;

      const updated = [...prev, ...newCards];
      saveFlashcards(updated);
      return updated;
    });
  }, [saveFlashcards]);

  const reviewFlashcard = useCallback((questionId: number, wasCorrect: boolean) => {
    setFlashcards(prev => {
      const updated = prev.map(card => {
        if (card.questionId !== questionId) return card;

        if (wasCorrect) {
          // Move to next box (max 5)
          const newBox = Math.min(card.box + 1, 5);
          return {
            ...card,
            box: newBox,
            correctStreak: card.correctStreak + 1,
            nextReviewDate: getNextReviewDate(newBox),
            lastReviewDate: new Date().toISOString(),
          };
        } else {
          // Move back to box 1
          return {
            ...card,
            box: 1,
            correctStreak: 0,
            nextReviewDate: getNextReviewDate(1),
            lastReviewDate: new Date().toISOString(),
          };
        }
      });

      saveFlashcards(updated);
      return updated;
    });
  }, [saveFlashcards]);

  const removeFlashcard = useCallback((questionId: number) => {
    setFlashcards(prev => {
      const updated = prev.filter(f => f.questionId !== questionId);
      saveFlashcards(updated);
      return updated;
    });
  }, [saveFlashcards]);

  const getDueFlashcards = useCallback((): Flashcard[] => {
    const now = new Date();
    return flashcards
      .filter(card => new Date(card.nextReviewDate) <= now)
      .sort((a, b) => {
        // Prioritize lower boxes (need more review)
        if (a.box !== b.box) return a.box - b.box;
        // Then by oldest review date
        return new Date(a.nextReviewDate).getTime() - new Date(b.nextReviewDate).getTime();
      });
  }, [flashcards]);

  const getFlashcardWithQuestion = useCallback((flashcard: Flashcard): { flashcard: Flashcard; question: Question } | null => {
    const question = allQuestions.find(q => q.id === flashcard.questionId);
    if (!question) return null;
    return { flashcard, question };
  }, []);

  const getStats = useCallback(() => {
    const total = flashcards.length;
    const due = getDueFlashcards().length;
    const mastered = flashcards.filter(f => f.box === 5).length;
    const learning = flashcards.filter(f => f.box < 5).length;
    
    const boxDistribution = {
      1: flashcards.filter(f => f.box === 1).length,
      2: flashcards.filter(f => f.box === 2).length,
      3: flashcards.filter(f => f.box === 3).length,
      4: flashcards.filter(f => f.box === 4).length,
      5: flashcards.filter(f => f.box === 5).length,
    };

    return { total, due, mastered, learning, boxDistribution };
  }, [flashcards, getDueFlashcards]);

  const clearAllFlashcards = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setFlashcards([]);
  }, []);

  return {
    flashcards,
    addFlashcard,
    addFlashcardsFromWrongAnswers,
    reviewFlashcard,
    removeFlashcard,
    getDueFlashcards,
    getFlashcardWithQuestion,
    getStats,
    clearAllFlashcards,
  };
};
