import React from 'react';
import { PERSONAL } from '../../data/personal';
import { X, ArrowUpRight } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (targetId: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onNavigate }) => {
  if (!isOpen) return null;

  const links = [
    { label: 'WORK', target: '#work', number: '03' },
    { label: 'WHAT I BUILD', target: '#identity', number: '04' },
    { label: 'EXPERIENCE', target: '#experience', number: '05' },
    { label: 'STACK', target: '#stack', number: '06' },
    { label: 'ABOUT', target: '#about', number: '08' },
    { label: 'CONTACT', target: '#contact', number: '09' },
  ];

  const handleLink = (target: string) => {
    onClose();
    setTimeout(() => {
      onNavigate(target);
    }, 200);
  };

  return (
    <div className="fixed inset-0 z-[5000] bg-[#fafafa] text-[#0a0a0c] flex flex-col justify-between p-6 sm:p-10">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-black/[0.08] pb-6">
        <div>
          <span className="font-display font-bold text-lg tracking-wider text-[#0a0a0c]">PIYUSH PANKAJ</span>
          <p className="font-mono-tech text-xs text-[#8492a6]">SOFTWARE &amp; AI ENGINEER</p>
        </div>
        <button
          onClick={onClose}
          className="p-3 rounded-full border border-black/[0.1] bg-black/[0.02] hover:bg-black/[0.05] active:scale-95 transition-all"
          aria-label="Close navigation"
        >
          <X className="w-5 h-5 text-[#0a0a0c]" />
        </button>
      </div>

      {/* Nav Links */}
      <div className="flex flex-col space-y-4 my-auto">
        {links.map((link) => (
          <button
            key={link.target}
            onClick={() => handleLink(link.target)}
            className="group flex items-baseline justify-between text-left py-2.5 border-b border-black/[0.04] transition-all"
          >
            <span className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight group-hover:text-[#2563eb] transition-colors">
              {link.label}
            </span>
            <span className="font-mono-tech text-xs tracking-widest text-[#8492a6] group-hover:text-[#0a0a0c]">
              [{link.number}]
            </span>
          </button>
        ))}
      </div>

      {/* Footer Info */}
      <div className="pt-6 border-t border-black/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono-tech text-xs text-[#8492a6]">
        <div>
          <p className="text-[#0a0a0c] font-medium">{PERSONAL.email}</p>
          <p>{PERSONAL.phone} • {PERSONAL.location}</p>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0a0a0c] flex items-center gap-1 font-semibold"
          >
            GITHUB <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0a0a0c] flex items-center gap-1 font-semibold"
          >
            LINKEDIN <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
