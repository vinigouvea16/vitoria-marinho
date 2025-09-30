'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { usePixelConsent } from '@/lib/usePixelConsent'

export default function PixelManager() {
  const pathname = usePathname()
  const { consent } = usePixelConsent()

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (consent && typeof window.fbq === 'function') {
      window.fbq('track', 'PageView')
    }
  }, [pathname, consent])

  const trackLead = () => {
    if (consent && typeof window.fbq === 'function') {
      window.fbq('track', 'Lead')
    }
  }

  return (
    <div style={{ display: 'none' }}>
      {/* Exemplo: botão para teste do Lead */}
      <button type="button" onClick={trackLead}>
        Disparar Lead
      </button>
    </div>
  )
}
