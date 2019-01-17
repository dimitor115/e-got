<template>
  <section class="container">

    <img class="logo" src="/turist.gif"/>
    <b-button to="/turist/suggested-routes"
              class="responsive-button"
              variant="outline-success"
              size="lg">Zobacz proponowane trasy
    </b-button>

    <b-button to="/turist/tracks-evidence"
              class="responsive-button"
              variant="outline-success"
              size="lg">
      Dodaj przebytą trasę
    </b-button>

  </section>
</template>

<script>
  export default {
    name: 'turist-home-page'
  }
</script>

<style scoped lang="scss">
  @import "../../assets/common-styles.scss";

  .container {

    > * {
      margin-bottom: 20px;
    }

    > img {
      margin-bottom: 5em;
    }

  }

</style>
