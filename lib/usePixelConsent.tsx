'use client'
import { useState, useEffect } from 'react'

export function usePixelConsent() {
  const [consent, setConsent] = useState<boolean | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem('pixelConsent')
    if (saved) setConsent(saved === 'true')
  }, [])

  const accept = () => {
    localStorage.setItem('pixelConsent', 'true')
    setConsent(true)
  }

  const decline = () => {
    localStorage.setItem('pixelConsent', 'false')
    setConsent(false)
  }

  return { consent, accept, decline }
}
