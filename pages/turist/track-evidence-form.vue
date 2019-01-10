<template>
  <div class="container">
    <div v-blur="isRequestProcessing" class="evidence-form">
      <b-form-group label="Grupa górska:"
                    description="Wybierz obszar po którym podróżowałeś">
        <b-form-select :options="mountainGroups">
        </b-form-select>
      </b-form-group>

      <b-form-group label="Punkt początkowy:"
                    description="Wybierz punkt początkowy jednego z punktownych odcinków, dodanych przez komisję">
        <b-form-select :options="startPoints">
        </b-form-select>
      </b-form-group>

      <b-form-group label="Punkt końcowy:"
                    description="Wybierz punkt jeden z punktów końcowych, dostępnych dla punktowanych odcinków ">
        <b-form-select :options="startPoints">
        </b-form-select>
      </b-form-group>

      <b-form-group label="Dodów przejścia odcinka"
                    description="Dodaj zdjęcie siebie w charakterystycznym miejscu na wybranym odcinku">
        <b-form-file @change="readAndRenderPhoto" placeholder="Choose a file..."></b-form-file>
      </b-form-group>

      <b-jumbotron v-if="evidence.sectionPhoto">
        <b-img
          class="photo-preview"
          :src="evidence.sectionPhoto">
        </b-img>
      </b-jumbotron>
    </div>

    <button-loader size="lg"
                   class="responsive-button button-margin"
                   variant="outline-primary"
                   :is-processing="isRequestProcessing"
                   @click="postTrackEvidence">
      Dodaj odcinek do zatwierdzenia
    </button-loader>

  </div>
</template>

<script>
  import axios from 'axios'
  import {apiUrl} from "../../assets/utils";
  import ButtonLoader from "../../components/button-loader";
  //TODO: dodać wybieranie daty przejścia trasy
  export default {
    name: "DocumentNewSectionModal",
    components: {ButtonLoader},
    data: () => ({
      isRequestProcessing: false,
      evidence: {
        sectionPhoto: null,
        startPoint: null,
        endPoint: null
      },
      mountainGroups: ['Tatry', 'Karpaty', 'Bieszczady'],
      startPoints: [
        {text: "Zakopane"},
        {text: "Hala Gąsiennicowa"},
        {text: "Kacprowy wierch - schronisko"},
        {text: "Hala Miziowa"},
        {text: "Korbielów"},
      ]
    }),
    methods: {
      postTrackEvidence() {
        this.isRequestProcessing = true
        axios.post(`${apiUrl()}/evidences`, this.evidence)
          .then(() => {
            this.isRequestProcessing = false
            this.$router.push('/turist/tracks-evidence')
          })
          .catch(err => alert(err))
      },
      readAndRenderPhoto(event) {
        const file = event.srcElement.files[0]
        const reader = new FileReader()
        reader.onload = () => {
          this.evidence.sectionPhoto = reader.result
        }
        if (file) {
          reader.readAsDataURL(file)
        }
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/common-styles.scss";

  .evidence-form > * {
    max-width: 30em;
    min-width: 20em;
  }

  .photo-preview {
    max-height: 200px;
  }

  .button-margin {
    margin-top: 40px;
  }

</style>
