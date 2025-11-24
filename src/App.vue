<template>
  <div class="min-h-screen bg-white text-gray-900">
    <nav class="fixed top-0 left-0 right-0 z-50">
      <div class="container-xl">
        <div class="flex justify-between items-center h-16 rounded-2xl mt-3 px-3 glass supports-[backdrop-filter]:bg-white/50">
          <RouterLink to="/" class="flex items-center gap-2">
            <div class="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center ring-1 ring-black/5">
              <span class="text-white font-semibold text-sm">WC</span>
            </div>
            <span class="font-semibold text-lg text-gray-900">WebsCrafting</span>
          </RouterLink>
          
          <div class="hidden md:flex gap-6">
            <RouterLink to="/" class="text-gray-700 hover:text-black">Inicio</RouterLink>
            <RouterLink to="/sobre-nosotros" class="text-gray-700 hover:text-black">Sobre</RouterLink>
            <RouterLink to="/servicios" class="text-gray-700 hover:text-black">Servicios</RouterLink>
            <RouterLink to="/portfolio" class="text-gray-700 hover:text-black">Portfolio</RouterLink>
            <RouterLink to="/blog" class="text-gray-700 hover:text-black">Blog</RouterLink>
            <RouterLink to="/contacto" class="text-gray-700 hover:text-black">Contacto</RouterLink>
          </div>

          <RouterLink to="/contacto" class="hidden md:block px-4 py-2 bg-black text-white rounded-full hover:bg-gray-900">
            Presupuesto
          </RouterLink>
        </div>
      </div>
    </nav>

    <main class="pt-20">
      <RouterView />
    </main>

    <footer class="bg-gray-950 text-gray-300 mt-32">
      <div class="container-xl py-16">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 class="font-bold text-white mb-4">WebsCrafting</h3>
            <p class="text-sm text-gray-400">Transformamos tu visión en realidad digital.</p>
          </div>
          <div>
            <h4 class="font-bold text-white mb-4">Servicios</h4>
            <ul class="text-sm space-y-2">
              <li><RouterLink to="/servicios" class="hover:text-white">Desarrollo Web</RouterLink></li>
              <li><RouterLink to="/servicios" class="hover:text-white">E-commerce</RouterLink></li>
              <li><RouterLink to="/servicios" class="hover:text-white">SEO</RouterLink></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-white mb-4">Empresa</h4>
            <ul class="text-sm space-y-2">
              <li><RouterLink to="/sobre-nosotros" class="hover:text-white">Sobre Nosotros</RouterLink></li>
              <li><RouterLink to="/portfolio" class="hover:text-white">Portfolio</RouterLink></li>
              <li><RouterLink to="/blog" class="hover:text-white">Blog</RouterLink></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-white mb-4">Contacto</h4>
            <ul class="text-sm space-y-2">
              <li><a href="mailto:hola@webscrafting.com" class="hover:text-white">hola@webscrafting.com</a></li>
              <li><a href="tel:+34600000000" class="hover:text-white">+34 600 000 000</a></li>
              <li><a href="https://wa.me/34600000000" class="hover:text-white">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 WebsCrafting. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
