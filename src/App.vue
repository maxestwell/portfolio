<script setup>
import { RouterLink, RouterView } from 'vue-router'
import maxiswell from './components/maxiswell.vue'
</script>

<template>
  <div v-style-text-nodes>
    <header>
      <maxiswell />
    </header>
    <RouterView class="everything" />
  </div>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 1;
}

.everything {
  padding: 1rem;
}
</style>
