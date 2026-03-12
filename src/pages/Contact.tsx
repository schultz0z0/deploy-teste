import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';

export function Contact() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Contato" 
        description="Entre em contato com nossa equipe." 
      />
      
      <PageHeader 
        title="Fale Conosco" 
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">
              Canais de Atendimento
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">E-mail</h3>
                  <p className="text-slate-600 mb-1">Dúvidas gerais:</p>
                  <a href="mailto:24congresso@fenacor.org.br" className="text-brand-blue font-medium hover:underline">
                    24congresso@fenacor.org.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Telefone / WhatsApp</h3>
                  <p className="text-slate-600 mb-1">FENACOR</p>
                  <a href="tel:+552130774777" className="text-brand-blue font-medium hover:underline">
                    (21) 3077-4777
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Envie uma mensagem</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nome</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Sobrenome</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Assunto</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all bg-white">
                  <option>Dúvidas sobre Inscrição</option>
                  <option>Imprensa</option>
                  <option>Patrocínio</option>
                  <option>Outros</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Mensagem</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all resize-none"></textarea>
              </div>
              <button className="w-full py-4 rounded-xl bg-brand-blue text-white font-bold hover:bg-brand-teal transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/20">
                Enviar Mensagem
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
