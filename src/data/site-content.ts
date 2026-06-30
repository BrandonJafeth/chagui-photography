// TODO: migrar a Supabase — tabla site_content
import type { SiteContent } from '@/types/index'

export const siteContent: SiteContent[] = [
  { id: '1', key: 'hero_title',    value: 'Momentos que permanecen',                                                   type: 'text', metadata: null },
  { id: '2', key: 'hero_subtitle', value: 'Fotografía profesional en San José, Costa Rica',                            type: 'text', metadata: null },
  { id: '3', key: 'about_title',   value: 'Sobre mí',                                                                  type: 'text', metadata: null },
  { id: '4', key: 'about_subtitle',value: 'Fotógrafo profesional con más de 25 años de experiencia en San José, Costa Rica.', type: 'text', metadata: null },
  {
    id: '5',
    key: 'about_text',
    value:
      'Soy Isaías Díaz, fotógrafo profesional con más de 25 años de experiencia, dedicado a capturar emociones auténticas, sonrisas espontáneas y esos momentos únicos que muchas veces pasan desapercibidos. Mi estilo se caracteriza por fotografiar con naturalidad, logrando imágenes llenas de vida y sentimiento, incluso cuando las personas no se dan cuenta de que están siendo retratadas.\n\n' +
      'A lo largo de mi trayectoria, he tenido el privilegio de brindar un servicio de calidad, logrando que cada cliente quede satisfecho y encantado con el resultado final. Cada sesión fotográfica es una oportunidad para crear recuerdos inolvidables que podrán disfrutar y revivir por generaciones.\n\n' +
      'Porque los momentos pasan… las fotografías los hacen eternos.',
    type: 'text',
    metadata: null,
  },
  {
    id: '6',
    key: 'about_image_url',
    value: 'https://res.cloudinary.com/daqragn9m/image/upload/v1782781402/libreria-chagui-sobre-nosotros_euzjwr.jpg',
    type: 'image',
    metadata: { alt: 'Isaías Díaz García, fotógrafo profesional en San José San José' },
  },
  { id: '7', key: 'contact_email',  value: 'isaiasdg14@hotmail.com',   type: 'text', metadata: null },
  { id: '8', key: 'contact_phone',  value: '+506 8554-6933',           type: 'text', metadata: null },
  { id: '9', key: 'contact_whatsapp', value: '50685546933',            type: 'text', metadata: null },
]

/** Helper: get a value by key */
export function getContent(key: string): string {
  return siteContent.find((c) => c.key === key)?.value ?? ''
}
