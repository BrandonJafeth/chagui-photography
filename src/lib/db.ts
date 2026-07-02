import { supabase } from './supabase'
import type { Service, Package, SiteContent, Testimonial } from '@/types/index'

// ── dev cache (no-op cost in prod: build runs each fn once anyway) ────────────
const _cache = new Map<string, { data: unknown; ts: number }>()
const TTL = 30_000

function fromCache<T>(key: string): T | null {
  const entry = _cache.get(key)
  if (!entry) return null
  if (Date.now() - entry.ts > TTL) { _cache.delete(key); return null }
  return entry.data as T
}
function toCache(key: string, data: unknown) {
  _cache.set(key, { data, ts: Date.now() })
}

// ── mappers ───────────────────────────────────────────────────────────────────

function mapService(row: any): Service {
  return {
    id:                   row.id,
    title:                row.title,
    slug:                 row.slug,
    description:          row.description,
    detailed_description: row.detailed_description ?? null,
    image:                row.image,
    features:             row.features ?? [],
    is_active:            row.is_active,
    order:                row.order,
    faqs: ((row.service_faqs as any[]) ?? [])
      .filter(f => f.is_active !== false)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
      .map(f => ({ q: f.question as string, a: f.answer as string })),
    gallery: ((row.service_gallery as any[]) ?? [])
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
      .map(g => ({ id: g.id as string, image_url: g.image_url as string, caption: (g.caption as string) ?? null, order: g.order as number })),
  }
}

// ── services ──────────────────────────────────────────────────────────────────

export async function getServices(): Promise<Service[]> {
  const hit = fromCache<Service[]>('services')
  if (hit) return hit

  if (!supabase) {
    const { services } = await import('@/data/services')
    const result = services.filter(s => s.is_active).sort((a, b) => a.order - b.order)
    toCache('services', result)
    return result
  }

  const { data, error } = await supabase
    .from('services')
    .select('*, service_faqs(*), service_gallery(*)')
    .eq('is_active', true)
    .order('order')

  if (error) {
    console.error('[db] getServices:', error.message)
    const { services } = await import('@/data/services')
    return services.filter(s => s.is_active).sort((a, b) => a.order - b.order)
  }

  const result = (data ?? []).map(mapService)
  toCache('services', result)
  return result
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  // Reuse cached service list if available — avoids a second network call
  const all = fromCache<Service[]>('services')
  if (all) return all.find(s => s.slug === slug) ?? null

  if (!supabase) {
    const { services } = await import('@/data/services')
    return services.find(s => s.slug === slug && s.is_active) ?? null
  }

  const { data, error } = await supabase
    .from('services')
    .select('*, service_faqs(*), service_gallery(*)')
    .eq('slug', slug)
    .eq('is_active', true)
    .single()

  if (error) {
    const { services } = await import('@/data/services')
    return services.find(s => s.slug === slug && s.is_active) ?? null
  }

  return mapService(data)
}

// ── packages ──────────────────────────────────────────────────────────────────

export async function getPackages(serviceId?: string): Promise<Package[]> {
  const cacheKey = serviceId ? `packages:${serviceId}` : 'packages'
  const hit = fromCache<Package[]>(cacheKey)
  if (hit) return hit

  if (!supabase) {
    const { packages } = await import('@/data/packages')
    const result = packages
      .filter(p => p.is_active && (!serviceId || p.service_id === null || p.service_id === serviceId))
      .sort((a, b) => a.order - b.order)
    toCache(cacheKey, result)
    return result
  }

  const filter = serviceId
    ? `service_id.is.null,service_id.eq.${serviceId}`
    : 'service_id.is.null'

  const { data, error } = await supabase
    .from('packages')
    .select('*')
    .eq('is_active', true)
    .or(filter)
    .order('order')

  if (error) {
    console.error('[db] getPackages:', error.message)
    const { packages } = await import('@/data/packages')
    return packages.filter(p => p.is_active).sort((a, b) => a.order - b.order)
  }

  const result = data ?? []
  toCache(cacheKey, result)
  return result
}

// ── site content ──────────────────────────────────────────────────────────────

export async function getSiteContent(): Promise<SiteContent[]> {
  const hit = fromCache<SiteContent[]>('site_content')
  if (hit) return hit

  const { siteContent } = await import('@/data/site-content')
  toCache('site_content', siteContent)
  return siteContent
}

/** Get a single content value by key. */
export async function getContent(key: string): Promise<string> {
  const all = await getSiteContent()
  return all.find(c => c.key === key)?.value ?? ''
}

// ── testimonials ──────────────────────────────────────────────────────────────

export async function getTestimonials(): Promise<Testimonial[]> {
  const hit = fromCache<Testimonial[]>('testimonials')
  if (hit) return hit

  const { testimonials } = await import('@/data/testimonials')
  const result = testimonials.filter(t => t.is_visible).sort((a, b) => a.order - b.order)
  toCache('testimonials', result)
  return result
}
