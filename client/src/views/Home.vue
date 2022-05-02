<template>
  <div class="home">
    <div class="row w-100 ml-0">
      <div class="runner col-lg-8 col-10 mx-auto">
        <carousel class="carousel mb-3" />
        <info-box title="Mission Statement">
          <p class="text-left">
            The Undercroft is a community arts center focused on providing a safe,
            accessible, all-ages space for artists, Remington residents & working families.
          </p>
        </info-box>
        <info-box title="Location">
          <google-map class="mt-4" />
        </info-box>
        <info-box title="Events">
          <!-- TODO: -->
          FB integration
        </info-box>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import GoogleMap from '@/components/GoogleMap.vue';
import InfoBox from '@/components/InfoBox.vue';

export default {
  name: 'Home',
  components: { Carousel, GoogleMap, InfoBox }
};
</script>

<style lang="scss" scoped>
.carousel {
  max-height: 350px;
}
</style>
