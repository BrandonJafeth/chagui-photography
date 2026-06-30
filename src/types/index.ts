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
export interface Package {
  id: string
  name: string
  price: number | null
  price_label: string          // "Desde ₡150,000" o "Consultar"
  description: string
  includes: string[]
  image: string | null
  service_id: string           // FK → services.id
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
