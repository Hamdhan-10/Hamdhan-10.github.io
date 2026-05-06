export default function CV() {
  return (
    <section id="cv" className="py-24 bg-[#030712]">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-500">Curriculum Vitae</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore my professional journey, technical expertise,
            academic background, and project experience.
          </p>

        </div>

        {/* CV Viewer */}
        <div className="w-full h-[800px] rounded-3xl overflow-hidden border border-white/10 bg-white shadow-2xl">

          <iframe
            src="/HamdhanCV.pdf"
            title="Hamdhan CV"
            className="w-full h-full"
          />

        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">

          <a
            href="/HamdhanCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white font-semibold transition"
          >
            View Full CV
          </a>

          <a
            href="/HamdhanCV.pdf"
            download
            className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition shadow-lg shadow-blue-500/20"
          >
            Download CV
          </a>

        </div>

      </div>
    </section>
  );
}