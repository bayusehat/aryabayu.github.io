import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router"
import { routes } from "./routes";
import App from "./App.vue";

const router = createRouter({
    history : createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
})

const app = createApp(App)
app.use(router)
app.mount("#app")
