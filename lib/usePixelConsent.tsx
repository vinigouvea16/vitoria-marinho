'use client'
import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react'

interface PixelConsentContextType {
  consent: boolean | null
  accept: () => void
  decline: () => void
}

const PixelConsentContext = createContext<PixelConsentContextType | undefined>(
  undefined
)

export function PixelConsentProvider({ children }: { children: ReactNode }) {
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

  return (
    <PixelConsentContext.Provider value={{ consent, accept, decline }}>
      {children}
    </PixelConsentContext.Provider>
  )
}

export function usePixelConsent() {
  const context = useContext(PixelConsentContext)
  if (context === undefined) {
    throw new Error('usePixelConsent must be used within PixelConsentProvider')
  }
  return context
}
