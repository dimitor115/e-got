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
        <b-form-select v-model="evidence.startPoint" :options="startPoints">
        </b-form-select>
      </b-form-group>

      <b-form-group label="Punkt końcowy:"
                    description="Wybierz punkt jeden z punktów końcowych, dostępnych dla punktowanych odcinków ">
        <b-form-select v-model="evidence.endPoint" :options="endPoints">
        </b-form-select>
      </b-form-group>

      <b-form-group label="Data przejścia odcinka:"
                    description="Podaj nam dokładną dane kiedy udało Ci się przebyć dany odcinek">
        <div class="datepicker-wrapper">
          <datepicker input-class="datepicker-custom"
                      v-model="evidence.trackDate">
          </datepicker>
        </div>
      </b-form-group>

      <b-form-group label="Dowód przejścia odcinka"
                    description="Dodaj zdjęcie siebie w charakterystycznym miejscu na wybranym odcinku">
        <b-form-file @change="readAndRenderPhoto" placeholder="Choose a file..."></b-form-file>
      </b-form-group>

      <b-jumbotron v-if="evidence.photo">
        <b-img
          class="photo-preview"
          :src="evidence.photo">
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
  import Datepicker from 'vuejs-datepicker'
  import {apiUrl, toBase64, compressPhoto} from "../../assets/utils";
  import ButtonLoader from "../../components/button-loader";

  export default {
    name: "DocumentNewSectionModal",
    components: {ButtonLoader, Datepicker},
    data: () => ({
      isRequestProcessing: false,
      previewPhoto: null,
      evidence: {
        photo: null,
        startPoint: null,
        endPoint: null,
        trackDate: null
      },
      mountainGroups: ['Tatry i Podtatrze polskie', 'Beskidy Zachodnie', 'Beskidy Wschodnie', 'Sudety'],
      geoPoints: [
        {startPoint: 'Dolina Chochołowska', endPoints: ['Siwa Polana']},
        {startPoint: 'Siwa Polana', endPoints: ['Dolina Chochołowska', 'Polana Huciska']},
        {startPoint: 'Polana Huciska', endPoints: ['Siwa Polana', 'Dolina Dudowa']},
        {startPoint: 'Dolina Dudowa', endPoints: ['Polana Huciska']},
        {startPoint: 'Starorobocińska Dolina', endPoints: ['Dolina Dudowa', 'Polana Trzydniówka', 'Polana Iwanówka']},
        {
          startPoint: 'Polana Iwanówka',
          endPoints: ['Starorobocińska Dolina', 'Iwaniecka Przełęcz', 'Schronisko PTTK na Hali Ornak']
        }
      ]
    }),
    methods: {
      validForm() {
        return this.evidence.startPoint && this.evidence.endPoint && this.evidence.trackDate && this.evidence.photo
      },
      postTrackEvidence() {
        if(this.validForm()) {
          this.isRequestProcessing = true
          axios.post(`${apiUrl()}/evidences`, this.evidence)
            .then(() => {
              this.isRequestProcessing = false
              this.$router.push('/turist/tracks-evidence')
            })
            .catch(err => alert(err))
        } else {
          alert('Formularz nie jest kompletny !')
        }
      },
      async readAndRenderPhoto(event) {
        const file = event.srcElement.files[0]
        this.evidence.photo = await toBase64(await compressPhoto(file))
      }
    },
    computed: {
      startPoints() {
        return this.geoPoints.map(x => x.startPoint)
      },
      endPoints() {
        return this.evidence.startPoint
          ? this.geoPoints.find(x => x.startPoint === this.evidence.startPoint).endPoints
          : []
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
    margin: 40px 0 20px 0;
  }

</style>
<style>
  .datepicker-custom {
    min-width: 30em;
    background-color: white;
  }
  .datepicker-wrapper > .vdp-date {

  }
</style>
