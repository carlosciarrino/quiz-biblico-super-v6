import { Trophy, Medal, Crown, Calendar, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LeaderboardEntry } from "@/hooks/useLeaderboard";
import { format } from "date-fns";

interface LeaderboardProps {
  entries: LeaderboardEntry[];
}

const Leaderboard = ({ entries }: LeaderboardProps) => {
  const { t } = useTranslation();

  const getCategoryTranslationKey = (category: string): string => {
    const categoryMap: Record<string, string> = {
      "Antico Testamento": "categories.oldTestament.name",
      "Nuovo Testamento": "categories.newTestament.name",
      "Personaggi Biblici": "categories.biblicalCharacters.name",
      "Pentateuco": "categories.pentateuch.name",
      "Profeti Minori": "categories.minorProphets.name",
      "Quattro Vangeli": "categories.fourGospels.name",
      "Lettere Paoline": "categories.paulineLetters.name",
      "Quiz Bibbia Completa": "quizTypes.fullBible.title",
      "Quiz Sorpresa": "quizTypes.random.title",
    };
    return categoryMap[category] || category;
  };

  const getRankIcon = (index: number) => {
    if (index === 0) return <Crown className="w-5 h-5 text-yellow-500" />;
    if (index === 1) return <Medal className="w-5 h-5 text-gray-400" />;
    if (index === 2) return <Medal className="w-5 h-5 text-amber-600" />;
    return <span className="w-5 h-5 flex items-center justify-center text-sm font-bold text-muted-foreground">{index + 1}</span>;
  };

  if (entries.length === 0) {
    return (
      <div className="bg-card rounded-xl p-6 border shadow-sm text-center">
        <Trophy className="w-12 h-12 mx-auto mb-3 text-muted-foreground/50" />
        <p className="text-muted-foreground">{t('leaderboard.noEntries')}</p>
        <p className="text-sm text-muted-foreground mt-1">{t('leaderboard.beFirst')}</p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl border shadow-sm overflow-hidden">
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-3 border-b">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">{t('leaderboard.title')}</h3>
        </div>
      </div>

      <div className="divide-y divide-border">
        {entries.map((entry, index) => (
          <div
            key={entry.id}
            className={`flex items-center gap-3 p-3 transition-colors ${
              index === 0 ? 'bg-yellow-500/5' : ''
            }`}
          >
            <div className="flex-shrink-0 w-8 flex justify-center">
              {getRankIcon(index)}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <User className="w-3 h-3 text-muted-foreground" />
                <span className="font-medium text-foreground truncate">
                  {entry.username}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{t(getCategoryTranslationKey(entry.category))}</span>
                <span>•</span>
                <Calendar className="w-3 h-3" />
                <span>{format(new Date(entry.date), 'dd/MM/yyyy')}</span>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-lg font-bold text-primary">{entry.percentage}%</div>
              <div className="text-xs text-muted-foreground">
                {entry.score}/{entry.total}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
