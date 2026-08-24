import React, { useState, useRef } from 'react';
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
  CheckCircle2,
  X,
  Heart,
  ShieldCheck,
  Baby,
  Camera,
  Check,
  Activity,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { BabyChefLogo } from './BabyChefLogo';

export const HomeScreen: React.FC = () => {
  const {
    baby,
    updateBaby,
    growthRecords,
    addGrowthRecord,
    deleteGrowthRecord
  } = useApp();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [photoUploadSuccess, setPhotoUploadSuccess] = useState(false);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);

  // Form states for new measurement
  const [newWeight, setNewWeight] = useState<string>('8.2');
  const [newHeight, setNewHeight] = useState<string>('68.5');
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

  // Latest growth record evaluation
  const sortedGrowth = [...growthRecords].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const latestGrowth = sortedGrowth[0] || {
    weightKg: baby.birthWeight,
    heightCm: baby.birthHeight,
    ageMonths: age.months,
    date: baby.birthDate
  };

  const weightEval = evaluateGrowthParameter(
    latestGrowth.weightKg,
    latestGrowth.ageMonths,
    'weight',
    baby.gender
  );

  const heightEval = evaluateGrowthParameter(
    latestGrowth.heightCm,
    latestGrowth.ageMonths,
    'height',
    baby.gender
  );

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new window.Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_SIZE = 450;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_SIZE) {
            height = Math.round((height * MAX_SIZE) / width);
            width = MAX_SIZE;
          }
        } else {
          if (height > MAX_SIZE) {
            width = Math.round((width * MAX_SIZE) / height);
            height = MAX_SIZE;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const dataUrl = canvas.toDataURL('image/jpeg', 0.88);
          updateBaby({ avatar: dataUrl, photoUrl: dataUrl });
          setPhotoUploadSuccess(true);
          setTimeout(() => setPhotoUploadSuccess(false), 3500);

          try {
            confetti({
              particleCount: 50,
              spread: 60,
              origin: { y: 0.4 }
            });
          } catch (err) {
            console.error(err);
          }
        }
      };
      if (typeof event.target?.result === 'string') {
        img.src = event.target.result;
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSaveMeasurement = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(newWeight);
    const h = parseFloat(newHeight);
    const head = newHead ? parseFloat(newHead) : undefined;

    if (!w || !h) return;

    const recordDate = new Date(newDate);
    const birth = new Date(baby.birthDate);
    const diffMonths = Math.max(0, Math.round((recordDate.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24 * 30.4375)));

    addGrowthRecord({
      date: newDate,
      weightKg: w,
      heightCm: h,
      headCircumferenceCm: head,
      ageMonths: diffMonths,
      notes: newNotes.trim() || undefined
    });

    try {
      confetti({
        particleCount: 60,
        spread: 65,
        origin: { y: 0.6 }
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
      birthWeight: parseFloat(editBirthWeight) || 3.2,
      birthHeight: parseFloat(editBirthHeight) || 50
    });
    setShowEditProfileModal(false);
  };

  return (
    <div id="home-screen" className="flex-1 overflow-y-auto px-4 pt-3 pb-36 no-scrollbar bg-stone-100">
      {/* Hidden File Input for Avatar Upload */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handlePhotoUpload}
        accept="image/*"
        className="hidden"
      />

      {/* 1. App Brand Header */}
      <div className="mb-4 flex items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-stone-200 shadow-2xs">
        <div className="flex items-center gap-2.5">
          <BabyChefLogo size="sm" rounded="rounded-xl" className="shadow-2xs border-0" />
          <div>
            <h1 className="text-sm font-black text-stone-900 tracking-tight font-display leading-tight">
              Baby Chef
            </h1>
            <p className="text-[11px] text-stone-500 font-medium">
              Portada & Desarrollo del Bebé
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setEditName(baby.name);
            setEditGender(baby.gender || 'boy');
            setEditBirthDate(baby.birthDate);
            setEditBirthWeight(baby.birthWeight.toString());
            setEditBirthHeight(baby.birthHeight.toString());
            setShowEditProfileModal(true);
          }}
          className="py-1.5 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold flex items-center gap-1.5 active-press transition-colors"
        >
          <Edit2 className="w-3.5 h-3.5" />
          <span>Editar Datos</span>
        </button>
      </div>

      {/* 2. PORTADA DEL BEBÉ: Foto, Nombre, Edad y Datos Principales */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-5 bg-white rounded-3xl border border-stone-200 shadow-xs overflow-hidden"
      >
        {/* Banner Superior Decorativo */}
        <div className="bg-gradient-to-r from-[#F28B72] via-[#E06D53] to-[#C85239] p-4 text-white text-center relative">
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-black uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3" />
            <span>Perfil Oficial del Bebé</span>
          </div>

          {/* Gran Foto del Bebé */}
          <div className="relative mx-auto w-28 h-28 my-1">
            <div className="w-full h-full rounded-full bg-white p-1 shadow-lg overflow-hidden border-2 border-white/80">
              {baby.avatar || baby.photoUrl ? (
                <img
                  src={baby.avatar || baby.photoUrl}
                  alt={baby.name}
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-stone-100 flex items-center justify-center text-4xl">
                  {baby.gender === 'girl' ? '👧' : '👶'}
                </div>
              )}
            </div>

            {/* Botón de Cámara para Cambiar Foto */}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center shadow-md border-2 border-white active-press hover:bg-black transition-all"
              title="Cambiar o subir foto del bebé"
            >
              <Camera className="w-4 h-4" />
            </button>
          </div>

          {/* Nombre y Edad */}
          <h2 className="text-2xl font-black font-display tracking-tight text-white mt-1">
            {baby.name || 'Mi Bebé'}
          </h2>
          <p className="text-xs font-bold text-white/90">
            {age.displayText} ({age.months} meses de edad)
          </p>

          {photoUploadSuccess && (
            <div className="mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500 text-white text-[11px] font-bold shadow-xs">
              <Check className="w-3.5 h-3.5" />
              <span>¡Foto actualizada con éxito!</span>
            </div>
          )}
        </div>

        {/* Ficha de Datos del Bebé (Grid) */}
        <div className="p-4 bg-white">
          <div className="grid grid-cols-2 gap-2.5">
            {/* Fecha de Nacimiento */}
            <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/80">
              <div className="flex items-center gap-1.5 text-stone-500 text-[10px] font-bold uppercase tracking-wider mb-1">
                <Calendar className="w-3.5 h-3.5 text-[#E06D53]" />
                <span>Nacimiento</span>
              </div>
              <p className="text-xs font-black text-stone-900">
                {formatDateSpanish(baby.birthDate)}
              </p>
              <p className="text-[10px] text-stone-500 font-medium mt-0.5">
                Sexo: {baby.gender === 'girl' ? 'Niña 👧' : 'Niño 👦'}
              </p>
            </div>

            {/* Estado Nutricional OMS */}
            <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
              <div className="flex items-center gap-1.5 text-emerald-800 text-[10px] font-bold uppercase tracking-wider mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>Estado OMS</span>
              </div>
              <p className="text-xs font-black text-emerald-900">
                {weightEval.statusLabel}
              </p>
              <p className="text-[10px] text-emerald-700 font-medium mt-0.5">
                Percentil: {weightEval.percentileApprox} (Saludable)
              </p>
            </div>

            {/* Evolución de Peso */}
            <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/80">
              <div className="flex items-center gap-1.5 text-stone-500 text-[10px] font-bold uppercase tracking-wider mb-1">
                <Scale className="w-3.5 h-3.5 text-amber-600" />
                <span>Peso Actual</span>
              </div>
              <p className="text-base font-black text-stone-900 font-display">
                {latestGrowth.weightKg} <span className="text-xs font-bold text-stone-600">kg</span>
              </p>
              <p className="text-[10px] text-stone-500 font-medium mt-0.5">
                Al nacer: {baby.birthWeight} kg ({+(latestGrowth.weightKg - baby.birthWeight).toFixed(2)} kg)
              </p>
            </div>

            {/* Evolución de Talla */}
            <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/80">
              <div className="flex items-center gap-1.5 text-stone-500 text-[10px] font-bold uppercase tracking-wider mb-1">
                <Ruler className="w-3.5 h-3.5 text-sky-600" />
                <span>Talla Actual</span>
              </div>
              <p className="text-base font-black text-stone-900 font-display">
                {latestGrowth.heightCm} <span className="text-xs font-bold text-stone-600">cm</span>
              </p>
              <p className="text-[10px] text-stone-500 font-medium mt-0.5">
                Al nacer: {baby.birthHeight} cm (+{+(latestGrowth.heightCm - baby.birthHeight).toFixed(1)} cm)
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 3. CURVA DE DESARROLLO DEL BEBÉ */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-black text-stone-900 font-display leading-tight">
                Curva de Desarrollo
              </h3>
              <p className="text-[11px] text-stone-500 font-medium">
                Estándares Oficiales OMS (0–24 meses)
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="py-1.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black shadow-xs flex items-center gap-1 active-press transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Nueva Medición</span>
          </button>
        </div>

        {/* Gráfico Interactivo de Curvas de Crecimiento OMS */}
        <GrowthCurvesChart
          baby={baby}
          growthRecords={growthRecords}
          onAddRecord={() => setShowAddModal(true)}
        />

        {/* Historial Rápido de Registros de Crecimiento */}
        <div className="bg-white rounded-3xl border border-stone-200 p-4 shadow-xs">
          <h4 className="text-xs font-black text-stone-900 uppercase tracking-wider mb-2.5 flex items-center justify-between">
            <span>Historial de Mediciones</span>
            <span className="text-[10px] text-stone-500 font-semibold lowercase">
              {growthRecords.length} registros
            </span>
          </h4>

          <div className="space-y-2">
            {sortedGrowth.map((record) => (
              <div
                key={record.id}
                className="flex items-center justify-between p-2.5 rounded-2xl bg-stone-50 border border-stone-200/80 text-xs"
              >
                <div>
                  <div className="font-bold text-stone-900 flex items-center gap-2">
                    <span>{formatDateSpanish(record.date)}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-200/80 text-stone-700 font-semibold">
                      {record.ageMonths} meses
                    </span>
                  </div>
                  <div className="text-stone-600 text-[11px] mt-0.5 flex items-center gap-3">
                    <span>⚖️ <strong>{record.weightKg} kg</strong></span>
                    <span>📏 <strong>{record.heightCm} cm</strong></span>
                    {record.headCircumferenceCm && (
                      <span>🧠 <strong>{record.headCircumferenceCm} cm</strong></span>
                    )}
                  </div>
                </div>

                {growthRecords.length > 1 && (
                  <button
                    onClick={() => deleteGrowthRecord(record.id)}
                    className="p-1.5 text-stone-400 hover:text-rose-600 rounded-lg active-press"
                    title="Eliminar registro"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal: Registrar Nueva Medición */}
      <AnimatePresence>
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4 animate-fadeIn">
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 260 }}
              className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl p-5 shadow-2xl border border-stone-200 max-h-[90vh] overflow-y-auto no-scrollbar safe-bottom"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-stone-900 font-display leading-tight">
                      Nueva Medición
                    </h3>
                    <p className="text-[11px] text-stone-500">
                      Actualiza la curva de desarrollo de {baby.name}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="p-2 text-stone-400 hover:text-stone-700 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveMeasurement} className="space-y-3.5 text-left">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Fecha de Medición
                  </label>
                  <input
                    type="date"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    required
                    className="w-full p-2.5 rounded-xl border border-stone-200 text-xs font-medium text-stone-900 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Peso Actual (kg)
                    </label>
                    <input
                      type="number"
                      step="0.05"
                      min="1"
                      max="30"
                      value={newWeight}
                      onChange={(e) => setNewWeight(e.target.value)}
                      required
                      placeholder="Ej. 8.2"
                      className="w-full p-2.5 rounded-xl border border-stone-200 text-xs font-bold text-stone-900 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Talla / Longitud (cm)
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      min="35"
                      max="120"
                      value={newHeight}
                      onChange={(e) => setNewHeight(e.target.value)}
                      required
                      placeholder="Ej. 68.5"
                      className="w-full p-2.5 rounded-xl border border-stone-200 text-xs font-bold text-stone-900 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Perímetro Cefálico (cm - Opcional)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="25"
                    max="60"
                    value={newHead}
                    onChange={(e) => setNewHead(e.target.value)}
                    placeholder="Ej. 43.5"
                    className="w-full p-2.5 rounded-xl border border-stone-200 text-xs font-medium text-stone-900 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Notas o Consulta Pediátrica
                  </label>
                  <input
                    type="text"
                    value={newNotes}
                    onChange={(e) => setNewNotes(e.target.value)}
                    placeholder="Ej. Control de los 7 meses con el pediatra"
                    className="w-full p-2.5 rounded-xl border border-stone-200 text-xs font-medium text-stone-900 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs rounded-xl shadow-md shadow-emerald-700/20 active-press transition-all flex items-center justify-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    <span>GUARDAR Y ACTUALIZAR CURVA</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal: Editar Datos del Bebé */}
      <AnimatePresence>
        {showEditProfileModal && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4 animate-fadeIn">
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 260 }}
              className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl p-5 shadow-2xl border border-stone-200 max-h-[90vh] overflow-y-auto no-scrollbar safe-bottom"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#E06D53]/15 text-[#E06D53] flex items-center justify-center">
                    <Edit2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-stone-900 font-display leading-tight">
                      Editar Datos de la Portada
                    </h3>
                    <p className="text-[11px] text-stone-500">
                      Modifica la información básica de tu bebé
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowEditProfileModal(false)}
                  className="p-2 text-stone-400 hover:text-stone-700 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveProfile} className="space-y-3 text-left">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Nombre del Bebé
                  </label>
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    required
                    className="w-full p-2.5 rounded-xl border border-stone-200 text-xs font-bold text-stone-900 focus:outline-none focus:border-[#E06D53]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Sexo
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setEditGender('boy')}
                      className={`p-2.5 rounded-xl text-xs font-bold border flex items-center justify-center gap-1.5 transition-all ${
                        editGender === 'boy'
                          ? 'bg-amber-50 border-amber-500 text-amber-900 shadow-2xs'
                          : 'bg-stone-50 border-stone-200 text-stone-600'
                      }`}
                    >
                      <span>👦 Niño</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditGender('girl')}
                      className={`p-2.5 rounded-xl text-xs font-bold border flex items-center justify-center gap-1.5 transition-all ${
                        editGender === 'girl'
                          ? 'bg-rose-50 border-rose-500 text-rose-900 shadow-2xs'
                          : 'bg-stone-50 border-stone-200 text-stone-600'
                      }`}
                    >
                      <span>👧 Niña</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Fecha de Nacimiento
                  </label>
                  <input
                    type="date"
                    value={editBirthDate}
                    onChange={(e) => setEditBirthDate(e.target.value)}
                    required
                    className="w-full p-2.5 rounded-xl border border-stone-200 text-xs font-medium text-stone-900 focus:outline-none focus:border-[#E06D53]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Peso al Nacer (kg)
                    </label>
                    <input
                      type="number"
                      step="0.05"
                      value={editBirthWeight}
                      onChange={(e) => setEditBirthWeight(e.target.value)}
                      required
                      className="w-full p-2.5 rounded-xl border border-stone-200 text-xs font-medium text-stone-900 focus:outline-none focus:border-[#E06D53]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Talla al Nacer (cm)
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      value={editBirthHeight}
                      onChange={(e) => setEditBirthHeight(e.target.value)}
                      required
                      className="w-full p-2.5 rounded-xl border border-stone-200 text-xs font-medium text-stone-900 focus:outline-none focus:border-[#E06D53]"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#E06D53] hover:bg-[#DE5D43] text-white font-black text-xs rounded-xl shadow-md shadow-[#E06D53]/25 active-press transition-all flex items-center justify-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    <span>GUARDAR CAMBIOS</span>
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
