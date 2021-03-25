import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/Index.vue';


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
        { path: '*', redirect: '/', hidden: true },
    ],
});

router.afterEach((to) => {
    document.title = to.meta.title || 'PlayFood | APP';
});

export default router;