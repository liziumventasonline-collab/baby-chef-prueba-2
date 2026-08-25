import React from 'react';
import { useApp } from '../context/AppContext';
import { TopHeader } from './TopHeader';
import { BottomNav } from './BottomNav';
import { HomeScreen } from './HomeScreen';
import { AlimentacionScreen } from './AlimentacionScreen';
import { RecetasScreen } from './RecetasScreen';
import { RecipeDetailScreen } from './RecipeDetailScreen';
import { PerfilScreen } from './PerfilScreen';
import { MoreMenuScreen } from './MoreMenuScreen';
import { FavoritosScreen } from './FavoritosScreen';
import { ShoppingListScreen } from './ShoppingListScreen';
import { FoodTrackerScreen } from './FoodTrackerScreen';
import { RecursosScreen } from './RecursosScreen';
import { WeeklyMenuScreen } from './WeeklyMenuScreen';
import { CreativePlatesScreen } from './CreativePlatesScreen';
import { OrientacionesScreen } from './OrientacionesScreen';
import { MedicalGuideScreen } from './MedicalGuideScreen';
import { BonusRecipesScreen } from './BonusRecipesScreen';
import { AllergensGuideScreen } from './AllergensGuideScreen';
import { BonusScreen } from './BonusScreen';
import { OnboardingWizard } from './OnboardingWizard';
import { SplashScreen } from './SplashScreen';
import { InstallModal } from './InstallModal';
import { Smartphone, Monitor } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export const NativeAppShell: React.FC = () => {
  const {
    activeTab,
    extendedView,
    setExtendedView,
    selectedRecipeId,
    showSplash,
    showOnboarding
  } = useApp();

  // Render current active view
  const renderCurrentView = () => {
    // If recipe is selected, show detail screen
    if (selectedRecipeId) {
      return <RecipeDetailScreen />;
    }

    // Extended views
    if (extendedView === 'favoritos') {
      return <FavoritosScreen />;
    }
    if (extendedView === 'compras') {
      return <ShoppingListScreen />;
    }
    if (extendedView === 'probados') {
      return <FoodTrackerScreen />;
    }
    if (extendedView === 'recursos') {
      return <RecursosScreen />;
    }
    if (extendedView === 'calendario_semanal') {
      return <WeeklyMenuScreen onBack={() => setExtendedView('none')} />;
    }
    if (extendedView === 'platitos_creativos') {
      return <CreativePlatesScreen onBack={() => setExtendedView('none')} />;
    }
    if (extendedView === 'crecimiento') {
      return <PerfilScreen />;
    }
    if (extendedView === 'orientaciones') {
      return <OrientacionesScreen onBack={() => setExtendedView('none')} />;
    }
    if (extendedView === 'guia_medica') {
      return <MedicalGuideScreen onBack={() => setExtendedView('none')} />;
    }
    if (extendedView === 'bonus') {
      return <BonusScreen onBack={() => setExtendedView('none')} />;
    }
    if (extendedView === 'bonus_recetas') {
      return <BonusRecipesScreen onBack={() => setExtendedView('none')} />;
    }
    if (extendedView === 'todo_alergenos') {
      return <AllergensGuideScreen onBack={() => setExtendedView('none')} />;
    }

    // Main tabs
    switch (activeTab) {
      case 'inicio':
        return <HomeScreen />;
      case 'alimentacion':
        return <AlimentacionScreen />;
      case 'recetas':
        return <RecetasScreen />;
      case 'bonus':
        return <BonusScreen />;
      case 'bonus_recetas':
        return <BonusRecipesScreen />;
      case 'todo_alergenos':
        return <AllergensGuideScreen />;
      case 'orientaciones':
        return <OrientacionesScreen />;
      case 'perfil':
        return <PerfilScreen />;
      case 'mas':
        return <MoreMenuScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div
      id="app-root-container"
      className="min-h-screen w-full bg-gradient-to-br from-[#FFF5F0] via-[#FFFDF9] to-[#EDF6FA] flex items-center justify-center sm:p-4 md:p-6 select-none overflow-x-hidden font-sans relative"
    >
      {/* Decorative desktop baby backdrop elements */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Pastel Ambient Glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-28 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl" />

        {/* Cute Baby Floating Badges */}
        <div className="absolute top-12 left-16 px-4 py-2 rounded-2xl bg-white/80 border border-rose-100 shadow-sm backdrop-blur-md flex items-center gap-2 text-xs font-bold text-rose-800">
          <span className="text-base">🥣</span>
          <span>Nutrición Infantil & BLW</span>
        </div>
        <div className="absolute top-28 right-16 px-4 py-2 rounded-2xl bg-white/80 border border-emerald-100 shadow-sm backdrop-blur-md flex items-center gap-2 text-xs font-bold text-emerald-800">
          <span className="text-base">🌱</span>
          <span>Desarrollo & Crecimiento OMS</span>
        </div>
        <div className="absolute bottom-16 left-20 px-4 py-2 rounded-2xl bg-white/80 border border-amber-100 shadow-sm backdrop-blur-md flex items-center gap-2 text-xs font-bold text-amber-800">
          <span className="text-base">🥕</span>
          <span>Recetas Saludables y Variadas</span>
        </div>
        <div className="absolute bottom-20 right-20 px-4 py-2 rounded-2xl bg-white/80 border border-sky-100 shadow-sm backdrop-blur-md flex items-center gap-2 text-xs font-bold text-sky-800">
          <span className="text-base">🧸</span>
          <span>Cuidado Amoroso</span>
        </div>
      </div>

      {/* Realistic Mobile Device Frame */}
      <div
        id="mobile-phone-frame"
        className="w-full sm:max-w-[425px] h-[100dvh] sm:h-[860px] sm:max-h-[92vh] bg-[#FFFDF9] baby-pattern-bg flex flex-col relative overflow-hidden sm:rounded-[44px] sm:shadow-[0_20px_60px_-15px_rgba(224,109,83,0.22),0_10px_25px_rgba(0,0,0,0.06),0_0_0_8px_#FFFFFF,0_0_0_10px_#F4ECE4] sm:border-[2px] sm:border-[#EDE4DC]"
      >
        {/* Desktop Mobile Speaker / Dynamic Island decorative notch on top */}
        <div className="hidden sm:flex absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#2A2421] rounded-full z-50 items-center justify-center shadow-xs">
          <div className="w-10 h-1.5 bg-[#453D38] rounded-full" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#1A2536] ml-2 border border-[#3A332E]" />
        </div>

        {/* Global Splash Screen Overlay */}
        <AnimatePresence>
          {showSplash && <SplashScreen />}
        </AnimatePresence>

        {/* Onboarding Wizard Overlay */}
        <AnimatePresence>
          {!showSplash && showOnboarding && <OnboardingWizard />}
        </AnimatePresence>

        {/* Top Header App Bar (Hidden on full recipe detail for native immersion) */}
        {!selectedRecipeId && !showOnboarding && !showSplash && <TopHeader />}

        {/* Active Screen Content with Cross-Fade */}
        <main className="flex-1 flex flex-col overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedRecipeId || extendedView || activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex-1 flex flex-col overflow-hidden"
            >
              {renderCurrentView()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Fixed Bottom Navigation Bar (Hidden when inside full recipe detail or modal views) */}
        {!selectedRecipeId && !showOnboarding && !showSplash && <BottomNav />}

        {/* PWA Install Sheet Modal */}
        <InstallModal />

        {/* Desktop home indicator bar */}
        <div className="hidden sm:block absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#292524]/30 rounded-full z-50 pointer-events-none" />
      </div>
    </div>
  );
};
