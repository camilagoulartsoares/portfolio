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
      'https://github.com/camilagoulartsoares/ivc-frontend',
    )
    expect(cards[1]?.attributes('href')).toBe(
      'https://github.com/camilagoulartsoares/ivc-backend',
    )
    expect(cards[2]?.attributes('href')).toBe(
      'https://github.com/camilagoulartsoares/inchurch',
    )
  })

  it('exibe capa apenas no projeto InChurch', () => {
    const wrapper = mount(App)
    const images = wrapper.findAll('.project-thumb img')

    expect(images).toHaveLength(1)
    expect(images[0]?.attributes('alt')).toContain('InChurch')
    expect(images[0]?.attributes('src')).toContain('inchurch.png')
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
