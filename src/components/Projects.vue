<template>
  <div class="list-projects">
    <Project v-for="project in projects" :key="project.id" :project="project"/>
  </div>
</template>

<script>
import Project from "@/components/Project.vue";

export default {
  name: "Projects",
  data: () => ({
    //
  }),

  components: {
    Project
  },

  props: {
    projects: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
</style>


