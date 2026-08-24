import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { MealCategory, Recipe } from '../types';
import {
  Search,
  Clock,
  Heart,
  ChefHat,
  Filter,
  Sparkles,
  Utensils,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface RecipeCardItemProps {
  recipe: Recipe;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onSelect: (id: string) => void;
}

const RecipeCardItem: React.FC<RecipeCardItemProps> = ({
  recipe,
  isFavorite,
  onToggleFavorite,
  onSelect
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      id={`recipe-item-${recipe.id}`}
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      onClick={() => onSelect(recipe.id)}
      className="bg-white rounded-3xl overflow-hidden border border-[#E7E5E4] shadow-xs active-press cursor-pointer hover:border-[#E06D53]/40 transition-all flex flex-col"
    >
      {/* Photo with Overlay Badges (Only rendered if image exists and has no error) */}
      {recipe.imageUrl && !imgError ? (
        <div className="relative h-44 w-full bg-[#F5F5F4] overflow-hidden">
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />

          {/* Gradient shade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

          {/* Top Badges: Age & Category */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <span className="px-2.5 py-1 rounded-full bg-[#E06D53] text-white text-[11px] font-extrabold shadow-sm">
              {recipe.ageLabel}
            </span>
            {recipe.blwFriendly && (
              <span className="px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-[#4A7C59] text-[10px] font-bold shadow-sm">
                BLW
              </span>
            )}
          </div>

          {/* Favorite Heart Button */}
          <button
            id={`favorite-card-btn-${recipe.id}`}
            type="button"
            onClick={e => {
              e.stopPropagation();
              onToggleFavorite(recipe.id);
            }}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#DE5D43] shadow-sm active-press"
            aria-label="Guardar receta"
          >
            <Heart
              className={`w-5 h-5 transition-transform ${
                isFavorite ? 'fill-[#DE5D43] scale-110' : 'text-[#78716C]'
              }`}
            />
          </button>

          {/* Bottom Image Info */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
            <span className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-lg">
              <Clock className="w-3.5 h-3.5" />
              {recipe.prepTimeMinutes} min
            </span>
            <span className="bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-lg text-[11px]">
              {recipe.difficulty}
            </span>
          </div>
        </div>
      ) : (
        /* Clean Header for text-only recipes */
        <div className="p-4 pb-0 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="px-2.5 py-1 rounded-full bg-[#E06D53] text-white text-[11px] font-extrabold shadow-xs">
              {recipe.ageLabel}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-[#FAF7F2] border border-[#E7E5E4] text-[#57534E] text-[11px] font-semibold">
              {recipe.categoryLabel}
            </span>
            {recipe.blwFriendly && (
              <span className="px-2 py-0.5 rounded-full bg-[#EAF2EB] text-[#2D5A3C] text-[10px] font-bold">
                BLW
              </span>
            )}
          </div>

          <button
            id={`favorite-card-btn-${recipe.id}`}
            type="button"
            onClick={e => {
              e.stopPropagation();
              onToggleFavorite(recipe.id);
            }}
            className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#E7E5E4] flex items-center justify-center text-[#DE5D43] shadow-2xs active-press"
            aria-label="Guardar receta"
          >
            <Heart
              className={`w-5 h-5 transition-transform ${
                isFavorite ? 'fill-[#DE5D43] scale-110' : 'text-[#78716C]'
              }`}
            />
          </button>
        </div>
      )}

      {/* Card Content Body */}
      <div className="p-4">
        {recipe.imageUrl && !imgError && (
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#4A7C59] block mb-1">
            {recipe.categoryLabel}
          </span>
        )}

        <h3 className="text-base font-bold text-[#292524] font-display leading-tight mb-1.5">
          {recipe.title}
        </h3>

        {(!recipe.imageUrl || imgError) && (
          <div className="flex items-center gap-3 text-xs text-[#78716C] mb-2 font-medium">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#A8A29E]" />
              {recipe.prepTimeMinutes} min
            </span>
            <span>•</span>
            <span>{recipe.difficulty}</span>
          </div>
        )}

        <p className="text-xs text-[#78716C] line-clamp-2 leading-relaxed mb-3">
          {recipe.summary}
        </p>

        <div className="flex items-center justify-between pt-2.5 border-t border-[#F5F5F4] text-xs">
          <span className="text-[#57534E] font-medium text-[11px] truncate max-w-[200px]">
            🥣 {recipe.texture}
          </span>
          <span className="text-[#DE5D43] font-bold text-xs flex items-center gap-0.5 shrink-0">
            Ver receta →
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export const RecetasScreen: React.FC = () => {
  const {
    recipes,
    selectedRecipeId,
    setSelectedRecipeId,
    toggleFavorite,
    isFavorite,
    selectedStageMonth,
    setExtendedView
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAge, setSelectedAge] = useState<number | 'todas'>('todas');
  const [selectedCategory, setSelectedCategory] = useState<MealCategory>('todas');

  const ageFilters: { id: number | 'todas'; label: string }[] = [
    { id: 'todas', label: 'Todas las edades' },
    { id: 6, label: '6 meses+' },
    { id: 7, label: '7 meses+' },
    { id: 8, label: '8 meses+' },
    { id: 9, label: '9 meses+' },
    { id: 10, label: '10 meses+' },
    { id: 11, label: '11 meses+' },
    { id: 12, label: '12 meses+' }
  ];

  const categoryFilters: { id: MealCategory; label: string }[] = [
    { id: 'todas', label: 'Todo' },
    { id: 'papillas', label: '🥣 Papillas' },
    { id: 'blw', label: '🖐️ BLW' },
    { id: 'comidas', label: '🍲 Comidas' },
    { id: 'cenas', label: '🌙 Cenas' },
    { id: 'desayunos', label: '🥞 Desayunos' },
    { id: 'snacks', label: '🍎 Snacks' }
  ];

  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      // search
      const matchesSearch =
        !searchQuery.trim() ||
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.ingredients.some(i => i.item.toLowerCase().includes(searchQuery.toLowerCase())) ||
        recipe.summary.toLowerCase().includes(searchQuery.toLowerCase());

      // age filter
      const matchesAge = selectedAge === 'todas' || recipe.stageMonths === selectedAge;

      // category filter
      const matchesCategory = selectedCategory === 'todas' || recipe.category === selectedCategory;

      return matchesSearch && matchesAge && matchesCategory;
    });
  }, [recipes, searchQuery, selectedAge, selectedCategory]);

  return (
    <div id="recetas-screen" className="flex-1 overflow-y-auto px-4 pt-3 pb-36 no-scrollbar">
      {/* Title & Search bar */}
      <div className="mb-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#292524] tracking-tight font-display">
              Recetas
            </h2>
            <p className="text-xs text-[#78716C] mb-2">
              Preparaciones seguras, sin sal ni azúcar añadido
            </p>
          </div>
        </div>

        {/* Bonus Recetas Banner */}
        <div
          onClick={() => setExtendedView('bonus_recetas')}
          className="mb-3 p-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white shadow-xs active-press cursor-pointer flex items-center justify-between"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-lg shrink-0">
              🎁
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-black/20 text-white">
                Pestaña Bonus
              </span>
              <h3 className="text-xs font-black leading-tight text-white mt-0.5">
                70 Recetas Nutritivas (12 a 24 Meses)
              </h3>
              <p className="text-[10px] text-amber-100 font-medium">
                30 recetas (12-18m) + 40 recetas (18-24m)
              </p>
            </div>
          </div>
          <span className="py-1 px-2.5 rounded-xl bg-white text-stone-900 text-xs font-black shadow-2xs shrink-0">
            Ver →
          </span>
        </div>

        {/* Search input */}
        <div className="relative flex items-center">
          <Search className="absolute left-3.5 w-4 h-4 text-[#A8A29E]" />
          <input
            id="recipes-search-input"
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="¿Qué quieres preparar hoy?"
            className="w-full pl-10 pr-9 py-3 bg-white rounded-2xl border border-[#E7E5E4] focus:outline-none focus:border-[#E06D53] focus:ring-2 focus:ring-[#E06D53]/15 text-sm font-medium text-[#292524] placeholder:text-[#A8A29E] shadow-2xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 p-1 text-[#A8A29E] hover:text-[#57534E] rounded-full active-press"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Age Filters Horizontal Scroll */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1.5 -mx-4 px-4 mb-2">
        {ageFilters.map(filter => {
          const isSelected = selectedAge === filter.id;
          return (
            <button
              key={filter.id.toString()}
              id={`filter-age-${filter.id}`}
              onClick={() => setSelectedAge(filter.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap active-press transition-all shrink-0 ${
                isSelected
                  ? 'bg-[#E06D53] text-white shadow-xs'
                  : 'bg-white text-[#78716C] border border-[#E7E5E4]'
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 -mx-4 px-4 mb-4">
        {categoryFilters.map(cat => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              id={`filter-cat-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1 rounded-xl text-xs font-semibold whitespace-nowrap active-press transition-all shrink-0 ${
                isSelected
                  ? 'bg-[#292524] text-white'
                  : 'bg-[#FAF7F2] text-[#57534E] border border-[#E7E5E4]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Recipes Cards Grid */}
      {filteredRecipes.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
          <div className="w-16 h-16 rounded-full bg-[#FCEEEA] flex items-center justify-center text-2xl mb-3">
            🔍
          </div>
          <h4 className="text-base font-bold text-[#292524] mb-1">
            No se encontraron recetas
          </h4>
          <p className="text-xs text-[#78716C] max-w-xs mb-4">
            Prueba buscando con otros términos o seleccionando otra etapa de edad.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedAge('todas');
              setSelectedCategory('todas');
            }}
            className="py-2 px-4 rounded-xl bg-[#FAF7F2] border border-[#E7E5E4] text-xs font-bold text-[#57534E] active-press"
          >
            Limpiar filtros
          </button>
        </div>
      ) : (
        <div className="space-y-3.5">
          {filteredRecipes.map(recipe => (
            <RecipeCardItem
              key={recipe.id}
              recipe={recipe}
              isFavorite={isFavorite(recipe.id)}
              onToggleFavorite={toggleFavorite}
              onSelect={setSelectedRecipeId}
            />
          ))}
        </div>
      )}
    </div>
  );
};
