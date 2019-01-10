<template>
  <div class="container">
    <loader v-blur="isUpdateRequestProcessing" :is-processing="!isEvidenceDownloaded">
      <img v-if="evidence"
           style="max-width: 20em"
           v-gallery
           :src="evidence.photo">
      <b-table stacked :fields="displayFields" :items="evidenceDisplay"></b-table>

      <div>
        <b-button variant="outline-danger"
                  size="lg"
                  @click="updateEvidenceStatus(false)">
          Odrzuć
        </b-button>
        <b-button variant="success"
                  size="lg"
                  @click="updateEvidenceStatus(true)">
          Zatwierdź
        </b-button>
      </div>
    </loader>
  </div>
</template>

<script>
  import axios from "axios";
  import {fetchData, apiUrl} from "../../assets/utils";
  import Loader from "../../components/loader";

  export default {
    name: "evidence-confirmation",
    components: {Loader},
    data: () => ({
      isEvidenceDownloaded: false,
      isUpdateRequestProcessing: false,
      evidence: null,
      test: [{aaa: "sadsad", maciek: "asdasd"}],
      displayFields: [
        {key: "startPoint", label: "Punkt początkowy"},
        {key: "endPoint", label: "Punkt końcowy"},
        {key: "author", label: "Turysta"},
        {key: "additionDate", label: "Dodane"}
      ]
    }),
    computed: {
      evidenceId() {
        return document.URL.slice(document.URL.indexOf('#', 10) + 1)
      },
      evidenceDisplay() {
        if (this.evidence) {
          return [
            {
              startPoint: "Kamieńczyk",
              endPoint: "Zakopane",
              author: this.evidence.author,
              additionDate: this.evidence.additionDate
            }
          ]
        } else {
          return []
        }
      }
    },
    methods: {
      updateEvidenceStatus(status) {
        const id = this.evidence._id
        this.isUpdateRequestProcessing = true
        axios.put(`${apiUrl()}/evidences/${id}`, {approved: status})
          .then(()=>{
            this.isUpdateRequestProcessing = false
            this.$router.push('/verificator/evidences-list')
          })
          .catch(err => alert(err))
      }
    },
    async mounted() {
      this.evidence = await fetchData(`/evidences/${this.evidenceId}`)
      this.isEvidenceDownloaded = true
    }
  }
</script>

<style scoped lang="scss">
@import "../../assets/common-styles";
</style>
