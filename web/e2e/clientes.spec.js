import {expect, test} from "@playwright/test";

test.beforeEach(async ({page, request}) => {
    const response = await request.post("http://localhost:3000/__reset");
    expect(response.status()).toBe(204);
    await page.goto("/");
});

test("lista os clientes iniciais", async({page}) => {
});

test("cadastrar um cliente novo");

test("");

test("");
