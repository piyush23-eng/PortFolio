import React, { useState } from 'react';
import { KINETIC_ROW_1, KINETIC_ROW_2, KINETIC_ROW_3, KineticKeyword } from '../../data/skills';
import { TECH_ICON_MAP } from '../TechLogos/TechIcons';
import { Terminal, Sparkles } from 'lucide-react';

export const KineticStream: React.FC = () => {
  const [activeItem, setActiveItem] = useState<KineticKeyword | null>(null);

  const renderTickerItem = (item: KineticKeyword, idx: number, isAccentRow = false) => {
    const IconComponent = TECH_ICON_MAP[item.iconKey];
    const isHovered = activeItem?.word === item.word;

    return (
      <div
        key={idx}
        className="inline-flex items-center mx-3 sm:mx-5 group cursor-pointer transition-all duration-200"
        onMouseEnter={() => setActiveItem(item)}
        onMouseLeave={() => setActiveItem(null)}
        data-cursor="hover"
      >
        <div className="flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-2 rounded-xl bg-white/70 border border-black/[0.06] group-hover:border-[#2563eb]/40 group-hover:bg-white group-hover:shadow-sm transition-all duration-200">
          {IconComponent && (
            <span className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 transition-transform duration-300 group-hover:scale-110">
              <IconComponent
                className="w-5 h-5 sm:w-6 sm:h-6"
                colored={isHovered}
              />
            </span>
          )}
          <span
            className={`font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight transition-colors ${
              isAccentRow
                ? 'text-[#0a0a0c] group-hover:text-[#2563eb]'
                : 'text-[#475569] group-hover:text-[#0a0a0c]'
            }`}
          >
            {item.word}
          </span>
          <span className="text-[10px] font-mono-tech uppercase tracking-wider text-[#8492a6] px-1.5 py-0.5 rounded bg-black/[0.04]">
            {item.category}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full space-y-3 select-none">
      {/* Row 1 (Moves Left) */}
      <div className="relative w-full overflow-hidden py-2 bg-gradient-to-r from-[#fafafa] via-white to-[#fafafa]">
        <div className="flex whitespace-nowrap animate-ticker-left">
          {[...KINETIC_ROW_1, ...KINETIC_ROW_1, ...KINETIC_ROW_1, ...KINETIC_ROW_1].map((item, idx) =>
            renderTickerItem(item, idx, false)
          )}
        </div>
      </div>

      {/* Row 2 (Moves Right) */}
      <div className="relative w-full overflow-hidden py-2 bg-[#f5f5f7]">
        <div className="flex whitespace-nowrap animate-ticker-right">
          {[...KINETIC_ROW_2, ...KINETIC_ROW_2, ...KINETIC_ROW_2, ...KINETIC_ROW_2].map((item, idx) =>
            renderTickerItem(item, idx, true)
          )}
        </div>
      </div>

      {/* Row 3 (Moves Left) */}
      <div className="relative w-full overflow-hidden py-2 bg-gradient-to-r from-[#fafafa] via-white to-[#fafafa]">
        <div className="flex whitespace-nowrap animate-ticker-left">
          {[...KINETIC_ROW_3, ...KINETIC_ROW_3, ...KINETIC_ROW_3, ...KINETIC_ROW_3].map((item, idx) =>
            renderTickerItem(item, idx, false)
          )}
        </div>
      </div>

      {/* Dynamic Telemetry Inspector */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-6">
        <div className="min-h-16 py-3 rounded-2xl border border-black/[0.08] bg-white shadow-xs flex items-center px-6 transition-all duration-300">
          <Terminal className="w-4 h-4 text-[#2563eb] mr-3 shrink-0" />
          {activeItem ? (
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono-tech text-xs sm:text-sm">
              <span className="text-[#0a0a0c] font-bold tracking-wider">{activeItem.word}</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#2563eb]/10 text-[#2563eb] font-semibold">
                {activeItem.category}
              </span>
              <span className="text-[#475569]">{activeItem.description}</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 font-mono-tech text-xs text-[#8492a6] tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#2563eb]" />
              <span>HOVER OVER ANY TECHNOLOGY TO VIEW DETAILS &amp; PRODUCTION CONTEXT</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
