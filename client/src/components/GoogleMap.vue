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
    // this is in a watch expression because the API key won't be loaded
    // from the back end yet during mounted()
    apiKey(newVal) {
      this.$nextTick(async () => {
        const loader = new Loader({
          apiKey: newVal,
          version: 'weekly',
          libraries: ['places']
        });

        const { maps } = await loader.load();
        const map = new maps.Map(document.getElementById('uc-map'), {
          // lat/long of the undercroft
          center: {
            lat: 39.32022635593587,
            lng: -76.62091036297952
          },
          zoom: 15
        });

        const infoWindow = new maps.InfoWindow();
        const service = new maps.places.PlacesService(map);

        service.getDetails({
          // placeID of The Undercroft
          placeId: 'ChIJcUOPJwcFyIkRcX94id64dCU',
          fields: ['formatted_address', 'geometry', 'name', 'url'],
        }, (place, status) => {
          if (
            status === maps.places.PlacesServiceStatus.OK
            && place
            && place.geometry
            && place.geometry.location
          ) {
            const marker = new maps.Marker({
              map,
              position: place.geometry.location,
            });

            maps.event.addListener(marker, 'click', () => {
              this.showPlaceInfo(map, place, marker, infoWindow);
            });
          }
        });
      });
    }
  },
  methods: {
    showPlaceInfo(map, place, marker, infoWindow) {
      const content = document.createElement('div');
      content.className = 'p-1 text-left';

      const nameEl = document.createElement('p');
      nameEl.className = 'text-one font-weight-bold mb-1';
      nameEl.textContent = place.name;
      content.appendChild(nameEl);

      const addressEl = document.createElement('p');
      addressEl.className = 'mb-1';
      addressEl.textContent = place.formatted_address;
      content.appendChild(addressEl);

      const linkEl = document.createElement('a');
      linkEl.className = 'text-cyan';
      linkEl.href = place.url;
      linkEl.target = '_blank';
      linkEl.textContent = 'Open in Google Maps';
      content.appendChild(linkEl);

      infoWindow.setContent(content);
      infoWindow.open(map, marker);
    }
  }
};
</script>
