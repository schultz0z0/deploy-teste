import { motion } from 'framer-motion';
import { CheckCircle, MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTASection } from '@/components/CTASection';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';

export function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Sobre o Evento" 
        description="Conheça a missão e o propósito do Congresso Futuro 2026." 
      />
      
      <PageHeader 
        title="Sobre o Congresso" 
        description="A plataforma definitiva para corretores que desejam liderar a transformação do mercado."
      />

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-page-content"
          >
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
              A NOVA ERA DA DISTRIBUIÇÃO DE SEGUROS NO BRASIL
            </h2>
            <p>
              O 24º Congresso Brasileiro dos Corretores de Seguros será, na prática, uma imensa e completa plataforma de qualificação profissional, atualização técnica e debates intensos sobre a nova era da distribuição de seguros no Brasil.
            </p>
            <p>
              Durante os três dias de evento, os participantes terão acesso a conteúdos exclusivos, discussões sobre tendências globais, casos de sucesso e insights sobre novas tecnologias que estão redefinindo o mercado. Dessa forma, especialmente para os Corretores de Seguros, será a oportunidade perfeita para aprimorar competências, diversificar carteiras e descobrir novos caminhos para o crescimento sustentável.
            </p>
            <ul className="space-y-4">
              {[
                "Plataforma de qualificação profissional",
                "Debates sobre a nova era da distribuição",
                "Tendências globais e novas tecnologias",
                "Crescimento sustentável para corretores"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-brand-teal" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/conference/800/600" 
              alt="Conference Hall" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-12">
            O Local
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <MapPin className="w-10 h-10 text-brand-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">ExpoRio Cidade Nova</h3>
              <p className="text-slate-600">Rua Beatriz Larragoiti Lucas, s/n<br />Cidade Nova – Rio de Janeiro/RJ</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <Calendar className="w-10 h-10 text-brand-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Data</h3>
              <p className="text-slate-600">27 a 29 de Agosto de 2026</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <Clock className="w-10 h-10 text-brand-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Horário</h3>
              <p className="text-slate-600">09:00 às 18:00</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
