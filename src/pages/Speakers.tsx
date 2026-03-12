import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Linkedin, Twitter, Instagram } from 'lucide-react';
import { speakers } from '@/data/speakers';
import { cn } from '@/lib/utils';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';

export function Speakers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpeaker, setSelectedSpeaker] = useState<string | null>(null);

  const filteredSpeakers = speakers.filter(speaker =>
    speaker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    speaker.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Palestrantes" 
        description="Conheça os especialistas confirmados no Congresso Futuro." 
      />
      
      <PageHeader 
        title="Palestrantes" 
        description="Conheça os especialistas que estão debatendo e construindo a nova era da distribuição de seguros no Brasil."
      >
        <div className="max-w-md mx-auto relative mt-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar por nome ou empresa..."
            className="w-full pl-12 pr-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-teal transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </PageHeader>

      {/* Grid */}
      <div className="container mx-auto px-4 md:px-6 py-20">
        {filteredSpeakers.length === 0 ? (
          <div className="text-center text-slate-500 py-12">
            Nenhum palestrante encontrado.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSpeakers.map((speaker) => (
              <motion.div
                key={speaker.id}
                layoutId={`speaker-${speaker.id}`}
                onClick={() => setSelectedSpeaker(speaker.id)}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                    <h3 className="text-2xl font-bold mb-1">{speaker.name}</h3>
                    <p className="text-brand-teal font-medium text-sm mb-2">{speaker.role}</p>
                    <p className="text-xs text-slate-300 opacity-80">{speaker.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedSpeaker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedSpeaker(null)}>
          <motion.div
            layoutId={`speaker-${selectedSpeaker}`}
            className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedSpeaker(null)}
              className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white z-10 transition-colors"
            >
              ✕
            </button>
            
            <div className="grid md:grid-cols-2">
              <div className="aspect-[3/4] md:aspect-auto relative">
                <img
                  src={speakers.find(s => s.id === selectedSpeaker)?.image}
                  alt={speakers.find(s => s.id === selectedSpeaker)?.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center bg-slate-50">
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">
                  {speakers.find(s => s.id === selectedSpeaker)?.name}
                </h2>
                <p className="text-brand-blue font-medium mb-6">
                  {speakers.find(s => s.id === selectedSpeaker)?.role} @ {speakers.find(s => s.id === selectedSpeaker)?.company}
                </p>
                
                <p className="text-slate-600 leading-relaxed mb-8">
                  {speakers.find(s => s.id === selectedSpeaker)?.bio}
                </p>

                <div className="flex gap-4 mt-auto">
                  {speakers.find(s => s.id === selectedSpeaker)?.socials.linkedin && (
                    <a href="#" className="p-2 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-brand-blue hover:border-brand-blue transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {speakers.find(s => s.id === selectedSpeaker)?.socials.twitter && (
                    <a href="#" className="p-2 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-brand-blue hover:border-brand-blue transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {speakers.find(s => s.id === selectedSpeaker)?.socials.instagram && (
                    <a href="#" className="p-2 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-brand-blue hover:border-brand-blue transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
