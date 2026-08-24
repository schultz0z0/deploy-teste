import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';

export function Regulation() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Regulamento Geral" 
        description="Regras e diretrizes do evento." 
      />
      
      <PageHeader 
        title="Regulamento Geral" 
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-page-content">
          <h2>1. Da Participação</h2>
          <p>
            O 24º Congresso Brasileiro dos Corretores de Seguros é um evento destinado a profissionais do mercado de seguros, corretores, seguradoras e prestadores de serviços.
          </p>
          <h2>2. Credenciamento</h2>
          <p>
            O credenciamento é pessoal e intransferível. É obrigatório o uso da credencial em todas as dependências do evento para acesso às palestras e feira de negócios.
          </p>
          <h2>3. Cancelamento e Reembolso</h2>
          <p>
            Solicitações de cancelamento devem ser feitas formalmente por e-mail. O reembolso seguirá a política descrita no ato da inscrição, respeitando o prazo de 7 dias do Código de Defesa do Consumidor.
          </p>
          <h2>4. Código de Conduta</h2>
          <p>
            Esperamos que todos os participantes mantenham um comportamento profissional e respeitoso. Assédio, discriminação ou comportamento inadequado não serão tolerados e podem resultar na expulsão do evento sem reembolso.
          </p>
        </div>
      </section>
    </div>
  );
}
