<template>
  <div>
    <p class="name">{{ name }}</p>
    <p class="isAndroid">{{ isAndroid }}</p>
    <p class="isWindows">{{ isWindows }}</p>
  </div>
</template>

<script>
export default {
  asyncData({ $ua }) {
    return {
      name: $ua.platform.name,
      isAndroid: $ua.is.Android,
      isWindows: $ua.is.Windows
    };
  }
}
</script>
