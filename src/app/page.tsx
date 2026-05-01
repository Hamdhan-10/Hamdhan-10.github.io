import Hero from "@/components/Hero";
import About from "@/components/About"; // Import the new section

export default function Home() {
  return (
    <main className="bg-[#030712]">
      <Hero />
      <About /> 
      {/* Next: Projects Section */}
    </main>
  );
}