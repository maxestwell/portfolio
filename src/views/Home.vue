<script>
import projectsData from "@/projects.json";

import Projects from "@/components/Projects.vue";

export default {
  name: "Home",
  data: () => ({
    projectsData
  }),
  components: {
    Projects
  },
  filters: {
    pretty: function(value) {
      if (!value) return "";
      value = JSON.stringify(value, null, 4);
      return value;
    }
  }
};
</script>

<template>
  <div class="component-wrapper component-wrapper--data-table">
    <transition name="fade" mode="out-in" appear>
      <div v-if="projectsData">
        <Projects :projects="projectsData"/>
        <hr>
        <h2>Projects:</h2>
        <!-- <code class="code-box">{{ projectsData }}</code> -->
      </div>
      <content-placeholders v-else>
        <content-placeholders-heading/>
        <content-placeholders-text :lines="4"/>
      </content-placeholders>
    </transition>
  </div>
</template>

<style scoped>
body {
  font-family: "Roboto", sans-serif;
  margin: 3rem;
}

.code-box {
  white-space: pre;
  font-size: 10px;
  line-height: 2;
  color: #666;
  max-height: 360px;
  overflow: auto;
  display: block;
  background: #111;
  color: #fafafa;
  padding: 1em;
  margin: 1rem 0;
  box-shadow: 2px 3px 7px rgba(0, 0, 0, 0.25);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 100ms linear;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
