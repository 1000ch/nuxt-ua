import { fileURLToPath } from 'url';
import { defineNuxtModule, addPlugin, createResolver, isNuxt2 } from '@nuxt/kit';
import { name, version } from '../package.json';

export default defineNuxtModule({
  meta: {
    name,
    version,
    compatibility: {
      nuxt: '^2.0.0 || ^3.0.0'
    }
  },
  setup (_options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url));
    nuxt.options.build.transpile.push(runtimeDir);

    if (isNuxt2()) {
      addPlugin(resolve(runtimeDir, 'plugin.vue2'));
    } else {
      addPlugin(resolve(runtimeDir, 'plugin.vue3'));
    }
  }
});
