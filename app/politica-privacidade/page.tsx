import { Shield, Lock, Eye, Mail, FileText, Users, Cookie } from 'lucide-react'

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-vitoria-text text-vitoria-brown">
      {/* Header */}
      <header className="bg-transparent shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-vitoria-yellow" />
            <h1 className="text-2xl md:text-3xl font-bold ">
              Política de Privacidade
            </h1>
          </div>
          <p className="text-stone-600 mt-2 text-lg">Dra. Vitória Marinho</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-transparent rounded-lg shadow-sm border p-6 md:p-8">
          {/* Introduction */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Lock className="h-5 w-5 text-vitoria-yellow" />
              <h2 className="text-xl font-semibold ">Introdução</h2>
            </div>
            <p className="text-stone-700 leading-relaxed">
              Esta Política de Privacidade descreve como as informações pessoais
              são coletadas, usadas e protegidas ao acessar e interagir com esta
              página da Dr. Vitória Marinho.
            </p>
          </div>

          {/* Section 1 - Coleta de Informações */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-5 w-5 text-vitoria-yellow" />
              <h2 className="text-xl font-semibold ">
                1. Coleta de Informações
              </h2>
            </div>
            <p className="text-stone-700 mb-4">
              Ao preencher formulários nesta página, podemos coletar informações
              pessoais como:
            </p>
            <ul className="list-disc list-inside space-y-2 text-stone-700 mb-4 ml-4">
              <li>Nome</li>
              <li>E-mail</li>
              <li>Telefone</li>
              <li>Empresa (caso aplicável)</li>
              <li>Outras informações fornecidas voluntariamente</li>
            </ul>
            <p className="text-stone-700">
              O objetivo dessa coleta é possibilitar o contato direto para envio
              de propostas, informações sobre serviços ou agendamento de
              atendimentos.
            </p>
          </section>

          {/* Section 2 - Uso das Informações */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-5 w-5 text-vitoria-yellow" />
              <h2 className="text-xl font-semibold ">2. Uso das Informações</h2>
            </div>
            <p className="text-stone-700 mb-4">
              As informações fornecidas serão utilizadas exclusivamente para:
            </p>
            <ul className="list-disc list-inside space-y-2 text-stone-700 mb-4 ml-4">
              <li>Entrar em contato para envio de informações solicitadas</li>
              <li>
                Enviar comunicações sobre os serviços da Dr. Vitória Marinho
              </li>
              <li>
                Análises internas para melhoria do atendimento e da experiência
                do usuário
              </li>
            </ul>
            <div className="bg-stone-50 border-l-4 border-stone-400 p-4 rounded shadow-lg">
              <p className="text-stone-800 font-medium">
                Não compartilhamos, vendemos ou divulgamos suas informações para
                terceiros.
              </p>
            </div>
          </section>

          {/* Section 3 - Cookies e Monitoramento */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Cookie className="h-5 w-5 text-vitoria-yellow" />
              <h2 className="text-xl font-semibold ">
                3. Cookies e Monitoramento
              </h2>
            </div>
            <p className="text-stone-700 mb-4">
              Esta página pode utilizar cookies e ferramentas de monitoramento
              (como Pixel do Facebook e Google Analytics) para:
            </p>
            <ul className="list-disc list-inside space-y-2 text-stone-700 mb-4 ml-4">
              <li>Análise de desempenho da página</li>
              <li>Mensuração de campanhas de tráfego pago</li>
              <li>Melhor entendimento do comportamento do visitante</li>
            </ul>
            <p className="text-stone-700">
              O uso dessas tecnologias não coleta dados pessoais identificáveis
              diretamente.
            </p>
          </section>

          {/* Section 4 - Segurança das Informações */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-stone-600" />
              <h2 className="text-xl font-semibold ">
                4. Segurança das Informações
              </h2>
            </div>
            <p className="text-stone-700">
              Adotamos medidas técnicas e organizacionais para manter suas
              informações pessoais seguras e protegidas contra acessos não
              autorizados.
            </p>
          </section>

          {/* Section 5 - Consentimento */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Eye className="h-5 w-5 text-stone-600" />
              <h2 className="text-xl font-semibold ">5. Consentimento</h2>
            </div>
            <p className="text-stone-700">
              Ao preencher formulários ou continuar navegando nesta página, você
              concorda com a coleta e uso de suas informações conforme descrito
              nesta política.
            </p>
          </section>

          {/* Section 6 - Contato */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="h-5 w-5 text-stone-600" />
              <h2 className="text-xl font-semibold ">6. Contato</h2>
            </div>
            <p className="text-stone-700 mb-4">
              Para qualquer dúvida sobre esta Política de Privacidade, entre em
              contato pelo e-mail:
            </p>
            <div className="bg-stone-50 border border-vitoria-yellow shadow-lg rounded-lg p-4">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-600" />
                <a
                  href="mailto:projetos@estudiovier.com.br"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  projetos@estudiovier.com.br
                </a>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t pt-6 mt-8">
            <p className="text-sm text-stone-500 text-center">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </footer>
        </div>
      </main>
    </div>
  )
}
