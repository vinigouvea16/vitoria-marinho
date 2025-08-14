'use client'

import { usePathname } from 'next/navigation'

export function usePixel() {
  const pathname = usePathname()

  const trackPageView = () => {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView', { page: pathname })
    }
  }

  // eventos prontos
  const trackLead = (data?: Record<string, unknown>) => {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', data)
    }
  }

  const trackCustom = (eventName: string, data?: Record<string, unknown>) => {
    if (typeof window.fbq === 'function') {
      window.fbq('track', eventName, data)
    }
  }

  return { trackPageView, trackLead, trackCustom }
}
