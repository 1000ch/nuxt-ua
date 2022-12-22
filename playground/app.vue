<template>
  <div>
    <ul>
      <li>
        Platform: {{ $ua.platform.ua }}
      </li>
      <li>
        Version: {{ $ua.platform.version }}
      </li>
      <li data-expect="chrome" :data-match="$ua.is.chrome">
        Is Chrome: {{ $ua.is.chrome }}
      </li>
      <li data-expect="firefox" :data-match="$ua.is.firefox">
        Is Firefox: {{ $ua.is.firefox }}
      </li>
      <li data-expect="safari" :data-match="$ua.is.safari">
        Is Safari: {{ $ua.is.safari }}
      </li>
      <li data-expect="ie" :data-match="$ua.is.ie">
        Is IE: {{ $ua.is.ie }}
      </li>
      <li data-expect="edge" :data-match="$ua.is.edge">
        Is Edge: {{ $ua.is.edge }}
      </li>
      <li data-expect="opera" :data-match="$ua.is.opera">
        Is Opera: {{ $ua.is.opera }}
      </li>
      <li data-expect="android" :data-match="$ua.is.android">
        Is Android: {{ $ua.is.android }}
      </li>
      <li data-expect="ios" :data-match="$ua.is.ios">
        Is iOS: {{ $ua.is.ios }}
      </li>
      <li data-expect="macos" :data-match="$ua.is.macos">
        Is macOS: {{ $ua.is.macos }}
      </li>
      <li data-expect="windows" :data-match="$ua.is.windows">
        Is Windows: {{ $ua.is.windows }}
      </li>
      <li data-expect="linux" :data-match="$ua.is.linux">
        Is Linux: {{ $ua.is.linux }}
      </li>
    </ul>
    <pre>
      {{ JSON.stringify($ua.platform, null, 2) }}
    </pre>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useNuxtApp } from '#app';

const nuxtApp = useNuxtApp();
onMounted(() => {
  console.log(nuxtApp.$ua.platform);
});
</script>
