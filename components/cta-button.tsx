import { LaptopMinimalCheck } from 'lucide-react'

export function CTAButton({ className = '', ...props }) {
  return (
    <div className={className}>
      {/* Desktop */}
      <a
        target="_blank"
        href="https://wa.me/5584996800712"
        rel="noreferrer"
        className="hidden lg:block bg-vitoria-yellow text-vitoria-brown px-8 py-5 rounded-2xl border-[1px] border-white text-xl hover:brightness-110 hover:cursor-pointer"
        {...props}
      >
        Quero agendar minha consulta
      </a>

      {/* Mobile */}
      <a
        target="_blank"
        href="https://wa.me/5584996800712"
        rel="noreferrer"
        className="lg:hidden flex py-2 px-4 items-center justify-center text-xl border-[1px] border-vitoria-text gap-2 rounded-xl w-full"
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
      </a>
    </div>
  )
}
