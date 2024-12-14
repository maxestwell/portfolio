<script setup>
import { RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import maxiswell from './components/maxiswell.vue'
import projectsData from '@/assets/data/project.json'
import Logo from '@/components/icons/Logo.vue'

const isLoading = ref(true)

async function loadMedia(src) {
  return new Promise((resolve) => {
    const img = new Image()
    img.src = src
    img.onload = resolve
    img.onerror = () => {
      console.error(`Error loading image: ${src}`)
      resolve() // Resolve even if there's an error to continue loading other images
    }
  })
}

async function loadAllData() {
  try {
    // Load JSON data
    const dataPromises = projectsData
      .map((project) => {
        return project.media.map((media) => loadMedia(media.path))
      })
      .flat()

    // Wait for all media assets to load
    await Promise.all(dataPromises)

    // Simulate additional data loading if needed
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Set loading to false once all data is loaded
    isLoading.value = false
  } catch (error) {
    console.error('Error loading data:', error)
  }
}

onMounted(() => {
  loadAllData()
})
</script>

<template>
  <div class="everything-container" v-text-node-styler>
    <div v-if="isLoading" class="loading-overlay">
      <h4 class="text-overlay text-node-ignore"><i>Loading...</i></h4>
      <Logo class="logo" />
    </div>
    <header>
      <maxiswell />
    </header>
    <RouterView class="everything" />
    <footer>
      <p><i>hi, my name is max. i like design and music. woohoo</i></p>
    </footer>
  </div>
</template>

<style scoped>
.everything-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  padding: 1rem;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: var(--vt-c-white);
  background-color: transparent !important;
  z-index: 3;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.logo {
  fill: var(--vt-c-yellow);
  stroke-width: 0;
  width: 15em;
  height: 15em;
  animation: spin 3s linear infinite;
  /* z-index: -10; */
}

header {
  position: sticky;
  top: 0;
  z-index: 1;
}

.everything {
  flex-grow: 1;
  margin: 1rem;
  outline: 1px solid var(--vt-c-red);
}

p {
  background-color: transparent !important;
}
</style>
