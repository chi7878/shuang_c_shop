// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "bootstrap"
import axios from 'axios'
import VueAxios from 'vue-axios'
import VeeValidate from 'vee-validate'
import zhTW from 'vee-validate/dist/locale/zh_TW'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);
Vue.use(VueAxios,axios)
Vue.config.productionTip = false
axios.defaults.withCredentials = true;

const i18n = new VueI18n({
  locale: 'zhTW'
});
Vue.use(VeeValidate, {
  i18n,
  dictionary: {
    zhTW
  }
});

router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});

Vue.filter("currency", function(item) {
  const n = Number(item);
  return `$${n.toFixed(0).replace(/./g, (c, i, a) => {
    const currency =
      i && c !== "." && (a.length - i) % 3 === 0
        ? `, ${c}`.replace(/\s/g, "")
        : c;
    return currency;
  })}`;
});

/* eslint-disable no-new */

new Vue({
  i18n,
  el: '#app',
  router,
  render: h => h(App)
})
