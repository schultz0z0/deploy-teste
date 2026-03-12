export interface Session {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  speakerIds: string[];
  track: 'Inovação' | 'Vendas' | 'Gestão' | 'Regulação';
  day: 'Dia 1' | 'Dia 2';
  location: string;
}

export const schedule: Session[] = [
  {
    id: '1',
    title: 'Abertura: O Futuro do Corretor de Seguros',
    description: 'Uma visão panorâmica sobre as tendências que moldarão a próxima década.',
    startTime: '09:00',
    endTime: '10:00',
    speakerIds: ['1'],
    track: 'Inovação',
    day: 'Dia 1',
    location: 'Auditório Principal',
  },
  {
    id: '2',
    title: 'Vendas Consultivas na Era Digital',
    description: 'Como usar a tecnologia para humanizar o atendimento e fechar mais negócios.',
    startTime: '10:30',
    endTime: '11:30',
    speakerIds: ['3'],
    track: 'Vendas',
    day: 'Dia 1',
    location: 'Sala 1',
  },
  {
    id: '3',
    title: 'Open Insurance: Oportunidades e Desafios',
    description: 'Entenda como o sistema aberto vai impactar sua corretora.',
    startTime: '14:00',
    endTime: '15:00',
    speakerIds: ['6'],
    track: 'Regulação',
    day: 'Dia 1',
    location: 'Auditório Principal',
  },
  {
    id: '4',
    title: 'Gestão Ágil para Corretoras',
    description: 'Metodologias para aumentar a produtividade da sua equipe.',
    startTime: '09:00',
    endTime: '10:00',
    speakerIds: ['2'],
    track: 'Gestão',
    day: 'Dia 2',
    location: 'Sala 2',
  },
  {
    id: '5',
    title: 'Painel: O Novo Perfil do Consumidor',
    description: 'Debate sobre as mudanças no comportamento de compra de seguros.',
    startTime: '11:00',
    endTime: '12:30',
    speakerIds: ['1', '3', '5'],
    track: 'Vendas',
    day: 'Dia 2',
    location: 'Auditório Principal',
  },
];
