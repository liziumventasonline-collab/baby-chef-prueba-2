export interface PlannerDay {
  dayName: 'Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes' | 'Sábado' | 'Domingo';
  desayuno: string;
  almuerzo: string;
  cena: string;
  snack: string;
}

export interface PlannerShoppingCategory {
  category: 'Verduras' | 'Proteínas' | 'Frutas' | 'Cereales' | 'Lácteos' | 'Otros';
  icon: string;
  items: string[];
}

export interface PlannerWeek {
  weekNumber: number; // 1 to 24
  title: string;
  subtitle: string;
  stageName: string;
  stageAgeRange: string; // e.g. "6 a 8 meses", "9 a 12 meses", "12 a 18 meses", "18 a 24 meses"
  stageEmoji: string;
  themeColor: {
    bgLight: string;
    border: string;
    headerBg: string;
    badgeBg: string;
    badgeText: string;
    accent: string;
  };
  days: PlannerDay[];
  shoppingList: PlannerShoppingCategory[];
  rawShoppingText: string[];
}

export const PLANNER_WELCOME = {
  title: '¡Bienvenida, Mamá! 🌸',
  subtitle: 'Planner Semanal de Alimentación Infantil (24 Semanas)',
  body: 'Este planner está diseñado para acompañarte durante los primeros meses de la alimentación de tu bebé. Aquí encontrarás menús semanales listos en tablas completas, listas de compras ilustradas y sugerencias prácticas para cada etapa.',
  quote: 'No busques hacerlo perfecto, busca hacerlo con amor.',
  coverBadge: '🍼 BEBÉ FELIZ EN LA MESA – PLANNER SEMANAL (24 SEMANAS)'
};

export const PLANNER_FINAL_TIPS = [
  {
    number: 1,
    title: 'Cada bebé tiene su propio ritmo',
    icon: '🌼',
    description: 'No compares los hábitos alimenticios de tu bebé con los de otros. Algunos comerán más, otros menos, y eso está bien. Lo importante es respetar su ritmo y señales de saciedad. Si tu bebé rechaza un alimento, no te preocupes: vuelve a ofrecerlo en otro momento.',
    highlight: 'La clave está en la paciencia y la constancia, no en la cantidad.'
  },
  {
    number: 2,
    title: 'Variedad ante todo',
    icon: '🥦',
    description: 'Ofrece distintos colores, texturas y sabores desde temprano. Esto ayudará a que tu bebé acepte más alimentos en el futuro y disfrute comer. Usa frutas, verduras, cereales y proteínas variadas. ¡El plato colorido siempre invita a probar!',
    highlight: 'Un bebé curioso en la mesa hoy, será un niño que ama la comida sana mañana.'
  },
  {
    number: 3,
    title: 'Mantén un ambiente tranquilo',
    icon: '🍼',
    description: 'Evita pantallas o distracciones durante las comidas. Siéntate con tu bebé, háblale, muéstrale los alimentos, deja que los toque y los explore. Los momentos de comida también son de vínculo y aprendizaje.',
    highlight: 'Tu presencia y tu calma son el mejor condimento.'
  },
  {
    number: 4,
    title: 'Cuida la seguridad alimentaria',
    icon: '🍎',
    description: 'Introduce un alimento nuevo a la vez. Espera 3 días antes de introducir otro. Observa posibles reacciones alérgicas (ronchas, vómito, hinchazón o dificultad para respirar). Cocina siempre los alimentos hasta que estén bien blandos. Evita trozos duros o redondos (uvas enteras, nueces, trozos grandes de manzana, zanahoria cruda, etc.).',
    highlight: 'Ante cualquier duda, consulta con tu pediatra antes de hacer cambios grandes en la dieta.'
  },
  {
    number: 5,
    title: 'Involucra a toda la familia',
    icon: '🥰',
    description: 'Come junto a tu bebé siempre que puedas. Que vea que todos disfrutan los mismos alimentos lo motiva a imitar y probar cosas nuevas. Además, crear una rutina familiar a la hora de comer fortalece el vínculo y reduce la ansiedad.',
    highlight: 'El ejemplo es el mejor maestro.'
  },
  {
    number: 6,
    title: 'No te sientas culpable',
    icon: '🧡',
    description: 'Algunas comidas saldrán perfectas, otras no. Algunos días comerá todo, otros apenas probará. ¡Y eso está bien! Recuerda: estás haciendo lo mejor que puedes, con amor, paciencia y dedicación.',
    highlight: 'Eres la mejor mamá que tu bebé podría tener. No lo olvides.'
  },
  {
    number: 7,
    title: 'Organízate sin agobios',
    icon: '🧾',
    description: 'Usa este planner y las listas semanales como una guía flexible, no como una obligación. Cambia ingredientes según temporada o gustos. Aprovecha sobras y adapta las texturas según el avance de tu bebé.',
    highlight: 'Tu tranquilidad es el ingrediente principal en esta etapa.'
  },
  {
    number: 8,
    title: 'Celebra cada logro',
    icon: '💛',
    description: 'Desde el primer bocado hasta su primera comida con trocitos… ¡cada paso cuenta! Guarda recuerdos, toma fotos, anota los alimentos nuevos que le encantaron y disfruta ver cómo crece tu pequeño gourmet.',
    highlight: 'Cada comida es una historia de amor y crecimiento.'
  }
];

export const PLANNER_FINAL_MESSAGE = {
  quote: 'Alimentar a tu bebé no se trata solo de comida… se trata de amor, confianza y conexión. Permítete disfrutar el proceso, sin miedo ni culpa. Estás construyendo hábitos saludables para toda la vida. 💚'
};

export const PLANNER_24_WEEKS: PlannerWeek[] = [
  // =========================================================================
  // ETAPA 1: 6 A 8 MESES (SEMANAS 1 A 6)
  // =========================================================================
  {
    weekNumber: 1,
    title: 'Semana 1: Texturas suaves y primeras papillas',
    subtitle: 'Texturas suaves, primeras combinaciones y papillas de un solo ingrediente.',
    stageName: 'Etapa 1',
    stageAgeRange: '6 a 8 meses',
    stageEmoji: '🍼',
    themeColor: {
      bgLight: 'bg-teal-50',
      border: 'border-teal-200',
      headerBg: 'from-teal-600 to-emerald-600',
      badgeBg: 'bg-teal-100',
      badgeText: 'text-teal-800',
      accent: 'teal'
    },
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Papilla de plátano',
        almuerzo: 'Puré de calabaza',
        cena: 'Puré de zanahoria',
        snack: 'Compota de manzana'
      },
      {
        dayName: 'Martes',
        desayuno: 'Papilla de pera',
        almuerzo: 'Puré de camote',
        cena: 'Puré de papa',
        snack: 'Compota de pera'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Papilla de manzana',
        almuerzo: 'Puré de calabacín',
        cena: 'Puré de zanahoria y papa',
        snack: 'Puré de plátano'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Papilla de avena y plátano',
        almuerzo: 'Puré de calabaza con pollo',
        cena: 'Puré de batata',
        snack: 'Compota mixta'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Papilla de pera y manzana',
        almuerzo: 'Puré de calabacín con arroz',
        cena: 'Puré de zanahoria',
        snack: 'Yogur natural'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Papilla de mango',
        almuerzo: 'Puré de camote y pollo',
        cena: 'Puré de brócoli',
        snack: 'Compota de manzana'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Papilla de avena y pera',
        almuerzo: 'Puré de papa y calabaza',
        cena: 'Puré de batata',
        snack: 'Compota de pera'
      }
    ],
    shoppingList: [
      {
        category: 'Verduras',
        icon: '🥦',
        items: ['Calabaza (1)', 'Zanahoria (3)', 'Camote (2)', 'Calabacín (2)', 'Papa (3)', 'Brócoli (1)']
      },
      {
        category: 'Proteínas',
        icon: '🍗',
        items: ['Pollo (200 g)']
      },
      {
        category: 'Frutas',
        icon: '🍎',
        items: ['Plátano (3)', 'Pera (3)', 'Manzana (3)', 'Mango (1)']
      },
      {
        category: 'Cereales',
        icon: '🌾',
        items: ['Avena (250 g)', 'Arroz (1 taza)']
      },
      {
        category: 'Lácteos',
        icon: '🧀',
        items: ['Yogur natural (500 g)']
      }
    ],
    rawShoppingText: [
      '🥦 Verduras: calabaza (1), zanahoria (3), camote (2), calabacín (2), papa (3), brócoli (1)',
      '🍗 Proteínas: pollo (200 g)',
      '🍎 Frutas: plátano (3), pera (3), manzana (3), mango (1)',
      '🌾 Cereales: avena (250 g), arroz (1 taza)',
      '🧀 Lácteos: yogur natural (500 g)'
    ]
  },
  {
    weekNumber: 2,
    title: 'Semana 2: Explorando nuevas combinaciones',
    subtitle: 'Introducción gradual de lentejas cocidas y sabores suaves.',
    stageName: 'Etapa 1',
    stageAgeRange: '6 a 8 meses',
    stageEmoji: '🗓️',
    themeColor: {
      bgLight: 'bg-teal-50',
      border: 'border-teal-200',
      headerBg: 'from-teal-600 to-cyan-700',
      badgeBg: 'bg-teal-100',
      badgeText: 'text-teal-800',
      accent: 'teal'
    },
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Papilla de avena y pera',
        almuerzo: 'Puré de calabaza y zanahoria',
        cena: 'Puré de papa y pollo',
        snack: 'Compota de manzana'
      },
      {
        dayName: 'Martes',
        desayuno: 'Papilla de plátano y yogur',
        almuerzo: 'Puré de camote y calabacín',
        cena: 'Puré de batata',
        snack: 'Compota de pera'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Papilla de manzana y canela',
        almuerzo: 'Puré de brócoli con papa',
        cena: 'Puré de zanahoria y lentejas',
        snack: 'Yogur natural'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Papilla de avena y mango',
        almuerzo: 'Puré de calabaza y pollo',
        cena: 'Puré de calabacín y arroz',
        snack: 'Compota mixta'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Papilla de pera',
        almuerzo: 'Puré de camote con zanahoria',
        cena: 'Puré de batata y lentejas',
        snack: 'Compota de manzana'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Papilla de plátano y manzana',
        almuerzo: 'Puré de calabaza y papa',
        cena: 'Puré de brócoli',
        snack: 'Yogur natural'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Papilla de mango',
        almuerzo: 'Puré de arroz y pollo',
        cena: 'Puré de camote y calabacín',
        snack: 'Compota mixta'
      }
    ],
    shoppingList: [
      {
        category: 'Verduras',
        icon: '🥦',
        items: ['Calabaza (1)', 'Zanahoria (3)', 'Camote (3)', 'Calabacín (2)', 'Papa (2)', 'Brócoli (1)']
      },
      {
        category: 'Proteínas',
        icon: '🍗',
        items: ['Pollo (250 g)', 'Lentejas cocidas (1 taza)']
      },
      {
        category: 'Frutas',
        icon: '🍎',
        items: ['Plátano (3)', 'Pera (3)', 'Manzana (2)', 'Mango (1)']
      },
      {
        category: 'Cereales',
        icon: '🌾',
        items: ['Avena (250 g)', 'Arroz (1 taza)']
      },
      {
        category: 'Lácteos',
        icon: '🧀',
        items: ['Yogur natural (500 g)']
      }
    ],
    rawShoppingText: [
      '🥦 Verduras: calabaza (1), zanahoria (3), camote (3), calabacín (2), papa (2), brócoli (1)',
      '🍗 Proteínas: pollo (250 g), lentejas cocidas (1 taza)',
      '🍎 Frutas: plátano (3), pera (3), manzana (2), mango (1)',
      '🌾 Cereales: avena (250 g), arroz (1 taza)',
      '🧀 Lácteos: yogur natural (500 g)'
    ]
  },
  {
    weekNumber: 3,
    title: 'Semana 3: Introduciendo texturas más firmes',
    subtitle: 'Incorporación de guisantes/arvejas y variedad en cereales.',
    stageName: 'Etapa 1',
    stageAgeRange: '6 a 8 meses',
    stageEmoji: '🗓️',
    themeColor: {
      bgLight: 'bg-teal-50',
      border: 'border-teal-200',
      headerBg: 'from-teal-600 to-emerald-700',
      badgeBg: 'bg-teal-100',
      badgeText: 'text-teal-800',
      accent: 'teal'
    },
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Papilla de pera y avena',
        almuerzo: 'Puré de calabaza y pollo',
        cena: 'Puré de papa con aceite de oliva',
        snack: 'Compota de manzana'
      },
      {
        dayName: 'Martes',
        desayuno: 'Papilla de plátano y mango',
        almuerzo: 'Puré de camote y arroz',
        cena: 'Puré de brócoli y zanahoria',
        snack: 'Yogur natural'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Papilla de manzana y canela',
        almuerzo: 'Puré de calabacín con pollo',
        cena: 'Puré de batata',
        snack: 'Compota de pera'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Papilla de avena con fruta mixta',
        almuerzo: 'Puré de calabaza y papa',
        cena: 'Puré de calabacín',
        snack: 'Compota de mango'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Papilla de pera y yogur',
        almuerzo: 'Puré de camote y pollo',
        cena: 'Puré de zanahoria y lentejas',
        snack: 'Compota de manzana'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Papilla de plátano y manzana',
        almuerzo: 'Puré de batata con guisantes',
        cena: 'Puré de papa',
        snack: 'Yogur natural'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Papilla de mango',
        almuerzo: 'Puré de calabaza con arroz',
        cena: 'Puré de calabacín y zanahoria',
        snack: 'Compota mixta'
      }
    ],
    shoppingList: [
      {
        category: 'Verduras',
        icon: '🥦',
        items: ['Calabaza (1)', 'Zanahoria (3)', 'Camote (3)', 'Calabacín (2)', 'Papa (2)', 'Brócoli (1)', 'Guisantes (1 taza)']
      },
      {
        category: 'Proteínas',
        icon: '🍗',
        items: ['Pollo (250 g)', 'Lentejas cocidas (1 taza)']
      },
      {
        category: 'Frutas',
        icon: '🍎',
        items: ['Plátano (3)', 'Pera (3)', 'Manzana (2)', 'Mango (1)']
      },
      {
        category: 'Cereales',
        icon: '🌾',
        items: ['Avena (250 g)', 'Arroz (1 taza)']
      },
      {
        category: 'Lácteos',
        icon: '🧀',
        items: ['Yogur natural (500 g)']
      }
    ],
    rawShoppingText: [
      '🥦 Verduras: calabaza (1), zanahoria (3), camote (3), calabacín (2), papa (2), brócoli (1), guisantes (1 taza)',
      '🍗 Proteínas: pollo (250 g), lentejas cocidas (1 taza)',
      '🍎 Frutas: plátano (3), pera (3), manzana (2), mango (1)',
      '🌾 Cereales: avena (250 g), arroz (1 taza)',
      '🧀 Lácteos: yogur natural (500 g)'
    ]
  },
  {
    weekNumber: 4,
    title: 'Semana 4: Combinaciones de sabores',
    subtitle: 'Nuevos aromas con canela suave, mezclas de tubérculos y frutas.',
    stageName: 'Etapa 1',
    stageAgeRange: '6 a 8 meses',
    stageEmoji: '🍼',
    themeColor: {
      bgLight: 'bg-teal-50',
      border: 'border-teal-200',
      headerBg: 'from-teal-600 to-cyan-600',
      badgeBg: 'bg-teal-100',
      badgeText: 'text-teal-800',
      accent: 'teal'
    },
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Papilla de avena y pera',
        almuerzo: 'Puré de calabaza con pollo',
        cena: 'Puré de camote y calabacín',
        snack: 'Compota de manzana y plátano'
      },
      {
        dayName: 'Martes',
        desayuno: 'Papilla de avena con manzana y canela',
        almuerzo: 'Puré de papa con zanahoria',
        cena: 'Puré de batata',
        snack: 'Compota de pera'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Papilla de yogur con plátano',
        almuerzo: 'Puré de calabacín con arroz',
        cena: 'Puré de lentejas con zanahoria',
        snack: 'Compota de mango'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Papilla de mango',
        almuerzo: 'Puré de calabaza y papa',
        cena: 'Puré de brócoli',
        snack: 'Yogur natural'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Papilla de pera y manzana',
        almuerzo: 'Puré de camote con pollo',
        cena: 'Puré de batata y guisantes',
        snack: 'Compota de manzana'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Papilla de plátano con avena',
        almuerzo: 'Puré de papa y calabaza',
        cena: 'Puré de calabacín',
        snack: 'Compota mixta'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Yogur con pera rallada',
        almuerzo: 'Puré de arroz con pollo',
        cena: 'Puré de zanahoria y papa',
        snack: 'Compota de pera'
      }
    ],
    shoppingList: [
      {
        category: 'Verduras',
        icon: '🥦',
        items: ['Calabaza (1)', 'Camote (2)', 'Calabacín (2)', 'Papa (3)', 'Brócoli (1)', 'Zanahoria (3)']
      },
      {
        category: 'Proteínas',
        icon: '🍗',
        items: ['Pollo (200 g)', 'Lentejas cocidas (1 taza)']
      },
      {
        category: 'Frutas',
        icon: '🍎',
        items: ['Pera (3)', 'Manzana (3)', 'Plátano (2)', 'Mango (1)']
      },
      {
        category: 'Cereales',
        icon: '🌾',
        items: ['Arroz integral (1 taza)', 'Avena (250 g)']
      }
    ],
    rawShoppingText: [
      '🥦 Calabaza (1), camote (2), calabacín (2), papa (3), brócoli (1), zanahoria (3)',
      '🍗 Pollo (200 g), lentejas cocidas (1 taza)',
      '🍎 Pera (3), manzana (3), plátano (2), mango (1)',
      '🌾 Arroz integral (1 taza), avena (250 g)'
    ]
  },
  {
    weekNumber: 5,
    title: 'Semana 5: Texturas más densas',
    subtitle: 'Purés con menor cantidad de agua para fomentar el movimiento de lengua.',
    stageName: 'Etapa 1',
    stageAgeRange: '6 a 8 meses',
    stageEmoji: '🍼',
    themeColor: {
      bgLight: 'bg-teal-50',
      border: 'border-teal-200',
      headerBg: 'from-teal-600 to-emerald-600',
      badgeBg: 'bg-teal-100',
      badgeText: 'text-teal-800',
      accent: 'teal'
    },
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Avena con manzana rallada',
        almuerzo: 'Puré de camote con pollo',
        cena: 'Puré de calabaza',
        snack: 'Compota de pera'
      },
      {
        dayName: 'Martes',
        desayuno: 'Pera con yogur',
        almuerzo: 'Puré de papa con zanahoria',
        cena: 'Puré de brócoli',
        snack: 'Compota de manzana'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Avena con plátano',
        almuerzo: 'Puré de calabacín con arroz',
        cena: 'Puré de lentejas con batata',
        snack: 'Yogur natural'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Mango y pera',
        almuerzo: 'Puré de calabaza con pollo',
        cena: 'Puré de papa',
        snack: 'Compota mixta'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Papilla de manzana con canela',
        almuerzo: 'Puré de camote con calabacín',
        cena: 'Puré de zanahoria',
        snack: 'Yogur'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Pera y plátano',
        almuerzo: 'Puré de calabaza con arroz',
        cena: 'Puré de batata',
        snack: 'Compota de manzana'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Avena con mango',
        almuerzo: 'Puré de papa con pollo',
        cena: 'Puré de calabacín',
        snack: 'Compota de pera'
      }
    ],
    shoppingList: [
      {
        category: 'Verduras',
        icon: '🥦',
        items: ['Calabaza (1)', 'Camote (2)', 'Calabacín (2)', 'Papa (2)', 'Brócoli (1)', 'Zanahoria (2)', 'Batata (2)']
      },
      {
        category: 'Proteínas',
        icon: '🍗',
        items: ['Pollo (250 g)', 'Lentejas cocidas (1 taza)']
      },
      {
        category: 'Frutas',
        icon: '🍎',
        items: ['Pera (3)', 'Manzana (2)', 'Plátano (2)', 'Mango (1)']
      },
      {
        category: 'Cereales',
        icon: '🌾',
        items: ['Avena (250 g)', 'Arroz integral (1 taza)']
      },
      {
        category: 'Lácteos',
        icon: '🧀',
        items: ['Yogur natural (500 g)']
      }
    ],
    rawShoppingText: [
      '🥦 Calabaza (1), camote (2), calabacín (2), papa (2), brócoli (1), zanahoria (2), batata (2)',
      '🍗 Pollo (250 g), lentejas cocidas (1 taza)',
      '🍎 Pera (3), manzana (2), plátano (2), mango (1)',
      '🌾 Avena (250 g), arroz integral (1 taza)',
      '🧀 Yogur natural (500 g)'
    ]
  },
  {
    weekNumber: 6,
    title: 'Semana 6: Pequeñas mezclas',
    subtitle: 'Cierre de la Etapa 1 con purés combinados y excelente aceptación.',
    stageName: 'Etapa 1',
    stageAgeRange: '6 a 8 meses',
    stageEmoji: '🍼',
    themeColor: {
      bgLight: 'bg-teal-50',
      border: 'border-teal-200',
      headerBg: 'from-teal-600 to-emerald-700',
      badgeBg: 'bg-teal-100',
      badgeText: 'text-teal-800',
      accent: 'teal'
    },
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Yogur con plátano',
        almuerzo: 'Puré de calabaza con pollo',
        cena: 'Puré de zanahoria y batata',
        snack: 'Compota de manzana'
      },
      {
        dayName: 'Martes',
        desayuno: 'Avena con pera',
        almuerzo: 'Puré de brócoli con papa',
        cena: 'Puré de calabacín',
        snack: 'Compota de pera'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Avena con manzana',
        almuerzo: 'Puré de camote con arroz',
        cena: 'Puré de lentejas con zanahoria',
        snack: 'Yogur natural'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Mango con yogur',
        almuerzo: 'Puré de papa y calabaza',
        cena: 'Puré de batata',
        snack: 'Compota mixta'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Pera y manzana',
        almuerzo: 'Puré de calabacín con pollo',
        cena: 'Puré de brócoli',
        snack: 'Yogur'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Plátano y pera',
        almuerzo: 'Puré de calabaza con arroz',
        cena: 'Puré de zanahoria',
        snack: 'Compota de manzana'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Avena con manzana',
        almuerzo: 'Puré de camote con pollo',
        cena: 'Puré de batata con guisantes',
        snack: 'Compota de pera'
      }
    ],
    shoppingList: [
      {
        category: 'Verduras',
        icon: '🥦',
        items: ['Calabaza (1)', 'Zanahoria (3)', 'Batata (2)', 'Calabacín (2)', 'Papa (2)', 'Brócoli (1)', 'Guisantes (1 taza)']
      },
      {
        category: 'Proteínas',
        icon: '🍗',
        items: ['Pollo (250 g)', 'Lentejas cocidas (1 taza)']
      },
      {
        category: 'Frutas',
        icon: '🍎',
        items: ['Pera (3)', 'Manzana (3)', 'Plátano (2)', 'Mango (1)']
      },
      {
        category: 'Cereales',
        icon: '🌾',
        items: ['Avena (250 g)', 'Arroz integral (1 taza)']
      },
      {
        category: 'Lácteos',
        icon: '🧀',
        items: ['Yogur natural (500 g)']
      }
    ],
    rawShoppingText: [
      '🥦 Calabaza (1), zanahoria (3), batata (2), calabacín (2), papa (2), brócoli (1), guisantes (1 taza)',
      '🍗 Pollo (250 g), lentejas cocidas (1 taza)',
      '🍎 Pera (3), manzana (3), plátano (2), mango (1)',
      '🌾 Avena (250 g), arroz integral (1 taza)',
      '🧀 Yogur natural (500 g)'
    ]
  },

  // =========================================================================
  // ETAPA 2: 9 A 12 MESES (SEMANAS 7 A 9)
  // =========================================================================
  {
    weekNumber: 7,
    title: 'Semana 7: Descubriendo nuevos sabores',
    subtitle: 'Entrada a la etapa de 9 a 12 meses: tortitas, pan pita, hummus, pescado y quinoa.',
    stageName: 'Etapa 2',
    stageAgeRange: '9 a 12 meses',
    stageEmoji: '🍑',
    themeColor: {
      bgLight: 'bg-amber-50',
      border: 'border-amber-200',
      headerBg: 'from-amber-500 to-orange-600',
      badgeBg: 'bg-amber-100',
      badgeText: 'text-amber-900',
      accent: 'amber'
    },
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Pan integral con aguacate',
        almuerzo: 'Puré de pollo, papa y zanahoria',
        cena: 'Puré de lentejas y camote',
        snack: 'Yogur con pera cocida'
      },
      {
        dayName: 'Martes',
        desayuno: 'Avena espesa con plátano',
        almuerzo: 'Arroz con pollo y brócoli',
        cena: 'Puré de calabaza con queso fresco',
        snack: 'Compota de manzana'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Tortitas de plátano y avena',
        almuerzo: 'Pescado blanco con arroz',
        cena: 'Puré de batata',
        snack: 'Fruta blanda'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Yogur con manzana rallada',
        almuerzo: 'Mini albóndigas de pollo con tomate',
        cena: 'Puré de calabacín con garbanzos',
        snack: 'Compota de pera'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Crepe integral con puré de fruta',
        almuerzo: 'Quinoa con calabaza y queso',
        cena: 'Sopa de verduras con pan blando',
        snack: 'Bolitas de avena'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Pan pita con hummus',
        almuerzo: 'Pasta corta con salsa de calabacín',
        cena: 'Puré de zanahoria con pollo',
        snack: 'Yogur'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Muffin de zanahoria y manzana',
        almuerzo: 'Pollo al vapor con batata',
        cena: 'Puré de brócoli y papa',
        snack: 'Fruta mixta'
      }
    ],
    shoppingList: [
      {
        category: 'Verduras',
        icon: '🥦',
        items: ['Zanahoria (2)', 'Camote (2)', 'Papa (2)', 'Calabaza (1)', 'Calabacín (2)', 'Brócoli (1)']
      },
      {
        category: 'Proteínas',
        icon: '🍗',
        items: ['Pollo (250 g)', 'Pescado blanco (150 g)', 'Garbanzos cocidos (1 taza)', 'Lentejas (1 taza)']
      },
      {
        category: 'Frutas',
        icon: '🍎',
        items: ['Pera (2)', 'Manzana (2)', 'Plátano (2)', 'Aguacate (1)']
      },
      {
        category: 'Cereales',
        icon: '🌾',
        items: ['Pan integral (1 barra)', 'Avena (250 g)', 'Arroz integral (1 taza)', 'Quinoa (1 taza)']
      },
      {
        category: 'Lácteos',
        icon: '🧀',
        items: ['Queso fresco (150 g)', 'Yogur natural (500 g)']
      }
    ],
    rawShoppingText: [
      '🥦 Zanahoria (2), camote (2), papa (2), calabaza (1), calabacín (2), brócoli (1)',
      '🍗 Pollo (250 g), pescado blanco (150 g), garbanzos cocidos (1 taza), lentejas (1 taza)',
      '🍎 Pera (2), manzana (2), plátano (2), aguacate (1)',
      '🌾 Pan integral (1 barra), avena (250 g), arroz integral (1 taza), quinoa (1 taza)',
      '🧀 Queso fresco (150 g), yogur natural (500 g)'
    ]
  },
  {
    weekNumber: 8,
    title: 'Semana 8: Texturas más firmes',
    subtitle: 'Albóndigas suaves, pescado con guisantes y granola blanda.',
    stageName: 'Etapa 2',
    stageAgeRange: '9 a 12 meses',
    stageEmoji: '🍑',
    themeColor: {
      bgLight: 'bg-amber-50',
      border: 'border-amber-200',
      headerBg: 'from-amber-500 to-orange-600',
      badgeBg: 'bg-amber-100',
      badgeText: 'text-amber-900',
      accent: 'amber'
    },
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Tortitas de avena y plátano',
        almuerzo: 'Arroz integral con pollo y verduras',
        cena: 'Puré de garbanzos con calabaza',
        snack: 'Compota de pera'
      },
      {
        dayName: 'Martes',
        desayuno: 'Yogur con granola blanda',
        almuerzo: 'Pescado con guisantes y arroz',
        cena: 'Puré de batata con queso',
        snack: 'Fruta'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Crepe integral con puré de mango',
        almuerzo: 'Albóndigas de pollo con tomate',
        cena: 'Sopa de verduras con pan',
        snack: 'Bolitas de avena'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Pan integral con hummus',
        almuerzo: 'Pasta corta con salsa de calabacín',
        cena: 'Puré de papa con brócoli',
        snack: 'Yogur'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Muffin de zanahoria',
        almuerzo: 'Quinoa con calabaza y queso',
        cena: 'Puré de zanahoria con lentejas',
        snack: 'Compota de manzana'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Avena espesa con pera',
        almuerzo: 'Pollo con arroz y zanahoria',
        cena: 'Puré de calabacín con papa',
        snack: 'Frutas variadas'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Yogur con plátano',
        almuerzo: 'Pescado con batata',
        cena: 'Puré de calabaza y papa',
        snack: 'Compota mixta'
      }
    ],
    shoppingList: [
      {
        category: 'Verduras',
        icon: '🥦',
        items: ['Calabaza (1)', 'Zanahoria (3)', 'Camote (2)', 'Calabacín (2)', 'Papa (2)', 'Brócoli (1)']
      },
      {
        category: 'Proteínas',
        icon: '🍗',
        items: ['Pollo (250 g)', 'Pescado blanco (150 g)', 'Garbanzos (1 taza)', 'Lentejas (1 taza)']
      },
      {
        category: 'Frutas',
        icon: '🍎',
        items: ['Pera (2)', 'Manzana (2)', 'Plátano (2)', 'Mango (1)']
      },
      {
        category: 'Cereales',
        icon: '🌾',
        items: ['Pan integral (1)', 'Avena (250 g)', 'Arroz (1 taza)', 'Pasta (1 taza)', 'Quinoa (1 taza)']
      },
      {
        category: 'Lácteos',
        icon: '🧀',
        items: ['Yogur natural (500 g)', 'Queso fresco (150 g)']
      }
    ],
    rawShoppingText: [
      '🥦 Calabaza (1), zanahoria (3), camote (2), calabacín (2), papa (2), brócoli (1)',
      '🍗 Pollo (250 g), pescado blanco (150 g), garbanzos (1 taza), lentejas (1 taza)',
      '🍎 Pera (2), manzana (2), plátano (2), mango (1)',
      '🌾 Pan integral (1), avena (250 g), arroz (1 taza), pasta (1 taza), quinoa (1 taza)',
      '🧀 Yogur natural (500 g), queso fresco (150 g)'
    ]
  },
  {
    weekNumber: 9,
    title: 'Semana 9: Colores y texturas',
    subtitle: 'Guiso de alubias/frijoles, panecillos de calabaza y muffins de manzana.',
    stageName: 'Etapa 2',
    stageAgeRange: '9 a 12 meses',
    stageEmoji: '🍑',
    themeColor: {
      bgLight: 'bg-amber-50',
      border: 'border-amber-200',
      headerBg: 'from-amber-500 to-orange-600',
      badgeBg: 'bg-amber-100',
      badgeText: 'text-amber-900',
      accent: 'amber'
    },
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Papilla de mango con yogur',
        almuerzo: 'Mini albóndigas de pollo con tomate',
        cena: 'Puré de calabaza con lentejas',
        snack: 'Compota de pera y canela'
      },
      {
        dayName: 'Martes',
        desayuno: 'Panecillo de calabaza con queso',
        almuerzo: 'Arroz con verduras',
        cena: 'Puré de batata con pescado',
        snack: 'Yogur'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Crepe integral con puré de manzana',
        almuerzo: 'Quinoa con calabaza y queso',
        cena: 'Puré de brócoli con papa',
        snack: 'Fruta'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Avena espesa con plátano',
        almuerzo: 'Pollo con arroz y guisantes',
        cena: 'Puré de calabacín',
        snack: 'Compota de manzana'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Yogur con pera rallada',
        almuerzo: 'Pasta corta con salsa de calabacín',
        cena: 'Puré de zanahoria con pollo',
        snack: 'Bolitas de avena'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Muffin de manzana y zanahoria',
        almuerzo: 'Pescado con arroz',
        cena: 'Sopa de verduras',
        snack: 'Fruta'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Pan pita con hummus',
        almuerzo: 'Guiso de alubias con verduras',
        cena: 'Puré de camote',
        snack: 'Yogur'
      }
    ],
    shoppingList: [
      {
        category: 'Verduras',
        icon: '🥦',
        items: ['Calabaza (1)', 'Zanahoria (3)', 'Camote (2)', 'Calabacín (2)', 'Papa (2)', 'Brócoli (1)']
      },
      {
        category: 'Proteínas',
        icon: '🍗',
        items: ['Pollo (250 g)', 'Pescado (150 g)', 'Lentejas (1 taza)', 'Alubias / frijoles (1 taza)']
      },
      {
        category: 'Frutas',
        icon: '🍎',
        items: ['Pera (2)', 'Manzana (2)', 'Plátano (2)', 'Mango (1)']
      },
      {
        category: 'Cereales',
        icon: '🌾',
        items: ['Pan integral (1)', 'Avena (250 g)', 'Arroz (1 taza)', 'Pasta (1 taza)', 'Quinoa (1 taza)']
      },
      {
        category: 'Lácteos',
        icon: '🧀',
        items: ['Yogur (500 g)', 'Queso fresco (150 g)']
      }
    ],
    rawShoppingText: [
      '🥦 Calabaza (1), zanahoria (3), camote (2), calabacín (2), papa (2), brócoli (1)',
      '🍗 Pollo (250 g), pescado (150 g), lentejas (1 taza)',
      '🍎 Pera (2), manzana (2), plátano (2), mango (1)',
      '🌾 Pan integral (1), avena (250 g), arroz (1 taza), pasta (1 taza), quinoa (1 taza)',
      '🧀 Yogur (500 g), queso fresco (150 g)'
    ]
  },

  // =========================================================================
  // ETAPA 3: 12 A 18 MESES (SEMANAS 10 A 15)
  // =========================================================================
  {
    weekNumber: 10,
    title: 'Semana 10: Primeras comidas familiares',
    subtitle: '¡Llegamos al año de vida! Croquetas al horno, tortilla con champiñones y lasaña.',
    stageName: 'Etapa 3',
    stageAgeRange: '12 a 18 meses',
    stageEmoji: '🌼',
    themeColor: {
      bgLight: 'bg-emerald-50',
      border: 'border-emerald-200',
      headerBg: 'from-emerald-600 to-teal-700',
      badgeBg: 'bg-emerald-100',
      badgeText: 'text-emerald-900',
      accent: 'emerald'
    },
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Tortilla francesa con champiñones',
        almuerzo: 'Arroz integral con pollo y verduras',
        cena: 'Crema de zanahoria',
        snack: 'Yogur con fruta'
      },
      {
        dayName: 'Martes',
        desayuno: 'Pan integral con queso fresco',
        almuerzo: 'Croquetas de brócoli al horno',
        cena: 'Puré de batata con pollo',
        snack: 'Fruta blanda'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Avena con manzana y dátiles',
        almuerzo: 'Pasta corta con salsa de calabacín',
        cena: 'Sopa de verduras con pan',
        snack: 'Compota'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Muffin de espinaca y queso',
        almuerzo: 'Quinoa con calabaza y queso',
        cena: 'Puré de papa y calabacín',
        snack: 'Bolitas de avena'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Yogur con granola',
        almuerzo: 'Pescado al vapor con arroz',
        cena: 'Puré de zanahoria con lentejas',
        snack: 'Fruta'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Crepe integral con puré de pera',
        almuerzo: 'Mini lasaña de verduras y carne',
        cena: 'Puré de brócoli y papa',
        snack: 'Yogur'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Panecillo de calabaza',
        almuerzo: 'Pollo al horno con batata',
        cena: 'Puré de calabaza con garbanzos',
        snack: 'Compota'
      }
    ],
    shoppingList: [
      {
        category: 'Verduras',
        icon: '🥦',
        items: ['Champiñones (100 g)', 'Calabaza (1)', 'Zanahoria (3)', 'Batata (2)', 'Papa (2)']
      },
      {
        category: 'Proteínas',
        icon: '🍗',
        items: ['Pollo (250 g)', 'Carne magra (200 g)', 'Pescado blanco (150 g)', 'Garbanzos (1 taza)']
      },
      {
        category: 'Frutas',
        icon: '🍎',
        items: ['Manzana (2)', 'Pera (2)', 'Plátano (2)']
      },
      {
        category: 'Cereales',
        icon: '🌾',
        items: ['Arroz integral (1 taza)', 'Pasta corta (1 taza)', 'Quinoa (1 taza)', 'Avena (250 g)']
      },
      {
        category: 'Lácteos',
        icon: '🧀',
        items: ['Yogur natural (500 g)', 'Queso rallado (150 g)', 'Queso fresco (150 g)']
      }
    ],
    rawShoppingText: [
      '🥦 Champiñones (100 g), calabaza (1), zanahoria (3), batata (2), papa (2)',
      '🍗 Pollo (250 g), carne magra (200 g), pescado blanco (150 g), garbanzos (1 taza)',
      '🍎 Manzana (2), pera (2), plátano (2)',
      '🌾 Arroz integral (1 taza), pasta corta (1 taza), quinoa (1 taza), avena (250 g)',
      '🧀 Yogur natural (500 g), queso rallado (150 g), queso fresco (150 g)'
    ]
  },
  {
    weekNumber: 11,
    title: 'Semana 11: Confort y variedad',
    subtitle: 'Estofado de ternera suave, hamburguesitas de lentejas y batidos nutritivos.',
    stageName: 'Etapa 3',
    stageAgeRange: '12 a 18 meses',
    stageEmoji: '🌼',
    themeColor: {
      bgLight: 'bg-emerald-50',
      border: 'border-emerald-200',
      headerBg: 'from-emerald-600 to-teal-700',
      badgeBg: 'bg-emerald-100',
      badgeText: 'text-emerald-900',
      accent: 'emerald'
    },
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Pan integral con hummus y pepino rallado',
        almuerzo: 'Estofado de ternera con papa y zanahoria',
        cena: 'Puré de batata con queso fresco',
        snack: 'Fruta blanda'
      },
      {
        dayName: 'Martes',
        desayuno: 'Avena con pera',
        almuerzo: 'Hamburguesitas de lenteja con arroz',
        cena: 'Crema suave de calabaza',
        snack: 'Yogur natural'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Yogur con manzana rallada',
        almuerzo: 'Pasta corta con tomate y verduras',
        cena: 'Puré de brócoli con papa',
        snack: 'Galleta blanda de avena'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Tortilla de patata y calabacín',
        almuerzo: 'Quinoa con pollo y verduras',
        cena: 'Sopa de verduras con fideos blandos',
        snack: 'Compota casera'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Batido de mango, yogur y avena',
        almuerzo: 'Pescado al vapor con arroz y guisantes',
        cena: 'Puré de zanahoria con aceite de oliva',
        snack: 'Fruta variada'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Muffin de zanahoria',
        almuerzo: 'Croquetas de brócoli y queso al horno',
        cena: 'Puré de camote con pollo desmenuzado',
        snack: 'Yogur'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Crepe integral con puré de fruta',
        almuerzo: 'Guiso de alubias con verduras',
        cena: 'Puré de calabacín con papa',
        snack: 'Fruta'
      }
    ],
    shoppingList: [
      {
        category: 'Verduras',
        icon: '🥦',
        items: ['Calabaza (1)', 'Zanahoria (4)', 'Papa (4)', 'Batata/camote (3)', 'Calabacín (2)', 'Brócoli (1)', 'Guisantes (1 taza)', 'Pepino (1)', 'Tomate (2)', 'Espinaca (opcional 100 g)']
      },
      {
        category: 'Proteínas',
        icon: '🍗',
        items: ['Ternera magra (250 g)', 'Pollo (300 g)', 'Pescado blanco (180 g)', 'Alubias cocidas (1 taza)', 'Lentejas cocidas (1 taza)']
      },
      {
        category: 'Frutas',
        icon: '🍎',
        items: ['Pera (2)', 'Manzana (2)', 'Mango (1)', 'Fruta variada (2–3)']
      },
      {
        category: 'Cereales',
        icon: '🌾',
        items: ['Pan integral (1)', 'Avena (300 g)', 'Pasta corta (1 taza)', 'Arroz integral (1 taza)', 'Quinoa (1 taza)', 'Fideos finos (1 taza)']
      },
      {
        category: 'Lácteos',
        icon: '🧀',
        items: ['Yogur natural (600 g)', 'Queso fresco/rallado (200 g)']
      },
      {
        category: 'Otros',
        icon: '🥫',
        items: ['Hummus (o garbanzos 1 taza)']
      }
    ],
    rawShoppingText: [
      '🥦 Calabaza (1), zanahoria (4), papa (4), batata/camote (3), calabacín (2), brócoli (1), guisantes (1 taza), pepino (1), tomate (2), espinaca (opcional 100 g)',
      '🍗 Ternera magra (250 g), pollo (300 g), pescado blanco (180 g), alubias cocidas (1 taza), lentejas cocidas (1 taza)',
      '🍎 Pera (2), manzana (2), mango (1), fruta variada (2–3)',
      '🌾 Pan integral (1), avena (300 g), pasta corta (1 taza), arroz integral (1 taza), quinoa (1 taza)',
      '🧀 Yogur natural (600 g), queso fresco/rallado (200 g)',
      '🥫 Hummus (o garbanzos 1 taza), fideos finos (1 taza)'
    ]
  },
  {
    weekNumber: 12,
    title: 'Semana 12: Mini platos familiares',
    subtitle: 'Crema de zanahoria con naranja, mini albóndigas de carne y tortitas de arándanos.',
    stageName: 'Etapa 3',
    stageAgeRange: '12 a 18 meses',
    stageEmoji: '🌼',
    themeColor: {
      bgLight: 'bg-emerald-50',
      border: 'border-emerald-200',
      headerBg: 'from-emerald-600 to-teal-700',
      badgeBg: 'bg-emerald-100',
      badgeText: 'text-emerald-900',
      accent: 'emerald'
    },
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Pan integral con queso crema (bajo sal)',
        almuerzo: 'Arroz integral con pollo y verduras',
        cena: 'Crema de zanahoria con naranja',
        snack: 'Fruta'
      },
      {
        dayName: 'Martes',
        desayuno: 'Yogur con avena',
        almuerzo: 'Mini albóndigas de carne magra con tomate',
        cena: 'Puré de batata',
        snack: 'Compota'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Tortitas de avena y plátano con arándanos picados',
        almuerzo: 'Quinoa con calabaza y queso',
        cena: 'Sopa de verduras con fideos',
        snack: 'Yogur'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Avena con pera y canela',
        almuerzo: 'Pescado al vapor con arroz y brócoli',
        cena: 'Puré de calabacín con papa',
        snack: 'Galleta de avena'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Panecillo de calabaza',
        almuerzo: 'Hamburguesitas de lenteja y arroz',
        cena: 'Puré de zanahoria con pollo',
        snack: 'Fruta'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Crepe integral con puré de manzana',
        almuerzo: 'Pasta corta con salsa de calabacín',
        cena: 'Puré de camote con queso',
        snack: 'Compota'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Yogur con fruta',
        almuerzo: 'Pollo al horno con batata',
        cena: 'Puré de calabaza con garbanzos',
        snack: 'Fruta'
      }
    ],
    shoppingList: [
      {
        category: 'Verduras',
        icon: '🥦',
        items: ['Calabaza (1)', 'Zanahoria (3)', 'Batata (2)', 'Papa (2)', 'Calabacín (2)', 'Brócoli (1)', 'Tomate (2)', 'Naranja (1)']
      },
      {
        category: 'Proteínas',
        icon: '🍗',
        items: ['Pollo (350 g)', 'Carne magra (200 g)', 'Pescado (180 g)', 'Lentejas cocidas (1 taza)', 'Garbanzos (1 taza)']
      },
      {
        category: 'Frutas',
        icon: '🍎',
        items: ['Plátano (2)', 'Pera (2)', 'Manzana (2)', 'Arándanos (opcional 80 g)']
      },
      {
        category: 'Cereales',
        icon: '🌾',
        items: ['Pan integral (1)', 'Avena (300 g)', 'Pasta (1 taza)', 'Arroz integral (1 taza)', 'Quinoa (1 taza)']
      },
      {
        category: 'Lácteos',
        icon: '🧀',
        items: ['Yogur natural (600 g)', 'Queso fresco/rallado (200 g)']
      }
    ],
    rawShoppingText: [
      '🥦 Calabaza (1), zanahoria (3), batata (2), papa (2), calabacín (2), brócoli (1), tomate (2), naranja (1)',
      '🍗 Pollo (350 g), carne magra (200 g), pescado (180 g), lentejas cocidas (1 taza), garbanzos (1 taza)',
      '🍎 Plátano (2), pera (2), manzana (2), arándanos (opcional 80 g)',
      '🌾 Pan integral (1), avena (300 g), pasta (1 taza), arroz integral (1 taza), quinoa (1 taza)',
      '🧀 Yogur natural (600 g), queso fresco/rallado (200 g)'
    ]
  },
  {
    weekNumber: 13,
    title: 'Semana 13: Transición a trocitos',
    subtitle: 'Empanaditas de pollo y espinaca al horno y tostadas con aguacate.',
    stageName: 'Etapa 3',
    stageAgeRange: '12 a 18 meses',
    stageEmoji: '🌼',
    themeColor: {
      bgLight: 'bg-emerald-50',
      border: 'border-emerald-200',
      headerBg: 'from-emerald-600 to-teal-700',
      badgeBg: 'bg-emerald-100',
      badgeText: 'text-emerald-900',
      accent: 'emerald'
    },
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Tostaditas integrales con aguacate',
        almuerzo: 'Arroz integral con pollo y verduras',
        cena: 'Sopa de verduras con pasta',
        snack: 'Yogur con fruta'
      },
      {
        dayName: 'Martes',
        desayuno: 'Tortilla francesa con champiñones finos',
        almuerzo: 'Quinoa con calabaza y queso',
        cena: 'Puré de batata con pollo',
        snack: 'Galleta de avena'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Panecillos de calabaza con queso',
        almuerzo: 'Pescado al horno con patata',
        cena: 'Puré de brócoli y zanahoria',
        snack: 'Fruta'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Avena espesa con plátano',
        almuerzo: 'Mini albóndigas de carne con tomate',
        cena: 'Verduras al vapor con pasta',
        snack: 'Yogur'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Yogur con granola blandita',
        almuerzo: 'Hamburguesitas de lenteja con arroz',
        cena: 'Crema suave de calabaza',
        snack: 'Fruta'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Crepe integral con puré de pera',
        almuerzo: 'Empanaditas de pollo y espinaca al horno',
        cena: 'Puré de calabacín con papa',
        snack: 'Compota'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Muffin de zanahoria y manzana',
        almuerzo: 'Pollo al horno con batata',
        cena: 'Quinoa con verduras',
        snack: 'Fruta'
      }
    ],
    shoppingList: [
      {
        category: 'Verduras',
        icon: '🥦',
        items: ['Calabaza (1)', 'Zanahoria (3)', 'Papa (3)', 'Batata (2)', 'Calabacín (2)', 'Brócoli (1)', 'Champiñones (100 g)', 'Espinaca (100 g)', 'Tomate (2)', 'Aguacate (1)']
      },
      {
        category: 'Proteínas',
        icon: '🍗',
        items: ['Pollo (350 g)', 'Carne magra (200 g)', 'Pescado blanco (180 g)', 'Lentejas cocidas (1 taza)']
      },
      {
        category: 'Frutas',
        icon: '🍎',
        items: ['Plátano (2)', 'Pera (2)', 'Manzana (2)']
      },
      {
        category: 'Cereales',
        icon: '🌾',
        items: ['Pan integral (1)', 'Avena (300 g)', 'Pasta (1 taza)', 'Arroz integral (1 taza)', 'Quinoa (1 taza)', 'Granola casera (1 taza)', 'Masa/obleas empanada (opcional)']
      },
      {
        category: 'Lácteos',
        icon: '🧀',
        items: ['Yogur natural (600 g)', 'Queso fresco/rallado (200 g)']
      }
    ],
    rawShoppingText: [
      '🥦 Calabaza (1), zanahoria (3), papa (3), batata (2), calabacín (2), brócoli (1), champiñones (100 g), espinaca (100 g), tomate (2), aguacate (1)',
      '🍗 Pollo (350 g), carne magra (200 g), pescado blanco (180 g), lentejas cocidas (1 taza)',
      '🍎 Plátano (2), pera (2), manzana (2)',
      '🌾 Pan integral (1), avena (300 g), pasta (1 taza), arroz integral (1 taza), quinoa (1 taza), granola casera (1 taza), masa/obleas empanada (opcional)',
      '🧀 Yogur natural (600 g), queso fresco/rallado (200 g)'
    ]
  },
  {
    weekNumber: 14,
    title: 'Semana 14: Ritmo familiar',
    subtitle: 'Arroz con ternera, mini lasaña de verduras y guiso de alubias.',
    stageName: 'Etapa 3',
    stageAgeRange: '12 a 18 meses',
    stageEmoji: '🌼',
    themeColor: {
      bgLight: 'bg-emerald-50',
      border: 'border-emerald-200',
      headerBg: 'from-emerald-600 to-teal-700',
      badgeBg: 'bg-emerald-100',
      badgeText: 'text-emerald-900',
      accent: 'emerald'
    },
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Yogur con fruta y avena',
        almuerzo: 'Arroz con ternera y verduras',
        cena: 'Puré de camote con queso',
        snack: 'Fruta'
      },
      {
        dayName: 'Martes',
        desayuno: 'Tortitas de avena y plátano',
        almuerzo: 'Pescado con arroz y guisantes',
        cena: 'Sopa de verduras',
        snack: 'Galleta de avena'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Pan integral con hummus',
        almuerzo: 'Pasta corta con salsa de calabacín',
        cena: 'Puré de brócoli y papa',
        snack: 'Yogur'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Avena con pera y canela',
        almuerzo: 'Guiso de alubias con verduras',
        cena: 'Puré de zanahoria con pollo',
        snack: 'Fruta'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Crepe con puré de manzana',
        almuerzo: 'Quinoa con calabaza y queso',
        cena: 'Verduras al vapor con pasta',
        snack: 'Compota'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Muffin de espinaca y queso',
        almuerzo: 'Mini lasaña de verduras y carne',
        cena: 'Puré de batata',
        snack: 'Yogur'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Panecillo de calabaza',
        almuerzo: 'Pollo al horno con batata',
        cena: 'Puré de calabacín y papa',
        snack: 'Fruta'
      }
    ],
    shoppingList: [
      {
        category: 'Verduras',
        icon: '🥦',
        items: ['Calabaza (1)', 'Zanahoria (3)', 'Batata (3)', 'Papa (2)', 'Calabacín (2)', 'Brócoli (1)', 'Guisantes (1 taza)', 'Tomate (2)', 'Espinaca (100 g)']
      },
      {
        category: 'Proteínas',
        icon: '🍗',
        items: ['Ternera magra (250 g)', 'Pollo (300 g)', 'Pescado (180 g)', 'Alubias (1 taza)']
      },
      {
        category: 'Frutas',
        icon: '🍎',
        items: ['Plátano (2)', 'Pera (2)', 'Manzana (2)', 'Fruta variada (2–3)']
      },
      {
        category: 'Cereales',
        icon: '🌾',
        items: ['Pan integral (1)', 'Avena (300 g)', 'Pasta (1 taza)', 'Arroz integral (1 taza)', 'Quinoa (1 taza)']
      },
      {
        category: 'Lácteos',
        icon: '🧀',
        items: ['Yogur natural (600 g)', 'Queso fresco/rallado (200 g)']
      },
      {
        category: 'Otros',
        icon: '🥫',
        items: ['Hummus (o garbanzos 1 taza)']
      }
    ],
    rawShoppingText: [
      '🥦 Calabaza (1), zanahoria (3), batata (3), papa (2), calabacín (2), brócoli (1), guisantes (1 taza), tomate (2), espinaca (100 g)',
      '🍗 Ternera magra (250 g), pollo (300 g), pescado (180 g), alubias (1 taza)',
      '🍎 Plátano (2), pera (2), manzana (2), fruta variada (2–3)',
      '🌾 Pan integral (1), avena (300 g), pasta (1 taza), arroz integral (1 taza), quinoa (1 taza)',
      '🧀 Yogur natural (600 g), queso fresco/rallado (200 g)',
      '🥫 Hummus (o garbanzos 1 taza)'
    ]
  },
  {
    weekNumber: 15,
    title: 'Semana 15: Sabores que abrazan',
    subtitle: 'Pollo guisado suave con papas y tostadas con queso fresco.',
    stageName: 'Etapa 3',
    stageAgeRange: '12 a 18 meses',
    stageEmoji: '🌼',
    themeColor: {
      bgLight: 'bg-emerald-50',
      border: 'border-emerald-200',
      headerBg: 'from-emerald-600 to-teal-700',
      badgeBg: 'bg-emerald-100',
      badgeText: 'text-emerald-900',
      accent: 'emerald'
    },
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Tostadas integrales con queso fresco',
        almuerzo: 'Hamburguesitas de lenteja y arroz',
        cena: 'Crema de zanahoria con naranja',
        snack: 'Fruta'
      },
      {
        dayName: 'Martes',
        desayuno: 'Yogur con plátano',
        almuerzo: 'Pollo guisado suave con papa',
        cena: 'Puré de brócoli con queso',
        snack: 'Galleta de avena'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Avena con manzana',
        almuerzo: 'Pescado con batata',
        cena: 'Verduras al vapor con pasta',
        snack: 'Compota'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Tortilla de patata y calabacín',
        almuerzo: 'Quinoa con calabaza y queso',
        cena: 'Puré de camote con pollo',
        snack: 'Yogur'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Muffin de zanahoria',
        almuerzo: 'Estofado de ternera con verduras',
        cena: 'Puré de calabacín con papa',
        snack: 'Fruta'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Crepe integral con puré de pera',
        almuerzo: 'Pasta corta con tomate y verduras',
        cena: 'Sopa de verduras',
        snack: 'Yogur'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Pan pita con hummus',
        almuerzo: 'Pollo al horno con batata',
        cena: 'Puré de zanahoria',
        snack: 'Fruta'
      }
    ],
    shoppingList: [
      {
        category: 'Verduras',
        icon: '🥦',
        items: ['Calabaza (1)', 'Zanahoria (4)', 'Papa (3)', 'Batata (3)', 'Calabacín (2)', 'Brócoli (1)', 'Tomate (2)']
      },
      {
        category: 'Proteínas',
        icon: '🍗',
        items: ['Pollo (350 g)', 'Ternera (250 g)', 'Pescado (180 g)', 'Lentejas cocidas (1 taza)']
      },
      {
        category: 'Frutas',
        icon: '🍎',
        items: ['Plátano (2)', 'Manzana (2)', 'Pera (2)', 'Naranja (1)']
      },
      {
        category: 'Cereales',
        icon: '🌾',
        items: ['Pan integral (1)', 'Pan pita (1)', 'Avena (300 g)', 'Pasta (1 taza)', 'Arroz integral (1 taza)', 'Quinoa (1 taza)']
      },
      {
        category: 'Lácteos',
        icon: '🧀',
        items: ['Yogur natural (600 g)', 'Queso fresco/rallado (200 g)']
      },
      {
        category: 'Otros',
        icon: '🥫',
        items: ['Hummus (o garbanzos 1 taza)']
      }
    ],
    rawShoppingText: [
      '🥦 Calabaza (1), zanahoria (4), papa (3), batata (3), calabacín (2), brócoli (1), tomate (2)',
      '🍗 Pollo (350 g), ternera (250 g), pescado (180 g), lentejas cocidas (1 taza)',
      '🍎 Plátano (2), manzana (2), pera (2), naranja (1)',
      '🌾 Pan integral (1), pan pita (1), avena (300 g), pasta (1 taza), arroz integral (1 taza), quinoa (1 taza)',
      '🧀 Yogur natural (600 g), queso fresco/rallado (200 g)',
      '🥫 Hummus (o garbanzos 1 taza)'
    ]
  },

  // =========================================================================
  // ETAPA 4: 18 A 24 MESES (SEMANAS 16 A 24)
  // =========================================================================
  {
    weekNumber: 16,
    title: 'Semana 16: Pequeño gourmet',
    subtitle: 'Texturas completas familiares con bocados enriquecidos.',
    stageName: 'Etapa 4',
    stageAgeRange: '18 a 24 meses',
    stageEmoji: '🌞',
    themeColor: {
      bgLight: 'bg-amber-50',
      border: 'border-amber-200',
      headerBg: 'from-amber-600 to-yellow-600',
      badgeBg: 'bg-amber-100',
      badgeText: 'text-amber-900',
      accent: 'amber'
    },
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Avena con pera madura',
        almuerzo: 'Arroz integral con pollo y verduras',
        cena: 'Crema de calabaza suave',
        snack: 'Fruta picada'
      },
      {
        dayName: 'Martes',
        desayuno: 'Yogur con granola blanda',
        almuerzo: 'Guiso de alubias con verduras',
        cena: 'Puré de batata con queso fresco',
        snack: 'Compota'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Tortitas de avena, plátano y arándanos',
        almuerzo: 'Pescado al vapor con arroz y brócoli',
        cena: 'Verduras al vapor con pasta',
        snack: 'Yogur'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Panecillo de calabaza con queso',
        almuerzo: 'Albóndigas de carne con salsa de tomate',
        cena: 'Puré de calabacín con papa',
        snack: 'Fruta'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Crepe integral con puré de manzana',
        almuerzo: 'Quinoa con verduras y queso',
        cena: 'Puré de zanahoria con pollo',
        snack: 'Galletas de avena'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Pan integral con hummus',
        almuerzo: 'Croquetas de brócoli al horno',
        cena: 'Sopa de verduras',
        snack: 'Fruta'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Muffin de espinaca y queso',
        almuerzo: 'Pollo con batata al horno',
        cena: 'Puré de garbanzos con camote',
        snack: 'Yogur'
      }
    ],
    shoppingList: [
      {
        category: 'Verduras',
        icon: '🥦',
        items: ['Calabaza (1)', 'Zanahoria (3)', 'Batata (2)', 'Papa (2)', 'Calabacín (2)', 'Brócoli (1)', 'Arándanos (opcional 80 g)', 'Espinaca (100 g)', 'Tomate (2)']
      },
      {
        category: 'Proteínas',
        icon: '🍗',
        items: ['Pollo (350 g)', 'Carne magra (200 g)', 'Pescado blanco (180 g)', 'Garbanzos (1 taza)', 'Alubias (1 taza)']
      },
      {
        category: 'Frutas',
        icon: '🍎',
        items: ['Pera (2)', 'Manzana (2)', 'Plátano (2)', 'Fruta variada (2–3)']
      },
      {
        category: 'Cereales',
        icon: '🌾',
        items: ['Pan integral (1)', 'Avena (300 g)', 'Pasta (1 taza)', 'Arroz integral (1 taza)', 'Quinoa (1 taza)', 'Granola casera (1 taza)']
      },
      {
        category: 'Lácteos',
        icon: '🧀',
        items: ['Yogur natural (600 g)', 'Queso fresco/rallado (200 g)']
      }
    ],
    rawShoppingText: [
      '🥦 Calabaza (1), zanahoria (3), batata (2), papa (2), calabacín (2), brócoli (1), arándanos (opcional 80 g), espinaca (100 g), tomate (2)',
      '🍗 Pollo (350 g), carne magra (200 g), pescado blanco (180 g), garbanzos (1 taza), alubias (1 taza)',
      '🍎 Pera (2), manzana (2), plátano (2), fruta variada (2–3)',
      '🌾 Pan integral (1), avena (300 g), pasta (1 taza), arroz integral (1 taza), quinoa (1 taza), granola casera (1 taza)',
      '🧀 Yogur natural (600 g), queso fresco/rallado (200 g)'
    ]
  },
  {
    weekNumber: 17,
    title: 'Semana 17: Mini explorador',
    subtitle: 'Pasta con salsa de calabacín y queso, estofado y tortillas finas.',
    stageName: 'Etapa 4',
    stageAgeRange: '18 a 24 meses',
    stageEmoji: '🌞',
    themeColor: {
      bgLight: 'bg-amber-50',
      border: 'border-amber-200',
      headerBg: 'from-amber-600 to-yellow-600',
      badgeBg: 'bg-amber-100',
      badgeText: 'text-amber-900',
      accent: 'amber'
    },
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Yogur con fruta picada',
        almuerzo: 'Pasta corta con salsa de calabacín y queso',
        cena: 'Puré de brócoli con papa',
        snack: 'Compota'
      },
      {
        dayName: 'Martes',
        desayuno: 'Avena con manzana y canela',
        almuerzo: 'Quinoa con calabaza y pollo',
        cena: 'Sopa de verduras con pan blando',
        snack: 'Fruta'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Tostadas integrales con aguacate',
        almuerzo: 'Estofado de ternera con papa',
        cena: 'Puré de batata',
        snack: 'Yogur'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Tortilla francesa con verduras finas',
        almuerzo: 'Pescado con arroz y guisantes',
        cena: 'Puré de calabacín',
        snack: 'Galleta de avena'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Crepe integral con puré de pera',
        almuerzo: 'Hamburguesitas de lenteja con arroz',
        cena: 'Verduras al vapor con pasta',
        snack: 'Fruta'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Panecillo de calabaza con queso',
        almuerzo: 'Croquetas de brócoli al horno',
        cena: 'Puré de zanahoria con pollo',
        snack: 'Yogur'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Muffin de zanahoria y manzana',
        almuerzo: 'Pollo al horno con batata',
        cena: 'Puré de calabaza con garbanzos',
        snack: 'Fruta'
      }
    ],
    shoppingList: [
      {
        category: 'Verduras',
        icon: '🥦',
        items: ['Calabaza (1)', 'Zanahoria (3)', 'Batata (2)', 'Papa (2)', 'Calabacín (2)', 'Brócoli (1)', 'Guisantes (1 taza)', 'Tomate (2)']
      },
      {
        category: 'Proteínas',
        icon: '🍗',
        items: ['Pollo (350 g)', 'Ternera (250 g)', 'Pescado (180 g)', 'Lentejas cocidas (1 taza)', 'Garbanzos (1 taza)']
      },
      {
        category: 'Frutas',
        icon: '🍎',
        items: ['Manzana (2)', 'Pera (2)', 'Plátano (2)', 'Aguacate (1)']
      },
      {
        category: 'Cereales',
        icon: '🌾',
        items: ['Pan integral (1)', 'Avena (300 g)', 'Pasta (1 taza)', 'Arroz integral (1 taza)', 'Quinoa (1 taza)']
      },
      {
        category: 'Lácteos',
        icon: '🧀',
        items: ['Yogur natural (600 g)', 'Queso fresco/rallado (200 g)']
      }
    ],
    rawShoppingText: [
      '🥦 Calabaza (1), zanahoria (3), batata (2), papa (2), calabacín (2), brócoli (1), guisantes (1 taza), tomate (2)',
      '🍗 Pollo (350 g), ternera (250 g), pescado (180 g), lentejas cocidas (1 taza), garbanzos (1 taza)',
      '🍎 Manzana (2), pera (2), plátano (2), aguacate (1)',
      '🌾 Pan integral (1), avena (300 g), pasta (1 taza), arroz integral (1 taza), quinoa (1 taza)',
      '🧀 Yogur natural (600 g), queso fresco/rallado (200 g)'
    ]
  },
  {
    weekNumber: 18,
    title: 'Semana 18: Descubre el sabor',
    subtitle: 'Risotto cremoso de champiñones y pollo, y puré de camote con espinacas.',
    stageName: 'Etapa 4',
    stageAgeRange: '18 a 24 meses',
    stageEmoji: '🌞',
    themeColor: {
      bgLight: 'bg-amber-50',
      border: 'border-amber-200',
      headerBg: 'from-amber-600 to-yellow-600',
      badgeBg: 'bg-amber-100',
      badgeText: 'text-amber-900',
      accent: 'amber'
    },
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Avena con mango',
        almuerzo: 'Risotto cremoso de champiñones y pollo',
        cena: 'Puré de camote con espinaca',
        snack: 'Compota de manzana y pera'
      },
      {
        dayName: 'Martes',
        desayuno: 'Yogur con granola',
        almuerzo: 'Quinoa con calabaza y queso',
        cena: 'Sopa de verduras',
        snack: 'Fruta'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Tortitas de avena y plátano',
        almuerzo: 'Pescado con arroz y zanahoria',
        cena: 'Puré de brócoli con papa',
        snack: 'Yogur'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Pan con hummus',
        almuerzo: 'Estofado de ternera con verduras',
        cena: 'Puré de calabacín con papa',
        snack: 'Galleta de avena'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Crepe integral con puré de manzana',
        almuerzo: 'Hamburguesitas de lenteja y arroz',
        cena: 'Verduras al vapor con pasta',
        snack: 'Fruta'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Muffin de espinaca y queso',
        almuerzo: 'Pollo al horno con batata',
        cena: 'Puré de calabaza con garbanzos',
        snack: 'Yogur'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Panecillo de calabaza',
        almuerzo: 'Croquetas de brócoli y queso',
        cena: 'Puré de zanahoria con pollo',
        snack: 'Compota'
      }
    ],
    shoppingList: [
      {
        category: 'Verduras',
        icon: '🥦',
        items: ['Calabaza (1)', 'Zanahoria (3)', 'Batata (2)', 'Papa (2)', 'Calabacín (2)', 'Brócoli (1)', 'Champiñones (100 g)', 'Espinaca (100 g)', 'Mango (1)']
      },
      {
        category: 'Proteínas',
        icon: '🍗',
        items: ['Pollo (350 g)', 'Ternera (250 g)', 'Pescado (180 g)', 'Lentejas cocidas (1 taza)', 'Garbanzos (1 taza)']
      },
      {
        category: 'Frutas',
        icon: '🍎',
        items: ['Pera (2)', 'Manzana (2)', 'Plátano (2)', 'Fruta variada (2–3)']
      },
      {
        category: 'Cereales',
        icon: '🌾',
        items: ['Pan integral (1)', 'Avena (300 g)', 'Pasta (1 taza)', 'Arroz (1 taza)', 'Quinoa (1 taza)', 'Granola casera (1 taza)']
      },
      {
        category: 'Lácteos',
        icon: '🧀',
        items: ['Yogur natural (600 g)', 'Queso fresco/rallado (200 g)']
      }
    ],
    rawShoppingText: [
      '🥦 Calabaza (1), zanahoria (3), batata (2), papa (2), calabacín (2), brócoli (1), champiñones (100 g), espinaca (100 g), mango (1)',
      '🍗 Pollo (350 g), ternera (250 g), pescado (180 g), lentejas cocidas (1 taza), garbanzos (1 taza)',
      '🍎 Pera (2), manzana (2), plátano (2), fruta variada (2–3)',
      '🌾 Pan integral (1), avena (300 g), pasta (1 taza), arroz (1 taza), quinoa (1 taza), granola casera (1 taza)',
      '🧀 Yogur natural (600 g), queso fresco/rallado (200 g)'
    ]
  },
  {
    weekNumber: 19,
    title: 'Semana 19: Aventuritas en la mesa',
    subtitle: 'Sopa de fideos con calabaza, pan integral con hummus y pepino rallado.',
    stageName: 'Etapa 4',
    stageAgeRange: '18 a 24 meses',
    stageEmoji: '🌞',
    themeColor: {
      bgLight: 'bg-amber-50',
      border: 'border-amber-200',
      headerBg: 'from-amber-600 to-yellow-600',
      badgeBg: 'bg-amber-100',
      badgeText: 'text-amber-900',
      accent: 'amber'
    },
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Pan integral con hummus y pepino rallado',
        almuerzo: 'Pollo al horno con batata y verduras',
        cena: 'Sopa de fideos con calabaza',
        snack: 'Fruta'
      },
      {
        dayName: 'Martes',
        desayuno: 'Avena con pera',
        almuerzo: 'Quinoa con calabaza y queso',
        cena: 'Puré de brócoli con papa',
        snack: 'Yogur'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Yogur con plátano',
        almuerzo: 'Pescado con arroz y guisantes',
        cena: 'Verduras al vapor con pasta',
        snack: 'Compota'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Tortilla francesa con champiñones',
        almuerzo: 'Hamburguesitas de lenteja y arroz',
        cena: 'Crema de zanahoria',
        snack: 'Fruta'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Muffin de zanahoria',
        almuerzo: 'Estofado de ternera con verduras',
        cena: 'Puré de batata',
        snack: 'Yogur'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Crepe integral con puré de fruta',
        almuerzo: 'Croquetas de brócoli y queso',
        cena: 'Puré de calabacín con papa',
        snack: 'Fruta'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Panecillo de calabaza',
        almuerzo: 'Arroz con pollo y verduras',
        cena: 'Puré de camote con garbanzos',
        snack: 'Compota'
      }
    ],
    shoppingList: [
      {
        category: 'Verduras',
        icon: '🥦',
        items: ['Calabaza (1)', 'Zanahoria (3)', 'Batata (2)', 'Papa (2)', 'Calabacín (2)', 'Brócoli (1)', 'Champiñones (100 g)', 'Guisantes (1 taza)', 'Pepino (1)', 'Tomate (2)']
      },
      {
        category: 'Proteínas',
        icon: '🍗',
        items: ['Pollo (350 g)', 'Ternera (250 g)', 'Pescado (180 g)', 'Lentejas (1 taza)', 'Garbanzos (1 taza)']
      },
      {
        category: 'Frutas',
        icon: '🍎',
        items: ['Pera (2)', 'Manzana (2)', 'Plátano (2)', 'Fruta variada (2–3)']
      },
      {
        category: 'Cereales',
        icon: '🌾',
        items: ['Pan integral (1)', 'Avena (300 g)', 'Pasta (1 taza)', 'Arroz (1 taza)', 'Quinoa (1 taza)', 'Fideos finos (1 taza)']
      },
      {
        category: 'Lácteos',
        icon: '🧀',
        items: ['Yogur natural (600 g)', 'Queso fresco/rallado (200 g)']
      }
    ],
    rawShoppingText: [
      '🥦 Calabaza (1), zanahoria (3), batata (2), papa (2), calabacín (2), brócoli (1), champiñones (100 g), guisantes (1 taza), pepino (1), tomate (2)',
      '🍗 Pollo (350 g), ternera (250 g), pescado (180 g), lentejas (1 taza), garbanzos (1 taza)',
      '🍎 Pera (2), manzana (2), plátano (2), fruta variada (2–3)',
      '🌾 Pan integral (1), avena (300 g), pasta (1 taza), arroz (1 taza), quinoa (1 taza), fideos finos (1 taza)',
      '🧀 Yogur natural (600 g), queso fresco/rallado (200 g)'
    ]
  },
  {
    weekNumber: 20,
    title: 'Semana 20: Pequeño chef feliz',
    subtitle: 'Empanaditas de pollo y espinaca, albóndigas de carne magra y tortitas de plátano.',
    stageName: 'Etapa 4',
    stageAgeRange: '18 a 24 meses',
    stageEmoji: '🌞',
    themeColor: {
      bgLight: 'bg-amber-50',
      border: 'border-amber-200',
      headerBg: 'from-amber-600 to-yellow-600',
      badgeBg: 'bg-amber-100',
      badgeText: 'text-amber-900',
      accent: 'amber'
    },
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Crepe integral con puré de fruta',
        almuerzo: 'Empanaditas de pollo y espinaca',
        cena: 'Verduras al vapor con pasta',
        snack: 'Yogur con compota'
      },
      {
        dayName: 'Martes',
        desayuno: 'Avena con manzana',
        almuerzo: 'Quinoa con verduras y queso',
        cena: 'Puré de batata con pollo',
        snack: 'Fruta'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Pan integral con queso fresco',
        almuerzo: 'Pescado con arroz y zanahoria',
        cena: 'Crema de calabaza',
        snack: 'Galleta de avena'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Yogur con granola',
        almuerzo: 'Albóndigas de carne magra con tomate',
        cena: 'Puré de brócoli con papa',
        snack: 'Fruta'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Tortitas de avena y plátano',
        almuerzo: 'Guiso de alubias con verduras',
        cena: 'Sopa de verduras',
        snack: 'Compota'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Muffin de espinaca y queso',
        almuerzo: 'Pasta corta con salsa de calabacín',
        cena: 'Puré de zanahoria con queso',
        snack: 'Yogur'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Pan pita con hummus',
        almuerzo: 'Pollo al horno con batata',
        cena: 'Puré de calabacín con papa',
        snack: 'Fruta'
      }
    ],
    shoppingList: [
      {
        category: 'Verduras',
        icon: '🥦',
        items: ['Calabaza (1)', 'Zanahoria (3)', 'Batata (3)', 'Papa (2)', 'Calabacín (2)', 'Brócoli (1)', 'Espinaca (100 g)', 'Tomate (2)']
      },
      {
        category: 'Proteínas',
        icon: '🍗',
        items: ['Pollo (350 g)', 'Carne magra (200 g)', 'Pescado (180 g)', 'Alubias (1 taza)']
      },
      {
        category: 'Frutas',
        icon: '🍎',
        items: ['Manzana (2)', 'Plátano (2)', 'Fruta variada (2–3)']
      },
      {
        category: 'Cereales',
        icon: '🌾',
        items: ['Pan integral (1)', 'Pan pita (1)', 'Avena (300 g)', 'Pasta (1 taza)', 'Arroz (1 taza)', 'Quinoa (1 taza)', 'Granola (1 taza)']
      },
      {
        category: 'Lácteos',
        icon: '🧀',
        items: ['Yogur natural (600 g)', 'Queso fresco/rallado (200 g)']
      }
    ],
    rawShoppingText: [
      '🥦 Calabaza (1), zanahoria (3), batata (3), papa (2), calabacín (2), brócoli (1), espinaca (100 g), tomate (2)',
      '🍗 Pollo (350 g), carne magra (200 g), pescado (180 g), alubias (1 taza)',
      '🍎 Manzana (2), plátano (2), fruta variada (2–3)',
      '🌾 Pan integral (1), pan pita (1), avena (300 g), pasta (1 taza), arroz (1 taza), quinoa (1 taza), granola (1 taza)',
      '🧀 Yogur natural (600 g), queso fresco/rallado (200 g)'
    ]
  },
  {
    weekNumber: 21,
    title: 'Semana 21: Mini chef curioso',
    subtitle: 'Muffins de avena y plátano, chips blandos de camote y lasaña suave.',
    stageName: 'Etapa 4',
    stageAgeRange: '18 a 24 meses',
    stageEmoji: '🌞',
    themeColor: {
      bgLight: 'bg-amber-50',
      border: 'border-amber-200',
      headerBg: 'from-amber-600 to-yellow-600',
      badgeBg: 'bg-amber-100',
      badgeText: 'text-amber-900',
      accent: 'amber'
    },
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Muffins de avena y plátano',
        almuerzo: 'Quinoa con calabaza y queso fresco',
        cena: 'Puré de lentejas con batata',
        snack: 'Chips blandos de camote'
      },
      {
        dayName: 'Martes',
        desayuno: 'Yogur con fruta',
        almuerzo: 'Arroz con pollo y verduras',
        cena: 'Crema de zanahoria suave',
        snack: 'Galletas de avena'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Pan integral con aguacate',
        almuerzo: 'Pescado al vapor con arroz y brócoli',
        cena: 'Verduras al vapor con pasta',
        snack: 'Compota casera'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Avena con pera madura',
        almuerzo: 'Hamburguesitas de lenteja con arroz',
        cena: 'Puré de calabacín con papa',
        snack: 'Fruta'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Crepe integral con puré de manzana',
        almuerzo: 'Guiso de alubias con verduras',
        cena: 'Puré de brócoli con papa',
        snack: 'Yogur'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Muffin de zanahoria y manzana',
        almuerzo: 'Mini lasaña de verduras y carne',
        cena: 'Puré de batata con queso fresco',
        snack: 'Fruta'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Yogur con granola casera',
        almuerzo: 'Pollo al horno con batata',
        cena: 'Puré de calabaza con garbanzos',
        snack: 'Fruta variada'
      }
    ],
    shoppingList: [
      {
        category: 'Verduras',
        icon: '🥦',
        items: ['Calabaza (1)', 'Zanahoria (3)', 'Batata (2)', 'Papa (2)', 'Calabacín (2)', 'Brócoli (1)', 'Camote (2)', 'Tomate (2)']
      },
      {
        category: 'Proteínas',
        icon: '🍗',
        items: ['Pollo (350 g)', 'Carne magra (200 g)', 'Pescado (180 g)', 'Lentejas (1 taza)', 'Garbanzos (1 taza)', 'Alubias (1 taza)']
      },
      {
        category: 'Frutas',
        icon: '🍎',
        items: ['Plátano (2)', 'Manzana (2)', 'Pera (2)', 'Fruta variada (2–3)']
      },
      {
        category: 'Cereales',
        icon: '🌾',
        items: ['Pan integral (1)', 'Avena (300 g)', 'Pasta (1 taza)', 'Arroz (1 taza)', 'Quinoa (1 taza)', 'Granola (1 taza)']
      },
      {
        category: 'Lácteos',
        icon: '🧀',
        items: ['Yogur natural (600 g)', 'Queso fresco/rallado (200 g)']
      }
    ],
    rawShoppingText: [
      '🥦 Calabaza (1), zanahoria (3), batata (2), papa (2), calabacín (2), brócoli (1), camote (2), tomate (2)',
      '🍗 Pollo (350 g), carne magra (200 g), pescado (180 g), lentejas (1 taza), garbanzos (1 taza), alubias (1 taza)',
      '🍎 Plátano (2), manzana (2), pera (2), fruta variada (2–3)',
      '🌾 Pan integral (1), avena (300 g), pasta (1 taza), arroz (1 taza), quinoa (1 taza), granola (1 taza)',
      '🧀 Yogur natural (600 g), queso fresco/rallado (200 g)'
    ]
  },
  {
    weekNumber: 22,
    title: 'Semana 22: Pequeños grandes bocados',
    subtitle: 'Albóndigas de pollo con arroz integral y croquetas de brócoli y queso.',
    stageName: 'Etapa 4',
    stageAgeRange: '18 a 24 meses',
    stageEmoji: '🌞',
    themeColor: {
      bgLight: 'bg-amber-50',
      border: 'border-amber-200',
      headerBg: 'from-amber-600 to-yellow-600',
      badgeBg: 'bg-amber-100',
      badgeText: 'text-amber-900',
      accent: 'amber'
    },
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Yogur con granola casera',
        almuerzo: 'Albóndigas de pollo con arroz integral',
        cena: 'Puré de zanahoria y brócoli',
        snack: 'Compota'
      },
      {
        dayName: 'Martes',
        desayuno: 'Avena con manzana y canela',
        almuerzo: 'Pasta corta con salsa de calabacín',
        cena: 'Sopa de verduras',
        snack: 'Fruta'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Tostadas integrales con queso fresco',
        almuerzo: 'Pescado con arroz y guisantes',
        cena: 'Puré de batata',
        snack: 'Yogur'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Crepe integral con puré de pera',
        almuerzo: 'Quinoa con calabaza y queso',
        cena: 'Verduras al vapor con pasta',
        snack: 'Galletas de avena'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Muffin de espinaca y queso',
        almuerzo: 'Pollo con batata al horno',
        cena: 'Puré de calabacín con papa',
        snack: 'Fruta'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Pan pita con hummus',
        almuerzo: 'Estofado de ternera con verduras',
        cena: 'Crema de zanahoria',
        snack: 'Yogur'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Tortitas de avena y plátano',
        almuerzo: 'Croquetas de brócoli y queso',
        cena: 'Puré de camote con garbanzo',
        snack: 'Compota'
      }
    ],
    shoppingList: [
      {
        category: 'Verduras',
        icon: '🥦',
        items: ['Calabaza (1)', 'Zanahoria (3)', 'Batata (2)', 'Papa (2)', 'Calabacín (2)', 'Brócoli (1)', 'Espinaca (100 g)', 'Guisantes (1 taza)', 'Tomate (2)']
      },
      {
        category: 'Proteínas',
        icon: '🍗',
        items: ['Pollo (350 g)', 'Ternera (250 g)', 'Pescado (180 g)', 'Garbanzos (1 taza)']
      },
      {
        category: 'Frutas',
        icon: '🍎',
        items: ['Manzana (2)', 'Pera (2)', 'Plátano (2)', 'Fruta variada (2–3)']
      },
      {
        category: 'Cereales',
        icon: '🌾',
        items: ['Pan integral (1)', 'Pan pita (1)', 'Avena (300 g)', 'Pasta (1 taza)', 'Arroz (1 taza)', 'Quinoa (1 taza)', 'Granola (1 taza)']
      },
      {
        category: 'Lácteos',
        icon: '🧀',
        items: ['Yogur natural (600 g)', 'Queso fresco/rallado (200 g)']
      },
      {
        category: 'Otros',
        icon: '🥫',
        items: ['Hummus (1 porción o garbanzos extra)']
      }
    ],
    rawShoppingText: [
      '🥦 Calabaza (1), zanahoria (3), batata (2), papa (2), calabacín (2), brócoli (1), espinaca (100 g), guisantes (1 taza), tomate (2)',
      '🍗 Pollo (350 g), ternera (250 g), pescado (180 g), garbanzos (1 taza)',
      '🍎 Manzana (2), pera (2), plátano (2), fruta variada (2–3)',
      '🌾 Pan integral (1), pan pita (1), avena (300 g), pasta (1 taza), arroz (1 taza), quinoa (1 taza), granola (1 taza)',
      '🧀 Yogur natural (600 g), queso fresco/rallado (200 g)',
      '🥫 Hummus (1 porción o garbanzos extra)'
    ]
  },
  {
    weekNumber: 23,
    title: 'Semana 23: Sabores que enamoran',
    subtitle: 'Arepitas de maíz con aguacate, estofado con calabaza y puré de calabacín gratinado.',
    stageName: 'Etapa 4',
    stageAgeRange: '18 a 24 meses',
    stageEmoji: '🌞',
    themeColor: {
      bgLight: 'bg-amber-50',
      border: 'border-amber-200',
      headerBg: 'from-amber-600 to-yellow-600',
      badgeBg: 'bg-amber-100',
      badgeText: 'text-amber-900',
      accent: 'amber'
    },
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Arepitas de maíz con aguacate',
        almuerzo: 'Estofado de ternera con papas y calabaza',
        cena: 'Puré de calabacín con queso rallado',
        snack: 'Bolitas de avena'
      },
      {
        dayName: 'Martes',
        desayuno: 'Yogur con fruta picada',
        almuerzo: 'Arroz con pollo y zanahoria',
        cena: 'Sopa de verduras',
        snack: 'Galleta de avena'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Avena con manzana',
        almuerzo: 'Pescado al horno con batata',
        cena: 'Verduras al vapor con pasta',
        snack: 'Compota'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Pan integral con hummus',
        almuerzo: 'Quinoa con calabaza y queso',
        cena: 'Puré de brócoli con papa',
        snack: 'Fruta'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Crepe integral con puré de pera',
        almuerzo: 'Hamburguesitas de lenteja con arroz',
        cena: 'Crema de zanahoria',
        snack: 'Yogur'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Muffin de zanahoria y manzana',
        almuerzo: 'Croquetas de brócoli y queso',
        cena: 'Puré de camote con pollo',
        snack: 'Fruta'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Panecillo de calabaza',
        almuerzo: 'Pollo al horno con batata',
        cena: 'Puré de calabaza con garbanzos',
        snack: 'Compota'
      }
    ],
    shoppingList: [
      {
        category: 'Verduras',
        icon: '🥦',
        items: ['Calabaza (1)', 'Zanahoria (3)', 'Batata (3)', 'Papa (2)', 'Calabacín (2)', 'Brócoli (1)', 'Tomate (2)', 'Aguacate (1)']
      },
      {
        category: 'Proteínas',
        icon: '🍗',
        items: ['Pollo (350 g)', 'Ternera (250 g)', 'Pescado (180 g)', 'Lentejas (1 taza)', 'Garbanzos (1 taza)']
      },
      {
        category: 'Frutas',
        icon: '🍎',
        items: ['Manzana (2)', 'Pera (2)', 'Fruta variada (2–3)']
      },
      {
        category: 'Cereales',
        icon: '🌾',
        items: ['Harina de maíz precocida (1 taza)', 'Pan integral (1)', 'Avena (300 g)', 'Pasta (1 taza)', 'Arroz (1 taza)', 'Quinoa (1 taza)']
      },
      {
        category: 'Lácteos',
        icon: '🧀',
        items: ['Yogur natural (600 g)', 'Queso fresco/rallado (200 g)']
      }
    ],
    rawShoppingText: [
      '🥦 Calabaza (1), zanahoria (3), batata (3), papa (2), calabacín (2), brócoli (1), tomate (2), aguacate (1)',
      '🍗 Pollo (350 g), ternera (250 g), pescado (180 g), lentejas (1 taza), garbanzos (1 taza)',
      '🍎 Manzana (2), pera (2), fruta variada (2–3)',
      '🌾 Harina de maíz precocida (1 taza), pan integral (1), avena (300 g), pasta (1 taza), arroz (1 taza), quinoa (1 taza)',
      '🧀 Yogur natural (600 g), queso fresco/rallado (200 g)'
    ]
  },
  {
    weekNumber: 24,
    title: 'Semana 24: Graduación de sabores',
    subtitle: '¡2 Años cumplidos! Dieta familiar completa, hábitos consolidados y autonomía total.',
    stageName: 'Etapa 4',
    stageAgeRange: '18 a 24 meses',
    stageEmoji: '🎓',
    themeColor: {
      bgLight: 'bg-amber-50',
      border: 'border-amber-200',
      headerBg: 'from-amber-600 to-emerald-600',
      badgeBg: 'bg-amber-100',
      badgeText: 'text-amber-900',
      accent: 'amber'
    },
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Batido de mango, yogur y avena',
        almuerzo: 'Mini lasaña de verduras y carne',
        cena: 'Crema de zanahoria con naranja',
        snack: 'Galletas de avena y manzana'
      },
      {
        dayName: 'Martes',
        desayuno: 'Pan integral con queso fresco',
        almuerzo: 'Quinoa con verduras y queso',
        cena: 'Puré de batata con pollo',
        snack: 'Fruta'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Avena con pera y canela',
        almuerzo: 'Pescado con arroz y brócoli',
        cena: 'Verduras al vapor con pasta',
        snack: 'Yogur'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Yogur con granola',
        almuerzo: 'Hamburguesitas de lenteja con arroz',
        cena: 'Puré de calabacín con papa',
        snack: 'Compota'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Tortitas de avena y plátano',
        almuerzo: 'Estofado de ternera con verduras',
        cena: 'Puré de brócoli con papa',
        snack: 'Fruta'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Crepe integral con puré de manzana',
        almuerzo: 'Croquetas de brócoli y queso',
        cena: 'Puré de zanahoria con queso',
        snack: 'Yogur'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Pan pita con hummus',
        almuerzo: 'Pollo al horno con batata',
        cena: 'Puré de calabaza con garbanzos',
        snack: 'Fruta'
      }
    ],
    shoppingList: [
      {
        category: 'Verduras',
        icon: '🥦',
        items: ['Calabaza (1)', 'Zanahoria (3)', 'Batata (3)', 'Papa (2)', 'Calabacín (2)', 'Brócoli (1)', 'Mango (1)', 'Naranja (1)', 'Tomate (2)']
      },
      {
        category: 'Proteínas',
        icon: '🍗',
        items: ['Pollo (350 g)', 'Ternera (250 g)', 'Pescado (180 g)', 'Lentejas (1 taza)', 'Garbanzos (1 taza)']
      },
      {
        category: 'Frutas',
        icon: '🍎',
        items: ['Manzana (2)', 'Pera (2)', 'Plátano (2)', 'Fruta variada (2–3)']
      },
      {
        category: 'Cereales',
        icon: '🌾',
        items: ['Pan integral (1)', 'Pan pita (1)', 'Avena (300 g)', 'Pasta (1 taza)', 'Arroz (1 taza)', 'Quinoa (1 taza)', 'Granola (1 taza)']
      },
      {
        category: 'Lácteos',
        icon: '🧀',
        items: ['Yogur natural (600 g)', 'Queso fresco/rallado (200 g)']
      }
    ],
    rawShoppingText: [
      '🥦 Calabaza (1), zanahoria (3), batata (3), papa (2), calabacín (2), brócoli (1), mango (1), naranja (1), tomate (2)',
      '🍗 Pollo (350 g), ternera (250 g), pescado (180 g), lentejas (1 taza), garbanzos (1 taza)',
      '🍎 Manzana (2), pera (2), plátano (2), fruta variada (2–3)',
      '🌾 Pan integral (1), pan pita (1), avena (300 g), pasta (1 taza), arroz (1 taza), quinoa (1 taza), granola (1 taza)',
      '🧀 Yogur natural (600 g), queso fresco/rallado (200 g)'
    ]
  }
];
