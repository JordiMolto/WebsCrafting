<template>
  <div class="w-full">
    <!-- Hero minimal -->
    <section class="pt-28 pb-10">
      <div class="container-xl">
        <h1 class="text-5xl md:text-6xl font-semibold text-gray-900 mb-4">Contacta con nosotros</h1>
        <p class="text-lg text-gray-600 max-w-2xl">
          Estamos aquí para ayudarte. Completa el formulario o ponte en contacto por cualquiera de nuestros canales.
        </p>
      </div>
    </section>

    <!-- Contact Info & Form -->
    <section class="py-24 bg-white">
      <div class="container-xl">
        <div class="grid md:grid-cols-3 gap-12">
          <!-- Contact Info -->
          <div class="space-y-8">
            <div>
              <h3 class="font-semibold text-lg text-gray-900 mb-3">Email</h3>
              <a href="mailto:hola@webscrafting.com" class="text-gray-900 hover:underline font-medium">
                hola@webscrafting.com
              </a>
              <p class="text-gray-600 text-sm mt-1">Responderemos en 24 horas</p>
            </div>

            <div>
              <h3 class="font-semibold text-lg text-gray-900 mb-3">Teléfono</h3>
              <a href="tel:+34600000000" class="text-gray-900 hover:underline font-medium">
                +34 600 000 000
              </a>
              <p class="text-gray-600 text-sm mt-1">Lun-Vie 9:00-18:00</p>
            </div>

            <div>
              <h3 class="font-semibold text-lg text-gray-900 mb-3">WhatsApp</h3>
              <a href="https://wa.me/34600000000" class="text-gray-900 hover:underline font-medium">
                Chatear ahora
              </a>
              <p class="text-gray-600 text-sm mt-1">Atención inmediata</p>
            </div>

            <div>
              <h3 class="font-semibold text-lg text-gray-900 mb-3">Ubicación</h3>
              <p class="text-gray-600">
                Madrid, España<br>
                Oficina remota disponible
              </p>
            </div>

            <div class="pt-8">
              <h3 class="font-semibold text-lg text-gray-900 mb-4">Síguenos</h3>
              <div class="flex gap-3">
                <a href="#" class="w-10 h-10 rounded-full ring-1 ring-black/5 flex items-center justify-center hover:bg-black hover:text-white transition">
                  f
                </a>
                <a href="#" class="w-10 h-10 rounded-full ring-1 ring-black/5 flex items-center justify-center hover:bg-black hover:text-white transition">
                  in
                </a>
                <a href="#" class="w-10 h-10 rounded-full ring-1 ring-black/5 flex items-center justify-center hover:bg-black hover:text-white transition">
                  tw
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="md:col-span-2">
            <form @submit.prevent="submitForm" class="space-y-6 p-8 rounded-2xl glass">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-900 mb-2">Nombre *</label>
                  <input 
                    v-model="form.name"
                    type="text" 
                    required 
                    class="w-full px-4 py-2 rounded-xl ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-black/40 bg-white/70"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-900 mb-2">Email *</label>
                  <input 
                    v-model="form.email"
                    type="email" 
                    required 
                    class="w-full px-4 py-2 rounded-xl ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-black/40 bg-white/70"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-900 mb-2">Teléfono</label>
                <input 
                  v-model="form.phone"
                  type="tel" 
                  class="w-full px-4 py-2 rounded-xl ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-black/40 bg-white/70"
                  placeholder="+34 600 000 000"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-900 mb-2">Empresa</label>
                <input 
                  v-model="form.company"
                  type="text" 
                  class="w-full px-4 py-2 rounded-xl ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-black/40 bg-white/70"
                  placeholder="Tu empresa"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-900 mb-2">Tipo de servicio *</label>
                <select 
                  v-model="form.service"
                  required
                  class="w-full px-4 py-2 rounded-xl ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-black/40 bg-white/70"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="web">Sitio Web</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="seo">Artículos SEO</option>
                  <option value="maintenance">Mantenimiento</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-900 mb-2">Presupuesto estimado</label>
                <select 
                  v-model="form.budget"
                  class="w-full px-4 py-2 rounded-xl ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-black/40 bg-white/70"
                >
                  <option value="">Selecciona un rango</option>
                  <option value="500-1000">€500 - €1.000</option>
                  <option value="1000-5000">€1.000 - €5.000</option>
                  <option value="5000-10000">€5.000 - €10.000</option>
                  <option value="10000+">€10.000+</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-900 mb-2">Cuéntanos tu proyecto *</label>
                <textarea 
                  v-model="form.message"
                  required 
                  rows="6"
                  class="w-full px-4 py-2 rounded-xl ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-black/40 bg-white/70 resize-none"
                  placeholder="Describe tu proyecto, objetivos y cualquier detalle importante..."
                ></textarea>
              </div>

              <div class="flex items-center">
                <input 
                  v-model="form.terms"
                  type="checkbox" 
                  id="terms"
                  required
                  class="w-4 h-4 text-black border-gray-300 rounded focus:ring-2 focus:ring-black/40"
                />
                <label for="terms" class="ml-2 text-sm text-gray-600">
                  Acepto los términos de privacidad *
                </label>
              </div>

              <button 
                type="submit"
                :disabled="submitting"
                class="w-full px-6 py-3 bg-black text-white rounded-full hover:bg-gray-900 font-semibold disabled:opacity-50"
              >
                {{ submitting ? 'Enviando...' : 'Enviar Presupuesto' }}
              </button>

              <div v-if="submitSuccess" class="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl">
                Gracias por tu mensaje. Nos pondremos en contacto pronto.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-semibold text-center text-gray-900 mb-12">Preguntas Frecuentes</h2>
        <div class="space-y-4">
          <div v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-2xl ring-1 ring-black/5">
            <button @click="faq.open = !faq.open" class="w-full p-6 flex justify-between items-center hover:bg-black/5">
              <span class="font-semibold text-gray-900">{{ faq.question }}</span>
              <span class="text-gray-900">{{ faq.open ? '−' : '+' }}</span>
            </button>
            <transition name="accordion">
              <div v-show="faq.open" class="px-6 pb-6 text-gray-600" :ref="setAccordionHeight">
                {{ faq.answer }}
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Timeline -->
    <section class="py-24 bg-white">
      <div class="container-xl">
        <h2 class="text-4xl font-semibold text-center text-gray-900 mb-12">Cómo trabajamos</h2>
        <div class="space-y-8">
          <div class="flex gap-8 items-start">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-semibold text-lg">
                1
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Consulta inicial</h3>
              <p class="text-gray-600">
                Nos reunimos para entender tu visión, objetivos y necesidades específicas del proyecto.
              </p>
            </div>
          </div>

          <div class="flex gap-8 items-start">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-semibold text-lg">
                2
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Propuesta y presupuesto</h3>
              <p class="text-gray-600">
                Te presentamos una propuesta detallada con timeline, costos y alcance del proyecto.
              </p>
            </div>
          </div>

          <div class="flex gap-8 items-start">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-semibold text-lg">
                3
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Desarrollo</h3>
              <p class="text-gray-600">
                Nuestro equipo comienza el desarrollo con reportes de progreso semanales.
              </p>
            </div>
          </div>

          <div class="flex gap-8 items-start">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-semibold text-lg">
                4
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Revisión y ajustes</h3>
              <p class="text-gray-600">
                Realizamos revisiones conjuntas y hacemos ajustes según tu feedback.
              </p>
            </div>
          </div>

          <div class="flex gap-8 items-start">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-semibold text-lg">
                5
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Lanzamiento</h3>
              <p class="text-gray-600">
                Publicamos tu proyecto y ofrecemos soporte completo durante el lanzamiento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  budget: '',
  message: '',
  terms: false
})

const submitting = ref(false)
const submitSuccess = ref(false)

const submitForm = async () => {
  submitting.value = true
  // Simular envío
  await new Promise(resolve => setTimeout(resolve, 1500))
  submitSuccess.value = true
  submitting.value = false
  
  // Resetear formulario después de 3 segundos
  setTimeout(() => {
    form.value = {
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      message: '',
      terms: false
    }
    submitSuccess.value = false
  }, 3000)
}

const faqs = ref([
  {
    question: '¿Cuál es el tiempo de respuesta?',
    answer: 'Respondemos a todos los correos dentro de 24 horas. Para consultas por WhatsApp, la respuesta es inmediata durante horario de oficina (9:00-18:00 de lunes a viernes).',
    open: false
  },
  {
    question: '¿Ofrecen consulta gratuita?',
    answer: 'Sí, la consulta inicial es completamente gratuita. Nos reunimos para entender tu proyecto y no hay compromiso de contratación.',
    open: false
  },
  {
    question: '¿Qué incluye el servicio de mantenimiento?',
    answer: 'Nuestro paquete de mantenimiento incluye actualizaciones de seguridad, backups automáticos, soporte técnico 24/7 y optimización de rendimiento.',
    open: false
  },
  {
    question: '¿Puedo ver el progreso del proyecto?',
    answer: 'Por supuesto. Ofrecemos reportes semanales de progreso y revisiones conjuntas para que estés siempre informado del avance.',
    open: false
  }
])

const setAccordionHeight = (el) => {
  if (!el) return
  el.style.setProperty('--accordion-content-height', el.scrollHeight + 'px')
}
</script>
