import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    xs: 350,
    sm: 450,
    md: 1000,
    lg: Infinity,
  },
  defaultBreakpoint: 'sm' // customize this for SSR
})
