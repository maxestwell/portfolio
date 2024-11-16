<script setup>
const props = defineProps({
  projectId: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <test :projectId="projectId" />
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
