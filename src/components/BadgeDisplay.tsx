import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { Award } from "lucide-react";
import { achievements } from "@/hooks/useUserStats";

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  tier: 'bronze' | 'silver' | 'gold' | 'platinum';
}

const additionalBadges: Badge[] = [
  { id: 'week_warrior', name: 'weekWarrior', description: 'weekWarriorDesc', icon: '⚔️', tier: 'bronze' },
  { id: 'month_master', name: 'monthMaster', description: 'monthMasterDesc', icon: '🏅', tier: 'silver' },
  { id: 'bible_expert', name: 'bibleExpert', description: 'bibleExpertDesc', icon: '📚', tier: 'gold' },
  { id: 'daily_devotion', name: 'dailyDevotion', description: 'dailyDevotionDesc', icon: '🙏', tier: 'bronze' },
  { id: 'speed_reader', name: 'speedReader', description: 'speedReaderDesc', icon: '⚡', tier: 'silver' },
  { id: 'all_categories', name: 'allCategories', description: 'allCategoriesDesc', icon: '🌟', tier: 'gold' },
  { id: 'perfectionist', name: 'perfectionist', description: 'perfectionistDesc', icon: '💎', tier: 'platinum' },
  { id: 'consistent', name: 'consistent', description: 'consistentDesc', icon: '📆', tier: 'silver' },
];

interface BadgeDisplayProps {
  unlockedAchievements: string[];
  dailyStreak: number;
  weeklyStreak: number;
  totalQuizzes: number;
}

const BadgeDisplay = ({ unlockedAchievements, dailyStreak, weeklyStreak, totalQuizzes }: BadgeDisplayProps) => {
  const { t } = useTranslation();

  const tierColors = {
    bronze: 'from-amber-600/20 to-amber-800/20 border-amber-600/50',
    silver: 'from-slate-300/20 to-slate-500/20 border-slate-400/50',
    gold: 'from-yellow-400/20 to-yellow-600/20 border-yellow-500/50',
    platinum: 'from-purple-400/20 to-purple-600/20 border-purple-500/50',
  };

  // Determine which additional badges are unlocked
  const unlockedBadges = additionalBadges.filter(badge => {
    switch (badge.id) {
      case 'week_warrior': return weeklyStreak >= 1;
      case 'month_master': return weeklyStreak >= 4;
      case 'bible_expert': return totalQuizzes >= 50;
      case 'daily_devotion': return dailyStreak >= 7;
      case 'speed_reader': return totalQuizzes >= 10;
      case 'all_categories': return unlockedAchievements.includes('explorer');
      case 'perfectionist': return unlockedAchievements.includes('perfect_score') && totalQuizzes >= 20;
      case 'consistent': return dailyStreak >= 14;
      default: return false;
    }
  });

  const allBadges = [
    ...achievements.map(a => ({
      id: a.id,
      name: a.name,
      description: a.description,
      icon: a.icon,
      tier: 'bronze' as const,
      isUnlocked: unlockedAchievements.includes(a.id),
    })),
    ...additionalBadges.map(b => ({
      ...b,
      isUnlocked: unlockedBadges.some(ub => ub.id === b.id),
    })),
  ];

  const unlockedCount = allBadges.filter(b => b.isUnlocked).length;

  return (
    <Card className="bg-card">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Award className="w-5 h-5 text-primary" />
          {t('badges.title')} ({unlockedCount}/{allBadges.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {allBadges.map((badge) => (
            <div
              key={badge.id}
              className={`
                relative flex flex-col items-center justify-center p-2 rounded-lg border-2 transition-all
                ${badge.isUnlocked 
                  ? `bg-gradient-to-br ${tierColors[badge.tier]} shadow-md` 
                  : 'bg-muted/30 border-border/30 opacity-40 grayscale'
                }
              `}
              title={badge.isUnlocked 
                ? `${t(`achievements.${badge.name}`)}: ${t(`achievements.${badge.description}`)}` 
                : t('badges.locked')
              }
            >
              <span className="text-2xl">{badge.icon}</span>
              {!badge.isUnlocked && (
                <span className="absolute inset-0 flex items-center justify-center text-xl">🔒</span>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BadgeDisplay;
