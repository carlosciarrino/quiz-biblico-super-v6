import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Award, Lock, Share2, Twitter, Facebook, MessageCircle } from "lucide-react";
import { timedChallengeAchievements, TimedChallengeAchievement } from "@/hooks/useTimedChallengeAchievements";
import { toast } from "sonner";

interface TimedChallengeAchievementsProps {
  unlockedAchievements: string[];
  getProgress: (id: string) => { current: number; target: number } | null;
}

const TimedChallengeAchievements = ({ 
  unlockedAchievements, 
  getProgress 
}: TimedChallengeAchievementsProps) => {
  const { t } = useTranslation();

  const tierColors = {
    bronze: 'from-amber-600/20 to-amber-800/20 border-amber-600/50 text-amber-600',
    silver: 'from-slate-300/20 to-slate-500/20 border-slate-400/50 text-slate-400',
    gold: 'from-yellow-400/20 to-yellow-600/20 border-yellow-500/50 text-yellow-500',
    platinum: 'from-purple-400/20 to-purple-600/20 border-purple-500/50 text-purple-500',
  };

  const tierBgColors = {
    bronze: 'bg-amber-600',
    silver: 'bg-slate-400',
    gold: 'bg-yellow-500',
    platinum: 'bg-purple-500',
  };

  const unlockedCount = unlockedAchievements.length;
  const totalCount = timedChallengeAchievements.length;

  // Group achievements by category
  const categories = [
    { key: 'score', ids: ['rookie_scorer', 'rising_star', 'point_hunter', 'score_master', 'legendary_scorer'] },
    { key: 'streak', ids: ['hot_streak', 'on_fire', 'unstoppable', 'streak_legend'] },
    { key: 'games', ids: ['first_challenge', 'challenger', 'dedicated', 'challenge_addict'] },
    { key: 'questions', ids: ['quick_thinker', 'knowledge_seeker', 'bible_scholar'] },
    { key: 'special', ids: ['hard_mode', 'perfectionist', 'flawless'] },
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

    return (
      <div
        key={achievement.id}
        className={`
          relative p-3 rounded-lg border-2 transition-all
          ${isUnlocked 
            ? `bg-gradient-to-br ${tierColors[achievement.tier]}` 
            : 'bg-muted/20 border-border/30'
          }
        `}
      >
        <div className="flex items-start gap-3">
          <div className={`text-2xl ${!isUnlocked ? 'grayscale opacity-50' : ''}`}>
            {achievement.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <p className={`font-medium text-sm truncate ${!isUnlocked ? 'text-muted-foreground' : ''}`}>
                {t(`timedChallengeAchievements.${achievement.id}.name`)}
              </p>
              {!isUnlocked && <Lock className="w-3 h-3 text-muted-foreground shrink-0" />}
            </div>
            <p className="text-xs text-muted-foreground truncate">
              {t(`timedChallengeAchievements.${achievement.id}.desc`)}
            </p>
            {!isUnlocked && progress && (
              <div className="mt-2 space-y-1">
                <Progress 
                  value={Math.min((progress.current / progress.target) * 100, 100)} 
                  className={`h-1.5 [&>div]:${tierBgColors[achievement.tier]}`}
                />
                <p className="text-xs text-muted-foreground">
                  {progress.current} / {progress.target}
                </p>
              </div>
            )}
            {/* Share buttons for unlocked achievements */}
            {isUnlocked && (
              <div className="flex items-center gap-1 mt-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 rounded-full hover:bg-[#1DA1F2]/20 hover:text-[#1DA1F2]"
                  onClick={() => shareAchievement(achievement, 'twitter')}
                  title="Twitter"
                >
                  <Twitter className="w-3 h-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 rounded-full hover:bg-[#4267B2]/20 hover:text-[#4267B2]"
                  onClick={() => shareAchievement(achievement, 'facebook')}
                  title="Facebook"
                >
                  <Facebook className="w-3 h-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 rounded-full hover:bg-[#25D366]/20 hover:text-[#25D366]"
                  onClick={() => shareAchievement(achievement, 'whatsapp')}
                  title="WhatsApp"
                >
                  <MessageCircle className="w-3 h-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 rounded-full hover:bg-primary/20 hover:text-primary"
                  onClick={() => shareAchievement(achievement, 'copy')}
                  title={t('share.copyLink')}
                >
                  <Share2 className="w-3 h-3" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Card className="bg-card">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Award className="w-5 h-5 text-primary" />
          {t('timedChallengeAchievements.title')} ({unlockedCount}/{totalCount})
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {categories.map((category) => {
          const achievements = category.ids
            .map((id) => timedChallengeAchievements.find((a) => a.id === id))
            .filter(Boolean) as TimedChallengeAchievement[];

          return (
            <div key={category.key} className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground">
                {t(`timedChallengeAchievements.categories.${category.key}`)}
              </h4>
              <div className="grid gap-2 sm:grid-cols-2">
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
