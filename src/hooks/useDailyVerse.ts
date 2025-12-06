import { useState, useEffect, useCallback } from 'react';
import { getDailyVerse, DailyVerse } from '@/data/dailyVerses';

interface FavoriteVerse {
  id: string;
  reference: string;
  note: string;
}

export const useDailyVerse = () => {
  const [dailyVerse, setDailyVerse] = useState<DailyVerse | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const verse = getDailyVerse();
    setDailyVerse(verse);
    
    // Check if this verse is already a favorite
    const savedFavorites = localStorage.getItem('bibleFavorites');
    if (savedFavorites) {
      const favorites: FavoriteVerse[] = JSON.parse(savedFavorites);
      const isAlreadyFavorite = favorites.some(fav => fav.reference === verse.reference);
      setIsFavorite(isAlreadyFavorite);
    }
  }, []);

  const toggleFavorite = useCallback((note: string = '') => {
    if (!dailyVerse) return;

    const savedFavorites = localStorage.getItem('bibleFavorites');
    let favorites: FavoriteVerse[] = savedFavorites ? JSON.parse(savedFavorites) : [];

    if (isFavorite) {
      // Remove from favorites
      favorites = favorites.filter(fav => fav.reference !== dailyVerse.reference);
      setIsFavorite(false);
    } else {
      // Add to favorites
      const newFavorite: FavoriteVerse = {
        id: Date.now().toString(),
        reference: dailyVerse.reference,
        note: note
      };
      favorites.push(newFavorite);
      setIsFavorite(true);
    }

    localStorage.setItem('bibleFavorites', JSON.stringify(favorites));
  }, [dailyVerse, isFavorite]);

  return {
    dailyVerse,
    isFavorite,
    toggleFavorite
  };
};
