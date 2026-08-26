export interface PersonRole {
  name: string;
  role?: string;
  fullString?: string;
}

export interface ScheduleItem {
  id: string;
  dayId: 'dia-27' | 'dia-28' | 'dia-29';
  time: string;
  title: string;
  subtitle?: string;
  mediator?: PersonRole;
  speaker?: PersonRole;
  speakers?: PersonRole[];
  debaters?: PersonRole[];
  sponsor?: string;
  notes?: string;
}

export const scheduleDays = [
  { id: 'dia-27', label: '27 de Agosto', weekDay: 'Quinta-feira', date: '27/08/2026', subtitle: 'PROGRAMAÇÃO 27/08/2026', transferNote: '*TRANSFERS DO EXPORIO PARA OS HOTÉIS CREDENCIADOS ATÉ ÀS 23H50' },
  { id: 'dia-28', label: '28 de Agosto', weekDay: 'Sexta-feira', date: '28/08/2026', subtitle: 'PROGRAMAÇÃO | 28/08/2026', transferNote: '*TRANSFER DO EXPORIO | HOTÉIS CREDENCIADOS | EXPORIO : DAS 18H00 ÀS 23H00' },
  { id: 'dia-29', label: '29 de Agosto', weekDay: 'Sábado', date: '29/08/2026', subtitle: 'PROGRAMAÇÃO | 29/08/2026', transferNote: '*TRANSFER EXPORIO | HOTÉIS CREDENCIADOS | EXPORIO : DAS 18H00 ÀS 23H00' },
] as const;

export const rawScheduleData: ScheduleItem[] = [
  // ==================== DIA 27/08/2026 ====================
  {
    id: 'd27-1',
    dayId: 'dia-27',
    time: '09h30',
    title: 'Início do transfer dos Hoteis Credenciados à ExpoRio',
  },
  {
    id: 'd27-2',
    dayId: 'dia-27',
    time: '10h00',
    title: 'Início do Credenciamento',
  },
  {
    id: 'd27-3',
    dayId: 'dia-27',
    time: '11h00',
    title: 'Abertura da Exposeg',
  },
  {
    id: 'd27-4',
    dayId: 'dia-27',
    time: '18h30h',
    title: 'Liberação de Acesso à Plenária',
  },
  {
    id: 'd27-5',
    dayId: 'dia-27',
    time: '19h às 19h45',
    title: 'Sem Medo do Futuro',
    speaker: {
      name: 'Marco Tulio Lara',
      role: 'Cofundador do Jota Quest',
      fullString: 'Marco Tulio Lara - Cofundador do Jota Quest'
    },
  },
  {
    id: 'd27-6',
    dayId: 'dia-27',
    time: '20h00 às 21h00',
    title: 'Abertura oficial',
    speakers: [
      { name: 'Armando Vergílio', role: 'Presidente da Fenacor', fullString: 'Armando Vergílio - Presidente da Fenacor' },
      { name: 'Alessandro Octaviani', role: 'Superintendente da Susep', fullString: 'Alessandro Octaviani - Superintendente da Susep' },
      { name: 'Dyogo Oliveira', role: 'Presidente da CNSeg', fullString: 'Dyogo Oliveira - Presidente da CNSeg' },
      { name: 'Lucas Vergílio', role: 'Presidente da Escola de Negócios e Seguros - ENS', fullString: 'Lucas Vergílio - Presidente da Escola de Negócios e Seguros - ENS' },
      { name: 'Ricardo Garrido', role: 'Presidente do Sincor RJ', fullString: 'Ricardo Garrido - Presidente do Sincor RJ' },
    ],
  },
  {
    id: 'd27-7',
    dayId: 'dia-27',
    time: '21h00 às 22h00',
    title: 'Jantar',
    sponsor: 'Patrocínio CNseg',
  },
  {
    id: 'd27-8',
    dayId: 'dia-27',
    time: '22h00 as 23h20',
    title: 'Show do Jon Secada',
    sponsor: 'Patrocínio CNseg',
  },

  // ==================== DIA 28/08/2026 ====================
  {
    id: 'd28-1',
    dayId: 'dia-28',
    time: '07h30 às 08h50',
    title: 'Transfer dos Hoteis Credenciados à ExpoRio',
  },
  {
    id: 'd28-2',
    dayId: 'dia-28',
    time: '08h00',
    title: 'Início do Credenciamento e do Acesso à Plenária',
  },
  {
    id: 'd28-3',
    dayId: 'dia-28',
    time: '08h45 às 09h30',
    title: 'O Futuro é Humano',
    speaker: {
      name: 'Danni Suzuki',
      fullString: 'Danni Suzuki'
    },
  },
  {
    id: 'd28-4',
    dayId: 'dia-28',
    time: '09h30 às 11h15',
    title: 'Grande Painel de Abertura',
    subtitle: 'A Nova Era da Distribuição de Seguros e o Futuro do Setor',
    mediator: {
      name: 'Armando Vergílio',
      role: 'Presidente da Fenacor',
      fullString: 'Mediador: Armando Vergílio - Presidente da Fenacor'
    },
    debaters: [
      { name: 'Alessandro Octaviani', role: 'Superintendente da Susep', fullString: 'Alessandro Octaviani - Superintendente da Susep' },
      { name: 'Dyogo Oliveira', role: 'Presidente da CNSeg', fullString: 'Dyogo Oliveira - Presidente da CNSeg' },
      { name: 'Eduard Folch Rue', role: 'CEO da Allianz Seguros no Brasil', fullString: 'Eduard Folch Rue - CEO da Allianz Seguros no Brasil' },
      { name: 'Eduardo Dal Ri', role: 'CEO do Grupo HDI', fullString: 'Eduardo Dal Ri - CEO do Grupo HDI' },
      { name: 'Felipe Nascimento', role: 'CEO da MAPFRE Brasil', fullString: 'Felipe Nascimento - CEO da MAPFRE Brasil' },
      { name: 'Marcelo Goldman', role: 'Vice-Presidente Comercial e de Produtos Massificados da Tokio Marine Seguradora', fullString: 'Marcelo Goldman - Vice-Presidente Comercial e de Produtos Massificados da Tokio Marine Seguradora' },
      { name: 'Ney Dias', role: 'CEO da Bradseg Participações SA', fullString: 'Ney Dias - CEO da Bradseg Participações SA' },
      { name: 'Paulo Kakinoff', role: 'CEO do Grupo Porto', fullString: 'Paulo Kakinoff - CEO do Grupo Porto' },
    ],
  },
  {
    id: 'd28-5',
    dayId: 'dia-28',
    time: '11h15 às 12h15',
    title: 'Painel 1',
    subtitle: 'Inovação em Seguros. Abordagem e Mindset',
    mediator: {
      name: 'Lucas Vergílio',
      role: 'Presidente da Escola de Negócios e Seguros - ENS',
      fullString: 'Mediador: Lucas Vergílio - Presidente da Escola de Negócios e Seguros - ENS'
    },
    speaker: {
      name: 'Bruno Sardinha',
      role: 'CIO Travelers',
      fullString: 'Palestra Internacional Bruno Sardinha - CIO Travelers'
    },
    debaters: [
      { name: 'Nelson Filipe de Oliveira Lopes Alves', role: 'COO MAPFRE', fullString: 'Nelson Filipe de Oliveira Lopes Alves - COO MAPFRE' },
      { name: 'Luiz Arruda', role: 'Vice-Presidente Comercial, Marketing, Clientes e Dados do Grupo Porto', fullString: 'Luiz Arruda - Vice-Presidente Comercial, Marketing, Clientes e Dados do Grupo Porto' },
      { name: 'Adilson Lavrador', role: 'Diretor Executivo de Operações, Tecnologia e Sinistros da Tokio Marine Seguradora', fullString: 'Adilson Lavrador - Diretor Executivo de Operações, Tecnologia e Sinistros da Tokio Marine Seguradora' },
    ],
  },
  {
    id: 'd28-6',
    dayId: 'dia-28',
    time: '12h15 às 12h55',
    title: 'Painel 2',
    subtitle: 'Vendendo Saúde',
    mediator: {
      name: 'Erika Brandão Gleicher',
      role: 'CEO Grupo Assurê Corretagem de Seguros',
      fullString: 'Mediadora: Erika Brandão Gleicher - CEO Grupo Assurê Corretagem de Seguros'
    },
    debaters: [
      { name: 'Flávio Bitter', role: 'Diretor Geral da Bradesco Saúde', fullString: 'Flávio Bitter - Diretor Geral da Bradesco Saúde' },
      { name: 'Bruno Sobral', role: 'Diretor-Executivo da FenaSaúde', fullString: 'Bruno Sobral - Diretor-Executivo da FenaSaúde' },
      { name: 'Heitor Augusto' },
    ],
  },
  {
    id: 'd28-7',
    dayId: 'dia-28',
    time: '13h00 às 14h15',
    title: 'Almoço',
  },
  {
    id: 'd28-8',
    dayId: 'dia-28',
    time: '14h30 às 18h20',
    title: 'Salas de Negócios',
  },
  {
    id: 'd28-9',
    dayId: 'dia-28',
    time: '12h00 às 22h00',
    title: 'Exposeg',
  },
  {
    id: 'd28-10',
    dayId: 'dia-28',
    time: '20h00 às 21h00',
    title: 'Jantar',
    sponsor: 'Patrocínio MAG Seguros',
  },
  {
    id: 'd28-11',
    dayId: 'dia-28',
    time: '21h00 às 22h30',
    title: 'Show de Xande de Pilares',
    sponsor: 'Patrocínio MAG Seguros',
  },

  // ==================== DIA 29/08/2026 ====================
  {
    id: 'd29-1',
    dayId: 'dia-29',
    time: '07h30 às 08h50',
    title: 'Transfer dos Hoteis Credenciados à ExpoRio',
  },
  {
    id: 'd29-2',
    dayId: 'dia-29',
    time: '08h',
    title: 'Início do Credenciamento e do Acesso à Plenária',
  },
  {
    id: 'd29-3',
    dayId: 'dia-29',
    time: '08h45 às 09h30',
    title: 'A Apólice Invisível',
    speaker: {
      name: 'Dr. Pablo Vinícius',
      role: 'Médico Psiquiatra',
      fullString: 'Dr. Pablo Vinícius - Médico Psiquiatra'
    }
  },
  {
    id: 'd29-4',
    dayId: 'dia-29',
    time: '09h30 às 10h30',
    title: 'PAINEL DE ABERTURA DO DIA',
    subtitle: 'Seguro de Pessoas e Benefícios: Inovação e Desenvolvimento',
    mediator: {
      name: 'Ricardo Garrido',
      role: 'Presidente Sincor RJ',
      fullString: 'Mediador: Ricardo Garrido - Presidente Sincor RJ'
    },
    debaters: [
      { name: 'Fernando Dantas', role: 'Presidente Sincor CE', fullString: 'Fernando Dantas - Presidente Sincor CE' },
      { name: 'Edson Franco', role: 'CEO Zurich Brasil', fullString: 'Edson Franco - CEO Zurich Brasil' },
      { name: 'Luciano Soares', role: 'Presidente Icatu Seguros', fullString: 'Luciano Soares - Presidente Icatu Seguros' },
      { name: 'Nilton Molina', role: 'Presidente do Instituto de Longevidade e Fundo de Pensão - MAG', fullString: 'Nilton Molina - Presidente do Instituto de Longevidade e Fundo de Pensão - MAG' },
    ],
  },
  {
    id: 'd29-5',
    dayId: 'dia-29',
    time: '10h35 às 11h40',
    title: 'PAINEL 1',
    subtitle: 'Autorregulação e PDMIS - A ponte para o futuro do Corretor de Seguros',
    mediator: {
      name: 'Augusto Coelho Cardoso',
      role: 'Consultor da Escola de Negócios e Seguros – ENS',
      fullString: 'Mediador: Augusto Coelho Cardoso - Consultor da Escola de Negócios e Seguros – ENS'
    },
    speaker: {
      name: 'Claudio Contador',
      role: 'Economista, MA e PhD em Economia',
      fullString: 'Palestrante: Claudio Contador - Economista, MA e PhD em Economia'
    },
    debaters: [
      { name: 'Júlia Normande Lins', role: 'Diretora da Susep', fullString: 'Júlia Normande Lins - Diretora da Susep' },
      { name: 'Marcilio Otavio Nascimento Filho', role: 'Diretor da Susep', fullString: 'Marcilio Otavio Nascimento Filho - Diretor da Susep' },
      { name: 'Maria Filomena Magalhães Branquinho', role: 'Presidente do IBRACOR', fullString: 'Maria Filomena Magalhães Branquinho - Presidente do IBRACOR' },
    ],
  },
  {
    id: 'd29-6',
    dayId: 'dia-29',
    time: '11h55 às 12h55',
    title: 'PAINEL 2',
    subtitle: 'Novos Mercados de PPM e Cooperativas de Seguros',
    mediator: {
      name: 'Marcelo Augusto Camacho Rocha',
      role: 'Assessor da Escola de Negócios e Seguros - ENS',
      fullString: 'Mediador: Marcelo Augusto Camacho Rocha - Assessor da Escola de Negócios e Seguros - ENS'
    },
    speaker: {
      name: 'Carlos Queiroz',
      role: 'Diretor da Susep',
      fullString: 'Palestrante: Carlos Queiroz - Diretor da Susep'
    },
    debaters: [
      { name: 'João Armando De Castro Santos', role: 'Presidente do Sicoob Credseguro', fullString: 'João Armando De Castro Santos - Presidente do Sicoob Credseguro' },
      { name: 'Hugo de Castro Andrade', role: 'Coordenador de Ramos da Organização das Cooperativas Brasileiras - OCB', fullString: 'Hugo de Castro Andrade - Coordenador de Ramos da Organização das Cooperativas Brasileiras - OCB' },
      { name: 'Marco Antonio Gonçalves', role: 'Presidente do Conselho Consultivo MAG e do Fórum Mario Petrelli', fullString: 'Marco Antonio Gonçalves - Presidente do Conselho Consultivo MAG e do Fórum Mario Petrelli' },
    ],
  },
  {
    id: 'd29-7',
    dayId: 'dia-29',
    time: '13h10 às 14h15',
    title: 'Almoço',
  },
  {
    id: 'd29-8',
    dayId: 'dia-29',
    time: '14h30 às 18h20',
    title: 'Salas de Negócios',
  },
  {
    id: 'd29-9',
    dayId: 'dia-29',
    time: '12h00 às 22h00',
    title: 'Exposeg',
  },
  {
    id: 'd29-10',
    dayId: 'dia-29',
    time: '20h00 às 21h00',
    title: 'Jantar',
    sponsor: 'Patrocínio IBDCOR',
  },
  {
    id: 'd29-11',
    dayId: 'dia-29',
    time: '21h00 às 22h30',
    title: 'Show do Monobloco',
    sponsor: 'Patrocínio IBDCOR',
  },
];
