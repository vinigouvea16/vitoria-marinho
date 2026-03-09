'use client'

import WhatsApp from '@/components/svgs/whatsapp'

export default function FixedCTAButton() {
  const handleClick = () => {
    window.open(
      'https://api.whatsapp.com/send?phone=5584996800712&text=Oi,%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20consulta%20da%20Dr.%20Vit%C3%B3ria%20Marinho',
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Agendar consulta pelo WhatsApp"
      className="md:hidden fixed bottom-12 right-8 z-50 flex items-center justify-center bg-[#25D366] p-4 rounded-full shadow-lg border border-white/30 hover:brightness-110 hover:cursor-pointer"
    >
      <WhatsApp className="w-7 h-7" />
    </button>
  )
}
