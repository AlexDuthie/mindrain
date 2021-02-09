import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store.js'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/UserLogin.vue'
import Register from '../views/UserRegister.vue'
import Settings from '../views/UserSettings.vue'

/*Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/publicprofile',
        name: 'PublicProfile',
        component: PublicProfile
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router*/

Vue.use(VueRouter);
let router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/settings',
            name: 'Settings',
            component: Settings,
        }
    ],
    base: process.env.BASE_URL
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/login')
    } else {
        next()
    }
})

export default router