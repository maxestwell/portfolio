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
    <footer>
      <p class="text-node-ignore">my name is max, i like design and music woohoo</p>
    </footer>
  </div>
</template>

<style scoped>
.everything-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  padding: 1rem;
}

/* .everything-container,
.everything {
  padding: 1rem;
  outline: 1px solid red;
} */

.everything {
  flex-grow: 1;
  margin: 1rem;
  outline: 1px solid red;
}

header {
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>
