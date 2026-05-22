<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <h1>Contacta con nosotros</h1>
        <p>
          Estamos aquí para ayudarte. Completa el formulario o ponte en contacto
          por cualquiera de nuestros canales.
        </p>
      </div>
    </section>

    <section class="section section--white">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <div class="contact-info__item">
              <h3>Email</h3>
              <a href="mailto:info@webscrafting.com">info@webscrafting.com</a>
              <p>Responderemos en 24 horas</p>
            </div>
            <div class="contact-info__item">
              <h3>Teléfono</h3>
              <a href="tel:+34600000000">+34 600 000 000</a>
              <p>Lun-Vie 9:00-18:00</p>
            </div>
            <div class="contact-info__item">
              <h3>WhatsApp</h3>
              <a href="https://wa.me/34600000000">Chatear ahora</a>
              <p>Atención inmediata</p>
            </div>
            <div class="contact-info__item">
              <h3>Ubicación</h3>
              <p>Madrid, España<br />Oficina remota disponible</p>
            </div>
            <div class="contact-info__item">
              <h3>Síguenos</h3>
              <div class="social-links">
                <a href="#" class="social-link" aria-label="Facebook">f</a>
                <a href="#" class="social-link" aria-label="LinkedIn">in</a>
                <a href="#" class="social-link" aria-label="Twitter">tw</a>
              </div>
            </div>
          </div>

          <form @submit.prevent="submitForm" class="contact-form">
            <div class="contact-form__row">
              <div class="field">
                <label for="name">Nombre *</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="input"
                  placeholder="Tu nombre"
                />
              </div>
              <div class="field">
                <label for="email">Email *</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="input"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div class="field">
              <label for="phone">Teléfono</label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                class="input"
                placeholder="+34 600 000 000"
              />
            </div>

            <div class="field">
              <label for="website">Web actual</label>
              <input
                id="website"
                v-model="form.website"
                type="url"
                class="input"
                placeholder="https://tuweb.com"
              />
            </div>

            <div class="field">
              <label for="service">Tipo de servicio *</label>
              <select
                id="service"
                v-model="form.service"
                required
                class="input"
              >
                <option value="">Selecciona un servicio</option>
                <option value="web">Sitio Web</option>
                <option value="ecommerce">E-commerce</option>
                <option value="seo">Artículos SEO</option>
                <option value="maintenance">Mantenimiento</option>
                <option value="other">Otro</option>
              </select>
            </div>

            <div class="field">
              <label for="budget">Presupuesto estimado</label>
              <select id="budget" v-model="form.budget" class="input">
                <option value="">Selecciona un rango</option>
                <option value="500-1000">€500 - €1.000</option>
                <option value="1000-5000">€1.000 - €5.000</option>
                <option value="5000-10000">€5.000 - €10.000</option>
                <option value="10000+">€10.000+</option>
              </select>
            </div>

            <div class="field">
              <label for="message">Cuéntanos tu proyecto *</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="6"
                class="input input--textarea"
                placeholder="Describe tu proyecto, objetivos y cualquier detalle importante..."
              ></textarea>
            </div>

            <div class="checkbox-field">
              <input id="terms" v-model="form.terms" type="checkbox" required />
              <label for="terms">Acepto los términos de privacidad *</label>
            </div>

            <button
              type="submit"
              :disabled="submitting"
              class="btn btn--primary btn--full btn--lg"
            >
              {{ submitting ? "Enviando..." : "Enviar Presupuesto" }}
            </button>

            <div v-if="submitSuccess" class="form-alert form-alert--success">
              Solicitud enviada. Nos ponemos en contacto en menos de 24 horas.
            </div>

            <div v-if="submitError" class="form-alert form-alert--error">
              {{ submitError }}
            </div>
          </form>
        </div>
      </div>
    </section>

    <section class="section section--subtle">
      <div class="container--narrow">
        <div class="section-header section-header--center">
          <h2 class="section-title">Preguntas Frecuentes</h2>
        </div>
        <div class="faq-list">
          <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
            <button class="faq-item__trigger" @click="faq.open = !faq.open">
              <span>{{ faq.question }}</span>
              <span class="faq-item__icon">{{ faq.open ? "−" : "+" }}</span>
            </button>
            <transition name="accordion">
              <div
                v-show="faq.open"
                class="faq-item__body"
                :ref="setAccordionHeight"
              >
                {{ faq.answer }}
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--white">
      <div class="container">
        <div class="section-header section-header--center">
          <h2 class="section-title">Cómo trabajamos</h2>
        </div>
        <div class="timeline">
          <div class="timeline-step">
            <div class="timeline-step__num">1</div>
            <div>
              <h3>Consulta inicial</h3>
              <p>
                Nos reunimos para entender tu visión, objetivos y necesidades
                específicas del proyecto.
              </p>
            </div>
          </div>
          <div class="timeline-step">
            <div class="timeline-step__num">2</div>
            <div>
              <h3>Propuesta y presupuesto</h3>
              <p>
                Te presentamos una propuesta detallada con timeline, costos y
                alcance del proyecto.
              </p>
            </div>
          </div>
          <div class="timeline-step">
            <div class="timeline-step__num">3</div>
            <div>
              <h3>Desarrollo</h3>
              <p>
                Nuestro equipo comienza el desarrollo con reportes de progreso
                semanales.
              </p>
            </div>
          </div>
          <div class="timeline-step">
            <div class="timeline-step__num">4</div>
            <div>
              <h3>Revisión y ajustes</h3>
              <p>
                Realizamos revisiones conjuntas y hacemos ajustes según tu
                feedback.
              </p>
            </div>
          </div>
          <div class="timeline-step">
            <div class="timeline-step__num">5</div>
            <div>
              <h3>Lanzamiento</h3>
              <p>
                Publicamos tu proyecto y ofrecemos soporte completo durante el
                lanzamiento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useSeo } from "@/composables/useSeo.js";

useSeo({
  title: "Contacto - Solicita tu Presupuesto Gratuito",
  description:
    "Contacta con WebsCrafting para solicitar tu presupuesto sin compromiso. Diseño web, e-commerce y SEO a medida. Respondemos en menos de 24 horas.",
  path: "/contacto",
});

const form = ref({
  name: "Carlos Martínez",
  email: "info@webscrafting.com",
  phone: "+34 612 345 678",
  website: "https://example.com",
  service: "web",
  budget: "1000-5000",
  message: "Hola, me gustaría renovar mi web corporativa. Actualmente tenemos una web antigua en WordPress que carga lento y no está optimizada para móvil. Buscamos algo moderno, rápido y que transmita confianza a nuestros clientes. Somos una empresa de 10 personas del sector logístico.",
  terms: true,
});
const submitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref("");

const submitForm = async () => {
  submitting.value = true;
  submitError.value = "";

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        phone: form.value.phone,
        website: form.value.website,
        service: form.value.service,
        budget: form.value.budget,
        message: form.value.message,
      }),
    });

    const payload = await res.json();

    if (!res.ok) {
      throw new Error(payload.error || "Error al enviar el formulario.");
    }

    submitSuccess.value = true;
    setTimeout(() => {
      form.value = {
        name: "",
        email: "",
        phone: "",
        website: "",
        service: "",
        budget: "",
        message: "",
        terms: false,
      };
      submitSuccess.value = false;
    }, 4000);
  } catch (err) {
    submitError.value = err.message || "Error de conexión. Inténtalo de nuevo.";
  } finally {
    submitting.value = false;
  }
};

const faqs = ref([
  {
    question: "¿Cuál es el tiempo de respuesta?",
    answer:
      "Respondemos a todos los correos dentro de 24 horas. Para consultas por WhatsApp, la respuesta es inmediata durante horario de oficina (9:00-18:00 de lunes a viernes).",
    open: false,
  },
  {
    question: "¿Ofrecen consulta gratuita?",
    answer:
      "Sí, la consulta inicial es completamente gratuita. Nos reunimos para entender tu proyecto y no hay compromiso de contratación.",
    open: false,
  },
  {
    question: "¿Qué incluye el servicio de mantenimiento?",
    answer:
      "Nuestro paquete de mantenimiento incluye actualizaciones de seguridad, backups automáticos, soporte técnico 24/7 y optimización de rendimiento.",
    open: false,
  },
  {
    question: "¿Puedo ver el progreso del proyecto?",
    answer:
      "Por supuesto. Ofrecemos reportes semanales de progreso y revisiones conjuntas para que estés siempre informado del avance.",
    open: false,
  },
]);

const setAccordionHeight = (el) => {
  if (!el) return;
  el.style.setProperty("--accordion-content-height", el.scrollHeight + "px");
};
</script>
