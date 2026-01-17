import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, BookOpen, Sparkles, Search, Heart, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import KeyVerseCard from "@/components/KeyVerseCard";
import { keyVersesByCategory, type KeyVerse } from "@/data/keyVerses";
import { categories } from "@/data/questions";
import bgMain from "@/assets/bg-main.webp";

const KeyVerses = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const currentLang = i18n.language as "it" | "en" | "es" | "pt" | "fr";

  // Get all verses or filter by category
  const getFilteredVerses = (): { verse: KeyVerse; categoryId: string; categoryColor: string }[] => {
    let verses: { verse: KeyVerse; categoryId: string; categoryColor: string }[] = [];

    if (activeCategory === "all") {
      keyVersesByCategory.forEach((cat) => {
        const category = categories.find((c) => c.id === cat.categoryId);
        cat.verses.forEach((verse) => {
          verses.push({
            verse,
            categoryId: cat.categoryId,
            categoryColor: category?.color || "from-primary to-accent",
          });
        });
      });
    } else {
      const categoryData = keyVersesByCategory.find((c) => c.categoryId === activeCategory);
      const category = categories.find((c) => c.id === activeCategory);
      if (categoryData) {
        verses = categoryData.verses.map((verse) => ({
          verse,
          categoryId: categoryData.categoryId,
          categoryColor: category?.color || "from-primary to-accent",
        }));
      }
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      verses = verses.filter(
        ({ verse }) =>
          verse.reference.toLowerCase().includes(query) ||
          verse.theme.toLowerCase().includes(query) ||
          verse.text[currentLang]?.toLowerCase().includes(query) ||
          verse.text.it.toLowerCase().includes(query)
      );
    }

    // Filter by favorites
    if (showFavoritesOnly) {
      const favorites = JSON.parse(localStorage.getItem("keyVerseFavorites") || "[]");
      verses = verses.filter(({ verse }) => favorites.includes(verse.reference));
    }

    return verses;
  };

  const filteredVerses = getFilteredVerses();
  const totalVerses = keyVersesByCategory.reduce((sum, cat) => sum + cat.verses.length, 0);

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgMain})` }}
      >
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      </div>

      <div className="relative container mx-auto px-4 py-8">
        {/* Header Controls */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>

        {/* Header */}
        <header className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-4 gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("common.back")}
          </Button>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-lg">
              <Sparkles className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                {t("keyVerses.title", "Versetti Chiave")}
              </h1>
              <p className="text-muted-foreground">
                {t("keyVerses.subtitle", "I versetti più importanti per ogni categoria")}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 mb-6">
            <Badge variant="secondary" className="px-3 py-1.5 text-sm">
              <BookOpen className="w-4 h-4 mr-1.5" />
              {totalVerses} {t("keyVerses.verses", "versetti")}
            </Badge>
            <Badge variant="secondary" className="px-3 py-1.5 text-sm">
              <Filter className="w-4 h-4 mr-1.5" />
              {keyVersesByCategory.length} {t("keyVerses.categories", "categorie")}
            </Badge>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder={t("keyVerses.searchPlaceholder", "Cerca versetti, riferimenti, temi...")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant={showFavoritesOnly ? "default" : "outline"}
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              className="gap-2"
            >
              <Heart className={`w-4 h-4 ${showFavoritesOnly ? "fill-current" : ""}`} />
              {t("keyVerses.favorites", "Preferiti")}
            </Button>
          </div>
        </header>

        {/* Category Tabs */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-6">
          <ScrollArea className="w-full">
            <TabsList className="inline-flex w-auto gap-1 p-1 bg-muted/50">
              <TabsTrigger value="all" className="whitespace-nowrap">
                {t("keyVerses.allCategories", "Tutte")}
              </TabsTrigger>
              {keyVersesByCategory.map((cat) => (
                <TabsTrigger key={cat.categoryId} value={cat.categoryId} className="whitespace-nowrap">
                  {t(`categories.${getCategoryKey(cat.categoryId)}.name`, cat.categoryName)}
                </TabsTrigger>
              ))}
            </TabsList>
          </ScrollArea>

          <TabsContent value={activeCategory} className="mt-6">
            {filteredVerses.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="w-12 h-12 mx-auto text-muted-foreground/50 mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {t("keyVerses.noResults", "Nessun versetto trovato")}
                </h3>
                <p className="text-muted-foreground">
                  {t("keyVerses.tryDifferentSearch", "Prova con termini di ricerca diversi")}
                </p>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredVerses.map(({ verse, categoryColor }, index) => (
                  <div
                    key={`${verse.reference}-${index}`}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <KeyVerseCard verse={verse} categoryColor={categoryColor} />
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

// Helper to map category IDs to translation keys
const getCategoryKey = (categoryId: string): string => {
  const mapping: Record<string, string> = {
    "antico-testamento": "oldTestament",
    "nuovo-testamento": "newTestament",
    "personaggi-biblici": "biblicalCharacters",
    "pentateuco": "pentateuch",
    "profeti-minori": "minorProphets",
    "quattro-vangeli": "fourGospels",
    "lettere-paoline": "paulineLetters",
    "letteratura-sapienziale": "wisdomLiterature",
    "atti-apostoli": "actsApostles",
    "apocalisse": "revelation",
  };
  return mapping[categoryId] || categoryId;
};

export default KeyVerses;
