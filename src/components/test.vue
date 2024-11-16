<script setup>
import { computed } from 'vue'
import projectsData from '@/assets/data/project.json'

const props = defineProps({
  projectId: {
    type: [String, Number],
    required: true,
  },
})

const project = computed(() =>
  projectsData.find((p) => p.id === Number(props.projectId))
)
</script>

<template>
  <div>
    <div v-if="project" class="project-info">
      <img :src="project.img.path" :alt="project.img.alt" class="project-image" />
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
    </div>
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
