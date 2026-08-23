import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Download,
  Sparkles,
  Smartphone,
  X,
  Share,
  PlusSquare,
  ExternalLink,
  Copy,
  Check,
  MoreVertical,
  Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const InstallModal: React.FC = () => {
  const { showInstallModal, setShowInstallModal, installAppPrompt, isInstallable, isPWAInstalled } = useApp();
  const [copied, setCopied] = useState(false);

  if (!showInstallModal) return null;

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
  const isAndroid = /Android/.test(navigator.userAgent);
  const isIframe = window.self !== window.top;

  const handleInstallClick = () => {
    if (isInstallable) {
      installAppPrompt();
    } else if (isIframe) {
      window.open(window.location.href, '_blank');
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      id="install-modal-overlay"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/65 backdrop-blur-xs p-0 sm:p-4"
      onClick={() => setShowInstallModal(false)}
    >
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 26, stiffness: 280 }}
        onClick={e => e.stopPropagation()}
        className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl border border-[#E7E5E4] max-h-[90vh] overflow-y-auto no-scrollbar safe-bottom"
      >
        {/* Handle bar for mobile */}
        <div className="w-12 h-1.5 bg-[#E7E5E4] rounded-full mx-auto mb-4 sm:hidden" />

        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-3 text-left">
            {/* App Icon preview */}
            <div className="relative w-16 h-16 rounded-2xl bg-white p-1 shadow-md shadow-[#E06D53]/20 border border-[#E7E5E4] overflow-hidden shrink-0">
              <img
                src="/logo.png"
                alt="Baby Chef Logo"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#E06D53]/10 text-[#E06D53] text-[11px] font-bold">
                <Sparkles className="w-3 h-3" />
                Acceso Directo
              </div>
              <h3 className="text-lg font-bold text-[#292524] font-display leading-tight mt-0.5">
                Instalar Baby Chef
              </h3>
              <p className="text-xs text-[#78716C]">
                En la pantalla principal de tu teléfono
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowInstallModal(false)}
            className="p-1.5 text-stone-400 hover:text-stone-600 rounded-full active-press"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Shortcut Preview Card */}
        <div className="my-4 p-3.5 bg-gradient-to-br from-[#FAF7F2] to-[#FCEEEA] rounded-2xl border border-[#E7E5E4] flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-white p-0.5 shadow-sm border border-stone-200 overflow-hidden shrink-0">
            <img src="/logo.png" alt="Icono" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="text-left text-xs">
            <p className="font-bold text-[#292524]">
              Acceso rápido con un toque
            </p>
            <p className="text-stone-600 text-[11px] leading-snug">
              Funciona sin conexión a internet, a pantalla completa y sin barra de direcciones.
            </p>
          </div>
        </div>

        {/* Direct Action Primary Button */}
        <div className="space-y-2.5 mb-5">
          {isInstallable ? (
            <button
              id="confirm-pwa-install-btn"
              onClick={handleInstallClick}
              className="w-full py-3.5 px-6 bg-[#E06D53] hover:bg-[#DE5D43] text-white font-extrabold text-sm rounded-2xl shadow-lg shadow-[#E06D53]/30 flex items-center justify-center gap-2 active-press transition-all"
            >
              <Download className="w-4 h-4" />
              <span>INSTALAR EN MI PANTALLA PRINCIPAL</span>
            </button>
          ) : (
            <button
              id="open-external-install-btn"
              onClick={() => window.open(window.location.href, '_blank')}
              className="w-full py-3.5 px-6 bg-[#E06D53] hover:bg-[#DE5D43] text-white font-extrabold text-sm rounded-2xl shadow-lg shadow-[#E06D53]/30 flex items-center justify-center gap-2 active-press transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>ABRIR EN NAVEGADOR PARA INSTALAR</span>
            </button>
          )}

          <button
            type="button"
            onClick={handleCopyLink}
            className="w-full py-2.5 px-4 rounded-xl bg-[#FAF7F2] border border-[#E7E5E4] text-xs font-semibold text-stone-700 flex items-center justify-center gap-1.5 active-press hover:bg-stone-100 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-bold">¡Enlace copiado al portapapeles!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-stone-500" />
                <span>Copiar enlace para abrir en Chrome o Safari</span>
              </>
            )}
          </button>
        </div>

        {/* Step-by-Step Instructions */}
        <div className="text-left space-y-3 pt-3 border-t border-stone-200">
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
            ¿Cómo agregarlo manualmente?
          </h4>

          {/* Android / Chrome Guide */}
          <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200/80 text-xs text-stone-700 space-y-2">
            <div className="flex items-center gap-2 font-bold text-stone-900">
              <Smartphone className="w-4 h-4 text-emerald-600" />
              <span>En Android (Google Chrome):</span>
            </div>
            <ol className="list-decimal list-inside space-y-1.5 text-[11px] text-stone-600 pl-1">
              <li>Toca los <strong>3 puntos (⋮)</strong> en la esquina superior derecha.</li>
              <li>Selecciona <strong>"Instalar aplicación"</strong> o <strong>"Agregar a la pantalla principal"</strong>.</li>
              <li>Presiona <strong>"Instalar"</strong> o <strong>"Aceptar"</strong>.</li>
            </ol>
          </div>

          {/* iPhone / Safari Guide */}
          <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200/80 text-xs text-stone-700 space-y-2">
            <div className="flex items-center gap-2 font-bold text-stone-900">
              <Share className="w-4 h-4 text-sky-600" />
              <span>En iPhone o iPad (Safari):</span>
            </div>
            <ol className="list-decimal list-inside space-y-1.5 text-[11px] text-stone-600 pl-1">
              <li>Toca el botón <strong>Compartir</strong> (icono de cuadrado con flecha arriba).</li>
              <li>Baja y selecciona <strong>"Añadir a pantalla de inicio" ⊞</strong>.</li>
              <li>Toca <strong>"Añadir"</strong> arriba a la derecha.</li>
            </ol>
          </div>
        </div>

        <div className="mt-5 pt-3">
          <button
            onClick={() => setShowInstallModal(false)}
            className="w-full py-2 text-xs font-bold text-stone-500 hover:text-stone-800"
          >
            Cerrar ventana
          </button>
        </div>
      </motion.div>
    </div>
  );
};

