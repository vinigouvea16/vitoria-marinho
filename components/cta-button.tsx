'use client'
import { usePixel } from '@/lib/usePixel'
import { LaptopMinimalCheck } from 'lucide-react'

export function CTAButton({ className = '', ...props }) {
  const { trackCustom, trackGoogleAdsConversion } = usePixel()

  const handleClick = () => {
    trackCustom('click_WhatsApp_fim')

    trackGoogleAdsConversion()

    window.open(
      'https://api.whatsapp.com/send?phone=5584996800712&text=Oi,%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20consulta%20da%20Dr.%20Vit%C3%B3ria%20Marinho',
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <div className={className}>
      {/* Desktop */}
      <button
        type="button"
        onClick={handleClick}
        className="hidden lg:block bg-vitoria-yellow text-vitoria-brown px-8 py-5 rounded-2xl border-[1px] border-white text-xl hover:brightness-110 hover:cursor-pointer"
        {...props}
      >
        Quero agendar minha consulta
      </button>

      {/* Mobile */}
      <button
        type="button"
        onClick={handleClick}
        className="lg:hidden flex py-2 px-4 items-center justify-center text-xl border-[1px] border-vitoria-text gap-2 rounded-xl w-fit mx-2"
        {...props}
      >
        <LaptopMinimalCheck
          className="text-vitoria-text"
          size={48}
          strokeWidth={1}
        />
        <p className="text-vitoria-text">
          <span className="text-vitoria-beige font-bold pr-1.5">Quero</span>
          agendar minha consulta
        </p>
      </button>
    </div>
  )
}
