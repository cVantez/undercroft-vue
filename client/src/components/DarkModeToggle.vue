<template>
  <b-form-checkbox
    v-model="isDark"
    v-b-tooltip.v-info.bottom
    title="Toggle dark mode"
    switch
    class="ml-3"
    @change="toggleDark"
  />
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue';
import Cookies from 'js-cookie';

const cookieName = 'uc-theme';

export default {
  name: 'DarkModeToggle',
  components: { BFormCheckbox },
  data() {
    return {
      isDark: false
    };
  },
  mounted() {
    // read OS-level preference
    let prefersDark = false;
    if (window.matchMedia) {
      prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      // add listener for color scheme change
      // explicitly set user toggle will override
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
        if (!Cookies.get(cookieName)) {
          this.isDark = event.matches;
          this.preferenceToggleDark();
        }
      });
    }

    // apply theme from preference, or read from cookie if present
    const cval = Cookies.get(cookieName);
    if ((prefersDark && !cval) || cval === 'dark' || document.body.classList.contains('bootstrap-dark')) {
      document.body.classList.replace('bootstrap', 'bootstrap-dark');
      this.isDark = true;
    }
  },
  methods: {
    toggleDark() {
      if (this.isDark) {
        Cookies.set(cookieName, 'dark');
        document.body.classList.replace('bootstrap', 'bootstrap-dark');
      } else {
        Cookies.set(cookieName, 'light');
        document.body.classList.replace('bootstrap-dark', 'bootstrap');
      }
      this.$root.$emit('toggleDark', Cookies.get(cookieName));
    },
    // toggle dark mode without setting cookie, so OS preference can continue to work
    preferenceToggleDark() {
      let theme = 'dark';
      if (this.isDark) {
        document.body.classList.replace('bootstrap', 'bootstrap-dark');
      } else {
        theme = 'light';
        document.body.classList.replace('bootstrap-dark', 'bootstrap');
      }
      this.$root.$emit('toggleDark', theme);
    }
  }
};
</script>

<style lang="scss">
@import "#scss/app-dark";
</style>
