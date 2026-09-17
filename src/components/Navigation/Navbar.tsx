import React, { useState, useEffect } from 'react';
import { MagneticButton } from '../MagneticButton/MagneticButton';
import { MobileMenu } from './MobileMenu';
import { Menu, Command, Volume2, VolumeX, Zap } from 'lucide-react';

interface NavbarProps {
  onNavigate: (targetId: string) => void;
  onOpenPalette?: () => void;
  soundEnabled?: boolean;
  onToggleSound?: () => void;
  viewMode?: 'editorial' | 'recruiter';
  onToggleViewMode?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigate,
  onOpenPalette,
  soundEnabled = false,
  onToggleSound,
  viewMode = 'editorial',
  onToggleViewMode,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'py-3.5 bg-[#fafafa]/85 backdrop-blur-md border-b border-black/[0.07] shadow-[0_4px_24px_rgba(0,0,0,0.03)]'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-12 flex items-center justify-between">
          {/* Brand Left */}
          <MagneticButton
            onClick={() => {
              if (viewMode === 'recruiter' && onToggleViewMode) {
                onToggleViewMode();
              }
              onNavigate('#hero');
            }}
            cursorMode="hover"
            className="flex items-center gap-2 group shrink-0"
          >
            <span className="w-2 h-2 rounded-full bg-[#2563eb] group-hover:scale-125 transition-transform" />
            <span className="font-display font-extrabold text-xs sm:text-sm tracking-wider text-[#0a0a0c] group-hover:text-[#2563eb] transition-colors uppercase">
              PIYUSH PANKAJ
            </span>
          </MagneticButton>

          {/* Desktop Links Right: WORK, ABOUT, EXPERIENCE, CONTACT + Recruiter Toggle + Command Palette + Sound */}
          <nav className="hidden md:flex items-center gap-1 font-mono-tech text-xs tracking-wider text-[#475569]">
            {viewMode === 'editorial' && (
              <>
                <MagneticButton
                  onClick={() => onNavigate('#work')}
                  cursorMode="hover"
                  className="px-3 py-1.5 rounded-full hover:text-[#0a0a0c] hover:bg-black/[0.04] transition-all font-medium"
                >
                  WORK
                </MagneticButton>

                <MagneticButton
                  onClick={() => onNavigate('#stack')}
                  cursorMode="hover"
                  className="px-3 py-1.5 rounded-full hover:text-[#0a0a0c] hover:bg-black/[0.04] transition-all font-medium"
                >
                  STACK
                </MagneticButton>

                <MagneticButton
                  onClick={() => onNavigate('#experience')}
                  cursorMode="hover"
                  className="px-3 py-1.5 rounded-full hover:text-[#0a0a0c] hover:bg-black/[0.04] transition-all font-medium"
                >
                  EXPERIENCE
                </MagneticButton>

                <MagneticButton
                  onClick={() => onNavigate('#about')}
                  cursorMode="hover"
                  className="px-3 py-1.5 rounded-full hover:text-[#0a0a0c] hover:bg-black/[0.04] transition-all font-medium"
                >
                  ABOUT
                </MagneticButton>
              </>
            )}

            {/* Recruiter 30s Fast-Track Switch */}
            {onToggleViewMode && (
              <MagneticButton
                onClick={onToggleViewMode}
                cursorMode="hover"
                className={`ml-1 px-3.5 py-1.5 rounded-full border transition-all flex items-center gap-1.5 text-[11px] font-semibold ${
                  viewMode === 'recruiter'
                    ? 'border-[#2563eb] bg-[#2563eb] text-white shadow-sm'
                    : 'border-black/[0.12] bg-white hover:border-[#2563eb] text-[#0a0a0c]'
                }`}
              >
                <Zap className={`w-3 h-3 ${viewMode === 'recruiter' ? 'fill-white text-white' : 'fill-amber-500 text-amber-500'}`} />
                <span>{viewMode === 'recruiter' ? 'PORTFOLIO VIEW' : 'QUICK RESUME'}</span>
              </MagneticButton>
            )}

            {/* Sound FX Toggle Pill */}
            {onToggleSound && (
              <MagneticButton
                onClick={onToggleSound}
                cursorMode="hover"
                className={`ml-1 px-3 py-1.5 rounded-full border transition-all flex items-center gap-1.5 text-[11px] ${
                  soundEnabled
                    ? 'border-[#2563eb]/40 bg-[#2563eb]/10 text-[#2563eb] font-semibold'
                    : 'border-black/[0.08] bg-white text-[#8492a6] hover:text-[#0a0a0c]'
                }`}
              >
                {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                <span>{soundEnabled ? 'ON' : 'SOUND'}</span>
              </MagneticButton>
            )}

            {/* Command Palette Trigger */}
            {onOpenPalette && (
              <MagneticButton
                onClick={onOpenPalette}
                cursorMode="hover"
                className="ml-1 px-3 py-1.5 rounded-full border border-black/[0.08] bg-white hover:border-black/[0.2] text-[#0a0a0c] transition-all flex items-center gap-1.5 text-[11px]"
              >
                <Command className="w-3 h-3 text-[#2563eb]" />
                <span className="font-semibold">⌘K</span>
              </MagneticButton>
            )}

            <MagneticButton
              onClick={() => onNavigate('#contact')}
              cursorMode="cta"
              className="ml-2 px-4 py-1.5 rounded-full border border-black/[0.12] bg-[#0a0a0c] text-white hover:bg-[#2563eb] hover:border-[#2563eb] font-semibold transition-all shadow-sm"
            >
              CONTACT
            </MagneticButton>
          </nav>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            {onToggleViewMode && (
              <button
                type="button"
                onClick={onToggleViewMode}
                className={`p-2 rounded-full border flex items-center gap-1 font-mono-tech text-[10px] font-bold ${
                  viewMode === 'recruiter'
                    ? 'bg-[#2563eb] border-[#2563eb] text-white'
                    : 'bg-white border-black/[0.1] text-[#0a0a0c]'
                }`}
              >
                <Zap className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>{viewMode === 'recruiter' ? 'MAIN' : 'RESUME'}</span>
              </button>
            )}

            {onOpenPalette && (
              <button
                type="button"
                onClick={onOpenPalette}
                className="p-2 rounded-full border border-black/[0.1] bg-white text-[#0a0a0c]"
              >
                <Command className="w-4 h-4 text-[#2563eb]" />
              </button>
            )}

            <MagneticButton
              onClick={() => setMobileOpen(true)}
              cursorMode="hover"
              className="p-2.5 rounded-full border border-black/[0.1] bg-white text-[#0a0a0c] hover:bg-black/[0.04]"
            >
              <Menu className="w-5 h-5" />
            </MagneticButton>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onNavigate={onNavigate}
      />
    </>
  );
};
