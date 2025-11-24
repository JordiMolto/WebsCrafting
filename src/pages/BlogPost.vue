<template>
  <div class="w-full">
    <section class="pt-28 pb-10">
      <div class="container-xl">
        <div class="flex items-center gap-3 mb-4">
          <RouterLink to="/blog" class="text-sm text-gray-600 hover:text-gray-900">← Volver al blog</RouterLink>
          <span v-if="post" class="text-xs bg-black text-white px-3 py-1 rounded-full">{{ post.category }}</span>
        </div>
        <h1 v-if="post" class="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">{{ post.title }}</h1>
        <p v-if="post" class="text-sm text-gray-600 flex gap-4">
          <span>{{ post.author }}</span>
          <span>{{ formatDate(post.date) }}</span>
          <span>{{ post.readTime }}</span>
        </p>
        <div v-else class="text-gray-600">Artículo no encontrado.</div>
      </div>
    </section>

    <section v-if="post" class="pb-24">
      <div class="container-xl">
        <div class="prose prose-sm max-w-none">
          <p v-for="(para, index) in post.content" :key="index" class="text-gray-700 leading-relaxed mb-5">
            {{ para }}
          </p>
        </div>

        <div class="bg-black/5 border border-black/10 p-6 rounded-2xl mt-8">
          <h3 class="font-semibold text-gray-900 mb-2">Puntos clave</h3>
          <ul class="space-y-2">
            <li v-for="point in post.keyPoints" :key="point" class="text-gray-700 flex gap-2">
              <span class="text-gray-900 font-semibold">•</span>
              {{ point }}
            </li>
          </ul>
        </div>

        <div class="border-t border-gray-200 pt-6 mt-8">
          <p class="text-gray-700 mb-4">{{ post.conclusion }}</p>
        </div>

        <div class="border-t border-gray-200 pt-6 mt-8">
          <h3 class="font-semibold text-gray-900 mb-4">Tags</h3>
          <div class="flex gap-2 flex-wrap">
            <span v-for="tag in post.tags" :key="tag" class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              #{{ tag }}
            </span>
          </div>
        </div>

        <div class="bg-black/5 border border-black/10 p-6 rounded-2xl mt-10">
          <h3 class="font-semibold text-gray-900 mb-2">¿Necesitas ayuda?</h3>
          <p class="text-gray-700 mb-4">Si tienes dudas sobre este tema, contáctanos para una consulta gratuita.</p>
          <RouterLink to="/contacto" class="inline-block px-6 py-2 bg-black text-white rounded-full hover:bg-gray-900 font-semibold">
            Solicitar Asesoramiento
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
  </template>
  
  <script setup>
  import { useRoute, RouterLink } from 'vue-router'
  import { posts } from '@/data/posts.js'
  
  const route = useRoute()
  const slug = route.params.slug
  const post = posts.find(p => p.slug === slug)
  
  const formatDate = (date) => {
    return new Intl.DateTimeFormat('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }).format(date)
  }
  </script>

