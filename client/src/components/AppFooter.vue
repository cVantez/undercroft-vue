<template>
  <div id="footer" class="container-fluid">
    <div class="row py-3 px-1">
      <div class="col-md-4 col-12 text-left">
        <a
          href="https://www.instagram.com/undercroftmd"
          target="_blank"
          class="text-white"
        >
          <b-icon-instagram aria-hidden="true" />
          <span class="sr-only">Instagram: </span>
          <span class="ml-2">@undercroftmd</span>
        </a>
        <br>
        <a
          href="https://www.facebook.com/undercroftmd"
          target="_blank"
          class="text-white"
        >
          <b-icon-facebook aria-hidden="true" />
          <span class="sr-only">Facebook: </span>
          <span class="ml-2">@undercroftmd</span>
        </a>
      </div>
      <div
        class="col-md-4 col-12 my-md-0 my-3 d-flex align-items-center justify-content-md-center justify-content-left"
      >
        2629 Huntingdon Ave, Baltimore, MD 21211
      </div>
      <div class="col-md-4 col-12" />
    </div>
  </div>
</template>

<script>
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
