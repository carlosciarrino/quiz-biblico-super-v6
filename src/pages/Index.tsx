import { useNavigate, useSearchParams } from "react-router-dom";
import CategoryCard from "@/components/CategoryCard";
import QuizTypeSelector from "@/components/QuizTypeSelector";
import UserStatsDisplay from "@/components/UserStatsDisplay";
import SmartReviewSuggestion from "@/components/SmartReviewSuggestion";
import Leaderboard from "@/components/Leaderboard";
import ChallengeCard from "@/components/ChallengeCard";
import LevelDisplay from "@/components/LevelDisplay";
import DailyRewardPopup from "@/components/DailyRewardPopup";
import LevelUpAnimation from "@/components/LevelUpAnimation";
import { categories } from "@/data/questions";
import { Book, Sparkles, BookOpen, Shuffle, BarChart3, Trophy, GraduationCap, LayoutDashboard } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { useUserStats } from "@/hooks/useUserStats";
import { useUserLevel } from "@/hooks/useUserLevel";
import { useLeaderboard } from "@/hooks/useLeaderboard";
import { useChallenge } from "@/hooks/useChallenge";
import { useDailyLoginReward } from "@/hooks/useDailyLoginReward";
import { useLevelUpDetector } from "@/hooks/useLevelUpDetector";
import { useState, useEffect } from "react";
import { toast } from "sonner";

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
  const [showStats, setShowStats] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="absolute top-4 right-4">
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
          {/* Challenge Card */}
          {challenge && (
            <div className="mb-12 max-w-md mx-auto">
              <ChallengeCard challenge={challenge} onAccept={handleAcceptChallenge} />
            </div>
          )}

          {/* Level Display on Home */}
          {stats.totalQuizzesCompleted > 0 && (
            <div className="mb-8 max-w-md mx-auto animate-fade-in">
              <LevelDisplay levelInfo={levelInfo} />
            </div>
          )}

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
          </div>

          {/* User Stats Display */}
          {showStats && (
            <div className="mb-12 animate-fade-in space-y-6">
              <h2 className="text-2xl font-bold text-center text-foreground">
                {t('stats.yourProgress')}
              </h2>
              <UserStatsDisplay
                stats={stats}
                strongestCategory={getStrongestCategory()}
                weakestCategory={getWeakestCategory()}
              />
              <SmartReviewSuggestion stats={stats} />
            </div>
          )}

          {/* Leaderboard */}
          {showLeaderboard && (
            <div className="mb-12 animate-fade-in">
              <Leaderboard entries={entries} />
            </div>
          )}

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
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 bg-card px-8 py-4 rounded-2xl border shadow-md">
              <div className="text-left">
                <div className="text-3xl font-bold text-primary">140</div>
                <div className="text-sm text-muted-foreground">{t('stats.totalQuestions')}</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-left">
                <div className="text-3xl font-bold text-accent">7</div>
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
        <DailyRewardPopup
          open={showRewardPopup && !loginState.todayRewardClaimed}
          onClose={closePopup}
          onClaim={handleClaimReward}
          reward={loginState.currentReward}
          consecutiveDays={loginState.consecutiveDays}
        />

        {/* Level Up Animation */}
        <LevelUpAnimation
          open={showLevelUp}
          onClose={closeLevelUp}
          newLevel={newLevel}
          title={newTitle}
        />
      </div>
    </div>
  );
};

export default Index;
