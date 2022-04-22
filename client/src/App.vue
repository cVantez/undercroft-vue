<template>
  <div id="app">
    <a href="#main-content" class="skiplink bg-dark p-2">
      <span class="text-orange font-weight-bold">Skip to content</span>
    </a>
    <app-nav />
    <div id="main-content" class="mt-4">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppNav from '@/components/AppNav.vue';

export default {
  name: 'UndercroftApp',
  components: { AppNav }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.skiplink {
  left: 46%;
  position: absolute;
  transform: translateY(-100%);
  transition: transform 0.3s;
  font-size: 1.2rem;

  &:focus {
    transform: translateY(0%);
    z-index: 1100;
  }
}
</style>
