<template>
  <div class="container">
    <b-card v-for="(section, index) in fetchSections"
            :key="index"
            img-src="https://placekitten.com/1000/300"
            img-alt="Card image"
            img-top>
      <!--TODO:pull right the remove button-->
      <div>
         <span class="card-text" style="float: left">
        {{section.startPoint}} - {{section.endPoint}}
        </span>
        <span>
          ptk: <b-badge> {{section.points }}</b-badge> status:   <b-badge variant="warning">Niezatwierdzony</b-badge>
        </span>
        <span style="float: right">
        <b-button size="sm" variant="danger" @click="showRemoveConfirmation(section)">Usuń</b-button>
      </span>
      </div>
    </b-card>
    <b-button size="lg" variant="outline-primary"> Dodaj odcinek do zatwierdzenia</b-button>

    <b-modal
      ref="removeModal"
      centered
      title="Potwierdź usunięcie">
      <p v-if="sectionToRemove">
        Jesteś pewnien, że chcesz usunąć trasę {{sectionToRemove.startPoint}} - {{sectionToRemove.endPoint}}
      </p>
    </b-modal>

  </div>
</template>

<script>
  export default {
    name: "section-documentation",
    data: () => ({
      sectionToRemove: null,
      fetchSections: [
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
      showRemoveConfirmation(section) {
        this.sectionToRemove = section
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

  .container > div {
    margin-bottom: 20px;
  }
</style>
