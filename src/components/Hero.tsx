import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowDown, Stars } from "lucide-react";
import resumePdf from "/public/assets/Anjana shreya - Resume.pdf";
import { API_BASE } from "../config";

export default function Hero() {
  const [heroData, setHeroData] = useState({
    hero_subtitle: "Frontend Developer",
    hero_title_part1: "Crafting Sleek",
    hero_title_part2: "Interactive Web Apps.",
    hero_ticker_words: ["SOFTWARE ENGINEER", "TYPESCRIPT", "FULL STACK", "PROBLEM SOLVER", "LEARNER", "BUILDER"],
    hero_resume_url: "",
    hero_linkedin_url: "https://www.linkedin.com/in/ch-s-anjana-shreya-68a74628a",
    hero_github_url: "https://github.com/AnjanaShreya",
    hero_email_url: "chitturianjana@gmail.com"
  });

  useEffect(() => {
    fetch(`${API_BASE}/api/content`)
      .then(res => res.json())
      .then((data: any[]) => {
        if (Array.isArray(data)) {
          const mapped: any = { ...heroData };
          let hasHeroData = false;
          data.forEach(item => {
            if (item.key.startsWith('hero_')) {
              hasHeroData = true;
              if (item.key === 'hero_ticker_words') {
                mapped[item.key] = item.value ? item.value.split(',').map((w: string) => w.trim()) : [];
              } else if (item.key in heroData) {
                mapped[item.key] = item.value || '';
              }
            }
          });
          if (hasHeroData) {
            setHeroData(mapped);
          }
        }
      })
      .catch(err => console.error("Error loading hero content:", err));
  }, []);

  const handleScrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const tickerOne = heroData.hero_ticker_words;
  const tickerTwo = [...heroData.hero_ticker_words].reverse();

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center items-center overflow-hidden bg-primary-dark pt-12 pb-16 cursor-default"
    >
      {/* Absolute background huge text logo "ANJANA SHREYA" - Fixed */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-[0.05] z-0 font-syne font-extrabold text-[12.5vw] ml-16 mt-20 tracking-wider leading-none uppercase">
        ANJANA SHREYA
      </div>

      {/* Decorative visual orbs - Monochromatic */}
      <div className="absolute top-1/4 left-1/10 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-white/5 to-white/10 blur-[120px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: "12s" }} />
      <div className="absolute bottom-1/4 right-1/10 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-white/10 to-white/5 blur-[120px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: "18s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5 via-transparent to-white/5 blur-[150px] pointer-events-none -z-10" />

      {/* Dual bidirectional marquees from Screen 1 */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-0 hidden md:block">
        {/* Left marquee */}
        <div className="relative overflow-hidden w-full h-[6rem] opacity-45 select-none pointer-events-none">
          <div className="animate-marquee py-2 border-y border-white/5 font-syne font-black text-6xl text-stroke-white tracking-widest leading-none flex">
            <div className="flex whitespace-nowrap">
              {Array(3).fill(tickerOne).flat().map((word, idx) => (
                <span key={idx} className="mx-8">
                  {word} <span className="text-white/25 select-none ml-8">/</span>
                </span>
              ))}
            </div>
            <div className="flex whitespace-nowrap" aria-hidden="true">
              {Array(3).fill(tickerOne).flat().map((word, idx) => (
                <span key={idx} className="mx-8">
                  {word} <span className="text-white/25 select-none ml-8">/</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right marquee (reverse) */}
        <div className="relative overflow-hidden w-full h-[6rem] opacity-40 select-none pointer-events-none mt-4">
          <div className="animate-marquee-reverse py-2 border-y border-white/5 font-syne font-black text-6xl text-stroke-white tracking-widest leading-none flex">
            <div className="flex whitespace-nowrap">
              {Array(3).fill(tickerTwo).flat().map((word, idx) => (
                <span key={idx} className="mx-8">
                  {word} <span className="text-white/25 select-none ml-8">/</span>
                </span>
              ))}
            </div>
            <div className="flex whitespace-nowrap" aria-hidden="true">
              {Array(3).fill(tickerTwo).flat().map((word, idx) => (
                <span key={idx} className="mx-8">
                  {word} <span className="text-white/25 select-none ml-8">/</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 w-full flex flex-col items-center justify-center text-center relative z-10 py-12 mt-20">
        
        {/* Centered info - Developer focus */}
        <div className="flex flex-col items-center justify-center space-y-6 md:space-y-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center gap-2 justify-center"
          >
            <span className="h-px w-8 bg-white" />
            <span className="font-mono text-xs text-white uppercase tracking-widest flex items-center gap-1">
              <Stars className="h-3 w-3" /> {heroData.hero_subtitle}
            </span>
            <span className="h-px w-8 bg-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-syne font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter text-white leading-[0.95]"
          >
            {heroData.hero_title_part1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-white to-neutral-400">
              {heroData.hero_title_part2}
            </span>
          </motion.h1>
          

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <a
              href={heroData.hero_resume_url || resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black text-white font-mono text-xs uppercase tracking-widest transition-all duration-300 no-underline"
            >
              Get My Resume
            </a>
            
            <a
              href={heroData.hero_linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black text-white font-mono text-xs uppercase tracking-widest transition-all duration-300 no-underline"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>

      </div>

      {/* Slide indicator chevron */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 select-none text-neutral-500 hover:text-white transition-colors cursor-pointer" onClick={handleScrollToAbout}>
        <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-600">SCROLL DOWN</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </div>
    </section>
  );
}
