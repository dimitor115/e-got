<template>
  <section class="container">
    <img class="logo" src="/logo.gif"/>
    <b-button to="/turist"
              variant="outline-success"
              class="responsive-button"
              size="lg">
      Turysta
    </b-button>
    <b-button to="/verificator/evidences-list"
              variant="outline-success"
              class="responsive-button"
              size="lg">
      Przodownik
    </b-button>

    <b-button to="/track-form"
              class="responsive-button"
              variant="outline-primary"
              size="lg">
      Komisja PTTK
    </b-button>
  </section>
</template>

<script>
  export default {
    name: 'home-page'
  }
</script>

<style scoped lang="scss">
  @import "../assets/common-styles";

  .container {
    > * {
      margin-bottom: 20px;
    }

    > img {
      margin-bottom: 5em;
    }
  }
</style>
