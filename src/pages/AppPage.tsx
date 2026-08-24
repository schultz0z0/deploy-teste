import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Smartphone, Calendar, Map, Bell, Star } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import conectaEnsImage from '../conecta_ens/conecta_ens.png';

export function AppPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="App Oficial" 
        description="Baixe o aplicativo oficial do evento." 
      />
      
      <PageHeader 
        title="App Oficial" 
        description="Toda a programação e networking na palma da sua mão."
      />

      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Aplicativo do 24º Congresso
              </h2>
              <div className="text-page-content">
                <p>
                  Para tornar a experiência dos participantes ainda mais completa e interativa, o 24º Congresso Brasileiro dos Corretores de Seguros contará com o aplicativo Conecta ENS, disponível para dispositivos iOS e Android.
                </p>
                <p>
                  Por meio do aplicativo, os congressistas terão acesso a uma plataforma digital integrada, desenvolvida para facilitar o acompanhamento de todas as atividades do evento e proporcionar mais organização e praticidade durante os três dias de programação.
                </p>
                <p>
                  No Conecta ENS, os participantes poderão consultar a programação completa do Congresso, acompanhar informações sobre palestras, painéis e palestrantes, localizar os espaços do evento, além de conhecer os patrocinadores e expositores presentes na EXPOSEG.
                </p>
                <p>
                  O aplicativo também permitirá planejar a participação nas atividades, organizar a agenda pessoal e ampliar as oportunidades de networking, tornando a experiência no Congresso ainda mais dinâmica e produtiva. Além disso, durante as sessões da plenária, os congressistas poderão enviar perguntas aos palestrantes diretamente pelo aplicativo, estimulando a interação e a participação do público nos debates.
                </p>
                <p>
                  Em breve, serão divulgadas as orientações para download e acesso ao aplicativo, para que todos possam aproveitar ao máximo os recursos disponíveis durante o 24º Congresso Brasileiro dos Corretores de Seguros.
                </p>
              </div>

              <div className="space-y-6 mb-10">
                {[
                  { icon: Calendar, title: "Programação Completa", desc: "Monte sua agenda personalizada e receba lembretes." },
                  { icon: Map, title: "Mapa Interativo", desc: "Encontre estandes, auditórios e serviços facilmente." },
                  { icon: Bell, title: "Notificações em Tempo Real", desc: "Fique por dentro de todas as novidades e avisos." },
                  { icon: Star, title: "Networking", desc: "Conecte-se com outros participantes e agende reuniões." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{feature.title}</h3>
                      <p className="text-slate-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://apps.apple.com/ro/app/conecta-ens/id6748700473" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-slate-800 transition-colors shadow-lg"
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Baixar na App Store" className="h-8" />
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=br.com.yazo.conectaens25&hl=pt_BR&pli=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-slate-800 transition-colors shadow-lg"
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Disponível no Google Play" className="h-8" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 flex justify-center"
            >
              <div className="relative w-72 h-[580px] bg-slate-900 rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                <img 
                  src={conectaEnsImage} 
                  alt="App Screen" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-bold text-xl mb-2">Bem-vindo ao Congresso</p>
                    <p className="text-sm opacity-80">Sua jornada começa aqui.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
