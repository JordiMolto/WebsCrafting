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
          <RouterLink 
            v-for="post in filteredPosts"
            :key="post.id"
            :to="`/blog/${post.slug}`"
            class="bg-white rounded-2xl overflow-hidden ring-1 ring-black/5 hover:shadow-xl transition-all duration-300 cursor-pointer block"
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
          </RouterLink>
        </div>
        <div v-else class="text-center py-12">
          <p class="text-gray-600 text-lg">No se encontraron artículos que coincidan con tu búsqueda.</p>
        </div>
      </div>
    </section>

    <!-- Modal eliminado en favor de rutas por artículo -->

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
import { posts as postsData } from '@/data/posts.js'

const searchQuery = ref('')
const selectedCategory = ref('all')
const newsletterEmail = ref('')
const newsletterLoading = ref(false)
const newsletterSuccess = ref(false)

const categories = ['all', 'Desarrollo', 'SEO', 'Marketing', 'Diseño']

const posts = ref(postsData)

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
