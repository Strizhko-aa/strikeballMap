<template>
  <div>
    <div class="min-w-screen min-h-screen" id="my-map"></div>
    <popup v-show="showSetCount">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Количество
      </label>
      <input v-model="countInMark" autofocus class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="1">
      <div class="w-full">
        <button @click="setCountInMark()" class="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-5/12" type="button">
          ОК
        </button>
        <button @click="deleteMark()" class="my-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-5/12 float-right" type="button">
          Удалить метку
        </button>
      </div>
    </popup>
  </div>
</template>

<script>
import Popup from '@/components/common/Popup'

const ymaps = window.ymaps

export default {
  name: 'map-component',
  components: {
    'popup': Popup
  },
  data () {
    return {
      myMap: null,
      mapState: 'default', // addMark
      showSetCount: false,
      countInMark: '',
      activeMark: null
    }
  },
  mounted () {
    ymaps.ready(this.initComponent)
    // setTimeout(() => {
    //   this.addMark(this.myMap.getCenter())
    // }, 2000)
  },
  methods: {
    deleteMark () {
      this.myMap.removeOverlay(this.activeMark)
      this.setShowSetCount(false)
    },

    setCountInMark () {
      this.activeMark.properties.set({
        iconContent: this.countInMark
      })
      this.setShowSetCount(false)
    },

    setShowSetCount (val) {
      this.showSetCount = val
    },

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
        iconContent: ''
      }, {
        preset: 'islands#redCircleIcon',
        draggable: true
      })

      let self = this

      _myPlacemark.events.add('click', function (e) {
        self.activeMark = e.get('target')
        self.setShowSetCount(true)
      })
      this.activeMark = _myPlacemark

      this.myMap.geoObjects.add(_myPlacemark)
      this.setShowSetCount(true)
    }
  }
}
</script>

<style scoped>
</style>
