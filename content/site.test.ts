import { existsSync } from "node:fs";
import { join } from "node:path";
import { asset, navigation, site, techGroups, works } from "./site";

const root = join(__dirname, "..");

describe("conteúdo do portfólio", () => {
  it("tem os 5 projetos com slugs e números únicos", () => {
    expect(works).toHaveLength(5);
    expect(new Set(works.map((w) => w.slug)).size).toBe(works.length);
    expect(new Set(works.map((w) => w.number)).size).toBe(works.length);
  });

  it("nunca apresenta conceito como projeto entregue", () => {
    for (const w of works.filter((p) => p.type === "concept")) {
      expect(w.status).toMatch(/NÃO IMPLEMENTADO/);
      expect(w.links?.demo).toBeUndefined();
      expect(w.metrics).toBeUndefined();
    }
  });

  it("todo projeto declara nota de transparência e impacto sem métricas inventadas", () => {
    for (const w of works) {
      expect(w.disclaimer.length).toBeGreaterThan(20);
      expect(w.impact.length).toBeGreaterThan(20);
      for (const m of w.metrics ?? []) expect(m.source.trim()).not.toBe("");
    }
  });

  it("links externos são https", () => {
    const urls = [site.github, site.linkedin, site.url, ...works.flatMap((w) => [w.links?.repo, w.links?.demo])].filter(Boolean) as string[];
    for (const u of urls) expect(u).toMatch(/^https:\/\//);
  });

  it("cada item de navegação aponta para uma rota existente em app/", () => {
    for (const n of navigation) {
      const file = n.href === "/" ? "app/page.tsx" : `app${n.href}/page.tsx`;
      expect(existsSync(join(root, file)), file).toBe(true);
    }
  });

  it("capturas declaradas existem em public/", () => {
    for (const s of works.flatMap((w) => w.screenshots ?? [])) {
      expect(existsSync(join(root, "public", s.src)), s.src).toBe(true);
      expect(s.alt.trim()).not.toBe("");
    }
  });

  it("grupos da stack têm ids únicos", () => {
    expect(new Set(techGroups.map((g) => g.id)).size).toBe(techGroups.length);
  });

  it("asset() respeita o basePath", () => {
    const prev = process.env.NEXT_PUBLIC_BASE_PATH;
    process.env.NEXT_PUBLIC_BASE_PATH = "/portfolio";
    expect(asset("/favicon.svg")).toBe("/portfolio/favicon.svg");
    process.env.NEXT_PUBLIC_BASE_PATH = "";
    expect(asset("projects/a.png")).toBe("/projects/a.png");
    process.env.NEXT_PUBLIC_BASE_PATH = prev;
  });
});
