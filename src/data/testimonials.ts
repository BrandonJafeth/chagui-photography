// TODO: migrar a Supabase — tabla testimonials
import type { Testimonial } from '@/types/index'

export const testimonials: Testimonial[] = [
  {
    id: '5',
    client_name: 'Judith',
    text: 'Nos encantó el servicio de fotografía para nuestra boda. El fotógrafo fue muy amable, paciente y súper comunicativo durante todo el día. Quedamos completamente satisfechos con el resultado. ¡Totalmente recomendados!',
    rating: 5,
    image: null,
    position: 'Boda',
    is_visible: true,
    order: 1,
  },
  {
    id: '6',
    client_name: 'Jasmin',
    text: 'Estamos muy satisfechos con el trabajo de fotografía que realizaron en nuestra boda. Cada foto refleja detalles inolvidables de este día tan importante para nosotros. Un trabajo 100% profesional.',
    rating: 5,
    image: null,
    position: 'Boda',
    is_visible: true,
    order: 2,
  },
]
