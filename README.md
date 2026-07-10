# Camila Goulart Soares — Portfólio

Portfólio pessoal da **Camila Goulart Soares**, desenvolvedora front-end.

**Repo:** [camilagoulartsoares/portfolio](https://github.com/camilagoulartsoares/portfolio)  
**Live (após Pages):** [camilagoulartsoares.github.io/portfolio](https://camilagoulartsoares.github.io/portfolio/)

---

## Stack

| Camada | Tecnologia | Por quê |
| --- | --- | --- |
| UI | [React 19](https://react.dev/) | Padrão atual do ecossistema |
| Linguagem | [TypeScript](https://www.typescriptlang.org/) | Tipagem e manutenção |
| Build | [Vite 8](https://vite.dev/) | Dev server rápido + build moderno |
| Lint | [Oxlint](https://oxc.rs/) | Lint leve e rápido |
| Deploy | GitHub Pages + Actions | CI/CD automático no `main` |

CSS próprio, tipografia Instrument Serif + Syne — sem framework de UI.

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
| `npm run build` | Typecheck + build em `dist/` |
| `npm run preview` | Preview do build |
| `npm run lint` | Oxlint |

---

## Estrutura

```text
portfolio/
├── public/
├── src/
│   ├── App.tsx      # Página do portfólio
│   ├── App.css      # Estilos
│   ├── index.css    # Base
│   └── main.tsx
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

- Textos e projetos: `src/App.tsx`
- Visual: `src/App.css`
- Contato / links: seção `#contato` em `App.tsx`

---

## Licença

Uso pessoal — Camila Goulart Soares.
