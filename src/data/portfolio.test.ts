import { describe, expect, it } from 'vitest'
import {
  createProjects,
  experiences,
  sectionLabels,
  sections,
} from './portfolio'

describe('portfolio data', () => {
  it('expõe as três seções de navegação', () => {
    expect(sections).toEqual(['about', 'experience', 'projects'])
    expect(sectionLabels.about).toBe('Sobre')
    expect(sectionLabels.experience).toBe('Experiência')
    expect(sectionLabels.projects).toBe('Projetos')
  })

  it('lista cinco experiências com campos obrigatórios', () => {
    expect(experiences).toHaveLength(5)

    for (const job of experiences) {
      expect(job.id).toBeTruthy()
      expect(job.title).toBeTruthy()
      expect(job.company).toBeTruthy()
      expect(job.period).toBeTruthy()
      expect(job.summary.length).toBeGreaterThan(20)
      expect(job.bullets.length).toBeGreaterThan(0)
      expect(job.tags.length).toBeGreaterThan(0)
      expect(job.href).toMatch(/^https:\/\//)
    }
  })

  it('inclui DealSafe, DealBoard e Prefeitura de Itajubá', () => {
    const companies = experiences.map((job) => job.company)
    expect(companies).toContain('DealSafe')
    expect(companies).toContain('DealBoard')
    expect(companies).toContain('Prefeitura de Itajubá')
  })

  it('cria projetos com links corretos e capa do InChurch', () => {
    const projects = createProjects('/portfolio/')

    expect(projects).toHaveLength(3)
    expect(projects[0]?.title).toBe('Vitrine de Startups')
    expect(projects[0]?.href).toBe(
      'https://github.com/camilagoulartsoares/ivc-frontend',
    )
    expect(projects[0]?.image).toBe('/portfolio/projects/ivc-frontend.png')

    expect(projects[1]?.title).toBe('Investidores.vc — Backend')
    expect(projects[1]?.href).toBe(
      'https://github.com/camilagoulartsoares/ivc-backend',
    )
    expect(projects[1]?.tags).toContain('NestJS')

    expect(projects[2]?.title).toBe('InChurch')
    expect(projects[2]?.href).toBe(
      'https://github.com/camilagoulartsoares/inchurch',
    )
    expect(projects[2]?.image).toBe('/portfolio/projects/inchurch.png')
  })

  it('normaliza baseUrl sem barra final', () => {
    const projects = createProjects('/portfolio')
    expect(projects[2]?.image).toBe('/portfolio/projects/inchurch.png')
  })
})
