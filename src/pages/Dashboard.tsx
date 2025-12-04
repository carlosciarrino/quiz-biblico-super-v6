import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useUserStats } from "@/hooks/useUserStats";
import { useUserLevel } from "@/hooks/useUserLevel";
import ProgressDashboard from "@/components/ProgressDashboard";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Dashboard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { stats } = useUserStats();
  const levelInfo = useUserLevel(stats);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container mx-auto px-4 py-8">
        <div className="absolute top-4 right-4">
          <LanguageSwitcher />
        </div>

        <header className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-4 gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('common.back')}
          </Button>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {t('dashboard.title')}
          </h1>
          <p className="text-muted-foreground">
            {t('dashboard.subtitle')}
          </p>
        </header>

        <main className="max-w-4xl mx-auto">
          <ProgressDashboard stats={stats} levelInfo={levelInfo} />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
