import React from 'react';
import { useApp } from '../context/AppContext';
import { TabType } from '../types';
import { Home, UtensilsCrossed, ChefHat, Calendar, Users, MoreHorizontal } from 'lucide-react';
import { motion } from 'motion/react';

export const BottomNav: React.FC = () => {
  const { activeTab, setActiveTab, setExtendedView, setSelectedRecipeId } = useApp();

  const navItems: { id: TabType; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'alimentacion', label: 'Guía Pediátrica', icon: UtensilsCrossed },
    { id: 'recetas', label: 'Recetas', icon: ChefHat },
    { id: 'planner', label: 'Planner', icon: Calendar },
    { id: 'orientaciones', label: 'Páginas de Apoyo', icon: Users },
    { id: 'mas', label: 'Más', icon: MoreHorizontal }
  ];

  const handleTabPress = (tab: TabType) => {
    setSelectedRecipeId(null);
    setExtendedView('none');
    setActiveTab(tab);
  };

  return (
    <nav
      id="bottom-navigation-bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-rose-100/90 px-2 pt-1.5 safe-bottom shadow-[0_-4px_20px_rgba(255,107,74,0.07)]"
    >
      <div className="max-w-md mx-auto flex items-center justify-around">
        {navItems.map(item => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              id={`nav-tab-${item.id}`}
              onClick={() => handleTabPress(item.id)}
              className="relative flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-2xl active-press transition-colors min-h-[52px]"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-x-1.5 inset-y-1 bg-gradient-to-br from-[#FFF0EC] to-[#FFE5DE] border border-rose-200/70 rounded-2xl -z-10 shadow-2xs"
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                />
              )}

              <Icon
                className={`w-5 h-5 transition-transform ${
                  isActive ? 'text-[#E64A19] scale-110 stroke-[2.4]' : 'text-stone-400 stroke-[1.8] hover:text-stone-600'
                }`}
              />

              <span
                className={`text-[9.5px] xs:text-[10px] sm:text-[11px] mt-0.5 font-extrabold tracking-tight text-center leading-tight transition-colors line-clamp-1 w-full px-0.5 ${
                  isActive ? 'text-[#E64A19]' : 'text-stone-500'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
