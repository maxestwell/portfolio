<script setup>
defineProps({
  msg: String,
})
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { RouterLink } from 'vue-router'
import Logo from '@/components/Logo.vue'

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
    <div class="logo">
      <Logo />
    </div>
    <h1 class="heading" ref="textElement">
      <RouterLink to="/">max <span>is</span> well</RouterLink>
    </h1>
  </div>
</template>

<style scoped>
.maxiswell {
  display: flex;
  align-items: center;
}

.logo {
  width: 3em;
  height: auto;
  margin-right: 1em;
}

.logo:hover {
  animation: rotate 10s linear infinite;
  transform-origin: 50% 50%;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

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
