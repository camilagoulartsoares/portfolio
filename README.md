# Camila Soares — Beyond the Interface

Portfólio experimental de **Camila Goulart Soares**, desenvolvedora full stack.
Navegação não linear em capítulos, motion editorial e cases com notas de transparência.

**Repo:** [camilagoulartsoares/portfolio](https://github.com/camilagoulartsoares/portfolio)
**Live (GitHub Pages):** [camilagoulartsoares.github.io/portfolio](https://camilagoulartsoares.github.io/portfolio/)

---

## Stack

| Camada | Tecnologia |
| --- | --- |
| Framework | [Next.js 15](https://nextjs.org/) (App Router, export estático) |
| UI | React 19 + TypeScript |
| Estilo | Tailwind CSS 3 + `app/globals.css` |
| Motion | Framer Motion (respeita `prefers-reduced-motion`) |
| Ícones | lucide-react |
| Testes | Vitest + Testing Library (jsdom) |
| Lint | Oxlint (plugins react, nextjs, jsx-a11y) |
| Deploy | GitHub Pages via Actions |

Fontes: **Syne** (títulos), **Space Grotesk** (texto), **IBM Plex Mono** (técnico), via `next/font/google`
— o build baixa as fontes, então precisa de rede na primeira vez.

Paleta: `#07070B` · `#D6FF63` · `#B69AFF` · `#8BE9EE` · `#F2F0EC`.

---

## Rotas

| Rota | Capítulo |
| --- | --- |
| `/` | Portal imersivo: hero, núcleo orbital, ticker, projetos em órbita |
| `/manifesto` | Identidade e princípios |
| `/work` | Exposição dos 5 projetos com filtros e troca de cases (botões ou ← →) |
| `/work/[slug]` | Case individual (gerado estaticamente) |
| `/journey` | Trajetória em fases |
| `/system` | Stack como constelação interativa |
| `/lab` | Núcleo arrastável, gerador de princípios, sintonizador de frequência |
| `/contact` | Fechamento e CTA |

Atalhos: **Ctrl/⌘ + K** abre a busca (↑ ↓ navegam, Enter abre, Esc fecha). **Esc** fecha o menu.

---

## Desenvolvimento

```bash
npm install
npm run dev        # http://localhost:3000
```

| Comando | Função |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Export estático em `out/` |
| `npm run start` | Serve `out/` localmente (após o build) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | Oxlint |
| `npm test` | Vitest (conteúdo, busca, filtros/teclado do `/work`) |
| `npm run check` | lint + typecheck + testes + build |

Para simular o GitHub Pages localmente: `NEXT_PUBLIC_BASE_PATH=/portfolio npm run build`
(o site passa a esperar o prefixo `/portfolio`).

---

## Estrutura

```text
app/                 rotas (App Router); páginas interativas = page.tsx (metadata) + *View.tsx (client)
components/          Navigation, CommandPalette, OrbitalCore, ProjectArtwork, Reveal, CursorGlow, Footer, MotionProvider
content/site.ts      todo o conteúdo: perfil, navegação, cases, stack
public/              favicon e imagens
test/setup.ts        mocks de next/navigation e next/link para os testes
next.config.ts       output: "export", trailingSlash, basePath via NEXT_PUBLIC_BASE_PATH
```

### Conteúdo e transparência

Tudo vive em `content/site.ts`. Cada case declara `type` (`professional` | `personal` | `concept`),
`status` e `disclaimer`. Conceitos são marcados como **não implementados** (um teste garante isso).

Campos opcionais por projeto, renderizados apenas quando preenchidos:
`links.repo`, `links.demo`, `screenshots[]` (caminhos em `public/`), `metrics[]` (exige `source`) e `learnings[]`.
Só preencha com material público e verificável.

As artes dos projetos são composições conceituais em CSS/SVG, não capturas de sistemas reais.

---

## Deploy

**Atual: GitHub Pages.** O workflow `.github/workflows/deploy.yml` roda em push na `main`
(ou manualmente): lint → typecheck → testes → build com `NEXT_PUBLIC_BASE_PATH=/portfolio` → publica `out/`.
Em *Settings → Pages*, a fonte precisa ser **GitHub Actions**.

**Alternativa: Vercel.** Importe o repositório como projeto Next.js sem definir `NEXT_PUBLIC_BASE_PATH`;
o site responde na raiz do domínio. Se for usar recursos de servidor no futuro, remova `output: "export"`.

---

## Histórico

A v1 (Vue 3 + Vite, layout com sidebar) foi substituída por esta versão em `feat/beyond-interface-v2`.
O código anterior está preservado na branch `backup/portfolio-vue-v1` e no histórico do Git.

---

## Licença

Uso pessoal — Camila Goulart Soares. Nenhuma licença de reutilização está implícita.
