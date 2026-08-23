import React, { useState } from 'react';
import { FACEBOOK_GUIDANCE_LINKS, FacebookGuidanceLink } from '../data/facebookLinks';
import {
  ExternalLink,
  Share2,
  Copy,
  Check,
  Search,
  Sparkles,
  ShieldCheck,
  Heart,
  Users,
  MessageCircle,
  ArrowRight,
  Info,
  Compass
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface OrientacionesScreenProps {
  onBack?: () => void;
}

export const OrientacionesScreen: React.FC<OrientacionesScreenProps> = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todas');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'todas', label: 'Todos los canales' },
    { id: 'blw', label: 'BLW & Texturas' },
    { id: 'nutricion', label: 'Nutrición' },
    { id: 'recetas', label: 'Recetas' },
    { id: 'crianza', label: 'Crianza' },
    { id: 'comunidad', label: 'Comunidad' },
    { id: 'pediatria', label: 'Seguridad' }
  ];

  const filteredLinks = FACEBOOK_GUIDANCE_LINKS.filter(link => {
    const matchesCategory = selectedCategory === 'todas' || link.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      link.title.toLowerCase().includes(q) ||
      link.subtitle.toLowerCase().includes(q) ||
      link.description.toLowerCase().includes(q) ||
      link.topics.some(t => t.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  const handleCopy = async (link: FacebookGuidanceLink) => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(link.url);
        setCopiedId(link.id);
        setTimeout(() => setCopiedId(null), 2500);
      }
    } catch {
      // Fallback
      setCopiedId(link.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  const handleShare = async (link: FacebookGuidanceLink) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: link.title,
          text: `Te recomiendo este canal de orientación para alimentación complementaria: ${link.title}`,
          url: link.url
        });
      } catch {
        // User cancelled or share not supported
      }
    } else {
      handleCopy(link);
    }
  };

  return (
    <div id="orientaciones-screen" className="flex-1 overflow-y-auto px-4 pt-3 pb-24 no-scrollbar bg-stone-50">
      {/* 1. Header */}
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-[11px] font-bold uppercase tracking-wider border border-blue-200 mb-1">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            <span>Canales & Comunidad</span>
          </div>

          {onBack && (
            <button
              onClick={onBack}
              className="text-xs font-bold text-stone-500 hover:text-stone-800 p-1.5 rounded-xl hover:bg-stone-100 transition-colors"
            >
              Volver
            </button>
          )}
        </div>

        <h2 className="text-2xl font-black text-stone-900 tracking-tight font-display">
          Páginas de Orientación
        </h2>
        <p className="text-xs text-stone-500 font-medium mt-0.5">
          Comunidades y canales recomendados en Facebook para dudas y acompañamiento
        </p>
      </div>

      {/* 2. Hero Banner: Facebook Communities */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1877F2] via-[#0D65D9] to-[#0A4EA6] text-white p-5 shadow-lg shadow-blue-900/15 mb-4">
        <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-white/10 rounded-full blur-sm pointer-events-none" />
        <div className="absolute top-2 right-4 text-3xl opacity-25 pointer-events-none">👥</div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-xl bg-white text-[#1877F2] flex items-center justify-center font-black text-lg shadow-sm">
              f
            </div>
            <span className="text-xs font-bold uppercase tracking-wide text-blue-100">
              Red de Apoyo Pediátrico & Nutricional
            </span>
          </div>

          <h3 className="text-xl font-extrabold font-display leading-tight mb-1 text-white">
            Orientación en Vivo y Red de Madres
          </h3>
          <p className="text-xs text-blue-100/90 leading-relaxed mb-3 max-w-[300px]">
            Únete a los grupos y páginas con consejos prácticos, videos en directo, recetas de temporada y testimonios de otras familias.
          </p>

          <div className="flex items-center gap-2 text-[11px] font-semibold text-blue-100 bg-white/15 px-3 py-1.5 rounded-xl backdrop-blur-xs w-fit">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-200" />
            <span>6 Canales seleccionados de nutrición y BLW</span>
          </div>
        </div>
      </div>

      {/* 3. Search Bar */}
      <div className="relative mb-3">
        <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          id="fb-guidance-search-input"
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Buscar por tema (BLW, papillas, hierro, recetas...)"
          className="w-full pl-9.5 pr-4 py-2.5 rounded-2xl bg-white border border-stone-200/90 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 shadow-2xs transition-all"
        />
      </div>

      {/* 4. Category Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 mb-4 -mx-4 px-4">
        {categories.map(cat => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              id={`fb-filter-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap active-press transition-all shrink-0 ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white text-stone-600 border border-stone-200 hover:border-blue-300'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* 5. Links Cards List */}
      <div className="space-y-3.5 mb-6">
        <AnimatePresence>
          {filteredLinks.map((link, index) => {
            const isCopied = copiedId === link.id;

            return (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2, delay: index * 0.04 }}
                className="bg-white rounded-3xl p-4.5 border border-stone-200/90 shadow-2xs hover:border-blue-300 transition-all space-y-3"
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-11 h-11 rounded-2xl ${link.bgColor} ${link.color} flex items-center justify-center text-xl shrink-0 border ${link.borderColor} shadow-2xs`}
                    >
                      {link.icon}
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 flex-wrap mb-0.5">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.2 rounded-md">
                          {link.categoryLabel}
                        </span>
                        <span className="text-[10px] font-bold text-stone-500 bg-stone-100 px-2 py-0.2 rounded-md">
                          {link.badge}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-stone-900 font-display leading-snug">
                        {link.title}
                      </h4>
                      <p className="text-[11px] text-stone-500 font-medium">
                        {link.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-stone-600 leading-relaxed bg-stone-50/80 p-3 rounded-2xl border border-stone-100">
                  {link.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">
                    Qué encontrarás en esta página:
                  </span>
                  {link.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-stone-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Topics Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {link.topics.map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-lg bg-stone-100 text-stone-600"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 border-t border-stone-100 flex items-center gap-2">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[#1877F2] hover:bg-[#0D65D9] text-white text-xs font-bold shadow-xs active-press flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>Abrir en Facebook</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={() => handleCopy(link)}
                    title="Copiar enlace"
                    className="p-2.5 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 active-press transition-colors flex items-center justify-center shrink-0"
                  >
                    {isCopied ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-stone-500" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleShare(link)}
                    title="Compartir"
                    className="p-2.5 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 active-press transition-colors flex items-center justify-center shrink-0"
                  >
                    <Share2 className="w-4 h-4 text-stone-500" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {filteredLinks.length === 0 && (
          <div className="text-center py-10 bg-white rounded-3xl border border-stone-200 p-6">
            <Compass className="w-8 h-8 text-stone-400 mx-auto mb-2" />
            <h5 className="text-sm font-bold text-stone-800">No se encontraron canales</h5>
            <p className="text-xs text-stone-500 mt-1">Prueba con otra búsqueda o categoría</p>
          </div>
        )}
      </div>

      {/* 6. Medical Advice & Community Safety Disclaimer */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-4.5 border border-amber-200/80 shadow-2xs space-y-2">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-xs font-display">
          <Info className="w-4 h-4 text-amber-700 shrink-0" />
          <span>Recomendación Pediátrica para Redes Sociales</span>
        </div>
        <p className="text-xs text-amber-950/90 leading-relaxed">
          Las orientaciones y experiencias compartidas en grupos son de carácter informativo y de apoyo entre familias. Siempre consulta con el pediatra o nutricionista infantil de tu bebé antes de realizar cambios drásticos en su alimentación o ante sospecha de alergias.
        </p>
      </div>
    </div>
  );
};
