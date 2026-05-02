"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
 
const skills = [
  { name: "Laravel / PHP", level: 85, color: "#ef4444" },
  { name: "Web Development", level: 88, color: "#3b82f6" },
  { name: "IoT Systems", level: 80, color: "#22c55e" },
  { name: "Networking / IT Admin", level: 82, color: "#f59e0b" },
  { name: "AI / Machine Learning", level: 65, color: "#8b5cf6" },
  { name: "React / Next.js", level: 75, color: "#06b6d4" },
];
 
const techStack = [
  "Laravel", "PHP", "React", "Next.js", "TailwindCSS", "MySQL",
  "Python", "IoT", "Arduino", "Cisco Networking", "Linux", "Git",
];
 
function SkillBar({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
 
  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{skill.name}</span>
        <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--border-subtle)" }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}
 
export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
 
  return (
    <section id="about" className="py-24 relative" style={{ background: "var(--bg-secondary)" }}>
      {/* Subtle pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-20 pointer-events-none" />
 
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium mb-2 tracking-widest uppercase" style={{ color: "#60a5fa" }}>Who I Am</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl gradient-text mb-4">About Me</h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #3b82f6, #8b5cf6)" }} />
        </motion.div>
 
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 gradient-border">
              <h3 className="font-display font-bold text-xl mb-4 gradient-text">Professional Summary</h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                I&apos;m <strong style={{ color: "var(--text-primary)" }}>Muhammed Hamdhan</strong>, a passionate Software Engineering
                undergraduate with hands-on experience as an IT Administrator. I specialize in building
                modern web applications, IoT systems, and smart tech solutions that solve real-world problems.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                As the founder of <span className="text-blue-400 font-medium">RH Solution</span>, I lead a startup
                delivering cutting-edge technology services including web development, networking, and digital
                transformation for businesses in Sri Lanka and beyond.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                I combine academic knowledge with practical field experience — from configuring enterprise networks
                to deploying AI-powered systems. My goal is to bridge the gap between technology and everyday life.
              </p>
 
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { value: "3+", label: "Years Experience" },
                  { value: "10+", label: "Projects Built" },
                  { value: "2+", label: "Companies" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-3 rounded-xl" style={{ background: "rgba(59,130,246,0.07)" }}>
                    <p className="font-display font-bold text-2xl gradient-text">{stat.value}</p>
                    <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
 
            {/* Tech Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(59,130,246,0.08)",
                    border: "1px solid rgba(59,130,246,0.2)",
                    color: "var(--text-secondary)",
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.04 }}
                  whileHover={{ scale: 1.08, color: "#60a5fa", borderColor: "#3b82f6" }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
 
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="glass rounded-2xl p-8 gradient-border">
              <h3 className="font-display font-bold text-xl mb-6 gradient-text">Technical Skills</h3>
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} index={i} />
              ))}
            </div>
 
            {/* Education card */}
            <motion.div
              className="mt-6 glass rounded-2xl p-6 gradient-border"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <h3 className="font-display font-bold text-lg mb-4 gradient-text">Education</h3>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-lg"
                  style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}>
                  🎓
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
                    BSc. Software Engineering (Undergraduate)
                  </p>
                  <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>
                    Currently pursuing degree in Software Engineering
                  </p>
                  <span className="text-xs mt-2 inline-block px-2 py-0.5 rounded"
                    style={{ background: "rgba(59,130,246,0.1)", color: "#60a5fa" }}>
                    In Progress
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}