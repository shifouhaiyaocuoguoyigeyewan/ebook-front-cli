import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: ()=>import('../components/Booklist.vue'),           
    },
    {
        path: '/reader/:id',
        name: "reader",
        component: ()=>import('../components/Reader.vue'), 
    },
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router