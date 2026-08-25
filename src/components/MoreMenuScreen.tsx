import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { RegionalGlossaryModal } from './RegionalGlossaryModal';
import {
  Heart,
  BookOpen,
  Ruler,
  ShoppingBag,
  CheckCircle2,
  Download,
  Settings,
  ShieldCheck,
  Shield,
  RotateCcw,
  Sparkles,
  Info,
  Smartphone,
  ChevronRight,
  UserPlus,
  Calendar,
  Globe2,
  Utensils,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const MoreMenuScreen: React.FC = () => {
  const {
    baby,
    setExtendedView,
    setShowInstallModal,
    installAppPrompt,
    isInstallable,
    setShowOnboarding,
    isPWAInstalled,
    resetAllData
  } = useApp();

  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);

  const menuSections = [
    {
      title: 'Guía Médica & Planes',
      items: [
        {
          id: 'guia_medica',
          label: 'Guía del Médico Pediatra (Antes de Empezar)',
          desc: 'Manual completo por el Dr. Roberto Hernández',
          icon: BookOpen,
          color: 'text-rose-700',
          bgColor: 'bg-rose-50',
          action: () => setExtendedView('guia_medica')
        },
        {
          id: 'todo_alergenos',
          label: 'Todo sobre Alérgenos (6 a 24 Meses)',
          desc: 'Plan nutricional, tabla por edad y protocolo de seguridad',
          icon: Shield,
          color: 'text-teal-700',
          bgColor: 'bg-teal-50',
          action: () => setExtendedView('todo_alergenos')
        },
        {
          id: 'bonus_recetas',
          label: 'Bonus de Recetas (12 a 24 Meses)',
          desc: '70 recetas nutritivas: 30 de 12-18m + 40 de 18-24m',
          icon: Sparkles,
          color: 'text-amber-700',
          bgColor: 'bg-amber-50',
          action: () => setExtendedView('bonus_recetas')
        },
        {
          id: 'calendario_semanal',
          label: 'Planner Semanal (24 Semanas)',
          desc: 'Tablas completas & compras de 6 a 24 meses',
          icon: Calendar,
          color: 'text-emerald-700',
          bgColor: 'bg-emerald-50',
          action: () => setExtendedView('calendario_semanal')
        },
        {
          id: 'platitos_creativos',
          label: 'Platitos Creativos & Lúdicos',
          desc: 'Presentaciones divertidas paso a paso',
          icon: Sparkles,
          color: 'text-amber-700',
          bgColor: 'bg-amber-50',
          action: () => setExtendedView('platitos_creativos')
        },
        {
          id: 'glosario_regional',
          label: 'Glosario de Ingredientes (LATAM)',
          desc: 'Equivalencias: palta, boniato, zapallo...',
          icon: Globe2,
          color: 'text-sky-700',
          bgColor: 'bg-sky-50',
          action: () => setIsGlossaryOpen(true)
        }
      ]
    },
    {
      title: 'Herramientas de Seguimiento',
      items: [
        {
          id: 'favoritos',
          label: 'Mis recetas favoritas',
          desc: 'Tus platos guardados',
          icon: Heart,
          color: 'text-rose-600',
          bgColor: 'bg-rose-50',
          action: () => setExtendedView('favoritos')
        },
        {
          id: 'compras',
          label: 'Lista del súper interactiva',
          desc: 'Ingredientes organizados por pasillo',
          icon: ShoppingBag,
          color: 'text-emerald-700',
          bgColor: 'bg-emerald-50',
          action: () => setExtendedView('compras')
        },
        {
          id: 'probados',
          label: 'Alimentos probados (Regla 3 días)',
          desc: 'Registro de tolerancia y alérgenos',
          icon: CheckCircle2,
          color: 'text-purple-700',
          bgColor: 'bg-purple-50',
          action: () => setExtendedView('probados')
        },
        {
          id: 'crecimiento',
          label: 'Curvas de crecimiento OMS',
          desc: 'Historial de peso y talla',
          icon: Ruler,
          color: 'text-amber-700',
          bgColor: 'bg-amber-50',
          action: () => setExtendedView('crecimiento')
        }
      ]
    },
    {
      title: 'Pediatría y Orientación',
      items: [
        {
          id: 'orientaciones',
          label: 'Páginas de Apoyo en Facebook',
          desc: '6 canales de BLW, nutrición y grupos de apoyo',
          icon: Users,
          color: 'text-blue-700',
          bgColor: 'bg-blue-50',
          action: () => setExtendedView('orientaciones')
        },
        {
          id: 'recursos',
          label: 'Manuales y guías pediátricas',
          desc: 'Atragantamiento vs Gag, LEAP, APLV, BLISS...',
          icon: BookOpen,
          color: 'text-teal-700',
          bgColor: 'bg-teal-50',
          action: () => setExtendedView('recursos')
        }
      ]
    },
    {
      title: 'Aplicación y Dispositivo',
      items: [
        ...(!isPWAInstalled
          ? [
              {
                id: 'instalar',
                label: 'Instalar Baby Chef en el móvil',
                desc: 'Acceso directo con 1 toque como app nativa',
                icon: Download,
                color: 'text-orange-600',
                bgColor: 'bg-orange-50',
                action: () => {
                  if (isInstallable) {
                    installAppPrompt();
                  } else {
                    setShowInstallModal(true);
                  }
                }
              }
            ]
          : []),
        {
          id: 'nuevo_bebe',
          label: 'Editar perfil del bebé',
          desc: 'Modificar fecha de nacimiento o nombre',
          icon: UserPlus,
          color: 'text-stone-600',
          bgColor: 'bg-stone-100',
          action: () => setShowOnboarding(true)
        },
        {
          id: 'acerca_de',
          label: 'Acerca de Baby Chef & Privacidad',
          desc: 'Datos 100% privados en tu teléfono',
          icon: ShieldCheck,
          color: 'text-emerald-700',
          bgColor: 'bg-emerald-50',
          action: () => setShowAboutModal(true)
        }
      ]
    }
  ];

  return (
    <div id="more-menu-screen" className="flex-1 overflow-y-auto px-4 pt-3 pb-36 no-scrollbar baby-clouds-pattern">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-2xl font-black text-stone-900 tracking-tight font-display">
          Más opciones
        </h2>
        <p className="text-xs text-stone-500 font-medium">
          Planes semanales, manuales médicos y herramientas
        </p>
      </div>

      {/* Baby summary banner */}
      <div className="bg-gradient-to-r from-[#FF6B4A] via-[#FF8A65] to-[#FFA07A] text-white rounded-3xl p-4 shadow-md mb-5 flex items-center justify-between border border-rose-200/50 relative overflow-hidden">
        <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/15 rounded-full blur-xs pointer-events-none" />
        <div className="flex items-center gap-3 relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-white/20 p-0.5 backdrop-blur-xs flex items-center justify-center text-2xl shadow-xs border border-white/30">
            {baby.avatar || baby.photoUrl ? (
              <img src={baby.avatar || baby.photoUrl} alt={baby.name} className="w-full h-full object-cover rounded-2xl" />
            ) : (
              <span>{baby.gender === 'girl' ? '👧' : '👶'}</span>
            )}
          </div>
          <div>
            <h3 className="text-sm font-extrabold font-display text-white">
              {baby.name || 'Mi Bebé'}
            </h3>
            <p className="text-xs text-white/90 font-bold">
              Perfil activo · Almacenamiento local seguro
            </p>
          </div>
        </div>

        <button
          id="more-restart-wizard-btn"
          onClick={() => setShowOnboarding(true)}
          className="py-1.5 px-3 rounded-xl bg-white/25 hover:bg-white/40 text-white text-xs font-black active-press transition-colors shadow-2xs border border-white/30 relative z-10"
        >
          Editar
        </button>
      </div>

      {/* Menu Groups */}
      <div className="space-y-5">
        {menuSections.map((sec, sIdx) => (
          <div key={sIdx}>
            <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider px-1 mb-2">
              {sec.title}
            </h4>

            <div className="bg-white rounded-3xl border border-stone-200/80 shadow-2xs overflow-hidden divide-y divide-stone-100">
              {sec.items.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    id={`more-menu-item-${item.id}`}
                    onClick={item.action}
                    className="w-full flex items-center justify-between p-3.5 hover:bg-stone-50 active-press transition-colors text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-2xl ${item.bgColor} ${item.color} flex items-center justify-center shrink-0 shadow-2xs`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-stone-900 block">
                          {item.label}
                        </span>
                        <span className="text-[11px] text-stone-500">
                          {item.desc}
                        </span>
                      </div>
                    </div>

                    <ChevronRight className="w-4 h-4 text-stone-400" />
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Reset Data Button */}
      <div className="mt-8 pt-4 border-t border-stone-200 text-center">
        <button
          id="more-reset-data-btn"
          onClick={() => setShowResetConfirm(true)}
          className="text-xs font-semibold text-stone-400 hover:text-rose-600 transition-colors p-2 active-press"
        >
          Restablecer datos de la aplicación
        </button>
        <p className="text-[10px] text-stone-400 mt-1">
          Baby Chef v1.0 · PWA con diseño de aplicación nativa
        </p>
      </div>

      {/* Regional Glossary Modal */}
      <RegionalGlossaryModal
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
      />

      {/* About & Privacy Modal */}
      <AnimatePresence>
        {showAboutModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-stone-200"
            >
              <div className="w-14 h-14 rounded-3xl bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto mb-3 text-2xl">
                👨‍🍳
              </div>

              <h3 className="text-lg font-bold text-stone-900 text-center font-display mb-1">
                Baby Chef
              </h3>
              <p className="text-xs font-semibold text-emerald-700 text-center mb-3">
                Nutrición infantil y alimentación complementaria
              </p>

              <div className="text-xs text-stone-600 space-y-2.5 leading-relaxed bg-stone-50 p-4 rounded-2xl border border-stone-200 mb-4">
                <p>
                  🔒 <strong>Privacidad Total:</strong> Todos los datos de tu bebé (nombre, peso, talla, favoritos y alimentos probados) se almacenan de forma 100% local y segura en tu dispositivo.
                </p>
                <p>
                  🩺 <strong>Evidencia Médica:</strong> Recetas, cortes BLW y protocolos pediátricos basados en directrices de AEPED, AAP, OMS, ESPGHAN y estudios LEAP/PETIT.
                </p>
              </div>

              <button
                onClick={() => setShowAboutModal(false)}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-2xl active-press shadow-xs"
              >
                Entendido
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Reset Confirmation Modal */}
      <AnimatePresence>
        {showResetConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-stone-200"
            >
              <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-3">
                <RotateCcw className="w-6 h-6" />
              </div>

              <h3 className="text-base font-bold text-stone-900 text-center font-display mb-1">
                ¿Restablecer Baby Chef?
              </h3>
              <p className="text-xs text-stone-600 text-center mb-4 leading-relaxed">
                Se borrarán las medidas registradas y volverás al asistente inicial.
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="flex-1 py-3 rounded-2xl border border-stone-200 text-xs font-bold text-stone-600 active-press hover:bg-stone-50"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => {
                    setShowResetConfirm(false);
                    resetAllData();
                  }}
                  className="flex-1 py-3 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-2xl active-press"
                >
                  Sí, restablecer
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
