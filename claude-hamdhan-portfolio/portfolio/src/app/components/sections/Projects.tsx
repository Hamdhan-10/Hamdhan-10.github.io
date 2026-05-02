"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
 
const projects = [
  {
    title: "RH Solution Startup",
    description: "A technology startup delivering web development, IT infrastructure, networking, and digital transformation services. Building smart business solutions for companies across Sri Lanka.",
    tech: ["Business", "Web Dev", "Networking", "IT Services"],
    emoji: "🚀",
    color: "#3b82f6",
    github: "https://github.com/muhammedhamdhan",
    demo: "#startup",
    featured: true,
  },
  {
    title: "Smart Medicine Box",
    description: "An IoT-powered automated medicine dispenser with scheduled alerts, dosage tracking, and real-time health monitoring. Built with Arduino and mobile app integration to ensure patients never miss medication.",
    tech: ["IoT", "Arduino", "C++", "Mobile App", "Bluetooth"],
    emoji: "💊",
    color: "#22c55e",
    github: "https://github.com/muhammedhamdhan",
    demo: null,
  },
  {
    title: "Drowsiness Detection System",
    description: "An AI-powered real-time driver drowsiness detection system using computer vision and OpenCV. Detects eye closure patterns and issues audio/visual alerts to prevent accidents.",
    tech: ["Python", "OpenCV", "AI/ML", "TensorFlow", "dlib"],
    emoji: "👁️",
    color: "#8b5cf6",
    github: "https://github.com/muhammedhamdhan",
    demo: null,
  },
  {
    title: "Task Management System",
    description: "A full-featured project and task management platform built with Laravel. Features user roles, project boards, deadline tracking, team collaboration, and detailed analytics dashboards.",
    tech: ["Laravel", "PHP", "MySQL", "TailwindCSS", "Alpine.js"],
    emoji: "✅",
    color: "#f59e0b",
    github: "https://github.com/muhammedhamdhan",
    demo: null,
  },
];
 
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
 
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative glass rounded-2xl overflow-hidden gradient-border hover:scale-[1.02] transition-transform duration-300"
      style={{ cursor: "default" }}
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), ${project.color}15, transparent 40%)` }}
      />
 
      {/* Top color bar */}
      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}44)` }} />
 
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-3xl w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: `${project.color}18`, border: `1px solid ${project.color}30` }}>
              {project.emoji}
            </div>
            <div>
              <h3 className="font-display font-bold text-lg" style={{ color: "var(--text-primary)" }}>
                {project.title}
              </h3>
              {project.featured && (
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(59,130,246,0.1)", color: "#60a5fa" }}>
                  Featured
                </span>
              )}
            </div>
          </div>
        </div>
 
        {/* Description */}
        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
          {project.description}
        </p>
 
        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}>
              {t}
            </span>
          ))}
        </div>
 
        {/* Links */}
        <div className="flex items-center gap-3 pt-3 border-t" style={{ borderColor: "var(--border-subtle)" }}>
          <a href={project.github} target="_blank" rel="noopener"
            className="flex items-center gap-1.5 text-xs font-medium transition-all hover:text-blue-400"
            style={{ color: "var(--text-muted)" }}>
            <IconBrandGithub size={14} />
            GitHub
          </a>
          {project.demo && (
            <a href={project.demo}
              className="flex items-center gap-1.5 text-xs font-medium transition-all hover:text-blue-400"
              style={{ color: "var(--text-muted)" }}>
              <IconExternalLink size={14} />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
 
export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
 
  return (
    <section id="projects" className="py-24 relative" style={{ background: "var(--bg-primary)" }}>
      <div className="absolute inset-0 geometric-bg opacity-50 pointer-events-none" />
 
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          <p className="text-sm font-medium mb-2 tracking-widest uppercase" style={{ color: "#60a5fa" }}>What I've Built</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl gradient-text mb-4">Projects</h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #3b82f6, #8b5cf6)" }} />
          <p className="mt-4 max-w-2xl mx-auto text-base" style={{ color: "var(--text-muted)" }}>
            A selection of real-world projects spanning IoT, AI, web development, and enterprise systems.
          </p>
        </motion.div>
 
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
 
        {/* CTA */}
        <motion.div className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}>
          <a href="https://github.com/muhammedhamdhan" target="_blank" rel="noopener"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all hover:scale-105"
            style={{ background: "var(--border-subtle)", color: "var(--text-secondary)", border: "1px solid var(--border-subtle)" }}>
            <IconBrandGithub size={16} />
            View all projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}