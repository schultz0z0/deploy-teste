import { SEO } from '@/components/SEO';
import { PageHeader } from '@/components/PageHeader';

const pricingRows = [
  {
    label: '1º Lote',
    from: '13/03/2026',
    to: '30/04/2026',
    associatedAdult: 'R$ 1.500',
    associatedMinor: 'R$ 750',
    nonAssociatedAdult: 'R$ 2.250',
    nonAssociatedMinor: 'R$ 1.125',
    othersAdult: 'R$ 3.000',
    othersMinor: 'R$ 1.500',
    highlight: false,
  },
  {
    label: 'Promoção Conexão Futuro Seguro',
    from: '13/04/2026',
    to: '30/04/2026',
    associatedAdult: 'R$ 1.200',
    associatedMinor: 'R$ 600',
    nonAssociatedAdult: 'R$ 1.800',
    nonAssociatedMinor: 'R$ 900',
    othersAdult: 'R$ 2.400',
    othersMinor: 'R$ 1.200',
    highlight: true,
  },
  {
    label: '2º Lote',
    from: '01/05/2026',
    to: '30/06/2026',
    associatedAdult: 'R$ 1.650',
    associatedMinor: 'R$ 825',
    nonAssociatedAdult: 'R$ 2.475',
    nonAssociatedMinor: 'R$ 1.238',
    othersAdult: 'R$ 3.300',
    othersMinor: 'R$ 1.650',
    highlight: false,
  },
  {
    label: 'Promoção Conexão Futuro Seguro',
    from: '01/05/2026',
    to: '26/05/2026',
    associatedAdult: 'R$ 1.320',
    associatedMinor: 'R$ 660',
    nonAssociatedAdult: 'R$ 1.980',
    nonAssociatedMinor: 'R$ 990',
    othersAdult: 'R$ 2.640',
    othersMinor: 'R$ 1.320',
    highlight: true,
  },
];

export function PromoConexaoFuturoSeguroRegulation() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEO
        title="Regulamento Ação Promocional Conexão Futuro Seguro"
        description="Regulamento da Ação Promocional Conexão Futuro Seguro 2026."
      />

      <PageHeader
        title="Regulamento Ação Promocional"
        description="Conexão Futuro Seguro 2026"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-page-content mx-auto">
            <p>
              A Federação Nacional dos Corretores de Seguros Privados e de Resseguros, de Capitalização, de Previdência Privada e das Empresas Corretoras de Seguros e de Resseguros - FENACOR promoverá uma Ação Promocional durante o CONEXÃO FUTURO SEGURO - 2026 (EVENTO) que será realizado no dia 26 de maio de 2026, via transmissão online.
            </p>
            <p>
              A Ação Promocional tem o objetivo de promover o 24º Congresso Brasileiro dos Corretores de Seguros durante o CONEXÃO FUTURO SEGURO - 2026.
            </p>
            <p>
              A FENACOR - Federação Nacional dos Corretores de Seguros Privados e de Resseguros, de Capitalização, de Previdência Privada e das Empresas Corretoras de Seguros e de Resseguros, a ENS - Escola de Negócios e Seguros e o IBDCOR - Instituto Brasileiro de Desenvolvimento dos Corretores de Seguros organizam e realizam o EVENTO.
            </p>
            <p>
              O 24º Congresso Brasileiro dos Corretores de Seguros será realizado no Rio de Janeiro/RJ, nos dias 27, 28 e 29 de agosto de 2026, no ExpoRio - Cidade Nova, situado na Rua Beatriz Larragoiti Lucas, s/n, Cidade Nova - Rio de Janeiro - RJ - CEP: 20.260-010.
            </p>

            <h2>Das Condições Especiais de Preço e Pagamento</h2>
            <p>
              As inscrições para o Conexão Futuro Seguro 2026 são gratuitas, pessoais e intransferíveis, assim como as condições especiais desta Ação Promocional, e deverão ser realizadas através do link de inscrição disponível no hotsite do evento.
            </p>
            <p>
              A Ação Promocional consiste em condições especiais de preço e pagamento no 24º Congresso Brasileiro dos Corretores de Seguros, para todos os inscritos no CONEXÃO FUTURO SEGURO - 2026, com pagamento à vista, por PIX ou boleto, e parcelado em 10 (dez) vezes no cartão de crédito.
            </p>
            <p>
              As condições especiais de preço e pagamento para inscrição no 24º Congresso Brasileiro de Corretores de Seguros são válidas somente no âmbito desta Ação Promocional, não sendo cumulativas com outras promoções.
            </p>
            <p>
              As condições desta Ação Promocional estão vigentes do dia 13 de abril de 2026 ao dia 26 de maio de 2026.
            </p>
            <p>
              Todos os inscritos no CONEXÃO FUTURO SEGURO - 2026 terão desconto de 20% (vinte por cento) nas inscrições do 24º Congresso Brasileiro dos Corretores de Seguros.
            </p>
            <div className="not-prose overflow-x-auto my-8 border border-slate-300 rounded-xl">
              <table className="min-w-full border-collapse text-sm text-slate-800">
                <thead>
                  <tr className="bg-slate-300">
                    <th rowSpan={2} className="border border-slate-400 px-3 py-4 min-w-[210px] font-bold text-center">
                      INSCRIÇÃO - 24º Congresso Brasileiro
                    </th>
                    <th rowSpan={2} className="border border-slate-400 px-3 py-4 min-w-[90px] font-bold text-center">
                      De
                    </th>
                    <th rowSpan={2} className="border border-slate-400 px-3 py-4 min-w-[90px] font-bold text-center">
                      Até
                    </th>
                    <th colSpan={2} className="border border-slate-400 px-3 py-4 min-w-[280px] font-bold text-center">
                      Associado Pessoa Física (até 2 pessoas, incluindo o próprio corretor) ou Jurídica (até 4 inscrições por PJ)
                    </th>
                    <th colSpan={2} className="border border-slate-400 px-3 py-4 min-w-[220px] font-bold text-center">
                      Não Associado com SUSEP
                    </th>
                    <th colSpan={2} className="border border-slate-400 px-3 py-4 min-w-[280px] font-bold text-center">
                      Outros (plataforma, seguradoras Patrocinadoras ou expositoras, etc)
                    </th>
                  </tr>
                  <tr className="bg-slate-300">
                    <th className="border border-slate-400 px-3 py-3 min-w-[160px] font-bold text-center">
                      Congressista / Acompanhante (adulto a partir de 18 anos)
                    </th>
                    <th className="border border-slate-400 px-3 py-3 min-w-[160px] font-bold text-center">
                      Acompanhante menor (de 12 a 17 anos)
                    </th>
                    <th className="border border-slate-400 px-3 py-3 min-w-[160px] font-bold text-center">
                      Congressista / Acompanhante (adulto a partir de 18 anos)
                    </th>
                    <th className="border border-slate-400 px-3 py-3 min-w-[160px] font-bold text-center">
                      Acompanhante menor (de 12 a 17 anos)
                    </th>
                    <th className="border border-slate-400 px-3 py-3 min-w-[160px] font-bold text-center">
                      Congressista / Acompanhante (adulto a partir de 18 anos)
                    </th>
                    <th className="border border-slate-400 px-3 py-3 min-w-[160px] font-bold text-center">
                      Acompanhante menor (de 12 a 17 anos)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricingRows.map((row) => (
                    <tr key={`${row.label}-${row.from}`} className={row.highlight ? 'bg-yellow-300 font-semibold' : 'bg-white'}>
                      <td className="border border-slate-300 px-3 py-2">{row.label}</td>
                      <td className="border border-slate-300 px-3 py-2 text-center">{row.from}</td>
                      <td className="border border-slate-300 px-3 py-2 text-center">{row.to}</td>
                      <td className="border border-slate-300 px-3 py-2 text-right">{row.associatedAdult}</td>
                      <td className="border border-slate-300 px-3 py-2 text-right">{row.associatedMinor}</td>
                      <td className="border border-slate-300 px-3 py-2 text-right">{row.nonAssociatedAdult}</td>
                      <td className="border border-slate-300 px-3 py-2 text-right">{row.nonAssociatedMinor}</td>
                      <td className="border border-slate-300 px-3 py-2 text-right">{row.othersAdult}</td>
                      <td className="border border-slate-300 px-3 py-2 text-right">{row.othersMinor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Das Inscrições</h2>
            <p>
              A inscrição no 24º Congresso Brasileiro de Corretores de Seguros realizada durante a Ação Promocional só estará garantida com a aprovação do pagamento pelo seu agente financeiro.
            </p>
            <p>
              Caso o pagamento seja cancelado posteriormente, o participante perderá direito à condição desta Ação Promocional.
            </p>

            <h2>Do Cancelamento e Reembolso</h2>
            <p>
              O cancelamento da inscrição, ou inscrições, poderá ser solicitado através do e-mail <a href="mailto:24congresso@fenacor.org.br">24congresso@fenacor.org.br</a>, anexando cópia do comprovante de pagamento, respeitando os prazos e condições estabelecidas abaixo:
            </p>
            <ul>
              <li>Para solicitações de cancelamento realizadas em até 07 (sete) dias, contados a partir da data da inscrição efetuada pelo site durante o período da promoção, o valor do reembolso corresponderá a 100% (cem por cento) do valor pago.</li>
              <li>Para solicitações de cancelamento realizadas até 31 de maio de 2026, o valor do reembolso será correspondente a 80% (oitenta por cento) do valor pago.</li>
              <li>Para solicitações de cancelamento realizadas entre 01 de junho e 31 de julho de 2026, o valor do reembolso será correspondente a 50% (cinquenta por cento) do valor pago.</li>
              <li>As solicitações de cancelamento realizadas a partir do dia 01 de agosto de 2026 não serão aceitas e, portanto, não terão direito ao reembolso de valores.</li>
            </ul>
            <p>
              O reembolso, devidamente aprovado nas condições supra, será creditado em até 60 (sessenta) dias após a solicitação.
            </p>

            <h2>Das Condições Gerais</h2>
            <p>
              A FENACOR, a ENS e o IBDCOR poderão alterar e atualizar este documento a qualquer momento, sem prévio aviso, sendo sempre responsabilidade dos participantes verificarem a versão mais recente e atualizada, que estará disponível no hotsite do 24º Congresso Brasileiro de Corretores de Seguros (<a href="https://www.congressodoscorretores.com.br/" target="_blank" rel="noopener noreferrer">https://www.congressodoscorretores.com.br/</a>).
            </p>
            <p>
              Os organizadores poderão cancelar o EVENTO, a qualquer momento, caso não seja atingido o número mínimo de inscrições ou por caso fortuito e/ou força maior.
            </p>

            <h2>Do Termo de Ciência e Consentimento</h2>
            <p>
              Ao se inscrever, o participante declara que leu e aceita o contido no "Termo de Ciência e Consentimento", disponível no link <a href="https://www.congressodoscorretores.com.br/regulamento-inscricao" target="_blank" rel="noopener noreferrer">https://www.congressodoscorretores.com.br/regulamento-inscricao</a>.
            </p>

            <h2>LGPD</h2>
            <p>
              O PARTICIPANTE autoriza a FENACOR, exclusivamente para os fins aqui especificados, a compartilhar os dados de sua inscrição, inclusive pessoais, com os órgãos governamentais e os patrocinadores, em observância à Lei nº 13.709/18 (Lei Geral de Proteção de Dados Pessoais).
            </p>

            <p className="font-bold text-center mt-12">
              FEDERAÇÃO NACIONAL DOS CORRETORES DE SEGUROS PRIVADOS E DE RESSEGUROS, DE CAPITALIZAÇÃO, DE PREVIDÊNCIA PRIVADA E DAS EMPRESAS CORRETORAS DE SEGUROS E DE RESSEGUROS - FENACOR
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
