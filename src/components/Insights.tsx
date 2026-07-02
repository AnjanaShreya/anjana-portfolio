import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { API_BASE } from "../config";
const FALLBACK_INSIGHTS = [
  {
    id: "ins-workshop",
    title: "Internshala Web Developer",
    image: "/assets/cert 1.png",
    issuer: "Internshala Trainings",
    year: "2024",
    type: "Professional Training",
    status: "Verified",
    duration: "6 Weeks",
    description: "Built production-ready frontend and web development skills using HTML, CSS, JavaScript, Bootstrap, React, REST APIs, and modern UI development practices.",
    skills: ["React", "JavaScript", "HTML", "CSS", "Bootstrap"],
    badges: ["✓ Verified", "Industry Credential", "Professional Training", "Completed"],
    order: 0
  },
  {
    id: "ins-future",
    title: "Aviatrix Multicloud Network",
    image: "/assets/cert-3.png",
    issuer: "Aviatrix",
    year: "2025",
    type: "Technical Certification",
    status: "Credential Active",
    duration: "Self-Paced",
    description: "Developed practical expertise in multicloud networking, cloud transit architectures, AWS connectivity, Azure integration, network security, and scalable cloud infrastructure design.",
    skills: ["Cloud Networking", "Multi-Cloud Security", "AWS/Azure Transit"],
    badges: ["✓ Verified", "Industry Credential", "Technical Certification", "Active"],
    order: 1
  },
  {
    id: "ins-create",
    title: "Mathworks Onramp",
    image: "/assets/cert-2.png",
    issuer: "MathWorks",
    year: "2024",
    type: "Academic Certification",
    status: "Completed",
    duration: "3 Weeks",
    description: "Strengthened MATLAB programming fundamentals, data visualization techniques, numerical computation workflows, and analytical problem-solving skills used in engineering applications.",
    skills: ["MATLAB Scripting", "Data Analysis", "Numerical Visualization"],
    badges: ["✓ Verified", "Academic Credential", "Academic Certification", "Completed"],
    order: 2
  }
];

export default function Insights() {
  const [items, setItems] = useState<any[]>(FALLBACK_INSIGHTS);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/insights`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setItems(data.sort((a, b) => a.order - b.order));
        }
      })
      .catch(err => {
        console.error("Failed to fetch insights:", err);
      });
  }, []);

  return (
    <section
      id="insights"
      className="relative bg-primary-dark py-16 md:py-24 border-t border-white/5 overflow-hidden flex flex-col justify-center min-h-[500px]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="space-y-3 mb-12 text-left">
          <span className="text-[10px] text-[#ff4d94] tracking-[0.2em] uppercase font-bold block">
            // CREDENTIALS & RECOGNITIONS
          </span>
          <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mt-1">
            Certifications
          </h2>
        </div>

        {/* Simplified Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto w-full">
          {items.map((ins, idx) => (
            <motion.div
              key={ins.id}
              onClick={() => setSelectedImage(ins.image)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-[#0c0c0e] border border-neutral-900 rounded-2xl overflow-hidden hover:border-[#ff4d94]/30 hover:shadow-[0_0_20px_rgba(255,77,148,0.05)] transition-all duration-300 cursor-pointer flex flex-col hover:-translate-y-1"
            >
              {/* Image Section */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-black/40 flex items-center justify-center">
                <img
                  src={ins.image}
                  alt={ins.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
              </div>

              {/* Text Area */}
              <div className="p-5 bg-[#0a0a0c] border-t border-neutral-900/60 flex flex-col justify-center grow min-h-[70px]">
                <h3 className={`font-syne font-bold text-base md:text-lg transition-colors duration-300 line-clamp-2 leading-snug ${
                  idx === 0 ? "text-[#ff4d94]" : "text-white"
                } group-hover:text-[#ff4d94]`}>
                  {ins.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xs cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors cursor-pointer"
                onClick={() => setSelectedImage(null)}
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedImage}
                alt="Certificate Zoom"
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-[0_10px_50px_rgba(0,0,0,0.8)] border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
