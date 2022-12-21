import { NuxtUserAgent } from './nuxt-ua';

// @ts-ignore
declare module 'vuex/types/index' {
  interface Store<S> {
    $ua: NuxtUserAgent;
  }
}

// @ts-ignore
declare module 'vue/types/vue' {
  export interface Vue {
    $ua: NuxtUserAgent;
  }
}
