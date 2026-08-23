import React, { useState } from 'react';
import { BabyProfile, GrowthRecord } from '../types';
import {
  MetricType,
  getWHOCurveData,
  evaluateGrowthParameter,
  WHODataPoint
} from '../data/whoGrowthStandards';
import {
  Scale,
  Ruler,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  AlertCircle,
  Info,
  ChevronRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import { motion } from 'motion/react';

interface GrowthCurvesChartProps {
  baby: BabyProfile;
  growthRecords: GrowthRecord[];
  onAddRecord?: () => void;
}

export const GrowthCurvesChart: React.FC<GrowthCurvesChartProps> = ({
  baby,
  growthRecords,
  onAddRecord
}) => {
  const [selectedMetric, setSelectedMetric] = useState<MetricType>('weight');
  const [selectedPointIndex, setSelectedPointIndex] = useState<number | null>(null);

  // Gender curves from WHO
  const whoCurveData = getWHOCurveData(selectedMetric, baby.gender);

  // Sort growth records chronologically
  const sortedRecords = [...growthRecords]
    .filter(r => {
      if (selectedMetric === 'weight') return typeof r.weightKg === 'number';
      if (selectedMetric === 'height') return typeof r.heightCm === 'number';
      if (selectedMetric === 'head') return typeof r.headCircumferenceCm === 'number';
      return true;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  // Latest record
  const latestRecord = sortedRecords[sortedRecords.length - 1];

  const currentVal = latestRecord
    ? selectedMetric === 'weight'
      ? latestRecord.weightKg
      : selectedMetric === 'height'
      ? latestRecord.heightCm
      : latestRecord.headCircumferenceCm || 0
    : selectedMetric === 'weight'
    ? baby.birthWeight
    : baby.birthHeight;

  const currentAgeMonths = latestRecord ? latestRecord.ageMonths : 0;

  // Evaluation for latest record
  const interpretation = evaluateGrowthParameter(
    currentVal,
    currentAgeMonths,
    selectedMetric,
    baby.gender
  );

  // Chart configuration & scales
  const maxMonth = 24;
  const padding = { top: 25, right: 42, bottom: 35, left: 38 };
  const width = 360;
  const height = 240;
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Metric scale min / max
  let minVal = 0;
  let maxVal = 16;
  let unit = 'kg';
  let metricLabel = 'Peso (kg)';

  if (selectedMetric === 'weight') {
    minVal = 2;
    maxVal = 16;
    unit = 'kg';
    metricLabel = 'Peso para la Edad (kg)';
  } else if (selectedMetric === 'height') {
    minVal = 44;
    maxVal = 96;
    unit = 'cm';
    metricLabel = 'Longitud/Talla para la Edad (cm)';
  } else {
    minVal = 30;
    maxVal = 52;
    unit = 'cm';
    metricLabel = 'Perímetro Cefálico (cm)';
  }

  // Coordinate mappers
  const getX = (month: number) => padding.left + (month / maxMonth) * chartWidth;
  const getY = (val: number) =>
    padding.top + chartHeight - ((val - minVal) / (maxVal - minVal)) * chartHeight;

  // Build SVG path from keypoints
  const generatePath = (key: keyof WHODataPoint) => {
    return whoCurveData
      .map((d, i) => {
        const val = d[key] as number;
        const x = getX(d.month);
        const y = getY(val);
        return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
      })
      .join(' ');
  };

  // Build Area Path for Green Zone (between P15 and P85)
  const generateGreenArea = () => {
    const topPoints = whoCurveData.map(d => `${getX(d.month).toFixed(1)},${getY(d.p85).toFixed(1)}`);
    const bottomPoints = [...whoCurveData]
      .reverse()
      .map(d => `${getX(d.month).toFixed(1)},${getY(d.p15).toFixed(1)}`);
    return `M ${topPoints.join(' L ')} L ${bottomPoints.join(' L ')} Z`;
  };

  // Build Area Path for Yellow Zone Top (between P85 and P97)
  const generateYellowTopArea = () => {
    const topPoints = whoCurveData.map(d => `${getX(d.month).toFixed(1)},${getY(d.p97).toFixed(1)}`);
    const bottomPoints = [...whoCurveData]
      .reverse()
      .map(d => `${getX(d.month).toFixed(1)},${getY(d.p85).toFixed(1)}`);
    return `M ${topPoints.join(' L ')} L ${bottomPoints.join(' L ')} Z`;
  };

  // Build Area Path for Yellow Zone Bottom (between P3 and P15)
  const generateYellowBottomArea = () => {
    const topPoints = whoCurveData.map(d => `${getX(d.month).toFixed(1)},${getY(d.p15).toFixed(1)}`);
    const bottomPoints = [...whoCurveData]
      .reverse()
      .map(d => `${getX(d.month).toFixed(1)},${getY(d.p3).toFixed(1)}`);
    return `M ${topPoints.join(' L ')} L ${bottomPoints.join(' L ')} Z`;
  };

  // Baby user path
  const babyUserPoints = sortedRecords.map(r => {
    const v =
      selectedMetric === 'weight'
        ? r.weightKg
        : selectedMetric === 'height'
        ? r.heightCm
        : r.headCircumferenceCm || 0;
    return {
      x: getX(r.ageMonths),
      y: getY(v),
      month: r.ageMonths,
      value: v,
      date: r.date,
      notes: r.notes,
      id: r.id
    };
  });

  const babyUserPath = babyUserPoints
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
    .join(' ');

  // Y-axis grid ticks
  const yTicksCount = 5;
  const yTicks = Array.from({ length: yTicksCount }, (_, i) => {
    const v = minVal + ((maxVal - minVal) / (yTicksCount - 1)) * i;
    return {
      value: Math.round(v),
      y: getY(v)
    };
  });

  // X-axis month ticks (0, 3, 6, 9, 12, 18, 24)
  const xTicks = [0, 3, 6, 9, 12, 18, 24];

  // Active highlighted point
  const activePoint =
    selectedPointIndex !== null && babyUserPoints[selectedPointIndex]
      ? babyUserPoints[selectedPointIndex]
      : babyUserPoints[babyUserPoints.length - 1];

  return (
    <div id="growth-curves-section" className="space-y-4">
      {/* 1. Header & Metric Tabs */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border border-stone-200 shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-base font-extrabold text-stone-900 font-display flex items-center gap-1.5">
                <span>Curvas de Crecimiento OMS</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 uppercase tracking-wide">
                  Carnet Oficial
                </span>
              </h4>
              <p className="text-[11px] text-stone-500 font-medium">
                Estándares pediátricos ({baby.gender === 'girl' ? 'Niña ♀' : 'Niño ♂'}, 0 a 24 meses)
              </p>
            </div>
          </div>

          <div className="text-right">
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">
              Control
            </span>
            <span className="text-xs font-black text-stone-800">
              {currentAgeMonths} meses
            </span>
          </div>
        </div>

        {/* Metric Selector Tabs */}
        <div className="grid grid-cols-3 gap-1.5 bg-stone-100/90 p-1 rounded-2xl mb-4">
          <button
            id="tab-metric-weight"
            onClick={() => {
              setSelectedMetric('weight');
              setSelectedPointIndex(null);
            }}
            className={`py-2 px-2 rounded-xl text-xs font-bold transition-all active-press flex items-center justify-center gap-1 ${
              selectedMetric === 'weight'
                ? 'bg-white text-stone-900 shadow-xs font-extrabold'
                : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            <Scale className="w-3.5 h-3.5 text-[#E06D53]" />
            <span>Peso</span>
          </button>

          <button
            id="tab-metric-height"
            onClick={() => {
              setSelectedMetric('height');
              setSelectedPointIndex(null);
            }}
            className={`py-2 px-2 rounded-xl text-xs font-bold transition-all active-press flex items-center justify-center gap-1 ${
              selectedMetric === 'height'
                ? 'bg-white text-stone-900 shadow-xs font-extrabold'
                : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            <Ruler className="w-3.5 h-3.5 text-[#4A7C59]" />
            <span>Talla</span>
          </button>

          <button
            id="tab-metric-head"
            onClick={() => {
              setSelectedMetric('head');
              setSelectedPointIndex(null);
            }}
            className={`py-2 px-2 rounded-xl text-xs font-bold transition-all active-press flex items-center justify-center gap-1 ${
              selectedMetric === 'head'
                ? 'bg-white text-stone-900 shadow-xs font-extrabold'
                : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            <span className="text-xs">🧠</span>
            <span>Cefálico</span>
          </button>
        </div>

        {/* 2. Interactive SVG Health Card Chart */}
        <div className="relative bg-gradient-to-b from-stone-50/60 to-white rounded-2xl border border-stone-200/90 p-2 overflow-hidden shadow-2xs">
          {/* Chart Header Title inside canvas */}
          <div className="flex items-center justify-between px-2 pt-1 pb-2">
            <span className="text-[11px] font-bold text-stone-700 font-display">
              {metricLabel}
            </span>
            <div className="flex items-center gap-2 text-[10px] font-bold">
              <span className="flex items-center gap-1 text-emerald-700">
                <span className="w-2.5 h-2.5 rounded-sm bg-emerald-300 inline-block" />
                Normal
              </span>
              <span className="flex items-center gap-1 text-amber-700">
                <span className="w-2.5 h-2.5 rounded-sm bg-amber-300 inline-block" />
                Alerta
              </span>
            </div>
          </div>

          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-auto select-none touch-manipulation"
          >
            <defs>
              {/* Color zone gradients */}
              <linearGradient id="greenZone" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.18" />
              </linearGradient>
              <linearGradient id="yellowZone" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.12" />
              </linearGradient>
              <filter id="shadowPoint" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#000" floodOpacity="0.25" />
              </filter>
            </defs>

            {/* Background grid lines */}
            {yTicks.map(t => (
              <g key={t.value}>
                <line
                  x1={padding.left}
                  y1={t.y}
                  x2={width - padding.right}
                  y2={t.y}
                  stroke="#E7E5E4"
                  strokeDasharray="3 3"
                  strokeWidth="1"
                />
                <text
                  x={padding.left - 6}
                  y={t.y + 3}
                  textAnchor="end"
                  fontSize="9"
                  fontWeight="600"
                  fill="#78716C"
                >
                  {t.value}
                </text>
              </g>
            ))}

            {xTicks.map(m => (
              <g key={m}>
                <line
                  x1={getX(m)}
                  y1={padding.top}
                  x2={getX(m)}
                  y2={padding.top + chartHeight}
                  stroke="#E7E5E4"
                  strokeDasharray="2 2"
                  strokeWidth="0.8"
                />
                <text
                  x={getX(m)}
                  y={padding.top + chartHeight + 14}
                  textAnchor="middle"
                  fontSize="9"
                  fontWeight="600"
                  fill="#78716C"
                >
                  {m}m
                </text>
              </g>
            ))}

            {/* Colored WHO Zone Bands */}
            {/* 1. Yellow Zone Top (P85 to P97) */}
            <path d={generateYellowTopArea()} fill="url(#yellowZone)" />

            {/* 2. Green Zone (P15 to P85) */}
            <path d={generateGreenArea()} fill="url(#greenZone)" />

            {/* 3. Yellow Zone Bottom (P3 to P15) */}
            <path d={generateYellowBottomArea()} fill="url(#yellowZone)" />

            {/* WHO Percentile Reference Curves */}
            {/* P97 (+2 DE / Límite Superior) */}
            <path
              d={generatePath('p97')}
              fill="none"
              stroke="#E11D48"
              strokeWidth="1.2"
              strokeDasharray="2 2"
              opacity="0.7"
            />
            {/* P85 */}
            <path
              d={generatePath('p85')}
              fill="none"
              stroke="#D97706"
              strokeWidth="1.2"
              strokeDasharray="3 2"
              opacity="0.8"
            />
            {/* P50 (Mediana OMS - Línea Continua Verde Oscura) */}
            <path
              d={generatePath('p50')}
              fill="none"
              stroke="#059669"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* P15 */}
            <path
              d={generatePath('p15')}
              fill="none"
              stroke="#D97706"
              strokeWidth="1.2"
              strokeDasharray="3 2"
              opacity="0.8"
            />
            {/* P3 (-2 DE / Límite Inferior) */}
            <path
              d={generatePath('p3')}
              fill="none"
              stroke="#E11D48"
              strokeWidth="1.2"
              strokeDasharray="2 2"
              opacity="0.7"
            />

            {/* Percentile labels on the right margin */}
            {whoCurveData.length > 0 && (
              <g fontSize="8" fontWeight="700">
                <text
                  x={width - padding.right + 4}
                  y={getY(whoCurveData[whoCurveData.length - 1].p97) + 3}
                  fill="#E11D48"
                >
                  P97
                </text>
                <text
                  x={width - padding.right + 4}
                  y={getY(whoCurveData[whoCurveData.length - 1].p85) + 3}
                  fill="#D97706"
                >
                  P85
                </text>
                <text
                  x={width - padding.right + 4}
                  y={getY(whoCurveData[whoCurveData.length - 1].p50) + 3}
                  fill="#059669"
                >
                  P50
                </text>
                <text
                  x={width - padding.right + 4}
                  y={getY(whoCurveData[whoCurveData.length - 1].p15) + 3}
                  fill="#D97706"
                >
                  P15
                </text>
                <text
                  x={width - padding.right + 4}
                  y={getY(whoCurveData[whoCurveData.length - 1].p3) + 3}
                  fill="#E11D48"
                >
                  P3
                </text>
              </g>
            )}

            {/* Baby's Registered Growth Trace Line */}
            {babyUserPoints.length > 1 && (
              <path
                d={babyUserPath}
                fill="none"
                stroke="#E06D53"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}

            {/* Baby's Registered Point Dots */}
            {babyUserPoints.map((p, idx) => {
              const isSelected =
                selectedPointIndex === idx ||
                (selectedPointIndex === null && idx === babyUserPoints.length - 1);

              return (
                <g
                  key={p.id}
                  onClick={() => setSelectedPointIndex(idx)}
                  className="cursor-pointer"
                >
                  {/* Outer halo */}
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={isSelected ? 8 : 5}
                    fill="#E06D53"
                    fillOpacity={isSelected ? 0.35 : 0.15}
                  />
                  {/* Inner dot */}
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={isSelected ? 5 : 3.5}
                    fill={isSelected ? '#E06D53' : '#FFFFFF'}
                    stroke="#E06D53"
                    strokeWidth={isSelected ? 2 : 2.5}
                    filter="url(#shadowPoint)"
                  />
                  {/* Value tag on latest */}
                  {isSelected && (
                    <g>
                      <rect
                        x={Math.min(width - 55, Math.max(padding.left, p.x - 22))}
                        y={p.y - 20}
                        width="44"
                        height="16"
                        rx="5"
                        fill="#292524"
                      />
                      <text
                        x={Math.min(width - 55, Math.max(padding.left, p.x - 22)) + 22}
                        y={p.y - 9}
                        textAnchor="middle"
                        fontSize="8.5"
                        fontWeight="800"
                        fill="#FFFFFF"
                      >
                        {p.value} {unit}
                      </text>
                    </g>
                  )}
                </g>
              );
            })}

            {/* X-Axis Base Title */}
            <text
              x={padding.left + chartWidth / 2}
              y={height - 4}
              textAnchor="middle"
              fontSize="9"
              fontWeight="700"
              fill="#A8A29E"
            >
              Edad en meses cumplidos
            </text>
          </svg>
        </div>

        {/* 3. Parameter Evaluation & Clinical Diagnostic Box */}
        <div className="mt-3.5 space-y-2.5">
          <div className={`p-4 rounded-2xl border ${interpretation.badgeColor} transition-all`}>
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <div className="flex items-center gap-2">
                {interpretation.status === 'normal' ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                ) : interpretation.status.startsWith('alerta') ? (
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                )}
                <div>
                  <h5 className="text-xs font-black uppercase tracking-wide">
                    {interpretation.statusLabel}
                  </h5>
                  <span className="text-[11px] font-bold opacity-90 block">
                    {interpretation.percentileApprox} • {currentVal} {unit} a los {currentAgeMonths} meses
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs leading-relaxed mt-1 opacity-95">
              {interpretation.explanation}
            </p>

            <div className="mt-2 pt-2 border-t border-current/15 flex items-start gap-1.5 text-[11px] font-medium leading-normal">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0 mt-0.5" />
              <span>
                <strong>Pauta sugerida:</strong> {interpretation.recommendation}
              </span>
            </div>
          </div>

          {/* 4. Carnet Color Legend Guide */}
          <div className="bg-stone-50 rounded-2xl p-3 border border-stone-200/80 text-[11px] space-y-2">
            <span className="font-bold text-stone-700 flex items-center gap-1 font-display">
              <Info className="w-3.5 h-3.5 text-stone-500" />
              Interpretación del Carnet de Salud (OMS)
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-stone-600">
              <div className="flex items-start gap-1.5 bg-white p-2 rounded-xl border border-stone-200">
                <span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-900 block">Zona Verde (P15-P85)</span>
                  <span className="text-[10px] text-stone-500">Crecimiento óptimo y saludable.</span>
                </div>
              </div>

              <div className="flex items-start gap-1.5 bg-white p-2 rounded-xl border border-stone-200">
                <span className="w-3 h-3 rounded-full bg-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-900 block">Zona Amarilla (Alerta)</span>
                  <span className="text-[10px] text-stone-500">Monitoreo nutricional continuo.</span>
                </div>
              </div>

              <div className="flex items-start gap-1.5 bg-white p-2 rounded-xl border border-stone-200">
                <span className="w-3 h-3 rounded-full bg-rose-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-900 block">Zona Roja (&lt;P3 o &gt;P97)</span>
                  <span className="text-[10px] text-stone-500">Evaluación pediátrica prioritaria.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
