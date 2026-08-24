import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  Sparkles,
  BookOpen,
  Search,
  Check,
  Copy,
  Share2,
  Clock,
  Utensils,
  Heart,
  Info,
  Calendar,
  Layers,
  ChefHat,
  Apple,
  ShieldCheck,
  ShoppingCart,
  CheckCircle2,
  Flame,
  X
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import {
  BONUS_RECIPES_DATABASE,
  BONUS_BOOKS,
  BonusRecipe,
  BonusBookInfo
} from '../data/bonusRecipes';

interface BonusRecipesScreenProps {
  onBack?: () => void;
}

type BonusTab = '12-18m' | '18-24m' | 'consejos_porciones';
type RecipeFilter = 'todos' | 'desayunos' | 'almuerzos_cenas' | 'snacks_meriendas';

export const BonusRecipesScreen: React.FC<BonusRecipesScreenProps> = ({ onBack }) => {
  const { setExtendedView, toggleFavorite, favorites, addToShoppingList, showNotification } = useApp();

  const [activeBookTab, setActiveBookTab] = useState<BonusTab>('12-18m');
  const [selectedCategory, setSelectedCategory] = useState<RecipeFilter>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState<BonusRecipe | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [checkedIngredients, setCheckedIngredients] = useState<{ [key: string]: boolean }>({});

  const currentBookInfo = useMemo(() => {
    return BONUS_BOOKS.find((b) => b.id === (activeBookTab === 'consejos_porciones' ? '12-18m' : activeBookTab)) || BONUS_BOOKS[0];
  }, [activeBookTab]);

  const filteredRecipes = useMemo(() => {
    if (activeBookTab === 'consejos_porciones') return [];

    return BONUS_RECIPES_DATABASE.filter((r) => {
      const matchesBook = r.book === activeBookTab;
      const matchesCategory =
        selectedCategory === 'todos' || r.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.ingredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (r.badge && r.badge.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesBook && matchesCategory && matchesSearch;
    });
  }, [activeBookTab, selectedCategory, searchQuery]);

  const handleCopyRecipe = (recipe: BonusRecipe) => {
    const text = `📖 RECETA BONUS: ${recipe.title.toUpperCase()}\n` +
      `👶 Etapa: ${recipe.bookTitle} | ${recipe.categoryLabel}\n` +
      `⏱️ Tiempo: ${recipe.prepTime} | Rinde: ${recipe.yields}\n\n` +
      `🛒 INGREDIENTES:\n` +
      recipe.ingredients.map((i) => `• ${i}`).join('\n') +
      `\n\n👩‍🍳 PREPARACIÓN:\n` +
      recipe.steps.map((s, idx) => `${idx + 1}. ${s}`).join('\n') +
      (recipe.tips && recipe.tips.length > 0 ? `\n\n💡 TIPS:\n${recipe.tips.join('\n')}` : '') +
      `\n\n⭐ Sin sal, azúcar ni miel añadida.`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedId(recipe.id);
        if (showNotification) showNotification('Receta copiada al portapapeles');
        setTimeout(() => setCopiedId(null), 2500);
      });
    }
  };

  const handleToggleIngredient = (item: string) => {
    setCheckedIngredients((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const handleAddAllToShoppingList = (recipe: BonusRecipe) => {
    recipe.ingredients.forEach((ing) => {
      addToShoppingList({
        id: `bonus-ing-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
        name: ing,
        amount: '1 porción',
        category: 'Bonus Recetario',
        checked: false
      });
    });
    if (showNotification) {
      showNotification(`Ingredientes de "${recipe.title}" agregados a la lista de compras`);
    }
  };

  return (
    <div id="bonus-recipes-screen" className="flex-1 overflow-y-auto bg-stone-100 pb-36 no-scrollbar">
      {/* Top Sticky Header */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200 px-4 py-3 shadow-2xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {onBack && (
              <button
                id="bonus-recipes-back-btn"
                onClick={onBack}
                className="p-2 rounded-xl bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors active-press"
                aria-label="Volver"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            <div>
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  <span>Bonus Recetas Exclusivas</span>
                </span>
              </div>
              <h1 className="text-sm font-extrabold text-stone-900 leading-tight">
                70 Recetas Nutritivas (12 a 24 Meses)
              </h1>
            </div>
          </div>

          <button
            onClick={() => setExtendedView('calendario_semanal')}
            className="py-1.5 px-3 rounded-2xl bg-teal-50 text-teal-900 border border-teal-200/80 hover:bg-teal-100 transition-colors text-xs font-black flex items-center gap-1 active-press"
          >
            <Calendar className="w-3.5 h-3.5 text-teal-700" />
            <span className="hidden xs:inline">Planner 24S</span>
          </button>
        </div>

        {/* Main Books Switcher */}
        <div className="grid grid-cols-3 gap-1.5 mt-2.5">
          <button
            onClick={() => {
              setActiveBookTab('12-18m');
              setSelectedCategory('todos');
            }}
            className={`py-2 px-1 rounded-2xl text-xs font-black text-center transition-all flex flex-col items-center justify-center ${
              activeBookTab === '12-18m'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <span className="leading-tight">12–18 Meses</span>
            <span className="text-[10px] opacity-80 font-bold">30 Recetas</span>
          </button>

          <button
            onClick={() => {
              setActiveBookTab('18-24m');
              setSelectedCategory('todos');
            }}
            className={`py-2 px-1 rounded-2xl text-xs font-black text-center transition-all flex flex-col items-center justify-center ${
              activeBookTab === '18-24m'
                ? 'bg-orange-600 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <span className="leading-tight">18–24 Meses</span>
            <span className="text-[10px] opacity-80 font-bold">40 Recetas</span>
          </button>

          <button
            onClick={() => setActiveBookTab('consejos_porciones')}
            className={`py-2 px-1 rounded-2xl text-xs font-black text-center transition-all flex flex-col items-center justify-center ${
              activeBookTab === 'consejos_porciones'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <span className="leading-tight">Guías & Tips</span>
            <span className="text-[10px] opacity-80 font-bold">Porciones & Batch</span>
          </button>
        </div>

        {/* Search and Category Filters (When in Recipe Mode) */}
        {activeBookTab !== 'consejos_porciones' && (
          <div className="space-y-2 mt-2.5">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Buscar receta o ingrediente (ej. aguacate, avena)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-1.5 rounded-xl border border-stone-200 text-xs font-medium text-stone-900 bg-stone-50 focus:bg-white focus:outline-amber-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2 text-stone-400 hover:text-stone-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category Filter Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 text-xs font-bold">
              {[
                { id: 'todos', label: 'Todas las recetas', icon: ChefHat },
                { id: 'desayunos', label: '☀️ Desayunos', icon: Apple },
                { id: 'almuerzos_cenas', label: '🍲 Almuerzos & Cenas', icon: Utensils },
                { id: 'snacks_meriendas', label: '🍓 Snacks & Meriendas', icon: Sparkles }
              ].map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id as RecipeFilter)}
                    className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all active-press ${
                      isSelected
                        ? activeBookTab === '12-18m'
                          ? 'bg-amber-600 text-white shadow-2xs'
                          : 'bg-orange-600 text-white shadow-2xs'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Main Content View */}
      <div className="p-3.5 space-y-4">
        {/* ========================================================================= */}
        {/* VISTA RECETAS (12-18m ó 18-24m) */}
        {/* ========================================================================= */}
        {activeBookTab !== 'consejos_porciones' && (
          <div className="space-y-3.5">
            {/* Header Description Banner */}
            <div
              className={`p-4 rounded-3xl text-white shadow-md space-y-1.5 ${
                activeBookTab === '12-18m'
                  ? 'bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700'
                  : 'bg-gradient-to-r from-orange-600 via-rose-600 to-amber-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20">
                  {currentBookInfo.recipeCount} Recetas Seguras
                </span>
                <span className="text-[10px] font-extrabold bg-black/20 px-2 py-0.5 rounded-full">
                  Sin Sal · Sin Azúcar · Sin Miel
                </span>
              </div>
              <h2 className="text-base font-black font-display leading-tight">
                {currentBookInfo.title}
              </h2>
              <p className="text-xs text-white/90 leading-relaxed font-normal">
                {currentBookInfo.subtitle}
              </p>
            </div>

            {/* Results Count & Subtitle */}
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-black text-stone-700">
                Mostrando {filteredRecipes.length} recetas
              </span>
              <span className="text-[11px] font-semibold text-stone-500">
                Toca cualquier receta para ver detalles
              </span>
            </div>

            {/* Recipes Grid */}
            {filteredRecipes.length === 0 ? (
              <div className="p-8 text-center bg-white rounded-3xl border border-stone-200 space-y-2">
                <p className="text-2xl">🔍</p>
                <h4 className="text-xs font-black text-stone-900">No encontramos recetas con ese término</h4>
                <p className="text-[11px] text-stone-500 font-medium">
                  Prueba buscando otro ingrediente como "pollo", "avena" o "calabaza".
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredRecipes.map((recipe) => {
                  const isFav = favorites.includes(recipe.id);
                  return (
                    <motion.div
                      key={recipe.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-3xl border border-stone-200/90 shadow-2xs hover:shadow-xs transition-all overflow-hidden flex flex-col justify-between p-4 cursor-pointer active-press group"
                      onClick={() => setSelectedRecipe(recipe)}
                    >
                      <div className="space-y-2">
                        {/* Badges & Number */}
                        <div className="flex items-center justify-between gap-1.5">
                          <div className="flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded-full bg-stone-100 text-stone-800 text-[10px] font-black flex items-center justify-center">
                              {recipe.number}
                            </span>
                            <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 uppercase">
                              {recipe.categoryLabel}
                            </span>
                          </div>

                          {recipe.badge && (
                            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-stone-100 text-stone-700">
                              {recipe.badge}
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <div className="flex items-start gap-2 pt-0.5">
                          <span className="text-xl shrink-0 mt-0.5">{recipe.icon}</span>
                          <h3 className="text-xs font-black text-stone-900 leading-snug group-hover:text-amber-700 transition-colors">
                            {recipe.title}
                          </h3>
                        </div>

                        {/* Ingredients Preview */}
                        <div className="bg-stone-50 p-2.5 rounded-2xl border border-stone-100 space-y-1">
                          <span className="text-[10px] font-black uppercase tracking-wider text-stone-500 block">
                            Ingredientes ({recipe.ingredients.length}):
                          </span>
                          <p className="text-[11px] text-stone-700 line-clamp-2 leading-relaxed font-medium">
                            {recipe.ingredients.join(' · ')}
                          </p>
                        </div>
                      </div>

                      {/* Card Footer Info */}
                      <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500 font-semibold">
                        <div className="flex items-center gap-2">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-stone-400" />
                            <span>{recipe.prepTime}</span>
                          </span>
                          <span>·</span>
                          <span>{recipe.yields}</span>
                        </div>

                        <div className="flex items-center gap-1">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCopyRecipe(recipe);
                            }}
                            className="p-1.5 rounded-lg bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors"
                            title="Copiar Receta"
                          >
                            {copiedId === recipe.id ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFavorite(recipe.id);
                            }}
                            className="p-1.5 rounded-lg bg-stone-100 hover:bg-rose-50 text-stone-600 hover:text-rose-600 transition-colors"
                            title="Favorito"
                          >
                            <Heart
                              className={`w-3.5 h-3.5 ${
                                isFav ? 'fill-rose-500 text-rose-500' : 'text-stone-500'
                              }`}
                            />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* VISTA GUÍAS, PORCIONES & CONSEJOS PRÁCTICOS */}
        {/* ========================================================================= */}
        {activeTabOrBookTabConsejos(activeBookTab) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white p-5 rounded-3xl shadow-md space-y-1.5">
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20">
                Guía Pediátrica & Organización
              </span>
              <h2 className="text-lg font-black font-display">Consejos Prácticos & Porciones</h2>
              <p className="text-xs text-stone-300 font-normal leading-relaxed">
                Todo lo que necesitas para organizar las comidas semanales, batch cooking y sustituciones seguras.
              </p>
            </div>

            {/* 1. Porciones Recomendadas (12 a 18 Meses) */}
            <div className="bg-white rounded-3xl border border-stone-200 p-4 shadow-2xs space-y-3">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-amber-500" />
                  <h3 className="text-xs font-black text-stone-900 uppercase tracking-wider">
                    Porciones Recomendadas al Día (12–18 meses)
                  </h3>
                </div>
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">
                  Guía Oficial
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {BONUS_BOOKS[0].portionsInfo?.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-amber-50/50 border border-amber-100 space-y-1 text-center"
                  >
                    <span className="text-base font-black text-amber-950 font-display block">
                      {p.count}
                    </span>
                    <h4 className="text-xs font-black text-stone-800">{p.label}</h4>
                    <p className="text-[10px] text-stone-500 font-medium">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Hacks de Batch Cooking */}
            <div className="bg-white rounded-3xl border border-stone-200 p-4 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 border-b border-stone-100 pb-2">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-500" />
                <h3 className="text-xs font-black text-stone-900 uppercase tracking-wider">
                  Hacks de Batch Cooking & Ahorro de Tiempo
                </h3>
              </div>

              <ul className="space-y-2">
                {[
                  'Cocinar pollo, arroz y verduras en tandas grandes para toda la semana.',
                  'Congelar muffins, croquetas y albóndigas en porciones individuales en bandejas o cubeteras.',
                  'Usar purés de verduras como base para enriquecer sopas rápidas en la noche.',
                  'Recalentar siempre a temperatura tibia y probar antes de servir al bebé.',
                  'Mantener variedad de colores: al menos 3 colores por comida para diversidad nutricional.'
                ].map((hack, hIdx) => (
                  <li
                    key={hIdx}
                    className="p-2.5 rounded-xl bg-stone-50 border border-stone-100 text-xs font-medium text-stone-700 flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{hack}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Alternativas sin Huevo / Sin Lácteos */}
            <div className="bg-white rounded-3xl border border-stone-200 p-4 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 border-b border-stone-100 pb-2">
                <span className="w-3.5 h-3.5 rounded-full bg-rose-500" />
                <h3 className="text-xs font-black text-stone-900 uppercase tracking-wider">
                  Alternativas Seguras (Alergias o Intolerancias)
                </h3>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-2xl bg-rose-50/60 border border-rose-100 text-rose-950 space-y-1">
                  <span className="font-extrabold block">🥚 Sustituir Huevo en Recetas:</span>
                  <p className="text-[11px] text-stone-700 font-medium">
                    Usa <strong>1/2 plátano maduro machacado</strong> o <strong>1 cda de semillas de chía hidratadas</strong> en 3 cdas de agua por cada huevo en masas y pancakes.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-blue-50/60 border border-blue-100 text-blue-950 space-y-1">
                  <span className="font-extrabold block">🥛 Sustituir Lácteos:</span>
                  <p className="text-[11px] text-stone-700 font-medium">
                    Usa <strong>yogur vegetal sin azúcar</strong> (coco o almendra) o <strong>tofu suave pasteurizado</strong> para mantener cremosidad.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Lista de Compras Básica de los Recetarios */}
            <div className="bg-white rounded-3xl border border-stone-200 p-4 shadow-2xs space-y-3">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4 text-amber-600" />
                  <h3 className="text-xs font-black text-stone-900 uppercase tracking-wider">
                    Despensa Esencial (12–24 Meses)
                  </h3>
                </div>
                <button
                  onClick={() => setExtendedView('compras')}
                  className="text-[11px] font-bold text-amber-800 hover:underline"
                >
                  Ver Lista de Compras
                </button>
              </div>

              <div className="space-y-2.5">
                {BONUS_BOOKS[0].shoppingList?.map((cat, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="text-[11px] font-black text-stone-900">{cat.category}</span>
                    <div className="flex flex-wrap gap-1">
                      {cat.items.map((it, itIdx) => (
                        <span
                          key={itIdx}
                          className="px-2 py-0.5 rounded-lg bg-stone-100 text-stone-700 text-[10px] font-semibold"
                        >
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* DETALLE COMPLETO DE RECETA (MODAL DRAWER) */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedRecipe && (
          <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4">
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-stone-200"
            >
              {/* Modal Header */}
              <div className="p-4 border-b border-stone-100 flex items-center justify-between bg-stone-50/80">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{selectedRecipe.icon}</span>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">
                      {selectedRecipe.bookTitle} · {selectedRecipe.categoryLabel}
                    </span>
                    <h3 className="text-sm font-extrabold text-stone-900 line-clamp-1 mt-0.5">
                      {selectedRecipe.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedRecipe(null)}
                  className="p-2 rounded-full bg-stone-200/80 hover:bg-stone-300 text-stone-700 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-5 overflow-y-auto space-y-4 text-xs">
                {/* Meta stats pills */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-2xl bg-amber-50 border border-amber-100 text-center">
                    <span className="text-[10px] font-black uppercase text-amber-800 block">Tiempo</span>
                    <span className="text-xs font-bold text-amber-950">{selectedRecipe.prepTime}</span>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-orange-50 border border-orange-100 text-center">
                    <span className="text-[10px] font-black uppercase text-orange-800 block">Rinde</span>
                    <span className="text-xs font-bold text-orange-950">{selectedRecipe.yields}</span>
                  </div>
                </div>

                {/* Ingredients List with Checkboxes */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-black uppercase tracking-wider text-stone-900 flex items-center gap-1.5">
                      <Utensils className="w-3.5 h-3.5 text-amber-600" />
                      <span>Ingredientes Necesarios</span>
                    </h4>
                    <button
                      onClick={() => handleAddAllToShoppingList(selectedRecipe)}
                      className="text-[11px] font-black text-amber-800 hover:underline flex items-center gap-1"
                    >
                      <ShoppingCart className="w-3 h-3" />
                      <span>+ Lista compras</span>
                    </button>
                  </div>

                  <div className="space-y-1.5">
                    {selectedRecipe.ingredients.map((ing, idx) => {
                      const isChecked = !!checkedIngredients[ing];
                      return (
                        <button
                          key={idx}
                          onClick={() => handleToggleIngredient(ing)}
                          className={`w-full p-2.5 rounded-xl border text-left flex items-start gap-2.5 transition-colors ${
                            isChecked
                              ? 'bg-emerald-50/70 border-emerald-200 line-through text-stone-400'
                              : 'bg-stone-50 border-stone-200/80 text-stone-800'
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
                              isChecked ? 'bg-emerald-600 text-white' : 'border border-stone-300 bg-white'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="font-semibold text-xs leading-snug">{ing}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Steps Section */}
                <div className="space-y-2">
                  <h4 className="text-xs font-black uppercase tracking-wider text-stone-900 flex items-center gap-1.5">
                    <ChefHat className="w-3.5 h-3.5 text-amber-600" />
                    <span>Instrucciones Paso a Paso</span>
                  </h4>

                  <ol className="space-y-2">
                    {selectedRecipe.steps.map((step, idx) => (
                      <li
                        key={idx}
                        className="p-3 rounded-2xl bg-amber-50/40 border border-amber-100 text-stone-800 font-medium flex items-start gap-2.5 leading-relaxed"
                      >
                        <span className="w-5 h-5 rounded-full bg-stone-900 text-white text-[11px] font-black flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="text-xs">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Tips Callout */}
                {selectedRecipe.tips && selectedRecipe.tips.length > 0 && (
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 text-xs space-y-1">
                    <span className="font-black uppercase tracking-wider text-[11px] text-amber-900 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      <span>Consejo Pediátrico & Conservación:</span>
                    </span>
                    <ul className="list-disc list-inside space-y-0.5 text-[11px] text-stone-700 font-medium">
                      {selectedRecipe.tips.map((t, tIdx) => (
                        <li key={tIdx}>{t}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Modal Footer Actions */}
              <div className="p-4 border-t border-stone-100 bg-stone-50 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleCopyRecipe(selectedRecipe)}
                  className="py-2.5 px-4 rounded-2xl bg-white border border-stone-300 text-stone-800 text-xs font-black shadow-2xs hover:bg-stone-100 flex items-center gap-1.5 active-press"
                >
                  {copiedId === selectedRecipe.id ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar Receta</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    toggleFavorite(selectedRecipe.id);
                  }}
                  className="flex-1 py-2.5 px-4 rounded-2xl bg-stone-900 text-white text-xs font-black shadow-xs hover:bg-stone-800 flex items-center justify-center gap-1.5 active-press"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      favorites.includes(selectedRecipe.id)
                        ? 'fill-rose-500 text-rose-500'
                        : 'text-white'
                    }`}
                  />
                  <span>
                    {favorites.includes(selectedRecipe.id)
                      ? 'En Favoritos'
                      : 'Guardar en Favoritos'}
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

function activeTabOrBookTabConsejos(tab: BonusTab): boolean {
  return tab === 'consejos_porciones';
}
