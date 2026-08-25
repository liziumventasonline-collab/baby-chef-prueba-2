import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Check,
  Utensils,
  Sun,
  Sunset,
  Moon,
  Info,
  Sparkles,
  Layers,
  Table as TableIcon,
  ShoppingBag,
  Heart,
  Share2,
  CheckCircle2,
  Copy,
  BookOpen,
  Apple,
  Maximize2,
  Minimize2,
  Printer,
  FileText
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import {
  PLANNER_24_WEEKS,
  PLANNER_WELCOME,
  PLANNER_FINAL_TIPS,
  PLANNER_FINAL_MESSAGE,
  PlannerWeek
} from '../data/planner24Semanas';

interface WeeklyMenuScreenProps {
  onBack?: () => void;
}

type ViewMode = 'poster' | 'day_by_day' | 'shopping' | 'tips' | 'welcome';

export const WeeklyMenuScreen: React.FC<WeeklyMenuScreenProps> = ({ onBack }) => {
  const { baby, addShoppingItem, setExtendedView } = useApp();

  // Determine baby's current approximate week (1 to 24)
  const babyMonthAge = baby?.birthDate
    ? Math.max(6, Math.min(24, Math.floor((Date.now() - new Date(baby.birthDate).getTime()) / (1000 * 60 * 60 * 24 * 30.44))))
    : 6;

  // Find initial week corresponding to baby's age
  const initialWeekNumber = babyMonthAge <= 8
    ? Math.min(6, Math.max(1, (babyMonthAge - 6) * 3 + 1))
    : babyMonthAge <= 12
    ? Math.min(9, Math.max(7, 7 + (babyMonthAge - 9)))
    : babyMonthAge <= 18
    ? Math.min(15, Math.max(10, 10 + (babyMonthAge - 12)))
    : Math.min(24, Math.max(16, 16 + (babyMonthAge - 18)));

  const [selectedWeekNumber, setSelectedWeekNumber] = useState<number>(initialWeekNumber);
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<ViewMode>('poster');
  const [activeStageFilter, setActiveStageFilter] = useState<'all' | 'etapa1' | 'etapa2' | 'etapa3' | 'etapa4'>('all');
  const [copiedSuccess, setCopiedSuccess] = useState(false);
  const [tableCopied, setTableCopied] = useState(false);
  const [isFullscreenModalOpen, setIsFullscreenModalOpen] = useState(false);

  const currentWeek: PlannerWeek =
    PLANNER_24_WEEKS.find((w) => w.weekNumber === selectedWeekNumber) || PLANNER_24_WEEKS[0];

  const currentDay = currentWeek.days[selectedDayIndex] || currentWeek.days[0];

  // Filter weeks by stage if needed
  const filteredWeeks = PLANNER_24_WEEKS.filter((w) => {
    if (activeStageFilter === 'etapa1') return w.weekNumber >= 1 && w.weekNumber <= 6;
    if (activeStageFilter === 'etapa2') return w.weekNumber >= 7 && w.weekNumber <= 9;
    if (activeStageFilter === 'etapa3') return w.weekNumber >= 10 && w.weekNumber <= 15;
    if (activeStageFilter === 'etapa4') return w.weekNumber >= 16 && w.weekNumber <= 24;
    return true;
  });

  // Handler to load shopping list into the global active shopping basket
  const handleLoadShoppingList = () => {
    currentWeek.shoppingList.forEach((cat) => {
      cat.items.forEach((itemText) => {
        // Separate item name and amount if possible
        const match = itemText.match(/^(.+?)\s*\((.+?)\)$/);
        const name = match ? match[1].trim() : itemText;
        const amount = match ? match[2].trim() : '';

        addShoppingItem({
          name: name,
          amount: amount,
          category: cat.category,
          recipeSource: `Planner Semana ${currentWeek.weekNumber} (${currentWeek.stageAgeRange})`
        });
      });
    });

    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 3000);
  };

  // Copy full table text to clipboard
  const handleCopyTableText = () => {
    const tableText = `📋 PLANNER SEMANAL - SEMANA ${currentWeek.weekNumber} (${currentWeek.stageAgeRange})\n${currentWeek.title}\n\n` +
      currentWeek.days
        .map(
          (d) =>
            `🗓️ ${d.dayName}:\n` +
            `  • Desayuno: ${d.desayuno}\n` +
            `  • Almuerzo: ${d.almuerzo}\n` +
            `  • Cena: ${d.cena}\n` +
            `  • Snack: ${d.snack}\n`
        )
        .join('\n') +
      `\n🛒 LISTA DE COMPRAS:\n` +
      currentWeek.rawShoppingText.join('\n');

    if (navigator.clipboard) {
      navigator.clipboard.writeText(tableText).then(() => {
        setTableCopied(true);
        setTimeout(() => setTableCopied(false), 2500);
      });
    }
  };

  return (
    <div id="planner-semanal-screen" className="flex-1 overflow-y-auto bg-stone-100 pb-36 no-scrollbar">
      {/* Sticky Header */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200 px-4 py-3 shadow-2xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {onBack && (
              <button
                id="planner-back-btn"
                onClick={onBack}
                className="p-2 rounded-xl bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors active-press"
                aria-label="Volver"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="text-base font-black text-stone-900 leading-tight font-display">
                  Planner Semanal
                </h1>
                <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-black">
                  24 Semanas
                </span>
              </div>
              <p className="text-[11px] text-stone-500 font-medium">
                Tablas completas & listas de compras ilustradas (6 a 24 meses)
              </p>
            </div>
          </div>

          <button
            id="planner-open-cart-btn"
            onClick={() => setExtendedView('compras')}
            className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-colors relative active-press border border-emerald-200/60"
            title="Ir a lista de compras del Súper"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>

        {/* Stage Filter Category Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-2 no-scrollbar text-xs font-bold">
          <button
            onClick={() => {
              setActiveStageFilter('all');
              if (viewMode === 'tips' || viewMode === 'welcome') setViewMode('poster');
            }}
            className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all ${
              activeStageFilter === 'all' && viewMode !== 'tips' && viewMode !== 'welcome'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Todas (1-24)
          </button>

          <button
            onClick={() => {
              setActiveStageFilter('etapa1');
              setSelectedWeekNumber(1);
              if (viewMode === 'tips' || viewMode === 'welcome') setViewMode('poster');
            }}
            className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all ${
              activeStageFilter === 'etapa1' && viewMode !== 'tips' && viewMode !== 'welcome'
                ? 'bg-teal-700 text-white shadow-xs'
                : 'bg-teal-50 text-teal-800 hover:bg-teal-100 border border-teal-200'
            }`}
          >
            🍼 Etapa 1 (6-8m)
          </button>

          <button
            onClick={() => {
              setActiveStageFilter('etapa2');
              setSelectedWeekNumber(7);
              if (viewMode === 'tips' || viewMode === 'welcome') setViewMode('poster');
            }}
            className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all ${
              activeStageFilter === 'etapa2' && viewMode !== 'tips' && viewMode !== 'welcome'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200'
            }`}
          >
            🍑 Etapa 2 (9-12m)
          </button>

          <button
            onClick={() => {
              setActiveStageFilter('etapa3');
              setSelectedWeekNumber(10);
              if (viewMode === 'tips' || viewMode === 'welcome') setViewMode('poster');
            }}
            className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all ${
              activeStageFilter === 'etapa3' && viewMode !== 'tips' && viewMode !== 'welcome'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100 border border-emerald-200'
            }`}
          >
            🌼 Etapa 3 (12-18m)
          </button>

          <button
            onClick={() => {
              setActiveStageFilter('etapa4');
              setSelectedWeekNumber(16);
              if (viewMode === 'tips' || viewMode === 'welcome') setViewMode('poster');
            }}
            className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all ${
              activeStageFilter === 'etapa4' && viewMode !== 'tips' && viewMode !== 'welcome'
                ? 'bg-orange-600 text-white shadow-xs'
                : 'bg-orange-50 text-orange-900 hover:bg-orange-100 border border-orange-200'
            }`}
          >
            🌞 Etapa 4 (18-24m)
          </button>

          <button
            onClick={() => setViewMode('tips')}
            className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all ${
              viewMode === 'tips'
                ? 'bg-yellow-500 text-stone-900 shadow-xs font-black'
                : 'bg-yellow-50 text-yellow-900 hover:bg-yellow-100 border border-yellow-200'
            }`}
          >
            💡 Consejos Mamá
          </button>

          <button
            onClick={() => setViewMode('welcome')}
            className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all ${
              viewMode === 'welcome'
                ? 'bg-rose-500 text-white shadow-xs'
                : 'bg-rose-50 text-rose-800 hover:bg-rose-100 border border-rose-200'
            }`}
          >
            🌸 Bienvenida
          </button>
        </div>

        {/* 24 Weeks Carousel Pill Bar (Only if in table/poster/day/shopping mode) */}
        {viewMode !== 'tips' && viewMode !== 'welcome' && (
          <div className="flex items-center gap-2 overflow-x-auto py-1.5 border-t border-stone-100 no-scrollbar">
            {filteredWeeks.map((week) => {
              const isSelected = selectedWeekNumber === week.weekNumber;
              return (
                <button
                  key={week.weekNumber}
                  id={`week-btn-${week.weekNumber}`}
                  onClick={() => {
                    setSelectedWeekNumber(week.weekNumber);
                    setSelectedDayIndex(0);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-1.5 transition-all shrink-0 active-press ${
                    isSelected
                      ? 'bg-stone-900 text-white shadow-sm scale-105'
                      : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                  }`}
                >
                  <span>{week.stageEmoji}</span>
                  <span>Semana {week.weekNumber}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* View Mode Switcher Toolbar */}
        {viewMode !== 'tips' && viewMode !== 'welcome' && (
          <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-stone-100">
            <button
              onClick={() => setViewMode('poster')}
              className={`py-1.5 px-2 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all ${
                viewMode === 'poster'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span>Tabla / Lámina</span>
            </button>

            <button
              onClick={() => setViewMode('day_by_day')}
              className={`py-1.5 px-2 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all ${
                viewMode === 'day_by_day'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Día por Día</span>
            </button>

            <button
              onClick={() => setViewMode('shopping')}
              className={`py-1.5 px-2 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all ${
                viewMode === 'shopping'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Lista Compras</span>
            </button>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="p-3.5 space-y-4">
        {/* ========================================================================= */}
        {/* 1. VISTA BIENVENIDA MAMÁ */}
        {/* ========================================================================= */}
        {viewMode === 'welcome' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Visual Cover Poster Card */}
            <div className="bg-gradient-to-br from-amber-400 via-orange-500 to-teal-600 rounded-3xl p-6 text-white text-center shadow-lg relative overflow-hidden">
              <div className="absolute top-2 right-2 text-6xl opacity-20 pointer-events-none">🍼</div>
              <span className="inline-block px-3 py-1 bg-white/25 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-wider mb-3">
                Planificador Nutricional
              </span>
              <h2 className="text-2xl font-black font-display leading-tight mb-2">
                {PLANNER_WELCOME.coverBadge}
              </h2>
              <p className="text-sm text-amber-100 font-medium max-w-xs mx-auto mb-4">
                24 semanas completas organizadas con amor desde los 6 hasta los 24 meses.
              </p>
              <button
                onClick={() => setViewMode('poster')}
                className="py-2.5 px-6 rounded-2xl bg-white text-stone-900 font-black text-xs shadow-md active-press inline-flex items-center gap-2 hover:bg-amber-50"
              >
                <span>EMPEZAR CON SEMANA 1</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Letter for Mom */}
            <div className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-rose-600 font-black text-lg">
                <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
                <h3>{PLANNER_WELCOME.title}</h3>
              </div>
              <p className="text-xs text-stone-700 leading-relaxed font-normal">
                {PLANNER_WELCOME.body}
              </p>
              <div className="p-4 bg-amber-50/80 rounded-2xl border border-amber-100 text-amber-950 text-xs font-semibold text-center italic">
                “{PLANNER_WELCOME.quote}”
              </div>
            </div>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* 2. VISTA RECOMENDACIONES & CONSEJOS (8 REGLAS DE ORO DEL PDF) */}
        {/* ========================================================================= */}
        {viewMode === 'tips' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3.5"
          >
            {/* Header Card */}
            <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white p-5 rounded-3xl shadow-md">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-100 mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Recomendaciones Finales para Mamá</span>
              </div>
              <h2 className="text-xl font-black font-display">8 Consejos de Oro en la Mesa</h2>
              <p className="text-xs text-amber-100 mt-1">
                Acompaña la alimentación complementaria con tranquilidad, seguridad y mucho amor.
              </p>
            </div>

            {/* 8 Tips Cards */}
            <div className="space-y-3">
              {PLANNER_FINAL_TIPS.map((tip) => (
                <div
                  key={tip.number}
                  className="bg-white p-4 rounded-3xl border border-stone-200/80 shadow-2xs space-y-2"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-2xl bg-amber-100 text-amber-900 font-black text-sm flex items-center justify-center shrink-0 shadow-2xs">
                      {tip.icon}
                    </div>
                    <div className="flex-1">
                      <span className="text-[10px] font-black uppercase tracking-wider text-amber-700">
                        Regla #{tip.number}
                      </span>
                      <h4 className="text-sm font-extrabold text-stone-900 leading-snug">
                        {tip.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed font-normal pl-12">
                    {tip.description}
                  </p>

                  <div className="mt-2 p-2.5 bg-amber-50/60 rounded-xl border border-amber-100/80 text-[11px] font-bold text-amber-950 flex items-center gap-2">
                    <span className="text-amber-600 font-black">💡</span>
                    <span>{tip.highlight}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Final Message Quote */}
            <div className="p-5 bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-3xl shadow-md text-center space-y-2">
              <span className="text-2xl">🌱</span>
              <p className="text-xs font-semibold leading-relaxed">
                {PLANNER_FINAL_MESSAGE.quote}
              </p>
            </div>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* 3. VISTA LÁMINA / IMAGEN VISUAL COMPLETA (POSTER VIEW) */}
        {/* ========================================================================= */}
        {viewMode === 'poster' && (
          <motion.div
            key={`poster-${selectedWeekNumber}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            {/* Visual Digital Slide / Sheet Card (Formatted like the PDF Slide) */}
            <div
              id="weekly-poster-card"
              className="bg-white rounded-3xl border-2 border-stone-200 shadow-md overflow-hidden"
            >
              {/* Poster Header Banner */}
              <div
                className={`bg-gradient-to-r ${currentWeek.themeColor.headerBg} p-4 text-white relative overflow-hidden`}
              >
                <div className="absolute -right-4 -bottom-4 text-6xl opacity-15 pointer-events-none">
                  {currentWeek.stageEmoji}
                </div>

                <div className="flex items-center justify-between mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-xs text-[10px] font-extrabold uppercase tracking-wider">
                    {currentWeek.stageName} · {currentWeek.stageAgeRange}
                  </span>
                  <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-black/25">
                    Semana {currentWeek.weekNumber} de 24
                  </span>
                </div>

                <h2 className="text-lg font-black font-display leading-snug">
                  {currentWeek.title}
                </h2>
                <p className="text-xs text-white/90 mt-1 font-medium leading-relaxed">
                  {currentWeek.subtitle}
                </p>
              </div>

              {/* Action Toolbar on Poster */}
              <div className="bg-stone-50 border-b border-stone-200 px-3 py-2 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-stone-700">
                  <TableIcon className="w-3.5 h-3.5 text-teal-600" />
                  <span>Tabla Nutricional Completa</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setIsFullscreenModalOpen(true)}
                    className="py-1 px-2 rounded-lg bg-white hover:bg-stone-100 text-stone-700 border border-stone-200 text-[11px] font-bold flex items-center gap-1 shadow-2xs active-press"
                    title="Ver lámina ampliada a pantalla completa"
                  >
                    <Maximize2 className="w-3 h-3 text-stone-600" />
                    <span className="hidden sm:inline">Ampliar</span>
                  </button>

                  <button
                    onClick={handleCopyTableText}
                    className="py-1 px-2.5 rounded-lg bg-white hover:bg-stone-100 text-stone-700 border border-stone-200 text-[11px] font-bold flex items-center gap-1 shadow-2xs active-press"
                    title="Copiar texto de la tabla"
                  >
                    {tableCopied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span>¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-stone-500" />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleLoadShoppingList}
                    className="py-1 px-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold flex items-center gap-1 shadow-2xs active-press"
                  >
                    {copiedSuccess ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>¡Cargado!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-3 h-3" />
                        <span>+ Súper</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* High-Resolution Visual Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[520px]">
                  <thead>
                    <tr className="bg-stone-100 border-b border-stone-200 text-stone-800 text-[11px] font-black uppercase tracking-wider">
                      <th className="py-2.5 px-3 w-24">Día</th>
                      <th className="py-2.5 px-3">Desayuno ☀️</th>
                      <th className="py-2.5 px-3">Almuerzo 🍲</th>
                      <th className="py-2.5 px-3">Cena 🌙</th>
                      <th className="py-2.5 px-3">Snack 🍎</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-xs">
                    {currentWeek.days.map((day, idx) => (
                      <tr
                        key={idx}
                        className={`transition-colors ${
                          idx % 2 === 0 ? 'bg-white' : 'bg-stone-50/70'
                        } hover:bg-teal-50/50`}
                      >
                        <td className="py-2.5 px-3 font-extrabold text-stone-900 border-r border-stone-100 whitespace-nowrap bg-stone-50/40">
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                            <span>{day.dayName}</span>
                          </div>
                        </td>
                        <td className="py-2.5 px-3 text-stone-700 font-medium">
                          {day.desayuno}
                        </td>
                        <td className="py-2.5 px-3 font-bold text-stone-900 bg-emerald-50/30">
                          {day.almuerzo}
                        </td>
                        <td className="py-2.5 px-3 text-stone-700 font-medium">
                          {day.cena}
                        </td>
                        <td className="py-2.5 px-3 text-stone-600 font-normal">
                          {day.snack}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Attached Illustrated Shopping List Card (Exact match to PDF slide) */}
              <div className="p-4 bg-gradient-to-br from-stone-50 to-stone-100/80 border-t border-stone-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-base">
                      🛒
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-stone-900 uppercase tracking-wider">
                        Lista de Compras Ilustrada
                      </h4>
                      <p className="text-[10px] text-stone-500">
                        Ingredientes exactos calculados para la Semana {currentWeek.weekNumber}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleLoadShoppingList}
                    className="py-1.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-2xs active-press"
                  >
                    {copiedSuccess ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>¡Ingredientes cargados!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Cargar al Súper</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Categorized Shopping Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentWeek.shoppingList.map((cat, cIdx) => (
                    <div
                      key={cIdx}
                      className="bg-white p-3 rounded-2xl border border-stone-200/80 shadow-2xs space-y-1.5"
                    >
                      <div className="flex items-center gap-1.5 text-xs font-extrabold text-stone-900 border-b border-stone-100 pb-1">
                        <span>{cat.icon}</span>
                        <span>{cat.category}</span>
                      </div>
                      <ul className="space-y-1">
                        {cat.items.map((item, iIdx) => (
                          <li
                            key={iIdx}
                            className="text-[11px] text-stone-700 font-medium flex items-center gap-1.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Navigation footer to prev / next week */}
            <div className="flex items-center justify-between gap-3 pt-2">
              <button
                disabled={selectedWeekNumber <= 1}
                onClick={() => {
                  setSelectedWeekNumber((prev) => Math.max(1, prev - 1));
                  setSelectedDayIndex(0);
                }}
                className="flex-1 py-2.5 px-3 rounded-2xl bg-white border border-stone-200 text-stone-700 font-bold text-xs flex items-center justify-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-stone-50 active-press shadow-2xs"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Semana Anterior</span>
              </button>

              <span className="text-xs font-extrabold text-stone-500 whitespace-nowrap">
                {selectedWeekNumber} / 24
              </span>

              <button
                disabled={selectedWeekNumber >= 24}
                onClick={() => {
                  setSelectedWeekNumber((prev) => Math.min(24, prev + 1));
                  setSelectedDayIndex(0);
                }}
                className="flex-1 py-2.5 px-3 rounded-2xl bg-white border border-stone-200 text-stone-700 font-bold text-xs flex items-center justify-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-stone-50 active-press shadow-2xs"
              >
                <span>Siguiente Semana</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* 4. VISTA DÍA POR DÍA */}
        {/* ========================================================================= */}
        {viewMode === 'day_by_day' && (
          <motion.div
            key={`day-${selectedWeekNumber}-${selectedDayIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Week Title Card */}
            <div
              className={`bg-gradient-to-r ${currentWeek.themeColor.headerBg} p-4 rounded-3xl text-white shadow-md space-y-1`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20">
                  {currentWeek.stageName} · {currentWeek.stageAgeRange}
                </span>
                <span className="text-xs font-bold">Semana {currentWeek.weekNumber} de 24</span>
              </div>
              <h3 className="text-base font-black leading-tight">{currentWeek.title}</h3>
            </div>

            {/* Days Horizontal Tab Selector */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              {currentWeek.days.map((day, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedDayIndex(idx)}
                  className={`py-2 px-3 rounded-2xl text-xs font-black whitespace-nowrap transition-all active-press ${
                    selectedDayIndex === idx
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {day.dayName}
                </button>
              ))}
            </div>

            {/* Day Meal Breakdown Cards */}
            <div className="space-y-3">
              {/* Desayuno */}
              <div className="bg-white p-4 rounded-3xl border border-stone-200/80 shadow-2xs space-y-1.5">
                <div className="flex items-center gap-2 text-amber-600 text-xs font-extrabold">
                  <Sun className="w-4 h-4" />
                  <span>Desayuno</span>
                </div>
                <h4 className="text-sm font-black text-stone-900">{currentDay.desayuno}</h4>
              </div>

              {/* Almuerzo */}
              <div className="bg-white p-4 rounded-3xl border border-stone-200/80 shadow-2xs space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-600 text-xs font-extrabold">
                  <Utensils className="w-4 h-4" />
                  <span>Almuerzo (Comida Principal)</span>
                </div>
                <h4 className="text-sm font-black text-stone-900">{currentDay.almuerzo}</h4>
              </div>

              {/* Cena */}
              <div className="bg-white p-4 rounded-3xl border border-stone-200/80 shadow-2xs space-y-1.5">
                <div className="flex items-center gap-2 text-indigo-600 text-xs font-extrabold">
                  <Moon className="w-4 h-4" />
                  <span>Cena</span>
                </div>
                <h4 className="text-sm font-black text-stone-900">{currentDay.cena}</h4>
              </div>

              {/* Snack */}
              <div className="bg-white p-4 rounded-3xl border border-stone-200/80 shadow-2xs space-y-1.5">
                <div className="flex items-center gap-2 text-rose-600 text-xs font-extrabold">
                  <Apple className="w-4 h-4" />
                  <span>Snack / Merienda</span>
                </div>
                <h4 className="text-sm font-black text-stone-900">{currentDay.snack}</h4>
              </div>
            </div>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* 5. VISTA LISTA DE COMPRAS AISLADA */}
        {/* ========================================================================= */}
        {viewMode === 'shopping' && (
          <motion.div
            key={`shopping-${selectedWeekNumber}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="bg-emerald-600 text-white p-4 rounded-3xl shadow-md flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20">
                  Semana {currentWeek.weekNumber} · {currentWeek.stageAgeRange}
                </span>
                <h3 className="text-base font-black font-display mt-1">Lista de Compras</h3>
              </div>
              <button
                onClick={handleLoadShoppingList}
                className="py-2 px-3.5 rounded-2xl bg-white text-emerald-950 font-black text-xs shadow-xs active-press"
              >
                {copiedSuccess ? '¡Cargado!' : '+ Cargar al Súper'}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentWeek.shoppingList.map((cat, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-3xl border border-stone-200/80 shadow-2xs space-y-2"
                >
                  <div className="flex items-center gap-2 text-sm font-black text-stone-900 border-b border-stone-100 pb-1.5">
                    <span className="text-base">{cat.icon}</span>
                    <span>{cat.category}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {cat.items.map((item, iIdx) => (
                      <li
                        key={iIdx}
                        className="text-xs text-stone-700 font-medium flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* FULLSCREEN MODAL FOR POSTER ZOOM */}
      <AnimatePresence>
        {isFullscreenModalOpen && (
          <div
            id="planner-fullscreen-modal"
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col p-2 sm:p-6"
            onClick={() => setIsFullscreenModalOpen(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl mx-auto flex-1 flex flex-col bg-white rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Modal Top Bar */}
              <div
                className={`bg-gradient-to-r ${currentWeek.themeColor.headerBg} p-4 text-white flex items-center justify-between`}
              >
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20">
                    Semana {currentWeek.weekNumber} · {currentWeek.stageAgeRange}
                  </span>
                  <h3 className="text-base font-black">{currentWeek.title}</h3>
                </div>
                <button
                  onClick={() => setIsFullscreenModalOpen(false)}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white active-press"
                  aria-label="Cerrar"
                >
                  <Minimize2 className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Table & Shopping in Modal */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <div className="overflow-x-auto border border-stone-200 rounded-2xl">
                  <table className="w-full text-left border-collapse min-w-[580px]">
                    <thead>
                      <tr className="bg-stone-100 border-b border-stone-200 text-stone-800 text-xs font-black uppercase">
                        <th className="py-2.5 px-3">Día</th>
                        <th className="py-2.5 px-3">Desayuno ☀️</th>
                        <th className="py-2.5 px-3">Almuerzo 🍲</th>
                        <th className="py-2.5 px-3">Cena 🌙</th>
                        <th className="py-2.5 px-3">Snack 🍎</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-xs">
                      {currentWeek.days.map((day, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-stone-50/70'}>
                          <td className="py-2.5 px-3 font-extrabold text-stone-900 border-r border-stone-100">
                            {day.dayName}
                          </td>
                          <td className="py-2.5 px-3 text-stone-700">{day.desayuno}</td>
                          <td className="py-2.5 px-3 font-bold text-stone-900 bg-emerald-50/40">{day.almuerzo}</td>
                          <td className="py-2.5 px-3 text-stone-700">{day.cena}</td>
                          <td className="py-2.5 px-3 text-stone-600">{day.snack}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
                  <h4 className="text-xs font-black uppercase text-stone-900 mb-3 flex items-center gap-1.5">
                    <span>🛒</span>
                    <span>Lista de Compras de la Semana {currentWeek.weekNumber}</span>
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {currentWeek.shoppingList.map((cat, idx) => (
                      <div key={idx} className="bg-white p-3 rounded-xl border border-stone-200 text-xs">
                        <span className="font-extrabold text-stone-900 flex items-center gap-1 mb-1">
                          <span>{cat.icon}</span>
                          <span>{cat.category}</span>
                        </span>
                        <ul className="space-y-0.5">
                          {cat.items.map((item, iIdx) => (
                            <li key={iIdx} className="text-[11px] text-stone-600">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
