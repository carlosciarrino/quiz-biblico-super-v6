import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, BookOpen, ChevronRight, Lightbulb, CheckCircle, XCircle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { questions, Question, getTranslatedQuestion, getTranslatedOptions, getQuestionsByCategory } from "@/data/questions";
import { getTranslatedExplanation } from "@/data/bibleReferences";
import bgStudyMode from "@/assets/bg-study-mode.webp";

const StudyMode = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const [studyQuestions, setStudyQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<'explanation' | 'question' | 'result'>('explanation');
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  
  const category = searchParams.get("category");
  
  useEffect(() => {
    let selectedQuestions: Question[];
    
    if (category) {
      selectedQuestions = getQuestionsByCategory(category);
    } else {
      const shuffled = [...questions].sort(() => Math.random() - 0.5);
      selectedQuestions = shuffled.slice(0, 10);
    }
    
    setStudyQuestions(selectedQuestions);
  }, [category]);
  
  const currentQuestion = studyQuestions[currentIndex];
  const { reference, explanation } = currentQuestion 
    ? getTranslatedExplanation(currentQuestion.id, i18n.language)
    : { reference: "", explanation: "" };
  
  const translatedQuestion = currentQuestion ? getTranslatedQuestion(currentQuestion, i18n.language) : "";
  const translatedOptions = currentQuestion ? getTranslatedOptions(currentQuestion, i18n.language) : [];
  
  const handleReadyToAnswer = () => {
    setPhase('question');
  };
  
  const handleSelectAnswer = (index: number) => {
    setSelectedAnswer(index);
    const isCorrect = index === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
    } else {
      setIncorrectCount(prev => prev + 1);
    }
    
    setPhase('result');
  };
  
  const handleNext = () => {
    if (currentIndex < studyQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setPhase('explanation');
      setSelectedAnswer(null);
    }
  };
  
  const handleRestart = () => {
    setCurrentIndex(0);
    setPhase('explanation');
    setSelectedAnswer(null);
    setCorrectCount(0);
    setIncorrectCount(0);
    
    const shuffled = [...studyQuestions].sort(() => Math.random() - 0.5);
    setStudyQuestions(shuffled);
  };
  
  const isComplete = currentIndex >= studyQuestions.length - 1 && phase === 'result';
  const progress = ((currentIndex + (phase === 'result' ? 1 : 0)) / studyQuestions.length) * 100;
  
  if (studyQuestions.length === 0) {
    return (
      <div className="min-h-screen relative">
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgStudyMode})` }}
        >
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        </div>
        <div className="relative flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgStudyMode})` }}
      >
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      </div>

      <div className="relative container mx-auto px-4 py-8">
        <div className="absolute top-4 right-4">
          <LanguageSwitcher />
        </div>

        <header className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-4 gap-2 hover-lift"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('common.back')}
          </Button>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-lg">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">{t('studyMode.title', 'Modalità Studio')}</h1>
              <p className="text-muted-foreground">{t('studyMode.subtitle', 'Impara prima di rispondere')}</p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="flex items-center gap-4 mb-4">
            <Progress value={progress} className="flex-1" />
            <span className="text-sm font-medium text-muted-foreground">
              {currentIndex + 1}/{studyQuestions.length}
            </span>
          </div>
          
          {/* Score Display */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">{correctCount}</span>
            </div>
            <div className="flex items-center gap-2 text-red-500">
              <XCircle className="w-5 h-5" />
              <span className="font-semibold">{incorrectCount}</span>
            </div>
          </div>
        </header>

        <div className="max-w-3xl mx-auto">
          {/* PHASE 1: Show Explanation BEFORE Question */}
          {phase === 'explanation' && (
            <Card className="animate-fade-in border-amber-200 bg-gradient-to-br from-amber-50/50 to-orange-50/30 dark:from-amber-950/20 dark:to-orange-950/10 backdrop-blur-sm hover-card-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-amber-700 dark:text-amber-400">
                  <BookOpen className="w-6 h-6" />
                  {t('studyMode.learnFirst', 'Prima leggi e impara')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-white/60 dark:bg-black/20 rounded-xl p-6 border border-amber-200/50">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">📖</span>
                    <span className="font-bold text-lg text-amber-800 dark:text-amber-300">
                      {reference}
                    </span>
                  </div>
                  <p className="text-foreground leading-relaxed text-lg">
                    {explanation}
                  </p>
                </div>
                
                <div className="bg-blue-50/50 dark:bg-blue-950/20 rounded-xl p-4 border border-blue-200/50">
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    💡 {t('studyMode.hint', 'Leggi attentamente questa spiegazione. Poi ti verrà fatta una domanda su questo argomento!')}
                  </p>
                </div>
                
                <Button 
                  onClick={handleReadyToAnswer}
                  className="w-full h-14 text-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 btn-interactive"
                >
                  {t('studyMode.readyToAnswer', 'Sono pronto a rispondere')}
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          )}
          
          {/* PHASE 2: Show Question */}
          {phase === 'question' && (
            <Card className="animate-fade-in backdrop-blur-sm bg-card/90 hover-card-lift">
              <CardHeader>
                <CardTitle className="text-xl leading-relaxed">
                  {translatedQuestion}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {translatedOptions.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    className="w-full justify-start text-left h-auto py-4 px-6 text-base font-medium transition-all hover:scale-[1.02] hover:bg-primary/10 hover-lift"
                    onClick={() => handleSelectAnswer(index)}
                  >
                    <span className="flex items-center gap-3 w-full">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 font-bold text-sm">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="flex-1">{option}</span>
                    </span>
                  </Button>
                ))}
              </CardContent>
            </Card>
          )}
          
          {/* PHASE 3: Show Result */}
          {phase === 'result' && (
            <Card className={`animate-fade-in backdrop-blur-sm ${
              selectedAnswer === currentQuestion.correctAnswer 
                ? 'border-green-500 bg-green-50/30 dark:bg-green-950/20' 
                : 'border-red-500 bg-red-50/30 dark:bg-red-950/20'
            }`}>
              <CardHeader>
                <CardTitle className={`flex items-center gap-3 ${
                  selectedAnswer === currentQuestion.correctAnswer 
                    ? 'text-green-700 dark:text-green-400' 
                    : 'text-red-700 dark:text-red-400'
                }`}>
                  {selectedAnswer === currentQuestion.correctAnswer ? (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      {t('studyMode.correct', 'Corretto!')}
                    </>
                  ) : (
                    <>
                      <XCircle className="w-6 h-6" />
                      {t('studyMode.incorrect', 'Sbagliato')}
                    </>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="font-medium">{translatedQuestion}</p>
                  <div className="space-y-2 mt-4">
                    {translatedOptions.map((option, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                          index === currentQuestion.correctAnswer
                            ? 'bg-green-100 dark:bg-green-900/30 border border-green-300'
                            : index === selectedAnswer
                            ? 'bg-red-100 dark:bg-red-900/30 border border-red-300'
                            : 'bg-muted/50'
                        }`}
                      >
                        <span className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${
                          index === currentQuestion.correctAnswer
                            ? 'bg-green-500 text-white'
                            : index === selectedAnswer
                            ? 'bg-red-500 text-white'
                            : 'bg-muted'
                        }`}>
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="flex-1">{option}</span>
                        {index === currentQuestion.correctAnswer && (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        )}
                        {index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                          <XCircle className="w-5 h-5 text-red-600" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Show explanation again */}
                <div className="bg-amber-50/50 dark:bg-amber-950/20 rounded-xl p-4 border border-amber-200/50 mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">📖</span>
                    <span className="font-bold text-amber-800 dark:text-amber-300">{reference}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{explanation}</p>
                </div>
                
                {isComplete ? (
                  <div className="space-y-4 mt-6">
                    <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
                      <h3 className="text-2xl font-bold mb-2">{t('studyMode.complete', 'Studio completato!')}</h3>
                      <p className="text-lg">
                        {t('studyMode.score', 'Punteggio')}: {correctCount}/{studyQuestions.length}
                      </p>
                      <p className="text-muted-foreground mt-2">
                        {correctCount === studyQuestions.length 
                          ? t('studyMode.perfect', 'Perfetto! Hai memorizzato tutto!')
                          : correctCount >= studyQuestions.length * 0.7
                          ? t('studyMode.good', 'Ottimo lavoro! Continua così!')
                          : t('studyMode.keepPracticing', 'Continua a studiare per migliorare!')}
                      </p>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button
                        onClick={handleRestart}
                        variant="outline"
                        className="flex-1 hover-lift"
                      >
                        <RotateCcw className="w-4 h-4 mr-2" />
                        {t('studyMode.restart', 'Ricomincia')}
                      </Button>
                      <Button
                        onClick={() => navigate("/")}
                        className="flex-1 btn-interactive"
                      >
                        {t('common.home', 'Home')}
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Button 
                    onClick={handleNext}
                    className="w-full h-12 text-lg mt-4 btn-interactive"
                  >
                    {t('studyMode.next', 'Prossima domanda')}
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudyMode;
