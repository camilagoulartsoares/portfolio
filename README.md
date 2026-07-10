# Camila Goulart Soares — Portfólio

Portfólio pessoal da **Camila Goulart Soares**, desenvolvedora front-end.

**Repo:** [camilagoulartsoares/portfolio](https://github.com/camilagoulartsoares/portfolio)  
**Live (após Pages):** [camilagoulartsoares.github.io/portfolio](https://camilagoulartsoares.github.io/portfolio/)

---

## Stack

| Camada | Tecnologia | Por quê |
| --- | --- | --- |
| UI | [Vue 3](https://vuejs.org/) | Composition API + SFCs |
| Linguagem | [TypeScript](https://www.typescriptlang.org/) | Tipagem e manutenção |
| Build | [Vite 8](https://vite.dev/) | Dev server rápido + build moderno |
| Lint | [Oxlint](https://oxc.rs/) | Lint leve e rápido |
| Deploy | GitHub Pages + Actions | CI/CD automático no `main` |

CSS próprio, tipografia Inter — layout sticky sidebar no estilo de portfólios de engenharia front-end.

---

## Desenvolvimento

```bash
git clone git@github.com:camilagoulartsoares/portfolio.git
cd portfolio
npm install
npm run dev
```

### Scripts

| Comando | Função |
| --- | --- |
| `npm run dev` | Servidor local |
| `npm run build` | Typecheck (`vue-tsc`) + build em `dist/` |
| `npm run test` | Roda a suíte Vitest |
| `npm run test:watch` | Vitest em modo watch |
| `npm run test:coverage` | Cobertura de testes |
| `npm run preview` | Preview do build |
| `npm run lint` | Oxlint |

---

## Estrutura

```text
portfolio/
├── public/
├── src/
│   ├── App.vue
│   ├── App.css
│   ├── App.test.ts
│   ├── data/
│   │   ├── portfolio.ts
│   │   └── portfolio.test.ts
│   ├── index.css
│   └── main.ts
├── .github/workflows/deploy.yml
├── index.html
└── vite.config.ts   # base: /portfolio/
```

---

## Deploy

1. Push na branch `main`
2. Em **Settings → Pages**, escolha **GitHub Actions**
3. O workflow publica a cada push

---

## Personalizar

- Textos e projetos: `src/App.vue`
- Visual: `src/App.css`
- Contato / links: seção social e `#projects` em `App.vue`

---

## Licença

Uso pessoal — Camila Goulart Soares.
