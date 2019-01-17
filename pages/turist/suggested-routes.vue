<template>
  <section class="container">
    <loader class="tracks-list" :is-processing="isRequestProcessing">
      <div v-for="(route, idx) in suggestedRoutes">
        <b-card :title="route.title"
                :img-src="route.photo"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 30rem;"
                class="mb-2">
        <span class="card-text">
          {{route.startPoint}} - {{route.endPoint}}
        </span>
          <span style="float: right">
          <b-button @click="showDescription(route)" variant="outline-primary">Więcej</b-button>
        </span>
        </b-card>
      </div>

      <b-modal
        ref="descriptionModal"
        hide-footer
        centered
        :title="selectedRouteTitle">
        <div class="route-description">
          {{selectedRouteDescription}}
        </div>
      </b-modal>
    </loader>
  </section>


</template>

<script>
  import {fetchData} from "../../assets/utils";
  import Loader from '../../components/loader'

  export default {
    name: "suggestedRoutesPage",
    components: {Loader},
    data: () => ({
      selectedRouteDescription: null,
      selectedRouteTitle: null,
      suggestedRoutes: [],
      isRequestProcessing: true
    }),
    async mounted() {
      this.suggestedRoutes = await fetchData('/routes')
      this.isRequestProcessing = false
    },
    methods: {
      showDescription(route) {
        this.selectedRouteTitle = route.title
        this.selectedRouteDescription = route.description
        this.$refs.descriptionModal.show()
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/common-styles";

  .container > div {
    margin-top: 20px;
  }

  .route-description {
    min-height: 300px;
  }
</style>
