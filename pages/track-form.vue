<template>
  <div class="content">
    <no-ssr>
      <l-map
        class="map-wrapper"
        :zoom="zoom"
        :center="center"
        @click="addMarker">
        <l-tile-layer :url="url"></l-tile-layer>
        <!--Put on map layer here -->
        <template v-for="(position, index) in markersPositions">
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
          :lat-lngs="markersPositions"
          :fill="false"
          color="red">
        </l-polyline>
      </l-map>
    </no-ssr>
    <section>
      <div class="track-list">
        <b-card v-for="(position, index) in markersPositions"
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
                  @click="save">
          Zapisz
        </b-button>
      </div>
    </section>
  </div>
</template>


<script>
  import {LTileLayer, LMap, LMarker, LPolyline, LControl, LCircleMarker} from 'vue2-leaflet'
  import 'leaflet/dist/leaflet.css'

  export default {
    name: 'track-form',
    components: {LTileLayer, LMap, LMarker, LPolyline, LControl, LCircleMarker},
    data: () => ({
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 13,
      center: [50.81341933276091, 15.51973342895508],
      currentMarkerIndex: null,
      markersPositions: [],
      bounds: null
    }),
    methods: {
      markTheCurrentMarker(index) {
        console.log(index)
        this.currentMarkerIndex = index
      },
      reset() {
        this.markersPositions = []
      },
      save() {
        console.log({...this.markersPositions[0]})
      },
      addMarker(event) {
        this.markersPositions.push({...event.latlng, name: null, height: 345})
      }
    }
  }
</script>
<style scoped lang="scss">
  .content {
    display: flex;
    justify-content: center;
    margin: 2em 0 2em 0;
    /*flex-direction: column;*/
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
