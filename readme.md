# nuxt-ua [![CircleCI](https://circleci.com/gh/1000ch/nuxt-ua.svg?style=svg)](https://circleci.com/gh/1000ch/nuxt-ua)

UserAgent detector using [Platform.js](https://github.com/bestiejs/platform.js) for Nuxt.

## Install

```bash
$ npm install --save nuxt-ua
```

## Usage

Configure `nuxt.config.js`.

```js
module.exports = {
  modules: [
    'nuxt-ua'
  ]
}
```

`nuxt-ua` instance will be injected to [`Context`](https://nuxtjs.org/api/context/) as `$ua`. `$ua` have [`NuxtUserAgent`](https://github.com/1000ch/nuxt-ua/blob/master/index.d.ts) interface.

```html
<template>
  <main>
    {{ $ua.is.chrome ? 'This is Chrome' : 'This is not Chrome' }}
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import { Context } from '@nuxt/vue-app/types';

export default Vue.extend({
  fetch(context: Context) {
    console.log(context.$ua);
  }
});
</script>
```

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
