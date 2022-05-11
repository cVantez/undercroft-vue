<template>
  <div class="row">
    <div class="col-10 mx-auto h-100">
      <hooper
        :settings="hooperSettings"
        class="h-100"
      >
        <slide v-for="el, idx in images" :key="idx">
          <img
            :src="require(`@/assets/${el.src}`)"
            :alt="el.alt"
          >
        </slide>
        <!-- TODO: add toggle to stop autoplay -->
        <template #hooper-addons>
          <hooper-navigation />
          <hooper-pagination mode="fraction" />
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
} from '@/vendor/hooper';

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
  data() {
    return {
      hooperSettings: {
        infiniteScroll: true,
        autoPlay: true,
        playSpeed: 5000,
        pagination: 'fraction',
        breakpoints: {
          // 1px above bootstrap md breakpoint
          769: {
            pagination: 'indicator'
          }
        }
      }
    };
  },
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
  // for the indicator buttons
  li {
    padding: 0 0.5rem;

    button {
      padding: 0.25rem;
    }
  }

  // for the fraction paging on mobile
  > span {
    color: white;
    font-weight: bold;
    padding-bottom: 1rem;
  }
}
</style>
