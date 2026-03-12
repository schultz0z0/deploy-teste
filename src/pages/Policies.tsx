import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';

export function Policies() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Políticas" 
        description="Termos de uso e política de privacidade." 
      />
      
      <PageHeader 
        title="Políticas e Termos" 
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl prose prose-slate lg:prose-lg">
          <h2>Política de Privacidade</h2>
          <p>
            Sua privacidade é importante para nós. É política do Congresso Futuro respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Congresso Futuro, e outros sites que possuímos e operamos.
          </p>
          <p>
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
          </p>
          
          <h3>Uso de Dados</h3>
          <p>
            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
          </p>
          <p>
            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
          </p>

          <hr className="my-12 border-slate-200" />

          <h2>Termos de Uso</h2>
          <h3>1. Termos</h3>
          <p>
            Ao acessar ao site Congresso Futuro, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site.
          </p>

          <h3>2. Uso de Licença</h3>
          <p>
            É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Congresso Futuro , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
          </p>
          <ul>
            <li>modificar ou copiar os materiais;</li>
            <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
            <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Congresso Futuro;</li>
            <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
            <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
