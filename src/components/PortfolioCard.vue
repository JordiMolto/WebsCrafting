<template>
  <div class="relative rounded-3xl overflow-hidden ring-1 ring-black/5 glass cursor-pointer">
    <div class="aspect-[16/10] zoom-on-hover">
      <img :src="image" :alt="title" class="h-full w-full object-cover" />
    </div>
    <div class="absolute inset-x-3 bottom-3 rounded-2xl px-4 py-3 glass">
      <div class="flex items-center justify-between">
        <h3 class="font-semibold text-base">{{ title }}</h3>
        <svg class="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"/>
        </svg>
      </div>
    </div>
    <a v-if="link" :href="link" class="absolute inset-0" aria-label="Abrir proyecto"></a>
  </div>
  </template>
  
  <script setup>
  defineProps({
    title: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, default: '' }
  })
  </script>
  
  <style scoped>
  </style>
*** End Patch```} />

