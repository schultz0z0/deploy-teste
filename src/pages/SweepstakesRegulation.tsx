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
        <div className="container mx-auto px-4 md:px-6 max-w-4xl prose prose-slate lg:prose-lg">
          <h2>Sorteio Oficial</h2>
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
