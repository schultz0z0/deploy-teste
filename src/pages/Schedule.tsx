import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bus, ArrowRight } from 'lucide-react';
import { rawScheduleData, scheduleDays } from '@/data/schedule';
import { cn } from '@/lib/utils';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';

export function Schedule() {
  const [activeDayId, setActiveDayId] = useState<'dia-27' | 'dia-28' | 'dia-29'>('dia-27');

  const activeDayObj = scheduleDays.find(d => d.id === activeDayId) || scheduleDays[0];
  const daySessions = rawScheduleData.filter(s => s.dayId === activeDayId);

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <SEO 
        title="Programação" 
        description="A Nova Era da Distribuição de Seguros no Brasil - 24º Congresso Brasileiro dos Corretores de Seguros." 
      />
      
      <PageHeader 
        title="A Nova Era da Distribuição de Seguros no Brasil" 
        description={activeDayObj.subtitle}
      />

      {/* Tabs */}
      <div className="sticky top-20 z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-center items-center gap-2 md:gap-4 py-3">
            {scheduleDays.map((day) => {
              const isActive = activeDayId === day.id;
              return (
                <button
                  key={day.id}
                  onClick={() => setActiveDayId(day.id)}
                  className={cn(
                    "px-5 py-2.5 rounded-xl font-display text-sm md:text-base font-bold transition-all duration-200 flex flex-col items-center min-w-[120px] md:min-w-[160px]",
                    isActive 
                      ? "bg-brand-blue text-white shadow-sm" 
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  )}
                >
                  <span className={cn(
                    "text-[10px] uppercase tracking-wider font-semibold mb-0.5",
                    isActive ? "text-brand-yellow" : "text-slate-400"
                  )}>
                    {day.weekDay}
                  </span>
                  <span>{day.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-6 pt-8 max-w-5xl">
        
        {/* Header Notice string exactly as in PDF */}
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900">
            {activeDayObj.subtitle}
          </h2>
          <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">
            PROGRAMAÇÃO PRELIMINAR - SUJEITA A AJUSTES E/OU ALTERAÇÕES
          </p>
        </div>

        {/* Transfer Link Banner */}
        <div className="flex justify-center mb-8">
          <Link
            to="/transfer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            <Bus className="w-5 h-5 text-brand-teal group-hover:scale-110 transition-transform" />
            <span>Confira os Horários e Rotas do Transfer Oficial</span>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Aligned Schedule Table / Cards List */}
        <div className="space-y-4">
          {daySessions.map((session, idx) => (
            <motion.div
              key={session.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: idx * 0.03 }}
              className="bg-white rounded-xl border border-slate-200 p-5 md:p-6 shadow-sm hover:border-slate-300 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                
                {/* Fixed-Width Aligned Time Column */}
                <div className="w-full md:w-44 flex-shrink-0 flex items-center md:border-r md:border-slate-200 md:pr-4">
                  <span className="text-base md:text-lg font-bold text-brand-blue tracking-tight">
                    {session.time}
                  </span>
                </div>

                {/* Content Column */}
                <div className="flex-grow space-y-2">
                  
                  {/* Main Title */}
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
                    {session.title}
                  </h3>

                  {session.title?.toLowerCase().includes('salas de negócios') && (
                    <div className="pt-2">
                      <Link 
                        to="/programacao-salas-negocios"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-blue text-white font-bold text-sm shadow hover:bg-brand-blue/90 hover:shadow-md transition-all duration-300"
                      >
                        Programação Completa
                      </Link>
                    </div>
                  )}

                  {/* Subtitle if present */}
                  {session.subtitle && (
                    <p className="text-sm md:text-base font-semibold text-brand-teal">
                      {session.subtitle}
                    </p>
                  )}

                  {/* Sponsor tag if present */}
                  {session.sponsor && (
                    <p className="text-xs md:text-sm font-bold text-amber-700">
                      {session.sponsor}
                    </p>
                  )}

                  {/* People Section - STRICT ORDER: 1. Mediador, 2. Palestrante(s), 3. Debatedores */}
                  {(session.mediator || session.speaker || session.speakers || session.debaters) && (
                    <div className="pt-3 border-t border-slate-100 space-y-2">
                      
                      {/* 1. MEDIADOR (ALWAYS FIRST) */}
                      {session.mediator && (
                        <div className="text-sm text-slate-800">
                          <span className="font-bold text-brand-blue">
                            {session.mediator.fullString || `Mediador: ${session.mediator.name}${session.mediator.role ? ` - ${session.mediator.role}` : ''}`}
                          </span>
                        </div>
                      )}

                      {/* 2. PALESTRANTE SINGLE */}
                      {session.speaker && (
                        <div className="text-sm text-slate-800">
                          <span className="font-semibold text-slate-900">
                            {session.speaker.fullString || `${session.speaker.name}${session.speaker.role ? ` - ${session.speaker.role}` : ''}`}
                          </span>
                        </div>
                      )}

                      {/* 2. PALESTRANTES MULTIPLE */}
                      {session.speakers && session.speakers.length > 0 && (
                        <div className="space-y-1">
                          {session.speakers.map((spk, sIdx) => (
                            <div key={sIdx} className="text-sm text-slate-800 font-medium">
                              {spk.fullString || `${spk.name}${spk.role ? ` - ${spk.role}` : ''}`}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* 3. DEBATEDORES */}
                      {session.debaters && session.debaters.length > 0 && (
                        <div className="pt-1 space-y-1">
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                            Debatedores
                          </span>
                          {session.debaters.map((deb, dIdx) => (
                            <div key={dIdx} className="text-sm text-slate-800 font-medium pl-2 border-l-2 border-slate-200">
                              {deb.fullString || `${deb.name}${deb.role ? ` - ${deb.role}` : ''}`}
                            </div>
                          ))}
                        </div>
                      )}

                    </div>
                  )}

                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote starting with * */}
        {activeDayObj.transferNote && (
          <div className="mt-8 text-center">
            <Link 
              to="/transfer"
              className="inline-block text-xs md:text-sm font-semibold text-slate-700 hover:text-brand-blue uppercase tracking-wide underline underline-offset-4 decoration-slate-300 hover:decoration-brand-blue transition-colors"
            >
              {activeDayObj.transferNote}
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
