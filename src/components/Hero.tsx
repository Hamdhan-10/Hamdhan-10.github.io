"use client";
import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#030712] overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-blue-400 text-xs font-medium mb-8">
             
            <span>System Architecture & Development</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6">
            Muhammed <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Hamdhan</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Software Engineering Undergraduate & IT Administrator. 
            Designing robust systems and building smart solutions with modern technology.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href='#projects'
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-x1 font-bold flex items-center gap-2 transition-all hover-scale-105 active:scale-95 shadow-lg shadow-blue-500/20"
              >
                Explore Projects <ArrowRight size={18}/>
              </a>
            <a
              href='#startup'
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-x1 font-bold transition-all flex items-center gap-2"
              >
                <Shield size={18} /> IT Services
              </a> 
          </div>
        </motion.div>
      </div>
    </section>
  );
}