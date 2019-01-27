<template>
  <div>
    <p class="name">{{ name }}</p>
  </div>
</template>

<script>
export default {
  asyncData({ $ua }) {
    const {
      name
    } = $ua;

    return {
      name
    };
  }
}
</script>
