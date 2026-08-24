import { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ArrowRight, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';

const lotes = [
  {
    name: '1º Lote',
    period: 'De 15/03/26 Até 30/04/2026',
    active: false,
    esgotado: true,
    categories: [
      {
        title: 'Associados Pessoa Física ou Jurídica',
        subtitle: '(PF: até 2 pessoas, incluindo o próprio corretor | PJ: até 4 inscrições por PJ)',
        prices: [
          { label: 'Congressista / Acompanhante (Adulto a partir de 18 anos)', value: 'R$ 1.500,00' },
          { label: 'Acompanhante menor (de 12 a 17 anos)', value: 'R$ 750,00' }
        ]
      },
      {
        title: 'Não Associados - Corretor com SUSEP',
        subtitle: 'Profissionais não associados aos Sincors',
        prices: [
          { label: 'Congressista / Acompanhante (Adulto a partir de 18 anos)', value: 'R$ 2.250,00' },
          { label: 'Acompanhante menor (de 12 a 17 anos)', value: 'R$ 1.125,00' }
        ]
      },
      {
        title: 'Outros',
        subtitle: '(Plataforma, seguradoras patrocinadoras ou expositoras, etc)',
        prices: [
          { label: 'Congressista / Acompanhante (Adulto a partir de 18 anos)', value: 'R$ 3.000,00' },
          { label: 'Acompanhante menor (de 12 a 17 anos)', value: 'R$ 1.500,00' }
        ]
      }
    ]
  },
  {
    name: '2º Lote',
    period: 'De 01/05/26 Até 30/06/2026',
    active: false,
    esgotado: true,
    categories: [
      {
        title: 'Associados Pessoa Física ou Jurídica',
        subtitle: '(PF: até 2 pessoas, incluindo o próprio corretor | PJ: até 4 inscrições por PJ)',
        prices: [
          { label: 'Congressista / Acompanhante (Adulto a partir de 18 anos)', value: 'R$ 1.650,00' },
          { label: 'Acompanhante menor (de 12 a 17 anos)', value: 'R$ 825,00' }
        ]
      },
      {
        title: 'Não Associados - Corretor com SUSEP',
        subtitle: 'Profissionais não associados aos Sincors',
        prices: [
          { label: 'Congressista / Acompanhante (Adulto a partir de 18 anos)', value: 'R$ 2.475,00' },
          { label: 'Acompanhante menor (de 12 a 17 anos)', value: 'R$ 1.238,00' }
        ]
      },
      {
        title: 'Outros',
        subtitle: '(Plataforma, seguradoras patrocinadoras ou expositoras, etc)',
        prices: [
          { label: 'Congressista / Acompanhante (Adulto a partir de 18 anos)', value: 'R$ 3.300,00' },
          { label: 'Acompanhante menor (de 12 a 17 anos)', value: 'R$ 1.650,00' }
        ]
      }
    ]
  },
  {
    name: '3º Lote',
    period: 'De 01/07/26 Até 31/07/2026',
    active: false,
    esgotado: true,
    categories: [
      {
        title: 'Associados Pessoa Física ou Jurídica',
        subtitle: '(PF: até 2 pessoas, incluindo o próprio corretor | PJ: até 4 inscrições por PJ)',
        prices: [
          { label: 'Congressista / Acompanhante (Adulto a partir de 18 anos)', value: 'R$ 1.815,00' },
          { label: 'Acompanhante menor (de 12 a 17 anos)', value: 'R$ 908,00' }
        ]
      },
      {
        title: 'Não Associados - Corretor com SUSEP',
        subtitle: 'Profissionais não associados aos Sincors',
        prices: [
          { label: 'Congressista / Acompanhante (Adulto a partir de 18 anos)', value: 'R$ 2.723,00' },
          { label: 'Acompanhante menor (de 12 a 17 anos)', value: 'R$ 1.361,00' }
        ]
      },
      {
        title: 'Outros',
        subtitle: '(Plataforma, seguradoras patrocinadoras ou expositoras, etc)',
        prices: [
          { label: 'Congressista / Acompanhante (Adulto a partir de 18 anos)', value: 'R$ 3.630,00' },
          { label: 'Acompanhante menor (de 12 a 17 anos)', value: 'R$ 1.815,00' }
        ]
      }
    ]
  }
];

const faqs = [
  {
    q: "Quais as formas de pagamento?",
    a: "Aceitamos cartão de crédito em até 10x, PIX e boleto bancário à vista."
  },
  {
    q: "Posso transferir meu ingresso?",
    a: "Sim, a titularidade pode ser alterada até 31 de julho de 2026, conforme instruções descritas no Regulamento de Inscrições disponível neste site."
  },
  {
    q: "Haverá certificado?",
    a: "Sim, todos os participantes receberão certificado de participação."
  },
  {
    q: "O evento oferece alimentação?",
    a: "Sim, Serão oferecidos 3(três) jantares e 2(dois) almoços."
  }
];

export function Tickets() {
  const [activeTab, setActiveTab] = useState(() => {
    const activeIndex = lotes.findIndex(l => l.active);
    return activeIndex >= 0 ? activeIndex : 0;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Inscrições" 
        description="Garanta sua vaga no 24º Congresso Brasileiro dos Corretores de Seguros." 
      />
      
      <PageHeader 
        title="Inscreva-se" 
        description="Participe do maior evento do mercado de seguros e esteja na linha de frente da nova era da distribuição de seguros no Brasil."
      />

      {/* Pricing */}
      <section id="lotes" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Valores de Inscrição</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg mb-6">
              Confira os valores por lote e categoria, e garanta sua participação no maior evento do mercado de seguros.
            </p>
            <p className="text-slate-900 font-bold max-w-2xl mx-auto text-lg">
              Corretores de Seguros associados aos Sincor´s, procurem seus Sindicatos para informações sobre condições especiais.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {lotes.map((lote, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={cn(
                  "px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center gap-2",
                  activeTab === idx 
                    ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20 scale-105" 
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                )}
              >
                {lote.name}
                {lote.active && activeTab !== idx && (
                  <span className="flex h-2 w-2 rounded-full bg-brand-green"></span>
                )}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="max-w-6xl mx-auto">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-6 py-2 rounded-full font-medium mb-4">
                  <Calendar className="w-5 h-5" />
                  {lotes[activeTab].period}
                </div>
                {lotes[activeTab].active && (
                  <div className="mt-2 text-brand-green font-bold uppercase tracking-wider text-sm">
                    Lote Atual
                  </div>
                )}
                {lotes[activeTab].esgotado && (
                  <div className="mt-2 text-red-500 font-bold uppercase tracking-wider text-sm">
                    Lote Esgotado
                  </div>
                )}
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {lotes[activeTab].categories.map((cat, idx) => (
                  <div key={idx} className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 flex flex-col hover:-translate-y-1 transition-transform duration-300">
                    <div className="mb-8 flex-grow">
                      <h4 className="font-bold text-xl text-slate-900 mb-3 leading-tight">{cat.title}</h4>
                      {cat.subtitle && <p className="text-sm text-slate-500 leading-relaxed">{cat.subtitle}</p>}
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      {cat.prices.map((price, pIdx) => (
                        <div key={pIdx} className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                          <p className="text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">{price.label}</p>
                          <p className="text-3xl font-display font-bold text-brand-teal">{price.value}</p>
                        </div>
                      ))}
                    </div>
                    
                    <a 
                      href="https://proevento.shop/24-congresso-fenacor/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2",
                        lotes[activeTab].active
                          ? "bg-brand-blue text-white shadow-lg hover:bg-brand-teal hover:shadow-xl"
                          : "bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none"
                      )}
                      aria-disabled={!lotes[activeTab].active}
                    >
                      {lotes[activeTab].active ? 'Inscreva-se Agora' : (lotes[activeTab].esgotado ? 'Esgotado' : 'Em Breve')}
                      {lotes[activeTab].active && <ArrowRight className="w-5 h-5" />}
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl font-display font-bold text-center mb-12 text-slate-900">Perguntas Frequentes</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-blue" />
                  {faq.q}
                </h3>
                <p className="text-slate-600 leading-relaxed ml-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
