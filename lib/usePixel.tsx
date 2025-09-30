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

  const trackGoogleAdsConversion = (conversionLabel?: string) => {
    console.log('🔍 Verificações:', {
      consent,
      gtagExists: typeof window.gtag === 'function',
      googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,
    })

    if (consent && typeof window.gtag === 'function') {
      const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID

      console.log('✅ Disparando Google Ads conversion')

      if (conversionLabel) {
        window.gtag('event', 'conversion', {
          send_to: `${googleAdsId}/${conversionLabel}`,
        })
        console.log('📤 Evento enviado:', `${googleAdsId}/${conversionLabel}`)
      } else {
        window.gtag('event', 'click', {
          event_category: 'engagement',
          event_label: 'outbound_click',
        })
        console.log('📤 Evento click genérico enviado')
      }
    } else {
      console.log('❌ Bloqueado - consent ou gtag não disponível')
    }
  }

  return { trackPageView, trackLead, trackCustom, trackGoogleAdsConversion }
}
