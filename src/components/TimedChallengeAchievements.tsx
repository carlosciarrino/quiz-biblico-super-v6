import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { Award, Lock, Share2, Twitter, Facebook, MessageCircle, Sparkles, Trophy, Zap, Star, Gift } from "lucide-react";
import { timedChallengeAchievements, TimedChallengeAchievement, TimedChallengeStats } from "@/hooks/useTimedChallengeAchievements";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface TimedChallengeAchievementsProps {
  unlockedAchievements: string[];
  getProgress: (id: string) => { current: number; target: number } | null;
  stats?: TimedChallengeStats;
  compact?: boolean;
}

const TimedChallengeAchievements = ({ 
  unlockedAchievements, 
  getProgress,
  stats,
  compact = false,
}: TimedChallengeAchievementsProps) => {
  const { t } = useTranslation();

  const tierConfig = {
    bronze: {
      bg: 'from-amber-600/20 to-amber-800/20',
      border: 'border-amber-600/50',
      text: 'text-amber-600',
      glow: 'shadow-amber-500/20',
      label: 'Bronzo',
    },
    silver: {
      bg: 'from-slate-300/20 to-slate-500/20',
      border: 'border-slate-400/50',
      text: 'text-slate-400',
      glow: 'shadow-slate-400/20',
      label: 'Argento',
    },
    gold: {
      bg: 'from-yellow-400/20 to-yellow-600/20',
      border: 'border-yellow-500/50',
      text: 'text-yellow-500',
      glow: 'shadow-yellow-500/30',
      label: 'Oro',
    },
    platinum: {
      bg: 'from-purple-400/20 to-purple-600/20',
      border: 'border-purple-500/50',
      text: 'text-purple-500',
      glow: 'shadow-purple-500/30',
      label: 'Platino',
    },
    diamond: {
      bg: 'from-cyan-400/20 via-blue-500/20 to-purple-500/20',
      border: 'border-cyan-400/50',
      text: 'text-cyan-400',
      glow: 'shadow-cyan-400/40',
      label: 'Diamante',
    },
  };

  const unlockedCount = unlockedAchievements.length;
  const totalCount = timedChallengeAchievements.length;
  const totalXp = unlockedAchievements.reduce((sum, id) => {
    const achievement = timedChallengeAchievements.find(a => a.id === id);
    return sum + (achievement?.xpReward || 0);
  }, 0);

  // Group achievements by category
  const categories = [
    { key: 'score', icon: Trophy, ids: ['rookie_scorer', 'rising_star', 'point_hunter', 'score_master', 'legendary_scorer', 'mythical_scorer'] },
    { key: 'streak', icon: Zap, ids: ['hot_streak', 'on_fire', 'unstoppable', 'streak_legend', 'streak_god'] },
    { key: 'games', icon: Star, ids: ['first_challenge', 'challenger', 'dedicated', 'challenge_addict', 'challenge_master'] },
    { key: 'questions', icon: Award, ids: ['quick_thinker', 'knowledge_seeker', 'bible_scholar', 'bible_master'] },
    { key: 'special', icon: Sparkles, ids: ['hard_mode', 'perfectionist', 'flawless', 'divine_perfection', 'daily_warrior', 'monthly_devotion'] },
  ];

  const shareAchievement = (achievement: TimedChallengeAchievement, platform: 'twitter' | 'facebook' | 'whatsapp' | 'copy') => {
    const achievementName = t(`timedChallengeAchievements.${achievement.id}.name`);
    const shareText = t('timedChallengeAchievements.shareMessage', { 
      achievement: achievementName, 
      icon: achievement.icon 
    });
    const shareUrl = window.location.origin;

    const urls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
      toast.success(t('share.copied'));
    } else {
      window.open(urls[platform], '_blank', 'width=600,height=400');
    }
  };

  const renderAchievement = (achievement: TimedChallengeAchievement) => {
    const isUnlocked = unlockedAchievements.includes(achievement.id);
    const progress = getProgress(achievement.id);
    const tier = tierConfig[achievement.tier];

    return (
      <div
        key={achievement.id}
        className={cn(
          "relative p-3 rounded-xl border-2 transition-all duration-300",
          isUnlocked 
            ? `bg-gradient-to-br ${tier.bg} ${tier.border} ${tier.glow} shadow-lg hover:scale-[1.02]`
            : 'bg-muted/10 border-border/30 hover:bg-muted/20'
        )}
      >
        {/* XP Badge */}
        {isUnlocked && (
          <div className={cn(
            "absolute -top-2 -right-2 flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold",
            "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-md"
          )}>
            <Gift className="w-3 h-3" />
            +{achievement.xpReward} XP
          </div>
        )}

        <div className="flex items-start gap-3">
          {/* Icon with tier-colored background */}
          <div className={cn(
            "relative w-12 h-12 rounded-lg flex items-center justify-center text-2xl shrink-0",
            isUnlocked 
              ? `bg-gradient-to-br ${tier.bg} ${tier.border} border`
              : 'bg-muted/30 border border-border/30 grayscale opacity-50'
          )}>
            {achievement.icon}
            {isUnlocked && achievement.tier === 'diamond' && (
              <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-cyan-400/20 via-transparent to-purple-400/20 rounded-lg" />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <p className={cn(
                "font-semibold text-sm",
                isUnlocked ? tier.text : 'text-muted-foreground'
              )}>
                {t(`timedChallengeAchievements.${achievement.id}.name`)}
              </p>
              {!isUnlocked && <Lock className="w-3 h-3 text-muted-foreground shrink-0" />}
              {isUnlocked && (
                <Badge variant="outline" className={cn("text-[10px] px-1.5 py-0", tier.border, tier.text)}>
                  {tier.label}
                </Badge>
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">
              {t(`timedChallengeAchievements.${achievement.id}.desc`)}
            </p>

            {/* Progress bar for locked achievements */}
            {!isUnlocked && progress && (
              <div className="mt-2 space-y-1">
                <div className="flex items-center gap-2">
                  <Progress 
                    value={Math.min((progress.current / progress.target) * 100, 100)} 
                    className={cn("h-2 flex-1", `[&>div]:bg-gradient-to-r [&>div]:${tier.bg.replace('/20', '')}`)}
                  />
                  <span className="text-xs text-muted-foreground tabular-nums">
                    {Math.round((progress.current / progress.target) * 100)}%
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {progress.current.toLocaleString()} / {progress.target.toLocaleString()}
                </p>
              </div>
            )}

            {/* Share buttons for unlocked achievements */}
            {isUnlocked && !compact && (
              <div className="flex items-center gap-1 mt-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 rounded-full hover:bg-[#1DA1F2]/20 hover:text-[#1DA1F2]"
                  onClick={() => shareAchievement(achievement, 'twitter')}
                  title="Twitter"
                >
                  <Twitter className="w-3.5 h-3.5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 rounded-full hover:bg-[#4267B2]/20 hover:text-[#4267B2]"
                  onClick={() => shareAchievement(achievement, 'facebook')}
                  title="Facebook"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 rounded-full hover:bg-[#25D366]/20 hover:text-[#25D366]"
                  onClick={() => shareAchievement(achievement, 'whatsapp')}
                  title="WhatsApp"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 rounded-full hover:bg-primary/20 hover:text-primary"
                  onClick={() => shareAchievement(achievement, 'copy')}
                  title={t('share.copyLink')}
                >
                  <Share2 className="w-3.5 h-3.5" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-lg">
            <Award className="w-5 h-5 text-primary" />
            {t('timedChallengeAchievements.title')}
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="gap-1">
              <Trophy className="w-3 h-3" />
              {unlockedCount}/{totalCount}
            </Badge>
            <Badge className="gap-1 bg-gradient-to-r from-primary to-accent">
              <Sparkles className="w-3 h-3" />
              {totalXp.toLocaleString()} XP
            </Badge>
          </div>
        </CardTitle>
        
        {/* Overall Progress */}
        <div className="mt-3 space-y-1">
          <Progress value={(unlockedCount / totalCount) * 100} className="h-2" />
          <p className="text-xs text-muted-foreground text-center">
            {Math.round((unlockedCount / totalCount) * 100)}% completato
          </p>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {categories.map((category) => {
          const CategoryIcon = category.icon;
          const achievements = category.ids
            .map((id) => timedChallengeAchievements.find((a) => a.id === id))
            .filter(Boolean) as TimedChallengeAchievement[];
          
          const categoryUnlocked = achievements.filter(a => unlockedAchievements.includes(a.id)).length;

          return (
            <div key={category.key} className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <CategoryIcon className="w-4 h-4 text-primary" />
                  {t(`timedChallengeAchievements.categories.${category.key}`)}
                </h4>
                <Badge variant="outline" className="text-xs">
                  {categoryUnlocked}/{achievements.length}
                </Badge>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {achievements.map(renderAchievement)}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default TimedChallengeAchievements;
