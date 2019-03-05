import Home from './components/Home.vue';
import Create from './components/create/Create.vue';
import List from './components/list/List.vue';
import Report from './components/report/Report.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/create', component: Create },
    { path: '/list', component: List },
    { path: '/report', component: Report }
];

export default routes;