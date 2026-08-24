import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  Shield,
  AlertTriangle,
  Calendar,
  CheckCircle2,
  XCircle,
  Search,
  PhoneCall,
  Info,
  Sparkles,
  Heart,
  Check,
  Clock,
  Utensils,
  ChevronRight,
  Filter,
  Eye,
  Activity,
  Award,
  Share2,
  Copy,
  BookOpen
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import {
  ALLERGENS_TABLE,
  ALERT_SYMPTOMS,
  HOW_TO_ACT_STEPS,
  SAFETY_RECOMMENDATIONS,
  FOOD_GROUPS_BALANCE,
  AllergenFoodItem
} from '../data/allergensGuide';

interface AllergensGuideScreenProps {
  onBack?: () => void;
}

type AllergenTab = 'tabla_edad' | 'sintomas_urgencia' | 'protocolo_seguridad' | 'grupos_alimentos' | 'tracker_introduccion';
type AgeFilter = 'todos' | '6m' | '6_9m' | '12m' | 'prohibidos';

export const AllergensGuideScreen: React.FC<AllergensGuideScreenProps> = ({ onBack }) => {
  const { setExtendedView, showNotification } = useApp();

  const [activeTab, setActiveTab] = useState<AllergenTab>('tabla_edad');
  const [selectedAgeFilter, setSelectedAgeFilter] = useState<AgeFilter>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFood, setSelectedFood] = useState<AllergenFoodItem | null>(null);
  const [copiedText, setCopiedText] = useState(false);

  // Local state for allergen tracker (persisted in localStorage)
  const [testedAllergens, setTestedAllergens] = useState<{ [id: string]: { tested: boolean; date?: string; notes?: string } }>(() => {
    try {
      const saved = localStorage.getItem('blw_tested_allergens');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const handleToggleTested = (id: string) => {
    setTestedAllergens((prev) => {
      const current = prev[id] || { tested: false };
      const updated = {
        ...prev,
        [id]: {
          tested: !current.tested,
          date: !current.tested ? new Date().toISOString().split('T')[0] : undefined
        }
      };
      try {
        localStorage.setItem('blw_tested_allergens', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });

    if (showNotification) {
      showNotification('Progreso de alérgeno actualizado');
    }
  };

  const filteredFoods = useMemo(() => {
    return ALLERGENS_TABLE.filter((item) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.safePresentation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.groupLabel.toLowerCase().includes(searchQuery.toLowerCase());

      let matchesAge = true;
      if (selectedAgeFilter === '6m') {
        matchesAge = item.minMonth === 6 && !item.isForbiddenUnder12m && !item.isChokingHazard;
      } else if (selectedAgeFilter === '6_9m') {
        matchesAge = item.id === 'pescado_azul' || item.id === 'gluten';
      } else if (selectedAgeFilter === '12m') {
        matchesAge = item.minMonth >= 12 && !item.isChokingHazard;
      } else if (selectedAgeFilter === 'prohibidos') {
        matchesAge = !!item.isForbiddenUnder12m || !!item.isChokingHazard;
      }

      return matchesSearch && matchesAge;
    });
  }, [searchQuery, selectedAgeFilter]);

  const testedCount = useMemo(() => {
    return Object.values(testedAllergens).filter((item: { tested?: boolean }) => Boolean(item?.tested)).length;
  }, [testedAllergens]);

  const introAllergensList = useMemo(() => {
    return ALLERGENS_TABLE.filter((item) => !item.isForbiddenUnder12m && !item.isChokingHazard);
  }, []);

  const handleCopyGuide = () => {
    const text = `🛡️ GUÍA RÁPIDA DE ALÉRGENOS EN BEBÉS (6–24 MESES)\n\n` +
      `📌 REGLA DE ORO:\n` +
      `• No retrasar la introducción más allá de los 12 meses (reducir riesgo de alergias).\n` +
      `• Introducir un alérgeno nuevo cada 3 días consecutivos.\n` +
      `• Ofrecer siempre por la mañana o al mediodía (nunca de noche).\n` +
      `• Bebé sentado erguido (90°) y 100% bajo supervisión.\n\n` +
      `📊 INTRODUCCIÓN POR EDAD:\n` +
      ALLERGENS_TABLE.map((i) => `• ${i.name} (${i.recommendedAge}): ${i.safePresentation}`).join('\n') +
      `\n\n🚨 SÍNTOMAS DE ALERTA:\n` +
      ALERT_SYMPTOMS.map((s) => `• ${s.title}: ${s.description}`).join('\n') +
      `\n\n🛑 ALIMENTOS PROHIBIDOS:\n` +
      `• Miel (<12m): Riesgo botulismo.\n` +
      `• Frutos secos enteros, uvas enteras: Riesgo atragantamiento.`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedText(true);
        if (showNotification) showNotification('Guía de alérgenos copiada al portapapeles');
        setTimeout(() => setCopiedText(false), 2500);
      });
    }
  };

  return (
    <div id="allergens-guide-screen" className="flex-1 overflow-y-auto bg-stone-100 pb-36 no-scrollbar">
      {/* Sticky Header */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200 px-4 py-3 shadow-2xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {onBack && (
              <button
                id="allergens-guide-back-btn"
                onClick={onBack}
                className="p-2 rounded-xl bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors active-press"
                aria-label="Volver"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            <div>
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-full bg-teal-100 text-teal-900 text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                  <Shield className="w-3 h-3 text-teal-700" />
                  <span>Guía Pediátrica Oficial</span>
                </span>
              </div>
              <h1 className="text-sm font-extrabold text-stone-900 leading-tight">
                Alérgenos en Bebés (6–24 meses)
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleCopyGuide}
              className="p-2 rounded-xl bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors active-press"
              title="Copiar guía completa"
            >
              {copiedText ? (
                <Check className="w-4 h-4 text-emerald-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={() => setExtendedView('calendario_semanal')}
              className="py-1.5 px-3 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 transition-colors text-xs font-black flex items-center gap-1 active-press"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-700" />
              <span className="hidden xs:inline">Planner</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar mt-3 pt-1 text-xs font-black">
          {[
            { id: 'tabla_edad', label: '📊 Tabla por Edad', icon: Calendar },
            { id: 'sintomas_urgencia', label: '🚨 Síntomas & Urgencias', icon: AlertTriangle },
            { id: 'protocolo_seguridad', label: '🛡️ Seguridad & Reglas', icon: Shield },
            { id: 'grupos_alimentos', label: '🥗 Grupos & Balance', icon: Utensils },
            { id: 'tracker_introduccion', label: '✅ Mi Tracker', icon: CheckCircle2 }
          ].map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as AllergenTab)}
                className={`py-2 px-3 rounded-2xl whitespace-nowrap transition-all flex items-center gap-1.5 active-press ${
                  isSelected
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                <span>{tab.label}</span>
                {tab.id === 'tracker_introduccion' && testedCount > 0 && (
                  <span className="px-1.5 py-0.2 rounded-full bg-emerald-500 text-white text-[10px] font-black">
                    {testedCount}/{introAllergensList.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Container */}
      <div className="p-3.5 space-y-4">
        {/* ========================================================================= */}
        {/* 1. TABLA DE INTRODUCCIÓN POR EDAD */}
        {/* ========================================================================= */}
        {activeTab === 'tabla_edad' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3.5"
          >
            {/* Scientific Guideline Callout */}
            <div className="p-4 rounded-3xl bg-gradient-to-r from-teal-700 via-emerald-700 to-teal-800 text-white shadow-md space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20">
                  Consenso Pediátrico Actual
                </span>
                <span className="text-[10px] font-extrabold bg-black/25 px-2 py-0.5 rounded-full">
                  6 a 24 Meses
                </span>
              </div>
              <h2 className="text-base font-black font-display leading-tight">
                Introducción Temprana & Segura
              </h2>
              <p className="text-xs text-teal-100 font-medium leading-relaxed">
                La introducción de alimentos potencialmente alérgenos <strong>no debe retrasarse más allá de los 12 meses</strong>. Introducirlos temprano (de forma segura y controlada) reduce significativamente el riesgo de alergias a largo plazo.
              </p>
            </div>

            {/* Search & Age Filters */}
            <div className="space-y-2">
              <div className="relative">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Buscar alérgeno (ej. huevo, cacahuete, pescado)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-2xl border border-stone-200 text-xs font-medium text-stone-900 bg-white shadow-2xs focus:outline-teal-600"
                />
              </div>

              {/* Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 text-xs font-bold">
                {[
                  { id: 'todos', label: 'Todos los alérgenos' },
                  { id: '6m', label: 'Desde 6 meses' },
                  { id: '6_9m', label: '6 a 9 meses' },
                  { id: '12m', label: 'Desde 12 meses' },
                  { id: 'prohibidos', label: '🚫 Prohibidos' }
                ].map((filter) => {
                  const isSel = selectedAgeFilter === filter.id;
                  return (
                    <button
                      key={filter.id}
                      onClick={() => setSelectedAgeFilter(filter.id as AgeFilter)}
                      className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all active-press ${
                        isSel
                          ? 'bg-teal-700 text-white shadow-2xs'
                          : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      {filter.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Results Grid */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-black text-stone-700">
                  Mostrando {filteredFoods.length} alimentos
                </span>
                <span className="text-[11px] font-semibold text-stone-500">
                  Toca la tarjeta para ver detalles
                </span>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {filteredFoods.map((item) => {
                  const isTested = !!testedAllergens[item.id]?.tested;
                  const isForbidden = item.isForbiddenUnder12m || item.isChokingHazard;

                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedFood(item)}
                      className={`p-4 rounded-3xl border transition-all cursor-pointer active-press shadow-2xs hover:shadow-xs flex flex-col justify-between ${
                        isForbidden
                          ? 'bg-rose-50/60 border-rose-200 text-rose-950'
                          : isTested
                          ? 'bg-emerald-50/50 border-emerald-200 text-stone-900'
                          : 'bg-white border-stone-200/90 text-stone-900'
                      }`}
                    >
                      <div className="space-y-2">
                        {/* Top Tag & Status */}
                        <div className="flex items-center justify-between gap-1.5">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xl">{item.icon}</span>
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                                isForbidden
                                  ? 'bg-rose-600 text-white'
                                  : 'bg-stone-100 text-stone-700'
                              }`}
                            >
                              {item.recommendedAge}
                            </span>
                          </div>

                          {!isForbidden && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleToggleTested(item.id);
                              }}
                              className={`px-2.5 py-1 rounded-xl text-[10px] font-black flex items-center gap-1 transition-all ${
                                isTested
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                              }`}
                            >
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>{isTested ? 'Probado & Tolerado' : 'Marcar probado'}</span>
                            </button>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-sm font-extrabold leading-snug">
                          {item.name}
                        </h3>

                        {/* Safe Presentation Box */}
                        <div
                          className={`p-2.5 rounded-2xl text-xs space-y-1 ${
                            isForbidden
                              ? 'bg-rose-100/70 border border-rose-200 text-rose-900 font-medium'
                              : 'bg-stone-50 border border-stone-100 text-stone-800'
                          }`}
                        >
                          <span className="text-[10px] font-black uppercase tracking-wider text-stone-500 block">
                            {isForbidden ? 'Motivo de Prohibición:' : 'Forma Segura de Ofrecer:'}
                          </span>
                          <p className="text-xs leading-relaxed font-semibold">
                            {item.safePresentation}
                          </p>
                        </div>
                      </div>

                      {/* Footer Tip */}
                      <div className="mt-2.5 pt-2 border-t border-stone-100/80 flex items-center justify-between text-[11px] text-stone-500">
                        <span className="line-clamp-1 font-medium italic">
                          💡 {item.tips}
                        </span>
                        <ChevronRight className="w-4 h-4 text-stone-400 shrink-0 ml-1" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* 2. SÍNTOMAS DE ALERTA & CÓMO ACTUAR */}
        {/* ========================================================================= */}
        {activeTab === 'sintomas_urgencia' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Header Alert */}
            <div className="p-4 rounded-3xl bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 text-white shadow-md space-y-1.5">
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20">
                Protocolo de Emergencia
              </span>
              <h2 className="text-base font-black font-display leading-tight">
                Síntomas de Alerta de Reacción Alérgica
              </h2>
              <p className="text-xs text-white/90 font-medium leading-relaxed">
                Si notas alguno de estos síntomas después de ofrecer un alimento nuevo, <strong>suspende inmediatamente su consumo</strong> y sigue los pasos de actuación.
              </p>
            </div>

            {/* Symptoms Cards */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-black text-stone-900 uppercase tracking-wider px-1">
                5 Signos Clínicos de Alarma
              </h3>

              <div className="grid grid-cols-1 gap-2.5">
                {ALERT_SYMPTOMS.map((sym) => (
                  <div
                    key={sym.id}
                    className="p-3.5 rounded-3xl bg-white border border-stone-200/90 shadow-2xs flex items-start gap-3"
                  >
                    <span className="text-2xl shrink-0 p-2 rounded-2xl bg-rose-50 border border-rose-100">
                      {sym.icon}
                    </span>
                    <div className="space-y-0.5 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-extrabold text-stone-900 leading-snug">
                          {sym.title}
                        </h4>
                        <span
                          className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${
                            sym.severity === 'grave'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-amber-100 text-amber-900'
                          }`}
                        >
                          {sym.severity}
                        </span>
                      </div>
                      <p className="text-xs text-stone-600 font-medium leading-relaxed">
                        {sym.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cómo Actuar (Paso a Paso) */}
            <div className="bg-white rounded-3xl border border-stone-200 p-4 shadow-2xs space-y-3.5">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-stone-900" />
                  <h3 className="text-xs font-black text-stone-900 uppercase tracking-wider">
                    ¿Cómo Actuar? (Paso a Paso)
                  </h3>
                </div>
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-stone-100 text-stone-700">
                  Guía Rápida
                </span>
              </div>

              <div className="space-y-2.5">
                {HOW_TO_ACT_STEPS.map((step) => (
                  <div
                    key={step.step}
                    className={`p-3.5 rounded-2xl border flex items-start gap-3 ${
                      step.highlight
                        ? 'bg-rose-50 border-rose-300 text-rose-950 shadow-xs'
                        : 'bg-stone-50 border-stone-200/80 text-stone-800'
                    }`}
                  >
                    <span
                      className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs shrink-0 ${
                        step.highlight
                          ? 'bg-rose-600 text-white'
                          : 'bg-stone-900 text-white'
                      }`}
                    >
                      {step.step}
                    </span>
                    <div className="space-y-0.5 flex-1">
                      <h4 className="text-xs font-black leading-snug">
                        {step.title}
                      </h4>
                      <p className="text-xs leading-relaxed font-medium opacity-90">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Medical Guide Link Button */}
            <button
              onClick={() => setExtendedView('guia_medica')}
              className="w-full p-4 rounded-3xl bg-stone-900 text-white shadow-md active-press flex items-center justify-between hover:bg-stone-800 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-xl">
                  🩺
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-black leading-tight">
                    Ver Guía Médica Completa BLW
                  </h4>
                  <p className="text-[11px] text-stone-300 font-normal">
                    Lactancia, digestión, vómitos, atragantamiento vs arcada
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-stone-400" />
            </button>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* 3. RECOMENDACIONES DE TRANQUILIDAD Y SEGURIDAD */}
        {/* ========================================================================= */}
        {activeTab === 'protocolo_seguridad' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Header Banner */}
            <div className="p-4 rounded-3xl bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 text-white shadow-md space-y-1.5">
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20">
                Pautas de Confianza
              </span>
              <h2 className="text-base font-black font-display leading-tight">
                Recomendaciones para Tranquilidad y Seguridad
              </h2>
              <p className="text-xs text-stone-300 font-normal leading-relaxed">
                Claves prácticas para ofrecer alérgenos con total calma y control en el hogar.
              </p>
            </div>

            {/* List of Safety Rules */}
            <div className="space-y-3">
              {SAFETY_RECOMMENDATIONS.map((rec, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-3xl bg-white border border-stone-200 shadow-2xs space-y-1.5"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl p-1.5 rounded-2xl bg-amber-50 border border-amber-100">
                      {rec.icon}
                    </span>
                    <h3 className="text-xs font-black text-stone-900 leading-snug">
                      {rec.title}
                    </h3>
                  </div>
                  <p className="text-xs text-stone-600 font-medium leading-relaxed pl-1">
                    {rec.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Parental Modeling Quote Banner (Page 8 of PDF) */}
            <div className="p-4 rounded-3xl bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white shadow-md space-y-2 text-center">
              <span className="text-2xl block">🥦 🥕 🥑</span>
              <blockquote className="text-sm font-black font-display italic leading-snug">
                «Para que ellos coman verduras, primero tienes que comerlas tú»
              </blockquote>
              <p className="text-[11px] text-emerald-200 font-normal max-w-xs mx-auto">
                Los bebés imitan los gestos, entusiasmo y variedad de la comida de los padres en la mesa.
              </p>
            </div>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* 4. GRUPOS DE ALIMENTOS & PLAN NUTRICIONAL */}
        {/* ========================================================================= */}
        {activeTab === 'grupos_alimentos' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Header */}
            <div className="p-4 rounded-3xl bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white shadow-md space-y-1.5">
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20">
                Plan Nutricional Completo
              </span>
              <h2 className="text-base font-black font-display leading-tight">
                Grupos de Alimentos & Balance Diario
              </h2>
              <p className="text-xs text-emerald-100 font-medium leading-relaxed">
                Para una nutrición completa de 6 a 24 meses, combina armónicamente los 5 grupos clave en cada comida principal.
              </p>
            </div>

            {/* Visual Connected Diagram (From Page 6 of PDF) */}
            <div className="bg-white rounded-3xl border border-stone-200 p-4 shadow-2xs space-y-3">
              <h3 className="text-xs font-black text-stone-900 uppercase tracking-wider text-center">
                Esquema de Interconexión Nutricional
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                {FOOD_GROUPS_BALANCE.map((grp) => (
                  <div
                    key={grp.id}
                    className={`p-3 rounded-2xl border ${grp.color} space-y-1 flex flex-col justify-between`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{grp.icon}</span>
                      <span className={`w-2 h-2 rounded-full ${grp.dotColor}`} />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold leading-tight">{grp.name}</h4>
                      <p className="text-[10px] opacity-80 font-medium leading-tight mt-0.5">
                        {grp.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Link to 70 Bonus Recipes */}
            <button
              onClick={() => setExtendedView('bonus_recetas')}
              className="w-full p-4 rounded-3xl bg-amber-50 border border-amber-200 text-amber-950 shadow-xs active-press flex items-center justify-between hover:bg-amber-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎁</span>
                <div className="text-left">
                  <h4 className="text-xs font-black leading-tight">
                    Ver 70 Recetas Nutritivas (12 a 24 Meses)
                  </h4>
                  <p className="text-[11px] text-amber-800 font-medium">
                    Desayunos, almuerzos y snacks sin sal ni azúcar
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-amber-700" />
            </button>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* 5. TRACKER INTERACTIVO DE INTRODUCCIÓN DE ALÉRGENOS */}
        {/* ========================================================================= */}
        {activeTab === 'tracker_introduccion' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Header Card with Progress */}
            <div className="p-4 rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white shadow-md space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20">
                  Progreso del Bebé
                </span>
                <span className="text-xs font-black bg-black/20 px-2 py-0.5 rounded-full">
                  {testedCount} de {introAllergensList.length} introducidos
                </span>
              </div>
              <h2 className="text-base font-black font-display leading-tight">
                Tracker de Alérgenos Clave
              </h2>
              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full bg-black/20 overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-500 rounded-full"
                  style={{
                    width: `${Math.round((testedCount / introAllergensList.length) * 100)}%`
                  }}
                />
              </div>
              <p className="text-xs text-emerald-100 font-medium">
                Marca cada alérgeno una vez que el bebé lo haya probado durante 3 días consecutivos sin reacciones adversas.
              </p>
            </div>

            {/* Checklist items */}
            <div className="space-y-2">
              {introAllergensList.map((item) => {
                const info = testedAllergens[item.id];
                const isChecked = !!info?.tested;

                return (
                  <div
                    key={item.id}
                    onClick={() => handleToggleTested(item.id)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between active-press ${
                      isChecked
                        ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950 shadow-2xs'
                        : 'bg-white border-stone-200 text-stone-800 hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-lg flex items-center justify-center font-black text-xs transition-colors shrink-0 ${
                          isChecked
                            ? 'bg-emerald-600 text-white'
                            : 'border-2 border-stone-300 bg-white'
                        }`}
                      >
                        {isChecked && <Check className="w-4 h-4 stroke-[3]" />}
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-base">{item.icon}</span>
                          <h4 className="text-xs font-black leading-snug">
                            {item.name}
                          </h4>
                        </div>
                        <span className="text-[10px] text-stone-500 font-semibold block">
                          {item.recommendedAge} · {item.groupLabel}
                        </span>
                        {isChecked && info?.date && (
                          <span className="text-[10px] text-emerald-700 font-extrabold mt-0.5 block">
                            ✓ Tolerado ({info.date})
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedFood(item);
                      }}
                      className="p-1.5 rounded-lg bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors"
                      title="Ver forma segura"
                    >
                      <Info className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* MODAL DETALLE DE ALIMENTO / ALÉRGENO */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedFood && (
          <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4">
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl border border-stone-200"
            >
              {/* Modal Header */}
              <div
                className={`p-4 border-b flex items-center justify-between ${
                  selectedFood.isForbiddenUnder12m || selectedFood.isChokingHazard
                    ? 'bg-rose-50 border-rose-200'
                    : 'bg-teal-50 border-teal-100'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-3xl">{selectedFood.icon}</span>
                  <div>
                    <span
                      className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        selectedFood.isForbiddenUnder12m || selectedFood.isChokingHazard
                          ? 'bg-rose-600 text-white'
                          : 'bg-teal-700 text-white'
                      }`}
                    >
                      {selectedFood.recommendedAge}
                    </span>
                    <h3 className="text-sm font-black text-stone-900 line-clamp-1 mt-0.5">
                      {selectedFood.name}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedFood(null)}
                  className="p-2 rounded-full bg-stone-200/80 hover:bg-stone-300 text-stone-700 transition-colors"
                >
                  <XCircle className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-5 overflow-y-auto space-y-4 text-xs">
                {/* Safe Presentation */}
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
                  <h4 className="text-xs font-black uppercase tracking-wider text-stone-900 flex items-center gap-1.5">
                    <Utensils className="w-4 h-4 text-teal-700" />
                    <span>
                      {selectedFood.isForbiddenUnder12m || selectedFood.isChokingHazard
                        ? 'Motivo de Prohibición Pediátrica'
                        : 'Forma Segura de Preparar & Ofrecer'}
                    </span>
                  </h4>
                  <p className="text-xs text-stone-800 leading-relaxed font-semibold">
                    {selectedFood.safePresentation}
                  </p>
                </div>

                {/* Important Clinical Tips */}
                <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-1">
                  <span className="font-black uppercase tracking-wider text-[11px] text-amber-900 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>Consejo Pediátrico:</span>
                  </span>
                  <p className="text-xs text-stone-700 font-medium leading-relaxed">
                    {selectedFood.tips}
                  </p>
                </div>

                {/* 3 Days rule reminder */}
                {!selectedFood.isForbiddenUnder12m && !selectedFood.isChokingHazard && (
                  <div className="p-3 rounded-2xl bg-teal-50/60 border border-teal-200 text-teal-950 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <span className="text-[11px] font-medium leading-relaxed">
                      Recuerda ofrecerlo durante <strong>3 días seguidos</strong> por la mañana o mediodía antes de introducir un nuevo alimento alérgeno.
                    </span>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-stone-100 bg-stone-50 flex items-center justify-between gap-2">
                {!selectedFood.isForbiddenUnder12m && !selectedFood.isChokingHazard ? (
                  <button
                    onClick={() => {
                      handleToggleTested(selectedFood.id);
                    }}
                    className={`flex-1 py-3 px-4 rounded-2xl font-black text-xs shadow-xs flex items-center justify-center gap-2 active-press transition-colors ${
                      testedAllergens[selectedFood.id]?.tested
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                        : 'bg-stone-900 text-white hover:bg-stone-800'
                    }`}
                  >
                    <Check className="w-4 h-4" />
                    <span>
                      {testedAllergens[selectedFood.id]?.tested
                        ? 'Tolerado por el Bebé (Tocar para desmarcar)'
                        : 'Marcar como Probado & Tolerado'}
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={() => setSelectedFood(null)}
                    className="w-full py-3 px-4 rounded-2xl bg-stone-900 text-white font-black text-xs"
                  >
                    Entendido
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
