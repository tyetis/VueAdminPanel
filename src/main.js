import Vue from 'vue'
import App from './pages/App.vue'
import router from './router'
import store from './store/store'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Axios from 'axios'

Vue.use(BootstrapVue)

Vue.config.productionTip = false
Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}
Vue.prototype.$http.interceptors.response.use(undefined, function (err) {
    return new Promise(function () {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
            store.dispatch("logout")
        }
        throw err;
    });
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
