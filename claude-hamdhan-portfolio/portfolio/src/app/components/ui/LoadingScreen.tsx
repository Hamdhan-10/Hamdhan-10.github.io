"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
 
export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + Math.random() * 15;
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);
 
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
        style={{ background: "var(--bg-primary)" }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Animated geometric background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-blue-500/10 rounded-full"
              style={{
                width: `${(i + 1) * 120}px`,
                height: `${(i + 1) * 120}px`,
                top: "50%",
                left: "50%",
                x: "-50%",
                y: "-50%",
              }}
              animate={{ rotate: 360, scale: [1, 1.02, 1] }}
              transition={{
                rotate: { duration: 8 + i * 3, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
            />
          ))}
        </div>
 
        {/* Logo / Initials */}
        <motion.div
          className="relative z-10 mb-8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-display font-bold text-white"
            style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}>
            MH
          </div>
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}
            animate={{ opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
 
        {/* Name */}
        <motion.p
          className="font-display font-bold text-xl mb-2"
          style={{ color: "var(--text-primary)" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Muhammed Hamdhan
        </motion.p>
        <motion.p
          className="text-sm mb-8"
          style={{ color: "var(--text-muted)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Building smart solutions...
        </motion.p>
 
        {/* Progress bar */}
        <div className="w-48 h-1 rounded-full overflow-hidden" style={{ background: "var(--border-subtle)" }}>
          <motion.div
            className="h-full rounded-full"
            style={{ background: "linear-gradient(90deg, #3b82f6, #8b5cf6)", width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
        <motion.p className="text-xs mt-2" style={{ color: "var(--text-muted)" }}>
          {Math.min(Math.round(progress), 100)}%
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}