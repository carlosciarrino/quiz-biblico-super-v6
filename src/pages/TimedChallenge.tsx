import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { questions, Question } from "@/data/questions";
import QuestionCard from "@/components/QuestionCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Trophy, Clock, Zap, Target, Star, Play } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import { fireCorrectAnswer } from "@/lib/confetti";

type Difficulty = "easy" | "medium" | "hard";

interface GameState {
  status: "intro" | "playing" | "gameOver";
  score: number;
  streak: number;
  bestStreak: number;
  questionsAnswered: number;
  currentDifficulty: Difficulty;
  timeRemaining: number;
  multiplier: number;
}

const INITIAL_TIME = 60; // 60 seconds total game time
const TIME_BONUS_CORRECT = 3; // +3 seconds for correct answer
const TIME_PENALTY_WRONG = 5; // -5 seconds for wrong answer

const TimedChallenge = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { playCorrect, playIncorrect } = useSoundEffects();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [gameState, setGameState] = useState<GameState>({
    status: "intro",
    score: 0,
    streak: 0,
    bestStreak: 0,
    questionsAnswered: 0,
    currentDifficulty: "easy",
    timeRemaining: INITIAL_TIME,
    multiplier: 1,
  });

  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [answeredIds, setAnsweredIds] = useState<number[]>([]);
  const [highScore, setHighScore] = useState(0);

  // Load high score
  useEffect(() => {
    const saved = localStorage.getItem("timed_challenge_high_score");
    if (saved) setHighScore(parseInt(saved, 10));
  }, []);

  // Get next question based on difficulty
  const getNextQuestion = useCallback((difficulty: Difficulty, answered: number[]): Question | null => {
    const available = questions.filter(
      (q) => !answered.includes(q.id) && q.difficulty === difficulty
    );
    
    if (available.length === 0) {
      // Fallback to any unanswered question
      const fallback = questions.filter((q) => !answered.includes(q.id));
      if (fallback.length === 0) return null;
      return fallback[Math.floor(Math.random() * fallback.length)];
    }
    
    return available[Math.floor(Math.random() * available.length)];
  }, []);

  // Start game
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
      currentDifficulty: "easy",
      timeRemaining: INITIAL_TIME,
      multiplier: 1,
    });
  }, [getNextQuestion]);

  // Timer effect
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

  // Save high score on game over
  useEffect(() => {
    if (gameState.status === "gameOver" && gameState.score > highScore) {
      setHighScore(gameState.score);
      localStorage.setItem("timed_challenge_high_score", gameState.score.toString());
    }
  }, [gameState.status, gameState.score, highScore]);

  // Calculate new difficulty based on streak
  const calculateDifficulty = (streak: number): Difficulty => {
    if (streak >= 6) return "hard";
    if (streak >= 3) return "medium";
    return "easy";
  };

  // Calculate multiplier based on difficulty and streak
  const calculateMultiplier = (difficulty: Difficulty, streak: number): number => {
    const difficultyMultiplier = difficulty === "hard" ? 3 : difficulty === "medium" ? 2 : 1;
    const streakBonus = Math.min(Math.floor(streak / 2), 3); // Max +3 from streak
    return difficultyMultiplier + streakBonus;
  };

  // Handle answer
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
        currentDifficulty: newDifficulty,
        timeRemaining: newTime,
        multiplier: newMultiplier,
        status: newTime <= 0 ? "gameOver" : "playing",
      };
    });

    // Get next question
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
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6 flex items-center justify-between">
            <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              {t('common.back')}
            </Button>
            <LanguageSwitcher />
          </div>

          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
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
              <Card className="p-4 flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">{t('timedChallenge.rules.time')}</p>
                  <p className="text-sm text-muted-foreground">{t('timedChallenge.rules.timeDesc')}</p>
                </div>
              </Card>
              <Card className="p-4 flex items-start gap-3">
                <Target className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">{t('timedChallenge.rules.difficulty')}</p>
                  <p className="text-sm text-muted-foreground">{t('timedChallenge.rules.difficultyDesc')}</p>
                </div>
              </Card>
              <Card className="p-4 flex items-start gap-3">
                <Star className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">{t('timedChallenge.rules.multiplier')}</p>
                  <p className="text-sm text-muted-foreground">{t('timedChallenge.rules.multiplierDesc')}</p>
                </div>
              </Card>
            </div>

            {highScore > 0 && (
              <Card className="p-4 bg-primary/5 border-primary/20">
                <div className="flex items-center justify-center gap-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">{t('timedChallenge.highScore')}:</span>
                  <span className="font-bold text-xl text-primary">{highScore}</span>
                </div>
              </Card>
            )}

            <Button size="lg" onClick={startGame} className="gap-2 text-lg px-8">
              <Play className="w-5 h-5" />
              {t('timedChallenge.start')}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Game over screen
  if (gameState.status === "gameOver") {
    const isNewHighScore = gameState.score >= highScore && gameState.score > 0;

    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="container mx-auto px-4 py-8">
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

            <Card className="p-8 space-y-6">
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

            <div className="flex gap-4 justify-center">
              <Button variant="outline" onClick={() => navigate("/")} className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                {t('common.back')}
              </Button>
              <Button onClick={startGame} className="gap-2">
                <Play className="w-4 h-4" />
                {t('timedChallenge.playAgain')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Playing screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            {t('common.back')}
          </Button>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border shadow-sm">
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
          <div className="flex items-center gap-2 text-sm">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">{t('timedChallenge.streak')}:</span>
            <span className="font-bold">{gameState.streak}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">{t('timedChallenge.multiplierLabel')}:</span>
            <span className="font-bold">x{gameState.multiplier}</span>
          </div>
        </div>

        {/* Question */}
        {currentQuestion && (
          <QuestionCard
            question={currentQuestion}
            onAnswer={handleAnswer}
            questionNumber={gameState.questionsAnswered + 1}
            totalQuestions={0} // Hide total in timed mode
          />
        )}
      </div>
    </div>
  );
};

export default TimedChallenge;
