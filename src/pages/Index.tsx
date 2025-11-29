import { useNavigate } from "react-router-dom";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/questions";
import { Book, Sparkles } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName: string) => {
    navigate(`/quiz?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent text-white mb-6 shadow-lg">
            <Book className="w-10 h-10" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-slide-up">
            Quiz Biblico
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Metti alla prova la tua conoscenza delle Sacre Scritture con domande avvincenti
          </p>

          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>30 secondi per domanda</span>
            <span>•</span>
            <span>Sistema di punteggio</span>
            <span>•</span>
            <span>3 categorie</span>
          </div>
        </header>

        <main className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
            Scegli una Categoria
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <div
                key={category.id}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CategoryCard
                  name={category.name}
                  description={category.description}
                  icon={category.icon}
                  color={category.color}
                  onClick={() => handleCategoryClick(category.name)}
                />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 bg-card px-8 py-4 rounded-2xl border shadow-md">
              <div className="text-left">
                <div className="text-3xl font-bold text-primary">24</div>
                <div className="text-sm text-muted-foreground">Domande Totali</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-left">
                <div className="text-3xl font-bold text-accent">3</div>
                <div className="text-sm text-muted-foreground">Categorie</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-left">
                <div className="text-3xl font-bold text-success">30s</div>
                <div className="text-sm text-muted-foreground">Per Domanda</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
