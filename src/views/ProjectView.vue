<script setup>
import Project from '@/components/Project.vue'
const props = defineProps({
  projectId: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <Project :projectId="projectId" />
</template>

<style scoped></style>
