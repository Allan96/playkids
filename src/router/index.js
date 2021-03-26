import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/Index.vue';
import identificationRouter from './modules/identification';
import ordersRouter from './modules/orders';


Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: Index,
            meta: {
                requiresAuth: false
            }
        },
        identificationRouter,
        ordersRouter,
        { path: '*', redirect: '/', hidden: true },
    ],
});

router.afterEach((to) => {
    document.title = to.meta.title || 'PlayFood | APP';
});

export default router;