import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { schedule } from '@/data/schedule';
import { speakers } from '@/data/speakers';
import { Clock, MapPin, User, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';

export function Schedule() {
  const [activeDay, setActiveDay] = useState<'Dia 1' | 'Dia 2'>('Dia 1');
  const [expandedSession, setExpandedSession] = useState<string | null>(null);

  const filteredSessions = schedule.filter(s => s.day === activeDay);

  const getSpeaker = (id: string) => speakers.find(s => s.id === id);

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Programação" 
        description="Confira a agenda completa de palestras e workshops." 
      />
      
      <PageHeader 
        title="Programação" 
        description="Confira as palestras e painéis que preparamos para você."
      />

      {/* Tabs */}
      <div className="sticky top-20 z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 flex justify-center">
          {['Dia 1', 'Dia 2'].map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day as any)}
              className={cn(
                "px-8 py-4 text-lg font-medium transition-colors relative",
                activeDay === day ? "text-brand-blue" : "text-slate-500 hover:text-slate-700"
              )}
            >
              {day}
              {activeDay === day && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-brand-blue"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
        <div className="space-y-6">
          {filteredSessions.map((session) => (
            <motion.div
              key={session.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => setExpandedSession(expandedSession === session.id ? null : session.id)}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <div className="flex flex-col items-center md:items-start min-w-[100px] text-slate-500">
                    <span className="text-2xl font-bold text-slate-900">{session.startTime}</span>
                    <span className="text-sm">{session.endTime}</span>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={cn(
                        "px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider",
                        session.track === 'Inovação' && "bg-purple-100 text-purple-700",
                        session.track === 'Vendas' && "bg-green-100 text-green-700",
                        session.track === 'Gestão' && "bg-blue-100 text-blue-700",
                        session.track === 'Regulação' && "bg-orange-100 text-orange-700",
                      )}>
                        {session.track}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{session.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {session.location}
                      </div>
                      {session.speakerIds.length > 0 && (
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {session.speakerIds.map(id => getSpeaker(id)?.name).join(', ')}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="hidden md:block text-slate-400">
                    {expandedSession === session.id ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {expandedSession === session.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-slate-100 bg-slate-50/50"
                  >
                    <div className="p-6 md:pl-[140px]">
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {session.description}
                      </p>
                      
                      {session.speakerIds.length > 0 && (
                        <div className="grid gap-4">
                          <h4 className="font-semibold text-slate-900">Palestrantes</h4>
                          {session.speakerIds.map(id => {
                            const speaker = getSpeaker(id);
                            if (!speaker) return null;
                            return (
                              <div key={id} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100">
                                <img 
                                  src={speaker.image} 
                                  alt={speaker.name} 
                                  className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                  <p className="font-bold text-slate-900">{speaker.name}</p>
                                  <p className="text-sm text-slate-500">{speaker.role} na {speaker.company}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
