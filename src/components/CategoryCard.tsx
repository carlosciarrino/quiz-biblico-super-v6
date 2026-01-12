import { Button } from "@/components/ui/button";
import { BookOpen, Scroll, Users, ArrowRight, Sparkles, Flame, Eye } from "lucide-react";
import { useTranslation } from "react-i18next";

// Import category images
import oldTestamentImg from "@/assets/category-old-testament.webp";
import newTestamentImg from "@/assets/category-new-testament.webp";
import charactersImg from "@/assets/category-characters.webp";
import pentateuchImg from "@/assets/category-pentateuch.webp";
import minorProphetsImg from "@/assets/category-minor-prophets.webp";
import gospelsImg from "@/assets/category-gospels.webp";
import paulineImg from "@/assets/category-pauline.webp";
import wisdomImg from "@/assets/category-wisdom.webp";
import actsImg from "@/assets/category-acts.webp";
import revelationImg from "@/assets/category-revelation.webp";

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
        return <Scroll className="w-8 h-8" />;
      case "book-open":
        return <BookOpen className="w-8 h-8" />;
      case "users":
        return <Users className="w-8 h-8" />;
      case "sparkles":
        return <Sparkles className="w-8 h-8" />;
      case "flame":
        return <Flame className="w-8 h-8" />;
      case "eye":
        return <Eye className="w-8 h-8" />;
      default:
        return <BookOpen className="w-8 h-8" />;
    }
  };

  const getCategoryImage = () => {
    const key = getCategoryKey(name);
    const imageMap: Record<string, string> = {
      oldTestament: oldTestamentImg,
      newTestament: newTestamentImg,
      biblicalCharacters: charactersImg,
      pentateuch: pentateuchImg,
      minorProphets: minorProphetsImg,
      fourGospels: gospelsImg,
      paulineLetters: paulineImg,
      wisdomLiterature: wisdomImg,
      actsApostles: actsImg,
      revelation: revelationImg,
    };
    return imageMap[key] || oldTestamentImg;
  };

  return (
    <div
      className="group relative overflow-hidden rounded-2xl border shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer animate-scale-in h-64"
      onClick={onClick}
    >
      {/* Background Image */}
      <img
        src={getCategoryImage()}
        alt=""
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
        width={512}
        height={512}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95 group-hover:via-black/60 transition-all duration-300" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-5">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${color} text-white mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          {getIcon()}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-foreground transition-colors drop-shadow-lg">
          {t(`categories.${getCategoryKey(name)}.name`)}
        </h3>
        
        <p className="text-white/80 mb-3 text-sm leading-relaxed line-clamp-2 drop-shadow">
          {t(`categories.${getCategoryKey(name)}.description`)}
        </p>
        
        <Button 
          variant="secondary" 
          size="sm"
          className="w-full justify-between bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
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
    "Personaggi Biblici": "biblicalCharacters",
    "Pentateuco": "pentateuch",
    "Profeti Minori": "minorProphets",
    "Quattro Vangeli": "fourGospels",
    "Lettere Paoline": "paulineLetters",
    "Letteratura Sapienziale": "wisdomLiterature",
    "Atti degli Apostoli": "actsApostles",
    "Apocalisse": "revelation"
  };
  return map[categoryName] || "oldTestament";
};

export default CategoryCard;
