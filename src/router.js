import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('./pages/Layout.vue'),
        children: [
            {
                path: '/',
                name: 'Home',
                component: () => import('./pages/Home.vue')
            },
            {
                path: '/users',
                name: 'About',
                component: () => import('./pages/Users.vue')
            },
            {
                path: '/about',
                name: 'About',
                component: () => import('./pages/About.vue'),
                meta: { requiresAuth: true }
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('./pages/Login.vue')
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

const isAuthenticated = false;
router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (isAuthenticated) {
            next();
            return;
        }
        next("/login");
    } else {
        next();
    }
});

export default router