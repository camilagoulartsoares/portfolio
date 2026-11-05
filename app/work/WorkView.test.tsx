import { act, fireEvent, render, screen, within } from "@testing-library/react";
import WorkView from "./WorkView";
import { works } from "@/content/site";

const selected = () =>
  within(screen.getByLabelText("Projetos disponíveis"))
    .getAllByRole("button")
    .find((b) => b.getAttribute("aria-pressed") === "true")
    ?.textContent;

describe("/work", () => {
  it("filtra por tipo e atualiza a contagem", () => {
    render(<WorkView />);
    expect(screen.getByText("05 RESULTADOS")).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: "CONCEITOS" }));
    expect(screen.getByText("02 RESULTADOS")).toBeTruthy();
    const list = within(screen.getByLabelText("Projetos disponíveis")).getAllByRole("button");
    expect(list.map((b) => b.textContent)).toEqual([expect.stringContaining("QUINTO"), expect.stringContaining("NEXUS")]);

    fireEvent.click(screen.getByRole("button", { name: "CASES REAIS" }));
    expect(screen.getByText("02 RESULTADOS")).toBeTruthy();
  });

  it("troca de case com botões e com as setas do teclado", async () => {
    render(<WorkView />);
    expect(selected()).toContain(works[0].title);

    fireEvent.click(screen.getByLabelText("Próximo projeto"));
    expect(selected()).toContain(works[1].title);

    await act(async () => { fireEvent.keyDown(window, { key: "ArrowLeft" }); });
    expect(selected()).toContain(works[0].title);

    await act(async () => { fireEvent.keyDown(window, { key: "ArrowLeft" }); });
    expect(selected()).toContain(works[works.length - 1].title);
  });

  it("link do case ativo aponta para a rota de detalhe", () => {
    render(<WorkView />);
    expect(screen.getByLabelText(`Abrir case ${works[0].title}`).getAttribute("href")).toBe(`/work/${works[0].slug}`);
  });
});
