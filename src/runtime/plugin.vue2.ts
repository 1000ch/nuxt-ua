import { NuxtUserAgent } from './nuxt-ua';
import './types';

function createNuxtUserAgent (context: any) {
  const isBrowser = typeof window !== 'undefined';
  const isGenerate = (process as any).static && (process as any).server;
  let userAgent = '';

  if (isBrowser) {
    userAgent = navigator.userAgent;
  } else if (!isGenerate) {
    userAgent = context.req.headers['user-agent'];
  }

  return new NuxtUserAgent(userAgent);
}

export default (context: any, inject: any) => {
  const ua = createNuxtUserAgent(context);
  context.$ua = ua;
  inject('ua', ua);
};
