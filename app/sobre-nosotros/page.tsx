import Link from "next/link"
import { ArrowLeft, Users, Target, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition">
            <ArrowLeft size={20} />
            Volver
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Sobre WebsCrafting</h1>
          <div className="w-20" /> {/* Spacer */}
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">Hacemos webs que crecen</h2>
          <p className="text-2xl text-muted-foreground text-balance">
            Somos una agencia digital dedicada a crear sitios web modernos, rápidos y optimizados para conversión.
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12 border border-primary/20 mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">Nuestra historia</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            WebsCrafting nació de una simple obsesión: crear webs que funcionan de verdad. No plantillas genéricas, no
            soluciones de baja calidad. Solo sitios web diseñados y desarrollados con atención al detalle, pensando en
            el usuario final y en los resultados que busca tu negocio.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comenzamos trabajando con pequeños negocios locales y hemos ido creciendo porque nuestros clientes ven
            resultados: más tráfico, más conversiones, mejor posicionamiento en buscadores. Cada proyecto es una
            oportunidad para demostrarlo de nuevo.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-background rounded-xl p-8 border border-border">
              <Target className="text-primary mb-4" size={32} />
              <h3 className="text-2xl font-bold text-foreground mb-4">Misión</h3>
              <p className="text-muted-foreground">
                Crear webs de calidad profesional que ayuden a pequeños y medianos negocios a crecer en digital de forma
                sostenible y rentable.
              </p>
            </div>
            <div className="bg-background rounded-xl p-8 border border-border">
              <Zap className="text-primary mb-4" size={32} />
              <h3 className="text-2xl font-bold text-foreground mb-4">Visión</h3>
              <p className="text-muted-foreground">
                Ser el referente en desarrollo web personalizado con SEO integrado, conocidos por entregar resultados
                que generan impacto real en el negocio de nuestros clientes.
              </p>
            </div>
            <div className="bg-background rounded-xl p-8 border border-border">
              <Users className="text-primary mb-4" size={32} />
              <h3 className="text-2xl font-bold text-foreground mb-4">Valores</h3>
              <p className="text-muted-foreground">
                Transparencia, calidad sin compromisos, comunicación cercana y resultados medibles. Trabajamos como si
                fuera nuestro negocio porque creemos en lo que hacemos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center text-balance">
          Qué nos diferencia
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Enfoque centrado en resultados</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              No creamos webs bonitas sin sentido. Cada decisión de diseño, cada línea de código, está pensada para que
              tu web convierta. Medimos éxito en leads, ventas y engagement real.
            </p>
            <ul className="space-y-3">
              {[
                "Análisis profundo de tu negocio",
                "Estrategia clara antes de diseñar",
                "Métricas y seguimiento constante",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">SEO desde el primer día</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Mientras otros agregan SEO después, nosotros lo integramos desde la estructura base. Tu web estará lista
              para posicionarse desde el lanzamiento.
            </p>
            <ul className="space-y-3">
              {["Estructura técnica optimizada", "Meta tags y tags semánticos", "Velocidad de carga maximizada"].map(
                (item, i) => (
                  <li key={i} className="flex items-center gap-2 text-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* Process & Approach */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center text-balance">Nuestro enfoque</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Colaboración cercana</h3>
              <p className="text-primary-foreground/90 leading-relaxed mb-4">
                No desaparecemos después de vender. Trabajamos codo con codo contigo, explicando nuestras decisiones y
                adaptándonos a tu feedback. Tu opinión importa en cada paso.
              </p>
              <p className="text-primary-foreground/90 leading-relaxed">
                Disponibles en comunicación directa, reuniones claras y reportes transparentes. Te mantemos informado
                siempre.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Tecnología moderna</h3>
              <p className="text-primary-foreground/90 leading-relaxed mb-4">
                Usamos las tecnologías más actuales y eficientes: Next.js, React, Tailwind CSS. Garantizamos webs
                rápidas, seguras y fáciles de mantener.
              </p>
              <p className="text-primary-foreground/90 leading-relaxed">
                Escalables desde el primer día. Si tu negocio crece, tu web crece con él sin necesidad de reconstruirla
                desde cero.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground text-lg">Proyectos entregados</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground text-lg">Satisfacción de clientes</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">8+</div>
              <p className="text-muted-foreground text-lg">Años en digital</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">20%</div>
              <p className="text-muted-foreground text-lg">Crecimiento anual</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center text-balance">El equipo</h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          Somos un equipo pequeño pero experto, enfocado en la calidad y los resultados. Cada miembro aporta su
          especialidad para que tu proyecto sea un éxito.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Elena Martínez", role: "Diseñadora UX/UI", exp: "Especialista en diseño centrado en conversión" },
            { name: "Carlos Gómez", role: "Desarrollador Full Stack", exp: "Experto en arquitectura web moderna" },
            {
              name: "Laura Fernández",
              role: "Especialista SEO & Estrategia",
              exp: "Posicionamiento orgánico y análisis",
            },
          ].map((member, i) => (
            <div key={i} className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                <Users size={64} className="text-primary/50" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-primary font-semibold mb-2">{member.role}</p>
              <p className="text-muted-foreground text-sm">{member.exp}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center text-balance">
            Lo que dicen nuestros clientes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "WebsCrafting no solo creó nuestra web, sino que nos enseñó cómo funciona. Transparencia total y resultados reales.",
                author: "María López",
                company: "Asesoría López & Asociados",
              },
              {
                text: "El equipo es profesional y accesible. Entregaron a tiempo y nuestra conversión aumentó un 40% en 3 meses.",
                author: "Roberto Silva",
                company: "Tienda Online Silva",
              },
              {
                text: "Probamos con otras agencias, pero WebsCrafting fue diferente. Nos escucharon, propusieron soluciones inteligentes.",
                author: "Ana García",
                company: "Estudio García Pilates",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-background rounded-xl p-8 border border-border">
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">¿Hablamos sobre tu proyecto?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Nos encantaría conocer tu idea y ayudarte a hacerla realidad.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contacto">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full sm:w-auto"
              >
                Contactar
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
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">© 2025 WebsCrafting. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
