import MyHome from "../src/components/Home.vue";
import MyAbout from "../src/components/About.vue";
import MyWork from "../src/components/Work.vue";
import MyContact from "../src/components/Contact.vue";

export const routes = [
    {
        path : "/",
        name : "MyHome",
        component : MyHome,
        // meta: { transition: 'slide-left' },
    },
    {
        path : "/about",
        name : "MyAbout",
        component : MyAbout,
        // meta: { transition: 'slide-left' },
    },
    {
        path : "/work",
        name : "MyWork",
        component : MyWork,
        // meta: { transition: 'slide-left' },
    },
    {
        path : "/contact",
        name : "MyContact",
        component : MyContact,
        // meta: { transition: 'slide-left' },
    }
]
