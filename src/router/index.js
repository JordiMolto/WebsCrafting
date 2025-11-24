import { createRouter, createWebHistory } from "vue-router"
import Home from "../pages/Home.vue"
import About from "../pages/About.vue"
import Services from "../pages/Services.vue"
import Portfolio from "../pages/Portfolio.vue"
import Blog from "../pages/Blog.vue"
import Contact from "../pages/Contact.vue"
import BlogPost from "../pages/BlogPost.vue"

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/sobre-nosotros", component: About, name: "About" },
  { path: "/servicios", component: Services, name: "Services" },
  { path: "/portfolio", component: Portfolio, name: "Portfolio" },
  { path: "/blog", component: Blog, name: "Blog" },
  { path: "/blog/:slug", component: BlogPost, name: "BlogPost" },
  { path: "/contacto", component: Contact, name: "Contact" },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Siempre desplazarse al top al navegar
    return { left: 0, top: 0 }
  },
})

export default router
