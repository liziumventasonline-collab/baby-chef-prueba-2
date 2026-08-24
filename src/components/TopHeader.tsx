import React from 'react';
import { useApp } from '../context/AppContext';
import { calculateBabyAge } from '../utils/helpers';
import { Download, Sparkles, ShoppingBag, Heart } from 'lucide-react';

interface TopHeaderProps {
  title?: string;
  onOpenShopping?: () => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({ title, onOpenShopping }) => {
  const {
    baby,
    isPWAInstalled,
    isInstallable,
    setShowInstallModal,
    installAppPrompt,
    shoppingList,
    setExtendedView,
    setActiveTab
  } = useApp();
  const age = calculateBabyAge(baby.birthDate);

  const pendingShoppingCount = shoppingList.filter(i => !i.checked).length;

  return (
    <header
      id="top-header"
      className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-rose-100/80 px-4 pt-3 pb-2.5 flex items-center justify-between shadow-2xs"
    >
      {/* Left: Baby Avatar & Quick Info */}
      <button
        id="top-baby-profile-btn"
        onClick={() => {
          setExtendedView('none');
          setActiveTab('perfil');
        }}
        className="flex items-center gap-2.5 active-press text-left"
      >
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FF8A65] via-[#FF7043] to-[#F4511E] p-0.5 shadow-sm">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-lg overflow-hidden">
              {baby.avatar || baby.photoUrl ? (
                <img src={baby.avatar || baby.photoUrl} alt={baby.name} className="w-full h-full object-cover" />
              ) : (
                <span>{baby.gender === 'girl' ? '👧' : '👶'}</span>
              )}
            </div>
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="text-[11px] font-bold text-rose-500/90 uppercase tracking-wide">
              Mi Bebé
            </span>
            <span className="text-[10px]">✨</span>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-sm font-extrabold text-stone-900 tracking-tight font-display">
              {baby.name || 'Mi Bebé'}
            </span>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-rose-50 border border-rose-200/60 text-[#DE5D43]">
              {age.shortText}
            </span>
          </div>
        </div>
      </button>

      {/* Center: Title if provided */}
      {title && (
        <h1 className="text-base font-extrabold text-stone-900 font-display">
          {title}
        </h1>
      )}

      {/* Right Actions: Shopping List + Install Button */}
      <div className="flex items-center gap-1.5">
        {/* Shopping list quick badge */}
        <button
          id="top-shopping-badge-btn"
          onClick={() => {
            if (onOpenShopping) {
              onOpenShopping();
            } else {
              setExtendedView('compras');
            }
          }}
          className="relative p-2 text-stone-600 hover:text-stone-900 rounded-full active-press hover:bg-rose-50/60 transition-colors"
          aria-label="Lista de compras"
        >
          <ShoppingBag className="w-5 h-5 text-stone-700" />
          {pendingShoppingCount > 0 && (
            <span className="absolute top-1 right-1 w-4 h-4 bg-gradient-to-r from-[#FF7043] to-[#E64A19] text-white text-[10px] font-black rounded-full flex items-center justify-center shadow-xs">
              {pendingShoppingCount > 9 ? '9+' : pendingShoppingCount}
            </span>
          )}
        </button>

        {/* Install button pill (if not yet installed) */}
        {!isPWAInstalled && (
          <button
            id="top-install-app-btn"
            onClick={() => setShowInstallModal(true)}
            className="flex items-center gap-1 py-1.5 px-3 rounded-full bg-gradient-to-r from-[#FF7043] to-[#E64A19] text-white text-xs font-black active-press shadow-xs hover:opacity-95 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Instalar</span>
          </button>
        )}
      </div>
    </header>
  );
};
