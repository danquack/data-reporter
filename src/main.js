// External Imports
import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue'
import moment from 'moment';
import {
    library
} from '@fortawesome/fontawesome-svg-core'
import {
    faAngleRight
} from '@fortawesome/free-solid-svg-icons'
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Internal Vues
import App from './App.vue';
import Navbar from './components/Navbar.vue'

// Internal Javascript
import routes from './routes';


Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.filter('formatDate', function (value) {
    if (value) {
        return moment(String(value)).format('MM/DD/YYYY')
    }
})
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('Navbar', Navbar);
library.add(faAngleRight)


const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');