import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useFlashcards } from "@/hooks/useFlashcards";
import { useFlashcardHistory } from "@/hooks/useFlashcardHistory";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
  Area,
  AreaChart,
} from "recharts";
import {
  Brain,
  Target,
  Trophy,
  Flame,
  Clock,
  TrendingUp,
  Calendar,
  CheckCircle,
  Layers,
} from "lucide-react";
import { format, parseISO } from "date-fns";
import { it, enUS, es, pt, fr } from "date-fns/locale";

const BOX_COLORS = [
  "hsl(0, 84%, 60%)",    // Box 1 - Red
  "hsl(25, 95%, 53%)",   // Box 2 - Orange
  "hsl(48, 96%, 53%)",   // Box 3 - Yellow
  "hsl(217, 91%, 60%)",  // Box 4 - Blue
  "hsl(142, 76%, 36%)",  // Box 5 - Green
];

const FlashcardStats = () => {
  const { t, i18n } = useTranslation();
  const { flashcards, getStats } = useFlashcards();
  const { streak, getDailyStats, getWeeklyStats, getTotalStats } = useFlashcardHistory();

  const stats = getStats();
  const weeklyStats = getWeeklyStats();
  const totalStats = getTotalStats();
  const dailyStats = getDailyStats(7);

  const getLocale = () => {
    const locales = { it, en: enUS, es, pt, fr };
    return locales[i18n.language as keyof typeof locales] || enUS;
  };

  // Box distribution pie chart data
  const boxPieData = useMemo(() => {
    return [1, 2, 3, 4, 5].map(box => ({
      name: `${t("flashcards.box")} ${box}`,
      value: stats.boxDistribution[box as keyof typeof stats.boxDistribution],
      fill: BOX_COLORS[box - 1],
    })).filter(d => d.value > 0);
  }, [stats.boxDistribution, t]);

  // Daily activity chart data
  const dailyChartData = useMemo(() => {
    return dailyStats.map(day => ({
      date: format(parseISO(day.date), "EEE", { locale: getLocale() }),
      fullDate: format(parseISO(day.date), "dd/MM", { locale: getLocale() }),
      cards: day.cardsReviewed,
      correct: day.correct,
      accuracy: day.accuracy,
    }));
  }, [dailyStats, i18n.language]);

  // Mastery progress data
  const masteryProgress = useMemo(() => {
    if (stats.total === 0) return 0;
    return Math.round((stats.mastered / stats.total) * 100);
  }, [stats]);

  // Format time
  const formatTime = (seconds: number) => {
    if (seconds < 60) return `${seconds}s`;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  if (stats.total === 0) {
    return (
      <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
        <CardContent className="p-8 text-center">
          <Brain className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
          <h3 className="text-lg font-semibold mb-2">{t("flashcardStats.noData")}</h3>
          <p className="text-muted-foreground">{t("flashcardStats.noDataDesc")}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
          <CardContent className="p-4 text-center">
            <Layers className="w-6 h-6 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold">{stats.total}</p>
            <p className="text-xs text-muted-foreground">{t("flashcards.totalCards")}</p>
          </CardContent>
        </Card>
        <Card className="bg-card/80 backdrop-blur-sm border-green-500/20">
          <CardContent className="p-4 text-center">
            <Trophy className="w-6 h-6 mx-auto mb-2 text-green-500" />
            <p className="text-2xl font-bold">{stats.mastered}</p>
            <p className="text-xs text-muted-foreground">{t("flashcards.mastered")}</p>
          </CardContent>
        </Card>
        <Card className="bg-card/80 backdrop-blur-sm border-orange-500/20">
          <CardContent className="p-4 text-center">
            <Flame className="w-6 h-6 mx-auto mb-2 text-orange-500" />
            <p className="text-2xl font-bold">{streak.current}</p>
            <p className="text-xs text-muted-foreground">{t("flashcardStats.currentStreak")}</p>
          </CardContent>
        </Card>
        <Card className="bg-card/80 backdrop-blur-sm border-blue-500/20">
          <CardContent className="p-4 text-center">
            <Target className="w-6 h-6 mx-auto mb-2 text-blue-500" />
            <p className="text-2xl font-bold">{totalStats.averageAccuracy}%</p>
            <p className="text-xs text-muted-foreground">{t("flashcardStats.avgAccuracy")}</p>
          </CardContent>
        </Card>
      </div>

      {/* Mastery Progress */}
      <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            {t("flashcardStats.masteryProgress")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{t("flashcardStats.cardsLearned")}</span>
              <span className="font-medium">{stats.mastered} / {stats.total}</span>
            </div>
            <Progress value={masteryProgress} className="h-3" />
            <p className="text-xs text-muted-foreground text-center">
              {masteryProgress}% {t("flashcardStats.complete")}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Activity Chart */}
      <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            {t("flashcardStats.weeklyActivity")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dailyChartData}>
                <defs>
                  <linearGradient id="cardsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="date" 
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                  formatter={(value: number, name: string) => [
                    value,
                    name === "cards" ? t("flashcardStats.cardsReviewed") : t("flashcardStats.correct"),
                  ]}
                  labelFormatter={(label) => label}
                />
                <Area
                  type="monotone"
                  dataKey="cards"
                  stroke="hsl(var(--primary))"
                  fill="url(#cardsGradient)"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="correct"
                  stroke="hsl(142, 76%, 36%)"
                  strokeWidth={2}
                  dot={{ fill: "hsl(142, 76%, 36%)", strokeWidth: 0, r: 4 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground">{t("flashcardStats.cardsReviewed")}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(142, 76%, 36%)" }} />
              <span className="text-sm text-muted-foreground">{t("flashcardStats.correct")}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Box Distribution & Accuracy */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Box Distribution Pie */}
        <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Layers className="w-5 h-5" />
              {t("flashcards.boxDistribution")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {boxPieData.length > 0 ? (
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={boxPieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={70}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {boxPieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-8">
                {t("flashcardStats.noData")}
              </p>
            )}
          </CardContent>
        </Card>

        {/* Accuracy Bar Chart */}
        <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              {t("flashcardStats.dailyAccuracy")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dailyChartData}>
                  <XAxis 
                    dataKey="date" 
                    stroke="hsl(var(--muted-foreground))" 
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))" 
                    fontSize={12}
                    domain={[0, 100]}
                    tickFormatter={(v) => `${v}%`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                    formatter={(value: number) => [`${value}%`, t("flashcardStats.accuracy")]}
                  />
                  <Bar 
                    dataKey="accuracy" 
                    fill="hsl(var(--primary))"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Summary */}
      <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Clock className="w-5 h-5" />
            {t("flashcardStats.weeklySummary")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-muted/30 rounded-lg">
              <p className="text-2xl font-bold">{weeklyStats.totalCards}</p>
              <p className="text-xs text-muted-foreground">{t("flashcardStats.cardsReviewed")}</p>
            </div>
            <div className="text-center p-3 bg-muted/30 rounded-lg">
              <p className="text-2xl font-bold">{weeklyStats.totalSessions}</p>
              <p className="text-xs text-muted-foreground">{t("flashcardStats.sessions")}</p>
            </div>
            <div className="text-center p-3 bg-muted/30 rounded-lg">
              <p className="text-2xl font-bold">{weeklyStats.daysActive}/7</p>
              <p className="text-xs text-muted-foreground">{t("flashcardStats.daysActive")}</p>
            </div>
            <div className="text-center p-3 bg-muted/30 rounded-lg">
              <p className="text-2xl font-bold">{weeklyStats.averageAccuracy}%</p>
              <p className="text-xs text-muted-foreground">{t("flashcardStats.avgAccuracy")}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Streak Info */}
      <Card className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border-orange-500/20">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-orange-500/20 rounded-full">
                <Flame className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <p className="font-semibold">{t("flashcardStats.studyStreak")}</p>
                <p className="text-sm text-muted-foreground">
                  {t("flashcardStats.bestStreak")}: {streak.best} {t("flashcardStats.days")}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-orange-500">{streak.current}</p>
              <p className="text-xs text-muted-foreground">{t("flashcardStats.days")}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FlashcardStats;
