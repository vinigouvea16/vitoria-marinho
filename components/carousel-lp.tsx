import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { User } from 'lucide-react'

interface Testimonial {
  depoimento: string
  nomePaciente: string
}

const testimonials: Testimonial[] = [
  {
    depoimento:
      'A Dra Vitória Marinho sempre me atendeu com um carinho e empatia que poucas vezes tive em uma consulta, sua atenção e dedicação para com meu caso foi fundamental para minha evolução.',
    nomePaciente: 'João Castilho',
  },
  {
    depoimento:
      'Comecei meu tratamento com a doutora Vitória em um momento muito difícil da minha vida, e desde então tenho sentido uma verdadeira evolução. Ela é uma profissional excepcional, com quem construí um vínculo de confiança e acolhimento. Sou profundamente grato pelo cuidado e pela forma como ela tem me ajudado nesse processo.',
    nomePaciente: 'Caio Rios',
  },
  {
    depoimento:
      'Minhas consultas são online e de todos os profissionais que já fui, a abordagem dela foi a que mais gostei. Ela ouve com cuidado as demandas e tem conseguido me ajudar junto ao meu tratamento de terapia. Vitória também é uma profissional que se atualiza, percebo isso quando ela fala e explica sobre uma série de coisas durante as consultas e isso é essencial!',
    nomePaciente: 'Jamilly França',
  },
  {
    depoimento:
      'Me senti acolhido desde a primeira consulta. A Dra. Vitória é extremamente empática, atenciosa e cuidadosa na condução do meu tratamento. Escuta com interesse e sempre faz ótimas explicações sobre o tratamento.',
    nomePaciente: 'Carlos Henrique',
  },
  {
    depoimento:
      'Atendimento acolhedor e profissional aberta à escuta e olhar sensível!',
    nomePaciente: 'Simone Mumbach',
  },
  {
    depoimento:
      'Eu posso dizer que a Dra. Vitória é uma médica muito comprometida com a saúde mental dos pacientes. Teve paciência e empatia para me ajudar ao longo de todo o tratamento, sou muito grata por tudo!',
    nomePaciente: 'Bárbara Vieira',
  },
  // Adicione mais depoimentos aqui conforme necessário
]

export function CarouselSocialProof() {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full max-w-sm md:max-w-4xl mx-auto"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            className="pl-4 md:pl-4 basis-full md:basis-1/2"
          >
            <div className="p-1">
              <Card className="bg-vitoria-text h-auto md:h-fit rounded-[40px] max-w-[340px] lg:max-w-none mx-auto border-vitoria-brown">
                <CardContent className="flex flex-col items-center justify-between p-6 md:py-10 md:px-10 min-h-[400px] md:min-h-[450px]">
                  <div className="text-vitoria-brown font-light">
                    <p className="text-left w-11/12 mx-auto">
                      {testimonial.depoimento}
                    </p>
                  </div>
                  <div className="flex w-full">
                    <div className="flex flex-col w-full space-y-2 items-end">
                      <div className="w-4/5 h-[1px] bg-vitoria-brown" />
                      <p className="lg:text-2xl text-xl italic text-right font-light text-vitoria-brown">
                        {testimonial.nomePaciente}
                      </p>
                    </div>
                    <div className="bg-vitoria-brown rounded-full lg:w-32 lg:h-32 w-20 h-20 flex items-center justify-center absolute lg:bottom-4 bottom-10">
                      <User
                        strokeWidth={1}
                        // size={100}
                        className="text-vitoria-text size-12 lg:size-20"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="h-12 w-12 border-none bg-vitoria-brown text-vitoria-text hover:bg-vitoria-brown/90 left-0 md:-left-6" />
      <CarouselNext className="h-12 w-12 border-none bg-vitoria-brown text-vitoria-text hover:bg-vitoria-brown/90 right-0 md:-right-6" />
    </Carousel>
  )
}
