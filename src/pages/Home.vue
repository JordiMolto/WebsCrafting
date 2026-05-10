<template>
  <div class="w-full">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center overflow-hidden">
      <div class="container-xl">
        <div class="text-center">
          <h1 class="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 mb-6">
            Diseño y Desarrollo de páginas web a medida
          </h1>
          <p class="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Sitios web modernos, rápidos y elegantes. Experiencias digitales minimalistas que priorizan claridad, rendimiento y resultados.
          </p>
          <div class="flex gap-4 justify-center flex-wrap">
            <RouterLink to="/contacto" class="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-900 font-semibold">
              Solicitar Presupuesto
            </RouterLink>
            <RouterLink to="/portfolio" class="px-8 py-3 rounded-full border border-black/10 hover:bg-black/5 font-semibold text-gray-900">
              Ver Portfolio
            </RouterLink>
          </div>
        </div>
        <div class="mt-16 grid md:grid-cols-3 gap-6">
          <div class="p-6 rounded-2xl glass text-center">
            <div class="text-3xl font-semibold text-gray-900 mb-2">150+</div>
            <p class="text-gray-600">Proyectos completados</p>
          </div>
          <div class="p-6 rounded-2xl glass text-center">
            <div class="text-3xl font-semibold text-gray-900 mb-2">95%</div>
            <p class="text-gray-600">Clientes satisfechos</p>
          </div>
          <div class="p-6 rounded-2xl glass text-center">
            <div class="text-3xl font-semibold text-gray-900 mb-2">8+</div>
            <p class="text-gray-600">Años de experiencia</p>
          </div>
        </div>
      </div>
      <!-- Indicador de scroll -->
      <a href="#intro" class="absolute left-1/2 -translate-x-1/2 bottom-6 inline-flex flex-col items-center text-gray-700/80">
        <span class="text-sm mb-2">Desplaza</span>
        <span class="w-6 h-9 rounded-full ring-1 ring-black/10 flex items-start justify-center p-1">
          <span class="w-1 h-1 rounded-full bg-gray-900 animate-scroll-bounce"></span>
        </span>
      </a>
    </section>

    <!-- Portfolio Preview -->
    <section class="py-20">
      <div class="container-xl">
        <div class="flex items-end justify-between mb-8">
          <h2 class="text-3xl md:text-4xl font-semibold text-gray-900">Proyectos recientes</h2>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
          <PortfolioCard
            title="Di Monte Home Lift"
            image="/placeholder.jpg"
            link="https://dimontehomelift.com/"
          />
          <PortfolioCard
            title="Plásticos Ragal"
            image="/placeholder.jpg"
            link="https://plasticosragal.com/"
          />
        </div>
        <div class="text-center mt-10">
          <RouterLink to="/portfolio" class="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/10 hover:bg-black/5 font-semibold text-gray-900">
            Ver todo el portfolio
            <span aria-hidden="true">→</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Why Us Section -->
    <section class="py-24">
      <div class="container-xl">
        <h2 class="text-4xl font-semibold text-center text-gray-900 mb-12">Por qué elegirnos</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="p-6 rounded-2xl glass">
            <div class="text-2xl mb-3">🎯</div>
            <h3 class="font-semibold text-gray-900 mb-2">Enfoque Estratégico</h3>
            <p class="text-gray-600 text-sm">Cada proyecto comienza con una estrategia clara alineada con tus objetivos.</p>
          </div>
          <div class="p-6 rounded-2xl glass">
            <div class="text-2xl mb-3">⚡</div>
            <h3 class="font-semibold text-gray-900 mb-2">Rápido y Eficiente</h3>
            <p class="text-gray-600 text-sm">Desarrollo ágil sin sacrificar la calidad ni la atención al detalle.</p>
          </div>
          <div class="p-6 rounded-2xl glass">
            <div class="text-2xl mb-3">🔒</div>
            <h3 class="font-semibold text-gray-900 mb-2">Seguridad Total</h3>
            <p class="text-gray-600 text-sm">Protegemos tus datos y los de tus clientes con estándares de seguridad.</p>
          </div>
          <div class="p-6 rounded-2xl glass">
            <div class="text-2xl mb-3">📈</div>
            <h3 class="font-semibold text-gray-900 mb-2">Resultados Medibles</h3>
            <p class="text-gray-600 text-sm">Tracking y análisis constante para optimizar el rendimiento.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-24 bg-gray-50">
      <div class="container-xl">
        <h2 class="text-4xl font-semibold text-center text-gray-900 mb-12">Servicios y Tarifas</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-2xl ring-1 ring-black/5 p-6 hover:shadow-lg transition">
            <h3 class="font-semibold text-lg text-gray-900 mb-2">Web Corporativa</h3>
            <div class="text-2xl font-semibold text-gray-900 mb-4">€499</div>
            <ul class="text-sm text-gray-600 space-y-2 mb-6">
              <li>✓ Hasta 5 páginas</li>
              <li>✓ Responsive design</li>
              <li>✓ Formulario de contacto</li>
              <li>✓ Hosting 1 año</li>
            </ul>
            <RouterLink to="/contacto" class="block text-center px-4 py-2 bg-black text-white rounded-full hover:bg-gray-900 text-sm">
              Solicitar
            </RouterLink>
          </div>

          <div class="bg-white rounded-2xl ring-1 ring-black/5 p-6 hover:shadow-lg transition">
            <h3 class="font-semibold text-lg text-gray-900 mb-2">E-commerce</h3>
            <div class="text-2xl font-semibold text-gray-900 mb-4">€999</div>
            <ul class="text-sm text-gray-600 space-y-2 mb-6">
              <li>✓ Carrito de compras</li>
              <li>✓ Pasarela de pagos</li>
              <li>✓ Gestión de productos</li>
              <li>✓ SSL seguro</li>
            </ul>
            <RouterLink to="/contacto" class="block text-center px-4 py-2 bg-black text-white rounded-full hover:bg-gray-900 text-sm">
              Solicitar
            </RouterLink>
          </div>

          <div class="bg-white rounded-2xl ring-1 ring-black/5 p-6 hover:shadow-lg transition">
            <h3 class="font-semibold text-lg text-gray-900 mb-2">Artículos SEO</h3>
            <div class="text-2xl font-semibold text-gray-900 mb-4">€150</div>
            <ul class="text-sm text-gray-600 space-y-2 mb-6">
              <li>✓ 1,500 palabras</li>
              <li>✓ Optimizado SEO</li>
              <li>✓ Imágenes incluidas</li>
              <li>✓ Revisión incluida</li>
            </ul>
            <RouterLink to="/contacto" class="block text-center px-4 py-2 bg-black text-white rounded-full hover:bg-gray-900 text-sm">
              Solicitar
            </RouterLink>
          </div>

          <div class="bg-white rounded-2xl ring-1 ring-black/5 p-6 hover:shadow-lg transition">
            <h3 class="font-semibold text-lg text-gray-900 mb-2">Mantenimiento</h3>
            <div class="text-2xl font-semibold text-gray-900 mb-4">€99/mes</div>
            <ul class="text-sm text-gray-600 space-y-2 mb-6">
              <li>✓ Backups automáticos</li>
              <li>✓ Actualizaciones</li>
              <li>✓ Soporte técnico</li>
              <li>✓ Optimización</li>
            </ul>
            <RouterLink to="/contacto" class="block text-center px-4 py-2 bg-black text-white rounded-full hover:bg-gray-900 text-sm">
              Solicitar
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section id="intro" class="py-24 bg-white">
      <div class="container-xl">
        <h2 class="text-4xl font-semibold text-center text-gray-900 mb-12">Nuestro Proceso</h2>
        <div class="grid md:grid-cols-4 gap-8">
          <div class="relative">
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center font-semibold text-xl mb-4">
                1
              </div>
              <h3 class="font-semibold text-gray-900 text-center mb-2">Consulta</h3>
              <p class="text-sm text-gray-600 text-center">Entendemos tu visión y necesidades</p>
            </div>
          </div>

          <div class="relative">
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center font-semibold text-xl mb-4">
                2
              </div>
              <h3 class="font-semibold text-gray-900 text-center mb-2">Diseño</h3>
              <p class="text-sm text-gray-600 text-center">Creamos mockups y prototipos</p>
            </div>
          </div>

          <div class="relative">
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center font-semibold text-xl mb-4">
                3
              </div>
              <h3 class="font-semibold text-gray-900 text-center mb-2">Desarrollo</h3>
              <p class="text-sm text-gray-600 text-center">Construimos tu proyecto</p>
            </div>
          </div>

          <div class="relative">
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center font-semibold text-xl mb-4">
                4
              </div>
              <h3 class="font-semibold text-gray-900 text-center mb-2">Lanzamiento</h3>
              <p class="text-sm text-gray-600 text-center">Publicamos y optimizamos</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-semibold text-center text-gray-900 mb-12">Preguntas Frecuentes</h2>
        <div class="space-y-4">
          <div v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-2xl ring-1 ring-black/5">
            <button @click="faq.open = !faq.open" class="w-full p-6 flex justify-between items-center hover:bg-black/5">
              <span class="font-semibold text-gray-900">{{ faq.question }}</span>
              <span class="text-gray-900">{{ faq.open ? '−' : '+' }}</span>
            </button>
            <transition name="accordion">
              <div v-show="faq.open" class="px-6 pb-6 text-gray-600" :ref="setAccordionHeight">
                {{ faq.answer }}
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-semibold mb-6">Comienza tu Proyecto Hoy</h2>
        <p class="text-lg mb-8 text-gray-600">Contáctanos para una consulta gratuita y presupuesto personalizado</p>
        <div class="flex gap-4 justify-center flex-wrap">
          <RouterLink to="/contacto" class="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-900 font-semibold">
            Contactar Ahora
          </RouterLink>
          <a href="https://wa.me/34600000000" class="px-8 py-3 rounded-full border border-black/10 hover:bg-black/5 font-semibold text-gray-900">WhatsApp</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted, nextTick } from 'vue'
import PortfolioCard from '@/components/PortfolioCard.vue'

const faqs = ref([
  {
    question: '¿Cuánto tiempo tarda un proyecto web?',
    answer: 'Depende de la complejidad. Un sitio corporativo básico tarda 2-4 semanas. Los e-commerce y proyectos complejos pueden tomar 4-8 semanas.',
    open: false
  },
  {
    question: '¿Ofrecen soporte post-lanzamiento?',
    answer: 'Sí, ofrecemos paquetes de mantenimiento desde $99/mes que incluyen soporte técnico, actualizaciones y backups automáticos.',
    open: false
  },
  {
    question: '¿Qué tecnologías utilizan?',
    answer: 'Utilizamos tecnologías modernas como Vue.js, React, Node.js, y basamos nuestros proyectos en las mejores prácticas de desarrollo.',
    open: false
  },
  {
    question: '¿Incluyem SEO en los proyectos?',
    answer: 'Sí, optimizamos todos nuestros proyectos para buscadores. Ofrecemos también servicio de redacción de artículos SEO específicamente.',
    open: false
  }
])

const setAccordionHeight = (el) => {
  if (!el) return
  el.style.setProperty('--accordion-content-height', el.scrollHeight + 'px')
}

onMounted(async () => {
  await nextTick()
  const containers = document.querySelectorAll('[ref="setAccordionHeight"]')
  containers.forEach((el) => setAccordionHeight(el))
})
</script>
