"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
 
const experiences = [
  {
    id: "it-admin",
    role: "IT Administrator",
    company: "ABC Company",
    period: "2023 – Present",
    type: "Full-time",
    emoji: "🖥️",
    color: "#3b82f6",
    description:
      "Managing and maintaining the company's entire IT infrastructure including servers, networks, and workstations. Responsible for cybersecurity, user support, system upgrades, and ensuring 99.9% uptime across all critical systems.",
    achievements: [
      "Configured and maintained enterprise Cisco network infrastructure",
      "Implemented cybersecurity protocols reducing incidents by 60%",
      "Managed Windows Server, Active Directory, and cloud services",
      "Provided tier-1 and tier-2 helpdesk support for 50+ users",
      "Deployed and maintained surveillance and access control systems",
    ],
    skills: ["Cisco Networking", "Windows Server", "Active Directory", "Cybersecurity", "Linux", "VPN"],
  },
  {
    id: "rahath",
    role: "IT & Tech Coordinator",
    company: "Rahath Travels and Tours",
    period: "2022 – 2023",
    type: "Part-time",
    emoji: "✈️",
    color: "#8b5cf6",
    description:
      "Provided IT support and digital services for a premier Umrah and Hajj travel agency. Managed their digital presence, built the company website, and streamlined booking and customer management systems.",
    achievements: [
      "Developed and deployed the company website using Laravel",
      "Digitized manual booking processes into an online system",
      "Managed social media and digital marketing campaigns",
      "Implemented customer database and CRM workflows",
      "Provided IT training and support to staff",
    ],
    skills: ["Laravel", "Web Development", "MySQL", "Social Media", "IT Support"],
  },
];
 
export default function Experience() {
  const [active, setActive] = useState("it-admin");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const current = experiences.find((e) => e.id === active)!;
 
  return (
    <section id="experience" className="py-24 relative" style={{ background: "var(--bg-secondary)" }}>
      <div className="absolute inset-0 islamic-pattern opacity-20 pointer-events-none" />
 
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          <p className="text-sm font-medium mb-2 tracking-widest uppercase" style={{ color: "#60a5fa" }}>Work History</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl gradient-text mb-4">Experience</h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #3b82f6, #8b5cf6)" }} />
        </motion.div>
 
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Tabs */}
          <motion.div
            className="flex lg:flex-col gap-3"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}>
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActive(exp.id)}
                className="relative text-left p-4 rounded-2xl transition-all duration-300 w-full group"
                style={{
                  background: active === exp.id ? `${exp.color}12` : "var(--bg-card)",
                  border: `1px solid ${active === exp.id ? exp.color + "40" : "var(--border-subtle)"}`,
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${exp.color}15` }}>
                    {exp.emoji}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm truncate" style={{ color: active === exp.id ? "var(--text-primary)" : "var(--text-secondary)" }}>
                      {exp.role}
                    </p>
                    <p className="text-xs truncate" style={{ color: "var(--text-muted)" }}>{exp.company}</p>
                  </div>
                </div>
                {active === exp.id && (
                  <motion.div
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full"
                    style={{ background: exp.color }}
                    layoutId="activeTab"
                  />
                )}
              </button>
            ))}
          </motion.div>
 
          {/* Content */}
          <motion.div
            key={active}
            className="glass rounded-2xl p-8 gradient-border"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}>
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="font-display font-bold text-2xl mb-1" style={{ color: "var(--text-primary)" }}>
                  {current.role}
                </h3>
                <p className="font-medium" style={{ color: current.color }}>{current.company}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-sm px-3 py-1 rounded-full"
                  style={{ background: `${current.color}15`, color: current.color, border: `1px solid ${current.color}30` }}>
                  {current.period}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "var(--border-subtle)", color: "var(--text-muted)" }}>
                  {current.type}
                </span>
              </div>
            </div>
 
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              {current.description}
            </p>
 
            <h4 className="font-display font-semibold text-sm mb-3" style={{ color: "var(--text-primary)" }}>Key Achievements</h4>
            <ul className="space-y-2 mb-6">
              {current.achievements.map((ach, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-2 text-sm"
                  style={{ color: "var(--text-secondary)" }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}>
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: current.color }} />
                  {ach}
                </motion.li>
              ))}
            </ul>
 
            <div className="flex flex-wrap gap-2">
              {current.skills.map((skill) => (
                <span key={skill} className="text-xs px-2 py-1 rounded-lg font-medium"
                  style={{ background: `${current.color}12`, color: current.color, border: `1px solid ${current.color}25` }}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}