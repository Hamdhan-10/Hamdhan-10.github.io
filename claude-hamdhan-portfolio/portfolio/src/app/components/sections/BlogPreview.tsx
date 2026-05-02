"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
 
const samplePosts = [
  {
    slug: "top-ai-tools-2026",
    title: "Top AI Tools in 2026 Every Developer Must Know",
    excerpt: "From code assistants to design generators, these AI tools are transforming how developers build software in 2026.",
    tags: ["AI", "Tools", "Productivity"],
    date: "2026-04-15",
    readTime: "6 min read",
    emoji: "🤖",
    color: "#3b82f6",
  },
  {
    slug: "beginner-guide-machine-learning",
    title: "A Beginner's Guide to Machine Learning",
    excerpt: "Confused about where to start with ML? This guide breaks down the core concepts, algorithms, and tools you need to get started.",
    tags: ["Machine Learning", "AI", "Beginner"],
    date: "2026-03-20",
    readTime: "8 min read",
    emoji: "🧠",
    color: "#8b5cf6",
  },
  {
    slug: "developers-use-ai-faster",
    title: "How Developers Can Use AI to Work 10x Faster",
    excerpt: "Practical tips and tools to supercharge your development workflow with GitHub Copilot, Claude, and other AI assistants.",
    tags: ["AI", "Developer", "Productivity"],
    date: "2026-02-10",
    readTime: "5 min read",
    emoji: "⚡",
    color: "#f59e0b",
  },
];
 
export default function BlogPreview() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
 
  return (
    <section id="blog" className="py-24 relative" style={{ background: "var(--bg-secondary)" }}>
      <div className="absolute inset-0 islamic-pattern opacity-20 pointer-events-none" />
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          <div>
            <p className="text-sm font-medium mb-1 tracking-widest uppercase" style={{ color: "#60a5fa" }}>Tech Insights</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl gradient-text">Latest Articles</h2>
          </div>
          <Link href="/blog"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-105 whitespace-nowrap"
            style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", color: "#fff" }}>
            View All Posts
            <IconArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
 
        <div className="grid md:grid-cols-3 gap-6">
          {samplePosts.map((post, i) => (
            <motion.div
              key={post.slug}
              className="group glass rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
              style={{ border: "1px solid var(--border-subtle)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
              whileHover={{ borderColor: post.color + "60" }}
            >
              {/* Color top bar */}
              <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${post.color}, ${post.color}44)` }} />
              
              {/* Emoji cover */}
              <div className="flex items-center justify-center py-8 text-5xl"
                style={{ background: `${post.color}08` }}>
                {post.emoji}
              </div>
 
              <div className="p-5">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{ background: `${post.color}15`, color: post.color }}>
                      {tag}
                    </span>
                  ))}
                </div>
 
                <h3 className="font-display font-bold text-base mb-2 leading-snug line-clamp-2"
                  style={{ color: "var(--text-primary)" }}>
                  {post.title}
                </h3>
 
                <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: "var(--text-muted)" }}>
                  {post.excerpt}
                </p>
 
                <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: "var(--border-subtle)" }}>
                  <div className="flex items-center gap-2">
                    <span className="text-xs" style={{ color: "var(--text-muted)" }}>{post.date}</span>
                    <span className="text-xs" style={{ color: "var(--text-muted)" }}>·</span>
                    <span className="text-xs" style={{ color: "var(--text-muted)" }}>{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}
                    className="text-xs font-medium flex items-center gap-1 transition-all hover:gap-2"
                    style={{ color: post.color }}>
                    Read more <IconArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}