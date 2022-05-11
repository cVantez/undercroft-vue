<template>
  <div id="app" class="d-flex flex-column">
    <a href="#main-content" class="skiplink bg-dark p-2">
      <span class="text-orange font-weight-bold">Skip to content</span>
    </a>
    <app-nav />
    <div id="main-content" class="container-fluid px-0 py-4">
      <div class="row w-100 ml-0">
        <div class="runner col-lg-8 col-10 mx-auto">
          <router-view />
        </div>
      </div>
    </div>
    <app-footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import AppFooter from '@/components/AppFooter.vue';
import AppNav from '@/components/AppNav.vue';

export default {
  name: 'UndercroftApp',
  components: { AppNav, AppFooter },
  async created() {
    await this.loadMeta();
  },
  methods: {
    ...mapActions('meta', { loadMeta: 'load' })
  }
};
</script>

<style lang="scss">
@import "~@/scss/variables";
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~@/scss/mixins/bg-size-cover";

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

  background-image: url("~@/assets/flower_bg.jpg");
  @include bg-size-cover;

  // TODO: dark mode theme?
  div.runner {
    background-color: $uc-runner-bg;
    padding: 2rem 0;
  }
}
</style>
