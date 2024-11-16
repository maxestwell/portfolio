<script setup>
import Project from '@/components/Project.vue'

const props = defineProps({
  projects: Array,
})
</script>

<template>
  <div class="list-projects">
    <Project v-for="project in projects" :key="project.id" :project="project" />
  </div>
</template>


<style scoped>
a {
  font-weight: 700;
}
</style>
