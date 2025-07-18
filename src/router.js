import Vue from '@/setup.js';
import VueRouter from 'vue-router'
import Home from './_pages/Home/Home'
let routes = [
    /** Auth needed */
    {
        path: '/',
        name: 'André Mury',
        component: Home,
        meta: {
            protected: true,
            title: 'CV'
        }
    },
    {
        path: '*',
        component: Home,
        name: 'Other',
        meta: {
            title: 'Home'
        }
    }
]

Vue.use(VueRouter);

var router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
