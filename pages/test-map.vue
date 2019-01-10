<template>
  <div style="height: 100%; width: 100%">
    <no-ssr>
      <l-map
        style="height: 700px; width: 700px"
        :zoom="zoom"
        :center="center"
        @click="test"
      >
        <l-tile-layer :url="url"></l-tile-layer>
        <l-marker :lat-lng="markerLatLng"></l-marker>
        <l-marker v-for="(position, index) in markersPositions"
                  :key="index"
                  :lat-lng="position"></l-marker>
        <l-polyline
          :lat-lngs="markersPositions"
          :fill="false"
          color="red">
        </l-polyline>
      </l-map>
    </no-ssr>
  </div>
</template>

<script>
  import {LTileLayer, LMap, LMarker, LPolyline} from 'vue2-leaflet'
  import 'leaflet/dist/leaflet.css'

  export default {
    components: {LTileLayer, LMap, LMarker, LPolyline},
    data() {
      return {
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        zoom: 13,
        center: [50.81341933276091, 15.51973342895508],
        markerLatLng: [50.790853400838955, 15.513553619384766],
        markersPositions: [],
        bounds: null
      };
    },
    methods: {
      test(event) {
        console.log(event, event.latlng)
        // this.markerLatLng = [event.latlng.lat, event.latlng.lng]
        this.markersPositions.push(event.latlng)
      }
    }
  }
</script>
<style scoped lang="scss">
</style>
