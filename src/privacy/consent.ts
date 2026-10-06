export const CONSENT_STORAGE_KEY = 'privacy_consent_v1';
export const CONSENT_UPDATED_EVENT = 'privacy:consent-updated';
export const OPEN_COOKIE_SETTINGS_EVENT = 'privacy:open-cookie-settings';

export interface ConsentPreferences {
  necessary: true;
  analytics: boolean;
  advertising: boolean;
  saleShareOptOut: boolean;
  updatedAt: string;
}

export function readConsent(): ConsentPreferences | null {
  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!stored) return null;

    const value = JSON.parse(stored) as Partial<ConsentPreferences>;
    if (value.necessary !== true || typeof value.analytics !== 'boolean' || typeof value.advertising !== 'boolean') {
      return null;
    }

    return {
      necessary: true,
      analytics: value.analytics,
      advertising: value.advertising,
      saleShareOptOut: value.saleShareOptOut === true,
      updatedAt: typeof value.updatedAt === 'string' ? value.updatedAt : ''
    };
  } catch {
    return null;
  }
}

export function saveConsent(preferences: ConsentPreferences): void {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(preferences));
  } catch {
  }
  window.dispatchEvent(new CustomEvent<ConsentPreferences>(CONSENT_UPDATED_EVENT, { detail: preferences }));
}

export function disableAdvertisingOnThisDevice(): ConsentPreferences {
  const current = readConsent();
  const preferences: ConsentPreferences = {
    necessary: true,
    analytics: current?.analytics ?? false,
    advertising: false,
    saleShareOptOut: true,
    updatedAt: new Date().toISOString()
  };
  saveConsent(preferences);
  return preferences;
}