<script setup>
import { RouterLink, RouterView } from 'vue-router'
import maxiswell from './components/maxiswell.vue'
</script>

<template>
  <header>
      <maxiswell />
  </header>
  <RouterView />
</template>

<style scoped>
header {
  /* line-height: 1.5; */
  /* max-width: 100vh; */
  /* height: 90px; */
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>
