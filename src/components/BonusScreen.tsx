import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Shield,
  ChefHat,
  BookOpen,
  Calendar,
  Layers,
  Heart,
  Award,
  ChevronRight,
  Utensils
} from 'lucide-react';
import { AllergensGuideScreen } from './AllergensGuideScreen';
import { BonusRecipesScreen } from './BonusRecipesScreen';
import { MedicalGuideScreen } from './MedicalGuideScreen';
import { WeeklyMenuScreen } from './WeeklyMenuScreen';
import { useApp } from '../context/AppContext';

export type BonusSubSection = 'alergenos' | 'recetas_70' | 'guia_medica' | 'planner_24s';

interface BonusScreenProps {
  initialSubSection?: BonusSubSection;
  onBack?: () => void;
}

export const BonusScreen: React.FC<BonusScreenProps> = ({
  initialSubSection = 'alergenos',
  onBack
}) => {
  const { setExtendedView } = useApp();
  const [activeSection, setActiveSection] = useState<BonusSubSection>(initialSubSection);

  const bonusModules = [
    {
      id: 'alergenos' as BonusSubSection,
      title: 'Todo sobre Alérgenos',
      badge: '6 a 24 Meses',
      subtitle: 'Tabla por edad, regla de 3 días & protocolo',
      icon: Shield,
      color: 'from-teal-600 to-emerald-700',
      activeBorder: 'border-teal-600',
      activeBg: 'bg-teal-700 text-white',
      badgeBg: 'bg-teal-100 text-teal-900',
      emoji: '🛡️'
    },
    {
      id: 'recetas_70' as BonusSubSection,
      title: '70 Recetas Nutritivas',
      badge: '12 a 24 Meses',
      subtitle: '30 de 12-18m + 40 de 18-24m sin sal ni azúcar',
      icon: Sparkles,
      color: 'from-amber-500 to-orange-600',
      activeBorder: 'border-amber-600',
      activeBg: 'bg-amber-600 text-white',
      badgeBg: 'bg-amber-100 text-amber-900',
      emoji: '🎁'
    },
    {
      id: 'guia_medica' as BonusSubSection,
      title: 'Guía del Pediatra',
      badge: 'Manual Clínico',
      subtitle: 'Por el Dr. Roberto Hernández',
      icon: BookOpen,
      color: 'from-rose-500 to-pink-600',
      activeBorder: 'border-rose-600',
      activeBg: 'bg-rose-600 text-white',
      badgeBg: 'bg-rose-100 text-rose-900',
      emoji: '🩺'
    },
    {
      id: 'planner_24s' as BonusSubSection,
      title: 'Planner 24 Semanas',
      badge: 'Menús 6-24m',
      subtitle: 'Tablas completas & listas de compras',
      icon: Calendar,
      color: 'from-blue-600 to-indigo-700',
      activeBorder: 'border-blue-600',
      activeBg: 'bg-blue-700 text-white',
      badgeBg: 'bg-blue-100 text-blue-900',
      emoji: '📅'
    }
  ];

  return (
    <div id="bonus-main-screen" className="flex-1 flex flex-col h-full overflow-hidden bg-stone-100">
      {/* Top Main Bonus Tab Header */}
      <div className="shrink-0 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200 px-4 pt-3 pb-2 shadow-2xs">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-500 text-white flex items-center justify-center shadow-xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-950 text-[10px] font-black uppercase tracking-wider">
                  Contenido Exclusivo
                </span>
              </div>
              <h1 className="text-base font-black text-stone-900 leading-tight">
                Módulos Bonus & Guías Especiales
              </h1>
            </div>
          </div>
        </div>

        {/* Horizontal Navigation Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 text-xs font-black">
          {bonusModules.map((module) => {
            const isSelected = activeSection === module.id;
            return (
              <button
                key={module.id}
                id={`bonus-subnav-${module.id}`}
                onClick={() => setActiveSection(module.id)}
                className={`py-2 px-3 rounded-2xl whitespace-nowrap transition-all flex items-center gap-1.5 active-press ${
                  isSelected
                    ? `${module.activeBg} shadow-xs`
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                <span>{module.emoji}</span>
                <span>{module.title}</span>
                <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-stone-200 text-stone-600'
                }`}>
                  {module.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Render Active Sub-section inside a dedicated scrollable area */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <AnimatePresence mode="wait">
          {activeSection === 'alergenos' && (
            <motion.div
              key="alergenos-sub"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              className="min-h-full"
            >
              <AllergensGuideScreen />
            </motion.div>
          )}

          {activeSection === 'recetas_70' && (
            <motion.div
              key="recetas-sub"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              className="min-h-full"
            >
              <BonusRecipesScreen />
            </motion.div>
          )}

          {activeSection === 'guia_medica' && (
            <motion.div
              key="guia-medica-sub"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              className="min-h-full"
            >
              <MedicalGuideScreen />
            </motion.div>
          )}

          {activeSection === 'planner_24s' && (
            <motion.div
              key="planner-sub"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              className="min-h-full"
            >
              <WeeklyMenuScreen />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
