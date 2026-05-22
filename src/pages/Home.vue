<template>
  <div>
    <!-- Hero -->
    <section class="hero">
      <div class="container">
        <div class="hero__content">
          <h1 class="hero__title">
            Diseño y Desarrollo de páginas web a medida
          </h1>
          <p class="hero__subtitle">
            Sitios web modernos, rápidos y elegantes. Experiencias digitales
            minimalistas que priorizan claridad, rendimiento y resultados.
          </p>
          <div class="hero__actions">
            <RouterLink to="/contacto" class="btn btn--primary btn--lg"
              >Solicitar Presupuesto</RouterLink
            >
            <RouterLink to="/portfolio" class="btn btn--outline btn--lg"
              >Ver Portfolio</RouterLink
            >
          </div>
        </div>
        <div class="stats">
          <div class="stat">
            <div class="stat__value">150+</div>
            <p class="stat__label">Proyectos completados</p>
          </div>
          <div class="stat">
            <div class="stat__value">95%</div>
            <p class="stat__label">Clientes satisfechos</p>
          </div>
          <div class="stat">
            <div class="stat__value">8+</div>
            <p class="stat__label">Años de experiencia</p>
          </div>
        </div>
      </div>
      <a href="#intro" class="hero__scroll">
        <span>Desplaza</span>
        <span class="scroll-dot-wrap"><span></span></span>
      </a>
    </section>

    <!-- Portfolio Preview -->
    <section class="portfolio-preview">
      <div class="container">
        <div class="portfolio-preview__header">
          <h2 class="section-title">Proyectos recientes</h2>
        </div>
        <div class="portfolio-preview__grid">
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
        <div class="portfolio-preview__more">
          <RouterLink to="/portfolio" class="btn btn--outline">
            Ver todo el portfolio <span aria-hidden="true">→</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Why Us -->
    <section class="section section--white">
      <div class="container">
        <div class="section-header section-header--center">
          <h2 class="section-title">Por qué elegirnos</h2>
        </div>
        <div class="why-grid">
          <div class="why-card">
            <div class="why-card__icon">🎯</div>
            <h3 class="why-card__title">Enfoque Estratégico</h3>
            <p class="why-card__text">
              Cada proyecto comienza con una estrategia clara alineada con tus
              objetivos.
            </p>
          </div>
          <div class="why-card">
            <div class="why-card__icon">⚡</div>
            <h3 class="why-card__title">Rápido y Eficiente</h3>
            <p class="why-card__text">
              Desarrollo ágil sin sacrificar la calidad ni la atención al
              detalle.
            </p>
          </div>
          <div class="why-card">
            <div class="why-card__icon">🔒</div>
            <h3 class="why-card__title">Seguridad Total</h3>
            <p class="why-card__text">
              Protegemos tus datos y los de tus clientes con estándares de
              seguridad.
            </p>
          </div>
          <div class="why-card">
            <div class="why-card__icon">📈</div>
            <h3 class="why-card__title">Resultados Medibles</h3>
            <p class="why-card__text">
              Tracking y análisis constante para optimizar el rendimiento.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section class="section section--subtle">
      <div class="container">
        <div class="section-header section-header--center">
          <h2 class="section-title">Servicios y Tarifas</h2>
        </div>
        <div class="pricing-grid">
          <div class="pricing-card">
            <h3 class="pricing-card__name">Web Corporativa</h3>
            <div class="pricing-card__price">€499</div>
            <ul class="pricing-card__features">
              <li>✓ Hasta 5 páginas</li>
              <li>✓ Responsive design</li>
              <li>✓ Formulario de contacto</li>
              <li>✓ Hosting 1 año</li>
            </ul>
            <RouterLink to="/contacto" class="btn btn--primary btn--sm"
              >Solicitar</RouterLink
            >
          </div>
          <div class="pricing-card">
            <h3 class="pricing-card__name">E-commerce</h3>
            <div class="pricing-card__price">€999</div>
            <ul class="pricing-card__features">
              <li>✓ Carrito de compras</li>
              <li>✓ Pasarela de pagos</li>
              <li>✓ Gestión de productos</li>
              <li>✓ SSL seguro</li>
            </ul>
            <RouterLink to="/contacto" class="btn btn--primary btn--sm"
              >Solicitar</RouterLink
            >
          </div>
          <div class="pricing-card">
            <h3 class="pricing-card__name">Artículos SEO</h3>
            <div class="pricing-card__price">€150</div>
            <ul class="pricing-card__features">
              <li>✓ 1.500 palabras</li>
              <li>✓ Optimizado SEO</li>
              <li>✓ Imágenes incluidas</li>
              <li>✓ Revisión incluida</li>
            </ul>
            <RouterLink to="/contacto" class="btn btn--primary btn--sm"
              >Solicitar</RouterLink
            >
          </div>
          <div class="pricing-card">
            <h3 class="pricing-card__name">Mantenimiento</h3>
            <div class="pricing-card__price">€99/mes</div>
            <ul class="pricing-card__features">
              <li>✓ Backups automáticos</li>
              <li>✓ Actualizaciones</li>
              <li>✓ Soporte técnico</li>
              <li>✓ Optimización</li>
            </ul>
            <RouterLink to="/contacto" class="btn btn--primary btn--sm"
              >Solicitar</RouterLink
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section id="intro" class="section section--white">
      <div class="container">
        <div class="section-header section-header--center">
          <h2 class="section-title">Nuestro Proceso</h2>
        </div>
        <div class="process-steps">
          <div class="process-step">
            <div class="process-step__number">1</div>
            <h3 class="process-step__title">Consulta</h3>
            <p class="process-step__text">Entendemos tu visión y necesidades</p>
          </div>
          <div class="process-step">
            <div class="process-step__number">2</div>
            <h3 class="process-step__title">Diseño</h3>
            <p class="process-step__text">Creamos mockups y prototipos</p>
          </div>
          <div class="process-step">
            <div class="process-step__number">3</div>
            <h3 class="process-step__title">Desarrollo</h3>
            <p class="process-step__text">Construimos tu proyecto</p>
          </div>
          <div class="process-step">
            <div class="process-step__number">4</div>
            <h3 class="process-step__title">Lanzamiento</h3>
            <p class="process-step__text">Publicamos y optimizamos</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section section--subtle">
      <div class="container--narrow">
        <div class="section-header section-header--center">
          <h2 class="section-title">Preguntas Frecuentes</h2>
        </div>
        <div class="faq-list">
          <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
            <button class="faq-item__trigger" @click="faq.open = !faq.open">
              <span>{{ faq.question }}</span>
              <span class="faq-item__icon">{{ faq.open ? "−" : "+" }}</span>
            </button>
            <transition name="accordion">
              <div
                v-show="faq.open"
                class="faq-item__body"
                :ref="setAccordionHeight"
              >
                {{ faq.answer }}
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <div class="container--mid">
      <div class="cta-block">
        <h2>Comienza tu Proyecto Hoy</h2>
        <p>
          Contáctanos para una consulta gratuita y presupuesto personalizado
        </p>
        <div class="btn-group btn-group--center">
          <RouterLink to="/contacto" class="btn btn--primary btn--lg"
            >Contactar Ahora</RouterLink
          >
          <a href="https://wa.me/34600000000" class="btn btn--outline btn--lg"
            >WhatsApp</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref, onMounted, nextTick } from "vue";
import PortfolioCard from "@/components/PortfolioCard.vue";
import { useSeo } from "@/composables/useSeo.js";

useSeo({
  title: "Diseño y Desarrollo Web a Medida",
  description:
    "Agencia de diseño y desarrollo web en España. Sitios modernos, rápidos y elegantes desde €499. E-commerce, SEO y mantenimiento incluido.",
  path: "/",
  schema: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "WebsCrafting",
    url: "https://webscrafting.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://webscrafting.com/blog?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
});

const faqs = ref([
  {
    question: "¿Cuánto tiempo tarda un proyecto web?",
    answer:
      "Depende de la complejidad. Un sitio corporativo básico tarda 2-4 semanas. Los e-commerce y proyectos complejos pueden tomar 4-8 semanas.",
    open: false,
  },
  {
    question: "¿Ofrecen soporte post-lanzamiento?",
    answer:
      "Sí, ofrecemos paquetes de mantenimiento desde €99/mes que incluyen soporte técnico, actualizaciones y backups automáticos.",
    open: false,
  },
  {
    question: "¿Qué tecnologías utilizan?",
    answer:
      "Utilizamos tecnologías modernas como Vue.js, React, Node.js, y basamos nuestros proyectos en las mejores prácticas de desarrollo.",
    open: false,
  },
  {
    question: "¿Incluyem SEO en los proyectos?",
    answer:
      "Sí, optimizamos todos nuestros proyectos para buscadores. Ofrecemos también servicio de redacción de artículos SEO específicamente.",
    open: false,
  },
]);

const setAccordionHeight = (el) => {
  if (!el) return;
  el.style.setProperty("--accordion-content-height", el.scrollHeight + "px");
};

onMounted(async () => {
  await nextTick();
  document
    .querySelectorAll('[ref="setAccordionHeight"]')
    .forEach(setAccordionHeight);
});
</script>
