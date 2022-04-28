<template>
  <div id="app" class="d-flex flex-column">
    <a href="#main-content" class="skiplink bg-dark p-2">
      <span class="text-orange font-weight-bold">Skip to content</span>
    </a>
    <app-nav />
    <div id="main-content" class="container-fluid px-0 py-4">
      <router-view />
    </div>
    <!-- TODO: footer -->
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
@import "~@/scss/variables";
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~@/scss/mixins/bg-size-cover";

// TODO: $font-size-base = 1.5rem?
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: gray("900");
  min-height: 100%;
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

#main-content {
  flex: 1;

  // TODO: parallax the bg?
  background-image: url("~@/assets/flower_bg.jpg");
  @include bg-size-cover;

  > div.row {
    width: 100%;
  }

  // TODO: dark mode theme
  div.runner {
    background-color: $uc-pale-yellow;
    padding: 2rem 0;
  }
}
</style>
