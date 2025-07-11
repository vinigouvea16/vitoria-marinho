import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function CarouselSocialProof() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full max-w-sm md:max-w-4xl mx-auto"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            className="pl-4 md:pl-4 basis-full md:basis-1/2"
          >
            <div className="p-1">
              <Card className="bg-vitoria-text h-auto md:h-fit rounded-[40px] max-w-[340px] lg:max-w-none mx-auto">
                <CardContent className="flex flex-col items-center justify-between p-6 md:py-10 md:px-10 min-h-[400px] md:min-h-[450px]">
                  <div className="text-vitoria-brown text-lg font-light">
                    <p className="text-center md:text-left">
                      Comecei meu tratamento com a doutora Vitória em um momento
                      muito difícil da minha vida, e desde então tenho sentido
                      uma verdadeira evolução. Ela é uma profissional
                      excepcional, com quem construí um vínculo de confiança e
                      acolhimento
                    </p>
                  </div>
                  <div className="flex w-full">
                    <div className="flex flex-col w-full space-y-2 items-end">
                      <div className="w-4/5 h-[1px] bg-vitoria-brown" />
                      <p className="text-3xl italic text-right font-light text-vitoria-brown">
                        Caio Rios
                      </p>
                    </div>
                    <div className="bg-vitoria-brown rounded-full w-32 h-32 absolute bottom-4" />
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
