import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import ProductPage from './components/Products.vue'
Vue.use(VueRouter)
export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: HelloWorld,
        },
        {
            path: '/product',
            component: ProductPage,
        },
    ],
})
