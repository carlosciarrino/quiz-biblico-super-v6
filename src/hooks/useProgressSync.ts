import { useState, useEffect, useCallback, useRef } from 'react';
import {
  syncProgressToServer,
  loadProgressFromServer,
  mergeProgress,
  getLastSyncTime,
  hasPendingSync,
} from '@/services/syncService';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

export const useProgressSync = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSync, setLastSync] = useState<string | null>(getLastSyncTime());
  const syncInProgressRef = useRef(false);

  // Sync when coming back online
  const handleOnline = useCallback(async () => {
    if (syncInProgressRef.current) return;
    
    syncInProgressRef.current = true;
    setIsSyncing(true);

    try {
      // First, load server data
      const serverData = await loadProgressFromServer();
      
      // Get local data
      const localStats = localStorage.getItem('bible_quiz_user_stats');
      const localWrongAnswers = localStorage.getItem('bible_quiz_wrong_answers');
      
      const localData = {
        stats: localStats ? JSON.parse(localStats) : {},
        wrongAnswers: localWrongAnswers ? JSON.parse(localWrongAnswers) : [],
      };

      // Merge data (local wins for newer)
      const merged = mergeProgress(localData, serverData);
      
      // Save merged data locally
      localStorage.setItem('bible_quiz_user_stats', JSON.stringify(merged.stats));
      localStorage.setItem('bible_quiz_wrong_answers', JSON.stringify(merged.wrongAnswers));

      // Sync to server
      const success = await syncProgressToServer();
      
      if (success) {
        setLastSync(getLastSyncTime());
        toast({
          title: t('sync.success'),
          description: t('sync.progressSynced'),
        });
      }
    } catch (error) {
      console.error('Sync error:', error);
      toast({
        title: t('sync.error'),
        description: t('sync.syncFailed'),
        variant: 'destructive',
      });
    } finally {
      setIsSyncing(false);
      syncInProgressRef.current = false;
    }
  }, [t, toast]);

  // Manual sync trigger
  const triggerSync = useCallback(async () => {
    if (!navigator.onLine) {
      toast({
        title: t('sync.offline'),
        description: t('sync.waitForConnection'),
        variant: 'destructive',
      });
      return false;
    }
    
    await handleOnline();
    return true;
  }, [handleOnline, t, toast]);

  // Listen for online events
  useEffect(() => {
    const onOnline = () => {
      if (hasPendingSync()) {
        handleOnline();
      }
    };

    window.addEventListener('online', onOnline);
    
    // Also try to sync on mount if online
    if (navigator.onLine) {
      handleOnline();
    }

    return () => {
      window.removeEventListener('online', onOnline);
    };
  }, [handleOnline]);

  // Periodic sync every 5 minutes when online
  useEffect(() => {
    const interval = setInterval(() => {
      if (navigator.onLine && !syncInProgressRef.current) {
        syncProgressToServer().then((success) => {
          if (success) {
            setLastSync(getLastSyncTime());
          }
        });
      }
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return {
    isSyncing,
    lastSync,
    triggerSync,
    hasPendingChanges: hasPendingSync(),
  };
};
