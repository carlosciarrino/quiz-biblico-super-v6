import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getQuestionsByCategory } from "@/data/questions";
import QuestionCard from "@/components/QuestionCard";
import Timer from "@/components/Timer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Quiz = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const category = searchParams.get("category") || "Antico Testamento";
  
  const [questions] = useState(() => getQuestionsByCategory(category));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(true);

  useEffect(() => {
    if (questions.length === 0) {
      navigate("/");
    }
  }, [questions, navigate]);

  const handleAnswer = (isCorrect: boolean) => {
    // Nuovo sistema: +5 per corretta, -1 per sbagliata
    const points = isCorrect ? 5 : -1;
    setScore((prev) => Math.max(0, prev + points));

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setIsTimerActive(true);
    } else {
      // Quiz completato
      const finalScore = Math.max(0, score + points);
      navigate(`/results?score=${finalScore}&total=${questions.length * 5}&category=${category}`);
    }
  };

  const handleTimeUp = () => {
    setIsTimerActive(false);
    handleAnswer(false);
  };

  if (questions.length === 0) {
    return null;
  }

  const currentQuestion = questions[currentQuestionIndex];

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
            {category}
          </h1>
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
      </div>
    </div>
  );
};

export default Quiz;
