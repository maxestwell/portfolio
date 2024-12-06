<script setup>
import { ref, watch, computed } from 'vue'
import projectsData from '@/assets/data/project.json'

const props = defineProps({
  projectId: {
    type: [String, Number],
    required: true,
  },
})

const project = ref(null)

watch(
  () => props.projectId,
  (newId) => {
    project.value = projectsData.find((p) => p.id === Number(newId))
  },
  { immediate: true },
)

const fontStyle = computed(() => {
  if (!project.value?.text?.[0]?.font) return { fontFamily: 'sans-serif' }
  const { family, ...variations } = project.value.text[0].font
  const fontVariationSettings = Object.entries(variations)
    .map(([key, value]) => `'${key}' ${value}`)
    .join(', ')
  return {
    fontFamily: family,
    fontVariationSettings,
  }
})

const getMediaType = (type) => {
  const mediaMap = {
    image: 'img',
    gif: 'img',
    video: 'video',
  }
  return mediaMap[type] || 'div' // Fallback
}
</script>

<template>
  <div v-if="project" class="project-container" v-heading-wrapper>
    <div class="project-media-container">
      <div v-for="media in project.media" :key="media.path" class="project-media">
        <component
          :is="getMediaType(media.type)"
          :src="media.path"
          :alt="media.alt"
          v-bind="media.type === 'video' ? { controls: true } : {}"
          class="project-type"
        />
      </div>
    </div>
    <div class="project-text">
      <div class="text-h1">
        <h1 :style="fontStyle">{{ project.text[0].title }}</h1>
      </div>
      <div class="text-h3">
        <h3 class="heading-wrapper-ignore">{{ project.text[0].subtitle }}</h3>
      </div>
      <div class="text-h6">
        <h6 class="date">{{ project.text[0].date }}</h6>
      </div>
      <div class="text-p">
        <p v-for="(paragraph, index) in project.text[0].description" :key="index">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Project not found. Please check the project ID.</p>
    <router-link to="/">Return to home</router-link>
  </div>
</template>

<style scoped>
.project-container {
  display: flex;
  gap: 1rem;
}

.project-media-container {
  width: 100%;
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
}

.project-media {
  line-height: 0;
}

/* .project-media img {
  vertical-align: bottom;
} */

.project-type {
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

.text-h1,
.text-h3,
.text-h6,
.text-p {
  padding-bottom: 1em;
}

h1,
h3,
p {
  background-color: transparent !important;
}
</style>
