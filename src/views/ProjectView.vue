<script setup>
import { computed } from 'vue'
import projectsData from '@/projects.json'

// Define the `projectId` prop to identify the project to display
const props = defineProps(['projectId'])

// Find the project that matches the provided ID
const project = computed(() => {
  return projectsData.find((p) => p.id === parseInt(props.projectId))
  // return projectsData.find((p) => p.id === parseInt(props.projectId, 10))
})
</script>

<template>
  <div>
    <!-- <router-link :to="{ name: 'home' }">Go back</router-link> -->
    <!-- Display the project details if found -->
    <div v-if="project" class="project-info">
      <img :src="project.img.path" :alt="project.img.alt" class="project-image" />
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
    </div>

    <!-- Show a message if the project is not found -->
    <div v-else>
      <p>Project not found.</p>
    </div>
  </div>
</template>

<style scoped>
.project-image {
  width: 100%;
  height: auto;
}

h3 {
  margin-top: 10px;
}

p {
  margin-top: 5px;
}
</style>
