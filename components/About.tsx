export default function About() {
  return (
    <section className="p-20" id="about">
      <h2 className="text-3xl gradient">About Me</h2>

      <p className="mt-4 text-gray-400 max-w-2xl">
        Software Engineering undergraduate and IT Administrator
        passionate about AI, IoT, Web Development, and Networking.
      </p>

      <div className="mt-6 flex gap-3 flex-wrap">
        {["Laravel", "IoT", "Networking", "AI", "Web Dev"].map((s) => (
          <span key={s} className="glass px-4 py-2">{s}</span>
        ))}
      </div>
    </section>
  );
}