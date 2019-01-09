<template>
  <div class="container">
    <b-card v-for="(track, index) in fetchedTracks"
            :key="index"
            :title="track.startPoint + '-' +track.endPoint"
            style="max-width: 30rem;"
            img-src="https://placekitten.com/1000/300"
            img-alt="Card image"
            img-top>
      <div>
        <span style="float:left">
          ptk: <b-badge> {{track.points }}</b-badge>
        </span>
        <span>
          status:   <b-badge variant="warning">Niezatwierdzony</b-badge>
        </span>
        <span style="float: right">
          <b-button size="sm" variant="danger" @click="showRemoveConfirmation(track)">Usuń</b-button>
        </span>
      </div>
    </b-card>

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

  export default {
    name: "route-evidence",
    data: () => ({
      trackToRemove: null,
      fetchedTracks: [
        {
          photo: null,
          startPoint: "Kamieńczyk",
          endPoint: "Karpacz",
          points: 34
        },
        {
          photo: null,
          startPoint: "Kamieńczyk",
          endPoint: "Karpacz",
          points: 34
        },
        {
          photo: null,
          startPoint: "Kamieńczyk",
          endPoint: "Karpacz",
          points: 34
        }
      ]
    }),
    methods: {
      removeTrack() {
        console.log('remove secion')
      },
      showRemoveConfirmation(track) {
        this.trackToRemove = track
        this.$refs.removeModal.show()
      }
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
  }

  .container > * {
    margin-bottom: 20px;
  }
</style>
