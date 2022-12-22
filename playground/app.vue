<template>
  <div>
    {{ $ua.is.chrome ? 'This is Chrome' : 'This is not Chrome' }}
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
