import { Recipe, MealCategory } from '../types';
import { BONUS_RECIPES_DATABASE } from './bonusRecipes';

const BASE_RECIPES_DATA: Recipe[] = [
  // ==========================================
  // --- 1. PURÉS Y PAPILLAS (6 A 12 MESES) ---
  // ==========================================
  {
    id: 'rec-pure-calabaza',
    title: 'Puré de calabaza / zapallo / auyama',
    stageMonths: 6,
    ageLabel: '6 meses+',
    category: 'papillas',
    categoryLabel: 'Papilla nutritiva',
    prepTimeMinutes: 15,
    difficulty: 'Fácil',
    portions: '2 porciones',
    texture: 'Liso a los 6 meses; rústico/grumos a los 8 meses; cubos blandos a los 10+ meses.',
    imageUrl: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=800&q=80',
    summary: 'Rica en betacarotenos y vitamina A para la visión y el sistema inmune. Sabor dulce natural que encanta a los bebés.',
    ingredients: [
      { item: 'Calabaza (zapallo / auyama) en cubos', amount: '1 taza (150g)', category: 'frutas_verduras' },
      { item: 'Agua para cocción al vapor o hervor', amount: 'Cantidad necesaria', category: 'otros' },
      { item: 'Aceite de oliva virgen extra (opcional)', amount: '1 cdita en crudo', category: 'lacteos_grasas' }
    ],
    steps: [
      'Pela la calabaza, retira las semillas y córtala en cubos medianos.',
      'Cocina al vapor o hierve con poca agua hasta que esté completamente blanda al pincharla con tenedor.',
      'Aplasta con un tenedor o procesa hasta lograr la consistencia deseada según la etapa de tu bebé.',
      'Añade 1 cucharadita de aceite de oliva en crudo justo antes de servir para aportar grasas saludables.'
    ],
    shoppingList: ['1 trozo de calabaza madura (zapallo/auyama)', 'Aceite de oliva virgen extra'],
    tips: [
      'A los 6 meses: puré completamente liso con un chorrito de agua de cocción.',
      'A los 8 meses: puré rústico machacado con tenedor para estimular la masticación.',
      'A los 10+ meses: cubitos blandos que el bebé pueda coger con sus dedos (finger food).'
    ],
    nutritionHighlights: ['Vitamina A (betacarotenos)', 'Fibra suave para el tránsito', 'Potasio'],
    allergenAlert: 'Ninguno (inicio ideal AC)',
    blwFriendly: true,
    conservation: 'Refrigerador: hasta 48 horas. Congelador: 2 a 3 meses en porciones individuales.'
  },
  {
    id: 'rec-pure-papa',
    title: 'Puré de papa / patata suave',
    stageMonths: 6,
    ageLabel: '6 meses+',
    category: 'papillas',
    categoryLabel: 'Papilla nutritiva',
    prepTimeMinutes: 20,
    difficulty: 'Fácil',
    portions: '2 porciones',
    texture: 'Liso 6-7 meses; grumos rústicos 8-9 meses; cubos blandos 10+ meses.',
    imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80',
    summary: 'Fuente clásica de carbohidratos de fácil digestión. Aporta energía inmediata y textura reconfortante.',
    ingredients: [
      { item: 'Papa (patata) mediana pelada', amount: '1 unidad (120g)', category: 'frutas_verduras' },
      { item: 'Agua para hervir', amount: 'Cantidad necesaria', category: 'otros' },
      { item: 'Aceite de oliva o leche materna/fórmula', amount: '1 cucharadita', category: 'lacteos_grasas' }
    ],
    steps: [
      'Pela la papa y córtala en trozos medianos uniformes.',
      'Hierve en agua sin sal hasta que esté muy blanda.',
      'Aplasta con un tenedor añadiendo un poco del agua de cocción o leche materna/fórmula para dar fluidez.',
      'Sirve tibia.'
    ],
    shoppingList: ['1 malla de papas / patatas frescas'],
    tips: [
      'Evita usar batidora eléctrica potente con la papa sola para no generar una textura elástica/chicletosa.',
      'Machacar con tenedor manual mantiene la textura cremosa perfecta.'
    ],
    nutritionHighlights: ['Carbohidratos complejos de absorción lenta', 'Vitamina C y B6', 'Potasio'],
    allergenAlert: 'Ninguno',
    blwFriendly: true,
    conservation: 'Refrigerador: 48 horas. Congelador: hasta 3 meses.'
  },
  {
    id: 'rec-pure-camote',
    title: 'Puré de camote / boniato / batata',
    stageMonths: 6,
    ageLabel: '6 meses+',
    category: 'papillas',
    categoryLabel: 'Papilla nutritiva',
    prepTimeMinutes: 20,
    difficulty: 'Fácil',
    portions: '2 porciones',
    texture: 'Puré fino y suave (6-7m), textura rústica (8-9m), bastones cocidos (10m+).',
    imageUrl: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    summary: 'Dulzor natural irresistible con alta concentración de antioxidantes, vitaminas A y C.',
    ingredients: [
      { item: 'Camote / boniato mediano', amount: '1 unidad (150g)', category: 'frutas_verduras' },
      { item: 'Agua para cocción', amount: 'Cantidad necesaria', category: 'otros' }
    ],
    steps: [
      'Pela el camote y córtalo en rodajas o cubos.',
      'Cocina al vapor o hierve hasta que esté bien tierno.',
      'Aplasta con tenedor hasta obtener consistencia suave o puré aterciopelado.',
      'Sirve tibio.'
    ],
    shoppingList: ['Camotes / boniatos / batatas'],
    tips: [
      'Al vapor concentra aún más su dulzor natural sin necesidad de añadir nada más.',
      'Es ideal para mezclar más adelante con pollo o legumbres.'
    ],
    nutritionHighlights: ['Betacarotenos', 'Fibra prebiótica', 'Vitamina C y E'],
    allergenAlert: 'Ninguno',
    blwFriendly: true,
    conservation: 'Refrigerador: 48 horas. Congelador: 3 meses.'
  },
  {
    id: 'rec-pure-zanahoria',
    title: 'Puré de zanahoria tierna',
    stageMonths: 6,
    ageLabel: '6 meses+',
    category: 'papillas',
    categoryLabel: 'Papilla nutritiva',
    prepTimeMinutes: 15,
    difficulty: 'Fácil',
    portions: '2 porciones',
    texture: 'Liso (6m), rústico (8m), bastones cocidos al vapor (9m+).',
    imageUrl: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80',
    summary: 'Clásico por su sabor suave y color vibrante. Excelente para iniciar la introducción de vegetales.',
    ingredients: [
      { item: 'Zanahoria mediana pelada', amount: '1 unidad grande', category: 'frutas_verduras' },
      { item: 'Agua para cocer', amount: 'Cantidad necesaria', category: 'otros' },
      { item: 'Aceite de oliva virgen extra', amount: '1 cdita cruda', category: 'lacteos_grasas' }
    ],
    steps: [
      'Lava, pela y corta la zanahoria en rodajas gruesas.',
      'Cocina al vapor o hierve con agua hasta que esté muy blanda.',
      'Tritura o aplasta ajustando con el líquido de cocción hasta que quede sedosa.'
    ],
    shoppingList: ['Zanahorias frescas de manojo'],
    tips: ['La cocción al vapor preserva el 90% de sus nutrientes.'],
    nutritionHighlights: ['Vitamina A', 'Antioxidantes', 'Favorece la mucosa digestiva'],
    allergenAlert: 'Ninguno',
    blwFriendly: true,
    conservation: 'Refrigerador: 48 horas. Congelador: hasta 3 meses.'
  },
  {
    id: 'rec-pure-yuca',
    title: 'Puré de yuca / mandioca / casava',
    stageMonths: 6,
    ageLabel: '6 meses+',
    category: 'papillas',
    categoryLabel: 'Papilla nutritiva',
    prepTimeMinutes: 25,
    difficulty: 'Fácil',
    portions: '2 porciones',
    texture: 'Liso (6m), rústico (8m), palitos tiernos (10m+).',
    imageUrl: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23943?auto=format&fit=crop&w=800&q=80',
    summary: 'Tubérculo hipoalergénico con excelente aporte calórico y textura muy suave al cocinarse.',
    ingredients: [
      { item: 'Yuca pelada (sin la fibra leñosa central)', amount: '1 trozo mediano (100g)', category: 'frutas_verduras' },
      { item: 'Agua de cocción', amount: 'Cantidad suficiente', category: 'otros' }
    ],
    steps: [
      'Pela la yuca y retira cuidadosamente la fibra dura del centro.',
      'Hierve en agua abundante hasta que esté totalmente blanda y suave.',
      'Aplasta con tenedor con un poco de agua caliente hasta lograr textura cremosa.'
    ],
    shoppingList: ['Yuca fresca / mandioca'],
    tips: ['Asegúrate de retirar siempre la hebra central antes de triturar o servir en bastón.'],
    nutritionHighlights: ['Energía limpia de fácil digestión', 'Libre de gluten', 'Minerales esenciales'],
    allergenAlert: 'Ninguno',
    blwFriendly: true,
    conservation: 'Congelador: 2 meses. Refrigerador: 24 horas.'
  },
  {
    id: 'rec-pure-betabel',
    title: 'Puré de betabel / remolacha',
    stageMonths: 6,
    ageLabel: '6 meses+',
    category: 'papillas',
    categoryLabel: 'Papilla nutritiva',
    prepTimeMinutes: 30,
    difficulty: 'Fácil',
    portions: '2 porciones',
    texture: 'Liso (6m), rústico con grumos (8m), cubos blandos (10m+).',
    imageUrl: 'https://images.unsplash.com/photo-1526346698789-224823522f6d?auto=format&fit=crop&w=800&q=80',
    summary: 'Color rojo intenso que atrae la curiosidad del bebé. Rico en antioxidantes y folatos.',
    ingredients: [
      { item: 'Betabel / remolacha mediana pelada', amount: '1 unidad', category: 'frutas_verduras' },
      { item: 'Agua', amount: 'Cantidad necesaria', category: 'otros' }
    ],
    steps: [
      'Pela el betabel y córtalo en trozos medianos.',
      'Hierve hasta que esté bien tierno al pinchar con un cuchillo.',
      'Tritura suavemente con agua de cocción hasta textura homogénea.'
    ],
    shoppingList: ['Betabeles / remolachas frescas'],
    tips: ['Ofrecer en cantidades moderadas (1-2 veces por semana) por su contenido en nitratos naturales.'],
    nutritionHighlights: ['Folatos naturales', 'Hierro vegetal', 'Antioxidantes'],
    allergenAlert: 'Ninguno',
    blwFriendly: true,
    conservation: 'Refrigerador: 48 horas. Congelador: 3 meses.'
  },
  {
    id: 'rec-pure-avena',
    title: 'Papilla suave de avena fortificada',
    stageMonths: 6,
    ageLabel: '6 meses+',
    category: 'desayunos',
    categoryLabel: 'Desayuno / Merienda',
    prepTimeMinutes: 10,
    difficulty: 'Fácil',
    portions: '1 porción',
    texture: 'Papilla lisa (6-7m), grumos suaves de avena en hojuelas (8m+).',
    imageUrl: 'https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?auto=format&fit=crop&w=800&q=80',
    summary: 'Cereal estrella rico en hierro y fibra soluble. Ideal para comenzar las mañanas con saciedad natural.',
    ingredients: [
      { item: 'Avena en hojuelas suaves (fortificada con hierro)', amount: '3 cucharadas', category: 'cereales' },
      { item: 'Agua o leche materna/fórmula', amount: '1/2 taza', category: 'otros' }
    ],
    steps: [
      'Coloca la avena con el agua o leche en una cacerola pequeña.',
      'Cocina a fuego medio-bajo durante 4-5 minutos revolviendo continuamente hasta espesar.',
      'Deja templar antes de ofrecer.'
    ],
    shoppingList: ['Avena suave / hojuelas finas de avena integral'],
    tips: ['No se recomienda congelar papilla de avena lista; preparar fresca al momento o guardar en refri máx 24 horas.'],
    nutritionHighlights: ['Hierro', 'Fibra betaglucano', 'Zinc y magnesio'],
    allergenAlert: 'Avena / Gluten (probar según regla de 3 días)',
    blwFriendly: false,
    conservation: 'Refrigerador: máx 24 horas. No congelar.'
  },
  {
    id: 'rec-pure-manzana',
    title: 'Puré de manzana asada o al vapor',
    stageMonths: 6,
    ageLabel: '6 meses+',
    category: 'papillas',
    categoryLabel: 'Fruta / Merienda',
    prepTimeMinutes: 15,
    difficulty: 'Fácil',
    portions: '2 porciones',
    texture: 'Liso (6m), rústico machacado (8m), gajos asados blandos (10m+).',
    imageUrl: 'https://images.unsplash.com/photo-1568644396922-5c3bfae12521?auto=format&fit=crop&w=800&q=80',
    summary: 'Manzana tierna y dulce de fácil asimilación gástrica. Rica en pectina que protege la pancita.',
    ingredients: [
      { item: 'Manzana madura dulce (ej. Gala, Golden o Fuji)', amount: '1 unidad pelada', category: 'frutas_verduras' },
      { item: 'Agua para vapor', amount: 'Cantidad necesaria', category: 'otros' }
    ],
    steps: [
      'Pela la manzana, descorazónala y córtala en cuartos o rodajas.',
      'Cocina al vapor o al horno durante 10-12 minutos hasta que esté muy blanda.',
      'Aplasta con tenedor hasta que quede suave.'
    ],
    shoppingList: ['Manzanas dulces'],
    tips: ['Nunca ofrecer manzana cruda en trozo duro a menores de 3 años por riesgo de atragantamiento.'],
    nutritionHighlights: ['Pectina (fibra reguladora)', 'Vitamina C', 'Agua e hidratación'],
    allergenAlert: 'Ninguno',
    blwFriendly: true,
    conservation: 'Refrigerador: 48 horas. Congelador: hasta 3 meses.'
  },
  {
    id: 'rec-pure-pera',
    title: 'Puré de pera madura al vapor',
    stageMonths: 6,
    ageLabel: '6 meses+',
    category: 'papillas',
    categoryLabel: 'Fruta / Merienda',
    prepTimeMinutes: 12,
    difficulty: 'Fácil',
    portions: '2 porciones',
    texture: 'Liso (6m), rústico (8m), trocitos muy blandos (10m+).',
    imageUrl: 'https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?auto=format&fit=crop&w=800&q=80',
    summary: 'Excelente hidratación y gran aliada contra el estreñimiento infantil por su alto contenido en agua y fibra.',
    ingredients: [
      { item: 'Pera madura pelada y sin semillas', amount: '1 unidad', category: 'frutas_verduras' },
      { item: 'Agua para cocción al vapor', amount: 'Cantidad necesaria', category: 'otros' }
    ],
    steps: [
      'Pela la pera, retira el corazón y córtala en cubos.',
      'Cocina al vapor durante 8 minutos hasta que esté tierna.',
      'Aplasta o procesa suavemente.'
    ],
    shoppingList: ['Peras maduras (Williams, Conferencia o de agua)'],
    tips: ['Si la pera está muy madura y suave, se puede machacar directamente en crudo con tenedor.'],
    nutritionHighlights: ['Fibra laxante suave', 'Agua biológica', 'Potasio'],
    allergenAlert: 'Ninguno',
    blwFriendly: true,
    conservation: 'Refrigerador: 48 horas. Congelador: 3 meses.'
  },

  // ==========================================
  // --- 2. LEGUMBRES Y PROTEÍNAS (7 A 10M) ---
  // ==========================================
  {
    id: 'rec-pure-lentejas',
    title: 'Puré de lentejas suaves con verduras',
    stageMonths: 7,
    ageLabel: '7 meses+',
    category: 'comidas',
    categoryLabel: 'Almuerzo proteico',
    prepTimeMinutes: 30,
    difficulty: 'Fácil',
    portions: '3 porciones',
    texture: 'Puré liso (7-8m), rústico con grumos suaves (9m+).',
    imageUrl: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80',
    summary: 'Bomba de hierro vegetal y proteína. Las lentejas rojas o pardinas sin piel facilitan la digestión.',
    ingredients: [
      { item: 'Lentejas rojas o pardinas bien lavadas', amount: '1/2 taza', category: 'proteinas' },
      { item: 'Agua o caldo casero sin sal', amount: '1 y 1/2 tazas', category: 'otros' },
      { item: 'Zanahoria o calabacín rallado', amount: '2 cucharadas', category: 'frutas_verduras' }
    ],
    steps: [
      'Lava muy bien las lentejas.',
      'Cocina en agua con la verdura hasta que las lentejas se deshagan de blandas (20-25 min).',
      'Tritura o aplasta con el líquido hasta la textura correspondiente a la edad.'
    ],
    shoppingList: ['Lentejas (preferiblemente rojas o peladas)', 'Zanahoria fresca'],
    tips: ['Añadir unas gotitas de naranja o acompañar con fruta rica en vitamina C duplica la absorción de su hierro.'],
    nutritionHighlights: ['Hierro no hemo de gran calidad', 'Proteína vegetal', 'Zinc y fósforo'],
    allergenAlert: 'Legumbres (probar 3 días)',
    blwFriendly: false,
    conservation: 'Refrigerador: 48 horas. Congelador: 3 meses en cubiteras o frascos herméticos.'
  },
  {
    id: 'rec-pure-frijoles',
    title: 'Puré de frijoles negros / pintos / carioca',
    stageMonths: 7,
    ageLabel: '7 meses+',
    category: 'comidas',
    categoryLabel: 'Almuerzo / Cena',
    prepTimeMinutes: 35,
    difficulty: 'Fácil',
    portions: '3 porciones',
    texture: 'Papilla lisa bien tamizada (7m), granos semitriturados (9m+).',
    imageUrl: 'https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80',
    summary: 'Tradicional y reconfortante. Aporte energético duradero y minerales esenciales para el crecimiento.',
    ingredients: [
      { item: 'Frijoles cocidos sin sal (previamente remojados 12h)', amount: '1/2 taza', category: 'proteinas' },
      { item: 'Agua de cocción o caldo vegetal casero', amount: '1/4 taza', category: 'otros' }
    ],
    steps: [
      'Cocina los frijoles hasta que estén sumamente blandos que se deshagan entre los dedos.',
      'Aplasta con tenedor o procesa añadiendo caldo.',
      'Pasa por un colador fino si tu bebé tiene 7 meses para retirar los hollejos (pieles).'
    ],
    shoppingList: ['Frijoles negros, pintos o carioca secos'],
    tips: ['El remojo previo de 12 a 24 horas elimina fitatos y previene gases en el bebé.'],
    nutritionHighlights: ['Hierro y ácido fólico', 'Fibra dietética', 'Proteína'],
    allergenAlert: 'Legumbres',
    blwFriendly: false,
    conservation: 'Congelador: 3 meses. Refrigerador: 48 horas.'
  },
  {
    id: 'rec-pure-garbanzos',
    title: 'Puré suave de garbanzos (Hummus para bebés)',
    stageMonths: 7,
    ageLabel: '7 meses+',
    category: 'comidas',
    categoryLabel: 'Almuerzo proteico',
    prepTimeMinutes: 25,
    difficulty: 'Fácil',
    portions: '3 porciones',
    texture: 'Puré liso sin hollejos (7-8m), rústico machacado (9m+).',
    imageUrl: 'https://images.unsplash.com/photo-1577906096429-f73c2c312435?auto=format&fit=crop&w=800&q=80',
    summary: 'Suave, cremoso y con sabor a nuez suave. Una de las mejores fuentes vegetales de energía y calcio.',
    ingredients: [
      { item: 'Garbanzos cocidos (sin piel para los más pequeños)', amount: '1/2 taza', category: 'proteinas' },
      { item: 'Agua de cocción o caldo de verduras sin sal', amount: '1/4 taza', category: 'otros' },
      { item: 'Aceite de oliva virgen extra', amount: '1 cucharadita', category: 'lacteos_grasas' }
    ],
    steps: [
      'Cocina los garbanzos hasta que queden extra suaves.',
      'Retira la pielecilla exterior frotándolos con un paño limpio si es para 7 meses.',
      'Tritura con el agua de cocción y el aceite de oliva hasta lograr una textura similar al hummus cremoso.'
    ],
    shoppingList: ['Garbanzos secos o cocidos en frasco sin sal añadida', 'Aceite de oliva virgen extra'],
    tips: ['A los 9 meses se puede untar sobre bastones de verdura o arepitas blandas.'],
    nutritionHighlights: ['Calcio vegetal', 'Hierro', 'Proteínas completas'],
    allergenAlert: 'Legumbres',
    blwFriendly: true,
    conservation: 'Refrigerador: 48 horas. Congelador: 3 meses.'
  },
  {
    id: 'rec-arroz-verdura',
    title: 'Puré de arroz integral con verduras tiernas',
    stageMonths: 7,
    ageLabel: '7 meses+',
    category: 'comidas',
    categoryLabel: 'Almuerzo equilibrado',
    prepTimeMinutes: 25,
    difficulty: 'Fácil',
    portions: '2 porciones',
    texture: 'Papilla lisa (7m), semitriturado con granos visibles y blandos (9m+).',
    imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
    summary: 'Combina carbohidratos complejos de absorción lenta con fibra vegetal rica en vitaminas.',
    ingredients: [
      { item: 'Arroz integral cocido muy blando', amount: '1/2 taza', category: 'cereales' },
      { item: 'Verdura blanda cocida (calabaza, zanahoria o espinaca)', amount: '1/2 taza', category: 'frutas_verduras' },
      { item: 'Agua de cocción o caldo casero', amount: '1/4 taza', category: 'otros' }
    ],
    steps: [
      'Cocina el arroz con suficiente agua hasta que esté pasado y muy tierno.',
      'Mezcla con la verdura cocida caliente.',
      'Tritura o amasa con tenedor hasta alcanzar la textura ideal.'
    ],
    shoppingList: ['Arroz integral o blanco', 'Calabacín o calabaza'],
    tips: ['Cocinar el arroz con un poco más de agua de lo normal ayuda a que quede meloso y fácil de digerir.'],
    nutritionHighlights: ['Complejo B', 'Energía duradera', 'Magnesio'],
    allergenAlert: 'Ninguno',
    blwFriendly: false,
    conservation: 'Congelador: 2 meses. Refrigerador: 24-48 horas.'
  },
  {
    id: 'rec-pollo-desmenuzado',
    title: 'Pollo tierno desmenuzado / puré de pollo',
    stageMonths: 7,
    ageLabel: '7 meses+',
    category: 'comidas',
    categoryLabel: 'Proteína y Hierro',
    prepTimeMinutes: 20,
    difficulty: 'Fácil',
    portions: '2 porciones',
    texture: 'Triturado con verduras (7m), desmenuzado fino (8-9m), tiras blandas (10m+).',
    imageUrl: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80',
    summary: 'Proteína animal magra de altísima biodisponibilidad de hierro y zinc para el cerebro infantil.',
    ingredients: [
      { item: 'Pechuga o muslo de pollo sin piel ni grasa', amount: '1 pieza pequeña (60g)', category: 'proteinas' },
      { item: 'Agua o caldo casero sin sal', amount: '1 taza', category: 'otros' }
    ],
    steps: [
      'Hierve el pollo en agua o al vapor hasta que esté completamente cocido por dentro (sin partes rosadas).',
      'Para 7 meses: tritura con verduras cocidas y caldo.',
      'Para 8-9 meses: desmenuza finamente con los dedos o dos tenedores.',
      'Para 10+ meses: corta en tiras blandas que no se desmoronen en polvo seco.'
    ],
    shoppingList: ['Pechuga o muslo de pollo fresco de corral'],
    tips: ['El muslo de pollo suele quedar más jugoso y tiene mayor concentración de hierro y zinc que la pechuga.'],
    nutritionHighlights: ['Hierro hemo de alta absorción', 'Zinc para defensas', 'Proteína estructural'],
    allergenAlert: 'Aves (baja alergenicidad)',
    blwFriendly: true,
    conservation: 'Congelador: 3 meses en porciones individuales. Refrigerador: 48 horas.'
  },
  {
    id: 'rec-carne-molida',
    title: 'Carne de res magra suave para bebé',
    stageMonths: 7,
    ageLabel: '7 meses+',
    category: 'comidas',
    categoryLabel: 'Hierro de alta absorción',
    prepTimeMinutes: 15,
    difficulty: 'Fácil',
    portions: '2 porciones',
    texture: 'Puré con carne molida fina (7-8m), trocitos pequeños y suaves (9m+).',
    imageUrl: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=800&q=80',
    summary: 'La mayor fuente de hierro hemo contra la anemia del lactante. Indispensable a partir de los 6-7 meses.',
    ingredients: [
      { item: 'Carne magra molida (ternera o res sin grasa)', amount: '100g', category: 'proteinas' },
      { item: 'Agua o caldo de verduras casero sin sal', amount: '1/2 taza', category: 'otros' },
      { item: 'Pizca de orégano o laurel suave (opcional)', amount: 'Pizca mínima', category: 'otros' }
    ],
    steps: [
      'Cocina la carne en una sartén con un poco de agua hasta que esté totalmente cocida y grisácea.',
      'Para 7 meses: tritura con puré de papa o calabaza.',
      'Para 9+ meses: ofrece en pequeñas bolitas o carne deshebrada suave.'
    ],
    shoppingList: ['Carne magra molida de ternera o vacuno'],
    tips: ['Nunca servir carne cruda o término medio al bebé. Siempre 100% cocinada.'],
    nutritionHighlights: ['Hierro hemo biodisponible', 'Vitamina B12', 'Proteína de alto valor biológico'],
    allergenAlert: 'Ninguno común',
    blwFriendly: true,
    conservation: 'Congelador: 3 meses. Refrigerador: 48 horas.'
  },

  // ==========================================
  // --- 3. BASTONES Y CORTES BLW (8 A 12M) ---
  // ==========================================
  {
    id: 'rec-blw-camote',
    title: 'Bastones de camote / boniato al vapor (BLW)',
    stageMonths: 8,
    ageLabel: '8 meses+',
    category: 'blw',
    categoryLabel: 'Finger Food BLW',
    prepTimeMinutes: 15,
    difficulty: 'Fácil',
    portions: '1 porción',
    texture: 'Bastones de 5-6 cm, blandos al apretar con los dedos pero que mantienen su forma.',
    imageUrl: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    summary: 'Corte ideal para el agarre palmar del bebé. No se resbala y se deshace con la presión de sus encías.',
    ingredients: [
      { item: 'Camote / boniato mediano pelado', amount: '1 unidad', category: 'frutas_verduras' }
    ],
    steps: [
      'Pela el camote y córtalo en bastones de 5 a 6 cm de largo y 1.5 cm de grosor (grosor de tu dedo meñique).',
      'Cocina al vapor durante 10-12 minutos hasta que al apretar un extremo con tu pulgar e índice ceda fácilmente.',
      'Deja enfriar unos minutos antes de colocar sobre la bandeja del bebé.'
    ],
    shoppingList: ['Camotes / boniatos medianos y rectos'],
    tips: ['No sobrecocinar para evitar que se desarmen al agarrarlos con el puñito.'],
    nutritionHighlights: ['Vitamina A y C', 'Fibra', 'Fomenta la motricidad fina y agarre palmar'],
    allergenAlert: 'Ninguno',
    blwFriendly: true,
    conservation: 'Consumir fresco. No se recomienda congelar bastones listos.'
  },
  {
    id: 'rec-blw-zanahoria',
    title: 'Bastones de zanahoria cocida segura (BLW)',
    stageMonths: 8,
    ageLabel: '8 meses+',
    category: 'blw',
    categoryLabel: 'Finger Food BLW',
    prepTimeMinutes: 15,
    difficulty: 'Fácil',
    portions: '1 porción',
    texture: 'Bastón largo blando. NUNCA ofrecer rodajas duras ni zanahoria cruda.',
    imageUrl: 'https://images.unsplash.com/photo-1447175008436-054170c2e979?auto=format&fit=crop&w=800&q=80',
    summary: 'La forma correcta y 100% segura de presentar zanahoria en Baby-Led Weaning.',
    ingredients: [
      { item: 'Zanahoria gruesa', amount: '1 unidad', category: 'frutas_verduras' }
    ],
    steps: [
      'Pela la zanahoria y córtala en bastones longitudinales largos (del tamaño de un dedo de adulto).',
      'Cocina al vapor o hierve hasta que esté completamente tierna y maleable.',
      'Verifica la prueba del tenedor: debe entrar sin ninguna resistencia.'
    ],
    shoppingList: ['Zanahorias gruesas'],
    tips: ['Cortes largos siempre: permiten que el bebé sostenga la parte inferior mientras muerde la superior.'],
    nutritionHighlights: ['Betacarotenos', 'Salud ocular', 'Desarrollo motor oral'],
    allergenAlert: 'Ninguno',
    blwFriendly: true,
    conservation: 'Refrigerador: 48 horas. Congelador: hasta 2 meses.'
  },
  {
    id: 'rec-blw-calabacin',
    title: 'Bastones de calabacín / zucchini con piel (BLW)',
    stageMonths: 8,
    ageLabel: '8 meses+',
    category: 'blw',
    categoryLabel: 'Finger Food BLW',
    prepTimeMinutes: 10,
    difficulty: 'Fácil',
    portions: '1 porción',
    texture: 'Bastón suave con piel tierna que mejora el agarre y evita que se resbale.',
    imageUrl: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&w=800&q=80',
    summary: 'Muy jugoso, fresco y fácil de masticar con encías. La piel ayuda al bebé a sostenerlo con firmeza.',
    ingredients: [
      { item: 'Calabacín / zucchini tierno bien lavado', amount: '1 unidad pequeña', category: 'frutas_verduras' }
    ],
    steps: [
      'Lava muy bien el calabacín y corta los extremos.',
      'Córtalo en bastones de 6 cm de largo dejando la piel.',
      'Cocina al vapor durante 7-8 minutos hasta que la pulpa esté blanda pero conserve estructura.'
    ],
    shoppingList: ['Calabacines pequeños / zucchinis frescos'],
    tips: ['La piel bien cocida aporta agarre antideslizante natural para las manos del bebé.'],
    nutritionHighlights: ['Agua y minerales', 'Vitamina C', 'Fibra suave'],
    allergenAlert: 'Ninguno',
    blwFriendly: true,
    conservation: 'Consumir fresco. No congelar.'
  },
  {
    id: 'rec-blw-brocoli',
    title: 'Ramilletes de brócoli al vapor (BLW)',
    stageMonths: 8,
    ageLabel: '8 meses+',
    category: 'blw',
    categoryLabel: 'Finger Food BLW',
    prepTimeMinutes: 10,
    difficulty: 'Fácil',
    portions: '1 porción',
    texture: 'Ramillete con tallo largo que funciona como "mango natural" para el puño del bebé.',
    imageUrl: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=800&q=80',
    summary: 'El alimento icono de BLW. El tallo sirve de agarradera y la copa florecida es una fiesta sensorial de texturas.',
    ingredients: [
      { item: 'Brócoli fresco (ramilletes con tallo largo)', amount: '4 a 5 arbolitos', category: 'frutas_verduras' }
    ],
    steps: [
      'Lava cuidadosamente el brócoli y córtalo dejando al menos 4 cm de tallo en cada ramillete.',
      'Cocina al vapor durante 8-10 minutos hasta que el tallo esté tierno al pincharlo.',
      'Sirve tibio.'
    ],
    shoppingList: ['1 cabeza de brócoli fresco verde oscuro'],
    tips: ['No cortes el tallo al ras: el tallo es el mango que permite al bebé llevarse la flor a la boca sin que se caiga.'],
    nutritionHighlights: ['Vitamina C (mayor que la naranja)', 'Calcio vegetal', 'Sulforafano'],
    allergenAlert: 'Crucíferas',
    blwFriendly: true,
    conservation: 'Refrigerador: 48 horas. Congelador: 2 meses.'
  },
  {
    id: 'rec-blw-tiras-pollo',
    title: 'Tiras de pollo jugoso al vapor o al horno (BLW)',
    stageMonths: 9,
    ageLabel: '9 meses+',
    category: 'blw',
    categoryLabel: 'Proteína Finger Food',
    prepTimeMinutes: 20,
    difficulty: 'Fácil',
    portions: '2 porciones',
    texture: 'Tiras largas y tiernas que el bebé puede chupar y masticar sin desmoronarse en polvo.',
    imageUrl: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',
    summary: 'Presentación BLW segura para ofrecer proteína y hierro permitiendo al bebé gestionar la textura cárnica.',
    ingredients: [
      { item: 'Pechuga de pollo fresca', amount: '1 filete grueso (80g)', category: 'proteinas' },
      { item: 'Aceite de oliva virgen extra', amount: '1 cucharadita', category: 'lacteos_grasas' }
    ],
    steps: [
      'Corta la pechuga en tiras longitudinales de 5-6 cm de largo y 2 cm de ancho.',
      'Cocina al vapor o al horno con una gota de aceite de oliva hasta que esté bien cocida pero muy jugosa.',
      'Deja templar antes de ofrecer.'
    ],
    shoppingList: ['Pechuga de pollo fresca'],
    tips: ['Si la carne queda seca, el bebé la rechazará. Cocinarla tapada o al vapor preserva toda su humedad.'],
    nutritionHighlights: ['Hierro y zinc', 'Proteína magra', 'Estimula el reflejo masticatorio'],
    allergenAlert: 'Ninguno',
    blwFriendly: true,
    conservation: 'Congelador: 3 meses. Refrigerador: 48 horas.'
  },
  {
    id: 'rec-blw-carne-deshebrada',
    title: 'Tiras de carne de res deshebrada suave',
    stageMonths: 10,
    ageLabel: '10 meses+',
    category: 'blw',
    categoryLabel: 'Proteína BLW',
    prepTimeMinutes: 40,
    difficulty: 'Fácil',
    portions: '2 porciones',
    texture: 'Hebras suaves y jugosas que no se apelmazan.',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    summary: 'Excelente para bebés de 10 a 11 meses que ya practican pinza fina y deglución de fibras suaves.',
    ingredients: [
      { item: 'Carne magra de res (falda o espaldilla para deshebrar)', amount: '100g', category: 'proteinas' },
      { item: 'Caldo casero sin sal para cocción lenta', amount: '1 taza', category: 'otros' }
    ],
    steps: [
      'Cocina la carne en agua abundante o en olla a presión hasta que esté extremadamente tierna.',
      'Deshebra en tiras finas y cortas con ayuda de dos tenedores.',
      'Humedece con unas gotas del caldo antes de servir.'
    ],
    shoppingList: ['Carne de res magra tierna'],
    tips: ['Siempre servir jugosa humedecida con caldo casero.'],
    nutritionHighlights: ['Hierro hemo', 'Vitamina B12', 'Minerales'],
    allergenAlert: 'Ninguno',
    blwFriendly: true,
    conservation: 'Congelador: 3 meses. Refrigerador: 48 horas.'
  },
  {
    id: 'rec-blw-bastones-yuca',
    title: 'Bastones de yuca cocida al vapor (BLW)',
    stageMonths: 9,
    ageLabel: '9 meses+',
    category: 'blw',
    categoryLabel: 'Carbohidrato BLW',
    prepTimeMinutes: 25,
    difficulty: 'Fácil',
    portions: '2 porciones',
    texture: 'Palitos suaves pero consistentes sin la hebra dura interior.',
    imageUrl: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23943?auto=format&fit=crop&w=800&q=80',
    summary: 'Energía densa en un formato muy cómodo para las manos de bebés desde los 9 meses.',
    ingredients: [
      { item: 'Yuca fresca pelada', amount: '1 trozo mediano', category: 'frutas_verduras' }
    ],
    steps: [
      'Corta la yuca en bastones largos y retira con cuidado la vena fibrosa central.',
      'Hierve en agua abundante hasta que esté bien blanda al morder.',
      'Escurre y sirve templada.'
    ],
    shoppingList: ['Yuca fresca'],
    tips: ['La yuca debe quedar blanda pero no deshecha para que el bebé pueda manipularla.'],
    nutritionHighlights: ['Sin gluten', 'Energía sana', 'Potasio'],
    allergenAlert: 'Ninguno',
    blwFriendly: true,
    conservation: 'Refrigerador: 24 horas. Congelador: 2 meses.'
  },
  {
    id: 'rec-blw-platano-mango',
    title: 'Palitos de plátano y mango con agarre seguro',
    stageMonths: 8,
    ageLabel: '8 meses+',
    category: 'desayunos',
    categoryLabel: 'Fruta / Merienda BLW',
    prepTimeMinutes: 5,
    difficulty: 'Fácil',
    portions: '1 porción',
    texture: 'Tiras largas y firmes con truco antideslizante.',
    imageUrl: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80',
    summary: 'El truco de los expertos para que la fruta madura no se resbale de las manos del bebé.',
    ingredients: [
      { item: 'Plátano maduro o mango firme', amount: '1/2 unidad', category: 'frutas_verduras' },
      { item: 'Avena molida o coco rallado sin azúcar (opcional)', amount: '1 cucharadita', category: 'cereales' }
    ],
    steps: [
      'Para el plátano: pela solo la mitad superior dejando la cáscara inferior limpia como soporte, o córtalo a lo largo en tercios longitudinales naturales.',
      'Para el mango: córtalo en tiras largas o espolvorea con un poco de avena molida para que no resbale.',
      'Ofrece al bebé para que lo disfrute de forma autónoma.'
    ],
    shoppingList: ['Plátanos maduros', 'Mangos firmes pero dulces'],
    tips: ['Rebozar ligeramente la fruta resbalosa en avena en polvo crea una superficie antideslizante perfecta.'],
    nutritionHighlights: ['Potasio', 'Vitamina C', 'Fibra natural'],
    allergenAlert: 'Ninguno',
    blwFriendly: true,
    conservation: 'Consumir de inmediato.'
  },
  {
    id: 'rec-queso-cubitos',
    title: 'Cubitos de queso fresco pasteurizado',
    stageMonths: 12,
    ageLabel: '12 meses+',
    category: 'snacks',
    categoryLabel: 'Snack / Lácteo',
    prepTimeMinutes: 2,
    difficulty: 'Fácil',
    portions: '1 porción',
    texture: 'Cubitos pequeños o tiritas de queso bajo en sal.',
    imageUrl: 'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?auto=format&fit=crop&w=800&q=80',
    summary: 'Aporte de calcio y grasa láctea para bebés de 1 año. Siempre verificar pasteurización y bajo contenido de sodio.',
    ingredients: [
      { item: 'Queso fresco pasteurizado bajo en sodio (tipo Burgos o Ricotta firme)', amount: '30g', category: 'lacteos_grasas' }
    ],
    steps: [
      'Verifica en la etiqueta que sea 100% elaborado con leche pasteurizada.',
      'Corta en cubitos pequeños de 1 cm o tiritas fáciles de pinzar con los dedos.',
      'Sirve como complemento de la merienda o desayuno.'
    ],
    shoppingList: ['Queso fresco pasteurizado bajo en sal'],
    tips: ['Nunca ofrecer quesos de leche cruda o no pasteurizada por riesgo bacteriano.'],
    nutritionHighlights: ['Calcio biodisponible', 'Proteína láctea', 'Vitamina D'],
    allergenAlert: 'Lácteos (introducir con cuidado a partir de 12m)',
    blwFriendly: true,
    conservation: 'Consumir fresco de la nevera. No congelar.'
  },

  // ==========================================
  // --- 4. COMIDAS FAMILIARES Y GUISOS (10M+) ---
  // ==========================================
  {
    id: 'rec-arroz-frijol-pollo',
    title: 'Arroz integral con frijoles y pollo desmenuzado',
    stageMonths: 10,
    ageLabel: '10 meses+',
    category: 'comidas',
    categoryLabel: 'Almuerzo completo',
    prepTimeMinutes: 30,
    difficulty: 'Fácil',
    portions: '2 porciones',
    texture: 'Plato combinado de texturas adaptadas: arroz meloso, frijol machacado y pollo en hebras suaves.',
    imageUrl: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80',
    summary: 'El plato tradicional latinoamericano adaptado nutricionalmente: proteína completa vegetal + animal + carbohidrato.',
    ingredients: [
      { item: 'Arroz integral cocido blando', amount: '2 cucharadas colmadas', category: 'cereales' },
      { item: 'Frijoles cocidos sin sal', amount: '2 cucharadas', category: 'proteinas' },
      { item: 'Pollo desmenuzado jugoso', amount: '2 cucharadas', category: 'proteinas' },
      { item: 'Aceite de oliva virgen extra', amount: '1 cucharadita', category: 'lacteos_grasas' }
    ],
    steps: [
      'Cocina los tres elementos por separado asegurando que queden muy tiernos.',
      'Aplasta ligeramente los frijoles con el tenedor.',
      'Sirve en secciones o mezclado según la preferencia del bebé y rocía con el aceite de oliva.'
    ],
    shoppingList: ['Arroz integral', 'Frijoles cocidos', 'Pechuga o muslo de pollo'],
    tips: ['Es el puente perfecto hacia la comida familiar compartida en la mesa.'],
    nutritionHighlights: ['Perfil de aminoácidos completo', 'Hierro hemo y no hemo', 'Energía sostenida'],
    allergenAlert: 'Legumbres',
    blwFriendly: true,
    conservation: 'Congelador: 3 meses en porciones. Refrigerador: 48 horas.'
  },
  {
    id: 'rec-polenta-carne-verduras',
    title: 'Polenta suave de maíz con carne molida y verduras',
    stageMonths: 10,
    ageLabel: '10 meses+',
    category: 'comidas',
    categoryLabel: 'Almuerzo / Cena',
    prepTimeMinutes: 20,
    difficulty: 'Fácil',
    portions: '2 porciones',
    texture: 'Cremosa y espesa, fácil de tomar con cuchara o con la mano.',
    imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    summary: 'Harina de maíz cremosa cocinada con carne molida suave y hortalizas dulces.',
    ingredients: [
      { item: 'Polenta de maíz precocida', amount: '3 cucharadas', category: 'cereales' },
      { item: 'Agua o caldo casero sin sal', amount: '1 taza', category: 'otros' },
      { item: 'Carne molida cocida sin sal', amount: '2 cucharadas', category: 'proteinas' },
      { item: 'Zanahoria o calabaza triturada', amount: '2 cucharadas', category: 'frutas_verduras' }
    ],
    steps: [
      'Hierve el caldo y vierte la polenta en lluvia batiendo con un batidor de mano para evitar grumos.',
      'Cocina a fuego lento durante 3-5 minutos hasta que esté muy cremosa.',
      'Incorpora la carne molida cocida y la verdura triturada, mezclando bien.'
    ],
    shoppingList: ['Polenta de maíz', 'Carne magra molida', 'Zanahoria fresca'],
    tips: ['Si se deja enfriar en una bandeja, se puede cortar en bastoncitos firmes para BLW.'],
    nutritionHighlights: ['Sin gluten', 'Hierro', 'Fácil digestión'],
    allergenAlert: 'Maíz',
    blwFriendly: true,
    conservation: 'Refrigerador: 48 horas. Congelador: 2 meses.'
  },
  {
    id: 'rec-cuscuz-maiz',
    title: 'Cuscuz de maíz hidratado / Arepa blanda',
    stageMonths: 10,
    ageLabel: '10 meses+',
    category: 'desayunos',
    categoryLabel: 'Desayuno tradicional',
    prepTimeMinutes: 15,
    difficulty: 'Fácil',
    portions: '2 porciones',
    texture: 'Masa de maíz esponjosa y tierna que no se desmorona en migajas secas.',
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    summary: 'Alimento básico de maíz precocido hidratado. Textura blanda y esponjosa muy agradable al paladar.',
    ingredients: [
      { item: 'Harina de maíz precocida (tipo cuscuz o arepa)', amount: '3 cucharadas', category: 'cereales' },
      { item: 'Agua filtrada para hidratar', amount: 'Cantidad necesaria', category: 'otros' }
    ],
    steps: [
      'Humedece la harina de maíz con agua hasta que quede húmeda pero suelta.',
      'Deja reposar 5 minutos para que absorba el agua.',
      'Cocina al vapor en cuscusera o en una vaporera durante 10 minutos hasta que esté tierno.',
      'Corta en bastones grandes y blandos para el agarre del bebé.'
    ],
    shoppingList: ['Harina de maíz precocida sin sal añadida'],
    tips: ['Puedes acompañarlo con aguacate machacado o un toque de queso fresco pasteurizado a partir de los 12m.'],
    nutritionHighlights: ['Energía limpia', 'Carbohidratos complejos', 'Fibra'],
    allergenAlert: 'Maíz',
    blwFriendly: true,
    conservation: 'Refrigerador: 48 horas. Congelador: 2 meses.'
  },
  {
    id: 'rec-sopa-verduras-fideos',
    title: 'Sopa casera de verduras con fideos pequeños',
    stageMonths: 11,
    ageLabel: '11 meses+',
    category: 'cenas',
    categoryLabel: 'Cena reconfortante',
    prepTimeMinutes: 20,
    difficulty: 'Fácil',
    portions: '2 porciones',
    texture: 'Caldo espeso con fideos estrellita o cabello de ángel cortado y cubitos muy tiernos de verdura.',
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    summary: 'Ideal para las noches. Hidrata, reconforta y permite al bebé practicar la cuchara con tropezones blandos.',
    ingredients: [
      { item: 'Caldo de verduras casero sin sal', amount: '1/2 taza', category: 'otros' },
      { item: 'Fideos pequeños (estrellitas o cabello de ángel)', amount: '2 cucharadas', category: 'cereales' },
      { item: 'Verduras blandas en cubitos (zanahoria, calabacín, papa)', amount: '3 cucharadas', category: 'frutas_verduras' }
    ],
    steps: [
      'Lleva el caldo casero a ebullición.',
      'Añade los fideos pequeños y las verduras en daditos.',
      'Cocina durante 7-8 minutos hasta que la pasta esté bien tierna y pasada.',
      'Deja templar antes de ofrecer.'
    ],
    shoppingList: ['Pasta pequeña de sopa (estrellitas)', 'Verduras frescas para caldo casero'],
    tips: ['Nunca uses cubitos de caldo industrial concentrado por su altísimo contenido de sodio y glutamato.'],
    nutritionHighlights: ['Hidratación nocturna', 'Vitaminas hidrosolubles', 'Fácil digestión'],
    allergenAlert: 'Gluten / Trigo',
    blwFriendly: false,
    conservation: 'Refrigerador: 48 horas. Congelar el caldo antes de añadir la pasta.'
  },
  {
    id: 'rec-pastas-salsa-natural',
    title: 'Pastas pequeñas con salsa natural de tomate y albahaca',
    stageMonths: 11,
    ageLabel: '11 meses+',
    category: 'comidas',
    categoryLabel: 'Almuerzo italiano bebé',
    prepTimeMinutes: 20,
    difficulty: 'Fácil',
    portions: '2 porciones',
    texture: 'Coditos o espirales cocidos blandos con salsa espesa y suave.',
    imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281561?auto=format&fit=crop&w=800&q=80',
    summary: 'Salsa casera de tomates maduros cocinados sin azúcar ni sal, aromatizada con una hoja de albahaca fresca.',
    ingredients: [
      { item: 'Pasta pequeña (coditos, estrellitas o macarrones tiernos)', amount: '1/2 taza cocida', category: 'cereales' },
      { item: 'Salsa casera de tomate natural (sin sal ni azúcar)', amount: '2 cucharadas', category: 'frutas_verduras' },
      { item: 'Aceite de oliva virgen extra', amount: '1 cucharadita', category: 'lacteos_grasas' }
    ],
    steps: [
      'Cocina los tomates maduros pelados a fuego lento con una gota de aceite de oliva hasta que se deshagan en salsa.',
      'Hierve la pasta hasta que esté bien tierna (más allá de "al dente" para seguridad infantil).',
      'Mezcla la pasta con la salsa y el aceite de oliva.'
    ],
    shoppingList: ['Tomates maduros tipo pera', 'Pasta pequeña de trigo', 'Albahaca fresca'],
    tips: ['El licopeno del tomate se absorbe mucho mejor cuando se cocina con una grasa buena como el aceite de oliva.'],
    nutritionHighlights: ['Licopeno antioxidante', 'Energía', 'Vitamina C'],
    allergenAlert: 'Gluten / Tomate (posible acidez leve alrededor de la boca)',
    blwFriendly: true,
    conservation: 'Salsa: congelador 3 meses. Mezclado: refrigerador 24-48 horas.'
  },
  {
    id: 'rec-estofado-pollo-verduras',
    title: 'Estofado tierno de pollo con papas y zanahoria',
    stageMonths: 12,
    ageLabel: '12 meses+',
    category: 'comidas',
    categoryLabel: 'Almuerzo familiar',
    prepTimeMinutes: 30,
    difficulty: 'Fácil',
    portions: '2 porciones',
    texture: 'Guiso jugoso con trozos blandos que se aplastan con la lengua.',
    imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
    summary: 'Plato reconfortante para compartir con toda la familia adaptando la versión del bebé sin sal añadida.',
    ingredients: [
      { item: 'Pechuga o muslo de pollo en trocitos muy tiernos', amount: '1/2 unidad', category: 'proteinas' },
      { item: 'Verduras blandas (papa, zanahoria y calabacín en dados)', amount: '1/2 taza', category: 'frutas_verduras' },
      { item: 'Aceite vegetal o de oliva', amount: '1 cdita', category: 'lacteos_grasas' },
      { item: 'Caldo casero sin sal', amount: '1/2 taza', category: 'otros' }
    ],
    steps: [
      'Dora ligeramente el pollo con el aceite en una cazuelita.',
      'Añade las verduras cortadas en cubitos pequeños y cubre con el caldo casero.',
      'Cocina a fuego lento durante 20 minutos hasta que todo esté tierno y meloso.',
      'Sirve tibio asegurando que los trozos no queden secos.'
    ],
    shoppingList: ['Pollo fresco', 'Papas', 'Zanahorias', 'Calabacines'],
    tips: ['Separa la porción del bebé antes de añadir sal para los adultos.'],
    nutritionHighlights: ['Proteínas completas', 'Vitaminas múltiples', 'Minerales'],
    allergenAlert: 'Ninguno',
    blwFriendly: true,
    conservation: 'Refrigerador: 48 horas. Congelador: 2 meses.'
  },
  {
    id: 'rec-tortilla-maiz-aguacate',
    title: 'Tiras de tortilla de maíz con aguacate machacado',
    stageMonths: 12,
    ageLabel: '12 meses+',
    category: 'cenas',
    categoryLabel: 'Cena rápida y nutritiva',
    prepTimeMinutes: 5,
    difficulty: 'Fácil',
    portions: '1 porción',
    texture: 'Tortilla blanda y flexible con capa untada de aguacate cremoso.',
    imageUrl: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    summary: 'Cena rápida, deliciosa y cargada de grasas monoinsaturadas cardiosaludables.',
    ingredients: [
      { item: 'Tortilla de maíz suave y fresca (sin freír ni tostar)', amount: '1 unidad', category: 'cereales' },
      { item: 'Aguacate maduro machacado con tenedor', amount: '2 cucharadas', category: 'frutas_verduras' }
    ],
    steps: [
      'Calienta la tortilla en una sartén sin aceite durante unos segundos hasta que esté bien suave y flexible (nunca tostada ni crujiente).',
      'Unta el aguacate machacado sobre la tortilla.',
      'Corta en tiras longitudinales de 2 cm de ancho para facilitar el agarre del bebé.'
    ],
    shoppingList: ['Tortillas de maíz suaves de calidad', 'Aguacate / palta madura'],
    tips: ['No dejar dorar ni tostar la tortilla, debe permanecer tierna y doblable.'],
    nutritionHighlights: ['Ácidos grasos esenciales (omega 9)', 'Calorías saludables', 'Fibra'],
    allergenAlert: 'Maíz',
    blwFriendly: true,
    conservation: 'Consumir al momento para evitar que el aguacate se oxide.'
  },
  {
    id: 'rec-pure-rustico-papa-lentejas-carne',
    title: 'Puré rústico de papa, lentejas y carne deshebrada',
    stageMonths: 10,
    ageLabel: '10 meses+',
    category: 'comidas',
    categoryLabel: 'Almuerzo supernutritivo',
    prepTimeMinutes: 25,
    difficulty: 'Fácil',
    portions: '2 porciones',
    texture: 'Textura rústica con pequeños tropezones blandos que estimulan la masticación.',
    imageUrl: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80',
    summary: 'Combinación triple de energía, proteína vegetal y hierro animal para máxima vitalidad.',
    ingredients: [
      { item: 'Papa cocida machacada', amount: '1/2 unidad', category: 'frutas_verduras' },
      { item: 'Lentejas cocidas sin sal', amount: '2 cucharadas', category: 'proteinas' },
      { item: 'Carne de res deshebrada fina y tierna', amount: '2 cucharadas', category: 'proteinas' },
      { item: 'Caldo de cocción o aceite de oliva', amount: '1 cucharada', category: 'lacteos_grasas' }
    ],
    steps: [
      'Cocina los tres ingredientes hasta que estén muy tiernos.',
      'Machaca la papa y las lentejas con un tenedor.',
      'Incorpora la carne deshebrada finita y mezcla con el caldo o aceite de oliva para obtener textura rústica jugosa.'
    ],
    shoppingList: ['Papas', 'Lentejas', 'Carne magra de res'],
    tips: ['La textura semimolida con grumos blandos es fundamental para el desarrollo del habla y la musculatura orofacial.'],
    nutritionHighlights: ['Hierro duplicado', 'Fibra', 'Proteínas completas'],
    allergenAlert: 'Legumbres',
    blwFriendly: false,
    conservation: 'Congelador: 3 meses. Refrigerador: 48 horas.'
  },

  // ==========================================
  // --- 5. SNACKS, POSTRES Y REPOSTERÍA SANA ---
  // ==========================================
  {
    id: 'rec-yogur-fruta',
    title: 'Yogur natural entero con compota de fruta madura',
    stageMonths: 12,
    ageLabel: '12 meses+',
    category: 'snacks',
    categoryLabel: 'Merienda saludable',
    prepTimeMinutes: 5,
    difficulty: 'Fácil',
    portions: '1 porción',
    texture: 'Cremoso con pulpa de fruta suave.',
    imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
    summary: 'Probióticos naturales para la flora intestinal combinados con el dulzor natural de la fruta.',
    ingredients: [
      { item: 'Yogur natural pasteurizado entero sin azúcar añadida', amount: '1/2 taza (100g)', category: 'lacteos_grasas' },
      { item: 'Fruta madura triturada (pera, manzana cocida, plátano o papaya)', amount: '2 cucharadas', category: 'frutas_verduras' }
    ],
    steps: [
      'Coloca el yogur natural sin azúcar en un cuenco.',
      'Tritura la fruta fresca o cocida con tenedor.',
      'Mezcla suavemente creando un efecto marmoleado y sirve fresco.'
    ],
    shoppingList: ['Yogur natural entero sin azúcar (ingredientes: leche y fermentos lácticos)', 'Fruta de temporada'],
    tips: ['Revisa la lista de ingredientes del yogur: solo debe contener leche entera pasteurizada y fermentos lácticos vivos.'],
    nutritionHighlights: ['Calcio y fósforo', 'Probióticos vivos', 'Grasas lácteas para mielinización'],
    allergenAlert: 'Proteína de leche / Lactosa',
    blwFriendly: false,
    conservation: 'Consumir recién preparado. No congelar.'
  },
  {
    id: 'rec-galletas-avena-platano',
    title: 'Galletas caseras de avena y plátano (sin azúcar, sin miel)',
    stageMonths: 12,
    ageLabel: '12 meses+',
    category: 'snacks',
    categoryLabel: 'Snack horneado sano',
    prepTimeMinutes: 25,
    difficulty: 'Fácil',
    portions: '6 a 8 galletitas',
    texture: 'Textura suave y húmeda por dentro, fácil de romper con los deditos.',
    imageUrl: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80',
    summary: 'Solo 2 ingredientes naturales. El snack perfecto para paseos y meriendas sin conservantes.',
    ingredients: [
      { item: 'Plátano maduro con motitas negras triturado', amount: '1 unidad grande', category: 'frutas_verduras' },
      { item: 'Avena en hojuelas suaves', amount: '4 cucharadas colmadas', category: 'cereales' },
      { item: 'Canela en polvo suave (opcional)', amount: 'Pizca', category: 'otros' }
    ],
    steps: [
      'Precalienta el horno a 180°C.',
      'Machaca el plátano hasta que quede como puré líquido.',
      'Añade la avena y mezcla hasta formar una masa húmeda manejable.',
      'Forma bolitas con una cuchara, aplástalas sobre papel de horno formando galletitas redondas.',
      'Hornea durante 15-18 minutos hasta que la base esté dorada y firme pero tierna.'
    ],
    shoppingList: ['Plátanos maduros', 'Avena en hojuelas suaves'],
    tips: ['Al enfriar quedan tiernas por dentro. Son ideales para llevar en la pañalera.'],
    nutritionHighlights: ['Fibra saciante', 'Energía natural limpia', 'Cero azúcar refinada'],
    allergenAlert: 'Avena / Gluten',
    blwFriendly: true,
    conservation: 'En recipiente hermético en refri: 3-4 días. Congelador: hasta 2 meses.'
  },
  {
    id: 'rec-mini-arepitas',
    title: 'Mini arepitas / tortillitas de maíz suaves',
    stageMonths: 12,
    ageLabel: '12 meses+',
    category: 'desayunos',
    categoryLabel: 'Desayuno / Merienda',
    prepTimeMinutes: 15,
    difficulty: 'Fácil',
    portions: '4 mini arepitas',
    texture: 'Suaves y húmedas por dentro, doradas ligeramente por fuera sin costra dura.',
    imageUrl: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    summary: 'Ricas arepitas infantiles cocinadas a la plancha sin grasa añadida ni sal.',
    ingredients: [
      { item: 'Harina de maíz precocida blanca o amarilla', amount: '3 cucharadas', category: 'cereales' },
      { item: 'Agua filtrada tibia', amount: 'Cantidad necesaria para amasar', category: 'otros' }
    ],
    steps: [
      'Mezcla la harina con el agua tibia hasta obtener una masa elástica y no pegajosa.',
      'Forma bolitas pequeñas y aplástalas con las palmas de las manos (grosor de 1 cm).',
      'Cocina en una sartén antiadherente a fuego bajo tapada durante 4-5 minutos por cada lado.',
      'Abre por la mitad y rellena con aguacate o pollo deshebrado.'
    ],
    shoppingList: ['Harina de maíz precocida'],
    tips: ['Cocinar a fuego bajo con la sartén tapada asegura que el interior quede sumamente tierno y húmedo.'],
    nutritionHighlights: ['Sin gluten', 'Energía de liberación lenta', 'Aceptación excelente'],
    allergenAlert: 'Maíz',
    blwFriendly: true,
    conservation: 'Refrigerador: 48 horas. Congelador: 2 meses.'
  },
  {
    id: 'rec-pudin-chia-fruta',
    title: 'Pudín de chía con leche y fruta madura triturada',
    stageMonths: 18,
    ageLabel: '18 meses+',
    category: 'snacks',
    categoryLabel: 'Snack / Postre',
    prepTimeMinutes: 10,
    difficulty: 'Fácil',
    portions: '2 porciones',
    texture: 'Gelatina suave y perlada con frutas dulces.',
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    summary: 'Riquísimo en omega-3 vegetal, calcio y fibra. Las semillas de chía hidratadas forman un mucílago gelificado protector.',
    ingredients: [
      { item: 'Semillas de chía', amount: '2 cucharadas', category: 'otros' },
      { item: 'Leche entera pasteurizada, materna o vegetal enriquecida', amount: '1/2 taza', category: 'lacteos_grasas' },
      { item: 'Fruta madura triturada (fresa, mango o plátano)', amount: '2 cucharadas', category: 'frutas_verduras' }
    ],
    steps: [
      'En un frasquito de vidrio mezcla la leche con las semillas de chía.',
      'Revuelve bien y deja reposar en la nevera durante al menos 4 horas (o toda la noche) para que gelifiquen por completo.',
      'Añade la fruta fresca triturada por encima justo antes de servir.'
    ],
    shoppingList: ['Semillas de chía', 'Leche entera o vegetal de avena sin azúcar', 'Fruta fresca'],
    tips: ['Asegúrate de que la chía esté 100% hidratada y gelatinosa antes de ofrecer.'],
    nutritionHighlights: ['Omega-3 (ácido alfa-linolénico)', 'Calcio y magnesio', 'Fibra soluble'],
    allergenAlert: 'Semillas / Lácteos',
    blwFriendly: false,
    conservation: 'Refrigerador: 3 días. No congelar.'
  },

  // ==========================================
  // --- 6. PLATITOS CREATIVOS (LÚDICOS) ------
  // ==========================================
  {
    id: 'rec-platito-sol-calabaza',
    title: 'Platito Lúdico: Sol de Calabaza y Maíz',
    stageMonths: 10,
    ageLabel: '10 meses+',
    category: 'creativos',
    categoryLabel: 'Platito Creativo',
    prepTimeMinutes: 15,
    difficulty: 'Fácil',
    portions: '1 plato',
    texture: 'Círculo de puré aterciopelado con rayos de maíz tierno y detalles de queso.',
    imageUrl: '/images/plate_sun_puree_1787455025736.jpg',
    summary: 'Divertido diseño en forma de sol sonriente que despierta el apetito y la curiosidad visual del bebé.',
    ingredients: [
      { item: 'Calabaza cocida al vapor machacada', amount: '1/2 taza', category: 'frutas_verduras' },
      { item: 'Granos de maíz dulce bien cocidos (o tiras de zanahoria)', amount: '2 cucharadas', category: 'frutas_verduras' },
      { item: 'Queso fresco rallado o dos pasitas trituradas para los ojos', amount: '1 cucharadita', category: 'lacteos_grasas' }
    ],
    steps: [
      'Coloca el puré de calabaza en el centro del plato formando un círculo perfecto con una cuchara.',
      'Distribuye los granos de maíz o tiritas de zanahoria alrededor del círculo simulando los rayos del sol.',
      'Dibuja una carita sonriente con dos puntitos de puré oscuro y queso rallado.'
    ],
    shoppingList: ['Calabaza fresca', 'Zanahoria o maíz dulce', 'Queso fresco pasteurizado'],
    tips: ['La presentación divertida ayuda a los bebés que atraviesan etapas de inapetencia o selectividad.'],
    nutritionHighlights: ['Vitamina A', 'Antioxidantes', 'Estimulación visual y sensorial'],
    allergenAlert: 'Lácteos (opcional)',
    blwFriendly: true,
    conservation: 'Consumir fresco recién montado.'
  },
  {
    id: 'rec-platito-osito-platano',
    title: 'Platito Lúdico: Osito de Plátano y Avena',
    stageMonths: 10,
    ageLabel: '10 meses+',
    category: 'creativos',
    categoryLabel: 'Platito Creativo',
    prepTimeMinutes: 12,
    difficulty: 'Fácil',
    portions: '1 plato',
    texture: 'Panquequito tierno con rodajas de fruta fresca.',
    imageUrl: '/images/plate_bear_pancake_1787455014706.jpg',
    summary: 'Un adorable osito hecho con panqueque de avena y fruta. ¡Amor a primer bocado!',
    ingredients: [
      { item: 'Panqueque suave de avena y plátano (sin azúcar)', amount: '1 grande y 2 pequeños', category: 'cereales' },
      { item: 'Plátano maduro en rodajas', amount: '1/2 unidad', category: 'frutas_verduras' },
      { item: 'Arándanos cortados en cuartos seguros', amount: '3 unidades', category: 'frutas_verduras' }
    ],
    steps: [
      'Coloca el panqueque grande como la carita del oso en el plato.',
      'Usa dos panquequitos o rodajas de plátano como las orejitas.',
      'Coloca una rodaja de plátano en el centro para el hocico y corona con los cuartos de arándano para formar los ojitos y la nariz.'
    ],
    shoppingList: ['Avena', 'Plátanos maduros', 'Arándanos frescos'],
    tips: ['Corta siempre los arándanos en 4 partes longitudinales para evitar riesgo de asfixia.'],
    nutritionHighlights: ['Energía duradera', 'Antioxidantes', 'Desarrollo de autonomía'],
    allergenAlert: 'Avena',
    blwFriendly: true,
    conservation: 'Consumir al momento.'
  },
  {
    id: 'rec-platito-pecesito-camote',
    title: 'Platito Lúdico: Pecesito de Camote y Lentejas',
    stageMonths: 10,
    ageLabel: '10 meses+',
    category: 'creativos',
    categoryLabel: 'Platito Creativo',
    prepTimeMinutes: 15,
    difficulty: 'Fácil',
    portions: '1 plato',
    texture: 'Puré de camote moldeado con aletas de verdura y burbujas de legumbre.',
    imageUrl: '/images/plate_fish_sweetpotato_1787455105111.jpg',
    summary: 'Aventura marina en el plato del bebé combinando carbohidratos saludables y hierro vegetal.',
    ingredients: [
      { item: 'Puré de camote / boniato bien cocido', amount: '1/2 taza', category: 'frutas_verduras' },
      { item: 'Croquetitas blandas de lentejas o hamburguesita', amount: '1 unidad', category: 'proteinas' },
      { item: 'Tiras finas de zanahoria cocida y calabacín para aletas', amount: '2 cucharadas', category: 'frutas_verduras' }
    ],
    steps: [
      'Moldea el puré de camote en forma ovalada simulando el cuerpo del pez.',
      'Coloca las tiras de zanahoria cocida como la cola y las aletas superior e inferior.',
      'Dibuja pequeñas escamas con una cucharilla y haz burbujitas con rodajitas de calabacín tierno en el plato.'
    ],
    shoppingList: ['Camote', 'Lentejas', 'Zanahoria', 'Calabacín'],
    tips: ['Convierte el almuerzo en un momento de juego y conexión positiva con los alimentos.'],
    nutritionHighlights: ['Hierro vegetal', 'Betacarotenos', 'Fibra'],
    allergenAlert: 'Legumbres',
    blwFriendly: true,
    conservation: 'Consumir de inmediato.'
  },
  {
    id: 'rec-platito-flor-frutilla',
    title: 'Platito Lúdico: Flor de Fresa y Yogur Natural',
    stageMonths: 12,
    ageLabel: '12 meses+',
    category: 'creativos',
    categoryLabel: 'Platito Creativo',
    prepTimeMinutes: 10,
    difficulty: 'Fácil',
    portions: '1 plato',
    texture: 'Centro cremoso de yogur rodeado de pétalos suaves de fresa y aguacate.',
    imageUrl: '/images/plate_fruit_flower_1787455051493.jpg',
    summary: 'Un jardín en el plato para celebrar la merienda con fresas maduras, calcio y grasas saludables.',
    ingredients: [
      { item: 'Fresas / frutillas maduras cortadas en rodajas finas', amount: '3 a 4 unidades', category: 'frutas_verduras' },
      { item: 'Yogur natural entero pasteurizado', amount: '3 cucharadas', category: 'lacteos_grasas' },
      { item: 'Rodajitas de aguacate / palta para el tallo y hojas', amount: '2 tiritas', category: 'frutas_verduras' }
    ],
    steps: [
      'Coloca 3 cucharadas de yogur en el centro del plato formando el núcleo circular de la flor.',
      'Acomoda las rodajitas de fresa alrededor del yogur formando los pétalos.',
      'Usa una tirita de aguacate como el tallo verde y dos medias lunas como hojas.'
    ],
    shoppingList: ['Fresas maduras', 'Yogur natural entero sin azúcar', 'Aguacate'],
    tips: ['Lavar y desinfectar muy bien las fresas antes de cortar.'],
    nutritionHighlights: ['Calcio', 'Vitamina C potente', 'Grasas saludables'],
    allergenAlert: 'Lácteos / Fresa',
    blwFriendly: true,
    conservation: 'Consumir fresco.'
  },
  {
    id: 'rec-platito-conejito-huevo',
    title: 'Platito Lúdico: Conejito de Huevo y Espinaca',
    stageMonths: 10,
    ageLabel: '10 meses+',
    category: 'creativos',
    categoryLabel: 'Platito Creativo',
    prepTimeMinutes: 15,
    difficulty: 'Fácil',
    portions: '1 plato',
    texture: 'Huevo cocido tierno sobre cama de espinaca con bigotes crujientes de zanahoria cocida.',
    imageUrl: '/images/plate_egg_bunny_1787455038404.jpg',
    summary: 'Proteína de la más alta calidad biológica en una presentación tierna y muy apetecible.',
    ingredients: [
      { item: 'Huevo duro completamente cocido', amount: '1 unidad', category: 'proteinas' },
      { item: 'Espinaca o calabacín cocido al vapor para la base verde', amount: '2 cucharadas', category: 'frutas_verduras' },
      { item: 'Zanahoria cocida en tiritas finas para los bigotes y orejitas', amount: '1 trocito', category: 'frutas_verduras' }
    ],
    steps: [
      'Corta el huevo duro por la mitad longitudinal: una mitad será el cuerpo y un tercio será la cabeza.',
      'Corta tiritas de huevo o zanahoria cocida para formar las largas orejas de conejo.',
      'Coloca sobre la camita verde de verduras y añade tiritas finas de zanahoria para los bigotes.'
    ],
    shoppingList: ['Huevos frescos de calidad', 'Espinaca tierna', 'Zanahoria'],
    tips: ['Asegúrate de que la yema y la clara del huevo estén 100% cuajadas y cocinadas.'],
    nutritionHighlights: ['Colina para el desarrollo cerebral', 'Proteína completa', 'Hierro y luteína'],
    allergenAlert: 'Huevo (introducir según regla de 3 días)',
    blwFriendly: true,
    conservation: 'Consumir recién preparado.'
  }
];

const mappedToddlerRecipes: Recipe[] = BONUS_RECIPES_DATABASE.map(r => {
  const is12 = r.book === '12-18m';
  const stage = is12 ? 12 : 18;
  const ageLabel = is12 ? '12 a 18 meses' : '18 a 24 meses';
  let cat: MealCategory = 'comidas';
  if (r.category === 'desayunos') cat = 'desayunos';
  else if (r.category === 'snacks_meriendas') cat = 'snacks';
  else cat = 'comidas';

  const timeNum = parseInt(r.prepTime) || 15;

  return {
    id: `rec-toddler-${r.id}`,
    title: r.title,
    stageMonths: stage,
    ageLabel: ageLabel,
    category: cat,
    categoryLabel: r.categoryLabel,
    prepTimeMinutes: timeNum,
    difficulty: 'Fácil',
    portions: r.yields || '1 a 2 porciones',
    texture: is12 ? 'Trocitos blandos, machacado o finger food' : 'Trozos pequeños y textura familiar',
    imageUrl: r.image || '',
    summary: `${r.categoryLabel} nutritivo para la etapa de ${ageLabel}.`,
    ingredients: r.ingredients.map(ing => ({
      item: ing,
      amount: ''
    })),
    steps: r.steps,
    shoppingList: r.ingredients,
    tips: r.tips || [],
    nutritionHighlights: r.benefits || ['Nutrientes esenciales', 'Energía saludable', 'Vitaminas y minerales'],
    allergenAlert: r.allergenNote || 'Revisar según introducción previa',
    blwFriendly: true,
    conservation: 'Refrigerar hasta 48h o congelar en porciones.'
  };
});

export const RECIPES_DATA: Recipe[] = [...BASE_RECIPES_DATA, ...mappedToddlerRecipes];

