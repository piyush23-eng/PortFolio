import React, { useRef, useEffect } from 'react';
import { TECHNICAL_CATEGORIES } from '../../data/skills';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const WhatIBuild: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="identity"
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 md:py-40 px-4 sm:px-12 md:px-16 border-t border-black/[0.06] bg-[#f5f5f7]"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-20">
        {/* Section Tag & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-black/[0.08]">
          <div>
            <div className="flex items-center gap-3 font-mono-tech text-[11px] sm:text-xs tracking-wider sm:tracking-widest text-[#8492a6] mb-2.5 sm:mb-3 uppercase">
              <span className="text-[#2563eb] font-bold">[ 04 ]</span>
              <span>CORE ENGINEERING DOMAINS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0a0a0c]">
              WHAT I BUILD
            </h2>
          </div>

          <p className="font-mono-tech text-xs sm:text-sm text-[#475569] max-w-md">
            Hands-on software development across three core areas: machine learning pipelines, full-stack web products, and distributed data systems.
          </p>
        </div>

        {/* 3 Large Architectural Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TECHNICAL_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.number}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="p-6 sm:p-8 md:p-10 rounded-3xl bg-white border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.07)] hover:border-black/[0.2] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between font-mono-tech text-xs text-[#8492a6] mb-6">
                  <span className="text-[#2563eb] font-bold text-lg">{cat.number}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#0a0a0c]" />
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0a0a0c] tracking-tight mb-2 group-hover:text-[#2563eb] transition-colors">
                  {cat.title}
                </h3>
                <p className="font-mono-tech text-xs text-[#2563eb] font-semibold tracking-wide mb-4">
                  {cat.subtitle}
                </p>

                <p className="text-sm text-[#475569] leading-relaxed font-light mb-8">
                  {cat.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="pt-6 border-t border-black/[0.04]">
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-[#fafafa] border border-black/[0.06] font-mono-tech text-xs text-[#0a0a0c]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
