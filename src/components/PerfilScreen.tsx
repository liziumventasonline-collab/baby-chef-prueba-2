import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { calculateBabyAge, formatDateSpanish } from '../utils/helpers';
import { GrowthCurvesChart } from './GrowthCurvesChart';
import { evaluateGrowthParameter } from '../data/whoGrowthStandards';
import {
  Scale,
  Ruler,
  Calendar,
  Plus,
  TrendingUp,
  Sparkles,
  Edit2,
  Trash2,
  CheckCircle,
  X,
  Heart,
  ShieldCheck,
  Baby,
  Activity,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';

export const PerfilScreen: React.FC = () => {
  const {
    baby,
    updateBaby,
    growthRecords,
    addGrowthRecord,
    deleteGrowthRecord,
    setShowOnboarding,
    foodsTracker
  } = useApp();

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);

  // Form states for new measurement
  const [newWeight, setNewWeight] = useState<string>('8.1');
  const [newHeight, setNewHeight] = useState<string>('68');
  const [newHead, setNewHead] = useState<string>('43.5');
  const [newDate, setNewDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [newNotes, setNewNotes] = useState<string>('');

  // Form states for edit profile
  const [editName, setEditName] = useState(baby.name);
  const [editGender, setEditGender] = useState<'boy' | 'girl'>(baby.gender || 'boy');
  const [editBirthDate, setEditBirthDate] = useState(baby.birthDate);
  const [editBirthWeight, setEditBirthWeight] = useState(baby.birthWeight.toString());
  const [editBirthHeight, setEditBirthHeight] = useState(baby.birthHeight.toString());

  const age = calculateBabyAge(baby.birthDate);

  // Sort growth records by date descending for display
  const sortedRecords = [...growthRecords].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const latestRecord = sortedRecords[0] || {
    weightKg: baby.birthWeight,
    heightCm: baby.birthHeight,
    headCircumferenceCm: 35,
    date: baby.birthDate,
    ageMonths: 0
  };

  // Weight and height gained since birth
  const weightDiff = (latestRecord.weightKg - baby.birthWeight).toFixed(2);
  const heightDiff = (latestRecord.heightCm - baby.birthHeight).toFixed(1);

  // Evaluation of latest weight
  const latestWeightEvaluation = evaluateGrowthParameter(
    latestRecord.weightKg,
    latestRecord.ageMonths,
    'weight',
    baby.gender
  );

  const handleSaveMeasurement = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(newWeight);
    const h = parseFloat(newHeight);
    const head = newHead ? parseFloat(newHead) : undefined;

    if (isNaN(w) || isNaN(h)) return;

    addGrowthRecord({
      date: newDate,
      ageMonths: age.months,
      weightKg: w,
      heightCm: h,
      headCircumferenceCm: head,
      notes: newNotes.trim() || undefined
    });

    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (err) {
      console.error(err);
    }

    setShowAddModal(false);
    setNewNotes('');
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateBaby({
      name: editName.trim() || 'Mi Bebé',
      gender: editGender,
      birthDate: editBirthDate,
      birthWeight: parseFloat(editBirthWeight) || baby.birthWeight,
      birthHeight: parseFloat(editBirthHeight) || baby.birthHeight
    });
    setShowEditProfileModal(false);
  };

  const acceptedFoodsCount = foodsTracker.filter(f => f.status === 'accepted').length;

  return (
    <div id="perfil-screen" className="flex-1 overflow-y-auto px-4 pt-3 pb-24 no-scrollbar">
      {/* Title */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-[#292524] tracking-tight font-display">
            Control de Crecimiento
          </h2>
          <p className="text-xs text-[#78716C]">
            Ficha pediátrica, carnet de salud y curvas OMS
          </p>
        </div>

        <button
          id="perfil-edit-btn"
          onClick={() => {
            setEditName(baby.name);
            setEditGender(baby.gender || 'boy');
            setEditBirthDate(baby.birthDate);
            setEditBirthWeight(baby.birthWeight.toString());
            setEditBirthHeight(baby.birthHeight.toString());
            setShowEditProfileModal(true);
          }}
          className="p-2 rounded-xl bg-white border border-[#E7E5E4] text-[#57534E] active-press flex items-center gap-1 text-xs font-semibold shadow-2xs hover:text-[#292524]"
        >
          <Edit2 className="w-3.5 h-3.5" />
          <span>Editar</span>
        </button>
      </div>

      {/* 1. Header Baby Avatar Card */}
      <div className="bg-gradient-to-b from-[#FFFDF9] to-[#FCEEEA] rounded-3xl p-6 border border-[#F28B72]/30 shadow-sm text-center mb-5 relative overflow-hidden">
        <div className="relative inline-block mb-3">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#F28B72] to-[#DE5D43] p-1 shadow-md mx-auto">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-4xl overflow-hidden">
              {baby.avatar ? (
                <img src={baby.avatar} alt={baby.name} className="w-full h-full object-cover" />
              ) : (
                <span>{baby.gender === 'girl' ? '👧' : '👶'}</span>
              )}
            </div>
          </div>
          <span className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-[#4A7C59] border-2 border-white flex items-center justify-center text-white text-xs">
            ✓
          </span>
        </div>

        <h3 className="text-2xl font-extrabold text-[#292524] font-display flex items-center justify-center gap-2">
          <span>{baby.name || 'Mi Bebé'}</span>
          <span className="text-sm font-bold px-2 py-0.5 rounded-full bg-white/80 border border-[#E7E5E4] text-stone-600">
            {baby.gender === 'girl' ? 'Niña ♀' : 'Niño ♂'}
          </span>
        </h3>
        <p className="text-sm font-semibold text-[#DE5D43] mt-0.5">
          {age.displayText} de edad
        </p>

        {/* Badges */}
        <div className="flex items-center justify-center gap-2 mt-3 text-xs flex-wrap">
          <span className="px-3 py-1 rounded-full bg-white border border-[#E7E5E4] text-[#57534E] font-medium shadow-2xs">
            🥣 {age.months >= 6 ? 'En alimentación complementaria' : 'Lactancia exclusiva'}
          </span>
          <span className="px-3 py-1 rounded-full bg-[#EAF2EB] text-[#2D5A3C] font-semibold">
            😋 {acceptedFoodsCount} alimentos probados
          </span>
        </div>
      </div>

      {/* 2. Datos al Nacer */}
      <div className="bg-white rounded-3xl p-5 border border-[#E7E5E4] shadow-xs mb-5">
        <div className="flex items-center gap-2 mb-3.5">
          <div className="w-8 h-8 rounded-xl bg-[#FCEEEA] text-[#DE5D43] flex items-center justify-center">
            <Baby className="w-4 h-4" />
          </div>
          <h4 className="text-base font-bold text-[#292524] font-display">
            Datos al nacer
          </h4>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          <div className="bg-[#FAF7F2] p-3 rounded-2xl border border-[#E7E5E4]/80 text-center">
            <Scale className="w-4 h-4 text-[#DE5D43] mx-auto mb-1" />
            <span className="text-[10px] uppercase font-bold text-[#A8A29E] block">
              Peso
            </span>
            <span className="text-sm font-bold text-[#292524]">
              {baby.birthWeight.toFixed(2)} kg
            </span>
          </div>

          <div className="bg-[#FAF7F2] p-3 rounded-2xl border border-[#E7E5E4]/80 text-center">
            <Ruler className="w-4 h-4 text-[#4A7C59] mx-auto mb-1" />
            <span className="text-[10px] uppercase font-bold text-[#A8A29E] block">
              Talla
            </span>
            <span className="text-sm font-bold text-[#292524]">
              {baby.birthHeight} cm
            </span>
          </div>

          <div className="bg-[#FAF7F2] p-3 rounded-2xl border border-[#E7E5E4]/80 text-center">
            <Calendar className="w-4 h-4 text-[#0284C7] mx-auto mb-1" />
            <span className="text-[10px] uppercase font-bold text-[#A8A29E] block">
              Fecha
            </span>
            <span className="text-[11px] font-bold text-[#292524] truncate block">
              {baby.birthDate ? formatDateSpanish(baby.birthDate) : 'N/A'}
            </span>
          </div>
        </div>
      </div>

      {/* 3. Official WHO Growth Curves Section (Carnet de Vacunación / Salud) */}
      <div className="mb-5">
        <GrowthCurvesChart
          baby={baby}
          growthRecords={growthRecords}
          onAddRecord={() => setShowAddModal(true)}
        />
      </div>

      {/* 4. Crecimiento: Métricas Actuales & Historial */}
      <div className="bg-white rounded-3xl p-5 border border-[#E7E5E4] shadow-xs mb-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#EAF2EB] text-[#4A7C59] flex items-center justify-center">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#292524] font-display">
                Controles Registrados
              </h4>
              <p className="text-[11px] text-[#78716C]">
                Última revisión: {formatDateSpanish(latestRecord.date)}
              </p>
            </div>
          </div>

          <button
            id="perfil-add-measurement-btn"
            onClick={() => setShowAddModal(true)}
            className="py-2 px-3 rounded-xl bg-[#E06D53] hover:bg-[#DE5D43] text-white text-xs font-bold active-press flex items-center gap-1 shadow-xs transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>+ Registrar control</span>
          </button>
        </div>

        {/* Current Big Metrics Card */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-4">
          <div className="bg-[#FFFDF9] p-3.5 rounded-2xl border border-[#F28B72]/30">
            <span className="text-[10px] uppercase font-bold text-[#78716C] block mb-1">
              Peso actual
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-[#292524]">
                {latestRecord.weightKg.toFixed(2)}
              </span>
              <span className="text-xs font-semibold text-[#78716C]">kg</span>
            </div>
            <span className="text-[11px] font-bold text-[#4A7C59] block mt-1">
              +{weightDiff} kg desde nacer
            </span>
          </div>

          <div className="bg-[#FFFDF9] p-3.5 rounded-2xl border border-[#F28B72]/30">
            <span className="text-[10px] uppercase font-bold text-[#78716C] block mb-1">
              Talla actual
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-[#292524]">
                {latestRecord.heightCm}
              </span>
              <span className="text-xs font-semibold text-[#78716C]">cm</span>
            </div>
            <span className="text-[11px] font-bold text-[#4A7C59] block mt-1">
              +{heightDiff} cm desde nacer
            </span>
          </div>

          {latestRecord.headCircumferenceCm ? (
            <div className="bg-[#FFFDF9] p-3.5 rounded-2xl border border-[#F28B72]/30 col-span-2 sm:col-span-1">
              <span className="text-[10px] uppercase font-bold text-[#78716C] block mb-1">
                P. Cefálico
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-[#292524]">
                  {latestRecord.headCircumferenceCm}
                </span>
                <span className="text-xs font-semibold text-[#78716C]">cm</span>
              </div>
              <span className="text-[11px] font-bold text-blue-600 block mt-1">
                Control neurológico
              </span>
            </div>
          ) : null}
        </div>

        {/* Measurement History Log */}
        <h5 className="text-xs font-bold text-[#78716C] uppercase tracking-wider mb-2.5">
          Historial de controles pediátricos
        </h5>

        <div className="space-y-2 max-h-72 overflow-y-auto no-scrollbar">
          {sortedRecords.map(record => {
            const statusEval = evaluateGrowthParameter(
              record.weightKg,
              record.ageMonths,
              'weight',
              baby.gender
            );

            return (
              <div
                key={record.id}
                className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E7E5E4]/80 text-xs space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${statusEval.badgeBg} shrink-0`}
                      title={statusEval.statusLabel}
                    />
                    <span className="font-bold text-[#292524]">
                      {formatDateSpanish(record.date)}
                    </span>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-stone-200/80 text-stone-700">
                      {record.ageMonths} meses
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-[#292524]">
                      {record.weightKg} kg • {record.heightCm} cm
                    </span>

                    {growthRecords.length > 1 && (
                      <button
                        onClick={() => deleteGrowthRecord(record.id)}
                        className="p-1 text-[#A8A29E] hover:text-[#DC2626] rounded-lg active-press transition-colors"
                        aria-label="Eliminar registro"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1 border-t border-stone-200/60">
                  <span>{record.notes || 'Control pediátrico de rutina'}</span>
                  <span className={`font-bold ${statusEval.textColor}`}>
                    {statusEval.percentileApprox}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal: Add New Measurement */}
      <AnimatePresence>
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-xs p-4">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-[#E7E5E4]"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-[#292524] font-display">
                    Registrar control pediátrico
                  </h3>
                  <p className="text-xs text-stone-500">
                    Introduce las medidas del carnet de salud
                  </p>
                </div>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="p-1 text-[#78716C] hover:text-[#292524] rounded-full active-press"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveMeasurement} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#57534E] mb-1">
                    Fecha del control
                  </label>
                  <input
                    type="date"
                    value={newDate}
                    max={new Date().toISOString().split('T')[0]}
                    onChange={e => setNewDate(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#E7E5E4] text-sm font-semibold"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#57534E] mb-1">
                      Peso actual (kg)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min="1"
                      max="25"
                      value={newWeight}
                      onChange={e => setNewWeight(e.target.value)}
                      required
                      placeholder="Ej. 7.95"
                      className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#E7E5E4] text-sm font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#57534E] mb-1">
                      Talla actual (cm)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      min="35"
                      max="110"
                      value={newHeight}
                      onChange={e => setNewHeight(e.target.value)}
                      required
                      placeholder="Ej. 67.5"
                      className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#E7E5E4] text-sm font-semibold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#57534E] mb-1">
                    Perímetro cefálico (cm) <span className="text-stone-400 font-normal">(Opcional)</span>
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="25"
                    max="60"
                    value={newHead}
                    onChange={e => setNewHead(e.target.value)}
                    placeholder="Ej. 43.5"
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#E7E5E4] text-sm font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#57534E] mb-1">
                    Notas o lugar de revisión
                  </label>
                  <input
                    type="text"
                    value={newNotes}
                    onChange={e => setNewNotes(e.target.value)}
                    placeholder="Ej. Control 6 meses pediatra"
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#E7E5E4] text-sm font-medium"
                  />
                </div>

                <div className="pt-2 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="flex-1 py-3 rounded-xl border border-[#E7E5E4] text-xs font-bold text-[#78716C] active-press"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-[#E06D53] hover:bg-[#DE5D43] text-white text-xs font-bold rounded-xl shadow-md active-press"
                  >
                    Guardar control
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal: Edit Profile */}
      <AnimatePresence>
        {showEditProfileModal && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-xs p-4">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-[#E7E5E4]"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-[#292524] font-display">
                  Editar perfil del bebé
                </h3>
                <button
                  onClick={() => setShowEditProfileModal(false)}
                  className="p-1 text-[#78716C] hover:text-[#292524] rounded-full active-press"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveProfile} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#57534E] mb-1">
                    Nombre del bebé
                  </label>
                  <input
                    type="text"
                    value={editName}
                    onChange={e => setEditName(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#E7E5E4] text-sm font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#57534E] mb-1">
                    Sexo del bebé (Ajusta las curvas OMS)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setEditGender('boy')}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                        editGender === 'boy'
                          ? 'bg-blue-50 border-blue-400 text-blue-800 shadow-2xs font-extrabold'
                          : 'bg-[#FAF7F2] border-[#E7E5E4] text-stone-600'
                      }`}
                    >
                      👶 Niño ♂
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditGender('girl')}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                        editGender === 'girl'
                          ? 'bg-rose-50 border-rose-400 text-rose-800 shadow-2xs font-extrabold'
                          : 'bg-[#FAF7F2] border-[#E7E5E4] text-stone-600'
                      }`}
                    >
                      👧 Niña ♀
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#57534E] mb-1">
                    Fecha de nacimiento
                  </label>
                  <input
                    type="date"
                    value={editBirthDate}
                    max={new Date().toISOString().split('T')[0]}
                    onChange={e => setEditBirthDate(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#E7E5E4] text-sm font-semibold"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#57534E] mb-1">
                      Peso al nacer (kg)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={editBirthWeight}
                      onChange={e => setEditBirthWeight(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#E7E5E4] text-sm font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#57534E] mb-1">
                      Talla al nacer (cm)
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      value={editBirthHeight}
                      onChange={e => setEditBirthHeight(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#E7E5E4] text-sm font-semibold"
                    />
                  </div>
                </div>

                <div className="pt-2 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setShowEditProfileModal(false)}
                    className="flex-1 py-3 rounded-xl border border-[#E7E5E4] text-xs font-bold text-[#78716C] active-press"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-[#E06D53] hover:bg-[#DE5D43] text-white text-xs font-bold rounded-xl shadow-md active-press"
                  >
                    Guardar cambios
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
