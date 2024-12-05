<script setup>
import { RouterLink, RouterView } from 'vue-router'
import maxiswell from './components/maxiswell.vue'
</script>

<template>
  <div class="everything-container" v-text-node-styler>
    <header>
      <maxiswell />
    </header>
    <RouterView class="everything" />
    <footer>
      <p><i>my name is max, i like design and music woohoo</i></p>
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
  outline: 1px solid var(--vt-c-red);
} */

.everything {
  flex-grow: 1;
  margin: 1rem;
  outline: 1px solid var(--vt-c-red);
}

header {
  position: sticky;
  top: 0;
  z-index: 1;
}

p {
  background-color: transparent !important;
}
</style>
