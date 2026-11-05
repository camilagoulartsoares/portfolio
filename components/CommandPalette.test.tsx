import { act, fireEvent, render, screen } from "@testing-library/react";
import { CommandPalette, filterOptions } from "./CommandPalette";
import { routerPush } from "@/test/setup";

describe("filterOptions", () => {
  it("ignora acentos e caixa", () => {
    expect(filterOptions("laboratorio").map((o) => o.path)).toContain("/lab");
    expect(filterOptions("ATLAS").map((o) => o.path)).toEqual(["/work/atlas-relatorios"]);
  });
  it("termo vazio retorna tudo", () => {
    expect(filterOptions("").length).toBeGreaterThan(10);
  });
});

describe("CommandPalette", () => {
  beforeEach(() => routerPush.mockClear());

  it("abre com Ctrl+K, navega com setas e abre com Enter", async () => {
    render(<CommandPalette />);
    expect(screen.queryByRole("dialog")).toBeNull();

    await act(async () => { fireEvent.keyDown(window, { key: "k", ctrlKey: true }); });
    expect(screen.getByRole("dialog")).toBeTruthy();

    const input = screen.getByRole("combobox");
    fireEvent.change(input, { target: { value: "fission" } });
    expect(screen.getAllByRole("option")).toHaveLength(1);

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.keyDown(input, { key: "ArrowDown" });
    expect(screen.getAllByRole("option")[1].getAttribute("aria-selected")).toBe("true");
    fireEvent.keyDown(input, { key: "Enter" });
    expect(routerPush).toHaveBeenCalledWith("/manifesto");
  });

  it("mostra estado vazio sem resultados", async () => {
    render(<CommandPalette />);
    await act(async () => { fireEvent.click(screen.getByLabelText(/Abrir busca/)); });
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "zzzz" } });
    expect(screen.getByText(/Nenhuma transmissão/)).toBeTruthy();
  });
});
