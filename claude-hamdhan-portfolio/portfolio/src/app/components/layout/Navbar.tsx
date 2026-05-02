"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { IconSun, IconMoon, IconMenu2, IconX } from "@tabler/icons-react";
 
interface NavbarProps {
  theme: "dark" | "light";
  setTheme: (t: "dark" | "light") => void;
}
 
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#startup", label: "Startup" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];
 
export default function Navbar({ theme, setTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(2, 4, 9, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(59, 130, 246, 0.1)" : "none",
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-display font-bold text-white"
              style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}
            >
              MH
            </div>
            <span className="font-display font-semibold text-sm hidden sm:block" style={{ color: "var(--text-primary)" }}>
              Hamdhan
            </span>
          </Link>
 
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:text-blue-400"
                style={{ color: "var(--text-secondary)" }}
                onClick={link.href.startsWith("#") ? undefined : undefined}
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/blog"
              className="ml-2 px-4 py-1.5 rounded-lg text-sm font-medium text-white transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}
            >
              Blog →
            </Link>
          </div>
 
          {/* Right side */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg transition-all hover:scale-110"
              style={{ color: "var(--text-secondary)", background: "var(--border-subtle)" }}
            >
              {theme === "dark" ? <IconSun size={18} /> : <IconMoon size={18} />}
            </button>
            <button
              className="md:hidden p-2 rounded-lg"
              style={{ color: "var(--text-secondary)" }}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>
 
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0" style={{ background: "rgba(2,4,9,0.95)", backdropFilter: "blur(20px)" }}>
              <div className="flex flex-col items-center justify-center h-full gap-8">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="text-2xl font-display font-semibold"
                    style={{ color: "var(--text-primary)" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}