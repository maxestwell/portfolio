<script setup>
defineProps({
  msg: String,
})
import HoverEffect from '@/components/HoverEffect.vue'

// import { onMounted, ref, onBeforeUnmount, getCurrentInstance } from 'vue'

// const textElement = ref(null)
// const hoverElement = ref(null)

// onMounted(() => {
//   const { appContext } = getCurrentInstance()
//   const applyHoverEffects = () => {
//     const element = hoverElement.value
//     const defaultSettings = "'INKT' 100, 'slnt' 0, 'wdth' 100, 'wght' 500"
//     const hoverSettings = "'INKT' 100, 'slnt' -10, 'wdth' 100, 'wght' 900"

//     const cleanup = appContext.config.globalProperties.$applyHoverEffects(
//       element,
//       defaultSettings,
//       hoverSettings,
//     )

//     // Register cleanup function within setup context
//     onBeforeUnmount(() => cleanup())
//   }

//   // Apply hover effects after text nodes are styled
//   textElement.value.__vueParentComponent.ctx.$nextTick(() => {
//     applyHoverEffects()
//   })
// })
</script>

<template>
  <div class="maxiswell">
    <!-- <div class="logo">
      <Logo />
    </div> -->
    <RouterLink to="/" class="heading">
      <HoverEffect
        defaultSettings="'INKT' 100, 'slnt' 0, 'wdth' 100, 'wght' 500"
        hoverSettings="'INKT' 100, 'slnt' -10, 'wdth' 100, 'wght' 900"
      >
        <h1 ref="textElement">max</h1>
      </HoverEffect>
      <HoverEffect
        defaultSettings="'INKT' 100, 'slnt' 0, 'wdth' 100, 'wght' 500"
        hoverSettings="'INKT' 100, 'slnt' -10, 'wdth' 100, 'wght' 900"
      >
        <h1>is</h1>
      </HoverEffect>
      <HoverEffect
        defaultSettings="'INKT' 100, 'slnt' 0, 'wdth' 100, 'wght' 500"
        hoverSettings="'INKT' 100, 'slnt' -10, 'wdth' 100, 'wght' 900"
      >
        <h1>well</h1>
      </HoverEffect>
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
