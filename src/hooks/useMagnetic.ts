import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface MagneticOptions {
  strength?: number;
  ease?: string;
  duration?: number;
}

export function useMagnetic<T extends HTMLElement>(options: MagneticOptions = {}) {
  const ref = useRef<T | null>(null);
  const { strength = 0.35, ease = 'power2.out', duration = 0.4 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      gsap.to(el, {
        x: deltaX,
        y: deltaY,
        duration,
        ease,
        overwrite: 'auto'
      });
    };

    const onMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: duration * 1.5,
        ease: 'elastic.out(1, 0.3)',
        overwrite: 'auto'
      });
    };

    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseleave', onMouseLeave);

    return () => {
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [strength, ease, duration]);

  return ref;
}
