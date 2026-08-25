import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Building2, CreditCard, Mail, MapPin } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';

const hotels = [
  {
    id: 1,
    name: 'Hotel Intercity Porto Maravilha',
    category: 'Standard',
    prices: [
      { label: 'Apt Single', value: 'R$ 1.440,00' },
      { label: 'Apt Duplo', value: 'R$ 1.690,00' },
    ],
  },
  {
    id: 2,
    name: 'Hotel Novotel Porto Atlântico',
    category: 'Superior',
    prices: [
      { label: 'Apt Single', value: 'R$ 2.200,00' },
      { label: 'Apt Duplo', value: 'R$ 2.424,00' },
    ],
  },
  {
    id: 3,
    name: 'Hotel Windsor Guanabara',
    category: 'Standard',
    prices: [
      { label: 'Apt Single', value: 'R$ 1.675,00' },
      { label: 'Apt Duplo', value: 'R$ 1.925,00' },
    ],
  },
  {
    id: 4,
    name: 'Hotel Windsor Guanabara',
    category: 'Superior Executivo',
    prices: [
      { label: 'Apt Single', value: 'R$ 1.890,00' },
      { label: 'Apt Duplo', value: 'R$ 2.175,00' },
      { label: 'Apt Triplo', value: 'R$ 2.720,00' },
    ],
  },
  {
    id: 5,
    name: 'Hotel Ibis Porto Atlântico',
    category: 'Standard',
    prices: [
      { label: 'Apt Single', value: 'R$ 1.190,00' },
      { label: 'Apt Duplo', value: 'R$ 1.410,00' },
    ],
  },
];

export function Accommodation() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Hospedagem" 
        description="Pacotes de hospedagem oficiais do 24º Congresso Brasileiro dos Corretores de Seguros." 
      />
      
      <PageHeader 
        title="Hospedagem" 
        description="Pacotes oficiais com café da manhã e taxas inclusas para o período de 27 a 30 de agosto de 2026."
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 space-y-12">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-slate-50 rounded-2xl border border-slate-200 p-8">
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
                Pacotes de Hospedagem
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Os valores abaixo são referentes aos pacotes de hospedagem para o 24º Congresso Brasileiro dos Corretores de Seguros, com café da manhã e taxas inclusas.
              </p>
              <div className="flex items-start gap-3 text-slate-700">
                <MapPin className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <p>
                  Período: <strong>27 a 30 de agosto de 2026</strong> (3 noites)
                </p>
              </div>
            </div>

            <div className="bg-brand-blue text-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-5 h-5 text-brand-yellow" />
                <h3 className="text-xl font-bold">Contato para reservas</h3>
              </div>
              <p className="text-white/90 leading-relaxed mb-4">
                Para informações, condições de reserva e atendimento sobre hospedagem, entre em contato diretamente com a equipe responsável.
              </p>
              <a
                href="mailto:eventos@abalonne.com.br"
                className="inline-flex items-center font-semibold text-brand-yellow hover:underline"
              >
                eventos@abalonne.com.br
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {hotels.map((hotel, index) => (
              <motion.div
                key={hotel.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="bg-gradient-to-r from-brand-blue to-brand-teal p-6 text-white">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{hotel.name}</h3>
                  <p className="text-white/90 text-sm uppercase tracking-wide">
                    Categoria: {hotel.category}
                  </p>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-red-100 text-red-700 font-bold text-xs rounded-full uppercase tracking-wider">
                      Esgotado
                    </span>
                    <p className="text-sm font-medium text-slate-400 line-through">
                      Valor a prazo
                    </p>
                  </div>

                  <div className="space-y-3 opacity-60 grayscale">
                    {hotel.prices.map((price) => (
                      <div key={price.label} className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
                        <span className="text-slate-700 font-medium">{price.label}</span>
                        <span className="text-brand-blue font-bold">{price.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-5 h-5 text-brand-blue" />
                <h3 className="text-2xl font-bold text-slate-900">Forma de pagamento</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Parcelamento em até 8 vezes sem juros ou com desconto à vista no Pix ou transferência bancária.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Política de cancelamento</h3>
              <ul className="space-y-3 text-slate-600 leading-relaxed">
                <li>Em até 7 dias da compra: sem multa de cancelamento.</li>
                <li>Até 10/05/26: multa de 10%.</li>
                <li>Até 10/06/26: multa de 60%.</li>
                <li>Até 10/07/26: multa de 80%.</li>
                <li>Após 11/07/26: não reembolsável.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
