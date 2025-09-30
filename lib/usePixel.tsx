'use client'
import { usePathname } from 'next/navigation'
import { usePixelConsent } from './usePixelConsent'

export function usePixel() {
  const pathname = usePathname()
  const { consent } = usePixelConsent()

  const trackPageView = () => {
    if (consent && typeof window.fbq === 'function') {
      window.fbq('track', 'PageView', { page: pathname })
    }
  }

  const trackLead = (data?: Record<string, unknown>) => {
    if (consent && typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', data)
    }
  }

  const trackCustom = (eventName: string, data?: Record<string, unknown>) => {
    if (consent && typeof window.fbq === 'function') {
      window.fbq('track', eventName, data)
    }
  }

  const trackGoogleAdsConversion = (conversionLabel?: string) => {
    if (consent !== false && typeof window.gtag === 'function') {
      const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID

      if (conversionLabel) {
        window.gtag('event', 'conversion', {
          send_to: `${googleAdsId}/${conversionLabel}`,
        })
      } else {
        window.gtag('event', 'click', {
          event_category: 'engagement',
          event_label: 'outbound_click',
        })
      }
    }
  }

  return { trackPageView, trackLead, trackCustom, trackGoogleAdsConversion }
}
