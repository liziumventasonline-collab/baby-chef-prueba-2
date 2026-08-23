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

    // Main tabs
    switch (activeTab) {
      case 'inicio':
        return <HomeScreen />;
      case 'alimentacion':
        return <AlimentacionScreen />;
      case 'recetas':
        return <RecetasScreen />;
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
      className="min-h-screen w-full bg-[#201D1A] flex items-center justify-center sm:p-4 md:p-6 select-none overflow-x-hidden font-sans"
    >
      {/* Desktop Realistic Mobile Device Mockup Canvas */}
      <div
        id="mobile-phone-frame"
        className="w-full sm:max-w-[420px] h-[100dvh] sm:h-[860px] sm:max-h-[92vh] bg-[#FAF7F2] flex flex-col relative overflow-hidden sm:rounded-[44px] sm:shadow-[0_25px_70px_rgba(0,0,0,0.55),0_0_0_12px_#2E2A27,0_0_0_14px_#443F3B] sm:border-[4px] sm:border-[#1F1C1A]"
      >
        {/* Desktop Mobile Speaker / Dynamic Island decorative notch on top */}
        <div className="hidden sm:flex absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#1F1C1A] rounded-full z-50 items-center justify-center">
          <div className="w-10 h-1.5 bg-[#38332E] rounded-full" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#1A2536] ml-2 border border-[#2D2A26]" />
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
