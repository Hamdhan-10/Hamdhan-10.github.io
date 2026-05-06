"use client";

const projects = [
  {
    title: "Smart Warehouse System",
    description:
      "IoT-based warehouse management platform with automation and smart inventory tracking.",
    github: "https://github.com/Hamdhan-10",
  },
  {
    title: "Remote Patient Monitoring",
    description:
      "Healthcare monitoring system using IoT sensors and real-time data collection.",
    github: "https://github.com/Hamdhan-10",
  },
  {
    title: "Drowsiness Detection System",
    description:
      "AI-powered driver safety solution for detecting fatigue and preventing accidents.",
    github: "https://github.com/Hamdhan-10",
  },
  {
    title: "Laravel Task Management System",
    description:
      "Modern Laravel web application with authentication and CRUD functionality.",
    github: "https://github.com/Hamdhan-10",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#030712]">
      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold text-white mb-12">
          My <span className="text-blue-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-blue-500/50 transition"
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              <a
                href={project.github}
                target="_blank"
                className="text-blue-400 hover:text-blue-300"
              >
                View GitHub Repository →
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}