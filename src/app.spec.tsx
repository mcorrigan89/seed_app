import * as puppeteer from 'puppeteer';

const isDebugging = () => {
  const debugMode = {
    headless: false,
    slowMo: 250,
    devtools: true
  };

  return process.env.NODE_ENV === 'debug' ? debugMode : {};
};

describe('app', () => {
  it('should load', async () => {
    let browser = await puppeteer.launch(isDebugging());
    let page = await browser.newPage();

    page.emulate({
      viewport: {
        height: 800,
        width: 1680
      },
      userAgent: ''
    });

    await page.goto('http://localhost:8080');
    page.waitFor(500);
    const html = await page.evaluate(() =>  document.querySelector('[data-attr=test]')!.innerHTML);
    expect(html).toEqual('Derp');
    await page.screenshot({ path: `screenshots/screenshot-${new Date().toLocaleDateString()}.png`});
    await browser.close();
  }, 16000);
});
