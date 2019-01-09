<template>
  <div class="container">
    <loader class="evidences-list" :is-processing="!areEvidencesFetched">
      <b-card v-for="(evidence, index) in evidences"
              :key="index"
              style="background-color: #f7f8fb"
              class="text-center">
      <span class="card-info">
        <li>Kamieńczyk - Zakpane</li>
        <li>{{evidence.author}}</li>
      </span>
        <span>
        <b-button :to='"/verificator/evidence-confirmation#" + evidence._id' variant="primary">
          Szczegóły
        </b-button>
      </span>
      </b-card>
    </loader>
  </div>
</template>


<script>
  import {fetchData} from "../../assets/utils";
  import Loader from "../../components/loader";

  export default {
    name: "confirmSectionPage",
    components: {Loader},
    data: () => ({
      evidences: [],
      areEvidencesFetched: false
    }),
    async mounted() {
      this.evidences = await fetchData("/evidences/verificator")
      this.areEvidencesFetched = true
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

  .evidences-list {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .evidences-list > * {
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
