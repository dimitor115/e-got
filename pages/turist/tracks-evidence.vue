<template>
  <div class="container">
    <loader class="tracks-list" :is-processing="isRequestProcessing">
      <b-card v-for="(track, index) in fetchedTracks"
              :key="index"
              :title="track.startPoint + '-' +track.endPoint"
              style="max-width: 30rem;"
              :img-src="track.photo"
              img-alt="Card image"
              img-top>
        <div>
        <span style="float:left">
          ptk: <b-badge> {{track.points }}</b-badge>
        </span>
          <span>
          status:
            <b-badge :variant="mapEvidenceStatusVariant(track)">
              {{mapEvidenceStatusText(track)}}
            </b-badge>
        </span>
          <span style="float: right">
          <b-button size="sm" variant="danger" @click="showRemoveConfirmation(track)">Usuń</b-button>
        </span>
        </div>
      </b-card>
    </loader>

    <b-button size="lg"
              variant="outline-primary"
              to="/turist/track-evidence-form">
      Dodaj odcinek do zatwierdzenia
    </b-button>

    <b-modal
      ref="removeModal"
      centered
      @ok="removeTrack"
      title="Potwierdź usunięcie">
      <p v-if="trackToRemove">
        Jesteś pewnien, że chcesz usunąć trasę {{trackToRemove.startPoint}} - {{trackToRemove.endPoint}}
      </p>
    </b-modal>

  </div>
</template>

<script>
  import {fetchData, apiUrl} from "../../assets/utils";
  import axios from "axios"
  import Loader from "../../components/loader";

  export default {
    name: "route-evidence",
    components: {Loader},
    data: () => ({
      trackToRemove: null,
      fetchedTracks: [],
      isRequestProcessing: true
    }),
    methods: {
      mapEvidenceStatusVariant(evidence) {
        switch (evidence.approved) {
          case false:
            return "danger";
          case true:
            return "success";
          default:
            return "warning";
        }
      },
      mapEvidenceStatusText(evidence) {
        switch (evidence.approved) {
          case false:
            return "Odrzucony";
          case true:
            return "Zaakceptowany";
          default:
            return "Niezatwierdzony";
        }
      },
      removeTrack() {
        try {
          const id = this.trackToRemove._id
          axios.delete(`${apiUrl()}/evidences/${id}`)
          this.fetchTracks()
        } catch (e) {
          alert(e)
        }
      },
      showRemoveConfirmation(track) {
        this.trackToRemove = track
        this.$refs.removeModal.show()
      },
      async fetchTracks() {
        this.isRequestProcessing = true
        this.fetchedTracks = await fetchData('/evidences/tourist')
        this.isRequestProcessing = false
      }
    },
    async mounted() {
      this.fetchTracks()
    }
  }
</script>

<style scoped>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    margin-top: 20px
  }

  .tracks-list {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .tracks-list > * {
    margin-bottom: 20px;
  }
</style>
