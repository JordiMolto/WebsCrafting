"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">WebsCrafting</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-foreground hover:text-primary transition"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("proceso")}
              className="text-foreground hover:text-primary transition"
            >
              Proceso
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-foreground hover:text-primary transition"
            >
              Portfolio
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-foreground hover:text-primary transition">
              FAQ
            </button>
            <Link href="/contacto" className="text-foreground hover:text-primary transition">
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span className="text-2xl">{mobileMenuOpen ? "✕" : "☰"}</span>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection("servicios")}
                className="block w-full text-left text-foreground hover:text-primary transition"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("proceso")}
                className="block w-full text-left text-foreground hover:text-primary transition"
              >
                Proceso
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block w-full text-left text-foreground hover:text-primary transition"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="block w-full text-left text-foreground hover:text-primary transition"
              >
                FAQ
              </button>
              <Link href="/contacto" className="block text-foreground hover:text-primary transition">
                Contacto
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
              Webs a medida con SEO desde el primer día
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Diseños modernos, rápidos y completos para hacer crecer tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => scrollToSection("contacto")}
              >
                Solicitar presupuesto
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-foreground text-foreground hover:bg-muted bg-transparent"
                asChild
              >
                <a href="https://wa.me/34" target="_blank" rel="noopener noreferrer">
                  Hablar por WhatsApp →
                </a>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
              <img src="/modern-web-design.jpg" alt="Web Design" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-secondary/30 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-16 text-center text-balance">
            Por qué elegirnos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { title: "Webs rápidas y ligeras", desc: "Optimizadas para conversión y rendimiento" },
              { title: "Diseño moderno y limpio", desc: "Interfaces intuitivas y atractivas" },
              { title: "SEO desde la base", desc: "Posicionamiento garantizado desde el inicio" },
              { title: "Trato cercano", desc: "Comunicación transparente y directa" },
              { title: "Mejor precio", desc: "Calidad profesional a costo competitivo" },
            ].map((benefit, i) => (
              <div
                key={i}
                className="bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary font-bold text-lg">
                  ✓
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-16 text-center text-balance">
          Servicios y tarifas
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Web a medida",
              price: "920 €",
              desc: "Sitio web personalizado",
              features: ["Diseño único", "SEO base", "Responsive", "Soporte 30 días"],
            },
            {
              name: "E-commerce",
              price: "1400 €",
              desc: "Tienda online completa",
              features: ["Catálogo productos", "Carrito compra", "Pasarela pago", "Dashboard admin"],
            },
            {
              name: "Artículos SEO",
              price: "50 €",
              desc: "Por artículo",
              features: ["Contenido optimizado", "Palabras clave", "Metaetiquetas", "Enlaces internos"],
            },
            {
              name: "Mantenimiento",
              price: "40 €",
              desc: "Por mes",
              features: ["Actualizaciones", "Seguridad", "Backups", "Soporte técnico"],
            },
          ].map((service, i) => (
            <div
              key={i}
              className="border border-border rounded-xl p-8 hover:border-primary/50 hover:shadow-lg transition bg-background"
            >
              <h3 className="text-2xl font-bold text-foreground mb-2">{service.name}</h3>
              <p className="text-primary text-3xl font-bold mb-2">{service.price}</p>
              <p className="text-muted-foreground text-sm mb-6">{service.desc}</p>
              <ul className="space-y-2">
                {service.features.map((feature, j) => (
                  <li key={j} className="text-sm text-foreground flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="bg-secondary/30 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-16 text-center text-balance">
            Nuestro proceso
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "1", title: "Brief inicial", desc: "Entendemos tus objetivos y necesidades" },
              { num: "2", title: "Diseño y estructura", desc: "Creamos la arquitectura visual y técnica" },
              { num: "3", title: "Desarrollo y SEO", desc: "Construimos con estándares modernos" },
              { num: "4", title: "Lanzamiento", desc: "Optimizamos y desplegamos tu web" },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  {step.num}
                </div>
                <div className="bg-background rounded-xl p-6 border border-border pt-12">
                  <h3 className="font-bold text-foreground text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-16 text-center text-balance">
          Proyectos recientes
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Tienda de artesanía", desc: "E-commerce con diseño artesanal" },
            { title: "Asesoría fiscal", desc: "Web corporativa con blog integrado" },
            { title: "Estudio de pilates", desc: "Landing con sistema de reservas" },
            { title: "Agencia marketing", desc: "Portafolio interactivo moderno" },
            { title: "Cafetería local", desc: "Web con menú digital y ubicación" },
            { title: "Consultoría tech", desc: "Sitio de servicios con CMS" },
          ].map((project, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl mb-4 overflow-hidden">
                <img
                  src="/web-design-.jpg"
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why WebsCrafting Section */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-center text-balance">Por qué WebsCrafting</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <ul className="space-y-4">
                {[
                  "Webs modernas y optimizadas",
                  "Experiencia real en diseño y SEO",
                  "Comunicación cercana y transparente",
                  "Rapidez sin sacrificar calidad",
                  "Adaptado a todo tipo de negocios",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-2xl">✓</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-8 border border-primary-foreground/20">
              <p className="text-lg leading-relaxed mb-6">
                Entendemos que cada negocio es único. Por eso no usamos plantillas genéricas, sino que creamos
                soluciones personalizadas que reflejan tu marca y alcanzan tus objetivos.
              </p>
              <p className="text-lg leading-relaxed">
                Desde startups hasta empresas consolidadas, nos encanta trabajar con clientes que quieren crecer de
                verdad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-16 text-center text-balance">
          Preguntas frecuentes
        </h2>
        <div className="space-y-6">
          {[
            {
              q: "¿Cuál es el tiempo de entrega?",
              a: "Los proyectos típicos se completan en 4-6 semanas, dependiendo de la complejidad.",
            },
            {
              q: "¿Qué incluye una web a medida?",
              a: "Diseño personalizado, desarrollo responsive, SEO base, hosting y soporte 30 días.",
            },
            {
              q: "¿Incluye textos y copywriting?",
              a: "Sí, incluimos copywriting básico. Si quieres contenido más especializado, podemos ajustarlo.",
            },
            {
              q: "¿Qué pasa con hosting y dominio?",
              a: "Podemos gestionarlo por ti o integrar tu proveedor existente. Sin costes ocultos.",
            },
          ].map((faq, i) => (
            <div key={i} className="border border-border rounded-lg p-6 hover:border-primary/50 transition">
              <h3 className="font-bold text-foreground text-lg mb-2">{faq.q}</h3>
              <p className="text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        id="contacto"
        className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20 lg:py-32"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">¿Listo para tu web?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 text-balance">
            Solicita tu presupuesto personalizado sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              onClick={() => {
                const element = document.querySelector("form")
                element?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Solicitar presupuesto
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary/80 bg-transparent"
              asChild
            >
              <a href="https://wa.me/34" target="_blank" rel="noopener noreferrer">
                Hablar por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-foreground mb-4">WebsCrafting</h3>
              <p className="text-muted-foreground text-sm">Webs a medida con SEO desde el primer día.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Enlaces</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection("servicios")}
                    className="text-muted-foreground hover:text-primary transition"
                  >
                    Servicios
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("portfolio")}
                    className="text-muted-foreground hover:text-primary transition"
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <Link href="/sobre-nosotros" className="text-muted-foreground hover:text-primary transition">
                    Sobre nosotros
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-primary transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("faq")}
                    className="text-muted-foreground hover:text-primary transition"
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <Link href="/contacto" className="text-muted-foreground hover:text-primary transition">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition">
                    Política privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition">
                    Términos servicio
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© 2025 WebsCrafting. Todos los derechos reservados.</p>
            <p>Hecho con ❤️ para tu negocio</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
