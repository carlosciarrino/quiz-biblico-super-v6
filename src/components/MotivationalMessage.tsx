import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Sparkles, Heart, Star, Flame, Sun } from "lucide-react";

interface MotivationalMessageProps {
  show: boolean;
  onClose: () => void;
}

const MotivationalMessage = ({ show, onClose }: MotivationalMessageProps) => {
  const { t } = useTranslation();
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    { key: 'motivational.keepGoing', icon: Flame },
    { key: 'motivational.youreGreat', icon: Star },
    { key: 'motivational.learnedToday', icon: Sun },
    { key: 'motivational.everyStep', icon: Heart },
    { key: 'motivational.amazing', icon: Sparkles },
  ];

  useEffect(() => {
    if (show) {
      setMessageIndex(Math.floor(Math.random() * messages.length));
      const timer = setTimeout(() => {
        onClose();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  const message = messages[messageIndex];
  const Icon = message.icon;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
      <div className="animate-scale-in bg-gradient-to-br from-primary to-accent text-white px-8 py-6 rounded-2xl shadow-2xl flex items-center gap-4 max-w-md mx-4">
        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
          <Icon className="w-6 h-6" />
        </div>
        <p className="text-lg font-medium">{t(message.key)}</p>
      </div>
    </div>
  );
};

export default MotivationalMessage;
