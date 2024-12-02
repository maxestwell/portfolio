<script setup>
import { reactive } from 'vue'
import HoverEffect from '@/components/HoverEffect.vue'

const props = defineProps({
  msg: String,
})

const state = reactive({
  clickSequence: [],
  showMessage: false,
  messages: ['yes!', 'i think so?...', 'who?', 'OF COURSE!!'],
  currentMessage: '',
  randomTop: '50%',
  randomLeft: '50%',
  randomRotation: '0deg',
})

function handleClick(word) {
  state.clickSequence.push(word)
  if (state.clickSequence.join(' ') === 'is max well') {
    state.currentMessage = state.messages[Math.floor(Math.random() * state.messages.length)]
    state.randomTop = Math.random() * 95 + 'vh'
    state.randomLeft = Math.random() * 95 + 'vw'
    state.randomRotation = Math.random() * 360 + 'deg'
    state.showMessage = true
    setTimeout(() => {
      state.showMessage = false
      state.clickSequence = []
    }, 3000) // Flash text disappears after 3 seconds
  } else if (state.clickSequence.length > 3) {
    state.clickSequence = []
  }
}
</script>

<template>
  <div class="maxiswell">
    <RouterLink to="/" class="heading">
      <HoverEffect
        defaultSettings="'INKT' 100, 'slnt' 0, 'wdth' 100, 'wght' 500"
        hoverSettings="'INKT' 100, 'slnt' -10, 'wdth' 200, 'wght' 900"
      >
        <h1 ref="textElement" @click="handleClick('max')">max</h1>
      </HoverEffect>
      <HoverEffect
        defaultSettings="'INKT' 100, 'slnt' 0, 'wdth' 100, 'wght' 500"
        hoverSettings="'INKT' 100, 'slnt' -10, 'wdth' 200, 'wght' 900"
      >
        <h1 @click="handleClick('is')">is</h1>
      </HoverEffect>
      <HoverEffect
        defaultSettings="'INKT' 100, 'slnt' 0, 'wdth' 100, 'wght' 500"
        hoverSettings="'INKT' 100, 'slnt' -10, 'wdth' 200, 'wght' 900"
      >
        <h1 @click="handleClick('well')">well</h1>
      </HoverEffect>
    </RouterLink>
    <div
      v-if="state.showMessage"
      class="message-container text-node-ignore"
      :style="{
        top: state.randomTop,
        left: state.randomLeft,
        transform: `translate(-50%, -50%) rotate(${state.randomRotation})`,
      }"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path
          d="M31.2,86.7c-.5-1.5-2.1-2.3-3.6-2-8.1,1.4-16.5-2.2-20.9-9.7-4.3-7.5-3.2-16.7,2.1-23,1-1.2,1-2.9,0-4.1-5.3-6.3-6.4-15.4-2.1-23,4.3-7.5,12.8-11.1,20.9-9.7,1.5.3,3.1-.6,3.6-2C33.9,5.5,41.3,0,50,0s16.1,5.5,18.8,13.3c.5,1.5,2.1,2.3,3.6,2,8.1-1.4,16.5,2.2,20.9,9.7,4.3,7.5,3.2,16.7-2.1,23-1,1.2-1,2.9,0,4.1,5.3,6.3,6.4,15.4,2.1,23-4.3,7.5-12.8,11.1-20.9,9.7-1.5-.3-3.1.6-3.6,2-2.8,7.7-10.2,13.3-18.8,13.3-8.7,0-16.1-5.5-18.8-13.3Z"
        />
      </svg>
      <div class="text-overlay">{{ state.currentMessage }}</div>
    </div>
  </div>
</template>

<style scoped>
@media (hover: hover) {
  a:hover {
    background-color: transparent;
  }
}

.heading {
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.message-container {
  position: fixed;
  z-index: 1;
  pointer-events: none;
}

.text-overlay {
  font-size: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
}

svg {
  fill: var(--vt-c-yellow);
  stroke-width: 0;
  width: 6em;
  height: 6em;
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
