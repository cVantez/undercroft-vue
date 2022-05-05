<template>
  <!-- events display is broken on FB's end, see: -->
  <!--  https://developers.facebook.com/support/bugs/314594194066745/ -->
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
  data() {
    return {
      isFbAlreadyLoaded: false
    };
  },
  computed: {
    ...mapState('meta', ['links']),
    appId() {
      return this.links.fbAppId;
    }
  },
  watch: {
    // this is in a watch expression because the API key won't be loaded
    // from the back end yet during the first mounted()
    appId(newVal) {
      this.addFbAsyncInit(newVal);
      this.loadFbSdk();
    }
  },
  mounted() {
    // will run if this is not the first page loaded
    if (this.appId && this.appId !== '') {
      this.addFbAsyncInit(this.appId);
      this.loadFbSdk();
      if (this.isFbAlreadyLoaded) {
        window.fbAsyncInit();
      }
    }
  },
  methods: {
    // set callback for when FB SDK is loaded
    addFbAsyncInit(id) {
      if (!window.fbAsyncInit) {
        window.fbAsyncInit = () => {
          window.FB.init({
            appId: id,
            autoLogAppEvents: true,
            xfbml: true,
            version: 'v13.0'
          });
        };
      }
    },
    // add FB SDK to page scripts if it isnt already there
    loadFbSdk() {
      const id = 'fb-js-sdk';
      const firstScript = document.getElementsByTagName('script')[0];
      if (document.getElementById(id)) {
        this.isFbAlreadyLoaded = true;
        return;
      }

      const fbScript = document.createElement('script');
      fbScript.id = id;
      fbScript.src = 'https://connect.facebook.net/en_US/sdk.js';
      firstScript.parentNode.insertBefore(fbScript, firstScript);
    }
  }
};
</script>
