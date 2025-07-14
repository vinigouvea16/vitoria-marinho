import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from './ui/accordion'
import Borboleta from './svgs/custom-svgs/borboleta'

export default function FAQ() {
  return (
    <div
      id="faq"
      className=" bg-vitoria-beige flex flex-col items-center justify-center gap-12 py-20"
    >
      <h1 className="lg:text-4xl text-3xl text-vitoria-text text-center lg:text-left">
        {' '}
        Perguntas Frequentes
      </h1>

      <div className="w-full max-w-4xl mx-auto p-4">
        <Accordion type="single" collapsible defaultValue="">
          <AccordionItem value="item-1" className="border-none mb-4">
            <div className="bg-vitoria-text border-[1px] border-vitoria-brown rounded-4xl overflow-hidden">
              <AccordionTrigger className="flex items-center gap-4 text-vitoria-brown text-xl py-6 px-8 hover:no-underline  [&[data-state=open]]:border-vitoria-brown">
                <div className="bg-vitoria-yellow p-3 rounded-full">
                  <Borboleta className="lg:h-10 lg:w-10 w-8 h-8 text-vitoria-text" />
                </div>
                <span className="flex-1 text-left">
                  Como funciona a consulta online?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 pt-0">
                <div className="flex flex-col gap-4 text-vitoria-brown text-lg ">
                  <p>
                    Busca ajuda profissional para entender o que está sentindo,
                    já percebe que os sintomas estão impactando sua rotina,
                    trabalho ou relacionamentos, prefere ou precisa de um
                    atendimento à distância e deseja um acompanhamento ético,
                    responsável e verdadeiramente humanizado
                  </p>
                </div>
              </AccordionContent>
            </div>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-none mb-4">
            <div className="bg-vitoria-text border-[1px] border-vitoria-brown rounded-4xl overflow-hidden">
              <AccordionTrigger className="flex items-center gap-4 text-vitoria-brown text-xl py-6 px-8 hover:no-underline  [&[data-state=open]]:border-vitoria-brown">
                <div className="bg-vitoria-yellow p-3 rounded-full">
                  <Borboleta className="lg:h-10 lg:w-10 w-8 h-8 text-vitoria-text" />
                </div>
                <span className="flex-1 text-left">
                  Quanto tempo demora o atendimento?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 pt-0">
                <div className="flex flex-col gap-4 text-vitoria-brown text-lg ">
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
                  <Borboleta className="lg:h-10 lg:w-10 w-8 h-8 text-vitoria-text" />
                </div>
                <span className="flex-1 text-left">Atende por convênio?</span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 pt-0">
                <div className="flex flex-col gap-4 text-vitoria-brown text-lg ">
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
          <AccordionItem value="item-4" className="border-none mb-4">
            <div className="bg-vitoria-text border-[1px] border-vitoria-brown rounded-4xl overflow-hidden">
              <AccordionTrigger className="flex items-center gap-4 text-vitoria-brown text-xl py-6 px-8 hover:no-underline  [&[data-state=open]]:border-vitoria-brown">
                <div className="bg-vitoria-yellow p-3 rounded-full">
                  <Borboleta className="lg:h-10 lg:w-10 w-8 h-8 text-vitoria-text" />
                </div>
                <span className="flex-1 text-left">
                  Preciso de receita? A Dra. Envia?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 pt-0">
                <div className="flex flex-col gap-4 text-vitoria-brown text-lg ">
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
          <AccordionItem value="item-5" className="border-none mb-4">
            <div className="bg-vitoria-text border-[1px] border-vitoria-brown rounded-4xl overflow-hidden">
              <AccordionTrigger className="flex items-center gap-4 text-vitoria-brown text-xl py-6 px-8 hover:no-underline  [&[data-state=open]]:border-vitoria-brown">
                <div className="bg-vitoria-yellow p-3 rounded-full">
                  <Borboleta className="lg:h-10 lg:w-10 w-8 h-8 text-vitoria-text" />
                </div>
                <span className="flex-1 text-left">
                  Como é feito o pagamento?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 pt-0">
                <div className="flex flex-col gap-4 text-vitoria-brown text-lg ">
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
