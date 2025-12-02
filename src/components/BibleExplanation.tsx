import { BookOpen, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

interface BibleExplanationProps {
  reference: string;
  explanation: string;
  show: boolean;
}

const BibleExplanation = ({ reference, explanation, show }: BibleExplanationProps) => {
  const { t } = useTranslation();

  if (!show) return null;

  const getBibleComUrl = () => {
    // Convert reference to bible.com format
    const encoded = encodeURIComponent(reference);
    return `https://www.bible.com/search/bible?q=${encoded}`;
  };

  return (
    <div className="mt-6 animate-fade-in">
      <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-primary/20 rounded-lg">
            <BookOpen className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground mb-1">
              {t('study.learnMore')}
            </h4>
            <p className="text-sm text-primary font-medium mb-2">
              📖 {reference}
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
