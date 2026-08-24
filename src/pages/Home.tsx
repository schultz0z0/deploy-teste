import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Users, ArrowRight, Star, Gift, Map, Linkedin, X } from 'lucide-react';
import { HeroWaves } from '@/components/HeroWaves';
import { CTASection } from '@/components/CTASection';
import { SEO } from '@/components/SEO';
import { Countdown } from '@/components/Countdown';
import { speakers } from '@/data/speakers';
import { sponsorCategories } from '@/data/sponsorCategories';
import { cn } from '@/lib/utils';

const homeSpeakerQueries = [
  { query: 'Alessandro Octaviani', role: 'Superintendente da Susep' },
  { query: 'Armando Vergílio', role: 'Presidente da Fenacor' },
  { query: 'Dyogo Oliveira', role: 'Presidente da CNSeg' },
  { query: 'Lucas', role: 'Presidente da Escola de Negócios e Seguros - ENS' },
  { query: 'Garrido', role: 'Presidente do Sincor RJ' },
  { query: 'Danni Suzuki', role: 'Especialista em Neurociência e Comportamento' },
  { query: 'Fabi', role: 'Líbero da Seleção Brasileira de Volleyball - Campeã Olímpica' },
  { query: 'Marco Tulio', role: 'Cofundador do Jota Quest' },
  { query: 'Pablo', role: 'Médico Psiquiatra' },
  { query: 'Bruno Sardinha', role: 'CIO Travelers' },
  { query: 'Edson Franco', role: 'CEO Zurich Brasil' },
  { query: 'Eduard Folch', role: 'CEO da Allianz Seguros no Brasil' },
  { query: 'Dal Ri', role: 'CEO do Grupo HDI' },
  { query: 'Felipe Nascimento', role: 'CEO da MAPFRE Brasil' },
  { query: 'Ferrara', role: 'Presidente da Tokio Marine Seguradora' },
  { query: 'Luciano Soares', role: 'Presidente Icatu Seguros' },
  { query: 'Ney Dias', role: 'CEO da Bradseg Participações SA' },
  { query: 'Nilton Molina', role: 'Presidente do Instituto de Longevidade e Fundo de Pensão - MAG' },
  { query: 'Kakinoff', role: 'CEO do Grupo Porto' },
];

export function Home() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<string | null>(null);
  const currentSpeaker = speakers.find(s => s.id === selectedSpeaker);

  const homeSpeakers = homeSpeakerQueries
    .map(item => {
      const s = speakers.find(sp => sp.name.toLowerCase().includes(item.query.toLowerCase()));
      if (!s) return null;
      return {
        ...s,
        role: item.role || s.role
      };
    })
    .filter((s): s is typeof speakers[0] => s !== null);

  return (
    <div className="overflow-hidden">
      <SEO 
        title="Home" 
        description="O maior evento de inovação e tecnologia para o mercado de seguros. Conecte-se com o futuro." 
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-40 lg:pt-96 pb-40 overflow-hidden bg-slate-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2070&auto=format&fit=crop" 
            alt="Rio de Janeiro" 
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/60" />
        </div>

        <HeroWaves />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-medium text-sm mb-6 backdrop-blur-sm drop-shadow-md">
              27 a 29 de Agosto de 2026 • ExpoRio Cidade Nova - RJ
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 tracking-tight leading-[1.1] drop-shadow-lg">
              24º Congresso Brasileiro dos <br />
              <span className="text-white">
                Corretores de Seguros
              </span>
            </h1>
            <p className="inline-block px-6 py-2 rounded-full bg-white/10 border border-white/20 text-xl md:text-2xl text-white mb-10 max-w-4xl mx-auto leading-relaxed font-light backdrop-blur-sm drop-shadow-md">
              A NOVA ERA DA DISTRIBUIÇÃO DE SEGUROS NO BRASIL
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link
                to="/inscricoes"
                className="px-8 py-4 rounded-full bg-brand-yellow text-brand-blue font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                Inscreva-se
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/programacao"
                className="hidden px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Ver Programação
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="bg-brand-blue">
        <div className="container mx-auto px-4 py-8 text-center">
          <h3 className="text-white/80 text-sm font-medium uppercase tracking-widest mb-4">Faltam apenas</h3>
          <Countdown />
        </div>
      </section>

      {/* Palestras Incríveis */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video"
            >
              <img 
                src="/Palestras-que-inspiram.jpg" 
                alt="Palestras Incríveis" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Palestrantes que Inspiram e Transformam
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                O 24º Congresso Brasileiro dos Corretores de Seguros reunirá, em sua plenária, algumas das mais relevantes vozes do Brasil. Grandes personalidades nacionais, lideranças do mercado, executivos das principais seguradoras, autoridades públicas, parlamentares, dirigentes de entidades e renomados especialistas do setor estarão presentes para compartilhar visões, experiências e tendências que estão moldando o futuro da atividade seguradora.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Na plenária, os congressistas terão acesso a conteúdos atuais, debates estratégicos e reflexões sobre os desafios e as oportunidades do mercado. O espaço foi pensado para promover atualização, capacitação e crescimento profissional, por meio de ideias inovadoras, experiências reais e perspectivas que ampliam horizontes e fortalecem a atuação do corretor.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Participar do Congresso é estar conectado com o presente e preparado para o futuro da corretagem de seguros.
              </p>
              <Link
                to="/inscricoes"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white font-bold hover:bg-brand-blue/90 transition-colors shadow-lg shadow-brand-blue/20"
              >
                Inscreva-se Agora
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speakers Section - Smaller Cards */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              Palestrantes Confirmados
            </h2>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
              Clique nos palestrantes para conhecer mais sobre suas trajetórias e biografias.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center">
            {homeSpeakers.map((speaker, index) => (
              <motion.div
                key={speaker.id}
                layoutId={`speaker-home-${speaker.id}`}
                onClick={() => setSelectedSpeaker(speaker.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-slate-100 flex flex-col h-full group cursor-pointer transition-all duration-300"
              >
                {/* Image container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    className={cn("w-full h-full object-cover transition-transform duration-500 group-hover:scale-105", speaker.imagePosition)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end p-4">
                    <span className="text-white text-xs font-semibold underline decoration-brand-yellow">
                      Ver biografia
                    </span>
                  </div>
                </div>

                {/* Speaker details */}
                <div className="p-4 flex flex-col flex-grow text-center">
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-brand-blue transition-colors line-clamp-2">
                    {speaker.name}
                  </h3>
                  <p className="text-brand-teal font-medium text-xs mt-1 line-clamp-2">
                    {speaker.role}
                  </p>
                  <p className="text-slate-400 text-[10px] mt-0.5 uppercase tracking-wider font-semibold">
                    {speaker.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/palestrantes"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-blue text-white font-bold hover:bg-brand-blue/90 transition-colors shadow-lg shadow-brand-blue/20"
            >
              Ver todos os palestrantes
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Networking e Parcerias */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Networking que gera oportunidades e Parcerias
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                A EXPOSEG – Feira de Negócios do Congresso será o espaço dedicado à geração de negócios e conexões estratégicas no 24º Congresso Brasileiro dos Corretores de Seguros. O ambiente reunirá corretores, seguradoras, empresas de serviços, provedores de tecnologia e importantes players do mercado em um espaço voltado à interação, relacionamento e novas oportunidades.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Na EXPOSEG, os participantes poderão:
              </p>
              <ul className="list-disc pl-5 text-slate-600 text-lg leading-relaxed mb-8 space-y-2">
                <li>Conhecer lançamentos de produtos e soluções inovadoras do mercado de seguros</li>
                <li>Conectar-se diretamente com seguradoras e empresas do setor</li>
                <li>Ampliar relacionamentos, fortalecer parcerias e prospectar novos negócios</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 relative rounded-2xl overflow-hidden shadow-2xl aspect-square md:aspect-video"
            >
              <img 
                src="/Networking.jpg" 
                alt="Networking e Parcerias" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Qualificação e Oportunidades */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Qualificação, Conhecimento e Novas Oportunidades
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Participar do 24º Congresso Brasileiro dos Corretores de Seguros é investir no que há de mais valioso para o profissional do setor: conhecimento, atualização e visão de futuro.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Durante o evento, os participantes terão contato com novas soluções, produtos, ferramentas de gestão e tendências que estão transformando o mercado de seguros. Uma oportunidade para ampliar repertório, identificar novas frentes de atuação e fortalecer a estratégia de negócios do Corretor de Seguros.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Mais do que acompanhar as mudanças do setor, o Corretor que participa do Congresso se posiciona na vanguarda do mercado, preparado para crescer, inovar e conquistar novos espaços.
              </p>
              {/* <Link
                to="/programacao"
                className="hidden inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-green text-white font-bold hover:bg-brand-green/90 transition-colors shadow-lg shadow-brand-green/20"
              >
                Veja a Programação
                <ArrowRight className="w-4 h-4" />
              </Link> */}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 relative rounded-2xl overflow-hidden shadow-2xl aspect-square md:aspect-video"
            >
              <img 
                src="/Qualificacao-1.jpg" 
                alt="Networking e Qualificação" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programação Cultural */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mt-2">Programação Cultural</h2>
            <p className="text-slate-600 max-w-3xl mx-auto mt-4 text-lg leading-relaxed">
              O 24º Congresso Brasileiro dos Corretores de Seguros também reserva momentos especiais de celebração e confraternização. Após uma intensa programação de conhecimento, negócios e networking, os congressistas poderão desfrutar de três noites de confraternização e entretenimento.
            </p>
            <p className="text-slate-600 max-w-3xl mx-auto mt-4 text-lg leading-relaxed">
              A programação reunirá atrações musicais e momentos de integração entre profissionais de todo o país, criando um ambiente ideal para celebrar o encontro, fortalecer relacionamentos e aproveitar um dos momentos mais aguardados do Congresso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src="/jon_secada.jpg"
                alt="Jon Secada"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                <h3 className="text-2xl font-bold mb-2">Jon Secada</h3>
                <p className="text-xs text-slate-200 leading-relaxed">Uma das vozes mais marcantes da música internacional, trazendo grandes sucessos românticos e pop para abrir a nossa programação.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src="/xande_pilares.jpg"
                alt="Xande de Pilares"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                <h3 className="text-2xl font-bold mb-2">Xande de Pilares</h3>
                <p className="text-xs text-slate-200 leading-relaxed">O melhor do samba e da MPB com a energia contagiante e a voz inconfundível de um dos maiores nomes do pagode nacional.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src="/monobloco.jpg"
                alt="Monobloco"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                <h3 className="text-2xl font-bold mb-2">Monobloco</h3>
                <p className="text-xs text-slate-200 leading-relaxed">Celebrando o encerramento do Congresso com a energia contagiante do carnaval de rua carioca e ritmos que vão do samba ao pop.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sorteio */}
      <section className="py-20 bg-brand-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-2xl rotate-3 shadow-2xl"
            >
              <img 
                src="/Sorteios.jpg" 
                alt="Prêmios do Sorteio" 
                className="w-full h-64 md:h-80 object-cover rounded-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-brand-yellow/20 text-brand-yellow px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-brand-yellow/30">
                <Gift className="w-4 h-4" />
                Prêmios Exclusivos
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Sorteios Especiais
              </h2>
              <p className="text-slate-200 text-lg leading-relaxed mb-4">
                Além de participar de uma programação rica em conhecimento, networking e oportunidades de negócios, os congressistas Corretores de Seguros, com registro PF ativo na SUSEP, poderão concorrer a prêmios exclusivos, tornando a experiência no evento ainda mais especial.
              </p>
              <p className="text-slate-300 text-sm mb-8">
                Certificado de Autorização SPA/ME Nº 06.051512/2026 – Confira{' '}
                <a 
                  href="/RG_Zurich_24_Congresso_Aprovado.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="underline font-bold text-brand-yellow hover:text-white transition-colors"
                >
                  aqui
                </a>{' '}
                o regulamento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/inscricoes" 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-yellow text-brand-blue font-bold text-lg shadow-lg hover:bg-white transition-colors"
                >
                  Inscreva-se
                </Link>
                <a 
                  href="/RG_Zurich_24_Congresso_Aprovado.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent border border-white/30 text-white font-bold text-lg hover:bg-white/10 transition-colors"
                >
                  Veja o regulamento
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Planta do Evento */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <Map className="w-4 h-4" />
            Localização
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            Planta da EXPOSEG
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto mb-4 text-lg leading-relaxed">
            Confira a planta oficial da EXPOSEG, a feira de negócios do 24º Congresso Brasileiro dos Corretores de Seguros, onde estarão localizados os estandes dos patrocinadores, expositores e empresas parceiras do evento.
          </p>
          <p className="text-slate-600 max-w-3xl mx-auto mb-4 text-lg leading-relaxed">
            Este é o espaço onde o mercado se encontra, as novidades são apresentadas e surgem importantes oportunidades de relacionamento e negócios para os Corretores de Seguros.
          </p>
          <p className="text-slate-600 max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
            Explore o mapa, conheça a localização dos estandes e prepare seu roteiro para aproveitar ao máximo tudo o que a EXPOSEG terá a oferecer.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <img 
              src="/planta_exposeg.png" 
              alt="Planta do Evento" 
              className="w-full h-auto rounded-xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Localização */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                <MapPin className="w-4 h-4" />
                Como Chegar
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Localização Privilegiada
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                O ExpoRio Cidade Nova está localizado no coração do Rio de Janeiro, com fácil acesso a aeroportos, hotéis e pontos turísticos.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Endereço</h3>
                    <p className="text-slate-600">Rua Beatriz Larragoiti Lucas, s/n<br />Cidade Nova – Rio de Janeiro/RJ</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-blue font-bold hover:underline"
              >
                Ver no Google Maps
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.356218991666!2d-43.20876982390384!3d-22.90021697925983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f02d406080b%3A0x7770830403067675!2sExpo%20Mag!5e0!3m2!1spt-BR!2sbr!4v1709825432000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Organized */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
            Patrocinadores, Expositores e Apoiadores Institucionais
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
            O 24º Congresso Brasileiro dos Corretores de Seguros conta com o apoio e a participação de importantes empresas e instituições que impulsionam o desenvolvimento do mercado de seguros no Brasil.
          </p>
          
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
                    <motion.a
                      key={sponsor.id}
                      href={sponsor.url}
                      whileHover={{ scale: 1.05 }}
                      className={cn(
                        "transition-all duration-300 flex items-center justify-center p-2",
                        category.size === 'xl' && "w-36 h-20 md:w-48 md:h-28",
                        category.size === 'lg' && "w-32 h-16 md:w-44 md:h-22",
                        category.size === 'md' && "w-32 h-14 md:w-44 md:h-18",
                        category.size === 'sm' && "w-28 h-12 md:w-36 md:h-16",
                        category.size === 'xs' && "w-20 h-8 md:w-28 md:h-12",
                      )}
                    >
                      <img 
                        src={sponsor.logo} 
                        alt={sponsor.name} 
                        className={cn(
                          "max-h-full max-w-full object-contain",
                          sponsor.name === 'Mapfre' && "max-h-[80%]",
                          sponsor.name === 'MAG' && "max-h-[60%]",
                          sponsor.name === 'HDI/Yelum' && "max-h-[65%]",
                          sponsor.name === 'Icatu Seguros' && "max-h-[65%]",
                          sponsor.name === 'ENS' && "max-h-[55%]"
                        )}
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker Modal */}
      <AnimatePresence>
        {selectedSpeaker && currentSpeaker && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm"
            onClick={() => setSelectedSpeaker(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-4 right-4 p-2 bg-slate-950/10 hover:bg-slate-950/20 rounded-full text-slate-800 hover:text-slate-900 z-10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="grid md:grid-cols-2">
                <div className="aspect-[4/5] md:aspect-auto relative bg-slate-100 flex items-center justify-center">
                  {currentSpeaker.image?.startsWith('data:') ? (
                    <div className="w-32 h-32 text-slate-400">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  ) : (
                    <img
                      src={currentSpeaker.image}
                      alt={currentSpeaker.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-8 flex flex-col justify-center bg-slate-50 max-h-[80vh] md:max-h-none overflow-y-auto">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-1 leading-tight">
                    {currentSpeaker.name}
                  </h2>
                  <p className="text-brand-blue font-semibold text-sm mb-6">
                    {currentSpeaker.role} @ {currentSpeaker.company}
                  </p>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-8 whitespace-pre-line max-h-60 overflow-y-auto pr-2">
                    {currentSpeaker.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
