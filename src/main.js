import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./static/icon/iconfont.css"
import VueAMap from 'vue-amap';
import '../src/utils/rem'
import '../src/scss/main.scss'
Vue.use(VueAMap);

  
VueAMap.initAMapApiLoader({
  key: '01c8a124f4d5df282f4695bac6c467dc',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});
// lazyAMapApiLoaderInstance.load().then(() => {
//   // your code ...
//   this.map = new AMap.Map('amapContainer', {
//     center: new AMap.LngLat(121.59996, 31.197646)
//   });
// });
// AMap.initAMapApiLoader({

//   key: '01c8a124f4d5df282f4695bac6c467dc',
  
//   plugin: ['AMap.Geolocation']
// });

// import 'swiper/swiper-bundle.css'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// Vue.use(VueAwesomeSwiper)

import axios from "axios";
Vue.filter('dateFormat', (dataStr) => {
  var dataStrson = dataStr*1000
  var time = new Date(dataStrson);

  function timeAdd0(str) {
    if (str < 10) {
      str = '0' + str;
    }
    return str
  }
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  var d = time.getDate();
  var h = time.getHours();
  var mm = time.getMinutes();
  var s = time.getSeconds();
  return y + '-' + timeAdd0(m) + '-' + timeAdd0(d) + ' ' 
})
Vue.prototype.$axios = axios;
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app') 
