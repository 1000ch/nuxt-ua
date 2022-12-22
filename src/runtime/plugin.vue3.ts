import { defineNuxtPlugin, useRequestHeaders } from '#app';
import { NuxtUserAgent } from './nuxt-ua';

export default defineNuxtPlugin(() => {
  let userAgent = '';

  if (process.client) {
    userAgent = navigator.userAgent;
  } else {
    userAgent = useRequestHeaders(['user-agent'])['user-agent'] ?? '';
  }
  const ua = new NuxtUserAgent(userAgent);
  return {
    provide: {
      ua
    }
  };
});
