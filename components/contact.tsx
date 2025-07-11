import Image from 'next/image'
import Footer from './footer'
import { CTAButton } from './cta-button'

export default function Contact() {
  return (
    <div
      id="contato"
      className="lg:h-screen h-svh z-10 bg-vitoria-brown flex flex-col lg:justify-between justify-center items-center"
    >
      <div className="flex flex-col h-[50vh] items-center justify-evenly lg:my-auto lg:w-2/3 text-center">
        <h3 className="text-vitoria-text lg:text-6xl text-2xl font-light w-4/5">
          O <b>maior alívio</b> vem quando paramo de tentar dar conta sozinhos.
        </h3>

        <div className="flex flex-col-reverse lg:flex-row justify-evenly items-center gap-8 lg:space-y-0">
          <CTAButton />
          <div className="w-[1px] h-16 bg-vitoria-beige hidden lg:block" />
          <Image
            src="/logo1.png"
            width={307}
            height={105}
            alt={'logo da psiquiatra vitoria marinho'}
            className="w-[307px] h-[105px] object-contain"
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}
