export interface AllergenFoodItem {
  id: string;
  name: string;
  group: 'proteina' | 'lacteo' | 'pescado' | 'cereal_gluten' | 'frutos_secos' | 'frutas' | 'legumbres' | 'prohibido';
  groupLabel: string;
  icon: string;
  recommendedAge: string;
  minMonth: number;
  safePresentation: string;
  tips: string;
  isForbiddenUnder12m?: boolean;
  isChokingHazard?: boolean;
  statusTag?: 'Seguro desde 6m' | '6 a 9 meses' | '6 a 7 meses' | 'A partir de 12m' | 'Solo +12m' | '🚫 Prohibido 6-24m';
}

export interface AllergenSymptom {
  id: string;
  title: string;
  description: string;
  severity: 'grave' | 'moderada' | 'alerta';
  icon: string;
}

export interface ActionStep {
  step: number;
  title: string;
  description: string;
  type: 'calma' | 'retirar' | 'leve' | 'urgencia';
  icon: string;
  highlight?: boolean;
}

export const ALLERGENS_TABLE: AllergenFoodItem[] = [
  {
    id: 'huevo',
    name: 'Huevo (Clara y Yema)',
    group: 'proteina',
    groupLabel: 'Proteínas',
    icon: '🥚',
    recommendedAge: 'Desde los 6 meses',
    minMonth: 6,
    safePresentation: 'Huevo bien cocido (hervido mínimo 10-12 min), triturado, desmenuzado o en tortilla fina bien cuajada.',
    tips: 'Ofrecer clara y yema juntas bien cocinadas. Nunca crudo ni a medio cocer.',
    statusTag: 'Seguro desde 6m'
  },
  {
    id: 'pescado_blanco',
    name: 'Pescado Blanco (Merluza, Bacalao, Lenguado)',
    group: 'pescado',
    groupLabel: 'Pescados',
    icon: '🐟',
    recommendedAge: 'Desde los 6 meses',
    minMonth: 6,
    safePresentation: 'Al vapor, hervido o a la plancha, minuciosamente desmenuzado con los dedos y 100% libre de espinas.',
    tips: 'Revisar con los dedos a contraluz para asegurar cero espinas.',
    statusTag: 'Seguro desde 6m'
  },
  {
    id: 'pescado_azul',
    name: 'Pescado Azul (Salmón, Sardina fresca, Caballa pequeña)',
    group: 'pescado',
    groupLabel: 'Pescados',
    icon: '🍣',
    recommendedAge: '6 a 9 meses',
    minMonth: 6,
    safePresentation: 'Cocido o al horno, en pequeñas cantidades, bien desmenuzado sin espinas.',
    tips: 'Excelente fuente de Omega-3 y DHA para el desarrollo cerebral. Evitar pescados grandes con alto mercurio (atún rojo, pez espada).',
    statusTag: '6 a 9 meses'
  },
  {
    id: 'lacteos_pasteurizados',
    name: 'Lácteos (Yogur natural, Queso pasteurizado)',
    group: 'lacteo',
    groupLabel: 'Lácteos',
    icon: '🧀',
    recommendedAge: 'Desde los 6 meses',
    minMonth: 6,
    safePresentation: 'Yogur natural entero sin azúcar ni edulcorantes, quesos frescos suaves pasteurizados y bajos en sodio (tipo ricotta o mozzarella pasteurizada).',
    tips: 'Siempre revisar que sean elaborados con leche 100% pasteurizada.',
    statusTag: 'Seguro desde 6m'
  },
  {
    id: 'leche_vaca_liquida',
    name: 'Leche de Vaca Líquida (Vaso entero)',
    group: 'lacteo',
    groupLabel: 'Lácteos',
    icon: '🥛',
    recommendedAge: 'A partir de los 12 meses',
    minMonth: 12,
    safePresentation: 'Como bebida principal en vaso o taza solo después de los 12 meses. Antes del año, solo en pequeñas cantidades como ingrediente en preparaciones (ej. tortitas o puré).',
    tips: 'Antes de los 12 meses la leche materna o de fórmula debe ser la principal fuente láctea.',
    statusTag: 'A partir de 12m'
  },
  {
    id: 'legumbres',
    name: 'Legumbres (Lentejas, Garbanzos, Alubias)',
    group: 'legumbres',
    groupLabel: 'Legumbres',
    icon: '🫘',
    recommendedAge: 'Desde los 6 meses',
    minMonth: 6,
    safePresentation: 'Trituradas o en purés suaves al inicio; luego enteras bien cocidas y aplastadas ligeramente con tenedor.',
    tips: 'Aportan hierro vegetal de alta calidad. Acompañar con vitamina C (gotitas de limón o tomate) para máxima absorción.',
    statusTag: 'Seguro desde 6m'
  },
  {
    id: 'gluten',
    name: 'Gluten (Pan, Pasta, Avena, Trigo)',
    group: 'cereal_gluten',
    groupLabel: 'Cereales & Gluten',
    icon: '🌾',
    recommendedAge: '6 a 7 meses',
    minMonth: 6,
    safePresentation: 'Introducir en pequeñas cantidades progresivas: corteza de pan grande sin miga, pasta bien cocida o gachas de avena suaves.',
    tips: 'No retrasar su introducción. La exposición temprana y gradual favorece la tolerancia digestiva.',
    statusTag: '6 a 7 meses'
  },
  {
    id: 'frutos_secos_seguros',
    name: 'Frutos Secos (Cacahuete, Almendra, Nuez)',
    group: 'frutos_secos',
    groupLabel: 'Frutos Secos',
    icon: '🥜',
    recommendedAge: 'Desde los 6 meses',
    minMonth: 6,
    safePresentation: 'SIEMPRE molidos en polvo muy fino o en mantequilla/crema 100% frutos secos sin azúcar ni sal, diluida en yogur o puré. ¡NUNCA ENTEROS!',
    tips: 'Nunca ofrecer el fruto seco entero ni en trozos antes de los 5-6 años por riesgo mortal de atragantamiento.',
    statusTag: 'Seguro desde 6m'
  },
  {
    id: 'soja',
    name: 'Soja & Tofu',
    group: 'proteina',
    groupLabel: 'Proteínas Vegetales',
    icon: '🌱',
    recommendedAge: 'Desde los 6 meses',
    minMonth: 6,
    safePresentation: 'Tofu suave o firme bien cocido cortado en bastoncitos tiernos, o productos de soja cocidos y pasteurizados.',
    tips: 'Excelente proteína vegetal de fácil digestión.',
    statusTag: 'Seguro desde 6m'
  },
  {
    id: 'fresas_frutos_rojos',
    name: 'Fresas y Frutos Rojos (Arándanos, Frambuesas)',
    group: 'frutas',
    groupLabel: 'Frutas',
    icon: '🍓',
    recommendedAge: 'Desde los 6 meses',
    minMonth: 6,
    safePresentation: 'Fresas maduras cortadas en láminas finas o puré. Arándanos SIEMPRE aplastados uno a uno con los dedos o triturados (nunca redondos enteros).',
    tips: 'Pueden provocar un enrojecimiento peribucal leve por acidez de contacto sin ser una verdadera alergia.',
    statusTag: 'Seguro desde 6m'
  },
  {
    id: 'mariscos',
    name: 'Mariscos (Gambas, Langostinos, Calamar)',
    group: 'pescado',
    groupLabel: 'Mariscos',
    icon: '🦐',
    recommendedAge: 'A partir de los 12 meses',
    minMonth: 12,
    safePresentation: 'Siempre perfectamente cocidos (hervidos o a la plancha completa), en porciones pequeñas, picados muy finos y sin cabezas de crustáceos (evitar cadmio).',
    tips: 'Ofrecer siempre de día y en cantidades controladas.',
    statusTag: 'A partir de 12m'
  },
  {
    id: 'miel_prohibida',
    name: 'Miel de Abeja 🚫',
    group: 'prohibido',
    groupLabel: 'Alimentos Prohibidos',
    icon: '🍯',
    recommendedAge: 'Solo después de los 12 meses',
    minMonth: 12,
    safePresentation: 'PROHIBIDA totalmente antes del año de vida en cualquier forma (cruda, cocinada, en galletas o infusiones).',
    tips: 'Riesgo grave de botulismo infantil causado por esporas de Clostridium botulinum.',
    isForbiddenUnder12m: true,
    statusTag: 'Solo +12m'
  },
  {
    id: 'atragantamiento_prohibidos',
    name: 'Frutos secos enteros, uvas enteras, palomitas, caramelos duros 🚫',
    group: 'prohibido',
    groupLabel: 'Alimentos Prohibidos',
    icon: '🛑',
    recommendedAge: 'Evitar en todo el rango 6–24 meses (hasta los 5 años)',
    minMonth: 60,
    safePresentation: 'TOTALMENTE PROHIBIDOS. Uvas y tomates cherry solo deben darse cortados longitudinalmente en 4 partes (a lo largo).',
    tips: 'Principal causa de asfixia y atragantamiento infantil mecánico.',
    isChokingHazard: true,
    statusTag: '🚫 Prohibido 6-24m'
  }
];

export const ALERT_SYMPTOMS: AllergenSymptom[] = [
  {
    id: 'enrojecimiento',
    title: 'Enrojecimiento cutáneo o Ronchas (Urticaria)',
    description: 'Aparición repentina de habones rojos con picazón intensa en cara, tronco o extremidades.',
    severity: 'moderada',
    icon: '🔴'
  },
  {
    id: 'hinchazon',
    title: 'Hinchazón de labios, lengua, párpados o rostro (Angioedema)',
    description: 'Inflamación visible y rápida de los tejidos faciales o bucales.',
    severity: 'grave',
    icon: '👄'
  },
  {
    id: 'digestivos',
    title: 'Vómitos repetidos o Diarrea inmediata',
    description: 'Rechazo gástrico repentino, vómitos en proyectil o deposiciones líquidas inmediatamente tras la ingesta.',
    severity: 'grave',
    icon: '🤢'
  },
  {
    id: 'respiratorio',
    title: 'Tos persistente, silbidos o dificultad para respirar (Estridor)',
    description: 'Respiración ruidosa, agitación, tiraje intercostal o dificultad severa para inhalar.',
    severity: 'grave',
    icon: '🫁'
  },
  {
    id: 'conductual',
    title: 'Llanto inconsolable e irritabilidad aguda',
    description: 'Malestar general severo, decaimiento o somnolencia anormal acompañado de los síntomas anteriores.',
    severity: 'alerta',
    icon: '😭'
  }
];

export const HOW_TO_ACT_STEPS: ActionStep[] = [
  {
    step: 1,
    title: 'Mantén la calma y observa la reacción',
    description: 'No entres en pánico. Observa el tipo de manifestación en piel, respiración y estado de ánimo del bebé.',
    type: 'calma',
    icon: '🧘'
  },
  {
    step: 2,
    title: 'Retira el alimento y anota cuál fue',
    description: 'Lava suavemente la boca y manos del bebé con agua tibia. Guarda el empaque o foto del alimento exacto y la hora de ingesta.',
    type: 'retirar',
    icon: '📝'
  },
  {
    step: 3,
    title: 'Si la reacción es leve (solo sarpullido local o rojez)',
    description: 'Suspende el alimento, toma fotos para el registro médico y contacta al pediatra para valoración sin demora.',
    type: 'leve',
    icon: '🩺'
  },
  {
    step: 4,
    title: 'Si es GRAVE (dificultad respiratoria, hinchazón de boca o lengua)',
    description: 'ACUDE DE INMEDIATO A URGENCIAS PEDIÁTRICAS o llama a emergencias (112 / 911). No des líquidos ni medicamentos sin indicación médica urgente.',
    type: 'urgencia',
    icon: '🚨',
    highlight: true
  }
];

export const SAFETY_RECOMMENDATIONS = [
  {
    title: 'Regla de Oro: Un alérgeno nuevo cada 3 días',
    description: 'Introduce únicamente un alimento potencialmente alérgeno nuevo a la vez y mantenlo durante 3 días consecutivos para identificar con certeza cualquier reacción tardía.',
    icon: '⏱️'
  },
  {
    title: 'Horario seguro: Mañana o Mediodía (Nunca de noche)',
    description: 'Ofrécelo siempre en el desayuno o almuerzo en casa, nunca en la cena o antes de dormir, para poder vigilar al bebé despierto durante las siguientes 4 a 6 horas.',
    icon: '☀️'
  },
  {
    title: 'Postura segura: Bebé erguido y 100% supervisado',
    description: 'Siempre con el bebé bien sentado en su trona con la espalda recta (90°) y bajo supervisión visual continua de un adulto responsable.',
    icon: '👶'
  },
  {
    title: 'Plan de contingencia preparado',
    description: 'Ten siempre agua cerca y, si existen antecedentes familiares o alergias ya diagnosticadas, mantén a mano el protocolo y medicación prescrita por el especialista.',
    icon: '🛡️'
  },
  {
    title: 'Modelado parental familiar',
    description: '«Para que ellos coman verduras, primero tienes que comerlas tú». Los bebés aprenden por imitación activa en la mesa familiar compartida.',
    icon: '🥗'
  }
];

export const FOOD_GROUPS_BALANCE = [
  {
    id: 'verduras',
    name: 'Verduras',
    icon: '🥦',
    color: 'bg-emerald-50 text-emerald-900 border-emerald-200',
    dotColor: 'bg-emerald-500',
    desc: 'Fibra, vitaminas A, C, ácido fólico y minerales esenciales.'
  },
  {
    id: 'proteinas',
    name: 'Proteínas',
    icon: '🍗',
    color: 'bg-amber-50 text-amber-900 border-amber-200',
    dotColor: 'bg-amber-500',
    desc: 'Huevos, pescados, legumbres, carnes magras y tofu para crecimiento celular.'
  },
  {
    id: 'frutas',
    name: 'Frutas',
    icon: '🍎',
    color: 'bg-rose-50 text-rose-900 border-rose-200',
    dotColor: 'bg-rose-500',
    desc: 'Antioxidantes, hidratación natural y vitaminas en texturas seguras.'
  },
  {
    id: 'cereales',
    name: 'Cereales',
    icon: '🌾',
    color: 'bg-yellow-50 text-yellow-900 border-yellow-200',
    dotColor: 'bg-yellow-500',
    desc: 'Avena, arroz, maíz, quinoa y trigo integral.'
  },
  {
    id: 'hidratos',
    name: 'Hidratos & Tubérculos',
    icon: '🥔',
    color: 'bg-orange-50 text-orange-900 border-orange-200',
    dotColor: 'bg-orange-500',
    desc: 'Patata, camote (boniato), plátano macho y energía de combustión lenta.'
  }
];
