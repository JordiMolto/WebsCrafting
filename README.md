# WebsCrafting

Sitio web de la agencia WebsCrafting: diseño y desarrollo de páginas web a medida, con un estilo moderno, minimalista y animaciones suaves.

## Stack

- Vue 3 (Composition API)
- Vite 5
- Tailwind CSS v4 (vía `@tailwindcss/postcss`)
- Vue Router

> Nota: El proyecto ha sido refactorizado para ser 100% Vue. Se eliminaron restos de Next/React.

## Requisitos

- Node.js 18+ (recomendado 20+)
- npm (o pnpm/yarn)

## Inicio rápido

```bash
# 1) Instalar dependencias
npm install

# 2) Entorno de desarrollo
npm run dev

# 3) Build producción
npm run build

# 4) Vista previa de la build
npm run preview
```

## Estructura relevante

```
src/
  main.js                 # arranque de la app
  App.vue                 # layout principal (navbar translúcida, footer)
  assets/css/tailwind.css # estilos base + utilidades personalizadas
  components/
    PortfolioCard.vue     # tarjeta del portfolio con zoom de imagen suave
  pages/
    Home.vue              # hero 100vh, indicador de scroll, bloques principales
    Portfolio.vue         # grid minimalista de proyectos
    Services.vue          # servicios con tarjetas "glass" y modal
    About.vue             # sobre nosotros (estilo unificado)
    Blog.vue              # blog con filtros y modal de post
    Contact.vue           # formulario en tarjeta glass y FAQ
router/
  index.js                # rutas + scrollBehavior al top
postcss.config.mjs        # Tailwind v4 vía '@tailwindcss/postcss'
vite.config.js            # alias '@' a ./src
```

## Estilo/UI

- Estética limpia tipo Apple: más aire, tipografía Inter, transparencias y blur.
- Utilidades personalizadas en `src/assets/css/tailwind.css`:
  - `container-xl`: contenedor con anchos y paddings consistentes
  - `glass`: superficies translúcidas con `backdrop-blur` y borde sutil
  - `.zoom-on-hover`: zoom suave (400ms ease-out) solo en la imagen interior
  - Transiciones del acordeón (`accordion-*`) para las FAQ

## Navegación

- `router/index.js` define `scrollBehavior` para llevar siempre al inicio al cambiar de página.

## Despliegue

Genera la build y sirve la carpeta `dist/` en tu plataforma preferida (Netlify, Vercel, GitHub Pages, etc.).

```bash
npm run build
# sube el contenido de dist/ o configura tu proveedor (Vite está soportado por la mayoría)
```

## Licencia

MIT
**_ End Patch_** }‬ ``` }‬ -->
}‬ }‬ }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬
}‬ }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬}
}‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬} }‬‬
}‬} }‬} }‬} }‬} }‬} }‬}
}‬}
}‬} }‬}
\*\*\* End Patch
