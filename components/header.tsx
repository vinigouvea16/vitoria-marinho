'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { usePixel } from '@/lib/usePixel'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { trackCustom } = usePixel()

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsMenuOpen(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', controlHeader)

    return () => {
      window.removeEventListener('scroll', controlHeader)
    }
  }, [lastScrollY])

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleNavClick = (id: string) => {
    const section = document.querySelector(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    closeMenu()
  }

  const handleClick = () => {
    trackCustom('click_WhatsApp_menu')
    window.open(
      'https://api.whatsapp.com/send?phone=5584996800712&text=Oi,%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20consulta%20da%20Dr.%20Vit%C3%B3ria%20Marinho',
      '_blank',
      'noopener,noreferrer'
    )
  }

  // const handleClickMobile = () => {
  //   trackCustom('click_WhatsApp_menu_mobile')
  //   window.open(
  //     'https://api.whatsapp.com/send?phone=558499487575&text=Oi,%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20consulta%20da%20Dr.%20Vit%C3%B3ria%20Marinho',
  //     '_blank',
  //     'noopener,noreferrer'
  //   )
  // }

  return (
    <>
      {/* Header Desktop */}
      <div
        className={`rounded-4xl z-20 bg-vitoria-brown/50 hidden lg:flex items-center w-fit p-2 fixed top-14 left-16 text-lg overflow-hidden transition-transform duration-500 ${
          isVisible ? 'translate-y-0' : '-translate-y-40'
        }`}
      >
        <a href="#hero">
          <Image
            src="/logo1.png"
            width={255}
            height={77}
            alt="logo da psiquiatra vitoria marinho"
            className="w-[255px] h-[77px] object-contain"
          />
        </a>
        <div className="text-vitoria-text font-thin justify-between flex gap-4 p-4">
          <button
            type="button"
            onClick={() => handleNavClick('#about')}
            className="hover:text-vitoria-yellow hover:underline underline-offset-4 cursor-pointer"
          >
            sobre
          </button>
          <div className="w-[1px] bg-vitoria-text" />
          <button
            type="button"
            onClick={() => handleNavClick('#feedbacks')}
            className="hover:text-vitoria-yellow hover:underline underline-offset-4 cursor-pointer"
          >
            feedbacks
          </button>
          <div className="w-[1px] bg-vitoria-text" />
          <button
            type="button"
            onClick={() => handleNavClick('#faq')}
            className="hover:text-vitoria-yellow hover:underline underline-offset-4 cursor-pointer"
          >
            faq
          </button>
          <div className="w-[1px] bg-vitoria-text" />
          <button
            type="button"
            onClick={handleClick}
            className="hover:text-vitoria-yellow hover:underline underline-offset-4 cursor-pointer"
          >
            contato
          </button>
        </div>
      </div>

      {/* Header Mobile */}
      <div
        className={`lg:hidden fixed flex top-6 right-4 z-50 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-22'
        }`}
      >
        <button
          type="button"
          onClick={toggleMenu}
          className="w-16 h-16 border-vitoria-yellow border-[1.5px] bg-vitoria-brown/80 rounded-full flex items-center justify-center text-vitoria-text hover:bg-vitoria-brown transition-colors"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? (
            <X size={24} strokeWidth={1} />
          ) : (
            <Menu size={48} strokeWidth={1} className="text-vitoria-yellow" />
          )}
        </button>
      </div>

      {/* Logo Mobile */}
      <div
        className={`lg:hidden fixed top-8 left-8 z-50 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-22'
        }`}
      >
        {/* <a href="#hero">
          <Image
            src="/logo1.png"
            width={120}
            height={54}
            unoptimized
            alt="logo da psiquiatra vitoria marinho"
            className="w-[120px] h-[54px]  object-contain"
          />
        </a> */}
      </div>

      {/* Menu Mobile Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm">
          <div className="absolute top-24 left-4 right-4 bg-vitoria-brown/95 rounded-3xl p-8 shadow-2xl">
            <a href="#hero">
              <Image
                src="/logo1.png"
                width={120}
                height={54}
                unoptimized
                alt="logo da psiquiatra vitoria marinho"
                className="w-[120px] h-[54px] mx-auto object-contain"
              />
            </a>
            <nav className="flex flex-col space-y-6">
              <button
                type="button"
                onClick={() => handleNavClick('#about')}
                className="text-vitoria-text text-xl hover:text-white transition-colors border-b border-vitoria-text/30 pb-3 text-left"
              >
                sobre
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('#feedbacks')}
                className="text-vitoria-text text-xl hover:text-white transition-colors border-b border-vitoria-text/30 pb-3 text-left"
              >
                feedbacks
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('#faq')}
                className="text-vitoria-text text-xl hover:text-white transition-colors border-b border-vitoria-text/30 pb-3 text-left"
              >
                faq
              </button>
              <button
                type="button"
                onClick={handleClick}
                className="text-vitoria-text text-xl hover:text-white transition-colors text-left"
              >
                contato
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
