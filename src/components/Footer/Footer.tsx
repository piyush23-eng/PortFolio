import React, { useEffect, useState } from 'react';
import { PERSONAL } from '../../data/personal';
import { MagneticButton } from '../MagneticButton/MagneticButton';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full border-t border-black/[0.08] bg-[#f5f5f7] py-10 sm:py-12 px-4 sm:px-12 md:px-16 font-mono-tech text-[11px] sm:text-xs text-[#8492a6]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
        {/* Brand & Local Time */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="text-[#0a0a0c] font-bold tracking-wider uppercase">
            {PERSONAL.name} © 2026
          </span>
          <span className="hidden sm:inline text-black/20">•</span>
          <span>DEHRADUN, INDIA ({time || '19:45:00'} IST)</span>
        </div>

        {/* Back to Top */}
        <MagneticButton
          onClick={onScrollToTop}
          cursorMode="hover"
          className="group flex items-center gap-2 text-[#475569] hover:text-[#0a0a0c] transition-colors"
        >
          <span className="tracking-wider uppercase font-medium">BACK TO TOP</span>
          <div className="w-6 h-6 rounded-full border border-black/[0.12] bg-white flex items-center justify-center group-hover:border-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-all shadow-2xs">
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </MagneticButton>
      </div>
    </footer>
  );
};
