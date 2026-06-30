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
      'Fotógrafo de bodas en Costa Rica — San José, Guanacaste, Manuel Antonio y todo el país. Capturo cada emoción y momento único de tu día más especial con honestidad y sensibilidad.',
    detailed_description:
      'La fotografía de bodas no es solo documentar un evento — es preservar la emoción de un día que no se repite. Trabajo con parejas en toda Costa Rica para crear imágenes auténticas que reflejan quiénes son: sin poses forzadas, sin momentos artificiales. Cada boda es una historia diferente, y mi labor es contarla con honestidad y sensibilidad.\n\nDesde la preparación de los novios hasta el último baile, estoy presente en cada momento. Cubro ceremonias religiosas y civiles en todo el país: San José, Alajuela, Cartago y Heredia en el Valle Central, bodas de destino en Guanacaste, Manuel Antonio, Monteverde, el Caribe costarricense y cualquier rincón del país donde quieran celebrar. Trabajo con luz natural siempre que es posible, aprovechando los paisajes únicos de Costa Rica para crear imágenes que hablan por sí solas.\n\nEntrego galerías digitales privadas con edición profesional completa, y ofrezco álbumes físicos de alta calidad para quienes desean un recuerdo tangible. Los tiempos de entrega son concretos y los respeto — porque sé que la espera de las fotos también es parte de la experiencia.\n\nSi estás buscando un fotógrafo de bodas en Costa Rica que entienda la importancia del momento y lo capture sin interrumpirlo, me encantaría conocer su historia.',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
    features: [
      'Cobertura desde la preparación hasta el baile final',
      'Fotografía de ceremonia religiosa o civil',
      'Sesión de pareja incluida (trash the dress opcional)',
      'Edición profesional con estilo documental y emocional',
      'Galería digital privada de alta resolución',
      'Álbum físico premium disponible',
      'Cobertura en todo Costa Rica — bodas de destino bienvenidas',
      'Entrega puntual con fechas comprometidas',
    ],
    faqs: [
      {
        q: '¿Cubre bodas fuera de San José?',
        a: 'Sí, fotografío bodas en toda Costa Rica: Guanacaste, Manuel Antonio, Monteverde, el Caribe y cualquier destino. El traslado se coordina según la locación de la boda.',
      },
      {
        q: '¿Con cuánto tiempo de anticipación hay que reservar?',
        a: 'Lo ideal es reservar con 3 a 6 meses de anticipación, especialmente en temporada alta (diciembre–febrero y julio–agosto). Para fechas muy solicitadas, cuanto antes mejor.',
      },
      {
        q: '¿Qué incluye la cobertura de la boda?',
        a: 'Fotografía desde los preparativos de los novios hasta el cierre de la recepción, edición profesional completa y galería digital privada en alta resolución. Álbumes físicos disponibles como complemento.',
      },
      {
        q: '¿Hacen bodas de destino en playa o montaña?',
        a: 'Sí. Bodas en playa, haciendas, jardines, hoteles boutique o cualquier espacio que elijan los novios, en cualquier provincia del país.',
      },
    ],
    is_active: true,
    order: 1,
  },
  {
    id: '2',
    title: 'Sesiones de Retrato',
    slug: 'retratos',
    description:
      'Sesiones de retratos individuales, familiares y de parejas en cualquier parte de Costa Rica. Imágenes naturales que reflejan quién sos realmente — sin poses forzadas.',
    detailed_description:
      'Una sesión de retratos es mucho más que tomarse fotos — es un espacio para mostrarte tal como sos. Trabajo con personas, parejas y familias en locaciones al aire libre o interiores en cualquier parte de Costa Rica, creando imágenes naturales donde la personalidad de cada quien tiene espacio para aparecer.\n\nDirijo la sesión con calma: sugiero poses, aprovecho la luz del momento y creo un ambiente relajado para que no te sientas frente a una cámara, sino frente a alguien que te está escuchando. El resultado son imágenes que te van a gustar porque te reconocés en ellas — no porque parecen de catálogo.\n\nLas sesiones son ideales para personas que quieren fotos profesionales para LinkedIn o redes sociales, parejas que buscan un recuerdo auténtico, o familias que quieren documentar un momento de vida juntos. También hago sesiones de maternidad, quinceaños y graduaciones en locaciones especiales en todo el país — parques, playas, montañas, zonas urbanas o donde vos elijas: San José, Guanacaste, el Pacífico, el Caribe o cualquier provincia de Costa Rica.\n\nTodas las sesiones incluyen dirección completa, selección de las mejores imágenes y edición profesional. Entrega en alta resolución lista para imprimir o compartir.',
    image:
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=80',
    features: [
      'Sesiones individuales, de pareja o familiares',
      'Disponible en toda Costa Rica — viajo a su locación',
      'Dirección de poses y asesoría de imagen',
      'Sesiones de maternidad y embarazo',
      'Fotos profesionales para LinkedIn y redes sociales',
      'Selección y edición completa de imágenes',
      'Entrega en alta resolución',
      'Quinceaños y graduaciones incluidas',
    ],
    faqs: [
      {
        q: '¿Dónde se realizan las sesiones de retrato?',
        a: 'En cualquier locación de Costa Rica — parques, playas, zonas urbanas, estudios o interiores. Me desplazo al lugar que vos elijas, sin importar la provincia.',
      },
      {
        q: '¿Cuánto dura una sesión de retratos?',
        a: 'Entre 1 y 2 horas según el paquete. Es tiempo suficiente para que te relajes y obtengamos imágenes variadas, naturales y con diferentes ambientes.',
      },
      {
        q: '¿Las fotos sirven para LinkedIn o redes sociales?',
        a: 'Sí. Las sesiones incluyen orientación para perfil profesional y entrega en formatos optimizados para LinkedIn, Instagram y otras plataformas digitales.',
      },
      {
        q: '¿Hacen sesiones de maternidad, quinceaños y graduaciones?',
        a: 'Sí. Cubrimos sesiones de maternidad, quinceaños, graduaciones y celebraciones personales en cualquier parte de Costa Rica, en la locación que prefieras.',
      },
    ],
    is_active: true,
    order: 2,
  },
  {
    id: '3',
    title: 'Eventos y Celebraciones',
    slug: 'eventos',
    description:
      'Fotógrafo de eventos en Costa Rica — quinceaños, graduaciones, cumpleaños y eventos corporativos en todo el país. Cobertura profesional con enfoque documental.',
    detailed_description:
      'Los eventos especiales ocurren una vez, y merecen ser documentados con la misma atención que una boda. Cubro quinceaños, graduaciones, cumpleaños, bautizos, primeras comuniones y eventos corporativos en todo Costa Rica — San José, Alajuela, Heredia, Cartago, Guanacaste, Puntarenas, Limón y más. Viajo al lugar de su evento sin importar la provincia. Mi enfoque es documental: capturo lo que ocurre de forma natural, sin interrumpir el flujo del evento.\n\nPara eventos sociales como quinceaños y graduaciones, trabajo de cerca con la familia para entender qué momentos son prioritarios: la entrada, el vals, los discursos, los reencuentros. En eventos corporativos, me adapto al protocolo de la empresa para obtener imágenes que comunican profesionalismo y presencia de marca sin entorpecer la dinámica del evento.\n\nOfrezco cobertura por horas para eventos cortos, o cobertura completa para eventos de día entero. La galería digital se entrega en un plazo corto, ideal para empresas que necesitan contenido rápido para sus redes o comunicaciones internas. Para eventos que requieren dos ángulos simultáneos, coordino con un segundo fotógrafo de confianza.\n\nSi buscás un fotógrafo de eventos en San José, Costa Rica que entienda tanto los momentos formales como los espontáneos, con experiencia en todo tipo de celebraciones, estoy disponible para tu fecha.',
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
    faqs: [
      {
        q: '¿Fotografían eventos fuera de San José?',
        a: 'Sí, viajo a cualquier provincia de Costa Rica — Guanacaste, Puntarenas, Limón, Alajuela, Heredia y más — para quinceaños, graduaciones, cumpleaños y eventos corporativos.',
      },
      {
        q: '¿Cubren graduaciones universitarias y de colegio?',
        a: 'Sí. Fotografiamos ceremonias de graduación universitarias y de colegio en toda Costa Rica, incluyendo la sesión con familia y los momentos espontáneos del evento.',
      },
      {
        q: '¿Con cuánto tiempo de anticipación hay que contratar?',
        a: 'Para quinceaños y graduaciones, lo ideal es reservar con 1 a 3 meses de anticipación para asegurar disponibilidad en la fecha del evento.',
      },
      {
        q: '¿Fotografían eventos corporativos y de empresa?',
        a: 'Sí. Cubrimos lanzamientos, conferencias, actividades de team building y eventos de empresa con enfoque profesional adaptado al protocolo de cada organización.',
      },
    ],
    is_active: true,
    order: 3,
  },
  {
    id: '4',
    title: 'Bautizos y Sacramentos',
    slug: 'sacramentos',
    description:
      'Fotografía de bautizos, primeras comuniones y confirmaciones en toda Costa Rica. Capturo la emoción y espiritualidad de cada sacramento con respeto y naturalidad.',
    detailed_description:
      'Los sacramentos son momentos únicos en la vida de una familia — celebraciones de fe que merecen ser recordadas con la misma emoción con que se viven. Fotografío bautizos, primeras comuniones y confirmaciones en toda Costa Rica, dentro y fuera de la iglesia, con un enfoque natural y respetuoso que no interrumpe la solemnidad del momento.\n\nTrabajo en silencio durante la ceremonia, moviéndome con discreción para capturar los gestos, las miradas y los abrazos que ocurren de forma espontánea: el momento del agua en el bautizo, la primera vez que reciben la hostia, el abrazo del padrino, las lágrimas del abuelo. Esos son los instantes que valen.\n\nDespués de la ceremonia, si la familia desea una sesión más posada — con el niño en su traje, con los padrinos o con la familia completa — coordinamos ese espacio sin apuro. También cubro las celebraciones posteriores: almuerzos, reuniones familiares y los momentos informales que muchas veces son los más queridos en el álbum.\n\nDisponible en toda Costa Rica para bautizos, primeras comuniones, confirmaciones y cualquier celebración religiosa o espiritual. Contactame para coordinar tu fecha.',
    image:
      'https://images.unsplash.com/photo-1566516171511-1c411a59c8ba?w=1200&q=80',
    features: [
      'Bautizos de bebés y adultos — cualquier rito o confesión',
      'Primeras comuniones: ceremonia y celebración familiar',
      'Confirmaciones y otros sacramentos religiosos',
      'Cobertura discreta durante la ceremonia en iglesia',
      'Sesión posada post-ceremonia con familia y padrinos',
      'Cobertura de la celebración o almuerzo posterior',
      'Disponible en toda Costa Rica — viajo a su parroquia',
      'Entrega de galería digital completa en alta resolución',
    ],
    faqs: [
      {
        q: '¿Cubren bautizos y comuniones fuera de San José?',
        a: 'Sí, viajo a cualquier parroquia o locación en Costa Rica para fotografiar bautizos, primeras comuniones y confirmaciones, sin importar la provincia.',
      },
      {
        q: '¿Interrumpen la ceremonia religiosa?',
        a: 'No. Trabajo con total discreción durante la ceremonia — sin flash invasivo ni interrupciones. La familia raramente nota mi presencia, lo que permite capturar momentos completamente naturales.',
      },
      {
        q: '¿Cubren la celebración después del sacramento?',
        a: 'Sí. La cobertura puede incluir el almuerzo o reunión familiar posterior al sacramento, capturando los momentos informales y espontáneos que muchas veces son los más queridos del álbum.',
      },
      {
        q: '¿Cuánto dura la cobertura de un bautizo o primera comunión?',
        a: 'Típicamente entre 3 y 5 horas: preparativos, ceremonia en la iglesia y celebración posterior. La cobertura se adapta a las necesidades y duración de cada familia y evento.',
      },
    ],
    is_active: true,
    order: 4,
  },
]
