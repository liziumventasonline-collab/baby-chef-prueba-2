import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Download,
  Sparkles,
  X,
  Share,
  PlusSquare,
  MoreVertical,
  ExternalLink,
  Copy,
  Check,
  Smartphone,
  Laptop,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BabyChefLogo } from './BabyChefLogo';

export const InstallModal: React.FC = () => {
  const { showInstallModal, setShowInstallModal, installAppPrompt, isInstallable, isPWAInstalled } = useApp();
  const [copied, setCopied] = useState(false);

  // Detect platform default
  const isIOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
  const [selectedTab, setSelectedTab] = useState<'android' | 'ios' | 'pc'>(isIOS ? 'ios' : 'android');

  if (!showInstallModal || isPWAInstalled) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenBrowser = () => {
    window.open(window.location.href, '_blank');
  };

  return (
    <div
      id="install-modal-overlay"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/65 backdrop-blur-xs p-0 sm:p-4 animate-fadeIn"
      onClick={() => setShowInstallModal(false)}
    >
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '100%', opacity: 0 }}
        transition={{ type: 'spring', damping: 26, stiffness: 280 }}
        onClick={e => e.stopPropagation()}
        className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl p-5 sm:p-6 shadow-2xl border border-stone-200 max-h-[92vh] overflow-y-auto no-scrollbar safe-bottom"
      >
        {/* Top Drag Handle for mobile */}
        <div className="w-10 h-1.5 bg-stone-300 rounded-full mx-auto mb-3 sm:hidden" />

        {/* Header with App Logo */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <BabyChefLogo size="md" rounded="rounded-2xl" className="shadow-xs" />
            <div>
              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#E06D53]/10 text-[#E06D53] text-[11px] font-bold">
                <Sparkles className="w-3 h-3" />
                Acceso directo
              </div>
              <h3 className="text-lg font-bold text-stone-900 font-display leading-tight mt-0.5">
                Cómo instalar Baby Chef
              </h3>
              <p className="text-xs text-stone-500">
                Úsala como app nativa en tu teléfono
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowInstallModal(false)}
            className="p-2 text-stone-400 hover:text-stone-700 rounded-full active-press"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Direct 1-Click Install Button if supported */}
        <div className="mb-4 space-y-2">
          {isInstallable ? (
            <button
              id="confirm-pwa-install-btn"
              type="button"
              onClick={() => {
                installAppPrompt();
              }}
              className="w-full py-3.5 px-4 bg-[#E06D53] hover:bg-[#DE5D43] text-white font-extrabold text-sm rounded-2xl shadow-md shadow-[#E06D53]/25 flex items-center justify-center gap-2 active-press transition-all"
            >
              <Download className="w-4 h-4" />
              <span>INSTALAR CON UN TOQUE</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleOpenBrowser}
              className="w-full py-3 px-4 bg-[#FAF7F2] hover:bg-[#F2EBE1] text-[#E06D53] border border-[#E06D53]/30 font-bold text-xs rounded-xl flex items-center justify-center gap-2 active-press transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Abrir en navegador completo (Chrome / Safari)</span>
            </button>
          )}
        </div>

        {/* Device Selector Tabs */}
        <div className="flex bg-stone-100 p-1 rounded-xl mb-4 text-xs font-bold text-stone-600">
          <button
            type="button"
            onClick={() => setSelectedTab('android')}
            className={`flex-1 py-2 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
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
            className={`flex-1 py-2 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
              selectedTab === 'ios'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            <Share className="w-3.5 h-3.5 text-sky-600" />
            <span>iPhone / Safari</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedTab('pc')}
            className={`flex-1 py-2 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
              selectedTab === 'pc'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            <Laptop className="w-3.5 h-3.5 text-indigo-600" />
            <span>PC / Mac</span>
          </button>
        </div>

        {/* Step by Step Instructions Display */}
        <div className="bg-stone-50 rounded-2xl border border-stone-200/90 p-4 mb-4 text-left">
          {selectedTab === 'android' && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-stone-200">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-extrabold">
                  1
                </div>
                <div className="text-xs text-stone-800">
                  En <strong>Google Chrome</strong>, toca los <strong className="inline-flex items-center px-1 bg-stone-200 rounded text-stone-900">3 puntos (⋮)</strong> en la esquina superior derecha.
                </div>
              </div>

              <div className="flex items-center gap-2 pb-2 border-b border-stone-200">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-extrabold">
                  2
                </div>
                <div className="text-xs text-stone-800">
                  Selecciona la opción <strong className="text-stone-900 font-bold">"Instalar aplicación"</strong> o <strong className="text-stone-900 font-bold">"Añadir a la pantalla principal"</strong>.
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-extrabold">
                  3
                </div>
                <div className="text-xs text-stone-800">
                  Pulsa <strong className="text-emerald-700 font-bold">"Instalar"</strong> o <strong className="text-emerald-700 font-bold">"Aceptar"</strong>. ¡El icono de Baby Chef aparecerá en tu teléfono!
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'ios' && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-stone-200">
                <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-extrabold">
                  1
                </div>
                <div className="text-xs text-stone-800 flex items-center flex-wrap gap-1">
                  <span>En <strong>Safari</strong>, toca el botón</span>
                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-sky-50 border border-sky-200 rounded text-sky-800 font-bold">
                    <Share className="w-3 h-3" /> Compartir
                  </span>
                  <span>en la barra inferior.</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pb-2 border-b border-stone-200">
                <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-extrabold">
                  2
                </div>
                <div className="text-xs text-stone-800 flex items-center flex-wrap gap-1">
                  <span>Desliza hacia abajo y pulsa</span>
                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-stone-200 rounded font-bold text-stone-900">
                    <PlusSquare className="w-3 h-3" /> Añadir a pantalla de inicio
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-extrabold">
                  3
                </div>
                <div className="text-xs text-stone-800">
                  Toca <strong className="text-sky-700 font-bold">"Añadir"</strong> arriba a la derecha. ¡Listo!
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'pc' && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-stone-200">
                <div className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-extrabold">
                  1
                </div>
                <div className="text-xs text-stone-800">
                  En la barra de direcciones de Chrome o Edge, busca el icono <strong className="text-stone-900 font-bold">"Instalar aplicación" ⬇️</strong> a la derecha.
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-extrabold">
                  2
                </div>
                <div className="text-xs text-stone-800">
                  Haz clic en <strong className="text-indigo-700 font-bold">"Instalar"</strong> para tener Baby Chef en tu escritorio como app independiente.
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-3">
          <button
            type="button"
            onClick={() => setShowInstallModal(false)}
            className="w-full py-2 bg-stone-100 hover:bg-stone-200 rounded-xl text-xs font-bold text-stone-600 transition-colors"
          >
            Entendido, cerrar
          </button>
        </div>
      </motion.div>
    </div>
  );
};
