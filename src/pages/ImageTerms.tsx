import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';

export function ImageTerms() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Termos de Uso de Imagem" 
        description="Termos de uso de imagem para participantes." 
      />
      
      <PageHeader 
        title="Termos de Uso de Imagem" 
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-page-content">
          <p>
            Ao participar do 24º Congresso Brasileiro dos Corretores de Seguros, o participante autoriza, de forma gratuita, irrevogável e por prazo indeterminado, a utilização de sua imagem e voz eventualmente captadas durante a realização do evento, por meio de fotografias, vídeos e gravações de áudio.
          </p>
          <p>
            Esses registros poderão ser utilizados pela organização do Congresso e por seus parceiros institucionais ou patrocinadores em materiais institucionais e promocionais, incluindo publicações em sites, redes sociais, campanhas de divulgação, relatórios, materiais publicitários e outros meios de comunicação, no Brasil e no exterior.
          </p>
          <p>
            Ao participar do evento, o congressista declara estar plenamente ciente e de acordo com essa autorização, reconhecendo que sua presença poderá resultar na captação e utilização de sua imagem e voz nos termos acima descritos, sem que disso decorra qualquer ônus ou obrigação de natureza financeira para a organização do evento.
          </p>
        </div>
      </section>
    </div>
  );
}
