import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import OfflineIndicator from "@/components/OfflineIndicator";

// Lazy load all pages for code splitting
const Index = lazy(() => import("./pages/Index"));
const Quiz = lazy(() => import("./pages/Quiz"));
const Results = lazy(() => import("./pages/Results"));
const BibleReader = lazy(() => import("./pages/BibleReader"));
const StudyPage = lazy(() => import("./pages/StudyPage"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const TimedChallenge = lazy(() => import("./pages/TimedChallenge"));
const ReviewQuiz = lazy(() => import("./pages/ReviewQuiz"));
const StudyMode = lazy(() => import("./pages/StudyMode"));
const Settings = lazy(() => import("./pages/Settings"));
const KeyVerses = lazy(() => import("./pages/KeyVerses"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Loading fallback for page transitions
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-pulse flex flex-col items-center gap-4">
      <div className="w-16 h-16 rounded-2xl bg-primary/20" />
      <div className="h-4 w-32 bg-muted rounded" />
    </div>
  </div>
);

// Page transition wrapper
const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

// Animated routes component
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/quiz" element={<PageTransition><Quiz /></PageTransition>} />
        <Route path="/results" element={<PageTransition><Results /></PageTransition>} />
        <Route path="/bible" element={<PageTransition><BibleReader /></PageTransition>} />
        <Route path="/study" element={<PageTransition><StudyPage /></PageTransition>} />
        <Route path="/dashboard" element={<PageTransition><Dashboard /></PageTransition>} />
        <Route path="/timed-challenge" element={<PageTransition><TimedChallenge /></PageTransition>} />
        <Route path="/review" element={<PageTransition><ReviewQuiz /></PageTransition>} />
        <Route path="/study-mode" element={<PageTransition><StudyMode /></PageTransition>} />
        <Route path="/settings" element={<PageTransition><Settings /></PageTransition>} />
        <Route path="/key-verses" element={<PageTransition><KeyVerses /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <OfflineIndicator />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <AnimatedRoutes />
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
