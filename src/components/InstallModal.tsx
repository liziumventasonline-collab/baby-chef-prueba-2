import React from 'react';
import { useApp } from '../context/AppContext';
import { Download, Sparkles, X, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BabyChefLogo } from './BabyChefLogo';

export const InstallModal: React.FC = () => {
  const {
    showInstallModal,
    setShowInstallModal,
    installAppPrompt,
    isPWAInstalled,
    isInstallable
  } = useApp();

  if (!showInstallModal) return null;

  return (
    <AnimatePresence>
      <div
        id="install-modal-overlay"
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4"
        onClick={() => setShowInstallModal(false)}
      >
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 26, stiffness: 280 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-sm bg-white rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl border border-rose-100 relative overflow-hidden safe-bottom"
        >
          {/* Top subtle bar for mobile pull */}
          <div className="w-10 h-1.5 bg-stone-300 rounded-full mx-auto mb-4 sm:hidden" />

          {/* Close button */}
          <button
            onClick={() => setShowInstallModal(false)}
            className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full active-press"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>

          {isPWAInstalled ? (
            <div className="text-center py-4 space-y-3">
              <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-lg font-black text-stone-900 font-display">
                ¡Aplicación Instalada!
              </h3>
              <p className="text-xs text-stone-600">
                Baby Chef ya está en la pantalla de inicio de tu celular para acceder en cualquier momento.
              </p>
              <button
                type="button"
                onClick={() => setShowInstallModal(false)}
                className="w-full py-3 bg-emerald-600 text-white font-bold text-xs rounded-2xl active-press"
              >
                Listo, continuar
              </button>
            </div>
          ) : (
            <div className="text-center space-y-4">
              {/* App Icon */}
              <div className="relative inline-block mx-auto">
                <BabyChefLogo size="lg" rounded="rounded-3xl" className="shadow-md" />
                <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs shadow-xs border-2 border-white">
                  ✓
                </span>
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-rose-50 border border-rose-200/60 text-[#DE5D43] text-[11px] font-black uppercase tracking-wider mb-1.5">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  <span>PWA Oficial</span>
                </div>
                <h3 className="text-xl font-black text-stone-900 font-display">
                  Instalar Baby Chef
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Ten la app de nutrición y recetas en la pantalla de tu celular con 1 solo toque.
                </p>
              </div>

              {/* Quick Benefits */}
              <div className="bg-rose-50/50 rounded-2xl p-3 text-left border border-rose-100 space-y-2">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-stone-800">
                  <Zap className="w-4 h-4 text-[#DE5D43] shrink-0" />
                  <span>Apertura instantánea sin barra de navegador</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-stone-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Guarda tu menú semanal y recetas favoritas</span>
                </div>
              </div>

              {/* Single 1-Click Install Button */}
              <button
                id="direct-pwa-install-button"
                type="button"
                onClick={() => {
                  installAppPrompt();
                }}
                className="w-full py-3.5 px-5 bg-gradient-to-r from-[#FF7043] via-[#FF5722] to-[#E64A19] hover:opacity-95 text-white font-black text-sm rounded-2xl shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 active-press transition-all"
              >
                <Download className="w-5 h-5" />
                <span>INSTALAR EN EL CELULAR</span>
              </button>

              <button
                type="button"
                onClick={() => setShowInstallModal(false)}
                className="text-xs font-bold text-stone-400 hover:text-stone-700 py-1 transition-colors block w-full text-center"
              >
                Ahora no
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
