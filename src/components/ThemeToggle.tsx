import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 bg-card/80 backdrop-blur-sm border-border hover:bg-secondary transition-all duration-300"
      aria-label={isDark ? "Passa al tema chiaro" : "Passa al tema scuro"}
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-primary transition-transform duration-300 rotate-0 scale-100" />
      ) : (
        <Moon className="h-5 w-5 text-primary transition-transform duration-300 rotate-0 scale-100" />
      )}
    </Button>
  );
};

export default ThemeToggle;
