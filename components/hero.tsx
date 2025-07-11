import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { LaptopMinimalCheck, Brain } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <>
      <MainHero />
      <SubHero />
    </>
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
          <div className="flex justify-center align-middle mt-30">
            <p className="lg:text-4xl lg:w-2/3 text-2xl text-center">
              Reconquiste seu{' '}
              <span className="italic font-bold">equilibro emocional</span> com
              cuidado, e acolhimento
            </p>
          </div>

          {/* Div amarela - apenas desktop */}
          <div className="rounded-3xl p-8 bg-vitoria-yellow w-2/3 text-2xl hidden lg:block">
            <p className="font-light text-white/75 w-[90%]">
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

      {/* Div amarela - mobile - posicionada entre hero e subhero */}
      <div className="lg:hidden absolute -bottom-16 left-1/2 transform -translate-x-1/2 z-30 w-[85%]">
        <div className="rounded-3xl p-6 bg-vitoria-yellow text-lg">
          <p className="font-light text-white/75">
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
    <div className="h-screen bg-vitoria-beige flex flex-col items-center justify-evenly lg:pt-0">
      <h2 className="lg:text-6xl text-3xl text-center w-2/3 text-vitoria-text lg:mt-20">
        {' '}
        Minha consulta é para você, que:
      </h2>
      <div className="lg:flex items-center align-middle gap-3 h-[50vh] mx-28 hidden">
        <CardTwo />
        <CardTwo />
        <CardTwo />
        <CardTwo />
      </div>

      <CarouselSubHero />

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

function CardTwo() {
  return (
    <div className="rounded-[70px] bg-vitoria-text flex flex-col items-center justify-center space-y-4 border-[1px] border-[#707070] h-full">
      <Brain size={100} strokeWidth={1} className="text-vitoria-yellow" />
      <p className="text-vitoria-brown text-2xl text-center w-4/5">
        Sente que a ansiedade está dominando seus dias
      </p>
    </div>
  )
}

function CarouselSubHero() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full max-w-sm md:max-w-4xl mx-auto block lg:hidden"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            className="pl-4 md:pl-4 basis-full md:basis-1/2"
          >
            <div className="p-1">
              <Card className="rounded-[70px] bg-vitoria-text flex flex-col items-center justify-center space-y-4 border-[1px] border-[#707070] h-full">
                <CardContent className="flex flex-col items-center justify-around p-6 min-h-[300px]">
                  <Brain
                    size={100}
                    strokeWidth={1}
                    className="text-vitoria-yellow"
                  />
                  <p className="text-vitoria-brown text-2xl text-center w-4/5">
                    Sente que a ansiedade está dominando seus dias
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="h-12 w-12 border-none bg-vitoria-brown text-vitoria-text hover:bg-vitoria-brown/90 -left-3" />
      <CarouselNext className="h-12 w-12 border-none bg-vitoria-brown text-vitoria-text hover:bg-vitoria-brown/90 -right-3" />
    </Carousel>
  )
}
