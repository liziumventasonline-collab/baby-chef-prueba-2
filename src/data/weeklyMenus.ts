import { WeeklyMealPlan } from '../types';
import { MENUS_6_TO_11 } from './menus/menusMonth6to11';
import { MENUS_12_TO_18 } from './menus/menusMonth12to18';
import { MENUS_19_TO_24 } from './menus/menusMonth19to24';

export const WEEKLY_MENUS_DATA: WeeklyMealPlan[] = [
  ...MENUS_6_TO_11,
  ...MENUS_12_TO_18,
  ...MENUS_19_TO_24
];
