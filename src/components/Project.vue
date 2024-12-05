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
    <div class="project-media-container">
      <div v-for="media in project.media" :key="media.path" class="project-media">
        <img
          v-if="media.type === 'image'"
          :src="media.path"
          :alt="media.alt"
          class="project-image"
        />
        <img
          v-else-if="media.type === 'gif'"
          :src="media.path"
          :alt="media.alt"
          class="project-gif"
        />
        <video
          v-else-if="media.type === 'video'"
          :src="media.path"
          :alt="media.alt"
          class="project-video"
          controls
        ></video>
      </div>
    </div>
    <div class="project-text">
      <div class="text-h1">
        <h1 :style="fontStyle">{{ project.text[0].title }}</h1>
      </div>
      <div class="text-h4">
        <h3 class="heading-wrapper-ignore">{{ project.text[0].subtitle }}</h3>
      </div>
      <div class="text-p">
        <h6 class="date">{{ project.text[0].date }}</h6>
      </div>
      <div class="text-p">
        <p>{{ project.text[0].description }}</p>
      </div>
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

.project-image,
.project-gif,
.project-video {
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
.text-h4,
.text-p {
  padding-bottom: 1em;
}

h1,
h4,
p {
  background-color: transparent !important;
}
</style>
