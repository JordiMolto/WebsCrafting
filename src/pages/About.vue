<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <h1>Sobre WebsCrafting</h1>
        <p>Somos una agencia de desarrollo web apasionada por transformar visiones en realidades digitales excepcionales.</p>
      </div>
    </section>

    <section class="section section--white">
      <div class="container">
        <div class="story-grid">
          <div class="story-text">
            <h2 class="section-title">Nuestra Historia</h2>
            <p>WebsCrafting nació en 2017 con una simple misión: demostrar que el desarrollo web de calidad debe ser accesible para todos, sin importar el tamaño de su negocio.</p>
            <p>Comenzamos como un pequeño equipo de dos desarrolladores trabajando desde una cafetería. Hoy, somos un equipo de 15 profesionales especializados en crear soluciones digitales que generan resultados.</p>
            <p>Cada proyecto que realizamos es una oportunidad para crecer, aprender y demostrar nuestro compromiso con la excelencia.</p>
          </div>
          <div class="story-stat-box">
            <div class="story-stat-box__inner">
              <div class="story-stat-box__number">8+</div>
              <p>Años de historia</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--subtle">
      <div class="container">
        <div class="mv-grid">
          <div class="mv-card">
            <h3>Nuestra Misión</h3>
            <p>Crear soluciones web innovadoras y accesibles que impulsen el crecimiento digital de nuestros clientes, permitiéndoles alcanzar sus objetivos comerciales y conectar con su audiencia de manera efectiva.</p>
          </div>
          <div class="mv-card">
            <h3>Nuestra Visión</h3>
            <p>Ser la agencia de referencia en desarrollo web en habla hispana, reconocida por nuestra calidad, innovación y compromiso con el éxito de nuestros clientes.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--white">
      <div class="container">
        <div class="section-header section-header--center">
          <h2 class="section-title">Nuestros Valores</h2>
        </div>
        <div class="values-grid">
          <div class="value-card">
            <h3>Calidad</h3>
            <p>Nunca comprometemos la calidad. Cada línea de código es revisada y optimizada.</p>
          </div>
          <div class="value-card">
            <h3>Innovación</h3>
            <p>Siempre al día con tecnologías y tendencias para ofrecer lo mejor.</p>
          </div>
          <div class="value-card">
            <h3>Transparencia</h3>
            <p>Comunicación clara y honesta durante todo el proyecto.</p>
          </div>
          <div class="value-card">
            <h3>Compromiso</h3>
            <p>Trabajamos como una extensión de tu equipo, enfocados en resultados.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--subtle">
      <div class="container">
        <div class="section-header section-header--center">
          <h2 class="section-title">Nuestro Equipo</h2>
        </div>
        <div class="team-grid">
          <div v-for="member in team" :key="member.name" class="team-card">
            <div class="team-card__avatar">{{ member.avatar }}</div>
            <div class="team-card__body">
              <p class="team-card__name">{{ member.name }}</p>
              <p class="team-card__role">{{ member.role }}</p>
              <p class="team-card__bio">{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--white">
      <div class="container">
        <div class="section-header section-header--center">
          <h2 class="section-title">Por qué asociarse con nosotros</h2>
        </div>
        <div class="partner-list">
          <div class="partner-item">
            <div class="partner-item__check">✓</div>
            <div>
              <h3>Experiencia Probada</h3>
              <p>8+ años trabajando con empresas de todos los tamaños, desde startups hasta corporativos.</p>
            </div>
          </div>
          <div class="partner-item">
            <div class="partner-item__check">✓</div>
            <div>
              <h3>Atención Personalizada</h3>
              <p>No somos una agencia genérica. Cada cliente recibe un plan estratégico personalizado.</p>
            </div>
          </div>
          <div class="partner-item">
            <div class="partner-item__check">✓</div>
            <div>
              <h3>Tecnología de Punta</h3>
              <p>Utilizamos las mejores herramientas y frameworks del mercado para garantizar rendimiento.</p>
            </div>
          </div>
          <div class="partner-item">
            <div class="partner-item__check">✓</div>
            <div>
              <h3>Soporte Continuo</h3>
              <p>No desaparecemos después del lanzamiento. Ofrecemos soporte y mantenimiento permanente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--subtle">
      <div class="container">
        <div class="section-header section-header--center">
          <h2 class="section-title">Lo que dicen nuestros clientes</h2>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="stars">★★★★★</div>
            <blockquote>«WebsCrafting transformó nuestra presencia digital. El proyecto se completó a tiempo y superó nuestras expectativas. Altamente recomendado.»</blockquote>
            <p class="testimonial-card__author">María García</p>
            <p class="testimonial-card__role">CEO, García Boutique</p>
          </div>
          <div class="testimonial-card">
            <div class="stars">★★★★★</div>
            <blockquote>«El equipo fue increíblemente profesional y receptivo a nuestras necesidades. Nuestras ventas online crecieron un 300% después del rediseño.»</blockquote>
            <p class="testimonial-card__author">Juan López</p>
            <p class="testimonial-card__role">Founder, Tech Solutions</p>
          </div>
          <div class="testimonial-card">
            <div class="stars">★★★★★</div>
            <blockquote>«Excelente comunicación y seguimiento del proyecto. El soporte post-lanzamiento ha sido impecable. Seguiremos trabajando con ellos.»</blockquote>
            <p class="testimonial-card__author">Carmen Ruiz</p>
            <p class="testimonial-card__role">Directora, Estudio Legal Ruiz</p>
          </div>
        </div>
      </div>
    </section>

    <div class="container--mid">
      <div class="cta-block">
        <h2>Conoce más sobre nuestro trabajo</h2>
        <p>Explora nuestro portfolio y descubre qué podemos hacer por tu negocio</p>
        <div class="btn-group btn-group--center">
          <RouterLink to="/portfolio" class="btn btn--outline btn--lg">Ver Portfolio</RouterLink>
          <RouterLink to="/contacto" class="btn btn--primary btn--lg">Contactar</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useSeo } from '@/composables/useSeo.js'

useSeo({
  title: 'Sobre Nosotros',
  description: 'Conoce el equipo de WebsCrafting. Más de 8 años creando experiencias digitales. 150+ proyectos completados, 95% clientes satisfechos.',
  path: '/sobre-nosotros',
})

const team = [
  { name: 'Carlos Martínez', role: 'CEO & Founder', avatar: '👨‍💼', bio: 'Visionario con 15+ años en tech.' },
  { name: 'Ana Fernández', role: 'Lead Designer', avatar: '👩‍🎨', bio: 'Experta en UX/UI y diseño digital.' },
  { name: 'Miguel Santos', role: 'Tech Lead', avatar: '👨‍💻', bio: 'Especialista en arquitectura web.' },
  { name: 'Sofia López', role: 'Project Manager', avatar: '👩‍💼', bio: 'Garantiza entregas on-time.' }
]
</script>
