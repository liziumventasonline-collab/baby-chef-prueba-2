import { BabyProfile, GrowthRecord } from '../types';

/**
 * Calculates baby's age in completed months and remaining days from birthdate.
 */
export function calculateBabyAge(birthDateString: string): {
  months: number;
  days: number;
  displayText: string;
  shortText: string;
} {
  if (!birthDateString) {
    return { months: 6, days: 0, displayText: '6 meses', shortText: '6m' };
  }

  const birthDate = new Date(birthDateString);
  const today = new Date();

  if (isNaN(birthDate.getTime())) {
    return { months: 6, days: 0, displayText: '6 meses', shortText: '6m' };
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months -= 1;
    // get days in previous month
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const totalMonths = Math.max(0, years * 12 + months);

  let displayText = '';
  if (totalMonths === 0) {
    displayText = `${days} días`;
  } else if (days === 0) {
    displayText = totalMonths === 1 ? '1 mes' : `${totalMonths} meses`;
  } else {
    displayText = `${totalMonths} ${totalMonths === 1 ? 'mes' : 'meses'} y ${days} ${days === 1 ? 'día' : 'días'}`;
  }

  const shortText = totalMonths === 0 ? `${days}d` : `${totalMonths}m`;

  return {
    months: totalMonths,
    days,
    displayText,
    shortText
  };
}

/**
 * Format a standard ISO date (YYYY-MM-DD) to friendly Spanish format
 */
export function formatDateSpanish(dateString: string): string {
  if (!dateString) return '';
  const [year, month, day] = dateString.split('-');
  if (!year || !month || !day) return dateString;
  const months = [
    'ene', 'feb', 'mar', 'abr', 'may', 'jun',
    'jul', 'ago', 'sep', 'oct', 'nov', 'dic'
  ];
  const mIndex = parseInt(month, 10) - 1;
  return `${parseInt(day, 10)} de ${months[mIndex] || ''} de ${year}`;
}

/**
 * Returns stage index corresponding to months (clamped 6 to 12)
 */
export function getRecommendedStageMonth(babyMonths: number): number {
  if (babyMonths < 6) return 6;
  if (babyMonths > 12) return 12;
  return babyMonths;
}

export const DEFAULT_BABY_PROFILE: BabyProfile = {
  id: 'baby-primary',
  name: 'Mateo',
  birthDate: '2026-02-15', // exactly ~6 months before Aug 2026
  birthWeight: 3.25,
  birthHeight: 50,
  gender: 'boy',
  allergies: [],
  hasCompletedOnboarding: false
};

export const DEFAULT_GROWTH_RECORDS: GrowthRecord[] = [
  {
    id: 'g-initial',
    date: '2026-02-15',
    ageMonths: 0,
    weightKg: 3.25,
    heightCm: 50,
    headCircumferenceCm: 35,
    notes: 'Registro inicial de nacimiento'
  }
];
