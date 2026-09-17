import React, { useRef, useEffect } from 'react';
import { PROJECTS } from '../../data/projects';
import { ProjectCaseStudy } from '../../components/ProjectShowcase/ProjectCaseStudy';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const SelectedWork: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative w-full py-28 md:py-36 px-6 sm:px-12 md:px-16 border-t border-black/[0.06] bg-[#fafafa]"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-black/[0.08]"
        >
          <div>
            <div className="flex items-center gap-3 font-mono-tech text-xs tracking-widest text-[#8492a6] mb-3 uppercase">
              <span className="text-[#2563eb] font-bold">[ 03 ]</span>
              <span>FEATURED ENGINEERING PROJECTS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#0a0a0c]">
              SELECTED WORK
            </h2>
          </div>

          <p className="font-mono-tech text-xs sm:text-sm text-[#475569] max-w-md">
            Production-grade systems: domain-adapted reasoning LLMs and sub-second streaming voice architectures with reproducible benchmarks.
          </p>
        </div>

        {/* The Two Flagship Projects: LORCEN-RAG and TeLos */}
        <div className="space-y-16">
          {PROJECTS.map((project) => (
            <ProjectCaseStudy key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
