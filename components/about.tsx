'use client'
import Image from 'next/image'
import Borboleta from './svgs/custom-svgs/borboleta'
import AnimatedSection from './animated-section'
import { usePixel } from '@/lib/usePixel'

export default function About() {
  return (
    <div className="h-full">
      <AboutIntro />
      <AnimatedSection>
        <Benefits />
      </AnimatedSection>
    </div>
  )
}

function AboutIntro() {
  return (
    <div
      id="about"
      className="lg:h-screen h-[80vh] relative overflow-hidden bg-vitoria-text flex overflow-x-hidden text-vitoria-brown"
    >
      <div className="lg:my-auto lg:ml-40 mx-auto flex flex-col space-y-14 lg:w-[38%] w-[80%]">
        <h1 className="lg:text-4xl text-2xl mt-20 lg:mt-0 text-center lg:text-left mb-20">
          <b className="italic">Quem</b> vai te acompanhar nessa jornada?
        </h1>
        <div className="space-y-4 hidden lg:block text-base/9 w-[90%]">
          <p className="">
            Meu nome é Vitória Marinho. Sou médica formada pela Universidade
            Potiguar, residente na área da psiquiatria pelo Hospital de Clínicas
            da UFPR.{' '}
            <b>
              Trabalho diariamente ouvindo histórias e ajudando pessoas a
              reconstruírem sua relação com a própria mente.
            </b>{' '}
          </p>
          <p className="">
            Minha atuação une ciência e acolhimento. Ofereço um espaço seguro e
            ético, onde você pode falar sem medo ou julgamentos. Meu objetivo é
            te ajudar a encontrar caminhos reais para reduzir o sofrimento e
            resgatar sua qualidade de vida.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 lg:-right-40 lg:-left-0 -left-30 h-full flex items-end justify-end">
        <Image
          src="/vitoria-fundo-2.png"
          width={1717}
          height={1104}
          alt={''}
          className="z-0 object-cover lg:h-full h-[75%] w-auto"
        />
      </div>
    </div>
  )
}

function Benefits() {
  const { trackCustom, trackGoogleAdsConversion } = usePixel()

  const handleClick = () => {
    trackCustom('click_WhatsApp_meio')

    trackGoogleAdsConversion('TibaCKzMhfYaEIG46JNA')

    window.open(
      'https://api.whatsapp.com/send?phone=5584996800712&text=Oi,%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20consulta%20da%20Dr.%20Vit%C3%B3ria%20Marinho',
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <div className="h-full lg:h-screen bg-vitoria-brown items-center justify-evenly flex flex-col">
      <h1 className="text-vitoria-text text-4xl lg:mt-20 hidden lg:block">
        Benefícios do atendimento
      </h1>
      <section className="w-full p-8">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-4 block lg:hidden text-vitoria-text text-base/9 font-light tracking-wide my-10">
            <p className="">
              Meu nome é Vitória Marinho. Sou médica formada pela Universidade
              Potiguar, residente na área da psiquiatria pelo Hospital de
              Clínicas da UFPR.{' '}
              <b>
                Trabalho diariamente ouvindo histórias e ajudando pessoas a
                reconstruírem sua relação com a própria mente.
              </b>{' '}
            </p>
            <p className="">
              Minha atuação une ciência e acolhimento. Ofereço um espaço seguro
              e ético, onde você pode falar sem medo ou julgamentos. Meu
              objetivo é te ajudar a encontrar caminhos reais para reduzir o
              sofrimento e resgatar sua qualidade de vida.
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-12 lg:h-[550px] flex flex-col-reverse gap-8 px-4">
            {/* Card A - Top Left */}
            <div className="relative bg-transparent lg:rounded-[70px] rounded-[45px] shadow-lg border border-vitoria-text lg:flex items-center justify-center group hover:shadow-xl transition-shadow duration-300 p-12 lg:p-0 hidden">
              <div className="absolute lg:-left-8 -left-6 top-1/2 transform -translate-y-1/2 bg-vitoria-yellow rounded-full p-2 shadow-lg">
                <Borboleta className="lg:h-10 lg:w-10 h-8 w-8 text-vitoria-brown" />
              </div>
              <div className="lg:text-center">
                <h3 className="text-lg lg:w-2/3 mx-auto text-vitoria-text text-center lg:text-left">
                  Acompanhamento próximo, com plano terapêutico ajustado à sua
                  realidade
                </h3>
              </div>
            </div>

            {/* Card Central - Spans 2 rows in the middle */}
            <div className="row-span-2 bg-vitoria-yellow lg:rounded-[70px] rounded-[45px] py-14 shadow-xl p-8 flex flex-col items-center justify-between text-white">
              <div className="text-center">
                <p className="text-2xl text-vitoria-brown text-center font-medium mb-4">
                  Pronto(a) para dar o primeiro passo?
                </p>
              </div>

              <div className="my-8 ">
                <button
                  type="button"
                  onClick={handleClick}
                  className="bg-vitoria-text text-lg flex text-center text-vitoria-brown px-12 py-3 rounded-3xl border border-vitoria-brown hover:bg-vitoria-brown hover:text-vitoria-text transition-colors duration-300 shadow-lg cursor-pointer"
                >
                  Quero agendar minha consulta
                </button>
              </div>

              <div className="text-center">
                <p className="text-xl text-vitoria-brown text-center font-medium lg:block hidden">
                  Quero saber como funciona antes:
                </p>
              </div>
            </div>

            {/* Card C - Top Right */}
            <div className="relative bg-transparent lg:rounded-[70px] rounded-[45px] shadow-lg border border-vitoria-text flex items-center justify-center group hover:shadow-xl transition-shadow duration-300 p-12 lg:p-0">
              <div className="absolute lg:-left-8 -left-6 top-1/2 transform -translate-y-1/2 bg-vitoria-text rounded-full p-2 shadow-lg">
                <Borboleta className="lg:h-10 lg:w-10 h-8 w-8 text-vitoria-brown" />
              </div>
              <div className="lg:text-center">
                <h4 className="text-lg lg:w-2/3 mx-auto text-vitoria-text text-center lg:text-left">
                  Foco em redução do sofrimento psíquico e fortalecimento
                  emocional
                </h4>
              </div>
            </div>

            {/* Card B - Bottom Left */}
            <div className="relative bg-transparent lg:rounded-[70px] rounded-[45px] shadow-lg border border-vitoria-text flex items-center justify-center group hover:shadow-xl transition-shadow duration-300 p-12 lg:p-0">
              <div className="absolute lg:-left-8 -left-6 top-1/2 transform -translate-y-1/2 bg-vitoria-text rounded-full p-2 shadow-lg">
                <Borboleta className="lg:h-10 lg:w-10 h-8 w-8 text-vitoria-brown" />
              </div>
              <div className="lg:text-center">
                <h5 className="text-lg lg:w-2/3 mx-auto text-vitoria-text text-center lg:text-left">
                  Tratamentos baseados em evidências científicas
                </h5>
              </div>
            </div>

            {/* Card D - Bottom Right */}
            <div className="relative bg-transparent lg:rounded-[70px] rounded-[45px] shadow-lg border border-vitoria-text flex items-center justify-center group hover:shadow-xl transition-shadow duration-300 p-12 lg:p-0">
              <div className="absolute lg:-left-8 -left-6 top-1/2 transform -translate-y-1/2 bg-vitoria-yellow rounded-full p-2 shadow-lg">
                <Borboleta className="lg:h-10 lg:w-10 h-8 w-8 text-vitoria-brown" />
              </div>
              <div className="lg:text-center">
                <h6 className="text-lg lg:w-2/3 mx-auto text-vitoria-text text-center lg:text-left">
                  Escuta qualificada e sem julgamentos
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
