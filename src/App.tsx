import { useEffect, useState, type CSSProperties } from 'react'
import './App.css'

const sections = ['about', 'experience', 'projects'] as const
type SectionId = (typeof sections)[number]

const experiences = [
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

const projects = [
  {
    title: 'DealSafe — Árvores de decisão',
    description:
      'Módulo no-code de criação e execução de árvores de decisão, com permissões granulares, rastreabilidade de execuções e fluxos multi-etapa de validação.',
    href: 'https://github.com/camilagoulartsoares',
    tags: ['React', 'TypeScript', 'No-code'],
  },
  {
    title: 'DealBoard',
    description:
      'Sistema de validação e integração de informações empresariais, com automação de processos e regras de negócio em ciclos de deploy frequentes.',
    href: 'https://github.com/camilagoulartsoares',
    tags: ['Angular', 'JavaScript'],
  },
  {
    title: 'Saxxes',
    description:
      'Plataforma white label para antecipação de recebíveis e gestão financeira, com componentes reutilizáveis e integrações REST.',
    href: 'https://github.com/camilagoulartsoares',
    tags: ['Angular', 'Tailwind CSS', 'REST'],
  },
  {
    title: 'Gestão de Licitações',
    description:
      'Aplicação institucional full stack para a Prefeitura de Itajubá — frontend e backend em produção para gestão de licitações públicas.',
    href: 'https://github.com/camilagoulartsoares',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
  },
]

function IconGitHub() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function IconLinkedIn() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
    </svg>
  )
}

function IconMail() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
  )
}

export default function App() {
  const [active, setActive] = useState<SectionId>('about')
  const [spot, setSpot] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setSpot({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) setActive(id)
        },
        { rootMargin: '-35% 0px -50% 0px', threshold: 0 },
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <div
      className="site"
      style={
        {
          '--spot-x': `${spot.x}px`,
          '--spot-y': `${spot.y}px`,
        } as CSSProperties
      }
    >
      <div className="spotlight" aria-hidden="true" />

      <div className="layout">
        <header className="sidebar">
          <div>
            <h1 className="name">
              <a href="/portfolio/">Camila Goulart Soares</a>
            </h1>
            <h2 className="role">Front-end Developer</h2>
            <p className="tagline">
              Construo experiências acessíveis e precisas para a web — do
              componente ao deploy.
            </p>

            <nav className="side-nav" aria-label="Seções">
              {sections.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={active === id ? 'is-active' : undefined}
                >
                  <span className="nav-indicator" aria-hidden="true" />
                  <span className="nav-label">
                    {id === 'about' && 'Sobre'}
                    {id === 'experience' && 'Experiência'}
                    {id === 'projects' && 'Projetos'}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <ul className="socials">
            <li>
              <a
                href="https://github.com/camilagoulartsoares"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <IconGitHub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/camilagoulartsoares"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <IconLinkedIn />
              </a>
            </li>
            <li>
              <a
                href="mailto:camilagoulartsoares@users.noreply.github.com"
                aria-label="E-mail"
              >
                <IconMail />
              </a>
            </li>
          </ul>
        </header>

        <main className="content">
          <section id="about" className="section" aria-label="Sobre">
            <div className="section-mobile-title">Sobre</div>
            <div className="prose">
              <p>
                Sou desenvolvedora front-end com foco em produtos digitais de
                alto impacto operacional. Atuo em plataformas de validação,
                automação e gestão de dados — do{' '}
                <strong>DealSafe</strong> e <strong>DealBoard</strong> a
                sistemas institucionais em produção.
              </p>
              <p>
                Já construí do zero uma aplicação full stack para a{' '}
                <strong>Prefeitura de Itajubá</strong>, entreguei features em
                ciclos ágeis na <strong>Saxxes</strong> e trabalhei com
                visualização de dados em tempo real na{' '}
                <strong>Automalógica</strong>. Gosto de interfaces claras,
                componentes reutilizáveis e código que escala com o time.
              </p>
              <p>
                Hoje evoluo módulos no-code, permissões granulares e fluxos
                multi-etapa — sempre com atenção a auditabilidade, performance e
                experiência do operador.
              </p>
            </div>
          </section>

          <section id="experience" className="section" aria-label="Experiência">
            <div className="section-mobile-title">Experiência</div>
            <ol className="experience-list">
              {experiences.map((job) => (
                <li key={job.id} className="experience-item">
                  <div className="experience-card">
                    <header className="experience-meta">
                      <span className="experience-period">{job.period}</span>
                    </header>
                    <div className="experience-body">
                      <h3 className="experience-title">
                        <a href={job.href} target="_blank" rel="noreferrer">
                          <span>
                            {job.title} ·{' '}
                            <span className="company">{job.company}</span>
                          </span>
                          <span className="ext" aria-hidden="true">
                            ↗
                          </span>
                        </a>
                      </h3>
                      <p className="experience-type">{job.type}</p>
                      <p className="experience-summary">{job.summary}</p>
                      <ul className="experience-bullets">
                        {job.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                      <ul className="tags">
                        {job.tags.map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="projects" className="section" aria-label="Projetos">
            <div className="section-mobile-title">Projetos</div>
            <ul className="project-list">
              {projects.map((project) => (
                <li key={project.title} className="project-item">
                  <a
                    className="project-card"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="project-thumb" aria-hidden="true" />
                    <div className="project-body">
                      <h3>
                        <span>{project.title}</span>
                        <span className="ext" aria-hidden="true">
                          ↗
                        </span>
                      </h3>
                      <p>{project.description}</p>
                      <ul className="tags">
                        {project.tags.map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            <p className="resume-link">
              <a
                href="https://github.com/camilagoulartsoares"
                target="_blank"
                rel="noreferrer"
              >
                Ver GitHub completo <span aria-hidden="true">→</span>
              </a>
            </p>
          </section>

          <footer className="footer">
            <p>
              Inspirado no layout de portfólios modernos de engenharia front-end.
              Construído com React, TypeScript e Vite. Tipografia Inter.
            </p>
          </footer>
        </main>
      </div>
    </div>
  )
}
