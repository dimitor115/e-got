<template>
  <div>
    Tu będziesz potweirdzał dowody
    <br>
    {{test}}
  </div>
</template>


<script>
  import axios from 'axios'

  export default {
    async asyncData(){
      return {test: (await axios.get('http://127.0.0.1:3000/api')).data}
    },
    name: "confirmSectionPage"
  }
</script>

<style scoped>

</style>
