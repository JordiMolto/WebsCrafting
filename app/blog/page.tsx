"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Search, Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type BlogPost = {
  id: number
  titulo: string
  slug: string
  excerpt: string
  contenido: string
  autor: string
  fecha: string
  categoria: string
  imagen: string
  tiempoLectura: number
}

const posts: BlogPost[] = [
  {
    id: 1,
    titulo: "10 Errores Comunes en Diseño Web que Pierden Clientes",
    slug: "errores-diseno-web",
    excerpt:
      "Descubre los 10 errores más comunes en diseño web que están alejando a tus clientes y cómo solucionarlos.",
    contenido: `El diseño web es mucho más que estética. Un mal diseño puede costar miles de euros en ventas perdidas. En este artículo te mostramos los errores más comunes que vemos en webs y cómo evitarlos.

## 1. Falta de claridad en la propuesta de valor

Muchos sitios web no comunican claramente qué ofrecen. Los visitantes necesitan entender en menos de 3 segundos qué haces y por qué deberían contratarte.

## 2. Navegación complicada

Una navegación intuitiva es fundamental. Si los usuarios no encuentran lo que buscan, se van.

## 3. Falta de optimización móvil

Más del 70% del tráfico viene desde móvil. Si tu web no funciona bien en móvil, pierdes la mayoría de clientes.

## 4. Tiempos de carga lentos

Cada segundo cuenta. Un sitio lento pierde visitantes exponencialmente.

## 5. Falta de call-to-actions claros

¿Qué quieres que hagan los visitantes? Debe estar claro y ser fácil.

## Conclusión

El buen diseño web es funcional, rápido y orientado a conversión. No es solo bonito, sino que genera resultados.`,
    autor: "Elena Martínez",
    fecha: "15 de octubre, 2025",
    categoria: "Diseño",
    imagen: "/placeholder.svg?key=design-errors",
    tiempoLectura: 8,
  },
  {
    id: 2,
    titulo: "Guía Completa de SEO On-Page para 2025",
    slug: "guia-seo-on-page-2025",
    excerpt:
      "Todo lo que necesitas saber sobre SEO on-page para posicionarte en Google. Estrategias actualizadas para 2025.",
    contenido: `El SEO sigue siendo uno de los mejores inversiones en marketing digital. En esta guía te enseñamos cómo optimizar tu web para posicionarte en Google.

## ¿Por qué es importante el SEO?

El 93% de las personas empiezan su búsqueda en Google. Si no apareces en las primeras posiciones, no existes para tus clientes potenciales.

## Optimización de palabras clave

Las palabras clave siguen siendo fundamentales. Debes investigar qué busca tu audiencia y optimizar tu contenido alrededor de esas palabras.

## Estructura técnica

Una estructura técnica correcta es fundamental:
- URLs limpias y descriptivas
- Sitemap.xml actualizado
- Robots.txt optimizado
- Schema markup implementado

## Contenido de calidad

Google premia el contenido único, completo y de calidad. Escribe para usuarios, no para máquinas.

## Links internos estratégicos

Los enlaces internos ayudan a Google a entender tu sitio. Usa texto ancla relevante.

## Conclusión

El SEO no es complicado si lo haces correctamente desde el inicio. Una web bien optimizada genera tráfico gratuito continuamente.`,
    autor: "Laura Fernández",
    fecha: "10 de octubre, 2025",
    categoria: "SEO",
    imagen: "/placeholder.svg?key=seo-guide",
    tiempoLectura: 12,
  },
  {
    id: 3,
    titulo: "Por Qué tu E-commerce Pierde Ventas: Análisis de Carrito Abandonado",
    slug: "ecommerce-carrito-abandonado",
    excerpt: "El 70% de los carritos son abandonados. Descubre por qué y cómo recuperar esas ventas.",
    contenido: `El carrito abandonado es uno de los mayores problemas del e-commerce. Aquí te enseñamos cómo recuperar esas ventas perdidas.

## El problema del carrito abandonado

Estadísticas muestran que el 70% de los carritos son abandonados. Eso significa que pierdes el 70% de tus ventas potenciales.

## Razones principales del abandono

Las razones más comunes incluyen:
- Costos de envío inesperados
- Métodos de pago limitados
- Obligación de crear cuenta
- Proceso de checkout complicado
- Falta de confianza en el sitio

## Soluciones para reducir abandono

### 1. Transparencia en costos
Muestra los costos de envío desde el inicio. Sin sorpresas.

### 2. Múltiples métodos de pago
Ofrece Tarjeta, PayPal, Google Pay, Apple Pay.

### 3. Checkout sin registro
Permite comprar sin necesidad de crear cuenta.

### 4. Proceso simple
Máximo 3-4 pasos. Cada paso adicional reduce conversión.

## Recuperación de carritos abandonados

Implementa emails de recordatorio:
- Email 1: Después de 1 hora
- Email 2: Después de 24 horas
- Email 3: Oferta especial después de 48 horas

## Conclusión

Reducir el carrito abandonado es una de las mejores inversiones para tu e-commerce. Implementa estas estrategias y verás resultados inmediatos.`,
    autor: "Carlos Gómez",
    fecha: "5 de octubre, 2025",
    categoria: "E-commerce",
    imagen: "/placeholder.svg?key=ecommerce-cart",
    tiempoLectura: 10,
  },
  {
    id: 4,
    titulo: "Velocidad de Carga: El Factor que Google Mide y que Afecta tu Negocio",
    slug: "velocidad-carga-web",
    excerpt: "La velocidad de carga no es solo SEO. Descubre cómo afecta directamente a tus ventas.",
    contenido: `La velocidad de carga es crítica. En 2025, Google penaliza duramente los sitios lentos y los usuarios los abandonan.

## ¿Cuántos usuarios pierdes por velocidad?

Estadísticas reales:
- Cada segundo de delay = 7% pérdida de conversión
- 53% de los usuarios abandonan móviles lentos
- El 75% de usuarios no vuelven a un sitio lento

## Factores que afectan la velocidad

### 1. Imágenes sin optimizar
Las imágenes mal optimizadas son la mayor razón de lentitud.

### 2. Exceso de plugins
Cada plugin es código adicional. Menos es mejor.

### 3. Código no minificado
JavaScript y CSS sin minificar ralentizan todo.

### 4. Hosting deficiente
Un buen hosting es esencial. No ahorres en esto.

### 5. Cache no configurada
El caché reduce la carga del servidor significativamente.

## Cómo medir la velocidad

Herramientas como Google PageSpeed Insights y GTmetrix te dan métricas exactas.

## Resultados de optimizar velocidad

Nuestros clientes han visto:
- +15% en conversión tras optimizar velocidad
- -40% en tasa de rebote
- Mejora importante en rankings SEO

## Conclusión

La velocidad no es un lujo, es una necesidad. Invierte en optimizarla.`,
    autor: "Elena Martínez",
    fecha: "28 de septiembre, 2025",
    categoria: "Desarrollo",
    imagen: "/placeholder.svg?key=web-speed",
    tiempoLectura: 9,
  },
  {
    id: 5,
    titulo: "Cómo Elegir la Agencia Web Perfecta para tu Negocio",
    slug: "elegir-agencia-web",
    excerpt: "No todas las agencias son iguales. Descubre qué preguntas hacer antes de contratar.",
    contenido: `Elegir la agencia web correcta es una decisión importante. Aquí te guiamos en el proceso.

## Preguntas clave a hacer

### 1. ¿Tienen experiencia en mi sector?
Una agencia con experiencia en tu industria es más valiosa.

### 2. ¿Pueden mostrar casos similares?
Pide portfolio y referencias. Las historias de éxito hablan.

### 3. ¿Utilizan tecnología moderna?
La tecnología que usan afecta el futuro de tu web.

### 4. ¿Qué incluye el servicio?
Claro: mantenimiento, actualizaciones, soporte.

### 5. ¿Cuál es el proceso?
Una agencia profesional tiene un proceso claro.

## Red flags (banderas rojas)

- Promesas de resultados garantizados en SEO
- Presupuestos demasiado bajos
- No preguntan sobre tus objetivos
- No ofrecen soporte post-lanzamiento
- Usan tecnología anticuada

## Lo que realmente importa

No es solo el precio. Importa:
- Comunicación clara
- Enfoque en tus resultados
- Disponibilidad para preguntas
- Transparencia en el proceso

## Conclusión

Elige una agencia que entienda tu negocio y se comprometa con tus resultados. La relación a largo plazo es más valiosa que una buena negociación inicial.`,
    autor: "Laura Fernández",
    fecha: "20 de septiembre, 2025",
    categoria: "Negocio",
    imagen: "/placeholder.svg?key=choose-agency",
    tiempoLectura: 8,
  },
  {
    id: 6,
    titulo: "Tendencias de Diseño Web 2025: Lo Que Necesitas Saber",
    slug: "tendencias-diseno-web-2025",
    excerpt: "Las tendencias de diseño web están evolucionando. Descubre qué está en boga en 2025.",
    contenido: `El diseño web evoluciona constantemente. En 2025, vemos tendencias interesantes que mejoran tanto UX como resultados.

## Minimalismo refinado

El exceso está muerto. El diseño limpio y espacioso domina en 2025.

Beneficios:
- Mejor experiencia del usuario
- Carga más rápida
- Enfoque en lo importante
- Más profesional

## Animaciones sutiles

Las animaciones no son distracciones, son herramientas. Cuando se usan bien, mejoran la UX.

## Tipografía como protagonista

Una tipografía bien elegida comunica tu marca. En 2025 es mucho más relevante que antes.

## Colores audaces

Los colores vibrantes vuelven, pero con propósito. No solo por estética.

## Dark mode

El dark mode es obligatorio en 2025. Los usuarios lo esperan.

## Diseño responsivo natural

No es una opción, es obligatorio. Mobile-first es el estándar.

## Accesibilidad

Diseñar para todos. Contraste suficiente, textos legibles, navegación clara.

## Conclusión

Las mejores tendencias en 2025 combinan belleza con funcionalidad. Diseños que funcionan y que se ven bien.`,
    autor: "Elena Martínez",
    fecha: "12 de septiembre, 2025",
    categoria: "Diseño",
    imagen: "/placeholder.svg?key=design-trends",
    tiempoLectura: 7,
  },
]

const categorias = ["Todos", "Diseño", "SEO", "E-commerce", "Desarrollo", "Negocio"]

export default function BlogPage() {
  const [busqueda, setBusqueda] = useState("")
  const [categoriaActiva, setCategoriaActiva] = useState("Todos")

  const postsFiltrados = posts.filter((post) => {
    const cumpleBusqueda =
      post.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(busqueda.toLowerCase())
    const cumpleCategoria = categoriaActiva === "Todos" || post.categoria === categoriaActiva
    return cumpleBusqueda && cumpleCategoria
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition">
            <ArrowLeft size={20} />
            Volver
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Blog</h1>
          <div className="w-20" />
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">Blog de WebsCrafting</h2>
          <p className="text-2xl text-muted-foreground text-balance">
            Artículos sobre diseño web, SEO, e-commerce y estrategia digital. Todo lo que necesitas saber.
          </p>
        </div>

        {/* Búsqueda */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        {/* Categorías */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                categoriaActiva === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de artículos */}
        {postsFiltrados.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {postsFiltrados.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <div className="group border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition h-full flex flex-col">
                  {/* Imagen */}
                  <div className="overflow-hidden h-48 bg-gradient-to-br from-primary/20 to-primary/5">
                    <img
                      src={post.imagen || "/placeholder.svg"}
                      alt={post.titulo}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                  </div>

                  {/* Contenido */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Categoría */}
                    <p className="text-sm text-primary font-semibold mb-3 uppercase tracking-wide">{post.categoria}</p>

                    {/* Título */}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition line-clamp-2">
                      {post.titulo}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">{post.excerpt}</p>

                    {/* Metadata */}
                    <div className="space-y-2 border-t border-border pt-4 mt-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar size={16} />
                        {post.fecha}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User size={16} />
                          {post.autor}
                        </div>
                        <span className="text-xs bg-secondary text-foreground px-2 py-1 rounded">
                          {post.tiempoLectura} min
                        </span>
                      </div>
                    </div>

                    {/* Link */}
                    <div className="mt-4 flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition">
                      Leer más
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-2xl text-muted-foreground mb-4">No encontramos artículos</p>
            <p className="text-muted-foreground">Intenta con otra búsqueda o categoría</p>
          </div>
        )}

        {/* CTA */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">¿Quieres que escribamos sobre algo?</h3>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Nos encanta escribir artículos sobre temas que importan a nuestros clientes. Sugierenos un tema.
          </p>
          <Link href="/contacto">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Contactar
            </Button>
          </Link>
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
