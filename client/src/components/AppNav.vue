<template>
  <b-navbar class="d-flex py-0">
    <b-navbar-brand to="/" class="ml-5">
      UNDER<span class="font-weight-bold">CROFT</span>
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-item to="/" exact link-classes="py-3">
        Home
      </b-nav-item>
      <b-nav-item to="/about" exact link-classes="py-3">
        About
      </b-nav-item>
    </b-navbar-nav>
    <dark-mode-toggle class="mr-5" />
  </b-navbar>
</template>

<script>
import {
  BNavbar,
  BNavbarBrand,
  BNavbarNav,
  BNavItem
} from 'bootstrap-vue';
import DarkModeToggle from '@/components/DarkModeToggle.vue';

export default {
  name: 'AppNav',
  components: {
    BNavbar,
    BNavbarBrand,
    BNavbarNav,
    BNavItem,
    DarkModeToggle
  }
};
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';

nav.navbar {
  background: gray("900");
  color: $white;

  a.navbar-brand {
    color: $white;

    &:hover,
    &:focus {
      color: $white;
      border-bottom: 2px solid $white;
    }
  }

  li.nav-item {
    a.nav-link {
      color: $white;

      &:hover,
      &:focus {
        text-decoration: none;
        background: $white;
        color: gray("900");
      }
    }
  }
}

</style>
