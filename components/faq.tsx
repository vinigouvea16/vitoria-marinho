import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@radix-ui/react-accordion'
import { Drone } from 'lucide-react'

export default function FAQ() {
  return (
    <div
      id="faq"
      className="h-screen bg-vitoria-beige flex flex-col items-center gap-12"
    >
      <h3 className="lg:text-5xl text-3xl text-vitoria-text lg:mt-40 mt-20 text-center lg:text-left">
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
