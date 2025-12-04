import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ReadingPlan } from "@/data/readingPlans";
import { UserPlanProgress } from "@/hooks/useReadingPlans";
import { useTranslation } from "react-i18next";
import { Play, RotateCcw } from "lucide-react";

interface ReadingPlanCardProps {
  plan: ReadingPlan;
  progress?: UserPlanProgress;
  onStart: (planId: string) => void;
  onSelect: (planId: string) => void;
}

const ReadingPlanCard = ({ plan, progress, onStart, onSelect }: ReadingPlanCardProps) => {
  const { t } = useTranslation();
  
  const completedCount = progress?.completedDays.length || 0;
  const percentage = Math.round((completedCount / plan.duration) * 100);
  const isStarted = progress && progress.isActive;
  const isCompleted = completedCount === plan.duration;

  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card border-border/50"
      onClick={() => isStarted ? onSelect(plan.id) : undefined}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{plan.icon}</span>
          <CardTitle className="text-lg">{t(`readingPlans.${plan.name}`)}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          {t(`readingPlans.${plan.description}`)}
        </p>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">{plan.duration} {t('readingPlans.days')}</span>
          {isStarted && (
            <span className="font-medium text-primary">
              {completedCount}/{plan.duration} {t('readingPlans.completed')}
            </span>
          )}
        </div>

        {isStarted && (
          <Progress value={percentage} className="h-2" />
        )}

        <div className="flex gap-2">
          {!isStarted ? (
            <Button 
              onClick={(e) => { e.stopPropagation(); onStart(plan.id); }} 
              className="w-full gap-2"
            >
              <Play className="w-4 h-4" />
              {t('readingPlans.start')}
            </Button>
          ) : isCompleted ? (
            <Button 
              onClick={(e) => { e.stopPropagation(); onStart(plan.id); }} 
              variant="outline"
              className="w-full gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              {t('readingPlans.restart')}
            </Button>
          ) : (
            <Button 
              onClick={(e) => { e.stopPropagation(); onSelect(plan.id); }} 
              className="w-full"
            >
              {t('readingPlans.continue')}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ReadingPlanCard;
