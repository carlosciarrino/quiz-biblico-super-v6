import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles, Star, Trophy, ArrowUp } from "lucide-react";
import { fireGoldConfetti } from "@/lib/confetti";

interface LevelUpAnimationProps {
  open: boolean;
  onClose: () => void;
  newLevel: number;
  title: string;
}

const LevelUpAnimation = ({ open, onClose, newLevel, title }: LevelUpAnimationProps) => {
  const { t } = useTranslation();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (open) {
      // Trigger confetti
      fireGoldConfetti();
      setTimeout(() => fireGoldConfetti(), 300);
      setTimeout(() => fireGoldConfetti(), 600);
      
      // Show content with delay for dramatic effect
      setTimeout(() => setShowContent(true), 200);
    } else {
      setShowContent(false);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md border-none bg-transparent shadow-none">
        <div className={`relative transition-all duration-700 ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          {/* Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/40 via-amber-500/30 to-orange-500/40 rounded-3xl blur-3xl animate-pulse" />
          
          <div className="relative bg-gradient-to-br from-background via-background to-primary/10 border-2 border-yellow-500/50 rounded-3xl p-8 overflow-hidden">
            {/* Floating Stars */}
            <div className="absolute top-4 left-4 animate-bounce">
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            </div>
            <div className="absolute top-8 right-8 animate-bounce" style={{ animationDelay: '0.2s' }}>
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            </div>
            <div className="absolute bottom-12 left-8 animate-bounce" style={{ animationDelay: '0.4s' }}>
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            </div>
            <div className="absolute top-16 left-1/4 animate-bounce" style={{ animationDelay: '0.3s' }}>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>
            <div className="absolute bottom-20 right-1/4 animate-bounce" style={{ animationDelay: '0.5s' }}>
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center gap-6 py-4">
              {/* Level Up Icon */}
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400/50 rounded-full blur-2xl animate-pulse" />
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500 flex items-center justify-center shadow-2xl">
                  <ArrowUp className="w-12 h-12 text-white animate-bounce" />
                </div>
              </div>

              {/* Level Up Text */}
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent animate-pulse">
                  {t('levelUp.title')}
                </h2>
                <p className="text-muted-foreground">
                  {t('levelUp.reached')}
                </p>
              </div>

              {/* New Level Display */}
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl p-6 border border-yellow-500/30">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white shadow-lg">
                    <span className="text-2xl font-bold">{newLevel}</span>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">{t('levelUp.newTitle')}</p>
                    <p className="text-xl font-bold text-foreground">
                      {t(`levels.${title}`)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Trophy */}
              <div className="flex items-center gap-2 text-amber-500">
                <Trophy className="w-5 h-5" />
                <span className="text-sm font-medium">{t('levelUp.congratulations')}</span>
              </div>

              <Button 
                onClick={onClose}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:opacity-90 text-white font-bold py-6"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                {t('levelUp.continue')}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LevelUpAnimation;
