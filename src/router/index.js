import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: ()=>import('../pages/Index.vue'),                 
    },
    // {
    //     path: '/Booklist',
    //     component: ()=>import('../pages/Booklist.vue'),                 
    // },
    {
        path: '/reader/:id',
        name: "reader",
        component: ()=>import('../pages/Reader.vue'),   
    },
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router