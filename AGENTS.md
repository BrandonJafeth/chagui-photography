# AGENTS.md — Isaías Fotografía (sitio público)

## Proyecto

Sitio web público de fotografía profesional para **Isaías Díaz García**, fotógrafo en Hatillo, San José, Costa Rica. Sitio estático, dark-first, contenido hardcoded. Sin admin todavía, sin Supabase en runtime, sin portafolio/galería.

---

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Astro 5 (output: static) |
| UI interactivo | React islands (`client:load`) |
| Estilos | Tailwind CSS v4 (vite plugin) |
| Tipos | TypeScript |
| Fuente | Work Sans (Google Fonts) |
| Deploy objetivo | Vercel / cualquier static host |

**No hay:** Next.js, Prisma, tRPC, NextAuth, Resend, Supabase runtime, Vitest, Playwright, Husky, Cloudinary SDK.

---

## Estructura de carpetas

```
src/
  assets/hero/          ← Imágenes hero locales (agregar aquí para reemplazar placeholders)
  components/
    react/              ← React islands (ContactFormWA.tsx, NavbarMobile.tsx, HeroGallery.tsx)
    layout/             ← Navbar, Footer, ScrollToTop, WhatsAppButton
    Hero.astro
    About.astro
    Services.astro
    Packages.astro
    Testimonials.astro
    Contact.astro
  data/                 ← Contenido hardcoded (migrar a Supabase cuando esté el admin)
    services.ts
    packages.ts
    site-content.ts
    testimonials.ts
    footer.json
  layouts/
    Layout.astro         ← SEO, dark-first, schema.org
  pages/
    index.astro
    servicios.astro
    sobre-mi.astro
    contacto.astro
  styles/
    global.css
  types/
    index.ts             ← Tipos que replican tablas Supabase
  lib/
    supabase.ts          ← Solo tipos, sin cliente (TODO: agregar cliente cuando se integre admin)
```

---

## Modelo de datos (contrato para migración a Supabase)

Los tipos en `src/types/index.ts` y los datos en `src/data/` replican exactamente la forma de las tablas futuras. Para migrar: cambiar el import de `src/data/X.ts` a una query de Supabase.

### `site_content`
```typescript
{ id, key, value, type: 'text'|'image'|'url'|'json', metadata }
```
Keys en uso: `hero_title`, `hero_subtitle`, `about_title`, `about_subtitle`, `about_text`, `about_image_url`, `contact_email`, `contact_phone`, `contact_whatsapp`

### `services`
```typescript
{ id, title, slug, description, detailed_description, image, features: string[], is_active, order }
```
Slugs: `bodas`, `retratos`, `eventos`, `comercial`

### `packages` _(tabla nueva, no existía en modelo original)_
```typescript
{ id, name, price, price_label, description, includes: string[], image, service_id, is_active, order }
```

### `testimonials`
```typescript
{ id, client_name, text, rating, image, position, is_visible, order }
```

---

## Cliente

| Campo | Valor |
|-------|-------|
| Nombre | Isaías Díaz García |
| WhatsApp | +506 8554-6933 |
| Email | isaiasdg14@hotmail.com |
| Ubicación | Hatillo, San José, Costa Rica |
| SEO target | "fotógrafo Hatillo", "fotógrafo San José Costa Rica" |

---

## Tema y estilos

- **Siempre dark:** `class="dark"` fijo en `<html>`. Sin toggle de tema.
- Paleta heredada de Gadea ISO: `dark: #0d0d0d`, `light: #ffffff`.
- Textos sobre negro: `text-white`, `text-white/70`, `text-white/50`, `text-white/30`.
- Bordes: `border-white/10`, `border-white/20`.
- Acentos: blanco puro (`bg-white text-black` para CTAs primarios).
- Fuente: Work Sans (300–700).

---

## Contacto

Formulario (`ContactFormWA.tsx`) genera URL de WhatsApp y abre en pestaña nueva. Sin backend, sin API routes, sin Supabase, sin Resend.

```
https://wa.me/50685546933?text=...
```

---

## Sin portafolio

No hay galería, portafolio, filtros de categoría ni páginas de detalle de servicio en este proyecto. Se añadirán cuando se implemente el admin si el cliente lo solicita.

---

## Comandos

```bash
npm run dev      # Astro dev server en localhost:4321
npm run build    # Build estático a dist/
npm run preview  # Preview del build
```

---

## Pendiente (para cuando se haga el admin)

- [ ] Panel admin en repo separado (Next.js + Supabase Auth)
- [ ] Agregar cliente Supabase en `src/lib/supabase.ts`
- [ ] Migrar `src/data/*.ts` a queries de Supabase
- [ ] Cloudinary uploads desde admin, URLs guardadas en Supabase
- [ ] Portafolio/galería (opcional, según cliente)
- [ ] Formulario de contacto con inserción en tabla `contact_messages`
- [ ] Imágenes hero locales en `src/assets/hero/` (actualmente placeholders de Unsplash)
- [ ] Dominio real en `astro.config.mjs` → `site`
