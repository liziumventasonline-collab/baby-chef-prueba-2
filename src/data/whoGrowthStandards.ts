export interface WHODataPoint {
  month: number;
  // Percentiles for chart and zones
  p3: number;
  p15: number;
  p50: number; // Mediana
  p85: number;
  p97: number;
  // Standard Deviations
  sdMinus3?: number;
  sdMinus2?: number;
  sd0?: number;
  sdPlus2?: number;
  sdPlus3?: number;
}

export type MetricType = 'weight' | 'height' | 'head';

export interface GrowthStatusInterpretation {
  status: 'normal' | 'alerta_bajo' | 'alerta_alto' | 'critico_bajo' | 'critico_alto';
  statusLabel: string;
  badgeColor: string;
  badgeBg: string;
  textColor: string;
  percentileApprox: string;
  explanation: string;
  recommendation: string;
}

// WHO Weight-for-Age (Peso para la Edad) - Boys (0-24 months) in kg
export const WHO_WEIGHT_BOYS: WHODataPoint[] = [
  { month: 0, p3: 2.5, p15: 2.9, p50: 3.3, p85: 3.9, p97: 4.4 },
  { month: 1, p3: 3.4, p15: 3.9, p50: 4.5, p85: 5.1, p97: 5.8 },
  { month: 2, p3: 4.3, p15: 4.9, p50: 5.6, p85: 6.3, p97: 7.1 },
  { month: 3, p3: 5.0, p15: 5.7, p50: 6.4, p85: 7.2, p97: 8.0 },
  { month: 4, p3: 5.6, p15: 6.2, p50: 7.0, p85: 7.8, p97: 8.7 },
  { month: 5, p3: 6.0, p15: 6.7, p50: 7.5, p85: 8.4, p97: 9.3 },
  { month: 6, p3: 6.4, p15: 7.1, p50: 7.9, p85: 8.8, p97: 9.8 },
  { month: 7, p3: 6.7, p15: 7.4, p50: 8.3, p85: 9.2, p97: 10.3 },
  { month: 8, p3: 7.0, p15: 7.7, p50: 8.6, p85: 9.6, p97: 10.7 },
  { month: 9, p3: 7.2, p15: 8.0, p50: 8.9, p85: 9.9, p97: 11.0 },
  { month: 10, p3: 7.5, p15: 8.2, p50: 9.2, p85: 10.2, p97: 11.4 },
  { month: 11, p3: 7.7, p15: 8.4, p50: 9.4, p85: 10.5, p97: 11.7 },
  { month: 12, p3: 7.8, p15: 8.6, p50: 9.6, p85: 10.8, p97: 12.0 },
  { month: 14, p3: 8.2, p15: 9.0, p50: 10.1, p85: 11.3, p97: 12.6 },
  { month: 16, p3: 8.5, p15: 9.4, p50: 10.5, p85: 11.8, p97: 13.1 },
  { month: 18, p3: 8.9, p15: 9.8, p50: 10.9, p85: 12.2, p97: 13.7 },
  { month: 20, p3: 9.2, p15: 10.1, p50: 11.3, p85: 12.7, p97: 14.2 },
  { month: 22, p3: 9.5, p15: 10.5, p50: 11.8, p85: 13.2, p97: 14.8 },
  { month: 24, p3: 9.7, p15: 10.8, p50: 12.2, p85: 13.6, p97: 15.3 }
];

// WHO Weight-for-Age (Peso para la Edad) - Girls (0-24 months) in kg
export const WHO_WEIGHT_GIRLS: WHODataPoint[] = [
  { month: 0, p3: 2.4, p15: 2.8, p50: 3.2, p85: 3.7, p97: 4.2 },
  { month: 1, p3: 3.2, p15: 3.6, p50: 4.2, p85: 4.8, p97: 5.5 },
  { month: 2, p3: 3.9, p15: 4.5, p50: 5.1, p85: 5.8, p97: 6.6 },
  { month: 3, p3: 4.5, p15: 5.1, p50: 5.8, p85: 6.6, p97: 7.5 },
  { month: 4, p3: 5.0, p15: 5.6, p50: 6.4, p85: 7.3, p97: 8.2 },
  { month: 5, p3: 5.4, p15: 6.1, p50: 6.9, p85: 7.8, p97: 8.8 },
  { month: 6, p3: 5.8, p15: 6.5, p50: 7.3, p85: 8.2, p97: 9.3 },
  { month: 7, p3: 6.1, p15: 6.8, p50: 7.6, p85: 8.6, p97: 9.8 },
  { month: 8, p3: 6.3, p15: 7.0, p50: 7.9, p85: 9.0, p97: 10.2 },
  { month: 9, p3: 6.6, p15: 7.3, p50: 8.2, p85: 9.3, p97: 10.5 },
  { month: 10, p3: 6.8, p15: 7.5, p50: 8.5, p85: 9.6, p97: 10.9 },
  { month: 11, p3: 7.0, p15: 7.7, p50: 8.7, p85: 9.9, p97: 11.2 },
  { month: 12, p3: 7.1, p15: 7.9, p50: 8.9, p85: 10.2, p97: 11.5 },
  { month: 14, p3: 7.4, p15: 8.3, p50: 9.4, p85: 10.6, p97: 12.1 },
  { month: 16, p3: 7.7, p15: 8.7, p50: 9.8, p85: 11.1, p97: 12.6 },
  { month: 18, p3: 8.2, p15: 9.1, p50: 10.2, p85: 11.6, p97: 13.2 },
  { month: 20, p3: 8.5, p15: 9.4, p50: 10.6, p85: 12.1, p97: 13.7 },
  { month: 22, p3: 8.8, p15: 9.8, p50: 11.1, p85: 12.5, p97: 14.3 },
  { month: 24, p3: 9.0, p15: 10.2, p50: 11.5, p85: 13.0, p97: 14.8 }
];

// WHO Length/Height-for-Age (Talla/Longitud para la Edad) - Boys in cm
export const WHO_HEIGHT_BOYS: WHODataPoint[] = [
  { month: 0, p3: 46.3, p15: 47.9, p50: 49.9, p85: 51.8, p97: 53.4 },
  { month: 1, p3: 51.1, p15: 52.8, p50: 54.7, p85: 56.7, p97: 58.4 },
  { month: 2, p3: 54.7, p15: 56.4, p50: 58.4, p85: 60.4, p97: 62.2 },
  { month: 3, p3: 57.6, p15: 59.4, p50: 61.4, p85: 63.5, p97: 65.3 },
  { month: 4, p3: 60.0, p15: 61.8, p50: 63.9, p85: 66.0, p97: 67.8 },
  { month: 5, p3: 61.9, p15: 63.8, p50: 65.9, p85: 68.0, p97: 69.9 },
  { month: 6, p3: 63.6, p15: 65.5, p50: 67.6, p85: 69.8, p97: 71.6 },
  { month: 7, p3: 65.1, p15: 67.0, p50: 69.2, p85: 71.3, p97: 73.2 },
  { month: 8, p3: 66.5, p15: 68.5, p50: 70.6, p85: 72.8, p97: 74.7 },
  { month: 9, p3: 67.7, p15: 69.7, p50: 72.0, p85: 74.2, p97: 76.2 },
  { month: 10, p3: 69.0, p15: 71.0, p50: 73.3, p85: 75.6, p97: 77.6 },
  { month: 11, p3: 70.2, p15: 72.2, p50: 74.5, p85: 76.9, p97: 78.9 },
  { month: 12, p3: 71.3, p15: 73.4, p50: 75.7, p85: 78.1, p97: 80.2 },
  { month: 14, p3: 73.4, p15: 75.6, p50: 78.0, p85: 80.5, p97: 82.7 },
  { month: 16, p3: 75.4, p15: 77.6, p50: 80.2, p85: 82.8, p97: 85.1 },
  { month: 18, p3: 77.2, p15: 79.6, p50: 82.3, p85: 85.0, p97: 87.3 },
  { month: 20, p3: 78.9, p15: 81.4, p50: 84.2, p85: 87.0, p97: 89.4 },
  { month: 22, p3: 80.5, p15: 83.1, p50: 86.0, p85: 89.0, p97: 91.5 },
  { month: 24, p3: 82.1, p15: 84.8, p50: 87.8, p85: 90.9, p97: 93.6 }
];

// WHO Length/Height-for-Age (Talla/Longitud para la Edad) - Girls in cm
export const WHO_HEIGHT_GIRLS: WHODataPoint[] = [
  { month: 0, p3: 45.6, p15: 47.2, p50: 49.1, p85: 51.0, p97: 52.7 },
  { month: 1, p3: 50.0, p15: 51.7, p50: 53.7, p85: 55.6, p97: 57.4 },
  { month: 2, p3: 53.2, p15: 55.0, p50: 57.1, p85: 59.2, p97: 60.9 },
  { month: 3, p3: 56.0, p15: 57.7, p50: 59.8, p85: 61.9, p97: 63.8 },
  { month: 4, p3: 58.2, p15: 60.1, p50: 62.1, p85: 64.3, p97: 66.2 },
  { month: 5, p3: 60.0, p15: 61.9, p50: 64.0, p85: 66.2, p97: 68.2 },
  { month: 6, p3: 61.5, p15: 63.5, p50: 65.7, p85: 68.0, p97: 70.0 },
  { month: 7, p3: 62.9, p15: 65.0, p50: 67.3, p85: 69.6, p97: 71.6 },
  { month: 8, p3: 64.3, p15: 66.4, p50: 68.7, p85: 71.1, p97: 73.2 },
  { month: 9, p3: 65.6, p15: 67.7, p50: 70.1, p85: 72.6, p97: 74.7 },
  { month: 10, p3: 66.8, p15: 69.0, p50: 71.5, p85: 73.9, p97: 76.1 },
  { month: 11, p3: 68.0, p15: 70.2, p50: 72.8, p85: 75.3, p97: 77.5 },
  { month: 12, p3: 69.2, p15: 71.4, p50: 74.0, p85: 76.6, p97: 78.9 },
  { month: 14, p3: 71.3, p15: 73.6, p50: 76.4, p85: 79.1, p97: 81.5 },
  { month: 16, p3: 73.4, p15: 75.8, p50: 78.6, p85: 81.4, p97: 83.9 },
  { month: 18, p3: 75.3, p15: 77.8, p50: 80.7, p85: 83.6, p97: 86.2 },
  { month: 20, p3: 77.1, p15: 79.7, p50: 82.7, p85: 85.7, p97: 88.4 },
  { month: 22, p3: 78.8, p15: 81.5, p50: 84.6, p85: 87.7, p97: 90.5 },
  { month: 24, p3: 80.3, p15: 83.2, p50: 86.4, p85: 89.6, p97: 92.5 }
];

// WHO Head Circumference (Perímetro Cefálico) - Boys in cm
export const WHO_HEAD_BOYS: WHODataPoint[] = [
  { month: 0, p3: 32.1, p15: 33.3, p50: 34.5, p85: 35.8, p97: 36.9 },
  { month: 2, p3: 36.9, p15: 38.0, p50: 39.1, p85: 40.3, p97: 41.4 },
  { month: 4, p3: 39.7, p15: 40.8, p50: 42.0, p85: 43.1, p97: 44.2 },
  { month: 6, p3: 41.0, p15: 42.1, p50: 43.3, p85: 44.5, p97: 45.6 },
  { month: 9, p3: 42.6, p15: 43.7, p50: 45.0, p85: 46.2, p97: 47.3 },
  { month: 12, p3: 43.8, p15: 44.8, p50: 46.1, p85: 47.3, p97: 48.4 },
  { month: 18, p3: 45.1, p15: 46.2, p50: 47.4, p85: 48.7, p97: 49.8 },
  { month: 24, p3: 46.0, p15: 47.1, p50: 48.3, p85: 49.6, p97: 50.8 }
];

// WHO Head Circumference - Girls in cm
export const WHO_HEAD_GIRLS: WHODataPoint[] = [
  { month: 0, p3: 31.7, p15: 32.8, p50: 33.9, p85: 35.1, p97: 36.1 },
  { month: 2, p3: 36.0, p15: 37.1, p50: 38.2, p85: 39.4, p97: 40.5 },
  { month: 4, p3: 38.7, p15: 39.8, p50: 41.0, p85: 42.1, p97: 43.2 },
  { month: 6, p3: 39.7, p15: 40.8, p50: 42.2, p85: 43.5, p97: 44.6 },
  { month: 9, p3: 41.3, p15: 42.4, p50: 43.7, p85: 45.0, p97: 46.1 },
  { month: 12, p3: 42.6, p15: 43.8, p50: 45.0, p85: 46.3, p97: 47.4 },
  { month: 18, p3: 44.0, p15: 45.1, p50: 46.4, p85: 47.6, p97: 48.7 },
  { month: 24, p3: 45.0, p15: 46.0, p50: 47.2, p85: 48.4, p97: 49.6 }
];

/**
 * Get WHO standard dataset for a specific metric and gender
 */
export function getWHOCurveData(metric: MetricType, gender: 'boy' | 'girl'): WHODataPoint[] {
  if (metric === 'weight') {
    return gender === 'girl' ? WHO_WEIGHT_GIRLS : WHO_WEIGHT_BOYS;
  }
  if (metric === 'height') {
    return gender === 'girl' ? WHO_HEIGHT_GIRLS : WHO_HEIGHT_BOYS;
  }
  return gender === 'girl' ? WHO_HEAD_GIRLS : WHO_HEAD_BOYS;
}

/**
 * Interpolate percentile value at a given baby age in months
 */
export function getInterpolatedWHOPoint(
  ageMonths: number,
  metric: MetricType,
  gender: 'boy' | 'girl'
): WHODataPoint {
  const data = getWHOCurveData(metric, gender);
  const clampedAge = Math.min(24, Math.max(0, ageMonths));

  // Find surrounding points
  let lower = data[0];
  let upper = data[data.length - 1];

  for (let i = 0; i < data.length; i++) {
    if (data[i].month === clampedAge) {
      return data[i];
    }
    if (data[i].month < clampedAge) {
      lower = data[i];
    }
    if (data[i].month > clampedAge) {
      upper = data[i];
      break;
    }
  }

  if (lower.month === upper.month) return lower;

  const ratio = (clampedAge - lower.month) / (upper.month - lower.month);

  const lerp = (a: number, b: number) => Number((a + (b - a) * ratio).toFixed(2));

  return {
    month: clampedAge,
    p3: lerp(lower.p3, upper.p3),
    p15: lerp(lower.p15, upper.p15),
    p50: lerp(lower.p50, upper.p50),
    p85: lerp(lower.p85, upper.p85),
    p97: lerp(lower.p97, upper.p97)
  };
}

/**
 * Evaluates whether a measurement is in Normal (Green), Alert (Yellow), or Critical (Red) zone
 * matching pediatric health cards (Carnet de Salud / Vacunas OMS).
 */
export function evaluateGrowthParameter(
  val: number,
  ageMonths: number,
  metric: MetricType,
  gender: 'boy' | 'girl'
): GrowthStatusInterpretation {
  const who = getInterpolatedWHOPoint(ageMonths, metric, gender);

  if (metric === 'weight') {
    if (val >= who.p15 && val <= who.p85) {
      return {
        status: 'normal',
        statusLabel: 'Zona Verde: Crecimiento Adecuado (Normal)',
        badgeColor: 'text-emerald-800 bg-emerald-100 border-emerald-300',
        badgeBg: 'bg-emerald-500',
        textColor: 'text-emerald-700',
        percentileApprox: val < who.p50 ? 'Entre P15 y P50 (Mediana)' : 'Entre P50 y P85 (Mediana)',
        explanation: 'El peso se encuentra en el rango saludable y normativo según los patrones de la OMS.',
        recommendation: 'Excelente evolución. Mantener lactancia/fórmula y alimentación complementaria balanceada y rica en hierro.'
      };
    } else if (val >= who.p3 && val < who.p15) {
      return {
        status: 'alerta_bajo',
        statusLabel: 'Zona Amarilla: Alerta de Peso Bajo / Monitoreo',
        badgeColor: 'text-amber-800 bg-amber-100 border-amber-300',
        badgeBg: 'bg-amber-500',
        textColor: 'text-amber-700',
        percentileApprox: 'Entre P3 y P15 (Bajo)',
        explanation: 'El peso está en el límite inferior de la curva de crecimiento estándar.',
        recommendation: 'Refuerza alimentos densos en energía y grasas saludables (aguacate, aceite de oliva, yema de huevo) y consulta con tu pediatra en el próximo control.'
      };
    } else if (val > who.p85 && val <= who.p97) {
      return {
        status: 'alerta_alto',
        statusLabel: 'Zona Amarilla: Alerta de Peso Elevado / Monitoreo',
        badgeColor: 'text-amber-800 bg-amber-100 border-amber-300',
        badgeBg: 'bg-amber-500',
        textColor: 'text-amber-700',
        percentileApprox: 'Entre P85 y P97 (Alto)',
        explanation: 'El peso está en el percentil superior. Si la talla también es alta, el crecimiento suele ser armónico.',
        recommendation: 'Evita azúcares, jugos y ultraprocesados. Fomenta el movimiento libre y la autorregulación guiada por el bebé.'
      };
    } else if (val < who.p3) {
      return {
        status: 'critico_bajo',
        statusLabel: 'Zona Roja: Peso Bajo / Alerta Pediátrica (< P3)',
        badgeColor: 'text-rose-800 bg-rose-100 border-rose-300',
        badgeBg: 'bg-rose-500',
        textColor: 'text-rose-700',
        percentileApprox: 'Menor a Percentil 3 (< -2 DE)',
        explanation: 'El peso está por debajo de los límites esperados para su edad.',
        recommendation: 'Es prioritario realizar una valoración presencial con el pediatra o nutricionista infantil para descartar dificultades de absorción o ingesta.'
      };
    } else {
      return {
        status: 'critico_alto',
        statusLabel: 'Zona Roja: Peso Muy Elevado (> P97)',
        badgeColor: 'text-rose-800 bg-rose-100 border-rose-300',
        badgeBg: 'bg-rose-500',
        textColor: 'text-rose-700',
        percentileApprox: 'Superior a Percentil 97 (> +2 DE)',
        explanation: 'El peso supera ampliamente la curva estándar de la OMS.',
        recommendation: 'Comenta con el pediatra para valorar la curva en relación con su longitud y antecedentes familiares.'
      };
    }
  }

  // Height / Length
  if (metric === 'height') {
    if (val >= who.p15 && val <= who.p85) {
      return {
        status: 'normal',
        statusLabel: 'Zona Verde: Talla Adecuada (Normal)',
        badgeColor: 'text-emerald-800 bg-emerald-100 border-emerald-300',
        badgeBg: 'bg-emerald-500',
        textColor: 'text-emerald-700',
        percentileApprox: val < who.p50 ? 'Entre P15 y P50' : 'Entre P50 y P85',
        explanation: 'La longitud/talla del bebé está creciendo de manera óptima y simétrica.',
        recommendation: 'Continuar con el aporte adecuado de nutrientes, calcio, vitamina D y descanso adecuado.'
      };
    } else if (val >= who.p3 && val < who.p15) {
      return {
        status: 'alerta_bajo',
        statusLabel: 'Zona Amarilla: Talla en Rango Bajo (P3 - P15)',
        badgeColor: 'text-amber-800 bg-amber-100 border-amber-300',
        badgeBg: 'bg-amber-500',
        textColor: 'text-amber-700',
        percentileApprox: 'Entre P3 y P15',
        explanation: 'Talla ligeramente baja respecto al promedio poblacional.',
        recommendation: 'Monitorear la velocidad de crecimiento en los siguientes controles pediátricos.'
      };
    } else if (val > who.p85 && val <= who.p97) {
      return {
        status: 'alerta_alto',
        statusLabel: 'Zona Verde-Alta: Talla Alta (P85 - P97)',
        badgeColor: 'text-emerald-800 bg-emerald-100 border-emerald-300',
        badgeBg: 'bg-emerald-500',
        textColor: 'text-emerald-700',
        percentileApprox: 'Entre P85 y P97',
        explanation: 'Bebé con longitud por encima de la media, desarrollo favorable.',
        recommendation: 'Evolución normal.'
      };
    } else if (val < who.p3) {
      return {
        status: 'critico_bajo',
        statusLabel: 'Zona Roja: Talla Baja Significativa (< P3)',
        badgeColor: 'text-rose-800 bg-rose-100 border-rose-300',
        badgeBg: 'bg-rose-500',
        textColor: 'text-rose-700',
        percentileApprox: 'Menor a P3 (< -2 DE)',
        explanation: 'Longitud corporal significativamente por debajo del percentil mínimo.',
        recommendation: 'Consultar al pediatra para evaluación de curva estatural y nutricional.'
      };
    } else {
      return {
        status: 'critico_alto',
        statusLabel: 'Zona Alta: Talla Muy Alta (> P97)',
        badgeColor: 'text-blue-800 bg-blue-100 border-blue-300',
        badgeBg: 'bg-blue-500',
        textColor: 'text-blue-700',
        percentileApprox: 'Superior a P97',
        explanation: 'Estatura muy destacada para la edad.',
        recommendation: 'Monitoreo de rutina.'
      };
    }
  }

  // Head Circumference
  if (val >= who.p3 && val <= who.p97) {
    return {
      status: 'normal',
      statusLabel: 'Zona Verde: Perímetro Cefálico Normal',
      badgeColor: 'text-emerald-800 bg-emerald-100 border-emerald-300',
      badgeBg: 'bg-emerald-500',
      textColor: 'text-emerald-700',
      percentileApprox: 'Entre P3 y P97',
      explanation: 'Desarrollo del cráneo y fontanelas dentro de parámetros neurológicos normales.',
      recommendation: 'Seguimiento pediátrico habitual.'
    };
  } else {
    return {
      status: val < who.p3 ? 'critico_bajo' : 'critico_alto',
      statusLabel: val < who.p3 ? 'Zona Roja: Perímetro Cefálico Bajo (< P3)' : 'Zona Roja: Perímetro Cefálico Elevado (> P97)',
      badgeColor: 'text-rose-800 bg-rose-100 border-rose-300',
      badgeBg: 'bg-rose-500',
      textColor: 'text-rose-700',
      percentileApprox: val < who.p3 ? '< P3' : '> P97',
      explanation: 'Variación anatómica que requiere medición precisa por parte del pediatra.',
      recommendation: 'Verificar en el próximo control pediátrico con cinta métrica no elástica.'
    };
  }
}
