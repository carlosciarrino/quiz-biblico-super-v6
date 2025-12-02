import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Share2, Twitter, Facebook, Linkedin, Link, MessageCircle } from "lucide-react";
import { toast } from "sonner";

interface SocialShareProps {
  score: number;
  total: number;
  category: string;
}

const SocialShare = ({ score, total, category }: SocialShareProps) => {
  const { t } = useTranslation();
  const percentage = Math.round((score / total) * 100);

  const shareText = t('share.message', { score, total, percentage, category });
  const shareUrl = window.location.href;

  const shareLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      color: "hover:bg-[#1DA1F2]/10 hover:text-[#1DA1F2]"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`,
      color: "hover:bg-[#4267B2]/10 hover:text-[#4267B2]"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: "hover:bg-[#0A66C2]/10 hover:text-[#0A66C2]"
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
      color: "hover:bg-[#25D366]/10 hover:text-[#25D366]"
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
      toast.success(t('share.copied'));
    } catch (err) {
      toast.error(t('share.copyError'));
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 justify-center text-muted-foreground">
        <Share2 className="w-4 h-4" />
        <span className="text-sm font-medium">{t('share.title')}</span>
      </div>
      
      <div className="flex justify-center gap-2">
        {shareLinks.map((link) => (
          <Button
            key={link.name}
            variant="outline"
            size="icon"
            className={`rounded-full transition-colors ${link.color}`}
            onClick={() => window.open(link.url, '_blank', 'width=600,height=400')}
            title={link.name}
          >
            <link.icon className="w-4 h-4" />
          </Button>
        ))}
        
        <Button
          variant="outline"
          size="icon"
          className="rounded-full hover:bg-primary/10 hover:text-primary"
          onClick={copyToClipboard}
          title={t('share.copyLink')}
        >
          <Link className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default SocialShare;
