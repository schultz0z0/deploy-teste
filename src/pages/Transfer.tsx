import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Bus, Clock, MapPin, ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';

const days = [
  { id: 'dia1', label: '27 de Agosto' },
  { id: 'dia2', label: '28 de Agosto' },
  { id: 'dia3', label: '29 de Agosto' },
];

type ScheduleItem = {
  time: string;
  desc: string;
};

type ScheduleSection = {
  title?: string;
  items: ScheduleItem[];
};

type LineSchedule = {
  title: string;
  sections: ScheduleSection[];
};

const schedules: Record<string, LineSchedule[]> = {
  dia1: [
    {
      title: "Linha 1 - PORTO MARAVILHA",
      sections: [
        {
          items: [
            { time: "13h30", desc: "Saída Ibis & Novotel → Evento" },
            { time: "13h45", desc: "Saída Intercity → Evento" },
            { time: "15h00", desc: "Saída Ibis & Novotel → Evento" },
            { time: "15h15", desc: "Saída Intercity → Evento" },
            { time: "16h30", desc: "Saída Ibis & Novotel → Evento" },
            { time: "16h45", desc: "Saída Intercity → Evento" },
            { time: "17h30", desc: "Saída Ibis & Novotel → Evento" },
            { time: "17h45", desc: "Saída Intercity → Evento" },
            { time: "18h00", desc: "Saída Ibis & Novotel → Evento" },
            { time: "18h15", desc: "Saída Intercity → Evento" },
            { time: "15h00", desc: "Evento → Hotéis" },
            { time: "16h00", desc: "Evento → Hotéis" },
            { time: "17h15", desc: "Evento → Hotéis" },
            { time: "21h30", desc: "Evento → Hotéis" },
            { time: "22h00", desc: "Evento → Hotéis" },
            { time: "22h30", desc: "Evento → Hotéis" },
            { time: "23h00", desc: "Evento → Hotéis" },
            { time: "23h30", desc: "Evento → Hotéis" },
          ]
        }
      ]
    },
    {
      title: "Linha 2 - COPACABANA",
      sections: [
        {
          items: [
            { time: "13h30", desc: "Saída Hilton → Evento" },
            { time: "13h45", desc: "Saída Augusto's → Evento" },
            { time: "15h00", desc: "Saída Hilton → Evento" },
            { time: "15h15", desc: "Saída Augusto's → Evento" },
            { time: "16h30", desc: "Saída Hilton → Evento" },
            { time: "16h45", desc: "Saída Augusto's → Evento" },
            { time: "17h30", desc: "Saída Hilton → Evento" },
            { time: "17h45", desc: "Saída Augusto's → Evento" },
            { time: "18h00", desc: "Saída Hilton → Evento" },
            { time: "18h15", desc: "Saída Augusto's → Evento" },
            { time: "15h00", desc: "Evento → Hotéis" },
            { time: "16h00", desc: "Evento → Hotéis" },
            { time: "17h30", desc: "Evento → Hotéis" },
            { time: "21h30", desc: "Evento → Hotéis" },
            { time: "22h00", desc: "Evento → Hotéis" },
            { time: "22h30", desc: "Evento → Hotéis" },
            { time: "23h00", desc: "Evento → Hotéis" },
            { time: "23h30", desc: "Evento → Hotéis" },
          ]
        }
      ]
    },
    {
      title: "Linha 3 - BOTAFOGO",
      sections: [
        {
          items: [
            { time: "13h30", desc: "Saída Ibis → Evento" },
            { time: "13h45", desc: "Saída Yoo2 → Evento" },
            { time: "15h00", desc: "Saída Ibis → Evento" },
            { time: "15h15", desc: "Saída Yoo2 → Evento" },
            { time: "16h30", desc: "Saída Ibis → Evento" },
            { time: "16h45", desc: "Saída Yoo2 → Evento" },
            { time: "17h30", desc: "Saída Ibis → Evento" },
            { time: "17h45", desc: "Saída Yoo2 → Evento" },
            { time: "18h00", desc: "Saída Ibis → Evento" },
            { time: "18h15", desc: "Saída Yoo2 → Evento" },
            { time: "15h00", desc: "Evento → Hotéis" },
            { time: "16h00", desc: "Evento → Hotéis" },
            { time: "17h30", desc: "Evento → Hotéis" },
            { time: "21h30", desc: "Evento → Hotéis" },
            { time: "22h00", desc: "Evento → Hotéis" },
            { time: "22h30", desc: "Evento → Hotéis" },
            { time: "23h00", desc: "Evento → Hotéis" },
            { time: "23h30", desc: "Evento → Hotéis" },
          ]
        }
      ]
    },
    {
      title: "Linha 4 - CENTRO & HOTEL PRODIGY",
      sections: [
        {
          items: [
            { time: "13h30", desc: "Saída Prodigy → Evento" },
            { time: "13h45", desc: "Saída Guanabara → Evento" },
            { time: "15h00", desc: "Saída Prodigy → Evento" },
            { time: "15h15", desc: "Saída Guanabara → Evento" },
            { time: "16h30", desc: "Saída Prodigy → Evento" },
            { time: "16h45", desc: "Saída Guanabara → Evento" },
            { time: "17h30", desc: "Saída Prodigy → Evento" },
            { time: "17h45", desc: "Saída Guanabara → Evento" },
            { time: "18h00", desc: "Saída Prodigy → Evento" },
            { time: "18h15", desc: "Saída Guanabara → Evento" },
            { time: "14h30", desc: "Evento → Hotéis" },
            { time: "16h00", desc: "Evento → Hotéis" },
            { time: "17h15", desc: "Evento → Hotéis" },
            { time: "21h30", desc: "Evento → Hotéis" },
            { time: "22h00", desc: "Evento → Hotéis" },
            { time: "22h30", desc: "Evento → Hotéis" },
            { time: "23h00", desc: "Evento → Hotéis" },
            { time: "23h30", desc: "Evento → Hotéis" },
          ]
        }
      ]
    }
  ],
  dia2: [
    {
      title: "Linha 1 - PORTO MARAVILHA",
      sections: [
        {
          title: "Parte da Manhã",
          items: [
            { time: "07h00", desc: "Saída Ibis & Novotel → Evento" },
            { time: "07h15", desc: "Saída Intercity → Evento" },
            { time: "07h30", desc: "Saída Ibis & Novotel → Evento" },
            { time: "07h45", desc: "Saída Intercity → Evento" },
            { time: "08h00", desc: "Saída Ibis & Novotel → Evento" },
            { time: "08h15", desc: "Saída Intercity → Evento" },
            { time: "08h30", desc: "Saída Ibis & Novotel → Evento" },
            { time: "08h45", desc: "Saída Intercity → Evento" },
            { time: "09h00", desc: "Saída Ibis & Novotel → Evento" },
            { time: "09h15", desc: "Saída Intercity → Evento" },
          ]
        },
        {
          title: "Parte da Tarde",
          items: [
            { time: "16h30", desc: "Evento → Hotéis" },
            { time: "17h00", desc: "Evento → Hotéis" },
            { time: "17h30", desc: "Evento → Hotéis" },
            { time: "18h00", desc: "Saída Ibis & Novotel → Evento" },
            { time: "18h15", desc: "Saída Intercity → Evento" },
            { time: "19h00", desc: "Saída Ibis & Novotel → Evento" },
            { time: "19h15", desc: "Saída Intercity → Evento" },
            { time: "21h30", desc: "Evento → Hotéis" },
            { time: "22h00", desc: "Evento → Hotéis" },
            { time: "22h30", desc: "Evento → Hotéis" },
            { time: "23h00", desc: "Evento → Hotéis" },
            { time: "23h30", desc: "Evento → Hotéis" },
          ]
        }
      ]
    },
    {
      title: "Linha 2 - COPACABANA",
      sections: [
        {
          title: "Parte da Manhã",
          items: [
            { time: "07h00", desc: "Saída Hilton → Evento" },
            { time: "07h15", desc: "Saída Augusto's → Evento" },
            { time: "07h30", desc: "Saída Hilton → Evento" },
            { time: "07h45", desc: "Saída Augusto's → Evento" },
            { time: "08h00", desc: "Saída Hilton → Evento" },
            { time: "08h15", desc: "Saída Augusto's → Evento" },
            { time: "08h30", desc: "Saída Hilton → Evento" },
            { time: "08h45", desc: "Saída Augusto's → Evento" },
            { time: "09h00", desc: "Saída Hilton → Evento" },
            { time: "09h15", desc: "Saída Augusto's → Evento" },
          ]
        },
        {
          title: "Parte da Tarde",
          items: [
            { time: "16h30", desc: "Evento → Hotéis" },
            { time: "17h00", desc: "Evento → Hotéis" },
            { time: "17h30", desc: "Evento → Hotéis" },
            { time: "18h00", desc: "Saída Hilton → Evento" },
            { time: "18h15", desc: "Saída Augusto's → Evento" },
            { time: "19h00", desc: "Saída Hilton → Evento" },
            { time: "19h15", desc: "Saída Augusto's → Evento" },
            { time: "21h30", desc: "Evento → Hotéis" },
            { time: "22h00", desc: "Evento → Hotéis" },
            { time: "22h30", desc: "Evento → Hotéis" },
            { time: "23h00", desc: "Evento → Hotéis" },
            { time: "23h30", desc: "Evento → Hotéis" },
          ]
        }
      ]
    },
    {
      title: "Linha 3 - BOTAFOGO",
      sections: [
        {
          title: "Parte da Manhã",
          items: [
            { time: "07h00", desc: "Saída Ibis → Evento" },
            { time: "07h15", desc: "Saída Yoo2 → Evento" },
            { time: "07h30", desc: "Saída Ibis → Evento" },
            { time: "07h45", desc: "Saída Yoo2 → Evento" },
            { time: "08h00", desc: "Saída Ibis → Evento" },
            { time: "08h15", desc: "Saída Yoo2 → Evento" },
            { time: "08h30", desc: "Saída Ibis → Evento" },
            { time: "08h45", desc: "Saída Yoo2 → Evento" },
            { time: "09h00", desc: "Saída Ibis → Evento" },
            { time: "09h15", desc: "Saída Yoo2 → Evento" },
          ]
        },
        {
          title: "Parte da Tarde",
          items: [
            { time: "16h30", desc: "Evento → Hotéis" },
            { time: "17h00", desc: "Evento → Hotéis" },
            { time: "17h30", desc: "Evento → Hotéis" },
            { time: "18h00", desc: "Saída Ibis → Evento" },
            { time: "18h15", desc: "Saída Yoo2 → Evento" },
            { time: "19h00", desc: "Saída Ibis → Evento" },
            { time: "19h15", desc: "Saída Yoo2 → Evento" },
            { time: "21h30", desc: "Evento → Hotéis" },
            { time: "22h00", desc: "Evento → Hotéis" },
            { time: "22h30", desc: "Evento → Hotéis" },
            { time: "23h00", desc: "Evento → Hotéis" },
            { time: "23h30", desc: "Evento → Hotéis" },
          ]
        }
      ]
    },
    {
      title: "Linha 4 - CENTRO & HOTEL PRODIGY",
      sections: [
        {
          title: "Parte da Manhã",
          items: [
            { time: "07h00", desc: "Saída Prodigy" },
            { time: "07h15", desc: "Saída Guanabara" },
            { time: "07h30", desc: "Saída Prodigy" },
            { time: "07h45", desc: "Saída Guanabara" },
            { time: "08h00", desc: "Saída Prodigy" },
            { time: "08h15", desc: "Saída Guanabara" },
            { time: "08h30", desc: "Saída Prodigy" },
            { time: "08h45", desc: "Saída Guanabara" },
            { time: "09h00", desc: "Saída Prodigy" },
            { time: "09h15", desc: "Saída Guanabara" },
          ]
        },
        {
          title: "Parte da Tarde",
          items: [
            { time: "16h30", desc: "Evento → Hotéis" },
            { time: "17h00", desc: "Evento → Hotéis" },
            { time: "17h30", desc: "Evento → Hotéis" },
            { time: "18h00", desc: "Saída Prodigy → Evento" },
            { time: "18h15", desc: "Saída Guanabara → Evento" },
            { time: "19h00", desc: "Saída Prodigy → Evento" },
            { time: "19h15", desc: "Saída Guanabara → Evento" },
            { time: "21h30", desc: "Evento → Hotéis" },
            { time: "22h00", desc: "Evento → Hotéis" },
            { time: "22h30", desc: "Evento → Hotéis" },
            { time: "23h00", desc: "Evento → Hotéis" },
            { time: "23h30", desc: "Evento → Hotéis" },
          ]
        }
      ]
    }
  ],
  dia3: [
    {
      title: "Linha 1 - PORTO MARAVILHA",
      sections: [
        {
          title: "Parte da Manhã",
          items: [
            { time: "07h30", desc: "Saída Ibis & Novotel → Evento" },
            { time: "07h45", desc: "Saída Intercity → Evento" },
            { time: "08h00", desc: "Saída Ibis & Novotel → Evento" },
            { time: "08h15", desc: "Saída Intercity → Evento" },
            { time: "08h30", desc: "Saída Ibis & Novotel → Evento" },
            { time: "08h45", desc: "Saída Intercity → Evento" },
            { time: "09h00", desc: "Saída Ibis & Novotel → Evento" },
            { time: "09h15", desc: "Saída Intercity → Evento" },
          ]
        },
        {
          title: "Parte da Tarde",
          items: [
            { time: "16h30", desc: "Evento → Hotéis" },
            { time: "17h00", desc: "Evento → Hotéis" },
            { time: "17h30", desc: "Evento → Hotéis" },
            { time: "18h00", desc: "Saída Ibis & Novotel → Evento" },
            { time: "18h15", desc: "Saída Intercity → Evento" },
            { time: "19h00", desc: "Saída Ibis & Novotel → Evento" },
            { time: "19h15", desc: "Saída Intercity → Evento" },
            { time: "21h30", desc: "Evento → Hotéis" },
            { time: "22h00", desc: "Evento → Hotéis" },
            { time: "22h30", desc: "Evento → Hotéis" },
            { time: "23h00", desc: "Evento → Hotéis" },
            { time: "23h45", desc: "Evento → Hotéis" },
          ]
        }
      ]
    },
    {
      title: "Linha 2 - COPACABANA",
      sections: [
        {
          title: "Parte da Manhã",
          items: [
            { time: "07h30", desc: "Saída Hilton → Evento" },
            { time: "07h45", desc: "Saída Augusto's → Evento" },
            { time: "08h00", desc: "Saída Hilton → Evento" },
            { time: "08h15", desc: "Saída Augusto's → Evento" },
            { time: "08h30", desc: "Saída Hilton → Evento" },
            { time: "08h45", desc: "Saída Augusto's → Evento" },
            { time: "09h00", desc: "Saída Hilton → Evento" },
            { time: "09h15", desc: "Saída Augusto's → Evento" },
          ]
        },
        {
          title: "Parte da Tarde",
          items: [
            { time: "16h30", desc: "Evento → Hotéis" },
            { time: "17h00", desc: "Evento → Hotéis" },
            { time: "17h30", desc: "Evento → Hotéis" },
            { time: "18h00", desc: "Saída Hilton → Evento" },
            { time: "18h15", desc: "Saída Augusto's → Evento" },
            { time: "19h00", desc: "Saída Hilton → Evento" },
            { time: "19h15", desc: "Saída Augusto's → Evento" },
            { time: "21h30", desc: "Evento → Hotéis" },
            { time: "22h00", desc: "Evento → Hotéis" },
            { time: "22h30", desc: "Evento → Hotéis" },
            { time: "23h00", desc: "Evento → Hotéis" },
            { time: "23h45", desc: "Evento → Hotéis" },
          ]
        }
      ]
    },
    {
      title: "Linha 3 - BOTAFOGO",
      sections: [
        {
          title: "Parte da Manhã",
          items: [
            { time: "07h30", desc: "Saída Ibis → Evento" },
            { time: "07h45", desc: "Saída Yoo2 → Evento" },
            { time: "08h00", desc: "Saída Ibis → Evento" },
            { time: "08h15", desc: "Saída Yoo2 → Evento" },
            { time: "08h30", desc: "Saída Ibis → Evento" },
            { time: "08h45", desc: "Saída Yoo2 → Evento" },
            { time: "09h00", desc: "Saída Ibis → Evento" },
            { time: "09h15", desc: "Saída Yoo2 → Evento" },
          ]
        },
        {
          title: "Parte da Tarde",
          items: [
            { time: "16h30", desc: "Evento → Hotéis" },
            { time: "17h00", desc: "Evento → Hotéis" },
            { time: "17h30", desc: "Evento → Hotéis" },
            { time: "18h00", desc: "Saída Ibis → Evento" },
            { time: "18h15", desc: "Saída Yoo2 → Evento" },
            { time: "19h00", desc: "Saída Ibis → Evento" },
            { time: "19h15", desc: "Saída Yoo2 → Evento" },
            { time: "21h30", desc: "Evento → Hotéis" },
            { time: "22h00", desc: "Evento → Hotéis" },
            { time: "22h30", desc: "Evento → Hotéis" },
            { time: "23h00", desc: "Evento → Hotéis" },
            { time: "23h45", desc: "Evento → Hotéis" },
          ]
        }
      ]
    },
    {
      title: "Linha 4 - CENTRO & HOTEL PRODIGY",
      sections: [
        {
          title: "Parte da Manhã",
          items: [
            { time: "07h30", desc: "Saída Prodigy" },
            { time: "07h45", desc: "Saída Guanabara" },
            { time: "08h00", desc: "Saída Prodigy" },
            { time: "08h15", desc: "Saída Guanabara" },
            { time: "08h30", desc: "Saída Prodigy" },
            { time: "08h45", desc: "Saída Guanabara" },
            { time: "09h00", desc: "Saída Prodigy" },
            { time: "09h15", desc: "Saída Guanabara" },
          ]
        },
        {
          title: "Parte da Tarde",
          items: [
            { time: "16h30", desc: "Evento → Hotéis" },
            { time: "17h00", desc: "Evento → Hotéis" },
            { time: "17h30", desc: "Evento → Hotéis" },
            { time: "18h00", desc: "Saída Prodigy → Evento" },
            { time: "18h15", desc: "Saída Guanabara → Evento" },
            { time: "19h00", desc: "Saída Prodigy → Evento" },
            { time: "19h15", desc: "Saída Guanabara → Evento" },
            { time: "21h30", desc: "Evento → Hotéis" },
            { time: "22h00", desc: "Evento → Hotéis" },
            { time: "22h30", desc: "Evento → Hotéis" },
            { time: "23h00", desc: "Evento → Hotéis" },
            { time: "23h30", desc: "Evento → Hotéis" },
          ]
        }
      ]
    }
  ],
};

export function Transfer() {
  const [activeTab, setActiveTab] = useState('dia1');

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Transfer Oficial" 
        description="Horários e rotas do transfer oficial do evento." 
      />
      
      <PageHeader 
        title="Transfer Oficial" 
        description="Confira abaixo as linhas, horários e pontos de saída para o 24º Congresso Brasileiro dos Corretores de Seguros."
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {days.map((day) => (
              <button
                key={day.id}
                onClick={() => setActiveTab(day.id)}
                className={cn(
                  "px-8 py-3 rounded-full font-bold transition-all duration-300",
                  activeTab === day.id
                    ? "bg-brand-blue text-white shadow-lg scale-105"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                )}
              >
                {day.label}
              </button>
            ))}
          </div>

          {/* Tables Grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {schedules[activeTab as keyof typeof schedules].map((line, index) => (
              <div key={index} className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-brand-blue/5 p-4 border-b border-brand-blue/10 flex items-center gap-3">
                  <Bus className="w-5 h-5 text-brand-blue" />
                  <h3 className="font-bold text-slate-900">{line.title}</h3>
                </div>
                <div className="p-6 space-y-6">
                  {line.sections.map((section, sIndex) => (
                    <div key={sIndex}>
                      {section.title && (
                        <h4 className="font-bold text-brand-blue mb-3 flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {section.title}
                        </h4>
                      )}
                      <div className="space-y-2">
                        {section.items.map((item, iIndex) => (
                          <div key={iIndex} className="flex items-start gap-3 text-sm group">
                            <span className="font-bold text-slate-900 min-w-[50px] bg-white px-2 py-0.5 rounded border border-slate-200 text-center">
                              {item.time}
                            </span>
                            <span className="text-slate-600 flex items-center gap-2 pt-0.5">
                              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                              {item.desc}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-xl flex items-start gap-4 text-yellow-800">
            <MapPin className="w-6 h-6 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold mb-1">Pontos de Encontro</h4>
              <p className="text-sm">
                Os transfers sairão dos hotéis oficiais credenciados. Procure a sinalização do evento no lobby do seu hotel.
                Para o retorno, o ponto de encontro será no Estacionamento G3 do centro de convenções.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
