import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, BookOpen, ExternalLink, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ReadingPlanCard from "@/components/ReadingPlanCard";
import DailyGoalsCard from "@/components/DailyGoalsCard";
import BadgeDisplay from "@/components/BadgeDisplay";
import { readingPlans } from "@/data/readingPlans";
import { useReadingPlans } from "@/hooks/useReadingPlans";
import { useDailyGoals } from "@/hooks/useDailyGoals";
import { useUserStats } from "@/hooks/useUserStats";

const StudyPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { plans, startPlan, completeDay, getPlanProgress } = useReadingPlans();
  const { goals, recordReadingCompletion } = useDailyGoals();
  const { stats } = useUserStats();
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  const selectedPlan = selectedPlanId ? readingPlans.find(p => p.id === selectedPlanId) : null;
  const selectedProgress = selectedPlanId ? getPlanProgress(selectedPlanId) : null;

  const handleCompleteDay = (day: number) => {
    if (selectedPlanId) {
      completeDay(selectedPlanId, day);
      recordReadingCompletion();
    }
  };

  const getBibleComLink = (passage: string): string => {
    // Convert passage to bible.com format
    const cleaned = passage.replace(/\s+/g, '.').replace(/-/g, '-');
    return `https://www.bible.com/bible/1/${cleaned}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container mx-auto px-4 py-8">
        <div className="absolute top-4 right-4">
          <LanguageSwitcher />
        </div>

        <header className="mb-8">
          <Button
            variant="ghost"
            onClick={() => selectedPlanId ? setSelectedPlanId(null) : navigate("/")}
            className="mb-4 gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('common.back')}
          </Button>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">{t('study.title')}</h1>
              <p className="text-muted-foreground">{t('study.subtitle')}</p>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Daily Goals */}
          <DailyGoalsCard goals={goals} />

          {/* Badges */}
          <BadgeDisplay
            unlockedAchievements={stats.achievements}
            dailyStreak={goals.dailyStreak}
            weeklyStreak={goals.weeklyStreak}
            totalQuizzes={stats.totalQuizzesCompleted}
          />

          {selectedPlan && selectedProgress ? (
            /* Reading Plan Detail View */
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-3xl">{selectedPlan.icon}</span>
                    {t(`readingPlans.${selectedPlan.name}`)}
                  </CardTitle>
                  <span className="text-sm text-muted-foreground">
                    {selectedProgress.completedDays.length}/{selectedPlan.duration} {t('readingPlans.days')}
                  </span>
                </div>
                <Progress 
                  value={(selectedProgress.completedDays.length / selectedPlan.duration) * 100} 
                  className="mt-2"
                />
              </CardHeader>
              <CardContent>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {selectedPlan.readings.map((reading) => {
                    const isCompleted = selectedProgress.completedDays.includes(reading.day);
                    return (
                      <div
                        key={reading.day}
                        className={`
                          flex items-center justify-between p-3 rounded-lg border transition-all
                          ${isCompleted 
                            ? 'bg-green-500/10 border-green-500/30' 
                            : 'bg-card hover:bg-accent/10 border-border/50'
                          }
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`
                            w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                            ${isCompleted ? 'bg-green-500 text-white' : 'bg-muted'}
                          `}>
                            {isCompleted ? <Check className="w-4 h-4" /> : reading.day}
                          </span>
                          <span className={`text-sm ${isCompleted ? 'line-through text-muted-foreground' : ''}`}>
                            {reading.passage}
                          </span>
                        </div>
                        <div className="flex gap-1">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0"
                            onClick={() => window.open(getBibleComLink(reading.passage), '_blank')}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                          {!isCompleted && (
                            <Button
                              size="sm"
                              variant="default"
                              className="h-8 px-2"
                              onClick={() => handleCompleteDay(reading.day)}
                            >
                              <Check className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ) : (
            /* Reading Plans Grid */
            <>
              <h2 className="text-2xl font-bold">{t('readingPlans.title')}</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {readingPlans.map((plan) => (
                  <ReadingPlanCard
                    key={plan.id}
                    plan={plan}
                    progress={getPlanProgress(plan.id)}
                    onStart={startPlan}
                    onSelect={setSelectedPlanId}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudyPage;
