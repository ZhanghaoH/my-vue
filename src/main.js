import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from '@/utils/http'

Vue.config.productionTip = false
Vue.prototype.$http = http;

// 调用 `MyPlugin.install(Vue)` 需要在调用 new Vue() 启动应用之前完成
Vue.use(require('./plugins/bus').default);  //按需引入
Vue.use(require('./plugins/loading').default);  //按需引入

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
