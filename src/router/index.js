import Vue from 'vue'
import Router from 'vue-router'
import Routes from './route'

import axios from 'axios'
Vue.prototype.axios = axios

Vue.use(Router)

export default new Router({
  routes: Routes
})
