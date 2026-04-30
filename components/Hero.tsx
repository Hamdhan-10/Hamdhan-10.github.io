"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold gradient"
      >
        Muhammed Hamdhan
      </motion.h1>

      <p className="mt-4 text-lg">
        Software Engineering Undergraduate | IT Administrator
      </p>

      <p className="text-gray-400 mt-2">
        “Building smart solutions with modern technology”
      </p>

      <div className="mt-6 flex gap-4">
        <button className="glass px-6 py-3">Projects</button>
        <button className="glass px-6 py-3">Contact</button>
      </div>

    </section>
  );
}