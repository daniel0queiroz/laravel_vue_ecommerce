import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import RequestPassword from "../views/RequestPassword.vue";
import ResetPassword from "../views/ResetPassword.vue";
import AppLayout from "../components/AppLayout.vue";
import Products from "../views/Products.vue";

const routes = [
    {
        path: "/app",
        name: "app",
        component: AppLayout,
        children: [
            {
                path: "painel",
                name: "app.dashboard",
                component: Dashboard,
            },
            {
                path: "produtos",
                name: "app.products",
                component: Products,
            },
        ],
    },
    {
        path: "/painel",
        name: "dashboard",
        component: Dashboard,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/solicitacao-senha",
        name: "requestPassword",
        component: RequestPassword,
    },
    {
        path: "/resetar-senha/:token",
        name: "resetPassword",
        component: ResetPassword,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
