<template>
  <div class="w-full">
    <!-- Hero minimal -->
    <section class="pt-28 pb-10">
      <div class="container-xl">
        <h1 class="text-5xl md:text-6xl font-semibold text-gray-900 mb-4">Sobre WebsCrafting</h1>
        <p class="text-lg text-gray-600 max-w-2xl">
          Somos una agencia de desarrollo web apasionada por transformar visiones en realidades digitales excepcionales.
        </p>
      </div>
    </section>

    <!-- Story Section -->
    <section class="py-24 bg-white">
      <div class="container-xl">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-semibold text-gray-900 mb-6">Nuestra Historia</h2>
            <p class="text-gray-600 mb-4">
              WebsCrafting nació en 2017 con una simple misión: demostrar que el desarrollo web de calidad debe ser accesible para todos, sin importar el tamaño de su negocio.
            </p>
            <p class="text-gray-600 mb-4">
              Comenzamos como un pequeño equipo de dos desarrolladores trabajando desde una cafetería. Hoy, somos un equipo de 15 profesionales especializados en crear soluciones digitales que generan resultados.
            </p>
            <p class="text-gray-600">
              Cada proyecto que realizamos es una oportunidad para crecer, aprender y demostrar nuestro compromiso con la excelencia.
            </p>
          </div>
          <div class="rounded-2xl h-80 flex items-center justify-center glass">
            <div class="text-center px-6">
              <div class="text-6xl font-semibold text-gray-900 mb-2">8+</div>
              <p class="text-gray-600">Años de historia</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-24 bg-gray-50">
      <div class="container-xl">
        <div class="grid md:grid-cols-2 gap-12">
          <div class="bg-white p-8 rounded-2xl ring-1 ring-black/5">
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">Nuestra Misión</h3>
            <p class="text-gray-600">
              Crear soluciones web innovadoras y accesibles que impulsen el crecimiento digital de nuestros clientes, permitiéndoles alcanzar sus objetivos comerciales y conectar con su audiencia de manera efectiva.
            </p>
          </div>
          <div class="bg-white p-8 rounded-2xl ring-1 ring-black/5">
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">Nuestra Visión</h3>
            <p class="text-gray-600">
              Ser la agencia de referencia en desarrollo web en habla hispana, reconocida por nuestra calidad, innovación y compromiso con el éxito de nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-24 bg-white">
      <div class="container-xl">
        <h2 class="text-4xl font-semibold text-center text-gray-900 mb-12">Nuestros Valores</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="p-6 rounded-2xl glass">
            <h3 class="font-semibold text-lg text-gray-900 mb-3">Calidad</h3>
            <p class="text-gray-600 text-sm">Nunca comprometemos la calidad. Cada línea de código es revisada y optimizada.</p>
          </div>
          <div class="p-6 rounded-2xl glass">
            <h3 class="font-semibold text-lg text-gray-900 mb-3">Innovación</h3>
            <p class="text-gray-600 text-sm">Siempre al día con tecnologías y tendencias para ofrecer lo mejor.</p>
          </div>
          <div class="p-6 rounded-2xl glass">
            <h3 class="font-semibold text-lg text-gray-900 mb-3">Transparencia</h3>
            <p class="text-gray-600 text-sm">Comunicación clara y honesta durante todo el proyecto.</p>
          </div>
          <div class="p-6 rounded-2xl glass">
            <h3 class="font-semibold text-lg text-gray-900 mb-3">Compromiso</h3>
            <p class="text-gray-600 text-sm">Trabajamos como una extensión de tu equipo, enfocados en resultados.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-24 bg-gray-50">
      <div class="container-xl">
        <h2 class="text-4xl font-semibold text-center text-gray-900 mb-12">Nuestro Equipo</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="member in team" :key="member.name" class="rounded-2xl overflow-hidden ring-1 ring-black/5 bg-white">
            <div class="h-44 bg-black/5 flex items-center justify-center">
              <div class="text-5xl">{{ member.avatar }}</div>
            </div>
            <div class="p-6">
              <h3 class="font-semibold text-lg text-gray-900">{{ member.name }}</h3>
              <p class="text-gray-700 font-medium text-sm mb-2">{{ member.role }}</p>
              <p class="text-gray-600 text-sm">{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Partner Section -->
    <section class="py-24 bg-white">
      <div class="container-xl">
        <h2 class="text-4xl font-semibold text-center text-gray-900 mb-12">Por qué asociarse con nosotros</h2>
        <div class="space-y-6">
          <div class="flex gap-6 items-start">
            <div class="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
              ✓
            </div>
            <div>
              <h3 class="font-semibold text-lg text-gray-900 mb-2">Experiencia Probada</h3>
              <p class="text-gray-600">
                8+ años trabajando con empresas de todos los tamaños, desde startups hasta corporativos.
              </p>
            </div>
          </div>
          <div class="flex gap-6 items-start">
            <div class="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
              ✓
            </div>
            <div>
              <h3 class="font-semibold text-lg text-gray-900 mb-2">Atención Personalizada</h3>
              <p class="text-gray-600">
                No somos una agencia genérica. Cada cliente recibe un plan estratégico personalizado.
              </p>
            </div>
          </div>
          <div class="flex gap-6 items-start">
            <div class="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
              ✓
            </div>
            <div>
              <h3 class="font-semibold text-lg text-gray-900 mb-2">Tecnología de Punta</h3>
              <p class="text-gray-600">
                Utilizamos las mejores herramientas y frameworks del mercado para garantizar rendimiento.
              </p>
            </div>
          </div>
          <div class="flex gap-6 items-start">
            <div class="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
              ✓
            </div>
            <div>
              <h3 class="font-semibold text-lg text-gray-900 mb-2">Soporte Continuo</h3>
              <p class="text-gray-600">
                No desaparecemos después del lanzamiento. Ofrecemos soporte y mantenimiento permanente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-24 bg-gray-50">
      <div class="container-xl">
        <h2 class="text-4xl font-semibold text-center text-gray-900 mb-12">Lo que dicen nuestros clientes</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-2xl ring-1 ring-black/5">
            <div class="flex gap-1 mb-4">
              <span class="text-yellow-400">★</span>
              <span class="text-yellow-400">★</span>
              <span class="text-yellow-400">★</span>
              <span class="text-yellow-400">★</span>
              <span class="text-yellow-400">★</span>
            </div>
            <p class="text-gray-600 mb-4">
              "WebsCrafting transformó nuestra presencia digital. El proyecto se completó a tiempo y superó nuestras expectativas. Altamente recomendado."
            </p>
            <p class="font-bold text-gray-900">María García</p>
            <p class="text-gray-600 text-sm">CEO, García Boutique</p>
          </div>

          <div class="bg-white p-8 rounded-2xl ring-1 ring-black/5">
            <div class="flex gap-1 mb-4">
              <span class="text-yellow-400">★</span>
              <span class="text-yellow-400">★</span>
              <span class="text-yellow-400">★</span>
              <span class="text-yellow-400">★</span>
              <span class="text-yellow-400">★</span>
            </div>
            <p class="text-gray-600 mb-4">
              "El equipo fue increíblemente profesional y receptivo a nuestras necesidades. Nuestras ventas online crecieron un 300% después del rediseño."
            </p>
            <p class="font-bold text-gray-900">Juan López</p>
            <p class="text-gray-600 text-sm">Founder, Tech Solutions</p>
          </div>

          <div class="bg-white p-8 rounded-2xl ring-1 ring-black/5">
            <div class="flex gap-1 mb-4">
              <span class="text-yellow-400">★</span>
              <span class="text-yellow-400">★</span>
              <span class="text-yellow-400">★</span>
              <span class="text-yellow-400">★</span>
              <span class="text-yellow-400">★</span>
            </div>
            <p class="text-gray-600 mb-4">
              "Excelente comunicación y seguimiento del proyecto. El soporte post-lanzamiento ha sido impeccable. Seguiremos trabajando con ellos."
            </p>
            <p class="font-bold text-gray-900">Carmen Ruiz</p>
            <p class="text-gray-600 text-sm">Directora, Estudio Legal Ruiz</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-semibold mb-6">Conoce más sobre nuestro trabajo</h2>
        <p class="text-lg mb-8 text-gray-600">Explora nuestro portfolio y descubre qué podemos hacer por tu negocio</p>
        <div class="flex gap-4 justify-center flex-wrap">
          <RouterLink to="/portfolio" class="px-8 py-3 rounded-full border border-black/10 hover:bg-black/5 font-semibold text-gray-900">
            Ver Portfolio
          </RouterLink>
          <RouterLink to="/contacto" class="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-900 font-semibold">
            Contactar
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const team = [
  { name: 'Carlos Martínez', role: 'CEO & Founder', avatar: '👨‍💼', bio: 'Visionario con 15+ años en tech.' },
  { name: 'Ana Fernández', role: 'Lead Designer', avatar: '👩‍🎨', bio: 'Experta en UX/UI y diseño digital.' },
  { name: 'Miguel Santos', role: 'Tech Lead', avatar: '👨‍💻', bio: 'Especialista en arquitectura web.' },
  { name: 'Sofia López', role: 'Project Manager', avatar: '👩‍💼', bio: 'Garantiza entregas on-time.' }
]
</script>
