import { useTranslation } from "react-i18next";
import { Gauge, TrendingUp, TrendingDown, Minus } from "lucide-react";

export type DifficultyLevel = "easy" | "medium" | "hard";

interface DifficultyIndicatorProps {
  level: DifficultyLevel;
  consecutiveCorrect: number;
  recentMistakes: number;
}

const DifficultyIndicator = ({ level, consecutiveCorrect, recentMistakes }: DifficultyIndicatorProps) => {
  const { t } = useTranslation();

  const getLevelColor = () => {
    switch (level) {
      case "easy": return "text-green-500 bg-green-500/10 border-green-500/30";
      case "medium": return "text-yellow-500 bg-yellow-500/10 border-yellow-500/30";
      case "hard": return "text-red-500 bg-red-500/10 border-red-500/30";
    }
  };

  const getLevelIcon = () => {
    switch (level) {
      case "easy": return <TrendingDown className="w-4 h-4" />;
      case "medium": return <Minus className="w-4 h-4" />;
      case "hard": return <TrendingUp className="w-4 h-4" />;
    }
  };

  const getProgressToChange = () => {
    if (level === "hard") {
      return { threshold: 2, current: recentMistakes, direction: "down" };
    }
    return { threshold: 3, current: consecutiveCorrect, direction: "up" };
  };

  const progress = getProgressToChange();

  return (
    <div className={`flex items-center gap-3 px-4 py-2 rounded-lg border ${getLevelColor()}`}>
      <div className="flex items-center gap-2">
        <Gauge className="w-4 h-4" />
        <span className="font-medium text-sm">{t(`difficulty.${level}`)}</span>
        {getLevelIcon()}
      </div>
      
      <div className="flex gap-1">
        {Array.from({ length: progress.threshold }).map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors ${
              i < progress.current ? "bg-current" : "bg-current/20"
            }`}
          />
        ))}
      </div>
      
      <span className="text-xs opacity-70">
        {progress.direction === "up" 
          ? t('difficulty.toIncrease', { count: progress.threshold - progress.current })
          : t('difficulty.toDecrease', { count: progress.threshold - progress.current })
        }
      </span>
    </div>
  );
};

export default DifficultyIndicator;
