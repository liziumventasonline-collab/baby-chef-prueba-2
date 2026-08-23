export interface BabyProfile {
  id: string;
  name: string;
  birthDate: string; // YYYY-MM-DD
  birthWeight: number; // in kg e.g. 3.25
  birthHeight: number; // in cm e.g. 50
  gender?: 'boy' | 'girl' | 'unspecified';
  avatar?: string;
  allergies?: string[];
  hasCompletedOnboarding: boolean;
}

export interface GrowthRecord {
  id: string;
  date: string; // YYYY-MM-DD
  ageMonths: number;
  weightKg: number;
  heightCm: number;
  headCircumferenceCm?: number;
  notes?: string;
}

export type MealCategory = 'todas' | 'papillas' | 'comidas' | 'cenas' | 'desayunos' | 'blw' | 'snacks' | 'creativos';

export interface RecipeIngredient {
  item: string;
  amount: string;
  category?: 'frutas_verduras' | 'proteinas' | 'cereales' | 'lacteos_grasas' | 'otros';
}

export interface Recipe {
  id: string;
  title: string;
  stageMonths: number; // 6, 7, 8, 9, 10, 11, 12, 18
  ageLabel: string; // "6 meses+", "8 meses+", etc.
  category: MealCategory;
  categoryLabel: string;
  prepTimeMinutes: number;
  difficulty: 'Fácil' | 'Intermedio';
  portions: string;
  texture: string;
  imageUrl: string;
  summary: string;
  ingredients: RecipeIngredient[];
  steps: string[];
  shoppingList: string[];
  tips: string[];
  nutritionHighlights: string[];
  allergenAlert?: string;
  blwFriendly?: boolean;
  conservation?: {
    fridge?: string;
    freezer?: string;
  } | string;
}

export interface FoodCategoryInfo {
  category: string;
  icon: string;
  items: string[];
}

export interface PreparationGuide {
  title: string;
  desc: string;
  icon: string;
}

export interface FeedingStageInfo {
  month: number;
  label: string;
  title: string;
  subtitle: string;
  textureSummary: string;
  textureDetails: string;
  dailyFrequency: string;
  milkFeeding: string;
  allowedFoods: FoodCategoryInfo[];
  preparations: PreparationGuide[];
  recommendations: string[];
  importantWarnings: string[];
  keyMilestone: string;
  suitableRecipesCount?: number;
}

export type FoodStatus = 'untried' | 'trying' | 'accepted' | 'reaction';

export interface FoodTrackerItem {
  id: string;
  foodName: string;
  category: 'frutas' | 'verduras' | 'cereales' | 'proteinas' | 'grasas' | 'otros';
  categoryLabel: string;
  status: FoodStatus;
  dateTried?: string;
  notes?: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'guia' | 'pediatria' | 'primeros_auxilios' | 'blw' | 'alergias' | 'dental' | 'lenguaje' | 'estimulo';
  organization: string;
  url?: string;
  iconName: string;
  description: string;
  badge?: string;
  internalGuideId?: string; // Links to internal interactive manual
}

export interface ShoppingItem {
  id: string;
  name: string;
  amount?: string;
  category: string;
  checked: boolean;
  recipeSource?: string;
}

export interface DailyMealPlan {
  dayName: 'Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes' | 'Sábado' | 'Domingo';
  desayuno?: string;
  almuerzo: string;
  colacionTarde?: string;
  cena?: string;
  notas?: string;
}

export interface WeeklyMealPlan {
  month: number;
  week: number;
  title: string;
  subtitle?: string;
  summaryNotes?: string[];
  days: DailyMealPlan[];
}

export interface WeeklyShoppingList {
  month: number;
  week: number;
  items: { name: string; amount: string; category?: string }[];
}

export interface CreativePlate {
  id: string;
  title: string;
  ingredients: string[];
  assemblySteps: string[];
  benefit: string;
  imageUrl: string;
  ageLabel: string;
}

export interface PedagogicalGuide {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
  color: string;
  bgColor: string;
  badge: string;
  contentSections: {
    heading: string;
    subheading?: string;
    bodyText?: string;
    bulletPoints?: string[];
    calloutType?: 'info' | 'warning' | 'alert' | 'success' | 'quote';
    calloutText?: string;
    tableData?: {
      headers: string[];
      rows: string[][];
    };
    actionChecklist?: string[];
  }[];
}

export type TabType = 'inicio' | 'alimentacion' | 'recetas' | 'orientaciones' | 'perfil' | 'mas';
export type ExtendedViewType =
  | 'none'
  | 'favoritos'
  | 'recursos'
  | 'crecimiento'
  | 'compras'
  | 'probados'
  | 'calendario_semanal'
  | 'platitos_creativos'
  | 'orientaciones'
  | 'guia_detalle';
