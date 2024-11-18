<script setup>
import { RouterLink, RouterView } from 'vue-router'
import maxiswell from './components/maxiswell.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <maxiswell />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  /* line-height: 1.5; */
  /* max-width: 100vh; */
  height: 90px;
  position: sticky;
  top: 0;
  z-index: 10; /* Add this line */
}

header .wrapper {
  height: inherit;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: flex-end;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a {
  font-size: 12px;
  font-weight: 500;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}
</style>
