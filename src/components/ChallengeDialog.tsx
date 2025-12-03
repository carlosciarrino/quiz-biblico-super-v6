import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Swords, Copy, Check, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";

interface ChallengeDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (name: string) => void;
  score: number;
  total: number;
  percentage: number;
}

const ChallengeDialog = ({
  open,
  onClose,
  onSubmit,
  score,
  total,
  percentage,
}: ChallengeDialogProps) => {
  const { t } = useTranslation();
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name.trim());
      setName("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Swords className="w-6 h-6 text-primary" />
            {t('challenge.createTitle')}
          </DialogTitle>
          <DialogDescription>
            {t('challenge.createDescription')}
          </DialogDescription>
        </DialogHeader>

        <div className="text-center py-4">
          <div className="text-4xl font-bold text-primary mb-1">
            {percentage}%
          </div>
          <div className="text-muted-foreground">
            {score}/{total} {t('results.correct')}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder={t('challenge.enterYourName')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={20}
              autoFocus
            />
          </div>
          <div className="flex gap-2">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              {t('challenge.cancel')}
            </Button>
            <Button type="submit" disabled={!name.trim()} className="flex-1 gap-2">
              <Users className="w-4 h-4" />
              {t('challenge.create')}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ChallengeDialog;
