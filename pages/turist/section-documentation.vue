<template>
  <div class="container">
    <b-card v-for="(section, index) in fetchSections"
            :key="index"
            :title="section.startPoint + '-' +section.endPoint"
            style="max-width: 30rem;"
            img-src="https://placekitten.com/1000/300"
            img-alt="Card image"
            img-top>
      <div>
        <span style="float:left">
          ptk: <b-badge> {{section.points }}</b-badge>
        </span>
        <span>
          status:   <b-badge variant="warning">Niezatwierdzony</b-badge>
        </span>
        <span style="float: right">
          <b-button size="sm" variant="danger" @click="showRemoveConfirmation(section)">Usuń</b-button>
        </span>
      </div>
    </b-card>

    <b-button size="lg"
              variant="outline-primary"
              to="/turist/document-new-section">
      Dodaj odcinek do zatwierdzenia
    </b-button>

    <b-modal
      ref="removeModal"
      centered
      @ok="removeSection"
      title="Potwierdź usunięcie">
      <p v-if="sectionToRemove">
        Jesteś pewnien, że chcesz usunąć trasę {{sectionToRemove.startPoint}} - {{sectionToRemove.endPoint}}
      </p>
    </b-modal>

  </div>
</template>

<script>
  import DocumentNewSectionModal from "./document-new-section";

  export default {
    name: "section-documentation",
    components: {DocumentNewSectionModal},
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
      showAddSectionModal() {
        this.$refs.newSectionModal.show()
      },
      removeSection() {
        console.log('remove secion')
      },
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

  .container > * {
    margin-bottom: 20px;
  }
</style>
