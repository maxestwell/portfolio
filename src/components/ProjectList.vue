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
      <img :src="project.img.path" :alt="project.img.alt" class="project-image" />
    </div>
    <h5>{{ project.date }}</h5>
    <h4>{{ project.title }}</h4>
  </a>
</template>

<style scoped>
.details {
  background-color: #ccc;

  width: 100%;
  display: grid;
  grid: auto-flow / 1fr 4fr;
  gap: 1rem;
  align-items: end;
  /* outline: 1px solid red; */
}

.image-container {
  width: 100%;
  padding-top: 100%;
  position: relative;
}

.project-image {
  /* background-color: #ccc; */
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
}

h5 {
  position: absolute;
}
</style>
