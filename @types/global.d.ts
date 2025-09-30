declare global {
  interface Window {
    fbq: (
      action: 'track' | 'trackCustom' | 'init',
      eventName: string,
      data?: Record<string, unknown>
    ) => void
    gtag: (
      command: 'config' | 'event' | 'js',
      targetOrAction: string | Date,
      params?: Record<string, unknown>
    ) => void
    dataLayer: Record<string, unknown>[]
  }
}

export {}
