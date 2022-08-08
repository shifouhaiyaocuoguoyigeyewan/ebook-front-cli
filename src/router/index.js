import { createRouter, createWebHashHistory } from "vue-router";
import Booklist from '../pages/Booklist.vue';
import Reader from '../pages/Reader.vue';
import Test from '../pages/Test.vue';

const routes = [
    {
        path: '/',
        // component: ()=>import('../pages/Booklist.vue'),           
        component: Booklist,           
    },
    {
        path: '/reader/:id',
        name: "reader",
        component: Reader, 
        // component: Test, 
    },
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router