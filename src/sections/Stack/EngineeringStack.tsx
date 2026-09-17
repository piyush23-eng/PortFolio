import React, { useState } from 'react';
import { SKILL_CATEGORIES, SKILL_ITEMS, SkillCategory, SkillItem } from '../../data/skills';
import { TECH_ICON_MAP } from '../../components/TechLogos/TechIcons';
import { KineticStream } from '../../components/KineticText/KineticStream';
import { Cpu, Terminal, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const EngineeringStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(SKILL_ITEMS[0]);
  const [hoveredSkillId, setHoveredSkillId] = useState<string | null>(null);

  const filteredSkills = activeCategory === 'all'
    ? SKILL_ITEMS
    : SKILL_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section
      id="stack"
      className="relative w-full py-20 sm:py-28 md:py-36 border-t border-black/[0.06] bg-[#fafafa] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-12 md:px-16 space-y-12 sm:space-y-14">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-black/[0.08]">
          <div className="space-y-2.5 sm:space-y-3">
            <div className="flex items-center gap-3 font-mono-tech text-[11px] sm:text-xs tracking-wider sm:tracking-widest text-[#8492a6] uppercase">
              <span className="text-[#2563eb] font-bold">[ 06 ]</span>
              <span>CORE TECHNOLOGIES &amp; TOOLING</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0a0a0c]">
              ENGINEERING STACK
            </h2>
            <p className="font-mono-tech text-xs sm:text-sm text-[#475569] max-w-xl">
              Tools, frameworks, and databases used across production projects, open-source repositories, and internship assignments.
            </p>
          </div>

          {/* Quick Stat Pill */}
          <div className="flex items-center gap-4 px-5 py-3 rounded-2xl bg-white border border-black/[0.08] shadow-2xs shrink-0 self-start lg:self-auto">
            <div className="w-9 h-9 rounded-xl bg-[#2563eb]/10 text-[#2563eb] flex items-center justify-center font-bold">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <span className="text-xs font-mono-tech font-bold text-[#0a0a0c] block">
                24 CORE TECHNOLOGIES
              </span>
              <span className="text-[11px] font-mono-tech text-[#8492a6] block">
                Machine Learning • Full-Stack • Data Engineering
              </span>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {SKILL_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl font-mono-tech text-xs tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#0a0a0c] text-white shadow-sm'
                    : 'bg-white border border-black/[0.08] text-[#475569] hover:text-[#0a0a0c] hover:border-black/[0.2]'
                }`}
                data-cursor="hover"
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-black/[0.05] text-[#8492a6]'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Skills Grid with Brand Logos for EVERY Skill */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {filteredSkills.map((skill) => {
            const IconComponent = TECH_ICON_MAP[skill.iconKey];
            const isHovered = hoveredSkillId === skill.id;
            const isSelected = selectedSkill.id === skill.id;

            return (
              <div
                key={skill.id}
                onClick={() => setSelectedSkill(skill)}
                onMouseEnter={() => {
                  setHoveredSkillId(skill.id);
                  setSelectedSkill(skill);
                }}
                onMouseLeave={() => setHoveredSkillId(null)}
                data-cursor="hover"
                className={`group relative p-4 sm:p-5 rounded-2xl bg-white border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#2563eb] shadow-md -translate-y-1 bg-gradient-to-b from-white to-[#2563eb]/[0.02]'
                    : 'border-black/[0.08] hover:border-black/[0.2] hover:shadow-sm hover:-translate-y-0.5'
                }`}
              >
                {/* Top Logo Container */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="relative w-12 h-12 rounded-xl flex items-center justify-center p-2.5 transition-all duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: isHovered || isSelected ? `${skill.brandColor}12` : '#f5f5f7',
                    }}
                  >
                    {IconComponent ? (
                      <IconComponent
                        className="w-full h-full object-contain transition-all duration-300"
                        colored={isHovered || isSelected}
                      />
                    ) : (
                      <Cpu className="w-6 h-6 text-[#8492a6]" />
                    )}
                  </div>

                  {/* Level Tag */}
                  <span className="font-mono-tech text-[10px] text-[#8492a6] group-hover:text-[#2563eb] transition-colors">
                    {skill.level}
                  </span>
                </div>

                {/* Skill Name & Domain */}
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#0a0a0c] tracking-tight group-hover:text-[#2563eb] transition-colors flex items-center justify-between">
                    <span>{skill.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#2563eb]" />
                  </h3>
                  <p className="font-mono-tech text-[11px] text-[#8492a6] truncate">
                    {skill.categoryLabel}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Skill Production Telemetry Dossier */}
        {selectedSkill && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.08] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-4 flex items-center gap-5 border-b lg:border-b-0 lg:border-r border-black/[0.06] pb-6 lg:pb-0 lg:pr-6">
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center p-3.5 shrink-0 shadow-inner"
                style={{ backgroundColor: `${selectedSkill.brandColor}18` }}
              >
                {(() => {
                  const Icon = TECH_ICON_MAP[selectedSkill.iconKey];
                  return Icon ? (
                    <Icon className="w-full h-full" colored={true} />
                  ) : (
                    <Cpu className="w-8 h-8 text-[#2563eb]" />
                  );
                })()}
              </div>

              <div className="space-y-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-display font-black text-2xl text-[#0a0a0c]">
                    {selectedSkill.name}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                </div>
                <span className="font-mono-tech text-xs text-[#2563eb] font-semibold block">
                  {selectedSkill.categoryLabel}
                </span>
                <span className="font-mono-tech text-[11px] text-[#8492a6] block">
                  STATUS: {selectedSkill.level.toUpperCase()}
                </span>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 font-mono-tech text-xs text-[#8492a6]">
                <Terminal className="w-3.5 h-3.5 text-[#2563eb]" />
                <span className="font-bold text-[#0a0a0c]">PRODUCTION CONTEXT:</span>
              </div>
              <p className="text-sm sm:text-base text-[#0a0a0c] font-normal leading-relaxed">
                {selectedSkill.description}
              </p>
              <div className="p-3 rounded-xl bg-[#f5f5f7] border border-black/[0.04]">
                <p className="font-mono-tech text-xs text-[#475569]">
                  <span className="font-semibold text-[#0a0a0c]">// Implementation Note: </span>
                  {selectedSkill.productionContext}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Kinetic Typographic & Logo Stream Ribbon */}
      <div className="mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 mb-6">
          <span className="font-mono-tech text-xs tracking-widest text-[#8492a6] uppercase block">
            // ACTIVE TOOLCHAIN &amp; ECOSYSTEM
          </span>
        </div>
        <KineticStream />
      </div>
    </section>
  );
};
