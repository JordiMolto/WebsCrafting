<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <h1>Nuestros Servicios</h1>
        <p>Soluciones web personalizadas diseñadas para impulsar el crecimiento de tu negocio.</p>
      </div>
    </section>

    <section class="section section--white">
      <div class="container">
        <div class="services-grid">
          <div
            v-for="service in services"
            :key="service.id"
            class="service-card"
            @click="selectedService = service"
          >
            <div class="service-card__icon">{{ service.icon }}</div>
            <h3 class="service-card__title">{{ service.title }}</h3>
            <p class="service-card__desc">{{ service.shortDescription }}</p>
            <p class="service-card__includes-label">Incluye:</p>
            <ul class="service-card__includes">
              <li v-for="item in service.includes.slice(0, 4)" :key="item">
                <span>•</span>{{ item }}
              </li>
            </ul>
            <div class="service-card__pricing">
              <div>
                <p class="service-card__price-label">Desde</p>
                <div class="service-card__price">€{{ service.price }}</div>
              </div>
              <p class="service-card__delivery">{{ service.delivery }}</p>
            </div>
            <div class="service-card__actions">
              <RouterLink :to="`/contacto?service=${service.id}`" class="btn btn--primary btn--sm">Solicitar</RouterLink>
              <button @click.stop="selectedService = service" class="btn btn--outline btn--sm">Detalles</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <div v-if="selectedService" class="modal-overlay" @click="selectedService = null">
      <div class="modal" @click.stop>
        <div class="modal__header">
          <h2>{{ selectedService.title }}</h2>
          <button class="modal__close" @click="selectedService = null">×</button>
        </div>
        <div class="modal__body">
          <p>{{ selectedService.longDescription }}</p>

          <div>
            <h3>Lo que incluye</h3>
            <ul class="modal__includes">
              <li v-for="item in selectedService.includes" :key="item">
                <span>✓</span>{{ item }}
              </li>
            </ul>
          </div>

          <div class="modal__pricing-row">
            <div>
              <p class="modal__price-label">Precio base</p>
              <div class="modal__price">€{{ selectedService.price }}</div>
            </div>
            <div>
              <p class="modal__price-label">Tiempo de entrega</p>
              <div class="modal__delivery">{{ selectedService.delivery }}</div>
            </div>
          </div>

          <div>
            <h3>Proceso</h3>
            <div class="modal__process">
              <div v-for="(step, index) in selectedService.process" :key="index" class="modal__step">
                <div class="modal__step-num">{{ index + 1 }}</div>
                <div>
                  <p class="modal__step-title">{{ step.title }}</p>
                  <p class="modal__step-desc">{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div v-if="selectedService.addOns" class="modal__addons">
            <h3>Complementos opcionales</h3>
            <div v-for="addon in selectedService.addOns" :key="addon.name" class="modal__addon-row">
              <span>{{ addon.name }}</span>
              <span>+€{{ addon.price }}</span>
            </div>
          </div>

          <div class="modal__footer">
            <RouterLink :to="`/contacto?service=${selectedService.id}`" class="btn btn--primary btn--full">Solicitar Servicio</RouterLink>
            <button @click="selectedService = null" class="btn btn--outline">Cerrar</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Comparison -->
    <section class="section section--subtle">
      <div class="container">
        <div class="section-header section-header--center">
          <h2 class="section-title">Comparativa de Servicios</h2>
        </div>
        <div class="comparison-section">
          <table>
            <thead>
              <tr>
                <th>Características</th>
                <th>Web</th>
                <th>E-commerce</th>
                <th>SEO</th>
                <th>Mantenimiento</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="feature in comparisonFeatures" :key="feature.name">
                <td>{{ feature.name }}</td>
                <td>{{ feature.web === true ? '✓' : '✗' }}</td>
                <td>{{ feature.ecommerce === true ? '✓' : '✗' }}</td>
                <td>{{ feature.seo === true ? '✓' : '✗' }}</td>
                <td>{{ feature.maintenance === true ? '✓' : '✗' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Why Choose -->
    <section class="section section--white">
      <div class="container">
        <div class="section-header section-header--center">
          <h2 class="section-title">¿Por qué elegirnos?</h2>
        </div>
        <div class="services-why-grid">
          <div class="services-why-item">
            <div class="services-why-item__icon">🎯</div>
            <h3>Resultados Medibles</h3>
            <p>Cada proyecto tiene objetivos claros y KPIs definidos.</p>
          </div>
          <div class="services-why-item">
            <div class="services-why-item__icon">⚡</div>
            <h3>Rápido y Eficiente</h3>
            <p>Entregas puntuales sin comprometer la calidad.</p>
          </div>
          <div class="services-why-item">
            <div class="services-why-item__icon">🔒</div>
            <h3>Seguro y Escalable</h3>
            <p>Arquitectura moderna preparada para el crecimiento.</p>
          </div>
          <div class="services-why-item">
            <div class="services-why-item__icon">📈</div>
            <h3>Optimizado SEO</h3>
            <p>Todos nuestros proyectos están SEO-ready.</p>
          </div>
        </div>
      </div>
    </section>

    <div class="container--mid">
      <div class="cta-block">
        <h2>¿No encuentras lo que buscas?</h2>
        <p>Contáctanos para un servicio personalizado ajustado a tus necesidades.</p>
        <div class="btn-group btn-group--center">
          <RouterLink to="/contacto" class="btn btn--primary btn--lg">Solicitar Presupuesto</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useSeo } from '@/composables/useSeo.js'

useSeo({
  title: 'Servicios y Tarifas',
  description: 'Web corporativa desde €499, e-commerce desde €999, artículos SEO desde €150 y mantenimiento mensual desde €99. Presupuesto sin compromiso.',
  path: '/servicios',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Servicios de WebsCrafting',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Sitio Web Corporativo', description: 'Diseño web profesional desde €499' },
      { '@type': 'ListItem', position: 2, name: 'E-commerce Profesional', description: 'Tienda online completa desde €999' },
      { '@type': 'ListItem', position: 3, name: 'Artículos SEO', description: 'Contenido optimizado desde €150 por artículo' },
      { '@type': 'ListItem', position: 4, name: 'Mantenimiento y Soporte', description: 'Mantenimiento mensual desde €99/mes' },
    ]
  }
})

const selectedService = ref(null)

const services = ref([
  {
    id: 'web', icon: '🌐', title: 'Sitio Web Corporativo',
    shortDescription: 'Presencia profesional en línea que genera confianza',
    longDescription: 'Crea una presencia profesional en línea con un sitio web moderno, responsivo y optimizado para conversión.',
    price: '499', delivery: '2-4 semanas',
    includes: ['Diseño responsivo (móvil + escritorio)', 'Hasta 5 páginas', 'Formulario de contacto integrado', 'Blog integrado (opcional)', 'Integración con redes sociales', 'Certificado SSL', 'Optimización básica SEO', 'Hosting 1 año incluido'],
    process: [{ title: 'Descubrimiento', description: 'Entendemos tu negocio y objetivos' }, { title: 'Diseño', description: 'Creamos mockups y prototipos' }, { title: 'Desarrollo', description: 'Construimos tu sitio web' }, { title: 'Lanzamiento', description: 'Publicamos y optimizamos' }],
    addOns: [{ name: 'Páginas adicionales', price: '50' }, { name: 'Integración CRM', price: '200' }, { name: 'Sistema de reservas', price: '300' }]
  },
  {
    id: 'ecommerce', icon: '🛍️', title: 'E-commerce Profesional',
    shortDescription: 'Plataforma de ventas online de alto rendimiento',
    longDescription: 'Tienda online completa con carrito de compras, pasarela de pagos, gestión de inventario y análisis de ventas.',
    price: '999', delivery: '4-8 semanas',
    includes: ['Carrito de compras avanzado', 'Integración de múltiples pasarelas de pago', 'Gestión de productos y categorías', 'Sistema de descuentos y cupones', 'Gestión de órdenes', 'Panel de administración intuitivo', 'Certificado SSL premium', 'Optimización completa SEO'],
    process: [{ title: 'Análisis', description: 'Entendemos tu modelo de negocio' }, { title: 'Diseño UX', description: 'Optimizamos para conversión' }, { title: 'Desarrollo', description: 'Construimos la plataforma' }, { title: 'Testing', description: 'Pruebas exhaustivas de pagos' }],
    addOns: [{ name: 'Integración con proveedores', price: '400' }, { name: 'App móvil nativa', price: '1500' }, { name: 'Análisis avanzado', price: '250' }]
  },
  {
    id: 'seo', icon: '📝', title: 'Servicio de SEO y Artículos',
    shortDescription: 'Estrategia de contenido para dominar Google',
    longDescription: 'Artículos de blog optimizados para SEO que atraen tráfico orgánico de calidad.',
    price: '150', delivery: 'Por artículo',
    includes: ['1.500-2.000 palabras', 'Investigación de keywords', 'Optimización on-page completa', 'Meta descripción optimizada', 'Enlaces internos estratégicos', 'Imágenes optimizadas', '1 ronda de revisión', 'Formatos listos para publicar'],
    process: [{ title: 'Keyword Research', description: 'Identificamos oportunidades SEO' }, { title: 'Estructura', description: 'Diseñamos el contenido' }, { title: 'Redacción', description: 'Escribimos contenido de calidad' }, { title: 'Optimización', description: 'Optimizamos para SEO' }],
    addOns: [{ name: 'Análisis de backlinks', price: '200' }, { name: 'Auditoría SEO completa', price: '500' }, { name: 'Estrategia de contenido (12 meses)', price: '2000' }]
  },
  {
    id: 'maintenance', icon: '🛠️', title: 'Mantenimiento y Soporte',
    shortDescription: 'Mantenimiento continuo de tu sitio web',
    longDescription: 'Plan de mantenimiento mensual con actualizaciones de seguridad, backups, optimización y soporte técnico prioritario.',
    price: '99', delivery: 'Mensual',
    includes: ['Backups automáticos diarios', 'Actualizaciones de seguridad', 'Monitoreo 24/7', 'Optimización de rendimiento', 'Soporte técnico 24/7', 'Reportes mensuales', 'Corrección de errores', 'Actualizaciones de plugins'],
    process: [{ title: 'Monitoreo', description: 'Vigilancia continua del sitio' }, { title: 'Actualizaciones', description: 'Mantener todo actualizado' }, { title: 'Optimización', description: 'Mejorar rendimiento' }, { title: 'Reportes', description: 'Informes detallados mensuales' }],
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
