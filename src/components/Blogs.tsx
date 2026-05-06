"use client";

const blogs = [
  {
    title: "The Future of AI in Software Engineering",
    description:
      "Exploring how artificial intelligence is transforming development workflows and automation.",
    date: "May 2026",
  },
  {
    title: "How IoT is Revolutionizing Smart Warehouses",
    description:
      "Understanding the impact of IoT sensors and automation in logistics and warehouse systems.",
    date: "April 2026",
  },
  {
    title: "Cybersecurity Essentials for Modern Businesses",
    description:
      "Best practices for protecting IT infrastructure and maintaining secure digital environments.",
    date: "March 2026",
  },
];

export default function Blogs() {
  return (
    <section id="blogs" className="py-24 bg-[#030712]">
      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold text-white mb-12">
          AI <span className="text-purple-500">Blogs & Articles</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {blogs.map((blog, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-purple-500/40 transition"
            >

              <p className="text-sm text-purple-400 mb-3">
                {blog.date}
              </p>

              <h3 className="text-2xl font-bold text-white mb-4">
                {blog.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {blog.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

