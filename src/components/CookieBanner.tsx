import React, { useEffect, useState } from 'react';
import {
  CONSENT_UPDATED_EVENT,
  OPEN_COOKIE_SETTINGS_EVENT,
  ConsentPreferences,
  readConsent,
  saveConsent
} from '../privacy/consent';

interface TrackingWindow extends Window {
  dataLayer?: unknown[][];
  gtag?: (...args: unknown[]) => void;
  fbq?: FacebookPixel;
  _fbq?: FacebookPixel;
}

interface FacebookPixel {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[][];
  loaded?: boolean;
  version?: string;
  push?: (...args: unknown[]) => void;
}

function updateTracking(preferences: ConsentPreferences | null): void {
  const trackingWindow = window as TrackingWindow;
  const ga4Id = import.meta.env.VITE_GA4_ID?.trim();
  const metaPixelId = import.meta.env.VITE_META_PIXEL_ID?.trim();
  const ga4ScriptId = 'privacy-tracking-ga4';
  const metaScriptId = 'privacy-tracking-meta';
  const ga4ScriptLoaded = Boolean(document.getElementById(ga4ScriptId));
  const metaScriptLoaded = Boolean(document.getElementById(metaScriptId));

  if (preferences?.analytics && ga4Id && /^G-[A-Z0-9]+$/i.test(ga4Id)) {
    trackingWindow.dataLayer ??= [];
    trackingWindow.gtag ??= (...args) => trackingWindow.dataLayer?.push(args);
    trackingWindow.gtag('consent', ga4ScriptLoaded ? 'update' : 'default', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });

    if (!ga4ScriptLoaded) {
      trackingWindow.gtag('js', new Date());
      trackingWindow.gtag('config', ga4Id, { anonymize_ip: true });
      const script = document.createElement('script');
      script.id = ga4ScriptId;
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4Id)}`;
      document.head.appendChild(script);
    }
  } else if (trackingWindow.gtag) {
    trackingWindow.gtag('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
  }

  if (preferences?.advertising && !preferences.saleShareOptOut && metaPixelId && /^\d+$/.test(metaPixelId)) {
    if (!trackingWindow.fbq) {
      const fbq: FacebookPixel = (...args) => {
        if (fbq.callMethod) fbq.callMethod(...args);
        else fbq.queue?.push(args);
      };
      fbq.queue = [];
      fbq.loaded = true;
      fbq.version = '2.0';
      fbq.push = fbq;
      trackingWindow.fbq = fbq;
      trackingWindow._fbq = fbq;
    }

    trackingWindow.fbq('consent', 'grant');

    if (!metaScriptLoaded) {
      trackingWindow.fbq('init', metaPixelId);
      trackingWindow.fbq('track', 'PageView');
      const script = document.createElement('script');
      script.id = metaScriptId;
      script.async = true;
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      document.head.appendChild(script);
    }
  } else {
    trackingWindow.fbq?.('consent', 'revoke');
  }
}

function newPreferences(analytics: boolean, advertising: boolean, saleShareOptOut = false): ConsentPreferences {
  return {
    necessary: true,
    analytics,
    advertising: advertising && !saleShareOptOut,
    saleShareOptOut,
    updatedAt: new Date().toISOString()
  };
}

export const CookieBanner: React.FC = () => {
  const [consent, setConsent] = useState<ConsentPreferences | null>(() => readConsent());
  const [isOpen, setIsOpen] = useState(() => readConsent() === null);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(() => readConsent()?.analytics ?? false);
  const [advertising, setAdvertising] = useState(() => readConsent()?.advertising ?? false);

  useEffect(() => {
    const openSettings = () => {
      setIsOpen(true);
      setShowSettings(true);
    };
    const updatePreferences = (event: Event) => {
      const detail = (event as CustomEvent<ConsentPreferences>).detail;
      if (!detail) return;
      setConsent(detail);
      setAnalytics(detail.analytics);
      setAdvertising(detail.advertising);
      if (detail !== consent) {
        setIsOpen(false);
        setShowSettings(false);
      }
    };

    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
    window.addEventListener(CONSENT_UPDATED_EVENT, updatePreferences);
    return () => {
      window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
      window.removeEventListener(CONSENT_UPDATED_EVENT, updatePreferences);
    };
  }, [consent]);

  useEffect(() => {
    updateTracking(consent);
  }, [consent]);

  const commit = (preferences: ConsentPreferences) => {
    const savedPreferences = {
      ...preferences,
      saleShareOptOut: consent?.saleShareOptOut ?? preferences.saleShareOptOut,
      advertising: consent?.saleShareOptOut ? false : preferences.advertising
    };
    setConsent(savedPreferences);
    setAnalytics(savedPreferences.analytics);
    setAdvertising(savedPreferences.advertising);
    setIsOpen(false);
    setShowSettings(false);
    saveConsent(savedPreferences);
  };

  if (!isOpen) return null;

  return (
    <aside aria-label="Cookie and privacy preferences" className="fixed inset-x-0 bottom-0 z-[80] border-t border-neutral-700 bg-neutral-950 text-white shadow-2xl">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <h2 className="font-display text-base font-bold">Privacy preferences</h2>
            <p className="mt-1 text-sm leading-relaxed text-neutral-300">
              Essential storage keeps your choice. Optional analytics and advertising technologies stay off unless you allow them. You can change your choice at any time in Cookie Settings.
            </p>
          </div>

          {showSettings ? (
            <div className="grid gap-3 border-t border-neutral-700 pt-4 md:min-w-[22rem] md:border-l md:border-t-0 md:pl-5 md:pt-0">
              <label className="flex items-center justify-between gap-4 text-sm">
                <span>Essential storage <span className="text-neutral-400">(always active)</span></span>
                <input type="checkbox" checked disabled aria-label="Essential storage is always active" className="h-4 w-4 accent-emerald-500" />
              </label>
              <label className="flex items-center justify-between gap-4 text-sm">
                <span>Analytics</span>
                <input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} className="h-4 w-4 accent-emerald-500" />
              </label>
              <label className="flex items-center justify-between gap-4 text-sm">
                <span>Advertising and retargeting</span>
                <input type="checkbox" checked={advertising} disabled={consent?.saleShareOptOut} onChange={(event) => setAdvertising(event.target.checked)} className="h-4 w-4 accent-emerald-500" />
              </label>
              {consent?.saleShareOptOut && <p className="text-xs text-neutral-400">Advertising remains off on this browser following your opt-out request.</p>}
              <div className="flex flex-wrap gap-2 pt-1">
                <button type="button" onClick={() => commit(newPreferences(analytics, advertising))} className="min-h-10 bg-emerald-400 px-4 py-2 text-xs font-bold uppercase text-neutral-950 hover:bg-emerald-300">Save preferences</button>
                <button type="button" onClick={() => commit(newPreferences(false, false))} className="min-h-10 border border-neutral-500 px-4 py-2 text-xs font-bold uppercase text-white hover:bg-neutral-800">Decline optional</button>
                <button type="button" onClick={() => commit(newPreferences(true, true))} className="min-h-10 border border-neutral-500 px-4 py-2 text-xs font-bold uppercase text-white hover:bg-neutral-800">Accept all</button>
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={() => commit(newPreferences(false, false))} className="min-h-11 border border-neutral-500 px-4 py-2 text-xs font-bold uppercase text-white hover:bg-neutral-800">Decline optional</button>
              <button type="button" onClick={() => setShowSettings(true)} className="min-h-11 border border-neutral-500 px-4 py-2 text-xs font-bold uppercase text-white hover:bg-neutral-800">Customize</button>
              <button type="button" onClick={() => commit(newPreferences(true, true))} className="min-h-11 bg-emerald-400 px-4 py-2 text-xs font-bold uppercase text-neutral-950 hover:bg-emerald-300">Accept all</button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};