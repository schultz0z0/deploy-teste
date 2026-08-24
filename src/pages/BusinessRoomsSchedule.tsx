import { useState } from 'react';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';
import { businessRoomsData } from '@/data/businessRooms';
import { Calendar, Clock, Building2 } from 'lucide-react';

export function BusinessRoomsSchedule() {
  const [activeDay, setActiveDay] = useState<'28' | '29'>('28');

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Programação das Salas de Negócios" 
        description="Confira a programação completa das Salas de Negócios do 24º Congresso Brasileiro dos Corretores de Seguros." 
      />

      <PageHeader 
        title="PROGRAMAÇÃO DAS SALAS DE NEGÓCIOS" 
        description="24º Congresso Brasileiro de Corretores de Seguros"
      >
        <div className="mt-4 inline-block bg-amber-500/20 text-amber-200 border border-amber-500/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
          PROGRAMAÇÃO PRELIMINAR - SUJEITA A AJUSTES E/OU ALTERAÇÕES
        </div>
      </PageHeader>

      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Day selector tabs */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveDay('28')}
            className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
              activeDay === '28'
                ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30 scale-105'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Calendar className="w-5 h-5" />
            28/08/2026 (Sexta-feira)
          </button>
          <button
            onClick={() => setActiveDay('29')}
            className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
              activeDay === '29'
                ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30 scale-105'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Calendar className="w-5 h-5" />
            29/08/2026 (Sábado)
          </button>
        </div>

        {/* Time Schedule Banner */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-8 max-w-4xl mx-auto">
          <h3 className="text-center font-bold text-slate-900 mb-4 text-lg">
            Horários das Sessões - {activeDay === '28' ? '28/08/2026' : '29/08/2026'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <span className="block text-xs font-bold text-brand-blue uppercase tracking-wider">1º TEMPO</span>
              <span className="text-slate-800 font-bold text-base flex items-center justify-center gap-1 mt-1">
                <Clock className="w-4 h-4 text-brand-teal" />
                {activeDay === '28' ? '14:30 às 15:40' : '14:30 às 15:50'}
              </span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <span className="block text-xs font-bold text-brand-blue uppercase tracking-wider">2º TEMPO</span>
              <span className="text-slate-800 font-bold text-base flex items-center justify-center gap-1 mt-1">
                <Clock className="w-4 h-4 text-brand-teal" />
                15:50 às 17:00
              </span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <span className="block text-xs font-bold text-brand-blue uppercase tracking-wider">3º TEMPO</span>
              <span className="text-slate-800 font-bold text-base flex items-center justify-center gap-1 mt-1">
                <Clock className="w-4 h-4 text-brand-teal" />
                17:10 às 18:20
              </span>
            </div>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="space-y-8">
          {businessRoomsData.map((room) => {
            // If Day 29, skip Sala 2 because it is merged into Sala 1 e 2
            if (activeDay === '29' && room.id === 'sala-2') {
              return null;
            }

            const isMergedSala12OnDay29 = activeDay === '29' && room.id === 'sala-1';
            const roomTitle = isMergedSala12OnDay29 ? 'Sala 1 e 2' : room.name;
            const dayData = activeDay === '28' ? room.day28 : room.day29;

            return (
              <div key={room.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                {/* Room Header */}
                <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-brand-teal" />
                    <div>
                      <h2 className="text-xl font-bold">{roomTitle}</h2>
                      {room.subtitle && (
                        <p className="text-xs text-brand-teal font-semibold uppercase tracking-wider">{room.subtitle}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Slots Grid */}
                {isMergedSala12OnDay29 ? (
                  /* Merged Layout for Sala 1 e 2 on Day 29: 1º Tempo (1 col) + 2º e 3º Tempo juntos (2 cols) */
                  <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                    {/* 1º TEMPO */}
                    <div className="p-6 flex flex-col justify-between min-h-[180px]">
                      <div>
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-3 pb-2 border-b border-slate-100">
                          <span className="text-brand-blue font-bold">1º TEMPO</span>
                          <span>14:30 às 15:50</span>
                        </div>
                        <div className="space-y-2 text-sm text-slate-800 leading-relaxed">
                          <p className="font-semibold text-slate-900">{dayData.t1.tema}</p>
                          <p className="text-brand-blue font-medium">{dayData.t1.mediador}</p>
                          <p className="text-slate-700">{dayData.t1.palestrantes}</p>
                          <p className="text-slate-700">{dayData.t1.debatedores}</p>
                        </div>
                      </div>
                    </div>

                    {/* 2º e 3º TEMPO JUNTOS (16H ÀS 17H10 - 2 colunas) */}
                    <div className="p-6 md:col-span-2 flex flex-col justify-between min-h-[180px]">
                      <div>
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-3 pb-2 border-b border-slate-100">
                          <span className="text-brand-blue font-bold">2º e 3º TEMPOS</span>
                          <span className="font-bold text-slate-900">16H ÀS 17H10</span>
                        </div>
                        <div className="space-y-2 text-sm text-slate-800 leading-relaxed">
                          <p className="font-bold text-slate-900 text-base">
                            Tema: ALÉM DO ESPORTE: DESAFIANDO BARREIRAS INVISÍVEIS
                          </p>
                          <p className="text-xs font-bold text-brand-teal uppercase tracking-wider">
                            SISTEMA FECOMERCIO RJ SESC / SENAC
                          </p>
                          <p className="text-slate-700 font-medium pt-1">
                            Palestrante: FABI ALVIM, Libero da Seleção Brasileira de Volleyball - Campeã Olímpica
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Standard 3-slot Layout */
                  <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                    {[
                      { title: '1º TEMPO', time: activeDay === '28' ? '14:30 às 15:40' : '14:30 às 15:50', slot: dayData.t1 },
                      { title: '2º TEMPO', time: '15:50 às 17:00', slot: dayData.t2 },
                      { title: '3º TEMPO', time: '17:10 às 18:20', slot: dayData.t3 },
                    ].map((s, idx) => (
                      <div key={idx} className="p-6 flex flex-col justify-between min-h-[180px]">
                        <div>
                          <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-3 pb-2 border-b border-slate-100">
                            <span className="text-brand-blue font-bold">{s.title}</span>
                            <span>{s.time}</span>
                          </div>

                          {s.slot.customContent !== undefined && s.slot.customContent !== '' ? (
                            <div className="whitespace-pre-line text-sm text-slate-800 font-medium leading-relaxed">
                              {s.slot.customContent}
                            </div>
                          ) : (
                            <div className="space-y-2 text-sm text-slate-800 leading-relaxed">
                              {s.slot.patrocinador && (
                                <p className="font-bold text-slate-900">{s.slot.patrocinador}</p>
                              )}
                              {s.slot.tema && (
                                <p className="font-semibold text-slate-900 whitespace-pre-line">{s.slot.tema}</p>
                              )}
                              {(s.slot.mediador || s.slot.mediator) && (
                                <p className="text-brand-blue font-medium whitespace-pre-line">{s.slot.mediador || s.slot.mediator}</p>
                              )}
                              {s.slot.palestrantes && (
                                <p className="text-slate-700 whitespace-pre-line">{s.slot.palestrantes}</p>
                              )}
                              {s.slot.painelistas && (
                                <p className="text-slate-700 whitespace-pre-line">{s.slot.painelistas}</p>
                              )}
                              {s.slot.moderador && (
                                <p className="text-slate-700 whitespace-pre-line">{s.slot.moderador}</p>
                              )}
                              {s.slot.debatedores && (
                                <p className="text-slate-700 whitespace-pre-line">{s.slot.debatedores}</p>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
