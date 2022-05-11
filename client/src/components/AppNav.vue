<template>
  <b-navbar type="dark" toggleable="md" class="py-0">
    <b-navbar-brand to="/" class="ml-5">
      UNDER<span class="font-weight-bold">CROFT</span>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" class="border-0 my-2 ml-auto mr-4" />
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="text-right ml-auto">
        <b-nav-item to="/" exact link-classes="py-3 pr-5 pr-md-2">
          Home
        </b-nav-item>
        <b-nav-item to="/redwagon" exact link-classes="py-3 pr-5 pr-md-2">
          Red Wagon
        </b-nav-item>
        <b-nav-item to="/getinvolved" exact link-classes="py-3 pr-5 pr-md-2">
          Get Involved
        </b-nav-item>
      </b-navbar-nav>
      <dark-mode-toggle class="text-right mr-5 my-3 my-md-0" />
    </b-collapse>
  </b-navbar>
</template>

<script>
import {
  BCollapse,
  BNavbar,
  BNavbarBrand,
  BNavbarNav,
  BNavbarToggle,
  BNavItem
} from 'bootstrap-vue';
import DarkModeToggle from '@/components/DarkModeToggle.vue';

export default {
  name: 'AppNav',
  components: {
    BCollapse,
    BNavbar,
    BNavbarBrand,
    BNavbarNav,
    BNavbarToggle,
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

      // add styles here to apply to nav item for current page
      &.router-link-exact-active {
        color: $cyan;
      }

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
