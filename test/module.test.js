jest.setTimeout(120000);

const { Nuxt, Builder } = require('nuxt');
const nuxtConfig = require('./fixture/nuxt.config');
const url = path => `http://localhost:3000${path}`;

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
    const window = await nuxt.renderAndGetWindow(url('/'));

    expect(window.$nuxt.$ua).toBeDefined();
  });

  test('nuxt-ua checks correctly (1)', async () => {
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:43.0) Gecko/20100101 Firefox/43.0');
    await page.goto('http://localhost:3000/');

    await expect(page).toMatchElement('.chrome', notFound);
    await expect(page).toMatchElement('.firefox', found);
    await expect(page).toMatchElement('.safari', notFound);
    await expect(page).toMatchElement('.android', notFound);
    await expect(page).toMatchElement('.ios', notFound);
    await expect(page).toMatchElement('.windows', notFound);
    await expect(page).toMatchElement('.macos', found);
    await expect(page).toMatchElement('.linux', notFound);
  });

  test('nuxt-ua checks correctly (2)', async () => {
    await page.setUserAgent('Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)');
    await page.goto('http://localhost:3000/');

    await expect(page).toMatchElement('.chrome', notFound);
    await expect(page).toMatchElement('.firefox', notFound);
    await expect(page).toMatchElement('.safari', notFound);
    await expect(page).toMatchElement('.android', notFound);
    await expect(page).toMatchElement('.ios', notFound);
    await expect(page).toMatchElement('.windows', found);
    await expect(page).toMatchElement('.macos', notFound);
    await expect(page).toMatchElement('.linux', notFound);
  });
})
