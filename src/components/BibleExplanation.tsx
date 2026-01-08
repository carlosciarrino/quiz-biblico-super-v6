import { BookOpen, ExternalLink, CheckCircle2, XCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

interface BibleExplanationProps {
  reference: string;
  explanation: string;
  show: boolean;
  isCorrect?: boolean;
}

const BibleExplanation = ({ reference, explanation, show, isCorrect = false }: BibleExplanationProps) => {
  const { t } = useTranslation();

  if (!show) return null;

  const getBibleComUrl = () => {
    // Convert reference to bible.com format
    const encoded = encodeURIComponent(reference);
    return `https://www.bible.com/search/bible?q=${encoded}`;
  };

  return (
    <div className="mt-6 animate-fade-in">
      <div className={`rounded-xl p-6 border ${
        isCorrect 
          ? "bg-gradient-to-br from-success/10 to-emerald-500/10 border-success/20" 
          : "bg-gradient-to-br from-destructive/10 to-orange-500/10 border-destructive/20"
      }`}>
        <div className="flex items-start gap-3">
          <div className={`p-2 rounded-lg ${isCorrect ? "bg-success/20" : "bg-destructive/20"}`}>
            {isCorrect ? (
              <CheckCircle2 className="w-5 h-5 text-success" />
            ) : (
              <XCircle className="w-5 h-5 text-destructive" />
            )}
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground mb-1">
              {isCorrect ? t('explanation.correct') : t('explanation.incorrect')}
            </h4>
            <p className="text-sm text-primary font-medium mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              {reference}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              {explanation}
            </p>
            <a
              href={getBibleComUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              {t('study.readVerse')}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BibleExplanation;
