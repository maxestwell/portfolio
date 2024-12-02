<script setup>
defineProps({
  msg: String,
})
import HoverEffect from '@/components/HoverEffect.vue'
</script>

<script>
export default {
  data() {
    return {
      clickSequence: [],
      showMessage: false,
      messages: ['yes!', 'i think so?...', 'who?', 'OF COURSE!!'],
      currentMessage: '',
      randomTop: '50%',
      randomLeft: '50%',
      randomRotation: '0deg',
    }
  },
  methods: {
    handleClick(word) {
      this.clickSequence.push(word)
      if (this.clickSequence.join(' ') === 'is max well') {
        this.currentMessage = this.messages[Math.floor(Math.random() * this.messages.length)]
        this.randomTop = Math.random() * 80 + 'vh'
        this.randomLeft = Math.random() * 80 + 'vw'
        this.randomRotation = Math.random() * 360 + 'deg'
        this.showMessage = true
        setTimeout(() => {
          this.showMessage = false
          this.clickSequence = []
        }, 3000) // Flash text disappears after 3 seconds
      } else if (this.clickSequence.length > 3) {
        this.clickSequence = []
      }
    },
  },
}
</script>

<template>
  <div class="maxiswell">
    <!-- <div class="logo">
      <Logo />
    </div> -->
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
      v-if="showMessage"
      class="message-container text-node-ignore"
      :style="{
        top: randomTop,
        left: randomLeft,
        transform: `translate(-50%, -50%) rotate(${randomRotation})`,
      }"
    >
      {{ currentMessage }}
    </div>
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

.message-container {
  position: fixed;
  background-color: yellow;
  padding: 20px;
  font-size: 1rem;
  border: 2px solid black;
  z-index: 1;
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
