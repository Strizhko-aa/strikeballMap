// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import YmapPlugin from 'vue-yandex-maps'

Vue.config.productionTip = false

const mapSettings = {
  apiKey: '4bc78e60-d3c2-41cb-bc3e-21c91da5605e',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
}

Vue.use(YmapPlugin, mapSettings)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
