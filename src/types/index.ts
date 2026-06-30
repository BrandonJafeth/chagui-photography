// Tipos que replican exactamente la forma de las tablas futuras en Supabase.
// Cuando se migre al admin, cambiar el import de src/data/ a la query de Supabase.

export interface Service {
  id: string
  title: string
  slug: string
  description: string
  detailed_description: string | null
  image: string
  features: string[]
  is_active: boolean
  order: number
}

// TODO: migrar a Supabase — tabla packages
//
// DECISIÓN DE ESQUEMA: service_id es nullable.
//   null  → paquete universal (aplica a cualquier ocasión — bodas, graduaciones, bautizos, etc.)
//   UUID  → paquete específico de un servicio (feature futura, admin lo asigna)
//
// En Supabase:
//   service_id UUID REFERENCES services(id) ON DELETE SET NULL  ← nullable FK
//
// Admin: crear paquete con "Categoría: Sin categoría / General" = service_id NULL.
// Frontend: si service_id es null → mostrar siempre; si no → filtrar por servicio.
export interface Package {
  id: string
  name: string
  description: string
  includes: string[]
  image: string | null
  service_id: string | null    // null = universal; UUID = específico de servicio
  is_active: boolean
  is_featured?: boolean        // destacado visual — el admin lo controla
  order: number
}

export interface SiteContent {
  id: string
  key: string
  value: string
  type: 'text' | 'image' | 'url' | 'json'
  metadata: Record<string, unknown> | null
}

export interface Testimonial {
  id: string
  client_name: string
  text: string
  rating: number               // 1–5
  image: string | null
  position: string | null
  is_visible: boolean
  order: number
}
