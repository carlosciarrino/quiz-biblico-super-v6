import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Copy, Check, Share2, Twitter, Facebook } from "lucide-react";
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

interface ChallengeLinkDialogProps {
  open: boolean;
  onClose: () => void;
  challengeUrl: string;
  challengeId: string;
}

const ChallengeLinkDialog = ({
  open,
  onClose,
  challengeUrl,
  challengeId,
}: ChallengeLinkDialogProps) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(challengeUrl);
      setCopied(true);
      toast({
        title: t('share.copied'),
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({
        title: t('share.copyError'),
        variant: "destructive",
      });
    }
  };

  const shareTwitter = () => {
    const text = t('challenge.shareMessage', { id: challengeId });
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(challengeUrl)}`, '_blank');
  };

  const shareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(challengeUrl)}`, '_blank');
  };

  const shareWhatsApp = () => {
    const text = t('challenge.shareMessage', { id: challengeId });
    window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + challengeUrl)}`, '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Share2 className="w-6 h-6 text-primary" />
            {t('challenge.shareTitle')}
          </DialogTitle>
          <DialogDescription>
            {t('challenge.shareDescription')}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="bg-muted/50 rounded-lg p-3 text-center">
            <div className="text-sm text-muted-foreground mb-1">{t('challenge.code')}</div>
            <div className="text-2xl font-bold text-primary tracking-wider">{challengeId}</div>
          </div>

          <div className="flex gap-2">
            <Input value={challengeUrl} readOnly className="text-sm" />
            <Button onClick={handleCopy} variant="outline" size="icon">
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </Button>
          </div>

          <div className="flex justify-center gap-3">
            <Button onClick={shareTwitter} variant="outline" size="icon" className="rounded-full">
              <Twitter className="w-4 h-4" />
            </Button>
            <Button onClick={shareFacebook} variant="outline" size="icon" className="rounded-full">
              <Facebook className="w-4 h-4" />
            </Button>
            <Button onClick={shareWhatsApp} variant="outline" size="icon" className="rounded-full">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </Button>
          </div>

          <Button onClick={onClose} className="w-full">
            {t('challenge.done')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChallengeLinkDialog;
