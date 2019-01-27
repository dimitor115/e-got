<template>
  <div class="container">
    <loader class="evidences-list" :is-processing="!areEvidencesFetched">
      <b-card v-for="(evidence, index) in evidences"
              :key="index"
              border-variant="primary"
              class="text-center">
      <div class="card-info">
        <li>
        <b-badge variant="light">{{evidence.startPoint}}- {{evidence.endPoint}}</b-badge>
        </li>
        <li>
        <b-badge variant="light">{{evidence.author}}</b-badge>
        </li>
      </div>
        <span>
        <b-button :to='"/verificator/evidence-confirmation#" + evidence._id'
                  class="details-button"
                  variant="outline-success">
          Szczegóły
        </b-button>
      </span>
      </b-card>
      <div v-if="evidences.length === 0">
        Nie ma więcej oczekujących odcinków do zatwierdzenia !
      </div>
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

<style scoped lang="scss">
  @import "../../assets/common-styles";

  .evidences-list {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
  }

  .evidences-list > * {
    margin-bottom: 20px;
  }

  .details-button {
    min-width: 16em;
    margin-top: 10px;
  }

  .card-info {
    text-align: left;
    float: left;
    min-width: 16em;
    list-style-type: none;

    li {
      font-size: 23px;
    }
  }
</style>
