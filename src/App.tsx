import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Schedule } from '@/pages/Schedule';
import { BusinessRoomsSchedule } from '@/pages/BusinessRoomsSchedule';
import { Speakers } from '@/pages/Speakers';
import { Tickets } from '@/pages/Tickets';
import { Sponsors } from '@/pages/Sponsors';
import { Contact } from '@/pages/Contact';
import { Policies } from '@/pages/Policies';
import { Presentation } from '@/pages/Presentation';
import { FAQ } from '@/pages/FAQ';
import { ImageTerms } from '@/pages/ImageTerms';
import { PrivacyPolicy } from '@/pages/PrivacyPolicy';
import { Regulation } from '@/pages/Regulation';
import { PromoRegulation } from '@/pages/PromoRegulation';
import { SweepstakesRegulation } from '@/pages/SweepstakesRegulation';
import { RegistrationRegulation } from '@/pages/RegistrationRegulation';
import { PromoConsegnneRegulation } from '@/pages/PromoConsegnneRegulation';
import { PromoConexaoFuturoSeguroRegulation } from '@/pages/PromoConexaoFuturoSeguroRegulation';

import { Gallery } from '@/pages/Gallery';
import { Press } from '@/pages/Press';
import { AppPage } from '@/pages/AppPage';
import { Transfer } from '@/pages/Transfer';
import { Accommodation } from '@/pages/Accommodation';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

function PageTracker() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-0PX75L0JVS', {
        page_path: pathname + search,
      });
    }
  }, [pathname, search]);

  return null;
}

export default function App() {
  return (
    <Layout>
      <PageTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/programacao" element={<Schedule />} />
        <Route path="/programacao-salas-negocios" element={<BusinessRoomsSchedule />} />
        <Route path="/salas-negocios" element={<BusinessRoomsSchedule />} />

        <Route path="/palestrantes" element={<Speakers />} />
        <Route path="/inscricoes" element={<Tickets />} />
        <Route path="/expositores" element={<Sponsors />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/politicas" element={<Policies />} />
        
        {/* Dropdown Routes */}
        <Route path="/apresentacao" element={<Presentation />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/termos-imagem" element={<ImageTerms />} />
        <Route path="/privacidade" element={<PrivacyPolicy />} />
        <Route path="/regulamento" element={<Regulation />} />
        <Route path="/regulamento-promo" element={<PromoRegulation />} />
        <Route path="/regulamento-sorteio" element={<SweepstakesRegulation />} />
        <Route path="/regulamento-inscricao" element={<RegistrationRegulation />} />
        <Route path="/regulamento-consegnne" element={<PromoConsegnneRegulation />} />
        <Route path="/regulamento-conexao-futuro-seguro" element={<PromoConexaoFuturoSeguroRegulation />} />

        {/* New Services/Media Routes */}
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/imprensa" element={<Press />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/hospedagem" element={<Accommodation />} />
      </Routes>
    </Layout>
  );
}
