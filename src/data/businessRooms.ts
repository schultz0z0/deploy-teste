export interface BusinessRoomSlot {
  timeLabel?: string;
  patrocinador?: string;
  tema?: string;
  palestrantes?: string;
  moderador?: string;
  painelistas?: string;
  mediador?: string;
  debatedores?: string;
  customContent?: string;
}

export interface BusinessRoom {
  id: string;
  name: string;
  subtitle?: string;
  day28: {
    t1: BusinessRoomSlot; // 14:30 às 15:40
    t2: BusinessRoomSlot; // 15:50 às 17:00
    t3: BusinessRoomSlot; // 17:10 às 18:20
  };
  day29: {
    t1: BusinessRoomSlot; // 14:30 às 15:50
    t2: BusinessRoomSlot; // 15:50 às 17:00 (16H ÀS 17H10)
    t3: BusinessRoomSlot; // 17:10 às 18:20
  };
}

export const businessRoomsData: BusinessRoom[] = [
  // 1. Sala 1 AUDITÓRIO IBDCOR
  {
    id: 'sala-1',
    name: 'Sala 1',
    subtitle: 'AUDITÓRIO IBDCOR',
    day28: {
      t1: {
        patrocinador: 'CAPEMISA',
        tema: 'Tema: Onde estão as próximas oportunidades no Seguro de Pessoas?\n- Descubra novas oportunidades no mercado de seguros que ainda tem muito espaço para crescer.',
        palestrantes: 'Palestrantes: Leonardo Balbino da Silva - Superintendente de Administração e Planejamento Comercial e Paulo Henrique Gomes - Superintendente Regional ES |RJ |SP'
      },
      t2: {
        tema: 'Tema: Auto Frota, Condomínio, Empresarial e Vida:\nConheça as soluções de massificados que a #AXATem',
        palestrantes: 'Abertura: Luciano Calheiros - vice-presidente de Comercial, Marketing e Experiência do Cliente da AXA no Brasil\nPalestrantes: Felipe Granato, Superintendente Comercial Digital, Varejo e Assessorias e Flavio Pires, Gerente de Subscrição Auto Frota'
      },
      t3: {
        tema: 'Tema: Garantia e Responsabilidade Civil: Proteção ao negócio, patrimônio e reputação que a #AXATem',
        palestrantes: 'Abertura: Luciano Calheiros - vice-presidente de Comercial, Marketing e Experiência do Cliente da AXA no Brasil\nPalestrantes: Fabio Scatigno - Superintedente de Seguro Garantia na AXA no Brasil Alessandro Fortunato - Superintendente da AXA no Brasil e Gustavo Carvalho - Diretor Comercial do canal Corretor, Axa no Brasil'
      }
    },
    day29: {
      t1: {
        tema: 'Tema: Reforma Tributária e seus efeitos para o Corretor de Seguros',
        mediador: 'Mediador: Henrique Jorge Duarte Brandão Júnior - Vice-Presidente Fenacor de Relações com o Mercado',
        palestrantes: 'Palestrante: Regis Renzi Coordenador do Comitê Contábil-tributário do Sincor/SP, Representante do CRC/SP em Suzano',
        debatedores: 'Debatedores: Boris Ber - Presidente do Sincor SP, Robert Bittar - Vice Presidente Financeiro Fenacor e Vice-Presidente ENS, e Karini Madeira - Superintendente de Acompanhamento Técnico da CNseg'
      },
      t2: {
        customContent: '16H ÀS 17H10\nTema: ALÉM DO ESPORTE: DESAFIANDO BARREIRAS INVISÍVEIS\nSISTEMA FECOMERCIO RJ SESC / SENAC\n\nPalestrante: FABI ALVIM, Libero da Seleção Brasileira de Volleyball - Campeã Olímpica'
      },
      t3: {
        customContent: ''
      }
    }
  },

  // 2. Sala 2 AUDITÓRIO IBDCOR
  {
    id: 'sala-2',
    name: 'Sala 2',
    subtitle: 'AUDITÓRIO IBDCOR',
    day28: {
      t1: {
        patrocinador: 'PRUDENTIAL',
        tema: 'Tema: O Futuro do Seguro de Vida: Tecnologia aliada de corretores e clientes, inteligência artificial e novas soluções de proteção',
        palestrantes: 'Palestrante: Carlos Cortez - Vice-Presidente da Prudential'
      },
      t2: {
        patrocinador: 'ENS',
        tema: 'Tema: 2035: Preparando o Corretor do Futuro',
        mediador: 'Mediador: Vinicius Porto – Presidente do SINCOR – GO',
        palestrantes: 'Palestrante: Maria Helena Monteiro – Diretora de Ensino da ENS',
        debatedores: 'Debatedores: Karine Brandão – Diretora Comercial – MAPFRE, Rodrigo Bacellar - Presidente da Bradesco Auto/RE e Stênio Max Fernandes de Freitas – Presidente do SINCOR - RN'
      },
      t3: {
        patrocinador: 'CENTAURO',
        tema: 'Tema: SUA CARREIRA PEDE MAIS VIDA - Estratégias para fazer do Seguro de Vida uma grande fonte de receita.',
        palestrantes: 'Palestrantes: Edilaine Silveira - Coordenadora de Treinamento e Desenvolvimento e Benedito Martins - Superintendente Comercial'
      }
    },
    day29: {
      t1: {
        tema: 'Tema: Reforma Tributária e seus efeitos para o Corretor de Seguros',
        mediador: 'Mediador: Henrique Jorge Duarte Brandão Júnior - Vice-Presidente Fenacor de Relações com o Mercado',
        palestrantes: 'Palestrante: Regis Renzi Coordenador do Comitê Contábil-tributário do Sincor/SP, Representante do CRC/SP em Suzano',
        debatedores: 'Debatedores: Boris Ber - Presidente do Sincor SP, Robert Bittar - Vice Presidente Financeiro Fenacor e Vice-Presidente ENS, e Karini Madeira - Superintendente de Acompanhamento Técnico da CNseg'
      },
      t2: {
        customContent: '16H ÀS 17H10\nTema: ALÉM DO ESPORTE: DESAFIANDO BARREIRAS INVISÍVEIS\nSISTEMA FECOMERCIO RJ SESC / SENAC\n\nPalestrante: FABI ALVIM, Libero da Seleção Brasileira de Volleyball - Campeã Olímpica'
      },
      t3: {
        customContent: ''
      }
    }
  },

  // 3. Sala 3 PORTO
  {
    id: 'sala-3',
    name: 'Sala 3',
    subtitle: 'PORTO',
    day28: {
      t1: {
        tema: 'Tema: Estratégia e Autoridade: Como vender mais para o mesmo cliente',
        palestrantes: 'Palestrantes: Emerson Valentim - Diretor Executivo Comercial Brasil do Grupo Porto'
      },
      t2: {
        tema: 'Tema: Novo Portfólio Porto Seguro: cuidado e soluções para cada perfil de cliente',
        palestrantes: 'Palestrantes: Patrícia Chacon - CEO Porto Seguro; Jaime Soares - Diretor Executivo Automóvel da Porto Seguro; Jarbas Medeiros -Diretor Executivo RE, Transporte e Vida da Porto Seguro e Wagner Bisi - Diretor Comercial NO, NE e CO do Grupo Porto.'
      },
      t3: {
        tema: 'Tema: Corretor Empreendedor: Como gerar receita recorrente com a Porto Saúde',
        palestrantes: 'Palestrantes: Vicente Lapenta - Diretor Produto Porto Saúde e João Paulo Cunha - Diretor Comercial RJ e ES do Grupo Porto e Marino Anjos - Diretor Comercial Interior e Litoral Paulista do Grupo Porto.'
      }
    },
    day29: {
      t1: {
        tema: 'Tema: Porto Bank: Como ganhar mais vendendo soluções financeiras e crédito',
        palestrantes: 'Palestrantes: Rafael Boldo, Dir de Desenvolvimento Comercial Porto Bank'
      },
      t2: {
        tema: 'Tema: Influência e Performance: Como usar a tecnologia para oportunidades de vendas',
        palestrantes: 'Palestrantes: Mariana Conti - Gerente de Marketing Institucional do Grupo Porto; Rodrigo Vasconcellos - Diretor Comercial SP Capital e Metropolitana do Grupo Porto.'
      },
      t3: {
        tema: 'Tema: Corretor Mais Phygital: Como fidelizar o seu cliente com a Porto Serviço',
        palestrantes: 'Palestrantes: Lene Araújo - CEO Porto Serviço; Tomás Trabulsi - Diretor Negócios e Parcerias da Porto Serviço; Wesley Andrade - Diretor Comercial MG do Grupo Porto; Paulo Sérgio Rodrigues - Diretor Comercial Sul do Grupo Porto.'
      }
    }
  },

  // 4. Sala 4 MAPFRE
  {
    id: 'sala-4',
    name: 'Sala 4',
    subtitle: 'MAPFRE',
    day28: {
      t1: {
        tema: 'Tema: Conexão Mapfre: estratégia nacional, presença regional',
        painelistas: 'Painelistas: Karine Brandão - Diretora Executiva Comercial, Diego Bifoni - Diretor Territorial MG Rio e Centro Oeste , Guilherme Bini- Diretor Territorial Sul, Leonardo Marins -Diretor Territorial SP e João Vitor Manzano - Diretor Territorial Norte e Nordeste'
      },
      t2: {
        tema: 'Tema: Massificados  - mais valor para cliente e corretor',
        painelistas: 'Painelistas: Andrea Nogueira -Diretora de Seguros Massificados, Ana Claudia Calil -Diretora Comercial e Marketing da Mawdy e João Vitor Manzano -Diretor Territorial Norte e Nordeste'
      },
      t3: {
        tema: 'Tema: Nova Mapfre na prática - mais valor para o corretor',
        painelistas: 'Painelistas: Karine Brandão - Diretora Executiva Comercial, Luiz Padial - Diretor Técnico Executivo e Pedro Haunholter - Superintendente de Processos e Transformação'
      }
    },
    day29: {
      t1: {
        tema: 'Tema: A Nova experiência do Seguro Auto Mapfre',
        painelistas: 'Painelistas: Marcia Resende, superintendente do Produto Automóvel, Pedro Haunholter, superintendente de processos e Transformação Operativa e Leonardo Marins, diretor Territorial SP'
      },
      t2: {
        tema: 'Tema: O novo momento do seguro de vida na Mapfre',
        painelistas: 'Painelistas: Hilca Vaz - Diretora Vida, Previdência e Capitalização e Guilherme Bini -Diretor Territorial Sul'
      },
      t3: {
        tema: 'Tema: Property e Aeronáutico: estratégias que geram valor',
        painelistas: 'Painelistas: Carlos Eduardo Polízio - Superintendente | Aeronáutico, Casco e Transporte , Mauro Caetano - Diretor Empresas E Diego Bifoni -Diretor Territorial MG Rio e Centro Oeste'
      }
    }
  },

  // 5. Sala 5 BRADESCO
  {
    id: 'sala-5',
    name: 'Sala 5',
    subtitle: 'BRADESCO',
    day28: {
      t1: {
        patrocinador: 'Bradesco Auto/RE',
        tema: 'Tema: El Nino : Riscos em Transformação, Oportunidades em Proteção.',
        palestrantes: 'Palestrante: Raquel Cerqueira – Superintendente Sênior da Bradesco Auto/RE'
      },
      t2: {
        patrocinador: 'Bradesco Vida e Previdência',
        tema: 'Tema: "A corrida do planejamento Sucessório : Quem vai falar com seu cliente primeiro e explicar os impactos e os beneficios de uma sucessão bem feita ? Voce corretor ou alguma outra pessoa ?"',
        palestrantes: 'Palestrante: Fábio Magalhães - Diretor da Bradesco Vida e Previdência, Ricardo Campos e Marcelo Rosseti - Superintendentes Seniores da Bradesco Vida e Previdência'
      },
      t3: {
        patrocinador: 'Bradesco Saúde',
        tema: 'Tema:Desafio e oportunidade em seguro saúde',
        palestrantes: 'Palestrante: Flávio Bitter – Diretor Geral da Bradesco Saúde'
      }
    },
    day29: {
      t1: {
        patrocinador: 'Bradesco Auto/RE',
        tema: 'Tema: El Nino : Riscos em Transformação, Oportunidades em Proteção.',
        palestrantes: 'Palestrante: Raquel Cerqueira – Superintendente Sênior da Bradesco Auto/RE'
      },
      t2: {
        patrocinador: 'Bradesco Vida e Previdência',
        tema: 'Tema: "A corrida do planejamento Sucessório : Quem vai falar com seu cliente primeiro e explicar os impactos e os beneficios de uma sucessão bem feita ? Voce corretor ou alguma outra pessoa ?"',
        palestrantes: 'Palestrante: Fábio Magalhães - Diretor da Bradesco Vida e Previdência, Ricardo Campos e Marcelo Rosseti -Superintendentes Seniores da Bradesco Vida e Previdência'
      },
      t3: {
        patrocinador: 'Bradesco Saúde',
        tema: 'Tema: Desafio e oportunidade em seguro saúde',
        palestrantes: 'Palestrante: Maurício Rocha – Superintendente Sênior da Bradesco Saúde'
      }
    }
  },

  // 6. Sala 6 HDI/YELUM
  {
    id: 'sala-6',
    name: 'Sala 6',
    subtitle: 'HDI/YELUM',
    day28: {
      t1: {
        tema: 'Tema: Oportunidades em transporte frente a nova regulamentação e produto RCV',
        palestrantes: 'Palestrante: Marcos Siqueira -Diretor de Seguros Corporativos Grupo HDI'
      },
      t2: {
        tema: 'Tema: Seguro de Vida - Oportunidades para a carteira de todos os Corretores com o Grupo HDI',
        palestrantes: 'Palestrante: Alexandre Vicente - Diretor de Vida, Habitacional e Afinidades'
      },
      t3: {
        tema: 'Tema: Grupo HDI Auto Game Show - Conhecimento que gera vendas',
        palestrantes: 'Palestrante: Carla Machado - Diretora de Auto e Frota, Grupo HDI'
      }
    },
    day29: {
      t1: {
        tema: 'Tema: Mais leads e conversão - Conquiste o RH das empresas com o Grupo HDI',
        palestrantes: 'Palestrante: Tomas Benitez -Gerente Canal Afinidades e Alexandre Moreira -  Diretor Regional RJ/ES, MG e Centro-Oeste I'
      },
      t2: {
        tema: 'Tema: Oceano de Oportunidades em Ramos Elementares',
        palestrantes: 'Palestrante: Alexandre Moreira - Diretor Regional RJ/ES, MG e Centro-Oeste'
      },
      t3: {
        tema: 'Tema: Assistência 24h Grupo HDI - Um diferencial estratégico para Corretores',
        palestrantes: 'Palestrante: Marta Miranda - Superintendente de Rede de Prestadores'
      }
    }
  },

  // 7. Sala 7 ENS
  {
    id: 'sala-7',
    name: 'Sala 7',
    subtitle: 'ENS',
    day28: {
      t1: {
        tema: 'Tema: Corretor Despachante Morreu – E agora?',
        palestrantes: 'Palestrante: Samy Hazan -Professor ENS, Consultor da SOSA Global Innovation, Corretor Especializado em Seguro Viagem'
      },
      t2: {
        tema: 'Tema: TechVillage em Debate: Inovação na Prática para o Corretor de Seguros.',
        moderador: 'Moderador : Victor Bistritzki -PhD Senior, Associate - SOSA'
      },
      t3: {
        tema: 'Tema: IA Depois do Hype – O futuro do Corretor de Seguros na Era dos Agentes Inteligentes',
        palestrantes: 'Palestrante: Celso Brandão -Professor ENS, fundador AVEX AI Lab'
      }
    },
    day29: {
      t1: {
        tema: 'Tema: IA Depois do Hype – O futuro do Corretor de Seguros na Era dos Agentes Inteligentes',
        palestrantes: 'Palestrante: Celso Brandão -Professor ENS, fundador AVEX AI Lab'
      },
      t2: {
        tema: 'Tema: Corretor Despachante Morreu – E agora?',
        palestrantes: 'Palestrante: Samy Hazan - Professor ENS, Consultor da SOSA Global Innovation, Corretor Especializado em Seguro Viagem'
      },
      t3: {
        tema: 'Tema: Viajando com a ENS',
        palestrantes: 'Palestrante: Ronny Martins -Gerente de Produtos ENS'
      }
    }
  },

  // 8. Sala A ICATU
  {
    id: 'sala-a',
    name: 'Sala A',
    subtitle: 'ICATU',
    day28: {
      t1: {
        tema: 'Tema: Da venda pontual à carteira que cresce: como Vida e Previdência podem levar o corretor mais longe',
        painelistas: 'Painelistas: Talita Raupp – Superintendente de Produtos Previdência e Capitalização, Gustavo Arruda – Superintendente de Produtos Vida',
        mediador: 'Mediador: Marcelo Oliveira – Diretor Comercial da Filial RJ e ES'
      },
      t2: {
        tema: 'Tema: Vida e finitude: Como transformar uma necessidade invisível em decisão de proteção',
        painelistas: 'Painelistas: Gustavo Arruda – Superintendente de Produtos Vida; Alessandro Castro Paiva – Consultor de Vendas Consultivas',
        mediador: 'Mediador: Natália Maciel – Gerente de Marketing'
      },
      t3: {
        tema: 'Tema: Desmistificando o Seguro de Vida: o próximo cliente já está na sua carteira.',
        painelistas: 'Painelistas: Henrique Jenkins - Diretor Comercial da Filial NO e NE e Marcelo Oliveira – Diretor Comercial da Filial RJ e ES'
      }
    },
    day29: {
      t1: { customContent: '' },
      t2: { customContent: '' },
      t3: { customContent: '' }
    }
  },

  // 9. Sala B MAG
  {
    id: 'sala-b',
    name: 'Sala B',
    subtitle: 'MAG',
    day28: {
      t1: {
        tema: 'Tema: "O Corretor no centro da decisão" - Por que a orientação nunca foi tão necessária?',
        palestrantes: 'Palestrante: Marco Antonio Gonçalves - Presidente do Conselho Consultivo MAG'
      },
      t2: {
        tema: 'Tema: O Futuro do Especialista em Proteção Financeira e como a MAG pode impulsionar o Mercado',
        palestrantes: 'Palestrante: Waldemir Fiorio Jr -Diretor de Mercado'
      },
      t3: {
        customContent: ''
      }
    },
    day29: {
      t1: {
        tema: 'Tema: Como se tornar um MAG Expert e ser um Especialista em Proteção Financeira.',
        palestrantes: 'Palestrante: Claudemir Moura Especialista MAG'
      },
      t2: {
        tema: 'Tema: Como se tornar um MAG Expert e ser um Especialista em Proteção Financeira.',
        palestrantes: 'Palestrante: Claudemir Moura Especialista MAG'
      },
      t3: {
        customContent: ''
      }
    }
  },

  // 10. Sala C ALLIANZ
  {
    id: 'sala-c',
    name: 'Sala C',
    subtitle: 'ALLIANZ',
    day28: {
      t1: {
        tema: 'Tema: Seguro de Frota como diferencial competitivo',
        palestrantes: 'Palestrante: Lívia Prata - Diretora do produto Frota da Allianz Seguros'
      },
      t2: {
        tema: 'Tema: Seguro de Vida: Proteção para o seu bolso',
        palestrantes: 'Palestrante: Caio Souza - Diretor de Vida da Allianz Seguros'
      },
      t3: {
        tema: 'Tema: Oportunidades e desafios do transporte',
        palestrantes: 'Palestrante: Leandro Mihara - Diretor de Transportes da Allianz Seguros'
      }
    },
    day29: {
      t1: {
        tema: 'Tema: Patrimoniais e Engenharia: Riscos e oportunidades',
        palestrantes: 'Palestrante: Fabio Maretti - Diretor de Patrimoniais e Prevenção de Perda da Allianz Seguros'
      },
      t2: {
        tema: 'Tema: Do desafio à oportunidade em automóveis',
        palestrantes: 'Palestrante: Ana Bokel - Diretora de Automóveis da Allianz Seguros'
      },
      t3: {
        tema: 'Tema: condomínio, as empresas e as residências mudaram – novas oportunidades para proteção patrimonial',
        palestrantes: 'Palestrante: Verônica Gomes - Diretora de Massificados da Allianz Seguros'
      }
    }
  },

  // 11. Sala D TOKIO
  {
    id: 'sala-d',
    name: 'Sala D',
    subtitle: 'TOKIO',
    day28: {
      t1: {
        tema: 'Tema: Tecnologias e IA como aliadas do Corretor para alavancar eficiência e produtividade em seus negócios!',
        palestrantes: 'Palestrante: Dennis Milan - Diretor de Tecnologia, Digital e Inovação'
      },
      t2: {
        tema: 'Tema: Seguro de Vida – Viver a Longevidade com Segurança, Dignidade e Proteção',
        palestrantes: 'Palestrante: Rosangela Spak - Superintendente Comercial de Vida'
      },
      t3: {
        tema: 'Tema: O Novo Papel do Corretor na Proteção e Crescimento das Empresas – Oportunidades de Negócios em produtos PJ',
        palestrantes: 'Palestrante: Renato Almeida - Superintendente Comercial Produtos PJ e Grupos Econômicos'
      }
    },
    day29: {
      t1: {
        tema: 'Tema: Tecnologias e IA como aliadas do Corretor para alavancar eficiência e produtividade em seus negócios!',
        palestrantes: 'Palestrante: Dennis Milan - Diretor de Tecnologia, Digital e Inovação'
      },
      t2: {
        tema: 'Tema: Do Risco Climático à Proteção Social: O novo papel do Seguro Residencial',
        palestrantes: 'Palestrante: Magda Truvilhano - Superintendente de Produtos RD Massificados'
      },
      t3: {
        tema: 'Tema: Seguro Auto: do Básico ao Inteligente para Gerar Mais Valor e Resultado',
        palestrantes: 'Palestrante: Keila Farias - Superintendente de Produto Auto'
      }
    }
  }
];
