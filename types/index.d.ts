import { NuxtUserAgent } from '../dist/runtime/nuxt-ua';
import { Store } from 'vuex';

declare module 'vuex/types/index' {
  interface Store<S> {
    $ua: NuxtUserAgent;
  }
}

declare module 'vue/types/vue' {
  export interface Vue {
    $ua: NuxtUserAgent;
  }
}
