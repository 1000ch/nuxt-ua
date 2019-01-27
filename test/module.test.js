jest.setTimeout(120000);

const { Nuxt, Builder } = require('nuxt');
const nuxtConfig = require('./fixture/nuxt.config');
const url = path => `http://localhost:3000${path}`;

describe('nuxt-ua', () => {
  let nuxt;

  beforeAll(async () => {
    nuxt = new Nuxt(nuxtConfig);
    await new Builder(nuxt).build();
    await nuxt.listen(3000);
  });

  afterAll(async () => {
    await nuxt.close();
  });

  test('nuxt-ua plugin works', async () => {
    const window = await nuxt.renderAndGetWindow(url('/'));
    expect(window.$nuxt.$ua).toBeDefined();

    const name = window.document.querySelector('.name');
    expect(name.textContent).toBe('Node.js');
  });
})
