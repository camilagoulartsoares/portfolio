import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import App from './App.vue'
import { experiences, projects } from './data/portfolio'

describe('App.vue', () => {
  beforeEach(() => {
    class MockIntersectionObserver {
      observe = vi.fn()
      unobserve = vi.fn()
      disconnect = vi.fn()
      constructor(_callback: IntersectionObserverCallback) {}
    }

    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('renderiza nome, cargo e seções principais', () => {
    const wrapper = mount(App)

    expect(wrapper.text()).toContain('Camila Goulart Soares')
    expect(wrapper.text()).toContain('Front-end Developer')
    expect(wrapper.find('#about').exists()).toBe(true)
    expect(wrapper.find('#experience').exists()).toBe(true)
    expect(wrapper.find('#projects').exists()).toBe(true)
  })

  it('renderiza navegação lateral com âncoras', () => {
    const wrapper = mount(App)
    const links = wrapper.findAll('.side-nav a')

    expect(links).toHaveLength(3)
    expect(links[0]?.attributes('href')).toBe('#about')
    expect(links[1]?.attributes('href')).toBe('#experience')
    expect(links[2]?.attributes('href')).toBe('#projects')
  })

  it('lista todas as experiências', () => {
    const wrapper = mount(App)
    const items = wrapper.findAll('.experience-item')

    expect(items).toHaveLength(experiences.length)
    expect(wrapper.text()).toContain('DealSafe')
    expect(wrapper.text()).toContain('Front-end Developer Junior II')
  })

  it('lista projetos com links externos corretos', () => {
    const wrapper = mount(App)
    const cards = wrapper.findAll('.project-card')

    expect(cards).toHaveLength(projects.length)
    expect(cards[0]?.attributes('href')).toBe(
      'https://camilagoulartsoares.github.io/helpdog/',
    )
    expect(cards[1]?.attributes('href')).toBe(
      'https://github.com/camilagoulartsoares/ivc-frontend',
    )
    expect(cards[2]?.attributes('href')).toBe(
      'https://github.com/camilagoulartsoares/ivc-backend',
    )
    expect(cards[3]?.attributes('href')).toBe(
      'https://github.com/camilagoulartsoares/inchurch',
    )
  })

  it('exibe capas do HelpDog, InChurch e da Vitrine de Startups', () => {
    const wrapper = mount(App)
    const images = wrapper.findAll('.project-thumb img')

    expect(images).toHaveLength(3)
    const alts = images.map((img) => img.attributes('alt') ?? '')
    expect(alts.some((alt) => alt.includes('HelpDog'))).toBe(true)
    expect(alts.some((alt) => alt.includes('InChurch'))).toBe(true)
    expect(alts.some((alt) => alt.includes('Vitrine de Startups'))).toBe(true)
    expect(
      images.some((img) => (img.attributes('src') ?? '').includes('helpdog.png')),
    ).toBe(true)
    expect(
      images.some((img) => (img.attributes('src') ?? '').includes('inchurch.png')),
    ).toBe(true)
    expect(
      images.some((img) =>
        (img.attributes('src') ?? '').includes('ivc-frontend.png'),
      ),
    ).toBe(true)
  })

  it('atualiza spotlight no mousemove', async () => {
    const wrapper = mount(App)
    window.dispatchEvent(
      new MouseEvent('mousemove', { clientX: 120, clientY: 80 }),
    )
    await wrapper.vm.$nextTick()

    const style = wrapper.find('.site').attributes('style') ?? ''
    expect(style).toContain('--spot-x: 120px')
    expect(style).toContain('--spot-y: 80px')
  })

  it('mostra links sociais com aria-labels', () => {
    const wrapper = mount(App)
    const socials = wrapper.findAll('.socials a')

    expect(socials.map((link) => link.attributes('aria-label'))).toEqual([
      'GitHub',
      'LinkedIn',
      'E-mail',
    ])
  })
})
