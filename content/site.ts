/**
 * Conteúdo público do portfólio. Dados sensíveis, vínculos e métricas nunca são presumidos.
 * Marque claramente cases profissionais em andamento e conceitos ainda não implementados.
 */
export const site = {
  name: "Camila Soares",
  role: "Desenvolvedora Full Stack",
  tagline: "Transformo requisitos complexos em soluções web escaláveis, seguras e de impacto real.",
  experience: "4+",
  /** URL pública canônica (GitHub Pages). Usada em SEO/OpenGraph. */
  url: "https://camilagoulartsoares.github.io/portfolio",
  email: "", // preencha com seu contato público — vazio = botão "copiar convite"
  github: "https://github.com/camilagoulartsoares",
  linkedin: "https://www.linkedin.com/in/camilagoulartsoares",
};

export const navigation = [
  {href: "/", label: "Início", index: "00", descriptor: "O portal"},
  {href: "/manifesto", label: "Manifesto", index: "01", descriptor: "O pensamento"},
  {href: "/work", label: "Projetos", index: "02", descriptor: "Os universos"},
  {href: "/journey", label: "Trajetória", index: "03", descriptor: "A evolução"},
  {href: "/system", label: "Stack", index: "04", descriptor: "O ecossistema"},
  {href: "/lab", label: "Laboratório", index: "05", descriptor: "O inesperado"},
  {href: "/contact", label: "Contato", index: "06", descriptor: "A conexão"},
];

export type ProjectType = "professional" | "personal" | "concept";
export type ProjectVisual = "atlas" | "fission" | "quinto" | "spectra" | "nexus";
export interface Project {
  id: string;
  slug: string;
  code: string;
  status: string;
  type: ProjectType;
  category: string;
  title: string;
  subtitle: string;
  short: string;
  challenge: string;
  approach: string[];
  impact: string;
  stack: string[];
  color: "acid" | "lilac" | "sky" | "peach";
  visual: ProjectVisual;
  year: string;
  number: string;
  disclaimer: string;
  /**
   * Campos opcionais: só preencha com material público e verificável.
   * Nada aqui é renderizado enquanto estiver ausente.
   */
  links?: {repo?: string; demo?: string};
  /** Caminhos relativos a /public, ex.: "projects/atlas-01.png". */
  screenshots?: {src: string; alt: string}[];
  /** Métricas com fonte/medição identificável. Nunca estimativas. */
  metrics?: {label: string; value: string; source: string}[];
  learnings?: string[];
}

/** Prefixa caminhos de /public com o basePath (GitHub Pages serve em /portfolio). */
export function asset(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}/${path.replace(/^\/+/, "")}`;
}

export const works: Project[] = [
  {
    id: "01", number: "001", code: "ATLAS / DATA SYSTEMS", slug: "atlas-relatorios",
    status: "CASE PROFISSIONAL · EM REVISÃO", type: "professional", year: "2026",
    category: "BACKEND / DADOS / PERFORMANCE", title: "ATLAS", subtitle: "Dados em escala. Decisões precisas.",
    short: "Evolução de relatórios analíticos com regras de negócio complexas, atenção ao desempenho e à integridade das informações.",
    challenge: "Consultas sobre grandes volumes de informação precisam respeitar regras de elegibilidade, filtros, isolamento e consistência sem comprometer a experiência.",
    approach: ["Investigar consultas, pontos de contenção e gargalos de processamento.", "Revisar cenários de borda e preservação das regras de negócio.", "Examinar estratégias de performance e regressão sem alterar o contrato do relatório.", "Considerar experiências de consulta e exportação mais previsíveis."],
    impact: "Trabalho técnico em evolução e revisão. Sem alegação de ganho de desempenho até que exista medição aprovada.",
    stack: ["PHP", "Symfony", "SQL", "MySQL", "Docker"], color: "acid", visual: "atlas",
    disclaimer: "Narrativa técnica de alto nível, sem código, dados privados ou resultados não validados de projeto interno."
  },
  {
    id: "02", number: "002", code: "FISSION / DOCUMENT ENGINE", slug: "fission-pdf-engine",
    status: "CASE PROFISSIONAL · EM EVOLUÇÃO", type: "professional", year: "2026",
    category: "ARQUITETURA / PDF / UX", title: "FISSION", subtitle: "Complexidade dividida. Controle multiplicado.",
    short: "Conceituação de infraestrutura para geração de documentos extensos em partes e estados de progresso mais claros para usuários.",
    challenge: "Exportações volumosas podem exigir arquitetura diferente de um download tradicional, incluindo comunicação clara do estado de preparação.",
    approach: ["Separar infraestrutura genérica das integrações específicas de relatórios.", "Estruturar geração e entrega em partes com segurança.", "Projetar feedback de preparação, conclusão e abertura dos arquivos.", "Preservar compatibilidade e comportamento dos demais relatórios."],
    impact: "Evolução em andamento; nenhum tempo de processamento ou redução de falhas é apresentado como resultado confirmado.",
    stack: ["PHP", "Symfony", "PDF", "Docker", "JavaScript"], color: "lilac", visual: "fission",
    disclaimer: "Estudo narrativo sobre um trabalho em curso; diagramas da vitrine são ilustrações conceituais."
  },
  {
    id: "03", number: "003", code: "QUINTO / PERSONAL PRODUCT", slug: "quinto-bill-signal",
    status: "CONCEITO PESSOAL · NÃO IMPLEMENTADO", type: "concept", year: "IDEIA",
    category: "PRODUTO / AUTOMAÇÃO / FINTECH", title: "QUINTO", subtitle: "Suas contas. Antes da data.",
    short: "Ideia para um organizador de pagamentos conectado a uma planilha, com alertas no quinto dia útil e visão das próximas contas.",
    challenge: "Transformar uma planilha de contas em um fluxo simples de acompanhamento, com datas úteis e alertas confiáveis.",
    approach: ["Desenhar importação de dados de planilha sob autorização do usuário.", "Calcular o quinto dia útil considerando calendário e feriados aplicáveis.", "Planejar lembretes, confirmação de pagamento e visão das pendências.", "Explorar autenticação, privacidade e prevenção de notificações duplicadas."],
    impact: "Projeto conceitual, ainda sem aplicação publicada, integração real ou métricas.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"], color: "sky", visual: "quinto",
    disclaimer: "Ideia de produto em fase conceitual. Interface ilustrativa, sem backend funcional neste portfólio."
  },
  {
    id: "04", number: "004", code: "SPECTRA / CREATIVE ENGINEERING", slug: "spectra-experience",
    status: "PROJETO PESSOAL · EM DESENVOLVIMENTO", type: "personal", year: "2026",
    category: "FRONTEND / INTERAÇÃO / DESIGN", title: "SPECTRA", subtitle: "Um portfólio que não pede para ser rolado.",
    short: "Este próprio experimento: um portfólio em capítulos com navegação não linear, linguagem visual própria e interfaces responsivas.",
    challenge: "Demonstrar engenharia e visão de produto sem transformar a experiência em um currículo convencional ou sacrificar acessibilidade.",
    approach: ["Arquitetar múltiplas rotas e componentes reutilizáveis.", "Prototipar motion design com animações acessíveis.", "Construir representações gráficas de sistemas com CSS e SVG.", "Manter o conteúdo desacoplado do layout para evolução contínua."],
    impact: "Projeto de portfólio em desenvolvimento. Esta experiência é a demonstração navegável; performance e acessibilidade dependem de validação.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion"], color: "lilac", visual: "spectra",
    links: {repo: "https://github.com/camilagoulartsoares/portfolio"},
    disclaimer: "Trabalho pessoal em construção. Não há dados de conversão, tráfego ou resultado atribuídos."
  },
  {
    id: "05", number: "005", code: "NEXUS / INTEGRATION STUDY", slug: "nexus-integration-lab",
    status: "EXPERIMENTO CONCEITUAL · NÃO IMPLEMENTADO", type: "concept", year: "IDEIA",
    category: "SISTEMAS / APIS / OBSERVABILIDADE", title: "NEXUS", subtitle: "Tudo se conecta. Nada se perde.",
    short: "Exploração de um painel para visualizar eventos, integrações e estados de serviços em um sistema distribuído.",
    challenge: "Dar visibilidade a fluxos de eventos, falhas de comunicação e dependências de integrações sem sobrecarregar a interface.",
    approach: ["Modelar eventos, contratos e rastreamento como hipótese de produto.", "Desenhar uma linguagem visual para conexões e saúde dos serviços.", "Planejar filtros, histórico e tratamento de falhas.", "Validar posteriormente viabilidade técnica e utilidade com usuários."],
    impact: "Exploração visual, não um sistema implantado nem um case de experiência profissional.",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "React"], color: "peach", visual: "nexus",
    disclaimer: "Concept art e proposta de produto, sem implementação de API ou observabilidade real."
  }
];

export const techGroups = [
  {id: "backend", title: "Lógica & serviços", caption: "O motor", color: "acid", tech: ["PHP", "Symfony", "Node.js", "TypeScript"]},
  {id: "frontend", title: "Interfaces & produto", caption: "A experiência", color: "lilac", tech: ["Angular", "React", "Vue.js", "TypeScript"]},
  {id: "data", title: "Dados & persistência", caption: "A estrutura", color: "sky", tech: ["PostgreSQL", "MySQL", "SQL"]},
  {id: "delivery", title: "Ambiente & entrega", caption: "A operação", color: "peach", tech: ["Docker", "Git", "Integração entre sistemas"]},
];
