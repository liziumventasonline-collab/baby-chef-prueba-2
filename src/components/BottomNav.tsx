import React from 'react';
import { useApp } from '../context/AppContext';
import { TabType } from '../types';
import { Home, UtensilsCrossed, ChefHat, Sparkles, Users, MoreHorizontal } from 'lucide-react';
import { motion } from 'motion/react';

export const BottomNav: React.FC = () => {
  const { activeTab, setActiveTab, setExtendedView, setSelectedRecipeId } = useApp();

  const navItems: { id: TabType; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'alimentacion', label: 'Alimentación', icon: UtensilsCrossed },
    { id: 'recetas', label: 'Recetas', icon: ChefHat },
    { id: 'bonus', label: 'Bonus', icon: Sparkles },
    { id: 'orientaciones', label: 'Orientación', icon: Users },
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
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-lg border-t border-[#E7E5E4] px-2 pt-1 safe-bottom"
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
                  className="absolute inset-x-2 inset-y-1 bg-[#FCEEEA] rounded-xl -z-10"
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                />
              )}

              <Icon
                className={`w-5 h-5 transition-transform ${
                  isActive ? 'text-[#E06D53] scale-110 stroke-[2.4]' : 'text-[#78716C] stroke-[1.8]'
                }`}
              />

              <span
                className={`text-[11px] mt-1 font-semibold tracking-tight transition-colors ${
                  isActive ? 'text-[#DE5D43]' : 'text-[#78716C]'
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
