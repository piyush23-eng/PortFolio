import React, { useState, useEffect, useRef, useMemo } from 'react';
import { PERSONAL } from '../../data/personal';
import {
  Search,
  Command,
  ExternalLink,
  Volume2,
  VolumeX,
  Sparkles,
  Layers,
  Briefcase,
  GraduationCap,
  Mail,
  X,
  Check,
  Zap,
  Phone,
  Code,
  CornerDownLeft
} from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (targetId: string) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onPlayClick: () => void;
  onPlaySuccess: () => void;
  viewMode?: 'editorial' | 'recruiter';
  onToggleViewMode?: () => void;
}

type CommandCategory = 'All' | 'Actions' | 'Navigation' | 'Projects' | 'Controls';

interface CommandItem {
  id: string;
  category: 'Actions' | 'Navigation' | 'Projects' | 'Controls';
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  action: () => void;
  badge?: string;
  shortcut?: string;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onNavigate,
  soundEnabled,
  onToggleSound,
  onPlayClick,
  onPlaySuccess,
  viewMode = 'editorial',
  onToggleViewMode,
}) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CommandCategory>('All');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    onPlaySuccess();
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`Copied ${label} to clipboard!`);
    onClose();
  };

  // Lock body scroll when palette is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        inputRef.current?.focus();
        inputRef.current?.select();
      }, 50);
      setSelectedIndex(0);
      setQuery('');
      setSelectedCategory('All');
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const commands: CommandItem[] = useMemo(
    () => [
      // 1. Instant Actions
      {
        id: 'copy-email',
        category: 'Actions',
        title: 'Copy Direct Email Address',
        subtitle: `${PERSONAL.email} (Immediate response for software & AI engineering opportunities)`,
        icon: <Mail className="w-4 h-4 text-[#2563eb]" />,
        action: () => copyToClipboard(PERSONAL.email, 'email address'),
        badge: 'COPY EMAIL',
        shortcut: '↵',
      },
      {
        id: 'copy-phone',
        category: 'Actions',
        title: 'Copy Phone / WhatsApp',
        subtitle: `${PERSONAL.phone} (Dehradun, India • Available for calls & instant messaging)`,
        icon: <Phone className="w-4 h-4 text-[#2563eb]" />,
        action: () => copyToClipboard(PERSONAL.phone, 'phone number'),
        badge: 'COPY PHONE',
        shortcut: '↵',
      },
      {
        id: 'open-github',
        category: 'Actions',
        title: 'Open GitHub Profile',
        subtitle: 'Explore open-source repositories, commit history & codebase architecture (github.com/piyush23-eng)',
        icon: <Code className="w-4 h-4 text-[#0a0a0c]" />,
        action: () => {
          window.open(PERSONAL.github, '_blank');
          onClose();
        },
        badge: 'GITHUB ↗',
      },
      {
        id: 'open-linkedin',
        category: 'Actions',
        title: 'Open LinkedIn Profile',
        subtitle: 'Connect professionally, view verified recommendations & credentials (linkedin.com/in/piyushpankaj23)',
        icon: <ExternalLink className="w-4 h-4 text-[#0a0a0c]" />,
        action: () => {
          window.open(PERSONAL.linkedin, '_blank');
          onClose();
        },
        badge: 'LINKEDIN ↗',
      },

      // 2. Navigation
      {
        id: 'nav-work',
        category: 'Navigation',
        title: 'Jump to Selected Work Case Studies',
        subtitle: 'Deep dive into 01 — LORCEN-RAG & 02 — TeLos production architectures',
        icon: <Layers className="w-4 h-4 text-[#2563eb]" />,
        action: () => {
          onClose();
          onNavigate('#work');
        },
        badge: '#WORK',
      },
      {
        id: 'nav-stack',
        category: 'Navigation',
        title: 'Jump to Engineering Stack & Toolchain',
        subtitle: '24 Verified skills with brand SVG logos, production benchmarks & domain filters',
        icon: <Sparkles className="w-4 h-4 text-[#2563eb]" />,
        action: () => {
          onClose();
          onNavigate('#stack');
        },
        badge: '#STACK',
      },
      {
        id: 'nav-experience',
        category: 'Navigation',
        title: 'Jump to Experience & Internships',
        subtitle: 'Celebal Technologies (Data Engineering) & Elevate Labs (Java Developer Intern)',
        icon: <Briefcase className="w-4 h-4 text-[#2563eb]" />,
        action: () => {
          onClose();
          onNavigate('#experience');
        },
        badge: '#EXPERIENCE',
      },
      {
        id: 'nav-education',
        category: 'Navigation',
        title: 'Jump to Academic Foundation',
        subtitle: 'DIT University B.Tech CSE (Class of 2027) • Elevate Labs Best Performer Award #1',
        icon: <GraduationCap className="w-4 h-4 text-[#2563eb]" />,
        action: () => {
          onClose();
          onNavigate('#education');
        },
        badge: '#EDUCATION',
      },
      {
        id: 'nav-about',
        category: 'Navigation',
        title: 'Jump to Engineering Principles',
        subtitle: 'Core engineering principles, background & current technical focus',
        icon: <Sparkles className="w-4 h-4 text-[#2563eb]" />,
        action: () => {
          onClose();
          onNavigate('#about');
        },
        badge: '#ABOUT',
      },
      {
        id: 'nav-contact',
        category: 'Navigation',
        title: "Jump to Let's Build Something Interesting",
        subtitle: 'Direct email inquiries, contact details, and collaboration channels',
        icon: <Mail className="w-4 h-4 text-[#2563eb]" />,
        action: () => {
          onClose();
          onNavigate('#contact');
        },
        badge: '#CONTACT',
      },

      // 3. Projects Live Launch
      {
        id: 'proj-lorcen',
        category: 'Projects',
        title: 'Launch LORCEN-RAG Live App',
        subtitle: 'Domain-Specialized GATE CS Reasoning LLM with hybrid retrieval & QLoRA tuning (lorcenrag.up.railway.app)',
        icon: <ExternalLink className="w-4 h-4 text-emerald-600" />,
        action: () => {
          window.open('https://lorcenrag.up.railway.app', '_blank');
          onClose();
        },
        badge: 'LIVE ON RAILWAY ↗',
      },
      {
        id: 'proj-telos',
        category: 'Projects',
        title: 'Launch TeLos Real-Time Voice App',
        subtitle: 'Sub-100ms Bidirectional Speech Analytics & PCM Audio Streaming Engine (telos-evk7.onrender.com)',
        icon: <ExternalLink className="w-4 h-4 text-emerald-600" />,
        action: () => {
          window.open('https://telos-evk7.onrender.com', '_blank');
          onClose();
        },
        badge: 'LIVE ON RENDER ↗',
      },

      // 4. View Mode & Controls
      {
        id: 'toggle-view-mode',
        category: 'Controls',
        title: viewMode === 'recruiter' ? 'Switch to Full Portfolio View' : 'Switch to Quick Executive Resume',
        subtitle: viewMode === 'recruiter' ? 'Explore full interactive case studies, engineering stack & detailed project write-ups' : 'High-density one-page resume format with direct contacts & key project impact metrics',
        icon: <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />,
        action: () => {
          if (onToggleViewMode) onToggleViewMode();
          onClose();
          showToast(viewMode === 'recruiter' ? 'Switched to Full Portfolio View' : 'Switched to Quick Executive Resume');
        },
        badge: viewMode === 'recruiter' ? 'PORTFOLIO' : 'QUICK RESUME',
      },
      {
        id: 'toggle-sound',
        category: 'Controls',
        title: soundEnabled ? 'Mute Tactile Soundscapes' : 'Enable Tactile Soundscapes',
        subtitle: soundEnabled ? 'Disable Web Audio procedural feedback' : 'Activate Apple-grade feedback ticks, mechanical clicks & success chimes',
        icon: soundEnabled ? <Volume2 className="w-4 h-4 text-[#2563eb]" /> : <VolumeX className="w-4 h-4 text-[#8492a6]" />,
        action: () => {
          onToggleSound();
          showToast(soundEnabled ? 'Tactile soundscapes muted' : 'Tactile soundscapes activated!');
          onClose();
        },
        badge: soundEnabled ? 'SOUND: ON' : 'SOUND: OFF',
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [viewMode, soundEnabled, onToggleViewMode, onToggleSound, onNavigate, onClose]
  );

  const filteredCommands = useMemo(() => {
    let list = commands;
    if (selectedCategory !== 'All') {
      list = list.filter((c) => c.category === selectedCategory);
    }
    const q = query.trim().toLowerCase();
    if (!q) return list;
    return list.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.subtitle.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        (c.badge && c.badge.toLowerCase().includes(q))
    );
  }, [commands, query, selectedCategory]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query, selectedCategory]);

  // Keep active item in viewport
  useEffect(() => {
    if (!isOpen) return;
    const itemEl = itemRefs.current[selectedIndex];
    if (itemEl && listRef.current) {
      itemEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [selectedIndex, isOpen]);

  // Internal palette keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        onPlayClick();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredCommands.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        onPlayClick();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % Math.max(1, filteredCommands.length));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const selected = filteredCommands[selectedIndex];
        if (selected) {
          onPlayClick();
          selected.action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, onClose, onPlayClick]);

  if (!isOpen && !toastMessage) return null;

  return (
    <>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-8 right-8 z-[100005] animate-fade-in transition-all duration-300">
          <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#0a0a0c] text-white shadow-2xl border border-white/10 font-mono-tech text-xs tracking-wider">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Palette Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100000] flex items-start justify-center pt-12 sm:pt-20 md:pt-24 px-4 sm:px-6">
          {/* Backdrop Blur */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-200"
            onClick={onClose}
          />

          {/* Expansive Palette Box: Generous 920px width (Max-w-4xl) */}
          <div className="relative w-full max-w-4xl bg-white/95 backdrop-blur-2xl rounded-3xl border border-black/[0.12] shadow-[0_30px_90px_rgba(0,0,0,0.22)] overflow-hidden z-10 flex flex-col">
            {/* Search Input Bar */}
            <div className="flex items-center px-6 sm:px-8 py-5 border-b border-black/[0.08] gap-4 bg-white">
              <div className="w-9 h-9 rounded-xl bg-[#2563eb]/10 text-[#2563eb] flex items-center justify-center shrink-0">
                <Search className="w-5 h-5" />
              </div>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search commands, projects, skills, or jump to section... (e.g. email, stack, lorcen)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent font-mono-tech text-base sm:text-lg text-[#0a0a0c] placeholder:text-[#8492a6] focus:outline-none tracking-tight"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery('');
                    inputRef.current?.focus();
                  }}
                  className="p-1.5 rounded-full text-[#8492a6] hover:text-[#0a0a0c] hover:bg-black/[0.05] transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                type="button"
                onClick={onClose}
                className="hidden sm:flex items-center gap-1.5 font-mono-tech text-xs text-[#8492a6] hover:text-[#0a0a0c] px-2.5 py-1 rounded-lg bg-black/[0.04] border border-black/[0.06] cursor-pointer transition-all"
              >
                <span>ESC</span>
              </button>
            </div>

            {/* Category Quick Filter Pills */}
            <div className="flex items-center gap-2 px-6 sm:px-8 py-2.5 border-b border-black/[0.05] bg-[#fafafa] overflow-x-auto no-scrollbar">
              {(['All', 'Actions', 'Navigation', 'Projects', 'Controls'] as CommandCategory[]).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat);
                    onPlayClick();
                  }}
                  className={`px-3 py-1 rounded-lg font-mono-tech text-xs tracking-wider transition-all cursor-pointer shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-[#0a0a0c] text-white font-bold shadow-2xs'
                      : 'bg-white border border-black/[0.06] text-[#475569] hover:text-[#0a0a0c] hover:border-black/[0.15]'
                  }`}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Commands List (Expanded Height) */}
            <div ref={listRef} className="max-h-[460px] sm:max-h-[500px] overflow-y-auto p-3 sm:p-4 space-y-1.5">
              {filteredCommands.length === 0 ? (
                <div className="py-20 text-center space-y-2">
                  <p className="font-mono-tech text-sm text-[#8492a6]">
                    No matching commands found for &ldquo;<span className="text-[#0a0a0c] font-bold">{query}</span>&rdquo;
                  </p>
                  <p className="font-mono-tech text-xs text-[#8492a6]">
                    Try searching &ldquo;email&rdquo;, &ldquo;phone&rdquo;, &ldquo;lorcen&rdquo;, &ldquo;stack&rdquo;, or &ldquo;resume&rdquo;
                  </p>
                </div>
              ) : (
                filteredCommands.map((cmd, idx) => {
                  const isSelected = selectedIndex === idx;
                  return (
                    <div
                      key={cmd.id}
                      ref={(el) => (itemRefs.current[idx] = el)}
                      onClick={() => {
                        onPlayClick();
                        cmd.action();
                      }}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-center justify-between px-4 sm:px-5 py-3.5 rounded-2xl cursor-pointer transition-all duration-150 ${
                        isSelected
                          ? 'bg-[#0a0a0c] text-white shadow-sm -translate-y-0.5'
                          : 'hover:bg-black/[0.03] text-[#0a0a0c]'
                      }`}
                    >
                      <div className="flex items-center gap-4 min-w-0 pr-4">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                            isSelected ? 'bg-white/10 text-white' : 'bg-black/[0.04] text-[#475569]'
                          }`}
                        >
                          {cmd.icon}
                        </div>
                        <div className="min-w-0 space-y-0.5">
                          <span className="font-display font-bold text-sm sm:text-base block truncate">
                            {cmd.title}
                          </span>
                          <span
                            className={`font-mono-tech text-xs block truncate ${
                              isSelected ? 'text-white/70' : 'text-[#8492a6]'
                            }`}
                          >
                            {cmd.subtitle}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 shrink-0 ml-auto">
                        {cmd.badge && (
                          <span
                            className={`font-mono-tech text-[10px] uppercase font-semibold px-2.5 py-1 rounded-md tracking-wider ${
                              isSelected ? 'bg-white/15 text-white' : 'bg-black/[0.05] text-[#8492a6]'
                            }`}
                          >
                            {cmd.badge}
                          </span>
                        )}
                        <div
                          className={`w-6 h-6 rounded-md flex items-center justify-center transition-all ${
                            isSelected ? 'bg-white/20 text-white' : 'text-transparent'
                          }`}
                        >
                          <CornerDownLeft className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Expansive Footer Status Bar */}
            <div className="flex flex-wrap items-center justify-between px-6 sm:px-8 py-4 border-t border-black/[0.06] bg-[#fafafa] font-mono-tech text-xs text-[#8492a6]">
              <div className="flex items-center gap-5">
                <span className="flex items-center gap-1.5">
                  <kbd className="px-2 py-0.5 rounded bg-white border border-black/[0.1] shadow-2xs font-sans text-[11px] text-[#0a0a0c] font-bold">↑</kbd>
                  <kbd className="px-2 py-0.5 rounded bg-white border border-black/[0.1] shadow-2xs font-sans text-[11px] text-[#0a0a0c] font-bold">↓</kbd>
                  <span>Navigate</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <kbd className="px-2.5 py-0.5 rounded bg-white border border-black/[0.1] shadow-2xs font-sans text-[11px] text-[#0a0a0c] font-bold">↵</kbd>
                  <span>Execute</span>
                </span>
                <span className="flex items-center gap-1.5 hidden sm:flex">
                  <kbd className="px-2 py-0.5 rounded bg-white border border-black/[0.1] shadow-2xs font-sans text-[11px] text-[#0a0a0c] font-bold">ESC</kbd>
                  <span>Dismiss</span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Command className="w-4 h-4 text-[#2563eb]" />
                <span className="font-bold text-[#0a0a0c] tracking-wide">PIYUSH PANKAJ // COMMAND PALETTE</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
