import React, { useEffect, useRef, useState } from 'react';
import { useApp } from '../context/AppContext';
import { FEEDING_STAGES } from '../data/feedingStages';
import { calculateBabyAge, getRecommendedStageMonth } from '../utils/helpers';
import { RegionalGlossaryModal } from './RegionalGlossaryModal';
import {
  AlertTriangle,
  CheckCircle,
  Clock,
  Sparkles,
  Utensils,
  Carrot,
  Apple,
  Fish,
  Wheat,
  Droplet,
  ChefHat,
  ArrowRight,
  ShieldAlert,
  Flame,
  Info,
  Calendar,
  Globe2,
  BookMarked
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const AlimentacionScreen: React.FC = () => {
  const {
    baby,
    selectedStageMonth,
    setSelectedStageMonth,
    setActiveTab,
    setExtendedView,
    recipes
  } = useApp();

  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);

  const age = calculateBabyAge(baby.birthDate);
  const babyActualStage = getRecommendedStageMonth(age.months);

  const scrollRef = useRef<HTMLDivElement>(null);

  // Default to baby's actual stage if not set
  useEffect(() => {
    if (!selectedStageMonth) {
      setSelectedStageMonth(babyActualStage);
    }
  }, [babyActualStage, selectedStageMonth, setSelectedStageMonth]);

  const currentStage = FEEDING_STAGES.find((s) => s.month === selectedStageMonth) || FEEDING_STAGES[0];
  const stageRecipesCount = recipes.filter((r) => r.stageMonths <= selectedStageMonth).length;

  const monthsList = [6, 7, 8, 9, 10, 11, 12];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Carrot':
        return <Carrot className="w-4 h-4 text-orange-600" />;
      case 'Apple':
        return <Apple className="w-4 h-4 text-emerald-600" />;
      case 'Fish':
        return <Fish className="w-4 h-4 text-sky-600" />;
      case 'Wheat':
        return <Wheat className="w-4 h-4 text-amber-600" />;
      case 'Droplet':
        return <Droplet className="w-4 h-4 text-teal-600" />;
      default:
        return <Sparkles className="w-4 h-4 text-emerald-600" />;
    }
  };

  return (
    <div id="alimentacion-screen" className="flex-1 overflow-y-auto px-4 pt-3 pb-36 no-scrollbar bg-stone-50">
      {/* Title & Baby Context */}
      <div className="mb-3">
        <h2 className="text-2xl font-black text-stone-900 tracking-tight font-display">
          Alimentación
        </h2>
        <p className="text-xs text-stone-500 font-medium">
          Guía nutricional paso a paso según la edad de desarrollo
        </p>

        {/* Alérgenos Quick Access Banner */}
        <div
          onClick={() => setExtendedView('todo_alergenos')}
          className="mt-3 p-3 rounded-2xl bg-gradient-to-r from-teal-700 via-emerald-700 to-teal-800 text-white shadow-2xs active-press cursor-pointer flex items-center justify-between"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-base shrink-0">
              🛡️
            </div>
            <div>
              <span className="text-[9px] font-black uppercase px-1.5 py-0.2 rounded bg-black/20 text-white">
                Guía Pediátrica
              </span>
              <h3 className="text-xs font-black text-white leading-tight mt-0.5">
                Todo sobre Alérgenos en Bebés (6–24m)
              </h3>
              <p className="text-[10px] text-teal-100 font-medium">
                Tabla por edad, regla de 3 días & protocolo de urgencias
              </p>
            </div>
          </div>
          <span className="py-1 px-2.5 rounded-xl bg-white text-teal-950 text-xs font-black shrink-0">
            Ver →
          </span>
        </div>
      </div>

      {/* 1. Horizontal Scrollable Month Selector */}
      <div
        ref={scrollRef}
        className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 -mx-4 px-4 sticky top-14 bg-stone-50/95 backdrop-blur-md z-20 border-b border-stone-200/60 mb-4"
      >
        {monthsList.map((month) => {
          const isSelected = selectedStageMonth === month;
          const isBabyMonth = babyActualStage === month;

          return (
            <button
              key={month}
              id={`stage-month-pill-${month}`}
              onClick={() => setSelectedStageMonth(month)}
              className={`relative px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap active-press transition-all shrink-0 flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-900/20 scale-102'
                  : 'bg-white text-stone-700 border border-stone-200 hover:border-emerald-300'
              }`}
            >
              <span>{month === 12 ? '12 meses+' : `${month} meses`}</span>
              {isBabyMonth && (
                <span
                  className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold uppercase tracking-tight ${
                    isSelected ? 'bg-white text-emerald-800' : 'bg-emerald-100 text-emerald-800'
                  }`}
                >
                  Actual
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Stage Content with Animated Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedStageMonth}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          {/* Stage Overview Banner */}
          <div className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-2xs">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                  Etapa {currentStage.label}
                </span>
                <h3 className="text-xl font-extrabold text-stone-900 font-display mt-1.5">
                  {currentStage.title}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-stone-50 flex items-center justify-center text-xl shrink-0 border border-stone-200">
                👶
              </div>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              {currentStage.subtitle}
            </p>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-stone-100">
              <div className="bg-stone-50 p-3 rounded-2xl border border-stone-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-0.5">
                  Frecuencia diaria
                </span>
                <span className="text-xs font-bold text-stone-900 leading-tight block">
                  {currentStage.dailyFrequency}
                </span>
              </div>

              <div className="bg-stone-50 p-3 rounded-2xl border border-stone-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-0.5">
                  Rol de la Leche
                </span>
                <span className="text-xs font-bold text-stone-900 leading-tight block">
                  {currentStage.milkFeeding}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Action Plan: Ver Menú Semanal de este mes */}
          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={() => setExtendedView('calendario_semanal')}
              className="p-3.5 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200/80 shadow-2xs flex flex-col justify-between text-left active-press hover:border-emerald-400 transition-all"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-2 shadow-2xs">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-stone-900 block leading-tight">
                  Menús Semanales
                </span>
                <span className="text-[10px] text-emerald-800 font-medium">
                  Plan día a día con compras
                </span>
              </div>
            </button>

            <button
              onClick={() => setIsGlossaryOpen(true)}
              className="p-3.5 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/80 shadow-2xs flex flex-col justify-between text-left active-press hover:border-amber-400 transition-all"
            >
              <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center mb-2 shadow-2xs">
                <Globe2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-stone-900 block leading-tight">
                  Glosario de Nombres
                </span>
                <span className="text-[10px] text-amber-900 font-medium">
                  Sinónimos Latinoamérica
                </span>
              </div>
            </button>
          </div>

          {/* 2. Textura y Desarrollo Oral-Motor */}
          <div className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-2xs space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Utensils className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900 font-display">
                  Textura y desarrollo motor
                </h4>
                <p className="text-[11px] text-emerald-700 font-bold">
                  {currentStage.textureSummary}
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed bg-stone-50 p-3 rounded-2xl border border-stone-100">
              {currentStage.textureDetails}
            </p>

            <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-100 text-amber-900 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs block font-bold">Hito clave de esta etapa:</strong>
                <span className="text-xs leading-relaxed">{currentStage.keyMilestone}</span>
              </div>
            </div>
          </div>

          {/* 3. Alimentos Permitidos por Grupo */}
          <div className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-stone-900 font-display flex items-center gap-2">
                <span>🥗 Alimentos aptos para este mes</span>
              </h4>
            </div>

            <div className="space-y-3">
              {currentStage.allowedFoods.map((cat, idx) => (
                <div key={idx} className="bg-stone-50 rounded-2xl p-3.5 border border-stone-100">
                  <div className="flex items-center gap-2 mb-2">
                    {getCategoryIcon(cat.icon)}
                    <h5 className="text-[11px] font-bold text-stone-800 uppercase tracking-wider">
                      {cat.category}
                    </h5>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="text-xs font-medium px-2.5 py-1 rounded-xl bg-white border border-stone-200 text-stone-800 shadow-2xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Preparaciones & Técnicas de Cocina */}
          <div className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-2xs">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <ChefHat className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-stone-900 font-display">
                Preparaciones y cortes seguros
              </h4>
            </div>

            <div className="space-y-2.5">
              {currentStage.preparations.map((prep, pIdx) => (
                <div key={pIdx} className="p-3.5 rounded-2xl bg-stone-50 border border-stone-100 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white text-amber-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border border-stone-200">
                    {pIdx + 1}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-stone-900 mb-0.5">
                      {prep.title}
                    </h5>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {prep.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Recomendaciones Nutricionales */}
          <div className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-2xs">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center">
                <Info className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-stone-900 font-display">
                Recomendaciones pediátricas
              </h4>
            </div>

            <ul className="space-y-2 text-xs text-stone-600">
              {currentStage.recommendations.map((rec, rIdx) => (
                <li key={rIdx} className="flex items-start gap-2 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 6. IMPORTANTE: Advertencias y Prohibiciones */}
          <div className="bg-rose-50/60 rounded-3xl p-5 border border-rose-200 shadow-2xs">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-rose-900 font-display">
                Importante: Alimentos no permitidos
              </h4>
            </div>

            <div className="space-y-2">
              {currentStage.importantWarnings.map((warn, wIdx) => (
                <div key={wIdx} className="text-xs font-semibold text-rose-900 bg-white p-2.5 rounded-xl border border-rose-100 leading-relaxed shadow-2xs">
                  {warn}
                </div>
              ))}
            </div>
          </div>

          {/* CTA: Ver recetas para este mes */}
          <div className="pt-2">
            <button
              id="stage-see-recipes-btn"
              onClick={() => setActiveTab('recetas')}
              className="w-full py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-2xl shadow-md flex items-center justify-center gap-2 active-press transition-all"
            >
              <ChefHat className="w-4 h-4" />
              <span>Ver recetas para {currentStage.label} ({stageRecipesCount})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Regional Glossary Modal */}
      <RegionalGlossaryModal
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
      />
    </div>
  );
};
