import React, { useRef } from 'react';
import { ProjectCase } from '../../data/projects';
import { LivePreviewWindow } from './LivePreviewWindow';
import { MetricCounter } from './MetricCounter';
import { MagneticButton } from '../MagneticButton/MagneticButton';
import { ExternalLink, Github, CheckCircle2 } from 'lucide-react';

interface ProjectCaseStudyProps {
  project: ProjectCase;
}

export const ProjectCaseStudy: React.FC<ProjectCaseStudyProps> = ({ project }) => {
  const caseRef = useRef<HTMLDivElement>(null);

  return (
    <article
      ref={caseRef}
      className="relative w-full py-16 sm:py-24 border-b border-black/[0.08] last:border-b-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* Pinned Left Header Column */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
          <div className="flex items-center gap-3 font-mono-tech text-xs tracking-widest text-[#8492a6] uppercase">
            <span className="text-[#2563eb] font-bold text-base">[{project.number}]</span>
            <span>CASE STUDY // {project.year}</span>
          </div>

          <h3 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0a0a0c] break-words">
            {project.title}
          </h3>

          <p className="font-mono-tech text-xs sm:text-sm text-[#475569] font-medium tracking-wide">
            {project.subtitle}
          </p>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-light">
            "{project.description}"
          </p>

          {/* Quick Technical Architecture Badges */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
            {project.technologies.slice(0, 7).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-white border border-black/[0.08] font-mono-tech text-xs text-[#0a0a0c] shadow-2xs"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 7 && (
              <span className="px-2.5 py-1 rounded-md bg-[#f5f5f7] border border-black/[0.06] font-mono-tech text-xs text-[#8492a6]">
                +{project.technologies.length - 7} more
              </span>
            )}
          </div>

          {/* CTA Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 font-mono-tech text-xs">
            <MagneticButton
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              cursorMode="open"
              className="w-full sm:w-auto justify-center px-6 py-3 rounded-full bg-[#2563eb] text-white font-semibold flex items-center gap-2 hover:bg-[#0a0a0c] transition-colors shadow-sm"
            >
              <span>LIVE DEMO</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </MagneticButton>

            <MagneticButton
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              cursorMode="hover"
              className="w-full sm:w-auto justify-center px-6 py-3 rounded-full border border-black/[0.12] bg-white text-[#0a0a0c] font-medium flex items-center gap-2 hover:bg-black/[0.04] transition-colors"
            >
              <span>GITHUB</span>
              <Github className="w-3.5 h-3.5" />
            </MagneticButton>
          </div>
        </div>

        {/* Right Scrollable Content Column: Preview + Deep Dive Case */}
        <div className="lg:col-span-8 space-y-12">
          {/* Live Browser Mockup Viewport */}
          <LivePreviewWindow project={project} />

          {/* Mini Case Study Narrative: Problem → Approach → Result */}
          <div className="space-y-8">
            {/* The Problem */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-black/[0.08] shadow-xs space-y-3">
              <div className="flex items-center gap-2 font-mono-tech text-xs tracking-widest text-[#8492a6] uppercase font-semibold">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>THE CHALLENGE &amp; FAILURE MODES</span>
              </div>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-[#0a0a0c]">
                Why standard architectures fail
              </h4>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-light">
                {project.problem}
              </p>
            </div>

            {/* The Approach */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-black/[0.08] shadow-xs space-y-3">
              <div className="flex items-center gap-2 font-mono-tech text-xs tracking-widest text-[#8492a6] uppercase font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#2563eb]" />
                <span>THE ENGINEERING APPROACH</span>
              </div>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-[#0a0a0c]">
                Architecture decisions &amp; pipeline design
              </h4>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-light">
                {project.approach}
              </p>
            </div>

            {/* The Result + Animated Metric Counters */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#ffffff] border border-black/[0.08] shadow-xs space-y-6">
              <div className="flex items-center gap-2 font-mono-tech text-xs tracking-widest text-[#8492a6] uppercase font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>MEASURED IMPACT &amp; BENCHMARKS</span>
              </div>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-[#0a0a0c]">
                Production metrics &amp; verified outcomes
              </h4>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-light">
                {project.result}
              </p>

              {/* Animated Counters */}
              <MetricCounter metrics={project.metrics} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
