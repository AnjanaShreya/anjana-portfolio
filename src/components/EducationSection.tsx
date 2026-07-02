import { useState, useEffect, useRef } from "react";
import { API_BASE } from "../config";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  const [education, setEducation] = useState<any[]>([]);
  const [selectedIdx, setSelectedIdx] = useState(0);

  useEffect(() => {
    fetch(`${API_BASE}/api/content`)
      .then(res => res.json())
      .then((data: any[]) => {
        if (Array.isArray(data)) {
          const eduItem = data.find(item => item.key === 'education_list');

          if (eduItem && eduItem.value) {
            try {
              setEducation(JSON.parse(eduItem.value));
            } catch (e) {
              console.error("Failed to parse education_list", e);
            }
          }
        }
      })
      .catch(err => {
        console.error("Failed to fetch education content from API:", err);
      });
  }, []);

  const [offsetY, setOffsetY] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isDesktop) {
      const activeCard = cardRefs.current[selectedIdx];
      const listContainer = listRef.current;
      if (activeCard && listContainer) {
        const activeRect = activeCard.getBoundingClientRect();
        const listRect = listContainer.getBoundingClientRect();
        setOffsetY(activeRect.top - listRect.top);
      }
    } else {
      setOffsetY(0);
    }
  }, [selectedIdx, education, isDesktop]);

  const activeDegree = education[selectedIdx] || education[0] || {};
  const activeFocus = activeDegree.academicFocus || [];
  const activeTags = activeDegree.courseworkTags || [];

  return (
    <section
      id="education"
      className="relative bg-primary-dark/40 py-8 md:py-8 cursor-default"
    >
      {/* Decorative radial grid background */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Creative Education Display */}
        {education.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Interactive Timeline Card */}
            <div ref={listRef} className="lg:col-span-7 flex flex-col space-y-6">
              {education.map((edu, idx) => {
                const isSelected = selectedIdx === idx;
                return (
                  <div
                    key={idx}
                    ref={(el) => { cardRefs.current[idx] = el; }}
                    onClick={() => setSelectedIdx(idx)}
                    className="relative pl-8 border-l border-white/10 hover:border-accent-pink/40 transition-colors duration-300 group py-2 cursor-pointer"
                  >
                    {/* Timeline node */}
                    <div className={`absolute -left-[5px] top-5 h-2.5 w-2.5 rounded-full transition-all duration-300 ${isSelected
                        ? 'bg-accent-pink border-accent-pink shadow-[0_0_10px_rgba(244,114,182,0.6)]'
                        : 'bg-neutral-800 border-white/20 group-hover:bg-accent-pink group-hover:border-accent-pink group-hover:shadow-[0_0_10px_rgba(244,114,182,0.6)]'
                      }`} />

                    <div className={`border p-4 sm:p-5 rounded-2xl transition-all duration-300 relative overflow-hidden flex flex-col gap-2 shadow-2xl shadow-black/40 ${isSelected
                        ? 'bg-white/[0.04] border-accent-pink/30'
                        : 'bg-white/[0.01] border-white/5 hover:border-white/15'
                      }`}>
                      <div className="flex flex-wrap justify-between items-start gap-2">
                        <div>
                          <span className="font-mono text-[10px] text-accent-blue tracking-wider uppercase block">{edu.period}</span>
                          <h3 className={`font-display font-medium text-lg transition-colors mt-0.5 ${isSelected ? 'text-accent-pink' : 'text-white group-hover:text-accent-pink'
                            }`}>
                            {edu.degree}
                          </h3>
                        </div>
                        {edu.grade && (
                          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded border border-accent-pink/20 bg-accent-pink/5 text-accent-pink uppercase tracking-widest shrink-0 font-bold">
                            {edu.grade}
                          </span>
                        )}
                      </div>

                      {edu.college && (
                        <p className="text-neutral-200 text-xs font-medium mt-0.5">
                          {edu.college}
                        </p>
                      )}

                      <p className="text-neutral-400 text-xs font-light">
                        {edu.institution}
                      </p>

                      {edu.details && edu.details.length > 0 && (
                        <ul className={`list-none space-y-2 mt-3 overflow-hidden transition-all duration-500 ease-in-out ${isSelected ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                          }`}>
                          {edu.details.map((detail: string, dIdx: number) => (
                            <li key={dIdx} className="text-neutral-400 group-hover:text-neutral-300 transition-colors text-[11px] font-light flex items-start gap-2 leading-relaxed">
                              <span className="text-accent-pink font-bold font-mono shrink-0 select-none">›</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Specializations, Key Coursework & Focus Areas Panel */}
            <div
              className="lg:col-span-5 self-start bg-white/[0.01] border border-white/5 p-5 md:p-6 rounded-2xl flex flex-col gap-4 hover:border-white/10 transition-colors relative overflow-hidden group shadow-2xl shadow-black/40"
              style={isDesktop ? {
                transform: `translateY(${offsetY}px)`,
                transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                willChange: 'transform'
              } : {}}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-accent-pink/5 blur-[50px] pointer-events-none -z-10 group-hover:bg-accent-pink/10 transition-all duration-500" />

              <div className="space-y-4">
                <div>
                  <span className="font-mono text-[10px] text-accent-pink tracking-widest uppercase block">// AREAS OF STUDY</span>
                  <h3 className="font-syne font-bold text-xl text-white tracking-tight mt-1">
                    Academic Focus
                  </h3>
                </div>

                {activeFocus.length === 0 ? (
                  <p className="text-xs text-neutral-500 font-mono italic">No specific focus areas documented.</p>
                ) : (
                  <div className="space-y-4">
                    {activeFocus.map((item: any, idx: number) => (
                      <div key={idx} className="flex gap-3.5 items-start animate-fade-in">
                        <div className="h-6 w-6 rounded bg-white/5 border border-white/5 flex items-center justify-center font-mono text-[10px] text-accent-pink font-bold shrink-0 mt-0.5">
                          0{idx + 1}
                        </div>
                        <div>
                          <h4 className="font-display font-medium text-xs text-neutral-200">{item.title}</h4>
                          <p className="text-neutral-500 text-[10px] font-light mt-0.5 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {activeTags.length > 0 && (
                <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5 animate-fade-in">
                  {activeTags.map((tag: string, idx: number) => (
                    <span
                      key={idx}
                      className="text-[9px] font-mono px-2 py-0.5 rounded border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] text-neutral-400 hover:text-white transition-all duration-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Premium underway/placeholder card */
          <div className="flex flex-col items-center justify-center py-20 px-6 rounded-3xl border border-white/5 bg-neutral-900/20 backdrop-blur-md max-w-2xl mx-auto text-center relative overflow-hidden group">
            {/* Ambient background glow inside the card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-accent-pink/5 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center">
              {/* Pulsing graduation cap icon with accent styling */}
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-2xl relative">
                <div className="absolute inset-0 rounded-full bg-accent-pink/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <GraduationCap className="h-7 w-7 text-accent-pink animate-pulse relative z-10" />
              </div>
              
              <h3 className="font-syne font-bold text-2xl sm:text-3xl text-white tracking-tight mb-3">
                Education Details Will Be Updated
              </h3>
              
              <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed max-w-md">
                Academic records, degrees, and focus specialization timelines are currently being configured. Check back soon for updates!
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
