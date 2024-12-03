<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="home full-height">
    <RouterLink to="/projects">
      <h4>design</h4>
    </RouterLink>
    <h4>+</h4>
    <RouterLink to="/music">
      <h4>music</h4>
    </RouterLink>
  </main>
</template>

<style scoped>
.home {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
