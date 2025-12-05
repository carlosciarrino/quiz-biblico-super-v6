import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Gift, Zap, Flame, Star } from "lucide-react";
import { LoginReward } from "@/hooks/useDailyLoginReward";

interface DailyRewardPopupProps {
  open: boolean;
  onClose: () => void;
  onClaim: () => void;
  reward: LoginReward;
  consecutiveDays: number;
}

const DailyRewardPopup = ({ open, onClose, onClaim, reward, consecutiveDays }: DailyRewardPopupProps) => {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center gap-2 text-2xl">
            <Gift className="w-8 h-8 text-primary animate-bounce" />
            {t('dailyReward.title')}
          </DialogTitle>
          <DialogDescription className="text-center">
            {t('dailyReward.description')}
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col items-center gap-6 py-6">
          {/* Streak Display */}
          <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 px-4 py-2 rounded-full">
            <Flame className="w-5 h-5 text-orange-500" />
            <span className="font-bold text-orange-600 dark:text-orange-400">
              {consecutiveDays} {t('dailyReward.daysStreak')}
            </span>
          </div>

          {/* Reward Box */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-xl animate-pulse" />
            <div className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 border-2 border-primary/30 rounded-3xl p-8 flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg animate-scale-in">
                <Star className="w-10 h-10 text-white" />
              </div>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">
                  {t('dailyReward.day')} {reward.day}
                </p>
                <div className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-yellow-500" />
                  <span className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    +{reward.xpBonus} XP
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Weekly Progress */}
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
              <div
                key={day}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  day <= consecutiveDays
                    ? 'bg-gradient-to-br from-primary to-accent text-white shadow-md scale-110'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {day}
              </div>
            ))}
          </div>

          <Button 
            onClick={onClaim} 
            className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-bold py-6 text-lg"
          >
            <Gift className="w-5 h-5 mr-2" />
            {t('dailyReward.claim')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DailyRewardPopup;
