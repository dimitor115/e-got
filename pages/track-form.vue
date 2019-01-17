<template>
  <div class="content">
    <template v-if="viewPortWidth > 1900">
    <no-ssr>
      <l-map
        class="map-wrapper"
        :zoom="zoom"
        :center="center"
        @click="addMarker">
        <l-tile-layer :url="url"></l-tile-layer>
        <template v-for="(position, index) in track.geoPoints">
          <l-circle-marker v-if="index === currentMarkerIndex"
                           :lat-lng="position"
                           :radius="6"
                           color="blue"/>
          <l-marker v-else
                    :key="index"
                    :lat-lng="position">
          </l-marker>
        </template>

        <l-polyline
          :lat-lngs="track.geoPoints"
          :fill="false"
          color="red">
        </l-polyline>
      </l-map>
    </no-ssr>
    <section>
      <div class="track-list">
        <b-card v-for="(position, index) in track.geoPoints"
                :key="index"
                border-variant="primary"
                class="route-card"
                @click="markTheCurrentMarker(index)">
          <div>
            <li>
              <b-badge variant="light">{{position.lat}}</b-badge>
            </li>
            <li>
              <b-badge variant="light">{{position.lng}}</b-badge>
            </li>
          </div>
          <b-form-input v-model="position.name" type="text" placeholder="Podaj nazwę punktu"></b-form-input>
        </b-card>
      </div>
      <div class="track-management">
        <b-button variant="outline-danger"
                  style="margin-right: 0.25em"
                  size="lg"
                  @click="reset">
          Rest
        </b-button>
        <b-button variant="outline-success"
                  style="margin-left: 0.25em"
                  size="lg"
                  @click="showDetails">
          Zapisz
        </b-button>
      </div>
    </section>
    <b-modal
      ref="detailsModal"
      centered
      @ok="saveTrack"
      title="Szczegóły odcinka">
      <div>
        <b-form-group label="Grupa górska:"
                      description="Podaj grupę górską do której należy dany odcinek">
          <b-form-input v-model="track.group"
                        type="text"
                        placeholder="Podaj grupę górską">
          </b-form-input>
        </b-form-group>

        <b-form-group label="Punkty:"
                      description="Podaj ile punktów wart jest ten odcinek">
          <b-form-input v-model="track.points"
                        type="number"
                        placeholder="0">
          </b-form-input>
        </b-form-group>
      </div>
    </b-modal>
    </template>
    <div v-else class="container">
      <b-card border-variant="danger">
        <p>Ten widok jest dostępny tylko na desktopowej wersji</p>
      </b-card>
    </div>
  </div>
</template>


<script>
  import {LTileLayer, LMap, LMarker, LPolyline, LControl, LCircleMarker} from 'vue2-leaflet'
  import 'leaflet/dist/leaflet.css'
  import axios from 'axios'
  import {apiUrl} from "../assets/utils";

  export default {
    name: 'track-form',
    components: {LTileLayer, LMap, LMarker, LPolyline, LControl, LCircleMarker},
    data: () => ({
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 13,
      center: [50.81341933276091, 15.51973342895508],
      currentMarkerIndex: null,
      markersPositions: [],
      track: {
        geoPoints: [],
        points: 0,
        group: null
      },
      bounds: null
    }),
    methods: {
      markTheCurrentMarker(index) {
        this.currentMarkerIndex = index
      },
      reset() {
        this.track.geoPoints = []
      },
      saveTrack() {
        axios.post(`${apiUrl()}/tracks`, this.track)
          .then(() => {
            alert('Dodano!')
          })
          .catch(err => alert(err))
      },
      showDetails() {
        if(this.areTrackNamesValid()) {
          this.$refs.detailsModal.show()
        } else {
          alert('Punkt początkowy i końcowy muszą mieć nazwę !')
        }
      },
      addMarker(event) {
        this.track.geoPoints.push({...event.latlng, name: null, height: 345})
      },
      areTrackNamesValid() {
        const geoPoints = this.track.geoPoints
        return geoPoints[0].name && geoPoints[geoPoints.length -1].name
      }
    },
    computed: {
      viewPortWidth() {
        return Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../assets/common-styles";

  .content {
    display: flex;
    justify-content: center;
    margin: 2em 0 2em 0;
  }

  .map-wrapper {
    width: 130em;
    height: 70em;
    margin-right: 0.5em;
  }

  .track-list {
    overflow-y: auto;
    width: 20em;
    height: 48.5em;
  }

  .route-card {
    width: 18em;
    margin: 0 1em 0.5em 1em;
    list-style-type: none;

    li {
      font-size: 23px;
    }
  }

  .track-management {
    width: 20em;
    height: 5em;
    display: flex;
    justify-content: center;
    align-items: center;

    > * {
      width: 7em;
    }
  }


</style>
