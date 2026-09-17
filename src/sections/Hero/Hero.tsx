import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PERSONAL } from '../../data/personal';
import { ArrowDown } from 'lucide-react';
import { MagneticButton } from '../../components/MagneticButton/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onScrollExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollExplore }) => {
  const heroRef = useRef<HTMLElement>(null);
  const titleBlockRef = useRef<HTMLDivElement>(null);
  const firstNameRef = useRef<HTMLHeadingElement>(null);
  const lastNameRef = useRef<HTMLHeadingElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const subheadRef = useRef<HTMLDivElement>(null);
  const statementsRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  // Subtle cursor interaction on typography and portrait
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const setFirstX = firstNameRef.current ? gsap.quickTo(firstNameRef.current, 'x', { duration: 0.6, ease: 'power2.out' }) : null;
    const setFirstY = firstNameRef.current ? gsap.quickTo(firstNameRef.current, 'y', { duration: 0.6, ease: 'power2.out' }) : null;
    const setLastX = lastNameRef.current ? gsap.quickTo(lastNameRef.current, 'x', { duration: 0.6, ease: 'power2.out' }) : null;
    const setLastY = lastNameRef.current ? gsap.quickTo(lastNameRef.current, 'y', { duration: 0.6, ease: 'power2.out' }) : null;
    const setPortX = portraitRef.current ? gsap.quickTo(portraitRef.current, 'x', { duration: 0.7, ease: 'power2.out' }) : null;
    const setPortY = portraitRef.current ? gsap.quickTo(portraitRef.current, 'y', { duration: 0.7, ease: 'power2.out' }) : null;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const xNorm = (e.clientX / innerWidth - 0.5) * 2;
      const yNorm = (e.clientY / innerHeight - 0.5) * 2;

      if (setFirstX && setFirstY && setLastX && setLastY) {
        setFirstX(xNorm * 6);
        setFirstY(yNorm * 3);
        setLastX(-xNorm * 6);
        setLastY(-yNorm * 3);
      }

      if (setPortX && setPortY) {
        setPortX(-xNorm * 5);
        setPortY(-yNorm * 4);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Entrance animations and scroll compression
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        [firstNameRef.current, lastNameRef.current],
        {
          y: 70,
          opacity: 0,
          clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
        },
        {
          y: 0,
          opacity: 1,
          clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
          duration: 1.1,
          stagger: 0.12,
          delay: 0.15,
        }
      )
      .fromTo(
        portraitRef.current,
        { opacity: 0, scale: 0.95, y: 24 },
        { opacity: 1, scale: 1, y: 0, duration: 0.9 },
        '-=0.7'
      )
      .fromTo(
        subheadRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(
        statementsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(
        bottomBarRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.7 },
        '-=0.4'
      );

      // Scroll compression
      gsap.to(titleBlockRef.current, {
        scale: 0.96,
        y: -50,
        opacity: 0.4,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-10 px-6 sm:px-12 md:px-16 overflow-hidden select-none"
    >
      {/* Editorial Grid Backing */}
      <div className="absolute inset-0 editorial-grid pointer-events-none opacity-60" />

      {/* Top Status Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 font-mono-tech text-xs tracking-widest text-[#8492a6] border-b border-black/[0.06] pb-4">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[#0a0a0c] font-medium tracking-wider">AVAILABLE FOR ROLES</span>
          <span className="hidden sm:inline">// 2026 — 2027</span>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <span>B.TECH CSE</span>
          <span>•</span>
          <span className="text-[#0a0a0c] font-semibold">DIT UNIVERSITY</span>
        </div>
      </div>

      {/* Main Centerpiece: 100% Unconstrained Name with Photo Lockup */}
      <div ref={titleBlockRef} className="relative z-10 my-auto py-8 md:py-12">
        {/* Full-Width Monolithic Name - Guaranteed Never Cut Off */}
        <div className="w-full">
          <div className="overflow-hidden pb-1 sm:pb-2">
            <h1
              ref={firstNameRef}
              className="font-display text-[15vw] sm:text-[13vw] md:text-[11vw] lg:text-[9.5vw] xl:text-[10.5rem] font-black tracking-tighter leading-[0.88] text-[#0a0a0c] uppercase will-change-transform"
            >
              {PERSONAL.firstName}
            </h1>
          </div>
          <div className="overflow-hidden pb-2 sm:pb-4">
            <h1
              ref={lastNameRef}
              className="font-display text-[15vw] sm:text-[13vw] md:text-[11vw] lg:text-[9.5vw] xl:text-[10.5rem] font-black tracking-tighter leading-[0.88] text-[#0a0a0c] uppercase will-change-transform"
            >
              {PERSONAL.lastName}
            </h1>
          </div>
        </div>

        {/* Identity & Portrait Lockup directly below name */}
        <div className="mt-8 sm:mt-12 pt-8 border-t border-black/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Black & White Portrait Card */}
          <div ref={portraitRef} className="lg:col-span-4 flex items-center gap-5 shrink-0">
            <div
              className="relative w-24 h-32 sm:w-28 sm:h-36 md:w-32 md:h-40 rounded-2xl overflow-hidden bg-[#0a0a0c] border border-black/[0.12] shadow-md group shrink-0"
              data-cursor="explore"
              data-cursor-text="PIYUSH"
            >
              <img
                src="/piyush-portrait.jpg"
                alt="Piyush Pankaj"
                className="w-full h-full object-cover object-center grayscale contrast-[1.2] brightness-[0.94] group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono-tech text-white">
                <span className="font-bold">DEHRADUN</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>

            <div className="space-y-1">
              <span className="font-display font-black text-lg sm:text-xl text-[#0a0a0c] block">
                Piyush Pankaj
              </span>
              <span className="font-mono-tech text-xs text-[#2563eb] font-semibold block">
                AI/ML &bull; SOFTWARE ENGINEER
              </span>
              <span className="font-mono-tech text-[11px] text-[#8492a6] block">
                DIT University &bull; Class of 2027
              </span>
            </div>
          </div>

          {/* Roles & Statements Column */}
          <div ref={statementsRef} className="lg:col-span-8 space-y-3">
            <div
              ref={subheadRef}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono-tech text-xs sm:text-sm tracking-widest text-[#475569] uppercase font-semibold"
            >
              <span className="text-[#2563eb]">{PERSONAL.headlineRoles[0]}</span>
              <span className="text-black/20">•</span>
              <span className="text-[#0a0a0c]">{PERSONAL.headlineRoles[1]}</span>
              <span className="text-black/20">•</span>
              <span>{PERSONAL.headlineRoles[2]}</span>
            </div>

            <p className="text-lg sm:text-2xl font-light text-[#0a0a0c] leading-snug max-w-2xl">
              "{PERSONAL.heroStatement}"
            </p>
            <p className="text-xs sm:text-sm font-mono-tech text-[#8492a6]">
              {PERSONAL.heroSubStatement}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Bar */}
      <div
        ref={bottomBarRef}
        className="relative z-10 flex items-center justify-between pt-6 border-t border-black/[0.06] font-mono-tech text-xs tracking-widest"
      >
        <span className="text-[#8492a6] font-medium">
          BASED IN DEHRADUN, INDIA
        </span>

        <MagneticButton
          onClick={onScrollExplore}
          cursorMode="hover"
          className="group flex items-center gap-2.5 text-[#0a0a0c] font-semibold hover:text-[#2563eb] transition-colors"
        >
          <span>SCROLL TO EXPLORE</span>
          <div className="w-7 h-7 rounded-full border border-black/[0.12] bg-white flex items-center justify-center group-hover:border-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-all shadow-2xs">
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </div>
        </MagneticButton>
      </div>
    </section>
  );
};
