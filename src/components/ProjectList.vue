<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const router = useRouter()

function showProject(id) {
  router.push({
    name: 'project',
    params: {
      projectId: id,
    },
  })
}
</script>

<template>
  <a @click="showProject(project.id)" class="details">
    <div class="image-container">
      <img
        v-if="project.media[0].type === 'image'"
        :src="project.media[0].path"
        :alt="project.media[0].alt"
        class="project-image"
      />
      <img
        v-else-if="project.media[0].type === 'gif'"
        :src="project.media[0].path"
        :alt="project.media[0].alt"
        class="project-gif"
      />
    </div>

    <h4 class="area-variable">{{ project.text[0].title }}</h4>
  </a>
</template>

<style scoped>
.details {
  /* background-color: var(--vt-c-gray); */
  width: 100%;
  display: grid;
  grid: auto-flow / 1fr 3fr;
  gap: 1rem;
  align-items: end;
}

.image-container {
  width: 100%;
  padding-top: 100%;
  position: relative;
  border: 1px solid var(--vt-c-red);
}

.project-image,
.project-gif,
.project-video {
  /* padding: 1rem; */
  /* border: 1px solid var(--vt-c-red); */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
}

.date {
  position: absolute;
}

h4 {
  transition:
    font-size 0.3s ease,
    font-variation-settings 0.3s ease,
    --font-slnt,
    --font-wght;
}

.details:hover h4 {
  --font-slnt: -10;
  --font-wght: 550;
  font-size: 2rem;
}
</style>
