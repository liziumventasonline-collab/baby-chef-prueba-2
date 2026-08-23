import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  MessageSquare,
  Sparkle,
  Gamepad2,
  BookOpen,
  Info,
  Check,
  Share2
} from 'lucide-react';
import { PEDIATRIC_GUIDES } from '../data/guides';

interface GuideViewerModalProps {
  guideId: string | null;
  onClose: () => void;
}

export const GuideViewerModal: React.FC<GuideViewerModalProps> = ({ guideId, onClose }) => {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  if (!guideId) return null;

  const guide = PEDIATRIC_GUIDES.find((g) => g.id === guideId);
  if (!guide) return null;

  const toggleCheck = (item: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6" />;
      case 'AlertTriangle':
        return <AlertTriangle className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6" />;
      case 'Sparkle':
        return <Sparkle className="w-6 h-6" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-6 h-6" />;
      default:
        return <BookOpen className="w-6 h-6" />;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4">
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 280 }}
          className="bg-white w-full max-w-lg max-h-[90vh] rounded-t-3xl sm:rounded-3xl flex flex-col shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className={`p-5 border-b border-stone-100 flex items-start justify-between ${guide.bgColor}`}>
            <div className="flex items-start gap-3">
              <div className={`p-2.5 rounded-2xl bg-white shadow-xs ${guide.color}`}>
                {getIcon(guide.icon)}
              </div>
              <div>
                <span className={`inline-block text-[11px] font-bold px-2 py-0.5 rounded-full bg-white text-stone-800 shadow-xs mb-1`}>
                  {guide.badge}
                </span>
                <h2 className="text-lg font-bold text-stone-900 leading-tight">{guide.title}</h2>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/80 hover:bg-white text-stone-600 transition-colors shadow-xs"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-5 overflow-y-auto space-y-6 text-stone-700 text-sm leading-relaxed">
            <p className="font-medium text-stone-600 italic bg-stone-50 p-3 rounded-2xl border border-stone-100">
              {guide.shortDesc}
            </p>

            {guide.contentSections.map((sec, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                  {sec.heading}
                </h3>

                {sec.bodyText && <p className="text-stone-700">{sec.bodyText}</p>}

                {/* Table Data */}
                {sec.tableData && (
                  <div className="overflow-x-auto my-3 rounded-2xl border border-stone-200 shadow-xs">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                        <tr>
                          {sec.tableData.headers.map((h, hIdx) => (
                            <th key={hIdx} className="p-2.5">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100">
                        {sec.tableData.rows.map((row, rIdx) => (
                          <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`p-2.5 align-top ${
                                  cIdx === 0
                                    ? 'font-bold text-stone-900'
                                    : cIdx === 2
                                    ? 'text-rose-700 font-medium'
                                    : 'text-stone-700'
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Action Checklist */}
                {sec.actionChecklist && (
                  <div className="space-y-2 my-2">
                    {sec.actionChecklist.map((item, iIdx) => {
                      const isChecked = !!checkedItems[item];
                      return (
                        <div
                          key={iIdx}
                          onClick={() => toggleCheck(item)}
                          className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                            isChecked
                              ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                              : 'bg-white border-stone-200 text-stone-800 hover:bg-stone-50'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded-lg mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                              isChecked ? 'bg-emerald-600 text-white' : 'border border-stone-300 bg-stone-50'
                            }`}
                          >
                            {isChecked && <Check className="w-3.5 h-3.5" />}
                          </div>
                          <span className={`text-xs ${isChecked ? 'line-through opacity-80' : 'font-medium'}`}>
                            {item}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Bullet points */}
                {sec.bulletPoints && (
                  <ul className="space-y-2 bg-stone-50/70 p-3.5 rounded-2xl border border-stone-100">
                    {sec.bulletPoints.map((bp, bIdx) => (
                      <li key={bIdx} className="text-xs text-stone-700 flex items-start gap-2">
                        <span className="text-emerald-600 font-bold shrink-0 mt-0.5">•</span>
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Callout */}
                {sec.calloutText && (
                  <div
                    className={`p-3.5 rounded-2xl text-xs flex items-start gap-2.5 ${
                      sec.calloutType === 'alert'
                        ? 'bg-rose-50 border border-rose-200 text-rose-800'
                        : sec.calloutType === 'warning'
                        ? 'bg-amber-50 border border-amber-200 text-amber-900'
                        : sec.calloutType === 'success'
                        ? 'bg-emerald-50 border border-emerald-200 text-emerald-900'
                        : 'bg-sky-50 border border-sky-200 text-sky-900'
                    }`}
                  >
                    <Info className="w-4 h-4 shrink-0 mt-0.5" />
                    <span className="font-medium">{sec.calloutText}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-stone-100 bg-stone-50 flex items-center justify-between">
            <span className="text-xs text-stone-500 font-medium">Guía médica actualizada</span>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
            >
              Entendido
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
