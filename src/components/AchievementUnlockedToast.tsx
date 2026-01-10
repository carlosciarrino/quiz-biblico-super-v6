import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { TimedChallengeAchievement } from "@/hooks/useTimedChallengeAchievements";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Gift, Share2, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { fireCorrectAnswer } from "@/lib/confetti";

interface AchievementUnlockedToastProps {
  achievements: TimedChallengeAchievement[];
  onClose: () => void;
}

const AchievementUnlockedToast = ({ achievements, onClose }: AchievementUnlockedToastProps) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const tierConfig = {
    bronze: {
      bg: 'from-amber-600 to-amber-800',
      text: 'text-amber-100',
      glow: 'shadow-amber-500/50',
      label: 'Bronzo',
    },
    silver: {
      bg: 'from-slate-400 to-slate-600',
      text: 'text-slate-100',
      glow: 'shadow-slate-400/50',
      label: 'Argento',
    },
    gold: {
      bg: 'from-yellow-400 to-yellow-600',
      text: 'text-yellow-100',
      glow: 'shadow-yellow-400/50',
      label: 'Oro',
    },
    platinum: {
      bg: 'from-purple-400 to-purple-600',
      text: 'text-purple-100',
      glow: 'shadow-purple-400/50',
      label: 'Platino',
    },
    diamond: {
      bg: 'from-cyan-400 via-blue-500 to-purple-500',
      text: 'text-cyan-100',
      glow: 'shadow-cyan-400/60',
      label: 'Diamante',
    },
  };

  useEffect(() => {
    if (achievements.length > 0) {
      fireCorrectAnswer();
    }
  }, [achievements.length]);

  useEffect(() => {
    if (currentIndex > 0 && currentIndex < achievements.length) {
      fireCorrectAnswer();
    }
  }, [currentIndex, achievements.length]);

  const handleNext = () => {
    if (currentIndex < achievements.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onClose();
      setCurrentIndex(0);
    }
  };

  const shareAchievement = (achievement: TimedChallengeAchievement) => {
    const achievementName = t(`timedChallengeAchievements.${achievement.id}.name`);
    const shareText = t('timedChallengeAchievements.shareMessage', { 
      achievement: achievementName, 
      icon: achievement.icon 
    });
    
    navigator.clipboard.writeText(`${shareText}\n${window.location.origin}`);
    toast.success(t('share.copied'));
  };

  if (achievements.length === 0) return null;

  const currentAchievement = achievements[currentIndex];
  const tier = tierConfig[currentAchievement.tier];

  return (
    <Dialog open={achievements.length > 0} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden border-0 bg-transparent shadow-none">
        <div className={cn(
          "relative rounded-2xl overflow-hidden border-2 shadow-2xl",
          tier.glow
        )}>
          {/* Animated background */}
          <div className={cn(
            "absolute inset-0 bg-gradient-to-br",
            tier.bg,
            "opacity-95"
          )} />
          
          {/* Sparkle overlay for diamond tier */}
          {currentAchievement.tier === 'diamond' && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          )}

          {/* Content */}
          <div className="relative z-10 p-6">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-white/80 animate-pulse" />
                <span className="text-white/90 font-medium uppercase tracking-wider text-sm">
                  {t('timedChallengeAchievements.unlocked')}
                </span>
                <Sparkles className="w-5 h-5 text-white/80 animate-pulse" />
              </div>
              
              {/* Achievement Icon */}
              <div className="relative inline-block">
                <div className="text-7xl animate-bounce drop-shadow-lg">
                  {currentAchievement.icon}
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 blur-xl opacity-50">
                  <div className="text-7xl">{currentAchievement.icon}</div>
                </div>
              </div>
            </div>

            {/* Achievement Info */}
            <div className="text-center mb-6 space-y-2">
              <Badge className="bg-white/20 text-white border-white/30 mb-2">
                {tier.label}
              </Badge>
              <h2 className="text-2xl font-bold text-white drop-shadow-md">
                {t(`timedChallengeAchievements.${currentAchievement.id}.name`)}
              </h2>
              <p className="text-white/80">
                {t(`timedChallengeAchievements.${currentAchievement.id}.desc`)}
              </p>
            </div>

            {/* XP Reward */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                <Gift className="w-5 h-5 text-white" />
                <span className="font-bold text-xl text-white">+{currentAchievement.xpReward} XP</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
                onClick={() => shareAchievement(currentAchievement)}
              >
                <Share2 className="w-4 h-4 mr-2" />
                Condividi
              </Button>
              <Button 
                className="flex-1 bg-white text-foreground hover:bg-white/90"
                onClick={handleNext}
              >
                {currentIndex < achievements.length - 1 ? (
                  <>
                    Prossimo
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </>
                ) : (
                  'Continua'
                )}
              </Button>
            </div>

            {/* Progress Dots */}
            {achievements.length > 1 && (
              <div className="flex justify-center gap-2 mt-4">
                {achievements.map((_, index) => (
                  <div
                    key={index}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      index === currentIndex 
                        ? 'bg-white w-6' 
                        : 'bg-white/40'
                    )}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AchievementUnlockedToast;
