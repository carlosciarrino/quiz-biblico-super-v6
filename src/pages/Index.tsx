import { useNavigate, useSearchParams } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from "react";
import { categories } from "@/data/questions";
import { Book, Sparkles, BookOpen, Shuffle, BarChart3, Trophy, GraduationCap, LayoutDashboard, Zap, RotateCcw, Lightbulb, Bell } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { useUserStats } from "@/hooks/useUserStats";
import { useUserLevel } from "@/hooks/useUserLevel";
import { useLeaderboard } from "@/hooks/useLeaderboard";
import { useChallenge } from "@/hooks/useChallenge";
import { useDailyLoginReward } from "@/hooks/useDailyLoginReward";
import { useLevelUpDetector } from "@/hooks/useLevelUpDetector";
import { useWrongAnswers } from "@/hooks/useWrongAnswers";
import { toast } from "sonner";
import { initializeNotifications } from "@/services/notificationService";
import DailyVerseCard from "@/components/DailyVerseCard";
import LevelDisplay from "@/components/LevelDisplay";
import bgMain from "@/assets/bg-main.webp";

// Lazy load below-the-fold components
const CategoryCard = lazy(() => import("@/components/CategoryCard"));
const UserStatsDisplay = lazy(() => import("@/components/UserStatsDisplay"));
const SmartReviewSuggestion = lazy(() => import("@/components/SmartReviewSuggestion"));
const Leaderboard = lazy(() => import("@/components/Leaderboard"));
const ChallengeCard = lazy(() => import("@/components/ChallengeCard"));
const DailyRewardPopup = lazy(() => import("@/components/DailyRewardPopup"));
const LevelUpAnimation = lazy(() => import("@/components/LevelUpAnimation"));
const NotificationSettings = lazy(() => import("@/components/NotificationSettings"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="animate-pulse bg-muted/50 rounded-lg h-24 w-full" />
);

const Index = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { stats, getStrongestCategory, getWeakestCategory } = useUserStats();
  const levelInfo = useUserLevel(stats);
  const { entries } = useLeaderboard();
  const { getChallenge } = useChallenge();
  const { state: loginState, showRewardPopup, claimReward, closePopup } = useDailyLoginReward();
  const { showLevelUp, newLevel, newTitle, closeLevelUp } = useLevelUpDetector(stats);
  const { totalWrongAnswers } = useWrongAnswers();
  const [showStats, setShowStats] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  // Initialize notifications on mount
  useEffect(() => {
    initializeNotifications();
  }, []);
  
  const challengeId = searchParams.get("challenge");
  const challenge = challengeId ? getChallenge(challengeId) : null;

  const handleClaimReward = () => {
    const xpBonus = claimReward();
    toast.success(t('dailyReward.claimed', { xp: xpBonus }));
  };

  const handleCategoryClick = (categoryName: string) => {
    navigate(`/quiz?category=${encodeURIComponent(categoryName)}&type=thematic`);
  };

  const handleQuizTypeSelect = (type: "thematic" | "fullBible" | "random") => {
    if (type === "fullBible") {
      navigate(`/quiz?type=fullBible`);
    } else if (type === "random") {
      navigate(`/quiz?type=random`);
    }
  };

  const handleAcceptChallenge = () => {
    if (!challenge) return;
    
    if (challenge.quizType === "fullBible") {
      navigate(`/quiz?type=fullBible&challenge=${challengeId}`);
    } else if (challenge.quizType === "random") {
      navigate(`/quiz?type=random&challenge=${challengeId}`);
    } else {
      navigate(`/quiz?category=${encodeURIComponent(challenge.category)}&type=thematic&challenge=${challengeId}`);
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgMain})` }}
      >
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      </div>
      
      <div className="relative container mx-auto px-4 py-12">
        <div className="absolute top-4 right-4 z-10">
          <LanguageSwitcher />
        </div>
        
        <header className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent text-white mb-6 shadow-lg">
            <Book className="w-10 h-10" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-slide-up">
            {t('app.title')}
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('app.subtitle')}
          </p>

          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>30s {t('home.features.timer')}</span>
            <span>•</span>
            <span>{t('scoring.correct')} / {t('scoring.incorrect')}</span>
            <span>•</span>
            <span>{t('home.features.adaptive')}</span>
          </div>
        </header>

        <main className="max-w-5xl mx-auto">
          {/* Daily Verse Card */}
          <div className="mb-8 max-w-lg mx-auto animate-fade-in">
            <DailyVerseCard />
          </div>

          {/* Challenge Card */}
          {challenge && (
            <div className="mb-12 max-w-md mx-auto">
              <Suspense fallback={<LoadingFallback />}>
                <ChallengeCard challenge={challenge} onAccept={handleAcceptChallenge} />
              </Suspense>
            </div>
          )}

          {/* Level Display on Home - min-height to prevent CLS */}
          <div className="mb-8 max-w-md mx-auto min-h-[72px]">
            {stats.totalQuizzesCompleted > 0 && (
              <div className="animate-fade-in">
                <LevelDisplay levelInfo={levelInfo} />
              </div>
            )}
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-3">
            <Button
              onClick={() => navigate("/dashboard")}
              variant="default"
              className="gap-2"
            >
              <LayoutDashboard className="w-4 h-4" />
              {t('dashboard.title')}
            </Button>
            <Button
              onClick={() => navigate("/study")}
              variant="outline"
              className="gap-2"
            >
              <GraduationCap className="w-4 h-4" />
              {t('study.title')}
            </Button>
            <Button
              onClick={() => navigate("/bible")}
              variant="outline"
              className="gap-2"
            >
              <Book className="w-4 h-4" />
              {t('bible.title')}
            </Button>
            <Button
              onClick={() => setShowStats(!showStats)}
              variant="outline"
              className="gap-2"
            >
              <BarChart3 className="w-4 h-4" />
              {t('stats.yourProgress')}
            </Button>
            <Button
              onClick={() => setShowLeaderboard(!showLeaderboard)}
              variant="outline"
              className="gap-2"
            >
              <Trophy className="w-4 h-4" />
              {t('leaderboard.title')}
            </Button>
            <Button
              onClick={() => setShowNotifications(!showNotifications)}
              variant="outline"
              className="gap-2"
            >
              <Bell className="w-4 h-4" />
              {t('notifications.title')}
            </Button>
          </div>

          {/* User Stats Display */}
          {showStats && (
            <div className="mb-12 animate-fade-in space-y-6">
              <h2 className="text-2xl font-bold text-center text-foreground">
                {t('stats.yourProgress')}
              </h2>
              <Suspense fallback={<LoadingFallback />}>
                <UserStatsDisplay
                  stats={stats}
                  strongestCategory={getStrongestCategory()}
                  weakestCategory={getWeakestCategory()}
                />
                <SmartReviewSuggestion stats={stats} />
              </Suspense>
            </div>
          )}

          {/* Leaderboard */}
          {showLeaderboard && (
            <div className="mb-12 animate-fade-in">
              <Suspense fallback={<LoadingFallback />}>
                <Leaderboard entries={entries} />
              </Suspense>
            </div>
          )}

          {/* Notification Settings */}
          {showNotifications && (
            <div className="mb-12 max-w-md mx-auto animate-fade-in">
              <Suspense fallback={<LoadingFallback />}>
                <NotificationSettings />
              </Suspense>
            </div>
          )}

          {/* Smart Review Button */}
          {totalWrongAnswers > 0 && (
            <div className="mb-12 max-w-lg mx-auto">
              <Button
                variant="outline"
                className="w-full h-auto p-6 flex items-center gap-4 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-amber-500/10 hover:from-red-500/20 hover:via-orange-500/20 hover:to-amber-500/20 border-red-500/30"
                onClick={() => navigate("/review")}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white shrink-0">
                  <RotateCcw className="w-7 h-7" />
                </div>
                <div className="text-left flex-1">
                  <div className="font-bold text-lg">{t('review.startReview')}</div>
                  <div className="text-sm text-muted-foreground">
                    {t('review.subtitle', { remaining: totalWrongAnswers })}
                  </div>
                </div>
              </Button>
            </div>
          )}

          {/* Study Mode Button */}
          <div className="mb-8 max-w-lg mx-auto">
            <Button
              variant="outline"
              className="w-full h-auto p-6 flex items-center gap-4 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-yellow-500/10 hover:from-amber-500/20 hover:via-orange-500/20 hover:to-yellow-500/20 border-amber-500/30"
              onClick={() => navigate("/study-mode")}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shrink-0">
                <Lightbulb className="w-7 h-7" />
              </div>
              <div className="text-left flex-1">
                <div className="font-bold text-lg">{t('studyMode.startStudy', 'Modalità Studio')}</div>
                <div className="text-sm text-muted-foreground">
                  {t('studyMode.studyDescription', 'Leggi le spiegazioni bibliche prima di rispondere')}
                </div>
              </div>
            </Button>
          </div>

          {/* Timed Challenge Mode */}
          <div className="mb-12 max-w-lg mx-auto">
            <Button
              variant="outline"
              className="w-full h-auto p-6 flex items-center gap-4 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 hover:from-orange-500/20 hover:via-red-500/20 hover:to-pink-500/20 border-orange-500/30"
              onClick={() => navigate("/timed-challenge")}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white shrink-0">
                <Zap className="w-7 h-7" />
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">{t('timedChallenge.title')}</div>
                <div className="text-sm text-muted-foreground">{t('timedChallenge.shortDesc')}</div>
              </div>
            </Button>
          </div>

          {/* Special Quiz Types */}
          <div className="mb-12 space-y-6">
            <h2 className="text-2xl font-bold text-center text-foreground">
              {t('quizTypes.specialQuizzes')}
            </h2>
            
            <div className="grid gap-4 md:grid-cols-2 max-w-2xl mx-auto">
              <Button
                variant="outline"
                className="h-auto p-6 flex flex-col items-center gap-3 bg-gradient-to-br from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 border-primary/30"
                onClick={() => handleQuizTypeSelect("fullBible")}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg">{t('quizTypes.fullBible.title')}</div>
                  <div className="text-sm text-muted-foreground">{t('quizTypes.fullBible.description')}</div>
                </div>
              </Button>

              <Button
                variant="outline"
                className="h-auto p-6 flex flex-col items-center gap-3 bg-gradient-to-br from-accent/10 to-secondary/10 hover:from-accent/20 hover:to-secondary/20 border-accent/30"
                onClick={() => handleQuizTypeSelect("random")}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white">
                  <Shuffle className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg">{t('quizTypes.random.title')}</div>
                  <div className="text-sm text-muted-foreground">{t('quizTypes.random.description')}</div>
                </div>
              </Button>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
            {t('quizTypes.thematic.title')}
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            {t('quizTypes.thematic.description')}
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Suspense fallback={<LoadingFallback />}>
              {categories.map((category, index) => (
                <div
                  key={category.id}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <CategoryCard
                    name={category.name}
                    description={category.description}
                    icon={category.icon}
                    color={category.color}
                    onClick={() => handleCategoryClick(category.name)}
                  />
                </div>
              ))}
            </Suspense>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 bg-card px-8 py-4 rounded-2xl border shadow-md">
              <div className="text-left">
                <div className="text-3xl font-bold text-primary">200</div>
                <div className="text-sm text-muted-foreground">{t('stats.totalQuestions')}</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-left">
                <div className="text-3xl font-bold text-accent">10</div>
                <div className="text-sm text-muted-foreground">{t('stats.categories')}</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-left">
                <div className="text-3xl font-bold text-green-500">3</div>
                <div className="text-sm text-muted-foreground">{t('stats.difficultyLevels')}</div>
              </div>
            </div>
          </div>
        </main>

        {/* Daily Reward Popup */}
        <Suspense fallback={null}>
          <DailyRewardPopup
            open={showRewardPopup && !loginState.todayRewardClaimed}
            onClose={closePopup}
            onClaim={handleClaimReward}
            reward={loginState.currentReward}
            consecutiveDays={loginState.consecutiveDays}
          />
        </Suspense>

        {/* Level Up Animation */}
        <Suspense fallback={null}>
          <LevelUpAnimation
            open={showLevelUp}
            onClose={closeLevelUp}
            newLevel={newLevel}
            title={newTitle}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default Index;
