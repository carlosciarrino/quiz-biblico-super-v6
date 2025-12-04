import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  ResponsiveContainer,
  LineChart,
  Line,
  Area,
  AreaChart,
} from "recharts";
import { UserStats } from "@/hooks/useUserStats";
import { LevelInfo } from "@/hooks/useUserLevel";
import LevelDisplay from "./LevelDisplay";
import { TrendingUp, Calendar, Target } from "lucide-react";

interface ProgressDashboardProps {
  stats: UserStats;
  levelInfo: LevelInfo;
}

const ProgressDashboard = ({ stats, levelInfo }: ProgressDashboardProps) => {
  const { t } = useTranslation();

  const weeklyData = useMemo(() => {
    const days = ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'];
    const now = new Date();
    const weekData = [];

    for (let i = 6; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      
      const dayQuizzes = stats.quizHistory.filter(q => q.date === dateStr);
      const avgScore = dayQuizzes.length > 0
        ? Math.round(dayQuizzes.reduce((sum, q) => sum + q.percentage, 0) / dayQuizzes.length)
        : 0;

      weekData.push({
        day: days[date.getDay()],
        quizzes: dayQuizzes.length,
        score: avgScore,
      });
    }

    return weekData;
  }, [stats.quizHistory]);

  const monthlyData = useMemo(() => {
    const now = new Date();
    const monthData = [];

    for (let i = 3; i >= 0; i--) {
      const weekStart = new Date(now);
      weekStart.setDate(weekStart.getDate() - (i * 7 + 6));
      const weekEnd = new Date(now);
      weekEnd.setDate(weekEnd.getDate() - i * 7);

      const weekQuizzes = stats.quizHistory.filter(q => {
        const qDate = new Date(q.date);
        return qDate >= weekStart && qDate <= weekEnd;
      });

      const avgScore = weekQuizzes.length > 0
        ? Math.round(weekQuizzes.reduce((sum, q) => sum + q.percentage, 0) / weekQuizzes.length)
        : 0;

      monthData.push({
        week: `${t('dashboard.week')} ${4 - i}`,
        quizzes: weekQuizzes.length,
        score: avgScore,
      });
    }

    return monthData;
  }, [stats.quizHistory, t]);

  const categoryData = useMemo(() => {
    return Object.entries(stats.categoryStats).map(([category, data]) => ({
      category: t(`categories.${getCategoryKey(category)}.name`).substring(0, 12),
      score: data.averagePercentage,
      quizzes: data.quizzesCompleted,
    }));
  }, [stats.categoryStats, t]);

  const chartConfig = {
    quizzes: {
      label: t('dashboard.quizzes'),
      color: "hsl(var(--primary))",
    },
    score: {
      label: t('dashboard.avgScore'),
      color: "hsl(var(--accent))",
    },
  };

  if (stats.totalQuizzesCompleted === 0) {
    return (
      <div className="text-center py-12">
        <Target className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">{t('stats.noData')}</h3>
        <p className="text-muted-foreground">{t('stats.startQuiz')}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Level Display */}
      <LevelDisplay levelInfo={levelInfo} />

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-card">
          <CardContent className="p-4 text-center">
            <div className="text-3xl font-bold text-primary">{stats.totalQuizzesCompleted}</div>
            <div className="text-sm text-muted-foreground">{t('stats.quizzesCompleted')}</div>
          </CardContent>
        </Card>
        <Card className="bg-card">
          <CardContent className="p-4 text-center">
            <div className="text-3xl font-bold text-accent">{stats.overallAveragePercentage}%</div>
            <div className="text-sm text-muted-foreground">{t('stats.averageScore')}</div>
          </CardContent>
        </Card>
        <Card className="bg-card">
          <CardContent className="p-4 text-center">
            <div className="text-3xl font-bold text-success">{stats.streakDays}</div>
            <div className="text-sm text-muted-foreground">{t('stats.streakDays')}</div>
          </CardContent>
        </Card>
        <Card className="bg-card">
          <CardContent className="p-4 text-center">
            <div className="text-3xl font-bold text-primary">{stats.totalCorrectAnswers}</div>
            <div className="text-sm text-muted-foreground">{t('dashboard.correctAnswers')}</div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Progress */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Calendar className="w-5 h-5 text-primary" />
            {t('dashboard.weeklyProgress')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[200px] w-full">
            <AreaChart data={weeklyData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <XAxis dataKey="day" tickLine={false} axisLine={false} fontSize={12} />
              <YAxis tickLine={false} axisLine={false} fontSize={12} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="score"
                stroke="hsl(var(--accent))"
                fill="hsl(var(--accent) / 0.2)"
                strokeWidth={2}
              />
              <Bar dataKey="quizzes" fill="hsl(var(--primary))" radius={4} />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Monthly Progress */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-lg">
            <TrendingUp className="w-5 h-5 text-accent" />
            {t('dashboard.monthlyProgress')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[200px] w-full">
            <LineChart data={monthlyData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <XAxis dataKey="week" tickLine={false} axisLine={false} fontSize={12} />
              <YAxis tickLine={false} axisLine={false} fontSize={12} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="score"
                stroke="hsl(var(--accent))"
                strokeWidth={3}
                dot={{ fill: "hsl(var(--accent))", strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="quizzes"
                stroke="hsl(var(--primary))"
                strokeWidth={3}
                dot={{ fill: "hsl(var(--primary))", strokeWidth: 2 }}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Category Performance */}
      {categoryData.length > 0 && (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">{t('dashboard.categoryPerformance')}</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[200px] w-full">
              <BarChart data={categoryData} layout="vertical" margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <XAxis type="number" tickLine={false} axisLine={false} fontSize={12} />
                <YAxis dataKey="category" type="category" tickLine={false} axisLine={false} fontSize={10} width={80} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="score" fill="hsl(var(--primary))" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

const getCategoryKey = (category: string): string => {
  const mapping: Record<string, string> = {
    "Antico Testamento": "oldTestament",
    "Nuovo Testamento": "newTestament",
    "Personaggi Biblici": "biblicalCharacters",
    "Pentateuco": "pentateuch",
    "Profeti Minori": "minorProphets",
    "Quattro Vangeli": "fourGospels",
    "Lettere Paoline": "paulineLetters",
  };
  return mapping[category] || "oldTestament";
};

export default ProgressDashboard;
