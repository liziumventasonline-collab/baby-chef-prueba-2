import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Heart,
  Sparkles,
  Layers,
  Utensils,
  Share2,
  Calendar,
  Check,
  Info,
  ShieldAlert,
  ArrowRight,
  TrendingUp,
  Apple,
  Copy,
  ExternalLink,
  PhoneCall,
  Smile
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import {
  MEDICAL_GUIDE_CHAPTERS,
  DOCTOR_PROFILE,
  TRIAD_FOODS_DATABASE,
  MedicalGuideChapter
} from '../data/medicalGuidePediatra';

interface MedicalGuideScreenProps {
  onBack?: () => void;
}

type GuideTab = 'capitulos' | 'checklist' | 'triada' | 'constructor' | 'alergias' | 'autor';

export const MedicalGuideScreen: React.FC<MedicalGuideScreenProps> = ({ onBack }) => {
  const { setExtendedView, baby } = useApp();

  const [activeTab, setActiveTab] = useState<GuideTab>('capitulos');
  const [currentChapterIndex, setCurrentChapterIndex] = useState<number>(0);

  // Checklist state for "5 Señales de que tu bebé está listo"
  const [checklist, setChecklist] = useState<{ [key: number]: boolean }>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  });

  // Triad Interactive Meal Builder State
  const [customMenuMeal, setCustomMenuMeal] = useState<'desayuno' | 'comida' | 'cena'>('desayuno');
  const [selectedHierro, setSelectedHierro] = useState<string>('Carne roja (res/ternera)');
  const [selectedVitC, setSelectedVitC] = useState<string>('Brócoli al vapor');
  const [selectedEnergia, setSelectedEnergia] = useState<string>('Tortilla de maíz');
  const [savedMeals, setSavedMeals] = useState<{
    desayuno: { hierro: string; vitC: string; energia: string };
    comida: { hierro: string; vitC: string; energia: string };
    cena: { hierro: string; vitC: string; energia: string };
  }>({
    desayuno: { hierro: 'Huevo (yema/clara)', vitC: 'Mango maduro en bastón', energia: 'Hotcakes de avena y plátano' },
    comida: { hierro: 'Carne roja (res/ternera)', vitC: 'Espárragos suaves', energia: 'Tortilla de maíz' },
    cena: { hierro: 'Deditos de lentejas', vitC: 'Tomate en gajos sin piel', energia: 'Aguacate maduro en gajos' }
  });
  const [copiedMenuSuccess, setCopiedMenuSuccess] = useState(false);

  const currentChapter = MEDICAL_GUIDE_CHAPTERS[currentChapterIndex] || MEDICAL_GUIDE_CHAPTERS[0];

  const handleToggleCheck = (index: number) => {
    setChecklist((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const totalChecksCount = Object.values(checklist).filter(Boolean).length;
  const isBabyReady = totalChecksCount === 5;

  const handleSaveCurrentMeal = () => {
    setSavedMeals((prev) => ({
      ...prev,
      [customMenuMeal]: {
        hierro: selectedHierro,
        vitC: selectedVitC,
        energia: selectedEnergia
      }
    }));
  };

  const handleCopyBuiltMenu = () => {
    const text = `🍽️ MENÚ NUTRITIVO CON LA TRÍADA DEL DR. ROBERTO HERNÁNDEZ (@intensivistapediatra)\n\n` +
      `☀️ DESAYUNO:\n` +
      `  • 🔴 Hierro: ${savedMeals.desayuno.hierro}\n` +
      `  • 🟢 Vitamina C: ${savedMeals.desayuno.vitC}\n` +
      `  • 🟠 Energía: ${savedMeals.desayuno.energia}\n\n` +
      `🍲 COMIDA / ALMUERZO:\n` +
      `  • 🔴 Hierro: ${savedMeals.comida.hierro}\n` +
      `  • 🟢 Vitamina C: ${savedMeals.comida.vitC}\n` +
      `  • 🟠 Energía: ${savedMeals.comida.energia}\n\n` +
      `🌙 CENA:\n` +
      `  • 🔴 Hierro: ${savedMeals.cena.hierro}\n` +
      `  • 🟢 Vitamina C: ${savedMeals.cena.vitC}\n` +
      `  • 🟠 Energía: ${savedMeals.cena.energia}\n\n` +
      `💡 Recuerda: La vitamina C multiplica la absorción del hierro. Sin sal ni azúcar.`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedMenuSuccess(true);
        setTimeout(() => setCopiedMenuSuccess(false), 2500);
      });
    }
  };

  return (
    <div id="medical-guide-screen" className="flex-1 overflow-y-auto bg-stone-100 pb-36 no-scrollbar">
      {/* Sticky Header */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200 px-4 py-3 shadow-2xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {onBack && (
              <button
                id="medical-guide-back-btn"
                onClick={onBack}
                className="p-2 rounded-xl bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors active-press"
                aria-label="Volver"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            <div>
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-900 text-[10px] font-black uppercase tracking-wider">
                  Guía Médica Pediatra
                </span>
              </div>
              <h1 className="text-sm font-extrabold text-stone-900 leading-tight">
                {DOCTOR_PROFILE.name}
              </h1>
              <p className="text-[11px] text-stone-500 font-medium">
                {DOCTOR_PROFILE.title} · {DOCTOR_PROFILE.social}
              </p>
            </div>
          </div>

          <button
            onClick={() => setExtendedView('calendario_semanal')}
            className="py-1.5 px-3 rounded-2xl bg-teal-50 text-teal-800 border border-teal-200/80 hover:bg-teal-100 transition-colors text-xs font-black flex items-center gap-1 active-press"
            title="Ir al Planner de 24 Semanas"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Planner 24S</span>
          </button>
        </div>

        {/* Tab Navigation Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-2 no-scrollbar text-xs font-bold mt-1">
          <button
            onClick={() => setActiveTab('capitulos')}
            className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'capitulos'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Manual (Lectura)</span>
          </button>

          <button
            onClick={() => setActiveTab('checklist')}
            className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'checklist'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100 border border-emerald-200'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>¿Está Listo? ({totalChecksCount}/5)</span>
          </button>

          <button
            onClick={() => setActiveTab('triada')}
            className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'triada'
                ? 'bg-teal-700 text-white shadow-xs'
                : 'bg-teal-50 text-teal-900 hover:bg-teal-100 border border-teal-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Tríada Nutricional</span>
          </button>

          <button
            onClick={() => setActiveTab('constructor')}
            className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'constructor'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-amber-50 text-amber-950 hover:bg-amber-100 border border-amber-200'
            }`}
          >
            <Utensils className="w-3.5 h-3.5" />
            <span>Armar Menú Tríada</span>
          </button>

          <button
            onClick={() => setActiveTab('alergias')}
            className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'alergias'
                ? 'bg-rose-700 text-white shadow-xs'
                : 'bg-rose-50 text-rose-900 hover:bg-rose-100 border border-rose-200'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Alergias & Urgencias</span>
          </button>

          <button
            onClick={() => setActiveTab('autor')}
            className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'autor'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <Heart className="w-3.5 h-3.5" />
            <span>Doctor & Redes</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-3.5 space-y-4">
        {/* ========================================================================= */}
        {/* 1. VISTA MANUAL / CAPÍTULOS DE LECTURA */}
        {/* ========================================================================= */}
        {activeTab === 'capitulos' && (
          <div className="space-y-4">
            {/* Chapter Selector Carousel */}
            <div className="flex items-center gap-1.5 overflow-x-auto py-1 no-scrollbar">
              {MEDICAL_GUIDE_CHAPTERS.map((chap, idx) => (
                <button
                  key={chap.id}
                  onClick={() => setCurrentChapterIndex(idx)}
                  className={`px-3 py-2 rounded-2xl text-xs font-black whitespace-nowrap flex items-center gap-1.5 transition-all shrink-0 active-press ${
                    currentChapterIndex === idx
                      ? 'bg-stone-900 text-white shadow-sm scale-105'
                      : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-stone-200/60 text-stone-800">
                    Pág {chap.pageNumber}
                  </span>
                  <span>{chap.shortTitle}</span>
                </button>
              ))}
            </div>

            {/* Current Chapter Card */}
            <motion.div
              key={`chapter-${currentChapter.id}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className="bg-white rounded-3xl border border-stone-200/90 shadow-2xs overflow-hidden space-y-4 p-5"
            >
              {/* Header Badge & Page */}
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-[11px] font-black uppercase tracking-wider">
                  {currentChapter.badge}
                </span>
                <span className="text-xs font-bold text-stone-500">
                  Página {currentChapter.pageNumber} del Manual
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h2 className="text-lg font-black text-stone-900 font-display leading-tight">
                  {currentChapter.title}
                </h2>
                <p className="text-xs text-stone-600 mt-1 font-medium leading-relaxed">
                  {currentChapter.subtitle}
                </p>
              </div>

              {/* Intro Text if available */}
              {currentChapter.content.intro && (
                <div className="p-3.5 rounded-2xl bg-rose-50/60 border border-rose-100/80 text-xs text-stone-800 leading-relaxed font-normal italic">
                  “{currentChapter.content.intro}”
                </div>
              )}

              {/* Content Sections */}
              <div className="space-y-4 pt-1">
                {currentChapter.content.sections.map((sec, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    {sec.subtitle && (
                      <h3 className="text-xs font-black uppercase tracking-wider text-stone-900 border-l-2 border-rose-500 pl-2">
                        {sec.subtitle}
                      </h3>
                    )}

                    {sec.text && (
                      <p className="text-xs text-stone-700 leading-relaxed font-normal">
                        {sec.text}
                      </p>
                    )}

                    {sec.bullets && (
                      <ul className="space-y-2">
                        {sec.bullets.map((b, bIdx) => (
                          <li
                            key={bIdx}
                            className="text-xs text-stone-700 font-medium flex items-start gap-2 bg-stone-50 p-2.5 rounded-xl border border-stone-100"
                          >
                            <span className="text-rose-500 font-bold shrink-0 mt-0.5">•</span>
                            <span className="leading-snug">{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {sec.numberedList && (
                      <ol className="space-y-2">
                        {sec.numberedList.map((item, nIdx) => (
                          <li
                            key={nIdx}
                            className="text-xs text-stone-800 font-semibold flex items-start gap-2.5 bg-emerald-50/50 p-3 rounded-2xl border border-emerald-100/80"
                          >
                            <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[11px] font-black flex items-center justify-center shrink-0">
                              {nIdx + 1}
                            </span>
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ol>
                    )}

                    {/* Highlight Box Callout */}
                    {sec.highlightBox && (
                      <div
                        className={`p-4 rounded-2xl border text-xs space-y-1 ${
                          sec.highlightBox.type === 'alert'
                            ? 'bg-rose-50 border-rose-200 text-rose-950'
                            : sec.highlightBox.type === 'success'
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                            : sec.highlightBox.type === 'doctor'
                            ? 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 text-amber-950'
                            : 'bg-blue-50 border-blue-200 text-blue-950'
                        }`}
                      >
                        {sec.highlightBox.title && (
                          <div className="flex items-center gap-1.5 font-black uppercase tracking-wider text-[11px]">
                            <span>💡</span>
                            <span>{sec.highlightBox.title}</span>
                          </div>
                        )}
                        <p className="leading-relaxed font-medium">
                          {sec.highlightBox.content}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between gap-3 pt-3 border-t border-stone-100">
                <button
                  disabled={currentChapterIndex === 0}
                  onClick={() => setCurrentChapterIndex((prev) => Math.max(0, prev - 1))}
                  className="py-2 px-3 rounded-xl bg-stone-100 text-stone-700 font-bold text-xs flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-stone-200 active-press"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Anterior</span>
                </button>

                <span className="text-xs font-black text-stone-500">
                  {currentChapterIndex + 1} / {MEDICAL_GUIDE_CHAPTERS.length}
                </span>

                <button
                  disabled={currentChapterIndex === MEDICAL_GUIDE_CHAPTERS.length - 1}
                  onClick={() => setCurrentChapterIndex((prev) => Math.min(MEDICAL_GUIDE_CHAPTERS.length - 1, prev + 1))}
                  className="py-2 px-3 rounded-xl bg-stone-900 text-white font-bold text-xs flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-stone-800 active-press"
                >
                  <span>Siguiente</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 2. VISTA CHECKLIST "¿ESTÁ LISTO MI BEBÉ?" */}
        {/* ========================================================================= */}
        {activeTab === 'checklist' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-5 rounded-3xl shadow-md space-y-1.5">
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20">
                Página 3 del Manual · Evaluación Neuromotora
              </span>
              <h2 className="text-lg font-black font-display">¿Cómo voy a saber que mi bebé está listo?</h2>
              <p className="text-xs text-emerald-100 font-normal leading-relaxed">
                Marca cada una de las 5 señales que observes en tu bebé. Recuerda que no todos maduran exactamente el mismo día.
              </p>
            </div>

            {/* Checklist Items */}
            <div className="space-y-2.5">
              {[
                { id: 1, label: '1. Tiene 6 meses cumplidos', desc: '180 días de vida para asegurar madurez intestinal y renal.' },
                { id: 2, label: '2. Sostiene su cabeza cuando lo sientas', desc: 'Control cefálico firme sin tambalear hacia los lados.' },
                { id: 3, label: '3. Se mantiene sentado con ayuda', desc: 'Soporte de tronco en su trona con la espalda recta.' },
                { id: 4, label: '4. Muestra interés activo por la comida', desc: 'Sigue los alimentos con la mirada e intenta agarrarlos.' },
                { id: 5, label: '5. No empuja la comida con la lengua hacia afuera', desc: 'Ha perdido el reflejo de extrusión natural del recién nacido.' }
              ].map((item) => {
                const isChecked = !!checklist[item.id];
                return (
                  <button
                    key={item.id}
                    onClick={() => handleToggleCheck(item.id)}
                    className={`w-full p-4 rounded-3xl border text-left transition-all flex items-start gap-3.5 active-press ${
                      isChecked
                        ? 'bg-emerald-50/80 border-emerald-300 shadow-2xs'
                        : 'bg-white border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isChecked ? 'bg-emerald-600 text-white' : 'border-2 border-stone-300 bg-white'
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <div className="flex-1 space-y-0.5">
                      <h4 className={`text-xs font-black ${isChecked ? 'text-emerald-950' : 'text-stone-900'}`}>
                        {item.label}
                      </h4>
                      <p className="text-[11px] text-stone-500 font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Result Verdict Card */}
            <div
              className={`p-4 rounded-3xl border text-center space-y-2 transition-all ${
                isBabyReady
                  ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md'
                  : 'bg-white border-stone-200 text-stone-800'
              }`}
            >
              {isBabyReady ? (
                <>
                  <div className="text-3xl">🎉</div>
                  <h3 className="text-base font-black font-display">¡Tu bebé cumple las 5 señales!</h3>
                  <p className="text-xs text-emerald-100 font-medium leading-relaxed">
                    Está preparado para iniciar su alimentación complementaria. Recuerda: 10% nutrición y 90% diversión.
                  </p>
                  <button
                    onClick={() => setExtendedView('calendario_semanal')}
                    className="mt-2 py-2 px-5 rounded-2xl bg-white text-emerald-950 font-black text-xs shadow-md active-press inline-flex items-center gap-1.5 hover:bg-emerald-50"
                  >
                    <span>IR AL PLANNER SEMANA 1</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </>
              ) : (
                <>
                  <h3 className="text-xs font-black text-stone-900">
                    Llevas {totalChecksCount} de 5 señales confirmadas
                  </h3>
                  <p className="text-[11px] text-stone-500 font-normal leading-relaxed">
                    Si tu bebé necesita un poco más de tiempo, ten paciencia. No tiene ninguna relevancia negativa en su desarrollo futuro.
                  </p>
                </>
              )}
            </div>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* 3. VISTA TRÍADA NUTRICIONAL (TABLA DE ALIMENTOS DEL PDF PÁGINA 10) */}
        {/* ========================================================================= */}
        {activeTab === 'triada' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-teal-700 to-emerald-800 text-white p-5 rounded-3xl shadow-md space-y-1.5">
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20">
                Página 10 del Manual · Juega para el Hierro
              </span>
              <h2 className="text-lg font-black font-display">La Tríada Nutricional Completa</h2>
              <p className="text-xs text-teal-100 font-normal leading-relaxed">
                El juego no es solo darle hierro, ¡sino MAXIMIZAR su absorción combinándolo con Vitamina C y Energía!
              </p>
            </div>

            {/* 3 Columns / Cards of the Triad */}
            <div className="space-y-3.5">
              {/* Columna 1: Hierro y Proteínas (Rojo/Rosa) */}
              <div className="bg-white rounded-3xl border-2 border-rose-200 p-4 shadow-2xs space-y-3">
                <div className="flex items-center justify-between border-b border-rose-100 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-rose-500 shrink-0" />
                    <h3 className="text-xs font-black text-rose-950 uppercase tracking-wider">
                      Alimentos Ricos en Hierro y Proteínas
                    </h3>
                  </div>
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-rose-100 text-rose-900">
                    Grupo Rojo
                  </span>
                </div>
                <p className="text-[11px] text-stone-600 font-medium">
                  Previene la anemia del lactante y apoya el desarrollo cerebral.
                </p>
                <div className="grid grid-cols-2 gap-1.5">
                  {TRIAD_FOODS_DATABASE.hierroProteinas.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded-xl bg-rose-50/50 border border-rose-100 text-xs font-semibold text-rose-950 flex items-center gap-1.5"
                    >
                      <span>{item.icon}</span>
                      <span className="truncate">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Columna 2: Ricos en Vitamina C (Verde/Azul) */}
              <div className="bg-white rounded-3xl border-2 border-teal-200 p-4 shadow-2xs space-y-3">
                <div className="flex items-center justify-between border-b border-teal-100 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-teal-500 shrink-0" />
                    <h3 className="text-xs font-black text-teal-950 uppercase tracking-wider">
                      Alimentos Ricos en Vitamina C
                    </h3>
                  </div>
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-teal-100 text-teal-900">
                    Grupo Verde
                  </span>
                </div>
                <p className="text-[11px] text-stone-600 font-medium">
                  Multiplica la absorción de hierro a nivel intestinal y fortalece las defensas.
                </p>
                <div className="grid grid-cols-2 gap-1.5">
                  {TRIAD_FOODS_DATABASE.vitaminaC.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded-xl bg-teal-50/50 border border-teal-100 text-xs font-semibold text-teal-950 flex items-center gap-1.5"
                    >
                      <span>{item.icon}</span>
                      <span className="truncate">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Columna 3: Alimentos Energéticos (Naranja) */}
              <div className="bg-white rounded-3xl border-2 border-amber-200 p-4 shadow-2xs space-y-3">
                <div className="flex items-center justify-between border-b border-amber-100 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-amber-500 shrink-0" />
                    <h3 className="text-xs font-black text-amber-950 uppercase tracking-wider">
                      Alimentos Energéticos
                    </h3>
                  </div>
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">
                    Grupo Naranja
                  </span>
                </div>
                <p className="text-[11px] text-stone-600 font-medium">
                  Aportan energía limpia para los procesos bioquímicos y el crecimiento activo.
                </p>
                <div className="grid grid-cols-2 gap-1.5">
                  {TRIAD_FOODS_DATABASE.energeticos.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded-xl bg-amber-50/50 border border-amber-100 text-xs font-semibold text-amber-950 flex items-center gap-1.5"
                    >
                      <span>{item.icon}</span>
                      <span className="truncate">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* 4. VISTA CONSTRUCTOR INTERACTIVO DE MENÚ TRÍADA (PDF PÁGINAS 11-12) */}
        {/* ========================================================================= */}
        {activeTab === 'constructor' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white p-5 rounded-3xl shadow-md space-y-1.5">
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20">
                Páginas 11 y 12 del Manual · Crea tu Menú
              </span>
              <h2 className="text-lg font-black font-display">Constructor de Menú con la Tríada</h2>
              <p className="text-xs text-amber-100 font-normal leading-relaxed">
                Escoge un alimento de cada grupo de color para armar un plato perfecto y equilibrado.
              </p>
            </div>

            {/* Meal Time Selector Pills */}
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { id: 'desayuno', label: '☀️ Desayuno' },
                { id: 'comida', label: '🍲 Comida' },
                { id: 'cena', label: '🌙 Cena' }
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setCustomMenuMeal(m.id as any)}
                  className={`py-2 px-1 rounded-2xl text-xs font-black text-center transition-all ${
                    customMenuMeal === m.id
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>

            {/* Step 1: Select Red (Hierro) */}
            <div className="bg-white rounded-3xl border border-rose-200 p-4 space-y-2 shadow-2xs">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-rose-500" />
                <h4 className="text-xs font-black text-rose-950 uppercase tracking-wider">
                  1. Elige un Alimento con Hierro 🔴
                </h4>
              </div>
              <select
                value={selectedHierro}
                onChange={(e) => setSelectedHierro(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-rose-200 text-xs font-bold text-stone-900 bg-rose-50/40 focus:outline-rose-500"
              >
                {TRIAD_FOODS_DATABASE.hierroProteinas.map((item, idx) => (
                  <option key={idx} value={item.name}>
                    {item.icon} {item.name} ({item.desc})
                  </option>
                ))}
              </select>
            </div>

            {/* Step 2: Select Green (Vit C) */}
            <div className="bg-white rounded-3xl border border-teal-200 p-4 space-y-2 shadow-2xs">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-teal-500" />
                <h4 className="text-xs font-black text-teal-950 uppercase tracking-wider">
                  2. Elige un Alimento con Vitamina C 🟢
                </h4>
              </div>
              <select
                value={selectedVitC}
                onChange={(e) => setSelectedVitC(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-teal-200 text-xs font-bold text-stone-900 bg-teal-50/40 focus:outline-teal-500"
              >
                {TRIAD_FOODS_DATABASE.vitaminaC.map((item, idx) => (
                  <option key={idx} value={item.name}>
                    {item.icon} {item.name} ({item.desc})
                  </option>
                ))}
              </select>
            </div>

            {/* Step 3: Select Orange (Energia) */}
            <div className="bg-white rounded-3xl border border-amber-200 p-4 space-y-2 shadow-2xs">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-amber-500" />
                <h4 className="text-xs font-black text-amber-950 uppercase tracking-wider">
                  3. Elige un Alimento Energético 🟠
                </h4>
              </div>
              <select
                value={selectedEnergia}
                onChange={(e) => setSelectedEnergia(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-amber-200 text-xs font-bold text-stone-900 bg-amber-50/40 focus:outline-amber-500"
              >
                {TRIAD_FOODS_DATABASE.energeticos.map((item, idx) => (
                  <option key={idx} value={item.name}>
                    {item.icon} {item.name} ({item.desc})
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleSaveCurrentMeal}
              className="w-full py-2.5 px-4 rounded-2xl bg-stone-900 text-white text-xs font-black shadow-sm active-press hover:bg-stone-800 flex items-center justify-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>Guardar en {customMenuMeal.toUpperCase()}</span>
            </button>

            {/* Summary of 3 Meals Built Card */}
            <div className="bg-white rounded-3xl border border-stone-200 p-4 shadow-2xs space-y-3">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <h4 className="text-xs font-black text-stone-900 uppercase tracking-wider">
                  Tu Menú Tríada Completo
                </h4>
                <button
                  onClick={handleCopyBuiltMenu}
                  className="py-1 px-2.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-[11px] font-bold flex items-center gap-1 active-press"
                >
                  {copiedMenuSuccess ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span>¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              {/* Breakfast */}
              <div className="p-2.5 rounded-2xl bg-stone-50 border border-stone-100 text-xs space-y-1">
                <span className="text-[10px] font-black text-amber-900 uppercase tracking-wider block">
                  ☀️ Desayuno
                </span>
                <div className="flex items-center gap-1.5 flex-wrap text-stone-800 font-semibold text-[11px]">
                  <span className="px-2 py-0.5 rounded-md bg-rose-100 text-rose-900">
                    🔴 {savedMeals.desayuno.hierro}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-teal-100 text-teal-900">
                    🟢 {savedMeals.desayuno.vitC}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-900">
                    🟠 {savedMeals.desayuno.energia}
                  </span>
                </div>
              </div>

              {/* Lunch */}
              <div className="p-2.5 rounded-2xl bg-stone-50 border border-stone-100 text-xs space-y-1">
                <span className="text-[10px] font-black text-emerald-900 uppercase tracking-wider block">
                  🍲 Comida / Almuerzo
                </span>
                <div className="flex items-center gap-1.5 flex-wrap text-stone-800 font-semibold text-[11px]">
                  <span className="px-2 py-0.5 rounded-md bg-rose-100 text-rose-900">
                    🔴 {savedMeals.comida.hierro}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-teal-100 text-teal-900">
                    🟢 {savedMeals.comida.vitC}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-900">
                    🟠 {savedMeals.comida.energia}
                  </span>
                </div>
              </div>

              {/* Dinner */}
              <div className="p-2.5 rounded-2xl bg-stone-50 border border-stone-100 text-xs space-y-1">
                <span className="text-[10px] font-black text-indigo-900 uppercase tracking-wider block">
                  🌙 Cena
                </span>
                <div className="flex items-center gap-1.5 flex-wrap text-stone-800 font-semibold text-[11px]">
                  <span className="px-2 py-0.5 rounded-md bg-rose-100 text-rose-900">
                    🔴 {savedMeals.cena.hierro}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-teal-100 text-teal-900">
                    🟢 {savedMeals.cena.vitC}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-900">
                    🟠 {savedMeals.cena.energia}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* 5. VISTA ALERGIAS & SIGNOS DE ALARMA (PDF PÁGINA 7) */}
        {/* ========================================================================= */}
        {activeTab === 'alergias' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-rose-600 to-red-700 text-white p-5 rounded-3xl shadow-md space-y-1.5">
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20">
                Página 7 del Manual · Seguridad Vital
              </span>
              <h2 className="text-lg font-black font-display">Alergias Alimentarias & Alarma</h2>
              <p className="text-xs text-rose-100 font-normal leading-relaxed">
                Aprende a diferenciar una reacción leve de una urgencia médica y cómo actuar con serenidad.
              </p>
            </div>

            {/* 3-Days Rule Card */}
            <div className="bg-white rounded-3xl border border-stone-200 p-4 shadow-2xs space-y-2">
              <h3 className="text-xs font-black uppercase tracking-wider text-stone-900 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-rose-600" />
                <span>La Regla de los 3 Días</span>
              </h3>
              <p className="text-xs text-stone-600 font-medium leading-relaxed">
                Empieza con un alimento y ofrece el mismo alimento nuevo durante 1 a 3 días seguidos antes de introducir otro nuevo. Esto permite saber con exactitud cuál alimento provocó una reacción en caso de que ocurra.
              </p>
            </div>

            {/* Symptoms List */}
            <div className="bg-white rounded-3xl border border-stone-200 p-4 shadow-2xs space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-stone-900">
                Síntomas de Reacción Alérgica
              </h3>

              <div className="space-y-2">
                <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1">
                  <span className="font-extrabold block">⚠️ Síntomas Leves o Moderados (Suspender alimento):</span>
                  <ul className="list-disc list-inside space-y-0.5 text-[11px] font-medium text-amber-900">
                    <li>Ronchas o enrojecimiento que aparecen entre 1 y 2 horas tras comer</li>
                    <li>Reflujo o vómito</li>
                    <li>Diarrea o cambio brusco en evacuaciones</li>
                  </ul>
                </div>

                <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-950 space-y-1">
                  <span className="font-black block flex items-center gap-1 text-rose-700">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>🚨 Signos de URGENCIA MÉDICA / Anafilaxia (Llamar al 911/112):</span>
                  </span>
                  <ul className="list-disc list-inside space-y-0.5 text-[11px] font-bold text-rose-900">
                    <li>Inflamación súbita de labios, boca, lengua o párpados</li>
                    <li>Sibilancias (silbidos en el pecho)</li>
                    <li>Dificultad o esfuerzo visible para respirar</li>
                    <li>Palidez extrema, somnolencia o desmayo</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* 6. VISTA AUTOR & REDES DEL DOCTOR (PDF PÁGINA 13) */}
        {/* ========================================================================= */}
        {activeTab === 'autor' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Doctor Profile Card */}
            <div className="bg-white rounded-3xl border border-stone-200 p-5 shadow-2xs text-center space-y-3">
              <div className="w-20 h-20 rounded-full mx-auto bg-gradient-to-tr from-rose-400 to-amber-300 p-1 shadow-md">
                <img
                  src={DOCTOR_PROFILE.avatarUrl}
                  alt={DOCTOR_PROFILE.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-base font-black text-stone-900 font-display">
                  {DOCTOR_PROFILE.name}
                </h2>
                <p className="text-xs text-rose-700 font-bold">
                  {DOCTOR_PROFILE.title}
                </p>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800">
                    {DOCTOR_PROFILE.social}
                  </span>
                  <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800">
                    {DOCTOR_PROFILE.group}
                  </span>
                </div>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                {DOCTOR_PROFILE.description}
              </p>
            </div>

            {/* Doctor's Final Emotional Letter */}
            <div className="bg-gradient-to-br from-rose-500 via-pink-600 to-amber-500 text-white rounded-3xl p-5 shadow-md space-y-3 text-center">
              <span className="text-3xl">👶</span>
              <p className="text-xs font-semibold leading-relaxed">
                “Los bebés exploran el mundo con la boca y tú estás ahí para mostrárselo. Recuerda que esta etapa es única e irrepetible y se pasa en un instante, así que no pierdas ninguna oportunidad para crear recuerdos y memorias.”
              </p>
              <div className="pt-2 border-t border-white/20 text-[11px] font-black uppercase tracking-wider text-pink-100">
                ¡Gracias por confiar en mí! — Roberto
              </div>
            </div>

            {/* CTA to start planner */}
            <button
              onClick={() => setExtendedView('calendario_semanal')}
              className="w-full py-3 px-4 rounded-3xl bg-stone-900 text-white text-xs font-black shadow-md active-press hover:bg-stone-800 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Ver el Planner Semanal (24 Semanas)</span>
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};
