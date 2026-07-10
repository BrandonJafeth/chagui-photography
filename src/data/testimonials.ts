// TODO: migrar a Supabase — tabla testimonials
import type { Testimonial } from '@/types/index'

export const testimonials: Testimonial[] = [
  {
    id: '1',
    client_name: 'Judith',
    text: 'Nos encantó el servicio de fotografía para nuestra boda. El fotógrafo fue muy amable, paciente y súper comunicativo durante todo el día. Quedamos completamente satisfechos con el resultado. ¡Totalmente recomendados!',
    rating: 5,
    image: null,
    position: 'Boda',
    is_visible: true,
    order: 1,
  },
  {
    id: '2',
    client_name: 'Jasmin',
    text: 'Estamos muy satisfechos con el trabajo de fotografía que realizaron en nuestra boda. Cada foto refleja detalles inolvidables de este día tan importante para nosotros. Un trabajo 100% profesional.',
    rating: 5,
    image: null,
    position: 'Boda',
    is_visible: true,
    order: 2,
  },
  {
    id: '3',
    client_name: 'Joseliy',
    text: 'Muy agradecidos completamente en todo el sentido de la palabra con el servicio profesional que nos brindan siempre Isaías y su esposa,el respeto,precio trato para con el cliente marca la diferencia y por eso y muchas cosas más los seguimos haciendo parte de nuestros eventos especiales; ya llevan con nosotros desde té de cocina ,bodas ,baby shower y Siempre es una tranquilidad saber que si están, todos los momentos especiales serán captados de la mejor manera.',
    rating: 5,
    image: null,
    position: 'Boda',
    is_visible: true,
    order: 3,
  }
]
