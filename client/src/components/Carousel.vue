<template>
  <div class="row">
    <div class="col-10 mx-auto h-100">
      <hooper
        :infinite-scroll="true"
        :auto-play="true"
        :play-speed="5000"
        class="h-100"
      >
        <slide>
          <img
            src="@/assets/Undercroft000.jpg"
            alt="A local band performs at the undercroft.
              The vocalist invites you in as the other musicians perform stoically."
          >
        </slide>
        <slide>
          <img
            src="@/assets/Undercroft001.jpg"
            alt="The undercroft stage, empty.
              On the wall, bright flowers bloom through lush foliage in stark contrast to the black background."
          >
        </slide>
        <slide>
          <img
            src="@/assets/Undercroft002.jpg"
            alt="The undercroft's outdoor space. A quiet paved area shaded by trees."
          >
        </slide>
        <slide>
          <img
            src="@/assets/Undercroft003.jpg"
            alt="Another local band performs.
              The guitarist and bassist rock out with their backs turned in dramatic lighting."
          >
        </slide>
        <slide>
          <img
            src="@/assets/Undercroft004.jpg"
            alt="Shadow puppets projected on a large screen.
              Hands mimic the heads of an ostrich and a dog talking to each other."
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
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

::v-deep .hooper-pagination {
  bottom: -1rem;

  li {
    padding: 0 0.5rem;

    button {
      padding: 0.25rem;
    }
  }
}
</style>
