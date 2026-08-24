import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  BabyProfile,
  GrowthRecord,
  Recipe,
  ShoppingItem,
  FoodTrackerItem,
  TabType,
  ExtendedViewType
} from '../types';
import { DEFAULT_BABY_PROFILE, DEFAULT_GROWTH_RECORDS } from '../utils/helpers';
import { RECIPES_DATA } from '../data/recipes';
import { DEFAULT_FOODS_LIST } from '../data/foodsList';

interface AppContextType {
  // Navigation
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  extendedView: ExtendedViewType;
  setExtendedView: (view: ExtendedViewType) => void;
  selectedRecipeId: string | null;
  setSelectedRecipeId: (id: string | null) => void;
  selectedStageMonth: number;
  setSelectedStageMonth: (month: number) => void;

  // Baby Profile & Growth
  baby: BabyProfile;
  updateBaby: (data: Partial<BabyProfile>) => void;
  growthRecords: GrowthRecord[];
  addGrowthRecord: (record: Omit<GrowthRecord, 'id'>) => void;
  deleteGrowthRecord: (id: string) => void;

  // Recipes & Favorites
  recipes: Recipe[];
  favoriteIds: string[];
  toggleFavorite: (recipeId: string) => void;
  isFavorite: (recipeId: string) => boolean;

  // Shopping List
  shoppingList: ShoppingItem[];
  toggleShoppingItem: (id: string) => void;
  addShoppingItem: (
    itemOrName: string | { name: string; amount?: string; category?: string; recipeSource?: string },
    amount?: string,
    recipeSource?: string
  ) => void;
  removeShoppingItem: (id: string) => void;
  clearCompletedShopping: () => void;
  addRecipeIngredientsToShopping: (recipe: Recipe) => void;

  // Tested Foods Tracker
  foodsTracker: FoodTrackerItem[];
  updateFoodStatus: (id: string, status: FoodTrackerItem['status'], notes?: string) => void;
  addCustomFood: (foodName: string, category: FoodTrackerItem['category']) => void;

  // App Lifecycle / Modals
  showSplash: boolean;
  setShowSplash: (show: boolean) => void;
  showOnboarding: boolean;
  setShowOnboarding: (show: boolean) => void;
  completeOnboarding: (profileData: Partial<BabyProfile>) => void;
  hasCompletedInstallGate: boolean;
  completeInstallGate: () => void;
  showInstallModal: boolean;
  setShowInstallModal: (show: boolean) => void;
  installAppPrompt: () => void;
  isPWAInstalled: boolean;
  isInstallable: boolean;
  resetAllData: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  BABY: 'babychef_baby_profile_v1',
  GROWTH: 'babychef_growth_records_v1',
  FAVORITES: 'babychef_favorite_ids_v1',
  SHOPPING: 'babychef_shopping_list_v1',
  FOODS: 'babychef_tested_foods_v1',
  ONBOARDED: 'babychef_onboarded_v1',
  INSTALL_GATE: 'babychef_install_gate_v1'
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // App navigation state
  const [activeTab, setActiveTab] = useState<TabType>('inicio');
  const [extendedView, setExtendedView] = useState<ExtendedViewType>('none');
  const [selectedRecipeId, setSelectedRecipeId] = useState<string | null>(null);
  const [selectedStageMonth, setSelectedStageMonth] = useState<number>(6);

  // Splash & Onboarding
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [showOnboarding, setShowOnboarding] = useState<boolean>(false);
  const [hasCompletedInstallGate, setHasCompletedInstallGate] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.INSTALL_GATE) === 'true';
    } catch (e) {
      return false;
    }
  });
  const [showInstallModal, setShowInstallModal] = useState<boolean>(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isPWAInstalled, setIsPWAInstalled] = useState<boolean>(false);
  const [isInstallable, setIsInstallable] = useState<boolean>(false);

  // Baby Profile state
  const [baby, setBaby] = useState<BabyProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.BABY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_BABY_PROFILE;
  });

  // Growth Records (Only 1 initial baseline measurement at start)
  const [growthRecords, setGrowthRecords] = useState<GrowthRecord[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.GROWTH);
      if (saved) {
        const parsed: GrowthRecord[] = JSON.parse(saved);
        // Filter out any legacy dummy mock records (g-2, g-3, g-4) if present
        const cleaned = parsed.filter(r => r.id !== 'g-2' && r.id !== 'g-3' && r.id !== 'g-4');
        if (cleaned.length > 0) return cleaned;
      }
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_GROWTH_RECORDS;
  });

  // Favorites
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.FAVORITES);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return ['rec-6-1', 'rec-9-1'];
  });

  // Shopping List
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SHOPPING);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return [
      { id: 's-1', name: 'Zanahoria fresca', amount: '1 pieza', category: 'Verduras', checked: false, recipeSource: 'Puré suave' },
      { id: 's-2', name: 'Calabacín tierno', amount: '1 pieza', category: 'Verduras', checked: true, recipeSource: 'Puré suave' },
      { id: 's-3', name: 'Aceite de oliva virgen extra', amount: '1 botella', category: 'Grasas', checked: false }
    ];
  });

  // Foods Tracker
  const [foodsTracker, setFoodsTracker] = useState<FoodTrackerItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.FOODS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_FOODS_LIST;
  });

  // PWA beforeinstallprompt handler & display-mode check
  useEffect(() => {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true;
    if (isStandalone) {
      setIsPWAInstalled(true);
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    const handleAppInstalled = () => {
      setIsPWAInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  // Splash Screen timer (runs for 2.2s on startup)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      // If user hasn't completed onboarding, show onboarding
      const isOnboarded = localStorage.getItem(STORAGE_KEYS.ONBOARDED);
      if (!isOnboarded && !baby.hasCompletedOnboarding) {
        setShowOnboarding(true);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [baby.hasCompletedOnboarding]);

  // Persist baby
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.BABY, JSON.stringify(baby));
    } catch (e) {
      console.error(e);
    }
  }, [baby]);

  // Persist growth
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.GROWTH, JSON.stringify(growthRecords));
    } catch (e) {
      console.error(e);
    }
  }, [growthRecords]);

  // Persist favorites
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favoriteIds));
    } catch (e) {
      console.error(e);
    }
  }, [favoriteIds]);

  // Persist shopping list
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SHOPPING, JSON.stringify(shoppingList));
    } catch (e) {
      console.error(e);
    }
  }, [shoppingList]);

  // Persist tested foods
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.FOODS, JSON.stringify(foodsTracker));
    } catch (e) {
      console.error(e);
    }
  }, [foodsTracker]);

  // Actions
  const updateBaby = (data: Partial<BabyProfile>) => {
    setBaby(prev => {
      const updated = { ...prev, ...data };
      return updated;
    });

    // If birthWeight, birthHeight or birthDate are edited and there's only the initial record, sync it
    if (data.birthWeight !== undefined || data.birthHeight !== undefined || data.birthDate !== undefined) {
      setGrowthRecords(prev => {
        if (prev.length <= 1) {
          const first = prev[0];
          return [{
            id: first?.id || 'g-initial',
            date: data.birthDate || first?.date || baby.birthDate,
            ageMonths: 0,
            weightKg: data.birthWeight || first?.weightKg || baby.birthWeight,
            heightCm: data.birthHeight || first?.heightCm || baby.birthHeight,
            headCircumferenceCm: first?.headCircumferenceCm || 35,
            notes: first?.notes || 'Registro inicial de nacimiento'
          }];
        }
        return prev;
      });
    }
  };

  const completeOnboarding = (profileData: Partial<BabyProfile>) => {
    const updated = {
      ...baby,
      ...profileData,
      hasCompletedOnboarding: true
    };
    setBaby(updated);

    // Initialize with ONLY 1 initial measurement based on user input
    const initialRecord: GrowthRecord = {
      id: 'g-initial',
      date: profileData.birthDate || updated.birthDate,
      ageMonths: 0,
      weightKg: profileData.birthWeight || updated.birthWeight,
      heightCm: profileData.birthHeight || updated.birthHeight,
      headCircumferenceCm: 35,
      notes: 'Registro inicial de nacimiento'
    };
    setGrowthRecords([initialRecord]);

    localStorage.setItem(STORAGE_KEYS.ONBOARDED, 'true');
    setShowOnboarding(false);
  };

  const completeInstallGate = () => {
    localStorage.setItem(STORAGE_KEYS.INSTALL_GATE, 'true');
    setHasCompletedInstallGate(true);
  };

  const addGrowthRecord = (record: Omit<GrowthRecord, 'id'>) => {
    const newRecord: GrowthRecord = {
      ...record,
      id: `growth-${Date.now()}`
    };
    setGrowthRecords(prev => [...prev, newRecord].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()));
  };

  const deleteGrowthRecord = (id: string) => {
    setGrowthRecords(prev => prev.filter(r => r.id !== id));
  };

  const toggleFavorite = (recipeId: string) => {
    setFavoriteIds(prev =>
      prev.includes(recipeId) ? prev.filter(id => id !== recipeId) : [...prev, recipeId]
    );
  };

  const isFavorite = (recipeId: string) => favoriteIds.includes(recipeId);

  const toggleShoppingItem = (id: string) => {
    setShoppingList(prev =>
      prev.map(item => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const addShoppingItem = (
    itemOrName: string | { name: string; amount?: string; category?: string; recipeSource?: string },
    amount?: string,
    recipeSource?: string
  ) => {
    let nameStr = '';
    let amountStr = amount;
    let categoryStr = 'General';
    let sourceStr = recipeSource;

    if (typeof itemOrName === 'string') {
      nameStr = itemOrName;
    } else if (itemOrName && typeof itemOrName === 'object') {
      nameStr = itemOrName.name;
      amountStr = itemOrName.amount || amount;
      categoryStr = itemOrName.category || 'General';
      sourceStr = itemOrName.recipeSource || recipeSource;
    }

    if (!nameStr || !nameStr.trim()) return;

    const newItem: ShoppingItem = {
      id: `shop-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      name: nameStr.trim(),
      amount: amountStr,
      category: categoryStr,
      checked: false,
      recipeSource: sourceStr
    };
    setShoppingList(prev => [newItem, ...prev]);
  };

  const removeShoppingItem = (id: string) => {
    setShoppingList(prev => prev.filter(item => item.id !== id));
  };

  const clearCompletedShopping = () => {
    setShoppingList(prev => prev.filter(item => !item.checked));
  };

  const addRecipeIngredientsToShopping = (recipe: Recipe) => {
    const newItems: ShoppingItem[] = recipe.shoppingList.map((item, index) => ({
      id: `shop-${Date.now()}-${index}`,
      name: item,
      category: 'Receta',
      checked: false,
      recipeSource: recipe.title
    }));

    // avoid duplicate exact names from same source
    setShoppingList(prev => {
      const existingNames = new Set(prev.map(p => p.name.toLowerCase()));
      const filtered = newItems.filter(n => !existingNames.has(n.name.toLowerCase()));
      return [...filtered, ...prev];
    });
  };

  const updateFoodStatus = (id: string, status: FoodTrackerItem['status'], notes?: string) => {
    setFoodsTracker(prev =>
      prev.map(food => {
        if (food.id === id) {
          return {
            ...food,
            status,
            dateTried: status !== 'untried' ? (food.dateTried || new Date().toISOString().split('T')[0]) : undefined,
            notes: notes !== undefined ? notes : food.notes
          };
        }
        return food;
      })
    );
  };

  const addCustomFood = (foodName: string, category: FoodTrackerItem['category']) => {
    if (!foodName.trim()) return;
    const categoryLabels: Record<string, string> = {
      frutas: 'Frutas',
      verduras: 'Verduras',
      cereales: 'Cereales',
      proteinas: 'Proteínas',
      grasas: 'Grasas',
      otros: 'Otros'
    };
    const newItem: FoodTrackerItem = {
      id: `food-custom-${Date.now()}`,
      foodName: foodName.trim(),
      category,
      categoryLabel: categoryLabels[category] || 'Otros',
      status: 'untried'
    };
    setFoodsTracker(prev => [...prev, newItem]);
  };

  const installAppPrompt = async () => {
    if (deferredPrompt) {
      try {
        await deferredPrompt.prompt();
        const choice = await deferredPrompt.userChoice;
        if (choice && choice.outcome === 'accepted') {
          setIsPWAInstalled(true);
        }
        setDeferredPrompt(null);
        setShowInstallModal(false);
      } catch (err) {
        console.error('PWA prompt error:', err);
      }
    } else {
      const isIframe = window.self !== window.top;
      if (isIframe) {
        window.open(window.location.href, '_blank');
      }
    }
  };

  const resetAllData = () => {
    localStorage.clear();
    setBaby(DEFAULT_BABY_PROFILE);
    setGrowthRecords(DEFAULT_GROWTH_RECORDS);
    setFavoriteIds(['rec-6-1']);
    setShoppingList([]);
    setFoodsTracker(DEFAULT_FOODS_LIST);
    setShowOnboarding(true);
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        extendedView,
        setExtendedView,
        selectedRecipeId,
        setSelectedRecipeId,
        selectedStageMonth,
        setSelectedStageMonth,
        baby,
        updateBaby,
        growthRecords,
        addGrowthRecord,
        deleteGrowthRecord,
        recipes: RECIPES_DATA,
        favoriteIds,
        toggleFavorite,
        isFavorite,
        shoppingList,
        toggleShoppingItem,
        addShoppingItem,
        removeShoppingItem,
        clearCompletedShopping,
        addRecipeIngredientsToShopping,
        foodsTracker,
        updateFoodStatus,
        addCustomFood,
        showSplash,
        setShowSplash,
        showOnboarding,
        setShowOnboarding,
        completeOnboarding,
        hasCompletedInstallGate,
        completeInstallGate,
        showInstallModal,
        setShowInstallModal,
        installAppPrompt,
        isPWAInstalled,
        isInstallable: !!deferredPrompt || isInstallable,
        resetAllData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const useAppContext = useApp;
