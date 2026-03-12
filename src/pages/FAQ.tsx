import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { PageHeader } from '@/components/PageHeader';

const faqs = [
  {
    q: "Como é o local do evento?",
    a: (
      <div className="space-y-4">
        <p>O EXPORio, localizado na região central do Rio de Janeiro, é um dos mais modernos e versáteis centros de convenções da cidade. Sua localização estratégica no Centro do Rio de Janeiro facilita o acesso para os congressistas que chegam de todo o Brasil pelos aeroportos da cidade e que estarão hospedados em diferentes regiões.</p>
        <p>Composto por Pavilhão Térreo, Segundo Pavimento e Mezanino, o espaço oferece ampla versatilidade para receber todas as atividades do 24º Congresso Brasileiro dos Corretores de Seguros.</p>
        <p>Nesse ambiente integrado acontecerão as plenárias, salas de negócios, EXPOSEG, shows, alimentação, espaços de relacionamento e as diversas experiências preparadas para os congressistas.</p>
        <p>Com fácil acesso por vias principais e diferentes modais de transporte, o local foi escolhido para oferecer praticidade, mobilidade e conveniência, contribuindo para que todos os participantes tenham uma experiência confortável e bem organizada durante o evento.</p>
      </div>
    )
  },
  {
    q: "Como é o conforto dos hotéis?",
    a: (
      <div className="space-y-4">
        <p>Para proporcionar conforto, praticidade e uma excelente experiência aos congressistas, a organização do 24º Congresso Brasileiro dos Corretores de Seguros selecionou uma rede de hotéis preparada para receber os participantes com qualidade e hospitalidade.</p>
        <p>As opções de hospedagem contemplam diferentes perfis e preferências, garantindo alternativas adequadas tanto para quem busca maior conveniência quanto para quem deseja diferentes faixas de investimento em hospedagem.</p>
        <p>Localizados em regiões estratégicas da cidade, os hotéis escolhidos oferecem facilidade de deslocamento até o local do evento, além de infraestrutura e serviços que asseguram uma estadia confortável durante os dias do Congresso.</p>
        <p>Assim, os participantes poderão aproveitar plenamente toda a programação do evento, com comodidade, segurança e a hospitalidade característica do Rio de Janeiro.</p>
      </div>
    )
  },
  {
    q: "Como será o Transfer?",
    a: (
      <div className="space-y-4">
        <p>A organização do 24º Congresso Brasileiro dos Corretores de Seguros disponibilizará serviço de transporte (transfer) entre hotéis oficiais e o local do evento, com o objetivo de oferecer ainda mais comodidade e praticidade aos congressistas durante os dias do Congresso.</p>
        <p>Os horários de funcionamento e a relação dos hotéis atendidos pelo serviço serão divulgados em breve, para que os participantes possam se programar com antecedência e aproveitar a experiência do evento com tranquilidade e conforto.</p>
      </div>
    )
  },
  {
    q: "Quais os temas das palestras?",
    a: (
      <div className="space-y-4">
        <p>A programação completa do 24º Congresso Brasileiro dos Corretores de Seguros, incluindo os temas das palestras, painéis e demais atividades, será divulgada em breve.</p>
        <p>A agenda está sendo cuidadosamente estruturada para refletir o tema desta edição, "A Nova Era da Distribuição de Seguros no Brasil", trazendo conteúdos atuais, debates estratégicos e análises sobre as transformações que estão redefinindo o mercado segurador.</p>
        <p>Serão abordados os principais desafios, oportunidades, tendências e inovações que impactam a atividade do Corretor de Seguros, sempre com o objetivo de oferecer conhecimento relevante e contribuir para a evolução profissional dos participantes.</p>
      </div>
    )
  },
  {
    q: "Como serão as premiações?",
    a: (
      <div className="space-y-4">
        <p>As premiações do 24º Congresso Brasileiro dos Corretores de Seguros acontecerão ao longo da programação do evento, tornando a experiência dos participantes ainda mais especial.</p>
        <p>Durante os dias do Congresso, serão realizados sorteios, em momentos previamente definidos da programação. Por isso, vale a pena acompanhar as atividades e permanecer atento aos anúncios realizados durante o evento.</p>
        <p>Os sorteios são exclusivos para Corretores de Seguros pessoa física (PF) com registro ativo na SUSEP, conforme as regras do regulamento que será divulgado pela organização.</p>
        <p>Participe das atividades do Congresso, aproveite cada momento de conhecimento e networking, e fique atento, pois a sorte pode sorrir para você!</p>
      </div>
    )
  },
  {
    q: "Qual o valor da inscrição?",
    a: (
      <div className="space-y-4">
        <p>Os valores de inscrição para o 24º Congresso Brasileiro dos Corretores de Seguros são diferenciados de acordo com o perfil do participante, contemplando as categorias Corretores de Seguros Associados, Corretores de Seguros Não Associados e Outros Participantes.</p>
        <p>Essa estrutura foi pensada para ampliar o acesso ao Congresso e permitir que diferentes públicos do mercado segurador possam participar deste grande encontro do setor.</p>
        <p>Para consultar os valores atualizados e as condições de inscrição, acesse o link abaixo:</p>
        <a href="/inscricoes" className="text-brand-blue hover:underline font-semibold inline-block mt-2">Clique aqui para ver os valores</a>
      </div>
    )
  },
  {
    q: "Como inscrever crianças e adolescentes?",
    a: (
      <div className="space-y-4">
        <p>A inscrição de crianças e adolescentes deverá ser realizada normalmente pelo sistema de inscrições do 24º Congresso Brasileiro dos Corretores de Seguros, assim como ocorre com os demais participantes.</p>
        <p>De acordo com o regulamento do evento, menores de até 11 anos, 11 meses e 29 dias (considerando a idade na data da inscrição) são isentos do pagamento da inscrição no Congresso.</p>
        <p>Já os menores entre 12 e 18 anos terão direito ao pagamento de meia inscrição, calculada de acordo com a categoria do responsável inscrito.</p>
        <p>Quanto à hospedagem, as condições aplicáveis às crianças e adolescentes seguirão as políticas e critérios adotados por cada hotel, sendo recomendável que os participantes consultem previamente as regras específicas da unidade escolhida.</p>
      </div>
    )
  },
  {
    q: "Qual o horário de funcionamento da EXPOSEG?",
    a: (
      <div className="space-y-4">
        <p>A EXPOSEG – Feira de Negócios do 24º Congresso Brasileiro dos Corretores de Seguros terá horários de funcionamento pensados para que os congressistas possam aproveitar ao máximo as oportunidades de relacionamento, conhecimento e geração de negócios.</p>
        <p>No dia 27 de agosto, primeiro dia do evento, a Feira será aberta às 11h e funcionará até às 19h, momento em que terá início a Solenidade de Abertura do Congresso.</p>
        <p>Nos demais dias de programação, a EXPOSEG estará aberta ao público das 13h às 20h.</p>
        <p>Durante esse período, os participantes poderão visitar os estandes, conhecer novidades do mercado, lançamentos de produtos, soluções tecnológicas e fortalecer o relacionamento com as principais empresas do setor segurador.</p>
      </div>
    )
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Perguntas Frequentes" 
        description="Tire suas dúvidas sobre o Congresso." 
      />
      
      <PageHeader 
        title="Perguntas Frequentes" 
        description="Encontre respostas para as principais dúvidas sobre o evento."
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-100 transition-colors"
                >
                  <span className="font-bold text-slate-900 flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-green" />
                    {faq.q}
                  </span>
                  {openIndex === i ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
                </button>
                {openIndex === i && (
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
