import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { sponsorCategories } from '@/data/sponsorCategories';
import { SEO } from '@/components/SEO';
import { cn } from '@/lib/utils';
import { PageHeader } from '@/components/PageHeader';

export function Sponsors() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Expositores" 
        description="Seja um patrocinador e exponha sua marca." 
      />
      
      <PageHeader 
        title="Seja um Patrocinador" 
        description="Posicione sua marca no evento mais influente do mercado de seguros."
      />

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
              Por que patrocinar?
            </h2>
            <ul className="space-y-6">
              {[
                { title: "Visibilidade Premium", desc: "Sua marca em destaque para milhares de decisores." },
                { title: "Networking Qualificado", desc: "Acesso direto a corretores e executivos de seguradoras." },
                { title: "Lançamento de Produtos", desc: "O palco ideal para apresentar suas inovações." },
                { title: "Geração de Leads", desc: "Capture contatos qualificados durante todo o evento." }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Solicite o Mídia Kit</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nome da Empresa</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all" placeholder="Sua empresa" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Seu Nome</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all" placeholder="Seu nome completo" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">E-mail Corporativo</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all" placeholder="seu@email.com" />
              </div>
              <button className="w-full py-4 rounded-xl bg-brand-blue text-white font-bold hover:bg-brand-teal transition-colors flex items-center justify-center gap-2">
                Receber Proposta
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-16">
            Quem já está conosco
          </h2>
          
          <div className="space-y-16">
            {sponsorCategories.map((category) => (
              <div key={category.title} className="space-y-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                  {category.title}
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                  {(category.title === 'Master' ? category.sponsors : [...category.sponsors]
                    .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR', { sensitivity: 'base' })))
                    .map((sponsor) => (
                    <motion.div
                      key={sponsor.id}
                      whileHover={{ scale: 1.05 }}
                      className={cn(
                        "transition-all duration-300 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center p-3 md:p-4",
                        category.size === 'xl' && "h-28 w-44 md:h-36 md:w-60",
                        category.size === 'lg' && "h-22 w-36 md:h-28 md:w-48",
                        category.size === 'md' && "h-20 w-32 md:h-24 md:w-44",
                        category.size === 'sm' && "h-16 w-28 md:h-20 md:w-36",
                        category.size === 'xs' && "h-12 w-20 md:h-14 md:w-24",
                      )}
                    >
                      <img 
                        src={sponsor.logo} 
                        alt={sponsor.name} 
                        className={cn(
                          "max-w-[88%] max-h-[75%] object-contain hover:scale-110 transition-all duration-500",
                          sponsor.name === 'Mapfre' && "max-h-[60%]",
                          sponsor.name === 'MAG' && "max-h-[50%]",
                          sponsor.name === 'HDI/Yelum' && "max-h-[55%]",
                          sponsor.name === 'Icatu Seguros' && "max-h-[55%]",
                          sponsor.name === 'ENS' && "max-h-[50%]"
                        )}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
