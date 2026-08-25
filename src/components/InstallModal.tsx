import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Download, Sparkles, X, CheckCircle2, ShieldCheck, Zap, Smartphone, ArrowRight, Share2, PlusSquare, MoreVertical, Copy, Check } from 'lucide-react';
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

  const [isInstalling, setIsInstalling] = useState(false);
  const [showManualGuide, setShowManualGuide] = useState(false);
  const [platform, setPlatform] = useState<'android' | 'ios'>('android');
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    // Detect iOS vs Android
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    if (isIOS) {
      setPlatform('ios');
    } else {
      setPlatform('android');
    }
  }, []);

  if (!showInstallModal) return null;

  const handleInstallClick = async () => {
    setIsInstalling(true);
    try {
      const result = await installAppPrompt();
      if (result === 'manual_needed' || !isInstallable) {
        setShowManualGuide(true);
      } else if (result === 'installed') {
        // Handled in context
      }
    } catch (err) {
      console.error('Install click error:', err);
      setShowManualGuide(true);
    } finally {
      setIsInstalling(false);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }).catch(() => {});
  };

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
          className="w-full max-w-sm bg-white rounded-t-3xl sm:rounded-3xl p-5 sm:p-6 shadow-2xl border border-rose-100 relative overflow-hidden safe-bottom max-h-[90vh] overflow-y-auto"
        >
          {/* Top subtle bar for mobile pull */}
          <div className="w-10 h-1.5 bg-stone-300 rounded-full mx-auto mb-3 sm:hidden" />

          {/* Close button */}
          <button
            onClick={() => setShowInstallModal(false)}
            className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full active-press z-10"
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
                ¡Baby Chef ya está Instalada!
              </h3>
              <p className="text-xs text-stone-600">
                La aplicación ya se encuentra guardada en la pantalla de inicio de tu celular con su icono oficial.
              </p>
              <button
                type="button"
                onClick={() => setShowInstallModal(false)}
                className="w-full py-3 bg-emerald-600 text-white font-bold text-xs rounded-2xl active-press"
              >
                Continuar usando Baby Chef
              </button>
            </div>
          ) : showManualGuide ? (
            /* Detailed Step-by-Step Installation Guide */
            <div className="space-y-4">
              <div className="text-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-rose-50 border border-rose-200/60 text-[#DE5D43] text-[11px] font-black uppercase tracking-wider mb-1.5">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Instalación Directa</span>
                </div>
                <h3 className="text-lg font-black text-stone-900 font-display">
                  Cómo Instalar en tu Pantalla
                </h3>
                <p className="text-xs text-stone-600 mt-0.5">
                  Sigue estos 3 sencillos pasos en tu navegador:
                </p>
              </div>

              {/* Platform Selector Tabs */}
              <div className="grid grid-cols-2 gap-1.5 p-1 bg-stone-100 rounded-xl">
                <button
                  type="button"
                  onClick={() => setPlatform('android')}
                  className={`py-1.5 text-xs font-bold rounded-lg transition-all ${
                    platform === 'android'
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  🤖 Android (Chrome)
                </button>
                <button
                  type="button"
                  onClick={() => setPlatform('ios')}
                  className={`py-1.5 text-xs font-bold rounded-lg transition-all ${
                    platform === 'ios'
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  🍎 iPhone (Safari)
                </button>
              </div>

              {/* Instructions steps */}
              {platform === 'android' ? (
                <div className="space-y-2.5 bg-amber-50/60 border border-amber-200/70 rounded-2xl p-3.5 text-xs text-stone-800">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-amber-500 text-white font-black flex items-center justify-center shrink-0 text-[11px]">
                      1
                    </span>
                    <div className="leading-tight">
                      <span className="font-bold">Toca los 3 puntos (</span>
                      <MoreVertical className="w-3.5 h-3.5 inline text-stone-700 mx-0.5" />
                      <span className="font-bold">)</span> en la esquina superior derecha de tu navegador Chrome.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-amber-500 text-white font-black flex items-center justify-center shrink-0 text-[11px]">
                      2
                    </span>
                    <div className="leading-tight">
                      Selecciona <span className="font-black text-amber-900 bg-amber-200/70 px-1 py-0.5 rounded">"Instalar aplicación"</span> o <span className="font-black text-amber-900 bg-amber-200/70 px-1 py-0.5 rounded">"Agregar a la pantalla principal"</span>.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-amber-500 text-white font-black flex items-center justify-center shrink-0 text-[11px]">
                      3
                    </span>
                    <div className="leading-tight">
                      Presiona <span className="font-bold">"Instalar"</span> y el icono de <span className="font-bold text-[#DE5D43]">Baby Chef</span> aparecerá en tu menú de apps.
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-2.5 bg-blue-50/60 border border-blue-200/70 rounded-2xl p-3.5 text-xs text-stone-800">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-500 text-white font-black flex items-center justify-center shrink-0 text-[11px]">
                      1
                    </span>
                    <div className="leading-tight">
                      Toca el botón <span className="font-bold">Compartir (</span>
                      <Share2 className="w-3.5 h-3.5 inline text-blue-600 mx-0.5" />
                      <span className="font-bold">)</span> en la barra inferior de Safari.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-500 text-white font-black flex items-center justify-center shrink-0 text-[11px]">
                      2
                    </span>
                    <div className="leading-tight">
                      Desplaza hacia abajo y pulsa <span className="font-black text-blue-900 bg-blue-200/70 px-1 py-0.5 rounded flex-inline items-center gap-1"><PlusSquare className="w-3 h-3 inline mr-1" />"Agregar al inicio"</span>.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-500 text-white font-black flex items-center justify-center shrink-0 text-[11px]">
                      3
                    </span>
                    <div className="leading-tight">
                      Toca <span className="font-bold">"Agregar"</span> en la esquina superior derecha.
                    </div>
                  </div>
                </div>
              )}

              {/* Actions in manual mode */}
              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={handleInstallClick}
                  disabled={isInstalling}
                  className="w-full py-3 px-4 bg-gradient-to-r from-[#FF7043] via-[#FF5722] to-[#E64A19] text-white font-black text-xs rounded-2xl shadow-md flex items-center justify-center gap-2 active-press"
                >
                  <Download className="w-4 h-4" />
                  <span>{isInstalling ? 'Activando...' : 'Reintentar Instalación Automática'}</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="flex-1 py-2.5 px-3 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 active-press transition-colors"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedLink ? '¡Enlace copiado!' : 'Copiar enlace'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowInstallModal(false)}
                    className="py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-600 font-bold text-xs rounded-xl active-press transition-colors"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Primary 1-Touch Install View */
            <div className="text-center space-y-4">
              {/* App Icon */}
              <div className="relative inline-block mx-auto">
                <BabyChefLogo size="lg" rounded="rounded-3xl" className="shadow-md" />
                <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs shadow-xs border-2 border-white font-black">
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
                  Ten la app de nutrición y recetas en la pantalla de tu celular con su icono oficial.
                </p>
              </div>

              {/* Quick Benefits */}
              <div className="bg-rose-50/50 rounded-2xl p-3 text-left border border-rose-100 space-y-2">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-stone-800">
                  <Zap className="w-4 h-4 text-[#DE5D43] shrink-0" />
                  <span>Apertura instantánea en pantalla completa</span>
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
                onClick={handleInstallClick}
                disabled={isInstalling}
                className="w-full py-3.5 px-5 bg-gradient-to-r from-[#FF7043] via-[#FF5722] to-[#E64A19] hover:opacity-95 text-white font-black text-sm rounded-2xl shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 active-press transition-all"
              >
                <Download className={`w-5 h-5 ${isInstalling ? 'animate-bounce' : ''}`} />
                <span>{isInstalling ? 'PREPARANDO INSTALACIÓN...' : 'INSTALAR EN EL CELULAR'}</span>
              </button>

              <div className="flex items-center justify-between text-xs px-1">
                <button
                  type="button"
                  onClick={() => setShowManualGuide(true)}
                  className="font-bold text-[#DE5D43] hover:underline flex items-center gap-1"
                >
                  <span>¿Cómo instalar paso a paso?</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                <button
                  type="button"
                  onClick={() => setShowInstallModal(false)}
                  className="font-bold text-stone-400 hover:text-stone-700 py-1 transition-colors"
                >
                  Ahora no
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
