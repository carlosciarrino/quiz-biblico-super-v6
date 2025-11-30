import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { Question, getTranslatedQuestion, getTranslatedOptions } from "@/data/questions";
import { useTranslation } from "react-i18next";

interface QuestionCardProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionCard = ({ question, onAnswer, questionNumber, totalQuestions }: QuestionCardProps) => {
  const { t, i18n } = useTranslation();
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const translatedQuestion = getTranslatedQuestion(question, i18n.language);
  const translatedOptions = getTranslatedOptions(question, i18n.language);

  const handleAnswer = (index: number) => {
    if (showResult) return;

    setSelectedAnswer(index);
    setShowResult(true);
    const isCorrect = index === question.correctAnswer;

    setTimeout(() => {
      onAnswer(isCorrect);
      setSelectedAnswer(null);
      setShowResult(false);
    }, 1500);
  };

  const getButtonVariant = (index: number) => {
    if (!showResult) return "outline";
    if (index === question.correctAnswer) return "default";
    if (index === selectedAnswer) return "destructive";
    return "outline";
  };

  const getButtonIcon = (index: number) => {
    if (!showResult) return null;
    if (index === question.correctAnswer) return <Check className="w-5 h-5" />;
    if (index === selectedAnswer) return <X className="w-5 h-5" />;
    return null;
  };

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in">
      <div className="mb-6 flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground">
          {t('quiz.question')} {questionNumber} {t('quiz.of')} {totalQuestions}
        </span>
        <div className="flex gap-1">
          {Array.from({ length: totalQuestions }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 w-8 rounded-full transition-colors ${
                i < questionNumber ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-card to-card/80 rounded-2xl p-8 shadow-lg border">
        <h2 className="text-2xl font-bold text-foreground mb-8 leading-relaxed">
          {translatedQuestion}
        </h2>

        <div className="space-y-3">
          {translatedOptions.map((option, index) => (
            <Button
              key={index}
              variant={getButtonVariant(index)}
              size="lg"
              className="w-full justify-start text-left h-auto py-4 px-6 text-base font-medium transition-all hover:scale-[1.02] disabled:opacity-100"
              onClick={() => handleAnswer(index)}
              disabled={showResult}
            >
              <span className="flex items-center gap-3 w-full">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-background/50 font-bold text-sm">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-1">{option}</span>
                {getButtonIcon(index)}
              </span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
