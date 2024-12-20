<script setup>
import { reactive } from 'vue'
import Logo from '@/components/icons/Logo.vue'
import IconLeft from './icons/IconLeft.vue'
import IconRight from './icons/IconRight.vue'

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
    <RouterLink to="/" class="max-header">
      <IconLeft class="icon target1" />
      <h1 ref="textElement" @click="handleClick('max')" class="area-variable anchor">max</h1>
      <IconRight class="icon target2" />
    </RouterLink>
    <!-- &nbsp;&nbsp; -->
    <RouterLink to="/" class="max-header">
      <IconLeft class="icon target1" />
      <h1 @click="handleClick('is')" class="area-variable anchor">is</h1>
      <IconRight class="icon target2" />
    </RouterLink>
    <!-- &nbsp;&nbsp; -->
    <RouterLink to="/" class="max-header">
      <IconLeft class="icon target1" />
      <h1 @click="handleClick('well')" class="area-variable anchor">well</h1>
      <IconRight class="icon target2" />
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
    <h6 class="area-variable text-overlay text-node-ignore slant">
      {{ state.currentMessage }}
    </h6>
  </div>
</template>

<style scoped>
.icon {
  pointer-events: none;
  z-index: -1;
  height: 100%;
  fill: var(--vt-c-blue);
  /* stroke: var(--vt-c-blue);
  stroke-width: 1px; */
}

.anchor {
  anchor-name: --my-anchor;
}

.target1 {
  position: absolute;
  position-anchor: --my-anchor;
  right: calc(anchor(--my-anchor 50%) + 35%);
  /* position-area: center left; */
}

.target2 {
  position: absolute;
  position-anchor: --my-anchor;
  left: calc(anchor(--my-anchor 50%) + 35%);

  /* position-area: center right; */
}

.heading {
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100%;
}

.max-header {
  position: relative;
  display: inline-block; /* Change display to inline-block */
  max-height: fit-content;
  display: flex;
}

/* .icon {
  position: absolute;
  transform: scale(1);
  fill: none;
  stroke: var(--vt-c-blue);
  stroke-width: 1px;
  width: 100%;
  height: 100%;
} */

h1::before {
  pointer-events: none;
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 72.5%;
  height: 100%;
  background-color: var(--vt-c-blue);
  z-index: -1;
  transition: transform 0.3s ease;
}

h1 {
  /* border: solid var(--vt-c-blue);
  border-width: 1px 0px; */
  /* background-color: var(--vt-c-blue) !important; */
  color: var(--vt-c-white);
  padding: 0rem 1rem;
  transition:
    font-variation-settings 0.3s ease,
    --font-wght,
    --font-slnt,
    --area-wdth,
    padding 0.3s ease;
}

h1:hover {
  --font-wght: 900;
  --font-slnt: -10;
  --area-wdth: 200;
  padding: 0rem 0rem;
}

@media (hover: hover) {
  a:hover {
    background-color: transparent !important;
  }
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
