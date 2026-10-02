import { test, expect } from "@playwright/test";

test.beforeEach(async ({page, request}) => {
    const response = await request.post("http://localhost:3000/__reset");
    expect(response.status()).toBe(204);
    await page.goto("/");
});

test("lista os produtos iniciais", async ({page}) => {
    await expect(page.getByRole("heading", {name: "Produtos"})).toBeVisible();
    await expect(page.getByRole("row")).toHaveCount(4);
    await expect(page.getByRole("cell", {name: "Coxinha"})).toBeVisible();
});

test("cadastra produto novo", async({page}) => {
    await page.getByLabel("Nome").fill("Kibe");
    await page.getByLabel("Preco").fill("7");
    await page.getByRole("button", {name: "Cadastrar"}).click();

    const line = page.getByRole("row", {name: /Kibe/});
    await expect(line).toBeVisible();
    await expect(line).toContainText("R$ 7,00");
});

test("mostra erro ao cadastrar sem preenchimento", async({page}) => {
    await page.getByRole("button", {name: "Cadastrar"}).click();
    await expect(page.getByText("Nome e preco sao obrigatorios")).toBeVisible();
});

test("remove um produto", async({page}) => {
    const line = page.getByRole("row", {name: /Pastel/});
    await line.getByRole("button", {name: "Remover"}).click();
    await expect(line).toHaveCount(0);
});