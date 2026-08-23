export interface FacebookGuidanceLink {
  id: string;
  title: string;
  subtitle: string;
  category: 'nutricion' | 'blw' | 'pediatria' | 'comunidad' | 'recetas' | 'crianza';
  categoryLabel: string;
  badge: string;
  url: string;
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
  description: string;
  highlights: string[];
  topics: string[];
}

export const FACEBOOK_GUIDANCE_LINKS: FacebookGuidanceLink[] = [
  {
    id: 'fb-orientacion-1',
    title: 'Orientación en Alimentación Complementaria & BLW',
    subtitle: 'Comunidad de apoyo para el inicio de sólidos y cortes seguros',
    category: 'blw',
    categoryLabel: 'BLW & Texturas',
    badge: 'Comunidad Activa',
    url: 'https://www.facebook.com/share/1EHMMrbMUS/',
    icon: '🥣',
    color: 'text-emerald-700',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    description:
      'Espacio dedicado a resolver dudas del día a día sobre la transición de la leche materna/fórmula a los alimentos sólidos, cortes seguros según el método BLW/BLISS y recetas adaptadas.',
    highlights: [
      'Fotos y ejemplos de cortes por edades',
      'Casos reales y resolución de dudas comunes',
      'Consejos para superar el miedo a las arcadas (gagging)'
    ],
    topics: ['BLW', 'Papillas', 'Cortes Seguros', '6-12 Meses']
  },
  {
    id: 'fb-orientacion-2',
    title: 'Nutrición Infantil y Menús Saludables',
    subtitle: 'Pautas nutricionales, balance de hierro y combinaciones óptimas',
    category: 'nutricion',
    categoryLabel: 'Nutrición Pediátrica',
    badge: 'Recomendado',
    url: 'https://www.facebook.com/share/19568Lq1fi/',
    icon: '🥑',
    color: 'text-teal-700',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    description:
      'Guías nutricionales actualizadas basadas en directrices pediátricas. Aprende a balancear platos con fuentes de hierro, grasas esenciales (DHA) y vitaminas clave.',
    highlights: [
      'Combinaciones para potenciar la absorción de hierro',
      'Ideas de desayunos, comidas y cenas equilibradas',
      'Sustituciones para alergias o intolerancias comunes'
    ],
    topics: ['Hierro & Vitamina C', 'Grasas Buenas', 'Plato Saludable']
  },
  {
    id: 'fb-orientacion-3',
    title: 'Recetas Prácticas para Bebés y Primeros Sólidos',
    subtitle: 'Ideas rápidas, congelación y cocina fácil para toda la familia',
    category: 'recetas',
    categoryLabel: 'Recetario Familiar',
    badge: 'Tips Prácticos',
    url: 'https://www.facebook.com/share/18PTffLrQJ/',
    icon: '👩‍🍳',
    color: 'text-amber-700',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    description:
      'Inspiración culinaria diaria con recetas sin sal ni azúcares añadidos. Incluye técnicas de batch cooking y conservación de porciones para ahorrar tiempo.',
    highlights: [
      'Recetas de 15 minutos con pocos ingredientes',
      'Técnicas de conservación en congelador y nevera',
      'Adaptación del menú familiar para el bebé'
    ],
    topics: ['Batch Cooking', 'Sin Sal ni Azúcar', 'Snacks Nutritivos']
  },
  {
    id: 'fb-orientacion-4',
    title: 'Crianza Respetuosa y Acompañamiento en la Mesa',
    subtitle: 'Ambiente positivo en las comidas y gestión del rechazo alimentario',
    category: 'crianza',
    categoryLabel: 'Psicología & Crianza',
    badge: 'Orientación Familiar',
    url: 'https://www.facebook.com/share/1DYJACjNNf/',
    icon: '🌱',
    color: 'text-purple-700',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    description:
      'Aprende a respetar las señales de saciedad y hambre de tu bebé sin presiones, amenazas ni sobornos, fomentando una relación sana y placentera con la comida desde el primer día.',
    highlights: [
      'Cómo actuar ante la neofobia o etapas de poco apetito',
      'Creación de rutinas y ambiente libre de pantallas',
      'Autorregulación y autonomía en la hora de comer'
    ],
    topics: ['Sin Presión', 'Autorregulación', 'Cero Pantallas']
  },
  {
    id: 'fb-orientacion-5',
    title: 'Consultas, Dudas y Experiencias de Mamás & Papás',
    subtitle: 'Red de apoyo mutuo y testimonios de alimentación complementaria',
    category: 'comunidad',
    categoryLabel: 'Comunidad de Padres',
    badge: 'Red de Apoyo',
    url: 'https://www.facebook.com/share/18S4yyXNij/',
    icon: '💬',
    color: 'text-sky-700',
    bgColor: 'bg-sky-50',
    borderColor: 'border-sky-200',
    description:
      'Un grupo cálido y empático donde compartir tus dudas cotidianas, logros en la mesita, fotos de platos y recibir apoyo de otras familias que están pasando por la misma etapa.',
    highlights: [
      'Intercambio de experiencias y trucos cotidianos',
      'Preguntas frecuentes moderadas por madres con experiencia',
      'Compañerismo y tranquilidad en momentos de incertidumbre'
    ],
    topics: ['Preguntas y Respuestas', 'Testimonios', 'Apoyo']
  },
  {
    id: 'fb-orientacion-6',
    title: 'Seguridad Infantil, Alérgenos y Primeros Auxilios',
    subtitle: 'Regla de 3 días, introducción de alérgenos y prevención de riesgos',
    category: 'pediatria',
    categoryLabel: 'Salud & Seguridad',
    badge: 'Imprescindible',
    url: 'https://www.facebook.com/share/1DQ6ydZhLV/',
    icon: '🛡️',
    color: 'text-rose-700',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    description:
      'Información preventiva sobre cómo introducir alérgenos mayores (huevo, maní/cacahuate, pescado, lácteos) según evidencia médica, reconocer reacciones alérgicas y primeros auxilios.',
    highlights: [
      'Protocolos paso a paso para introducción temprana',
      'Diferencias entre alergias mediadas y no mediadas',
      'Normas de seguridad ambiental en la trona/sillita'
    ],
    topics: ['Alérgenos', 'Seguridad en Trona', 'Regla 3 Días']
  }
];
