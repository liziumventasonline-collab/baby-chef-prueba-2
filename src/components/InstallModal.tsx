import React from 'react';
import { useApp } from '../context/AppContext';
import { Download, Sparkles, X, Check } from 'lucide-react';
import { motion } from 'motion/react';

export const InstallModal: React.FC = () => {
  const { showInstallModal, setShowInstallModal, installAppPrompt, isInstallable, isPWAInstalled } = useApp();

  if (!showInstallModal || isPWAInstalled) return null;

  const handleDirectInstall = () => {
    installAppPrompt();
  };

  return (
    <div
      id="install-modal-overlay"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/65 backdrop-blur-xs p-0 sm:p-4"
      onClick={() => setShowInstallModal(false)}
    >
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '100%', opacity: 0 }}
        transition={{ type: 'spring', damping: 26, stiffness: 280 }}
        onClick={e => e.stopPropagation()}
        className="w-full max-w-sm bg-white rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl border border-[#E7E5E4] text-center safe-bottom"
      >
        {/* Handle bar for mobile */}
        <div className="w-10 h-1.5 bg-[#E7E5E4] rounded-full mx-auto mb-4 sm:hidden" />

        {/* Close Button */}
        <div className="flex justify-end -mt-2 -mr-2">
          <button
            onClick={() => setShowInstallModal(false)}
            className="p-1.5 text-stone-400 hover:text-stone-600 rounded-full active-press"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Big Official App Icon */}
        <div className="relative w-20 h-20 rounded-3xl bg-white p-1 shadow-lg shadow-[#E06D53]/25 mx-auto mb-3.5 border-2 border-stone-100 overflow-hidden">
          <img
            src="/logo.png"
            alt="Baby Chef"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E06D53]/10 text-[#E06D53] text-xs font-bold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          Acceso Directo
        </div>

        <h3 className="text-xl font-bold text-[#292524] font-display mb-1.5">
          Instalar Baby Chef
        </h3>

        <p className="text-xs text-[#78716C] leading-relaxed mb-6">
          Agrega la aplicación directamente a tu pantalla de inicio para usarla al instante a pantalla completa y sin conexión.
        </p>

        {/* Single Direct Action Button */}
        <button
          id="confirm-pwa-install-btn"
          type="button"
          onClick={handleDirectInstall}
          className="w-full py-4 px-6 bg-[#E06D53] hover:bg-[#DE5D43] text-white font-extrabold text-sm rounded-2xl shadow-lg shadow-[#E06D53]/30 flex items-center justify-center gap-2 active-press transition-all"
        >
          <Download className="w-5 h-5" />
          <span>INSTALAR DIRECTAMENTE</span>
        </button>

        <button
          type="button"
          onClick={() => setShowInstallModal(false)}
          className="w-full mt-3 py-2 text-xs font-semibold text-stone-500 hover:text-stone-800"
        >
          Cancelar
        </button>
      </motion.div>
    </div>
  );
};


