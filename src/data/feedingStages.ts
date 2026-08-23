import { FeedingStageInfo } from '../types';

export const FEEDING_STAGES: FeedingStageInfo[] = [
  {
    month: 6,
    label: '6 meses',
    title: 'El gran inicio: Primeros sabores',
    subtitle: 'Descubrimiento de texturas suaves y presentación de alimentos uno a uno.',
    textureSummary: 'Puré suave y homogéneo, o trozos grandes y muy suaves (BLW).',
    textureDetails: 'Textura líquida-espesa, sin grumos duros. Si haces BLW (Baby-Led Weaning), alimentos en bastones largos y tiernos que el bebé pueda sujetar con el puño y aplastar con las encías.',
    dailyFrequency: '1 comida sólida al día (a mediodía o media mañana) para probar tolerancia.',
    milkFeeding: 'La leche materna o de fórmula sigue siendo el alimento principal a demanda.',
    keyMilestone: 'El bebé se sienta con mínimo apoyo, pierde el reflejo de extrusión (no empuja la cuchara con la lengua) y muestra interés activo por la comida.',
    allowedFoods: [
      {
        category: 'Verduras',
        icon: 'Carrot',
        items: ['Zanahoria cocida', 'Calabacín / Zucchini', 'Calabaza / Zapallo', 'Papas / Patatas', 'Boniato / Camote', 'Puerro suave', 'Chayote']
      },
      {
        category: 'Frutas',
        icon: 'Apple',
        items: ['Plátano maduro', 'Pera cocida o muy madura', 'Manzana cocida / asada', 'Aguacate / Palta', 'Papaya madura']
      },
      {
        category: 'Proteínas (Ricas en Hierro)',
        icon: 'Fish',
        items: ['Pollo sin piel (pechuga / muslo)', 'Pavo', 'Ternera / Carne de res magra', 'Yema de huevo cocida bien cuajada', 'Lentejas rojas bien cocidas']
      },
      {
        category: 'Cereales sin gluten y con gluten',
        icon: 'Wheat',
        items: ['Avena suave cocida', 'Arroz blanco o integral bien cocido', 'Maíz / Polenta', 'Quinoa lavada']
      },
      {
        category: 'Grasas saludables',
        icon: 'Droplet',
        items: ['Aceite de oliva virgen extra (1 cucharadita cruda sobre la papilla o alimentos)', 'Aguacate machacado']
      }
    ],
    preparations: [
      {
        title: 'Al vapor o hervido con poco agua',
        desc: 'Cocina las verduras al vapor para preservar al máximo los nutrientes y vitaminas.',
        icon: 'Flame'
      },
      {
        title: 'Técnica de corte BLW (Forma de dedo)',
        desc: 'Cortes en bastones de 5-7 cm de largo, tan suaves que puedas aplastarlos entre tus dedos índice y pulgar.',
        icon: 'Hand'
      },
      {
        title: 'Regla de los 3 Días',
        desc: 'Introduce cada nuevo alimento por separado durante 3 días consecutivos para observar posibles alergias o intolerancias.',
        icon: 'Calendar'
      }
    ],
    recommendations: [
      'Ofrece el alimento después de su toma de leche habitual o 30-45 minutos después para que no esté hambriento ni irritable.',
      'No fuerces cantidades: en esta etapa, "alimentación complementaria" es un juego de exploración y aprendizaje.',
      'Ofrece pequeños sorbos de agua potable en vasito abierto durante las comidas.',
      'Añade siempre 1 cucharadita de aceite de oliva virgen extra en crudo para aportar energía y ácidos grasos esenciales.'
    ],
    importantWarnings: [
      '⛔ NUNCA dar MIEL antes del año (riesgo de botulismo infantil grave).',
      '⛔ CERO sal añadida: los riñones del bebé aún son inmaduros.',
      '⛔ CERO azúcar, panela, mieles, siropes o edulcorantes.',
      '⛔ NUNCA ofrecer frutos secos enteros, uvas enteras, zanahoria cruda o salchichas redondas (altísimo riesgo de asfixia).',
      '⛔ No dar espinacas, acelgas ni remolacha en exceso por su alto contenido en nitratos.'
    ]
  },
  {
    month: 7,
    label: '7 meses',
    title: 'Ampliando el repertorio',
    subtitle: 'Nuevos sabores, mezclas de 2 o 3 ingredientes y textura ligeramente más densa.',
    textureSummary: 'Purés más densos y primeras texturas machacadas con tenedor.',
    textureDetails: 'Pasar gradualmente del puré líquido a texturas grumosas suaves. Se estimula el movimiento de la mandíbula y lengua.',
    dailyFrequency: '1 a 2 comidas al día (almuerzo y merienda o cena ligera).',
    milkFeeding: 'Leche a demanda antes o después de la comida.',
    keyMilestone: 'Mayor coordinación mano-boca, empieza a hacer pinza gruesa y mastica con las encías.',
    allowedFoods: [
      {
        category: 'Nuevas Verduras',
        icon: 'Carrot',
        items: ['Brócoli en ramilletes suaves', 'Coliflor', 'Judías verdes / Ejotes', 'Guisantes / Chícharos cocidos y aplastados']
      },
      {
        category: 'Nuevas Frutas',
        icon: 'Apple',
        items: ['Melocotón / Durazno maduro', 'Ciruela dulce', 'Mango maduro', 'Arándanos bien aplastados', 'Naranja / Mandarina en gajos sin hollejo']
      },
      {
        category: 'Proteínas y Legumbres',
        icon: 'Fish',
        items: ['Pescado blanco (merluza, bacalao fresco, lenguado sin espinas)', 'Huevo entero bien cocido', 'Garbanzos cocidos y machacados', 'Tofu sedoso']
      },
      {
        category: 'Cereales y Pastas',
        icon: 'Wheat',
        items: ['Pasta pequeña o fideos bien cocidos', 'Copos de avena en gachas', 'Pan sin sal para chupar o corteza']
      }
    ],
    preparations: [
      {
        title: 'Machacado con tenedor',
        desc: 'En lugar de licuadora completa, chafa las verduras cocidas con tenedor para crear una textura con cuerpo suave.',
        icon: 'Utensils'
      },
      {
        title: 'Ramilletes de Brócoli BLW',
        desc: 'El tallo sirve de agarradera natural mientras el bebé muerde la parte suave de las flores cocidas.',
        icon: 'Sparkles'
      }
    ],
    recommendations: [
      'Empieza a combinar alimentos que ya haya tolerado previamente (ej. pollo + zanahoria + patata).',
      'Permite que el bebé toque y manipule la comida con sus propias manos, favorece la estimulación sensorial.',
      'El pescado blanco aporta ácidos grasos omega-3 y proteínas de fácil digestión.'
    ],
    importantWarnings: [
      '⛔ Cuidado estricto con espinas en el pescado: revisar minuciosamente con los dedos.',
      '⛔ No dar pescados azules grandes (atún rojo, pez espada, cazón) por acumulación de mercurio.',
      '⛔ Mantener la prohibición total de sal, azúcar y miel.'
    ]
  },
  {
    month: 8,
    label: '8 meses',
    title: 'Texturas con relieve y pinza digital',
    subtitle: 'Aparición de los primeros dientecitos y práctica de masticación activa.',
    textureSummary: 'Machacado espeso, trocitos blandos y bocaditos del tamaño de una moneda.',
    textureDetails: 'Alimentos desmenuzados, carne picada muy fina o en hamburguesitas suaves al vapor, verduras en trocitos que se deshacen al contacto.',
    dailyFrequency: '2 comidas completas al día (ej. Almuerzo y Merienda/Cena).',
    milkFeeding: 'Tomas de leche habituales distribuidas en el día.',
    keyMilestone: 'Desarrollo de la pinza digital (pulgar e índice) para agarrar trocitos pequeños de la bandeja.',
    allowedFoods: [
      {
        category: 'Alimentos nuevos',
        icon: 'Carrot',
        items: ['Pimiento dulce cocido', 'Berenjena bien cocida', 'Espárragos suaves', 'Calabacín en rodajas doradas sin sal']
      },
      {
        category: 'Frutas de temporada',
        icon: 'Apple',
        items: ['Fresas maduras cortadas a lo largo', 'Melón y sandía en bastones', 'Kiwi dulce bien maduro']
      },
      {
        category: 'Proteínas avanzadas',
        icon: 'Fish',
        items: ['Pescado azul pequeño (salmón salvaje, sardina limpia y desespinada)', 'Carne de cerdo magra (lomo)', 'Yogur natural sin azúcar ni edulcorantes (opcional, en pequeñas cantidades)']
      }
    ],
    preparations: [
      {
        title: 'Mini hamburguesas caseras',
        desc: 'Pollo o ternera picada mezclada con calabacín rallado y avena, cocinadas a la plancha sin aceite quemado ni sal.',
        icon: 'Cookie'
      },
      {
        title: 'Cortes en tiras y gajos',
        desc: 'Frutas suaves cortadas en juliana gruesa para favorecer el agarre con pinza.',
        icon: 'Scissors'
      }
    ],
    recommendations: [
      'Si el bebé come purés, no demores la transición a grumos; la ventana óptima para aceptar texturas es entre 8 y 10 meses.',
      'Crea un ambiente tranquilo y come en familia: los bebés aprenden comiendo por imitación visual.'
    ],
    importantWarnings: [
      '⛔ No dar lácteos azucarados tipo "mi primer yogur": solo yogur natural 100% sin azúcar.',
      '⛔ Evitar carnes procesadas (embutidos, jamón york con sal, salchichas).'
    ]
  },
  {
    month: 9,
    label: '9 meses',
    title: 'Autonomía y comida en familia',
    subtitle: 'El bebé participa con más soltura y explora cuchara de aprendizaje.',
    textureSummary: 'Trocitos blandos, alimentos picados, albóndigas tiernas y pastas cocidas.',
    textureDetails: 'Trozos más pequeños adaptados a su pinza fina. Puede comer prácticamente todo lo que come la familia (sin sal ni picantes).',
    dailyFrequency: '2 a 3 tomas de comida sólida al día + leche materna/fórmula.',
    milkFeeding: 'Mantener un mínimo de 500 ml de leche al día entre tomas.',
    keyMilestone: 'Intenta usar la cuchara por sí mismo y bebe agua en vaso con boquilla o vaso abierto con ayuda.',
    allowedFoods: [
      {
        category: 'Variedad completa',
        icon: 'Carrot',
        items: ['Tomate maduro pelado', 'Alcachofa tierna en corazones', 'Champiñones cocidos bien picados']
      },
      {
        category: 'Legumbres enteras',
        icon: 'Wheat',
        items: ['Lentejas enteras bien tiernas', 'Garbanzos cocidos aplastados ligeramente', 'Alubias / Frijoles tiernos']
      },
      {
        category: 'Quesos suaves pasteurizados',
        icon: 'Utensils',
        items: ['Queso fresco sin sal o ricotta pasteurizada', 'Mozzarella fresca baja en sodio']
      }
    ],
    preparations: [
      {
        title: 'Tortitas y muffins sin azúcar',
        desc: 'Hechas con plátano maduro, huevo y avena al horno o sartén antiadherente.',
        icon: 'ChefHat'
      },
      {
        title: 'Guisos familiares adaptados',
        desc: 'Cocina el guiso familiar sin sal ni condimentos fuertes, aparta la porción del bebé y sala el resto después.',
        icon: 'Soup'
      }
    ],
    recommendations: [
      'Fomenta el uso de su propia cuchara de mango corto, aunque se manche: es parte indispensable de su desarrollo motor.',
      'Ofrece variedad de colores en el plato para estimular el apetito.'
    ],
    importantWarnings: [
      '⛔ Siempre vigilar al bebé en todo momento mientras come, nunca dejarlo solo con alimentos.',
      '⛔ Los alimentos duros y redondos deben seguir cortándose en 4 partes longitudinales (arándanos, tomates cherry, uvas).'
    ]
  },
  {
    month: 10,
    label: '10 meses',
    title: 'Consolidación de hábitos y texturas',
    subtitle: 'Masticación eficiente y menú estructurado en 3 comidas principales.',
    textureSummary: 'Alimentos enteros blandos cortados en cubos pequeños y tiras.',
    textureDetails: 'Consistencia sólida tierna. Se elimina casi por completo la necesidad de triturados finos.',
    dailyFrequency: '3 comidas al día (Desayuno, Comida, Cena) + 1 snack saludable opcional.',
    milkFeeding: 'Leche a demanda tras las comidas principales.',
    keyMilestone: 'Mastica con movimientos rotatorios de mandíbula y traga con facilidad bocados consistentes.',
    allowedFoods: [
      {
        category: 'Nuevos añadidos',
        icon: 'Sparkles',
        items: ['Huevo en tortilla francesa bien cocida', 'Pescados azules medianos (caballa sin espinas)', 'Arroz con verduras', 'Frutos secos en crema 100% (cacahuete, almendra sin sal)']
      }
    ],
    preparations: [
      {
        title: 'Crema de frutos secos 100% untada',
        desc: 'NUNCA frutos secos enteros. Sí en capa fina sobre manzana cocida, plátano o pan para aportar energía.',
        icon: 'Nut'
      },
      {
        title: 'Bastones crujientes por fuera pero blandos dentro',
        desc: 'Boniato o calabaza al horno en palitos con un toque de orégano o tomillo.',
        icon: 'Flame'
      }
    ],
    recommendations: [
      'Introduce especias suaves y hierbas aromáticas: orégano, albahaca, canela, nuez moscada, comino (en pequeñas cantidades).',
      'Mantén horarios regulares para crear una rutina alimentaria saludable.'
    ],
    importantWarnings: [
      '⛔ Nada de alimentos fritos con rebozados grasos.',
      '⛔ Cuidado con texturas pegajosas o gominolas.'
    ]
  },
  {
    month: 11,
    label: '11 meses',
    title: 'Camino a la mesa familiar',
    subtitle: 'Preparando la transición al primer año de vida con máxima autonomía.',
    textureSummary: 'La misma comida familiar con pequeñas adaptaciones de tamaño y sin sal.',
    textureDetails: 'Trozos normales masticables. El bebé come prácticamente lo mismo que los adultos.',
    dailyFrequency: '3 comidas principales + 1 a 2 tentempiés saludables (fruta, yogur, bastones de verdura).',
    milkFeeding: 'Leche materna o de continuación según pauta pediátrica.',
    keyMilestone: 'Gran destreza con los dedos, bebe con soltura en vaso y comparte la mesa en la misma vajilla infantil.',
    allowedFoods: [
      {
        category: 'Variedad casi total',
        icon: 'CheckCircle',
        items: ['Casi todas las verduras y frutas', 'Legumbres de todo tipo en guisos suaves', 'Cereales integrales', 'Pescados y carnes variadas']
      }
    ],
    preparations: [
      {
        title: 'Platos combinados coloridos',
        desc: 'Distribuye en plato con separadores: 1 porción de verdura + 1 porción de proteína rica en hierro + 1 porción de carbohidrato.',
        icon: 'LayoutGrid'
      }
    ],
    recommendations: [
      'Permite que el bebé decida cuánta cantidad come; respeta sus señales de saciedad (girar la cabeza, cerrar la boca).',
      'Haz de la hora de la comida un momento festivo y libre de pantallas de TV o móviles.'
    ],
    importantWarnings: [
      '⛔ Prohibido el uso de pantallas o distracciones digitales durante la comida (favorece la mala masticación y atracones futuros).'
    ]
  },
  {
    month: 12,
    label: '12 meses+',
    title: '¡Primer cumpleaños! Transición completada',
    subtitle: 'Llegada a la dieta familiar completa e incorporación gradual de nuevos lácteos.',
    textureSummary: 'Sólidos normales adaptados, troceados o enteros según el alimento.',
    textureDetails: 'Dieta completa. Puede masticar carnes en trozos pequeños, verduras cocidas al dente y frutas maduras enteras o en gajos.',
    dailyFrequency: '3 comidas completas + 2 colaciones saludables al día.',
    milkFeeding: 'Puede introducirse leche entera de vaca pasteurizada (máximo 500 ml/día) o continuar lactancia materna prolongada.',
    keyMilestone: 'Usa la cuchara con mayor precisión, mastica cualquier textura familiar y disfruta de los sabores variados.',
    allowedFoods: [
      {
        category: 'Alimentos desbloqueados tras el 1er año',
        icon: 'Gift',
        items: ['Leche entera de vaca pasteurizada', 'Quesos curados y semicurados (bajos en sal)', 'Miel pura (introducir con moderación)', 'Espinacas y acelgas en raciones completas']
      }
    ],
    preparations: [
      {
        title: 'Menús semanales familiares',
        desc: 'El menú del bebé se integra 100% con la cocina de casa.',
        icon: 'Calendar'
      }
    ],
    recommendations: [
      'La leche de vaca no debe desplazar a los alimentos ricos en hierro.',
      'Sigue limitando al máximo la sal y los azúcares añadidos en toda la familia.',
      'El agua debe ser la única bebida habitual; evitar zumos envasados y refrescos.'
    ],
    importantWarnings: [
      '⛔ Los frutos secos enteros siguen prohibidos hasta los 4-5 años por riesgo de atragantamiento.',
      '⛔ Evitar carnes y pescados crudos (sushi, tártar, huevos poco hechos).'
    ]
  }
];
