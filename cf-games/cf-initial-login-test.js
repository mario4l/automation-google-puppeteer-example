const puppeteer = require("puppeteer");

// let email = "";
// let password = "";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const override = Object.assign(page.viewport(), { width: 1366 });
  await page.setViewport(override);
  await page.goto("http://games.crossfit.com");
  await page.click("#pp-cookie-accept");
  await page.waitForSelector(".login-button");
  await page.click(".login-button");
  await page.waitForSelector(".form-control");
  await page.click(".form-control");
  await page.type(".form-control", email);
  await page.waitForSelector("#loginForm > div:nth-child(5) > div > input");
  await page.click("#loginForm > div:nth-child(5) > div > input");
  await page.type("#loginForm > div:nth-child(5) > div > input", password);
  await page.click("#loginForm > div:nth-child(6) > button:nth-child(1)");

  await browser.close();
})();
