<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="home">
    <div class="links-container">
      <RouterLink to="/projects">
        <h4 class="hover-effect">design</h4>
      </RouterLink>
      <h5>+</h5>
      <RouterLink to="/music">
        <h4 class="hover-effect">music</h4>
      </RouterLink>
    </div>
    <div class="about">
      <h4>who am i?</h4>
      <p>
        <i>
          As a forward-thinking multidisciplinary designer, I strive to create meaningful and
          engaging experiences through design, driven by my passion for arts, music, and audiovisual
          culture.
        </i>
      </p>
      <!-- <div class="interests">
        <h5>interests:</h5>
        <ul>
          <li><p>music</p></li>
          <li><p>architecture</p></li>
          <li><p>industrial design</p></li>
        </ul>
      </div> -->
    </div>
  </main>
</template>

<style scoped>
.home {
  position: relative;
  display: flex;
  height: 100%;
}

.links-container {
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.about {
  position: absolute;
  bottom: 0;
}

a {
  width: fit-content;
}

.hover-effect {
  transition:
    font-size 0.3s ease,
    font-variation-settings 0.3s ease,
    --font-wght,
    --font-slnt;
}

.hover-effect:hover {
  --font-wght: 500;
  --font-slnt: -10;
  font-size: 2.5rem;
}
</style>
