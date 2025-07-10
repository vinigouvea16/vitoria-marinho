import { CarouselLP } from '@/components/carousel-lp'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@radix-ui/react-accordion'
import { Separator } from '@radix-ui/react-separator'
import {
  Brain,
  Camera,
  Drone,
  Heart,
  LaptopMinimalCheck,
  Shield,
  Star,
  Zap,
} from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="font-meriweather">
      <Header />
      <Hero />
      <SubHero />
      <About />
      <Benefits />
      <SocialProof />
      <FAQ />
      <Contact />
    </div>
  )
}

function Header() {
  return (
    <div className="rounded-4xl z-20 bg-vitoria-brown flex items-center w-fit p-2 fixed top-14 left-16">
      <a href="#hero">
        <Image
          src="/logo1.png"
          width={255}
          height={77}
          alt={'logo da psiquiatra vitoria marinho'}
          className="w-[255px] h-[77px] object-contain"
        />
      </a>
      <div className="text-vitoria-text flex gap-4 p-4">
        <a className="hover:font-bold " href="#about">
          sobre
        </a>{' '}
        <div className="w-[1px] bg-vitoria-text" />
        <a className="hover:font-bold " href="#feedbacks">
          feedbacks
        </a>{' '}
        <div className="w-[1px] bg-vitoria-text" />
        <a className="hover:font-bold " href="#faq">
          faq
        </a>{' '}
        <div className="w-[1px] bg-vitoria-text" />
        <a className="hover:font-bold " href="#contato">
          contato
        </a>{' '}
      </div>
    </div>
  )
}

function Hero() {
  return (
    <div
      id="hero"
      className="h-screen relative overflow-hidden grid grid-cols-2 bg-vitoria-brown text-vitoria-text"
    >
      <div className="m-auto flex flex-col items-center gap-20 relative z-10">
        <div className="flex justify-center align-middle ">
          <p className="text-4xl w-2/3">
            Reconquiste seu{' '}
            <span className="italic font-bold">equilibro emocional</span> com
            cuidado, e acolhimento
          </p>
        </div>

        <div className="rounded-3xl p-8 bg-vitoria-yellow w-2/3 text-2xl">
          <p className="font-light text-white w-[90%]">
            Atendimento individualizado com a Dra.Vitória Marinho, psiquitara
            que une{' '}
            <span className="text-vitoria-brown font-semibold">
              ciencia, empatia respeito
            </span>{' '}
            a <b>sua historia</b>.
          </p>
        </div>
      </div>

      {/* Imagem de fundo cortada - opção 1: centralizada */}
      {/* <div className="absolute inset-0 flex justify-center items-center">
        <Image
          src="/vitoria-fundo.png"
          width={800}
          height={1200}
          unoptimized
          alt="Imagem da Dra. Vitória"
          className="object-cover z-10 h-full w-auto"
        />
      </div> */}

      {/* OU opção 2: posicionada mais embaixo */}

      <div className="absolute inset-0 -bottom-110 flex justify-center">
        <Image
          src="/vitoria-fundo.png"
          width={800}
          height={1200}
          unoptimized
          alt="Imagem da Dra. Vitória"
          className="object-contain z-10 h-full w-auto"
        />
      </div>

      <div className="">
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
  )
}

function SubHero() {
  return (
    <div className="h-screen bg-vitoria-beige flex flex-col items-center justify-evenly">
      <h2 className="text-6xl text-vitoria-text">
        {' '}
        Minha consulta é para você, que:
      </h2>
      <div className="flex items-center align-middle gap-3 h-[50vh] mx-28">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <div className="flex py-2 px-4 items-center justify-center text-xl border-[1px] border-vitoria-text gap-2 rounded-xl">
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

function Card() {
  return (
    <div className="rounded-[70px] bg-vitoria-text flex flex-col items-center justify-center space-y-4 border-[1px] border-[#707070] h-full">
      <Brain size={100} strokeWidth={1} className="text-vitoria-yellow" />
      <p className="text-vitoria-brown text-2xl text-center w-4/5">
        Sente que a ansiedade está dominando seus dias
      </p>
    </div>
  )
}

function About() {
  return (
    <div
      id="about"
      className="h-screen relative overflow-hidden bg-vitoria-text flex overflow-x-hidden text-vitoria-brown"
    >
      <div className="my-auto ml-40 flex flex-col space-y-14 w-[40%]">
        <h1 className="text-5xl">
          <b className="italic">Quem</b> vai te acompanhar nessa jornada?
        </h1>
        <p className="text-lg w-[90%]">
          Sou a Dra. Vitória Marinho, médica psiquiatra, formada pela
          Universidade Potiguar e residente em psiquiatria pelo HC-UFPR. Meu
          maior propósito é oferecer um{' '}
          <b>
            espaço de escuta empática, onde você se sinta acolhido(a) e
            compreendido(a).
          </b>{' '}
        </p>
        <p className="text-lg w-[90%]">
          Acredito que cada pessoa carrega uma história única. Por isso, meu
          atendimento une conhecimento técnico, evidências científicas e escuta
          humanizada, para construir um plano de cuidado individualizado que te
          ajude a resgatar a autonomia, o sentido de viver e o bem-estar
          emocional.
        </p>
      </div>

      {/* Imagem absolute no canto inferior direito */}
      <div className="absolute bottom-0 -right-20 h-full flex items-end justify-end">
        <Image
          src="/vitoria-fundo-2.png"
          width={1717}
          height={1104}
          alt={''}
          className="z-0 object-cover h-full w-auto"
        />
      </div>
    </div>
  )
}

function Benefits() {
  return (
    <div className="h-screen bg-vitoria-brown items-center flex flex-col">
      <h1 className="text-vitoria-text text-4xl mt-20">
        Benefícios do atendimento
      </h1>
      <section className="w-full py-16 px-4 ">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-3 grid-rows-2 gap-12 h-[550px]">
            {/* Card A - Top Left */}
            <div className="relative bg-transparent rounded-[70px] shadow-lg border border-vitoria-text flex items-center justify-center group hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-vitoria-yellow rounded-full p-2 shadow-lg">
                <Brain className="w-12 h-12 text-white" strokeWidth={1} />
              </div>
              <div className="text-center">
                <h3 className="text-lg w-2/3 mx-auto text-vitoria-text">
                  Acompanhamento próximo, com plano terapeutico ajustado a sua
                  realidade
                </h3>
              </div>
            </div>

            {/* Card Central - Spans 2 rows in the middle */}
            <div className="row-span-2 bg-vitoria-yellow rounded-[70px] py-14 shadow-xl p-8 flex flex-col items-center justify-between text-white">
              <div className="text-center">
                <p className="text-xl text-vitoria-brown text-center font-medium mb-4">
                  Pronto(a) para dar o primeiro passo?
                </p>
              </div>

              <div className="my-8 ">
                <button
                  type="button"
                  className="bg-vitoria-text text-vitoria-brown px-12 py-3 rounded-3xl border border-vitoria-brown hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                >
                  Quero agendar minha consulta
                </button>
              </div>

              <div className="text-center">
                <p className="text-xl text-vitoria-brown text-center font-medium">
                  Quero saber como funciona antes:
                </p>
              </div>
            </div>

            {/* Card C - Top Right */}
            <div className="relative bg-transparent rounded-[70px] shadow-lg border border-vitoria-text flex items-center justify-center group hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-vitoria-yellow rounded-full p-2 shadow-lg">
                <Brain className="w-12 h-12 text-white" strokeWidth={1} />
              </div>
              <div className="text-center">
                <h3 className="text-lg w-2/3 mx-auto text-vitoria-text">
                  Acompanhamento próximo, com plano terapeutico ajustado a sua
                  realidade
                </h3>
              </div>
            </div>

            {/* Card B - Bottom Left */}
            <div className="relative bg-transparent rounded-[70px] shadow-lg border border-vitoria-text flex items-center justify-center group hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-vitoria-yellow rounded-full p-2 shadow-lg">
                <Brain className="w-12 h-12 text-white" strokeWidth={1} />
              </div>
              <div className="text-center">
                <h3 className="text-lg w-2/3 mx-auto text-vitoria-text">
                  Acompanhamento próximo, com plano terapeutico ajustado a sua
                  realidade
                </h3>
              </div>
            </div>

            {/* Card D - Bottom Right */}
            <div className="relative bg-transparent rounded-[70px] shadow-lg border border-vitoria-text flex items-center justify-center group hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-vitoria-yellow rounded-full p-2 shadow-lg">
                <Brain className="w-12 h-12 text-white" strokeWidth={1} />
              </div>
              <div className="text-center">
                <h3 className="text-lg w-2/3 mx-auto text-vitoria-text">
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

function SocialProof() {
  return (
    <div
      id="feedbacks"
      className="h-screen flex flex-col items-center justify-center gap-16 bg-vitoria-yellow"
    >
      <h2 className="text-vitoria-text text-4xl ">
        O que dizem sobre o atendimento da Dr. Vitória
      </h2>

      <CarouselLP />
    </div>
  )
}

function FAQ() {
  return (
    <div
      id="faq"
      className="h-screen bg-vitoria-beige flex flex-col items-center gap-12"
    >
      <h3 className="text-5xl text-vitoria-text mt-40">
        {' '}
        Perguntas Frequentes
      </h3>

      <div className="w-full max-w-4xl mx-auto p-4">
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1" className="border-none mb-4">
            <div className="bg-vitoria-text border-[1px] border-vitoria-brown rounded-4xl overflow-hidden">
              <AccordionTrigger className="flex items-center gap-4 text-vitoria-brown text-xl py-6 px-8 hover:no-underline  [&[data-state=open]]:border-vitoria-brown">
                <div className="bg-vitoria-yellow p-3 rounded-full">
                  <Drone size={24} strokeWidth={1} />
                </div>
                <span className="flex-1 text-left">
                  Como funciona a consulta online?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 pt-0">
                <div className="flex flex-col gap-4 text-vitoria-brown">
                  <p>
                    Nossa consulta online combina tecnologia de ponta com
                    atendimento personalizado. Construída com materiais premium,
                    oferece desempenho e confiabilidade incomparáveis.
                  </p>
                  <p>
                    Os principais recursos incluem capacidades avançadas de
                    processamento e uma interface de usuário intuitiva projetada
                    tanto para iniciantes quanto para especialistas.
                  </p>
                </div>
              </AccordionContent>
            </div>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-none mb-4">
            <div className="bg-vitoria-text border-[1px] border-vitoria-brown rounded-4xl overflow-hidden">
              <AccordionTrigger className="flex items-center gap-4 text-vitoria-brown text-xl py-6 px-8 hover:no-underline  [&[data-state=open]]:border-vitoria-brown">
                <div className="bg-vitoria-yellow p-3 rounded-full">
                  <Drone size={24} strokeWidth={1} />
                </div>
                <span className="flex-1 text-left">
                  Quanto tempo demora o atendimento?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 pt-0">
                <div className="flex flex-col gap-4 text-vitoria-brown">
                  <p>
                    Oferecemos atendimento mundial através de parceiros de
                    confiança. O atendimento padrão leva de 3-5 minutos,
                    enquanto o atendimento expresso garante resposta em 1-2
                    minutos.
                  </p>
                  <p>
                    Todas as consultas são cuidadosamente analisadas e
                    totalmente seguras. Acompanhe seu atendimento em tempo real
                    através do nosso portal dedicado.
                  </p>
                </div>
              </AccordionContent>
            </div>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-none mb-4">
            <div className="bg-vitoria-text border-[1px] border-vitoria-brown rounded-4xl overflow-hidden">
              <AccordionTrigger className="flex items-center gap-4 text-vitoria-brown text-xl py-6 px-8 hover:no-underline  [&[data-state=open]]:border-vitoria-brown">
                <div className="bg-vitoria-yellow p-3 rounded-full">
                  <Drone size={24} strokeWidth={1} />
                </div>
                <span className="flex-1 text-left">
                  Posso cancelar a consulta?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 pt-0">
                <div className="flex flex-col gap-4 text-vitoria-brown">
                  <p>
                    Apoiamos nossos serviços com uma política abrangente de 30
                    dias. Se você não estiver completamente satisfeito, pode
                    cancelar a consulta sem custos adicionais.
                  </p>
                  <p>
                    Nosso processo de cancelamento sem complicações inclui
                    reembolso total processado em até 48 horas após a
                    solicitação de cancelamento.
                  </p>
                </div>
              </AccordionContent>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

function Contact() {
  return (
    <div
      id="contato"
      className="h-screen z-10 bg-vitoria-brown flex flex-col justify-between items-center"
    >
      <div className="flex flex-col h-[50vh] items-center justify-evenly my-auto w-2/3 text-center">
        <h3 className="text-vitoria-text text-6xl">
          O <b>maior alívio</b> vem quando paramo de tentar dar conta sozinhos.
        </h3>

        <div className="flex justify-evenly ">
          <button
            type="button"
            className="border-white mr-12 bg-vitoria-yellow text-vitoria-brown px-12 py-4 rounded-3xl"
          >
            {' '}
            Quero agendar minha consulta
          </button>
          <div className="w-[1px] bg-vitoria-text" />
          <Image
            src="/logo1.png"
            width={255}
            height={77}
            alt={'logo da psiquiatra vitoria marinho'}
            className="w-[255px] h-[77px] object-contain"
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

function Footer() {
  return (
    <div className="w-full flex flex-col  py-2 mb-8 px-10  border-vitoria-beige">
      <Separator className="my-4" />
      <div className="flex w-full justify-between">
        <div id="footers-right-side" className="flex items-center">
          {' '}
          <a href="#hero">
            <Image
              src="/logo1.png"
              width={255}
              height={77}
              alt={'logo da psiquiatra vitoria marinho'}
              className="w-[255px] h-[77px] object-contain"
            />
          </a>
          <div className="text-vitoria-text flex gap-4 p-4">
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

        <div className="text-vitoria-beige text-lg font-bold flex items-center gap-2">
          <a href="_blank" className="text-vitoria-text text-lg ">
            politica de privicidade
          </a>
          <div className="w-[1px] bg-vitoria-text" />
          <p className="">
            feito com carinho por <span className="italic">estúdio vier</span>
          </p>
        </div>

        <div className="flex gap-2 items-center text-vitoria-text">
          <Camera size={28} strokeWidth={2} />
          <Camera size={28} strokeWidth={2} />
        </div>
      </div>
    </div>
  )
}
