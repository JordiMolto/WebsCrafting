<template>
  <div class="app">
    <nav class="nav">
      <div class="container">
        <div class="nav__bar">
          <RouterLink to="/" class="nav__logo">
            <img src="/logo_webscrafting_vertical.png" alt="WebsCrafting" />
          </RouterLink>

          <div class="nav__menu">
            <RouterLink to="/" class="nav__link">Inicio</RouterLink>
            <RouterLink to="/sobre-nosotros" class="nav__link">Sobre</RouterLink>
            <RouterLink to="/servicios" class="nav__link">Servicios</RouterLink>
            <RouterLink to="/portfolio" class="nav__link">Portfolio</RouterLink>
            <RouterLink to="/blog" class="nav__link">Blog</RouterLink>
            <RouterLink to="/contacto" class="nav__link">Contacto</RouterLink>
          </div>

          <RouterLink to="/contacto" class="btn btn--primary btn--sm nav__cta">
            Presupuesto
          </RouterLink>
        </div>
      </div>
    </nav>

    <main>
      <RouterView />
    </main>

    <footer class="site-footer">
      <div class="container site-footer__inner">
        <div class="site-footer__grid">
          <div>
            <p class="site-footer__title">WebsCrafting</p>
            <p class="site-footer__tagline">Transformamos tu visión en realidad digital.</p>
          </div>
          <div>
            <p class="site-footer__title">Servicios</p>
            <ul class="site-footer__list">
              <li><RouterLink to="/servicios">Desarrollo Web</RouterLink></li>
              <li><RouterLink to="/servicios">E-commerce</RouterLink></li>
              <li><RouterLink to="/servicios">SEO</RouterLink></li>
            </ul>
          </div>
          <div>
            <p class="site-footer__title">Empresa</p>
            <ul class="site-footer__list">
              <li><RouterLink to="/sobre-nosotros">Sobre Nosotros</RouterLink></li>
              <li><RouterLink to="/portfolio">Portfolio</RouterLink></li>
              <li><RouterLink to="/blog">Blog</RouterLink></li>
            </ul>
          </div>
          <div>
            <p class="site-footer__title">Contacto</p>
            <ul class="site-footer__list">
              <li><a href="mailto:hola@webscrafting.com">hola@webscrafting.com</a></li>
              <li><a href="tel:+34600000000">+34 600 000 000</a></li>
              <li><a href="https://wa.me/34600000000">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div class="site-footer__copyright">
          <p>&copy; 2025 WebsCrafting. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useHead } from '@unhead/vue'

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'WebsCrafting',
      url: 'https://webscrafting.com',
      logo: 'https://webscrafting.com/logo_webscrafting.png',
      email: 'hola@webscrafting.com',
      telephone: '+34600000000',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+34600000000',
        contactType: 'customer service',
        availableLanguage: 'Spanish'
      }
    })
  }]
})
</script>
