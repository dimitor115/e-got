<template>
  <section class="container">
    <div class="start-page">
      <img class="logo" src="/logo.png"/>
      <b-button to="/turist" variant="outline-success" size="lg">Turysta</b-button>
      <b-button to="confirm-section" variant="outline-success" size="lg">Przodownik</b-button>
    </div>
  </section>
</template>

<script>
  export default {

  }
</script>

<style>

  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .logo {
    height: 350px;
    width: 350px;
  }

  .start-page{
    display: flex;
    flex-direction: column;
  }

  .start-page > * {
    margin-bottom: 20px;
  }
</style>
