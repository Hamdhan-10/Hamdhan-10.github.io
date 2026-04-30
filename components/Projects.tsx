"use client";

export default function Projects() {
  const projects = [
    "RH Solution Startup",
    "Smart Medicine Box",
    "Drowsiness Detection",
    "Task Management System"
  ];

  return (
    <section className="p-20">
      <h2 className="text-3xl gradient">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {projects.map((p) => (
          <div key={p} className="glass p-6 hover:scale-105 transition">
            <h3 className="text-xl">{p}</h3>
            <p className="text-gray-400 mt-2">Project description here</p>
          </div>
        ))}
      </div>
    </section>
  );
}