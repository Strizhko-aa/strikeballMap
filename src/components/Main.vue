<template>
  <div id="squries-wrapper" class="flex-1 flex-row">
    <div id="item-wrapper" v-for="i in 3" :key="i" class="w-40">
      <div @mouseenter="changeUnder()" @mouseleave="changeUnder()">
        <squrie :under="getUnderState(0, 0)"/>
      </div>
    </div>
  </div>
</template>

<script>
import Squrie from './Squrie'
export default {
  name: 'main-page',
  components: {
    'squrie': Squrie
  },
  data () {
    return {
      under: {
        0: {
          0: false,
          1: false,
          2: false
        }
      }
    }
  },
  methods: {
    changeUnder () {
      console.log('asdf')
      this.under[0][0] = !this.under[0][0]
    },
    getUnderState (i, j) {
      return this.under[i][j]
    }
  }
}
</script>
