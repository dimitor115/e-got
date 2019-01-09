<template>
  <section class="container">

    <div v-for="(route, idx) in suggestedRoutes">
      <b-card :title="route.title"
              :img-src="'https://picsum.photos/600/300/?image='+idx + 10"
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
  </section>


</template>

<script>
  import {fetchData} from "~/assets/utils";

  export default {
    name: "suggestedRoutesPage",
    data: () => ({
      selectedRouteDescription: null,
      selectedRouteTitle: null,
      suggestedRoutes: []
    }),
    async mounted() {
      this.suggestedRoutes = await fetchData('/routes')
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

<style scoped>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }

  .container > div {
    margin-bottom: 20px;
  }

  .route-description {
    min-height: 300px;
  }
</style>
