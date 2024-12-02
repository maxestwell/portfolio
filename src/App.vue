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
    <footer></footer>
  </div>
</template>

<style scoped>
.everything-container,
.everything {
  padding: 1rem;
  height: 100%;
}

header {
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>
