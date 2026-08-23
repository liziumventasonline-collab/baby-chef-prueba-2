import { WeeklyMealPlan } from '../types';

export const WEEKLY_MENUS_DATA: WeeklyMealPlan[] = [
  // ==========================================
  // --- MES 6 (INICIO: 1 COMIDA / ALMUERZO) --
  // ==========================================
  {
    month: 6,
    week: 1,
    title: 'Mes 6 - Semana 1: Primeros Sabores Suaves',
    subtitle: 'Introducción individual (regla de los 3 días) para evaluar tolerancia y reflejos.',
    summaryNotes: [
      'Ofrecer siempre 1 solo alimento nuevo durante 3 días continuos.',
      'Momento ideal: a media mañana o mediodía, 30 min tras su toma de leche.',
      'Textura: puré liso sin grumos o bastón blando BLW.'
    ],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Leche materna o fórmula a demanda',
        almuerzo: 'Puré suave de calabaza / zapallo (1-2 cucharaditas para degustar)',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Leche materna o fórmula',
        notas: 'Día 1 de introducción de calabaza. Observar deposiciones y piel.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Leche materna o fórmula',
        almuerzo: 'Puré suave de calabaza / zapallo (2-3 cucharaditas)',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Leche materna o fórmula',
        notas: 'Día 2 de calabaza. Ajustar textura con un poco de leche materna.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Leche materna o fórmula',
        almuerzo: 'Puré de calabaza / zapallo con 1 cdita de aceite de oliva en crudo',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Leche materna o fórmula',
        notas: 'Día 3 de calabaza. Alimento superado y tolerado.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Leche materna o fórmula',
        almuerzo: 'Puré de zanahoria al vapor suave (1-2 cucharaditas)',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Leche materna o fórmula',
        notas: 'Día 1 de zanahoria. Nuevo sabor terroso y dulce.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Leche materna o fórmula',
        almuerzo: 'Puré de zanahoria al vapor (2-3 cucharaditas)',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Leche materna o fórmula',
        notas: 'Día 2 de zanahoria. Ofrecer sorbitos de agua en vasito abierto.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Leche materna o fórmula',
        almuerzo: 'Puré de zanahoria con gotitas de aceite de oliva',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Leche materna o fórmula',
        notas: 'Día 3 de zanahoria. Alimento tolerado exitosamente.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Leche materna o fórmula',
        almuerzo: 'Puré combinado de calabaza y zanahoria (ambos ya probados)',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Leche materna o fórmula',
        notas: 'Día de disfrute con los dos primeros alimentos dominados.'
      }
    ]
  },
  {
    month: 6,
    week: 2,
    title: 'Mes 6 - Semana 2: Tubérculos y Frutas Maduras',
    subtitle: 'Incorporamos camote/batata y puré de pera o manzana.',
    summaryNotes: ['Camote al vapor rico en energía y betacarotenos.', 'Pera madura cocida suave para la pancita.'],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Leche materna o fórmula',
        almuerzo: 'Puré de camote / boniato al vapor',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Leche materna o fórmula',
        notas: 'Día 1 de camote.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Leche materna o fórmula',
        almuerzo: 'Puré de camote / boniato suave',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Leche materna o fórmula',
        notas: 'Día 2 de camote.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Leche materna o fórmula',
        almuerzo: 'Puré de camote con aceite de oliva',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Leche materna o fórmula',
        notas: 'Día 3 de camote superado.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Leche materna o fórmula',
        almuerzo: 'Puré de pera madura al vapor',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Leche materna o fórmula',
        notas: 'Día 1 de pera. Ayuda al tránsito intestinal.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Leche materna o fórmula',
        almuerzo: 'Puré de pera suave',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Leche materna o fórmula',
        notas: 'Día 2 de pera.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Leche materna o fórmula',
        almuerzo: 'Puré de pera tibia',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Leche materna o fórmula',
        notas: 'Día 3 de pera tolerada.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Leche materna o fórmula',
        almuerzo: 'Puré de camote + compota de pera de postre',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Leche materna o fórmula',
        notas: 'Menú completo dominado.'
      }
    ]
  },
  {
    month: 6,
    week: 3,
    title: 'Mes 6 - Semana 3: Primeras Proteínas y Hierro',
    subtitle: 'Introducimos pollo tierno para reponer depósitos de hierro y zinc.',
    summaryNotes: ['El hierro es el nutriente crítico a partir de los 6 meses.'],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Leche materna o fórmula',
        almuerzo: 'Puré de calabaza con pollo cocido bien triturado',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Leche materna o fórmula',
        notas: 'Día 1 de pollo (proteína animal rica en hierro).'
      },
      {
        dayName: 'Martes',
        desayuno: 'Leche materna o fórmula',
        almuerzo: 'Puré de zanahoria con pollo suave',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Leche materna o fórmula',
        notas: 'Día 2 de pollo.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Leche materna o fórmula',
        almuerzo: 'Puré de calabacín / zucchini suave',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Leche materna o fórmula',
        notas: 'Día 1 de calabacín.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Leche materna o fórmula',
        almuerzo: 'Puré de calabacín con pollo',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Leche materna o fórmula',
        notas: 'Día 2 de calabacín.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Leche materna o fórmula',
        almuerzo: 'Puré de manzana asada al vapor',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Leche materna o fórmula',
        notas: 'Día 1 de manzana cocida.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Leche materna o fórmula',
        almuerzo: 'Puré de manzana tibia con canela suave',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Leche materna o fórmula',
        notas: 'Día 2 de manzana.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Leche materna o fórmula',
        almuerzo: 'Puré de calabacín, papa y pollo + puré de manzana',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Leche materna o fórmula',
        notas: 'Cierre de semana con alta variedad.'
      }
    ]
  },
  {
    month: 6,
    week: 4,
    title: 'Mes 6 - Semana 4: Aguacate y Primer Cereal',
    subtitle: 'Grasas de alta calidad (aguacate) y papilla de avena integral suave.',
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Leche materna o fórmula',
        almuerzo: 'Aguacate / palta machacada en crudo con tenedor',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Leche materna o fórmula',
        notas: 'Día 1 de aguacate (grasas para el cerebro).'
      },
      {
        dayName: 'Martes',
        desayuno: 'Leche materna o fórmula',
        almuerzo: 'Aguacate con puré de zanahoria',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Leche materna o fórmula',
        notas: 'Día 2 de aguacate.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Papilla suave de avena con leche materna/fórmula',
        almuerzo: 'Puré de calabaza con pollo y aceite de oliva',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Leche materna o fórmula',
        notas: 'Día 1 de avena (desayuno ligero).'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Papilla suave de avena con puré de pera',
        almuerzo: 'Puré de papa y ternera/carne de res suave',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Leche materna o fórmula',
        notas: 'Día 1 de ternera/res magra.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Leche materna o fórmula',
        almuerzo: 'Puré de camote con carne de res',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Leche materna o fórmula',
        notas: 'Día 2 de ternera.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Papilla de avena con manzana asada',
        almuerzo: 'Puré de verduras variadas con pollo',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Leche materna o fórmula',
        notas: 'Día 3 de ternera/res tolerada.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Leche materna o fórmula',
        almuerzo: 'Puré de calabacín, zanahoria, pollo y aguacate',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Leche materna o fórmula',
        notas: '¡Primer mes de alimentación complementaria completado con éxito!'
      }
    ]
  },

  // ==========================================
  // --- MES 7 (2 COMIDAS AL DÍA: ALMUERZO + CENA/DESAYUNO)
  // ==========================================
  {
    month: 7,
    week: 1,
    title: 'Mes 7 - Semana 1: Introducción a Legumbres y Texturas Rústicas',
    subtitle: 'Comenzamos a machacar con tenedor y presentamos lentejas suaves.',
    summaryNotes: ['2 tomas sólidas al día.', 'Lentejas sin piel o rojas para una digestión óptima.'],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Papilla suave de avena con compota de pera',
        almuerzo: 'Puré de lentejas rojas suaves con zanahoria y aceite de oliva',
        colacionTarde: 'Plátano maduro machacado con tenedor',
        cena: 'Leche materna o fórmula',
        notas: 'Día 1 de lentejas. Sabor nuevo terroso y alta densidad de hierro.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Leche materna o fórmula + gajo de pera muy madura',
        almuerzo: 'Puré de lentejas suaves con calabaza y gotitas de naranja',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Puré rústico de papa y calabacín',
        notas: 'Día 2 de lentejas. La vitamina C multiplica la absorción del hierro.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Papilla de avena con manzana rallada fina',
        almuerzo: 'Puré de lentejas con pollo desmenuzado finito',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Puré de camote con aceite de oliva',
        notas: 'Día 3 de lentejas superado.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Leche materna o fórmula',
        almuerzo: 'Puré de arroz integral con verduras tiernas y ternera',
        colacionTarde: 'Papaya madura machacada',
        cena: 'Puré suave de calabacín y zanahoria',
        notas: 'Día 1 de arroz integral bien pasado.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Papilla de avena con papaya',
        almuerzo: 'Puré de arroz integral con calabaza y pollo',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Puré de papa rústico con yema de huevo cocida',
        notas: 'Día 1 de huevo (yema bien cocida 100%).'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Leche materna o fórmula + plátano',
        almuerzo: 'Puré de lentejas con verduritas y arroz',
        colacionTarde: 'Compota de manzana al horno',
        cena: 'Puré de zanahoria con yema de huevo cocida',
        notas: 'Día 2 de huevo.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Papilla de avena con pera',
        almuerzo: 'Puré de ternera magra con papa, camote y calabacín',
        colacionTarde: 'Aguacate machacado con tenedor',
        cena: 'Puré suave de calabaza con aceite de oliva',
        notas: 'Día 3 de huevo completado.'
      }
    ]
  },
  {
    month: 7,
    week: 2,
    title: 'Mes 7 - Semana 2: Frijoles y Primeros Pescados Blancos',
    subtitle: 'Frijoles negros/pintos y merluza/pescado blanco sin espinas.',
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Papilla de avena con plátano',
        almuerzo: 'Puré de frijoles negros colados con calabaza y arroz',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Puré suave de papa y calabacín',
        notas: 'Día 1 de frijoles.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Leche materna o fórmula',
        almuerzo: 'Puré de frijoles con carne de res y zanahoria',
        colacionTarde: 'Pera madura machacada',
        cena: 'Puré de camote y pollo',
        notas: 'Día 2 de frijoles.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Papilla de avena con manzana',
        almuerzo: 'Puré de pescado blanco (merluza sin espinas) con papa y puerro',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Puré de calabaza con aceite de oliva',
        notas: 'Día 1 de pescado blanco (alérgeno importante en ventana inmunológica).'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Leche materna o fórmula',
        almuerzo: 'Puré de pescado blanco con calabacín y arroz',
        colacionTarde: 'Plátano maduro',
        cena: 'Puré de frijoles con zanahoria',
        notas: 'Día 2 de pescado blanco.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Papilla de avena con compota de pera',
        almuerzo: 'Pescado blanco al vapor con puré de camote',
        colacionTarde: 'Aguacate machacado',
        cena: 'Puré suave de verduras variadas',
        notas: 'Día 3 de pescado blanco superado.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Leche materna o fórmula',
        almuerzo: 'Puré de lentejas con calabaza y pollo',
        colacionTarde: 'Manzana al vapor',
        cena: 'Puré de papa con huevo duro machacado',
        notas: 'Huevo entero (clara + yema) bien cocido.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Papilla de avena con plátano y canela',
        almuerzo: 'Puré rústico de frijoles con arroz y ternera',
        colacionTarde: 'Papaya dulce',
        cena: 'Puré suave de calabacín y zanahoria',
        notas: 'Fin de semana con menú equilibrado.'
      }
    ]
  },
  {
    month: 7,
    week: 3,
    title: 'Mes 7 - Semana 3: Garbanzos y Brócoli',
    subtitle: 'Texturas más ricas y estimulación masticatoria.',
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Papilla de avena con pera',
        almuerzo: 'Puré suave de garbanzos (Hummus bebé) con zanahoria',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Puré de papa con pollo desmenuzado fino',
        notas: 'Día 1 de garbanzos.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Leche materna o fórmula',
        almuerzo: 'Puré de garbanzos con calabaza y aceite de oliva',
        colacionTarde: 'Plátano maduro machacado',
        cena: 'Puré de calabacín con ternera magra',
        notas: 'Día 2 de garbanzos.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Papilla de avena con manzana',
        almuerzo: 'Brócoli al vapor machacado con papa y pollo',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Puré de garbanzos con arroz integral',
        notas: 'Día 1 de brócoli (ramilletes muy tiernos).'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Leche materna o fórmula',
        almuerzo: 'Brócoli con puré de camote y pescado blanco',
        colacionTarde: 'Pera al vapor',
        cena: 'Puré suave de verduras con aceite de oliva',
        notas: 'Día 2 de brócoli.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Papilla de avena con papaya',
        almuerzo: 'Lentejas con arroz integral y calabaza',
        colacionTarde: 'Aguacate machacado',
        cena: 'Puré de zanahoria con huevo duro cocido',
        notas: 'Proteína vegetal y animal equilibradas.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Leche materna o fórmula + plátano',
        almuerzo: 'Puré de garbanzos con ternera y verduras',
        colacionTarde: 'Manzana al horno',
        cena: 'Puré de calabacín con pollo tierno',
        notas: 'Rico en zinc y hierro.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Papilla de avena con pera y manzana',
        almuerzo: 'Pescado blanco con puré de papa y brócoli',
        colacionTarde: 'Papaya madura',
        cena: 'Puré suave de calabaza y arroz',
        notas: 'Gran variedad de sabores consolidada.'
      }
    ]
  },
  {
    month: 7,
    week: 4,
    title: 'Mes 7 - Semana 4: Variedad Completa y Consistencia Sólida',
    subtitle: 'Consolidación de las 2 tomas diarias con papillas espesas.',
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Papilla de avena con compota de manzana',
        almuerzo: 'Puré rústico de lentejas con zanahoria y pollo',
        colacionTarde: 'Plátano machacado',
        cena: 'Puré de papa con yema de huevo y aceite de oliva',
        notas: 'Cena nutritiva y suave.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Leche materna o fórmula + pera',
        almuerzo: 'Puré de arroz con frijoles y calabaza',
        colacionTarde: 'Aguacate machacado',
        cena: 'Puré de calabacín con ternera magra',
        notas: 'Carne magra rica en B12.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Papilla de avena con pera madura',
        almuerzo: 'Pescado blanco con puré de camote y espinaca suave',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Puré de garbanzos con zanahoria',
        notas: 'Espinaca en cantidad moderada (hojas tiernas al vapor).'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Leche materna o fórmula',
        almuerzo: 'Puré de ternera con papa, calabaza y brócoli',
        colacionTarde: 'Papaya madura',
        cena: 'Sopa espesa de arroz con verduras y pollo',
        notas: 'Textura espesa con cuchara.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Papilla de avena con manzana y canela',
        almuerzo: 'Lentejas con arroz integral y aceite de oliva',
        colacionTarde: 'Plátano con gotitas de naranja',
        cena: 'Puré de calabaza con huevo duro picadito',
        notas: 'Excelente combinación proteica.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Leche materna o fórmula + plátano',
        almuerzo: 'Puré de garbanzos con pescado blanco y papa',
        colacionTarde: 'Compota de pera',
        cena: 'Puré suave de verduras con pollo',
        notas: 'Cena digestiva para buen descanso.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Papilla de avena con papaya y plátano',
        almuerzo: 'Estofadito suave de ternera con papa, zanahoria y calabacín',
        colacionTarde: 'Aguacate machacado',
        cena: 'Puré de frijoles con arroz meloso',
        notas: '¡Mes 7 superado con 15 alimentos diferentes integrados!'
      }
    ]
  },

  // ==========================================
  // --- MES 8 (INICIO FINGER FOODS Y BLW) ----
  // ==========================================
  {
    month: 8,
    week: 1,
    title: 'Mes 8 - Semana 1: Bastones Seguros y Agarre Palmar',
    subtitle: 'El bebé aprende a morder sólidos blandos por sí mismo.',
    summaryNotes: [
      'Ofrecer bastones del tamaño de tu dedo índice.',
      'Textura: se aplasta fácilmente con tus dedos pulgar e índice.',
      'Mantener postura erguida 90° en su trona.'
    ],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Bastones de plátano maduro + leche materna/fórmula',
        almuerzo: 'Bastones de camote al vapor + pollo desmenuzado jugoso',
        colacionTarde: 'Aguacate en media luna',
        cena: 'Puré rústico de lentejas con zanahoria',
        notas: 'El bebé toma los bastones con toda la mano (agarre palmar).'
      },
      {
        dayName: 'Martes',
        desayuno: 'Papilla de avena con trocitos de pera madura',
        almuerzo: 'Ramilletes de brócoli al vapor (tallo largo) con carne molida suave',
        colacionTarde: 'Leche materna o fórmula',
        cena: 'Puré de papa con huevo duro picado',
        notas: 'El brócoli actúa como su agarradera natural.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Palitos de mango firme + leche materna/fórmula',
        almuerzo: 'Bastones de zanahoria cocida tierna + filete de pescado blanco desmenuzado',
        colacionTarde: 'Plátano con avena espolvoreada',
        cena: 'Puré de frijoles negros con arroz meloso',
        notas: 'Verificar que la zanahoria esté totalmente blanda al morder.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Papilla de avena con compota de manzana',
        almuerzo: 'Bastones de calabacín con piel al vapor + tiras de pechuga de pollo tiernas',
        colacionTarde: 'Tiritas de aguacate',
        cena: 'Puré rústico de garbanzos con calabaza',
        notas: 'La piel del calabacín evita que se deslice del puñito.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Gajos de pera madura + leche materna/fórmula',
        almuerzo: 'Bastones de camote + hamburguesita blanda de lentejas y arroz',
        colacionTarde: 'Papaya en cubitos blandos',
        cena: 'Puré de calabaza con carne de res',
        notas: 'Hamburguesita vegetal casera sin sal.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Panquequito blando de avena y plátano (sin azúcar)',
        almuerzo: 'Ramilletes de brócoli + bastones de zanahoria + pollo tierno',
        colacionTarde: 'Plátano maduro',
        cena: 'Puré de papa y espinaca con yema de huevo',
        notas: 'Primer panqueque BLW de 2 ingredientes.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Papilla de avena con manzana asada',
        almuerzo: 'Bastones de calabacín + camote al vapor + pescado blanco',
        colacionTarde: 'Aguacate con aceite de oliva',
        cena: 'Sopa espesa de verduras con fideos estrellita pasados',
        notas: 'Excelente combinación sensorial y táctil.'
      }
    ]
  },
  {
    month: 8,
    week: 2,
    title: 'Mes 8 - Semana 2: Frutas Variadas y Alérgenos Tempranos',
    subtitle: 'Crema de cacahuate/maní diluida y frutas de temporada.',
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Papilla de avena con 1/4 cdita de crema de cacahuate/maní 100% diluida',
        almuerzo: 'Bastones de zanahoria y calabacín + pollo deshebrado',
        colacionTarde: 'Plátano maduro',
        cena: 'Puré de lentejas con calabaza',
        notas: 'Día 1 de cacahuate/maní (introducción precoz segura).'
      },
      {
        dayName: 'Martes',
        desayuno: 'Avena con crema de cacahuate y plátano',
        almuerzo: 'Bastones de camote + ternera magra molida',
        colacionTarde: 'Pera al vapor',
        cena: 'Puré de papa con huevo duro',
        notas: 'Día 2 de cacahuate/maní.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Papilla de avena con manzana asada',
        almuerzo: 'Arbolitos de brócoli + arroz integral + pescado blanco',
        colacionTarde: 'Aguacate machacado',
        cena: 'Puré de frijoles con zapallo',
        notas: 'Día 3 de cacahuate tolerado con éxito.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Tiras de mango firme + leche materna/fórmula',
        almuerzo: 'Bastones de yuca cocida al vapor + tiras de pollo jugoso',
        colacionTarde: 'Papaya madura',
        cena: 'Puré rústico de garbanzos con verdura',
        notas: 'Día 1 de yuca en bastón.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Panqueque de avena y plátano',
        almuerzo: 'Bastones de yuca + carne deshebrada + zanahoria al vapor',
        colacionTarde: 'Plátano maduro',
        cena: 'Puré suave de calabacín y papa',
        notas: 'Energía densa para gateo activo.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Avena cocida con trozos de pera',
        almuerzo: 'Croquetitas blandas de lentejas + brócoli al vapor',
        colacionTarde: 'Aguacate con gotitas de aceite de oliva',
        cena: 'Puré de calabaza con pollo y arroz',
        notas: 'Práctica de masticación con encías.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Bastones de plátano con canela',
        almuerzo: 'Pescado blanco al vapor + bastones de camote y calabacín',
        colacionTarde: 'Compota de manzana casera',
        cena: 'Puré de papa y espinaca con huevo cocido',
        notas: 'Plato balanceado y nutritivo.'
      }
    ]
  },
  {
    month: 8,
    week: 3,
    title: 'Mes 8 - Semana 3: Mixtura BLW y Cuchara Adaptada',
    subtitle: 'El bebé combina comida con manos y su propia cuchara de aprendizaje.',
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Avena espesa precargada en cuchara + rodajas de plátano',
        almuerzo: 'Bastones de camote + pollo en hebras + puré de zanahoria',
        colacionTarde: 'Media luna de aguacate',
        cena: 'Puré rústico de frijoles negros con arroz',
        notas: 'Dejar que el bebé tome la cuchara precargada.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Palitos de melocotón/durazno maduro + leche',
        almuerzo: 'Arbolitos de brócoli + hamburguesita de ternera blanda',
        colacionTarde: 'Pera en láminas tiernas',
        cena: 'Puré de calabaza con lentejas',
        notas: 'Día 1 de durazno/melocotón maduro.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Panqueque de avena y manzana rallada',
        almuerzo: 'Bastones de calabacín + pescado blanco + papa cocida en cubos blandos',
        colacionTarde: 'Plátano con avena',
        cena: 'Puré de garbanzos con aceite de oliva',
        notas: 'Día 2 de melocotón.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Avena cocida con trozos de melocotón',
        almuerzo: 'Bastones de yuca + carne deshebrada + puré de calabaza',
        colacionTarde: 'Papaya dulce',
        cena: 'Sopa de fideos estrellita con pollo desmenuzado',
        notas: 'Día 3 de melocotón tolerado.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Tiras de plátano y mango',
        almuerzo: 'Croquetas de lentejas + bastones de zanahoria al vapor',
        colacionTarde: 'Aguacate con aceite de oliva',
        cena: 'Puré de papa con huevo duro picado',
        notas: 'Comida rica en textura y color.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Avena con compota de pera y pizca de canela',
        almuerzo: 'Pescado blanco con brócoli y puré de camote',
        colacionTarde: 'Manzana al vapor en bastón blando',
        cena: 'Puré de frijoles con arroz y zapallo',
        notas: 'Autonomía y disfrute.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Panqueque de plátano + gajos de pera',
        almuerzo: 'Estofado de pollo y verduras adaptado en trocitos blandos',
        colacionTarde: 'Plátano maduro',
        cena: 'Puré de calabacín y papa con ternera',
        notas: 'Cena reconfortante.'
      }
    ]
  },
  {
    month: 8,
    week: 4,
    title: 'Mes 8 - Semana 4: Consolidación de Masticación con Encías',
    subtitle: 'Gran destreza motriz oral y coordinación mano-ojo-boca.',
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Avena suave con crema de cacahuate y plátano',
        almuerzo: 'Bastones de camote + tiras de pollo jugoso + brócoli',
        colacionTarde: 'Aguacate en cubos blandos',
        cena: 'Puré rústico de lentejas con calabaza',
        notas: 'Excelente balance calórico.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Bastones de plátano y pera madura',
        almuerzo: 'Carne molida de ternera con puré de papa y bastones de zanahoria',
        colacionTarde: 'Papaya dulce',
        cena: 'Puré de frijoles negros con arroz meloso',
        notas: 'Hierro para el desarrollo cognitivo.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Panqueque de avena y pera',
        almuerzo: 'Pescado blanco desmenuzado + bastones de calabacín y camote',
        colacionTarde: 'Manzana asada',
        cena: 'Puré de garbanzos con aceite de oliva',
        notas: 'Omega 3 marino y carbohidratos saludables.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Avena cocida con trocitos de mango',
        almuerzo: 'Bastones de yuca + pollo deshebrado + puré de zapallo',
        colacionTarde: 'Plátano maduro',
        cena: 'Sopa espesa de verduras con fideos pequeños',
        notas: 'Cena fácil de digerir.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Tiras de fruta de temporada + leche',
        almuerzo: 'Hamburguesita de lentejas + arbolitos de brócoli al vapor',
        colacionTarde: 'Aguacate machacado',
        cena: 'Puré de papa con huevo duro picado',
        notas: 'El bebé mastica con gran soltura.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Avena con compota de manzana',
        almuerzo: 'Estofado de ternera suave con cubos de zanahoria y papa',
        colacionTarde: 'Pera madura',
        cena: 'Puré de calabacín con pollo tierno',
        notas: 'Comida familiar adaptada.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Panquequito de avena y plátano',
        almuerzo: 'Pescado blanco con bastones de camote y brócoli',
        colacionTarde: 'Papaya madura',
        cena: 'Puré de frijoles con arroz integral',
        notas: '¡Mes 8 completado con maestría en sólidos blandos!'
      }
    ]
  },

  // ==========================================
  // --- MES 9 A 12: COMIDAS COMPLETAS --------
  // ==========================================
  {
    month: 9,
    week: 1,
    title: 'Mes 9 - Semana 1: Pinza Fina y Comida en Familia',
    subtitle: 'El bebé comienza a agarrar con pulgar e índice (pinza fina).',
    summaryNotes: [
      'Pasar gradualmente de bastones largos a trocitos de 1 cm.',
      '3 tomas principales (Desayuno, Almuerzo, Cena) + merienda frutal.',
      'Compartir la mesa con la familia.'
    ],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Avena cocida con plátano y semillas de lino molidas',
        almuerzo: 'Arroz con lentejas tiernas, pollo desmenuzado y cubitos de calabaza',
        colacionTarde: 'Cubitos de pera muy madura',
        cena: 'Puré rústico de papa con huevo duro picado y aceite de oliva',
        notas: 'Practica la pinza fina con los cubitos de calabaza.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Tiras de plátano con crema de almendra/cacahuate pura',
        almuerzo: 'Polenta suave con carne molida magra y zanahoria rallada cocida',
        colacionTarde: 'Aguacate en daditos',
        cena: 'Sopa de fideos estrellita con caldo casero y calabacín',
        notas: 'La polenta aporta energía limpia y reconfortante.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Panqueque de avena y manzana',
        almuerzo: 'Pescado blanco con cubitos de camote y arbolitos de brócoli',
        colacionTarde: 'Papaya en cubitos',
        cena: 'Frijoles negros machacados con arroz meloso',
        notas: 'Día lleno de colores y contrastes.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Avena con compota de durazno/melocotón',
        almuerzo: 'Bastones de yuca cocida con tiras de pechuga de pollo jugosa',
        colacionTarde: 'Trocitos de mango maduro',
        cena: 'Puré de garbanzos con aceite de oliva y rodajitas de calabacín',
        notas: 'Excelente motricidad fina.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Trozos de plátano y papaya + leche',
        almuerzo: 'Hamburguesita de lentejas con arroz integral y puré de zapallo',
        colacionTarde: 'Aguacate con aceite de oliva',
        cena: 'Puré de papa y espinaca con pollo desmenuzado',
        notas: 'Proteína completa vegetal.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Panqueque de avena y plátano',
        almuerzo: 'Estofado de ternera con papa, zanahoria y puerro suave',
        colacionTarde: 'Manzana al horno con canela',
        cena: 'Sopa espesa de verduras con fideos y huevo cocido',
        notas: 'Cena completa para un sueño tranquilo.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Avena con pera y pizca de canela',
        almuerzo: 'Pescado blanco al vapor con puré de camote y brócoli',
        colacionTarde: 'Plátano maduro en monedas cortadas en cuartos',
        cena: 'Frijoles con arroz y puré de calabaza',
        notas: 'Fin de semana nutritivo y familiar.'
      }
    ]
  },

  // ==========================================
  // --- MES 10 (COMIDAS ADAPTADAS DE ADULTO) -
  // ==========================================
  {
    month: 10,
    week: 1,
    title: 'Mes 10 - Semana 1: Platos Combinados y Pastas',
    subtitle: 'El bebé come los mismos platos de casa, sin sal ni azúcar.',
    summaryNotes: [
      'Introducir pastas cortas (espirales, coditos) bien cocidas.',
      'Platitos creativos para estimular el apetito.',
      'Carne deshebrada fina y guisados caseros.'
    ],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Avena en hojuelas con plátano y arándanos en cuartos seguros',
        almuerzo: 'Arroz con frijoles negros, pollo desmenuzado y aguacate',
        colacionTarde: 'Palitos de plátano con coco rallado sin azúcar',
        cena: 'Puré rústico de papa + lentejas + carne desmenuzada',
        notas: 'Plato tradicional latinoamericano adaptado.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Panqueque de avena y manzana en forma de osito',
        almuerzo: 'Polenta suave con carne molida y salsa natural de tomate',
        colacionTarde: 'Daditos de papaya madura',
        cena: 'Sopa de fideos estrellitas con verduras y pollo',
        notas: 'Ver receta de Platito Creativo: Osito de Plátano.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Cuscuz de maíz hidratado con aguacate machacado',
        almuerzo: 'Platito Sol de Calabaza con maíz tierno y pollo deshebrado',
        colacionTarde: 'Compota casera de pera y manzana',
        cena: 'Tortillita blanda de maíz con frijoles refritos sin grasa',
        notas: 'Ver receta de Platito Creativo: Sol de Calabaza.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Avena cocida con trozos de mango maduro',
        almuerzo: 'Coditos de pasta con salsa natural de tomate, carne molida y calabacín',
        colacionTarde: 'Plátano maduro en trocitos',
        cena: 'Puré de garbanzos con arroz y espinaca al vapor',
        notas: 'Pasta cocida extra tierna para seguridad.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Huevito revuelto suave (sin sal) con aguacate y pan integral blando',
        almuerzo: 'Platito Pecesito de Camote con hamburguesita blanda de lentejas',
        colacionTarde: 'Trozos de melocotón maduro',
        cena: 'Puré de papa con pescado blanco desmenuzado',
        notas: 'Ver receta de Platito Creativo: Pecesito de Camote.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Panquequitos de avena y plátano',
        almuerzo: 'Estofado de pollo con papas, zanahorias y arbolitos de brócoli',
        colacionTarde: 'Pera al horno con canela',
        cena: 'Sopa de verduras con fideos pequeños y huevo duro',
        notas: 'Comida compartida en la mesa familiar.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Avena con fruta fresca variada',
        almuerzo: 'Arroz con frijoles, carne de res magra y plátano asado sin azúcar',
        colacionTarde: 'Aguacate con aceite de oliva',
        cena: 'Puré rústico de calabacín y camote con pollo',
        notas: 'Cierre de semana completo y variado.'
      }
    ]
  },

  // ==========================================
  // --- MES 11 (TRANSICIÓN A LA DIETA FAMILIAR)
  // ==========================================
  {
    month: 11,
    week: 1,
    title: 'Mes 11 - Semana 1: Texturas Avanzadas y Autonomía',
    subtitle: 'El bebé utiliza cubiertos adaptados y bebe agua en vaso sin boquilla.',
    summaryNotes: [
      'Textura en trozos blandos y picados.',
      'Desarrollo del lenguaje: nombrar cada alimento en la mesa.',
      'Mantener la regla: CERO sal y CERO azúcares añadidos.'
    ],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Avena con fresas/frutillas en rodajas finas y plátano',
        almuerzo: 'Pastas pequeñas con salsa natural de tomate, albahaca y carne molida',
        colacionTarde: 'Bastones de plátano con crema de cacahuate pura',
        cena: 'Puré rústico de papa, lentejas y pollo',
        notas: 'Práctica de la cuchara con la pasta.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Mini arepitas de maíz suaves rellenas de aguacate',
        almuerzo: 'Pescado blanco a la plancha con puré de camote y brócoli al vapor',
        colacionTarde: 'Cubitos de pera madura',
        cena: 'Sopa de verduras casera con fideos estrellita y pollo',
        notas: 'Arepitas tiernas cocinadas con tapa.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Panqueque de avena con compota de manzana',
        almuerzo: 'Arroz integral con frijoles negros, carne deshebrada y calabacín',
        colacionTarde: 'Papaya en cubitos con semillas de chía hidratadas',
        cena: 'Puré de garbanzos con huevo duro picado y aceite de oliva',
        notas: 'Rico en fibra y ácidos grasos esenciales.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Avena con mango maduro y canela',
        almuerzo: 'Estofado de pollo tierno con papas, zanahoria y calabacín',
        colacionTarde: 'Aguacate con pan integral sin sal',
        cena: 'Crema espesa de calabaza con lentejas y arroz',
        notas: 'Almuerzo reconfortante y calórico.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Huevito revuelto suave con espinaca y rodajas de plátano',
        almuerzo: 'Hamburguesita de ternera con bastones de yuca y ensalada tibia de brócoli',
        colacionTarde: 'Manzana al horno',
        cena: 'Pastas cortas con salsa de calabaza y pollo',
        notas: 'Hierro y vitaminas a tope.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Mini tortillitas de maíz con aguacate y huevo duro',
        almuerzo: 'Pescado al horno con papas panaderas tiernas y zanahoria',
        colacionTarde: 'Plátano con avena',
        cena: 'Sopa de fideos con verduras variadas y ternera',
        notas: 'Cena ligera y nutritiva.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Panquequitos de plátano y avena en forma de conejito',
        almuerzo: 'Arroz con frijoles, pollo jugoso y puré de camote',
        colacionTarde: 'Fruta fresca variada',
        cena: 'Puré de verduras con carne picadita',
        notas: 'Gran autonomía en la mesa.'
      }
    ]
  },

  // ==========================================
  // --- MES 12 (1 AÑO: CELEBRACIÓN Y LÁCTEOS) -
  // ==========================================
  {
    month: 12,
    week: 1,
    title: 'Mes 12 - Semana 1: ¡Primer Cumpleaños y Dieta Familiar Completa!',
    subtitle: 'Se incorpora yogur natural entero sin azúcar, queso fresco pasteurizado y leche entera si no toma materna.',
    summaryNotes: [
      'Leche materna continúa a demanda o leche de vaca entera pasteurizada.',
      'Yogur natural entero 100% pasteurizado sin azúcar.',
      'Queso fresco pasteurizado bajo en sal.',
      'Galletitas caseras de avena y plátano (sin azúcar).'
    ],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Yogur natural entero con fruta fresca triturada y avena',
        almuerzo: 'Pastas con salsa natural de tomate, carne molida y queso fresco rallado',
        colacionTarde: 'Galleta casera de avena y plátano (sin azúcar)',
        cena: 'Sopa de verduras con fideos pequeños y pollo desmenuzado',
        notas: 'Día 1 de lácteo entero (yogur natural pasteurizado).'
      },
      {
        dayName: 'Martes',
        desayuno: 'Mini arepitas suaves con queso fresco y aguacate',
        almuerzo: 'Arroz con frijoles negros, carne deshebrada y plátano asado',
        colacionTarde: 'Platito Flor de Fresa y Yogur Natural',
        cena: 'Puré rústico de papa con huevo duro picado y espinacas',
        notas: 'Ver receta de Platito Creativo: Flor de Fresa.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Panqueque de avena y plátano con mantequilla de cacahuate 100%',
        almuerzo: 'Pescado al horno con puré de camote y bastones de calabacín',
        colacionTarde: 'Yogur natural con papaya en cubitos',
        cena: 'Tiras de tortilla de maíz suave con aguacate machacado y pollo',
        notas: 'Cena rápida y deliciosa.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Avena con fresas picadas, plátano y leche entera',
        almuerzo: 'Estofado de pollo y verduras con arroz integral',
        colacionTarde: 'Galletitas caseras de avena y plátano',
        cena: 'Puré de lentejas con calabaza y cubitos de queso fresco',
        notas: 'Snack sano para llevar en la pañalera.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Huevito revuelto con tomate picadito y pan integral con aguacate',
        almuerzo: 'Hamburguesita casera de ternera con papas al horno tiernas y brócoli',
        colacionTarde: 'Yogur natural con compota de pera',
        cena: 'Pastas cortas con salsa de calabaza y pollo',
        notas: 'Menú familiar 100% integrado.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Mini arepitas de maíz con huevo revuelto y fruta',
        almuerzo: 'Pescado a la plancha con puré de papa y ensalada tibia de zanahoria',
        colacionTarde: 'Fresas en rodajas con yogur',
        cena: 'Sopa de fideos con verduras y carne magra',
        notas: 'Rico en calcio y omega 3.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Tarta/Panqueque de cumpleaños saludable (avena, plátano y fruta fresca)',
        almuerzo: 'Arroz familiar con pollo, frijoles y verduras al vapor',
        colacionTarde: 'Galleta casera de avena con rodajitas de plátano',
        cena: 'Puré rústico de calabacín con ternera',
        notas: '¡Feliz 1er Año de Baby Chef! El bebé come sano y feliz junto a su familia.'
      }
    ]
  },

  // ==========================================
  // --- MES 13 A 24: TODAS LAS ETAPAS --------
  // ==========================================
  {
    month: 13,
    week: 1,
    title: 'Mes 13 - Semana 1: Comedor Autónomo y Nuevas Rutinas',
    subtitle: 'El bebé come como un adulto pequeño con cubiertos y vaso.',
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Yogur natural con avena, plátano y canela',
        almuerzo: 'Lasaña o pastel suave de verduras con carne molida y queso pasteurizado',
        colacionTarde: 'Fruta fresca de temporada',
        cena: 'Crema de calabacín con pollo tierno y picatostes de pan integral',
        notas: 'El bebé mastica eficientemente todas las texturas de la mesa familiar.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Tostada de pan integral con aguacate machacado y huevo revuelto',
        almuerzo: 'Pescado blanco al papillote con papas baby y zanahorias tiernas',
        colacionTarde: 'Galletitas caseras de avena y plátano',
        cena: 'Arroz con frijoles y huevo duro picado',
        notas: 'Alto valor proteico.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Avena cocida con trozos de mango y fresa',
        almuerzo: 'Guisado de ternera con calabaza, ejotes/judías verdes y papa',
        colacionTarde: 'Yogur natural con manzana rallada',
        cena: 'Sopa de estrellitas con verduras y pollo',
        notas: 'Cena ligera.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Mini arepitas con queso blanco pasteurizado y papaya',
        almuerzo: 'Macarrones con salsa casera de tomate, atún o pollo y orégano',
        colacionTarde: 'Plátano con crema de cacahuate pura',
        cena: 'Puré rústico de lentejas con calabacín',
        notas: 'Sabor mediterráneo adaptado.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Panqueque de avena y plátano con yogur natural',
        almuerzo: 'Pechuga de pollo a la plancha tierna con puré de camote y brócoli',
        colacionTarde: 'Trocitos de melón o sandía sin semillas',
        cena: 'Tortillita francesa de espinacas con pan integral y tomate',
        notas: 'Cena rápida de viernes.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Avena con frutos rojos en cuartos y semillas de chía hidratadas',
        almuerzo: 'Arroz con legumbres y albóndigas caseras blandas de ternera en salsa',
        colacionTarde: 'Compota casera sin azúcar',
        cena: 'Crema de calabaza con queso fresco',
        notas: 'Albóndigas extra suaves al morder.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Huevito con arepa o tortilla de maíz y aguacate',
        almuerzo: 'Pollo asado familiar con papas al horno y ensalada tibia',
        colacionTarde: 'Yogur con fruta fresca',
        cena: 'Sopa de fideos con verduras y huevo picado',
        notas: 'Excelente cierre de semana.'
      }
    ]
  },
  {
    month: 18,
    week: 1,
    title: 'Mes 18 - Semana 1: Explorador Activo y Pudín de Chía',
    subtitle: 'Se introduce pudín de chía hidratado y recetas con mayor consistencia.',
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Pudín de chía con leche entera y puré de mango maduro',
        almuerzo: 'Guiso de lentejas con verduras variadas y arroz integral',
        colacionTarde: 'Galletitas caseras de avena y plátano',
        cena: 'Tortilla de calabacín con ensalada de tomate pelado y aguacate',
        notas: 'Ver receta de Pudín de Chía.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Tostada de pan integral con queso fresco y fresas en rodajas',
        almuerzo: 'Salmón o pescado blanco al horno con batatas y espárragos tiernos',
        colacionTarde: 'Yogur natural con plátano',
        cena: 'Sopa de fideos con caldo de pollo casero y albóndigas pequeñas',
        notas: 'Grasas omega 3 de salmón.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Panqueques de avena y arándanos con yogur',
        almuerzo: 'Carne de res guisada con papas, zanahorias y arvejas/chícharos tiernos',
        colacionTarde: 'Pudín de chía con fresas',
        cena: 'Pastas cortas con salsa de espinaca y ricota',
        notas: 'Color verde apetitoso.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Huevos revueltos con tomate y arepa de maíz',
        almuerzo: 'Pollo al limón suave con arroz basmati y calabacines salteados',
        colacionTarde: 'Fruta fresca picadita',
        cena: 'Crema de verduras con garbanzos cocidos y picatostes',
        notas: 'Excelente combinación de textura.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Avena cremosa con manzana rallada, canela y nuez pecana molida fina',
        almuerzo: 'Hamburguesa casera de pescado o pollo con bastones de camote al horno',
        colacionTarde: 'Yogur natural con semillas de chía',
        cena: 'Quesadilla suave de maíz con queso bajo en sal y aguacate',
        notas: 'Cena rápida y nutritiva.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Waffles o panqueques caseros de plátano con fruta',
        almuerzo: 'Arroz con frijoles, carne asada en tiras tiernas y ensalada de aguacate',
        colacionTarde: 'Batido natural de plátano, avena y leche entera',
        cena: 'Sopa de verduras con fideos y huevo cocido',
        notas: 'Comida familiar.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Pudín de chía con leche y compota de frutos rojos',
        almuerzo: 'Pastel de papa con carne molida y verduras gratinadas',
        colacionTarde: 'Galleta de avena con fruta',
        cena: 'Crema suave de zanahoria y calabaza con pollo',
        notas: 'Plato favorito de los niños.'
      }
    ]
  },
  {
    month: 24,
    week: 1,
    title: 'Mes 24 (2 Años) - Semana 1: Dieta Completa y Hábitos Saludables',
    subtitle: 'Comidas completas, variadas y balanceadas para niños de 2 años.',
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Tostada de pan integral con huevo poché/revuelto, tomate y aguacate',
        almuerzo: 'Boloñesa casera de carne magra con pasta corta integral y queso rallado',
        colacionTarde: 'Yogur natural con rodajas de plátano y arándanos',
        cena: 'Crema de calabacín con daditos de merluza al vapor y pan integral',
        notas: 'El niño de 2 años come activamente en familia.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Pudín de chía con mango y hojuelas de avena tostada',
        almuerzo: 'Guiso tradicional de garbanzos con espinacas y trocitos de pollo',
        colacionTarde: 'Galletitas caseras de avena y plátano con leche',
        cena: 'Tortilla de papa y cebolla suave con ensalada de aguacate',
        notas: 'Plato tradicional saludable.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Panqueque de avena y manzana con crema de cacahuate 100%',
        almuerzo: 'Filete de salmón a la plancha con puré de camote y brócoli salteado',
        colacionTarde: 'Brocheta suave de frutas (fresas, plátano, melón)',
        cena: 'Sopa casera de letras/fideos con verduras y ternera picadita',
        notas: 'Divertido y muy nutritivo.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Arepa de maíz con queso fresco, huevo revuelto y rodajas de papaya',
        almuerzo: 'Pechuga de pollo en salsa suave de tomate casero con arroz integral y ejotes',
        colacionTarde: 'Yogur natural con semillas de chía hidratadas y canela',
        cena: 'Pastel de verduras con queso gratinado',
        notas: 'Rico en fibra.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Avena cocida con trozos de fresa, plátano y semillas de calabaza molidas',
        almuerzo: 'Hamburguesitas caseras de lentejas y arroz con ensalada de remolacha y maíz',
        colacionTarde: 'Tostadita con aguacate y queso fresco',
        cena: 'Pescado blanco al horno con papas y calabacín',
        notas: 'Proteína vegetal de gran calidad.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Waffle o panqueque casero con fruta fresca y yogur',
        almuerzo: 'Arroz con frijoles, carne de res en tiritas jugosas y plátano macho asado',
        colacionTarde: 'Fruta fresca de temporada en trocitos',
        cena: 'Crema de calabaza con huevo duro picado y picatostes',
        notas: 'Comida familiar del fin de semana.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Huevitos revueltos con espinacas, pan integral y fruta fresca',
        almuerzo: 'Pollo al horno con papas, zanahorias asadas y ensalada verde suave',
        colacionTarde: 'Pudín de chía con frutos del bosque',
        cena: 'Sopa de fideos con verduras y pollo',
        notas: '¡Alimentación completa y saludable consolidada para toda la vida!'
      }
    ]
  }
];
