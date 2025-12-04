import { useState, useEffect, useCallback } from 'react';

export interface UserPlanProgress {
  planId: string;
  startDate: string;
  completedDays: number[];
  isActive: boolean;
}

const STORAGE_KEY = 'bible_reading_plans';

export const useReadingPlans = () => {
  const [plans, setPlans] = useState<UserPlanProgress[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setPlans(JSON.parse(stored));
      } catch {
        setPlans([]);
      }
    }
  }, []);

  const savePlans = useCallback((newPlans: UserPlanProgress[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newPlans));
    setPlans(newPlans);
  }, []);

  const startPlan = useCallback((planId: string) => {
    const existing = plans.find(p => p.planId === planId);
    if (existing) {
      // Reset the plan
      const updated = plans.map(p => 
        p.planId === planId 
          ? { ...p, startDate: new Date().toISOString(), completedDays: [], isActive: true }
          : p
      );
      savePlans(updated);
    } else {
      savePlans([...plans, {
        planId,
        startDate: new Date().toISOString(),
        completedDays: [],
        isActive: true,
      }]);
    }
  }, [plans, savePlans]);

  const completeDay = useCallback((planId: string, day: number) => {
    const updated = plans.map(p => {
      if (p.planId === planId && !p.completedDays.includes(day)) {
        return { ...p, completedDays: [...p.completedDays, day] };
      }
      return p;
    });
    savePlans(updated);
  }, [plans, savePlans]);

  const getPlanProgress = useCallback((planId: string): UserPlanProgress | undefined => {
    return plans.find(p => p.planId === planId);
  }, [plans]);

  const abandonPlan = useCallback((planId: string) => {
    const updated = plans.map(p => 
      p.planId === planId ? { ...p, isActive: false } : p
    );
    savePlans(updated);
  }, [plans, savePlans]);

  return {
    plans,
    startPlan,
    completeDay,
    getPlanProgress,
    abandonPlan,
  };
};
