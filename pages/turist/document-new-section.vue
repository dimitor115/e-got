<template>
  <div class="container">
    <div class="section-form">
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

      <b-jumbotron v-if="documentation.sectionPhoto">
        <b-img
          class="photo-preview"
          :src="documentation.sectionPhoto">
        </b-img>
      </b-jumbotron>
    </div>
    <b-button size="lg"
              style="margin-top: 40px"
              variant="outline-primary"
              @click="addNewSectionDocumentation">
      Dodaj odcinek do zatwierdzenia
    </b-button>

  </div>
</template>

<script>
  import axios from 'axios'
  import {apiUrl} from "../../assets/utils";

  export default {
    name: "DocumentNewSectionModal",
    data: () => ({
      documentation: {
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
      addNewSectionDocumentation() {
        axios.post(`${apiUrl()}/documentation`, this.documentation)
          .then(test => {
            console.log(test)
          })
          .catch(err => {
            console.log(err)
          })
      },
      readAndRenderPhoto(event) {
        const file = event.srcElement.files[0]
        const reader = new FileReader()
        reader.onload = () => {
          this.documentation.sectionPhoto = reader.result
        }
        if (file) {
          reader.readAsDataURL(file)
        }
      }
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
    flex-direction: column;
  }

  .section-form > * {
    max-width: 30em;
    min-width: 20em;
  }

  .photo-preview {
    max-height: 200px;
  }
</style>
