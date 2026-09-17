import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PERSONAL } from '../../data/personal';

gsap.registerPlugin(ScrollTrigger);

export const EditorialIntro: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        paragraphRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        metaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: metaRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="intro"
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 md:py-44 px-4 sm:px-12 md:px-16 border-t border-black/[0.06] bg-[#fafafa]"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Label */}
        <div className="flex items-center gap-3 font-mono-tech text-[11px] sm:text-xs tracking-wider sm:tracking-widest text-[#8492a6] uppercase">
          <span className="text-[#2563eb] font-bold">[ 02 ]</span>
          <span>ENGINEERING PHILOSOPHY &amp; CORE FOCUS</span>
        </div>

        {/* Large Editorial Headline */}
        <div className="overflow-hidden">
          <h2
            ref={headlineRef}
            className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-[#0a0a0c] max-w-5xl leading-[1.08] break-words"
          >
            I build systems that move from{' '}
            <span className="text-[#2563eb] underline decoration-black/[0.1] decoration-wavy">
              idea → model → product.
            </span>
          </h2>
        </div>

        {/* Paragraph & Meta Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-4 sm:pt-6">
          <div className="lg:col-span-8">
            <p
              ref={paragraphRef}
              className="text-lg sm:text-2xl md:text-3xl font-light text-[#475569] leading-relaxed"
            >
              {PERSONAL.introParagraph}
            </p>
          </div>

          <div
            ref={metaRef}
            className="lg:col-span-4 border-l border-black/[0.08] pl-6 sm:pl-8 space-y-6 font-mono-tech text-xs text-[#475569]"
          >
            {/* Author Portrait Badge */}
            <div className="flex items-center gap-4 pb-4 border-b border-black/[0.06]">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-black/[0.15] bg-[#0a0a0c] shrink-0 shadow-xs">
                <img
                  src="/piyush-portrait.jpg"
                  alt="Piyush Pankaj"
                  className="w-full h-full object-cover grayscale contrast-[1.25] brightness-[0.95]"
                />
              </div>
              <div>
                <span className="font-display font-bold text-sm text-[#0a0a0c] block">Piyush Pankaj</span>
                <span className="font-mono-tech text-[11px] text-[#8492a6]">Class of 2027 • AI &amp; Systems</span>
              </div>
            </div>

            <div>
              <span className="text-[#8492a6] uppercase tracking-wider block mb-1">DEGREE PROGRAM</span>
              <p className="text-[#0a0a0c] font-semibold">{PERSONAL.degree}</p>
              <p className="text-[#8492a6]">{PERSONAL.university}</p>
            </div>

            <div>
              <span className="text-[#8492a6] uppercase tracking-wider block mb-1">EXPERIENCE HIGHLIGHT</span>
              <p className="text-[#2563eb] font-semibold">Ranked #1 Cohort Intern • Elevate Labs</p>
            </div>

            <div>
              <span className="text-[#8492a6] uppercase tracking-wider block mb-1">SHIPPED PROJECTS</span>
              <p className="text-[#0a0a0c] font-semibold">LORCEN-RAG &bull; TeLos Voice Platform</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
