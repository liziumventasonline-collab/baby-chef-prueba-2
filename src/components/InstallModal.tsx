import React from 'react';
import { useApp } from '../context/AppContext';
import { Download, Sparkles, Smartphone, X, Share, PlusSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const InstallModal: React.FC = () => {
  const { showInstallModal, setShowInstallModal, installAppPrompt, isInstallable } = useApp();

  if (!showInstallModal) return null;

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;

  const handleInstallClick = () => {
    if (isInstallable) {
      installAppPrompt();
      setShowInstallModal(false);
    }
  };

  return (
    <div
      id="install-modal-overlay"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4"
    >
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="w-full max-w-sm bg-white rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl border border-[#E7E5E4] text-center safe-bottom"
      >
        {/* Handle bar for bottom sheet on mobile */}
        <div className="w-10 h-1.5 bg-[#E7E5E4] rounded-full mx-auto mb-4 sm:hidden" />

        {/* App Icon */}
        <div className="relative w-20 h-20 rounded-3xl bg-white p-1.5 shadow-lg shadow-[#E06D53]/25 mx-auto mb-4 border-2 border-white overflow-hidden">
          <img src="/logo.png" alt="Baby Chef" className="w-full h-full object-cover rounded-2xl" />
        </div>

        <h3 className="text-xl font-bold text-[#292524] font-display mb-1 flex items-center justify-center gap-1.5">
          <span>📱 Instala Baby Chef</span>
        </h3>

        <p className="text-sm text-[#78716C] leading-relaxed mb-5">
          Ten tu guía de alimentación siempre contigo, disponible sin conexión y con acceso instantáneo como una app real.
        </p>

        {isIOS && !isInstallable ? (
          /* iOS Safari Step-by-step instructions */
          <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E7E5E4] text-left text-xs text-[#57534E] space-y-2 mb-5">
            <div className="flex items-center gap-2">
              <Share className="w-4 h-4 text-[#0284C7] shrink-0" />
              <span>1. Toca el botón <strong>Compartir</strong> en la barra de Safari.</span>
            </div>
            <div className="flex items-center gap-2">
              <PlusSquare className="w-4 h-4 text-[#4A7C59] shrink-0" />
              <span>2. Selecciona <strong>"Añadir a pantalla de inicio"</strong>.</span>
            </div>
          </div>
        ) : null}

        {/* Action Buttons */}
        <div className="space-y-2">
          {isInstallable ? (
            <button
              id="confirm-pwa-install-btn"
              onClick={handleInstallClick}
              className="w-full py-4 px-6 bg-[#E06D53] hover:bg-[#DE5D43] text-white font-bold text-sm rounded-2xl shadow-lg shadow-[#E06D53]/25 flex items-center justify-center gap-2 active-press transition-all"
            >
              <Download className="w-4 h-4" />
              <span>INSTALAR</span>
            </button>
          ) : (
            <button
              onClick={() => setShowInstallModal(false)}
              className="w-full py-3.5 px-6 bg-[#E06D53] hover:bg-[#DE5D43] text-white font-bold text-sm rounded-2xl shadow-md active-press"
            >
              Entendido
            </button>
          )}

          <button
            id="cancel-pwa-install-btn"
            onClick={() => setShowInstallModal(false)}
            className="w-full py-3 px-4 text-xs font-bold text-[#78716C] hover:text-[#292524] rounded-2xl active-press"
          >
            Ahora no
          </button>
        </div>
      </motion.div>
    </div>
  );
};
