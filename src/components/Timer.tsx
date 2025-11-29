import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

interface TimerProps {
  duration: number;
  onTimeUp: () => void;
  isActive: boolean;
}

const Timer = ({ duration, onTimeUp, isActive }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  useEffect(() => {
    if (!isActive) return;

    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isActive, onTimeUp]);

  const percentage = (timeLeft / duration) * 100;
  const isLow = timeLeft <= 5;

  return (
    <div className="flex items-center gap-3 bg-card px-4 py-3 rounded-lg border shadow-sm">
      <Clock className={`w-5 h-5 ${isLow ? "text-destructive animate-pulse-slow" : "text-muted-foreground"}`} />
      <div className="flex-1">
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-1000 ${
              isLow ? "bg-destructive" : "bg-primary"
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
      <span className={`text-lg font-bold tabular-nums ${isLow ? "text-destructive" : "text-foreground"}`}>
        {timeLeft}s
      </span>
    </div>
  );
};

export default Timer;
