// TODO: migrar a Supabase — tabla testimonials
import type { Testimonial } from '@/types/index'

export const testimonials: Testimonial[] = [
  {
    id: '1',
    client_name: 'Andrea Mora',
    text: 'Isaías capturó nuestra boda exactamente como queríamos: sin poses forzadas, con mucha emoción. Las fotos superaron todo lo que esperábamos.',
    rating: 5,
    image: null,
    position: 'Boda en San José',
    is_visible: true,
    order: 1,
  },
  {
    id: '2',
    client_name: 'Carlos Jiménez',
    text: 'Contraté a Isaías para las fotos de mi emprendimiento y el resultado fue increíble. Profesional, puntual y con un ojo para los detalles que marca la diferencia.',
    rating: 5,
    image: null,
    position: 'Fotografía comercial',
    is_visible: true,
    order: 2,
  },
  {
    id: '3',
    client_name: 'Sofía Vargas',
    text: 'La sesión familiar fue muy cómoda. Isaías hace que uno se relaje y las fotos se ven completamente naturales. Las atesoro muchísimo.',
    rating: 5,
    image: null,
    position: 'Sesión familiar',
    is_visible: true,
    order: 3,
  },
  {
    id: '4',
    client_name: 'Luis Herrera',
    text: 'Cubrió el quinceaños de mi hija y todas las invitadas quedaron impresionadas con las fotos. Muy recomendado para eventos sociales.',
    rating: 5,
    image: null,
    position: 'Quinceaños en San José',
    is_visible: true,
    order: 4,
  },
]
