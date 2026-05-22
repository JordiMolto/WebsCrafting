<template>
  <form @submit.prevent="submit" class="newsletter-form">
    <div class="newsletter-form__row">
      <input
        v-model="email"
        type="email"
        required
        class="input"
        placeholder="tu@email.com"
        :disabled="submitting || success"
        aria-label="Tu email"
      />
      <button
        type="submit"
        :disabled="submitting || success"
        class="btn btn--primary"
      >
        {{ submitting ? "Enviando…" : success ? "Suscrito" : "Suscribirme" }}
      </button>
    </div>

    <p
      v-if="success"
      class="newsletter-form__feedback newsletter-form__feedback--ok"
    >
      Hecho. Revisa tu bandeja de entrada.
    </p>
    <p
      v-if="error"
      class="newsletter-form__feedback newsletter-form__feedback--err"
    >
      {{ error }}
    </p>
  </form>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const submitting = ref(false);
const success = ref(false);
const error = ref("");

const submit = async () => {
  submitting.value = true;
  error.value = "";

  try {
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.value }),
    });

    const payload = await res.json();

    if (!res.ok) throw new Error(payload.error || "Error al suscribirte.");

    success.value = true;
    email.value = "";
  } catch (err) {
    error.value = err.message || "Error de conexión. Inténtalo de nuevo.";
  } finally {
    submitting.value = false;
  }
};
</script>
