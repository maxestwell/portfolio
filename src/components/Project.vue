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
  if (!project.value || !project.value.text[0].font) return {}
  const { family, ...variations } = project.value.text[0].font
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
  <div v-if="project" class="project-container" v-heading-wrapper>
    <div class="project-images">
      <img
        v-for="image in project.img"
        :key="image.path"
        :src="image.path"
        :alt="image.alt"
        class="project-image"
      />
    </div>
    <div class="project-text">
      <h1 :style="fontStyle">{{ project.text[0].title }}</h1>
      <h2>{{ project.text[0].subtitle }}</h2>
      <p>{{ project.text[0].date }}</p>
      <p>{{ project.text[0].description }}</p>
    </div>
  </div>
  <div v-else>
    <p>Project not found.</p>
  </div>
</template>

<style scoped>
.project-container {
  display: flex;
  gap: 1rem;
}

.project-images {
  width: 100%;
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
}

.project-image {
  /* flex: 2 2 auto; */
  width: 100%;
  height: fit-content;
  object-fit: cover;
}

.project-text {
  flex: 1;
  position: sticky;
  top: 0;
  align-self: flex-start;
}

h1 {
  width: min-content;
}

/* h3 {
  margin-top: 10px;
}

p {
  margin-top: 5px;
} */
</style>
