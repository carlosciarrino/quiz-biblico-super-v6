import { Bell, BellOff, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useNotifications } from '@/hooks/useNotifications';

const NotificationSettings = () => {
  const { t } = useTranslation();
  const {
    isSupported,
    permission,
    settings,
    isLoading,
    isEnabled,
    enableNotifications,
    disableNotifications,
    updateTimes,
    sendTestNotification,
  } = useNotifications();

  if (!isSupported) {
    return null;
  }

  const handleToggle = async () => {
    if (isEnabled) {
      disableNotifications();
    } else {
      await enableNotifications();
    }
  };

  return (
    <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          {isEnabled ? (
            <Bell className="w-5 h-5 text-primary" />
          ) : (
            <BellOff className="w-5 h-5 text-muted-foreground" />
          )}
          {t('notifications.settings')}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Enable/Disable Toggle */}
        <div className="flex items-center justify-between">
          <Label htmlFor="notifications-toggle" className="cursor-pointer">
            {isEnabled ? t('notifications.disable') : t('notifications.enable')}
          </Label>
          <Switch
            id="notifications-toggle"
            checked={isEnabled}
            onCheckedChange={handleToggle}
            disabled={isLoading || permission === 'denied'}
          />
        </div>

        {permission === 'denied' && (
          <p className="text-sm text-destructive">
            {t('notifications.denied')}
          </p>
        )}

        {/* Time Settings */}
        {isEnabled && (
          <div className="space-y-4 pt-2 border-t border-border/50">
            <div className="space-y-2">
              <Label htmlFor="challenge-time" className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                {t('notifications.dailyChallengeTime')}
              </Label>
              <Input
                id="challenge-time"
                type="time"
                value={settings.dailyChallengeTime}
                onChange={(e) => updateTimes(e.target.value, undefined)}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="study-time" className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                {t('notifications.studyReminderTime')}
              </Label>
              <Input
                id="study-time"
                type="time"
                value={settings.studyReminderTime}
                onChange={(e) => updateTimes(undefined, e.target.value)}
                className="w-full"
              />
            </div>

            {/* Test Buttons */}
            <div className="flex flex-wrap gap-2 pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => sendTestNotification('challenge')}
              >
                Test Sfida
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => sendTestNotification('study')}
              >
                Test Studio
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default NotificationSettings;
