<script setup>
import { RouterLink, RouterView } from 'vue-router'
import maxiswell from './components/maxiswell.vue'
</script>

<template>
  <div class="everything-container" v-style-text-nodes>
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

.everything,
.everything-container {
  padding: 1rem;
}
</style>
