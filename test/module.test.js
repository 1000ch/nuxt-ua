jest.setTimeout(120000);

const { Nuxt, Builder } = require('nuxt');
const nuxtConfig = require('./fixture/nuxt.config');
const android = require('./android.ua');
const ios = require('./ios.ua');
const windows = require('./windows.ua');
const macos = require('./macos.ua');
const linux = require('./linux.ua');
const detects = [
  'chrome',
  'firefox',
  'safari',
  'ie',
  'edge',
  'opera',
  'android',
  'ios',
  'windows',
  'macos',
  'linux'
];

describe('nuxt-ua', () => {
  let nuxt;
  const found = { text: 'true' };
  const notFound = { text: 'false' };

  beforeAll(async () => {
    nuxt = new Nuxt(nuxtConfig);
    await new Builder(nuxt).build();
    await nuxt.listen(3000);
  });

  afterAll(async () => {
    await nuxt.close();
  });

  test('nuxt-ua works as plugin', async () => {
    const window = await nuxt.renderAndGetWindow('http://localhost:3000/');

    expect(window.$nuxt.$ua).toBeDefined();
  });

  test('nuxt-ua detects Android', async () => {
    for (const useragent of android) {
      await page.setUserAgent(useragent.ua);
      await page.goto('http://localhost:3000/');

      for (const detect of detects) {
        if (useragent.match.includes(detect)) {
          await expect(page).toMatchElement(`.${detect}`, found);
        } else {
          await expect(page).toMatchElement(`.${detect}`, notFound);
        }
      }
    }
  });

  test('nuxt-ua detects iOS', async () => {
    for (const useragent of ios) {
      await page.setUserAgent(useragent.ua);
      await page.goto('http://localhost:3000/');

      for (const detect of detects) {
        if (useragent.match.includes(detect)) {
          await expect(page).toMatchElement(`.${detect}`, found);
        } else {
          await expect(page).toMatchElement(`.${detect}`, notFound);
        }
      }
    }
  });

  test('nuxt-ua detects Windows', async () => {
    for (const useragent of windows) {
      await page.setUserAgent(useragent.ua);
      await page.goto('http://localhost:3000/');

      for (const detect of detects) {
        if (useragent.match.includes(detect)) {
          await expect(page).toMatchElement(`.${detect}`, found);
        } else {
          await expect(page).toMatchElement(`.${detect}`, notFound);
        }
      }
    }
  });

  test('nuxt-ua detects macOS', async () => {
    for (const useragent of macos) {
      await page.setUserAgent(useragent.ua);
      await page.goto('http://localhost:3000/');

      for (const detect of detects) {
        if (useragent.match.includes(detect)) {
          await expect(page).toMatchElement(`.${detect}`, found);
        } else {
          await expect(page).toMatchElement(`.${detect}`, notFound);
        }
      }
    }
  });

  test('nuxt-ua detects Linux', async () => {
    for (const useragent of linux) {
      await page.setUserAgent(useragent.ua);
      await page.goto('http://localhost:3000/');

      for (const detect of detects) {
        if (useragent.match.includes(detect)) {
          await expect(page).toMatchElement(`.${detect}`, found);
        } else {
          await expect(page).toMatchElement(`.${detect}`, notFound);
        }
      }
    }
  });
});
