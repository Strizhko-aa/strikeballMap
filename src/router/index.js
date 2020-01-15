import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import MapComponent from '@/components/map/MapComponent'
import mapVueYandex from '@/components/map/mapVueYandex'
import Popup from '@/components/common/Popup'
// import MapComponent from '@/components/Squre'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/test',
      name: 'test',
      component: Popup
    },
    {
      path: '/map',
      name: 'Map',
      component: MapComponent
    },
    {
      path: '/map2',
      name: 'mapVueYandex',
      component: mapVueYandex
    }
    // {
    //   path: '/squres',
    //   name: 'squres',
    //   component: Squres
    // },
  ]
})
