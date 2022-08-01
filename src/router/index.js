import { createRouter, createWebHashHistory } from "vue-router";
import Booklist from '../components/Booklist.vue';
import Reader from '../components/Reader.vue'

const routes = [
    {
        path: '/',
        component: Booklist,           
    },
    {
        path: '/reader/:id',
        name: "reader",
        component: Reader, 
    },
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router