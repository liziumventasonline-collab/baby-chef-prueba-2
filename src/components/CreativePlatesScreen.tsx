import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Sparkles, Heart, Apple, Check } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { RECIPES_DATA } from '../data/recipes';

interface CreativePlatesScreenProps {
  onBack?: () => void;
}

export const CreativePlatesScreen: React.FC<CreativePlatesScreenProps> = ({ onBack }) => {
  const { setSelectedRecipeId, setExtendedView } = useAppContext();

  const creativeRecipes = RECIPES_DATA.filter((r) => r.category === 'creativos');

  return (
    <div className="flex flex-col min-h-full bg-stone-50 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-stone-100 px-4 py-3 shadow-2xs">
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
            <h1 className="text-lg font-black text-stone-900 leading-tight">Platitos Creativos</h1>
            <p className="text-xs text-stone-500 font-medium">Presentaciones lúdicas para estimular el apetito</p>
          </div>
        </div>
      </div>

      {/* Intro banner */}
      <div className="p-4 space-y-4">
        <div className="p-4 rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm space-y-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-200" />
            <h2 className="text-sm font-bold">Nutrición Visual & Estimulación Positiva</h2>
          </div>
          <p className="text-xs text-amber-50 leading-relaxed">
            Los bebés exploran primero con la mirada. Estas presentaciones lúdicas transforman la hora de la comida en una experiencia divertida y reducen la neofobia o rechazo a nuevos alimentos.
          </p>
        </div>

        {/* Plates Cards */}
        <div className="space-y-4">
          {creativeRecipes.map((recipe) => (
            <motion.div
              key={recipe.id}
              whileTap={{ scale: 0.99 }}
              className="bg-white rounded-3xl border border-stone-100 shadow-xs overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 w-full bg-stone-100 overflow-hidden">
                <img
                  src={recipe.imageUrl}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-bold text-amber-800 shadow-xs">
                  {recipe.ageLabel}
                </div>
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white px-2.5 py-1 rounded-full text-[10px] font-medium">
                  {recipe.prepTimeMinutes} min
                </div>
              </div>

              {/* Body */}
              <div className="p-4 space-y-3">
                <div>
                  <h3 className="font-bold text-base text-stone-900 leading-snug">{recipe.title}</h3>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">{recipe.summary}</p>
                </div>

                {/* Ingredients chips */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                    Ingredientes del montaje:
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {recipe.ingredients.map((ing, iIdx) => (
                      <span
                        key={iIdx}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-lg bg-stone-50 border border-stone-200/60 text-stone-700"
                      >
                        {ing.item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Steps summary */}
                <div className="bg-amber-50/50 p-3 rounded-2xl border border-amber-100/60 space-y-1.5">
                  <span className="text-[10px] font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    Cómo montarlo:
                  </span>
                  <ol className="space-y-1 text-xs text-stone-700">
                    {recipe.steps.map((st, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <span className="font-bold text-amber-700">{sIdx + 1}.</span>
                        <span>{st}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Action button */}
                <button
                  onClick={() => {
                    setSelectedRecipeId(recipe.id);
                  }}
                  className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-2xl text-xs font-bold transition-colors shadow-2xs"
                >
                  Ver receta completa y preparación
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
