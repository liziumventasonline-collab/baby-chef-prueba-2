import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  ArrowLeft,
  Heart,
  Clock,
  ChefHat,
  Share2,
  CheckSquare,
  Square,
  ShieldAlert,
  Sparkles,
  ShoppingBag,
  CheckCircle2,
  BookmarkPlus,
  Utensils
} from 'lucide-react';
import { motion } from 'motion/react';

export const RecipeDetailScreen: React.FC = () => {
  const {
    recipes,
    selectedRecipeId,
    setSelectedRecipeId,
    toggleFavorite,
    isFavorite,
    addRecipeIngredientsToShopping,
    setExtendedView
  } = useApp();

  const recipe = recipes.find(r => r.id === selectedRecipeId);

  // Local checklist state for this recipe's shopping list
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});
  const [showAddedToast, setShowAddedToast] = useState(false);
  const [imageError, setImageError] = useState(false);

  if (!recipe) return null;

  const fav = isFavorite(recipe.id);

  const toggleCheck = (item: string) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const handleAddToShoppingList = () => {
    addRecipeIngredientsToShopping(recipe);
    setShowAddedToast(true);
    setTimeout(() => setShowAddedToast(false), 2500);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Baby Chef: ${recipe.title}`,
          text: `Receta para bebé (${recipe.ageLabel}): ${recipe.title} en Baby Chef`,
          url: window.location.href
        });
      } catch (err) {
        console.log('Share canceled or not supported');
      }
    } else {
      // fallback copy
      navigator.clipboard.writeText(`${recipe.title} (${recipe.ageLabel}) - Baby Chef`);
      setShowAddedToast(true);
      setTimeout(() => setShowAddedToast(false), 2500);
    }
  };

  return (
    <div
      id="recipe-detail-screen"
      className="fixed inset-0 z-40 flex flex-col bg-[#FAF7F2] text-[#292524] overflow-hidden"
    >
      {/* Top Floating App Bar */}
      <div className="safe-top px-4 pt-3 pb-2.5 flex items-center justify-between bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E7E5E4]/60 z-30">
        <button
          id="recipe-detail-back-btn"
          onClick={() => setSelectedRecipeId(null)}
          className="p-2 -ml-2 text-[#57534E] hover:text-[#292524] rounded-full active-press flex items-center gap-1 text-sm font-bold"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            id="recipe-detail-share-btn"
            onClick={handleShare}
            className="p-2 text-[#57534E] hover:text-[#292524] rounded-full active-press"
            aria-label="Compartir receta"
          >
            <Share2 className="w-5 h-5" />
          </button>

          <button
            id="recipe-detail-fav-btn"
            onClick={() => toggleFavorite(recipe.id)}
            className="p-2 rounded-full active-press text-[#DE5D43]"
            aria-label="Guardar en favoritos"
          >
            <Heart
              className={`w-6 h-6 transition-transform ${
                fav ? 'fill-[#DE5D43] scale-110' : 'text-[#78716C]'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Main Scrollable Recipe Body */}
      <div className="flex-1 overflow-y-auto px-4 pt-2 pb-24 no-scrollbar space-y-5">
        {/* Photography with Badges OR Clean Text-First Header */}
        {recipe.imageUrl && !imageError ? (
          <div className="relative w-full h-64 rounded-3xl overflow-hidden shadow-md bg-[#F5F5F4]">
            <img
              src={recipe.imageUrl}
              alt={recipe.title}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-1 rounded-full bg-[#E06D53] text-white text-xs font-extrabold shadow-sm">
                  {recipe.ageLabel}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold">
                  {recipe.categoryLabel}
                </span>
                {recipe.blwFriendly && (
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/90 backdrop-blur-md text-white text-[11px] font-bold shadow-xs">
                    BLW
                  </span>
                )}
              </div>

              <h1 className="text-xl font-bold font-display leading-tight drop-shadow-sm text-white">
                {recipe.title}
              </h1>
            </div>
          </div>
        ) : (
          <div className="w-full p-5 rounded-3xl bg-gradient-to-br from-white to-[#FDF5F1] border border-[#E7E5E4] shadow-xs">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="px-2.5 py-1 rounded-full bg-[#E06D53] text-white text-xs font-extrabold shadow-sm">
                {recipe.ageLabel}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#FAF7F2] border border-[#E7E5E4] text-[#57534E] text-xs font-semibold">
                {recipe.categoryLabel}
              </span>
              {recipe.blwFriendly && (
                <span className="px-2 py-0.5 rounded-full bg-[#EAF2EB] text-[#2D5A3C] text-[11px] font-bold">
                  BLW
                </span>
              )}
            </div>
            <h1 className="text-2xl font-bold font-display leading-tight text-[#292524]">
              {recipe.title}
            </h1>
          </div>
        )}

        {/* Quick Info Bar */}
        <div className="grid grid-cols-3 gap-2.5 bg-white p-3.5 rounded-2xl border border-[#E7E5E4] shadow-xs text-center">
          <div>
            <span className="text-[10px] uppercase font-bold text-[#A8A29E] block mb-0.5">
              ⏱ Tiempo
            </span>
            <span className="text-xs font-bold text-[#292524]">
              {recipe.prepTimeMinutes} min
            </span>
          </div>

          <div className="border-x border-[#F5F5F4]">
            <span className="text-[10px] uppercase font-bold text-[#A8A29E] block mb-0.5">
              🥣 Textura
            </span>
            <span className="text-xs font-bold text-[#292524] truncate px-1 block">
              {recipe.texture.split(' ')[0]}
            </span>
          </div>

          <div>
            <span className="text-[10px] uppercase font-bold text-[#A8A29E] block mb-0.5">
              👶 Raciones
            </span>
            <span className="text-xs font-bold text-[#292524]">
              {recipe.portions.split(' ')[0]}
            </span>
          </div>
        </div>

        {/* Recipe Summary */}
        <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E7E5E4]/80">
          <p className="text-xs text-[#57534E] leading-relaxed italic">
            "{recipe.summary}"
          </p>
        </div>

        {/* 1. INGREDIENTES */}
        <div className="bg-white rounded-3xl p-5 border border-[#E7E5E4] shadow-xs">
          <div className="flex items-center justify-between mb-3.5">
            <h3 className="text-base font-bold text-[#292524] font-display flex items-center gap-2">
              <span>🥕 Ingredientes</span>
            </h3>
            <span className="text-xs font-semibold text-[#78716C]">
              {recipe.ingredients.length} ingredientes
            </span>
          </div>

          <div className="space-y-2">
            {recipe.ingredients.map((ing, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF7F2] border border-[#E7E5E4]/60 text-xs"
              >
                <span className="font-semibold text-[#292524]">{ing.item}</span>
                <span className="font-bold text-[#DE5D43] bg-white px-2.5 py-0.5 rounded-lg border border-[#E7E5E4] text-[11px]">
                  {ing.amount}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. MODO DE PREPARACIÓN PASO A PASO */}
        <div className="bg-white rounded-3xl p-5 border border-[#E7E5E4] shadow-xs">
          <h3 className="text-base font-bold text-[#292524] font-display mb-3.5 flex items-center gap-2">
            <span>👨‍🍳 Modo de Preparación</span>
          </h3>

          <div className="space-y-3.5">
            {recipe.steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#FCEEEA] text-[#DE5D43] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-[#E06D53]/20">
                  {idx + 1}
                </div>
                <p className="text-xs text-[#44403C] leading-relaxed pt-0.5">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. LISTA DE COMPRAS INTERACTIVA */}
        <div className="bg-white rounded-3xl p-5 border border-[#E7E5E4] shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-base font-bold text-[#292524] font-display flex items-center gap-2">
                <span>🛒 Lista de Compras</span>
              </h3>
              <p className="text-[11px] text-[#78716C]">
                Toca para marcar lo que ya tienes en casa
              </p>
            </div>

            <button
              id="recipe-add-to-shopping-btn"
              onClick={handleAddToShoppingList}
              className="py-1.5 px-3 rounded-xl bg-[#EAF2EB] text-[#2D5A3C] text-xs font-bold active-press flex items-center gap-1 hover:bg-[#d8e8da] transition-colors"
            >
              <BookmarkPlus className="w-3.5 h-3.5" />
              <span>Guardar al súper</span>
            </button>
          </div>

          <div className="space-y-2">
            {recipe.shoppingList.map((item, idx) => {
              const isChecked = !!checkedIngredients[item];
              return (
                <button
                  key={idx}
                  onClick={() => toggleCheck(item)}
                  className={`w-full flex items-center gap-3 p-3 rounded-2xl border text-left active-press transition-all ${
                    isChecked
                      ? 'bg-[#F5F5F4] border-[#E7E5E4] text-[#A8A29E]'
                      : 'bg-[#FAF7F2] border-[#E7E5E4] text-[#292524]'
                  }`}
                >
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 text-[#4A7C59] shrink-0" />
                  ) : (
                    <Square className="w-5 h-5 text-[#A8A29E] shrink-0" />
                  )}
                  <span
                    className={`text-xs font-medium ${
                      isChecked ? 'line-through text-[#A8A29E]' : 'text-[#292524]'
                    }`}
                  >
                    {item}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. CONSEJOS Y CONSERVACIÓN */}
        <div className="bg-white rounded-3xl p-5 border border-[#E7E5E4] shadow-xs space-y-3">
          <h3 className="text-base font-bold text-[#292524] font-display flex items-center gap-2">
            <span>💡 Consejos y Conservación</span>
          </h3>

          {recipe.conservation && (
            <div className="text-xs">
              {typeof recipe.conservation === 'string' ? (
                <div className="p-3 rounded-2xl bg-sky-50/70 border border-sky-100 text-sky-900">
                  <span className="block font-bold text-[11px] text-sky-800 uppercase tracking-wider mb-0.5">
                    ❄️ Conservación
                  </span>
                  <span className="text-[11px] font-medium">{recipe.conservation}</span>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  {recipe.conservation.fridge && (
                    <div className="p-3 rounded-2xl bg-sky-50/70 border border-sky-100 text-sky-900">
                      <span className="block font-bold text-[11px] text-sky-800 uppercase tracking-wider mb-0.5">
                        ❄️ Nevera / Heladera
                      </span>
                      <span className="text-[11px] font-medium">{recipe.conservation.fridge}</span>
                    </div>
                  )}
                  {recipe.conservation.freezer && (
                    <div className="p-3 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-indigo-900">
                      <span className="block font-bold text-[11px] text-indigo-800 uppercase tracking-wider mb-0.5">
                        🧊 Congelador
                      </span>
                      <span className="text-[11px] font-medium">{recipe.conservation.freezer}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          <div className="space-y-2">
            {recipe.tips.map((tip, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#FFFDF9] border border-[#F28B72]/30 text-xs text-[#57534E]"
              >
                <Sparkles className="w-4 h-4 text-[#DE5D43] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{tip}</span>
              </div>
            ))}
          </div>

          {recipe.allergenAlert && (
            <div className="p-3 rounded-2xl bg-[#FEF2F2] border border-[#FECACA] flex items-start gap-2.5 text-xs text-[#991B1B]">
              <ShieldAlert className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
              <div>
                <strong className="block mb-0.5">Alerta de Alérgenos:</strong>
                <span>{recipe.allergenAlert}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Toast when added */}
      {showAddedToast && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 left-6 right-6 z-50 p-3.5 bg-[#292524] text-white rounded-2xl shadow-xl flex items-center justify-between text-xs font-semibold max-w-sm mx-auto"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#4A7C59]" />
            <span>¡Ingredientes añadidos a tu Lista del Súper!</span>
          </div>
          <button
            onClick={() => setExtendedView('compras')}
            className="text-[#F28B72] font-bold underline ml-2"
          >
            Ver
          </button>
        </motion.div>
      )}
    </div>
  );
};
