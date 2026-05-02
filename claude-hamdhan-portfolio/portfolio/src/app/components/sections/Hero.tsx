"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { IconBrandLinkedin, IconBrandGithub, IconBrandWhatsapp, IconDownload, IconArrowRight } from "@tabler/icons-react";
import Link from "next/link"  ;
 
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden geometric-bg"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute rounded-full blur-[120px] opacity-20"
          style={{
            width: 600,
            height: 600,
            top: "10%",
            left: "-10%",
            background: "radial-gradient(circle, #3b82f6, transparent)",
          }}
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full blur-[120px] opacity-20"
          style={{
            width: 500,
            height: 500,
            top: "40%",
            right: "-5%",
            background: "radial-gradient(circle, #8b5cf6, transparent)",
          }}
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Islamic-inspired geometric pattern */}
        <div className="absolute inset-0 islamic-pattern opacity-30" />
      </div>
 
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-6"
            style={{
              background: "rgba(59, 130, 246, 0.1)",
              border: "1px solid rgba(59, 130, 246, 0.3)",
              color: "#60a5fa",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </motion.div>
 
          {/* Name */}
          <motion.h1
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-none mb-4"
            style={{ color: "var(--text-primary)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Muhammed
            <br />
            <span className="gradient-text">Hamdhan</span>
          </motion.h1>
 
          {/* Animated Title */}
          <motion.div
            className="text-lg sm:text-xl font-medium mb-4 h-8"
            style={{ color: "var(--text-secondary)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                "Software Engineering Undergraduate",
                2000,
                "IT Administrator",
                2000,
                "IoT Developer",
                2000,
                "Web Developer",
                2000,
                "AI Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
 
          {/* Tagline */}
          <motion.p
            className="text-base sm:text-lg mb-8 max-w-lg mx-auto lg:mx-0"
            style={{ color: "var(--text-muted)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            "Building smart solutions with modern technology"
            <br />
            <span className="text-sm italic">— Crafting the future, one line at a time</span>
          </motion.p>
 
          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="#contact"
              className="group px-6 py-3 rounded-xl font-medium text-sm text-white flex items-center gap-2 transition-all hover:scale-105 hover:shadow-lg"
              style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}
            >
              Get in Touch
              <IconArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl font-medium text-sm transition-all hover:scale-105 gradient-border"
              style={{ color: "var(--text-primary)", background: "var(--bg-card)" }}
            >
              View Projects
            </a>
            <a
              href="/Muhammed_Hamdhan_CV.pdf"
              download
              className="px-6 py-3 rounded-xl font-medium text-sm flex items-center gap-2 transition-all hover:scale-105"
              style={{ color: "var(--text-secondary)", background: "var(--border-subtle)" }}
            >
              <IconDownload size={16} />
              Resume
            </a>
          </motion.div>
 
          {/* Social Links */}
          <motion.div
            className="flex gap-3 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { icon: IconBrandLinkedin, href: "https://www.linkedin.com/in/muhammedh-hamdhan-811416322", color: "#0ea5e9" },
              { icon: IconBrandGithub, href: "https://github.com/muhammedhamdhan", color: "#a78bfa" },
              { icon: IconBrandWhatsapp, href: "https://wa.me/94772994015", color: "#22c55e" },
            ].map(({ icon: Icon, href, color }, i) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{ color: "var(--text-secondary)", background: "var(--border-subtle)", border: "1px solid var(--border-subtle)" }}
                whileHover={{ color, borderColor: color }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>
 
        {/* Right — Avatar / Visual */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
        >
          <div className="relative">
            {/* Orbiting rings */}
            {[160, 200, 240].map((size, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border border-blue-500/20"
                style={{
                  width: size,
                  height: size,
                  top: "50%",
                  left: "50%",
                  x: "-50%",
                  y: "-50%",
                }}
                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
              />
            ))}
 
            {/* Avatar circle */}
            <div
              className="relative w-48 h-48 rounded-full flex items-center justify-center text-5xl font-display font-bold text-white"
              style={{
                background: "linear-gradient(135deg, #1d4ed8, #7c3aed)",
                boxShadow: "0 0 60px rgba(59, 130, 246, 0.4), 0 0 120px rgba(139, 92, 246, 0.2)",
              }}
            >
              MH
              {/* Floating orbit dot */}
              <motion.div
                className="absolute w-4 h-4 rounded-full bg-blue-400"
                style={{ top: 0, left: "50%", x: "-50%" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "50% 96px" }}
              />
            </div>
 
            {/* Floating tags */}
            {[
              { label: "Laravel", top: "-10%", right: "-20%" },
              { label: "IoT", bottom: "10%", right: "-25%" },
              { label: "AI / ML", bottom: "-5%", left: "-20%" },
              { label: "React", top: "10%", left: "-25%" },
            ].map(({ label, ...pos }, i) => (
              <motion.div
                key={label}
                className="absolute px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  ...pos,
                  background: "rgba(6,13,26,0.9)",
                  border: "1px solid rgba(59,130,246,0.3)",
                  color: "#60a5fa",
                  backdropFilter: "blur(10px)",
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
              >
                {label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
 
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>Scroll down</span>
        <div className="w-5 h-8 rounded-full border flex items-start justify-center p-1" style={{ borderColor: "var(--border-subtle)" }}>
          <motion.div
            className="w-1 h-2 rounded-full bg-blue-400"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}