import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BookOpen, ExternalLink, Heart, Copy, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import type { KeyVerse } from "@/data/keyVerses";

interface KeyVerseCardProps {
  verse: KeyVerse;
  categoryColor?: string;
}

const KeyVerseCard = ({ verse, categoryColor = "from-primary to-accent" }: KeyVerseCardProps) => {
  const { t, i18n } = useTranslation();
  const [isCopied, setIsCopied] = useState(false);
  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites = JSON.parse(localStorage.getItem("keyVerseFavorites") || "[]");
    return favorites.includes(verse.reference);
  });

  const currentLang = i18n.language as keyof typeof verse.text;
  const verseText = verse.text[currentLang] || verse.text.it;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${verse.reference} - ${verseText}`);
      setIsCopied(true);
      toast.success(t("keyVerses.copied", "Versetto copiato!"));
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      toast.error(t("keyVerses.copyError", "Errore durante la copia"));
    }
  };

  const handleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("keyVerseFavorites") || "[]");
    let newFavorites: string[];
    
    if (isFavorite) {
      newFavorites = favorites.filter((ref: string) => ref !== verse.reference);
      toast.success(t("keyVerses.removedFromFavorites", "Rimosso dai preferiti"));
    } else {
      newFavorites = [...favorites, verse.reference];
      toast.success(t("keyVerses.addedToFavorites", "Aggiunto ai preferiti"));
    }
    
    localStorage.setItem("keyVerseFavorites", JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  const getBibleGatewayLink = () => {
    const ref = verse.reference.replace(/\s+/g, "+");
    return `https://www.biblegateway.com/passage/?search=${ref}&version=NR2006`;
  };

  return (
    <Card className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-0">
        <div className={`h-2 bg-gradient-to-r ${categoryColor}`} />
        <div className="p-4 space-y-3">
          {/* Header */}
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${categoryColor} flex items-center justify-center text-white shrink-0`}>
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">{verse.reference}</h3>
                <Badge variant="secondary" className="text-xs">
                  {verse.theme}
                </Badge>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 shrink-0"
              onClick={handleFavorite}
            >
              <Heart
                className={`w-4 h-4 transition-colors ${
                  isFavorite ? "fill-red-500 text-red-500" : "text-muted-foreground"
                }`}
              />
            </Button>
          </div>

          {/* Verse Text */}
          <blockquote className="text-sm text-foreground/90 italic border-l-2 border-primary/50 pl-3 py-1">
            "{verseText}"
          </blockquote>

          {/* Actions */}
          <div className="flex items-center gap-2 pt-2">
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 flex-1"
              onClick={handleCopy}
            >
              {isCopied ? (
                <Check className="w-3.5 h-3.5" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
              {isCopied ? t("keyVerses.copied", "Copiato") : t("keyVerses.copy", "Copia")}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 flex-1"
              onClick={() => window.open(getBibleGatewayLink(), "_blank")}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              {t("keyVerses.readMore", "Leggi")}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default KeyVerseCard;
