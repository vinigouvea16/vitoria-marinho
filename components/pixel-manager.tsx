'use client'

declare global {
  interface Window {
    fbq?: (
      event: string,
      action?: string,
      params?: Record<string, unknown>
    ) => void
  }
}

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function PixelManager() {
  const pathname = usePathname()

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView')
    }
  }, [pathname])

  // Função para disparar evento customizado Lead
  const trackLead = () => {
    if (typeof window.fbq === 'function') {
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
