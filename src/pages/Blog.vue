<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <h1>Blog de WebsCrafting</h1>
        <p>Artículos, guías y tendencias sobre desarrollo web, SEO y estrategia digital.</p>
      </div>
    </section>

    <div class="blog-filter">
      <div class="container">
        <div class="blog-filter__inner">
          <div class="blog-filter__search">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Buscar artículos..."
              class="input"
            />
          </div>
          <div class="blog-filter__cats">
            <button
              v-for="cat in categories"
              :key="cat"
              @click="selectedCategory = cat"
              :class="['cat-btn', selectedCategory === cat ? 'cat-btn--active' : '']"
            >
              {{ cat === 'all' ? 'Todos' : cat }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <section class="section section--subtle">
      <div class="container">
        <div v-if="filteredPosts.length > 0" class="blog-grid">
          <RouterLink
            v-for="post in filteredPosts"
            :key="post.id"
            :to="`/blog/${post.slug}`"
            class="post-card"
          >
            <div class="post-card__thumb">{{ post.icon }}</div>
            <div class="post-card__body">
              <div class="post-card__meta">
                <span class="badge badge--dark">{{ post.category }}</span>
                <span class="post-card__readtime">{{ post.readTime }}</span>
              </div>
              <h3 class="post-card__title">{{ post.title }}</h3>
              <p class="post-card__excerpt">{{ post.excerpt }}</p>
              <div class="post-card__footer">
                <span>{{ post.author }}</span>
                <span>{{ formatDate(post.date) }}</span>
              </div>
            </div>
          </RouterLink>
        </div>
        <p v-else class="blog-empty">No se encontraron artículos que coincidan con tu búsqueda.</p>
      </div>
    </section>

    <section class="section section--white">
      <div class="container--narrow">
        <div class="newsletter">
          <h2>Mantente actualizado</h2>
          <p>Recibe los últimos artículos, tips y tendencias en tu correo cada semana.</p>
          <form @submit.prevent="subscribeNewsletter" class="newsletter__form">
            <input v-model="newsletterEmail" type="email" placeholder="tu@email.com" required class="input" />
            <button type="submit" :disabled="newsletterLoading" class="btn btn--primary">
              {{ newsletterLoading ? 'Suscribiendo...' : 'Suscribirse' }}
            </button>
          </form>
          <p v-if="newsletterSuccess" class="newsletter__success">Gracias por suscribirte. Revisa tu email para confirmar.</p>
        </div>
      </div>
    </section>

    <div class="container--mid">
      <div class="cta-block">
        <h2>Aprende más</h2>
        <p>Explora nuestra colección completa de artículos y guías sobre desarrollo web.</p>
        <div class="btn-group btn-group--center">
          <button @click="scrollToTop" class="btn btn--primary btn--lg">Volver al blog</button>
          <RouterLink to="/contacto" class="btn btn--outline btn--lg">Contactar</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { posts as postsData } from '@/data/posts.js'
import { useSeo } from '@/composables/useSeo.js'

useSeo({
  title: 'Blog - Desarrollo Web, SEO y Marketing Digital',
  description: 'Artículos y guías sobre desarrollo web, SEO, marketing digital y diseño. Aprende a potenciar tu presencia online con consejos prácticos.',
  path: '/blog',
})

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
  setTimeout(() => { newsletterSuccess.value = false }, 5000)
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
