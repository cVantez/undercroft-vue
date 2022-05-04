<template>
  <!-- TODO: events display doesn't work -->
  <div
    class="fb-page"
    data-href="https://www.facebook.com/undercroftmd"
    data-tabs="events"
    data-width="500"
    data-small-header="false"
    data-adapt-container-width="true"
    data-hide-cover="false"
    data-show-facepile="false"
  >
    <blockquote cite="https://www.facebook.com/undercroftmd" class="fb-xfbml-parse-ignore">
      <a href="https://www.facebook.com/undercroftmd">The Undercroft</a>
    </blockquote>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('meta', ['links']),
    appId() {
      return this.links.fbAppId;
    }
  },
  watch: {
    // this is in a watch expression because the API key won't be loaded
    // from the back end yet during mounted()
    appId(newVal) {
      // set callback for when FB SDK is loaded
      window.fbAsyncInit = () => {
        window.FB.init({
          appId: newVal,
          autoLogAppEvents: true,
          xfbml: true,
          version: 'v13.0'
        });
      };
      this.loadFbSdk();
    }
  },
  methods: {
    // add FB SDK to page scripts if it isnt already there
    loadFbSdk() {
      const id = 'fb-js-sdk';
      const firstScript = document.getElementsByTagName('script')[0];
      if (document.getElementById(id)) {
        return;
      }

      const fbScript = document.createElement('script');
      fbScript.id = id;
      fbScript.src = 'https://connect.facebook.net/en_US/sdk.js';
      firstScript.parentNode.insertBefore(fbScript, firstScript);
    },

  }
};
</script>
