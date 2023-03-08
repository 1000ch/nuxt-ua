# nuxt-ua ![GitHub Actions Status](https://github.com/1000ch/nuxt-ua/workflows/test/badge.svg?branch=main)

> UserAgent detector using [Platform.js](https://github.com/bestiejs/platform.js) for Nuxt.

## Install

```bash
npm install --save nuxt-ua
```

## Usage

This module is compatible with Nuxt 2, Nuxt 3 and Nuxt-bridge.

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
```

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

Returns a [`Platform`](https://www.npmjs.com/package/@types/platform) object.

### `$ua.is.chrome`

Returns `true` if the UserAgent is Chrome.

### `$ua.is.firefox`

Returns `true` if the UserAgent is Firefox.

### `$ua.is.safari`

Returns `true` if the UserAgent is Safari.

### `$ua.is.ie`

Returns `true` if the UserAgent is Internet Explorer.

### `$ua.is.edge`

Returns `true` if the UserAgent is Microsoft Edge.

### `$ua.is.opera`

Returns `true` if the UserAgent is Opera.

### `$ua.is.android`

Returns `true` if the UserAgent is Android.

### `$ua.is.ios`

Returns `true` if the UserAgent is iOS.

### `$ua.is.macos`

Returns `true` if the UserAgent is macOS.

### `$ua.is.windows`

Returns `true` if the UserAgent is Windows.

### `$ua.is.linux`

Returns `true` if the UserAgent is Linux.

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
