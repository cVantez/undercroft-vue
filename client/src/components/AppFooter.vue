<template>
  <div id="footer" class="container-fluid">
    <div class="row py-3 px-1">
      <div class="col-md-4 col-12 text-left">
        <a
          :href="links.insta"
          target="_blank"
          class="text-white"
        >
          <b-icon-instagram aria-hidden="true" />
          <span class="sr-only">Instagram: </span>
          <span class="ml-2">@undercroftmd</span>
        </a>
        <br>
        <a
          :href="links.fb"
          target="_blank"
          class="text-white"
        >
          <b-icon-facebook aria-hidden="true" />
          <span class="sr-only">Facebook: </span>
          <span class="ml-2">@undercroftmd</span>
        </a>
      </div>
      <div
        class="col-md-4 col-12 my-md-0 my-3 text-left text-md-center
          d-flex align-items-center justify-content-md-center justify-content-left"
      >
        2629 Huntingdon Ave, Baltimore, MD 21211
      </div>
      <div class="col-md-4 col-12 d-flex align-items-end justify-content-md-end">
        <div class="text-left text-small">
          v{{ buildVersion }}<br>
          Built on: {{ buildDate }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import {
  BIconFacebook,
  BIconInstagram
} from 'bootstrap-vue';
// TODO: map meta state for links

export default {
  name: 'AppFooter',
  components: {
    BIconFacebook,
    BIconInstagram
  },
  computed: {
    ...mapState('meta', ['links']),
    buildDate() {
      return new Date(process.env.VUE_APP_BUILD_DATE)
        .toLocaleString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    },
    buildVersion() {
      return process.env.VUE_APP_VERSION;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';

#footer {
  background: gray("900");
  color: $white;

  a:hover,
  a:focus {
    text-decoration:none;
  }
}
</style>
