import React, { useState, useEffect, useRef } from "react";
import { Code, Server, Terminal } from "lucide-react";
import { API_BASE } from "../config";

export default function About() {
  const [aboutData, setAboutData] = useState({
    about_title: "I am a frontend developer specializing in interactive user experiences & clean architectures.",
    about_description: "I build responsive modern web applications featuring modular logic, robust type checking, and fluid interactive animations. Focusing on code craftsmanship and optimal client performance, I translate requirements into high-contrast digital experiences.",
    about_profile_pic_url: "",
    about_profile_pic_hover_url: "",
    about_highlight_tech: "MERN • TypeScript",
    about_highlight_status: "Open to Opportunities",
  });

  // Spotlight Reveal Mask coordinates & state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    fetch(`${API_BASE}/api/content`)
      .then(res => res.json())
      .then((data: any[]) => {
        if (Array.isArray(data)) {
          const mapped: any = { ...aboutData };
          let hasAboutData = false;
          data.forEach(item => {
            if (item.key.startsWith('about_')) {
              hasAboutData = true;
              if (item.key in aboutData) {
                mapped[item.key] = item.value || '';
              }
            }
          });
          if (hasAboutData) {
            setAboutData(mapped);
          }
        }
      })
      .catch(err => console.error("Error loading about content:", err));
  }, []);

  const pillars = [
    {
      icon: <Code className="h-5 w-5 text-accent-pink" />,
      title: "Frontend",
      description: "React.js, JavaScript (ES6+), TypeScript, Redux Toolkit, Material UI, Highcharts"
    },
    {
      icon: <Server className="h-5 w-5 text-accent-blue" />,
      title: "Backend (Exposure)",
      description: "Node.js, Express.js, MongoDB, WebSockets, GraphQL"
    },
    {
      icon: <Terminal className="h-5 w-5 text-accent-pink" />,
      title: "Testing & Tools",
      description: "Jest, React Testing Library, Git, GitHub, Chrome DevTools, Figma, Mixpanel, Postman"
    }
  ];

  return (
    <section
      id="about"
      className="relative bg-primary-dark/50 py-16 md:py-24 border-t border-white/5 cursor-default"
    >
      {/* Decorative radial grid background */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Upper layout: Statement block paired with a floating blue button */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

          <div className="lg:col-span-8 flex flex-col space-y-6">
            <span className="font-mono text-[10px] text-accent-pink tracking-widest uppercase block">// THE DEVELOPER</span>

            <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05]">
              {aboutData.about_title}
            </h2>

            <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed max-w-3xl">
              {aboutData.about_description}
            </p>
          </div>

          {/* Profile Image Slot */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center pt-8 lg:pt-0 gap-6">
            <div
              ref={imageContainerRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative w-full max-w-[320px] aspect-square rounded-2xl p-2 glass-card flex items-center justify-center group overflow-hidden cursor-crosshair select-none"
            >
              <div className="absolute inset-0 bg-gradient-gold opacity-10 blur-xl group-hover:opacity-30 transition-opacity duration-500" />

              {/* Base Image: Grayscale */}
              {aboutData.about_profile_pic_url ? (
                <img
                  src={aboutData.about_profile_pic_url}
                  alt="Profile Base"
                  className="w-full h-full object-cover rounded-xl filter grayscale brightness-75 transition-all duration-500 shadow-2xl"
                />
              ) : (
                <div className="w-full h-full rounded-xl bg-neutral-900/60 flex flex-col items-center justify-center text-neutral-500 font-mono text-[9px] uppercase tracking-widest border border-white/5 gap-2">
                  <span className="text-lg">👤</span>
                  <span>No Profile Photo</span>
                </div>
              )}

              {/* Spotlight Overlay Image: Revealed only under the mouse cursor */}
              {aboutData.about_profile_pic_url && (
                <img
                  src={aboutData.about_profile_pic_hover_url || aboutData.about_profile_pic_url}
                  alt="Profile Reveal"
                  style={{
                    clipPath: isHovered
                      ? `circle(75px at ${mousePos.x}px ${mousePos.y}px)`
                      : `circle(0px at 0px 0px)`,
                    transition: isHovered ? "none" : "clip-path 0.4s ease-out",
                  }}
                  className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-xl z-20 filter grayscale-0 brightness-100 shadow-2xl pointer-events-none"
                />
              )}

              {/* Glowing border indicator */}
              <div className="absolute inset-0 rounded-2xl border border-accent-pink/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

            {/* Structured Profile Highlights Layer */}
            <div className="w-full max-w-[320px] flex flex-col gap-2.5">

              <div className="flex items-center justify-between gap-3 p-2.5 rounded-xl border border-white/5 bg-white/1 hover:border-accent-pink/20 transition-all duration-300 group/item">
                <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-wider">CORE TECH</span>
                <span className="font-display text-xs text-white font-medium group-hover/item:text-accent-pink transition-colors">{aboutData.about_highlight_tech}</span>
              </div>

              {aboutData.about_highlight_status === 'Open to Opportunities' ? (
                <div className="flex items-center justify-between gap-3 p-2.5 rounded-xl border border-green-500/10 bg-green-500/2 hover:border-green-500/30 transition-all duration-300">
                  <span className="font-mono text-[9px] text-green-400 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                    STATUS
                  </span>
                  <span className="font-display text-xs text-green-400 font-medium">{aboutData.about_highlight_status}</span>
                </div>
              ) : (
                <div className="flex items-center justify-between gap-3 p-2.5 rounded-xl border border-red-500/10 bg-red-500/2 hover:border-red-500/30 transition-all duration-300">
                  <span className="font-mono text-[9px] text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />
                    STATUS
                  </span>
                  <span className="font-display text-xs text-red-400 font-medium">{aboutData.about_highlight_status}</span>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
