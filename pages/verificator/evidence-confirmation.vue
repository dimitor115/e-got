<template>
  <div class="container">
    aoisdjoaisjdoa <br>
    <img v-if="evidence" v-gallery :src="evidence.photo">
  </div>
</template>

<script>
  import axios from "axios";
  import {fetchData} from "../../assets/utils";

  export default {
    name: "evidence-confirmation",
    data: () => ({
      evidence: null
    }),
    computed: {
      evidenceId() {
        return document.URL.slice(document.URL.indexOf('#', 10) + 1)
      }
    },
    async mounted() {
      this.evidence = await fetchData(`/evidences/${this.evidenceId}`)
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
  }
</style>
