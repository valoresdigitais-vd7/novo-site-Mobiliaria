import type { Product, Testimonial, NavLink } from './types';

export const SITE_NAV_LINKS: NavLink[] = [
  { name: 'Início', href: '/' },
  { name: 'Blog', href: '/blog' }
];

export const LANDING_NAV_LINKS: NavLink[] = [
  { name: 'Início', href: '/' },
  { name: 'A Solução', href: '#problem-solution' },
  { name: 'Benefícios', href: '#benefits' },
  { name: 'Depoimentos', href: '#testimonials' },
  { name: 'Planos', href: '#investment' },
  { name: 'FAQ', href: '#faq' },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Plano Mococa',
    price: 'Imóveis a partir de R$ 350.000',
    features: [
      'Foco: Compra da primeira moradia',
      'Pré‑qualificação bancária CEF/Bradesco',
      'Simulação de financiamento personalizada',
      'Tour guiado e acompanhamento até a entrega das chaves'
    ],
    isFeatured: true,
  },
  {
    id: 2,
    name: 'Plano Ribeirão Preto',
    price: 'Economia de até 40%',
    features: [
      'Foco: Arbitragem de custo e qualidade de vida',
      'Calculadora de economia “Mude para Mococa”',
      'Consultoria de viabilidade e ROI imobiliário',
      'Atendimento híbrido (online + presencial)'
    ],
  },
  {
    id: 3,
    name: 'Plano Caconde',
    price: 'Rentabilidade de 8–12% ao ano',
    features: [
      'Foco: Investidor agro e renda passiva',
      'Imóveis rurais e de campo com valorização patrimonial',
      'Gestão de carteira e análise de ROI',
      'Agendamento de tour de investimento'
    ],
  },
  {
    id: 4,
    name: 'Plano Capitólio',
    price: 'Imóveis de lazer entre R$ 1 mi – R$ 2,5 mi',
    features: [
      'Foco: Lazer e investimento premium',
      'Casas e terrenos no Mar de Minas',
      'Suporte completo para compra e legalização',
      'Serviço de concierge e locação de temporada'
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Com a Favam Imóveis, consegui sair do aluguel em 20 dias. O processo de pré‑qualificação foi rápido e transparente.',
    author: 'Carla Menezes',
    role: 'Compradora – Mococa/SP',
    avatarUrl: 'https://picsum.photos/id/1005/100/100',
  },
  {
    quote: 'Vendemos nossa casa em Ribeirão e investimos em Mococa com rentabilidade acima do esperado. Atendimento consultivo e muito humano.',
    author: 'Ricardo e Daniela Tavares',
    role: 'Investidores – Ribeirão Preto/SP',
    avatarUrl: 'https://picsum.photos/id/1006/100/100',
  },
  {
    quote: 'Investi em um terreno em Caconde e já valorizou mais de 25% em um ano. A consultoria da Favam foi decisiva.',
    author: 'Paulo G. Andrade',
    role: 'Produtor Rural – Caconde/SP',
    avatarUrl: 'https://picsum.photos/id/1007/100/100',
  },
  {
    quote: 'Nosso refúgio em Capitólio é um sonho realizado. Tudo correu perfeitamente, do tour até o financiamento.',
    author: 'Marina Campos',
    role: 'Empresária – Belo Horizonte/MG',
    avatarUrl: 'https://picsum.photos/id/1008/100/100',
  },
];

export const FAQ_DATA = [
  {
    question: 'Como funciona a pré‑qualificação bancária?',
    answer: 'Após preencher o formulário, nossa equipe envia sua documentação para análise nas instituições parceiras (CEF, Bradesco). O resultado sai em até 48h com simulação personalizada.'
  },
  {
    question: 'Posso financiar imóveis fora da minha cidade?',
    answer: 'Sim. Trabalhamos com clientes de todo o Brasil interessados em imóveis em Mococa, Ribeirão Preto, Caconde e Capitólio.'
  },
  {
    question: 'A Favam cobra taxas adicionais no processo?',
    answer: 'Não. Nossos honorários já estão incluídos na comissão padrão de corretagem e são pagos apenas após a conclusão do negócio.'
  },
  {
    question: 'Posso agendar um tour presencial?',
    answer: 'Claro! Disponibilizamos tours guiados por especialistas, com transporte e acompanhamento técnico. Basta agendar pelo WhatsApp Business.'
  },
  {
    question: 'Vocês oferecem suporte pós‑venda?',
    answer: 'Sim. O acompanhamento continua após a compra, com apoio em documentação, vistoria e até gestão de locação se desejado.'
  },
];

export const FOOTER_LINKS = {
  company: {
    name: 'Favam Imóveis',
    description: 'Imobiliária especializada em oportunidades regionais de alto desempenho. Presença em Mococa, Ribeirão Preto, Caconde e Capitólio.',
    cnpj: 'CNPJ: 38.765.214/0001-52',
    address: 'Rua Coronel Diogo, 245 – Centro, Mococa/SP',
  },
  support: [
    { name: 'contato@favamimoveis.com.br', href: 'mailto:contato@favamimoveis.com.br' },
    { name: '(19) 99999‑5555', href: 'tel:+5519999995555' },
    { name: 'WhatsApp Business', href: 'https://wa.me/5519999995555' },
  ],
  legal: [
    { name: 'Política de Privacidade', href: '/politica-de-privacidade' },
    { name: 'Termos de Uso', href: '/termos-de-uso' },
  ],
  enterprise: [
    { name: 'Sobre a Favam', href: '/sobre' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contato', href: '/contato' },
  ],
};
