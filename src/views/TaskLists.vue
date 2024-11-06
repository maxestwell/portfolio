<!-- <template>
  <div>
    <router-link :to="{ name: 'project', params: { projectId } }"
      >Go back</router-link
    >

    <code class="code-box">{{ taskLists }}</code>
  </div>
</template>

<script>
import projectsData from "@/projects.json";

export default {
  name: "Project",
  props: ["projectId"],
  computed: {
    taskLists() {
      return projectsData.find((p) => p.id === parseInt(this.projectId, 10))
        .task_lists.data;
    },
  },
  filters: {
    pretty: function (value) {
      if (!value) return "";
      value = JSON.stringify(value, null, 4);
      return value;
    },
  },
};
</script>

<style>
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
</style> -->
