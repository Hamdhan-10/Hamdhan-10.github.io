"use client";
import Link from "next/link";
import { IconBrandLinkedin, IconBrandGithub, IconBrandWhatsapp, IconHeart } from "@tabler/icons-react";
 
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t" style={{ borderColor: "var(--border-subtle)", background: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-display font-bold text-white"
              style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}>
              MH
            </div>
            <div>
              <p className="font-display font-semibold" style={{ color: "var(--text-primary)" }}>Muhammed Hamdhan</p>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>Software Engineer & IT Administrator</p>
            </div>
          </div>
 
          {/* Links */}
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/muhammedh-hamdhan-811416322" target="_blank" rel="noopener"
              className="p-2 rounded-lg transition-all hover:scale-110 hover:text-blue-400"
              style={{ color: "var(--text-muted)", background: "var(--border-subtle)" }}>
              <IconBrandLinkedin size={18} />
            </a>
            <a href="https://github.com/muhammedhamdhan" target="_blank" rel="noopener"
              className="p-2 rounded-lg transition-all hover:scale-110 hover:text-blue-400"
              style={{ color: "var(--text-muted)", background: "var(--border-subtle)" }}>
              <IconBrandGithub size={18} />
            </a>
            <a href="https://wa.me/94772994015" target="_blank" rel="noopener"
              className="p-2 rounded-lg transition-all hover:scale-110 hover:text-green-400"
              style={{ color: "var(--text-muted)", background: "var(--border-subtle)" }}>
              <IconBrandWhatsapp size={18} />
            </a>
          </div>
 
          {/* Copyright */}
          <p className="text-xs flex items-center gap-1" style={{ color: "var(--text-muted)" }}>
            © {year} Made with <IconHeart size={12} className="text-red-400" /> by Muhammed Hamdhan
          </p>
        </div>
      </div>
    </footer>
  );
}