<script setup>
import { ref, watch, computed } from 'vue'
import { useRouter } from 'vue-router'
import projectsData from '@/assets/data/project.json'

const props = defineProps({
  projectId: {
    type: [String, Number],
    required: true,
  },
})

const project = ref(null)
const router = useRouter()

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

const splitTitle = computed(() => {
  return project.value?.text?.[0]?.title.split(' ') || []
})

function goBack() {
  router.push({ name: 'projects' })
}
</script>

<template>
  <div v-if="project">
    <div class="back-button-container">
      <a @click="goBack" class="back-button"><p class="area-variable">back</p></a>
    </div>
    <div class="project-container">
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
      <div class="project-text-container">
        <div class="project-text text-h1">
          <h1
            v-for="(word, index) in splitTitle"
            :key="index"
            :style="fontStyle"
            class="area-variable word"
          >
            {{ word }}
          </h1>
        </div>
        <div class="project-text text-h3">
          <h3 class="heading-wrapper-ignore area-variable slant">
            {{ project.text[0].subtitle }}
          </h3>
        </div>
        <div class="project-text text-h6">
          <h6 class="heading-wrapper-ignore area-variable">{{ project.text[0].date }}</h6>
        </div>
        <div class="project-text text-p">
          <p
            v-for="(paragraph, index) in project.text[0].description"
            :key="index"
            class="area-variable"
          >
            {{ paragraph }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p class="area-variable">Project not found.</p>
    <router-link to="/">
      <h4 class="area-variable">Return to home</h4>
    </router-link>
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
  border: 1px solid var(--vt-c-red);
}

/* .project-media img {
  vertical-align: bottom;
} */

.project-type {
  width: 100%;
  height: fit-content;
  object-fit: cover;
}

.project-text-container {
  flex: 1;
  position: sticky;
  top: 0;
  align-self: flex-start;
}

.project-text {
  padding-bottom: 1em;
}

.project-text > * {
  background-color: transparent !important;
}

p {
  padding-bottom: 1em;
}

p:last-child {
  padding-bottom: 0rem;
}

.text-p {
  padding-bottom: 0em;
}

.word {
  display: block;
  margin: 0;
}

.back-button-container {
  position: sticky;
  top: 95%;
  z-index: 1;
}

.back-button {
  position: absolute;
  /* bottom: 50%; */

  border: none;
  cursor: pointer;
  min-height: 100%;
  background-color: var(--vt-c-blue);
  color: var(--vt-c-white);
}

.back-button:hover {
  background-color: var(--vt-c-red);
}
</style>
