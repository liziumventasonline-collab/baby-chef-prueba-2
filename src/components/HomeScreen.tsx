import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Recipe } from '../types';
import { calculateBabyAge, getRecommendedStageMonth } from '../utils/helpers';
import { FEEDING_STAGES } from '../data/feedingStages';
import { evaluateGrowthParameter } from '../data/whoGrowthStandards';
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
  Users,
  TrendingUp,
  Scale,
  Download
} from 'lucide-react';
import { motion } from 'motion/react';

const HomeRecipeCard: React.FC<{
  recipe: Recipe;
  isFav: boolean;
  onOpen: (id: string) => void;
  onToggleFav: (id: string) => void;
}> = ({ recipe, isFav, onOpen, onToggleFav }) => {
  const [imgErr, setImgErr] = useState(false);

  return (
    <div
      id={`recipe-card-${recipe.id}`}
      onClick={() => onOpen(recipe.id)}
      className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-stone-200/80 shadow-2xs active-press cursor-pointer hover:border-emerald-300 transition-all"
    >
      {/* Photo (Only shown if available and loaded without errors) */}
      {recipe.imageUrl && !imgErr && (
        <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-stone-100">
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImgErr(true)}
          />
          <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-white text-[9px] font-bold">
            {recipe.ageLabel}
          </span>
        </div>
      )}

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
            {recipe.categoryLabel}
          </span>
          {(!recipe.imageUrl || imgErr) && (
            <span className="px-1.5 py-0.5 rounded-md bg-rose-500 text-white text-[9px] font-bold">
              {recipe.ageLabel}
            </span>
          )}
        </div>
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
          onToggleFav(recipe.id);
        }}
        className="p-2 text-stone-400 hover:text-rose-600 rounded-full active-press"
        aria-label="Guardar en favoritos"
      >
        <Heart
          className={`w-5 h-5 transition-colors ${
            isFav ? 'fill-rose-500 text-rose-500' : 'text-stone-400'
          }`}
        />
      </button>
    </div>
  );
};

export const HomeScreen: React.FC = () => {
  const {
    baby,
    recipes,
    growthRecords,
    setActiveTab,
    setSelectedStageMonth,
    setSelectedRecipeId,
    setExtendedView,
    toggleFavorite,
    isFavorite,
    favoriteIds,
    foodsTracker,
    setShowInstallModal,
    isPWAInstalled
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

  const acceptedFoodsCount = foodsTracker.filter(f => f.status === 'accepted').length;

  // Latest growth record evaluation
  const sortedGrowth = [...growthRecords].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const latestGrowth = sortedGrowth[0] || {
    weightKg: baby.birthWeight,
    heightCm: baby.birthHeight,
    ageMonths: age.months,
    date: baby.birthDate
  };
  const growthEval = evaluateGrowthParameter(
    latestGrowth.weightKg,
    latestGrowth.ageMonths,
    'weight',
    baby.gender
  );

  const handleOpenRecipe = (recipeId: string) => {
    setSelectedRecipeId(recipeId);
  };

  return (
    <div id="home-screen" className="flex-1 overflow-y-auto px-4 pt-3 pb-24 no-scrollbar bg-stone-50">
      {/* 1. App Brand & Baby Greeting */}
      <div className="mb-4 flex items-center justify-between gap-3 bg-white p-3.5 rounded-3xl border border-stone-200/80 shadow-2xs">
        <div className="flex items-center gap-3">
          {/* Baby Chef Official Logo */}
          <div className="w-12 h-12 rounded-2xl bg-[#FCEEEA] p-0.5 shadow-2xs border border-stone-100 overflow-hidden shrink-0">
            <img src="/logo.png" alt="Baby Chef Logo" className="w-full h-full object-cover rounded-xl" />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <h2 className="text-base font-extrabold text-stone-900 tracking-tight font-display">
                Baby Chef
              </h2>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                Alimentación
              </span>
            </div>
            <p className="text-xs text-stone-600 font-medium">
              Hola, <strong className="text-stone-900 font-bold">{baby.name || 'bebé'}</strong> ({age.displayText})
            </p>
          </div>
        </div>

        {/* Baby Photo/Avatar link to profile */}
        <button
          onClick={() => setActiveTab('perfil')}
          className="relative shrink-0 active-press group"
          title="Ver perfil del bebé"
        >
          <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#F28B72] to-[#E06D53] p-0.5 shadow-xs">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-lg overflow-hidden">
              {baby.avatar || baby.photoUrl ? (
                <img
                  src={baby.avatar || baby.photoUrl}
                  alt={baby.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span>{baby.gender === 'girl' ? '👧' : '👶'}</span>
              )}
            </div>
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
        </button>
      </div>

      {/* Install App Quick Banner if not yet installed */}
      {!isPWAInstalled && (
        <div
          onClick={() => setShowInstallModal(true)}
          className="mb-4 p-3 bg-gradient-to-r from-[#FFF5F2] to-[#FEF0EC] border border-[#F28B72]/40 rounded-2xl flex items-center justify-between gap-3 shadow-2xs active-press cursor-pointer hover:border-[#E06D53] transition-all"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#E06D53] text-white flex items-center justify-center shrink-0 shadow-2xs">
              <Download className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-extrabold text-[#292524] leading-tight">
                Instala Baby Chef en tu pantalla principal 📲
              </p>
              <p className="text-[11px] text-stone-600">
                Acceso directo con un toque y uso sin internet
              </p>
            </div>
          </div>

          <span className="px-2.5 py-1 bg-[#E06D53] text-white text-[11px] font-bold rounded-lg shrink-0 shadow-2xs">
            Instalar
          </span>
        </div>
      )}

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
        className="mb-4 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white rounded-3xl p-4 shadow-md shadow-blue-900/10 active-press cursor-pointer hover:shadow-lg transition-all relative overflow-hidden"
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

      {/* 5c. Curvas de Crecimiento & Carnet de Salud OMS Card */}
      <div
        id="home-growth-curves-banner"
        onClick={() => setActiveTab('perfil')}
        className="mb-6 bg-gradient-to-r from-emerald-700 via-teal-800 to-emerald-900 text-white rounded-3xl p-4 shadow-md shadow-emerald-950/15 active-press cursor-pointer hover:shadow-lg transition-all relative overflow-hidden"
      >
        <div className="absolute right-0 bottom-0 text-5xl opacity-15 pointer-events-none translate-x-2 translate-y-2">
          📈
        </div>
        <div className="relative z-10 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/30 border border-emerald-400/40 text-emerald-200 font-bold flex items-center justify-center shadow-xs shrink-0">
              <TrendingUp className="w-5 h-5 text-emerald-100" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-emerald-200 bg-white/10 px-2 py-0.5 rounded-md mb-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                <span>Carnet de Vacunación & Salud</span>
              </div>
              <h5 className="text-sm font-bold font-display text-white leading-tight">
                Curvas de Crecimiento OMS
              </h5>
              <p className="text-[11px] text-emerald-100/90 line-clamp-1">
                {latestGrowth.weightKg} kg • {latestGrowth.heightCm} cm ({growthEval.percentileApprox})
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
          {quickRecipes.map((recipe) => (
            <HomeRecipeCard
              key={recipe.id}
              recipe={recipe}
              isFav={isFavorite(recipe.id)}
              onOpen={handleOpenRecipe}
              onToggleFav={toggleFavorite}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
