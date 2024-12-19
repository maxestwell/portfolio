<script setup>
import IconBandcamp from './icons/IconBandcamp.vue'
import IconGithub from './icons/IconGithub.vue'
import IconInstagram from './icons/IconInstagram.vue'
import IconLinkedin from './icons/IconLinkedIn.vue'
</script>

<template>
  <div class="icons">
    <a class="linkedin-icon" href="https://www.linkedin.com/in/maxiswell">
      <IconLinkedin />
    </a>
    <a class="instagram-icon" href="https://www.instagram.com/est.well">
      <IconInstagram />
    </a>
    <a class="github-icon" href="https://github.com/maxestwell">
      <IconGithub />
    </a>
    <a class="bandcamp-icon" href="https://maxestwell.bandcamp.com">
      <IconBandcamp />
    </a>
  </div>
</template>

<style scoped>
.icons {
  height: 50%;
  flex-grow: 1;
  line-height: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

a * {
  height: 1rem;
  width: 1rem;
}

a {
  line-height: 0;
  display: inline-block;
  height: fit-content;
  /* padding: 0 0.5rem; */
}
</style>
