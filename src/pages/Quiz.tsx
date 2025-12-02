import { useState, useEffect, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getQuestionsByCategory, getFullBibleQuestions, getRandomQuestions, Question } from "@/data/questions";
import QuestionCard from "@/components/QuestionCard";
import Timer from "@/components/Timer";
import DifficultyIndicator, { DifficultyLevel } from "@/components/DifficultyIndicator";
import MotivationalMessage from "@/components/MotivationalMessage";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Quiz = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const category = searchParams.get("category") || "Antico Testamento";
  const quizType = searchParams.get("type") || "thematic";
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(true);
  
  // Adaptive difficulty state
  const [difficulty, setDifficulty] = useState<DifficultyLevel>("easy");
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
  const [recentAnswers, setRecentAnswers] = useState<boolean[]>([]);
  
  // Motivational message state
  const [showMotivational, setShowMotivational] = useState(false);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);

  useEffect(() => {
    let loadedQuestions: Question[] = [];
    
    if (quizType === "fullBible") {
      loadedQuestions = getFullBibleQuestions(100);
    } else if (quizType === "random") {
      loadedQuestions = getRandomQuestions(100);
    } else {
      loadedQuestions = getQuestionsByCategory(category);
    }
    
    setQuestions(loadedQuestions);
  }, [category, quizType]);

  useEffect(() => {
    if (questions.length === 0) return;
    
    // Check if quiz is complete
    if (currentQuestionIndex >= questions.length) {
      const finalScore = score;
      const quizCategory = quizType === "fullBible" 
        ? t('quizTypes.fullBible.title')
        : quizType === "random"
        ? t('quizTypes.random.title')
        : category;
      navigate(`/results?score=${finalScore}&total=${questions.length * 5}&category=${encodeURIComponent(quizCategory)}`);
    }
  }, [currentQuestionIndex, questions.length, navigate, score, category, quizType, t]);

  const updateDifficulty = useCallback((isCorrect: boolean) => {
    // Update consecutive correct count
    if (isCorrect) {
      const newConsecutive = consecutiveCorrect + 1;
      setConsecutiveCorrect(newConsecutive);
      
      // Increase difficulty after 3 consecutive correct
      if (newConsecutive >= 3 && difficulty !== "hard") {
        setDifficulty(prev => prev === "easy" ? "medium" : "hard");
        setConsecutiveCorrect(0);
      }
    } else {
      setConsecutiveCorrect(0);
    }
    
    // Track recent answers for mistake-based decrease
    const newRecentAnswers = [...recentAnswers.slice(-4), isCorrect];
    setRecentAnswers(newRecentAnswers);
    
    // Decrease difficulty after 2 mistakes in last 5 answers
    const recentMistakes = newRecentAnswers.filter(a => !a).length;
    if (recentMistakes >= 2 && difficulty !== "easy") {
      setDifficulty(prev => prev === "hard" ? "medium" : "easy");
      setRecentAnswers([]);
    }
  }, [consecutiveCorrect, difficulty, recentAnswers]);

  const handleAnswer = (isCorrect: boolean) => {
    // Scoring: +5 for correct, -1 for wrong
    const points = isCorrect ? 5 : -1;
    setScore((prev) => Math.max(0, prev + points));
    
    // Update adaptive difficulty
    updateDifficulty(isCorrect);
    
    // Track questions answered for motivational messages
    const newQuestionsAnswered = questionsAnswered + 1;
    setQuestionsAnswered(newQuestionsAnswered);
    
    // Show motivational message every 3 questions
    if (newQuestionsAnswered % 3 === 0) {
      setShowMotivational(true);
    }

    // Move to next question
    setCurrentQuestionIndex((prev) => prev + 1);
    setIsTimerActive(true);
  };

  const handleTimeUp = () => {
    setIsTimerActive(false);
    handleAnswer(false);
  };

  const handleCloseMotivational = useCallback(() => {
    setShowMotivational(false);
  }, []);

  if (questions.length === 0) {
    return null;
  }

  if (currentQuestionIndex >= questions.length) {
    return null;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const recentMistakes = recentAnswers.filter(a => !a).length;

  const getQuizTitle = () => {
    if (quizType === "fullBible") return t('quizTypes.fullBible.title');
    if (quizType === "random") return t('quizTypes.random.title');
    return category;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('quiz.backToMenu')}
          </Button>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border shadow-sm">
              <Trophy className="w-5 h-5 text-primary" />
              <span className="font-bold text-lg">{score}</span>
              <span className="text-muted-foreground text-sm">/ {questions.length * 5}</span>
            </div>
            <LanguageSwitcher />
          </div>
        </div>

        <div className="mb-6">
          <h1 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {getQuizTitle()}
          </h1>
        </div>

        {/* Difficulty Indicator */}
        <div className="mb-4 flex justify-center">
          <DifficultyIndicator
            level={difficulty}
            consecutiveCorrect={consecutiveCorrect}
            recentMistakes={recentMistakes}
          />
        </div>

        <div className="mb-6">
          <Timer
            duration={30}
            onTimeUp={handleTimeUp}
            isActive={isTimerActive}
            key={currentQuestionIndex}
          />
        </div>

        <QuestionCard
          question={currentQuestion}
          onAnswer={handleAnswer}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
        />

        {/* Motivational Message */}
        <MotivationalMessage
          show={showMotivational}
          onClose={handleCloseMotivational}
        />
      </div>
    </div>
  );
};

export default Quiz;
