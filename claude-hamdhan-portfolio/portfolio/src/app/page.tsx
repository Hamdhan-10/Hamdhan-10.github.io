"use client";
import { useState, useEffect } from "react";
import LoadingScreen from "@/app/components/ui/LoadingScreen";
import ScrollProgress from "@/app/components/ui/ScrollProgress";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import Hero from "@/app/components/sections/Hero";
import About from "@/app/components/sections/About";
import Projects from "@/app/components/sections/Projects";
import Experience from "@/app/components/sections/Experience";
import Startup from "@/app/components/sections/Startup";
import BlogPreview from "@/app/components/sections/BlogPreview";
import Contact from "@/app/components/sections/Contact";
 
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
 
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);
 
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
  }, [theme]);
 
  return (
    <>
      {loading && <LoadingScreen />}
      <ScrollProgress />
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Startup />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}