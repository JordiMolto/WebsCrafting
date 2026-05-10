import { createApp } from "vue"
import { createUnhead } from "@unhead/vue"
import router from "./router"
import App from "./App.vue"
import "./assets/css/tailwind.css"

const app = createApp(App)
const head = createUnhead()
app.use(head)
app.use(router)
app.mount("#app")
