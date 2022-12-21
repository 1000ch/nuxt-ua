import { defineNuxtConfig } from 'nuxt/config';
import NuxtUaModule from '..';

export default defineNuxtConfig({
  modules: [
    NuxtUaModule
  ],
  nitro: {
    prerender: {
      routes: ['/']
    }
  }
});
