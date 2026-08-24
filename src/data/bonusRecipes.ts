export interface BonusRecipe {
  id: string;
  book: '12-18m' | '18-24m';
  bookTitle: string;
  category: 'desayunos' | 'almuerzos_cenas' | 'snacks_meriendas';
  categoryLabel: string;
  number: number;
  title: string;
  yields: string;
  prepTime: string;
  ingredients: string[];
  steps: string[];
  tips?: string[];
  badge?: string;
  icon: string;
  image?: string;
  benefits?: string[];
  allergenNote?: string;
}

export interface BonusBookInfo {
  id: '12-18m' | '18-24m';
  title: string;
  shortTitle: string;
  subtitle: string;
  ageRange: string;
  recipeCount: number;
  intro: string;
  recommendations: string[];
  portionsInfo?: { label: string; count: string; desc: string }[];
  shoppingList?: { category: string; items: string[] }[];
  batchCookingHacks?: string[];
  substitutions?: string[];
}

export const BONUS_BOOKS: BonusBookInfo[] = [
  {
    id: '12-18m',
    title: '30 Recetas Nutritivas para tu Bebé (12–18 meses)',
    shortTitle: '12 a 18 Meses (30 Recetas)',
    subtitle: 'Nuevas texturas, autonomía y participación en platos familiares',
    ageRange: '12–18 meses',
    recipeCount: 30,
    intro: 'La etapa de los 12 a 18 meses es clave para que tu bebé amplíe su alimentación, explore nuevas texturas y participe más en los platos familiares. Recetas fáciles, seguras y nutritivas.',
    recommendations: [
      'No añadir sal, azúcar ni miel en estas preparaciones.',
      'Adaptar las texturas según la tolerancia del bebé.',
      'Cortar siempre los alimentos en trozos adecuados para evitar riesgo de atragantamiento.',
      'Supervisar en todo momento mientras tu bebé come.',
      'Introducir nuevos alimentos poco a poco y observar posibles reacciones.'
    ],
    portionsInfo: [
      { label: 'Frutas y verduras', count: '2-3 porciones/día', desc: '1/4 taza por porción' },
      { label: 'Cereales y tubérculos', count: '3-4 porciones/día', desc: '1/4 taza cocida por porción' },
      { label: 'Proteínas', count: '2 porciones/día', desc: '30–40 g cocido' },
      { label: 'Lácteos', count: '2 porciones/día', desc: '1/2 taza yogur, 20 g queso fresco' }
    ],
    shoppingList: [
      {
        category: 'Frutas y Verduras',
        items: ['Plátano', 'Pera', 'Manzana', 'Melón', 'Fresas', 'Frutos rojos', 'Mango', 'Zanahoria', 'Calabacín', 'Espinaca', 'Brócoli', 'Patata', 'Camote', 'Calabaza', 'Tomate']
      },
      {
        category: 'Proteínas y Cereales',
        items: ['Pollo', 'Pavo', 'Pescado blanco', 'Huevo', 'Lentejas', 'Garbanzos', 'Avena', 'Arroz integral', 'Pasta', 'Pan integral']
      },
      {
        category: 'Lácteos y Grasas Saludables',
        items: ['Yogur natural sin azúcar', 'Queso fresco pasteurizado', 'Aceite de oliva virgen', 'Crema 100% cacahuete', 'Coco rallado']
      }
    ],
    batchCookingHacks: [
      'Cocinar pollo, arroz y verduras en tandas grandes para la semana.',
      'Congelar muffins, croquetas y albóndigas en porciones individuales.',
      'Usar purés de verduras como base para sopas rápidas.'
    ],
    substitutions: [
      'Sustituir huevo por 1/2 plátano maduro o 1 cda de semillas de chía hidratadas.',
      'Sustituir lácteos por yogur vegetal sin azúcar o tofu suave.'
    ]
  },
  {
    id: '18-24m',
    title: '40 Recetas Nutritivas para Bebés (18–24 meses)',
    shortTitle: '18 a 24 Meses (40 Recetas)',
    subtitle: 'Variedad, pinza fina, sabores reales y texturas más completas',
    ageRange: '18–24 meses',
    recipeCount: 40,
    intro: 'A los 18–24 meses tu peque ya come más como la familia: desarrolla preferencias, gana autonomía y practica la pinza fina. 40 recetas pensadas para ofrecer variedad y texturas seguras.',
    recommendations: [
      'Supervisa siempre la hora de comer.',
      'Corta los alimentos en tamaños seguros según la edad.',
      'Introduce alérgenos de forma gradual y observa 48 horas.',
      'Ajusta la textura (más triturada o más trozos) según la habilidad de masticación de tu hijo.'
    ],
    batchCookingHacks: [
      'Congela porciones en bandejas o cubeteras y guarda en bolsas etiquetadas (muffins, croquetas, albóndigas).',
      'Recalienta a temperatura tibia y prueba antes de dar al bebé.',
      'Mantén variedad de colores: 3 colores por comida para diversidad nutricional.'
    ]
  }
];

export const BONUS_RECIPES_DATABASE: BonusRecipe[] = [
  // ==========================================
  // LIBRO 1: 12-18 MESES (30 RECETAS)
  // ==========================================
  // Desayunos (10 recetas)
  {
    id: 'b12-d1',
    book: '12-18m',
    bookTitle: '12–18 meses',
    category: 'desayunos',
    categoryLabel: 'Desayuno',
    number: 1,
    title: 'Pan integral con crema de aguacate y queso fresco',
    yields: '1 porción',
    prepTime: '5 min',
    ingredients: [
      '1 rebanada de pan integral blando',
      '1/4 aguacate maduro',
      '1–2 cdas queso fresco pasteurizado (desmenuzado)'
    ],
    steps: [
      'Tuesta ligeramente la rebanada si quieres (debe quedar blanda).',
      'Aplasta el aguacate con un tenedor hasta formar crema.',
      'Unta el aguacate sobre el pan y espolvorea el queso fresco.',
      'Corta en tiras anchas ("finger food") y ofrece.'
    ],
    tips: ['Guarda el aguacate sobrante con unas gotas de limón para que no se oxide.'],
    badge: 'Grasas Buenas',
    icon: '🥑'
  },
  {
    id: 'b12-d2',
    book: '12-18m',
    bookTitle: '12–18 meses',
    category: 'desayunos',
    categoryLabel: 'Desayuno',
    number: 2,
    title: 'Avena cocida con plátano en rodajitas',
    yields: '1 porción',
    prepTime: '8 min',
    ingredients: [
      '3 cdas avena en hojuelas finas',
      '1/2 taza agua o leche (materna, fórmula o entera si pediatra OK)',
      '1/2 plátano maduro en rodajas'
    ],
    steps: [
      'Hierve el agua o leche en un cazo pequeño.',
      'Añade la avena y cocina 4–6 min a fuego bajo removiendo.',
      'Añade el plátano en rodajas y aplasta un poco con la cuchara para mezclar.',
      'Enfría hasta temperatura tibia y sirve.'
    ],
    tips: ['Variación: añade puré de manzana casero en lugar de plátano.'],
    badge: 'Energía Lenta',
    icon: '🍌'
  },
  {
    id: 'b12-d3',
    book: '12-18m',
    bookTitle: '12–18 meses',
    category: 'desayunos',
    categoryLabel: 'Desayuno',
    number: 3,
    title: 'Mini pancakes de manzana y canela (sin azúcar)',
    yields: '4–6 mini pancakes',
    prepTime: '10 min',
    ingredients: [
      '1/2 manzana rallada finamente',
      '1 huevo',
      '3 cdas avena molida',
      'Pizca de canela (opcional)'
    ],
    steps: [
      'Mezcla la manzana rallada, el huevo, la avena molida y la canela hasta obtener masa homogénea.',
      'Calienta una sartén antiadherente a fuego bajo.',
      'Vierte cucharadas pequeñas de la mezcla.',
      'Cocina 1–2 min por lado hasta dorar ligeramente. Enfría un poco, corta en trozos y sirve.'
    ],
    tips: ['Textura suave ideal para que el bebé practique agarre con los dedos.'],
    badge: 'Sin Azúcar',
    icon: '🥞'
  },
  {
    id: 'b12-d4',
    book: '12-18m',
    bookTitle: '12–18 meses',
    category: 'desayunos',
    categoryLabel: 'Desayuno',
    number: 4,
    title: 'Tostaditas con crema de cacahuete suave',
    yields: '1 porción',
    prepTime: '3 min',
    ingredients: [
      '1 rebanada de pan integral blando',
      '1 cdta crema 100% cacahuete (sin trozos ni sal añadida)'
    ],
    steps: [
      'Unta una capa fina de crema de cacahuete sobre el pan blando.',
      'Corta en tiras anchas para fácil sujeción.',
      'Ofrece siempre bajo supervisión activa.'
    ],
    tips: ['Verifica tolerancia previa al cacahuete introducido de forma gradual.'],
    badge: 'Alérgeno Seguro',
    icon: '🥜'
  },
  {
    id: 'b12-d5',
    book: '12-18m',
    bookTitle: '12–18 meses',
    category: 'desayunos',
    categoryLabel: 'Desayuno',
    number: 5,
    title: 'Tortilla de huevo con tomate rallado y calabacín',
    yields: '1–2 porciones',
    prepTime: '10 min',
    ingredients: [
      '1 huevo',
      '2 cdas calabacín rallado y escurrido',
      '1 cda tomate rallado sin piel',
      '1 cdta aceite de oliva'
    ],
    steps: [
      'Bate el huevo y mezcla bien con el calabacín escurrido y el tomate.',
      'Cocina en sartén antiadherente con aceite a fuego bajo 2–3 min por cada lado hasta cuajar por completo.',
      'Corta en tiras pequeñas o daditos y sirve tibio.'
    ],
    tips: ['Asegura que el huevo quede 100% cuajado por seguridad sanitaria.'],
    badge: 'Proteína Top',
    icon: '🍳'
  },
  {
    id: 'b12-d6',
    book: '12-18m',
    bookTitle: '12–18 meses',
    category: 'desayunos',
    categoryLabel: 'Desayuno',
    number: 6,
    title: 'Yogur natural con trozos de fresa madura',
    yields: '1 porción',
    prepTime: '4 min',
    ingredients: [
      '1/2 taza yogur natural sin azúcar pasteurizado',
      '3–4 fresas maduras, sin hojas, picadas en cubitos pequeños'
    ],
    steps: [
      'Lava muy bien las fresas y córtalas en trocitos muy pequeños.',
      'Mezcla el yogur con la fresa.',
      'Si la textura es muy firme, aplasta ligeramente la fruta con un tenedor. Servir fresco.'
    ],
    tips: ['Utiliza yogur entero natural sin edulcorantes ni saborizantes artificiales.'],
    badge: 'Probióticos',
    icon: '🍓'
  },
  {
    id: 'b12-d7',
    book: '12-18m',
    bookTitle: '12–18 meses',
    category: 'desayunos',
    categoryLabel: 'Desayuno',
    number: 7,
    title: 'Muffins caseros de plátano y zanahoria',
    yields: '6 mini muffins',
    prepTime: '25 min',
    ingredients: [
      '1 plátano maduro machacado',
      '1/2 taza zanahoria rallada fina',
      '1 huevo',
      '1 taza avena molida',
      '1 cdta polvo de hornear (opcional)'
    ],
    steps: [
      'Precalienta el horno a 180 °C.',
      'Mezcla plátano, zanahoria y huevo batido.',
      'Añade la avena y el polvo de hornear; integra hasta que quede uniforme.',
      'Rellena moldes mini y hornea 15–18 min. Deja enfriar y sirve en porciones pequeñas.'
    ],
    tips: ['Se pueden congelar individualmente hasta por 2 meses.'],
    badge: 'Batch Cooking',
    icon: '🧁'
  },
  {
    id: 'b12-d8',
    book: '12-18m',
    bookTitle: '12–18 meses',
    category: 'desayunos',
    categoryLabel: 'Desayuno',
    number: 8,
    title: 'Galletitas blandas de avena y pera',
    yields: '8 galletitas',
    prepTime: '20 min',
    ingredients: [
      '1 pera madura rallada',
      '1 taza avena molida',
      '1 huevo (opcional)'
    ],
    steps: [
      'Mezcla la pera rallada con la avena molida (y huevo si usas) hasta formar masa húmeda.',
      'Forma montoncitos en bandeja con papel para hornear y aplana ligeramente.',
      'Hornea 12–15 min a 180 °C hasta que queden suaves y cocidas. Dejar enfriar.'
    ],
    tips: ['Quedan blandas y fáciles de masticar con las encías.'],
    badge: 'Snack Portátil',
    icon: '🍪'
  },
  {
    id: 'b12-d9',
    book: '12-18m',
    bookTitle: '12–18 meses',
    category: 'desayunos',
    categoryLabel: 'Desayuno',
    number: 9,
    title: 'Batido cremoso de plátano, yogur y avena',
    yields: '1 vasito',
    prepTime: '3 min',
    ingredients: [
      '1/2 plátano maduro',
      '1/2 taza yogur natural sin azúcar',
      '2 cdas avena cocida o cruda (si se licúa bien)',
      'Un chorrito de agua para aligerar si hace falta'
    ],
    steps: [
      'Coloca el plátano, yogur y avena en la batidora o vaso de minipimer.',
      'Licúa todo hasta que quede una textura cremosa y sin grumos grandes.',
      'Sirve en vasito de aprendizaje o con cuchara.'
    ],
    tips: ['Aporta saciedad y es ideal para días calurosos o cuando brotan dientes.'],
    badge: 'Refrescante',
    icon: '🥤'
  },
  {
    id: 'b12-d10',
    book: '12-18m',
    bookTitle: '12–18 meses',
    category: 'desayunos',
    categoryLabel: 'Desayuno',
    number: 10,
    title: 'Panecitos caseros de avena y calabaza',
    yields: '6 mini panecillos',
    prepTime: '25 min',
    ingredients: [
      '1 taza puré de calabaza cocida',
      '1 taza avena molida',
      '1 huevo',
      '1 cdta canela (opcional)'
    ],
    steps: [
      'Mezcla el puré de calabaza con el huevo, la avena molida y la canela.',
      'Rellena moldes mini de silicona.',
      'Hornea 18–20 min a 180 °C. Enfría por completo y ofrece troceados.'
    ],
    tips: ['Rico en betacarotenos y fibra digestiva suave.'],
    badge: 'Fibra & Color',
    icon: '🎃'
  },

  // Almuerzos y Cenas (15 recetas 12-18m)
  {
    id: 'b12-a1',
    book: '12-18m',
    bookTitle: '12–18 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 11,
    title: 'Arroz integral con pollo desmenuzado y brócoli',
    yields: '2 porciones',
    prepTime: '20 min',
    ingredients: [
      '1/2 taza arroz integral cocido muy blando',
      '80 g pechuga de pollo cocida y desmenuzada',
      '3–4 floretes de brócoli al vapor, muy tiernos y picados',
      '1 cdta aceite de oliva virgen'
    ],
    steps: [
      'Cocina el arroz hasta que esté muy tierno y fácil de aplastar.',
      'Cocina el pollo y el brócoli al vapor.',
      'Desmenuza finamente el pollo y pica el brócoli.',
      'Mezcla todo en un plato, añade el aceite de oliva y calienta 1–2 min. Servir templado.'
    ],
    tips: ['El brócoli aporta Vitamina C que ayuda a absorber el hierro del pollo.'],
    badge: 'Plato Completo',
    icon: '🥦'
  },
  {
    id: 'b12-a2',
    book: '12-18m',
    bookTitle: '12–18 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 12,
    title: 'Lentejas guisadas con zanahoria y calabacín',
    yields: '2–3 porciones',
    prepTime: '25 min',
    ingredients: [
      '1/2 taza lentejas cocidas (muy tiernas)',
      '1/4 taza zanahoria en cubitos cocida',
      '1/4 taza calabacín en cubitos cocido',
      'Agua o caldo casero sin sal para ajustar textura'
    ],
    steps: [
      'Mezcla las lentejas cocidas con la zanahoria y calabacín tiernos.',
      'Calienta a fuego bajo durante 5 min con un chorrito de caldo casero sin sal.',
      'Aplasta ligeramente con el tenedor para que el bebé lo maneje con facilidad.'
    ],
    tips: ['Legumbre de fácil digestión; acompáñala con unas gotas de naranja o tomate.'],
    badge: 'Hierro Vegetal',
    icon: '🍲'
  },
  {
    id: 'b12-a3',
    book: '12-18m',
    bookTitle: '12–18 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 13,
    title: 'Espaguetis cortados con salsa de tomate casera y queso',
    yields: '2 porciones',
    prepTime: '15 min',
    ingredients: [
      '1/3 taza pasta pequeña o espaguetis cortados muy blandos',
      '3 cdas salsa de tomate casera (sin sal ni azúcar)',
      '1 cda queso fresco o rallado pasteurizado'
    ],
    steps: [
      'Cocina la pasta hasta que esté bien blanda y córtala en trozos manejables.',
      'Mezcla la pasta con la salsa de tomate caliente.',
      'Espolvorea el queso por encima y sirve en porciones pequeñas.'
    ],
    tips: ['La salsa de tomate natural aporta licopeno antioxidante.'],
    badge: 'Favorito Infantil',
    icon: '🍝'
  },
  {
    id: 'b12-a4',
    book: '12-18m',
    bookTitle: '12–18 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 14,
    title: 'Albóndigas de pavo y avena al horno',
    yields: '8–10 mini albóndigas',
    prepTime: '25 min',
    ingredients: [
      '250 g pavo molido',
      '3 cdas avena molida',
      '1/2 zanahoria rallada fina',
      '1 huevo pequeño (opcional)'
    ],
    steps: [
      'Mezcla la carne de pavo con la avena, zanahoria y huevo.',
      'Forma bolitas pequeñas del tamaño de una nuez.',
      'Hornea 15–18 min a 180 °C hasta que estén cocidas y jugosas.',
      'Sirve acompañadas de puré de patata o arroz.'
    ],
    tips: ['Carne magra muy suave para las encías de los bebés.'],
    badge: 'Carne Magra',
    icon: '🧆'
  },
  {
    id: 'b12-a5',
    book: '12-18m',
    bookTitle: '12–18 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 15,
    title: 'Filetitos de pescado al horno con patata',
    yields: '2 porciones',
    prepTime: '20 min',
    ingredients: [
      '120 g filete de pescado blanco (merluza/bacalao fresco) sin espinas',
      '1 patata pequeña pelada y cortada en cubitos',
      '1 cdta aceite de oliva'
    ],
    steps: [
      'Hierve o cocina al vapor los cubitos de patata hasta que estén muy tiernos.',
      'Hornea el pescado blanco con una gota de aceite 8–10 min a 180 °C hasta que se desmenuce con facilidad.',
      'Revisa minuciosamente que no quede ninguna espina visible.',
      'Desmenuza el pescado y mezcla con la patata hecha puré o en daditos.'
    ],
    tips: ['Aporte esencial de ácidos grasos omega-3 para el neurodesarrollo.'],
    badge: 'Omega-3',
    icon: '🐟'
  },
  {
    id: 'b12-a6',
    book: '12-18m',
    bookTitle: '12–18 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 16,
    title: 'Sopa de verduras variadas con fideos pequeños',
    yields: '2–3 porciones',
    prepTime: '20 min',
    ingredients: [
      '2 tazas agua o caldo casero de pollo sin sal',
      '1/4 taza fideos muy finos o pasta corta',
      '1/2 taza mezcla de verduras en cubitos (zanahoria, patata, calabacín)'
    ],
    steps: [
      'Hierve las verduras en el caldo casero hasta que estén muy tiernas.',
      'Añade los fideos y cocina 5 min hasta que queden blandos.',
      'Pasa un poco con el tenedor si prefieres textura más homogénea. Servir templado.'
    ],
    tips: ['Reconfortante y ayuda a mantener una hidratación óptima.'],
    badge: 'Hidratante',
    icon: '🥣'
  },
  {
    id: 'b12-a7',
    book: '12-18m',
    bookTitle: '12–18 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 17,
    title: 'Tortilla de patata con espinacas (al horno)',
    yields: '3 porciones pequeñas',
    prepTime: '25 min',
    ingredients: [
      '1 patata pequeña cocida y en cubitos',
      '2 huevos',
      '2 cdas espinaca cocida y bien picada',
      '1 cdta aceite de oliva'
    ],
    steps: [
      'Bate los huevos y añade la patata tierna y la espinaca picada.',
      'Vierte en molde pequeño apto para horno o sartén.',
      'Hornea 12–15 min a 180 °C hasta que cuaje por completo.',
      'Corta en tiras largas para que el bebé la agarre con la mano.'
    ],
    tips: ['La cocción al horno evita exceso de fritura.'],
    badge: 'BLW Friendly',
    icon: '🥧'
  },
  {
    id: 'b12-a8',
    book: '12-18m',
    bookTitle: '12–18 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 18,
    title: 'Croquetas caseras de arroz y verduras',
    yields: '6–8 croquetitas',
    prepTime: '25 min',
    ingredients: [
      '1 taza arroz cocido blando',
      '1/2 taza verduras cocidas picadas (zanahoria, brócoli)',
      '1 huevo pequeño para ligar (opcional)'
    ],
    steps: [
      'Mezcla el arroz blando con las verduras picadas y el huevo.',
      'Forma pequeñas croquetas alargadas.',
      'Hornea 12–15 min a 180 °C hasta que tomen cuerpo pero queden blandas por dentro.',
      'Servir tibias.'
    ],
    tips: ['Excelente receta de aprovechamiento de arroz del día anterior.'],
    badge: 'Aprovechamiento',
    icon: '🍙'
  },
  {
    id: 'b12-a9',
    book: '12-18m',
    bookTitle: '12–18 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 19,
    title: 'Pechuga de pollo en tiras blandas con puré de camote',
    yields: '2 porciones',
    prepTime: '20 min',
    ingredients: [
      '100–120 g pechuga de pollo cocida y desmenuzada',
      '1/2 camote cocido y hecho puré',
      '1 cdta aceite de oliva'
    ],
    steps: [
      'Cocina el pollo al vapor o hervido y desmenúzalo fino.',
      'Aplasta el camote cocido con aceite de oliva hasta que quede un puré suave.',
      'Mezcla el pollo con el puré o sírvelos lado a lado en el plato para que el peque explore texturas.'
    ],
    tips: ['El toque dulce del camote suele encantar a los bebés.'],
    badge: 'Dulzor Natural',
    icon: '🍠'
  },
  {
    id: 'b12-a10',
    book: '12-18m',
    bookTitle: '12–18 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 20,
    title: 'Pasta con salsa de aguacate y limón',
    yields: '2 porciones',
    prepTime: '12 min',
    ingredients: [
      '1/4 taza pasta corta cocida muy blanda',
      '1/4 aguacate maduro',
      '1/2 cdta zumo de limón',
      '1 cdta aceite de oliva'
    ],
    steps: [
      'Tritura el aguacate maduro con unas gotas de limón y aceite de oliva hasta formar una crema suave.',
      'Mezcla la pasta tibia con la crema de aguacate.',
      'Corta la pasta si es necesario y sirve de inmediato.'
    ],
    tips: ['Salsa rápida sin cocción rica en ácidos grasos monoinsaturados.'],
    badge: 'Rápido 10min',
    icon: '🥑'
  },
  {
    id: 'b12-a11',
    book: '12-18m',
    bookTitle: '12–18 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 21,
    title: 'Hamburguesitas de lenteja y zanahoria',
    yields: '4 mini hamburguesas',
    prepTime: '20 min',
    ingredients: [
      '1 taza lentejas cocidas y bien escurridas',
      '1/2 taza zanahoria rallada y cocida',
      '3 cdas avena molida'
    ],
    steps: [
      'Tritura las lentejas ligeramente con tenedor.',
      'Mezcla con la zanahoria cocida y la avena hasta poder moldear.',
      'Forma pequeñas hamburguesas y cocina en sartén antiadherente 3–4 min por lado a fuego suave.',
      'Sirve con vegetales cocidos blandos.'
    ],
    tips: ['Opción 100% vegetal con alto contenido en fibra y hierro.'],
    badge: 'Vegetariano',
    icon: '🍔'
  },
  {
    id: 'b12-a12',
    book: '12-18m',
    bookTitle: '12–18 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 22,
    title: 'Crema de calabaza con queso fresco',
    yields: '2 porciones',
    prepTime: '18 min',
    ingredients: [
      '2 tazas calabaza en cubos',
      '1/2 taza agua o caldo sin sal',
      '1–2 cdas queso fresco pasteurizado rallado'
    ],
    steps: [
      'Cocina la calabaza al vapor o hervida hasta que esté muy blanda.',
      'Tritura con parte del agua de cocción hasta lograr una crema homogénea.',
      'Añade el queso fresco, mezcla para que se derrita ligeramente y sirve tibio.'
    ],
    tips: ['Aporte de calcio y vitamina A para la vista y la piel.'],
    badge: 'Cremoso',
    icon: '🥣'
  },
  {
    id: 'b12-a13',
    book: '12-18m',
    bookTitle: '12–18 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 23,
    title: 'Guiso de garbanzos con calabacín',
    yields: '2–3 porciones',
    prepTime: '15 min',
    ingredients: [
      '1/2 taza garbanzos cocidos (muy tiernos)',
      '1/2 taza calabacín en cubos cocido',
      '1/4 taza tomate triturado natural (sin sal)'
    ],
    steps: [
      'Coloca los garbanzos, el calabacín y el tomate triturado en un cazo.',
      'Calienta todo junto a fuego bajo durante 5–8 min.',
      'Aplasta un poco los garbanzos con el tenedor para una textura fácil de tragar.'
    ],
    tips: ['Los garbanzos aplastados evitan cualquier riesgo de atragantamiento.'],
    badge: 'Legumbres',
    icon: '🍲'
  },
  {
    id: 'b12-a14',
    book: '12-18m',
    bookTitle: '12–18 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 24,
    title: 'Mini lasaña de verduras y carne picada',
    yields: '2–3 porciones baby',
    prepTime: '30 min',
    ingredients: [
      'Láminas de lasaña precocidas cortadas',
      '150 g carne picada magra cocida y escurrida',
      '1/2 taza espinacas y calabacín cocidos',
      '1/2 taza salsa de tomate casera'
    ],
    steps: [
      'En un recipiente pequeño para horno monta capas: lámina delgada, salsa, carne y verduras.',
      'Repite y termina con una lámina y un toque de queso rallado.',
      'Hornea 12–15 min a 180 °C. Dejar reposar y cortar en porciones pequeñas.'
    ],
    tips: ['Corta en daditos blandos antes de servir.'],
    badge: 'Plato Familiar',
    icon: '🥘'
  },
  {
    id: 'b12-a15',
    book: '12-18m',
    bookTitle: '12–18 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 25,
    title: 'Verduras al vapor con arroz y aceite de oliva',
    yields: '2 porciones',
    prepTime: '15 min',
    ingredients: [
      '1/2 taza arroz cocido blando',
      '1/2 taza verduras al vapor (zanahoria, brócoli, calabacín)',
      '1 cdta aceite de oliva virgen extra'
    ],
    steps: [
      'Cocina las verduras al vapor hasta que estén muy tiernas al tacto.',
      'Mezcla las verduras con el arroz tibio.',
      'Añade el aceite de oliva virgen extra, remueve y sirve.'
    ],
    tips: ['Sencillo, limpio y muy digestivo para cenas ligeras.'],
    badge: 'Cena Ligera',
    icon: '🍚'
  },

  // Snacks y Meriendas (5 recetas 12-18m)
  {
    id: 'b12-s1',
    book: '12-18m',
    bookTitle: '12–18 meses',
    category: 'snacks_meriendas',
    categoryLabel: 'Snack / Merienda',
    number: 26,
    title: 'Bastones de camote al horno',
    yields: '2 porciones',
    prepTime: '25 min',
    ingredients: [
      '1 camote mediano pelado y cortado en bastones',
      '1 cdta aceite de oliva'
    ],
    steps: [
      'Precalienta el horno a 200 °C.',
      'Mezcla los bastones de camote con el aceite.',
      'Hornea 20–25 min hasta que estén tiernos por dentro (no crujientes duros).',
      'Deja enfriar y ofrece como finger food.'
    ],
    tips: ['Verifica que se deshagan fácilmente entre el pulgar y el índice.'],
    badge: 'Finger Food',
    icon: '🍠'
  },
  {
    id: 'b12-s2',
    book: '12-18m',
    bookTitle: '12–18 meses',
    category: 'snacks_meriendas',
    categoryLabel: 'Snack / Merienda',
    number: 27,
    title: 'Bolitas de plátano y avena con coco suave',
    yields: '6–8 bolitas',
    prepTime: '10 min + 20 min frío',
    ingredients: [
      '1 plátano maduro machacado',
      '1/2 taza avena molida',
      '1 cda coco rallado fino (opcional)'
    ],
    steps: [
      'Mezcla el plátano machacado con la avena hasta formar masa maleable.',
      'Forma bolitas pequeñas con las manos húmedas.',
      'Si quieres, reboza en coco fino y refrigera 20 min antes de servir.'
    ],
    tips: ['Snack energético sin cocción para llevar al parque.'],
    badge: 'Sin Horno',
    icon: '🥥'
  },
  {
    id: 'b12-s3',
    book: '12-18m',
    bookTitle: '12–18 meses',
    category: 'snacks_meriendas',
    categoryLabel: 'Snack / Merienda',
    number: 28,
    title: 'Frutas en trocitos (mix de temporada)',
    yields: '1 porción',
    prepTime: '5 min',
    ingredients: [
      '1/4 taza melón en cubitos blandos',
      '1/4 taza pera madura en cubitos',
      '1/4 taza mango maduro en cubitos'
    ],
    steps: [
      'Pela y retira semillas de la fruta.',
      'Corta en cubos pequeños y suaves.',
      'Mezcla y ofrece en bol pequeño para que practique con los dedos o cubierto.'
    ],
    tips: ['Siempre usa fruta en su punto óptimo de maduración.'],
    badge: '100% Fruta',
    icon: '🥭'
  },
  {
    id: 'b12-s4',
    book: '12-18m',
    bookTitle: '12–18 meses',
    category: 'snacks_meriendas',
    categoryLabel: 'Snack / Merienda',
    number: 29,
    title: 'Palitos de pepino y zanahoria cocida',
    yields: '1 porción',
    prepTime: '10 min',
    ingredients: [
      '1/2 pepino pelado y sin semillas en palitos',
      '1 zanahoria cocida cortada en palitos'
    ],
    steps: [
      'Cocina la zanahoria hasta que esté muy tierna.',
      'Corta el pepino en tiras blandas sin semillas (puedes escaldarlo 1 min si prefieres más suave).',
      'Sirve como finger food refrescante.'
    ],
    tips: ['Ideal para aliviar encías inflamadas por la dentición.'],
    badge: 'Dentición',
    icon: '🥒'
  },
  {
    id: 'b12-s5',
    book: '12-18m',
    bookTitle: '12–18 meses',
    category: 'snacks_meriendas',
    categoryLabel: 'Snack / Merienda',
    number: 30,
    title: 'Mini muffins de avena y frutos rojos',
    yields: '6 mini muffins',
    prepTime: '25 min',
    ingredients: [
      '1 taza avena molida',
      '1 huevo',
      '1/2 taza puré de plátano o manzana',
      '1/4 taza frutos rojos picados (arándanos/frambuesas)'
    ],
    steps: [
      'Mezcla la avena, el huevo y el puré de fruta.',
      'Agrega los frutos rojos picados suavemente.',
      'Rellena moldes mini y hornea 15–18 min a 180 °C hasta que estén esponjosos.',
      'Dejar enfriar antes de ofrecer.'
    ],
    tips: ['Gran fuente de antioxidantes y fibra.'],
    badge: 'Antioxidante',
    icon: '🫐'
  },

  // ==========================================
  // LIBRO 2: 18-24 MESES (40 RECETAS)
  // ==========================================
  // Desayunos (12 recetas 18-24m)
  {
    id: 'b18-d1',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'desayunos',
    categoryLabel: 'Desayuno',
    number: 31,
    title: 'Pan integral con hummus suave y pepino rallado',
    yields: '1 porción',
    prepTime: '5 min',
    ingredients: [
      '1 rebanada de pan integral blando',
      '2 cdas hummus casero o comercial suave (sin sal)',
      '1/4 pepino rallado y bien escurrido'
    ],
    steps: [
      'Si haces hummus casero: licúa 1 taza de garbanzos cocidos + 1 cda aceite de oliva + 1/2 cdta comino + 1–2 cdas agua hasta textura cremosa.',
      'Unta el hummus sobre la rebanada de pan.',
      'Espolvorea el pepino rallado escurrido encima.',
      'Corta en tiras anchas "finger food" y ofrece.'
    ],
    tips: ['Si el pepino tiene piel amarga, pélalo antes. El hummus se conserva 3–4 días en nevera.'],
    badge: 'Proteína Vegetal',
    icon: '🥪'
  },
  {
    id: 'b18-d2',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'desayunos',
    categoryLabel: 'Desayuno',
    number: 32,
    title: 'Tortitas de avena y plátano con arándanos',
    yields: '6 mini tortitas',
    prepTime: '10 min',
    ingredients: [
      '1 plátano maduro',
      '3 cdas avena molida',
      '1 huevo',
      '2 cdas arándanos cortados'
    ],
    steps: [
      'Tritura el plátano y mezcla con el huevo y la avena molida.',
      'Calienta sartén antiadherente a fuego bajo.',
      'Vierte cucharadas pequeñas y añade 2–3 arándanos cortados en cada tortita.',
      'Cocina 1–2 min por lado hasta dorar. Deja enfriar y corta en trozos.'
    ],
    tips: ['Se pueden congelar y recalentar 20–30 s al microondas.'],
    badge: 'Desayuno Estrella',
    icon: '🥞'
  },
  {
    id: 'b18-d3',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'desayunos',
    categoryLabel: 'Desayuno',
    number: 33,
    title: 'Mini arepitas de maíz rellenas de aguacate',
    yields: '6 mini arepas',
    prepTime: '15 min',
    ingredients: [
      '1 taza harina de maíz precocida',
      '1 taza agua tibia',
      '1/4 cdta aceite (opcional)',
      '1/4 aguacate maduro machacado'
    ],
    steps: [
      'Mezcla la harina con agua hasta obtener masa manejable y suave.',
      'Forma pequeñas tortitas y cocina en sartén antiadherente 3–4 min por lado a fuego medio-bajo hasta que estén cocidas.',
      'Abre ligeramente cada arepita y rellena con aguacate machacado.',
      'Corta en trozos pequeños para facilitar el agarre.'
    ],
    tips: ['Si la masa queda seca, añade un chorrito de aceite de oliva.'],
    badge: 'Sin Gluten',
    icon: '🫓'
  },
  {
    id: 'b18-d4',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'desayunos',
    categoryLabel: 'Desayuno',
    number: 34,
    title: 'Muffins de zanahoria y manzana (sin azúcar)',
    yields: '8 mini muffins',
    prepTime: '25 min',
    ingredients: [
      '1 manzana rallada',
      '1/2 taza zanahoria rallada',
      '1 huevo',
      '1 taza avena molida',
      '1/2 cdta polvo de hornear',
      '1 cdta canela (opcional)'
    ],
    steps: [
      'Precalienta el horno a 180 °C.',
      'Mezcla la manzana, la zanahoria y el huevo batido.',
      'Añade la avena, polvo de hornear y canela; integra bien.',
      'Rellena moldes mini y hornea 15–18 min hasta que estén firmes. Deja enfriar.'
    ],
    tips: ['Almacenamiento: 3 días en refrigerador o congelar porciones.'],
    badge: 'Fibra Digestiva',
    icon: '🧁'
  },
  {
    id: 'b18-d5',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'desayunos',
    categoryLabel: 'Desayuno',
    number: 35,
    title: 'Yogur natural con granola casera blandita',
    yields: '1 porción',
    prepTime: '15 min',
    ingredients: [
      '1/2 taza yogur natural sin azúcar',
      '1/4 taza granola casera blandita (1 taza avena + 1/4 taza puré plátano + 1 cdta aceite horneado 12 min a 170 °C)'
    ],
    steps: [
      'Prepara la granola rápida horneando la avena con plátano para que quede suave y crujiente pero fácil de masticar.',
      'Coloca el yogur natural en un bol.',
      'Espolvorea la granola blandita justo antes de servir.'
    ],
    tips: ['Evita nueces o frutos secos enteros por riesgo de asfixia; la granola blanda casera es segura.'],
    badge: 'Probiótico',
    icon: '🥣'
  },
  {
    id: 'b18-d6',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'desayunos',
    categoryLabel: 'Desayuno',
    number: 36,
    title: 'Panecillos de calabaza con queso fresco',
    yields: '6 mini panecillos',
    prepTime: '25 min',
    ingredients: [
      '1 taza puré de calabaza cocida',
      '1 taza avena molida o harina integral',
      '1 huevo',
      '2 cdas queso fresco desmenuzado'
    ],
    steps: [
      'Mezcla el puré de calabaza, el huevo y la avena hasta masa homogénea.',
      'Incorpora el queso fresco y forma panecillos en molde.',
      'Hornea 18–20 min a 180 °C. Deja enfriar y sirve cortados.'
    ],
    tips: ['Ideal para introducir calabaza en texturas sólidas; se congela perfectamente.'],
    badge: 'Nutrición Calcio',
    icon: '🥯'
  },
  {
    id: 'b18-d7',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'desayunos',
    categoryLabel: 'Desayuno',
    number: 37,
    title: 'Tortilla francesa con champiñones finos',
    yields: '1–2 porciones',
    prepTime: '8 min',
    ingredients: [
      '1 huevo',
      '2 cdas champiñones finamente picados y salteados',
      '1 cdta aceite de oliva'
    ],
    steps: [
      'Saltea los champiñones picados finos hasta que estén bien tiernos.',
      'Bate el huevo, añade los champiñones y vierte en sartén antiadherente con aceite.',
      'Cocina a fuego bajo hasta cuajar por completo; corta en tiras.'
    ],
    tips: ['Los champiñones deben estar muy bien cocidos y picados finamente.'],
    badge: 'Textura Suave',
    icon: '🍳'
  },
  {
    id: 'b18-d8',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'desayunos',
    categoryLabel: 'Desayuno',
    number: 38,
    title: 'Crepes integrales rellenos de puré de fruta',
    yields: '4 crepes pequeños',
    prepTime: '12 min',
    ingredients: [
      '1/2 taza harina integral',
      '1 huevo',
      '1/2 taza leche o agua',
      'Puré de fruta casero (manzana o plátano)'
    ],
    steps: [
      'Mezcla la harina integral, el huevo y la leche hasta tener una masa líquida suave.',
      'Vierte pequeñas porciones en sartén antiadherente a fuego bajo, cocina 1 min por lado.',
      'Rellena con el puré de fruta, enrolla y corta en rodajitas o trozos.'
    ],
    tips: ['Si la masa espesa, añade un chorrito más de líquido.'],
    badge: 'Divertido',
    icon: '🥞'
  },
  {
    id: 'b18-d9',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'desayunos',
    categoryLabel: 'Desayuno',
    number: 39,
    title: 'Papilla espesa de avena con canela y pera',
    yields: '1 porción',
    prepTime: '8 min',
    ingredients: [
      '3 cdas avena cocida',
      '1/2 pera madura en cubitos o puré',
      'Pizca de canela (opcional)'
    ],
    steps: [
      'Cocina la avena en agua o leche hasta que quede cremosa.',
      'Añade la pera en cubitos tiernos y la canela.',
      'Cocina 1–2 min más y sirve tibio.'
    ],
    tips: ['Si la pera está firme, cocínala un poco antes al vapor para ablandarla.'],
    badge: 'Confort',
    icon: '🍐'
  },
  {
    id: 'b18-d10',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'desayunos',
    categoryLabel: 'Desayuno',
    number: 40,
    title: 'Galletitas de avena y coco',
    yields: '10 galletas pequeñas',
    prepTime: '20 min',
    ingredients: [
      '1 taza avena molida',
      '1 plátano maduro machacado',
      '2 cdas coco rallado fino'
    ],
    steps: [
      'Mezcla todos los ingredientes hasta obtener masa húmeda.',
      'Forma montoncitos en la bandeja con papel de horno.',
      'Hornea 12–14 min a 180 °C. Deja enfriar; quedan blandas y aromáticas.'
    ],
    tips: ['Puedes añadir 1 cda de puré de manzana para mayor jugosidad.'],
    badge: '3 Ingredientes',
    icon: '🍪'
  },
  {
    id: 'b18-d11',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'desayunos',
    categoryLabel: 'Desayuno',
    number: 41,
    title: 'Pan pita con puré de garbanzos (hummus)',
    yields: '1 porción',
    prepTime: '4 min',
    ingredients: [
      '1/2 pan pita blando',
      '3 cdas hummus suave casero'
    ],
    steps: [
      'Corta el pan pita en tiras blandas (o caliéntalo ligeramente para ablandar).',
      'Unta con el hummus suave.',
      'Ofrece en tiras para que practique la pinza.'
    ],
    tips: ['Evita pedazos grandes de pan pita duro; humedece si notas que está seco.'],
    badge: 'Agarre Fino',
    icon: '🥙'
  },
  {
    id: 'b18-d12',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'desayunos',
    categoryLabel: 'Desayuno',
    number: 42,
    title: 'Batido cremoso de mango, yogur y avena',
    yields: '1 vaso pequeño',
    prepTime: '3 min',
    ingredients: [
      '1/2 taza mango maduro en cubos',
      '1/2 taza yogur natural',
      '2 cdas avena cocida o fina'
    ],
    steps: [
      'Coloca el mango, el yogur y la avena en la batidora.',
      'Licúa todo hasta textura muy suave.',
      'Sirve tibio o fresco según preferencia.'
    ],
    tips: ['Añade agua si queda muy espeso; cero azúcares añadidos.'],
    badge: 'Vitamina C',
    icon: '🥭'
  },

  // Almuerzos y Cenas (20 recetas 18-24m)
  {
    id: 'b18-a1',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 43,
    title: 'Arroz integral con pollo y verduras salteadas blandas',
    yields: '2 porciones',
    prepTime: '20 min',
    ingredients: [
      '1/2 taza arroz integral cocido muy blando',
      '100 g pechuga de pollo cocida y desmenuzada',
      '1/2 taza mezcla de verduras (zanahoria, calabacín) cocidas y salteadas suave',
      '1 cdta aceite de oliva'
    ],
    steps: [
      'Cocina el arroz hasta que esté muy tierno.',
      'Saltea suavemente las verduras en cubitos con aceite de oliva 2–3 min.',
      'Mezcla el arroz, pollo desmenuzado y verduras; calienta 1–2 min y sirve.'
    ],
    tips: ['Ajusta la textura con un chorrito de caldo casero si hace falta.'],
    badge: 'Completo',
    icon: '🍗'
  },
  {
    id: 'b18-a2',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 44,
    title: 'Estofado de ternera con patata y zanahoria',
    yields: '3–4 porciones baby',
    prepTime: '50 min',
    ingredients: [
      '250 g ternera tierna en trozos pequeños',
      '1 patata mediana en cubos',
      '1 zanahoria en rodajas tiernas',
      'Agua o caldo casero sin sal'
    ],
    steps: [
      'Dora ligeramente la ternera en una olla con poco aceite.',
      'Añade agua o caldo hasta cubrir. Agrega la patata y zanahoria.',
      'Cocina a fuego lento 40–50 min hasta que la carne esté supersuave y se deshaga.',
      'Desmenuza trozos grandes y sirve tibio.'
    ],
    tips: ['Cocina a fuego lento para que el colágeno ablande la carne por completo.'],
    badge: 'Hierro Hemo 🔴',
    icon: '🥩'
  },
  {
    id: 'b18-a3',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 45,
    title: 'Puré rústico de calabaza con garbanzos',
    yields: '2–3 porciones',
    prepTime: '20 min',
    ingredients: [
      '2 tazas calabaza en cubos',
      '1/2 taza garbanzos cocidos (enteros/machacados)',
      '1 cdta aceite de oliva'
    ],
    steps: [
      'Cocina la calabaza al vapor hasta que esté tierna.',
      'Tritura la mitad de la calabaza y mezcla con los garbanzos enteros y blandos para crear textura rústica.',
      'Añade el aceite de oliva, mezcla y sirve tibio.'
    ],
    tips: ['Excelente para estimular la masticación activa en peques de 18 a 24 meses.'],
    badge: 'Masticación',
    icon: '🎃'
  },
  {
    id: 'b18-a4',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 46,
    title: 'Filetitos de pescado al vapor con arroz y guisantes',
    yields: '2 porciones',
    prepTime: '15 min',
    ingredients: [
      '120 g filete de pescado blanco sin espinas',
      '1/2 taza arroz cocido muy blando',
      '1/4 taza guisantes cocidos y machacados ligeramente'
    ],
    steps: [
      'Cocina el pescado al vapor 8–10 min hasta que se desmenuce fácil.',
      'Mezcla el arroz blando y los guisantes ligeramente machacados.',
      'Incorpora el pescado desmenuzado. Sirve en trozos pequeños.'
    ],
    tips: ['Revisa y retira meticulosamente cualquier espina antes de servir.'],
    badge: 'Pescado Blanco',
    icon: '🐟'
  },
  {
    id: 'b18-a5',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 47,
    title: 'Mini albóndigas de pollo con salsa de tomate casera',
    yields: '10–12 mini albóndigas',
    prepTime: '25 min',
    ingredients: [
      '300 g pollo molido',
      '3 cdas avena molida',
      '1/4 taza zanahoria rallada',
      '1 taza salsa de tomate casera suave'
    ],
    steps: [
      'Mezcla el pollo con la avena y zanahoria; forma bolitas pequeñas.',
      'Hornea 12–15 min a 180 °C o cocina al vapor.',
      'Calienta la salsa de tomate e introduce las albóndigas 5 min en ella.',
      'Sirve acompañadas de arroz o pasta corta.'
    ],
    tips: ['Las albóndigas quedan muy jugosas al absorber la salsa.'],
    badge: 'Favorito',
    icon: '🧆'
  },
  {
    id: 'b18-a6',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 48,
    title: 'Hamburguesitas de lenteja con arroz',
    yields: '6 mini hamburguesas',
    prepTime: '20 min',
    ingredients: [
      '1 taza lentejas cocidas y escurridas',
      '1/2 taza arroz cocido',
      '1/4 taza zanahoria cocida y picada',
      '2 cdas avena molida'
    ],
    steps: [
      'Tritura parcialmente las lentejas dejando algo de textura.',
      'Mezcla con el arroz cocido, la zanahoria y la avena.',
      'Forma pequeñas hamburguesas y cocina en sartén antiadherente 3–4 min por lado hasta dorar suave.'
    ],
    tips: ['La combinación de legumbre + cereal forma una proteína vegetal completa.'],
    badge: 'Proteína Completa',
    icon: '🍔'
  },
  {
    id: 'b18-a7',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 49,
    title: 'Pasta corta con salsa de calabacín y queso rallado',
    yields: '2 porciones',
    prepTime: '15 min',
    ingredients: [
      '1 taza pasta corta cocida muy blanda',
      '1 calabacín pequeño cortado y cocido',
      '2 cdas queso rallado pasteurizado'
    ],
    steps: [
      'Tritura el calabacín cocido con un chorrito de agua hasta obtener crema.',
      'Mezcla con la pasta tibia y añade el queso rallado.',
      'Sirve en trozos manejables.'
    ],
    tips: ['Una forma excelente de que coman verduras sin texturas agresivas.'],
    badge: 'Verdura Oculta',
    icon: '🍝'
  },
  {
    id: 'b18-a8',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 50,
    title: 'Sopa de verduras con trocitos de pan blando',
    yields: '3 porciones',
    prepTime: '20 min',
    ingredients: [
      '4 tazas caldo casero sin sal',
      '1 taza mezcla de verduras picadas (zanahoria, papa, calabacín)',
      '1/2 taza fideos pequeños',
      'Trozos de pan integral blando'
    ],
    steps: [
      'Hierve las verduras picadas en el caldo hasta que estén bien tiernas.',
      'Añade los fideos y cocina hasta que estén suaves.',
      'Sirve templado acompañado de trozos de pan integral blando para mojar.'
    ],
    tips: ['Mojar el pan ayuda a estimular la motricidad fina y la deglución.'],
    badge: 'Clásico Casero',
    icon: '🥣'
  },
  {
    id: 'b18-a9',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 51,
    title: 'Croquetas de brócoli y queso al horno',
    yields: '10 croquetas pequeñas',
    prepTime: '25 min',
    ingredients: [
      '1 taza brócoli cocido y picado fino',
      '1/2 taza queso rallado pasteurizado',
      '1 huevo pequeño',
      '1/2 taza pan rallado integral o avena molida'
    ],
    steps: [
      'Mezcla el brócoli picado, el queso y el huevo.',
      'Agrega el pan rallado hasta ligar la masa.',
      'Forma croquetas pequeñas y hornea 12–15 min a 180 °C hasta dorar suave.',
      'Dejar enfriar y servir.'
    ],
    tips: ['Divertidas de comer con las manos y ricas en calcio.'],
    badge: 'Verde & Crujiente',
    icon: '🥦'
  },
  {
    id: 'b18-a10',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 52,
    title: 'Tortilla de patata y calabacín',
    yields: '3 porciones pequeñas',
    prepTime: '15 min',
    ingredients: [
      '1 papa mediana pelada y cocida en cubos',
      '1/2 calabacín rallado y bien escurrido',
      '2 huevos'
    ],
    steps: [
      'Bate los huevos y añade la patata cocida y el calabacín escurrido.',
      'Cocina en sartén antiadherente a fuego bajo hasta cuajar 8–10 min por ambos lados.',
      'Corta en tiras o cuadritos y sirve.'
    ],
    tips: ['Textura jugosa gracias al calabacín.'],
    badge: 'Tradicional',
    icon: '🍳'
  },
  {
    id: 'b18-a11',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 53,
    title: 'Puré mixto de camote y pollo',
    yields: '2–3 porciones',
    prepTime: '20 min',
    ingredients: [
      '1 camote pelado y cocido',
      '100 g pollo cocido y desmenuzado',
      '1 cdta aceite de oliva'
    ],
    steps: [
      'Tritura el camote hasta puré sedoso.',
      'Añade el pollo y mezcla.',
      'Ajusta la textura con caldo o agua de cocción y sirve tibio.'
    ],
    tips: ['Deja algunos trocitos de pollo visibles para practicar masticación si ya mastica con soltura.'],
    badge: 'Suave & Dulce',
    icon: '🍠'
  },
  {
    id: 'b18-a12',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 54,
    title: 'Nuggets caseros de pescado rebozados en avena',
    yields: '10 nuggets',
    prepTime: '25 min',
    ingredients: [
      '250 g filete de pescado blanco sin espinas',
      '1 huevo batido',
      '1 taza avena molida'
    ],
    steps: [
      'Corta el pescado en trozos pequeños tipo bocado.',
      'Pasa cada trozo por huevo batido y luego por avena molida.',
      'Hornea 12–15 min a 190 °C hasta que el pescado esté cocido.',
      'Deja enfriar y sirve.'
    ],
    tips: ['Evita freír para reducir grasa saturada; controla temperatura al recalentar.'],
    badge: 'Sin Frituras',
    icon: '🐟'
  },
  {
    id: 'b18-a13',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 55,
    title: 'Guiso de alubias con verduras suaves',
    yields: '3–4 porciones',
    prepTime: '25 min',
    ingredients: [
      '1 taza alubias cocidas muy tiernas',
      '1 taza verduras cocidas (calabacín, zanahoria, papa)',
      '1/2 taza salsa de tomate natural (sin sal)'
    ],
    steps: [
      'Mezcla todo en un cazo y cocina 10–15 min a fuego lento.',
      'Aplasta ligeramente con tenedor si la mezcla quedó muy rústica.',
      'Sirve tibio.'
    ],
    tips: ['Asegúrate de que las alubias estén muy bien cocidas para evitar textura dura.'],
    badge: 'Fibra & Hierro',
    icon: '🍲'
  },
  {
    id: 'b18-a14',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 56,
    title: 'Mini lasaña de verduras y carne picada',
    yields: '4 porciones baby',
    prepTime: '30 min',
    ingredients: [
      'Láminas de lasaña precocidas cortadas',
      '200 g carne picada magra cocida y escurrida',
      '1 taza verduras cocidas (espinaca, calabacín)',
      '1 taza salsa de tomate casera'
    ],
    steps: [
      'En recipiente pequeño para horno monta capas: lámina delgada, salsa, carne+verdura. Repetir.',
      'Termina con un poco de queso rallado pasteurizado.',
      'Hornea 12–15 min a 180 °C. Dejar reposar y cortar en porciones pequeñas.'
    ],
    tips: ['Usar láminas delgadas y cortar en cuadritos pequeños antes de servir.'],
    badge: 'Menú Familiar',
    icon: '🥘'
  },
  {
    id: 'b18-a15',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 57,
    title: 'Empanaditas al horno de pollo y espinacas',
    yields: '8 empanaditas pequeñas',
    prepTime: '25 min',
    ingredients: [
      'Masa integral para empanadas o masa de hojaldre ligera',
      '150 g pollo cocido y picado fino',
      '1/2 taza espinaca cocida y picada'
    ],
    steps: [
      'Mezcla el pollo con la espinaca; rellena discos pequeños de masa.',
      'Cierra los bordes con un tenedor y pinta con huevo batido.',
      'Hornea 12–15 min a 180 °C hasta dorar suave.'
    ],
    tips: ['Cortar en trozos seguros acordes a la masticación del bebé.'],
    badge: 'Para Llevar',
    icon: '🥟'
  },
  {
    id: 'b18-a16',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 58,
    title: 'Quinoa con calabaza y queso fresco',
    yields: '2 porciones',
    prepTime: '20 min',
    ingredients: [
      '1/2 taza quinoa cocida',
      '1 taza calabaza cocida en cubos pequeños',
      '2 cdas queso fresco desmenuzado'
    ],
    steps: [
      'Enjuaga muy bien la quinoa antes de cocinar.',
      'Mezcla la quinoa cocida con la calabaza tierna y el queso.',
      'Calienta brevemente y sirve en porciones pequeñas.'
    ],
    tips: ['La quinoa es una de las mejores fuentes de proteína vegetal completa y minerales.'],
    badge: 'Superalimento',
    icon: '🌾'
  },
  {
    id: 'b18-a17',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 59,
    title: 'Verduras al vapor con pasta y aceite de oliva',
    yields: '2 porciones',
    prepTime: '15 min',
    ingredients: [
      '1 taza pasta pequeña cocida muy blanda',
      '1 taza verduras al vapor (brócoli, zanahoria)',
      '1 cdta aceite de oliva virgen'
    ],
    steps: [
      'Mezcla la pasta cocida y las verduras tiernas.',
      'Añade el aceite de oliva y calienta 1–2 min.',
      'Corta en trozos manejables y sirve.'
    ],
    tips: ['Sencillo y nutritivo para el día a día.'],
    badge: 'Básico Diario',
    icon: '🥦'
  },
  {
    id: 'b18-a18',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 60,
    title: 'Risotto cremoso de champiñones y pollo',
    yields: '2 porciones',
    prepTime: '25 min',
    ingredients: [
      '3/4 taza arroz arborio cocido cremoso',
      '100 g pollo desmenuzado',
      '1/2 taza champiñones cocidos y picados',
      '1 cdta aceite de oliva o trocito de mantequilla'
    ],
    steps: [
      'Cocina el arroz tipo risotto con caldo casero sin sal hasta textura cremosa.',
      'Añade el pollo y los champiñones cocidos al final; remueve bien.',
      'Sirve tibio en porciones pequeñas.'
    ],
    tips: ['Textura untuosa que facilita la deglución.'],
    badge: 'Gourmet Baby',
    icon: '🍚'
  },
  {
    id: 'b18-a19',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 61,
    title: 'Crema de zanahoria con un toque de naranja',
    yields: '3 porciones',
    prepTime: '20 min',
    ingredients: [
      '3 tazas zanahoria en rodajas',
      '1 taza agua o caldo sin sal',
      '1 cda zumo de naranja natural (mínimo para sabor)'
    ],
    steps: [
      'Cocina las zanahorias hasta que estén completamente tiernas.',
      'Tritura con agua hasta formar una crema suave.',
      'Añade unas gotas de jugo de naranja natural y mezcla bien. Servir tibio.'
    ],
    tips: ['La vitamina C de la naranja realza el sabor dulce de la zanahoria.'],
    badge: 'Vitamina C',
    icon: '🥕'
  },
  {
    id: 'b18-a20',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'almuerzos_cenas',
    categoryLabel: 'Almuerzo / Cena',
    number: 62,
    title: 'Pollo al horno en trocitos con batata asada',
    yields: '2–3 porciones',
    prepTime: '30 min',
    ingredients: [
      '250 g pollo en trozos pequeños',
      '1 batata mediana en cubos',
      '1 cdta aceite de oliva'
    ],
    steps: [
      'Mezcla los trozos de pollo y la batata con aceite de oliva.',
      'Hornea 25–30 min a 190 °C hasta que estén completamente tiernos.',
      'Revisa que el pollo esté bien cocido en el centro y desmenuza los trozos si es necesario. Sirve tibio.'
    ],
    tips: ['Excelente aporte de betacarotenos y proteínas de alto valor biológico.'],
    badge: 'Proteína & Batata',
    icon: '🍠'
  },

  // Snacks y Meriendas (8 recetas 18-24m)
  {
    id: 'b18-s1',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'snacks_meriendas',
    categoryLabel: 'Snack / Merienda',
    number: 63,
    title: 'Bastones de zanahoria y calabacín cocidos con dip de yogur',
    yields: '2 porciones',
    prepTime: '12 min',
    ingredients: [
      'Bastones de zanahoria y calabacín',
      '1/2 taza yogur natural',
      '2 cdas puré de aguacate'
    ],
    steps: [
      'Cocina los bastones al vapor hasta tiernos.',
      'Mezcla el yogur con el puré de aguacate para un dip suave.',
      'Sirve los bastones con el dip. Ideal para practicar la pinza.'
    ],
    tips: ['Permite que el bebé moje el bastón en el dip por sí mismo.'],
    badge: 'Pinza Fina',
    icon: '🥕'
  },
  {
    id: 'b18-s2',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'snacks_meriendas',
    categoryLabel: 'Snack / Merienda',
    number: 64,
    title: 'Bolitas energéticas de avena, plátano y coco',
    yields: '10–12 bolitas',
    prepTime: '10 min + 30 min frío',
    ingredients: [
      '1 plátano maduro machacado',
      '1 taza avena molida',
      '2 cdas coco rallado fino'
    ],
    steps: [
      'Tritura el plátano y mezcla con la avena hasta masa manejable.',
      'Forma bolitas con las manos y reboza con coco.',
      'Refrigera 30 min antes de servir. Mantener en refrigerador para que no se deshagan.'
    ],
    tips: ['Sin azúcar y llenas de energía para jugar.'],
    badge: 'Energía Limpia',
    icon: '🥥'
  },
  {
    id: 'b18-s3',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'snacks_meriendas',
    categoryLabel: 'Snack / Merienda',
    number: 65,
    title: 'Brochetas de fruta segura (uvas peladas, melón, pera)',
    yields: '2 porciones',
    prepTime: '10 min',
    ingredients: [
      'Melón en cubos',
      'Pera en cubos',
      'Uvas peladas y cortadas en cuartos longitudinales'
    ],
    steps: [
      'Pela las uvas y córtalas a lo largo en cuatro partes (nunca enteras).',
      'Ensarta melón, pera y uvas en palillos cortos de punta redonda o pajitas de papel.',
      'Ofrece siempre bajo estricta supervisión adulta.'
    ],
    tips: ['¡Regla de seguridad vital: las uvas deben estar siempre cortadas a lo largo!'],
    badge: 'Seguridad Fruta',
    icon: '🍇'
  },
  {
    id: 'b18-s4',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'snacks_meriendas',
    categoryLabel: 'Snack / Merienda',
    number: 66,
    title: 'Mini muffins de espinaca y queso',
    yields: '8 mini muffins',
    prepTime: '20 min',
    ingredients: [
      '1/2 taza espinaca cocida y picada',
      '1 huevo',
      '1/2 taza avena molida',
      '1/4 taza queso rallado'
    ],
    steps: [
      'Mezcla la espinaca picada, el huevo, la avena molida y el queso rallado hasta integrar.',
      'Rellena moldes mini de silicona.',
      'Hornea 12–15 min a 180 °C. Ideales para llevar al parque; congelan bien.'
    ],
    tips: ['Una merienda salada deliciosa y nutritiva.'],
    badge: 'Merienda Salada',
    icon: '🧁'
  },
  {
    id: 'b18-s5',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'snacks_meriendas',
    categoryLabel: 'Snack / Merienda',
    number: 67,
    title: 'Palitos de pan integral con puré de aguacate',
    yields: '1 porción',
    prepTime: '3 min',
    ingredients: [
      'Palitos de pan integral blando',
      '1/2 aguacate maduro machacado',
      'Gotas de limón (opcional)'
    ],
    steps: [
      'Unta el aguacate machacado sobre los palitos de pan.',
      'Sirve inmediatamente para evitar que el pan se humedezca.',
      'Añade un chorrito de limón al aguacate si se desea y está tolerado.'
    ],
    tips: ['Fácil y rápido en 3 minutos.'],
    badge: 'Rápido',
    icon: '🥖'
  },
  {
    id: 'b18-s6',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'snacks_meriendas',
    categoryLabel: 'Snack / Merienda',
    number: 68,
    title: 'Chips de camote al horno blanditos',
    yields: '2 porciones',
    prepTime: '20 min',
    ingredients: [
      '1 camote cortado en rodajas delgadas',
      '1 cdta aceite de oliva'
    ],
    steps: [
      'Mezcla las rodajas de camote con aceite y extiende en bandeja con papel para hornear.',
      'Hornea 15–20 min a 180 °C volteando a mitad de tiempo hasta que estén blanditos (no crujientes duros).',
      'Vigila el horno para que mantengan textura tierna y masticable.'
    ],
    tips: ['No dejes que se tuesten en exceso para que no queden quebradizos.'],
    badge: 'Textura Tierna',
    icon: '🍠'
  },
  {
    id: 'b18-s7',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'snacks_meriendas',
    categoryLabel: 'Snack / Merienda',
    number: 69,
    title: 'Yogur con compota de frutas casera',
    yields: '1 porción',
    prepTime: '10 min',
    ingredients: [
      '1/2 taza yogur natural sin azúcar',
      '2 cdas compota casera de manzana o pera'
    ],
    steps: [
      'Prepara la compota cocinando la fruta troceada con un chorrito de agua hasta que esté tierna y tritúrala.',
      'Mezcla el yogur con la compota al gusto.',
      'Sirve fresco.'
    ],
    tips: ['La compota casera se conserva hasta 3 días en el refrigerador.'],
    badge: 'Sin Azúcar',
    icon: '🥣'
  },
  {
    id: 'b18-s8',
    book: '18-24m',
    bookTitle: '18–24 meses',
    category: 'snacks_meriendas',
    categoryLabel: 'Snack / Merienda',
    number: 70,
    title: 'Galletas blandas de avena, zanahoria y manzana',
    yields: '8 galletas',
    prepTime: '20 min',
    ingredients: [
      '1 taza avena molida',
      '1/2 taza zanahoria rallada fina',
      '1/2 manzana rallada fina',
      '1 huevo'
    ],
    steps: [
      'Mezcla la avena molida, zanahoria rallada, manzana rallada y el huevo hasta formar masa húmeda.',
      'Forma pequeñas galletas en la bandeja de horno.',
      'Hornea 12–15 min a 180 °C hasta que queden suaves al tacto. Perfectas para manos pequeñas.'
    ],
    tips: ['Muy fáciles de transportar y de masticar para niños de 18 a 24 meses.'],
    badge: 'Super Merienda',
    icon: '🍪'
  }
];
