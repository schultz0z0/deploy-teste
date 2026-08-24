import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';

export function SweepstakesRegulation() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Regulamento do Sorteio" 
        description="Regras para participação nos sorteios." 
      />
      
      <PageHeader 
        title="Regulamento do Sorteio" 
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-page-content">
          <h2>Sorteio Oficial</h2>
          <p className="font-semibold text-slate-900 mb-4">
            Certificado de Autorização SPA/ME Nº 06.051512/2026 – Confira{' '}
            <a 
              href="/RG_Zurich_24_Congresso_Aprovado.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-brand-blue underline font-bold hover:text-brand-teal"
            >
              aqui
            </a>{' '}
            o regulamento oficial aprovado.
          </p>
          <div className="mb-8">
            <a 
              href="/RG_Zurich_24_Congresso_Aprovado.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white rounded-xl font-bold hover:bg-brand-blue/90 transition-colors shadow-sm"
            >
              Baixar Regulamento em PDF
            </a>
          </div>
          <p>
            Durante o encerramento do evento, serão sorteados prêmios especiais entre os participantes presentes.
          </p>
          <h3>Como Participar</h3>
          <p>
            Para concorrer, o participante deve estar devidamente inscrito, credenciado e PRESENTE no momento do sorteio.
          </p>
          <h3>Prêmios</h3>
          <ul>
            <li>1 Automóvel 0km</li>
            <li>3 Viagens Internacionais</li>
            <li>5 Notebooks de última geração</li>
          </ul>
          <h3>Regras Gerais</h3>
          <p>
            A organização conferirá a identidade do ganhador no ato. Caso o sorteado não esteja presente, um novo sorteio será realizado imediatamente. Membros da organização e staff não podem participar.
          </p>
        </div>
      </section>
    </div>
  );
}
