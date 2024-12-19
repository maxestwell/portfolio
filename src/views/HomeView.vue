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
    <div class="links-home">
      <!-- <h2 class="area-variable slant">what does maxwell do?/h2> -->
      <div class="links-container">
        <RouterLink to="/projects">
          <h4 class="hover-effect area-variable">design</h4>
        </RouterLink>
        <h5 class="area-variable">+</h5>
        <RouterLink to="/music">
          <h4 class="hover-effect area-variable">music</h4>
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<style scoped>
.home {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  height: 100%;
}

h2.area-variable {
  --font-wght: 900;
}

.top-home {
  flex-grow: 1;
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
  /* padding: 1rem; */
  padding-right: 25%;
  background-color: var(--vt-c-red);
  height: fit-content;
}

.links-home {
  flex-grow: 1;
  display: flex;
  gap: 1rem;
  flex-direction: column;
}

.links-container {
  flex-grow: 1;
  border: 1px solid var(--vt-c-red);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

a {
  width: fit-content;
}

.hover-effect {
  transition:
    font-variation-settings 0.3s ease,
    --font-wght,
    --font-slnt,
    font-size 0.3s ease;
}

.hover-effect:hover {
  --font-wght: 500;
  --font-slnt: -10;
  font-size: 2.5rem;
}
</style>
