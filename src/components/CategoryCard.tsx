import { Button } from "@/components/ui/button";
import { BookOpen, Scroll, Users, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

interface CategoryCardProps {
  name: string;
  description: string;
  icon: string;
  color: string;
  onClick: () => void;
}

const CategoryCard = ({ name, description, icon, color, onClick }: CategoryCardProps) => {
  const { t } = useTranslation();
  
  const getIcon = () => {
    switch (icon) {
      case "scroll":
        return <Scroll className="w-10 h-10" />;
      case "book-open":
        return <BookOpen className="w-10 h-10" />;
      case "users":
        return <Users className="w-10 h-10" />;
      default:
        return <BookOpen className="w-10 h-10" />;
    }
  };

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/80 border shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer animate-scale-in"
      onClick={onClick}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      
      <div className="relative p-6">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
          {getIcon()}
        </div>
        
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {t(`categories.${getCategoryKey(name)}.name`)}
        </h3>
        
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {t(`categories.${getCategoryKey(name)}.description`)}
        </p>
        
        <Button 
          variant="ghost" 
          className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-all"
        >
          <span>{t('home.startQuiz')}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

const getCategoryKey = (categoryName: string) => {
  const map: Record<string, string> = {
    "Antico Testamento": "oldTestament",
    "Nuovo Testamento": "newTestament",
    "Personaggi Biblici": "biblicalCharacters"
  };
  return map[categoryName] || "oldTestament";
};

export default CategoryCard;
