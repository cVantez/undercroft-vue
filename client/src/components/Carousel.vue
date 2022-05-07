<template>
  <div class="row">
    <!-- TODO: make arrows a little bigger? -->
    <div class="col-10 mx-auto h-100">
      <hooper
        :infinite-scroll="true"
        :auto-play="true"
        :play-speed="5000"
        class="h-100"
      >
        <slide v-for="el, idx in images" :key="idx">
          <img
            :src="require(`@/assets/${el.src}`)"
            :alt="el.alt"
          >
        </slide>
        <template #hooper-addons>
          <hooper-navigation />
          <hooper-pagination />
        </template>
      </hooper>
    </div>
  </div>
</template>

<script>
import {
  Hooper,
  Navigation as HooperNavigation,
  Pagination as HooperPagination,
  Slide
} from 'hooper';

export default {
  name: 'Carousel',
  components: {
    Hooper,
    HooperNavigation,
    HooperPagination,
    Slide
  },
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    // Remove indicator buttons from tabindex
    // They are annoying to scroll through, and the carousel is navigable through other means
    this.$nextTick(() => {
      Array.from(document.getElementsByClassName('hooper-indicator'))
        .forEach((el) => { el.setAttribute('tabindex', -1); });
    });
  }
};
</script>

<style lang="scss" scoped>
@import '~hooper/dist/hooper.css';

img {
  max-width: 80%;
  max-height: 100%;
  object-fit: contain;
}

::v-deep .hooper-pagination {
  li {
    padding: 0 0.5rem;

    button {
      padding: 0.25rem;
    }
  }
}
</style>
