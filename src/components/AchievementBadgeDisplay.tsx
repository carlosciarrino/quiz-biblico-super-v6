import { cn } from "@/lib/utils";
import { Trophy, Zap, Star, Gift } from "lucide-react";
import { TimedChallengeStats } from "@/hooks/useTimedChallengeAchievements";

interface AchievementBadgeDisplayProps {
  stats: TimedChallengeStats;
  unlockedCount: number;
  totalCount: number;
}

const AchievementBadgeDisplay = ({ stats, unlockedCount, totalCount }: AchievementBadgeDisplayProps) => {
  // Calculate tier based on unlocked achievements
  const getTier = () => {
    const percentage = (unlockedCount / totalCount) * 100;
    if (percentage >= 80) return 'diamond';
    if (percentage >= 60) return 'platinum';
    if (percentage >= 40) return 'gold';
    if (percentage >= 20) return 'silver';
    return 'bronze';
  };

  const tierConfig = {
    bronze: {
      bg: 'from-amber-600 to-amber-800',
      border: 'border-amber-500',
      icon: '🥉',
      label: 'Bronzo',
    },
    silver: {
      bg: 'from-slate-400 to-slate-600',
      border: 'border-slate-400',
      icon: '🥈',
      label: 'Argento',
    },
    gold: {
      bg: 'from-yellow-400 to-yellow-600',
      border: 'border-yellow-400',
      icon: '🥇',
      label: 'Oro',
    },
    platinum: {
      bg: 'from-purple-400 to-purple-600',
      border: 'border-purple-400',
      icon: '💎',
      label: 'Platino',
    },
    diamond: {
      bg: 'from-cyan-400 via-blue-500 to-purple-500',
      border: 'border-cyan-400',
      icon: '👑',
      label: 'Diamante',
    },
  };

  const tier = getTier();
  const config = tierConfig[tier];

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {/* Main Badge */}
      <div className={cn(
        "relative flex flex-col items-center justify-center w-24 h-24 rounded-2xl",
        "bg-gradient-to-br shadow-lg",
        config.bg, config.border, "border-2"
      )}>
        <span className="text-4xl">{config.icon}</span>
        <span className="text-xs font-bold text-white/90 mt-1">{config.label}</span>
        
        {tier === 'diamond' && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl" />
        )}
      </div>

      {/* Stats Mini Cards */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-card/80 rounded-lg border shadow-sm">
          <Trophy className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">{stats.highScore.toLocaleString()}</span>
          <span className="text-xs text-muted-foreground">punti max</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-card/80 rounded-lg border shadow-sm">
          <Zap className="w-4 h-4 text-orange-500" />
          <span className="text-sm font-medium">{stats.bestStreak}</span>
          <span className="text-xs text-muted-foreground">serie max</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-card/80 rounded-lg border shadow-sm">
          <Star className="w-4 h-4 text-yellow-500" />
          <span className="text-sm font-medium">{stats.perfectGames}</span>
          <span className="text-xs text-muted-foreground">perfetti</span>
        </div>
      </div>

      {/* XP Display */}
      <div className={cn(
        "flex flex-col items-center justify-center w-20 h-20 rounded-xl",
        "bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30"
      )}>
        <Gift className="w-5 h-5 text-primary mb-1" />
        <span className="text-lg font-bold text-primary">{stats.totalXpEarned}</span>
        <span className="text-[10px] text-muted-foreground">XP Guadagnati</span>
      </div>
    </div>
  );
};

export default AchievementBadgeDisplay;
