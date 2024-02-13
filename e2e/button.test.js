import puppeteer from 'puppeteer';

describe('Page start', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true
    });

    page = await browser.newPage();
  });

  test('show popover if button clicked',async () => {
    await page.goto('http://localhost:9000');

    await page.waitForSelector('.widget-button');
    const container = await page.$('.container');
    const button = await container.$('.widget-button');

    await button.click();

await container.waitForSelector('.popover-widget');

  });

  afterAll(async () => {
    await browser.close();
  })
})