"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-white font-bold text-xl">
          Hamdhan<span className="text-blue-500">.</span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#blogs" className="hover:text-white">Blogs</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#startup" className="hover:text-white">RH Solutions</a>
          <a href="#cv" className="hover:text-white">CV</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#030712] border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-gray-300">

          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#blogs" onClick={() => setOpen(false)}>Blogs</a>
          <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
          <a href="#startup" onClick={() => setOpen(false)}>RH Solutions</a>
          <a href="#cv" onClick={() => setOpen(false)}>CV</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

        </div>
      )}
    </header>
  );
}