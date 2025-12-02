import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { BookOpen, Shuffle, Layers, Sparkles } from "lucide-react";

export type QuizType = "thematic" | "fullBible" | "random";

interface QuizTypeSelectorProps {
  onSelectType: (type: QuizType, category?: string) => void;
  categories: { id: string; name: string; description: string; icon: string; color: string }[];
}

const QuizTypeSelector = ({ onSelectType, categories }: QuizTypeSelectorProps) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      {/* Special Quiz Types */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-foreground text-center mb-6">
          {t('quizTypes.specialQuizzes')}
        </h3>
        
        <div className="grid gap-4 md:grid-cols-2">
          <Button
            variant="outline"
            className="h-auto p-6 flex flex-col items-center gap-3 bg-gradient-to-br from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 border-primary/30"
            onClick={() => onSelectType("fullBible")}
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
            onClick={() => onSelectType("random")}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white">
              <Shuffle className="w-6 h-6" />
            </div>
            <div className="text-center">
              <div className="font-bold text-lg">{t('quizTypes.random.title')}</div>
              <div className="text-sm text-muted-foreground">{t('quizTypes.random.description')}</div>
            </div>
          </Button>
        </div>
      </div>

      {/* Thematic Categories */}
      <div className="space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Layers className="w-5 h-5 text-primary" />
          <h3 className="text-xl font-bold text-foreground">
            {t('quizTypes.thematic.title')}
          </h3>
        </div>
        <p className="text-center text-sm text-muted-foreground mb-4">
          {t('quizTypes.thematic.description')}
        </p>
      </div>
    </div>
  );
};

export default QuizTypeSelector;
