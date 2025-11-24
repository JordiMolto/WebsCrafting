"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Phone, Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    empresa: "",
    telefono: "",
    tipo: "web",
    mensaje: "",
  })

  const [enviado, setEnviado] = useState(false)
  const [cargando, setCargando] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setCargando(true)

    // Simular envío - en producción conectar a un backend real
    setTimeout(() => {
      setEnviado(true)
      setFormData({ nombre: "", email: "", empresa: "", telefono: "", tipo: "web", mensaje: "" })
      setCargando(false)

      // Resetear después de 5 segundos
      setTimeout(() => setEnviado(false), 5000)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition">
            <ArrowLeft size={20} />
            Volver
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Contacto</h1>
          <div className="w-20" />
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Hablemos sobre tu proyecto
          </h2>
          <p className="text-2xl text-muted-foreground text-balance">
            Cuéntanos qué necesitas y te haremos un presupuesto personalizado sin compromiso.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">Formas de contactar</h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <Mail className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">hola@webscrafting.es</p>
                    <p className="text-sm text-muted-foreground mt-1">Respondemos en 24h</p>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <Phone className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Teléfono</h4>
                    <p className="text-muted-foreground">+34 123 456 789</p>
                    <p className="text-sm text-muted-foreground mt-1">Lun-Vie 9:00-18:00</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <Send className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                    <p className="text-muted-foreground">+34 123 456 789</p>
                    <a
                      href="https://wa.me/34123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:text-primary/80 transition mt-1 inline-block"
                    >
                      Abrir chat →
                    </a>
                  </div>
                </div>

                {/* Ubicación */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <MapPin className="text-primary" size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Ubicación</h4>
                    <p className="text-muted-foreground">Madrid, España</p>
                    <p className="text-sm text-muted-foreground mt-1">Disponibles para todo tipo de clientes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Extra info box */}
            <div className="bg-secondary/50 rounded-lg p-6 border border-border">
              <h4 className="font-bold text-foreground mb-3">¿Necesitas presupuesto urgente?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Si tienes un proyecto urgente, cuéntanos y haremos lo posible por ayudarte cuanto antes.
              </p>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full" asChild>
                <a href="https://wa.me/34123456789" target="_blank" rel="noopener noreferrer">
                  Contactar ahora por WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl p-8 border border-border shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {enviado && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 font-semibold">¡Mensaje enviado correctamente!</p>
                    <p className="text-green-700 text-sm">
                      Nos pondremos en contacto pronto para hablar sobre tu proyecto.
                    </p>
                  </div>
                )}

                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className="block text-sm font-semibold text-foreground mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                  />
                </div>

                {/* Empresa */}
                <div>
                  <label htmlFor="empresa" className="block text-sm font-semibold text-foreground mb-2">
                    Empresa (opcional)
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    placeholder="Nombre de tu empresa"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label htmlFor="telefono" className="block text-sm font-semibold text-foreground mb-2">
                    Teléfono (opcional)
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+34 123 456 789"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                  />
                </div>

                {/* Tipo de proyecto */}
                <div>
                  <label htmlFor="tipo" className="block text-sm font-semibold text-foreground mb-2">
                    ¿Qué tipo de proyecto necesitas? *
                  </label>
                  <select
                    id="tipo"
                    name="tipo"
                    value={formData.tipo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                  >
                    <option value="web">Web a medida</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="seo">Artículos SEO</option>
                    <option value="mantenimiento">Mantenimiento</option>
                    <option value="branding">Branding + copywriting</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-semibold text-foreground mb-2">
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    placeholder="Describe tu proyecto, objetivos, presupuesto aproximado..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={cargando}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
                >
                  {cargando ? "Enviando..." : "Enviar consulta"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Nos pondremos en contacto en menos de 24 horas.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ section */}
        <section className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Preguntas sobre el contacto</h3>
          <div className="space-y-4">
            {[
              {
                q: "¿Cuánto tiempo tardaréis en responder?",
                a: "Respondemos a todos los consultas en menos de 24 horas. Si es urgente, también puedes escribirnos por WhatsApp.",
              },
              {
                q: "¿Hay compromiso al solicitar presupuesto?",
                a: "No hay ningún compromiso. Te haremos un presupuesto detallado sin que eso implique que debas contratar nuestros servicios.",
              },
              {
                q: "¿Trabajáis con clientes fuera de Madrid?",
                a: "Sí, trabajamos con clientes de todo el país e incluso del extranjero. No hay límite geográfico para nuestros servicios.",
              },
              {
                q: "¿Qué información necesitáis para el presupuesto?",
                a: "Lo básico: tipo de proyecto, objetivos principales y presupuesto aproximado. Luego haremos un análisis más profundo para darte un precio exacto.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-secondary/30 rounded-lg p-6 border border-border">
                <h4 className="font-bold text-foreground mb-2">{faq.q}</h4>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">© 2025 WebsCrafting. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
