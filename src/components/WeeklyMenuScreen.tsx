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
  Clock,
  Sparkles
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { WEEKLY_MENUS_DATA } from '../data/weeklyMenus';
import { WEEKLY_SHOPPING_TEMPLATES } from '../data/weeklyShopping';

interface WeeklyMenuScreenProps {
  onBack?: () => void;
}

export const WeeklyMenuScreen: React.FC<WeeklyMenuScreenProps> = ({ onBack }) => {
  const { babyProfile, addShoppingItem, setExtendedView } = useAppContext();

  // Compute default month based on baby profile or default to 6
  const babyMonthAge = babyProfile?.birthDate
    ? Math.max(6, Math.min(24, Math.floor((Date.now() - new Date(babyProfile.birthDate).getTime()) / (1000 * 60 * 60 * 24 * 30.44))))
    : 6;

  const [selectedMonth, setSelectedMonth] = useState<number>(babyMonthAge);
  const [selectedWeek, setSelectedWeek] = useState<number>(1);
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  // Available months in dataset
  const availableMonths = [6, 7, 8, 9, 10, 11, 12, 13, 18, 24];

  // Find current plan
  const currentPlan =
    WEEKLY_MENUS_DATA.find((p) => p.month === selectedMonth && p.week === selectedWeek) ||
    WEEKLY_MENUS_DATA.find((p) => p.month === selectedMonth) ||
    WEEKLY_MENUS_DATA[0];

  const currentDay = currentPlan.days[selectedDayIndex] || currentPlan.days[0];

  // Handler for adding weekly shopping list
  const handleAddWeekToShopping = () => {
    const shoppingTemplate =
      WEEKLY_SHOPPING_TEMPLATES.find((s) => s.month === selectedMonth && s.week === selectedWeek) ||
      WEEKLY_SHOPPING_TEMPLATES.find((s) => s.month === selectedMonth) ||
      WEEKLY_SHOPPING_TEMPLATES[0];

    if (shoppingTemplate) {
      shoppingTemplate.items.forEach((item) => {
        addShoppingItem({
          name: item.name,
          amount: item.amount,
          category: item.category || 'Varios',
          recipeSource: `Menú Mes ${selectedMonth} - Sem ${selectedWeek}`
        });
      });
      setCopiedSuccess(true);
      setTimeout(() => setCopiedSuccess(false), 3000);
    }
  };

  return (
    <div className="flex flex-col min-h-full bg-stone-50 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-stone-100 px-4 py-3 shadow-2xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {onBack && (
              <button
                onClick={onBack}
                className="p-2 rounded-xl bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors"
                aria-label="Volver"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            <div>
              <h1 className="text-lg font-black text-stone-900 leading-tight">Calendario Semanal</h1>
              <p className="text-xs text-stone-500 font-medium">Plan nutricional día por día (6 a 24 meses)</p>
            </div>
          </div>

          <button
            onClick={() => setExtendedView('compras')}
            className="p-2 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors relative"
            title="Ir a lista de compras"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>

        {/* Month Selector Carousel */}
        <div className="flex items-center gap-2 overflow-x-auto py-2.5 no-scrollbar">
          {availableMonths.map((m) => (
            <button
              key={m}
              onClick={() => {
                setSelectedMonth(m);
                setSelectedDayIndex(0);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                selectedMonth === m
                  ? 'bg-emerald-600 text-white shadow-xs scale-105'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {m === 24 ? '2 Años (24m)' : m === 12 ? '1 Año (12m)' : `Mes ${m}`}
            </button>
          ))}
        </div>

        {/* Week Selector Tabs */}
        <div className="flex items-center gap-2 pt-1 border-t border-stone-100">
          {[1, 2, 3, 4].map((w) => {
            const exists = WEEKLY_MENUS_DATA.some((p) => p.month === selectedMonth && p.week === w);
            return (
              <button
                key={w}
                onClick={() => {
                  setSelectedWeek(w);
                  setSelectedDayIndex(0);
                }}
                disabled={!exists}
                className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedWeek === w
                    ? 'bg-amber-100 text-amber-900 border border-amber-300'
                    : exists
                    ? 'bg-stone-50 text-stone-600 hover:bg-stone-100 border border-stone-200'
                    : 'bg-stone-50 text-stone-300 border border-stone-100 cursor-not-allowed'
                }`}
              >
                Semana {w}
              </button>
            );
          })}
        </div>
      </div>

      {/* Plan Header Details */}
      <div className="p-4 space-y-4">
        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-4 rounded-3xl shadow-md space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-xs">
              Etapa: {selectedMonth >= 12 ? `${selectedMonth} Meses` : `${selectedMonth}º Mes de Vida`}
            </span>
            <span className="text-xs font-medium text-emerald-100">Semana {selectedWeek} de 4</span>
          </div>

          <h2 className="text-base font-bold leading-snug">{currentPlan.title}</h2>
          {currentPlan.subtitle && (
            <p className="text-xs text-emerald-100 font-normal leading-relaxed">{currentPlan.subtitle}</p>
          )}

          {/* Quick load shopping list action */}
          <div className="pt-2">
            <button
              onClick={handleAddWeekToShopping}
              className={`w-full py-2.5 px-4 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-all ${
                copiedSuccess
                  ? 'bg-white text-emerald-800'
                  : 'bg-white/90 hover:bg-white text-emerald-950 active:scale-98'
              }`}
            >
              {copiedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  ¡Lista de compras cargada con éxito!
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4 text-emerald-700" />
                  Cargar lista de ingredientes al Súper
                </>
              )}
            </button>
          </div>
        </div>

        {/* Days of the Week Selector Pills */}
        <div className="flex items-center justify-between gap-1 overflow-x-auto py-1">
          {currentPlan.days.map((day, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedDayIndex(idx)}
              className={`flex-1 min-w-[42px] py-2 px-1 rounded-2xl text-center flex flex-col items-center gap-1 transition-all ${
                selectedDayIndex === idx
                  ? 'bg-stone-900 text-white shadow-sm font-bold scale-105'
                  : 'bg-white text-stone-600 border border-stone-200 font-medium hover:bg-stone-50'
              }`}
            >
              <span className="text-[10px] uppercase tracking-wider">{day.dayName.slice(0, 3)}</span>
              <span
                className={`w-2 h-2 rounded-full ${
                  selectedDayIndex === idx ? 'bg-emerald-400' : 'bg-stone-300'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Day Card View */}
        <motion.div
          key={`${selectedMonth}-${selectedWeek}-${selectedDayIndex}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-3xl border border-stone-100 p-5 shadow-xs space-y-4"
        >
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <div>
              <span className="text-[11px] font-bold uppercase text-emerald-700">Día de la semana</span>
              <h3 className="text-lg font-black text-stone-900">{currentDay.dayName}</h3>
            </div>
            <div className="p-2 rounded-xl bg-amber-50 text-amber-700">
              <Calendar className="w-5 h-5" />
            </div>
          </div>

          {/* Meal 1: Desayuno / Fruta Mañana */}
          {currentDay.desayuno && (
            <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-amber-50/50 border border-amber-100/70">
              <div className="p-2 rounded-xl bg-amber-100 text-amber-800 shrink-0 mt-0.5">
                <Sun className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800">
                  Desayuno / Mañana
                </span>
                <p className="text-xs font-semibold text-stone-800 leading-snug">{currentDay.desayuno}</p>
              </div>
            </div>
          )}

          {/* Meal 2: Almuerzo / Comida Principal */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-100">
            <div className="p-2 rounded-xl bg-emerald-600 text-white shrink-0 mt-0.5 shadow-2xs">
              <Utensils className="w-4 h-4" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                Almuerzo Principal
              </span>
              <p className="text-xs font-bold text-stone-900 leading-snug">{currentDay.almuerzo}</p>
            </div>
          </div>

          {/* Meal 3: Colación / Merienda Tarde */}
          {currentDay.colacionTarde && (
            <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-orange-50/50 border border-orange-100/70">
              <div className="p-2 rounded-xl bg-orange-100 text-orange-800 shrink-0 mt-0.5">
                <Sunset className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-800">
                  Colación / Tarde
                </span>
                <p className="text-xs font-semibold text-stone-800 leading-snug">{currentDay.colacionTarde}</p>
              </div>
            </div>
          )}

          {/* Meal 4: Cena */}
          {currentDay.cena && (
            <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-indigo-50/50 border border-indigo-100/70">
              <div className="p-2 rounded-xl bg-indigo-100 text-indigo-800 shrink-0 mt-0.5">
                <Moon className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-800">
                  Cena Ligera
                </span>
                <p className="text-xs font-semibold text-stone-800 leading-snug">{currentDay.cena}</p>
              </div>
            </div>
          )}

          {/* Notes / Tips for this day */}
          {currentDay.notas && (
            <div className="p-3 bg-stone-50 rounded-2xl border border-stone-100 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-[11px] text-stone-600 font-medium leading-relaxed">
                <strong className="text-stone-800 font-bold">Consejo: </strong>
                {currentDay.notas}
              </p>
            </div>
          )}
        </motion.div>

        {/* General Stage Summary Rules */}
        {currentPlan.summaryNotes && currentPlan.summaryNotes.length > 0 && (
          <div className="bg-white p-4 rounded-3xl border border-stone-100 space-y-2">
            <h4 className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Reglas de Oro para esta Semana:
            </h4>
            <ul className="space-y-1.5">
              {currentPlan.summaryNotes.map((note, nIdx) => (
                <li key={nIdx} className="text-xs text-stone-600 flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
