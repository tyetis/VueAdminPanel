import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/store'

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
                name: 'Users',
                component: () => import('./pages/Users.vue')
            },
            {
                path: '/user/:id',
                name: 'User',
                component: () => import('./pages/User.vue')
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

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next();
            return;
        }
        next("/login");
    } else {
        next();
    }
});

export default router