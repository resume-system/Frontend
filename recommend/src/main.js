import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import BaiduMap from 'vue-baidu-map'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Vue2Editor from "vue2-editor";

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'GdeGvqtKlvGVNtWcAudhmjq7RxozhIk1'
})
Vue.use(Antd);
Vue.use(Vue2Editor);
import 'element-ui/lib/theme-chalk/index.css';
// import './assets/css/reset.css'
import './assets/css/tailwindcss.css'
import './assets/css/reset.css'
import './assets/iconfont/iconfont.css'
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
