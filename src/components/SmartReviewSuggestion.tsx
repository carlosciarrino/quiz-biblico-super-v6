import { Brain, TrendingDown, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { UserStats } from "@/hooks/useUserStats";

interface SmartReviewSuggestionProps {
  stats: UserStats;
}

const SmartReviewSuggestion = ({ stats }: SmartReviewSuggestionProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const getCategoryTranslationKey = (category: string): string => {
    const categoryMap: Record<string, string> = {
      "Antico Testamento": "categories.oldTestament.name",
      "Nuovo Testamento": "categories.newTestament.name",
      "Personaggi Biblici": "categories.biblicalCharacters.name",
      "Pentateuco": "categories.pentateuch.name",
      "Profeti Minori": "categories.minorProphets.name",
      "Quattro Vangeli": "categories.fourGospels.name",
      "Lettere Paoline": "categories.paulineLetters.name",
    };
    return categoryMap[category] || category;
  };

  // Get categories sorted by lowest average percentage
  const getWeakCategories = () => {
    const categories = Object.entries(stats.categoryStats)
      .map(([name, data]) => ({
        name,
        averagePercentage: data.averagePercentage,
        quizzesCompleted: data.quizzesCompleted,
      }))
      .filter(cat => cat.averagePercentage < 80) // Only suggest if below 80%
      .sort((a, b) => a.averagePercentage - b.averagePercentage)
      .slice(0, 3); // Top 3 weakest

    return categories;
  };

  const weakCategories = getWeakCategories();

  if (stats.totalQuizzesCompleted < 1 || weakCategories.length === 0) {
    return null;
  }

  const handlePractice = (categoryName: string) => {
    navigate(`/quiz?category=${encodeURIComponent(categoryName)}&type=thematic`);
  };

  return (
    <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-xl p-5 border border-orange-500/20">
      <div className="flex items-center gap-2 mb-4">
        <Brain className="w-5 h-5 text-orange-600" />
        <h3 className="font-semibold text-foreground">{t('review.smartSuggestion')}</h3>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4">
        {t('review.suggestionText')}
      </p>

      <div className="space-y-2">
        {weakCategories.map((category) => (
          <div
            key={category.name}
            className="flex items-center justify-between bg-background/50 rounded-lg p-3 border border-border/50"
          >
            <div className="flex items-center gap-3">
              <TrendingDown className="w-4 h-4 text-orange-500" />
              <div>
                <div className="font-medium text-foreground text-sm">
                  {t(getCategoryTranslationKey(category.name))}
                </div>
                <div className="text-xs text-muted-foreground">
                  {category.averagePercentage}% {t('stats.average')} • {category.quizzesCompleted} quiz
                </div>
              </div>
            </div>
            <Button
              size="sm"
              variant="ghost"
              className="gap-1 text-primary hover:text-primary"
              onClick={() => handlePractice(category.name)}
            >
              {t('review.practice')}
              <ArrowRight className="w-3 h-3" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartReviewSuggestion;
