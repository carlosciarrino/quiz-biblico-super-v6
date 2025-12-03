import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Trophy, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface HighScoreDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (username: string) => void;
  score: number;
  total: number;
  percentage: number;
}

const HighScoreDialog = ({
  open,
  onClose,
  onSubmit,
  score,
  total,
  percentage,
}: HighScoreDialogProps) => {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onSubmit(username.trim());
      setUsername("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Trophy className="w-6 h-6 text-yellow-500" />
            {t('leaderboard.newHighScore')}
          </DialogTitle>
          <DialogDescription>
            {t('leaderboard.congratulations')}
          </DialogDescription>
        </DialogHeader>

        <div className="text-center py-4">
          <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            {percentage}%
          </div>
          <div className="text-muted-foreground">
            {score}/{total} {t('results.correct')}
          </div>
          <div className="flex justify-center gap-1 mt-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-6 h-6 ${
                  i < Math.ceil(percentage / 20)
                    ? "text-yellow-500 fill-yellow-500"
                    : "text-muted"
                }`}
              />
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder={t('leaderboard.enterName')}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              maxLength={20}
              autoFocus
            />
          </div>
          <div className="flex gap-2">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              {t('leaderboard.skip')}
            </Button>
            <Button type="submit" disabled={!username.trim()} className="flex-1">
              {t('leaderboard.save')}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default HighScoreDialog;
