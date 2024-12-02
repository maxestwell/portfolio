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
    <img :src="project.img.path" :alt="project.img.alt" class="project-image" />
    <h4>{{ project.title }}</h4>
  </a>
</template>

<style scoped>
.details {
  height: 10rem;
  width: 100%;
  /* Add your styles here */
  display: grid;
  grid: auto-flow / 1fr 2fr;
  gap: 1rem;
  align-items: end;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
}
</style>
