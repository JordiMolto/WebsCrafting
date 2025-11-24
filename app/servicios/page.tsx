import Link from "next/link"
import { ArrowLeft, Check, Users, BarChart3, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition">
            <ArrowLeft size={20} />
            Volver
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Servicios</h1>
          <div className="w-20" />
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">Nuestros servicios</h2>
          <p className="text-2xl text-muted-foreground text-balance">
            Soluciones digitales completas adaptadas a tu negocio. Desde webs hasta estrategia SEO.
          </p>
        </div>

        {/* Web a Medida */}
        <section className="mb-20 pb-20 border-b border-border">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                <p className="text-primary font-semibold text-sm">SERVICIO ESTRELLA</p>
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Web a Medida</h3>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Sitios web profesionales diseñados específicamente para tu negocio. No usamos plantillas genéricas, cada
                web es única y optimizada para conversión.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Diseño moderno y responsivo",
                  "SEO optimizado desde la base",
                  "Velocidad de carga maximizada",
                  "Integración de formularios y contacto",
                  "Soporte y mantenimiento 30 días",
                  "Certificado SSL y hosting incluido",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20 mb-8">
                <p className="text-3xl font-bold text-primary mb-2">920 € (sin IVA)</p>
                <p className="text-muted-foreground">Tiempo de entrega: 4-6 semanas</p>
              </div>

              <Link href="/contacto">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Solicitar presupuesto
                </Button>
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                <img
                  src="/placeholder.svg?key=web-a-medida"
                  alt="Web a Medida"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* E-commerce */}
        <section className="mb-20 pb-20 border-b border-border">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:block order-2">
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                <img
                  src="/placeholder.svg?key=ecommerce-shop"
                  alt="E-commerce"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
            <div className="order-1 lg:order-none">
              <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">E-commerce</h3>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Tiendas online completas con todo lo necesario para vender tus productos. Integración de pasarela de
                pago, gestión de inventario y múltiples opciones de envío.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Catálogo de productos ilimitado",
                  "Carrito de compra avanzado",
                  "Pasarela de pago segura (Stripe, PayPal)",
                  "Gestión de inventario integrada",
                  "Sistema de descuentos y cupones",
                  "Dashboard admin completo",
                  "Notificaciones de pedidos automáticas",
                  "Integración con transportistas",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20 mb-8">
                <p className="text-3xl font-bold text-primary mb-2">1.400 € (sin IVA)</p>
                <p className="text-muted-foreground">Tiempo de entrega: 6-8 semanas</p>
              </div>

              <Link href="/contacto">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Solicitar presupuesto
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Artículos SEO */}
        <section className="mb-20 pb-20 border-b border-border">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Artículos SEO</h3>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Contenido de blog optimizado para SEO que posiciona en Google. Cada artículo está investigado y escrito
                para captar tráfico orgánico real.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Investigación de palabras clave profunda",
                  "Contenido original y de calidad",
                  "Optimización on-page completa",
                  "Estructura con encabezados semánticos",
                  "Enlaces internos estratégicos",
                  "Meta descripción y titles optimizados",
                  "Imágenes optimizadas",
                  "Formato para lectura rápida",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20 mb-8">
                <p className="text-3xl font-bold text-primary mb-2">50 € / artículo (sin IVA)</p>
                <p className="text-muted-foreground">Aproximadamente 2.000 palabras por artículo</p>
              </div>

              <Link href="/contacto">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Solicitar presupuesto
                </Button>
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                <img
                  src="/placeholder.svg?key=seo-articles"
                  alt="Artículos SEO"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mantenimiento */}
        <section className="mb-20 pb-20 border-b border-border">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:block order-2">
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                <img
                  src="/placeholder.svg?key=maintenance"
                  alt="Mantenimiento"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
            <div className="order-1 lg:order-none">
              <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Mantenimiento Mensual</h3>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Servicio de mantenimiento continuo para mantener tu web segura, rápida y actualizada. Soporte técnico
                incluido.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Actualizaciones de seguridad regulares",
                  "Backups diarios automatizados",
                  "Monitoreo de velocidad y rendimiento",
                  "Actualizaciones de plugins y dependencias",
                  "Certificado SSL renovado automáticamente",
                  "Soporte técnico por email/WhatsApp",
                  "Análisis mensual de rendimiento",
                  "Optimizaciones según métricas",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20 mb-8">
                <p className="text-3xl font-bold text-primary mb-2">40 € / mes (sin IVA)</p>
                <p className="text-muted-foreground">Compromiso mínimo 3 meses</p>
              </div>

              <Link href="/contacto">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Solicitar presupuesto
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Branding & Copywriting */}
        <section className="mb-20 pb-20 border-b border-border">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Branding & Copywriting</h3>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Complementa tu web con identidad de marca y copywriting persuasivo que convierte visitantes en clientes.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Análisis de competencia y mercado",
                  "Definición de propuesta de valor",
                  "Copywriting persuasivo para web",
                  "Creación de tagline y slogan",
                  "Guías de tonalidad y voz de marca",
                  "Textos para redes sociales",
                  "Email marketing templates",
                  "Consultoría de posicionamiento",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20 mb-8">
                <p className="text-3xl font-bold text-primary mb-2">Desde 300 € (sin IVA)</p>
                <p className="text-muted-foreground">Presupuesto personalizado según alcance</p>
              </div>

              <Link href="/contacto">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Solicitar presupuesto
                </Button>
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                <img
                  src="/placeholder.svg?key=branding"
                  alt="Branding"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Comparativa de servicios</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-4 font-bold text-foreground">Característica</th>
                  <th className="text-center py-4 px-4 font-bold text-foreground">Web</th>
                  <th className="text-center py-4 px-4 font-bold text-foreground">E-commerce</th>
                  <th className="text-center py-4 px-4 font-bold text-foreground">Artículos</th>
                  <th className="text-center py-4 px-4 font-bold text-foreground">Mantenimiento</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Diseño responsivo", web: true, ecommerce: true, articulos: false, mante: true },
                  { feature: "SEO optimizado", web: true, ecommerce: true, articulos: true, mante: true },
                  { feature: "Pasarela de pago", web: false, ecommerce: true, articulos: false, mante: false },
                  { feature: "Blog integrado", web: true, ecommerce: true, articulos: false, mante: false },
                  { feature: "Soporte técnico", web: false, ecommerce: false, articulos: false, mante: true },
                  { feature: "Backups automáticos", web: false, ecommerce: false, articulos: false, mante: true },
                  { feature: "Actualizaciones", web: false, ecommerce: false, articulos: false, mante: true },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border hover:bg-secondary/30 transition">
                    <td className="py-4 px-4 font-semibold text-foreground">{row.feature}</td>
                    <td className="text-center py-4 px-4">
                      {row.web ? <Check className="text-primary mx-auto" size={20} /> : "-"}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.ecommerce ? <Check className="text-primary mx-auto" size={20} /> : "-"}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.articulos ? <Check className="text-primary mx-auto" size={20} /> : "-"}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.mante ? <Check className="text-primary mx-auto" size={20} /> : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-secondary/30 rounded-xl p-12 mb-20 border border-border">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
            Por qué nuestros servicios son diferentes
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Rápidos", desc: "Entregas puntuales sin sacrificar calidad" },
              { icon: BarChart3, title: "Resultados", desc: "Enfocados en métricas y ROI real" },
              { icon: Users, title: "Cercanos", desc: "Comunicación transparente y directa" },
              { icon: Shield, title: "Seguros", desc: "Tecnología moderna y estándares altos" },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl p-12 text-center">
          <h3 className="text-4xl font-bold mb-4">¿Necesitas alguno de estos servicios?</h3>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Cuéntanos cuál es tu proyecto y te haremos un presupuesto personalizado sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contacto">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full sm:w-auto"
              >
                Solicitar presupuesto
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
