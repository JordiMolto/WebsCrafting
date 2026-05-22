<template>
  <div>
    <section class="post-header">
      <div class="container">
        <div class="post-breadcrumb">
          <RouterLink to="/blog">← Volver al blog</RouterLink>
          <span v-if="post" class="badge badge--dark">{{ post.category }}</span>
        </div>
        <h1 v-if="post" class="post-header__title">{{ post.title }}</h1>
        <div v-if="post" class="post-header__meta">
          <span>{{ post.author }}</span>
          <span>{{ formatDate(post.date) }}</span>
          <span>{{ post.readTime }}</span>
        </div>
        <p v-else>Artículo no encontrado.</p>
      </div>
    </section>

    <section v-if="post" class="post-body">
      <div class="container">
        <div class="post-body__content">
          <p v-for="(para, index) in post.content" :key="index">{{ para }}</p>
        </div>

        <div class="post-keypoints">
          <h3>Puntos clave</h3>
          <ul>
            <li v-for="point in post.keyPoints" :key="point">
              <span>•</span>{{ point }}
            </li>
          </ul>
        </div>

        <div class="post-conclusion">
          <p>{{ post.conclusion }}</p>
        </div>

        <div class="post-tags">
          <h3>Tags</h3>
          <div class="post-tags__list">
            <span v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
          </div>
        </div>

        <div class="post-cta">
          <h3>¿Necesitas ayuda?</h3>
          <p>
            Si tienes dudas sobre este tema, contáctanos para una consulta
            gratuita.
          </p>
          <RouterLink to="/contacto" class="btn btn--primary"
            >Solicitar Asesoramiento</RouterLink
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRoute, RouterLink } from "vue-router";
import { posts } from "@/data/posts.js";
import { useSeo } from "@/composables/useSeo.js";

const route = useRoute();
const slug = route.params.slug;
const post = posts.find((p) => p.slug === slug);

useSeo(
  post
    ? {
        title: post.title,
        description: post.excerpt,
        path: `/blog/${post.slug}`,
        type: "article",
        schema: {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          author: { "@type": "Person", name: post.author },
          datePublished: post.date.toISOString(),
          publisher: {
            "@type": "Organization",
            name: "WebsCrafting",
            logo: {
              "@type": "ImageObject",
              url: "https://webscrafting.com/logo_webscrafting.png",
            },
          },
          keywords: post.tags.join(", "),
          url: `https://webscrafting.com/blog/${post.slug}`,
        },
      }
    : {
        title: "Artículo no encontrado",
        description: "",
        path: `/blog/${slug}`,
      },
);

const formatDate = (date) => {
  return new Intl.DateTimeFormat("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};
</script>
