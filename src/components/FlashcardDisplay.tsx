import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Question } from "@/data/questions";
import { Flashcard } from "@/hooks/useFlashcards";
import { useTranslation } from "react-i18next";
import { Check, X, RotateCcw, BookOpen, Layers } from "lucide-react";

interface FlashcardDisplayProps {
  flashcard: Flashcard;
  question: Question;
  onAnswer: (wasCorrect: boolean) => void;
  currentIndex: number;
  totalCount: number;
}

const FlashcardDisplay = ({
  flashcard,
  question,
  onAnswer,
  currentIndex,
  totalCount,
}: FlashcardDisplayProps) => {
  const { t, i18n } = useTranslation();
  const [isFlipped, setIsFlipped] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentLang = i18n.language as "it" | "en" | "es" | "pt" | "fr";

  const questionText =
    question.questions?.[currentLang] || question.question;
  const options =
    question.optionsTranslated?.[currentLang] || question.options;
  const correctAnswer = options[question.correctAnswer];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) {
      setShowAnswer(true);
    }
  };

  const handleAnswer = (wasCorrect: boolean) => {
    setIsFlipped(false);
    setShowAnswer(false);
    onAnswer(wasCorrect);
  };

  const getBoxColor = (box: number) => {
    const colors = {
      1: "bg-red-500/20 text-red-400 border-red-500/30",
      2: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      3: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      4: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      5: "bg-green-500/20 text-green-400 border-green-500/30",
    };
    return colors[box as keyof typeof colors] || colors[1];
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress and Box Info */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1">
            <Layers className="w-3 h-3" />
            {currentIndex + 1} / {totalCount}
          </Badge>
        </div>
        <Badge className={`${getBoxColor(flashcard.box)} border`}>
          {t("flashcards.box")} {flashcard.box}
        </Badge>
      </div>

      {/* Flashcard */}
      <div className="perspective-1000 relative h-80" onClick={handleFlip}>
        <AnimatePresence mode="wait">
          <motion.div
            key={isFlipped ? "back" : "front"}
            initial={{ rotateY: isFlipped ? -90 : 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: isFlipped ? 90 : -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Card className="h-full p-6 cursor-pointer bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all flex flex-col">
              {!isFlipped ? (
                /* Front - Question */
                <div className="flex-1 flex flex-col justify-center items-center text-center">
                  <BookOpen className="w-8 h-8 text-primary/60 mb-4" />
                  <p className="text-lg font-medium leading-relaxed">
                    {questionText}
                  </p>
                  <p className="text-sm text-muted-foreground mt-6">
                    {t("flashcards.tapToReveal")}
                  </p>
                </div>
              ) : (
                /* Back - Answer */
                <div className="flex-1 flex flex-col justify-center items-center text-center">
                  <Check className="w-8 h-8 text-green-500 mb-4" />
                  <p className="text-sm text-muted-foreground mb-2">
                    {t("flashcards.correctAnswer")}
                  </p>
                  <p className="text-xl font-bold text-green-500">
                    {correctAnswer}
                  </p>
                  <div className="mt-4 text-sm text-muted-foreground">
                    <Badge variant="outline">{question.category}</Badge>
                  </div>
                </div>
              )}
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Answer Buttons */}
      <AnimatePresence>
        {showAnswer && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-6 space-y-3"
          >
            <p className="text-center text-sm text-muted-foreground">
              {t("flashcards.didYouKnow")}
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAnswer(false);
                }}
                variant="outline"
                className="flex-1 max-w-40 gap-2 bg-red-500/10 border-red-500/30 hover:bg-red-500/20 text-red-400"
              >
                <X className="w-4 h-4" />
                {t("flashcards.no")}
              </Button>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAnswer(true);
                }}
                className="flex-1 max-w-40 gap-2 bg-green-500/10 border-green-500/30 hover:bg-green-500/20 text-green-400"
                variant="outline"
              >
                <Check className="w-4 h-4" />
                {t("flashcards.yes")}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showAnswer && (
        <div className="mt-6 text-center">
          <Button
            onClick={handleFlip}
            variant="outline"
            className="gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            {t("flashcards.showAnswer")}
          </Button>
        </div>
      )}
    </div>
  );
};

export default FlashcardDisplay;
