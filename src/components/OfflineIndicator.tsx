import { useState, useEffect } from 'react';
import { WifiOff, Wifi, Cloud, CloudOff, RefreshCw } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useProgressSync } from '@/hooks/useProgressSync';
import { Button } from '@/components/ui/button';

const OfflineIndicator = () => {
  const { t } = useTranslation();
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showReconnected, setShowReconnected] = useState(false);
  const { isSyncing, triggerSync, hasPendingChanges } = useProgressSync();

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowReconnected(true);
      setTimeout(() => setShowReconnected(false), 5000);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowReconnected(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Show syncing indicator
  if (isSyncing) {
    return (
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 bg-primary text-primary-foreground">
        <RefreshCw className="h-4 w-4 animate-spin" />
        <span className="text-sm font-medium">{t('sync.syncing')}</span>
      </div>
    );
  }

  // Show pending sync when online
  if (isOnline && hasPendingChanges && !showReconnected) {
    return (
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 bg-amber-500 text-white">
        <CloudOff className="h-4 w-4" />
        <span className="text-sm font-medium">{t('sync.pendingChanges')}</span>
        <Button
          size="sm"
          variant="ghost"
          className="h-6 px-2 text-white hover:bg-amber-600"
          onClick={triggerSync}
        >
          <RefreshCw className="h-3 w-3" />
        </Button>
      </div>
    );
  }

  // Show reconnected with sync complete
  if (showReconnected) {
    return (
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 bg-green-500 text-white">
        <Cloud className="h-4 w-4" />
        <span className="text-sm font-medium">{t('sync.reconnectedAndSynced')}</span>
      </div>
    );
  }

  // Show offline indicator
  if (!isOnline) {
    return (
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 bg-destructive text-destructive-foreground">
        <WifiOff className="h-4 w-4" />
        <span className="text-sm font-medium">{t('offline.message')}</span>
      </div>
    );
  }

  return null;
};

export default OfflineIndicator;
