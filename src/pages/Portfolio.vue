<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <h1>Portfolio</h1>
        <p>Selección de proyectos. Diseño limpio, velocidad y detalle.</p>
      </div>
    </section>

    <section class="section section--white">
      <div class="container">
        <div class="portfolio-grid">
          <PortfolioCard
            v-for="p in projects"
            :key="p.title"
            :title="p.title"
            :image="p.image"
            :link="p.link"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PortfolioCard from "@/components/PortfolioCard.vue";
import { useSeo } from "@/composables/useSeo.js";

useSeo({
  title: "Portfolio",
  description:
    "Descubre nuestros proyectos web: tiendas online, webs corporativas, portfolios y más. Diseño profesional con resultados reales.",
  path: "/portfolio",
});

const projects = [
  {
    title: "Di Monte Home Lift",
    image: "/placeholder.jpg",
    link: "https://dimontehomelift.com/",
  },
  {
    title: "Plásticos Ragal",
    image: "/placeholder.jpg",
    link: "https://plasticosragal.com/",
  },
  { title: "Luxury Hotel", image: "/luxury-hotel.jpg", link: "" },
  { title: "Dental Clinic", image: "/dental-clinic.jpg", link: "" },
  {
    title: "Photography Portfolio",
    image: "/photography-portfolio.jpg",
    link: "",
  },
  { title: "Fashion Store", image: "/fashion-store.jpg", link: "" },
];
</script>
