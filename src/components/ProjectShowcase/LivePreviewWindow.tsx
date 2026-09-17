import React from 'react';
import { ExternalLink, Lock, Globe } from 'lucide-react';
import { ProjectCase } from '../../data/projects';

interface LivePreviewWindowProps {
  project: ProjectCase;
}

export const LivePreviewWindow: React.FC<LivePreviewWindowProps> = ({ project }) => {
  return (
    <div
      className="group relative w-full rounded-2xl sm:rounded-3xl bg-[#ffffff] border border-black/[0.1] shadow-[0_12px_44px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-500 hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)] hover:border-black/[0.22]"
      data-cursor="open"
      data-cursor-text="OPEN ↗"
    >
      {/* macOS Browser Header Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#f5f5f7] border-b border-black/[0.08]">
        {/* macOS Window Controls */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d89e24]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29]" />
        </div>

        {/* Address Bar */}
        <div className="hidden xs:flex items-center gap-2 px-2.5 sm:px-5 py-1 rounded-lg bg-white border border-black/[0.08] font-mono-tech text-[10px] sm:text-xs text-[#475569] max-w-[140px] sm:max-w-md truncate shadow-xs">
          <Lock className="w-3 h-3 text-emerald-600 shrink-0" />
          <span className="truncate font-medium">{project.liveUrl.replace('https://', '')}</span>
        </div>

        {/* Live Status Pill */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 font-mono-tech text-[11px] font-semibold text-[#2563eb] hover:text-[#0a0a0c] transition-colors shrink-0"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="hidden sm:inline">LIVE PROJECT</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Real Screenshot of Project Homepage */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#0a0a0c]">
        <img
          src={project.imagePreview}
          alt={`${project.title} live homepage preview`}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02] will-change-transform"
        />

        {/* Bottom Hover Overlay Bar */}
        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 sm:gap-4 text-white">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2 font-mono-tech text-[10px] sm:text-[11px] text-white/80">
              <Globe className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span className="font-semibold text-white">{project.title}</span>
              <span className="text-white/40">•</span>
              <span className="text-emerald-400">Production Verified</span>
            </div>
            <p className="font-mono-tech text-xs text-white/70 hidden sm:block">
              {project.tagline}
            </p>
          </div>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white text-[#0a0a0c] hover:bg-[#2563eb] hover:text-white font-mono-tech font-bold text-xs tracking-wider transition-all shadow-md shrink-0 w-full sm:w-auto"
          >
            <span>OPEN LIVE APP</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
