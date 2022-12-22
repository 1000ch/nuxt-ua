# nuxt-ua ![GitHub Actions Status](https://github.com/1000ch/nuxt-ua/workflows/test/badge.svg?branch=main)

> UserAgent detector using [Platform.js](https://github.com/bestiejs/platform.js) for Nuxt.

## Install

```bash
npm install --save nuxt-ua
```

## Usage

Add `'nuxt-ua'` to your `modules` array in the `nuxt.config.ts` file:

```js
modules: [
  // other modules...
  'nuxt-ua',
]
```

### Nuxt 2 types

If you are using TypeScript in a Nuxt2 project, please add `nuxt-ua/types` to your `tsconfig.json` file to inject `$ua` into the [`Context`](https://nuxtjs.org/api/context/):

```jsonc
{
  "compilerOptions": {
    // ..
    "types": [
      "@nuxt/types",
      "@types/node",
      "nuxt-ua/types"
    ]
  }
}

Then, you can use the `$ua` object:

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

## API

### `$ua.platform`

Returns [`Platform`](https://www.npmjs.com/package/@types/platform) object.

### `$ua.is.chrome`

Returns UserAgent is Chrome or not.

### `$ua.is.firefox`

Returns UserAgent is Firefox or not.

### `$ua.is.safari`

Returns UserAgent is Safari or not.

### `$ua.is.ie`

Returns UserAgent is Internet Explorer or not.

### `$ua.is.edge`

Returns UserAgent is Microsoft Edge or not.

### `$ua.is.opera`

Returns UserAgent is Opera or not.

### `$ua.is.android`

Returns UserAgent is Android or not.

### `$ua.is.ios`

Returns UserAgent is iOS or not.

### `$ua.is.macos`

Returns UserAgent is macOS or not.

### `$ua.is.windows`

Returns UserAgent is Windows or not.

### `$ua.is.linux`

Returns UserAgent is Linux or not.

## Development

1. Install the development dependencies

```
npm ci
```

2. Initialize the Nuxt playground

```
npm run dev:prepare
```

3. Run the development environment

```
npm run dev
```


4. Add or modify the tests and ensure that tests are passing

```
npm test
```

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
