<script setup lang="ts">
defineProps<{
  msg: string
}>()
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { RouterLink, RouterView } from 'vue-router'

const textElement = ref<HTMLElement | null>(null)

onMounted(() => {
  const handleMouseEnter = () => {
    const isElement = textElement.value?.querySelector('i')
    if (isElement) {
      gsap.to(isElement, {
        duration: 0.5,
        fontVariationSettings: "'slnt' -10, 'wght' 900",
      })
    }
  }

  const handleMouseLeave = () => {
    const isElement = textElement.value?.querySelector('i')
    if (isElement) {
      gsap.to(isElement, {
        duration: 0.5,
        fontVariationSettings: "'slnt' 0, 'wght' 400",
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
      <RouterLink to="/">max <i>is</i> well</RouterLink>
    </h1>
  </div>
</template>

<style scoped>
i {
  font-style: normal;
  font-variation-settings:
    'slnt' 0,
    'wght' 400;
}

.heading {
  display: inline-block;
}
</style>
