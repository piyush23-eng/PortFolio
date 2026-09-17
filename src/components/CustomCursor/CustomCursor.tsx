import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export type CursorMode = 'default' | 'hover' | 'project' | 'open' | 'explore' | 'cta';

export const CustomCursor: React.FC = () => {
  const dotWrapperRef = useRef<HTMLDivElement>(null);
  const ringWrapperRef = useRef<HTMLDivElement>(null);
  const modeRef = useRef<CursorMode>('default');
  const textRef = useRef<string>('');

  const [cursorMode, setCursorMode] = useState<CursorMode>('default');
  const [cursorText, setCursorText] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Disable on touch devices or fine pointer absent
    if (window.matchMedia('(hover: none) or (pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    document.body.classList.add('has-custom-cursor');

    const dotEl = dotWrapperRef.current;
    const ringEl = ringWrapperRef.current;

    // Direct hardware-accelerated setters for zero-latency tracking
    const setDotX = dotEl ? gsap.quickSetter(dotEl, 'x', 'px') : () => {};
    const setDotY = dotEl ? gsap.quickSetter(dotEl, 'y', 'px') : () => {};

    // High-responsiveness spring for trailing ring (snappy 0.12s catchup, zero sluggishness)
    const setRingX = ringEl ? gsap.quickTo(ringEl, 'x', { duration: 0.14, ease: 'power3.out' }) : () => {};
    const setRingY = ringEl ? gsap.quickTo(ringEl, 'y', { duration: 0.14, ease: 'power3.out' }) : () => {};

    let hasShown = false;

    const handleMouseMove = (e: MouseEvent) => {
      const clientX = e.clientX;
      const clientY = e.clientY;

      // Zero-latency instant position for the center dot
      setDotX(clientX);
      setDotY(clientY);

      // High-refresh responsive tracking for the trailing ring
      setRingX(clientX);
      setRingY(clientY);

      if (!hasShown) {
        hasShown = true;
        setIsVisible(true);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('[data-cursor]') as HTMLElement | null;
      let newMode: CursorMode = 'default';
      let newText = '';

      if (target) {
        newMode = (target.dataset.cursor as CursorMode) || 'hover';
        newText = target.dataset.cursorText || '';
      } else {
        const clickable = (e.target as HTMLElement).closest('a, button, [role="button"], input, select');
        if (clickable) {
          newMode = 'hover';
        }
      }

      // Only trigger React state update if mode or text actually changed (eliminates re-render lag)
      if (modeRef.current !== newMode || textRef.current !== newText) {
        modeRef.current = newMode;
        textRef.current = newText;
        setCursorMode(newMode);
        setCursorText(newText);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[99999] transition-opacity duration-200 select-none ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* 1. Precision Center Dot (0ms latency, exact cursor sync) */}
      <div
        ref={dotWrapperRef}
        className="fixed top-0 left-0 pointer-events-none will-change-transform"
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-100 ease-out ${
            cursorMode === 'project' || cursorMode === 'open' || cursorMode === 'explore'
              ? 'w-0 h-0 opacity-0'
              : cursorMode === 'cta'
              ? 'w-2.5 h-2.5 bg-[#2563eb]'
              : cursorMode === 'hover'
              ? 'w-2 h-2 bg-[#0a0a0c]'
              : 'w-1.5 h-1.5 bg-[#0a0a0c]'
          } ${isClicking ? 'scale-75' : 'scale-100'}`}
        />
      </div>

      {/* 2. Trailing Responsive Ring / Context Badge */}
      <div
        ref={ringWrapperRef}
        className="fixed top-0 left-0 pointer-events-none will-change-transform"
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-[width,height,background-color,border-color,opacity,transform] duration-150 ease-out font-mono-tech text-[10px] tracking-widest uppercase font-semibold ${
            cursorMode === 'project'
              ? 'w-20 h-20 bg-[#0a0a0c] text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)]'
              : cursorMode === 'open'
              ? 'w-22 h-22 bg-[#2563eb] text-white shadow-[0_8px_30px_rgba(37,99,235,0.25)]'
              : cursorMode === 'explore'
              ? 'w-20 h-20 bg-[#0a0a0c] text-white shadow-[0_8px_30px_rgba(0,0,0,0.15)]'
              : cursorMode === 'cta'
              ? 'w-14 h-14 border-2 border-[#2563eb] bg-[#2563eb]/10'
              : cursorMode === 'hover'
              ? 'w-10 h-10 border border-[#0a0a0c]/40 bg-[#0a0a0c]/5'
              : 'w-7 h-7 border border-[#0a0a0c]/25 bg-transparent'
          } ${isClicking ? 'scale-90' : 'scale-100'}`}
        >
          {cursorMode === 'project' && <span>{cursorText || 'VIEW'}</span>}
          {cursorMode === 'open' && <span>{cursorText || 'OPEN ↗'}</span>}
          {cursorMode === 'explore' && <span>{cursorText || 'EXPLORE'}</span>}
        </div>
      </div>
    </div>
  );
};
