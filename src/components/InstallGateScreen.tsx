import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Download,
  Sparkles,
  Share,
  PlusSquare,
  MoreVertical,
  ExternalLink,
  CheckCircle2,
  Smartphone,
  Laptop,
  ShieldCheck,
  ArrowRight,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { BabyChefLogo } from './BabyChefLogo';

export const InstallGateScreen: React.FC = () => {
  const {
    completeInstallGate,
    installAppPrompt,
    isInstallable,
    isPWAInstalled
  } = useApp();

  // Detect platform default
  const isIOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
  const [selectedTab, setSelectedTab] = useState<'android' | 'ios' | 'pc'>(isIOS ? 'ios' : 'android');
  const [hasFollowedSteps, setHasFollowedSteps] = useState(false);

  const handleFinishInstall = () => {
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.error(e);
    }
    completeInstallGate();
  };

  return (
    <div
      id="mandatory-install-gate"
      className="fixed inset-0 z-50 flex flex-col bg-[#FAF7F2] text-[#292524] overflow-hidden"
    >
      {/* Top Header */}
      <div className="safe-top px-6 pt-5 pb-3 bg-white border-b border-stone-200 shadow-2xs">
        <div className="flex items-center justify-center gap-3">
          <BabyChefLogo size="sm" rounded="rounded-2xl" className="shadow-xs" />
          <div>
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#E06D53]/10 text-[#E06D53] text-[10px] font-black uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              Paso Obligatorio
            </div>
            <h1 className="text-base font-black text-stone-900 font-display leading-tight">
              Instalación en Pantalla Principal
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto px-5 py-4 no-scrollbar space-y-4 max-w-md mx-auto w-full">
        {/* Banner Explanatory Card */}
        <div className="p-4 rounded-3xl bg-gradient-to-br from-white via-orange-50/40 to-amber-50/50 border border-orange-200/80 shadow-xs text-center">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#F28B72] to-[#E06D53] text-white flex items-center justify-center mx-auto mb-2.5 shadow-md shadow-[#E06D53]/25">
            <Download className="w-7 h-7" />
          </div>
          <h2 className="text-lg font-black text-stone-900 font-display leading-tight">
            Instala Baby Chef en tu Inicio 📲
          </h2>
          <p className="text-xs text-stone-600 mt-1 leading-relaxed">
            Para garantizar una experiencia fluida, acceso instantáneo y guardar el progreso y recetas de tu bebé sin perder datos, sigue estos sencillos pasos para agregar el ícono en tu pantalla principal.
          </p>
        </div>

        {/* 1-Click Install Button if supported by browser */}
        {isInstallable && (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-3.5 rounded-2xl bg-[#E06D53] text-white shadow-md shadow-[#E06D53]/30"
          >
            <p className="text-[11px] font-semibold text-white/90 mb-2 text-center">
              ✨ Tu navegador permite instalación directa en 1 clic:
            </p>
            <button
              id="gate-direct-install-btn"
              type="button"
              onClick={() => {
                installAppPrompt();
                setHasFollowedSteps(true);
              }}
              className="w-full py-3 px-4 bg-white text-[#E06D53] font-black text-sm rounded-xl shadow-xs flex items-center justify-center gap-2 active-press transition-all"
            >
              <Download className="w-4 h-4" />
              <span>INSTALAR EN PANTALLA PRINCIPAL</span>
            </button>
          </motion.div>
        )}

        {/* Device Selector Tabs */}
        <div className="space-y-2">
          <p className="text-xs font-bold text-stone-700">
            Selecciona tu dispositivo para ver las instrucciones:
          </p>
          <div className="flex bg-stone-200/70 p-1 rounded-2xl text-xs font-bold text-stone-600">
            <button
              type="button"
              onClick={() => setSelectedTab('android')}
              className={`flex-1 py-2 px-2 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
                selectedTab === 'android'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Android</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedTab('ios')}
              className={`flex-1 py-2 px-2 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
                selectedTab === 'ios'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              <Share className="w-3.5 h-3.5 text-sky-600" />
              <span>iPhone (Safari)</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedTab('pc')}
              className={`flex-1 py-2 px-2 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
                selectedTab === 'pc'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              <Laptop className="w-3.5 h-3.5 text-indigo-600" />
              <span>PC / Mac</span>
            </button>
          </div>
        </div>

        {/* Step by Step Instructions Display */}
        <div className="bg-white rounded-2xl border border-stone-200 p-4 shadow-xs text-left">
          {selectedTab === 'android' && (
            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  1
                </div>
                <div className="text-xs text-stone-800 leading-snug">
                  Abre esta página en <strong>Google Chrome</strong> y presiona los <strong>3 puntos verticales (⋮)</strong> en la esquina superior derecha.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  2
                </div>
                <div className="text-xs text-stone-800 leading-snug">
                  Busca y toca la opción <strong>«Instalar aplicación»</strong> o <strong>«Agregar a la pantalla principal»</strong>.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  3
                </div>
                <div className="text-xs text-stone-800 leading-snug">
                  Confirma tocando <strong>«Instalar»</strong>. ¡El ícono aparecerá como una app oficial en tu celular!
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'ios' && (
            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  1
                </div>
                <div className="text-xs text-stone-800 leading-snug">
                  Asegúrate de estar en <strong>Safari</strong> y toca el botón <strong>Compartir ⎋</strong> (el recuadro con la flecha apuntando hacia arriba) en la barra inferior.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  2
                </div>
                <div className="text-xs text-stone-800 leading-snug">
                  Desliza hacia abajo en el menú de opciones y selecciona <strong>«Agregar al inicio» (+)</strong>.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  3
                </div>
                <div className="text-xs text-stone-800 leading-snug">
                  Toca <strong>«Agregar»</strong> en la esquina superior derecha. ¡Listo! Ya tienes el acceso directo nativo.
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'pc' && (
            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  1
                </div>
                <div className="text-xs text-stone-800 leading-snug">
                  En Chrome o Edge, busca el ícono de <strong>Instalar ⊕</strong> en el extremo derecho de la barra de direcciones (URL).
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  2
                </div>
                <div className="text-xs text-stone-800 leading-snug">
                  Haz clic en <strong>«Instalar»</strong> para abrir Baby Chef en su propia ventana sin barras de navegación.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Benefits Checklist */}
        <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 text-xs space-y-1.5 text-emerald-950">
          <div className="flex items-center gap-2 font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Ventajas al tenerla en tu Pantalla Principal:</span>
          </div>
          <p className="text-[11px] text-emerald-800 pl-6">
            ✓ Abre a pantalla completa sin barras del navegador.
          </p>
          <p className="text-[11px] text-emerald-800 pl-6">
            ✓ Conserva tus recetas favoritas, menús y curvas de crecimiento.
          </p>
        </div>
      </div>

      {/* Mandatory Unlock Bottom Button */}
      <div className="safe-bottom bg-white border-t border-stone-200 px-6 pt-3 pb-4">
        <button
          id="finish-mandatory-install-btn"
          type="button"
          onClick={handleFinishInstall}
          className="w-full py-4 px-6 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-black text-sm rounded-2xl shadow-lg shadow-emerald-700/25 flex items-center justify-center gap-2 active-press transition-all"
        >
          <Check className="w-5 h-5" />
          <span>¡YA LA INSTALÉ EN MI PANTALLA PRINCIPAL! CONTINUAR</span>
        </button>
        <p className="text-[10px] text-center text-stone-500 font-medium mt-1.5">
          Al confirmar tendrás acceso total inmediato a todas las recetas, etapas y guías
        </p>
      </div>
    </div>
  );
};
