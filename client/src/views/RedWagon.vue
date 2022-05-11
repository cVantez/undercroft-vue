<template>
  <div id="redWagon">
    <carousel
      class="carousel mb-3"
      :images="[{
        src: 'RedWagon0.jpg',
        alt: 'Rainbow-colored chalk spells out red wagon on a sidewalk.'
      }, {
        src: 'RedWagon1.jpg',
        alt: 'A volunteer gives children a ride in a red wagon through the Undercroft\'s play space.'
      }, {
        src: 'RedWagon2.jpg',
        alt: 'The undercroft\'s play space.'
          + ' A welcoming, brightly colored room with plenty of toys, picture books, and child-sized tables.'
      }, {
        src: 'RedWagon3.jpg',
        alt: 'The snack table has a spread of apples, oranges, and blueberry muffins'
          + ' with water, apple juice, and vegetable juice to drink.'
      }]"
    />
    <info-box title="Red Wagon">
      <p class="text-left">
        Red Wagon is a collectively-run play space where parents, caregivers, and children can connect and play.
        We offer programming on Wednesday mornings and additional pop-up evening hours!
      </p>
    </info-box>
    <info-box title="Support">
      <p class="text-left">
        Support Red Wagon by joining our
        <a
          href="https://www.patreon.com/redwagonbaltimore"
          target="_blank"
          class="text-indigo"
        >
          Patreon
        </a>
      </p>
    </info-box>
    <info-box title="Contact">
      <p class="text-left">
        Feel free to contact Red Wagon and follow our social media for all the latest updates.
      </p>
      <p class="text-left">
        <a
          :href="links.rwInsta"
          target="_blank"
          class="text-indigo"
        >
          <b-icon-instagram aria-hidden="true" />
          <span class="sr-only">Instagram: </span>
          <span class="ml-2">@redwagonbaltimore</span>
        </a>
        <br>
        <a
          :href="links.rwFb"
          target="_blank"
          class="text-indigo"
        >
          <b-icon-facebook aria-hidden="true" />
          <span class="sr-only">Facebook: </span>
          <span class="ml-2">@RedWagonBaltimore</span>
        </a>
      </p>
    </info-box>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import {
  BIconFacebook,
  BIconInstagram
} from 'bootstrap-vue';
import Carousel from '@/components/Carousel.vue';
import InfoBox from '@/components/InfoBox.vue';

export default {
  name: 'RedWagon',
  components: {
    BIconFacebook,
    BIconInstagram,
    Carousel,
    InfoBox
  },
  computed: {
    ...mapState('meta', ['links'])
  }
};
</script>

<style lang="scss" scoped>
.carousel {
  max-height: 350px;
}

a.text-indigo:hover {
  text-decoration: none;
}
</style>
