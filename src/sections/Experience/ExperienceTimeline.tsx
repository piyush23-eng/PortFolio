import React, { useRef, useEffect } from 'react';
import { EXPERIENCES } from '../../data/experience';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, CheckCircle2, Activity } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const ExperienceTimeline: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Draw vertical timeline line
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
              end: 'bottom 80%',
              scrub: 0.5,
            },
          }
        );
      }

      // Stagger items
      itemsRef.current.forEach((item) => {
        if (!item) return;
        gsap.fromTo(
          item,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
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
      id="experience"
      ref={sectionRef}
      className="relative w-full py-28 md:py-40 px-6 sm:px-12 md:px-16 border-t border-black/[0.06] bg-[#fafafa]"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-black/[0.08]">
          <div>
            <div className="flex items-center gap-3 font-mono-tech text-xs tracking-widest text-[#8492a6] mb-3 uppercase">
              <span className="text-[#2563eb] font-bold">[ 05 ]</span>
              <span>WORK EXPERIENCE &amp; INTERNSHIPS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#0a0a0c]">
              EXPERIENCE
            </h2>
          </div>

          <p className="font-mono-tech text-xs sm:text-sm text-[#475569] max-w-md">
            Production engineering track record across cloud data infrastructure and enterprise Java backends.
          </p>
        </div>

        {/* Typographic Vertical Timeline */}
        <div className="relative pl-6 sm:pl-12 md:pl-16">
          {/* Animated Vertical Line */}
          <div
            ref={lineRef}
            className="absolute left-0 top-3 bottom-0 w-[2px] bg-gradient-to-b from-[#2563eb] via-black/20 to-transparent origin-top will-change-transform"
          />

          <div className="space-y-20 sm:space-y-28">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={exp.id}
                ref={(el) => (itemsRef.current[idx] = el)}
                className="relative group space-y-6"
              >
                {/* Dot */}
                <div className="absolute -left-[31px] sm:-left-[55px] md:-left-[71px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#2563eb] group-hover:scale-125 transition-transform shadow-xs" />

                {/* Period & Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 font-mono-tech text-xs">
                  <div className="flex items-center gap-3 text-[#8492a6]">
                    <span className="text-[#2563eb] font-bold">[{exp.number}]</span>
                    <span>{exp.period}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>

                  {exp.badge && (
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 font-semibold uppercase text-[11px]">
                      <Award className="w-3.5 h-3.5 text-amber-600" />
                      <span>{exp.badge}</span>
                    </div>
                  )}
                </div>

                {/* Role & Company */}
                <div>
                  <h3 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0a0a0c] tracking-tight group-hover:text-[#2563eb] transition-colors">
                    {exp.role}
                  </h3>
                  <p className="font-mono-tech text-base sm:text-lg text-[#475569] font-medium mt-1">
                    {exp.company}
                  </p>
                </div>

                {/* Key Metric / Impact Highlight */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-black/[0.08] shadow-2xs font-mono-tech text-xs text-[#0a0a0c] max-w-2xl flex flex-wrap items-center gap-2 sm:gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#2563eb]/10 text-[#2563eb] font-bold text-[10px] tracking-wider uppercase shrink-0">
                    <Activity className="w-3 h-3 text-[#2563eb]" />
                    KEY IMPACT
                  </span>
                  <span className="font-medium text-[#2563eb]">
                    {exp.keyMetric}
                  </span>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 font-light text-sm sm:text-base text-[#475569] max-w-4xl leading-relaxed">
                  {exp.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#2563eb] mt-1 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-[#f5f5f7] border border-black/[0.06] font-mono-tech text-xs text-[#0a0a0c]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
