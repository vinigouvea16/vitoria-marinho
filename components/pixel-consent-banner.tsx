'use client'
import { usePixelConsent } from '@/lib/usePixelConsent'

export default function PixelConsentBanner() {
  const { consent, accept, decline } = usePixelConsent()

  if (consent !== null) return null
  return (
    <div className="fixed lg:h-[15vh] h-[30vh] bottom-0 w-full bg-gray-900 text-white p-4 flex flex-col lg:flex-row justify-around items-center z-50">
      <p className="text-lg text-center lg:text-left lg:text-2xl">
        Este site usa o Meta Pixel para analisar interações e melhorar
        campanhas. Clique em “Aceitar” para permitir o rastreamento.
      </p>
      <div className="flex gap-2 mt-2 lg:mt-0">
        <button
          type="button"
          onClick={accept}
          className="bg-vitoria-brown text-xl px-6 py-4 rounded cursor-pointer hover:bg-vitoria-yellow"
        >
          Aceitar
        </button>
        <button
          type="button"
          onClick={decline}
          className="bg-gray-700 text-xl px-6 py-4 rounded cursor-pointer hover:bg-vitoria-grey"
        >
          Recusar
        </button>
      </div>
    </div>
  )
}
