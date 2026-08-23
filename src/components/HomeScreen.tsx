import React from 'react';
import { useApp } from '../context/AppContext';
import { calculateBabyAge, getRecommendedStageMonth } from '../utils/helpers';
import { FEEDING_STAGES } from '../data/feedingStages';
import {
  ChefHat,
  Apple,
  Ruler,
  Heart,
  BookOpen,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Calendar,
  Globe2,
  Utensils,
  Users
} from 'lucide-react';
import { motion } from 'motion/react';

export const HomeScreen: React.FC = () => {
  const {
    baby,
    recipes,
    setActiveTab,
    setSelectedStageMonth,
    setSelectedRecipeId,
    setExtendedView,
    toggleFavorite,
    isFavorite,
    favoriteIds,
    foodsTracker
  } = useApp();

  const age = calculateBabyAge(baby.birthDate);
  const recommendedMonth = getRecommendedStageMonth(age.months);
  const currentStage = FEEDING_STAGES.find((s) => s.month === recommendedMonth) || FEEDING_STAGES[0];

  // Filter recipes suitable for current stage
  const stageRecipes = recipes.filter((r) => r.stageMonths <= recommendedMonth);
  const quickRecipes = stageRecipes.slice(0, 3);

  const handleGoToStage = () => {
    setSelectedStageMonth(recommendedMonth);
    setActiveTab('alimentacion');
  };

  const handleOpenRecipe = (recipeId: string) => {
    setSelectedRecipeId(recipeId);
  };

  const acceptedFoodsCount = foodsTracker.filter((f) => f.status === 'accepted').length;

  return (
    <div id="home-screen" className="flex-1 overflow-y-auto px-4 pt-3 pb-24 no-scrollbar bg-stone-50">
      {/* 1. Header Greeting */}
      <div className="mb-4">
        <h2 className="text-2xl font-black text-stone-900 tracking-tight font-display flex items-center gap-1.5">
          <span>Hola, {baby.name || 'bebé'}</span>
          <span className="inline-block animate-wave origin-bottom-right">👋</span>
        </h2>
        <p className="text-sm font-medium text-stone-600 mt-0.5">
          {baby.name || 'Tu bebé'} tiene <strong className="text-emerald-700 font-bold">{age.displayText}</strong>
        </p>
      </div>

      {/* 2. Tarjeta Destacada: ETAPA ACTUAL */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-800 text-white p-5 shadow-lg shadow-emerald-900/15 mb-4"
      >
        <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-sm pointer-events-none" />
        <div className="absolute top-2 right-4 text-4xl opacity-20 pointer-events-none">🥣</div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-white mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ETAPA ACTUAL</span>
          </div>

          <h3 className="text-2xl font-black font-display tracking-tight mb-1 text-white">
            {currentStage.label}
          </h3>

          <p className="text-xs text-white/90 leading-relaxed mb-4 max-w-[280px]">
            Alimentos, texturas recomendadas, cortes BLISS y recetas seguras para este mes.
          </p>

          <div className="flex items-center justify-between gap-3 pt-2 border-t border-white/15">
            <span className="text-xs text-white/80 font-medium line-clamp-1">
              {currentStage.textureSummary}
            </span>

            <button
              id="home-ver-etapa-btn"
              onClick={handleGoToStage}
              className="py-2 px-4 rounded-xl bg-white text-emerald-800 font-bold text-xs shadow-md active-press flex items-center gap-1 shrink-0 hover:bg-stone-50 transition-colors"
            >
              <span>VER ETAPA</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* 3. High Value Feature Banners: Calendario Semanal & Platitos Creativos */}
      <div className="grid grid-cols-2 gap-2.5 mb-5">
        {/* Calendario Semanal */}
        <button
          onClick={() => setExtendedView('calendario_semanal')}
          className="flex flex-col justify-between p-3.5 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/80 shadow-2xs active-press text-left hover:border-amber-400 transition-all"
        >
          <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-2 shadow-2xs">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-black text-stone-900 block leading-tight">
              Menú Semanal
            </span>
            <span className="text-[11px] text-amber-900 font-medium">
              Mes 6 al 24 día a día
            </span>
          </div>
        </button>

        {/* Platitos Creativos */}
        <button
          onClick={() => setExtendedView('platitos_creativos')}
          className="flex flex-col justify-between p-3.5 rounded-3xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200/80 shadow-2xs active-press text-left hover:border-purple-400 transition-all"
        >
          <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-800 flex items-center justify-center mb-2 shadow-2xs">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-black text-stone-900 block leading-tight">
              Platos Creativos
            </span>
            <span className="text-[11px] text-purple-900 font-medium">
              Nutrición lúdica
            </span>
          </div>
        </button>
      </div>

      {/* 4. Small App Action Cards Grid */}
      <div className="mb-6">
        <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2.5 px-1">
          Accesos Rápidos
        </h4>

        <div className="grid grid-cols-3 gap-2.5">
          {/* Recetas */}
          <button
            id="home-quick-recetas"
            onClick={() => setActiveTab('recetas')}
            className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white border border-stone-200/80 shadow-2xs active-press hover:border-emerald-400 transition-all text-center"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-xl mb-1.5 text-emerald-700">
              🥣
            </div>
            <span className="text-xs font-bold text-stone-900">Recetas</span>
            <span className="text-[10px] text-stone-400 font-medium">{recipes.length} platos</span>
          </button>

          {/* Alimentos */}
          <button
            id="home-quick-alimentos"
            onClick={() => setActiveTab('alimentacion')}
            className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white border border-stone-200/80 shadow-2xs active-press hover:border-emerald-400 transition-all text-center"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-xl mb-1.5 text-amber-700">
              🍎
            </div>
            <span className="text-xs font-bold text-stone-900">Alimentos</span>
            <span className="text-[10px] text-stone-400 font-medium">Por meses</span>
          </button>

          {/* Compras / Súper */}
          <button
            id="home-quick-compras"
            onClick={() => setExtendedView('compras')}
            className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white border border-stone-200/80 shadow-2xs active-press hover:border-emerald-400 transition-all text-center"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-xl mb-1.5 text-teal-700">
              🛒
            </div>
            <span className="text-xs font-bold text-stone-900">Súper</span>
            <span className="text-[10px] text-stone-400 font-medium">Lista activa</span>
          </button>

          {/* Favoritos */}
          <button
            id="home-quick-favoritos"
            onClick={() => setExtendedView('favoritos')}
            className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white border border-stone-200/80 shadow-2xs active-press hover:border-emerald-400 transition-all text-center"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-xl mb-1.5 text-rose-600">
              ❤️
            </div>
            <span className="text-xs font-bold text-stone-900">Favoritos</span>
            <span className="text-[10px] text-stone-400 font-medium">{favoriteIds.length} guardadas</span>
          </button>

          {/* Probados (Regla 3 días) */}
          <button
            id="home-quick-probados"
            onClick={() => setExtendedView('probados')}
            className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white border border-stone-200/80 shadow-2xs active-press hover:border-emerald-400 transition-all text-center"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-xl mb-1.5 text-purple-700">
              ✅
            </div>
            <span className="text-xs font-bold text-stone-900">Probados</span>
            <span className="text-[10px] text-stone-400 font-medium">{acceptedFoodsCount} tolerados</span>
          </button>

          {/* Recursos / Manuales */}
          <button
            id="home-quick-recursos"
            onClick={() => setExtendedView('recursos')}
            className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white border border-stone-200/80 shadow-2xs active-press hover:border-emerald-400 transition-all text-center"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-xl mb-1.5 text-sky-700">
              🩺
            </div>
            <span className="text-xs font-bold text-stone-900">Manuales</span>
            <span className="text-[10px] text-stone-400 font-medium">Guías AEPED</span>
          </button>
        </div>
      </div>

      {/* 5. Pediatric Tip of the Day */}
      <div className="mb-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-4 border border-emerald-200/80 shadow-2xs flex items-start gap-3">
        <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
          <Lightbulb className="w-4 h-4" />
        </div>
        <div className="flex-1">
          <h5 className="text-xs font-bold text-emerald-950 uppercase tracking-wide mb-1">
            Pilar BLISS: Hierro & Vitamina C
          </h5>
          <p className="text-xs text-stone-700 leading-relaxed">
            A partir de los 6 meses, las reservas de hierro del nacimiento se agotan. Combina siempre legumbres o carnes magras con frutas ricas en vitamina C (naranja, mandarina, papaya) para maximizar la absorción biológica.
          </p>
        </div>
      </div>

      {/* 5b. Facebook Orientation & Guidance Communities Banner */}
      <div
        id="home-fb-orientaciones-banner"
        onClick={() => setActiveTab('orientaciones')}
        className="mb-6 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white rounded-3xl p-4 shadow-md shadow-blue-900/10 active-press cursor-pointer hover:shadow-lg transition-all relative overflow-hidden"
      >
        <div className="absolute right-0 bottom-0 text-5xl opacity-15 pointer-events-none translate-x-2 translate-y-2">
          👥
        </div>
        <div className="relative z-10 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white text-[#1877F2] font-black text-xl flex items-center justify-center shadow-xs shrink-0">
              f
            </div>
            <div>
              <div className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-blue-200 bg-white/10 px-2 py-0.5 rounded-md mb-0.5">
                <Users className="w-3 h-3" />
                <span>Orientación en Vivo</span>
              </div>
              <h5 className="text-sm font-bold font-display text-white leading-tight">
                Páginas y Grupos de Facebook
              </h5>
              <p className="text-[11px] text-blue-100/90 line-clamp-1">
                6 canales para resolver dudas de BLW, papillas y crianza
              </p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      {/* 6. Recommended Recipes Carousel / List */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-3 px-1">
          <div>
            <h4 className="text-base font-bold text-stone-900 font-display">
              Recetas recomendadas
            </h4>
            <p className="text-xs text-stone-500">
              Aptas para {baby.name || 'tu bebé'} ({currentStage.label})
            </p>
          </div>

          <button
            onClick={() => setActiveTab('recetas')}
            className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-0.5 active-press"
          >
            Ver todas
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="space-y-3">
          {quickRecipes.map((recipe) => {
            const fav = isFavorite(recipe.id);
            return (
              <div
                key={recipe.id}
                id={`recipe-card-${recipe.id}`}
                onClick={() => handleOpenRecipe(recipe.id)}
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-stone-200/80 shadow-2xs active-press cursor-pointer hover:border-emerald-300 transition-all"
              >
                {/* Photo */}
                <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-stone-100">
                  <img
                    src={recipe.imageUrl}
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-white text-[9px] font-bold">
                    {recipe.ageLabel}
                  </span>
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    {recipe.categoryLabel}
                  </span>
                  <h5 className="text-sm font-bold text-stone-900 truncate mt-0.5 leading-snug">
                    {recipe.title}
                  </h5>
                  <div className="flex items-center gap-3 mt-1.5 text-xs text-stone-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      {recipe.prepTimeMinutes} min
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-stone-100 font-medium text-stone-700">
                      {recipe.texture.split(' ')[0]}
                    </span>
                  </div>
                </div>

                {/* Favorite Heart Button */}
                <button
                  id={`fav-btn-${recipe.id}`}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(recipe.id);
                  }}
                  className="p-2 text-stone-400 hover:text-rose-600 rounded-full active-press"
                  aria-label="Guardar en favoritos"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${
                      fav ? 'fill-rose-500 text-rose-500' : 'text-stone-400'
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
