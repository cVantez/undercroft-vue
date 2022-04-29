<template>
  <div class="home">
    <div class="row w-100">
      <div class="runner col-lg-8 col-10 mx-auto">
        <!-- TODO: hoper carousel: https://baianat.github.io/hooper/ -->
        <info-box title="Mission Statement">
          The Undercroft is a community arts center focused on providing a safe,
          accessible, all-ages space for artists, Remington residents & working families.
        </info-box>
        <info-box title="Location">
          <!-- TODO: -->
          Google Maps integration
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
import InfoBox from '@/components/InfoBox.vue';

export default {
  name: 'Home',
  components: { InfoBox }
};
</script>

<style lang="scss" scoped>
</style>
