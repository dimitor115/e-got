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
        <b-button @click="showDescription(route.description)" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>

    <b-modal
      ref="descriptionModal"
      hide-footer
      centered
      title="Bootstrap-Vue">
      <div class="route-description">
        {{routeDescription}}
      </div>
    </b-modal>
  </section>


</template>

<script>
  import routesService from '../../server/services/routesService'

  export default {
    async asyncData() {
      if (process.server) {
        return {suggestedRoutes: await routesService.getSuggestedRoutes()}
      }
    },
    name: "suggestedRoutesPage",
    data: () => ({
      routeDescription: null
    }),
    methods: {
      showDescription(description) {
        this.routeDescription = description
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
