'use client'
import { usePathname } from 'next/navigation'
import { usePixelConsent } from '@/lib/usePixelConsent'

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

  return { trackPageView, trackLead, trackCustom }
}
