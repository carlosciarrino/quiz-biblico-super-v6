import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useWrongAnswers, WrongAnswer } from "@/hooks/useWrongAnswers";
import { getQuestionById } from "@/data/questions";
import { AlertTriangle, RotateCcw, TrendingDown, Target } from "lucide-react";

const WrongAnswersStats = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { wrongAnswers, totalWrongAnswers, clearAllWrongAnswers } = useWrongAnswers();

  const getCategoryTranslationKey = (category: string): string => {
    const categoryMap: Record<string, string> = {
      "Antico Testamento": "categories.oldTestament.name",
      "Nuovo Testamento": "categories.newTestament.name",
      "Personaggi Biblici": "categories.biblicalCharacters.name",
      "Pentateuco": "categories.pentateuch.name",
      "Profeti Minori": "categories.minorProphets.name",
      "Quattro Vangeli": "categories.fourGospels.name",
      "Lettere Paoline": "categories.paulineLetters.name",
      "Letteratura Sapienziale": "categories.wisdomLiterature.name",
      "Atti degli Apostoli": "categories.actsApostles.name",
      "Apocalisse": "categories.revelation.name",
    };
    return categoryMap[category] || category;
  };

  // Stats by category
  const categoryStats = useMemo(() => {
    const stats: Record<string, number> = {};
    
    wrongAnswers.forEach((wa) => {
      const question = getQuestionById(wa.questionId);
      if (question) {
        stats[question.category] = (stats[question.category] || 0) + wa.attempts;
      }
    });

    return Object.entries(stats)
      .map(([category, attempts]) => ({
        category: t(getCategoryTranslationKey(category)).substring(0, 10),
        fullCategory: category,
        attempts,
      }))
      .sort((a, b) => b.attempts - a.attempts)
      .slice(0, 5);
  }, [wrongAnswers, t]);

  // Stats by difficulty
  const difficultyStats = useMemo(() => {
    const stats: Record<string, number> = { easy: 0, medium: 0, hard: 0 };
    
    wrongAnswers.forEach((wa) => {
      const question = getQuestionById(wa.questionId);
      if (question) {
        stats[question.difficulty] += wa.attempts;
      }
    });

    const colors = {
      easy: "hsl(var(--success))",
      medium: "hsl(var(--warning))",
      hard: "hsl(var(--destructive))",
    };

    return Object.entries(stats)
      .filter(([_, value]) => value > 0)
      .map(([difficulty, value]) => ({
        name: t(`difficulty.${difficulty}`),
        value,
        color: colors[difficulty as keyof typeof colors],
      }));
  }, [wrongAnswers, t]);

  // Most failed questions
  const topFailedQuestions = useMemo(() => {
    return [...wrongAnswers]
      .sort((a, b) => b.attempts - a.attempts)
      .slice(0, 5)
      .map((wa) => {
        const question = getQuestionById(wa.questionId);
        return {
          ...wa,
          questionText: question?.question.substring(0, 50) + "..." || "",
          category: question?.category || "",
        };
      });
  }, [wrongAnswers]);

  const chartConfig = {
    attempts: {
      label: t('wrongAnswersStats.attempts'),
      color: "hsl(var(--destructive))",
    },
  };

  if (totalWrongAnswers === 0) {
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <Target className="w-16 h-16 mx-auto text-success mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {t('review.noErrors')}
          </h3>
          <p className="text-muted-foreground">{t('review.noErrorsDesc')}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Overview Card */}
      <Card className="bg-gradient-to-br from-destructive/10 to-orange-500/10 border-destructive/20">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-lg">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            {t('wrongAnswersStats.title')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center p-4 bg-background/50 rounded-lg">
              <div className="text-3xl font-bold text-destructive">{totalWrongAnswers}</div>
              <div className="text-sm text-muted-foreground">{t('wrongAnswersStats.questionsToReview')}</div>
            </div>
            <div className="text-center p-4 bg-background/50 rounded-lg">
              <div className="text-3xl font-bold text-orange-500">
                {wrongAnswers.reduce((sum, wa) => sum + wa.attempts, 0)}
              </div>
              <div className="text-sm text-muted-foreground">{t('wrongAnswersStats.totalAttempts')}</div>
            </div>
          </div>
          <Button
            className="w-full gap-2"
            onClick={() => navigate("/review")}
          >
            <RotateCcw className="w-4 h-4" />
            {t('review.startReview')}
          </Button>
        </CardContent>
      </Card>

      {/* Category Distribution */}
      {categoryStats.length > 0 && (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <TrendingDown className="w-5 h-5 text-orange-500" />
              {t('wrongAnswersStats.byCategory')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[200px] w-full">
              <BarChart data={categoryStats} layout="vertical" margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <XAxis type="number" tickLine={false} axisLine={false} fontSize={12} />
                <YAxis dataKey="category" type="category" tickLine={false} axisLine={false} fontSize={10} width={70} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="attempts" fill="hsl(var(--destructive))" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      )}

      {/* Difficulty Distribution */}
      {difficultyStats.length > 0 && (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">{t('wrongAnswersStats.byDifficulty')}</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[200px] w-full">
              <PieChart>
                <Pie
                  data={difficultyStats}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                  labelLine={false}
                >
                  {difficultyStats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      )}

      {/* Most Failed Questions */}
      {topFailedQuestions.length > 0 && (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">{t('wrongAnswersStats.mostFailed')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topFailedQuestions.map((item, index) => (
                <div
                  key={item.questionId}
                  className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-destructive/20 text-destructive font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {item.questionText}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t(getCategoryTranslationKey(item.category))} • {item.attempts} {t('wrongAnswersStats.attempts')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default WrongAnswersStats;
