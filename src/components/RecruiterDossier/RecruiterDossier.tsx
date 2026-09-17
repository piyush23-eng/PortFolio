import React, { useState } from 'react';
import { PERSONAL } from '../../data/personal';
import { PROJECTS } from '../../data/projects';
import { EXPERIENCES } from '../../data/experience';
import { SKILL_ITEMS } from '../../data/skills';
import { TECH_ICON_MAP } from '../TechLogos/TechIcons';
import {
  ExternalLink,
  Github,
  Mail,
  Phone,
  Linkedin,
  Copy,
  Check,
  Printer,
  Sparkles,
  CheckCircle2,
  Award,
  GraduationCap,
  Briefcase,
  Layers,
  Cpu,
  ArrowLeft
} from 'lucide-react';

interface RecruiterDossierProps {
  onSwitchToEditorial: () => void;
}

export const RecruiterDossier: React.FC<RecruiterDossierProps> = ({ onSwitchToEditorial }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#0a0a0c] selection:bg-[#2563eb] selection:text-white py-8 sm:py-12 px-4 sm:px-8 md:px-12 print:p-0 print:bg-white">
      {/* Sticky Top Control Bar */}
      <div className="max-w-5xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-black/[0.08] shadow-sm sticky top-4 z-30 print:hidden">
        <div className="flex items-center gap-2 font-mono-tech text-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-bold text-[#0a0a0c]">EXECUTIVE RESUME &amp; QUICK SUMMARY</span>
        </div>

        <div className="flex items-center gap-2 font-mono-tech text-xs">
          <button
            type="button"
            onClick={handlePrint}
            className="px-3 py-1.5 rounded-xl border border-black/[0.1] bg-white hover:bg-black/[0.04] text-[#475569] hover:text-[#0a0a0c] flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">PRINT / PDF</span>
          </button>

          <button
            type="button"
            onClick={onSwitchToEditorial}
            className="px-4 py-1.5 rounded-xl bg-[#0a0a0c] text-white hover:bg-[#2563eb] flex items-center gap-2 font-semibold transition-all cursor-pointer shadow-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO EDITORIAL MODE</span>
            <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
          </button>
        </div>
      </div>

      {/* Main Executive Paper Container */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-black/[0.1] shadow-md p-6 sm:p-12 md:p-14 space-y-12 print:border-0 print:shadow-none print:p-0">
        {/* 1. Header & Direct Contact Strip */}
        <header className="border-b border-black/[0.08] pb-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 font-mono-tech text-xs tracking-wider text-[#8492a6]">
                <span className="text-[#2563eb] font-bold">SOFTWARE ENGINEER</span>
                <span>•</span>
                <span>AI / ML</span>
                <span>•</span>
                <span>FULL-STACK</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-[#0a0a0c]">
                {PERSONAL.name}
              </h1>
              <p className="font-mono-tech text-xs sm:text-sm text-[#475569]">
                {PERSONAL.degree} &bull; {PERSONAL.university} (Class of {PERSONAL.graduationYear})
              </p>
              <p className="font-mono-tech text-xs text-[#8492a6]">
                Location: {PERSONAL.location} &bull; Status: Available for 2026&ndash;2027 Roles
              </p>
            </div>

            {/* Quick Contact Action Pills */}
            <div className="flex flex-wrap md:flex-col gap-2 shrink-0 print:hidden font-mono-tech text-xs">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3.5 py-2 rounded-xl bg-white border border-black/[0.12] hover:border-black/[0.3] text-[#0a0a0c] flex items-center justify-between gap-3 shadow-2xs transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#2563eb]" />
                  <span className="font-medium">{PERSONAL.email}</span>
                </div>
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#8492a6]" />}
              </button>

              <button
                type="button"
                onClick={handleCopyPhone}
                className="px-3.5 py-2 rounded-xl bg-white border border-black/[0.12] hover:border-black/[0.3] text-[#0a0a0c] flex items-center justify-between gap-3 shadow-2xs transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#2563eb]" />
                  <span className="font-medium">{PERSONAL.phone}</span>
                </div>
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#8492a6]" />}
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-3 py-1.5 rounded-xl bg-[#f5f5f7] hover:bg-black/[0.08] text-[#0a0a0c] flex items-center justify-center gap-1.5 font-medium transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-3 py-1.5 rounded-xl bg-[#2563eb]/10 hover:bg-[#2563eb]/20 text-[#2563eb] flex items-center justify-center gap-1.5 font-semibold transition-all"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Summary Lead */}
          <div className="p-4 rounded-2xl bg-[#fafafa] border border-black/[0.06] text-sm text-[#475569] leading-relaxed">
            <span className="font-semibold text-[#0a0a0c] font-mono-tech mr-2">// EXECUTIVE SUMMARY:</span>
            {PERSONAL.introParagraph}
          </div>
        </header>

        {/* 2. Key Verified Projects (LORCEN-RAG & TeLos) */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-black/[0.08] pb-3 font-mono-tech text-xs">
            <div className="flex items-center gap-2 font-bold text-[#0a0a0c]">
              <Layers className="w-4 h-4 text-[#2563eb]" />
              <span>FEATURED PRODUCTION PROJECTS</span>
            </div>
            <span className="text-[#8492a6]">02 LIVE DEPLOYMENTS</span>
          </div>

          <div className="space-y-8">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="p-6 sm:p-7 rounded-2xl bg-[#fafafa] border border-black/[0.08] space-y-5"
              >
                {/* Project Title & Links Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/[0.06] pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 font-mono-tech text-xs text-[#2563eb] font-bold">
                      <span>[{project.number}]</span>
                      <span className="text-[#0a0a0c]">{project.title}</span>
                      <span className="text-[#8492a6] font-normal">&bull; {project.year}</span>
                    </div>
                    <h3 className="font-display font-extrabold text-xl text-[#0a0a0c]">
                      {project.subtitle}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 font-mono-tech text-xs">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-[#2563eb] text-white hover:bg-blue-700 flex items-center gap-1.5 font-semibold transition-all shadow-xs"
                      >
                        <span>LIVE APP</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-white border border-black/[0.1] hover:bg-black/[0.04] text-[#0a0a0c] flex items-center gap-1.5 transition-all"
                      >
                        <Github className="w-3 h-3" />
                        <span>CODE</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Problem & Approach */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="space-y-1.5">
                    <span className="font-mono-tech text-[11px] font-bold text-[#8492a6] uppercase block">
                      The Engineering Challenge:
                    </span>
                    <p className="text-[#475569] leading-relaxed font-light">
                      {project.problem}
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <span className="font-mono-tech text-[11px] font-bold text-[#2563eb] uppercase block">
                      Production Architecture:
                    </span>
                    <p className="text-[#475569] leading-relaxed font-light">
                      {project.approach}
                    </p>
                  </div>
                </div>

                {/* Benchmark Telemetry Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {project.metrics.map((m, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-white border border-black/[0.06] space-y-1 min-w-0"
                    >
                      <span className="font-mono-tech text-[10px] text-[#8492a6] uppercase block truncate">
                        {m.label}
                      </span>
                      <div className="font-display font-black text-lg text-[#0a0a0c] truncate">
                        {m.endValue}
                      </div>
                      <div className="font-mono-tech text-[9px] text-[#2563eb] truncate">
                        {m.startValue ? `Baseline: ${m.startValue} →` : 'BENCHMARKED'}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-black/[0.04]">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-white border border-black/[0.06] font-mono-tech text-[11px] text-[#475569]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Work Experience & Internships */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-black/[0.08] pb-3 font-mono-tech text-xs">
            <div className="flex items-center gap-2 font-bold text-[#0a0a0c]">
              <Briefcase className="w-4 h-4 text-[#2563eb]" />
              <span>WORK EXPERIENCE &amp; INTERNSHIPS</span>
            </div>
            <span className="text-[#8492a6]">DATA &bull; BACKEND</span>
          </div>

          <div className="space-y-6">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="p-6 rounded-2xl bg-white border border-black/[0.08] space-y-4 shadow-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-black/[0.05] pb-3">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h4 className="font-display font-bold text-lg text-[#0a0a0c]">
                        {exp.role}
                      </h4>
                      {exp.badge && (
                        <span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-700 font-mono-tech text-[10px] font-bold border border-amber-500/20 flex items-center gap-1">
                          <Award className="w-3 h-3 text-amber-600" />
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <span className="font-mono-tech text-xs text-[#2563eb] font-semibold block mt-0.5">
                      {exp.company} &bull; {exp.location}
                    </span>
                  </div>

                  <span className="font-mono-tech text-xs text-[#8492a6] shrink-0 font-medium">
                    {exp.period}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 text-xs sm:text-sm text-[#475569]">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-[#2563eb] font-bold mt-0.5">&bull;</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-black/[0.04]">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-[#fafafa] border border-black/[0.06] font-mono-tech text-[10px] text-[#0a0a0c]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Verified Engineering Stack */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-black/[0.08] pb-3 font-mono-tech text-xs">
            <div className="flex items-center gap-2 font-bold text-[#0a0a0c]">
              <Cpu className="w-4 h-4 text-[#2563eb]" />
              <span>TECHNICAL SKILLS &amp; TOOLING</span>
            </div>
            <span className="text-[#8492a6]">24 PRODUCTION TECHNOLOGIES</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
            {SKILL_ITEMS.map((s) => {
              const Icon = TECH_ICON_MAP[s.iconKey];
              return (
                <div
                  key={s.id}
                  className="p-3 rounded-xl bg-[#fafafa] border border-black/[0.06] flex items-center gap-2.5"
                >
                  <div className="w-7 h-7 rounded-lg bg-white border border-black/[0.06] p-1.5 flex items-center justify-center shrink-0">
                    {Icon ? <Icon className="w-full h-full" colored={true} /> : null}
                  </div>
                  <div className="min-w-0">
                    <span className="font-display font-bold text-xs text-[#0a0a0c] block truncate">
                      {s.name}
                    </span>
                    <span className="font-mono-tech text-[9px] text-[#8492a6] block truncate">
                      {s.level}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. Academic Foundation (Zero CGPA) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-black/[0.08] pb-3 font-mono-tech text-xs">
            <div className="flex items-center gap-2 font-bold text-[#0a0a0c]">
              <GraduationCap className="w-4 h-4 text-[#2563eb]" />
              <span>ACADEMIC FOUNDATION</span>
            </div>
            <span className="text-[#8492a6]">2023 &mdash; 2027</span>
          </div>

          <div className="p-6 rounded-2xl bg-[#fafafa] border border-black/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="font-display font-bold text-lg text-[#0a0a0c]">
                {PERSONAL.degree}
              </h4>
              <p className="font-mono-tech text-xs text-[#2563eb] font-semibold">
                {PERSONAL.university}
              </p>
              <p className="text-xs text-[#475569] font-light leading-relaxed">
                Coursework: Data Structures &amp; Algorithms, Operating Systems, Database Management Systems, Computer Networks, Object-Oriented Software Engineering.
              </p>
            </div>
            <div className="text-left sm:text-right shrink-0">
              <span className="font-mono-tech text-xs font-semibold text-[#0a0a0c] block">Class of 2027</span>
              <span className="font-mono-tech text-[11px] text-[#8492a6] block">Dehradun, India</span>
            </div>
          </div>
        </section>

        {/* 6. Footer Call-to-Action */}
        <footer className="pt-8 border-t border-black/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono-tech text-xs text-[#8492a6] print:hidden">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>DIRECT INQUIRIES: <strong className="text-[#0a0a0c]">{PERSONAL.email}</strong></span>
          </div>

          <button
            type="button"
            onClick={onSwitchToEditorial}
            className="px-4 py-2 rounded-xl bg-[#0a0a0c] text-white hover:bg-[#2563eb] font-semibold transition-all self-start sm:self-auto cursor-pointer"
          >
            SWITCH TO CINEMATIC EDITORIAL EXPERIENCE &rarr;
          </button>
        </footer>
      </div>
    </div>
  );
};
