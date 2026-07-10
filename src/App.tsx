import type { CSSProperties } from 'react'
import './App.css'

const projects = [
  {
    title: 'Rekognition',
    blurb: 'Interface e fluxo para reconhecimento visual com feedback em tempo real.',
    tags: ['React', 'API', 'UX'],
    href: 'https://github.com/camilagoulartsoares',
  },
  {
    title: 'DealSafe',
    blurb: 'Produto digital focado em clareza, confiança e conversão.',
    tags: ['Front-end', 'Produto'],
    href: 'https://github.com/camilagoulartsoares',
  },
  {
    title: 'Widget Frontend',
    blurb: 'Componentes embutíveis, leves e fáceis de integrar em outros produtos.',
    tags: ['TypeScript', 'Vite'],
    href: 'https://github.com/camilagoulartsoares',
  },
]

export default function App() {
  return (
    <div className="page">
      <div className="atmosphere" aria-hidden="true" />

      <header className="nav">
        <a className="nav-brand" href="#topo">
          Camila Goulart
        </a>
        <nav className="nav-links" aria-label="Principal">
          <a href="#trabalhos">Trabalhos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main id="topo">
        <section className="hero">
          <p className="hero-kicker">Desenvolvedora front-end</p>
          <h1 className="hero-name">
            Camila
            <br />
            Goulart Soares
          </h1>
          <p className="hero-lead">
            Construo interfaces claras, rápidas e com personalidade — do
            protótipo ao deploy.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#trabalhos">
              Ver trabalhos
            </a>
            <a className="btn btn-ghost" href="#contato">
              Falar comigo
            </a>
          </div>
        </section>

        <section className="section" id="trabalhos">
          <div className="section-head">
            <h2>Trabalhos</h2>
            <p>Seleção de projetos recentes. Links apontam para o GitHub.</p>
          </div>

          <ul className="project-list">
            {projects.map((project, index) => (
              <li
                key={project.title}
                className="project"
                style={{ '--i': index } as CSSProperties}
              >
                <a href={project.href} target="_blank" rel="noreferrer">
                  <span className="project-index">0{index + 1}</span>
                  <div className="project-body">
                    <h3>{project.title}</h3>
                    <p>{project.blurb}</p>
                    <ul className="tags">
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                  <span className="project-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="section about" id="sobre">
          <div className="section-head">
            <h2>Sobre</h2>
          </div>
          <p className="about-text">
            Sou Camila — desenvolvedora focada em front-end com React, TypeScript
            e atenção a detalhe visual. Gosto de transformar briefs em
            experiências que carregam bem no mobile, performam no build e
            comunicam a marca sem ruído.
          </p>
        </section>

        <section className="section contact" id="contato">
          <div className="section-head">
            <h2>Contato</h2>
            <p>Aberto a projetos, colaborações e conversas.</p>
          </div>
          <div className="contact-row">
            <a
              className="contact-link"
              href="https://github.com/camilagoulartsoares"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="contact-link"
              href="mailto:camilagoulartsoares@users.noreply.github.com"
            >
              E-mail
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Camila Goulart Soares</p>
      </footer>
    </div>
  )
}
