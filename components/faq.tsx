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
              <AccordionTrigger className="flex items-center gap-4 text-vitoria-brown text-xl py-4 px-6 hover:no-underline  [&[data-state=open]]:border-vitoria-brown">
                <div className="bg-vitoria-yellow p-3 rounded-full">
                  <Borboleta className="lg:h-10 lg:w-10 w-8 h-8 text-vitoria-text" />
                </div>
                <span className="flex-1 text-left">
                  Como funciona a consulta online?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 pt-0">
                <div className="flex flex-col gap-4 text-vitoria-brown text-lg ">
                  <ul className="list-disc ml-4">
                    <li>Realizada por vídeo através do Google Meet</li>
                    <li>Duração média: 45 a 60 minutos</li>
                    <li>
                      Sigilo absoluto, de acordo com as normas do Conselho
                      Federal de Medicina (CFM)
                    </li>
                    <li>
                      Caso necessário, envio de receita digital válida em
                      farmácias
                    </li>
                    <li>Pagamento antecipado por pix</li>
                  </ul>
                </div>
              </AccordionContent>
            </div>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-none mb-4">
            <div className="bg-vitoria-text border-[1px] border-vitoria-brown rounded-4xl overflow-hidden">
              <AccordionTrigger className="flex items-center gap-4 text-vitoria-brown text-xl py-4 px-6 hover:no-underline  [&[data-state=open]]:border-vitoria-brown">
                <div className="bg-vitoria-yellow p-3 rounded-full">
                  <Borboleta className="lg:h-10 lg:w-10 w-8 h-8 text-vitoria-text" />
                </div>
                <span className="flex-1 text-left">
                  Será que a consulta é para mim mesmo? Sim, se você:
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 pt-0">
                <div className="flex flex-col gap-4 text-vitoria-brown text-lg ">
                  <ul className="list-disc ml-4">
                    <li>
                      Está buscando ajuda profissional para entender o que está
                      sentindo
                    </li>
                    <li>
                      Já percebe que os sintomas estão atrapalhando sua rotina,
                      trabalho ou relacionamentos
                    </li>
                    <li>Prefere ou precisa de um atendimento à distância</li>
                    <li>
                      Busca um acompanhamento ético, responsável e humanizado
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </div>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-none mb-4">
            <div className="bg-vitoria-text border-[1px] border-vitoria-brown rounded-4xl overflow-hidden">
              <AccordionTrigger className="flex items-center gap-4 text-vitoria-brown text-xl py-4 px-6 hover:no-underline  [&[data-state=open]]:border-vitoria-brown">
                <div className="bg-vitoria-yellow p-3 rounded-full">
                  <Borboleta className="lg:h-10 lg:w-10 w-8 h-8 text-vitoria-text" />
                </div>
                <span className="flex-1 text-left">
                  Como funciona uma consulta de psiquiatria online?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 pt-0">
                <div className="flex flex-col gap-4 text-vitoria-brown text-lg ">
                  <p>
                    As consultas são realizadas por videoconferência através da
                    plataforma meet, com duração semelhante à de uma consulta
                    presencial (45-60min).
                  </p>
                </div>
              </AccordionContent>
            </div>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-none mb-4">
            <div className="bg-vitoria-text border-[1px] border-vitoria-brown rounded-4xl overflow-hidden">
              <AccordionTrigger className="flex items-center gap-4 text-vitoria-brown text-xl py-4 px-6 hover:no-underline  [&[data-state=open]]:border-vitoria-brown">
                <div className="bg-vitoria-yellow p-3 rounded-full">
                  <Borboleta className="lg:h-10 lg:w-10 w-8 h-8 text-vitoria-text" />
                </div>
                <span className="flex-1 text-left">
                  É seguro e confiável fazer psiquiatria online?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 pt-0">
                <div className="flex flex-col gap-4 text-vitoria-brown text-lg ">
                  <p>
                    Sim. O atendimento online é seguro, regulamentado e
                    autorizado pelo Conselho Federal de Medicina.
                  </p>
                </div>
              </AccordionContent>
            </div>
          </AccordionItem>
          <AccordionItem value="item-5" className="border-none mb-4">
            <div className="bg-vitoria-text border-[1px] border-vitoria-brown rounded-4xl overflow-hidden">
              <AccordionTrigger className="flex items-center gap-4 text-vitoria-brown text-xl py-4 px-6 hover:no-underline  [&[data-state=open]]:border-vitoria-brown">
                <div className="bg-vitoria-yellow p-3 rounded-full">
                  <Borboleta className="lg:h-10 lg:w-10 w-8 h-8 text-vitoria-text" />
                </div>
                <span className="flex-1 text-left">
                  Como funciona a emissão de receitas?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 pt-0">
                <div className="flex flex-col gap-4 text-vitoria-brown text-lg ">
                  <p>
                    Caso necessário, são emitidas receitas médicas digitais, com
                    validade legal e assinadas eletronicamente. Elas podem ser
                    utilizadas em farmácias, assim como as receitas em papel.
                  </p>
                </div>
              </AccordionContent>
            </div>
          </AccordionItem>
          <AccordionItem value="item-6" className="border-none mb-4">
            <div className="bg-vitoria-text border-[1px] border-vitoria-brown rounded-4xl overflow-hidden">
              <AccordionTrigger className="flex items-center gap-4 text-vitoria-brown text-xl py-4 px-6 hover:no-underline  [&[data-state=open]]:border-vitoria-brown">
                <div className="bg-vitoria-yellow p-3 rounded-full">
                  <Borboleta className="lg:h-10 lg:w-10 w-8 h-8 text-vitoria-text" />
                </div>
                <span className="flex-1 text-left">
                  Como recebo a receita médica?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 pt-0">
                <div className="flex flex-col gap-4 text-vitoria-brown text-lg ">
                  <p>
                    A receita é enviada por e-mail, WhatsApp ou via SMS. Em caso
                    de receita azul e amarela, o envio ocorre pelo correio até
                    um dia útil após a consulta.
                  </p>
                </div>
              </AccordionContent>
            </div>
          </AccordionItem>
          <AccordionItem value="item-7" className="border-none mb-4">
            <div className="bg-vitoria-text border-[1px] border-vitoria-brown rounded-4xl overflow-hidden">
              <AccordionTrigger className="flex items-center gap-4 text-vitoria-brown text-xl py-4 px-6 hover:no-underline  [&[data-state=open]]:border-vitoria-brown">
                <div className="bg-vitoria-yellow p-3 rounded-full">
                  <Borboleta className="lg:h-10 lg:w-10 w-8 h-8 text-vitoria-text" />
                </div>
                <span className="flex-1 text-left">
                  Atende crianças ou adolescentes?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 pt-0">
                <div className="flex flex-col gap-4 text-vitoria-brown text-lg ">
                  <p>
                    Minha atuação é voltada exclusivamente ao público adulto,
                    para garantir um atendimento mais focado e qualificado. Para
                    crianças e adolescentes, o ideal é buscar um profissional
                    especializado nessa faixa etária. Nesse caso, posso indicar
                    algum colega especialista.
                  </p>
                </div>
              </AccordionContent>
            </div>
          </AccordionItem>
          <AccordionItem value="item-8" className="border-none mb-4">
            <div className="bg-vitoria-text border-[1px] border-vitoria-brown rounded-4xl overflow-hidden">
              <AccordionTrigger className="flex items-center gap-4 text-vitoria-brown text-xl py-4 px-6 hover:no-underline  [&[data-state=open]]:border-vitoria-brown">
                <div className="bg-vitoria-yellow p-3 rounded-full">
                  <Borboleta className="lg:h-10 lg:w-10 w-8 h-8 text-vitoria-text" />
                </div>
                <span className="flex-1 text-left">Atende por convênio?</span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 pt-0">
                <div className="flex flex-col gap-4 text-vitoria-brown text-lg ">
                  <p>
                    Os atendimentos são realizados exclusivamente de forma
                    particular, com foco em oferecer um acompanhamento mais
                    individualizado e flexível, com melhor dedicação ao
                    paciente.
                  </p>
                </div>
              </AccordionContent>
            </div>
          </AccordionItem>
          <AccordionItem value="item-9" className="border-none mb-4">
            <div className="bg-vitoria-text border-[1px] border-vitoria-brown rounded-4xl overflow-hidden">
              <AccordionTrigger className="flex items-center gap-4 text-vitoria-brown text-xl py-4 px-6 hover:no-underline  [&[data-state=open]]:border-vitoria-brown">
                <div className="bg-vitoria-yellow p-3 rounded-full">
                  <Borboleta className="lg:h-10 lg:w-10 w-8 h-8 text-vitoria-text" />
                </div>
                <span className="flex-1 text-left">
                  Como funciona o pagamento?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 pt-0">
                <div className="flex flex-col gap-4 text-vitoria-brown text-lg ">
                  <p>
                    O agendamento é confirmado mediante pagamento via Pix. Isso
                    garante o horário reservado exclusivamente para você.
                  </p>
                </div>
              </AccordionContent>
            </div>
          </AccordionItem>
          <AccordionItem value="item-10" className="border-none mb-4">
            <div className="bg-vitoria-text border-[1px] border-vitoria-brown rounded-4xl overflow-hidden">
              <AccordionTrigger className="flex items-center gap-4 text-vitoria-brown text-xl py-4 px-6 hover:no-underline  [&[data-state=open]]:border-vitoria-brown">
                <div className="bg-vitoria-yellow p-3 rounded-full">
                  <Borboleta className="lg:h-10 lg:w-10 w-8 h-8 text-vitoria-text" />
                </div>
                <span className="flex-1 text-left">
                  Como agendar uma consulta?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 pt-0">
                <div className="flex flex-col gap-4 text-vitoria-brown text-lg ">
                  <p>
                    Agendar sua consulta é simples e rápido! Basta clicar no
                    botão de agendamento disponível a seguir e entrar em contato
                    diretamente comigo pelo WhatsApp. Você poderá escolher o
                    melhor dia e horário disponível.
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
