import React from 'react';
import { useApp } from '../context/AppContext';
import { calculateBabyAge } from '../utils/helpers';
import { Download, Sparkles, ShoppingBag, Heart } from 'lucide-react';

interface TopHeaderProps {
  title?: string;
  onOpenShopping?: () => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({ title, onOpenShopping }) => {
  const { baby, isPWAInstalled, isInstallable, setShowInstallModal, shoppingList, setExtendedView, setActiveTab } = useApp();
  const age = calculateBabyAge(baby.birthDate);

  const pendingShoppingCount = shoppingList.filter(i => !i.checked).length;

  return (
    <header
      id="top-header"
      className="sticky top-0 z-30 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E7E5E4]/60 px-4 pt-3 pb-2.5 flex items-center justify-between"
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
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F28B72] to-[#E06D53] p-0.5 shadow-sm">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-lg overflow-hidden">
              {baby.avatar ? (
                <img src={baby.avatar} alt={baby.name} className="w-full h-full object-cover" />
              ) : (
                <span>{baby.gender === 'girl' ? '👧' : '👶'}</span>
              )}
            </div>
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#4A7C59] border-2 border-white rounded-full" />
        </div>

        <div className="flex flex-col">
          <span className="text-xs font-medium text-[#78716C] leading-none">
            Bebé
          </span>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="text-sm font-bold text-[#292524] tracking-tight">
              {baby.name || 'Mi Bebé'}
            </span>
            <span className="text-[11px] font-semibold px-1.5 py-0.5 rounded-full bg-[#FCEEEA] text-[#DE5D43]">
              {age.shortText}
            </span>
          </div>
        </div>
      </button>

      {/* Center: Title if provided */}
      {title && (
        <h1 className="text-base font-bold text-[#292524] font-display">
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
          className="relative p-2 text-[#57534E] hover:text-[#292524] rounded-full active-press"
          aria-label="Lista de compras"
        >
          <ShoppingBag className="w-5 h-5" />
          {pendingShoppingCount > 0 && (
            <span className="absolute 0 top-1 right-1 w-4 h-4 bg-[#E06D53] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
              {pendingShoppingCount > 9 ? '9+' : pendingShoppingCount}
            </span>
          )}
        </button>

        {/* Install button pill (if not yet installed) */}
        {!isPWAInstalled && (
          <button
            id="top-install-app-btn"
            onClick={() => setShowInstallModal(true)}
            className="flex items-center gap-1 py-1.5 px-2.5 rounded-full bg-[#E06D53] text-white text-xs font-bold active-press shadow-sm hover:bg-[#DE5D43] transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Instalar</span>
          </button>
        )}
      </div>
    </header>
  );
};
