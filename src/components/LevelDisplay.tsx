import { useTranslation } from "react-i18next";
import { Progress } from "@/components/ui/progress";
import { Star, Zap } from "lucide-react";
import { LevelInfo } from "@/hooks/useUserLevel";

interface LevelDisplayProps {
  levelInfo: LevelInfo;
}

const LevelDisplay = ({ levelInfo }: LevelDisplayProps) => {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 rounded-2xl p-6 border border-primary/20">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground shadow-lg">
            <span className="text-2xl font-bold">{levelInfo.level}</span>
          </div>
          <div>
            <h3 className="font-bold text-lg text-foreground">
              {t(`levels.${levelInfo.title}`)}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('levels.level')} {levelInfo.level}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-accent/20 px-3 py-1.5 rounded-full">
          <Zap className="w-4 h-4 text-accent" />
          <span className="font-bold text-accent">{levelInfo.totalXP} XP</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">{t('levels.progress')}</span>
          <span className="text-foreground font-medium">
            {levelInfo.currentXP} / {levelInfo.xpForNextLevel} XP
          </span>
        </div>
        <Progress value={levelInfo.progress} className="h-3" />
        <p className="text-xs text-muted-foreground text-center">
          {Math.ceil(levelInfo.xpForNextLevel - levelInfo.currentXP)} XP {t('levels.toNextLevel')}
        </p>
      </div>
    </div>
  );
};

export default LevelDisplay;
