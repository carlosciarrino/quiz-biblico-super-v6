import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Book, Heart, Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import VerseSearch from "@/components/VerseSearch";
import { useToast } from "@/hooks/use-toast";

interface FavoriteVerse {
  id: string;
  reference: string;
  note: string;
}

const BibleReader = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [favorites, setFavorites] = useState<FavoriteVerse[]>(() => {
    const saved = localStorage.getItem("bible-favorites");
    return saved ? JSON.parse(saved) : [];
  });
  
  const [newReference, setNewReference] = useState("");
  const [newNote, setNewNote] = useState("");

  const saveFavorites = (newFavorites: FavoriteVerse[]) => {
    localStorage.setItem("bible-favorites", JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };

  const addFavorite = () => {
    if (!newReference.trim()) {
      toast({
        title: t('bible.error'),
        description: t('bible.enterReference'),
        variant: "destructive",
      });
      return;
    }

    const favorite: FavoriteVerse = {
      id: Date.now().toString(),
      reference: newReference,
      note: newNote,
    };

    saveFavorites([...favorites, favorite]);
    setNewReference("");
    setNewNote("");
    
    toast({
      title: t('bible.saved'),
      description: t('bible.verseSaved'),
    });
  };

  const deleteFavorite = (id: string) => {
    saveFavorites(favorites.filter(f => f.id !== id));
    toast({
      title: t('bible.deleted'),
      description: t('bible.verseDeleted'),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('quiz.backToMenu')}
          </Button>
          <LanguageSwitcher />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <header className="text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-white mb-4">
              <Book className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold mb-2">{t('bible.title')}</h1>
            <p className="text-muted-foreground">{t('bible.subtitle')}</p>
          </header>

          {/* Verse Search */}
          <div className="animate-scale-in">
            <VerseSearch />
          </div>

          {/* Link to Bible.com */}
          <Card className="p-6 animate-scale-in" style={{ animationDelay: "50ms" }}>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Book className="w-5 h-5 text-primary" />
              {t('bible.readOnline')}
            </h2>
            <p className="text-muted-foreground mb-4">
              {t('bible.readDescription')}
            </p>
            <Button
              onClick={() => window.open('https://www.bible.com', '_blank')}
              className="w-full gap-2"
            >
              {t('bible.openBible')}
              <ExternalLink className="w-4 h-4" />
            </Button>
          </Card>

          {/* Favorite Verses Section */}
          <Card className="p-6 animate-scale-in" style={{ animationDelay: "100ms" }}>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              {t('bible.favorites')}
            </h2>
            
            <div className="space-y-4 mb-6">
              <Input
                placeholder={t('bible.referencePlaceholder')}
                value={newReference}
                onChange={(e) => setNewReference(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addFavorite()}
              />
              <Input
                placeholder={t('bible.notePlaceholder')}
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addFavorite()}
              />
              <Button onClick={addFavorite} className="w-full">
                {t('bible.addFavorite')}
              </Button>
            </div>

            {favorites.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                {t('bible.noFavorites')}
              </p>
            ) : (
              <div className="space-y-3">
                {favorites.map((favorite) => (
                  <div
                    key={favorite.id}
                    className="flex items-start justify-between p-4 bg-secondary/50 rounded-lg"
                  >
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{favorite.reference}</p>
                      {favorite.note && (
                        <p className="text-sm text-muted-foreground mt-1">{favorite.note}</p>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteFavorite(favorite.id)}
                      className="ml-2"
                    >
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BibleReader;
