<template>
  <div class="w-full">
    <!-- Hero minimal -->
    <section class="pt-28 pb-10">
      <div class="container-xl">
        <h1 class="text-5xl md:text-6xl font-semibold text-gray-900 mb-4">Portfolio</h1>
        <p class="text-lg text-gray-600 max-w-2xl">Selección de proyectos. Diseño limpio, velocidad y detalle.</p>
      </div>
    </section>

    <!-- Grid minimal -->
    <section class="pb-24">
      <div class="container-xl">
        <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <PortfolioCard v-for="p in projects" :key="p.title" :title="p.title" :image="p.image" :link="p.link" />
        </div>
      </div>
    </section>
  </div>
  </template>
  
  <script setup>
  import PortfolioCard from '@/components/PortfolioCard.vue'
  const projects = [
    { title: 'SaaS Startup', image: '/saas-startup.jpg', link: '' },
    { title: 'Marketing Agency', image: '/marketing-agency.jpg', link: '' },
    { title: 'Luxury Hotel', image: '/luxury-hotel.jpg', link: '' },
    { title: 'Dental Clinic', image: '/dental-clinic.jpg', link: '' },
    { title: 'Photography Portfolio', image: '/photography-portfolio.jpg', link: '' },
    { title: 'Fashion Store', image: '/fashion-store.jpg', link: '' },
  ]
  </script>
