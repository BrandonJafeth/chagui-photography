// TODO: migrar a Supabase — tabla services
import type { Service } from '@/types/index'

export const services: Service[] = [
  {
    id: '1',
    title: 'Fotografía de Bodas',
    slug: 'bodas',
    description:
      'Tu día más especial merece ser contado con honestidad y emoción. Capturo cada mirada, cada abrazo y cada momento espontáneo que hace única tu historia.',
    detailed_description:
      'Cobertura completa desde la preparación hasta el baile. Entrega de galería digital con edición profesional y álbum físico opcional.',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
    features: [
      'Cobertura completa del evento',
      'Fotografía de preparación de novios',
      'Sesión de pareja incluida',
      'Edición profesional de cada imagen',
      'Galería digital privada',
    ],
    is_active: true,
    order: 1,
  },
  {
    id: '2',
    title: 'Sesiones de Retrato',
    slug: 'retratos',
    description:
      'Sesiones personales, familiares o de parejas en locaciones de San José. Capturo tu esencia en imágenes que reflejan quién sos.',
    detailed_description:
      'Sesión de 1-2 horas en locación acordada. Incluye selección de imágenes y edición completa.',
    image:
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=80',
    features: [
      'Sesión en exteriores o interiores',
      'Dirección de pose y asesoría',
      'Galería de selección digital',
      'Edición con estilo propio',
      'Entrega en alta resolución',
    ],
    is_active: true,
    order: 2,
  },
  {
    id: '3',
    title: 'Eventos y Celebraciones',
    slug: 'eventos',
    description:
      'Quinceaños, cumpleaños, graduaciones, eventos corporativos. Documento cada momento con dinamismo y atención al detalle que los hace perdurar.',
    detailed_description:
      'Cobertura fotográfica de eventos sociales y corporativos en San José y zonas aledañas.',
    image:
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80',
    features: [
      'Cobertura por horas o evento completo',
      'Fotografía de grupos y detalles',
      'Entrega rápida de galería',
      'Edición con estilo documental',
      'Disponibilidad fines de semana',
    ],
    is_active: true,
    order: 3,
  },
  {
    id: '4',
    title: 'Fotografía Comercial',
    slug: 'comercial',
    description:
      'Imágenes para tu negocio, productos, redes sociales y marca personal. Calidad profesional que comunica el valor real de lo que ofrecés.',
    detailed_description:
      'Sesiones de producto, branding y contenido para redes sociales. Ideal para emprendedores y empresas en San José.',
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80',
    features: [
      'Fotografía de producto en estudio',
      'Contenido para redes sociales',
      'Sesiones de branding personal',
      'Entrega en formatos para web y print',
      'Pack de imágenes optimizadas',
    ],
    is_active: true,
    order: 4,
  },
]
