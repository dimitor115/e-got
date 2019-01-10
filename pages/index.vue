<template>
  <section class="container">
      <img class="logo" src="/logo.gif"/>
      <b-button to="/turist"
                variant="outline-success"
                class="menu-button"
                size="lg">
        Turysta
      </b-button>
      <b-button to="/verificator/evidences-list"
                variant="outline-success"
                class="menu-button"
                size="lg">
        Przodownik
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
    width: 13em;
  }

  .container > * {
    margin-bottom: 20px;
  }

  .menu-button {
    min-width: 16em;
  }
</style>
