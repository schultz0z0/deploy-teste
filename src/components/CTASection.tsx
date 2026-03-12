import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-900 text-white">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
            Pronto para transformar sua carreira?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Garanta seu lugar no evento que vai redefinir o mercado de seguros. Vagas limitadas para a experiência presencial.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/inscricoes"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-teal text-white font-bold text-lg shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/50 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              Inscreva-se Agora
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/programacao"
              className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            >
              Ver Programação
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            Pagamento seguro em até 12x • Satisfação garantida
          </p>
        </motion.div>
      </div>
    </section>
  );
}
