// TODO: migrar a Supabase — tabla packages
//
// ESQUEMA: service_id = null en todos los paquetes actuales → universales.
// El admin crea paquetes igual, solo deja "Categoría" vacía para que sean generales.
// Si en el futuro Isaías quiere paquetes específicos por ocasión (ej. solo bodas),
// el admin asigna service_id y el frontend filtra por servicio automáticamente.
import type { Package } from '@/types/index'

export const packages: Package[] = [
  {
    id: 'pkg-esencial',
    name: 'Esencial',
    description: 'Cobertura de los momentos principales de tu evento.',
    includes: [
      'Cobertura 4 horas',
      '150 fotografías editadas',
      'Galería digital privada',
      'Entrega en 10 días hábiles',
    ],
    image: null,
    service_id: null,
    is_active: true,
    order: 1,
  },
  {
    id: 'pkg-clasico',
    name: 'Clásico',
    description: 'Cobertura completa con sesión de retrato incluida.',
    is_featured: true,
    includes: [
      'Cobertura 8 horas',
      '300 fotografías editadas',
      'Sesión de retrato incluida',
      'Galería digital privada',
      'Álbum físico 20×20 cm',
      'Entrega en 15 días hábiles',
    ],
    image: null,
    service_id: null,
    is_active: true,
    order: 2,
  },
  {
    id: 'pkg-premium',
    name: 'Premium',
    description: 'La experiencia completa para que no se pierda ningún detalle.',
    includes: [
      'Cobertura 12 horas',
      '500+ fotografías editadas',
      '2 fotógrafos',
      'Sesión de retrato y preparación',
      'Galería digital privada',
      'Álbum premium 30×30 cm',
      'Entrega en 20 días hábiles',
    ],
    image: null,
    service_id: null,
    is_active: true,
    order: 3,
  },
]
