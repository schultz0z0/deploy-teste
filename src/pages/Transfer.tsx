import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Bus, Clock, MapPin, ArrowRight, Calendar, ArrowLeftRight, CheckCircle } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';

const routes = [
  {
    id: 'rota-a',
    title: 'Rota A – Porto Atlântico',
    gradient: 'from-blue-600 to-indigo-600',
    colorText: 'text-blue-600',
    colorBg: 'bg-blue-50/50',
    colorBorder: 'border-blue-100',
    ida: [
      { stop: '1ª Parada', name: 'Novotel Porto Atlântico', address: 'Av. Prof. Pereira Reis, 49 – Santo Cristo' },
      { stop: '2ª Parada', name: 'Ibis Porto Atlântico', address: 'Av. Prof. Pereira Reis, 49 – Santo Cristo' },
      { stop: '3ª Parada', name: 'Intercity Porto Maravilha', address: 'R. Cordeiro da Graça, 598 – Santo Cristo' },
      { stop: 'Destino', name: 'ExpoRio Cidade Nova', address: 'R. Beatriz Larragoiti Lucas, S/N – Cidade Nova', isDestination: true }
    ],
    volta: [
      { stop: '1ª Parada', name: 'ExpoRio Cidade Nova', address: 'R. Beatriz Larragoiti Lucas, S/N – Cidade Nova' },
      { stop: '2ª Parada', name: 'Intercity Porto Maravilha', address: 'R. Cordeiro da Graça, 598 – Santo Cristo' },
      { stop: '3ª Parada', name: 'Novotel Porto Atlântico', address: 'Av. Prof. Pereira Reis, 49 – Santo Cristo' },
      { stop: 'Destino', name: 'Ibis Porto Atlântico', address: 'Av. Prof. Pereira Reis, 49 – Santo Cristo', isDestination: true }
    ]
  },
  {
    id: 'rota-b',
    title: 'Rota B – Botafogo',
    gradient: 'from-orange-600 to-amber-600',
    colorText: 'text-orange-600',
    colorBg: 'bg-orange-50/50',
    colorBorder: 'border-orange-100',
    ida: [
      { stop: '1ª Parada', name: 'Yoo2 Rio de Janeiro', address: 'Praia de Botafogo, 242 – Botafogo' },
      { stop: '2ª Parada', name: 'Novotel Botafogo', address: 'Praia de Botafogo, 330 – Botafogo' },
      { stop: 'Destino', name: 'ExpoRio Cidade Nova', address: 'R. Beatriz Larragoiti Lucas, S/N – Cidade Nova', isDestination: true }
    ],
    volta: [
      { stop: '1ª Parada', name: 'ExpoRio Cidade Nova', address: 'R. Beatriz Larragoiti Lucas, S/N – Cidade Nova' },
      { stop: '2ª Parada', name: 'Novotel Botafogo', address: 'Praia de Botafogo, 330 – Botafogo' },
      { stop: 'Destino', name: 'Yoo2 Rio de Janeiro', address: 'Praia de Botafogo, 242 – Botafogo', isDestination: true }
    ]
  },
  {
    id: 'rota-c',
    title: 'Rota C – Centro',
    gradient: 'from-emerald-600 to-teal-600',
    colorText: 'text-emerald-600',
    colorBg: 'bg-emerald-50/50',
    colorBorder: 'border-emerald-100',
    ida: [
      { stop: '1ª Parada', name: 'Windsor Guanabara', address: 'Av. Pres. Vargas, 392 – Centro' },
      { stop: 'Destino', name: 'ExpoRio Cidade Nova', address: 'R. Beatriz Larragoiti Lucas, S/N – Cidade Nova', isDestination: true }
    ],
    volta: [
      { stop: '1ª Parada', name: 'ExpoRio Cidade Nova', address: 'R. Beatriz Larragoiti Lucas, S/N – Cidade Nova' },
      { stop: 'Destino', name: 'Windsor Guanabara', address: 'Av. Pres. Vargas, 392 – Centro', isDestination: true }
    ]
  }
];

const timeTables = [
  {
    day: '27 de Agosto',
    weekDay: 'Quinta-feira',
    periods: [
      {
        title: 'Manhã / Tarde / Noite',
        timeRange: '09h30 às 23h50',
        frequency: 'Saídas de hora em hora entre cada transfer.'
      }
    ]
  },
  {
    day: '28 e 29 de Agosto',
    weekDay: 'Sexta e Sábado',
    periods: [
      {
        title: 'Manhã',
        timeRange: '07h30 às 09h00',
        frequency: 'Saídas a cada 30 minutos.'
      },
      {
        title: 'Tarde / Noite',
        timeRange: '18h00 às 23h00',
        frequency: 'Saídas de hora em hora entre cada transfer.'
      }
    ]
  }
];

export function Transfer() {
  const [activeRouteTab, setActiveRouteTab] = useState('rota-a');
  const [direction, setDirection] = useState<'ida' | 'volta'>('ida');

  const selectedRoute = routes.find(r => r.id === activeRouteTab) || routes[0];

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Transfer Oficial" 
        description="Horários e rotas do transfer oficial do evento." 
      />
      
      <PageHeader 
        title="Transfer Oficial" 
        description="Confira abaixo as linhas, rotas e horários de saída para o 24º Congresso Brasileiro dos Corretores de Seguros."
      />

      {/* Horários Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900">Horários de Transporte</h2>
            <p className="text-slate-600 mt-2">Confira a programação de saídas durante os dias do Congresso</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {timeTables.map((table, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">{table.weekDay}</span>
                      <h3 className="text-xl font-bold text-slate-900">{table.day}</h3>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {table.periods.map((period, pIdx) => (
                      <div key={pIdx} className="bg-white rounded-xl p-4 border border-slate-100 shadow-xs">
                        <div className="flex items-center gap-2 mb-2 text-slate-900 font-bold text-sm">
                          <Clock className="w-4 h-4 text-brand-teal" />
                          <span>{period.title}</span>
                        </div>
                        <div className="text-2xl font-bold text-brand-blue mb-1">
                          {period.timeRange}
                        </div>
                        <div className="text-slate-500 text-xs flex items-center gap-1.5 mt-2">
                          <CheckCircle className="w-4 h-4 text-brand-green shrink-0" />
                          <span>{period.frequency}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rotas Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900">Rotas e Paradas</h2>
            <p className="text-slate-600 mt-2">Navegue pelas rotas disponíveis e conheça os locais exatos de embarque</p>
          </div>

          {/* Route Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {routes.map((route) => (
              <button
                key={route.id}
                onClick={() => {
                  setActiveRouteTab(route.id);
                  setDirection('ida'); // Reset direction when changing route
                }}
                className={cn(
                  "px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 border shadow-xs",
                  activeRouteTab === route.id
                    ? "bg-brand-blue border-brand-blue text-white shadow-md scale-105"
                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                )}
              >
                <Bus className="w-4 h-4" />
                {route.title.replace('Rota ', '')}
              </button>
            ))}
          </div>

          {/* Route Content Card */}
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-lg">
            {/* Card Header with Direction Toggle */}
            <div className="bg-slate-900 text-white p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-brand-yellow uppercase tracking-widest">Rota Selecionada</span>
                <h3 className="text-xl md:text-2xl font-bold font-display mt-1">{selectedRoute.title}</h3>
              </div>

              {/* Direction Toggle */}
              <div className="flex bg-white/10 p-1 rounded-full border border-white/10 self-start sm:self-auto">
                <button
                  onClick={() => setDirection('ida')}
                  className={cn(
                    "px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5",
                    direction === 'ida'
                      ? "bg-brand-yellow text-brand-blue shadow-md"
                      : "text-white hover:text-brand-yellow"
                  )}
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                  IDA – Hotéis → ExpoRio
                </button>
                <button
                  onClick={() => setDirection('volta')}
                  className={cn(
                    "px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5",
                    direction === 'volta'
                      ? "bg-brand-yellow text-brand-blue shadow-md"
                      : "text-white hover:text-brand-yellow"
                  )}
                >
                  <ArrowLeftRight className="w-3.5 h-3.5" />
                  VOLTA – ExpoRio → Hotéis
                </button>
              </div>
            </div>

            {/* Stepper Content */}
            <div className="p-6 md:p-10 bg-slate-50/50">
              <div className="relative pl-8 md:pl-10 space-y-8 py-2">
                {/* Vertical Connector Line */}
                <div className="absolute left-[15px] md:left-[21px] top-5 bottom-5 w-0.5 bg-dashed bg-slate-300 border-l-2 border-dashed border-slate-300" />

                {selectedRoute[direction].map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.08 }}
                    className="relative flex items-start gap-4 md:gap-6 group"
                  >
                    {/* Circle Icon Indicator */}
                    <div className={cn(
                      "absolute -left-[32px] md:-left-[39px] w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full border-4 border-white flex items-center justify-center shadow-sm z-10 transition-colors duration-300",
                      step.isDestination
                        ? "bg-brand-teal text-white"
                        : "bg-white text-brand-blue border-brand-blue"
                    )}>
                      {step.isDestination ? (
                        <MapPin className="w-3.5 h-3.5 md:w-5 h-5" />
                      ) : (
                        <span className="text-[10px] md:text-xs font-bold">{idx + 1}</span>
                      )}
                    </div>

                    {/* Stop Details */}
                    <div className="bg-white rounded-2xl p-4 md:p-6 border border-slate-100 shadow-xs flex-1 hover:border-slate-200 transition-colors">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className={cn(
                          "text-[10px] md:text-xs font-bold px-2.5 py-0.5 rounded-full",
                          step.isDestination
                            ? "bg-brand-teal/10 text-brand-teal"
                            : "bg-slate-100 text-slate-500"
                        )}>
                          {step.stop}
                        </span>
                        {step.isDestination && (
                          <span className="text-[10px] font-bold bg-brand-green/10 text-brand-green px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                            Destino Final
                          </span>
                        )}
                      </div>
                      <h4 className="font-bold text-slate-900 text-base md:text-lg">{step.name}</h4>
                      <p className="text-slate-500 text-xs md:text-sm mt-1 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{step.address}</span>
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Info Banner */}
          <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-2xl flex items-start gap-4 text-yellow-800 shadow-xs">
            <MapPin className="w-6 h-6 shrink-0 mt-1 text-yellow-600" />
            <div>
              <h4 className="font-bold mb-1 text-yellow-900">Instruções Importantes</h4>
              <ul className="list-disc pl-5 text-sm space-y-1.5 text-yellow-800/90 mt-2">
                <li>Procure sempre a <strong>sinalização oficial</strong> do 24º Congresso no lobby do seu hotel para identificar o ponto de embarque.</li>
                <li>Recomendamos comparecer ao ponto de embarque com <strong>10 minutos de antecedência</strong> aos horários previstos.</li>
                <li><strong>Retorno:</strong> Para a volta aos hotéis, os ônibus sairão diretamente do local do evento. Fique atento às orientações da equipe organizadora e à sinalização no portão de saída.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
