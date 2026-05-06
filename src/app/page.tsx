import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Startup from "@/components/Startup";
import CV from "@/components/CV";
import Contact from "@/components/Contact";
import Blogs from "@/components/Blogs";
export default function Home() {
  return (
    <main className="bg-[#030712]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Blogs />
      <Experience />
      <Startup />
      <CV />
      <Contact />
      
    </main>
  );
}