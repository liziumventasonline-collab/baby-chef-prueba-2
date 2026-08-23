import React from 'react';
import { motion } from 'motion/react';

export const SplashScreen: React.FC = () => {
  return (
    <div
      id="splash-screen"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#FAF7F2] via-[#FDF5F1] to-[#FCEEEA] px-6 text-center select-none"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center"
      >
        {/* App Logo Container */}
        <div className="relative mb-6">
          <div className="absolute -inset-2 rounded-3xl bg-[#E06D53]/15 blur-xl animate-pulse" />
          <div className="relative w-28 h-28 rounded-3xl shadow-xl shadow-[#E06D53]/20 bg-white p-2 flex items-center justify-center border-2 border-white/60 overflow-hidden">
            <img
              src="/logo.png"
              alt="Baby Chef Logo"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-3xl font-extrabold text-[#292524] tracking-tight font-display mb-2">
          BABY CHEF
        </h1>

        {/* Tagline */}
        <p className="text-sm font-medium text-[#78716C] max-w-[260px] leading-relaxed">
          Alimentación complementaria, paso a paso.
        </p>

        {/* Elegant loading spinner */}
        <div className="mt-10 flex items-center gap-1.5">
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.2, delay: 0 }}
            className="w-2.5 h-2.5 rounded-full bg-[#E06D53]"
          />
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }}
            className="w-2.5 h-2.5 rounded-full bg-[#E06D53]"
          />
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }}
            className="w-2.5 h-2.5 rounded-full bg-[#E06D53]"
          />
        </div>
      </motion.div>

      {/* Bottom Footer Note */}
      <div className="absolute bottom-8 text-[11px] font-semibold tracking-wider text-[#A8A29E] uppercase">
        Guía Nutricional Pediátrica
      </div>
    </div>
  );
};
