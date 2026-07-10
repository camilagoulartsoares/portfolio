<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import {
  experiences,
  projects,
  sectionLabels,
  sections,
  type SectionId,
} from './data/portfolio'

const active = ref<SectionId>('about')
const spot = ref({ x: 0, y: 0 })

let observers: IntersectionObserver[] = []

function onMove(event: MouseEvent) {
  spot.value = { x: event.clientX, y: event.clientY }
}

onMounted(() => {
  window.addEventListener('mousemove', onMove)

  observers = sections.map((id) => {
    const el = document.getElementById(id)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) active.value = id
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: 0 },
    )
    if (el) observer.observe(el)
    return observer
  })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMove)
  observers.forEach((observer) => observer.disconnect())
})
</script>

<template>
  <div
    class="site"
    :style="{
      '--spot-x': `${spot.x}px`,
      '--spot-y': `${spot.y}px`,
    }"
  >
    <div class="spotlight" aria-hidden="true" />

    <div class="layout">
      <header class="sidebar">
        <div>
          <h1 class="name">
            <a href="/portfolio/">Camila Goulart Soares</a>
          </h1>
          <h2 class="role">Front-end Developer</h2>
          <p class="tagline">
            Construo experiências acessíveis e precisas para a web — do
            componente ao deploy.
          </p>

          <nav class="side-nav" aria-label="Seções">
            <a
              v-for="id in sections"
              :key="id"
              :href="`#${id}`"
              :class="{ 'is-active': active === id }"
            >
              <span class="nav-indicator" aria-hidden="true" />
              <span class="nav-label">{{ sectionLabels[id] }}</span>
            </a>
          </nav>
        </div>

        <ul class="socials">
          <li>
            <a
              href="https://github.com/camilagoulartsoares"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/camilagoulartsoares"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="mailto:camilagoulartsoares@users.noreply.github.com"
              aria-label="E-mail"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </a>
          </li>
        </ul>
      </header>

      <main class="content">
        <section id="about" class="section" aria-label="Sobre">
          <div class="section-mobile-title">Sobre</div>
          <div class="prose">
            <p>
              Sou desenvolvedora front-end com foco em produtos digitais de alto
              impacto operacional. Atuo em plataformas de validação, automação e
              gestão de dados — do <strong>DealSafe</strong> e
              <strong>DealBoard</strong> a sistemas institucionais em produção.
            </p>
            <p>
              Já construí do zero uma aplicação full stack para a
              <strong>Prefeitura de Itajubá</strong>, entreguei features em
              ciclos ágeis na <strong>Saxxes</strong> e trabalhei com
              visualização de dados em tempo real na
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

        <section id="experience" class="section" aria-label="Experiência">
          <div class="section-mobile-title">Experiência</div>
          <ol class="experience-list">
            <li
              v-for="job in experiences"
              :key="job.id"
              class="experience-item"
            >
              <div class="experience-card">
                <header class="experience-meta">
                  <span class="experience-period">{{ job.period }}</span>
                </header>
                <div class="experience-body">
                  <h3 class="experience-title">
                    <a :href="job.href" target="_blank" rel="noreferrer">
                      <span>
                        {{ job.title }} ·
                        <span class="company">{{ job.company }}</span>
                      </span>
                      <span class="ext" aria-hidden="true">↗</span>
                    </a>
                  </h3>
                  <p class="experience-type">{{ job.type }}</p>
                  <p class="experience-summary">{{ job.summary }}</p>
                  <ul class="experience-bullets">
                    <li v-for="bullet in job.bullets" :key="bullet">
                      {{ bullet }}
                    </li>
                  </ul>
                  <ul class="tags">
                    <li v-for="tag in job.tags" :key="tag">{{ tag }}</li>
                  </ul>
                </div>
              </div>
            </li>
          </ol>
        </section>

        <section id="projects" class="section" aria-label="Projetos">
          <div class="section-mobile-title">Projetos</div>
          <ul class="project-list">
            <li
              v-for="project in projects"
              :key="project.title"
              class="project-item"
            >
              <a
                class="project-card"
                :href="project.href"
                target="_blank"
                rel="noreferrer"
              >
                <div class="project-thumb" aria-hidden="true">
                  <img
                    v-if="project.image"
                    :src="project.image"
                    :alt="`Capa do projeto ${project.title}`"
                  />
                </div>
                <div class="project-body">
                  <h3>
                    <span>{{ project.title }}</span>
                    <span class="ext" aria-hidden="true">↗</span>
                  </h3>
                  <p>{{ project.description }}</p>
                  <ul class="tags">
                    <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
                  </ul>
                </div>
              </a>
            </li>
          </ul>

          <p class="resume-link">
            <a
              href="https://github.com/camilagoulartsoares"
              target="_blank"
              rel="noreferrer"
            >
              Ver GitHub completo <span aria-hidden="true">→</span>
            </a>
          </p>
        </section>

        <footer class="footer">
          <p>
            Inspirado no layout de portfólios modernos de engenharia front-end.
            Construído com Vue 3, TypeScript e Vite. Tipografia Inter.
          </p>
        </footer>
      </main>
    </div>
  </div>
</template>

<style src="./App.css"></style>
