<script setup>
defineProps({
  msg: String,
})
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { RouterLink } from 'vue-router'

const textElement = ref(null)

onMounted(() => {
  const handleMouseEnter = () => {
    const isElement = textElement.value?.querySelector('span')
    if (isElement) {
      gsap.to(isElement, {
        duration: 0.5,
        fontVariationSettings: "'slnt' -10, 'wght' 900",
      })
    }
  }

  const handleMouseLeave = () => {
    const isElement = textElement.value?.querySelector('span')
    if (isElement) {
      gsap.to(isElement, {
        duration: 0.5,
        fontVariationSettings: "'slnt' 0, 'wght' 500",
      })
    }
  }

  textElement.value?.addEventListener('mouseenter', handleMouseEnter)
  textElement.value?.addEventListener('mouseleave', handleMouseLeave)
})
</script>

<template>
  <div class="maxiswell">
    <h1 class="heading" ref="textElement">
      <RouterLink to="/">max <span>is</span> well</RouterLink>
    </h1>
  </div>
</template>

<style scoped>
span {
  font-style: normal;
  font-variation-settings:
    'slnt' 0,
    'wght' 500;
}

.heading {
  display: inline-block;
}
</style>
