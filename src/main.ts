import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
/// @ts-ignore
import './component-loader'
import './store'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  theme: {
    primary: '#ec1d6c',
    secondary: '#1dec9d',
    accent: '#ffa691',
    error: '#ec351d',
    info: '#f8b2ec',
    success: '#09b000',
    warning: '#7600a8',
  },
})
// console.log('Starting App')
// tslint:disable-next-line: no-unused-expression
new Vue({
  el: '#app',
  delimiters: ['${', '}'],
})

