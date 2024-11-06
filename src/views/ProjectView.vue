<script setup>
import { computed } from 'vue'
import projectsData from '@/projects.json'

const props = defineProps(['projectId'])

const project = computed(() => {
  return projectsData.find((p) => p.id === parseInt(props.projectId, 10))
})

const pretty = (value) => {
  if (!value) return ''
  value = JSON.stringify(value, null, 4)
  return value
}

defineExpose({ project, pretty })
</script>

<template>
  <div>
    <router-link :to="{ name: 'home' }">Go back</router-link>

    <h3>{{ project.title }}</h3>
    <p>{{ project }}</p>
  </div>
</template>

<style scoped></style>
