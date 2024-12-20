<script setup>
import { RouterLink } from 'vue-router'
import About from '@/components/About.vue'
import Links from '@/components/Links.vue'
</script>

<template>
  <main class="home">
    <div class="top-home">
      <div class="icon-container">
        <Links />
      </div>
      <div class="about-home">
        <h2 class="area-variable slant bold">who is maxwell?</h2>
        <div class="about-container">
          <About />
        </div>
      </div>
    </div>
    <div class="links links-design">
      <RouterLink to="/projects">
        <h4 class="hover-effect area-variable">design</h4>
      </RouterLink>
    </div>
    <div class="links links-music">
      <RouterLink to="/music">
        <h4 class="hover-effect area-variable">music</h4>
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
.home {
  position: relative;
  display: grid;
  grid: repeat(2, 1fr) / repeat(2, 1fr);
  gap: 1rem;
  height: 100%;
}

h2.area-variable {
  --font-wght: 900;
}

.top-home {
  grid-column: span 2;
  grid-row: 1;
  display: flex;
  gap: 1rem;
}

.about-home {
  flex-grow: 1;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: flex-end;
}

.icon-container {
  padding: 0rem 2rem;
  line-height: 0;
  background-color: var(--vt-c-yellow);
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-container {
  padding-right: 25%;
  background-color: var(--vt-c-red);
  height: fit-content;
}

.links-design {
  border: 1px solid var(--vt-c-red);
  width: 100%;
  grid-column: 1;
  grid-row: 2;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.links-music {
  border: 1px solid var(--vt-c-red);
  width: 100%;
  grid-column: 2;
  grid-row: 2;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

a {
  width: fit-content;
}

.links a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.hover-effect {
  transition:
    font-variation-settings 0.3s ease,
    --font-wght,
    --font-slnt,
    font-size 0.3s ease;
}

.links:hover .hover-effect {
  --font-wght: 500;
  --font-slnt: -10;
  font-size: 2.5rem;
}
</style>
