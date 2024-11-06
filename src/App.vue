<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <HelloWorld msg="max is well" />

      <nav>
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  /* line-height: 1.5; */
  /* max-width: 100vh; */
  height: 90px;
  position: sticky;
  top: 0;
}

header .wrapper {
  height: inherit;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: flex-end;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a {
  font-size: 12px;
  font-weight: 500;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}
</style>
