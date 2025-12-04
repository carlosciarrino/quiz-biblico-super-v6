import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useTranslation } from "react-i18next";
import { Target, Flame, Trophy, Calendar } from "lucide-react";
import { GoalsState } from "@/hooks/useDailyGoals";

interface DailyGoalsCardProps {
  goals: GoalsState;
}

const DailyGoalsCard = ({ goals }: DailyGoalsCardProps) => {
  const { t } = useTranslation();
  
  const dailyQuizProgress = Math.min(100, Math.round((goals.daily.quizzesCompleted / goals.daily.quizzesTarget) * 100));
  const weeklyQuizProgress = Math.min(100, Math.round((goals.weekly.quizzesCompleted / goals.weekly.quizzesTarget) * 100));
  const isDailyComplete = goals.daily.quizzesCompleted >= goals.daily.quizzesTarget;
  const isWeeklyComplete = goals.weekly.quizzesCompleted >= goals.weekly.quizzesTarget;

  return (
    <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Target className="w-5 h-5 text-primary" />
          {t('goals.title')}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Daily Goals */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium flex items-center gap-2">
              <Calendar className="w-4 h-4 text-accent" />
              {t('goals.daily')}
            </span>
            {isDailyComplete && (
              <span className="text-xs bg-green-500/20 text-green-600 px-2 py-0.5 rounded-full">
                ✓ {t('goals.complete')}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Progress value={dailyQuizProgress} className="flex-1 h-2" />
            <span className="text-sm font-medium min-w-[60px] text-right">
              {goals.daily.quizzesCompleted}/{goals.daily.quizzesTarget}
            </span>
          </div>
        </div>

        {/* Weekly Goals */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium flex items-center gap-2">
              <Trophy className="w-4 h-4 text-primary" />
              {t('goals.weekly')}
            </span>
            {isWeeklyComplete && (
              <span className="text-xs bg-green-500/20 text-green-600 px-2 py-0.5 rounded-full">
                ✓ {t('goals.complete')}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Progress value={weeklyQuizProgress} className="flex-1 h-2" />
            <span className="text-sm font-medium min-w-[60px] text-right">
              {goals.weekly.quizzesCompleted}/{goals.weekly.quizzesTarget}
            </span>
          </div>
        </div>

        {/* Streaks */}
        <div className="flex gap-4 pt-2 border-t border-border/50">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-orange-500" />
            <span className="text-sm">
              <span className="font-bold">{goals.dailyStreak}</span> {t('goals.dailyStreak')}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-yellow-500" />
            <span className="text-sm">
              <span className="font-bold">{goals.weeklyStreak}</span> {t('goals.weeklyStreak')}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyGoalsCard;
