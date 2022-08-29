// @ts-check
import { generateRandomIntegerInRange } from "../support/utils";
import { sleep } from "../support/utils";
const { test, expect } = require(`@playwright/test`);

//test("First Test",async({page})=>{
//testing code here
//  await page.goto("https://playwright.dev");

// clicking on elements
// const title = page.locator('.navbar__inner .navbar_title');
//await expect(title).toHaveText('Playwright');
//await page.pause();
//});
test.describe.configure({mode:'parallel'});
test.describe("main", () => {
  test("click", async ({ page, context }) => {
    let buttonNumber = ["#zero", "#un", "#deux", "#trois", "#quatre", "#cinq", "#six", "#sept", "#huit", "#neuf"]
    let buttonOp = ["#addition", "#moins", "#multiplier", "#diviser"]
    let numero01 = "";
    let numero02 = "";
    let op = "";
    let resultado = 0;
    let n;

    await page.goto("/");
    await page.locator("#C").click({ force: true });
    n = generateRandomIntegerInRange(1, 3);
    for (let j = 0; j < n; j++) {
      n = generateRandomIntegerInRange(0, 9);
      numero01 = numero01 + String(n);
      await page.locator(buttonNumber[n]).click({force:true});
    }
    let n1 = parseInt(numero01);
    n = generateRandomIntegerInRange(0, 3);
    await page.locator(buttonOp[n]).click({ force: true });
    op = buttonOp[n];
    n = generateRandomIntegerInRange(1, 3);
    for (let j = 0; j < n; j++) {
      n = generateRandomIntegerInRange(0, 9);
      numero02 = numero02 + String(n);
      await page.locator(buttonNumber[n]).click({ force: true });
    }
    let n2 = parseInt(numero02);
    switch (op) {
      case buttonOp[0]:
        resultado = n1 + n2;
        break;
      case buttonOp[1]:
        resultado = n1 - n2;
        break;
      case buttonOp[2]:
        resultado = n1 * n2;
        break;
      case buttonOp[3]:
        resultado = n1 / n2;
        break;
      default:
        expect(false).toBeTruthy();
    }
    var result = resultado.toFixed(4);
    resultado = parseFloat(result);
    await page.locator("#egale").click();

    await expect(page.locator("#total")).toHaveText(String(resultado));

  });
})

