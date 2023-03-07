import MyHome from "../src/components/Home.vue";
import MyAbout from "../src/components/About.vue";
import MyWork from "../src/components/Work.vue";

export const routes = [
    {
        path : "/",
        name : "MyHome",
        component : MyHome
    },
    {
        path : "/about",
        name : "MyAbout",
        component : MyAbout
    },
    {
        path : "/work",
        name : "MyWork",
        component : MyWork
    }
]
