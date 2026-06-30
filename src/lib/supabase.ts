// Tipos mantenidos como referencia para la migración futura a Supabase.
// El cliente de Supabase se agregará cuando se implemente el admin.
// TODO: migrar — instalar @supabase/supabase-js y crear el cliente aquí.

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
  created_at: string
  updated_at: string
}

export interface Testimonial {
  id: string
  client_name: string
  text: string
  rating: number
  image: string | null
  position: string | null
  is_visible: boolean
  order: number
  created_at: string
  updated_at: string
}

export interface SiteContent {
  id: string
  key: string
  value: string
  type: string
  metadata: Record<string, unknown> | null
  created_at: string
  updated_at: string
}
