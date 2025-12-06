import { useTranslation } from 'react-i18next';
import { useDailyVerse } from '@/hooks/useDailyVerse';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, BookOpen, Sparkles, Share2, Twitter, Facebook, MessageCircle, Link } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { toast as sonnerToast } from 'sonner';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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

  const shareText = `"${verseText}" - ${dailyVerse.reference}`;
  const shareUrl = window.location.origin;

  const shareLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`,
      color: "hover:bg-[#1DA1F2]/10 hover:text-[#1DA1F2]"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(shareText)}`,
      color: "hover:bg-[#4267B2]/10 hover:text-[#4267B2]"
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodeURIComponent(shareText)}`,
      color: "hover:bg-[#25D366]/10 hover:text-[#25D366]"
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      sonnerToast.success(t('share.copied'));
    } catch (err) {
      sonnerToast.error(t('share.copyError'));
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
          
          <div className="flex items-center gap-1">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1.5 text-muted-foreground hover:text-primary"
                >
                  <Share2 className="h-4 w-4" />
                  <span className="text-xs hidden sm:inline">{t('dailyVerse.share')}</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-2" align="end">
                <div className="flex gap-1">
                  {shareLinks.map((link) => (
                    <Button
                      key={link.name}
                      variant="ghost"
                      size="icon"
                      className={`rounded-full transition-colors ${link.color}`}
                      onClick={() => window.open(link.url, '_blank', 'width=600,height=400')}
                      title={link.name}
                    >
                      <link.icon className="w-4 h-4" />
                    </Button>
                  ))}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-primary/10 hover:text-primary"
                    onClick={copyToClipboard}
                    title={t('share.copyLink')}
                  >
                    <Link className="w-4 h-4" />
                  </Button>
                </div>
              </PopoverContent>
            </Popover>

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
              <span className="text-xs hidden sm:inline">
                {isFavorite ? t('dailyVerse.saved') : t('dailyVerse.save')}
              </span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyVerseCard;
