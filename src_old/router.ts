import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Posts from './components/Posts.vue'
const routes = [
    {
        path: '/',
        component: HelloWorld
    },
    {
        path: '/posts',
        component: Posts
    }
]

export default router = new VueRouter({
    mode: 'history',
    routes
})