import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';

export function PromoRegulation() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Regulamento - Ação Promocional" 
        description="Regras da ação promocional Congrecor." 
      />
      
      <PageHeader 
        title="Regulamento - Ação Promocional" 
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl prose prose-slate lg:prose-lg">
          <h2>Ação Promocional Congrecor</h2>
          <p>
            Esta ação promocional visa incentivar a participação antecipada no evento, oferecendo benefícios exclusivos para os primeiros inscritos.
          </p>
          <h3>Mecânica</h3>
          <p>
            Os primeiros 500 inscritos no lote "Early Bird" receberão um kit exclusivo Congrecor, contendo brindes especiais dos patrocinadores.
          </p>
          <h3>Elegibilidade</h3>
          <p>
            A promoção é válida apenas para inscrições confirmadas e pagas dentro do período estipulado ou até o término das vagas do lote promocional.
          </p>
          <h3>Entrega</h3>
          <p>
            Os kits serão entregues exclusivamente no local do evento, mediante apresentação de documento com foto e comprovante de inscrição.
          </p>
        </div>
      </section>
    </div>
  );
}
