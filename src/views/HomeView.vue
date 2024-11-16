<script setup>
// import { defineComponent } from 'vue'
import projectsData from '@/project.json'
import Projects from '@/components/Projects.vue'

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
  <div class="component-wrapper component-wrapper--data-table">
    <transition name="fade" mode="out-in" appear>
      <div v-if="projectsData">
        <Projects :projects="projectsData" />
      </div>
    </transition>
  </div>
</template>

<style scoped></style>
