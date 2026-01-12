import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, BarChart3, AlertTriangle } from "lucide-react";
import { useUserStats } from "@/hooks/useUserStats";
import { useUserLevel } from "@/hooks/useUserLevel";
import ProgressDashboard from "@/components/ProgressDashboard";
import WrongAnswersStats from "@/components/WrongAnswersStats";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import bgMain from "@/assets/bg-main.webp";

const Dashboard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { stats } = useUserStats();
  const levelInfo = useUserLevel(stats);

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgMain})` }}
      >
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      </div>
      
      <div className="relative container mx-auto px-4 py-8">
        <div className="absolute top-4 right-4 z-10">
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
          <Tabs defaultValue="progress" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="progress" className="gap-2">
                <BarChart3 className="w-4 h-4" />
                {t('dashboard.progressTab')}
              </TabsTrigger>
              <TabsTrigger value="errors" className="gap-2">
                <AlertTriangle className="w-4 h-4" />
                {t('dashboard.errorsTab')}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="progress">
              <ProgressDashboard stats={stats} levelInfo={levelInfo} />
            </TabsContent>
            <TabsContent value="errors">
              <WrongAnswersStats />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
