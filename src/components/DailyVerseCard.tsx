import { useTranslation } from 'react-i18next';
import { useDailyVerse } from '@/hooks/useDailyVerse';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, BookOpen, Sparkles } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const DailyVerseCard = () => {
  const { t, i18n } = useTranslation();
  const { dailyVerse, isFavorite, toggleFavorite } = useDailyVerse();

  if (!dailyVerse) return null;

  const currentLang = i18n.language as 'it' | 'en' | 'es' | 'pt' | 'fr';
  const verseText = dailyVerse.text[currentLang] || dailyVerse.text.en;

  const handleToggleFavorite = () => {
    toggleFavorite(verseText);
    
    if (!isFavorite) {
      toast({
        title: t('dailyVerse.savedToFavorites'),
        description: dailyVerse.reference,
      });
    } else {
      toast({
        title: t('dailyVerse.removedFromFavorites'),
        description: dailyVerse.reference,
      });
    }
  };

  return (
    <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="absolute top-2 right-2">
        <Sparkles className="h-5 w-5 text-primary/40 animate-pulse" />
      </div>
      
      <CardContent className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-primary">
            {t('dailyVerse.title')}
          </h3>
        </div>

        <blockquote className="text-base italic text-foreground/90 mb-3 leading-relaxed">
          "{verseText}"
        </blockquote>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">
            — {dailyVerse.reference}
          </span>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={handleToggleFavorite}
            className={`gap-1.5 transition-all ${
              isFavorite 
                ? 'text-red-500 hover:text-red-600' 
                : 'text-muted-foreground hover:text-red-500'
            }`}
          >
            <Heart 
              className={`h-4 w-4 transition-all ${isFavorite ? 'fill-current' : ''}`} 
            />
            <span className="text-xs">
              {isFavorite ? t('dailyVerse.saved') : t('dailyVerse.save')}
            </span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyVerseCard;
