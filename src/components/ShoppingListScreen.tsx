import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  ArrowLeft,
  CheckSquare,
  Square,
  Plus,
  Trash2,
  ShoppingBag,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ShoppingListScreen: React.FC = () => {
  const {
    shoppingList,
    toggleShoppingItem,
    addShoppingItem,
    removeShoppingItem,
    clearCompletedShopping,
    setExtendedView
  } = useApp();

  const [newItemName, setNewItemName] = useState('');
  const [newItemAmount, setNewItemAmount] = useState('');

  const pendingItems = shoppingList.filter(item => !item.checked);
  const completedItems = shoppingList.filter(item => item.checked);

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim()) return;
    addShoppingItem(newItemName, newItemAmount || undefined);
    setNewItemName('');
    setNewItemAmount('');
  };

  return (
    <div id="shopping-list-screen" className="flex-1 overflow-y-auto px-4 pt-3 pb-36 no-scrollbar">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <button
            id="shopping-back-btn"
            onClick={() => setExtendedView('none')}
            className="p-2 -ml-2 text-[#57534E] hover:text-[#292524] rounded-full active-press"
            aria-label="Volver"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-2xl font-bold text-[#292524] tracking-tight font-display">
              Lista del Súper
            </h2>
            <p className="text-xs text-[#78716C]">
              {pendingItems.length} pendientes · {completedItems.length} listos
            </p>
          </div>
        </div>

        {completedItems.length > 0 && (
          <button
            id="clear-completed-btn"
            onClick={clearCompletedShopping}
            className="text-xs font-bold text-[#DE5D43] hover:underline p-1.5 active-press"
          >
            Limpiar listos
          </button>
        )}
      </div>

      {/* Quick Add Custom Item Form */}
      <form onSubmit={handleAddCustom} className="bg-white p-3 rounded-2xl border border-[#E7E5E4] shadow-xs mb-4 flex gap-2">
        <input
          id="new-shopping-item-input"
          type="text"
          value={newItemName}
          onChange={e => setNewItemName(e.target.value)}
          placeholder="Añadir ingrediente o alimento..."
          className="flex-1 px-3 py-2 text-xs font-medium bg-[#FAF7F2] rounded-xl border border-[#E7E5E4] focus:outline-none focus:border-[#E06D53]"
        />
        <input
          type="text"
          value={newItemAmount}
          onChange={e => setNewItemAmount(e.target.value)}
          placeholder="Cant. (ej. 2u)"
          className="w-24 px-3 py-2 text-xs font-medium bg-[#FAF7F2] rounded-xl border border-[#E7E5E4] focus:outline-none focus:border-[#E06D53]"
        />
        <button
          type="submit"
          disabled={!newItemName.trim()}
          className="w-9 h-9 rounded-xl bg-[#E06D53] disabled:opacity-40 text-white flex items-center justify-center shrink-0 active-press"
        >
          <Plus className="w-4 h-4" />
        </button>
      </form>

      {/* Shopping Items List */}
      {shoppingList.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#FCEEEA] flex items-center justify-center text-3xl mb-3 text-[#DE5D43]">
            🛒
          </div>
          <h3 className="text-base font-bold text-[#292524] mb-1 font-display">
            Tu lista de compras está vacía
          </h3>
          <p className="text-xs text-[#78716C] max-w-xs leading-relaxed">
            Puedes agregar ingredientes directamente desde las recetas o escribirlos arriba.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Pending Section */}
          {pendingItems.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#78716C] uppercase tracking-wider px-1">
                Por comprar ({pendingItems.length})
              </h4>
              {pendingItems.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  className="flex items-center justify-between p-3 rounded-2xl bg-white border border-[#E7E5E4] shadow-xs"
                >
                  <button
                    onClick={() => toggleShoppingItem(item.id)}
                    className="flex-1 flex items-center gap-3 text-left active-press"
                  >
                    <Square className="w-5 h-5 text-[#A8A29E] shrink-0" />
                    <div>
                      <span className="text-xs font-semibold text-[#292524] block">
                        {item.name}
                      </span>
                      {item.recipeSource && (
                        <span className="text-[10px] text-[#78716C]">
                          De: {item.recipeSource}
                        </span>
                      )}
                    </div>
                  </button>

                  <div className="flex items-center gap-2">
                    {item.amount && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-lg bg-[#FAF7F2] text-[#57534E] border border-[#E7E5E4]">
                        {item.amount}
                      </span>
                    )}
                    <button
                      onClick={() => removeShoppingItem(item.id)}
                      className="p-1.5 text-[#A8A29E] hover:text-[#DC2626] rounded-lg active-press"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Completed Section */}
          {completedItems.length > 0 && (
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold text-[#4A7C59] uppercase tracking-wider px-1">
                En el carrito ({completedItems.length})
              </h4>
              {completedItems.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  className="flex items-center justify-between p-3 rounded-2xl bg-[#F5F5F4]/70 border border-[#E7E5E4]"
                >
                  <button
                    onClick={() => toggleShoppingItem(item.id)}
                    className="flex-1 flex items-center gap-3 text-left active-press"
                  >
                    <CheckSquare className="w-5 h-5 text-[#4A7C59] shrink-0" />
                    <span className="text-xs font-medium text-[#A8A29E] line-through">
                      {item.name}
                    </span>
                  </button>

                  <button
                    onClick={() => removeShoppingItem(item.id)}
                    className="p-1.5 text-[#A8A29E] hover:text-[#DC2626] rounded-lg active-press"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
