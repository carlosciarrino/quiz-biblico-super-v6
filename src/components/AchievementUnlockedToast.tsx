import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { TimedChallengeAchievement } from "@/hooks/useTimedChallengeAchievements";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface AchievementUnlockedToastProps {
  achievements: TimedChallengeAchievement[];
  onClose: () => void;
}

const AchievementUnlockedToast = ({ achievements, onClose }: AchievementUnlockedToastProps) => {
  const { t } = useTranslation();

  const tierColors = {
    bronze: 'from-amber-500 to-amber-700',
    silver: 'from-slate-300 to-slate-500',
    gold: 'from-yellow-400 to-yellow-600',
    platinum: 'from-purple-400 to-purple-600',
  };

  if (achievements.length === 0) return null;

  return (
    <Dialog open={achievements.length > 0} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            🎉 {t('timedChallengeAchievements.unlocked')}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`
                flex items-center gap-4 p-4 rounded-xl 
                bg-gradient-to-r ${tierColors[achievement.tier]} 
                text-white shadow-lg animate-scale-in
              `}
            >
              <div className="text-4xl">{achievement.icon}</div>
              <div>
                <p className="font-bold text-lg">
                  {t(`timedChallengeAchievements.${achievement.id}.name`)}
                </p>
                <p className="text-sm opacity-90">
                  {t(`timedChallengeAchievements.${achievement.id}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Button onClick={onClose} className="w-full">
          {t('common.continue')}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AchievementUnlockedToast;
