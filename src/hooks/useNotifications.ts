import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useToast } from '@/hooks/use-toast';
import {
  isNotificationSupported,
  getNotificationPermission,
  requestNotificationPermission,
  getNotificationSettings,
  saveNotificationSettings,
  initializeNotifications,
  disableNotifications,
  updateNotificationTimes,
  showDailyChallengeNotification,
  showStudyReminderNotification,
  showStreakReminderNotification,
  type NotificationSettings,
} from '@/services/notificationService';

export const useNotifications = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  
  const [isSupported, setIsSupported] = useState(false);
  const [permission, setPermission] = useState<NotificationPermission | 'unsupported'>('default');
  const [settings, setSettings] = useState<NotificationSettings>(getNotificationSettings());
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const supported = isNotificationSupported();
    setIsSupported(supported);
    
    if (supported) {
      setPermission(getNotificationPermission() as NotificationPermission);
      initializeNotifications();
    }
  }, []);

  const enableNotifications = useCallback(async () => {
    setIsLoading(true);
    
    try {
      const result = await requestNotificationPermission();
      setPermission(result);
      
      if (result === 'granted') {
        const updatedSettings = getNotificationSettings();
        setSettings(updatedSettings);
        
        toast({
          title: t('notifications.enabled'),
          description: t('notifications.dailyChallenge'),
        });
        
        return true;
      } else if (result === 'denied') {
        toast({
          title: t('notifications.denied'),
          variant: 'destructive',
        });
        
        return false;
      }
    } catch (error) {
      console.error('Error enabling notifications:', error);
      toast({
        title: t('notifications.denied'),
        variant: 'destructive',
      });
      return false;
    } finally {
      setIsLoading(false);
    }
    
    return false;
  }, [t, toast]);

  const disable = useCallback(() => {
    disableNotifications();
    setSettings(prev => ({ ...prev, enabled: false }));
    
    toast({
      title: t('notifications.title'),
      description: t('notifications.disable'),
    });
  }, [t, toast]);

  const updateTimes = useCallback((dailyChallengeTime?: string, studyReminderTime?: string) => {
    updateNotificationTimes(dailyChallengeTime, studyReminderTime);
    setSettings(getNotificationSettings());
  }, []);

  const sendTestNotification = useCallback((type: 'challenge' | 'study' | 'streak') => {
    switch (type) {
      case 'challenge':
        showDailyChallengeNotification(t('notifications.dailyChallenge'));
        break;
      case 'study':
        showStudyReminderNotification(t('notifications.studyReminder'));
        break;
      case 'streak':
        showStreakReminderNotification(t('notifications.streakReminder', { days: 7 }));
        break;
    }
  }, [t]);

  return {
    isSupported,
    permission,
    settings,
    isLoading,
    isEnabled: settings.enabled && permission === 'granted',
    enableNotifications,
    disableNotifications: disable,
    updateTimes,
    sendTestNotification,
  };
};
