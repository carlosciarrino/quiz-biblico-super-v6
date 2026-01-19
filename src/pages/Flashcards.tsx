import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useFlashcards, Flashcard } from "@/hooks/useFlashcards";
import { useFlashcardHistory } from "@/hooks/useFlashcardHistory";
import { useWrongAnswers } from "@/hooks/useWrongAnswers";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import FlashcardDisplay from "@/components/FlashcardDisplay";
import FlashcardStats from "@/components/FlashcardStats";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import bgMain from "@/assets/bg-main.webp";
import {
  ArrowLeft,
  Layers,
  Brain,
  Trophy,
  Plus,
  RotateCcw,
  Trash2,
  BookOpen,
  Clock,
  Target,
  Sparkles,
  BarChart3,
} from "lucide-react";
import { Question } from "@/data/questions";

const Flashcards = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { playCorrect, playIncorrect } = useSoundEffects();
  const {
    flashcards,
    addFlashcardsFromWrongAnswers,
    reviewFlashcard,
    getDueFlashcards,
    getFlashcardWithQuestion,
    getStats,
    clearAllFlashcards,
  } = useFlashcards();
  const { wrongAnswers } = useWrongAnswers();
  const { recordSession } = useFlashcardHistory();

  const [isStudying, setIsStudying] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [dueCards, setDueCards] = useState<
    { flashcard: Flashcard; question: Question }[]
  >([]);
  const [sessionStats, setSessionStats] = useState({ correct: 0, incorrect: 0 });
  const [isComplete, setIsComplete] = useState(false);
  const [activeTab, setActiveTab] = useState("cards");
  const sessionStartTime = useRef<number>(0);

  const stats = getStats();

  // Load due cards when starting study
  useEffect(() => {
    if (isStudying) {
      const due = getDueFlashcards();
      const cardsWithQuestions = due
        .map((f) => getFlashcardWithQuestion(f))
        .filter(
          (item): item is { flashcard: Flashcard; question: Question } =>
            item !== null
        );
      setDueCards(cardsWithQuestions);
      setCurrentCardIndex(0);
      setSessionStats({ correct: 0, incorrect: 0 });
      setIsComplete(false);
      sessionStartTime.current = Date.now();
    }
  }, [isStudying, getDueFlashcards, getFlashcardWithQuestion]);

  const handleImportFromWrongAnswers = () => {
    const wrongAnswerIds = wrongAnswers.map((wa) => wa.questionId);
    addFlashcardsFromWrongAnswers(wrongAnswerIds);
  };

  const handleAnswer = (wasCorrect: boolean) => {
    const currentCard = dueCards[currentCardIndex];
    if (!currentCard) return;

    reviewFlashcard(currentCard.flashcard.questionId, wasCorrect);

    if (wasCorrect) {
      playCorrect();
      setSessionStats((prev) => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      playIncorrect();
      setSessionStats((prev) => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }

    // Move to next card
    if (currentCardIndex + 1 < dueCards.length) {
      setCurrentCardIndex((prev) => prev + 1);
    } else {
      // Session complete - record it
      const duration = Math.round((Date.now() - sessionStartTime.current) / 1000);
      const totalCards = sessionStats.correct + sessionStats.incorrect + 1;
      const correct = wasCorrect ? sessionStats.correct + 1 : sessionStats.correct;
      const incorrect = wasCorrect ? sessionStats.incorrect : sessionStats.incorrect + 1;
      
      recordSession({
        cardsReviewed: totalCards,
        correct,
        incorrect,
        duration,
      });
      
      setIsComplete(true);
    }
  };

  const handleStartStudy = () => {
    setIsStudying(true);
  };

  const handleEndStudy = () => {
    setIsStudying(false);
    setIsComplete(false);
  };

  const currentCard = dueCards[currentCardIndex];
  const sessionProgress =
    dueCards.length > 0
      ? ((currentCardIndex + (isComplete ? 1 : 0)) / dueCards.length) * 100
      : 0;

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bgMain})` }}
    >
      <div className="min-h-screen bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Button
              onClick={() => (isStudying ? handleEndStudy() : navigate("/"))}
              variant="ghost"
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              {isStudying ? t("flashcards.endSession") : t("common.back")}
            </Button>
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>

          {!isStudying ? (
            /* Dashboard View */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto space-y-6"
            >
              {/* Title */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold flex items-center justify-center gap-3">
                  <Brain className="w-8 h-8 text-primary" />
                  {t("flashcards.title")}
                </h1>
                <p className="text-muted-foreground mt-2">
                  {t("flashcards.subtitle")}
                </p>
              </div>

              {/* Tabs for Cards / Stats */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="cards" className="gap-2">
                    <Layers className="w-4 h-4" />
                    {t("flashcardStats.cardsTab")}
                  </TabsTrigger>
                  <TabsTrigger value="stats" className="gap-2">
                    <BarChart3 className="w-4 h-4" />
                    {t("flashcardStats.statsTab")}
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="cards" className="space-y-6">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
                      <CardContent className="p-4 text-center">
                        <Layers className="w-6 h-6 mx-auto mb-2 text-primary" />
                        <p className="text-2xl font-bold">{stats.total}</p>
                        <p className="text-xs text-muted-foreground">
                          {t("flashcards.totalCards")}
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-card/80 backdrop-blur-sm border-orange-500/20">
                      <CardContent className="p-4 text-center">
                        <Clock className="w-6 h-6 mx-auto mb-2 text-orange-500" />
                        <p className="text-2xl font-bold">{stats.due}</p>
                        <p className="text-xs text-muted-foreground">
                          {t("flashcards.dueToday")}
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-card/80 backdrop-blur-sm border-blue-500/20">
                      <CardContent className="p-4 text-center">
                        <Target className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                        <p className="text-2xl font-bold">{stats.learning}</p>
                        <p className="text-xs text-muted-foreground">
                          {t("flashcards.learning")}
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-card/80 backdrop-blur-sm border-green-500/20">
                      <CardContent className="p-4 text-center">
                        <Trophy className="w-6 h-6 mx-auto mb-2 text-green-500" />
                        <p className="text-2xl font-bold">{stats.mastered}</p>
                        <p className="text-xs text-muted-foreground">
                          {t("flashcards.mastered")}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Box Distribution */}
                  {stats.total > 0 && (
                    <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Layers className="w-5 h-5" />
                          {t("flashcards.boxDistribution")}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {[1, 2, 3, 4, 5].map((box) => {
                            const count =
                              stats.boxDistribution[
                                box as keyof typeof stats.boxDistribution
                              ];
                            const percentage =
                              stats.total > 0 ? (count / stats.total) * 100 : 0;
                            return (
                              <div key={box} className="flex items-center gap-3">
                                <Badge variant="outline" className="w-16">
                                  {t("flashcards.box")} {box}
                                </Badge>
                                <Progress value={percentage} className="flex-1" />
                                <span className="text-sm text-muted-foreground w-12 text-right">
                                  {count}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {stats.due > 0 ? (
                      <Button
                        onClick={handleStartStudy}
                        size="lg"
                        className="gap-2 bg-primary hover:bg-primary/90"
                      >
                        <BookOpen className="w-5 h-5" />
                        {t("flashcards.startStudy")} ({stats.due})
                      </Button>
                    ) : (
                      <Button size="lg" disabled className="gap-2">
                        <Sparkles className="w-5 h-5" />
                        {t("flashcards.noCardsDue")}
                      </Button>
                    )}

                    {wrongAnswers.length > 0 && (
                      <Button
                        onClick={handleImportFromWrongAnswers}
                        variant="outline"
                        size="lg"
                        className="gap-2"
                      >
                        <Plus className="w-5 h-5" />
                        {t("flashcards.importWrongAnswers")} ({wrongAnswers.length})
                      </Button>
                    )}
                  </div>

                  {stats.total > 0 && (
                    <div className="flex justify-center">
                      <Button
                        onClick={clearAllFlashcards}
                        variant="ghost"
                        size="sm"
                        className="gap-2 text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                        {t("flashcards.clearAll")}
                      </Button>
                    </div>
                  )}

                  {/* Empty State */}
                  {stats.total === 0 && (
                    <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
                      <CardContent className="p-8 text-center">
                        <Brain className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
                        <h3 className="text-lg font-semibold mb-2">
                          {t("flashcards.emptyTitle")}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {t("flashcards.emptyDescription")}
                        </p>
                        {wrongAnswers.length > 0 && (
                          <Button
                            onClick={handleImportFromWrongAnswers}
                            className="gap-2"
                          >
                            <Plus className="w-4 h-4" />
                            {t("flashcards.importWrongAnswers")} (
                            {wrongAnswers.length})
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>

                <TabsContent value="stats">
                  <FlashcardStats />
                </TabsContent>
              </Tabs>
            </motion.div>
          ) : isComplete ? (
            /* Session Complete */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto text-center"
            >
              <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
                <CardContent className="p-8">
                  <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
                  <h2 className="text-2xl font-bold mb-4">
                    {t("flashcards.sessionComplete")}
                  </h2>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-green-500/10 rounded-lg">
                      <p className="text-3xl font-bold text-green-500">
                        {sessionStats.correct}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {t("flashcards.correct")}
                      </p>
                    </div>
                    <div className="p-4 bg-red-500/10 rounded-lg">
                      <p className="text-3xl font-bold text-red-500">
                        {sessionStats.incorrect}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {t("flashcards.incorrect")}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button onClick={handleEndStudy} className="w-full gap-2">
                      <ArrowLeft className="w-4 h-4" />
                      {t("flashcards.backToDashboard")}
                    </Button>
                    <Button
                      onClick={() => {
                        setIsComplete(false);
                        setIsStudying(true);
                      }}
                      variant="outline"
                      className="w-full gap-2"
                    >
                      <RotateCcw className="w-4 h-4" />
                      {t("flashcards.studyAgain")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            /* Study Mode */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-2xl mx-auto"
            >
              {/* Session Progress */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                  <span>{t("flashcards.progress")}</span>
                  <span>
                    {sessionStats.correct + sessionStats.incorrect} /{" "}
                    {dueCards.length}
                  </span>
                </div>
                <Progress value={sessionProgress} />
              </div>

              {/* Current Flashcard */}
              {currentCard && (
                <FlashcardDisplay
                  flashcard={currentCard.flashcard}
                  question={currentCard.question}
                  onAnswer={handleAnswer}
                  currentIndex={currentCardIndex}
                  totalCount={dueCards.length}
                />
              )}

              {!currentCard && dueCards.length === 0 && (
                <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-8 text-center">
                    <Sparkles className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <p className="text-lg">{t("flashcards.noCardsDue")}</p>
                    <Button
                      onClick={handleEndStudy}
                      className="mt-4"
                      variant="outline"
                    >
                      {t("flashcards.backToDashboard")}
                    </Button>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Flashcards;
