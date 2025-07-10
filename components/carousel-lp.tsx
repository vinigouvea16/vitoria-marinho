import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function CarouselLP() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="max-w-4xl "
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <CarouselItem key={index} className="md:basis-1/2 ">
            <div className="p-1">
              <Card className="bg-vitoria-text h-fit rounded-[40px]">
                <CardContent className="flex flex-col aspect-square items-center justify-between py-12 px-8 ">
                  <div className="text-vitoria-brown text-lg font-light">
                    <p>
                      Comecei meu tratamento com a doutora Vitória em um momento
                      muito difícil da minha vida, e desde entao tenho sentido
                      uma verdadeira evolucao. Ela é uma profissional
                      excepcional, com quem construí um vínculo de confiança e
                      acolhimento
                    </p>
                  </div>
                  <div className="flex w-full">
                    <div className="flex flex-col w-full space-y-2 items-end">
                      <div className="w-4/5 h-[1px] bg-vitoria-brown" />
                      <p className="text-3xl italic text-right text-vitoria-brown">
                        Caio Rios
                      </p>
                    </div>
                    <div className="bg-vitoria-brown rounded-full w-32  h-32 absolute bottom-4" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="h-12 w-12 border-none bg-vitoria-brown text-vitoria-text hover:bg-vitoria-brown/90" />
      <CarouselNext className="h-12 w-12 border-none bg-vitoria-brown text-vitoria-text hover:bg-vitoria-brown/90" />
    </Carousel>
  )
}
