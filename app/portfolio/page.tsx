"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

type Project = {
  id: number
  titulo: string
  descripcion: string
  categoria: "web" | "ecommerce" | "blog" | "seo"
  imagen: string
  cliente: string
  tecnologias: string[]
  resultados: string
  enlace?: string
}

const proyectos: Project[] = [
  {
    id: 1,
    titulo: "Tienda de Artesanía Digital",
    descripcion: "E-commerce completo para venta de productos artesanales con sistema de inventario integrado.",
    categoria: "ecommerce",
    imagen: "/handmade-shop.jpg",
    cliente: "Artesanía & Más",
    tecnologias: ["Next.js", "React", "Stripe", "PostgreSQL"],
    resultados: "+150% en ventas online en 6 meses",
    enlace: "https://example.com",
  },
  {
    id: 2,
    titulo: "Asesoría Fiscal - Web Corporativa",
    descripcion:
      "Sitio web profesional para despacho de asesoramiento con blog integrado y sistema de contacto avanzado.",
    categoria: "web",
    imagen: "/accounting-firm.jpg",
    cliente: "Asesoría López & Asociados",
    tecnologias: ["Next.js", "Tailwind CSS", "Supabase", "Nodemailer"],
    resultados: "+200 consultas mensuales",
    enlace: "https://example.com",
  },
  {
    id: 3,
    titulo: "Estudio de Pilates - Landing + Reservas",
    descripcion: "Landing page moderna con sistema de reservas integrado y gestión de clientes.",
    categoria: "web",
    imagen: "/fitness-studio.jpg",
    cliente: "García Pilates Studio",
    tecnologias: ["Next.js", "React", "Calendar API", "Stripe"],
    resultados: "+45 clientes nuevos en 3 meses",
    enlace: "https://example.com",
  },
  {
    id: 4,
    titulo: "Agencia Marketing - Portfolio Interactivo",
    descripcion: "Portafolio moderno y dinámico que showcasea casos de éxito con animaciones premium.",
    categoria: "web",
    imagen: "/marketing-agency.jpg",
    cliente: "Marketing Innovate",
    tecnologias: ["Next.js", "Framer Motion", "TypeScript", "Tailwind CSS"],
    resultados: "+300% en leads calificados",
    enlace: "https://example.com",
  },
  {
    id: 5,
    titulo: "Blog SEO - Posicionamiento Orgánico",
    descripcion: "Blog optimizado con +50 artículos de SEO que posicionan en primera página de Google.",
    categoria: "blog",
    imagen: "/blog-writing.jpg",
    cliente: "Tech Insights",
    tecnologias: ["Next.js", "Markdown", "SEO Optimization", "Analytics"],
    resultados: "+10K visitas mensuales desde Google",
    enlace: "https://example.com",
  },
  {
    id: 6,
    titulo: "Cafetería Local - Web + Menú Digital",
    descripcion: "Web con menú digital actualizable, ubicación interactiva y sistema de pedidos online.",
    categoria: "ecommerce",
    imagen: "/coffee-shop.jpg",
    cliente: "Café Madrid Central",
    tecnologias: ["Next.js", "React", "Google Maps API", "Stripe"],
    resultados: "+80 pedidos semanales por web",
    enlace: "https://example.com",
  },
  {
    id: 7,
    titulo: "Consultoría Tech - SaaS Landing",
    descripcion: "Landing page de alto rendimiento para plataforma SaaS con sistema de pruebas gratuitas.",
    categoria: "web",
    imagen: "/saas-startup.jpg",
    cliente: "TechFlow Solutions",
    tecnologias: ["Next.js", "React", "Stripe", "Auth0"],
    resultados: "+500 sign-ups en primer mes",
    enlace: "https://example.com",
  },
  {
    id: 8,
    titulo: "Tienda de Ropa - E-commerce Premium",
    descripcion: "Tienda online de ropa con catalogo de 500+ productos, filtros avanzados y checkout optimizado.",
    categoria: "ecommerce",
    imagen: "/fashion-store.jpg",
    cliente: "Urban Style Boutique",
    tecnologias: ["Next.js", "Shopify API", "TypeScript", "Tailwind CSS"],
    resultados: "+250K€ en ventas primer trimestre",
    enlace: "https://example.com",
  },
  {
    id: 9,
    titulo: "Estudio Fotográfico - Portfolio Visual",
    descripcion: "Galería visual impactante con lightbox premium y sistema de contacto para encargos.",
    categoria: "web",
    imagen: "/photography-portfolio.jpg",
    cliente: "Fotografía Marcos López",
    tecnologias: ["Next.js", "React", "Image Optimization", "Nodemailer"],
    resultados: "+15 clientes nuevos mensuales",
    enlace: "https://example.com",
  },
  {
    id: 10,
    titulo: "Clínica Dental - Web + Citas Online",
    descripcion: "Sitio web profesional con sistema de reserva de citas online integrado y información médica.",
    categoria: "web",
    imagen: "/dental-clinic.jpg",
    cliente: "Clínica Dental Sonrisa",
    tecnologias: ["Next.js", "React", "Calendar API", "Supabase"],
    resultados: "+120 citas mensuales por web",
    enlace: "https://example.com",
  },
  {
    id: 11,
    titulo: "Hotel Boutique - Web + Reservas",
    descripcion: "Landing impactante para hotel con sistema de reservas integrado y galería de habitaciones.",
    categoria: "web",
    imagen: "/luxury-hotel.jpg",
    cliente: "Hotel Boutique Madrid",
    tecnologias: ["Next.js", "Booking API", "Stripe", "Tailwind CSS"],
    resultados: "+80% en occupancy rate",
    enlace: "https://example.com",
  },
  {
    id: 12,
    titulo: "Empresa de Limpieza - Lead Generation",
    descripcion: "Web optimizada para generación de leads con formularios estratégicos y SEO local aplicado.",
    categoria: "seo",
    imagen: "/cleaning-service.jpg",
    cliente: "Limpieza Pro Madrid",
    tecnologias: ["Next.js", "SEO Local", "Google Business", "Analytics"],
    resultados: "+40 presupuestos solicitados mensuales",
    enlace: "https://example.com",
  },
]

const categorias = [
  { value: "all", label: "Todos" },
  { value: "web", label: "Webs" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "blog", label: "Blog" },
  { value: "seo", label: "SEO" },
]

export default function PortfolioPage() {
  const [categoriaActiva, setCategoriaActiva] = useState("all")

  const proyectosFiltrados =
    categoriaActiva === "all" ? proyectos : proyectos.filter((p) => p.categoria === categoriaActiva)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition">
            <ArrowLeft size={20} />
            Volver
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Portfolio</h1>
          <div className="w-20" />
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">Nuestros proyectos</h2>
          <p className="text-2xl text-muted-foreground text-balance">
            Más de 50 proyectos completados exitosamente. Aquí puedes ver algunos de ellos.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categorias.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategoriaActiva(cat.value)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                categoriaActiva === cat.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {proyectosFiltrados.map((proyecto) => (
            <div
              key={proyecto.id}
              className="group border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition"
            >
              {/* Imagen */}
              <div className="overflow-hidden h-56 bg-gradient-to-br from-primary/20 to-primary/5">
                <img
                  src={proyecto.imagen || "/placeholder.svg"}
                  alt={proyecto.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>

              {/* Contenido */}
              <div className="p-6">
                <p className="text-sm text-primary font-semibold mb-2 uppercase tracking-wide">
                  {categorias.find((c) => c.value === proyecto.categoria)?.label}
                </p>
                <h3 className="text-xl font-bold text-foreground mb-3">{proyecto.titulo}</h3>
                <p className="text-muted-foreground text-sm mb-4">{proyecto.descripcion}</p>

                {/* Cliente */}
                <p className="text-sm text-muted-foreground mb-4">
                  <span className="font-semibold">Cliente:</span> {proyecto.cliente}
                </p>

                {/* Resultados */}
                <div className="bg-primary/5 rounded-lg p-3 mb-4 border border-primary/20">
                  <p className="text-sm text-foreground">
                    <span className="font-semibold text-primary">Resultado:</span> {proyecto.resultados}
                  </p>
                </div>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proyecto.tecnologias.map((tech, i) => (
                    <span key={i} className="text-xs bg-secondary text-foreground px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {proyecto.enlace && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary text-primary hover:bg-primary/10 bg-transparent"
                    asChild
                  >
                    <a
                      href={proyecto.enlace}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Ver proyecto
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <section className="bg-secondary/30 rounded-xl p-12 border border-border mb-20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">{proyectos.length}+</div>
              <p className="text-muted-foreground">Proyectos completados</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500K+</div>
              <p className="text-muted-foreground">Visitantes mensuales</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2M+</div>
              <p className="text-muted-foreground">En ventas generadas</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Clientes satisfechos</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl p-12 text-center">
          <h3 className="text-4xl font-bold mb-4">¿Viste un proyecto que te inspira?</h3>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Podemos hacer algo similar para tu negocio. Cuéntanos tu idea y haremos que se haga realidad.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contacto">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full sm:w-auto"
              >
                Empezar proyecto
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary/80 bg-transparent"
              asChild
            >
              <a href="https://wa.me/34" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
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
