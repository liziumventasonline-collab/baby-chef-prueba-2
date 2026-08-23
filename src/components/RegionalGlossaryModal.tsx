import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, Globe2, BookOpen } from 'lucide-react';
import { REGIONAL_GLOSSARY } from '../data/regionalGlossary';

interface RegionalGlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegionalGlossaryModal: React.FC<RegionalGlossaryModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filtered = REGIONAL_GLOSSARY.filter((item) => {
    const q = searchTerm.toLowerCase();
    const matchesStandard = item.standard.toLowerCase().includes(q);
    const matchesRegional = item.regionalNames.some(
      (r) => r.name.toLowerCase().includes(q) || r.countryOrRegion.toLowerCase().includes(q)
    );
    return matchesStandard || matchesRegional;
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4">
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 280 }}
          className="bg-white w-full max-w-lg max-h-[88vh] rounded-t-3xl sm:rounded-3xl flex flex-col shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="p-5 border-b border-stone-100 bg-amber-50/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-white shadow-xs text-amber-700">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-stone-900 leading-tight">
                  Glosario de Ingredientes
                </h2>
                <p className="text-xs text-stone-500 font-medium">Sinónimos en Latinoamérica y España</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/80 hover:bg-white text-stone-600 shadow-xs"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search bar */}
          <div className="p-4 border-b border-stone-100 bg-stone-50">
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar ingrediente (ej: palta, boniato, fréjol)..."
                className="w-full pl-9 pr-4 py-2.5 bg-white rounded-xl border border-stone-200 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
              />
            </div>
          </div>

          {/* List */}
          <div className="p-4 overflow-y-auto space-y-3">
            {filtered.length === 0 ? (
              <div className="text-center py-10 text-stone-400 text-xs">
                No encontramos sinónimos para "{searchTerm}".
              </div>
            ) : (
              filtered.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl border border-stone-100 bg-white shadow-xs space-y-2 hover:border-amber-200 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-sm text-stone-900">{item.standard}</h3>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-stone-100 text-stone-600">
                      {item.category}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-1.5 pt-1">
                    {item.regionalNames.map((reg, rIdx) => (
                      <div
                        key={rIdx}
                        className="text-xs flex items-baseline justify-between bg-stone-50/70 p-2 rounded-xl"
                      >
                        <span className="text-stone-500 text-[11px] font-medium">{reg.countryOrRegion}</span>
                        <span className="font-bold text-stone-800 text-right">{reg.name}</span>
                      </div>
                    ))}
                  </div>

                  {item.notes && (
                    <p className="text-[11px] text-amber-800 bg-amber-50/50 p-2 rounded-xl font-medium">
                      💡 {item.notes}
                    </p>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-stone-100 bg-stone-50 text-center">
            <button
              onClick={onClose}
              className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
            >
              Listo
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
