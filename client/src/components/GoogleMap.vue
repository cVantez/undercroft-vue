<template>
  <div id="uc-map" :style="`height: ${height}`" />
</template>

<script>
import { mapState } from 'vuex';
import { Loader } from '@googlemaps/js-api-loader';

export default {
  name: 'GoogleMap',
  props: {
    height: {
      type: String,
      default: '350px'
    }
  },
  computed: {
    ...mapState('meta', ['links']),
    apiKey() {
      return this.links.googleKey;
    }
  },
  watch: {
    apiKey(newVal) {
      this.$nextTick(async () => {
        // lat/long of the undercroft
        const location = {
          lat: 39.32022635593587,
          lng: -76.62091036297952
        };

        const loader = new Loader({
          apiKey: newVal,
          version: 'weekly',
          libraries: ['places']
        });

        const mapOptions = {
          center: location,
          zoom: 15
        };

        const g = await loader.load();
        const map = new g.maps.Map(document.getElementById('uc-map'), mapOptions);
        const infoWindow = new g.maps.InfoWindow();

        // TODO: do this using places for better info
        const marker = new g.maps.Marker({
          position: location,
          map,
          title: 'The Undercroft',
          label: 'The Undercroft',
          optimized: false
        });

        // accessibility for map marker
        marker.addListener('click', () => {
          infoWindow.close();
          infoWindow.setContent(marker.getTitle());
          infoWindow.open(marker.getMap(), marker);
        });
      });
    }
  }
};
</script>
