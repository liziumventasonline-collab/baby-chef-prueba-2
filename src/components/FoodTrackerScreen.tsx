import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { FoodTrackerItem, FoodStatus } from '../types';
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Plus,
  Sparkles,
  Info,
  Apple,
  Carrot,
  Fish,
  Wheat,
  Droplet
} from 'lucide-react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';

export const FoodTrackerScreen: React.FC = () => {
  const { foodsTracker, updateFoodStatus, addCustomFood, setExtendedView, baby } = useApp();

  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [newFoodName, setNewFoodName] = useState('');
  const [newFoodCat, setNewFoodCat] = useState<FoodTrackerItem['category']>('frutas');

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'frutas', label: '🍎 Frutas' },
    { id: 'verduras', label: '🥕 Verduras' },
    { id: 'proteinas', label: '🍗 Proteínas' },
    { id: 'cereales', label: '🌾 Cereales' },
    { id: 'grasas', label: '🥑 Grasas' }
  ];

  const filteredFoods = foodsTracker.filter(
    food => activeCategory === 'todos' || food.category === activeCategory
  );

  const acceptedCount = foodsTracker.filter(f => f.status === 'accepted').length;
  const tryingCount = foodsTracker.filter(f => f.status === 'trying').length;
  const reactionCount = foodsTracker.filter(f => f.status === 'reaction').length;

  const handleCycleStatus = (food: FoodTrackerItem) => {
    const sequence: FoodStatus[] = ['untried', 'trying', 'accepted', 'reaction'];
    const currentIndex = sequence.indexOf(food.status);
    const nextStatus = sequence[(currentIndex + 1) % sequence.length];

    updateFoodStatus(food.id, nextStatus);

    if (nextStatus === 'accepted') {
      try {
        confetti({
          particleCount: 40,
          spread: 50,
          origin: { y: 0.7 }
        });
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleAddFood = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFoodName.trim()) return;
    addCustomFood(newFoodName, newFoodCat);
    setNewFoodName('');
  };

  const getStatusBadge = (status: FoodStatus) => {
    switch (status) {
      case 'accepted':
        return (
          <span className="px-2.5 py-1 rounded-xl bg-[#EAF2EB] text-[#2D5A3C] text-[11px] font-bold flex items-center gap-1">
            <span>😋 Tolerado</span>
          </span>
        );
      case 'trying':
        return (
          <span className="px-2.5 py-1 rounded-xl bg-[#FFF8E7] text-[#D97706] text-[11px] font-bold flex items-center gap-1">
            <span>⏳ En prueba</span>
          </span>
        );
      case 'reaction':
        return (
          <span className="px-2.5 py-1 rounded-xl bg-[#FEF2F2] text-[#DC2626] text-[11px] font-bold flex items-center gap-1">
            <span>⚠️ Reacción</span>
          </span>
        );
      default:
        return (
          <span className="px-2.5 py-1 rounded-xl bg-[#FAF7F2] text-[#78716C] text-[11px] font-semibold border border-[#E7E5E4]">
            ⚪ Por probar
          </span>
        );
    }
  };

  return (
    <div id="food-tracker-screen" className="flex-1 overflow-y-auto px-4 pt-3 pb-24 no-scrollbar">
      {/* Top Bar */}
      <div className="flex items-center gap-2 mb-3">
        <button
          id="tracker-back-btn"
          onClick={() => setExtendedView('none')}
          className="p-2 -ml-2 text-[#57534E] hover:text-[#292524] rounded-full active-press"
          aria-label="Volver"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-2xl font-bold text-[#292524] tracking-tight font-display">
            Regla de los 3 Días
          </h2>
          <p className="text-xs text-[#78716C]">
            Registro de alimentos probados y tolerancia
          </p>
        </div>
      </div>

      {/* Summary Scoreboard */}
      <div className="grid grid-cols-3 gap-2.5 mb-4">
        <div className="bg-[#EAF2EB] p-3 rounded-2xl border border-[#4A7C59]/20 text-center">
          <span className="text-xl font-black text-[#2D5A3C]">{acceptedCount}</span>
          <span className="text-[10px] uppercase font-bold text-[#4A7C59] block mt-0.5">
            Tolerados
          </span>
        </div>

        <div className="bg-[#FFF8E7] p-3 rounded-2xl border border-[#D97706]/20 text-center">
          <span className="text-xl font-black text-[#D97706]">{tryingCount}</span>
          <span className="text-[10px] uppercase font-bold text-[#B45309] block mt-0.5">
            En prueba
          </span>
        </div>

        <div className="bg-[#FAF7F2] p-3 rounded-2xl border border-[#E7E5E4] text-center">
          <span className="text-xl font-black text-[#78716C]">
            {foodsTracker.filter(f => f.status === 'untried').length}
          </span>
          <span className="text-[10px] uppercase font-bold text-[#78716C] block mt-0.5">
            Por probar
          </span>
        </div>
      </div>

      {/* Guide Banner */}
      <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#E7E5E4] text-xs text-[#57534E] mb-4 flex items-start gap-2.5">
        <Info className="w-4 h-4 text-[#DE5D43] shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          Ofrece cada alimento nuevo durante <strong>3 días seguidos</strong> por separado antes del mediodía para identificar rápidamente cualquier reacción cutánea o digestiva. Toca un alimento para cambiar su estado.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 -mx-4 px-4 mb-3">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap active-press transition-all shrink-0 ${
              activeCategory === cat.id
                ? 'bg-[#292524] text-white shadow-xs'
                : 'bg-white text-[#78716C] border border-[#E7E5E4]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Food Items List */}
      <div className="space-y-2 mb-5">
        {filteredFoods.map(food => (
          <motion.div
            key={food.id}
            layout
            onClick={() => handleCycleStatus(food)}
            className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-[#E7E5E4] shadow-xs active-press cursor-pointer hover:border-[#E06D53]/40 transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-[#292524]">
                {food.foodName}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#FAF7F2] text-[#78716C] border border-[#E7E5E4]">
                {food.categoryLabel}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {getStatusBadge(food.status)}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Custom Food Form */}
      <div className="bg-white p-4 rounded-3xl border border-[#E7E5E4] shadow-xs">
        <h4 className="text-xs font-bold text-[#292524] uppercase tracking-wider mb-2.5">
          + Agregar otro alimento
        </h4>

        <form onSubmit={handleAddFood} className="space-y-2.5">
          <input
            type="text"
            value={newFoodName}
            onChange={e => setNewFoodName(e.target.value)}
            placeholder="Nombre del alimento (ej. Espárragos)"
            className="w-full px-3.5 py-2.5 text-xs font-medium bg-[#FAF7F2] rounded-xl border border-[#E7E5E4] focus:outline-none focus:border-[#E06D53]"
          />

          <div className="flex gap-2">
            <select
              value={newFoodCat}
              onChange={e => setNewFoodCat(e.target.value as any)}
              className="flex-1 px-3 py-2 text-xs font-medium bg-[#FAF7F2] rounded-xl border border-[#E7E5E4]"
            >
              <option value="frutas">Frutas</option>
              <option value="verduras">Verduras</option>
              <option value="proteinas">Proteínas</option>
              <option value="cereales">Cereales</option>
              <option value="grasas">Grasas</option>
            </select>

            <button
              type="submit"
              disabled={!newFoodName.trim()}
              className="px-4 py-2 bg-[#E06D53] disabled:opacity-40 text-white rounded-xl text-xs font-bold active-press"
            >
              Agregar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
