<template>
  <div class="w-full">
    <!-- Hero minimal -->
    <section class="pt-28 pb-10">
      <div class="container-xl">
        <h1 class="text-5xl md:text-6xl font-semibold text-gray-900 mb-4">Nuestros Servicios</h1>
        <p class="text-lg text-gray-600 max-w-2xl">
          Soluciones web personalizadas diseñadas para impulsar el crecimiento de tu negocio.
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-24 bg-white">
      <div class="container-xl">
        <div class="grid md:grid-cols-2 gap-10">
          <div 
            v-for="service in services"
            :key="service.id"
            class="p-8 rounded-2xl ring-1 ring-black/5 hover:shadow-xl transition-all duration-300 cursor-pointer glass"
            @click="selectedService = service"
          >
            <div class="text-5xl mb-4">{{ service.icon }}</div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">{{ service.title }}</h3>
            <p class="text-gray-600 mb-6">{{ service.shortDescription }}</p>
            
            <div class="mb-6">
              <h4 class="font-semibold text-gray-900 mb-3">Incluye:</h4>
              <ul class="space-y-2">
                <li v-for="item in service.includes.slice(0, 4)" :key="item" class="flex gap-2 text-sm text-gray-600">
                  <span class="text-gray-900 font-semibold">•</span>
                  {{ item }}
                </li>
              </ul>
            </div>

            <div class="flex justify-between items-end mb-6">
              <div>
                <p class="text-sm text-gray-600 mb-1">Desde</p>
                <div class="text-3xl font-semibold text-gray-900">€{{ service.price }}</div>
              </div>
              <p class="text-sm text-gray-600">{{ service.delivery }}</p>
            </div>

            <div class="flex gap-3 flex-wrap">
              <RouterLink :to="`/contacto?service=${service.id}`" class="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-900 font-semibold text-sm">
                Solicitar
              </RouterLink>
              <button @click.stop="selectedService = service" class="px-4 py-2 rounded-full border border-black/10 hover:bg-black/5 font-semibold text-sm">
                Detalles
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Detail Modal -->
    <div v-if="selectedService" @click="selectedService = null" class="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div @click.stop class="bg-white rounded-2xl ring-1 ring-black/5 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div class="sticky top-0 bg-white/80 backdrop-blur-md border-b border-black/10 p-6 flex justify-between items-start">
          <h2 class="text-2xl font-semibold text-gray-900">{{ selectedService.title }}</h2>
          <button @click="selectedService = null" class="text-gray-500 hover:text-gray-700 text-2xl font-bold">×</button>
        </div>

        <div class="p-8 space-y-6">
          <p class="text-gray-600">{{ selectedService.longDescription }}</p>

          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Lo que incluye</h3>
            <ul class="space-y-2">
              <li v-for="item in selectedService.includes" :key="item" class="flex gap-3 text-gray-600">
                <span class="text-gray-900 font-semibold">✓</span>
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="grid md:grid-cols-2 gap-6 bg-black/5 p-6 rounded-2xl">
            <div>
              <p class="text-sm text-gray-600 mb-1">Precio base</p>
              <div class="text-3xl font-semibold text-gray-900 mb-4">€{{ selectedService.price }}</div>
            </div>
            <div>
              <p class="text-sm text-gray-600 mb-1">Tiempo de entrega</p>
              <div class="text-xl font-bold text-gray-900">{{ selectedService.delivery }}</div>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Proceso</h3>
            <div class="space-y-3">
              <div v-for="(step, index) in selectedService.process" :key="index" class="flex gap-4">
                <div class="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                  {{ index + 1 }}
                </div>
                <div class="flex-1">
                  <p class="font-semibold text-gray-900">{{ step.title }}</p>
                  <p class="text-sm text-gray-600">{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div v-if="selectedService.addOns" class="border-t border-gray-200 pt-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Complementos opcionales</h3>
            <div class="space-y-2">
              <div v-for="addon in selectedService.addOns" :key="addon.name" class="flex justify-between items-center p-3 bg-black/5 rounded-xl">
                <span class="text-gray-700">{{ addon.name }}</span>
                <span class="font-semibold text-gray-900">+€{{ addon.price }}</span>
              </div>
            </div>
          </div>

          <div class="flex gap-3 pt-6 border-t border-gray-200">
            <RouterLink :to="`/contacto?service=${selectedService.id}`" class="flex-1 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-900 font-semibold text-center">
              Solicitar Servicio
            </RouterLink>
            <button @click="selectedService = null" class="px-6 py-3 rounded-full border border-black/10 hover:bg-black/5 font-semibold">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Comparison Table -->
    <section class="py-24 bg-gray-50">
      <div class="container-xl">
        <h2 class="text-4xl font-semibold text-center text-gray-900 mb-12">Comparativa de Servicios</h2>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="bg-white border-b border-black/10">
                <th class="text-left px-6 py-4 font-semibold text-gray-900">Características</th>
                <th class="text-center px-6 py-4 font-semibold text-gray-900">Web</th>
                <th class="text-center px-6 py-4 font-semibold text-gray-900">E-commerce</th>
                <th class="text-center px-6 py-4 font-semibold text-gray-900">SEO</th>
                <th class="text-center px-6 py-4 font-semibold text-gray-900">Maintenance</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="feature in comparisonFeatures" :key="feature.name" class="bg-white border-b border-gray-100 hover:bg-black/5">
                <td class="px-6 py-4 font-semibold text-gray-900">{{ feature.name }}</td>
                <td class="px-6 py-4 text-center">{{ feature.web === true ? '✓' : feature.web === false ? '✗' : feature.web }}</td>
                <td class="px-6 py-4 text-center">{{ feature.ecommerce === true ? '✓' : feature.ecommerce === false ? '✗' : feature.ecommerce }}</td>
                <td class="px-6 py-4 text-center">{{ feature.seo === true ? '✓' : feature.seo === false ? '✗' : feature.seo }}</td>
                <td class="px-6 py-4 text-center">{{ feature.maintenance === true ? '✓' : feature.maintenance === false ? '✗' : feature.maintenance }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Why Choose Section -->
    <section class="py-24 bg-white">
      <div class="container-xl">
        <h2 class="text-4xl font-semibold text-center text-gray-900 mb-12">¿Por qué elegirnos?</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl mb-4">🎯</div>
            <h3 class="font-semibold text-gray-900 mb-2">Resultados Medibles</h3>
            <p class="text-gray-600 text-sm">Cada proyecto tiene objetivos claros y KPIs definidos.</p>
          </div>
          <div class="text-center">
            <div class="text-4xl mb-4">⚡</div>
            <h3 class="font-semibold text-gray-900 mb-2">Rápido y Eficiente</h3>
            <p class="text-gray-600 text-sm">Entregos puntuales sin comprometer la calidad.</p>
          </div>
          <div class="text-center">
            <div class="text-4xl mb-4">🔒</div>
            <h3 class="font-semibold text-gray-900 mb-2">Seguro y Escalable</h3>
            <p class="text-gray-600 text-sm">Arquitectura moderna preparada para el crecimiento.</p>
          </div>
          <div class="text-center">
            <div class="text-4xl mb-4">📈</div>
            <h3 class="font-semibold text-gray-900 mb-2">Optimizado SEO</h3>
            <p class="text-gray-600 text-sm">Todos nuestros proyectos están SEO-ready.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-semibold mb-6">¿No encuentras lo que buscas?</h2>
        <p class="text-lg mb-8 text-gray-600">Contáctanos para un servicio personalizado ajustado a tus necesidades.</p>
        <RouterLink to="/contacto" class="inline-block px-8 py-3 bg-black text-white rounded-full hover:bg-gray-900 font-semibold">
          Solicitar Presupuesto
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const selectedService = ref(null)

const services = ref([
  {
    id: 'web',
    icon: '🌐',
    title: 'Sitio Web Corporativo',
    shortDescription: 'Presencia profesional en línea que genera confianza',
    longDescription: 'Crea una presencia profesional en línea con un sitio web moderno, responsivo y optimizado para conversión. Perfecto para empresas que necesitan dar a conocer sus servicios.',
    price: '499',
    delivery: '2-4 semanas',
    includes: [
      'Diseño responsivo (móvil + escritorio)',
      'Hasta 5 páginas',
      'Formulario de contacto integrado',
      'Blog integrado (opcional)',
      'Integración con redes sociales',
      'Certificado SSL',
      'Optimización básica SEO',
      'Hosting 1 año incluido'
    ],
    process: [
      { title: 'Descubrimiento', description: 'Entendemos tu negocio y objetivos' },
      { title: 'Diseño', description: 'Creamos mockups y prototipos' },
      { title: 'Desarrollo', description: 'Construimos tu sitio web' },
      { title: 'Lanzamiento', description: 'Publicamos y optimizamos' }
    ],
    addOns: [
      { name: 'Páginas adicionales', price: '50' },
      { name: 'Integración CRM', price: '200' },
      { name: 'Sistema de reservas', price: '300' }
    ]
  },
  {
    id: 'ecommerce',
    icon: '🛍️',
    title: 'E-commerce Profesional',
    shortDescription: 'Plataforma de ventas online de alto rendimiento',
    longDescription: 'Tienda online completa con carrito de compras, pasarela de pagos, gestión de inventario y análisis de ventas. Diseñada para convertir visitantes en clientes.',
    price: '999',
    delivery: '4-8 semanas',
    includes: [
      'Carrito de compras avanzado',
      'Integración de múltiples pasarelas de pago',
      'Gestión de productos y categorías',
      'Sistema de descuentos y cupones',
      'Gestión de órdenes',
      'Panel de administración intuitivo',
      'Certificado SSL premium',
      'Optimización completa SEO',
      'Email marketing integrado'
    ],
    process: [
      { title: 'Análisis', description: 'Entendemos tu modelo de negocio' },
      { title: 'Diseño UX', description: 'Optimizamos para conversión' },
      { title: 'Desarrollo', description: 'Construimos la plataforma' },
      { title: 'Testing', description: 'Pruebas exhaustivas de pagos' }
    ],
    addOns: [
      { name: 'Integración con proveedores', price: '400' },
      { name: 'App móvil nativa', price: '1500' },
      { name: 'Análisis avanzado', price: '250' }
    ]
  },
  {
    id: 'seo',
    icon: '📝',
    title: 'Servicio de SEO y Artículos',
    shortDescription: 'Estrategia de contenido para dominar Google',
    longDescription: 'Artículos de blog optimizados para SEO que atraen tráfico orgánico de calidad. Cada artículo está investigado y diseñado para generar leads.',
    price: '150',
    delivery: 'Por artículo',
    includes: [
      '1,500-2,000 palabras',
      'Investigación de keywords',
      'Optimización on-page completa',
      'Meta descripción optimizada',
      'Enlaces internos estratégicos',
      'Imágenes optimizadas',
      '1 ronda de revisión',
      'Formatos listos para publicar'
    ],
    process: [
      { title: 'Keyword Research', description: 'Identificamos oportunidades SEO' },
      { title: 'Estructura', description: 'Diseñamos el contenido' },
      { title: 'Redacción', description: 'Escribimos contenido de calidad' },
      { title: 'Optimización', description: 'Optimizamos para SEO' }
    ],
    addOns: [
      { name: 'Análisis de backlinks', price: '200' },
      { name: 'Auditoría SEO completa', price: '500' },
      { name: 'Estrategia de contenido (12 meses)', price: '2000' }
    ]
  },
  {
    id: 'maintenance',
    icon: '🛠️',
    title: 'Mantenimiento y Soporte',
    shortDescription: 'Mantenimiento continuo de tu sitio web',
    longDescription: 'Plan de mantenimiento mensual que incluye actualizaciones de seguridad, backups, optimización de rendimiento y soporte técnico prioritario.',
    price: '99',
    delivery: 'Mensual',
    includes: [
      'Backups automáticos diarios',
      'Actualizaciones de seguridad',
      'Monitoreo 24/7',
      'Optimización de rendimiento',
      'Soporte técnico 24/7',
      'Reportes mensuales',
      'Corrección de errores',
      'Actualizaciones de plugins'
    ],
    process: [
      { title: 'Monitoreo', description: 'Vigilancia continua del sitio' },
      { title: 'Actualizaciones', description: 'Mantener todo actualizado' },
      { title: 'Optimización', description: 'Mejorar rendimiento' },
      { title: 'Reportes', description: 'Informes detallados mensuales' }
    ],
    addOns: null
  }
])

const comparisonFeatures = ref([
  { name: 'Diseño responsivo', web: true, ecommerce: true, seo: true, maintenance: true },
  { name: 'Carrito de compras', web: false, ecommerce: true, seo: false, maintenance: false },
  { name: 'Pasarela de pagos', web: false, ecommerce: true, seo: false, maintenance: false },
  { name: 'Blog integrado', web: true, ecommerce: true, seo: true, maintenance: true },
  { name: 'SEO optimizado', web: true, ecommerce: true, seo: true, maintenance: true },
  { name: 'SSL incluido', web: true, ecommerce: true, seo: true, maintenance: true },
  { name: 'Backups automáticos', web: false, ecommerce: false, seo: false, maintenance: true },
  { name: 'Soporte 24/7', web: false, ecommerce: false, seo: false, maintenance: true },
  { name: 'Análisis integrado', web: true, ecommerce: true, seo: true, maintenance: true },
  { name: 'Mantenimiento', web: false, ecommerce: false, seo: false, maintenance: true }
])
</script>
