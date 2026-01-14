import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { questions, Question } from "@/data/questions";
import QuestionCard from "@/components/QuestionCard";
import TimedChallengeAchievements from "@/components/TimedChallengeAchievements";
import AchievementBadgeDisplay from "@/components/AchievementBadgeDisplay";
import AchievementUnlockedToast from "@/components/AchievementUnlockedToast";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Trophy, Clock, Zap, Target, Star, Play, Award } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import { fireCorrectAnswer } from "@/lib/confetti";
import { useTimedChallengeAchievements, timedChallengeAchievements } from "@/hooks/useTimedChallengeAchievements";
import bgTimedChallenge from "@/assets/bg-timed-challenge.webp";

type Difficulty = "easy" | "medium" | "hard";

interface GameState {
  status: "intro" | "playing" | "gameOver";
  score: number;
  streak: number;
  bestStreak: number;
  questionsAnswered: number;
  correctAnswers: number;
  currentDifficulty: Difficulty;
  timeRemaining: number;
  multiplier: number;
  reachedHard: boolean;
}

const INITIAL_TIME = 60;
const TIME_BONUS_CORRECT = 3;
const TIME_PENALTY_WRONG = 5;

const TimedChallenge = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { playCorrect, playIncorrect } = useSoundEffects();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const { 
    stats: achievementStats, 
    unlockedAchievements, 
    newlyUnlocked, 
    recordGameResult, 
    clearNewlyUnlocked,
    getAchievementProgress 
  } = useTimedChallengeAchievements();

  const [gameState, setGameState] = useState<GameState>({
    status: "intro",
    score: 0,
    streak: 0,
    bestStreak: 0,
    questionsAnswered: 0,
    correctAnswers: 0,
    currentDifficulty: "easy",
    timeRemaining: INITIAL_TIME,
    multiplier: 1,
    reachedHard: false,
  });

  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [answeredIds, setAnsweredIds] = useState<number[]>([]);
  const [showAchievements, setShowAchievements] = useState(false);
  const highScore = achievementStats.highScore;

  const getNextQuestion = useCallback((difficulty: Difficulty, answered: number[]): Question | null => {
    const available = questions.filter(
      (q) => !answered.includes(q.id) && q.difficulty === difficulty
    );
    
    if (available.length === 0) {
      const fallback = questions.filter((q) => !answered.includes(q.id));
      if (fallback.length === 0) return null;
      return fallback[Math.floor(Math.random() * fallback.length)];
    }
    
    return available[Math.floor(Math.random() * available.length)];
  }, []);

  const startGame = useCallback(() => {
    const firstQuestion = getNextQuestion("easy", []);
    setCurrentQuestion(firstQuestion);
    setAnsweredIds([]);
    setGameState({
      status: "playing",
      score: 0,
      streak: 0,
      bestStreak: 0,
      questionsAnswered: 0,
      correctAnswers: 0,
      currentDifficulty: "easy",
      timeRemaining: INITIAL_TIME,
      multiplier: 1,
      reachedHard: false,
    });
  }, [getNextQuestion]);

  useEffect(() => {
    if (gameState.status !== "playing") return;

    timerRef.current = setInterval(() => {
      setGameState((prev) => {
        if (prev.timeRemaining <= 1) {
          return { ...prev, status: "gameOver", timeRemaining: 0 };
        }
        return { ...prev, timeRemaining: prev.timeRemaining - 1 };
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameState.status]);

  useEffect(() => {
    if (gameState.status === "gameOver" && gameState.questionsAnswered > 0) {
      const isPerfect = gameState.correctAnswers === gameState.questionsAnswered && gameState.questionsAnswered >= 10;
      recordGameResult({
        score: gameState.score,
        bestStreak: gameState.bestStreak,
        questionsAnswered: gameState.questionsAnswered,
        correctAnswers: gameState.correctAnswers,
        reachedHard: gameState.reachedHard,
        isPerfect,
      });
    }
  }, [gameState.status]);

  const calculateDifficulty = (streak: number): Difficulty => {
    if (streak >= 6) return "hard";
    if (streak >= 3) return "medium";
    return "easy";
  };

  const calculateMultiplier = (difficulty: Difficulty, streak: number): number => {
    const difficultyMultiplier = difficulty === "hard" ? 3 : difficulty === "medium" ? 2 : 1;
    const streakBonus = Math.min(Math.floor(streak / 2), 3);
    return difficultyMultiplier + streakBonus;
  };

  const handleAnswer = useCallback((isCorrect: boolean) => {
    if (gameState.status !== "playing") return;

    if (isCorrect) {
      playCorrect();
      fireCorrectAnswer();
    } else {
      playIncorrect();
    }

    setGameState((prev) => {
      const newStreak = isCorrect ? prev.streak + 1 : 0;
      const newBestStreak = Math.max(prev.bestStreak, newStreak);
      const newDifficulty = calculateDifficulty(newStreak);
      const newMultiplier = calculateMultiplier(newDifficulty, newStreak);
      
      const basePoints = isCorrect ? 10 : 0;
      const pointsEarned = basePoints * prev.multiplier;
      
      const timeChange = isCorrect ? TIME_BONUS_CORRECT : -TIME_PENALTY_WRONG;
      const newTime = Math.max(0, prev.timeRemaining + timeChange);

      return {
        ...prev,
        score: prev.score + pointsEarned,
        streak: newStreak,
        bestStreak: newBestStreak,
        questionsAnswered: prev.questionsAnswered + 1,
        correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
        currentDifficulty: newDifficulty,
        timeRemaining: newTime,
        multiplier: newMultiplier,
        reachedHard: prev.reachedHard || newDifficulty === "hard",
        status: newTime <= 0 ? "gameOver" : "playing",
      };
    });

    if (currentQuestion) {
      const newAnswered = [...answeredIds, currentQuestion.id];
      setAnsweredIds(newAnswered);
      
      const newDifficulty = calculateDifficulty(isCorrect ? gameState.streak + 1 : 0);
      const next = getNextQuestion(newDifficulty, newAnswered);
      
      if (!next) {
        setGameState((prev) => ({ ...prev, status: "gameOver" }));
      } else {
        setCurrentQuestion(next);
      }
    }
  }, [gameState, currentQuestion, answeredIds, getNextQuestion, playCorrect, playIncorrect]);

  const getDifficultyColor = (difficulty: Difficulty) => {
    switch (difficulty) {
      case "easy": return "text-green-500";
      case "medium": return "text-yellow-500";
      case "hard": return "text-red-500";
    }
  };

  const getDifficultyBg = (difficulty: Difficulty) => {
    switch (difficulty) {
      case "easy": return "bg-green-500/10 border-green-500/30";
      case "medium": return "bg-yellow-500/10 border-yellow-500/30";
      case "hard": return "bg-red-500/10 border-red-500/30";
    }
  };

  // Intro screen
  if (gameState.status === "intro") {
    return (
      <div className="min-h-screen relative">
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgTimedChallenge})` }}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>
        
        <div className="relative container mx-auto px-4 py-8">
          <div className="mb-6 flex items-center justify-between">
            <Button variant="ghost" onClick={() => navigate("/")} className="gap-2 hover-lift">
              <ArrowLeft className="w-4 h-4" />
              {t('common.back')}
            </Button>
            <LanguageSwitcher />
          </div>

          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 shadow-lg animate-scale-in">
                <Zap className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t('timedChallenge.title')}
              </h1>
              <p className="text-muted-foreground text-lg">
                {t('timedChallenge.description')}
              </p>
            </div>

            <div className="grid gap-4 text-left">
              <Card className="p-4 flex items-start gap-3 hover-card-lift backdrop-blur-sm bg-card/90">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">{t('timedChallenge.rules.time')}</p>
                  <p className="text-sm text-muted-foreground">{t('timedChallenge.rules.timeDesc')}</p>
                </div>
              </Card>
              <Card className="p-4 flex items-start gap-3 hover-card-lift backdrop-blur-sm bg-card/90">
                <Target className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">{t('timedChallenge.rules.difficulty')}</p>
                  <p className="text-sm text-muted-foreground">{t('timedChallenge.rules.difficultyDesc')}</p>
                </div>
              </Card>
              <Card className="p-4 flex items-start gap-3 hover-card-lift backdrop-blur-sm bg-card/90">
                <Star className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">{t('timedChallenge.rules.multiplier')}</p>
                  <p className="text-sm text-muted-foreground">{t('timedChallenge.rules.multiplierDesc')}</p>
                </div>
              </Card>
            </div>

            {highScore > 0 && (
              <Card className="p-4 bg-primary/5 border-primary/20 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">{t('timedChallenge.highScore')}:</span>
                  <span className="font-bold text-xl text-primary">{highScore}</span>
                </div>
              </Card>
            )}

            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={startGame} className="gap-2 text-lg px-8 btn-interactive">
                <Play className="w-5 h-5" />
                {t('timedChallenge.start')}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => setShowAchievements(!showAchievements)} 
                className="gap-2 hover-lift"
              >
                <Award className="w-5 h-5" />
                {t('timedChallengeAchievements.title')}
              </Button>
            </div>

            {showAchievements && (
              <div className="animate-fade-in space-y-6">
                <AchievementBadgeDisplay 
                  stats={achievementStats}
                  unlockedCount={unlockedAchievements.length}
                  totalCount={timedChallengeAchievements.length}
                />
                
                <TimedChallengeAchievements 
                  unlockedAchievements={unlockedAchievements}
                  getProgress={getAchievementProgress}
                  stats={achievementStats}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Game over screen
  if (gameState.status === "gameOver") {
    const isNewHighScore = gameState.score >= highScore && gameState.score > 0;

    return (
      <div className="min-h-screen relative">
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgTimedChallenge})` }}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>
        
        <div className="relative container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              {isNewHighScore && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium animate-pulse">
                  <Star className="w-4 h-4" />
                  {t('timedChallenge.newHighScore')}
                </div>
              )}
              <h1 className="text-4xl font-bold">{t('timedChallenge.gameOver')}</h1>
            </div>

            <Card className="p-8 space-y-6 backdrop-blur-sm bg-card/90">
              <div className="text-center">
                <p className="text-muted-foreground mb-2">{t('timedChallenge.finalScore')}</p>
                <p className="text-6xl font-bold text-primary">{gameState.score}</p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">{gameState.questionsAnswered}</p>
                  <p className="text-sm text-muted-foreground">{t('timedChallenge.questions')}</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{gameState.bestStreak}</p>
                  <p className="text-sm text-muted-foreground">{t('timedChallenge.bestStreak')}</p>
                </div>
                <div className="text-center">
                  <p className={`text-2xl font-bold ${getDifficultyColor(gameState.currentDifficulty)}`}>
                    {t(`difficulty.${gameState.currentDifficulty}`)}
                  </p>
                  <p className="text-sm text-muted-foreground">{t('timedChallenge.maxDifficulty')}</p>
                </div>
              </div>
            </Card>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button variant="outline" onClick={() => navigate("/")} className="gap-2 hover-lift">
                <ArrowLeft className="w-4 h-4" />
                {t('common.back')}
              </Button>
              <Button onClick={startGame} className="gap-2 btn-interactive">
                <Play className="w-4 h-4" />
                {t('timedChallenge.playAgain')}
              </Button>
              <Button 
                variant="outline"
                onClick={() => setShowAchievements(!showAchievements)} 
                className="gap-2 hover-lift"
              >
                <Award className="w-4 h-4" />
                {t('timedChallengeAchievements.title')}
              </Button>
            </div>

            {showAchievements && (
              <div className="animate-fade-in space-y-6">
                <AchievementBadgeDisplay 
                  stats={achievementStats}
                  unlockedCount={unlockedAchievements.length}
                  totalCount={timedChallengeAchievements.length}
                />
                
                <TimedChallengeAchievements 
                  unlockedAchievements={unlockedAchievements}
                  getProgress={getAchievementProgress}
                  stats={achievementStats}
                />
              </div>
            )}
          </div>
        </div>

        <AchievementUnlockedToast 
          achievements={newlyUnlocked} 
          onClose={clearNewlyUnlocked} 
        />
      </div>
    );
  }

  // Playing screen
  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgTimedChallenge})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      <div className="relative container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate("/")} className="gap-2 hover-lift">
            <ArrowLeft className="w-4 h-4" />
            {t('common.back')}
          </Button>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-lg border shadow-sm">
              <Trophy className="w-5 h-5 text-primary" />
              <span className="font-bold text-lg">{gameState.score}</span>
            </div>
            <LanguageSwitcher />
          </div>
        </div>

        {/* Timer bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Clock className={`w-5 h-5 ${gameState.timeRemaining <= 10 ? "text-destructive animate-pulse" : "text-muted-foreground"}`} />
              <span className={`font-bold text-xl tabular-nums ${gameState.timeRemaining <= 10 ? "text-destructive" : ""}`}>
                {gameState.timeRemaining}s
              </span>
            </div>
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full border ${getDifficultyBg(gameState.currentDifficulty)}`}>
              <span className={`font-medium text-sm ${getDifficultyColor(gameState.currentDifficulty)}`}>
                {t(`difficulty.${gameState.currentDifficulty}`)}
              </span>
            </div>
          </div>
          <Progress 
            value={(gameState.timeRemaining / INITIAL_TIME) * 100} 
            className={`h-3 ${gameState.timeRemaining <= 10 ? "[&>div]:bg-destructive" : ""}`}
          />
        </div>

        {/* Stats row */}
        <div className="mb-6 flex items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-sm bg-card/90 backdrop-blur-sm px-3 py-1.5 rounded-lg">
            <Zap className="w-4 h-4 text-primary" />
            <span className="font-medium">{t('timedChallenge.streak')}: {gameState.streak}</span>
          </div>
          <div className="flex items-center gap-2 text-sm bg-card/90 backdrop-blur-sm px-3 py-1.5 rounded-lg">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="font-medium">{gameState.multiplier}x</span>
          </div>
        </div>

        {/* Question */}
        {currentQuestion && (
          <QuestionCard
            question={currentQuestion}
            onAnswer={handleAnswer}
            questionNumber={gameState.questionsAnswered + 1}
            totalQuestions={0}
          />
        )}
      </div>
    </div>
  );
};

export default TimedChallenge;
