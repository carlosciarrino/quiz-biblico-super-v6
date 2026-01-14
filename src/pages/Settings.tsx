import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowLeft, Volume2, VolumeX, Bell, BellOff, Gamepad2, Palette, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import ThemeToggle from "@/components/ThemeToggle";
import NotificationSettings from "@/components/NotificationSettings";
import bgSettings from "@/assets/bg-settings.webp";

const Settings = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  
  // Sound settings
  const [soundEnabled, setSoundEnabled] = useState(() => {
    const saved = localStorage.getItem("bible-quiz-sound-enabled");
    return saved !== null ? JSON.parse(saved) : true;
  });
  const [soundVolume, setSoundVolume] = useState(() => {
    const saved = localStorage.getItem("bible-quiz-sound-volume");
    return saved !== null ? JSON.parse(saved) : 80;
  });
  
  // Game preferences
  const [showTimer, setShowTimer] = useState(() => {
    const saved = localStorage.getItem("bible-quiz-show-timer");
    return saved !== null ? JSON.parse(saved) : true;
  });
  const [showHints, setShowHints] = useState(() => {
    const saved = localStorage.getItem("bible-quiz-show-hints");
    return saved !== null ? JSON.parse(saved) : true;
  });
  const [questionCount, setQuestionCount] = useState(() => {
    const saved = localStorage.getItem("bible-quiz-question-count");
    return saved !== null ? JSON.parse(saved) : 10;
  });
  const [autoAdvance, setAutoAdvance] = useState(() => {
    const saved = localStorage.getItem("bible-quiz-auto-advance");
    return saved !== null ? JSON.parse(saved) : false;
  });

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem("bible-quiz-sound-enabled", JSON.stringify(soundEnabled));
  }, [soundEnabled]);
  
  useEffect(() => {
    localStorage.setItem("bible-quiz-sound-volume", JSON.stringify(soundVolume));
  }, [soundVolume]);
  
  useEffect(() => {
    localStorage.setItem("bible-quiz-show-timer", JSON.stringify(showTimer));
  }, [showTimer]);
  
  useEffect(() => {
    localStorage.setItem("bible-quiz-show-hints", JSON.stringify(showHints));
  }, [showHints]);
  
  useEffect(() => {
    localStorage.setItem("bible-quiz-question-count", JSON.stringify(questionCount));
  }, [questionCount]);
  
  useEffect(() => {
    localStorage.setItem("bible-quiz-auto-advance", JSON.stringify(autoAdvance));
  }, [autoAdvance]);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("bible-quiz-language", lang);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgSettings})` }}
      >
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="group hover-lift"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {t("home.title")}
          </Button>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-foreground mb-8 text-center"
        >
          {t("settings.title", "Settings")}
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Theme & Language */}
          <motion.div variants={itemVariants}>
            <Card className="hover-card-lift backdrop-blur-sm bg-card/90">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-primary" />
                  {t("settings.appearance", "Appearance")}
                </CardTitle>
                <CardDescription>
                  {t("settings.appearanceDesc", "Customize the look and feel of the app")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <Label>{t("settings.theme", "Theme")}</Label>
                  <ThemeToggle />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Languages className="h-4 w-4 text-muted-foreground" />
                    <Label>{t("settings.language", "Language")}</Label>
                  </div>
                  <Select value={i18n.language} onValueChange={handleLanguageChange}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                      <SelectItem value="fr">Français</SelectItem>
                      <SelectItem value="it">Italiano</SelectItem>
                      <SelectItem value="pt">Português</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sound Settings */}
          <motion.div variants={itemVariants}>
            <Card className="hover-card-lift backdrop-blur-sm bg-card/90">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {soundEnabled ? (
                    <Volume2 className="h-5 w-5 text-primary" />
                  ) : (
                    <VolumeX className="h-5 w-5 text-muted-foreground" />
                  )}
                  {t("settings.sound", "Sound")}
                </CardTitle>
                <CardDescription>
                  {t("settings.soundDesc", "Manage sound effects and audio feedback")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <Label htmlFor="sound-toggle">
                    {t("settings.enableSound", "Enable Sound Effects")}
                  </Label>
                  <Switch
                    id="sound-toggle"
                    checked={soundEnabled}
                    onCheckedChange={setSoundEnabled}
                  />
                </div>
                
                {soundEnabled && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2"
                  >
                    <Label>{t("settings.volume", "Volume")}: {soundVolume}%</Label>
                    <Slider
                      value={[soundVolume]}
                      onValueChange={(value) => setSoundVolume(value[0])}
                      max={100}
                      step={5}
                      className="w-full"
                    />
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Notification Settings */}
          <motion.div variants={itemVariants}>
            <NotificationSettings />
          </motion.div>

          {/* Game Preferences */}
          <motion.div variants={itemVariants}>
            <Card className="hover-card-lift backdrop-blur-sm bg-card/90">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gamepad2 className="h-5 w-5 text-primary" />
                  {t("settings.gamePreferences", "Game Preferences")}
                </CardTitle>
                <CardDescription>
                  {t("settings.gamePreferencesDesc", "Customize your quiz experience")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <Label htmlFor="timer-toggle">
                    {t("settings.showTimer", "Show Timer")}
                  </Label>
                  <Switch
                    id="timer-toggle"
                    checked={showTimer}
                    onCheckedChange={setShowTimer}
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="hints-toggle">
                    {t("settings.showHints", "Show Bible References")}
                  </Label>
                  <Switch
                    id="hints-toggle"
                    checked={showHints}
                    onCheckedChange={setShowHints}
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="auto-advance-toggle">
                    {t("settings.autoAdvance", "Auto-advance to Next Question")}
                  </Label>
                  <Switch
                    id="auto-advance-toggle"
                    checked={autoAdvance}
                    onCheckedChange={setAutoAdvance}
                  />
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label>{t("settings.questionsPerQuiz", "Questions per Quiz")}: {questionCount}</Label>
                  <Slider
                    value={[questionCount]}
                    onValueChange={(value) => setQuestionCount(value[0])}
                    min={5}
                    max={30}
                    step={5}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Settings;
