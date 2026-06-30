# CLAUDE.md — Isaías Fotografía

## Qué es este proyecto

Sitio web público estático de fotografía para **Isaías Díaz García**, fotógrafo en Hatillo, San José, Costa Rica. Contenido 100% hardcoded en `src/data/`. Sin admin, sin Supabase runtime, sin portafolio.

## Stack real

- **Astro 5** (`output: 'static'`, trailing slash enabled)
- **React islands** — solo para interactividad (formulario WhatsApp, navbar mobile)
- **Tailwind CSS v4** — vite plugin, dark mode via `class` strategy
- **TypeScript** estricto
- **Work Sans** (Google Fonts)

No hay: Next.js, Prisma, tRPC, NextAuth, Resend, Supabase (runtime), Vitest, Playwright, Cloudinary SDK, theme toggle.

## Tema

**Siempre dark.** `class="dark"` hardcodeado en `<html>`. No hay toggle de tema. Todos los estilos usan el prefijo `dark:` o directamente colores oscuros. El `body` es `bg-black text-white`.

## Paleta (heredada de Gadea ISO, sin cambios)

| Token | Valor |
|-------|-------|
| `dark` | `#0d0d0d` |
| `light` | `#ffffff` |
| Fondo base | `#000000` / `#070707` |
| Texto primario | `white` |
| Texto secundario | `white/70`, `white/50` |
| Bordes | `white/10`, `white/20` |
| CTA primario | `bg-white text-black` |

## Dónde está el contenido

Todo en `src/data/`. Cambiar datos ahí. Cada archivo tiene comentario `// TODO: migrar a Supabase — tabla X`.

| Archivo | Qué contiene |
|---------|-------------|
| `services.ts` | 4 servicios (bodas, retratos, eventos, comercial) |
| `packages.ts` | Paquetes con precio, agrupados por service_id |
| `site-content.ts` | Textos del hero, about, datos de contacto |
| `testimonials.ts` | 4 testimonios hardcoded |
| `footer.json` | Links, contacto, redes |

## Hero

Imágenes en el array `HERO_IMAGES` al inicio de `src/components/Hero.astro`. Cambiar las URLs o reemplazar por imports locales de `src/assets/hero/`. Ken Burns + slide automático cada 6s, sin React (vanilla JS en Astro script).

## Formulario de contacto

`src/components/react/ContactFormWA.tsx` — genera URL de WhatsApp y abre en pestaña nueva. Sin backend, sin API. WhatsApp: `50685546933`.

## SEO target

"fotógrafo Hatillo", "fotógrafo San José Costa Rica", "fotografía de bodas San José". Schema.org: `ProfessionalService` con dirección Hatillo.

## Lo que NO existe

- Portafolio / galería — no implementado y no planificado por ahora
- Admin panel — en repo separado, posterior
- Supabase en runtime — futuro
- Theme toggle — eliminado, siempre dark

## Tipos (contrato Supabase futuro)

`src/types/index.ts`: `Service`, `Package`, `SiteContent`, `Testimonial`. Replican exactamente las columnas de las tablas futuras. Cuando se migre al admin, cambiar import de `src/data/X` a query Supabase.

## Comandos

```bash
npm run dev      # localhost:4321
npm run build    # dist/ estático
npm run preview  # preview del build
```

## Reglas para agentes / ediciones

1. No introducir Supabase/Cloudinary en runtime sin instrucción explícita.
2. No agregar portafolio/galería.
3. Siempre dark — no agregar theme toggle.
4. CTAs primarios: `bg-white text-black`. Bordes: `border-white/20`.
5. `focus-visible:outline-2 focus-visible:outline-white` para accesibilidad (no usar `outline` solo junto a `outline-2`).
6. Tailwind v4: usar clases canónicas (`min-h-11` no `min-h-[44px]`, `bg-linear-to-r` no `bg-gradient-to-r`, etc.).
7. Para datos: editar `src/data/` + el tipo correspondiente en `src/types/index.ts`.