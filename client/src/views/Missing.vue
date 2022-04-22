<template>
  <div class="missing">
    <h1 class="brand-text-class">
      404
    </h1>
    <div class="explanation text-larger">
      The requested route: "{{ route }}" was not found on this server.
    </div>
  </div>
</template>

<script>
export default {
  name: 'Missing',
  computed: {
    route() {
      return this.$route.params.missingUrl;
    }
  }
};
</script>

<style lang="scss" scoped>
.missing {
  text-align: center;

  h1 {
    font-size: 15rem;
  }

  .explanation {
    width: 60%;
    margin-left: 20%;
  }
}
</style>
