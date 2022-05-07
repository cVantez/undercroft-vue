<template>
  <div class="home">
    <carousel
      class="carousel mb-3"
      :images="[{
        src: 'Undercroft0.jpg',
        alt: 'A local band performs at the undercroft.'
          + ' The vocalist invites you in as the other musicians perform stoically.'
      },{
        src: 'Undercroft1.jpg',
        alt: 'The undercroft stage, empty. On the wall, bright flowers bloom'
          + ' through lush foliage in stark contrast to the black background.'
      }, {
        src: 'Undercroft2.jpg',
        alt: 'The undercroft\'s outdoor space. A quiet paved area shaded by trees.'
      }, {
        src: 'Undercroft3.jpg',
        alt: 'Another local band performs. The guitarist and bassist rock out'
          + ' with their backs turned in dramatic lighting.'
      }, {
        src: 'Undercroft4.jpg',
        alt: 'Shadow puppets projected on a large screen.'
          + ' Hands mimic the heads of an ostrich and a dog talking to each other.'
      }]"
    />
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
      <fb-events />
    </info-box>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import FbEvents from '@/components/FbEvents.vue';
import GoogleMap from '@/components/GoogleMap.vue';
import InfoBox from '@/components/InfoBox.vue';

export default {
  name: 'Home',
  components: {
    Carousel,
    FbEvents,
    GoogleMap,
    InfoBox
  }
};
</script>

<style lang="scss" scoped>
.carousel {
  max-height: 350px;
}
</style>
