import { useTranslation } from "react-i18next";
import { Swords, Trophy, Medal, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Challenge } from "@/hooks/useChallenge";
import { format } from "date-fns";

interface ChallengeCardProps {
  challenge: Challenge;
  onAccept: () => void;
}

const ChallengeCard = ({ challenge, onAccept }: ChallengeCardProps) => {
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

  return (
    <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/30 animate-fade-in">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white">
          <Swords className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-foreground">{t('challenge.receivedTitle')}</h3>
          <p className="text-sm text-muted-foreground">
            {t('challenge.from')} <span className="font-semibold">{challenge.creatorName}</span>
          </p>
        </div>
      </div>

      <div className="bg-background/50 rounded-lg p-4 mb-4">
        <div className="text-center mb-3">
          <div className="text-3xl font-bold text-primary">{challenge.percentage}%</div>
          <div className="text-sm text-muted-foreground">
            {challenge.creatorScore}/{challenge.total} {t('results.correct')}
          </div>
        </div>
        <div className="text-center text-sm">
          <span className="text-muted-foreground">{t('challenge.category')}: </span>
          <span className="font-medium">{t(getCategoryTranslationKey(challenge.category))}</span>
        </div>
      </div>

      {challenge.attempts.length > 0 && (
        <div className="mb-4">
          <div className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-yellow-500" />
            {t('challenge.leaderboard')}
          </div>
          <div className="space-y-1">
            {challenge.attempts.slice(0, 3).map((attempt, index) => (
              <div key={index} className="flex items-center justify-between text-sm bg-background/30 rounded px-2 py-1">
                <div className="flex items-center gap-2">
                  {index === 0 && <Medal className="w-3 h-3 text-yellow-500" />}
                  {index === 1 && <Medal className="w-3 h-3 text-gray-400" />}
                  {index === 2 && <Medal className="w-3 h-3 text-amber-600" />}
                  <span>{attempt.name}</span>
                </div>
                <span className="font-semibold">{attempt.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <Button onClick={onAccept} className="w-full gap-2">
        <Play className="w-4 h-4" />
        {t('challenge.accept')}
      </Button>
    </div>
  );
};

export default ChallengeCard;
