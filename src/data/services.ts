// TODO: migrar a Supabase — tabla services
//
// SCHEMA RECOMENDADO (services ↔ packages):
//   1:many con universal — NO many:many (overkill para este negocio)
//   packages.service_id = null   → universal (aparece en todos los servicios y página de paquetes)
//   packages.service_id = UUID   → específico (solo en la página de ese servicio)
//   Orden de display: específicos primero, universales abajo.
//   Si en el futuro se necesita un paquete en 2 servicios exactos → junction table package_services.
//
// SEO — contenido por página de servicio:
//   - detailed_description: mínimo 3 párrafos, ~300-400 palabras
//   - Incluir keywords: ciudad, tipo de fotografía, contexto local
//   - features: 5-8 items concretos (aparecen como lista en la página)
//   - Cada página genera su propia URL canónica: /servicios/{slug}/
import type { Service } from '@/types/index'

export const services: Service[] = [
  {
    id: '1',
    title: 'Fotografía de Bodas',
    slug: 'bodas',
    description:
      'Tu día más especial merece ser contado con honestidad y emoción. Capturo cada mirada, cada abrazo y cada momento espontáneo que hace única tu historia de amor.',
    detailed_description:
      'La fotografía de bodas en San José no es solo documentar un evento — es preservar la emoción de un día que no se repite. Trabajo con parejas en toda el Gran Área Metropolitana de Costa Rica para crear imágenes auténticas que reflejan quiénes son: sin poses forzadas, sin momentos artificiales. Cada boda es una historia diferente, y mi labor es contarla con honestidad y sensibilidad.\n\nDesde la preparación de los novios hasta el último baile, estoy presente en cada momento. Cubro ceremonias religiosas y civiles en San José, Alajuela, Cartago y Heredia, así como destinos especiales en todo el país. Trabajo con luz natural siempre que es posible, aprovechando los paisajes de Costa Rica para crear imágenes que hablan por sí solas.\n\nEntrego galerías digitales privadas con edición profesional completa, y ofrezco álbumes físicos de alta calidad para quienes desean un recuerdo tangible. Los tiempos de entrega son concretos y los respeto — porque sé que la espera de las fotos también es parte de la experiencia.\n\nSi estás buscando un fotógrafo de bodas en San José, Costa Rica que entienda la importancia del momento y lo capture sin interrumpirlo, me encantaría conocer su historia.',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
    features: [
      'Cobertura desde la preparación hasta el baile final',
      'Fotografía de ceremonia religiosa o civil',
      'Sesión de pareja incluida (trash the dress opcional)',
      'Edición profesional con estilo documental y emocional',
      'Galería digital privada de alta resolución',
      'Álbum físico premium disponible',
      'Cobertura en todo San José y el GAM',
      'Entrega puntual con fechas comprometidas',
    ],
    is_active: true,
    order: 1,
  },
  {
    id: '2',
    title: 'Sesiones de Retrato',
    slug: 'retratos',
    description:
      'Sesiones personales, familiares o de parejas en locaciones de San José y Costa Rica. Capturo tu esencia en imágenes que reflejan quién sos realmente.',
    detailed_description:
      'Una sesión de retratos es mucho más que tomarse fotos — es un espacio para mostrarte tal como sos. Trabajo con personas, parejas y familias en locaciones al aire libre o interiores en San José y sus alrededores, creando imágenes naturales donde la personalidad de cada quien tiene espacio para aparecer.\n\nDirijo la sesión con calma: sugiero poses, aprovecho la luz del momento y creo un ambiente relajado para que no te sientas frente a una cámara, sino frente a alguien que te está escuchando. El resultado son imágenes que te van a gustar porque te reconocés en ellas — no porque parecen de catálogo.\n\nLas sesiones son ideales para personas que quieren fotos profesionales para LinkedIn o redes sociales, parejas que buscan un recuerdo auténtico, o familias que quieren documentar un momento de vida juntos. También hago sesiones de maternidad, quinceaños y graduaciones en locaciones especiales de San José como el Parque La Sabana, Hatillo, San Pedro y zonas aledañas.\n\nTodas las sesiones incluyen dirección completa, selección de las mejores imágenes y edición profesional. Entrega en alta resolución lista para imprimir o compartir.',
    image:
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=80',
    features: [
      'Sesiones individuales, de pareja o familiares',
      'Locaciones al aire libre o interiores en San José',
      'Dirección de poses y asesoría de imagen',
      'Sesiones de maternidad y embarazo',
      'Fotos profesionales para LinkedIn y redes sociales',
      'Selección y edición completa de imágenes',
      'Entrega en alta resolución',
      'Quinceaños y graduaciones incluidas',
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
      'Los eventos especiales ocurren una vez, y merecen ser documentados con la misma atención que una boda. Cubro quinceaños, graduaciones, cumpleaños, bautizos, primeras comuniones y eventos corporativos en San José y toda el área metropolitana de Costa Rica. Mi enfoque es documental: capturo lo que ocurre de forma natural, sin interrumpir el flujo del evento.\n\nPara eventos sociales como quinceaños y graduaciones, trabajo de cerca con la familia para entender qué momentos son prioritarios: la entrada, el vals, los discursos, los reencuentros. En eventos corporativos, me adapto al protocolo de la empresa para obtener imágenes que comunican profesionalismo y presencia de marca sin entorpecer la dinámica del evento.\n\nOfrezco cobertura por horas para eventos cortos, o cobertura completa para eventos de día entero. La galería digital se entrega en un plazo corto, ideal para empresas que necesitan contenido rápido para sus redes o comunicaciones internas. Para eventos que requieren dos ángulos simultáneos, coordino con un segundo fotógrafo de confianza.\n\nSi buscás un fotógrafo de eventos en San José, Costa Rica que entienda tanto los momentos formales como los espontáneos, con experiencia en todo tipo de celebraciones, estoy disponible para tu fecha.',
    image:
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80',
    features: [
      'Quinceaños, graduaciones y celebraciones familiares',
      'Eventos corporativos y de empresa',
      'Cobertura por horas o evento completo',
      'Bautizos, primeras comuniones y eventos religiosos',
      'Fotografía de grupos grandes y detalles',
      'Enfoque documental — sin interrumpir el evento',
      'Entrega rápida de galería digital',
      'Disponibilidad fines de semana y feriados',
    ],
    is_active: true,
    order: 3,
  },
  {
    id: '4',
    title: 'Fotografía Comercial',
    slug: 'comercial',
    description:
      'Imágenes para tu negocio, productos, redes sociales y marca personal en San José, Costa Rica. Calidad profesional que comunica el valor real de lo que ofrecés.',
    detailed_description:
      'Las imágenes de tu negocio son lo primero que ve un cliente potencial. Una foto de mala calidad no solo no vende — comunica descuido. La fotografía comercial en Costa Rica ha crecido enormemente con el auge del comercio digital, y las marcas que invierten en imágenes profesionales lo notan directamente en sus ventas y en cómo las percibe su mercado.\n\nTrabajo con emprendedores, restaurantes, tiendas y empresas en San José y el GAM para crear contenido visual que refleja el valor real de sus productos o servicios. Fotografío productos para e-commerce, platos para menús digitales y físicos, espacios para hostales o negocios, y personas para branding personal o corporativo. El objetivo es siempre el mismo: que quien vea la imagen quiera lo que estás vendiendo.\n\nPara sesiones de contenido para redes sociales, trabajo con el calendario editorial del cliente para producir un banco de imágenes que dure semanas o meses. Entrego las fotos en formatos optimizados para Instagram, Facebook, WhatsApp Business y sitios web — sin que el cliente tenga que hacer nada técnico después.\n\nSi sos emprendedor o tenés un negocio en San José y necesitás imágenes que vendan, puedo ayudarte a crear contenido visual consistente y de calidad que comunique lo que tu marca realmente vale.',
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80',
    features: [
      'Fotografía de producto para e-commerce y catálogos',
      'Contenido para redes sociales (Instagram, Facebook)',
      'Sesiones de branding personal y corporativo',
      'Fotografía de restaurantes y menús digitales',
      'Imágenes para sitios web y materiales de marketing',
      'Entrega en formatos para web y print',
      'Pack de imágenes mensuales para redes sociales',
      'Disponible para empresas en San José y el GAM',
    ],
    is_active: true,
    order: 4,
  },
]
