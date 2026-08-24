import { WeeklyMealPlan } from '../../types';

export const MENUS_12_TO_18: WeeklyMealPlan[] = [
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
  {
    month: 12,
    week: 2,
    title: 'Mes 12 - Semana 2: Quesos Tiernos y Variedad de Cereales',
    subtitle: 'Nuevas opciones de meriendas y cenas ligeras.',
    summaryNotes: ['Integración paulatina de quesos pasteurizados sin sal agregada.'],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Tostada de pan integral con queso fresco y papaya',
        almuerzo: 'Guiso de lentejas con calabaza, zanahoria y arroz',
        colacionTarde: 'Yogur natural con manzana rallada',
        cena: 'Tortillita francesa con espinacas y puré de camote',
        notas: 'Excelente combinación de hierro y calcio.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Avena cocida con trozos de mango y leche entera',
        almuerzo: 'Pollo al horno con papas en gajos tiernos y calabacín',
        colacionTarde: 'Galletitas caseras de avena y plátano',
        cena: 'Crema de verduras con garbanzos y huevo duro picado',
        notas: 'Garbanzos en crema suave.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Huevos revueltos con aguacate y mini arepita de maíz',
        almuerzo: 'Pescado blanco a la plancha con puré de papa y brócoli al vapor',
        colacionTarde: 'Plátano con un toque de crema de cacahuate',
        cena: 'Pastas cortas con salsa casera de tomate y ternera molida',
        notas: 'Pescado blanco y brócoli.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Yogur natural con rodajas de plátano y fresas',
        almuerzo: 'Albóndigas caseras de pollo en salsa de verduras con arroz integral',
        colacionTarde: 'Trocitos de melón y queso fresco',
        cena: 'Sopa de fideos con pollo y verduras',
        notas: 'Albóndigas muy suaves y jugosas.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Panqueque de avena con compota de manzana sin azúcar',
        almuerzo: 'Ternera guisada con batata/camote y judías verdes/ejotes',
        colacionTarde: 'Yogur natural con pera',
        cena: 'Puré rústico de calabacín con queso fresco y huevo poché',
        notas: 'Cena reconfortante.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Tostada con aguacate machacado, tomate y huevo revuelto',
        almuerzo: 'Arroz con frijoles negros, carne desmenuzada y plátano maduro al horno',
        colacionTarde: 'Galleta de avena con vaso de leche',
        cena: 'Crema de calabaza con trocitos de pescado al vapor',
        notas: 'Comida tradicional adaptada.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Waffle o panqueque de avena y plátano con fruta fresca',
        almuerzo: 'Pollo asado familiar con papas al romero suave y ensalada tibia',
        colacionTarde: 'Fruta fresca variada picadita',
        cena: 'Pastel suave de papa con carne molida y verduras',
        notas: 'Almuerzo dominical en familia.'
      }
    ]
  },
  {
    month: 12,
    week: 3,
    title: 'Mes 12 - Semana 3: Exploración de Sabores Mediterráneos',
    subtitle: 'Aceite de oliva virgen extra, orégano suave y pescado azul.',
    summaryNotes: ['Introducción de pescados como salmón o trucha bien cocidos.'],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Avena cremosa con leche, canela y compota de pera',
        almuerzo: 'Salmón o pescado blanco al horno con puré de camote y ejotes tiernos',
        colacionTarde: 'Yogur natural con plátano',
        cena: 'Sopa de estrellitas con verduras y pollo deshebrado',
        notas: 'Omega 3 de pescado.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Pan integral con queso fresco y tomate rallado',
        almuerzo: 'Guiso de garbanzos con espinacas y carne magra',
        colacionTarde: 'Galletitas de avena y plátano',
        cena: 'Tortilla suave de calabacín con arroz integral',
        notas: 'Garbanzos con espinacas tradicionales.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Panqueque de avena y arándanos con yogur',
        almuerzo: 'Pechuga de pollo a la plancha con pasta corta y salsa de calabaza',
        colacionTarde: 'Papaya en cubitos con queso fresco',
        cena: 'Puré de papa con huevo duro y espinacas al vapor',
        notas: 'Salsa cremosa de calabaza.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Huevos revueltos con arepa suave y aguacate',
        almuerzo: 'Ternera estofada con papas, zanahorias y arvejas tiernas',
        colacionTarde: 'Yogur natural con fruta fresca',
        cena: 'Crema de verduras con pollo y picatostes blandos',
        notas: 'Proteína completa y zinc.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Tostada con aguacate y fresas en rodajas',
        almuerzo: 'Hamburguesitas caseras de lentejas y arroz con puré de zanahoria',
        colacionTarde: 'Compota de manzana casera',
        cena: 'Pescado blanco al vapor con papas baby y calabacín',
        notas: 'Hamburguesita vegetal rica en hierro.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Avena cocida con trozos de mango y semillas de chía hidratadas',
        almuerzo: 'Arroz con pollo, verduras variadas y frijoles',
        colacionTarde: 'Galleta de avena con rodajas de plátano',
        cena: 'Crema de calabaza con huevo picado',
        notas: 'Comida familiar nutritiva.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Mini panqueques de plátano y avena con yogur y fruta',
        almuerzo: 'Lasaña casera de verduras con carne molida y queso pasteurizado',
        colacionTarde: 'Fruta fresca de temporada',
        cena: 'Sopa de fideos con verduras y ternera picadita',
        notas: 'Lasaña en capas tiernas.'
      }
    ]
  },
  {
    month: 12,
    week: 4,
    title: 'Mes 12 - Semana 4: Consolidación del Año 1',
    subtitle: 'Autonomía completa con cuchara de aprendizaje y vaso abierto.',
    summaryNotes: ['El bebé participa activamente en todas las comidas familiares.'],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Yogur natural con avena, plátano y fresas',
        almuerzo: 'Pastas con salsa casera de tomate, carne molida y queso fresco',
        colacionTarde: 'Galletitas caseras de avena y plátano',
        cena: 'Crema de calabacín con pollo tierno y arroz',
        notas: 'Comida clásica y muy aceptada.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Tostada de pan integral con huevo revuelto y aguacate',
        almuerzo: 'Pescado blanco con puré de camote y brócoli al vapor',
        colacionTarde: 'Papaya y melón en cubitos',
        cena: 'Sopa de verduras con fideos y huevo duro picado',
        notas: 'Pescado blanco con camote.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Panqueque de avena con crema de cacahuate pura y plátano',
        almuerzo: 'Guiso de lentejas con calabaza y arroz integral',
        colacionTarde: 'Yogur natural con manzana rallada',
        cena: 'Tortillita de papa y cebolla suave con ensalada tibia',
        notas: 'Lentejas y arroz integral.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Avena con leche, trozos de mango y canela',
        almuerzo: 'Pollo al horno con papas y zanahorias tiernas',
        colacionTarde: 'Fruta fresca y queso fresco',
        cena: 'Puré rústico de verduras con ternera picada',
        notas: 'Pollo al horno suave.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Mini arepita con queso fresco pasteurizado y papaya',
        almuerzo: 'Hamburguesita casera de ternera con puré de papa y calabacín',
        colacionTarde: 'Galleta de avena con yogur',
        cena: 'Pastas con salsa de calabaza y pollo',
        notas: 'Hamburguesita suave al morder.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Huevos revueltos con tomate y pan integral',
        almuerzo: 'Arroz con frijoles negros, carne deshebrada y plátano asado',
        colacionTarde: 'Compota casera de frutas',
        cena: 'Crema de calabaza con pescado blanco',
        notas: 'Frijoles y carne deshebrada.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Waffles caseros de avena con fruta fresca y yogur',
        almuerzo: 'Pollo asado en familia con arroz y ensalada de aguacate',
        colacionTarde: 'Galletitas de avena con leche entera',
        cena: 'Sopa de letras con verduras y pollo',
        notas: '¡Primer año consolidado con una dieta variada, sana y feliz!'
      }
    ]
  },

  // ==========================================
  // --- MES 13 -------------------------------
  // ==========================================
  {
    month: 13,
    week: 1,
    title: 'Mes 13 - Semana 1: Comedor Autónomo y Nuevas Rutinas',
    subtitle: 'El bebé come como un adulto pequeño con cubiertos y vaso.',
    summaryNotes: [
      'Alimentación variada de la mesa familiar sin sal ni azúcares añadidos.',
      'Fomentar la autorregulación y la masticación de diferentes texturas.'
    ],
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
    month: 13,
    week: 2,
    title: 'Mes 13 - Semana 2: Legumbres Enteras Blandas y Guisados',
    subtitle: 'Frijoles, lentejas y garbanzos enteros bien cocidos.',
    summaryNotes: ['Legumbres aplastadas con tenedor o tiernas enteras.'],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Avena con leche, manzana picada y canela',
        almuerzo: 'Guiso de lentejas con arroz integral, zanahoria y trocitos de pollo',
        colacionTarde: 'Yogur natural con plátano',
        cena: 'Tortilla de calabacín con rodajas de tomate y pan',
        notas: 'Lentejas con arroz integral.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Pan integral con queso fresco y aguacate',
        almuerzo: 'Pescado blanco al horno con papas y brócoli',
        colacionTarde: 'Galleta casera de avena',
        cena: 'Crema de calabaza con huevo duro picado',
        notas: 'Pescado y brócoli.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Panqueque de avena con compota de pera',
        almuerzo: 'Ternera guisada con verduras y puré de camote',
        colacionTarde: 'Fruta fresca de temporada',
        cena: 'Pastas cortas con salsa de tomate y pollo',
        notas: 'Ternera con camote.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Huevos revueltos con arepa y papaya',
        almuerzo: 'Garbanzos guisados con espinacas y arroz',
        colacionTarde: 'Yogur natural con fresas picadas',
        cena: 'Sopa de verduras con fideos y queso fresco',
        notas: 'Garbanzos con espinacas.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Tostada con aguacate y mango en trozos',
        almuerzo: 'Hamburguesita casera de pollo con papas al horno y ejotes',
        colacionTarde: 'Galletitas de avena',
        cena: 'Puré rústico de verduras con pescado blanco',
        notas: 'Hamburguesita de pollo.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Avena con plátano y crema de cacahuate',
        almuerzo: 'Arroz con frijoles negros, carne deshebrada y plátano asado',
        colacionTarde: 'Melón en cubitos',
        cena: 'Crema de calabacín con picatostes y huevo',
        notas: 'Comida completa.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Waffles de avena con fruta fresca y yogur',
        almuerzo: 'Pollo al horno con verduras asadas y arroz',
        colacionTarde: 'Compota de manzana casera',
        cena: 'Sopa de fideos con ternera y verduras',
        notas: 'Almuerzo familiar dominical.'
      }
    ]
  },
  {
    month: 13,
    week: 3,
    title: 'Mes 13 - Semana 3: Pescados Azules y Texturas Crujientes Suaves',
    subtitle: 'Salmón, verduras asadas y bastones crocantes por fuera y suaves por dentro.',
    summaryNotes: ['Verduras horneadas en bastones masticables.'],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Yogur natural con fresas picadas y avena',
        almuerzo: 'Salmón a la plancha con puré de batata/camote y espárragos tiernos',
        colacionTarde: 'Galletitas de avena y plátano',
        cena: 'Sopa de estrellitas con verduras y pollo',
        notas: 'Salmón rico en omega 3.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Tostada con queso fresco y tomate',
        almuerzo: 'Arroz con pollo, guisantes/arvejas tiernas y zanahoria',
        colacionTarde: 'Papaya en cubitos',
        cena: 'Tortilla francesa con espinacas y puré de papa',
        notas: 'Pollo con arvejas y zanahoria.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Panqueques de avena y plátano con yogur',
        almuerzo: 'Guiso de ternera con calabaza, papas y ejotes',
        colacionTarde: 'Fruta fresca variada',
        cena: 'Crema de verduras con queso fresco y picatostes',
        notas: 'Ternera con calabaza.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Huevos revueltos con aguacate y pan integral',
        almuerzo: 'Pastas cortas con salsa casera de tomate, atún o pollo y orégano',
        colacionTarde: 'Yogur natural con pera',
        cena: 'Puré de lentejas con calabacín y huevo duro picado',
        notas: 'Pasta con salsa casera.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Avena cremosa con trozos de mango y leche',
        almuerzo: 'Pescado blanco con puré de papa y brócoli al vapor',
        colacionTarde: 'Galleta casera con fruta',
        cena: 'Quesadilla suave de maíz con aguacate y pollo',
        notas: 'Quesadilla suave.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Arepitas con queso fresco y plátano',
        almuerzo: 'Arroz con frijoles, carne molida y verduras salteadas',
        colacionTarde: 'Melón o sandía',
        cena: 'Sopa de fideos con verduras y ternera',
        notas: 'Frijoles y carne molida.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Panqueque con fruta y yogur natural',
        almuerzo: 'Pollo asado familiar con papas al horno y ensalada',
        colacionTarde: 'Compota de frutas',
        cena: 'Crema de calabaza con huevo picado',
        notas: 'Cierre de la semana 3.'
      }
    ]
  },
  {
    month: 13,
    week: 4,
    title: 'Mes 13 - Semana 4: Variedad y Rutina Consolidada',
    subtitle: 'Comidas familiares completas con horarios regulares.',
    summaryNotes: ['Establecer horarios regulares de 3 comidas y 2 meriendas.'],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Avena con leche, plátano y fresas',
        almuerzo: 'Pastel de papa con carne molida y verduras',
        colacionTarde: 'Yogur natural con mango',
        cena: 'Crema de calabacín con pollo y arroz',
        notas: 'Pastel de papa suave.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Pan integral con aguacate y huevo revuelto',
        almuerzo: 'Pescado al horno con puré de camote y zanahoria',
        colacionTarde: 'Galletitas de avena',
        cena: 'Sopa de verduras con fideos y queso fresco',
        notas: 'Pescado con camote.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Panqueque de avena con compota de manzana',
        almuerzo: 'Guiso de lentejas con pollo y arroz integral',
        colacionTarde: 'Fruta fresca picada',
        cena: 'Tortilla de espinacas con tomate y pan',
        notas: 'Lentejas y pollo.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Yogur natural con avena y papaya',
        almuerzo: 'Ternera guisada con papas y ejotes',
        colacionTarde: 'Plátano con crema de cacahuate',
        cena: 'Puré rústico de verduras con huevo duro',
        notas: 'Ternera con papas.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Arepita con queso fresco y fruta fresca',
        almuerzo: 'Pasta corta con pollo, brócoli y salsa de calabaza',
        colacionTarde: 'Yogur natural con pera',
        cena: 'Crema de calabaza con picatostes y pescado',
        notas: 'Pasta con salsa de calabaza.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Huevos revueltos con tomate y pan integral',
        almuerzo: 'Arroz con frijoles negros, carne asada en tiras tiernas y aguacate',
        colacionTarde: 'Galleta de avena con leche',
        cena: 'Sopa de fideos con pollo y verduras',
        notas: 'Carne asada tierna.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Waffles de plátano con yogur y fruta',
        almuerzo: 'Pollo al horno familiar con verduras y arroz',
        colacionTarde: 'Fruta fresca variada',
        cena: 'Pastel de verduras con queso gratinado',
        notas: '¡Mes 13 completado con éxito!'
      }
    ]
  },

  // ==========================================
  // --- MES 14 -------------------------------
  // ==========================================
  {
    month: 14,
    week: 1,
    title: 'Mes 14 - Semana 1: Exploración Sensorial y Nuevas Mezclas',
    subtitle: 'Combinaciones de legumbres, vegetales al vapor y proteínas variadas.',
    summaryNotes: [
      '3 comidas principales + 2 colaciones nutritivas.',
      'Incentivar masticación con trocitos de carne tierna, pescados y verduras cocidas al dente suave.',
      'Mantener lácteos enteros pasteurizados (yogur, queso y leche materna o de vaca).'
    ],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Avena cremosa con leche entera, rodajas de plátano y canela',
        almuerzo: 'Albóndigas tiernas de ternera en salsa de tomate casera con arroz integral y ejotes al vapor',
        colacionTarde: 'Yogur natural con papaya en cubitos',
        cena: 'Crema de calabacín con daditos de pollo tierno y picatostes de pan integral',
        notas: 'Albóndigas muy suaves que el bebé puede partir con la cuchara.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Tostada de pan integral con queso fresco y aguacate machacado',
        almuerzo: 'Pescado blanco (merluza) al horno con puré de camote y brócoli al vapor',
        colacionTarde: 'Galletitas caseras de avena y plátano',
        cena: 'Tortillita francesa de espinacas con tomate en gajos pelados y pan',
        notas: 'Brócoli al vapor que el bebé sostiene con sus manos.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Panqueque de avena y plátano con toque de mantequilla de cacahuate',
        almuerzo: 'Guiso de garbanzos tiernos con calabaza, espinacas y carne deshebrada',
        colacionTarde: 'Trocitos de mango maduro y queso fresco',
        cena: 'Sopa de fideos con verduras picaditas y huevo duro rallado',
        notas: 'Garbanzos tiernos bien asimilables.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Huevos revueltos con tomate picado y mini arepita de maíz',
        almuerzo: 'Pechuga de pollo a la plancha tierna con pasta corta y salsa de calabaza',
        colacionTarde: 'Yogur natural entero con compota casera de manzana',
        cena: 'Puré rústico de lentejas con zanahoria y trocitos de queso fresco',
        notas: 'Pasta corta fácil de pinchar con tenedor infantil.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Yogur natural con fresas maduras en rodajas y copos de avena',
        almuerzo: 'Pastel de papa con carne molida y verduras gratinadas',
        colacionTarde: 'Rodajas de pera madura con galleta de avena',
        cena: 'Pescado blanco desmenuzado con puré de calabaza y arroz',
        notas: 'Cena reconfortante y de fácil digestión.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Mini arepitas con huevo revuelto y fruta fresca',
        almuerzo: 'Arroz con frijoles negros, carne desmenuzada y plátano asado',
        colacionTarde: 'Batido suave de plátano con leche entera y avena',
        cena: 'Crema de verduras con pollo y cubitos de pan',
        notas: 'Comida tradicional completa.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Waffles caseros de plátano y avena con fruta fresca y yogur',
        almuerzo: 'Pollo al horno familiar con papas rústicas y ensalada tibia',
        colacionTarde: 'Fruta fresca de temporada',
        cena: 'Sopa de estrellitas con verduras y ternera picadita',
        notas: 'Almuerzo familiar de fin de semana.'
      }
    ]
  },
  {
    month: 14,
    week: 2,
    title: 'Mes 14 - Semana 2: Variedad de Pescados y Legumbres',
    subtitle: 'Salmón, frijoles y pastas completas para potenciar la masticación.',
    summaryNotes: ['Fomentar la variedad proteica combinando legumbres y pescados.'],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Avena con leche, trozos de mango y fresa',
        almuerzo: 'Guiso de lentejas con calabaza, papas y pollo tierno',
        colacionTarde: 'Yogur natural con plátano',
        cena: 'Tortilla de calabacín con arroz integral y aguacate',
        notas: 'Hierro vegetal con vitamina C del mango.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Pan integral con queso fresco y rodajitas de fresa',
        almuerzo: 'Salmón o trucha al horno con batatas/camote asado y ejotes',
        colacionTarde: 'Galletitas caseras de avena y plátano',
        cena: 'Sopa de fideos con caldo casero de pollo y verduras',
        notas: 'Omega 3 y ácidos grasos esenciales.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Panqueques de avena y manzana con yogur',
        almuerzo: 'Carne de res guisada con papas, zanahorias y arvejas tiernas',
        colacionTarde: 'Papaya en cubitos con queso fresco',
        cena: 'Pastas cortas con salsa de espinaca suave y ricota/queso fresco',
        notas: 'Salsa verde suave y atractiva.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Huevos revueltos con arepa y aguacate machacado',
        almuerzo: 'Pollo al limón suave con arroz integral y calabacines salteados',
        colacionTarde: 'Fruta fresca picada',
        cena: 'Crema de zanahoria y calabaza con garbanzos y huevo duro',
        notas: 'Sabor aromático y suave.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Avena con manzana rallada, canela y leche',
        almuerzo: 'Hamburguesita casera de pescado blanco con bastones de camote al horno',
        colacionTarde: 'Yogur natural con pera',
        cena: 'Quesadilla suave de maíz con queso pasteurizado y pollo',
        notas: 'Cena rápida de viernes.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Tostada con aguacate, tomate y huevo revuelto',
        almuerzo: 'Arroz con frijoles, carne en tiras tiernas y plátano macho asado',
        colacionTarde: 'Melón o sandía sin semillas',
        cena: 'Sopa de verduras con fideos y ternera',
        notas: 'Frijoles y carne jugosa.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Panqueque con fruta fresca y yogur natural',
        almuerzo: 'Pollo asado en familia con puré de papa y ensalada tibia',
        colacionTarde: 'Compota casera de manzana',
        cena: 'Crema suave de calabacín con pollo deshebrado',
        notas: 'Cierre completo de la semana 2.'
      }
    ]
  },
  {
    month: 14,
    week: 3,
    title: 'Mes 14 - Semana 3: Riqueza de Vegetales y Texturas Mixtas',
    subtitle: 'Espinacas, brócoli, calabaza y betabel en platos atractivos.',
    summaryNotes: ['Estimular el apetito con platos llenos de color y contraste visual.'],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Yogur natural con avena, plátano y arándanos cortados',
        almuerzo: 'Macarrones con boloñesa casera de ternera magra y queso fresco',
        colacionTarde: 'Galleta casera de avena y plátano',
        cena: 'Crema de calabacín con merluza al vapor y arroz',
        notas: 'Boloñesa suave sin sal agregada.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Tostada con huevo revuelto, tomate y aguacate',
        almuerzo: 'Pechuga de pollo a la plancha con puré de camote y brócoli',
        colacionTarde: 'Papaya con queso fresco',
        cena: 'Sopa de estrellitas con verduras y huevo duro picado',
        notas: 'Brócoli tierno al vapor.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Panqueque de avena con compota de pera sin azúcar',
        almuerzo: 'Guiso de garbanzos con calabaza, espinacas y carne magra',
        colacionTarde: 'Fruta fresca de temporada',
        cena: 'Tortillita francesa con rodajas de tomate pelado y pan',
        notas: 'Garbanzos y calabaza.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Avena cocida con mango en cubitos y leche entera',
        almuerzo: 'Pescado blanco al horno con papas en rodajas y zanahoria',
        colacionTarde: 'Yogur natural con manzana rallada',
        cena: 'Puré rústico de lentejas con pollo tierno',
        notas: 'Pescado blanco y papas.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Mini arepita con queso fresco y plátano maduro',
        almuerzo: 'Hamburguesitas de pollo con arroz integral y calabacín al horno',
        colacionTarde: 'Galletitas de avena con leche',
        cena: 'Pastas cortas con salsa de calabaza y pollo',
        notas: 'Hamburguesita tierna y sabrosa.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Huevos revueltos con espinacas y pan integral',
        almuerzo: 'Arroz con frijoles negros, carne deshebrada y aguacate',
        colacionTarde: 'Melón en cubitos',
        cena: 'Crema de calabaza con picatostes y huevo duro',
        notas: 'Frijoles negros tradicionales.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Waffles de plátano con yogur y fruta fresca',
        almuerzo: 'Pollo al horno familiar con verduras y papas',
        colacionTarde: 'Fruta fresca variada',
        cena: 'Sopa de fideos con ternera y verduras',
        notas: 'Nutrición dominical equilibrada.'
      }
    ]
  },
  {
    month: 14,
    week: 4,
    title: 'Mes 14 - Semana 4: Hábitos Consolidados y Dieta Equilibrada',
    subtitle: 'El bebé disfruta de comidas familiares variadas con gran autonomía.',
    summaryNotes: ['Consolidar el uso de cubiertos y mantener el consumo de agua como bebida principal.'],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Avena cremosa con leche, plátano y canela',
        almuerzo: 'Pastel de papa con carne molida y verduras',
        colacionTarde: 'Yogur natural con trozos de fresa',
        cena: 'Crema de verduras con pollo tierno y arroz',
        notas: 'Pastel de papa con verduras.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Pan integral con aguacate y huevo poché o revuelto',
        almuerzo: 'Pescado blanco al horno con puré de camote y ejotes',
        colacionTarde: 'Galleta de avena con fruta',
        cena: 'Sopa de fideos con verduras y queso fresco',
        notas: 'Pescado blanco con camote.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Panqueque de avena con crema de cacahuate y plátano',
        almuerzo: 'Guiso de lentejas con verduras y arroz integral',
        colacionTarde: 'Papaya en cubitos',
        cena: 'Tortilla de espinacas con ensalada tibia de tomate',
        notas: 'Lentejas ricas en hierro.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Yogur natural con mango y copos de avena',
        almuerzo: 'Ternera guisada con papas, zanahorias y arvejas',
        colacionTarde: 'Fruta fresca de temporada',
        cena: 'Puré rústico de calabacín con pollo picadito',
        notas: 'Ternera estofada muy suave.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Arepita con queso fresco y fruta fresca',
        almuerzo: 'Pasta corta con pollo, brócoli y salsa de tomate casera',
        colacionTarde: 'Yogur natural con pera',
        cena: 'Pescado al vapor con papas baby y calabacín',
        notas: 'Pasta con brócoli y pollo.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Huevos revueltos con tomate y pan integral',
        almuerzo: 'Arroz con frijoles, carne asada en tiras tiernas y plátano asado',
        colacionTarde: 'Galleta de avena con vaso de leche',
        cena: 'Crema de calabaza con huevo duro picado',
        notas: 'Carne asada en tiras suaves.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Waffles o panqueques caseros con fruta fresca y yogur',
        almuerzo: 'Pollo asado en familia con papas al horno y verduras',
        colacionTarde: 'Fruta fresca picada',
        cena: 'Sopa de letras con pollo y verduras',
        notas: '¡Mes 14 completado con excelente nutrición!'
      }
    ]
  },

  // ==========================================
  // --- MES 15 -------------------------------
  // ==========================================
  {
    month: 15,
    week: 1,
    title: 'Mes 15 - Semana 1: Comidas Completas y Nuevas Texturas',
    subtitle: 'El niño de 15 meses come de forma activa con su familia.',
    summaryNotes: [
      'Alimentación familiar balanceada con 3 comidas + 2 meriendas.',
      'Variedad de legumbres, cereales integrales, carnes, pescados, huevos y lácteos.'
    ],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Yogur natural con avena, plátano y fresas picaditas',
        almuerzo: 'Lasaña casera de verduras con carne magra y queso fresco',
        colacionTarde: 'Galletitas caseras de avena y plátano',
        cena: 'Crema de calabacín con pollo tierno y arroz',
        notas: 'Lasaña en capas muy tiernas.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Tostada de pan integral con queso fresco y aguacate',
        almuerzo: 'Pescado blanco al horno con puré de camote y brócoli',
        colacionTarde: 'Papaya en cubitos con queso fresco',
        cena: 'Sopa de fideos con verduras y huevo duro picado',
        notas: 'Pescado blanco y brócoli.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Panqueque de avena con compota de manzana sin azúcar',
        almuerzo: 'Guiso de lentejas con calabaza, papas y carne magra',
        colacionTarde: 'Fruta fresca de temporada',
        cena: 'Tortilla de espinacas con tomate en gajos pelados y pan',
        notas: 'Lentejas y calabaza.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Huevos revueltos con arepa de maíz y papaya',
        almuerzo: 'Pollo al horno con arroz integral y zanahorias asadas',
        colacionTarde: 'Yogur natural con mango',
        cena: 'Puré rústico de verduras con ternera picadita',
        notas: 'Pollo al horno tierno.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Avena con leche, trozos de mango y canela',
        almuerzo: 'Hamburguesita casera de ternera con puré de papa y ejotes',
        colacionTarde: 'Galleta de avena con leche',
        cena: 'Pastas cortas con salsa de calabaza y pollo',
        notas: 'Hamburguesita casera.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Tostada con aguacate, tomate y huevo revuelto',
        almuerzo: 'Arroz con frijoles negros, carne deshebrada y plátano asado',
        colacionTarde: 'Melón en cubitos',
        cena: 'Crema de calabaza con pescado blanco al vapor',
        notas: 'Frijoles negros tradicionales.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Waffles de plátano con yogur y fruta fresca',
        almuerzo: 'Pollo al horno familiar con papas y ensalada tibia',
        colacionTarde: 'Fruta fresca variada',
        cena: 'Sopa de letras con ternera y verduras',
        notas: 'Almuerzo familiar dominical.'
      }
    ]
  },
  {
    month: 15,
    week: 2,
    title: 'Mes 15 - Semana 2: Salmón, Legumbres y Desayunos Energéticos',
    subtitle: 'Nuevas combinaciones de cereales integrales y frutas ricas en antioxidantes.',
    summaryNotes: ['Cereales integrales (quinoa, avena, arroz integral) para energía duradera.'],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Avena cocida con trozos de fresa, plátano y leche entera',
        almuerzo: 'Salmón a la plancha con puré de camote y espárragos o ejotes',
        colacionTarde: 'Yogur natural con pera picada',
        cena: 'Sopa de estrellitas con verduras y pollo desmenuzado',
        notas: 'Salmón rico en omega 3.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Pan integral con queso fresco y rodajitas de plátano',
        almuerzo: 'Guiso de garbanzos con calabaza, espinacas y carne magra',
        colacionTarde: 'Galletitas caseras de avena y plátano',
        cena: 'Tortilla suave de calabacín con arroz integral',
        notas: 'Garbanzos tradicionales.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Panqueque de avena con mantequilla de cacahuate pura',
        almuerzo: 'Ternera estofada con papas, zanahorias y arvejas tiernas',
        colacionTarde: 'Mango en trocitos con queso fresco',
        cena: 'Pastas cortas con salsa casera de espinaca y ricota',
        notas: 'Ternera muy tierna.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Huevos revueltos con arepa y aguacate',
        almuerzo: 'Pechuga de pollo a la plancha con arroz basmati y verduras al vapor',
        colacionTarde: 'Fruta fresca de temporada',
        cena: 'Crema de zanahoria con garbanzos y huevo duro',
        notas: 'Pollo y verduras al vapor.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Yogur natural con compota de manzana y avena',
        almuerzo: 'Hamburguesa casera de pescado con bastones de camote al horno',
        colacionTarde: 'Papaya en cubitos',
        cena: 'Quesadilla suave con queso fresco y pollo',
        notas: 'Hamburguesita de pescado.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Arepita con huevo revuelto y fruta',
        almuerzo: 'Arroz con frijoles, carne en tiras tiernas y aguacate',
        colacionTarde: 'Galleta de avena con leche',
        cena: 'Sopa de fideos con verduras y ternera',
        notas: 'Comida familiar nutritiva.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Waffles o panqueques con fruta fresca y yogur',
        almuerzo: 'Pollo asado en familia con puré de papa y ensalada',
        colacionTarde: 'Fruta fresca variada',
        cena: 'Crema de calabaza con huevo picado',
        notas: 'Cierre de la semana 2.'
      }
    ]
  },
  {
    month: 15,
    week: 3,
    title: 'Mes 15 - Semana 3: Creatividad y Variedad en la Mesa',
    subtitle: 'Platos atractivos y coloridos para motivar una relación positiva con la comida.',
    summaryNotes: ['Presentar alimentos en cortes divertidos y coloridos.'],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Avena con leche, mango en cubos y canela',
        almuerzo: 'Macarrones con boloñesa casera y queso fresco rallado',
        colacionTarde: 'Yogur natural con plátano',
        cena: 'Crema de calabacín con merluza al vapor y pan integral',
        notas: 'Macarrones con boloñesa.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Tostada con aguacate machacado, tomate y huevo revuelto',
        almuerzo: 'Pollo al limón suave con puré de camote y brócoli',
        colacionTarde: 'Galletitas caseras de avena',
        cena: 'Sopa de verduras con fideos y queso fresco',
        notas: 'Pollo con puré de camote.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Panqueque de avena y plátano con yogur',
        almuerzo: 'Guiso de lentejas con verduras y arroz integral',
        colacionTarde: 'Papaya y melón en cubitos',
        cena: 'Tortilla de papas y espinacas con ensalada tibia',
        notas: 'Lentejas con arroz integral.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Huevos revueltos con arepa suave y fruta',
        almuerzo: 'Pescado blanco al horno con papas y zanahorias asadas',
        colacionTarde: 'Yogur natural con compota de pera',
        cena: 'Puré rústico de verduras con pollo tierno',
        notas: 'Pescado con papas asadas.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Yogur natural con avena, fresas y chía',
        almuerzo: 'Hamburguesita casera de ternera con arroz y calabacín',
        colacionTarde: 'Fruta fresca de temporada',
        cena: 'Pastas cortas con salsa de calabaza y pollo',
        notas: 'Hamburguesita de ternera.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Arepa con queso blanco pasteurizado y aguacate',
        almuerzo: 'Arroz con frijoles negros, carne deshebrada y plátano macho',
        colacionTarde: 'Galleta de avena con leche',
        cena: 'Crema de calabaza con huevo duro picado',
        notas: 'Frijoles negros y carne.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Panqueques con fruta fresca y yogur natural',
        almuerzo: 'Pollo al horno familiar con verduras asadas y arroz',
        colacionTarde: 'Fruta fresca picadita',
        cena: 'Sopa de fideos con ternera y verduras',
        notas: 'Cierre de la semana 3.'
      }
    ]
  },
  {
    month: 15,
    week: 4,
    title: 'Mes 15 - Semana 4: Hábitos Saludables y Crecimiento',
    subtitle: 'El niño mastica eficientemente todas las texturas sólidas.',
    summaryNotes: ['Mantener la ingesta regular de agua y evitar ultraprocesados.'],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Yogur natural con avena, plátano y fresas',
        almuerzo: 'Pastel de papa con carne molida y verduras',
        colacionTarde: 'Galletitas caseras de avena',
        cena: 'Crema de calabacín con pollo tierno y arroz',
        notas: 'Pastel de papa suave.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Pan integral con queso fresco y aguacate',
        almuerzo: 'Pescado al horno con puré de camote y ejotes',
        colacionTarde: 'Papaya en cubitos con queso fresco',
        cena: 'Sopa de fideos con verduras y huevo picado',
        notas: 'Pescado al horno.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Panqueque de avena con crema de cacahuate y plátano',
        almuerzo: 'Guiso de lentejas con pollo y arroz integral',
        colacionTarde: 'Fruta fresca de temporada',
        cena: 'Tortilla de espinacas con rodajas de tomate y pan',
        notas: 'Lentejas y pollo.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Huevos revueltos con arepa y fruta fresca',
        almuerzo: 'Ternera guisada con papas, zanahorias y arvejas',
        colacionTarde: 'Yogur natural con mango',
        cena: 'Puré rústico de verduras con pescado blanco',
        notas: 'Ternera guisada.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Avena cremosa con leche, canela y manzana rallada',
        almuerzo: 'Pasta corta con pollo, brócoli y salsa de tomate casera',
        colacionTarde: 'Galleta de avena con leche',
        cena: 'Pescado al vapor con papas y calabacín',
        notas: 'Pasta con pollo y brócoli.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Arepita con huevo revuelto y aguacate',
        almuerzo: 'Arroz con frijoles, carne asada en tiras tiernas y plátano',
        colacionTarde: 'Melón en cubitos',
        cena: 'Crema de calabaza con huevo duro picado',
        notas: 'Carne asada tierna.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Waffles caseros con fruta fresca y yogur',
        almuerzo: 'Pollo asado en familia con arroz y ensalada',
        colacionTarde: 'Fruta fresca picada',
        cena: 'Sopa de letras con verduras y pollo',
        notas: '¡Mes 15 completado con éxito!'
      }
    ]
  },

  // ==========================================
  // --- MES 16 -------------------------------
  // ==========================================
  {
    month: 16,
    week: 1,
    title: 'Mes 16 - Semana 1: Comedor Activo y Platos Familiares',
    subtitle: 'Mayor consistencia, cubitos tiernos y legumbres enteras.',
    summaryNotes: ['Alimentación familiar balanceada con 3 comidas + 2 colaciones nutritivas.'],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Avena cocida con leche entera, plátano en rodajas y canela',
        almuerzo: 'Boloñesa casera de carne magra con pasta corta y queso fresco',
        colacionTarde: 'Yogur natural con compota de manzana',
        cena: 'Crema de calabacín con daditos de pollo tierno y arroz',
        notas: 'Pasta corta que el niño come con tenedor infantil.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Tostada de pan integral con queso fresco y aguacate',
        almuerzo: 'Pescado blanco al horno con puré de camote y brócoli al vapor',
        colacionTarde: 'Galletitas caseras de avena y plátano',
        cena: 'Tortillita de espinacas con ensalada tibia de tomate pelado',
        notas: 'Brócoli al vapor en arbolitos suaves.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Panqueque de avena con mantequilla de cacahuate pura',
        almuerzo: 'Guiso de lentejas con calabaza, papas y carne magra',
        colacionTarde: 'Papaya en cubitos con queso fresco',
        cena: 'Sopa de fideos con verduras picaditas y huevo duro',
        notas: 'Lentejas con calabaza.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Huevos revueltos con arepa suave y fruta fresca',
        almuerzo: 'Pechuga de pollo a la plancha con arroz integral y ejotes',
        colacionTarde: 'Yogur natural con mango en cubitos',
        cena: 'Puré rústico de verduras con ternera picadita',
        notas: 'Pollo a la plancha muy tierno.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Yogur natural con avena, fresas y semillas de chía hidratadas',
        almuerzo: 'Hamburguesita casera de ternera con puré de papa y zanahoria',
        colacionTarde: 'Galleta de avena con leche entera',
        cena: 'Pastas cortas con salsa de calabaza y pollo',
        notas: 'Hamburguesita casera.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Arepita con queso fresco y aguacate',
        almuerzo: 'Arroz con frijoles negros, carne deshebrada y plátano macho asado',
        colacionTarde: 'Melón o sandía sin semillas',
        cena: 'Crema de calabaza con pescado blanco al vapor',
        notas: 'Frijoles negros tradicionales.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Waffles de avena con fruta fresca y yogur natural',
        almuerzo: 'Pollo al horno familiar con papas al romero suave y ensalada',
        colacionTarde: 'Fruta fresca variada picada',
        cena: 'Sopa de estrellitas con verduras y ternera',
        notas: 'Almuerzo familiar dominical.'
      }
    ]
  },
  {
    month: 16,
    week: 2,
    title: 'Mes 16 - Semana 2: Salmón, Legumbres y Sabores Mediterráneos',
    subtitle: 'Aceite de oliva, salmón y verduras al horno.',
    summaryNotes: ['Grasas saludables de pescado y aceite de oliva virgen extra.'],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Avena con leche, trozos de mango y fresa',
        almuerzo: 'Salmón al horno con puré de camote y espárragos tiernos',
        colacionTarde: 'Yogur natural con plátano',
        cena: 'Sopa de fideos con pollo y verduras',
        notas: 'Salmón rico en omega 3.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Pan integral con queso fresco y tomate en rodajas',
        almuerzo: 'Garbanzos guisados con espinacas y carne magra',
        colacionTarde: 'Galletitas de avena',
        cena: 'Tortilla suave de calabacín con arroz integral',
        notas: 'Garbanzos tradicionales.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Panqueques de avena y plátano con yogur',
        almuerzo: 'Ternera estofada con papas, zanahorias y arvejas tiernas',
        colacionTarde: 'Papaya con queso fresco',
        cena: 'Pastas cortas con salsa de espinaca y ricota',
        notas: 'Ternera estofada muy suave.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Huevos revueltos con arepa y aguacate',
        almuerzo: 'Pollo al limón con arroz basmati y calabacines salteados',
        colacionTarde: 'Fruta fresca de temporada',
        cena: 'Crema de verduras con garbanzos y huevo duro',
        notas: 'Pollo aromático suave.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Avena cremosa con manzana rallada y canela',
        almuerzo: 'Hamburguesa casera de pescado con bastones de camote al horno',
        colacionTarde: 'Yogur natural con pera',
        cena: 'Quesadilla suave con queso fresco y aguacate',
        notas: 'Cena rápida y nutritiva.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Tostada con aguacate, tomate y huevo revuelto',
        almuerzo: 'Arroz con frijoles, carne en tiras tiernas y plátano asado',
        colacionTarde: 'Melón en cubitos',
        cena: 'Sopa de verduras con fideos y ternera',
        notas: 'Comida completa.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Panqueque con fruta fresca y yogur',
        almuerzo: 'Pollo asado en familia con papas y ensalada tibia',
        colacionTarde: 'Compota de manzana casera',
        cena: 'Crema suave de calabacín con pollo',
        notas: 'Cierre de la semana 2.'
      }
    ]
  },
  {
    month: 16,
    week: 3,
    title: 'Mes 16 - Semana 3: Variedad y Creatividad en Cada Plato',
    subtitle: 'Nuevas presentaciones para fomentar el gusto por los vegetales.',
    summaryNotes: ['Estimular la autonomía y el interés visual por los alimentos.'],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Yogur natural con avena, plátano y arándanos cortados',
        almuerzo: 'Lasaña casera de verduras con carne molida y queso pasteurizado',
        colacionTarde: 'Galleta de avena con fruta',
        cena: 'Crema de calabacín con merluza al vapor y pan integral',
        notas: 'Lasaña de verduras.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Tostada con aguacate y huevo revuelto',
        almuerzo: 'Pollo a la plancha con puré de camote y brócoli al vapor',
        colacionTarde: 'Papaya en cubitos con queso fresco',
        cena: 'Sopa de estrellitas con verduras y huevo duro picado',
        notas: 'Pollo y brócoli.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Panqueque de avena con compota de pera sin azúcar',
        almuerzo: 'Guiso de lentejas con calabaza, verduras y arroz integral',
        colacionTarde: 'Fruta fresca de temporada',
        cena: 'Tortilla francesa con espinacas y pan',
        notas: 'Lentejas y arroz integral.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Avena cocida con trozos de mango y leche',
        almuerzo: 'Pescado blanco al horno con papas en rodajas y zanahoria',
        colacionTarde: 'Yogur natural con manzana rallada',
        cena: 'Puré rústico de lentejas con pollo tierno',
        notas: 'Pescado blanco al horno.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Mini arepita con queso fresco y plátano maduro',
        almuerzo: 'Hamburguesita casera de pollo con arroz y calabacín',
        colacionTarde: 'Galletitas de avena con leche',
        cena: 'Pastas cortas con salsa de calabaza y pollo',
        notas: 'Hamburguesita de pollo.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Huevos revueltos con espinacas y pan integral',
        almuerzo: 'Arroz con frijoles negros, carne deshebrada y aguacate',
        colacionTarde: 'Melón en cubitos',
        cena: 'Crema de calabaza con huevo duro picado',
        notas: 'Frijoles negros tradicionales.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Waffles de plátano con yogur y fruta fresca',
        almuerzo: 'Pollo al horno familiar con verduras y papas',
        colacionTarde: 'Fruta fresca variada',
        cena: 'Sopa de fideos con ternera y verduras',
        notas: 'Cierre de la semana 3.'
      }
    ]
  },
  {
    month: 16,
    week: 4,
    title: 'Mes 16 - Semana 4: Consolidación de Hábitos Saludables',
    subtitle: 'Comidas familiares equilibradas con masticación consolidada.',
    summaryNotes: ['Mantener la ingesta regular de agua y variedad de colores.'],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Avena cremosa con leche, plátano y canela',
        almuerzo: 'Pastel de papa con carne molida y verduras',
        colacionTarde: 'Yogur natural con trozos de fresa',
        cena: 'Crema de verduras con pollo tierno y arroz',
        notas: 'Pastel de papa suave.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Pan integral con queso fresco y aguacate',
        almuerzo: 'Pescado blanco al horno con puré de camote y ejotes',
        colacionTarde: 'Galleta de avena con fruta',
        cena: 'Sopa de fideos con verduras y queso fresco',
        notas: 'Pescado con camote.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Panqueque de avena con crema de cacahuate y plátano',
        almuerzo: 'Guiso de lentejas con verduras y arroz integral',
        colacionTarde: 'Papaya en cubitos',
        cena: 'Tortilla de espinacas con ensalada tibia de tomate',
        notas: 'Lentejas ricas en hierro.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Yogur natural con mango y copos de avena',
        almuerzo: 'Ternera guisada con papas, zanahorias y arvejas',
        colacionTarde: 'Fruta fresca de temporada',
        cena: 'Puré rústico de calabacín con pollo picadito',
        notas: 'Ternera estofada.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Arepita con queso fresco y fruta fresca',
        almuerzo: 'Pasta corta con pollo, brócoli y salsa de tomate casera',
        colacionTarde: 'Yogur natural con pera',
        cena: 'Pescado al vapor con papas baby y calabacín',
        notas: 'Pasta con brócoli y pollo.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Huevos revueltos con tomate y pan integral',
        almuerzo: 'Arroz con frijoles, carne asada en tiras tiernas y plátano asado',
        colacionTarde: 'Galleta de avena con vaso de leche',
        cena: 'Crema de calabaza con huevo duro picado',
        notas: 'Carne asada tierna.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Waffles o panqueques caseros con fruta fresca y yogur',
        almuerzo: 'Pollo asado en familia con papas al horno y verduras',
        colacionTarde: 'Fruta fresca picada',
        cena: 'Sopa de letras con pollo y verduras',
        notas: '¡Mes 16 completado con éxito!'
      }
    ]
  },

  // ==========================================
  // --- MES 17 -------------------------------
  // ==========================================
  {
    month: 17,
    week: 1,
    title: 'Mes 17 - Semana 1: Variedad de Granos y Proteínas',
    subtitle: 'Quinoa, avena, pasta integral, ternera, pollo y pescado.',
    summaryNotes: ['Fomentar la autoalimentación y el uso del vaso abierto.'],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Yogur natural con avena, plátano y arándanos',
        almuerzo: 'Pastas cortas con boloñesa casera de carne magra y queso fresco',
        colacionTarde: 'Galletitas caseras de avena y plátano',
        cena: 'Crema de calabacín con merluza al vapor y arroz',
        notas: 'Pastas cortas con carne magra.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Tostada de pan integral con huevo revuelto y aguacate',
        almuerzo: 'Pescado blanco al horno con puré de camote y brócoli',
        colacionTarde: 'Papaya en cubitos con queso fresco',
        cena: 'Sopa de estrellitas con verduras y huevo duro picado',
        notas: 'Pescado blanco con camote.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Panqueque de avena con compota de pera sin azúcar',
        almuerzo: 'Guiso de lentejas con calabaza, verduras y arroz integral',
        colacionTarde: 'Fruta fresca de temporada',
        cena: 'Tortilla francesa con espinacas y pan',
        notas: 'Lentejas con arroz integral.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Avena cocida con trozos de mango y leche',
        almuerzo: 'Pescado blanco al horno con papas en rodajas y zanahoria',
        colacionTarde: 'Yogur natural con manzana rallada',
        cena: 'Puré rústico de lentejas con pollo tierno',
        notas: 'Pescado blanco al horno.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Mini arepita con queso fresco y plátano maduro',
        almuerzo: 'Hamburguesita casera de pollo con arroz y calabacín',
        colacionTarde: 'Galletitas de avena con leche',
        cena: 'Pastas cortas con salsa de calabaza y pollo',
        notas: 'Hamburguesita de pollo.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Huevos revueltos con espinacas y pan integral',
        almuerzo: 'Arroz con frijoles negros, carne deshebrada y aguacate',
        colacionTarde: 'Melón en cubitos',
        cena: 'Crema de calabaza con huevo duro picado',
        notas: 'Frijoles negros tradicionales.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Waffles de plátano con yogur y fruta fresca',
        almuerzo: 'Pollo al horno familiar con verduras y papas',
        colacionTarde: 'Fruta fresca variada',
        cena: 'Sopa de fideos con ternera y verduras',
        notas: 'Almuerzo familiar dominical.'
      }
    ]
  },
  {
    month: 17,
    week: 2,
    title: 'Mes 17 - Semana 2: Salmón, Legumbres y Grasas Saludables',
    subtitle: 'Omega 3 de salmón y grasas buenas de aguacate y aceite de oliva.',
    summaryNotes: ['Nutrición cerebral con ácidos grasos esenciales y colina.'],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Avena con leche, trozos de fresa y plátano',
        almuerzo: 'Salmón a la plancha con puré de camote y espárragos tiernos',
        colacionTarde: 'Yogur natural con pera picada',
        cena: 'Sopa de fideos con caldo de pollo casero y verduras',
        notas: 'Salmón rico en omega 3.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Pan integral con queso fresco y rodajas de tomate',
        almuerzo: 'Guiso de garbanzos con calabaza, espinacas y carne magra',
        colacionTarde: 'Galletitas caseras de avena y plátano',
        cena: 'Tortilla suave de calabacín con arroz integral',
        notas: 'Garbanzos tradicionales.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Panqueque de avena con mantequilla de cacahuate pura',
        almuerzo: 'Ternera estofada con papas, zanahorias y arvejas tiernas',
        colacionTarde: 'Mango en trocitos con queso fresco',
        cena: 'Pastas cortas con salsa casera de espinaca y ricota',
        notas: 'Ternera muy tierna.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Huevos revueltos con arepa y aguacate',
        almuerzo: 'Pechuga de pollo a la plancha con arroz basmati y verduras al vapor',
        colacionTarde: 'Fruta fresca de temporada',
        cena: 'Crema de zanahoria con garbanzos y huevo duro',
        notas: 'Pollo y verduras al vapor.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Yogur natural con compota de manzana y avena',
        almuerzo: 'Hamburguesa casera de pescado con bastones de camote al horno',
        colacionTarde: 'Papaya en cubitos',
        cena: 'Quesadilla suave con queso fresco y pollo',
        notas: 'Hamburguesita de pescado.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Arepita con huevo revuelto y fruta',
        almuerzo: 'Arroz con frijoles, carne en tiras tiernas y aguacate',
        colacionTarde: 'Galleta de avena con leche',
        cena: 'Sopa de fideos con verduras y ternera',
        notas: 'Comida familiar nutritiva.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Waffles o panqueques con fruta fresca y yogur',
        almuerzo: 'Pollo asado en familia con puré de papa y ensalada',
        colacionTarde: 'Fruta fresca variada',
        cena: 'Crema de calabaza con huevo picado',
        notas: 'Cierre de la semana 2.'
      }
    ]
  },
  {
    month: 17,
    week: 3,
    title: 'Mes 17 - Semana 3: Creatividad y Variedad de Colores',
    subtitle: 'Verduras variadas y presentaciones atractivas.',
    summaryNotes: ['Estimular el interés visual y sensorial del niño.'],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Yogur natural con avena, plátano y fresas',
        almuerzo: 'Pastel de papa con carne molida y verduras',
        colacionTarde: 'Galletitas caseras de avena',
        cena: 'Crema de calabacín con pollo tierno y arroz',
        notas: 'Pastel de papa suave.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Pan integral con queso fresco y aguacate',
        almuerzo: 'Pescado al horno con puré de camote y ejotes',
        colacionTarde: 'Papaya en cubitos con queso fresco',
        cena: 'Sopa de fideos con verduras y huevo picado',
        notas: 'Pescado al horno.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Panqueque de avena con crema de cacahuate y plátano',
        almuerzo: 'Guiso de lentejas con pollo y arroz integral',
        colacionTarde: 'Fruta fresca de temporada',
        cena: 'Tortilla de espinacas con rodajas de tomate y pan',
        notas: 'Lentejas y pollo.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Huevos revueltos con arepa y fruta fresca',
        almuerzo: 'Ternera guisada con papas, zanahorias y arvejas',
        colacionTarde: 'Yogur natural con mango',
        cena: 'Puré rústico de verduras con pescado blanco',
        notas: 'Ternera guisada.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Avena cremosa con leche, canela y manzana rallada',
        almuerzo: 'Pasta corta con pollo, brócoli y salsa de tomate casera',
        colacionTarde: 'Galleta de avena con leche',
        cena: 'Pescado al vapor con papas y calabacín',
        notas: 'Pasta con pollo y brócoli.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Arepita con huevo revuelto y aguacate',
        almuerzo: 'Arroz con frijoles, carne asada en tiras tiernas y plátano',
        colacionTarde: 'Melón en cubitos',
        cena: 'Crema de calabaza con huevo duro picado',
        notas: 'Carne asada tierna.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Waffles caseros con fruta fresca y yogur',
        almuerzo: 'Pollo asado en familia con arroz y ensalada',
        colacionTarde: 'Fruta fresca picada',
        cena: 'Sopa de letras con verduras y pollo',
        notas: 'Cierre de la semana 3.'
      }
    ]
  },
  {
    month: 17,
    week: 4,
    title: 'Mes 17 - Semana 4: Transición hacia el Mes 18',
    subtitle: 'El niño come una amplia variedad de comidas familiares.',
    summaryNotes: ['Preparación para incorporar nuevas recetas como pudines de chía y panes caseros.'],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Avena con leche, trozos de mango y fresa',
        almuerzo: 'Salmón al horno con puré de camote y espárragos tiernos',
        colacionTarde: 'Yogur natural con plátano',
        cena: 'Sopa de fideos con pollo y verduras',
        notas: 'Salmón al horno.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Pan integral con queso fresco y tomate',
        almuerzo: 'Garbanzos guisados con espinacas y carne magra',
        colacionTarde: 'Galletitas de avena',
        cena: 'Tortilla suave de calabacín con arroz integral',
        notas: 'Garbanzos con espinacas.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Panqueques de avena y plátano con yogur',
        almuerzo: 'Ternera estofada con papas, zanahorias y arvejas tiernas',
        colacionTarde: 'Papaya con queso fresco',
        cena: 'Pastas cortas con salsa de espinaca y ricota',
        notas: 'Ternera estofada.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Huevos revueltos con arepa y aguacate',
        almuerzo: 'Pollo al limón con arroz basmati y calabacines salteados',
        colacionTarde: 'Fruta fresca de temporada',
        cena: 'Crema de verduras con garbanzos y huevo duro',
        notas: 'Pollo al limón.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Avena cremosa con manzana rallada y canela',
        almuerzo: 'Hamburguesa casera de pescado con bastones de camote al horno',
        colacionTarde: 'Yogur natural con pera',
        cena: 'Quesadilla suave con queso fresco y aguacate',
        notas: 'Quesadilla suave.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Tostada con aguacate, tomate y huevo revuelto',
        almuerzo: 'Arroz con frijoles, carne en tiras tiernas y plátano asado',
        colacionTarde: 'Melón en cubitos',
        cena: 'Sopa de verduras con fideos y ternera',
        notas: 'Frijoles y carne tierna.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Panqueque con fruta fresca y yogur',
        almuerzo: 'Pollo asado en familia con papas y ensalada tibia',
        colacionTarde: 'Compota de manzana casera',
        cena: 'Crema suave de calabacín con pollo',
        notas: '¡Mes 17 completado exitosamente!'
      }
    ]
  },

  // ==========================================
  // --- MES 18 -------------------------------
  // ==========================================
  {
    month: 18,
    week: 1,
    title: 'Mes 18 - Semana 1: Explorador Activo y Pudín de Chía',
    subtitle: 'Se introduce pudín de chía hidratado y recetas con mayor consistencia.',
    summaryNotes: [
      'Pudín de chía hidratado en leche entera o vegetal sin azúcar.',
      'Frutas variadas con semillas hidratadas para un aporte óptimo de fibra y omega 3.',
      'Comidas familiares completas con autonomía consolidada.'
    ],
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
    month: 18,
    week: 2,
    title: 'Mes 18 - Semana 2: Legumbres, Salmón y Meriendas Nutritivas',
    subtitle: 'Nuevas opciones de snacks saludables para niños activos.',
    summaryNotes: ['Pudines de chía, galletas de avena y frutas frescas como colaciones.'],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Pudín de chía con leche y plátano en rodajas',
        almuerzo: 'Albóndigas de ternera con salsa casera de tomate y pasta corta',
        colacionTarde: 'Yogur natural con mango',
        cena: 'Crema de calabacín con pollo tierno y arroz',
        notas: 'Albóndigas con pasta.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Tostada de pan integral con queso fresco y aguacate',
        almuerzo: 'Pescado blanco al horno con puré de camote y brócoli',
        colacionTarde: 'Pudín de chía con fresas',
        cena: 'Sopa de fideos con verduras y huevo duro picado',
        notas: 'Pescado con camote.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Panqueques de avena con compota de manzana',
        almuerzo: 'Guiso de lentejas con verduras y carne magra',
        colacionTarde: 'Fruta fresca de temporada',
        cena: 'Tortilla de espinacas con ensalada tibia de tomate',
        notas: 'Lentejas con verduras.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Huevos revueltos con arepa y papaya',
        almuerzo: 'Pollo al horno con arroz integral y zanahorias asadas',
        colacionTarde: 'Yogur natural con pera',
        cena: 'Puré rústico de verduras con pescado blanco',
        notas: 'Pollo al horno.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Avena con leche, trozos de mango y canela',
        almuerzo: 'Hamburguesita casera de ternera con puré de papa y ejotes',
        colacionTarde: 'Galleta de avena con leche',
        cena: 'Pastas cortas con salsa de calabaza y pollo',
        notas: 'Hamburguesita de ternera.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Arepita con queso fresco y aguacate',
        almuerzo: 'Arroz con frijoles negros, carne deshebrada y plátano macho',
        colacionTarde: 'Melón en cubitos',
        cena: 'Crema de calabaza con huevo duro picado',
        notas: 'Frijoles negros y carne.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Waffles de plátano con yogur y fruta fresca',
        almuerzo: 'Pollo al horno familiar con papas y ensalada',
        colacionTarde: 'Pudín de chía con compota de frutos rojos',
        cena: 'Sopa de letras con verduras y ternera',
        notas: 'Cierre de la semana 2.'
      }
    ]
  },
  {
    month: 18,
    week: 3,
    title: 'Mes 18 - Semana 3: Variedad Gastronómica Familiar',
    subtitle: 'Guisos tradicionales, pescados al horno y verduras al vapor.',
    summaryNotes: ['Fomentar la convivencia en la mesa familiar sin distracciones de pantallas.'],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Pudín de chía con leche y trozos de mango',
        almuerzo: 'Salmón al horno con puré de camote y ejotes',
        colacionTarde: 'Galletitas de avena',
        cena: 'Sopa de fideos con verduras y pollo',
        notas: 'Salmón al horno.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Pan integral con queso fresco y tomate',
        almuerzo: 'Garbanzos guisados con espinacas y carne magra',
        colacionTarde: 'Yogur natural con plátano',
        cena: 'Tortilla suave de calabacín con arroz integral',
        notas: 'Garbanzos tradicionales.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Panqueques de avena y plátano con yogur',
        almuerzo: 'Ternera estofada con papas, zanahorias y arvejas tiernas',
        colacionTarde: 'Papaya con queso fresco',
        cena: 'Pastas cortas con salsa de espinaca y ricota',
        notas: 'Ternera estofada.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Huevos revueltos con arepa y aguacate',
        almuerzo: 'Pollo al limón con arroz basmati y calabacines salteados',
        colacionTarde: 'Pudín de chía con fresas',
        cena: 'Crema de verduras con garbanzos y huevo duro',
        notas: 'Pollo al limón.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Avena cremosa con manzana rallada y canela',
        almuerzo: 'Hamburguesa casera de pescado con bastones de camote al horno',
        colacionTarde: 'Yogur natural con pera',
        cena: 'Quesadilla suave con queso fresco y aguacate',
        notas: 'Quesadilla suave.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Tostada con aguacate, tomate y huevo revuelto',
        almuerzo: 'Arroz con frijoles, carne en tiras tiernas y plátano asado',
        colacionTarde: 'Melón en cubitos',
        cena: 'Sopa de verduras con fideos y ternera',
        notas: 'Frijoles y carne tierna.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Panqueque con fruta fresca y yogur',
        almuerzo: 'Pollo asado en familia con papas y ensalada tibia',
        colacionTarde: 'Pudín de chía con frutos rojos',
        cena: 'Crema suave de calabacín con pollo',
        notas: 'Cierre de la semana 3.'
      }
    ]
  },
  {
    month: 18,
    week: 4,
    title: 'Mes 18 - Semana 4: 1 Año y Medio de Nutrición Óptima',
    subtitle: 'El niño disfruta de una dieta 100% integrada con la familia.',
    summaryNotes: ['¡Felicidades por llegar a los 18 meses con hábitos alimentarios sólidos y variados!'],
    days: [
      {
        dayName: 'Lunes',
        desayuno: 'Avena con leche, trozos de mango y fresa',
        almuerzo: 'Lasaña o pastel de papa con carne molida y verduras',
        colacionTarde: 'Pudín de chía con plátano',
        cena: 'Crema de calabacín con pollo tierno y arroz',
        notas: 'Pastel de papa suave.'
      },
      {
        dayName: 'Martes',
        desayuno: 'Pan integral con queso fresco y aguacate',
        almuerzo: 'Pescado blanco al horno con puré de camote y ejotes',
        colacionTarde: 'Galleta de avena con fruta',
        cena: 'Sopa de fideos con verduras y queso fresco',
        notas: 'Pescado con camote.'
      },
      {
        dayName: 'Miércoles',
        desayuno: 'Panqueque de avena con crema de cacahuate y plátano',
        almuerzo: 'Guiso de lentejas con verduras y arroz integral',
        colacionTarde: 'Papaya en cubitos',
        cena: 'Tortilla de espinacas con ensalada tibia de tomate',
        notas: 'Lentejas ricas en hierro.'
      },
      {
        dayName: 'Jueves',
        desayuno: 'Yogur natural con mango y copos de avena',
        almuerzo: 'Ternera guisada con papas, zanahorias y arvejas',
        colacionTarde: 'Fruta fresca de temporada',
        cena: 'Puré rústico de calabacín con pollo picadito',
        notas: 'Ternera estofada.'
      },
      {
        dayName: 'Viernes',
        desayuno: 'Arepita con queso fresco y fruta fresca',
        almuerzo: 'Pasta corta con pollo, brócoli y salsa de tomate casera',
        colacionTarde: 'Pudín de chía con fresas',
        cena: 'Pescado al vapor con papas baby y calabacín',
        notas: 'Pasta con brócoli y pollo.'
      },
      {
        dayName: 'Sábado',
        desayuno: 'Huevos revueltos con tomate y pan integral',
        almuerzo: 'Arroz con frijoles, carne asada en tiras tiernas y plátano asado',
        colacionTarde: 'Galleta de avena con vaso de leche',
        cena: 'Crema de calabaza con huevo duro picado',
        notas: 'Carne asada tierna.'
      },
      {
        dayName: 'Domingo',
        desayuno: 'Waffles o panqueques caseros con fruta fresca y yogur',
        almuerzo: 'Pollo asado en familia con papas al horno y verduras',
        colacionTarde: 'Pudín de chía con frutos del bosque',
        cena: 'Sopa de letras con pollo y verduras',
        notas: '¡Mes 18 completado con hábitos alimentarios consolidados!'
      }
    ]
  }
];
