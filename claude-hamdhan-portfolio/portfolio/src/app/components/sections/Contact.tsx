"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  IconBrandLinkedin, IconBrandGithub, IconBrandWhatsapp,
  IconPhone, IconMail, IconSend, IconCheck,
} from "@tabler/icons-react";
 
const contactLinks = [
  {
    icon: IconBrandLinkedin,
    label: "LinkedIn",
    value: "muhammedh-hamdhan",
    href: "https://www.linkedin.com/in/muhammedh-hamdhan-811416322",
    color: "#0ea5e9",
  },
  {
    icon: IconBrandGithub,
    label: "GitHub",
    value: "muhammedhamdhan",
    href: "https://github.com/muhammedhamdhan",
    color: "#a78bfa",
  },
  {
    icon: IconBrandWhatsapp,
    label: "WhatsApp",
    value: "+94 772 994 015",
    href: "https://wa.me/94772994015",
    color: "#22c55e",
  },
  {
    icon: IconPhone,
    label: "Phone",
    value: "+94 772 994 015",
    href: "tel:+94772994015",
    color: "#f59e0b",
  },
  {
    icon: IconMail,
    label: "Email",
    value: "muhammedhamdhan@email.com",
    href: "mailto:muhammedhamdhan@email.com",
    color: "#ef4444",
  },
];
 
export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1500));
    setSent(true);
    setLoading(false);
  };
 
  return (
    <section id="contact" className="py-24 relative" style={{ background: "var(--bg-primary)" }}>
      <div className="absolute inset-0 geometric-bg opacity-40 pointer-events-none" />
 
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          <p className="text-sm font-medium mb-2 tracking-widest uppercase" style={{ color: "#60a5fa" }}>Let's Talk</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl gradient-text mb-4">Get in Touch</h2>
          <div className="w-16 h-1 mx-auto rounded-full mb-4" style={{ background: "linear-gradient(90deg, #3b82f6, #8b5cf6)" }} />
          <p className="max-w-xl mx-auto text-sm" style={{ color: "var(--text-muted)" }}>
            Have a project in mind, a job opportunity, or just want to say hi? I'd love to hear from you!
          </p>
        </motion.div>
 
        <div className="grid lg:grid-cols-[380px_1fr] gap-8">
          {/* Contact links */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}>
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-4 p-4 glass rounded-2xl transition-all duration-300 hover:scale-[1.02] group"
                style={{ border: "1px solid var(--border-subtle)" }}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08 }}
                whileHover={{ borderColor: link.color + "50" }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all"
                  style={{ background: `${link.color}15`, color: link.color }}>
                  <link.icon size={18} />
                </div>
                <div>
                  <p className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>{link.label}</p>
                  <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{link.value}</p>
                </div>
              </motion.a>
            ))}
 
            {/* Availability badge */}
            <div className="mt-4 p-4 glass rounded-2xl gradient-border">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-medium text-green-400">Available for Work</span>
              </div>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                Open to full-time, freelance, and contract opportunities. Based in Sri Lanka 🇱🇰
              </p>
            </div>
          </motion.div>
 
          {/* Contact Form */}
          <motion.div
            className="glass rounded-2xl p-8 gradient-border"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}>
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8 gap-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(34,197,94,0.15)" }}>
                  <IconCheck size={32} className="text-green-400" />
                </div>
                <h3 className="font-display font-bold text-xl gradient-text">Message Sent!</h3>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
                <button onClick={() => { setSent(false); setFormData({ name: "", email: "", subject: "", message: "" }); }}
                  className="text-sm px-4 py-2 rounded-xl transition-all hover:scale-105"
                  style={{ background: "var(--border-subtle)", color: "var(--text-secondary)" }}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-display font-bold text-xl gradient-text mb-6">Send a Message</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium mb-1.5 block" style={{ color: "var(--text-muted)" }}>Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all outline-none"
                      style={{
                        background: "rgba(59,130,246,0.05)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-primary)",
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium mb-1.5 block" style={{ color: "var(--text-muted)" }}>Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all outline-none"
                      style={{
                        background: "rgba(59,130,246,0.05)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-primary)",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium mb-1.5 block" style={{ color: "var(--text-muted)" }}>Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project inquiry / Job opportunity / Hello!"
                    className="w-full px-4 py-3 rounded-xl text-sm transition-all outline-none"
                    style={{
                      background: "rgba(59,130,246,0.05)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>
                <div>
                  <label className="text-xs font-medium mb-1.5 block" style={{ color: "var(--text-muted)" }}>Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or how I can help..."
                    className="w-full px-4 py-3 rounded-xl text-sm transition-all outline-none resize-none"
                    style={{
                      background: "rgba(59,130,246,0.05)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl text-sm font-medium text-white flex items-center justify-center gap-2 transition-all hover:scale-[1.02] hover:shadow-lg disabled:opacity-70"
                  style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}>
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                        <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <IconSend size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}