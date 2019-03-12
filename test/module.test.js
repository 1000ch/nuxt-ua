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

  test('nuxt-ua works as plugin', async () => {
    const window = await nuxt.renderAndGetWindow(url('/'));

    expect(window.$nuxt.$ua).toBeDefined();
  });

  test('nuxt-ua checks correctly', async () => {
    const { document } = await nuxt.renderAndGetWindow(url('/'));
    const chrome = document.querySelector('.chrome');
    const firefox = document.querySelector('.firefox');
    const safari = document.querySelector('.safari');
    const android = document.querySelector('.android');
    const ios = document.querySelector('.ios');
    const macos = document.querySelector('.macos');
    const windows = document.querySelector('.windows');
    const linux = document.querySelector('.linux');

    expect(chrome.textContent).toBe('false');
    expect(firefox.textContent).toBe('false');
    expect(safari.textContent).toBe('false');
    expect(android.textContent).toBe('false');
    expect(ios.textContent).toBe('false');
    expect(macos.textContent).toBe('false');
    expect(windows.textContent).toBe('false');
    expect(linux.textContent).toBe('false');
  });
})
