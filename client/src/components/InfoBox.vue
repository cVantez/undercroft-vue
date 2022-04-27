<template>
  <div class="row info-row">
    <div class="info-box col-10 px-2 py-4 mx-auto my-3">
      <h2>{{ title }}</h2>
      <p>
        <slot />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoBox',
  props: {
    title: {
      type: String,
      default: 'Info'
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';

.info-row {
  &:first-child {
    .info-box {
      margin-top: 0 !important;
    }
  }

  &:last-child {
    .info-box {
      margin-bottom: 0 !important;
    }
  }

  .info-box {
    border: 2px solid gray(900);
  }
}
</style>
