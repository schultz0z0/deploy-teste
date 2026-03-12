export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
  featured: boolean;
}

export const speakers: Speaker[] = [
  {
    id: '1',
    name: 'Dra. Ana Silva',
    role: 'CEO',
    company: 'InovaSeguros',
    bio: 'Pioneira em insurtechs no Brasil, Ana lidera a revolução digital no mercado de seguros há mais de 15 anos.',
    image: 'https://picsum.photos/seed/ana/400/400',
    socials: { linkedin: '#' },
    featured: true,
  },
  {
    id: '2',
    name: 'Carlos Mendes',
    role: 'Diretor de Inovação',
    company: 'FutureBrokers',
    bio: 'Especialista em transformação digital e novos modelos de negócios para corretoras.',
    image: 'https://picsum.photos/seed/carlos/400/400',
    socials: { linkedin: '#', twitter: '#' },
    featured: true,
  },
  {
    id: '3',
    name: 'Mariana Costa',
    role: 'Head de Vendas',
    company: 'Seguradora Global',
    bio: 'Estrategista de vendas com foco em experiência do cliente e retenção.',
    image: 'https://picsum.photos/seed/mariana/400/400',
    socials: { linkedin: '#', instagram: '#' },
    featured: true,
  },
  {
    id: '4',
    name: 'Roberto Almeida',
    role: 'Fundador',
    company: 'TechRisk',
    bio: 'Engenheiro de dados focado em análise de risco preditiva.',
    image: 'https://picsum.photos/seed/roberto/400/400',
    socials: { linkedin: '#' },
    featured: false,
  },
  {
    id: '5',
    name: 'Juliana Ferreira',
    role: 'Consultora',
    company: 'Independente',
    bio: 'Mentora de corretores de alta performance.',
    image: 'https://picsum.photos/seed/juliana/400/400',
    socials: { linkedin: '#', instagram: '#' },
    featured: false,
  },
  {
    id: '6',
    name: 'Paulo Santos',
    role: 'CTO',
    company: 'OpenInsurance',
    bio: 'Líder técnico na implementação do Open Insurance no Brasil.',
    image: 'https://picsum.photos/seed/paulo/400/400',
    socials: { linkedin: '#' },
    featured: false,
  },
];
