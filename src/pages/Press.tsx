import { SEO } from '@/components/SEO';
import { Mail, Phone } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';

export function Press() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Imprensa" 
        description="Área destinada a jornalistas e veículos de comunicação." 
      />
      
      <PageHeader 
        title="Área de Imprensa" 
        description="Bem-vindos à área exclusiva para jornalistas"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-slate lg:prose-lg mb-12">
            <p>
              Os jornalistas e profissionais de imprensa serão muito bem-vindos ao 24º Congresso Brasileiro dos Corretores de Seguros. A organização do evento reconhece e valoriza o papel essencial da imprensa na divulgação de iniciativas que fortalecem e impulsionam o mercado de seguros no Brasil.
            </p>
            <p>
              Para apoiar o trabalho dos veículos de comunicação e de seus profissionais, a organização do Congresso disponibilizará todo o suporte necessário para o acompanhamento das atividades, cobertura jornalística e acesso às informações do evento.
            </p>
            <p>
              Os jornalistas interessados em participar devem entrar em contato com a organização para orientações sobre o processo de inscrição, pois preparamos condições especiais para a participação da imprensa.
            </p>
            <p>
              Será um grande prazer receber a imprensa no EXPORio, no Rio de Janeiro, para acompanhar de perto os debates, as novidades e os principais momentos do 24º Congresso Brasileiro dos Corretores de Seguros.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Jorge Clapp</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-600">
                  <Mail className="w-5 h-5 text-brand-blue shrink-0" />
                  <a href="mailto:clapp@fenacor.org.br" className="hover:text-brand-blue transition-colors break-all">
                    clapp@fenacor.org.br
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <Phone className="w-5 h-5 text-brand-blue shrink-0" />
                  <a href="tel:+5521980127878" className="hover:text-brand-blue transition-colors">
                    (21) 98012-7878
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Downloads</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between group hover:border-brand-blue transition-colors cursor-pointer">
                <div>
                  <h4 className="font-bold text-slate-900">Press Release Oficial</h4>
                  <p className="text-sm text-slate-500">PDF • 2.5 MB</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                </div>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between group hover:border-brand-blue transition-colors cursor-pointer">
                <div>
                  <h4 className="font-bold text-slate-900">Fotos em Alta Resolução</h4>
                  <p className="text-sm text-slate-500">ZIP • 156 MB</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>
    </div>
  );
}
