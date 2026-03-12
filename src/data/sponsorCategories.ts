// Patrocinadores (Fechado)
import fechado1 from '../Patrocinadores/fechado/Novo-Projeto-2024-03-11T092150.858-qljgauv2m6paqetbifi9jnwgca7a097rj0k23kth00.png';
import fechado2 from '../Patrocinadores/fechado/Novo-Projeto-2024-03-11T114613.098-qljgavsw73chjpc6rglq1t61apfwuwts9ogwj2pm0e.png';
import fechado3 from '../Patrocinadores/fechado/Novo-Projeto-2024-03-21T161023.542-qljuzqpuufx8igvkquctns0wo7x10tl5vk2in8d3py.png';
import fechado4 from '../Patrocinadores/fechado/Selo Turma Confirmada.png';
import fechado5 from '../Patrocinadores/fechado/UNIMED-2-qljgazk8ci3jj6x7asazjphau82w2bgwugsl0qcpw6.png';
import fechado6 from '../Patrocinadores/fechado/c6seg-qrhhzxyep6khwyqw73rb217i44d4jiww5iko6h9dzq.png';
import fechado7 from '../Patrocinadores/fechado/capemisa-2-qljgaxokkrf26x9gghez6soyhh6nab18xxrvhmmtny.png';
import fechado8 from '../Patrocinadores/fechado/hdi-y-qte7anxrb79aw3atgav5khxv0soogc8ly01rk6v3ji.png';
import fechado9 from '../Patrocinadores/fechado/icatu-1-qljgaxokkrf26x9gghez6soyhh6nab18xxrvhmmtny.png';
import fechado10 from '../Patrocinadores/fechado/image-2024-05-20T093356.166-qoftko6u7rxh45hcile7lbdqirxn868ryu7m0cs028.png';
import fechado11 from '../Patrocinadores/fechado/ituram-qljgazk8ci3jj6x7asazjphau82w2bgwugsl0qcpw6.png';
import fechado12 from '../Patrocinadores/fechado/logo-pottencial-qrhhzyw8w0ls8kpj1m5xmiyypi8hr80mhn85nr7zti.png';
import fechado13 from '../Patrocinadores/fechado/master-ens-qljgatx8fco0esuonx3mz64zqwbwsk416vwkmauv68.png';
import fechado14 from '../Patrocinadores/fechado/novo-porto-qljgatx8fco0esuonx3mz64zqwbwsk416vwkmauv68.png';
import fechado15 from '../Patrocinadores/fechado/tokio-2-qljgauv2m6paqetbifi9jnwgca7a097rj0k23kth00.png';
import fechado16 from '../Patrocinadores/fechado/zurich-1-qljgawqqdxdrvbatlz0cmaxhw3ba2lxilt4e0co7u6.png';

// Apoio Institucional
import apoioInst2 from '../Patrocinadores/Apoio Institucional/ibracor-2-qljgb1fw48rtiac7dp9pmuyu96qf6lzr0jfo7yx82e.png';

// Organização
import org1 from '../Patrocinadores/Organização/logo-idealizar-light-qtppqaza9as8jna6lw72iq1vvu7vco8uotyqi5wl4w.png';

// Realização
import real1 from '../Patrocinadores/Realização/fenacor2-qjimynqkha11u6okw8yidn138sf5ngpd08kkpf4mww.png';
import real2 from '../Patrocinadores/Realização/sincor-qjimwyn251pevj5bt0jrdkg4mqsar4yt3u60ifn85c.png';

// Seguradoras Oficiais
import seg1 from '../Patrocinadores/Seguradoras Oficiais/capemisa-2-qljgaxogx7327phvfye76mtlgd76ix7wfu702wcf7k.png';
import seg2 from '../Patrocinadores/Seguradoras Oficiais/tokio-2-qljgauuycoz78vlywf6bh5j7o7l2vtwpfg8jn2glq8.png';

export interface SponsorCategory {
  title: string;
  size: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  sponsors: {
    id: string;
    name: string;
    logo: string;
    url: string;
  }[];
}

export const sponsorCategories: SponsorCategory[] = [
  {
    title: 'Patrocinadores',
    size: 'lg',
    sponsors: [
      { id: 'f1', name: 'Patrocinador 1', logo: fechado1, url: '#' },
      { id: 'f2', name: 'Patrocinador 2', logo: fechado2, url: '#' },
      { id: 'f3', name: 'Patrocinador 3', logo: fechado3, url: '#' },
      { id: 'f4', name: 'Selo Turma Confirmada', logo: fechado4, url: '#' },
      { id: 'f5', name: 'Unimed', logo: fechado5, url: '#' },
      { id: 'f6', name: 'C6 Seg', logo: fechado6, url: '#' },
      { id: 'f7', name: 'Capemisa', logo: fechado7, url: '#' },
      { id: 'f8', name: 'HDI', logo: fechado8, url: '#' },
      { id: 'f9', name: 'Icatu', logo: fechado9, url: '#' },
      { id: 'f10', name: 'Patrocinador 10', logo: fechado10, url: '#' },
      { id: 'f11', name: 'Ituram', logo: fechado11, url: '#' },
      { id: 'f12', name: 'Pottencial', logo: fechado12, url: '#' },
      { id: 'f13', name: 'ENS', logo: fechado13, url: '#' },
      { id: 'f14', name: 'Porto', logo: fechado14, url: '#' },
      { id: 'f15', name: 'Tokio Marine', logo: fechado15, url: '#' },
      { id: 'f16', name: 'Zurich', logo: fechado16, url: '#' },
    ]
  },
  {
    title: 'Apoio Institucional',
    size: 'sm',
    sponsors: [
      { id: 'ai2', name: 'Ibracor', logo: apoioInst2, url: '#' },
    ]
  },
  {
    title: 'Seguradoras Oficiais',
    size: 'lg',
    sponsors: [
      { id: 's1', name: 'Capemisa', logo: seg1, url: '#' },
      { id: 's2', name: 'Tokio Marine', logo: seg2, url: '#' },
    ]
  },
  {
    title: 'Realização',
    size: 'sm',
    sponsors: [
      { id: 'r1', name: 'Fenacor', logo: real1, url: '#' },
      { id: 'r2', name: 'Sincor', logo: real2, url: '#' },
    ]
  },
  {
    title: 'Organização',
    size: 'sm',
    sponsors: [
      { id: 'o1', name: 'Idealizar', logo: org1, url: '#' },
    ]
  },
];
