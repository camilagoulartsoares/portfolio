export const sections = ['about', 'experience', 'projects'] as const
export type SectionId = (typeof sections)[number]

export const sectionLabels: Record<SectionId, string> = {
  about: 'Sobre',
  experience: 'Experiência',
  projects: 'Projetos',
}

export type Experience = {
  id: string
  period: string
  title: string
  company: string
  href: string
  type: string
  summary: string
  bullets: string[]
  tags: string[]
}

export type Project = {
  title: string
  description: string
  href: string
  tags: string[]
  image: string | null
}

export const experiences: Experience[] = [
  {
    id: 'dealsafe',
    period: 'Out 2025 — Presente',
    title: 'Front-end Developer Junior II',
    company: 'DealSafe',
    href: 'https://github.com/camilagoulartsoares',
    type: 'Tempo integral',
    summary:
      'Evolução do módulo de criação e execução de árvores de decisão no DealSafe, plataforma no-code para automação de processos e validação inteligente de dados corporativos.',
    bullets: [
      'Implementei controle granular de permissões e rastreabilidade completa de execuções, reduzindo retrabalho em processos críticos de validação.',
      'Otimizei fluxos multi-etapa de validação, diminuindo em ~30% a fricção em operações sensíveis de negócio.',
      'Configurei regras de negócio complexas com foco em auditabilidade e experiência do operador.',
    ],
    tags: ['JavaScript', 'TypeScript', 'React', 'Árvores de decisão'],
  },
  {
    id: 'dealboard',
    period: 'Mar 2025 — Presente',
    title: 'Front-end Developer Junior',
    company: 'DealBoard',
    href: 'https://github.com/camilagoulartsoares',
    type: 'Tempo integral',
    summary:
      'Desenvolvimento frontend do DealBoard, sistema de validação e integração de informações empresariais.',
    bullets: [
      'Desenvolvi funcionalidades de automação de processos, validação de dados e regras de negócio complexas.',
      'Atuei em ciclos de deploy frequentes com alto impacto operacional em ambiente ágil.',
    ],
    tags: ['Angular', 'JavaScript', 'TypeScript', 'CSS'],
  },
  {
    id: 'saxxes',
    period: 'Mai 2024 — Mar 2025',
    title: 'Estágio em Desenvolvimento Frontend',
    company: 'Saxxes',
    href: 'https://github.com/camilagoulartsoares',
    type: 'Estágio',
    summary:
      'Desenvolvimento frontend da Saxxes, plataforma white label para antecipação de recebíveis e gestão financeira.',
    bullets: [
      'Criei componentes reutilizáveis e novas funcionalidades, acelerando entrega de features em até 2 sprints por ciclo.',
      'Realizei integrações com APIs REST e contribuí para a padronização visual e escalabilidade da interface.',
    ],
    tags: ['Angular', 'Tailwind CSS', 'CSS', 'APIs REST'],
  },
  {
    id: 'prefeitura',
    period: 'Jun 2023 — Mai 2024',
    title: 'Desenvolvedora Full Stack',
    company: 'Prefeitura de Itajubá',
    href: 'https://github.com/camilagoulartsoares',
    type: 'Tempo integral · Itajubá, MG',
    summary:
      'Construí do zero uma aplicação web institucional para gestão de licitações públicas, atuando em todo o ciclo de desenvolvimento — 100% do frontend e backend em produção para uso real pela administração municipal.',
    bullets: [
      'Frontend: React, Next.js, TypeScript e SASS com gerenciamento de estado e integração a APIs REST.',
      'Backend: APIs com Node.js, Express.js, Prisma ORM e PostgreSQL, com foco em consistência e segurança de dados públicos.',
    ],
    tags: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Express',
      'Prisma',
      'PostgreSQL',
      'Jest',
    ],
  },
  {
    id: 'automalogica',
    period: 'Mar 2022 — Jun 2023',
    title: 'Estágio em Desenvolvimento Full Stack',
    company: 'Automalógica',
    href: 'https://github.com/camilagoulartsoares',
    type: 'Estágio · Remoto',
    summary:
      'Plataforma para monitoramento e gestão de ativos do setor de energias renováveis.',
    bullets: [
      'Desenvolvi interfaces responsivas e interativas com Vue.js e Vuetify para visualização de dados operacionais em tempo real via APIs REST e GraphQL.',
      'Participei da construção e manutenção de serviços backend com Node.js e Django.',
    ],
    tags: ['Vue.js', 'Vuetify', 'JavaScript', 'CSS', 'Node.js', 'Django', 'GraphQL'],
  },
]

export function createProjects(baseUrl = '/'): Project[] {
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`

  return [
    {
      title: 'Vitrine de Startups',
      description:
        'Plataforma interativa estilo vitrine com filtros dinâmicos, favoritos, paginação, CRUD autenticado e chatbot integrado ao backend. Desenvolvida com Next.js, React e testes em Jest.',
      href: 'https://github.com/camilagoulartsoares/ivc-frontend',
      tags: ['Next.js', 'React', 'TypeScript', 'Jest', 'CSS Modules'],
      image: `${normalizedBase}projects/ivc-frontend.png`,
    },
    {
      title: 'Investidores.vc — Backend',
      description:
        'API RESTful NestJS para autenticação JWT, CRUD de startups, chatbot e cron jobs, com Prisma ORM (SQLite/PostgreSQL). Em produção na Railway.',
      href: 'https://github.com/camilagoulartsoares/ivc-backend',
      tags: ['NestJS', 'Prisma', 'JWT', 'PostgreSQL', 'TypeScript'],
      image: null,
    },
    {
      title: 'InChurch',
      description:
        'E-commerce com listagem paginada, filtros, carrinho, login, CRUD de produtos e páginas de detalhe/usuário, consumindo a API DummyJSON. Feito com Angular, CSS e TypeScript.',
      href: 'https://github.com/camilagoulartsoares/inchurch',
      tags: ['Angular', 'TypeScript', 'CSS', 'JavaScript'],
      image: `${normalizedBase}projects/inchurch.png`,
    },
  ]
}

export const projects = createProjects(
  typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL
    ? import.meta.env.BASE_URL
    : '/',
)
