import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getQuestionById, Question } from "@/data/questions";
import QuestionCard from "@/components/QuestionCard";
import Timer from "@/components/Timer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trophy, RotateCcw, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import { fireCorrectAnswer } from "@/lib/confetti";
import { useWrongAnswers } from "@/hooks/useWrongAnswers";
import bgReview from "@/assets/bg-review.webp";

const ReviewQuiz = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { playCorrect, playIncorrect } = useSoundEffects();
  const { wrongAnswers, getReviewQuestions, removeWrongAnswer, recordWrongAnswer } = useWrongAnswers();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [masteredCount, setMasteredCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const questionIds = getReviewQuestions(15);
    const loadedQuestions = questionIds
      .map(id => getQuestionById(id))
      .filter((q): q is Question => q !== undefined);
    setQuestions(loadedQuestions);
  }, [getReviewQuestions]);

  useEffect(() => {
    if (questions.length > 0 && currentQuestionIndex >= questions.length) {
      setIsComplete(true);
    }
  }, [currentQuestionIndex, questions.length]);

  const handleAnswer = (isCorrect: boolean) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (isCorrect) {
      playCorrect();
      fireCorrectAnswer();
      setScore((prev) => prev + 5);
      removeWrongAnswer(currentQuestion.id);
      setMasteredCount(prev => prev + 1);
    } else {
      playIncorrect();
      setScore((prev) => Math.max(0, prev - 1));
      recordWrongAnswer(currentQuestion.id, -1, currentQuestion.correctAnswer);
    }

    setCurrentQuestionIndex((prev) => prev + 1);
    setIsTimerActive(true);
  };

  const handleTimeUp = () => {
    setIsTimerActive(false);
    handleAnswer(false);
  };

  const handleRestart = useCallback(() => {
    const questionIds = getReviewQuestions(15);
    const loadedQuestions = questionIds
      .map(id => getQuestionById(id))
      .filter((q): q is Question => q !== undefined);
    setQuestions(loadedQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setMasteredCount(0);
    setIsComplete(false);
    setIsTimerActive(true);
  }, [getReviewQuestions]);

  // No wrong answers to review
  if (wrongAnswers.length === 0) {
    return (
      <div className="min-h-screen relative">
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgReview})` }}
        >
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        </div>
        <div className="relative flex items-center justify-center min-h-screen">
          <div className="text-center max-w-md mx-auto p-8">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold mb-4">{t('review.noErrors')}</h1>
            <p className="text-muted-foreground mb-8">
              {t('review.noErrorsDesc')}
            </p>
            <Button onClick={() => navigate("/")} className="gap-2 btn-interactive">
              <ArrowLeft className="w-4 h-4" />
              {t('quiz.backToMenu')}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Review complete
  if (isComplete) {
    const percentage = Math.round((masteredCount / questions.length) * 100);
    return (
      <div className="min-h-screen relative">
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgReview})` }}
        >
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        </div>
        <div className="relative flex items-center justify-center min-h-screen">
          <div className="text-center max-w-md mx-auto p-8">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
              <Trophy className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-2">{t('review.complete')}</h1>
            <p className="text-muted-foreground mb-6">
              {t('review.masteredCount', { count: masteredCount, total: questions.length })}
            </p>
            
            <div className="bg-card/90 backdrop-blur-sm rounded-xl p-6 mb-6 border shadow-lg">
              <div className="text-4xl font-bold text-primary mb-2">{percentage}%</div>
              <div className="text-sm text-muted-foreground">{t('review.accuracy')}</div>
            </div>

            <div className="flex gap-3 justify-center">
              <Button variant="outline" onClick={() => navigate("/")} className="gap-2 hover-lift">
                <ArrowLeft className="w-4 h-4" />
                {t('quiz.backToMenu')}
              </Button>
              {wrongAnswers.length > 0 && (
                <Button onClick={handleRestart} className="gap-2 btn-interactive">
                  <RotateCcw className="w-4 h-4" />
                  {t('review.continueReview')}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return null;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgReview})` }}
      >
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      </div>

      <div className="relative container mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="gap-2 hover-lift"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('quiz.backToMenu')}
          </Button>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-lg border shadow-sm">
              <Trophy className="w-5 h-5 text-primary" />
              <span className="font-bold text-lg">{score}</span>
            </div>
            <LanguageSwitcher />
          </div>
        </div>

        <div className="mb-6">
          <h1 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            {t('review.title')}
          </h1>
          <p className="text-center text-muted-foreground text-sm">
            {t('review.subtitle', { remaining: wrongAnswers.length })}
          </p>
        </div>

        <div className="mb-6">
          <Timer
            duration={45}
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

export default ReviewQuiz;
