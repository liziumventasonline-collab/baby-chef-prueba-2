import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';
import { ArrowLeft, ArrowRight, Heart, Calendar, Sparkles, Scale, Ruler, UserCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BabyChefLogo } from './BabyChefLogo';

export const OnboardingWizard: React.FC = () => {
  const { baby, completeOnboarding } = useApp();

  const [step, setStep] = useState<number>(1);
  const [name, setName] = useState<string>(baby.name || 'Mateo');
  const [birthDate, setBirthDate] = useState<string>(baby.birthDate || '2026-02-15');
  const [birthWeightInput, setBirthWeightInput] = useState<string>(baby.birthWeight ? baby.birthWeight.toString() : '3.250');
  const [birthHeightInput, setBirthHeightInput] = useState<string>(baby.birthHeight ? baby.birthHeight.toString() : '50');
  const [gender, setGender] = useState<'boy' | 'girl' | 'unspecified'>(baby.gender || 'boy');

  const parseNum = (val: string, fallback: number): number => {
    const sanitized = val.toString().trim().replace(',', '.');
    const n = parseFloat(sanitized);
    return isNaN(n) || n <= 0 ? fallback : n;
  };

  const currentBirthWeight = parseNum(birthWeightInput, baby.birthWeight || 3.25);
  const currentBirthHeight = parseNum(birthHeightInput, baby.birthHeight || 50);

  const totalSteps = 6;
  const progressPercent = ((step - 1) / (totalSteps - 1)) * 100;

  const handleNext = () => {
    if (step < totalSteps) {
      if (step === totalSteps - 1) {
        // Trigger celebratory confetti on reaching final step
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch (e) {
          console.error(e);
        }
      }
      setStep(prev => prev + 1);
    } else {
      // Complete onboarding
      const finalWeight = parseNum(birthWeightInput, 3.25);
      const finalHeight = parseNum(birthHeightInput, 50);

      completeOnboarding({
        name: name.trim() || 'Mi Bebé',
        birthDate,
        birthWeight: finalWeight,
        birthHeight: finalHeight,
        gender
      });
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  };

  return (
    <div
      id="onboarding-wizard"
      className="fixed inset-0 z-50 flex flex-col bg-[#FAF7F2] text-[#292524] overflow-hidden"
    >
      {/* Top Header & Progress Bar */}
      <div className="safe-top px-6 pt-4 pb-3 flex flex-col gap-3">
        <div className="flex items-center justify-between h-8">
          {step > 1 ? (
            <button
              id="onboarding-back-btn"
              onClick={handleBack}
              className="p-2 -ml-2 text-[#78716C] hover:text-[#292524] rounded-full active-press"
              aria-label="Volver"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          ) : (
            <div className="w-5" />
          )}

          <span className="text-xs font-semibold tracking-wider text-[#A8A29E] uppercase">
            Paso {step} de {totalSteps}
          </span>

          <div className="w-5" />
        </div>

        {/* Discrete Slim Progress Bar */}
        <div className="w-full h-1.5 bg-[#E7E5E4] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#E06D53] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          />
        </div>
      </div>

      {/* Main Step Content Area with smooth Slide Transitions */}
      <div className="flex-1 flex flex-col justify-between px-6 py-4 overflow-y-auto no-scrollbar">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="flex-1 flex flex-col items-center justify-center text-center my-auto"
            >
              <div className="mb-6">
                <BabyChefLogo size="xl" rounded="rounded-3xl" className="shadow-lg shadow-[#E06D53]/15" />
              </div>
              <h2 className="text-2xl font-bold text-[#292524] mb-3 font-display">
                ¡Bienvenida a Baby Chef!
              </h2>
              <p className="text-base text-[#78716C] leading-relaxed max-w-[280px]">
                Vamos a conocer un poquito sobre tu bebé para personalizar sus etapas, texturas y recetas.
              </p>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="flex-1 flex flex-col justify-center my-auto max-w-sm mx-auto w-full"
            >
              <div className="text-3xl mb-4 text-center">👶</div>
              <h2 className="text-2xl font-bold text-[#292524] mb-2 text-center font-display">
                ¿Cómo se llama tu bebé?
              </h2>
              <p className="text-sm text-[#78716C] text-center mb-6">
                Escribe su nombre o apodo cariñoso.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#57534E] mb-1.5 uppercase tracking-wider">
                    Nombre del bebé
                  </label>
                  <input
                    id="baby-name-input"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Ej. Mateo, Sofía, Lucas..."
                    className="w-full px-4 py-3.5 bg-white rounded-2xl border border-[#E7E5E4] focus:outline-none focus:border-[#E06D53] focus:ring-2 focus:ring-[#E06D53]/20 text-lg font-semibold text-[#292524] text-center shadow-sm"
                    autoFocus
                  />
                </div>

                {/* Gender selector */}
                <div className="flex gap-3 justify-center pt-2">
                  <button
                    type="button"
                    onClick={() => setGender('boy')}
                    className={`flex-1 py-2.5 px-3 rounded-xl border text-sm font-medium transition-all ${
                      gender === 'boy'
                        ? 'bg-[#EAF2EB] border-[#4A7C59] text-[#2D5A3C] shadow-sm font-semibold'
                        : 'bg-white border-[#E7E5E4] text-[#78716C]'
                    }`}
                  >
                    Niño 👦
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender('girl')}
                    className={`flex-1 py-2.5 px-3 rounded-xl border text-sm font-medium transition-all ${
                      gender === 'girl'
                        ? 'bg-[#FCEEEA] border-[#E06D53] text-[#A83D26] shadow-sm font-semibold'
                        : 'bg-white border-[#E7E5E4] text-[#78716C]'
                    }`}
                  >
                    Niña 👧
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="flex-1 flex flex-col justify-center my-auto max-w-sm mx-auto w-full"
            >
              <div className="text-3xl mb-4 text-center">🗓️</div>
              <h2 className="text-2xl font-bold text-[#292524] mb-2 text-center font-display">
                ¿Cuándo nació?
              </h2>
              <p className="text-sm text-[#78716C] text-center mb-6">
                Nos sirve para calcular con exactitud sus meses y sugerirte las mejores preparaciones.
              </p>

              <div className="bg-white p-5 rounded-2xl border border-[#E7E5E4] shadow-sm">
                <label className="block text-xs font-semibold text-[#57534E] mb-2 uppercase tracking-wider">
                  Fecha de nacimiento
                </label>
                <div className="relative flex items-center">
                  <Calendar className="absolute left-3.5 w-5 h-5 text-[#E06D53]" />
                  <input
                    id="baby-birthdate-input"
                    type="date"
                    value={birthDate}
                    max={new Date().toISOString().split('T')[0]}
                    onChange={e => setBirthDate(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-[#FAF7F2] rounded-xl border border-[#E7E5E4] focus:outline-none focus:border-[#E06D53] text-base font-semibold text-[#292524]"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="flex-1 flex flex-col justify-center my-auto max-w-sm mx-auto w-full"
            >
              <div className="text-3xl mb-4 text-center">⚖️</div>
              <h2 className="text-2xl font-bold text-[#292524] mb-2 text-center font-display">
                ¿Cuánto pesó al nacer?
              </h2>
              <p className="text-sm text-[#78716C] text-center mb-6">
                Escribe el peso exacto del carnet o ficha médica pediátrica (precisión en gramos).
              </p>

              <div className="bg-white p-6 rounded-2xl border border-[#E7E5E4] shadow-sm text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Scale className="w-6 h-6 text-[#E06D53]" />
                  <span className="text-xs font-bold text-[#78716C] uppercase tracking-wider">
                    Peso de nacimiento
                  </span>
                </div>

                <div className="relative max-w-[200px] mx-auto mb-2">
                  <input
                    id="baby-birthweight-input"
                    type="number"
                    step="any"
                    inputMode="decimal"
                    min="0.5"
                    max="10"
                    value={birthWeightInput}
                    onChange={e => setBirthWeightInput(e.target.value)}
                    placeholder="Ej. 3.250"
                    className="w-full text-center text-3xl font-extrabold text-[#292524] bg-[#FAF7F2] py-3 px-3 rounded-2xl border border-[#E7E5E4] focus:outline-none focus:border-[#E06D53] focus:ring-2 focus:ring-[#E06D53]/20"
                    autoFocus
                  />
                  <span className="text-xs font-bold text-[#78716C] block mt-1.5">
                    kilogramos (kg) • ej. 2.935 o 3.120
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="flex-1 flex flex-col justify-center my-auto max-w-sm mx-auto w-full"
            >
              <div className="text-3xl mb-4 text-center">📏</div>
              <h2 className="text-2xl font-bold text-[#292524] mb-2 text-center font-display">
                ¿Cuánto midió al nacer?
              </h2>
              <p className="text-sm text-[#78716C] text-center mb-6">
                Talla al momento del nacimiento con precisión en milímetros.
              </p>

              <div className="bg-white p-6 rounded-2xl border border-[#E7E5E4] shadow-sm text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Ruler className="w-6 h-6 text-[#4A7C59]" />
                  <span className="text-xs font-bold text-[#78716C] uppercase tracking-wider">
                    Talla / Longitud inicial
                  </span>
                </div>

                <div className="relative max-w-[200px] mx-auto mb-2">
                  <input
                    id="baby-birthheight-input"
                    type="number"
                    step="any"
                    inputMode="decimal"
                    min="20"
                    max="80"
                    value={birthHeightInput}
                    onChange={e => setBirthHeightInput(e.target.value)}
                    placeholder="Ej. 50.0"
                    className="w-full text-center text-3xl font-extrabold text-[#292524] bg-[#FAF7F2] py-3 px-3 rounded-2xl border border-[#E7E5E4] focus:outline-none focus:border-[#4A7C59] focus:ring-2 focus:ring-[#4A7C59]/20"
                    autoFocus
                  />
                  <span className="text-xs font-bold text-[#78716C] block mt-1.5">
                    centímetros (cm) • ej. 48.5 o 51.2
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {step === 6 && (
            <motion.div
              key="step6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col items-center justify-center text-center my-auto max-w-sm mx-auto w-full"
            >
              <div className="w-20 h-20 rounded-full bg-[#FCEEEA] flex items-center justify-center mb-5 text-[#E06D53] border-2 border-[#E06D53]/30 shadow-md">
                <Heart className="w-10 h-10 fill-[#E06D53]" />
              </div>
              <h2 className="text-3xl font-extrabold text-[#292524] mb-2 font-display">
                ¡Listo! ❤️
              </h2>
              <p className="text-base text-[#78716C] mb-6">
                Ya tenemos el perfil de <strong className="text-[#292524]">{name || 'tu bebé'}</strong>.
              </p>

              {/* Summary Card */}
              <div className="w-full bg-white rounded-2xl p-4 border border-[#E7E5E4] shadow-sm text-left mb-2 space-y-2">
                <div className="flex justify-between items-center text-sm py-1 border-b border-[#F5F5F4]">
                  <span className="text-[#78716C]">Nombre</span>
                  <span className="font-semibold text-[#292524]">{name}</span>
                </div>
                <div className="flex justify-between items-center text-sm py-1 border-b border-[#F5F5F4]">
                  <span className="text-[#78716C]">Peso al nacer</span>
                  <span className="font-semibold text-[#292524]">{currentBirthWeight} kg</span>
                </div>
                <div className="flex justify-between items-center text-sm py-1">
                  <span className="text-[#78716C]">Talla al nacer</span>
                  <span className="font-semibold text-[#292524]">{currentBirthHeight} cm</span>
                </div>
              </div>

              <div className="w-full p-3 rounded-2xl bg-rose-50 border border-rose-200/80 text-[11px] text-rose-950 font-medium flex items-center gap-2">
                <span className="text-base">🩺</span>
                <span>Al entrar tendrás la <strong>Guía Médica del Dr. Roberto Hernández</strong> con las 5 señales para antes de empezar.</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA Button */}
        <div className="safe-bottom pt-4 pb-2">
          <button
            id="onboarding-continue-btn"
            type="button"
            onClick={handleNext}
            className="w-full py-4 px-6 bg-[#E06D53] hover:bg-[#DE5D43] text-white rounded-2xl font-bold text-base shadow-lg shadow-[#E06D53]/25 flex items-center justify-center gap-2 active-press transition-all"
          >
            <span>{step === totalSteps ? 'ENTRAR A BABY CHEF' : 'CONTINUAR'}</span>
            {step < totalSteps && <ArrowRight className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  );
};
