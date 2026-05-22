<template>
  <div class="portfolio-card">
    <div class="portfolio-card__image">
      <img :src="image" :alt="title" />
    </div>
    <div class="portfolio-card__info">
      <h3 class="portfolio-card__title">{{ title }}</h3>
      <svg
        class="portfolio-card__arrow"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
    <a
      v-if="link"
      :href="link"
      class="portfolio-card__link"
      target="_blank"
      rel="noopener"
      aria-label="Abrir proyecto"
    ></a>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, default: "" },
});
</script>
