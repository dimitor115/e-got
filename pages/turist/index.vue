<template>
  <section class="container">

    <img class="logo" src="/turist.gif"/>
    <b-button to="/turist/suggested-routes"
              class="menu-button"
              variant="outline-success"
              size="lg">Zobacz proponowane trasy
    </b-button>

    <b-button to="/turist/tracks-evidence"
              class="menu-button"
              variant="outline-success"
              size="lg">
      Dodaj przebytą trasę
    </b-button>

  </section>
</template>

<script>
  export default {}
</script>

<style>

  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }

  .logo {
    height: 13em;
  }

  .container > * {
    margin-bottom: 20px;
  }

  .menu-button {
    min-width: 16em;
  }
</style>
