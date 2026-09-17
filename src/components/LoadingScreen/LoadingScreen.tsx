import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const counterObj = { val: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 0.85,
          ease: 'power4.inOut',
          onComplete,
        });
      },
    });

    tl.to(counterObj, {
      val: 100,
      duration: 1.15,
      ease: 'power2.inOut',
      onUpdate: () => {
        const rounded = Math.floor(counterObj.val);
        setCount(rounded);
        if (counterRef.current) {
          counterRef.current.textContent = rounded < 10 ? `0${rounded}` : `${rounded}`;
        }
        if (barRef.current) {
          barRef.current.style.width = `${counterObj.val}%`;
        }
      },
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] bg-[#fafafa] text-[#0a0a0c] flex flex-col justify-between p-8 sm:p-14 select-none border-b border-black/[0.08] will-change-transform"
    >
      {/* Top Telemetry */}
      <div className="flex items-center justify-between font-mono-tech text-xs tracking-widest text-[#8492a6]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
          <span className="text-[#0a0a0c] font-medium tracking-wider">PIYUSH PANKAJ</span>
        </div>
        <span>PORTFOLIO // 2026</span>
        <span>INDEX_BOOT</span>
      </div>

      {/* Center Counter */}
      <div className="max-w-2xl w-full mx-auto my-auto text-center space-y-6">
        <div className="text-[14vw] sm:text-[10rem] md:text-[12rem] font-display font-extrabold tracking-tighter leading-none flex items-baseline justify-center text-[#0a0a0c]">
          <span ref={counterRef}>00</span>
          <span className="text-xl sm:text-3xl text-[#8492a6] font-mono-tech font-light ml-3">/ 100</span>
        </div>

        {/* Minimal Progress Bar */}
        <div className="w-full max-w-xs mx-auto h-[2px] bg-black/[0.08] rounded-full overflow-hidden">
          <div
            ref={barRef}
            className="h-full bg-[#0a0a0c] transition-all duration-75"
            style={{ width: `${count}%` }}
          />
        </div>

        <p className="font-mono-tech text-xs tracking-widest text-[#8492a6] uppercase">
          Compiling assets &amp; initializing application
        </p>
      </div>

      {/* Bottom Metadata */}
      <div className="flex items-center justify-between font-mono-tech text-xs tracking-widest text-[#8492a6]">
        <span>DEHRADUN, INDIA</span>
        <span>B.TECH CSE (2027)</span>
      </div>
    </div>
  );
};
