<script setup>
// import { defineComponent } from 'vue'
import projectsData from '@/project.json'
import ProjectList from '@/components/ProjectList.vue'
</script>

<template>
  <div class="project-grid" v-if="projectsData">
    <ProjectList v-for="project in projectsData" :key="project.id" :project="project" />
  </div>
</template>

<style scoped>
.project-grid {
  display: grid;
  gap: 1rem;
}
</style>
