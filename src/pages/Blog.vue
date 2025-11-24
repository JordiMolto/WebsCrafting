<template>
  <div class="w-full">
    <!-- Hero minimal -->
    <section class="pt-28 pb-10">
      <div class="container-xl">
        <h1 class="text-5xl md:text-6xl font-semibold text-gray-900 mb-4">Blog de WebsCrafting</h1>
        <p class="text-lg text-gray-600 max-w-2xl">
          Artículos, guías y tendencias sobre desarrollo web, SEO y estrategia digital.
        </p>
      </div>
    </section>

    <!-- Search and Filter -->
    <section class="py-12 bg-white border-b border-gray-200">
      <div class="container-xl">
        <div class="flex gap-4 flex-col md:flex-row md:items-center">
          <input 
            v-model="searchQuery"
            type="text"
            placeholder="Buscar artículos..."
            class="flex-1 px-4 py-2 rounded-xl ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-black/40 bg-white"
          />
          <div class="flex gap-2 flex-wrap">
            <button 
              v-for="cat in categories"
              :key="cat"
              @click="selectedCategory = cat"
              :class="[
                'px-4 py-2 rounded-full font-semibold transition text-sm',
                selectedCategory === cat 
                  ? 'bg-black text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-black/5'
              ]"
            >
              {{ cat === 'all' ? 'Todos' : cat }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Grid -->
    <section class="py-20 bg-gray-50">
      <div class="container-xl">
        <div v-if="filteredPosts.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="post in filteredPosts"
            :key="post.id"
            class="bg-white rounded-2xl overflow-hidden ring-1 ring-black/5 hover:shadow-xl transition-all duration-300 cursor-pointer"
            @click="selectedPost = post"
          >
            <div class="h-40 bg-black/5 flex items-center justify-center text-3xl">
              {{ post.icon }}
            </div>
            <div class="p-6">
              <div class="flex justify-between items-start mb-2">
                <span class="text-xs bg-black text-white px-3 py-1 rounded-full font-medium">
                  {{ post.category }}
                </span>
                <span class="text-xs text-gray-500">{{ post.readTime }}</span>
              </div>
              <h3 class="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">{{ post.title }}</h3>
              <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ post.excerpt }}</p>
              <div class="flex justify-between items-center text-sm text-gray-600">
                <span>{{ post.author }}</span>
                <span>{{ formatDate(post.date) }}</span>
              </div>
            </div>
          </article>
        </div>
        <div v-else class="text-center py-12">
          <p class="text-gray-600 text-lg">No se encontraron artículos que coincidan con tu búsqueda.</p>
        </div>
      </div>
    </section>

    <!-- Post Detail Modal -->
    <div v-if="selectedPost" @click="selectedPost = null" class="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div @click.stop class="bg-white rounded-2xl ring-1 ring-black/5 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div class="sticky top-0 bg-white/80 backdrop-blur-md border-b border-black/10 p-6 flex justify-between items-start">
          <div>
            <span class="text-xs bg-black text-white px-3 py-1 rounded-full">{{ selectedPost.category }}</span>
            <h2 class="text-2xl font-semibold text-gray-900 mt-3">{{ selectedPost.title }}</h2>
          </div>
          <button @click="selectedPost = null" class="text-gray-500 hover:text-gray-700 text-2xl font-bold">×</button>
        </div>

        <div class="p-8 space-y-6">
          <div class="flex gap-4 text-sm text-gray-600">
            <span>{{ selectedPost.author }}</span>
            <span>{{ formatDate(selectedPost.date) }}</span>
            <span>{{ selectedPost.readTime }}</span>
          </div>

          <div class="prose prose-sm max-w-none">
            <p v-for="(para, index) in selectedPost.content" :key="index" class="text-gray-600 leading-relaxed mb-4">
              {{ para }}
            </p>
          </div>

          <div class="bg-black/5 border border-black/10 p-6 rounded-2xl">
            <h3 class="font-semibold text-gray-900 mb-2">Puntos clave</h3>
            <ul class="space-y-2">
              <li v-for="point in selectedPost.keyPoints" :key="point" class="text-gray-700 flex gap-2">
                <span class="text-gray-900 font-semibold">•</span>
                {{ point }}
              </li>
            </ul>
          </div>

          <div class="border-t border-gray-200 pt-6">
            <p class="text-gray-600 mb-4">{{ selectedPost.conclusion }}</p>
          </div>

          <div class="border-t border-gray-200 pt-6">
            <h3 class="font-semibold text-gray-900 mb-4">Tags</h3>
            <div class="flex gap-2 flex-wrap">
              <span v-for="tag in selectedPost.tags" :key="tag" class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                #{{ tag }}
              </span>
            </div>
          </div>

          <div class="bg-black/5 border border-black/10 p-6 rounded-2xl">
            <h3 class="font-semibold text-gray-900 mb-2">¿Necesitas ayuda?</h3>
            <p class="text-gray-700 mb-4">Si tienes dudas sobre este tema, contáctanos para una consulta gratuita.</p>
            <RouterLink to="/contacto" class="inline-block px-6 py-2 bg-black text-white rounded-full hover:bg-gray-900 font-semibold">
              Solicitar Asesoramiento
            </RouterLink>
          </div>

          <button @click="selectedPost = null" class="w-full px-4 py-2 rounded-full border border-black/10 text-gray-700 hover:bg-black/5 font-semibold">
            Cerrar
          </button>
        </div>
      </div>
    </div>

    <!-- Newsletter Section -->
    <section class="py-20 bg-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-semibold text-gray-900 mb-6">Mantente actualizado</h2>
        <p class="text-lg text-gray-600 mb-8">
          Recibe los últimos artículos, tips y tendencias en tu correo cada semana.
        </p>
        <form @submit.prevent="subscribeNewsletter" class="flex gap-3 max-w-md mx-auto">
          <input 
            v-model="newsletterEmail"
            type="email"
            placeholder="tu@email.com"
            required
            class="flex-1 px-4 py-3 rounded-xl ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-black/40"
          />
          <button 
            type="submit"
            :disabled="newsletterLoading"
            class="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-900 font-semibold disabled:opacity-50"
          >
            {{ newsletterLoading ? 'Suscribiendo...' : 'Suscribirse' }}
          </button>
        </form>
        <p v-if="newsletterSuccess" class="text-green-600 mt-4">Gracias por suscribirte. Revisa tu email para confirmar.</p>
      </div>
    </section>

    <!-- Related Articles CTA -->
    <section class="py-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-semibold mb-6">Aprende más</h2>
        <p class="text-lg mb-8 text-gray-600">Explora nuestra colección completa de artículos y guías sobre desarrollo web.</p>
        <div class="flex gap-4 justify-center flex-wrap">
          <button @click="scrollToTop" class="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-900 font-semibold">
            Volver al blog
          </button>
          <RouterLink to="/contacto" class="px-8 py-3 rounded-full border border-black/10 hover:bg-black/5 font-semibold">
            Contactar
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

const searchQuery = ref('')
const selectedCategory = ref('all')
const selectedPost = ref(null)
const newsletterEmail = ref('')
const newsletterLoading = ref(false)
const newsletterSuccess = ref(false)

const categories = ['all', 'Desarrollo', 'SEO', 'Marketing', 'Diseño']

const posts = ref([
  {
    id: 1,
    title: '10 Tendencias en Desarrollo Web 2025',
    category: 'Desarrollo',
    icon: '🚀',
    excerpt: 'Descubre las tecnologías y tendencias que dominarán el desarrollo web este año.',
    author: 'Carlos Martínez',
    date: new Date('2025-01-15'),
    readTime: '5 min',
    content: [
      'El panorama del desarrollo web sigue evolucionando rápidamente. En 2025, veremos una aceleración en la adopción de tecnologías como TypeScript, frameworks reactivos y mejores herramientas de desarrollo.',
      'Vue.js, React y Angular continúan siendo dominantes, pero vemos el ascenso de nuevos frameworks minimalistas que priorizan la velocidad y la eficiencia.',
      'La experiencia del usuario (UX) sigue siendo crucial. Las aplicaciones web modernas deben ser rápidas, seguras y accesibles a todos los usuarios.',
      'Los desarrolladores están optando cada vez más por arquitecturas serverless y edge computing para mejorar el rendimiento y reducir costos.'
    ],
    keyPoints: [
      'TypeScript se vuelve estándar en proyectos profesionales',
      'Frameworks minimalistas ganan popularidad',
      'Edge computing y serverless son tendencia',
      'Accesibilidad web es no-negociable',
      'Developer experience (DX) es prioritaria'
    ],
    conclusion: 'Si quieres mantenerse al día con la industria, es importante aprender estas tecnologías y entender cómo aplicarlas en tus proyectos.',
    tags: ['desarrollo', 'web', 'tendencias', 'tecnologia'],
    fullContent: 'Lorem ipsum...'
  },
  {
    id: 2,
    title: 'Guía Completa de SEO Técnico',
    category: 'SEO',
    icon: '📊',
    excerpt: 'Todo lo que necesitas saber sobre SEO técnico para mejorar tu posicionamiento en Google.',
    author: 'Ana Fernández',
    date: new Date('2025-01-12'),
    readTime: '8 min',
    content: [
      'El SEO técnico es la base de cualquier estrategia de posicionamiento exitosa. Sin una sólida arquitectura técnica, incluso el mejor contenido no alcanzará su potencial.',
      'La velocidad de carga es crucial. Google ha confirmado que la velocidad es un factor de ranking importante, y los usuarios esperan que los sitios carguen en menos de 3 segundos.',
      'La estructura de URLs, la accesibilidad del sitemap XML y la implementación correcta del robots.txt son fundamentales.',
      'Mobile-first indexing significa que Google primero indexa la versión móvil de tu sitio. Asegúrate de que tu experiencia móvil sea perfecta.'
    ],
    keyPoints: [
      'Velocidad de carga < 3 segundos',
      'Mobile-first indexing es prioritario',
      'XML sitemap bien estructurado',
      'URLs limpias y descriptivas',
      'HTTPS obligatorio'
    ],
    conclusion: 'Implementar una sólida estrategia de SEO técnico es el primer paso hacia el éxito en buscadores.',
    tags: ['seo', 'tecnico', 'google', 'ranking'],
    fullContent: 'Lorem ipsum...'
  },
  {
    id: 3,
    title: 'E-commerce: Estrategias para Aumentar Conversiones',
    category: 'Marketing',
    icon: '💰',
    excerpt: 'Técnicas probadas para mejorar la tasa de conversión en tu tienda online.',
    author: 'Miguel Santos',
    date: new Date('2025-01-08'),
    readTime: '7 min',
    content: [
      'La mayoría de las tiendas online pierden el 98% de sus visitantes sin comprar. Optimizar la experiencia de compra es clave para mejorar la conversión.',
      'El carrito abandonado es uno de los mayores problemas. Implementar recordatorios por email puede recuperar hasta el 20% de estas ventas perdidas.',
      'La confianza es fundamental. Mostrar testimonios, certificados de seguridad y garantías de satisfacción aumenta la probabilidad de compra.',
      'La página de producto es crítica. Debes incluir descripciones detalladas, imágenes de alta calidad y reseñas de clientes.'
    ],
    keyPoints: [
      'Optimizar página de producto',
      'Recordatorios de carrito abandonado',
      'Mostrar testimonios y reviews',
      'Checkout simplificado',
      'Múltiples métodos de pago'
    ],
    conclusion: 'Pequeñas mejoras en la experiencia de usuario pueden resultar en aumentos significativos de conversión.',
    tags: ['ecommerce', 'marketing', 'conversiones', 'ventas'],
    fullContent: 'Lorem ipsum...'
  },
  {
    id: 4,
    title: 'Diseño Responsivo: Guía para Desarrolladores',
    category: 'Diseño',
    icon: '📱',
    excerpt: 'Cómo crear sitios web que se adapten perfectamente a cualquier dispositivo.',
    author: 'Sofia López',
    date: new Date('2025-01-05'),
    readTime: '6 min',
    content: [
      'El diseño responsivo es obligatorio en 2025. Más del 70% del tráfico web viene de dispositivos móviles, por lo que optimizar para móvil es esencial.',
      'Mobile-first significa comenzar el diseño pensando en móvil y luego expandir a pantallas más grandes. Esto simplifica el desarrollo y mejora la experiencia.',
      'Las media queries CSS permiten adaptar el diseño a diferentes tamaños de pantalla. Usa breakpoints comunes: 480px, 768px, 1024px y 1440px.',
      'Prueba tu sitio en múltiples dispositivos y navegadores. Las diferencias entre dispositivos pueden ser significativas.'
    ],
    keyPoints: [
      'Mobile-first approach',
      'Uso correcto de media queries',
      'Fluidos layouts con flexbox y grid',
      'Imágenes adaptables',
      'Testing en múltiples dispositivos'
    ],
    conclusion: 'Un sitio web responsivo no es una opción, es una necesidad para el éxito online.',
    tags: ['diseño', 'responsive', 'mobile', 'css'],
    fullContent: 'Lorem ipsum...'
  },
  {
    id: 5,
    title: 'Marketing Digital: Estrategia Completa',
    category: 'Marketing',
    icon: '📈',
    excerpt: 'Crea una estrategia de marketing digital integral para tu negocio.',
    author: 'Carlos Martínez',
    date: new Date('2024-12-28'),
    readTime: '9 min',
    content: [
      'El marketing digital es multifacético. Combina SEO, SEM, email marketing, content marketing y social media en una estrategia coherente.',
      'Conoce a tu audiencia. Crear buyer personas detallados te ayudará a dirigirte correctamente y mejorar tu ROI.',
      'El content marketing es el rey. Crear contenido valioso atrae a clientes potenciales de forma orgánica.',
      'Mide todo. Usa analytics para entender qué funciona y qué no, luego optimiza continuamente.'
    ],
    keyPoints: [
      'Define buyer personas claros',
      'Implementa analytics en todas partes',
      'Content marketing es fundamental',
      'Email marketing aún genera ROI',
      'Social media como comunidad, no solo promoción'
    ],
    conclusion: 'Una estrategia de marketing digital bien ejecutada puede transformar tu negocio.',
    tags: ['marketing', 'digital', 'estrategia', 'negocio'],
    fullContent: 'Lorem ipsum...'
  },
  {
    id: 6,
    title: 'Seguridad Web: Protege tu Sitio',
    category: 'Desarrollo',
    icon: '🔒',
    excerpt: 'Medidas esenciales para proteger tu sitio web de vulnerabilidades.',
    author: 'Miguel Santos',
    date: new Date('2024-12-20'),
    readTime: '7 min',
    content: [
      'La seguridad web no es negociable. Los ataques a sitios web están aumentando constantemente.',
      'HTTPS es obligatorio. Todos los sitios web modernos deben usar HTTPS. Los navegadores marcan sitios HTTP como no seguros.',
      'Las contraseñas deben ser hasheadas y salteadas. Nunca almacenes contraseñas en texto plano.',
      'Valida siempre la entrada del usuario. Las inyecciones SQL y XSS son vulnerabilidades comunes que se pueden prevenir fácilmente.'
    ],
    keyPoints: [
      'HTTPS en todos los sitios',
      'Validación de entrada siempre',
      'Contraseñas con hash y salt',
      'Actualizaciones regulares',
      'Backups automáticos'
    ],
    conclusion: 'La inversión en seguridad web se paga sola evitando brechas de datos costosas.',
    tags: ['seguridad', 'desarrollo', 'https', 'proteccion'],
    fullContent: 'Lorem ipsum...'
  }
])

const filteredPosts = computed(() => {
  return posts.value.filter(post => {
    const categoryMatch = selectedCategory.value === 'all' || post.category === selectedCategory.value
    const searchMatch = searchQuery.value === '' || 
      post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase())
    return categoryMatch && searchMatch
  })
})

const formatDate = (date) => {
  return new Intl.DateTimeFormat('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }).format(date)
}

const subscribeNewsletter = async () => {
  newsletterLoading.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  newsletterSuccess.value = true
  newsletterLoading.value = false
  newsletterEmail.value = ''
  setTimeout(() => {
    newsletterSuccess.value = false
  }, 5000)
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  selectedPost.value = null
}
</script>
