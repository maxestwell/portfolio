<script setup>
import { computed } from 'vue'
import projectsData from '@/assets/data/project.json'

const props = defineProps({
  projectId: {
    type: [String, Number],
    required: true,
  },
})

const project = computed(() => projectsData.find((p) => p.id === Number(props.projectId)))

const fontStyle = computed(() => {
  if (!project.value || !project.value.font) return {}
  const { family, ...variations } = project.value.font
  const fontVariationSettings = Object.entries(variations)
    .map(([key, value]) => `'${key}' ${value}`)
    .join(', ')
  return {
    fontFamily: family,
    fontVariationSettings,
  }
})
</script>

<template>
  <div v-if="project" class="project-container">
    <img :src="project.img.path" :alt="project.img.alt" class="project-image" />
    <div class="project-text">
      <h1 :style="fontStyle">{{ project.title }}</h1>
      <p>{{ project.date }}</p>
      <p>{{ project.description }}</p>
    </div>
  </div>
  <div v-else>
    <p>Project not found.</p>
  </div>
</template>

<style scoped>
.project-container {
  display: grid;
  grid: auto-flow / 2fr 1fr;
  gap: 1rem;
}

.project-image {
  width: 100%;
  height: auto;
}

.project-text {
  display: flex;
  flex-direction: column;
}

/* h3 {
  margin-top: 10px;
}

p {
  margin-top: 5px;
} */
</style>
