<template>
  <div>
  Tu będziesz potweirdzał dowody
    {{test}}
  </div>
</template>

<script>
  import routesService from '../server/services/routesService'
  export default {
    async asyncData() {
      await routesService.test()
      return {test: "asd"}
    },
    name: "confirmSectionPage"
  }
</script>

<style scoped>

</style>
