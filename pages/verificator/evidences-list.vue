<template>
  <div class="container">
    <b-card v-for="(evidence, index) in evidences"
            :key="index"
            style="background-color: #f7f8fb"
            class="text-center">
      <span class="card-info">
        <li>Kamieńczyk - Zakpane</li>
        <li>Asia Warchulska</li>
      </span>
      <span>
        <b-button variant="primary">
          Szczegóły
        </b-button>
      </span>
    </b-card>
  </div>
</template>


<script>
  import {fetchData} from "../../assets/utils";

  export default {
    name: "confirmSectionPage",
    data: () => ({
      evidences: []
    }),
    async mounted() {
      this.evidences = await fetchData("/evidences/verificator")
    }
  }
</script>

<style scoped>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }

  .container > * {
    margin-bottom: 20px;
  }

  .card-info {
    text-align: left;
    float: left;
    max-width: 30em;
    min-width: 20em;
    list-style-type: none;
  }
</style>
