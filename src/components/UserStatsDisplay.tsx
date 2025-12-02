import { Trophy, Target, TrendingUp, TrendingDown, Award, Flame, BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";
import { UserStats, achievements } from "@/hooks/useUserStats";

interface UserStatsDisplayProps {
  stats: UserStats;
  strongestCategory: string | null;
  weakestCategory: string | null;
}

const UserStatsDisplay = ({ stats, strongestCategory, weakestCategory }: UserStatsDisplayProps) => {
  const { t } = useTranslation();

  const unlockedAchievements = achievements.filter(a => stats.achievements.includes(a.id));

  const getCategoryTranslationKey = (category: string): string => {
    const categoryMap: Record<string, string> = {
      "Antico Testamento": "categories.oldTestament.name",
      "Nuovo Testamento": "categories.newTestament.name",
      "Personaggi Biblici": "categories.biblicalCharacters.name",
      "Pentateuco": "categories.pentateuch.name",
      "Profeti Minori": "categories.minorProphets.name",
      "Quattro Vangeli": "categories.fourGospels.name",
      "Lettere Paoline": "categories.paulineLetters.name",
    };
    return categoryMap[category] || category;
  };

  if (stats.totalQuizzesCompleted === 0) {
    return (
      <div className="bg-card rounded-2xl p-6 border shadow-sm">
        <div className="text-center text-muted-foreground">
          <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>{t('stats.noData')}</p>
          <p className="text-sm mt-1">{t('stats.startQuiz')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-card rounded-xl p-4 border shadow-sm text-center">
          <Trophy className="w-6 h-6 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">{stats.totalQuizzesCompleted}</div>
          <div className="text-xs text-muted-foreground">{t('stats.quizzesCompleted')}</div>
        </div>
        
        <div className="bg-card rounded-xl p-4 border shadow-sm text-center">
          <Target className="w-6 h-6 text-accent mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">{stats.overallAveragePercentage}%</div>
          <div className="text-xs text-muted-foreground">{t('stats.averageScore')}</div>
        </div>
        
        <div className="bg-card rounded-xl p-4 border shadow-sm text-center">
          <Flame className="w-6 h-6 text-orange-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">{stats.streakDays}</div>
          <div className="text-xs text-muted-foreground">{t('stats.streakDays')}</div>
        </div>
        
        <div className="bg-card rounded-xl p-4 border shadow-sm text-center">
          <Award className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground">{unlockedAchievements.length}</div>
          <div className="text-xs text-muted-foreground">{t('stats.achievements')}</div>
        </div>
      </div>

      {/* Strongest/Weakest Categories */}
      {(strongestCategory || weakestCategory) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {strongestCategory && (
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-xl p-4 border border-green-500/20">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700 dark:text-green-400">
                  {t('stats.strongest')}
                </span>
              </div>
              <div className="text-foreground font-semibold">
                {t(getCategoryTranslationKey(strongestCategory))}
              </div>
              <div className="text-sm text-muted-foreground">
                {stats.categoryStats[strongestCategory]?.averagePercentage || 0}% {t('stats.average')}
              </div>
            </div>
          )}
          
          {weakestCategory && weakestCategory !== strongestCategory && (
            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 rounded-xl p-4 border border-orange-500/20">
              <div className="flex items-center gap-2 mb-1">
                <TrendingDown className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium text-orange-700 dark:text-orange-400">
                  {t('stats.weakest')}
                </span>
              </div>
              <div className="text-foreground font-semibold">
                {t(getCategoryTranslationKey(weakestCategory))}
              </div>
              <div className="text-sm text-muted-foreground">
                {stats.categoryStats[weakestCategory]?.averagePercentage || 0}% {t('stats.average')}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Achievements */}
      {unlockedAchievements.length > 0 && (
        <div className="bg-card rounded-xl p-4 border shadow-sm">
          <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <Award className="w-4 h-4 text-yellow-500" />
            {t('stats.unlockedAchievements')}
          </h4>
          <div className="flex flex-wrap gap-2">
            {unlockedAchievements.map(achievement => (
              <div
                key={achievement.id}
                className="flex items-center gap-2 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 rounded-lg px-3 py-2 border border-yellow-500/20"
                title={t(`achievements.${achievement.description}`)}
              >
                <span className="text-lg">{achievement.icon}</span>
                <span className="text-sm font-medium text-foreground">
                  {t(`achievements.${achievement.name}`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserStatsDisplay;
