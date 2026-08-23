import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Recipe } from '../types';
import { Heart, Clock, ArrowLeft, ChefHat, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface FavoriteRecipeItemProps {
  recipe: Recipe;
  onSelect: (id: string) => void;
  onToggleFavorite: (id: string) => void;
}

const FavoriteRecipeItem: React.FC<FavoriteRecipeItemProps> = ({
  recipe,
  onSelect,
  onToggleFavorite
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      key={recipe.id}
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={() => onSelect(recipe.id)}
      className="flex items-center gap-3.5 p-3.5 rounded-3xl bg-white border border-[#E7E5E4] shadow-xs active-press cursor-pointer hover:border-[#E06D53]/40 transition-all"
    >
      {/* Photo (Only rendered if present and loaded successfully) */}
      {recipe.imageUrl && !imgError && (
        <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 bg-[#F5F5F4]">
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded-md bg-black/65 text-white text-[9px] font-bold">
            {recipe.ageLabel}
          </span>
        </div>
      )}

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#4A7C59]">
            {recipe.categoryLabel}
          </span>
          {(!recipe.imageUrl || imgError) && (
            <span className="px-1.5 py-0.5 rounded-md bg-[#E06D53] text-white text-[9px] font-bold">
              {recipe.ageLabel}
            </span>
          )}
        </div>
        <h4 className="text-sm font-bold text-[#292524] truncate mt-0.5">
          {recipe.title}
        </h4>
        <div className="flex items-center gap-2.5 mt-1 text-xs text-[#78716C]">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#A8A29E]" />
            {recipe.prepTimeMinutes} min
          </span>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#FAF7F2]">
            {recipe.texture.split(' ')[0]}
          </span>
        </div>
      </div>

      {/* Heart Unfavorite */}
      <button
        type="button"
        onClick={e => {
          e.stopPropagation();
          onToggleFavorite(recipe.id);
        }}
        className="p-2 text-[#DE5D43] hover:text-[#78716C] rounded-full active-press"
        aria-label="Quitar de favoritos"
      >
        <Heart className="w-5 h-5 fill-[#DE5D43]" />
      </button>
    </motion.div>
  );
};

export const FavoritosScreen: React.FC = () => {
  const {
    recipes,
    favoriteIds,
    toggleFavorite,
    setSelectedRecipeId,
    setExtendedView,
    setActiveTab
  } = useApp();

  const favoriteRecipes = recipes.filter(r => favoriteIds.includes(r.id));

  return (
    <div id="favoritos-screen" className="flex-1 overflow-y-auto px-4 pt-3 pb-24 no-scrollbar">
      {/* Top bar */}
      <div className="flex items-center gap-2 mb-4">
        <button
          id="favoritos-back-btn"
          onClick={() => setExtendedView('none')}
          className="p-2 -ml-2 text-[#57534E] hover:text-[#292524] rounded-full active-press"
          aria-label="Volver"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-2xl font-bold text-[#292524] tracking-tight font-display">
            Mis favoritos
          </h2>
          <p className="text-xs text-[#78716C]">
            {favoriteRecipes.length} recetas guardadas
          </p>
        </div>
      </div>

      {favoriteRecipes.length === 0 ? (
        /* Empty state as requested */
        <div className="flex flex-col items-center justify-center py-16 px-6 text-center my-auto">
          <div className="w-20 h-20 rounded-full bg-[#FCEEEA] flex items-center justify-center text-4xl mb-4 text-[#DE5D43] shadow-xs">
            ❤️
          </div>
          <h3 className="text-lg font-bold text-[#292524] mb-2 font-display">
            Todavía no tienes recetas favoritas
          </h3>
          <p className="text-xs text-[#78716C] leading-relaxed max-w-xs mb-6">
            Guarda tus recetas preferidas tocando el corazón para encontrarlas rápidamente cuando cocines.
          </p>
          <button
            id="favoritos-explore-btn"
            onClick={() => {
              setExtendedView('none');
              setActiveTab('recetas');
            }}
            className="py-3 px-6 bg-[#E06D53] hover:bg-[#DE5D43] text-white text-xs font-bold rounded-2xl shadow-md active-press flex items-center gap-2"
          >
            <ChefHat className="w-4 h-4" />
            <span>Explorar recetas</span>
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {favoriteRecipes.map(recipe => (
            <FavoriteRecipeItem
              key={recipe.id}
              recipe={recipe}
              onSelect={setSelectedRecipeId}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};
