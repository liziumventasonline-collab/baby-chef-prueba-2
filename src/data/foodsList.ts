import { FoodTrackerItem } from '../types';

export const DEFAULT_FOODS_LIST: FoodTrackerItem[] = [
  // Frutas
  { id: 'f-1', foodName: 'Plátano maduro', category: 'frutas', categoryLabel: 'Frutas', status: 'accepted', dateTried: '2026-08-01' },
  { id: 'f-2', foodName: 'Pera cocida', category: 'frutas', categoryLabel: 'Frutas', status: 'accepted', dateTried: '2026-08-04' },
  { id: 'f-3', foodName: 'Manzana asada', category: 'frutas', categoryLabel: 'Frutas', status: 'accepted', dateTried: '2026-08-07' },
  { id: 'f-4', foodName: 'Aguacate / Palta', category: 'frutas', categoryLabel: 'Frutas', status: 'accepted', dateTried: '2026-08-10' },
  { id: 'f-5', foodName: 'Papaya', category: 'frutas', categoryLabel: 'Frutas', status: 'untried' },
  { id: 'f-6', foodName: 'Mango maduro', category: 'frutas', categoryLabel: 'Frutas', status: 'untried' },
  { id: 'f-7', foodName: 'Fresas / Frutillas', category: 'frutas', categoryLabel: 'Frutas', status: 'untried' },
  { id: 'f-8', foodName: 'Arándanos aplastados', category: 'frutas', categoryLabel: 'Frutas', status: 'untried' },

  // Verduras
  { id: 'f-9', foodName: 'Calabacín / Zucchini', category: 'verduras', categoryLabel: 'Verduras', status: 'accepted', dateTried: '2026-08-02' },
  { id: 'f-10', foodName: 'Zanahoria cocida', category: 'verduras', categoryLabel: 'Verduras', status: 'accepted', dateTried: '2026-08-05' },
  { id: 'f-11', foodName: 'Calabaza / Zapallo', category: 'verduras', categoryLabel: 'Verduras', status: 'accepted', dateTried: '2026-08-08' },
  { id: 'f-12', foodName: 'Boniato / Camote', category: 'verduras', categoryLabel: 'Verduras', status: 'accepted', dateTried: '2026-08-11' },
  { id: 'f-13', foodName: 'Brócoli al vapor', category: 'verduras', categoryLabel: 'Verduras', status: 'trying', dateTried: '2026-08-18' },
  { id: 'f-14', foodName: 'Patata / Papa cocida', category: 'verduras', categoryLabel: 'Verduras', status: 'untried' },
  { id: 'f-15', foodName: 'Judías verdes / Ejotes', category: 'verduras', categoryLabel: 'Verduras', status: 'untried' },
  { id: 'f-16', foodName: 'Puerro suave', category: 'verduras', categoryLabel: 'Verduras', status: 'untried' },

  // Proteínas
  { id: 'f-17', foodName: 'Pechuga de pollo', category: 'proteinas', categoryLabel: 'Proteínas', status: 'accepted', dateTried: '2026-08-14' },
  { id: 'f-18', foodName: 'Carne de ternera magra', category: 'proteinas', categoryLabel: 'Proteínas', status: 'untried' },
  { id: 'f-19', foodName: 'Lentejas rojas', category: 'proteinas', categoryLabel: 'Proteínas', status: 'untried' },
  { id: 'f-20', foodName: 'Merluza (pescado blanco)', category: 'proteinas', categoryLabel: 'Proteínas', status: 'untried' },
  { id: 'f-21', foodName: 'Yema de huevo cocida', category: 'proteinas', categoryLabel: 'Proteínas', status: 'untried' },
  { id: 'f-22', foodName: 'Huevo entero cocido', category: 'proteinas', categoryLabel: 'Proteínas', status: 'untried' },
  { id: 'f-23', foodName: 'Salmón salvaje', category: 'proteinas', categoryLabel: 'Proteínas', status: 'untried' },
  { id: 'f-24', foodName: 'Garbanzos cocidos', category: 'proteinas', categoryLabel: 'Proteínas', status: 'untried' },

  // Cereales
  { id: 'f-25', foodName: 'Avena suave cocida', category: 'cereales', categoryLabel: 'Cereales', status: 'accepted', dateTried: '2026-08-12' },
  { id: 'f-26', foodName: 'Arroz blanco bien cocido', category: 'cereales', categoryLabel: 'Cereales', status: 'untried' },
  { id: 'f-27', foodName: 'Pasta de trigo / fideos', category: 'cereales', categoryLabel: 'Cereales', status: 'untried' },
  { id: 'f-28', foodName: 'Quinoa cocida', category: 'cereales', categoryLabel: 'Cereales', status: 'untried' },

  // Grasas & Otros
  { id: 'f-29', foodName: 'Aceite de oliva virgen extra', category: 'grasas', categoryLabel: 'Grasas', status: 'accepted', dateTried: '2026-08-01' },
  { id: 'f-30', foodName: 'Crema de cacahuete 100%', category: 'grasas', categoryLabel: 'Grasas', status: 'untried' }
];
