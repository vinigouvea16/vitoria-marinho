import Image from 'next/image'
import WhatsApp from './svgs/whatsapp'
import Instagram from './svgs/instagram'

export default function Footer() {
  return (
    <div className="w-full flex flex-col py-2 mb-8 lg:px-10 px-8 ">
      <div className="flex flex-col lg:flex-row w-full justify-between space-y-4 lg:gap-0 border-vitoria-beige/75 border-t-1">
        <div id="footers-right-side" className="flex items-center mt-4">
          {' '}
          <a href="#hero" className="hidden lg:block">
            <Image
              src="/logo1.png"
              width={255}
              height={77}
              alt={'logo da psiquiatra vitoria marinho'}
              className="w-[255px] h-[77px] object-contain"
            />
          </a>
          <div className="text-vitoria-text flex flex-col lg:flex-row lg:gap-4 lg:p-4 gap-1">
            <a className="hover:font-bold " href="#about">
              sobre
            </a>{' '}
            <div className="w-[1px] bg-vitoria-text" />
            <a className="hover:font-bold " href="feedbacks">
              feedbacks
            </a>{' '}
            <div className="w-[1px] bg-vitoria-text" />
            <a className="hover:font-bold " href="faq">
              faq
            </a>{' '}
            <div className="w-[1px] bg-vitoria-text" />
            <a className="hover:font-bold " href="_blank">
              contato
            </a>{' '}
          </div>
        </div>

        <div className="text-vitoria-beige lg:text-lg text-xs font-bold flex items-center gap-2">
          <a href="_blank" className="text-vitoria-text  ">
            politica de privicidade
          </a>
          <div className="w-[1px] bg-vitoria-text" />
          <p className="">
            feito com carinho por <span className="italic">estúdio vier</span>
          </p>
        </div>

        <div className="flex gap-2 items-center text-vitoria-text mx-auto lg:mx-0">
          <WhatsApp className="size-7 " />
          <Instagram className="size-7" />
        </div>
      </div>
    </div>
  )
}
