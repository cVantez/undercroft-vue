<template>
  <b-navbar type="dark" variant="dark" class="d-flex">
    <b-navbar-brand to="/">
      UNDER<span class="font-weight-bold">CROFT</span>
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-item
        to="/"
        exact
        class="px-2"
        link-classes="px-0 pb-0"
      >
        Home
      </b-nav-item>
      <b-nav-item
        to="/about"
        exact
        class="px-2"
        link-class="px-0 pb-0"
      >
        About
      </b-nav-item>
    </b-navbar-nav>
    <dark-mode-toggle />
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
li.nav-item {
  a.nav-link {
    &.router-link-exact-active,
    &:hover,
    &:focus {
      border-bottom: 2px solid;
    }
  }
}
</style>
