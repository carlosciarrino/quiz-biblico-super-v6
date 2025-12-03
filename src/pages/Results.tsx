import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trophy, Home, RotateCcw, Star, Swords } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import SocialShare from "@/components/SocialShare";
import HighScoreDialog from "@/components/HighScoreDialog";
import ChallengeDialog from "@/components/ChallengeDialog";
import ChallengeLinkDialog from "@/components/ChallengeLinkDialog";
import { useUserStats } from "@/hooks/useUserStats";
import { useLeaderboard } from "@/hooks/useLeaderboard";
import { useChallenge } from "@/hooks/useChallenge";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import { fireConfetti, fireGoldConfetti } from "@/lib/confetti";

const Results = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { recordQuizResult } = useUserStats();
  const { addEntry, isHighScore } = useLeaderboard();
  const { createChallenge, addAttempt, getChallenge, getChallengeUrl } = useChallenge();
  const { playComplete } = useSoundEffects();
  
  const score = parseInt(searchParams.get("score") || "0");
  const total = parseInt(searchParams.get("total") || "0");
  const category = searchParams.get("category") || "";
  const quizType = searchParams.get("type") || "thematic";
  const challengeId = searchParams.get("challengeId");
  
  const [showConfetti, setShowConfetti] = useState(false);
  const [hasRecorded, setHasRecorded] = useState(false);
  const [showHighScoreDialog, setShowHighScoreDialog] = useState(false);
  const [highScoreChecked, setHighScoreChecked] = useState(false);
  const [showChallengeDialog, setShowChallengeDialog] = useState(false);
  const [showChallengeLinkDialog, setShowChallengeLinkDialog] = useState(false);
  const [createdChallengeId, setCreatedChallengeId] = useState<string | null>(null);

  const percentage = Math.round((score / total) * 100);

  useEffect(() => {
    setShowConfetti(true);
    
    // Fire confetti and play sound
    if (percentage >= 70) {
      fireGoldConfetti();
    } else {
      fireConfetti();
    }
    playComplete();
    
    if (!hasRecorded && category && total > 0) {
      recordQuizResult({
        category,
        score,
        total,
        percentage,
        date: new Date().toISOString()
      });
      setHasRecorded(true);
    }

    // Check for high score (only if not a challenge)
    if (!highScoreChecked && total > 0 && !challengeId) {
      if (isHighScore(percentage)) {
        setShowHighScoreDialog(true);
      }
      setHighScoreChecked(true);
    }
  }, [hasRecorded, category, score, total, percentage, recordQuizResult, isHighScore, highScoreChecked, playComplete, challengeId]);

  const handleHighScoreSubmit = (username: string) => {
    addEntry({ username, score, total, percentage, category });
    setShowHighScoreDialog(false);
  };

  const handleCreateChallenge = (name: string) => {
    const id = createChallenge({
      creatorName: name,
      creatorScore: score,
      total,
      percentage,
      category,
      quizType,
    });
    setCreatedChallengeId(id);
    setShowChallengeDialog(false);
    setShowChallengeLinkDialog(true);
  };

  const getMessage = () => {
    if (percentage >= 90) return t('results.messages.excellent');
    if (percentage >= 70) return t('results.messages.great');
    if (percentage >= 50) return t('results.messages.good');
    return t('results.messages.keepGoing');
  };

  const getEmoji = () => {
    if (percentage >= 90) return "🏆";
    if (percentage >= 70) return "🎉";
    if (percentage >= 50) return "👍";
    return "📖";
  };

  const getRetryPath = () => {
    if (category === t('quizTypes.fullBible.title')) {
      return `/quiz?type=fullBible`;
    }
    if (category === t('quizTypes.random.title')) {
      return `/quiz?type=random`;
    }
    return `/quiz?category=${encodeURIComponent(category)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>
      
      <div className={`w-full max-w-2xl animate-scale-in ${showConfetti ? "animate-fade-in" : ""}`}>
        <div className="bg-gradient-to-br from-card to-card/80 rounded-3xl p-8 md:p-12 shadow-2xl border">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent text-white mb-6 animate-scale-in">
              <Trophy className="w-12 h-12" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              {t('results.completed')} {getEmoji()}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              {category}
            </p>
          </div>

          <div className="bg-background/50 rounded-2xl p-8 mb-8">
            <div className="text-center mb-6">
              <div className="text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                {score}/{total}
              </div>
              <div className="text-2xl font-semibold text-muted-foreground">
                {percentage}% {t('results.correct')}
              </div>
            </div>

            <div className="h-4 bg-muted rounded-full overflow-hidden mb-4">
              <div
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                style={{ width: `${percentage}%` }}
              />
            </div>

            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-8 h-8 ${
                    i < Math.ceil(percentage / 20)
                      ? "text-primary fill-primary"
                      : "text-muted"
                  }`}
                />
              ))}
            </div>

            <p className="text-center text-lg font-medium text-foreground">
              {getMessage()}
            </p>
          </div>

          <div className="mb-8">
            <SocialShare score={score} total={total} category={category} />
          </div>

          {/* Challenge Button */}
          <div className="mb-6">
            <Button
              onClick={() => setShowChallengeDialog(true)}
              variant="outline"
              className="w-full gap-2 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 hover:from-primary/20 hover:to-accent/20"
            >
              <Swords className="w-5 h-5" />
              {t('challenge.challengeFriends')}
            </Button>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Button
              size="lg"
              className="w-full gap-2"
              onClick={() => navigate(getRetryPath())}
            >
              <RotateCcw className="w-5 h-5" />
              {t('results.retry')}
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="w-full gap-2"
              onClick={() => navigate("/")}
            >
              <Home className="w-5 h-5" />
              {t('results.mainMenu')}
            </Button>
          </div>
        </div>
      </div>

      <HighScoreDialog
        open={showHighScoreDialog}
        onClose={() => setShowHighScoreDialog(false)}
        onSubmit={handleHighScoreSubmit}
        score={score}
        total={total}
        percentage={percentage}
      />

      <ChallengeDialog
        open={showChallengeDialog}
        onClose={() => setShowChallengeDialog(false)}
        onSubmit={handleCreateChallenge}
        score={score}
        total={total}
        percentage={percentage}
      />

      {createdChallengeId && (
        <ChallengeLinkDialog
          open={showChallengeLinkDialog}
          onClose={() => setShowChallengeLinkDialog(false)}
          challengeUrl={getChallengeUrl(createdChallengeId)}
          challengeId={createdChallengeId}
        />
      )}
    </div>
  );
};

export default Results;
