<script setup lang="ts">
defineProps<{
  msg: string
}>()
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="maxiswell">
    <h1 class="heading">
      <RouterLink to="/">max <i>is</i> well</RouterLink>
    </h1>
  </div>
</template>

<style scoped>
a {
  /* height: 100%; */
  font-weight: 700;
}

i {
  font-style: italic;
  font-weight: 700;
}

/* .maxiswell {
  display: flex;
  align-items: baseline;
} */
</style>
