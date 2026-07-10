# Camila Goulart Soares — Portfólio

Portfólio pessoal da **Camila Goulart Soares**, desenvolvedora front-end.  
Projeto independente (não relacionado ao portfólio da Caroline).

**Repositório:** este projeto  
**Deploy previsto:** `https://camilagoulartsoares.github.io/portfolio/`

---

## Stack

| Camada | Tecnologia | Por quê |
| --- | --- | --- |
| UI | [React 19](https://react.dev/) | Padrão atual do ecossistema |
| Linguagem | [TypeScript](https://www.typescriptlang.org/) | Tipagem e manutenção |
| Build | [Vite 8](https://vite.dev/) | Dev server rápido + build moderno |
| Lint | [Oxlint](https://oxc.rs/) | Lint leve e rápido |
| Deploy | GitHub Pages + Actions | CI/CD automático no `main` |

Sem framework de UI: CSS próprio, tipografia Instrument Serif + Syne.

---

## Desenvolvimento

```bash
git clone git@github.com:camilagoulartsoares/camila-portfolio.git
cd camila-portfolio
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
camila-portfolio/
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

1. Crie o repositório `camila-portfolio` no GitHub (se ainda não existir)
2. Faça push da branch `main`
3. Em **Settings → Pages**, escolha **GitHub Actions**
4. O workflow publica a cada push em `main`

---

## Personalizar

- Textos e projetos: `src/App.tsx`
- Visual: `src/App.css`
- Contato / links: seção `#contato` em `App.tsx`

---

## Licença

Uso pessoal — Camila Goulart Soares.
