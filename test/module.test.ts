import { fileURLToPath } from 'url';
import { describe, test, expect } from 'vitest';
import { setup, $fetch } from '@nuxt/test-utils';
import uaMatch from './ua';

const fixture = fileURLToPath(new URL('../playground', import.meta.url));

describe('config file', async () => {
  await setup({
    server: true,
    dev: true,
    fixture
  });

  test.each(uaMatch)('match $match', async ({ ua, match }) => {
    const body = await $fetch('/', { headers: { 'User-Agent': ua } });
    for (const matchData of match) {
      expect(body).toMatch(`<li data-expect="${matchData}" data-match="true">`);
    }
  });
});
