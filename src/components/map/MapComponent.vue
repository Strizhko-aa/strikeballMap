<template>
  <div>
    <div class="min-w-screen min-h-screen" id="my-map"></div>
  </div>
</template>

<script>
const ymaps = window.ymaps

export default {
  name: 'map-component',
  data () {
    return {
      myMap: null,
      mapState: 'default' // addMark
    }
  },
  mounted () {
    ymaps.ready(this.initComponent)
    // setTimeout(() => {
    //   this.addMark(this.myMap.getCenter())
    // }, 2000)
  },
  methods: {
    initComponent () {
      this.initMap()
      this.initControls()
      this.initMarkTemplate()
    },

    initMap () {
      // Создание карты.
      this.myMap = new ymaps.Map('my-map', {
        type: 'yandex#satellite',
        controls: ['fullscreenControl', 'geolocationControl', 'rulerControl'],
        center: [55.76, 37.64],
        zoom: 17 // от 0 (весь мир) до 19.
      })

      let self = this
      this.myMap.events.add('click', function (e) {
        if (self.mapState === 'addMark') {
          let _coord = e.get('coords')
          self.addMark(_coord)
        }
      })
    },

    initMarkTemplate () {
      window.MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      )
    },

    initControls () {
      let _buttonAddMark = new ymaps.control.Button({
        data: {
          content: 'add'
        }
        // options: {
        //   maxWidth: 26
        // }
      })

      let self = this

      _buttonAddMark.events
        .add(
          'press',
          function () {
            // self.addMark(self.myMap.getCenter())
            if (self.mapState !== 'addMark') {
              self.mapState = 'addMark'
            } else {
              self.mapState = 'default'
            }
          }
        )

      this.myMap.controls.add(_buttonAddMark)
    },

    addMark (coords) {
      let _myPlacemark = new ymaps.Placemark(coords, {
        // hintContent: 'Собственный значок метки',
        // balloonContent: 'Это красивая метка'
        iconContent: '12'
      }, {
        preset: 'islands#redCircleIcon',
        draggable: true
        // iconLayout: 'default#imageWithContent',
        // // iconImageHref: '../../assets/img/red-point.png',
        // // iconImageHref: 'https://www.pinclipart.com/picdir/middle/66-661221_file-vorschriftszeichen-1-svg-red-circle-logo-template.png',
        // iconImageSize: [32, 32]
        // // iconImageOffset: [-5, -38]
      })

      _myPlacemark.events.add('click', function (e) {
        let _mark = e.get('target')
        _mark.properties.set({
          iconContent: 55
        })
      })

      this.myMap.geoObjects.add(_myPlacemark)
    }
  }
}
</script>
