<script setup>
// import { defineComponent } from 'vue'
import projectsData from '@/project.json'
import Project from '@/components/Project.vue'

// defineComponent({
//   name: 'Home',
//   data: () => ({
//     projectsData,
//   }),
//   components: {
//     Projects,
//   },
//   filters: {
//     // pretty: function (value) {
//     //   if (!value) return ''
//     //   value = JSON.stringify(value, null, 4)
//     //   return value
//     // },
//   },
// })
</script>

<template>
  <div class="project-grid" v-if="projectsData">
    <Project v-for="project in projectsData" :key="project.id" :project="project" />
  </div>
</template>

<style scoped>
.project-grid {
  display: grid;
  gap: 1rem;
}
</style>
