jest.setTimeout(120000);

const { Nuxt, Builder, Generator } = require('nuxt');
const nuxtConfig = require('./fixture/nuxt.config');
const android = require('./ua/android');
const ios = require('./ua/ios');
const windows = require('./ua/windows');
const macos = require('./ua/macos');
const linux = require('./ua/linux');
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

  test('nuxt-ua works as plugin with spa mode', async () => {
    const nuxtWithSpa = new Nuxt({
      ...nuxtConfig,
      mode: 'spa',
    });
    await new Builder(nuxtWithSpa).build();
    await nuxtWithSpa.listen(3001);

    const window = await nuxtWithSpa.renderAndGetWindow('http://localhost:3001/');
    expect(window.$nuxt.$ua).toBeDefined();

    await nuxtWithSpa.close();
  });

  test('nuxt-ua works as plugin with nuxt generete', async () => {
    const nuxtWithGenerate = new Nuxt(nuxtConfig);
    const builder = new Builder(nuxtWithGenerate);
    const generator = new Generator(nuxtWithGenerate, builder);
    await generator.generate();
    await nuxtWithGenerate.listen(3002);

    const window = await nuxtWithGenerate.renderAndGetWindow('http://localhost:3002/');
    expect(window.$nuxt.$ua).toBeDefined();

    await nuxtWithGenerate.close();
  });

  test('nuxt-ua detects Android', async () => {
    for (const useragent of android) {
      await page.setUserAgent(useragent.ua);
      await page.goto('http://localhost:3000/');
      await expect(page).toMatchElement(`.platform`, useragent.ua);

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
      await expect(page).toMatchElement(`.platform`, useragent.ua);

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
      await expect(page).toMatchElement(`.platform`, useragent.ua);

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
      await expect(page).toMatchElement(`.platform`, useragent.ua);

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
      await expect(page).toMatchElement(`.platform`, useragent.ua);

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
