import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Search, Heart, ExternalLink } from 'lucide-react';
import { dailyVerses } from '@/data/dailyVerses';
import { toast } from 'sonner';

interface FavoriteVerse {
  id: string;
  reference: string;
  note: string;
}

const VerseSearch = () => {
  const { t, i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const currentLang = i18n.language as 'it' | 'en' | 'es' | 'pt' | 'fr';

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    
    return dailyVerses.filter(verse => {
      const text = verse.text[currentLang] || verse.text.en;
      const reference = verse.reference.toLowerCase();
      
      return text.toLowerCase().includes(query) || reference.includes(query);
    });
  }, [searchQuery, currentLang]);

  const addToFavorites = (reference: string, text: string) => {
    const saved = localStorage.getItem('bibleFavorites');
    const favorites: FavoriteVerse[] = saved ? JSON.parse(saved) : [];
    
    const alreadyExists = favorites.some(fav => fav.reference === reference);
    if (alreadyExists) {
      toast.info(t('verseSearch.alreadyFavorite'));
      return;
    }
    
    const newFavorite: FavoriteVerse = {
      id: Date.now().toString(),
      reference,
      note: text
    };
    
    favorites.push(newFavorite);
    localStorage.setItem('bibleFavorites', JSON.stringify(favorites));
    toast.success(t('dailyVerse.savedToFavorites'));
  };

  const openOnBibleCom = (reference: string) => {
    const formattedRef = reference.replace(/\s+/g, '+').replace(':', '.');
    window.open(`https://www.bible.com/search?q=${encodeURIComponent(reference)}`, '_blank');
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Search className="w-5 h-5 text-primary" />
        {t('verseSearch.title')}
      </h2>
      
      <p className="text-muted-foreground text-sm mb-4">
        {t('verseSearch.description')}
      </p>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder={t('verseSearch.placeholder')}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {searchQuery.trim() && (
        <div className="space-y-3">
          {searchResults.length === 0 ? (
            <p className="text-center text-muted-foreground py-4">
              {t('verseSearch.noResults')}
            </p>
          ) : (
            <>
              <p className="text-sm text-muted-foreground mb-2">
                {t('verseSearch.resultsCount', { count: searchResults.length })}
              </p>
              {searchResults.map((verse, index) => {
                const text = verse.text[currentLang] || verse.text.en;
                return (
                  <div
                    key={index}
                    className="p-4 bg-secondary/50 rounded-lg space-y-2"
                  >
                    <p className="font-semibold text-primary">{verse.reference}</p>
                    <p className="text-sm text-foreground/90 italic">"{text}"</p>
                    <div className="flex gap-2 pt-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => addToFavorites(verse.reference, text)}
                        className="gap-1.5 text-muted-foreground hover:text-red-500"
                      >
                        <Heart className="w-3.5 h-3.5" />
                        {t('dailyVerse.save')}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openOnBibleCom(verse.reference)}
                        className="gap-1.5 text-muted-foreground hover:text-primary"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        {t('verseSearch.readMore')}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      )}

      {!searchQuery.trim() && (
        <div className="text-center py-6 text-muted-foreground">
          <Search className="w-12 h-12 mx-auto mb-3 opacity-20" />
          <p className="text-sm">{t('verseSearch.hint')}</p>
        </div>
      )}
    </Card>
  );
};

export default VerseSearch;
