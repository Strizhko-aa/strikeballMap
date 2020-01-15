<template>
  <div>
    <yandex-map
      @map-was-initialized="setMap($event)"
      :coords="[55.76, 37.64]"
      :zoom="17"
      :controls="['fullscreenControl', 'geolocationControl']"
      :map-type="'satellite'"
      :ymap-class="'map-style'"
    >
      <ymap-marker
        :coords="[55.76, 37.64]"
        marker-id="123"
        hint-content="some hint"
        :icon="markerIcon"
      />
    </yandex-map>
  </div>
</template>

<script>
export default {
  name: 'map-component-from-npm',
  data () {
    return {
      myMap: null,
      markerIcon: {
        layout: 'default#imageWithContent',
        imageHref: '/red-point.jpg',
        imageSize: [43, 43],
        imageOffset: [0, 0],
        content: '123 v12',
        contentOffset: [0, 15],
        contentLayout: '<div style="background: red; width: 50px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      }
    }
  },
  methods: {
    setMap (e) { // e - map instance
      // console.log(e)
      this.myMap = e
    }
  }
}
</script>

<style>
  .map-style {
    width: 100vw;
    height: 100vh;
  }
</style>
