"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
 
const services = [
  { emoji: "🌐", title: "Web Development", desc: "Modern, fast, and responsive websites and web applications built with the latest tech." },
  { emoji: "🔌", title: "IT Infrastructure", desc: "Network setup, server management, and complete IT infrastructure deployment." },
  { emoji: "📡", title: "IoT Solutions", desc: "Custom IoT systems and smart automation for homes and businesses." },
  { emoji: "🤖", title: "AI Integration", desc: "Integrating AI tools and machine learning to automate and optimize business processes." },
  { emoji: "🛡️", title: "Cybersecurity", desc: "Security audits, firewall setup, and data protection strategies." },
  { emoji: "📱", title: "Digital Transformation", desc: "Helping businesses go digital with modern tools, platforms, and strategies." },
];
 
export default function Startup() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
 
  return (
    <section id="startup" className="py-24 relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-10"
          style={{ background: "radial-gradient(circle, #3b82f6 0%, #8b5cf6 50%, transparent 70%)" }} />
        <div className="absolute inset-0 geometric-bg opacity-40" />
      </div>
 
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          <p className="text-sm font-medium mb-2 tracking-widest uppercase" style={{ color: "#60a5fa" }}>My Startup</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl gradient-text mb-4">RH Solution</h2>
          <div className="w-16 h-1 mx-auto rounded-full mb-4" style={{ background: "linear-gradient(90deg, #3b82f6, #8b5cf6)" }} />
          <p className="max-w-2xl mx-auto text-base" style={{ color: "var(--text-muted)" }}>
            A technology startup building smart digital solutions for businesses and individuals.
          </p>
        </motion.div>
 
        {/* Vision / Mission Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            {
              title: "🌟 Our Vision",
              text: "To become the leading technology partner for businesses in Sri Lanka, delivering innovative digital solutions that drive growth, efficiency, and transformation in the modern era.",
              color: "#3b82f6",
            },
            {
              title: "🎯 Our Mission",
              text: "To empower businesses with cutting-edge web development, IoT systems, IT infrastructure, and AI-powered tools — making advanced technology accessible, affordable, and impactful for all.",
              color: "#8b5cf6",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="glass rounded-2xl p-8 gradient-border"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <h3 className="font-display font-bold text-xl mb-3" style={{ color: item.color }}>{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.text}</p>
            </motion.div>
          ))}
        </div>
 
        {/* Services Grid */}
        <motion.h3
          className="font-display font-bold text-2xl text-center mb-8 gradient-text"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          Our Services
        </motion.h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group glass rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] cursor-default"
              style={{ border: "1px solid var(--border-subtle)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.08 }}
              whileHover={{ borderColor: "rgba(59,130,246,0.4)" }}
            >
              <div className="text-3xl mb-3">{service.emoji}</div>
              <h4 className="font-display font-semibold text-sm mb-2" style={{ color: "var(--text-primary)" }}>{service.title}</h4>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{service.desc}</p>
            </motion.div>
          ))}
        </div>
 
        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 glass rounded-2xl p-8 gradient-border">
            <div className="text-left">
              <p className="font-display font-bold text-lg" style={{ color: "var(--text-primary)" }}>Ready to work together?</p>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>Let's build something amazing for your business.</p>
            </div>
            <a href="#contact"
              className="px-6 py-3 rounded-xl text-sm font-medium text-white whitespace-nowrap flex-shrink-0 transition-all hover:scale-105 hover:shadow-lg"
              style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}>
              Get a Free Consultation →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}