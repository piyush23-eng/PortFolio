import React, { useState, useEffect } from 'react';
import { useLenis } from './hooks/useLenis';
import { useSoundFX } from './hooks/useSoundFX';
import { CustomCursor } from './components/CustomCursor/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen/LoadingScreen';
import { Navbar } from './components/Navigation/Navbar';
import { CommandPalette } from './components/CommandPalette/CommandPalette';
import { RecruiterDossier } from './components/RecruiterDossier/RecruiterDossier';
import { Hero } from './sections/Hero/Hero';
import { EditorialIntro } from './sections/Intro/EditorialIntro';
import { SelectedWork } from './sections/Work/SelectedWork';
import { WhatIBuild } from './sections/TechnicalIdentity/WhatIBuild';
import { ExperienceTimeline } from './sections/Experience/ExperienceTimeline';
import { EngineeringStack } from './sections/Stack/EngineeringStack';
import { EducationAchievements } from './sections/Education/EducationAchievements';
import { PersonalPhilosophy } from './sections/About/PersonalPhilosophy';
import { ContactCTA } from './sections/Contact/ContactCTA';
import { Footer } from './components/Footer/Footer';

export const App: React.FC = () => {
  const [loadingDone, setLoadingDone] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'editorial' | 'recruiter'>('editorial');
  const { scrollTo } = useLenis();
  const soundFX = useSoundFX();

  const handleNavigate = (targetId: string) => {
    soundFX.playClick();
    if (viewMode === 'recruiter') {
      setViewMode('editorial');
      setTimeout(() => {
        scrollTo(targetId, { offset: -24 });
      }, 100);
    } else {
      scrollTo(targetId, { offset: -24 });
    }
  };

  const handleScrollToTop = () => {
    soundFX.playClick();
    scrollTo(0, { duration: 1.5 });
  };

  const handleToggleViewMode = () => {
    soundFX.playClick();
    setViewMode((prev) => {
      const next = prev === 'editorial' ? 'recruiter' : 'editorial';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return next;
    });
  };

  // Global Cmd+K / Ctrl+K keyboard shortcut (using capture phase to intercept before browser omnibox)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        e.stopPropagation();
        soundFX.playClick();
        setIsPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => window.removeEventListener('keydown', handleKeyDown, { capture: true });
  }, [soundFX]);

  return (
    <div className="relative min-h-screen bg-[#fafafa] text-[#0a0a0c] selection:bg-[#2563eb] selection:text-white">
      {/* Subtle Analog Texture Grain */}
      <div className="noise-overlay" />

      {/* Desktop Context-Aware Cursor */}
      <CustomCursor />

      {/* Editorial Minimal Loading Screen */}
      {!loadingDone && (
        <LoadingScreen onComplete={() => setLoadingDone(true)} />
      )}

      {/* Navigation */}
      <Navbar
        onNavigate={handleNavigate}
        onOpenPalette={() => {
          soundFX.playClick();
          setIsPaletteOpen(true);
        }}
        soundEnabled={soundFX.enabled}
        onToggleSound={soundFX.toggleSound}
        viewMode={viewMode}
        onToggleViewMode={handleToggleViewMode}
      />

      {/* Spotlight Command Palette (Cmd + K) */}
      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        onNavigate={handleNavigate}
        soundEnabled={soundFX.enabled}
        onToggleSound={soundFX.toggleSound}
        onPlayClick={soundFX.playClick}
        onPlaySuccess={soundFX.playSuccess}
        viewMode={viewMode}
        onToggleViewMode={handleToggleViewMode}
      />

      {/* Dynamic View: Recruiter 30-Second Fast-Track Dossier OR Cinematic Editorial Experience */}
      {viewMode === 'recruiter' ? (
        <main className="relative z-10 pt-20">
          <RecruiterDossier onSwitchToEditorial={handleToggleViewMode} />
        </main>
      ) : (
        <main className="relative z-10 flex flex-col w-full overflow-hidden">
          <Hero onScrollExplore={() => handleNavigate('#intro')} />
          <EditorialIntro />
          <SelectedWork />
          <WhatIBuild />
          <ExperienceTimeline />
          <EngineeringStack />
          <EducationAchievements />
          <PersonalPhilosophy />
          <ContactCTA />
        </main>
      )}

      {/* Minimal Editorial Footer */}
      {viewMode === 'editorial' && (
        <Footer onScrollToTop={handleScrollToTop} />
      )}
    </div>
  );
};

export default App;
