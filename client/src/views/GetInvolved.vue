<template>
  <div id="getInvolved">
    <div class="row">
      <div class="col-10 col-md-8 mx-auto">
        <img
          src="@/assets/window.jpg"
          alt="Light shines through a window onto some artfully placed flowers."
        >
      </div>
    </div>
    <info-box title="Donate">
      <p class="mt-4">
        <a
          :href="links.donate"
          target="_blank"
          class="btn btn-outline-gray-dark"
        >
          Contribute to our GoFundMe
        </a>
      </p>
    </info-box>
    <info-box title="Join Our Newsletter">
      TODO: email form here
    </info-box>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import InfoBox from '@/components/InfoBox.vue';

export default {
  name: 'GetInvolved',
  components: { InfoBox },
  computed: {
    ...mapState('meta', ['links'])
  }
};
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
