import { Brain } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  return (
    <div className="h-full">
      <AboutIntro />
      <Benefits />
    </div>
  )
}

function AboutIntro() {
  return (
    <div
      id="about"
      className="lg:h-screen h-[80vh] relative overflow-hidden bg-vitoria-text flex overflow-x-hidden text-vitoria-brown"
    >
      <div className="lg:my-auto lg:ml-40 mx-auto flex flex-col space-y-14 lg:w-[40%] w-[80%]">
        <h1 className="lg:text-5xl text-2xl mt-32 text-center">
          <b className="italic">Quem</b> vai te acompanhar nessa jornada?
        </h1>
        <div className="space-y-4 hidden lg:block text-lg/9 w-[90%]">
          <p className="">
            Sou a Dra. Vitória Marinho, médica psiquiatra, formada pela
            Universidade Potiguar e residente em psiquiatria pelo HC-UFPR. Meu
            maior propósito é oferecer um{' '}
            <b>
              espaço de escuta empática, onde você se sinta acolhido(a) e
              compreendido(a).
            </b>{' '}
          </p>
          <p className="">
            Acredito que cada pessoa carrega uma história única. Por isso, meu
            atendimento une conhecimento técnico, evidências científicas e
            escuta humanizada, para construir um plano de cuidado
            individualizado que te ajude a resgatar a autonomia, o sentido de
            viver e o bem-estar emocional.
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
  return (
    <div className="h-full bg-vitoria-brown items-center flex flex-col">
      <h1 className="text-vitoria-text text-4xl lg:mt-20 hidden lg:block">
        Benefícios do atendimento
      </h1>
      <section className="w-full p-8">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-4 block lg:hidden text-vitoria-text text-base/9 font-light tracking-wide my-10">
            <p className="">
              Sou a Dra. Vitória Marinho, médica psiquiatra, formada pela
              Universidade Potiguar e residente em psiquiatria pelo HC-UFPR. Meu
              maior propósito é oferecer um{' '}
              <b>
                espaço de escuta empática, onde você se sinta acolhido(a) e
                compreendido(a).
              </b>{' '}
            </p>
            <p className="">
              Acredito que cada pessoa carrega uma história única. Por isso, meu
              atendimento une conhecimento técnico, evidências científicas e
              escuta humanizada, para construir um plano de cuidado
              individualizado que te ajude a resgatar a autonomia, o sentido de
              viver e o bem-estar emocional.
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-12 lg:h-[550px] flex flex-col-reverse gap-8 px-4">
            {/* Card A - Top Left */}
            <div className="relative bg-transparent rounded-[70px] shadow-lg border border-vitoria-text lg:flex items-center justify-center group hover:shadow-xl transition-shadow duration-300 p-12 lg:p-0 hidden">
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-vitoria-yellow rounded-full p-2 shadow-lg">
                <Brain className="w-12 h-12 text-white" strokeWidth={1} />
              </div>
              <div className="lg:text-center">
                <h3 className="text-lg lg:w-2/3 mx-auto text-vitoria-text">
                  Acompanhamento próximo, com plano terapeutico ajustado a sua
                  realidade
                </h3>
              </div>
            </div>

            {/* Card Central - Spans 2 rows in the middle */}
            <div className="row-span-2 bg-vitoria-yellow rounded-[70px] py-14 shadow-xl p-8 flex flex-col items-center justify-between text-white">
              <div className="text-center">
                <p className="text-2xl text-vitoria-brown text-center font-medium mb-4">
                  Pronto(a) para dar o primeiro passo?
                </p>
              </div>

              <div className="my-8 ">
                <button
                  type="button"
                  className="bg-vitoria-text text-lg text-vitoria-brown px-12 py-3 rounded-3xl border border-vitoria-brown hover:bg-gray-100 transition-colors duration-300 shadow-lg"
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
            <div className="relative bg-transparent rounded-[70px] shadow-lg border border-vitoria-text flex items-center justify-center group hover:shadow-xl transition-shadow duration-300 p-12 lg:p-0">
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-vitoria-text rounded-full p-2 shadow-lg">
                <Brain className="w-12 h-12 text-black" strokeWidth={1} />
              </div>
              <div className="lg:text-center">
                <h3 className="text-lg lg:w-2/3 mx-auto text-vitoria-text">
                  Acompanhamento próximo, com plano terapeutico ajustado a sua
                  realidade
                </h3>
              </div>
            </div>

            {/* Card B - Bottom Left */}
            <div className="relative bg-transparent rounded-[70px] shadow-lg border border-vitoria-text flex items-center justify-center group hover:shadow-xl transition-shadow duration-300 p-12 lg:p-0">
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-vitoria-text rounded-full p-2 shadow-lg">
                <Brain className="w-12 h-12 text-black" strokeWidth={1} />
              </div>
              <div className="lg:text-center">
                <h3 className="text-lg lg:w-2/3 mx-auto text-vitoria-text">
                  Acompanhamento próximo, com plano terapeutico ajustado a sua
                  realidade
                </h3>
              </div>
            </div>

            {/* Card D - Bottom Right */}
            <div className="relative bg-transparent rounded-[70px] shadow-lg border border-vitoria-text flex items-center justify-center group hover:shadow-xl transition-shadow duration-300 p-12 lg:p-0">
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-vitoria-yellow rounded-full p-2 shadow-lg">
                <Brain className="w-12 h-12 text-white" strokeWidth={1} />
              </div>
              <div className="lg:text-center">
                <h3 className="text-lg lg:w-2/3 mx-auto text-vitoria-text">
                  Acompanhamento próximo, com plano terapeutico ajustado a sua
                  realidade
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
