import { LaptopMinimalCheck } from 'lucide-react'
import Image from 'next/image'
import CrisesDePanico from './svgs/custom-svgs/crises-de-panico'
import Energia from './svgs/custom-svgs/energia'
import Pensamentos from './svgs/custom-svgs/pensamentos'
import Compulsao from './svgs/custom-svgs/compulsao'
import Dormir from './svgs/custom-svgs/dormir'
import EspacoSeguro from './svgs/custom-svgs/espaco-seguro'

export default function Hero() {
  return (
    <div className="">
      <MainHero />
      <SubHero />
    </div>
  )
}

function MainHero() {
  return (
    <div className="relative">
      <div
        id="hero"
        className="lg:h-screen h-[80vh] relative overflow-hidden lg:grid lg:grid-cols-2 bg-vitoria-brown text-vitoria-text"
      >
        <div className="m-auto flex flex-col items-center lg:gap-20 gap-10 relative z-10">
          <div className="flex justify-center align-middle mt-24">
            <p className="lg:text-4xl lg:w-2/3 text-2xl w-2/3 lg:text-left text-center">
              Reconquiste seu{' '}
              <span className="italic font-bold">equilibro emocional</span> com
              cuidado, e acolhimento
            </p>
          </div>

          {/* Div amarela - apenas desktop */}
          <div className="rounded-3xl px-14 py-8 bg-vitoria-yellow w-2/3 text-2xl hidden lg:block">
            <p className="font-light text-white/75 w-[85%]">
              Atendimento individualizado com a Dra. Vitória Marinho, psiquiatra
              que une{' '}
              <span className="text-vitoria-brown font-semibold">
                ciência, empatia respeito
              </span>{' '}
              à <b>sua historia</b>.
            </p>
          </div>
        </div>

        <div className="absolute inset-0 lg:left-10 lg:-bottom-110 flex lg:justify-centers justify-center">
          <Image
            src="/vitoria-fundo.png"
            width={800}
            height={1200}
            unoptimized
            alt="Imagem da Dra. Vitória"
            className="lg:object-contain mt-40 lg:mt-0 object-cover z-20 lg:h-full lg:w-auto w-[400px] h-[800px] "
          />
        </div>

        <div className="hidden lg:block">
          <Image
            src="/background.png"
            width={1080}
            height={1920}
            unoptimized
            alt={'logo da psiquiatra vitoria marinho'}
            className="h-screen object-cover"
          />
        </div>
      </div>

      <div className="lg:hidden absolute -bottom-16 left-1/2 transform -translate-x-1/2 z-30 w-[85%]">
        <div className="rounded-3xl p-8 bg-vitoria-yellow text-xl">
          <p className="font-light text-white/65 text-center">
            Atendimento individualizado com a Dra. Vitória Marinho, psiquiatra
            que une{' '}
            <span className="text-vitoria-brown font-semibold">
              ciência, empatia respeito
            </span>{' '}
            à <b>sua historia</b>.
          </p>
        </div>
      </div>
    </div>
  )
}

function SubHero() {
  return (
    <div className="lg:h-screen py-30 lg:py-0 bg-vitoria-beige flex flex-col items-center justify-evenly lg:justify-evenly lg:pt-0">
      <h2 className="lg:text-5xl text-2xl text-center w-2/3 text-vitoria-text lg:mt-20">
        {' '}
        Minha consulta é para você, que:
      </h2>
      <div className="lg:flex-row items-center align-middle gap-3 lg:h-[40vh] lg:mx-28 flex flex-col my-8 lg:my-0">
        <CardTwo
          cardClassName="bg-vitoria-text border"
          icon={<CrisesDePanico className="h-20 w-20" />}
        >
          Sente que a ansiedade está dominando seus dias
        </CardTwo>
        <CardTwo
          cardClassName="bg-vitoria-brown border-vitoria-yellow lg:bg-vitoria-text border"
          textClassName="lg:text-vitoria-brown text-vitoria-text"
          icon={<Energia className="h-20 w-20" />}
        >
          Tem vivido crises de pânico que paralisa sua rotina
        </CardTwo>
        <CardTwo
          cardClassName="bg-vitoria-text border"
          icon={<Pensamentos className="h-20 w-20" />}
        >
          Está sem energia e motivação por causa da depressão
        </CardTwo>
        <CardTwo
          cardClassName="bg-vitoria-brown border-vitoria-yellow lg:bg-vitoria-text border"
          textClassName="lg:text-vitoria-brown text-vitoria-text"
          icon={<Compulsao className="h-20 w-20" />}
        >
          Vive um ciclo de compulsão alimentar
        </CardTwo>
        <CardTwo
          cardClassName="bg-vitoria-text border"
          icon={<Dormir className="h-20 w-20" />}
        >
          Não consegue dormir bem, mesmo exausto(a)
        </CardTwo>
        <CardTwo
          icon={<EspacoSeguro className="h-20 w-20" />}
          cardClassName="bg-vitoria-brown border border-vitoria-yellow"
          textClassName="text-vitoria-text"
        >
          Busca um espaço seguro para falar sobre o que sente
        </CardTwo>
      </div>

      <div className="flex py-2 px-4 items-center justify-center text-xl border-[1px] border-vitoria-text gap-2 rounded-xl lg:mb-20">
        <LaptopMinimalCheck
          className="text-vitoria-text"
          size={48}
          strokeWidth={1}
        />
        <p className="text-vitoria-text ">
          <span className="text-vitoria-brown font-bold pr-1.5">Quero</span>
          consultar online
        </p>
      </div>
    </div>
  )
}

interface CardTwoProps {
  children: string
  icon: React.ReactNode
  cardClassName?: string
  iconContainerClassName?: string
  textClassName?: string
}

function CardTwo({
  children,
  icon,
  cardClassName,
  iconContainerClassName,
  textClassName,
}: CardTwoProps) {
  return (
    <div
      className={`2xl:rounded-[70px] xl:rounded-[50px] rounded-[40px] max-w-[300px] px-4 py-6 lg:px-0 lg:py-0 lg:max-w-none flex flex-col items-center justify-center space-y-4 border-[1px] border-[#707070] h-full ${
        cardClassName || ''
      }`}
    >
      <div
        className={`flex items-center justify-center ${
          iconContainerClassName || ''
        }`}
      >
        {icon}
      </div>
      <p
        className={`text-vitoria-brown xl:text-lg lg:text-base 2xl:text-xl text-center w-4/5 ${
          textClassName || ''
        }`}
      >
        {children}
      </p>
    </div>
  )
}
