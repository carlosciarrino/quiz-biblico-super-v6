import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import BibleReader from "./pages/BibleReader";
import StudyPage from "./pages/StudyPage";
import Dashboard from "./pages/Dashboard";
import TimedChallenge from "./pages/TimedChallenge";
import ReviewQuiz from "./pages/ReviewQuiz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
          <Route path="/bible" element={<BibleReader />} />
          <Route path="/study" element={<StudyPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/timed-challenge" element={<TimedChallenge />} />
          <Route path="/review" element={<ReviewQuiz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
