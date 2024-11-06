<template>
  <div class="project">
    <h3>{{ project.title }}</h3>
    <button @click="showProject(project.id)">View project</button>
  </div>
</template>

<script>
export default {
  name: "Project",

  computed: {
    //
  },

  methods: {
    showProject(id) {
      this.$router.push({
        name: "project",
        params: {
          projectId: this.project.id
        }
      });
    }
  },

  props: {
    project: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.project {
  border: 1px solid #ddd;
  padding: 0.25em 1em;
  margin: 0 0 1rem;
}
</style>
