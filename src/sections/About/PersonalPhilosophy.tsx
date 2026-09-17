import React, { useRef, useEffect } from 'react';
import { PERSONAL } from '../../data/personal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, Sparkles, MapPin, Code2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const PersonalPhilosophy: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.96 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: imageRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 md:py-40 px-4 sm:px-12 md:px-16 border-t border-black/[0.06] bg-[#f5f5f7]"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Tag */}
        <div className="flex items-center gap-3 font-mono-tech text-[11px] sm:text-xs tracking-wider sm:tracking-widest text-[#8492a6] uppercase">
          <span className="text-[#2563eb] font-bold">[ 08 ]</span>
          <span>ENGINEERING PRINCIPLES &amp; BACKGROUND</span>
        </div>

        {/* Big Personal Statement */}
        <div className="max-w-4xl">
          <h3
            ref={quoteRef}
            className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0a0a0c] tracking-tight leading-[1.15] break-words"
          >
            "{PERSONAL.aboutQuote}"
          </h3>
        </div>

        {/* Editorial Split: Portrait & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pt-6 border-t border-black/[0.08]">
          {/* Black & White Editorial Portrait */}
          <div ref={imageRef} className="lg:col-span-5 relative group">
            <div
              className="relative rounded-3xl overflow-hidden bg-[#0a0a0c] border border-black/[0.1] shadow-[0_16px_40px_rgba(0,0,0,0.08)] aspect-[3/4] max-w-sm sm:max-w-md mx-auto lg:mx-0"
              data-cursor="explore"
              data-cursor-text="PIYUSH"
            >
              {/* Photo with pure black and white high-contrast styling */}
              <img
                src="/piyush-portrait.jpg"
                alt="Piyush Pankaj"
                className="w-full h-full object-cover object-center grayscale contrast-[1.18] brightness-[0.94] group-hover:scale-[1.03] transition-all duration-700 ease-out will-change-transform"
              />

              {/* Minimal Editorial Grain & Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

              {/* Floating Bottom Telemetry Badge */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 text-white font-mono-tech space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold tracking-widest text-sm text-white">PIYUSH PANKAJ</span>
                  <div className="flex items-center gap-1.5 text-[#38bdf8] text-[11px]">
                    <MapPin className="w-3 h-3" />
                    <span>DEHRADUN, IN</span>
                  </div>
                </div>
                <p className="text-[11px] text-white/70 tracking-wider uppercase">
                  Software Engineer • AI/ML • Full-Stack
                </p>
              </div>
            </div>
          </div>

          {/* Narrative & Active Explorations */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <p className="text-xl sm:text-2xl font-light text-[#0a0a0c] leading-relaxed">
                Computer Science undergraduate working across AI/ML, full-stack development, and data systems.
              </p>
              <p className="text-base text-[#475569] leading-relaxed font-light">
                I focus on building software that operates reliably in production rather than disposable proof-of-concepts. Whether fine-tuning small reasoning models for CPU inference or configuring distributed Delta Lake merges, I value deep technical understanding and disciplined system design.
              </p>
            </div>

            {/* Current Explorations */}
            <div className="space-y-4 pt-4 border-t border-black/[0.06]">
              <div className="flex items-center gap-2 font-mono-tech text-xs uppercase tracking-wider text-[#0a0a0c] font-semibold">
                <Compass className="w-4 h-4 text-[#2563eb]" />
                <span>CURRENT TECHNICAL FOCUS</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono-tech text-xs">
                {PERSONAL.aboutExplore.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-black/[0.06] shadow-2xs flex items-center gap-3 text-[#0a0a0c] hover:border-[#2563eb] transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#2563eb] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Mindset Pill */}
            <div className="p-4 rounded-2xl bg-white border border-black/[0.08] shadow-xs flex items-center gap-3 font-mono-tech text-xs text-[#475569]">
              <Code2 className="w-4 h-4 text-[#2563eb] shrink-0" />
              <span>
                Committed to writing verifiable test harnesses, zero-leakage datasets, and high-performance user interfaces.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
