"use client";
import React from 'react';
import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Brain, Network } from "lucide-react";

const skills = [
  { name: "Laravel", icon: <Code2 className="text-red-500" />, level: "90%" },
  { name: "IoT & Automation", icon: <Cpu className="text-green-400" />, level: "70%" },
  { name: "IT Administration", icon: <Network className="text-blue-400" />, level: "95%" },
  { name: "Web Development", icon: <Globe className="text-cyan-400" />, level: "88%" },
  { name: "AI Basics", icon: <Brain className="text-purple-400" />, level: "85%" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#030712] relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              About <span className="text-accent-blue">Me</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6 text-lg">
              I am a dedicated Software Engineering Undergraduate and a proactive IT Administrator. 
              My passion lies in bridging the gap between robust software architecture and 
              efficient hardware systems.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
              Currently focusing on building scalable web applications with **Laravel**, 
              exploring the potential of **IoT in logistics**, and managing complex IT infrastructures 
              with a focus on security and reliability.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-white font-bold text-2xl">1+</h3>
                <p className="text-gray-500 text-sm font-semibold uppercase">Years Exp.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-white font-bold text-2xl">10+</h3>
                <p className="text-gray-500 text-sm font-semibold uppercase">Projects Done</p>
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {skill.icon}
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>
                  <span className="text-gray-500 text-sm">{skill.level}</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}