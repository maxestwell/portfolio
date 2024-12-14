<script setup>
import { reactive } from 'vue'
import Logo from '@/components/icons/Logo.vue'

const props = defineProps({
  msg: String,
})

const state = reactive({
  clickSequence: [],
  showMessage: false,
  messages: ['OF COURSE!!', 'yes!', 'u betcha', 'maybe', 'i dunno', 'i think so', 'nope', 'who?'],
  currentMessage: '',
  randomTop: '50%',
  randomLeft: '50%',
  randomRotation: '0deg',
  timer: null,
})

function resetClickSequence() {
  console.log('Resetting click sequence')
  state.clickSequence = []
  if (state.timer) {
    clearTimeout(state.timer)
    state.timer = null
  }
}

function handleClick(word) {
  console.log(`Clicked word: ${word}`)
  const correctSequence = ['is', 'max', 'well']
  const nextWord = correctSequence[state.clickSequence.length]

  if (word !== nextWord) {
    console.log('Incorrect word, resetting sequence')
    resetClickSequence()
    return
  }

  state.clickSequence.push(word)
  console.log(`Current sequence: ${state.clickSequence}`)

  if (state.clickSequence.length === 1) {
    console.log('Starting timer for 10 seconds')
    state.timer = setTimeout(resetClickSequence, 10000) // Reset sequence after 10 seconds
  }

  if (state.clickSequence.join(' ') === 'is max well') {
    console.log('Correct sequence completed')
    state.currentMessage = state.messages[Math.floor(Math.random() * state.messages.length)]
    state.randomTop = Math.random() * 95 + 'dvh'
    state.randomLeft = Math.random() * 95 + 'dvw'
    state.randomRotation = Math.random() * 360 + 'deg'
    state.showMessage = true
    setTimeout(() => {
      state.showMessage = false
      resetClickSequence()
    }, 3000) // Flash text disappears after 3 seconds
  } else if (state.clickSequence.length > 3) {
    console.log('Sequence too long, resetting')
    resetClickSequence()
  }
}
</script>

<template>
  <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
  <div class="heading">
    <RouterLink to="/">
      <h1 ref="textElement" @click="handleClick('max')">max</h1>
    </RouterLink>
    <!-- &nbsp;&nbsp; -->
    <RouterLink to="/">
      <h1 @click="handleClick('is')">is</h1>
    </RouterLink>
    <!-- &nbsp;&nbsp; -->
    <RouterLink to="/">
      <h1 @click="handleClick('well')">well</h1>
    </RouterLink>
  </div>

  <div
    v-if="state.showMessage"
    class="message-container text-node-ignore"
    :style="{
      top: state.randomTop,
      left: state.randomLeft,
      transform: `translate(-50%, -50%) rotate(${state.randomRotation})`,
    }"
  >
    <Logo class="logo" />
    <h6 class="text-overlay text-node-ignore">
      <i>{{ state.currentMessage }}</i>
    </h6>
  </div>
</template>

<style scoped>
h1 {
  background-color: var(--vt-c-blue) !important;
  color: var(--vt-c-white);
  padding: 0rem 1rem;
  transition:
    font-variation-settings 0.3s ease,
    --font-slnt,
    --font-wdth,
    --font-wght,
    padding 0.3s ease;
}

h1:hover {
  --font-slnt: -10;
  --font-wdth: 200;
  --font-wght: 900;
  padding: 0rem 0rem;
}

@media (hover: hover) {
  a:hover {
    background-color: transparent !important;
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: var(--vt-c-white);
  background-color: transparent !important;
}

.logo {
  fill: var(--vt-c-yellow);
  stroke-width: 0;
  width: 10em;
  height: 10em;
}
</style>
