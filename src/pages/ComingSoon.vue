<template>
  <div class="coming-soon">
    <div class="coming-soon__bg" aria-hidden="true">
      <div class="coming-soon__grid"></div>
      <div class="coming-soon__glow coming-soon__glow--1"></div>
      <div class="coming-soon__glow coming-soon__glow--2"></div>
    </div>

    <div class="coming-soon__content">
      <img
        src="/logo_webscrafting_vertical.png"
        alt="WebsCrafting"
        class="coming-soon__logo"
      />

      <div class="coming-soon__badge">Próximamente</div>

      <h1 class="coming-soon__headline">
        Estamos construyendo<br />algo especial
      </h1>

      <p class="coming-soon__sub">
        Nuestra nueva web está en camino. Mientras tanto, podemos ayudarte.
      </p>

      <a href="mailto:info@webscrafting.com" class="coming-soon__cta">
        info@webscrafting.com
      </a>
    </div>
  </div>
</template>

<script setup>
import { useHead } from "@unhead/vue";

useHead({
  title: "Próximamente — WebsCrafting",
  meta: [
    {
      name: "description",
      content:
        "Estamos construyendo algo especial. WebsCrafting, tu agencia web.",
    },
    { name: "robots", content: "noindex, nofollow" },
  ],
});
</script>

<style scoped>
.coming-soon {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #05070d;
  overflow: hidden;
}

/* ── Fondo decorativo ── */
.coming-soon__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.coming-soon__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(99, 102, 241, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 102, 241, 0.06) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(
    ellipse 80% 80% at 50% 50%,
    black 30%,
    transparent 100%
  );
}

.coming-soon__glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.25;
}

.coming-soon__glow--1 {
  width: 500px;
  height: 500px;
  background: #6366f1;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  animation: drift 8s ease-in-out infinite alternate;
}

.coming-soon__glow--2 {
  width: 360px;
  height: 360px;
  background: #a855f7;
  bottom: -80px;
  right: 10%;
  animation: drift 10s ease-in-out infinite alternate-reverse;
}

@keyframes drift {
  from {
    transform: translateX(-50%) translateY(0);
  }
  to {
    transform: translateX(-50%) translateY(30px);
  }
}

.coming-soon__glow--2 {
  animation: drift2 10s ease-in-out infinite alternate-reverse;
}

@keyframes drift2 {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-24px);
  }
}

/* ── Contenido ── */
.coming-soon__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  padding: 2rem;
  max-width: 560px;
}

.coming-soon__logo {
  width: 120px;
  opacity: 0.95;
  filter: brightness(1.1);
}

.coming-soon__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0.9rem;
  border-radius: 9999px;
  border: 1px solid rgba(99, 102, 241, 0.4);
  background: rgba(99, 102, 241, 0.1);
  color: #a5b4fc;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.coming-soon__badge::before {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #818cf8;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(0.85);
  }
}

.coming-soon__headline {
  margin: 0;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  line-height: 1.15;
  color: #f1f5f9;
  letter-spacing: -0.02em;
}

.coming-soon__sub {
  margin: 0;
  font-size: 1.05rem;
  color: #94a3b8;
  line-height: 1.6;
  max-width: 380px;
}

.coming-soon__cta {
  margin-top: 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.75rem 1.75rem;
  border-radius: 0.5rem;
  background: rgba(99, 102, 241, 0.15);
  border: 1px solid rgba(99, 102, 241, 0.35);
  color: #a5b4fc;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  transition:
    background 0.2s,
    border-color 0.2s,
    color 0.2s;
}

.coming-soon__cta:hover {
  background: rgba(99, 102, 241, 0.28);
  border-color: rgba(99, 102, 241, 0.6);
  color: #c7d2fe;
}
</style>
