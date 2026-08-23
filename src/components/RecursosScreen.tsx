import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { RESOURCES_DATA } from '../data/resources';
import { ResourceItem } from '../types';
import { GuideViewerModal } from './GuideViewerModal';
import { RegionalGlossaryModal } from './RegionalGlossaryModal';
import {
  ArrowLeft,
  ExternalLink,
  BookOpen,
  ShieldAlert,
  Globe,
  Sparkles,
  AlertCircle,
  ShieldCheck,
  AlertTriangle,
  MessageSquare,
  Sparkle,
  Gamepad2,
  CheckCircle2,
  Globe2,
  Mail,
  HelpCircle,
  BookMarked
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const RecursosScreen: React.FC = () => {
  const { setExtendedView } = useApp();
  const [activeGuideId, setActiveGuideId] = useState<string | null>(null);
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const [selectedExternalResource, setSelectedExternalResource] = useState<ResourceItem | null>(null);

  const getResourceIcon = (iconName: string) => {
    switch (iconName) {
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-rose-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-sky-600" />;
      case 'AlertTriangle':
        return <AlertTriangle className="w-5 h-5 text-amber-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-purple-600" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-indigo-600" />;
      case 'Sparkle':
        return <Sparkle className="w-5 h-5 text-teal-600" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-5 h-5 text-amber-600" />;
      case 'HelpCircle':
        return <HelpCircle className="w-5 h-5 text-emerald-600" />;
      case 'BookOpen':
      default:
        return <BookOpen className="w-5 h-5 text-emerald-600" />;
    }
  };

  const handleResourceClick = (resource: ResourceItem) => {
    if (resource.internalGuideId) {
      setActiveGuideId(resource.internalGuideId);
    } else if (resource.url?.startsWith('mailto:')) {
      window.location.href = resource.url;
    } else {
      setSelectedExternalResource(resource);
    }
  };

  const handleOpenExternal = () => {
    if (selectedExternalResource?.url) {
      window.open(selectedExternalResource.url, '_blank', 'noopener,noreferrer');
      setSelectedExternalResource(null);
    }
  };

  return (
    <div id="recursos-screen" className="flex-1 overflow-y-auto px-4 pt-3 pb-28 no-scrollbar bg-stone-50">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <button
            id="recursos-back-btn"
            onClick={() => setExtendedView('none')}
            className="p-2 -ml-2 text-stone-600 hover:text-stone-900 rounded-full active-press"
            aria-label="Volver"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-2xl font-black text-stone-900 tracking-tight font-display">
              Manuales y Guías
            </h2>
            <p className="text-xs text-stone-500 font-medium">
              Protocolos médicos y herramientas pedagógicas oficiales
            </p>
          </div>
        </div>
      </div>

      {/* Featured Quick Tool Banner: Glosario Regional */}
      <div
        onClick={() => setIsGlossaryOpen(true)}
        className="mb-4 p-4 rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xs cursor-pointer active:scale-98 transition-transform flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-white/20 backdrop-blur-xs">
            <Globe2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-sm font-bold leading-tight">Glosario de Ingredientes de Latinoamérica</h3>
            <p className="text-[11px] text-amber-100 font-normal mt-0.5">
              Sinónimos: Palta = Aguacate, Boniato = Camote, Poroto = Frijol...
            </p>
          </div>
        </div>
        <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white text-amber-900 shadow-2xs shrink-0">
          Consultar
        </span>
      </div>

      {/* Resource Cards */}
      <div className="space-y-3">
        {RESOURCES_DATA.map((resource) => {
          const isInternal = !!resource.internalGuideId;

          return (
            <div
              key={resource.id}
              id={`resource-card-${resource.id}`}
              onClick={() => handleResourceClick(resource)}
              className="bg-white rounded-3xl p-4 border border-stone-200/80 shadow-2xs hover:border-emerald-300 transition-all cursor-pointer flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="w-10 h-10 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center shrink-0">
                    {getResourceIcon(resource.iconName)}
                  </div>

                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      isInternal
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : 'bg-stone-100 text-stone-600 border border-stone-200'
                    }`}
                  >
                    {resource.badge || (isInternal ? 'Manual Interactivo' : 'Oficial')}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-stone-900 font-display mb-0.5 leading-snug">
                  {resource.title}
                </h3>

                <p className="text-[11px] font-semibold text-emerald-700 mb-1.5">
                  {resource.organization}
                </p>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {resource.description}
                </p>
              </div>

              <button
                id={`open-resource-btn-${resource.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleResourceClick(resource);
                }}
                className={`w-full py-2.5 px-4 rounded-2xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors ${
                  isInternal
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xs'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-800'
                }`}
              >
                {isInternal ? (
                  <>
                    <BookMarked className="w-3.5 h-3.5" />
                    <span>Leer manual interactivo</span>
                  </>
                ) : (
                  <>
                    <span>{resource.url?.startsWith('mailto:') ? 'Enviar email' : 'Abrir enlace oficial'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Internal Guide Reader Modal */}
      <GuideViewerModal
        guideId={activeGuideId}
        onClose={() => setActiveGuideId(null)}
      />

      {/* Regional Glossary Modal */}
      <RegionalGlossaryModal
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
      />

      {/* Safety Departure Modal */}
      <AnimatePresence>
        {selectedExternalResource && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-4">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-stone-200"
            >
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3.5 mx-auto">
                <ExternalLink className="w-6 h-6" />
              </div>

              <h3 className="text-base font-bold text-stone-900 text-center font-display mb-1.5">
                Estás saliendo de Baby Chef
              </h3>

              <p className="text-xs text-stone-600 text-center mb-4 leading-relaxed">
                Te redirigiremos a la página oficial de{' '}
                <strong className="text-stone-900">{selectedExternalResource.organization}</strong> para consultar el documento original.
              </p>

              <div className="space-y-2">
                <button
                  id="confirm-external-open-btn"
                  onClick={handleOpenExternal}
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-2xl shadow-xs active-press flex items-center justify-center gap-1.5"
                >
                  <span>Continuar y abrir enlace</span>
                  <ExternalLink className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setSelectedExternalResource(null)}
                  className="w-full py-3 px-4 rounded-2xl border border-stone-200 text-xs font-bold text-stone-600 active-press hover:bg-stone-50"
                >
                  Permanecer en Baby Chef
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
