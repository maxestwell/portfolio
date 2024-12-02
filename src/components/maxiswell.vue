<script setup>
defineProps({
  msg: String,
})
import HoverEffect from '@/components/HoverEffect.vue'
</script>

<template>
  <div class="maxiswell">
    <!-- <div class="logo">
      <Logo />
    </div> -->
    <RouterLink to="/" class="heading">
      <h1 ref="textElement">max</h1>
      <h1>
        <HoverEffect
          defaultSettings="'INKT' 100, 'slnt' 0, 'wdth' 100, 'wght' 500"
          hoverSettings="'INKT' 100, 'slnt' -10, 'wdth' 100, 'wght' 900"
          >is</HoverEffect
        >
      </h1>
      <h1>well</h1>
    </RouterLink>
  </div>
</template>

<style scoped>
.heading {
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* .logo {
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
} */
</style>
