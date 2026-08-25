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
  Award,
  Download
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
    deleteGrowthRecord,
    setActiveTab,
    setExtendedView,
    isPWAInstalled,
    isInstallable,
    installAppPrompt,
    setShowInstallModal
  } = useApp();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [photoUploadSuccess, setPhotoUploadSuccess] = useState(false);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);

  // Form states for new measurement
  const [newWeight, setNewWeight] = useState<string>('');
  const [newHeight, setNewHeight] = useState<string>('');
  const [newHead, setNewHead] = useState<string>('');
  const [newDate, setNewDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [newNotes, setNewNotes] = useState<string>('');

  const openAddMeasurementModal = () => {
    const sorted = [...growthRecords].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const latest = sorted[0];
    setNewWeight(latest ? latest.weightKg.toString() : baby.birthWeight.toString());
    setNewHeight(latest ? latest.heightCm.toString() : baby.birthHeight.toString());
    setNewHead(latest?.headCircumferenceCm ? latest.headCircumferenceCm.toString() : '');
    setNewDate(new Date().toISOString().split('T')[0]);
    setNewNotes('');
    setShowAddModal(true);
  };

  // Form states for edit profile
  const [editName, setEditName] = useState(baby.name);
  const [editGender, setEditGender] = useState<'boy' | 'girl'>(baby.gender || 'boy');
  const [editBirthDate, setEditBirthDate] = useState(baby.birthDate);
  const [editBirthWeight, setEditBirthWeight] = useState(baby.birthWeight.toString());
  const [editBirthHeight, setEditBirthHeight] = useState(baby.birthHeight.toString());
  const [activeEditField, setActiveEditField] = useState<'name' | 'birthDate' | 'birthWeight' | 'birthHeight' | 'gender' | 'all'>('all');

  const openEditModalForField = (field: 'name' | 'birthDate' | 'birthWeight' | 'birthHeight' | 'gender' | 'all') => {
    setEditName(baby.name);
    setEditGender(baby.gender || 'boy');
    setEditBirthDate(baby.birthDate);
    setEditBirthWeight(baby.birthWeight.toString());
    setEditBirthHeight(baby.birthHeight.toString());
    setActiveEditField(field);
    setShowEditProfileModal(true);
  };

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
    <div id="home-screen" className="flex-1 overflow-y-auto px-4 pt-3 pb-36 no-scrollbar baby-clouds-pattern">
      {/* Hidden File Input for Avatar Upload */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handlePhotoUpload}
        accept="image/*"
        className="hidden"
      />

      {/* PWA 1-Click Install Card (shown if not installed) */}
      {!isPWAInstalled && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 p-3.5 rounded-3xl bg-gradient-to-r from-[#FF7043] via-[#FF5722] to-[#E64A19] text-white shadow-md flex items-center justify-between gap-3 border border-rose-200/40 relative overflow-hidden"
        >
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-xl shrink-0 shadow-2xs border border-white/30">
              📲
            </div>
            <div>
              <h4 className="text-xs font-black font-display text-white leading-tight">
                Instalar Baby Chef en tu celular
              </h4>
              <p className="text-[10.5px] text-white/90 font-medium">
                Acceso directo con 1 toque sin abrir navegador
              </p>
            </div>
          </div>

          <button
            id="home-install-pwa-btn"
            type="button"
            onClick={() => {
              if (isInstallable) {
                installAppPrompt();
              } else {
                setShowInstallModal(true);
              }
            }}
            className="py-2 px-3.5 bg-white hover:bg-white/90 text-[#E64A19] text-xs font-black rounded-xl shadow-xs shrink-0 active-press transition-all flex items-center gap-1 relative z-10"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Instalar</span>
          </button>
        </motion.div>
      )}

      {/* PORTADA DEL BEBÉ: Foto, Nombre, Edad y Datos con botón de edición individual (lapicito) */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-5 bg-white/95 rounded-3xl border border-rose-100 shadow-md overflow-hidden relative"
      >
        {/* Banner Superior Decorativo */}
        <div className="bg-gradient-to-r from-[#FF6B4A] via-[#FF7D54] to-[#FFA07A] p-4 text-white text-center relative overflow-hidden">
          {/* Subtle Decorative Baby Circles in banner */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-xs pointer-events-none" />
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white/10 rounded-full blur-xs pointer-events-none" />

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10.5px] font-black uppercase tracking-wider mb-2 shadow-2xs border border-white/20">
            <Sparkles className="w-3 h-3 text-amber-200" />
            <span>Perfil & Desarrollo del Bebé</span>
          </div>

          {/* Gran Foto del Bebé con su botón de edición (lapicito y cámara) */}
          <div className="relative mx-auto w-28 h-28 my-1">
            <div
              onClick={() => fileInputRef.current?.click()}
              className="w-full h-full rounded-full bg-white p-1 shadow-lg overflow-hidden border-2 border-white/90 cursor-pointer active-press group transition-transform hover:scale-105 ring-4 ring-amber-300/40"
              title="Toca para cambiar la foto de tu bebé"
            >
              {baby.avatar || baby.photoUrl ? (
                <img
                  src={baby.avatar || baby.photoUrl}
                  alt={baby.name}
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-amber-50 flex items-center justify-center text-4xl">
                  {baby.gender === 'girl' ? '👧' : '👶'}
                </div>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity rounded-full flex flex-col items-center justify-center text-white">
                <Edit2 className="w-5 h-5 drop-shadow-sm" />
                <span className="text-[9px] font-bold mt-0.5">Editar</span>
              </div>
            </div>

            {/* Botón Lapicito / Cámara para Cambiar Foto */}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF7043] to-[#E64A19] text-white flex items-center justify-center shadow-md border-2 border-white active-press hover:scale-110 transition-all"
              title="Editar foto del bebé"
              aria-label="Editar foto del bebé"
            >
              <Edit2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Nombre y su Lapicito para Editar */}
          <div className="flex items-center justify-center gap-2 mt-1.5">
            <h2 className="text-2xl font-black font-display tracking-tight text-white drop-shadow-2xs">
              {baby.name || 'Mi Bebé'}
            </h2>
            <button
              type="button"
              onClick={() => openEditModalForField('name')}
              className="w-7 h-7 rounded-full bg-white/25 hover:bg-white/40 text-white flex items-center justify-center transition-colors active-press shadow-xs backdrop-blur-xs border border-white/30"
              title="Editar nombre del bebé"
              aria-label="Editar nombre del bebé"
            >
              <Edit2 className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-xs font-bold text-white/95 mt-0.5 drop-shadow-2xs">
            {age.displayText} ({age.months} meses de edad)
          </p>

          {photoUploadSuccess && (
            <div className="mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500 text-white text-[11px] font-bold shadow-xs">
              <Check className="w-3.5 h-3.5" />
              <span>¡Foto actualizada con éxito!</span>
            </div>
          )}
        </div>

        {/* Ficha de Datos del Bebé (Grid) - Cada dato con su lapicito de edición */}
        <div className="p-4 bg-white/90">
          <div className="space-y-2.5">
            {/* Fecha de Nacimiento y Sexo con su lapicito */}
            <div className="p-3 rounded-2xl bg-gradient-to-br from-[#FFF6F3] to-[#FFEBE5] border border-rose-200/80 shadow-2xs">
              <div className="flex items-center justify-between gap-1 mb-1">
                <div className="flex items-center gap-1.5 text-[#DE5D43] text-[10px] font-black uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5 text-[#E06D53]" />
                  <span>Fecha de Nacimiento & Sexo</span>
                </div>
                <button
                  type="button"
                  onClick={() => openEditModalForField('birthDate')}
                  className="w-6 h-6 rounded-lg bg-white/90 hover:bg-white text-rose-700 shadow-2xs flex items-center justify-center active-press transition-colors border border-rose-200/60"
                  title="Editar fecha de nacimiento y sexo"
                  aria-label="Editar fecha de nacimiento"
                >
                  <Edit2 className="w-3 h-3" />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs font-black text-stone-900">
                  {formatDateSpanish(baby.birthDate)}
                </p>
                <p className="text-[11px] text-rose-700 font-bold bg-white/80 px-2 py-0.5 rounded-lg border border-rose-200/50">
                  {baby.gender === 'girl' ? 'Niña 👧' : 'Niño 👦'}
                </p>
              </div>
            </div>

            {/* 2 Columnas para Peso y Talla */}
            <div className="grid grid-cols-2 gap-2.5">
              {/* Evolución de Peso con su lapicito */}
              <div className="p-3 rounded-2xl bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7] border border-amber-200/80 shadow-2xs">
                <div className="flex items-center justify-between gap-1 mb-1">
                  <div className="flex items-center gap-1.5 text-amber-800 text-[10px] font-black uppercase tracking-wider">
                    <Scale className="w-3.5 h-3.5 text-amber-600" />
                    <span>Peso Actual</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => openEditModalForField('birthWeight')}
                    className="w-6 h-6 rounded-lg bg-white/90 hover:bg-white text-amber-700 shadow-2xs flex items-center justify-center active-press transition-colors border border-amber-200/60"
                    title="Editar peso al nacer"
                    aria-label="Editar peso"
                  >
                    <Edit2 className="w-3 h-3" />
                  </button>
                </div>
                <p className="text-base font-black text-amber-950 font-display">
                  {latestGrowth.weightKg} <span className="text-xs font-bold text-amber-800">kg</span>
                </p>
                <p className="text-[10px] text-amber-700 font-bold mt-0.5">
                  Al nacer: {baby.birthWeight} kg ({+(latestGrowth.weightKg - baby.birthWeight).toFixed(2)} kg)
                </p>
              </div>

              {/* Evolución de Talla con su lapicito */}
              <div className="p-3 rounded-2xl bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE] border border-sky-200/80 shadow-2xs">
                <div className="flex items-center justify-between gap-1 mb-1">
                  <div className="flex items-center gap-1.5 text-sky-800 text-[10px] font-black uppercase tracking-wider">
                    <Ruler className="w-3.5 h-3.5 text-sky-600" />
                    <span>Talla Actual</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => openEditModalForField('birthHeight')}
                    className="w-6 h-6 rounded-lg bg-white/90 hover:bg-white text-sky-700 shadow-2xs flex items-center justify-center active-press transition-colors border border-sky-200/60"
                    title="Editar talla al nacer"
                    aria-label="Editar talla"
                  >
                    <Edit2 className="w-3 h-3" />
                  </button>
                </div>
                <p className="text-base font-black text-sky-950 font-display">
                  {latestGrowth.heightCm} <span className="text-xs font-bold text-sky-800">cm</span>
                </p>
                <p className="text-[10px] text-sky-700 font-bold mt-0.5">
                  Al nacer: {baby.birthHeight} cm (+{+(latestGrowth.heightCm - baby.birthHeight).toFixed(1)} cm)
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 3. CURVA DE DESARROLLO DEL BEBÉ */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-xs">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-black text-stone-900 font-display leading-tight">
                Curva de Desarrollo
              </h3>
              <p className="text-[11px] text-emerald-700 font-bold">
                Estándares Oficiales OMS (0–24 meses)
              </p>
            </div>
          </div>

          <button
            onClick={openAddMeasurementModal}
            className="py-1.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-95 text-white text-xs font-black shadow-xs flex items-center gap-1 active-press transition-all"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Nueva Medición</span>
          </button>
        </div>

        {/* Gráfico Interactivo de Curvas de Crecimiento OMS */}
        <GrowthCurvesChart
          baby={baby}
          growthRecords={growthRecords}
          onAddRecord={openAddMeasurementModal}
        />

        {/* Historial Rápido de Registros de Crecimiento */}
        <div className="bg-white/95 rounded-3xl border border-rose-100 p-4 shadow-sm">
          <h4 className="text-xs font-black text-stone-900 uppercase tracking-wider mb-2.5 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <span>📋</span>
              <span>Historial de Mediciones</span>
            </span>
            <span className="text-[10px] text-rose-600 font-bold px-2 py-0.5 bg-rose-50 rounded-full border border-rose-100">
              {growthRecords.length} registros
            </span>
          </h4>

          <div className="space-y-2">
            {sortedGrowth.map((record) => (
              <div
                key={record.id}
                className="flex items-center justify-between p-2.5 rounded-2xl bg-gradient-to-r from-[#FFFDFC] to-[#FAF7F2] border border-rose-100/70 text-xs shadow-2xs hover:border-rose-200 transition-all"
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

        {/* Planner Semanal (24 Semanas) Banner */}
        <div
          onClick={() => setActiveTab('planner')}
          className="mt-4 p-4 rounded-3xl bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 text-white shadow-xs active-press cursor-pointer flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-xl shrink-0">
              🍼
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/20 text-white">
                Planificador Nutricional
              </span>
              <h3 className="text-xs font-black leading-tight text-white mt-0.5">
                Bebé Feliz en la Mesa · Planner (24 Semanas)
              </h3>
              <p className="text-[11px] text-teal-100 font-medium">
                Tablas completas y listas de compras ilustradas (6 a 24 meses)
              </p>
            </div>
          </div>
          <span className="py-1.5 px-3 rounded-xl bg-white text-stone-900 text-xs font-black shadow-2xs shrink-0">
            Abrir →
          </span>
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
