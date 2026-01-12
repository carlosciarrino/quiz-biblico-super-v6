import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <OfflineIndicator />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
            <Route path="/bible" element={<BibleReader />} />
            <Route path="/study" element={<StudyPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/timed-challenge" element={<TimedChallenge />} />
            <Route path="/review" element={<ReviewQuiz />} />
            <Route path="/study-mode" element={<StudyMode />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
