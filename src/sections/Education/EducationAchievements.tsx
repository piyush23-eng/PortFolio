import React from 'react';
import { PERSONAL } from '../../data/personal';
import { Award, GraduationCap } from 'lucide-react';

export const EducationAchievements: React.FC = () => {
  return (
    <section
      className="relative w-full py-20 sm:py-28 md:py-36 px-4 sm:px-12 md:px-16 border-t border-black/[0.06] bg-[#fafafa]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-start">
        {/* Left Column: Minimal Academic Foundation */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3 font-mono-tech text-[11px] sm:text-xs tracking-wider sm:tracking-widest text-[#8492a6] uppercase">
            <span className="text-[#2563eb] font-bold">[ 07 ]</span>
            <span>ACADEMIC FOUNDATION</span>
          </div>

          <div>
            <span className="font-mono-tech text-xs text-[#2563eb] font-bold tracking-widest block uppercase mb-1">
              UNDERGRADUATE DEGREE
            </span>
            <h3 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#0a0a0c] tracking-tight leading-tight">
              B.Tech in Computer Science &amp; Engineering
            </h3>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-black/[0.08] shadow-xs space-y-4 font-mono-tech text-xs text-[#475569]">
            <div className="flex items-center justify-between border-b border-black/[0.06] pb-3">
              <span className="text-[#8492a6]">INSTITUTION</span>
              <span className="text-[#0a0a0c] font-semibold">{PERSONAL.university}</span>
            </div>
            <div className="flex items-center justify-between border-b border-black/[0.06] pb-3">
              <span className="text-[#8492a6]">TIMELINE</span>
              <span className="text-[#0a0a0c] font-semibold">{PERSONAL.duration} (Grad: {PERSONAL.graduationYear})</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#8492a6]">CORE DOMAIN</span>
              <span className="text-[#2563eb] font-bold text-sm">Full-Stack, AI/ML &amp; Systems</span>
            </div>
          </div>

          <p className="font-mono-tech text-xs text-[#8492a6] leading-relaxed">
            Prior Schooling: Senior Secondary (CBSE 72%, 2022) &amp; Secondary (CBSE 90.6%, 2020) at DAV Public School.
          </p>
        </div>

        {/* Right Column: Key Honors & Milestones */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3 font-mono-tech text-xs tracking-widest text-[#8492a6] uppercase">
            <span>KEY HONORS &amp; RECOGNITION</span>
          </div>

          <div className="space-y-4">
            {/* Best Performer Award */}
            <div className="p-6 rounded-2xl bg-white border border-black/[0.08] shadow-xs space-y-2 group hover:border-[#2563eb] transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono-tech text-xs font-bold text-amber-700">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>BEST PERFORMER AWARD (2025)</span>
                </div>
                <span className="font-mono-tech text-[10px] px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 font-semibold border border-amber-200">
                  RANKED #1 IN COHORT
                </span>
              </div>
              <h4 className="font-display text-xl font-bold text-[#0a0a0c]">
                Elevate Labs Java Developer Internship
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] font-light leading-relaxed">
                Awarded top performer distinction in a competitive cohort for rapid problem-solving, clean REST API design in Spring Boot, and agile defect remediation.
              </p>
            </div>

            {/* AI Certification */}
            <div className="p-6 rounded-2xl bg-white border border-black/[0.08] shadow-xs space-y-2 group hover:border-[#2563eb] transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono-tech text-xs font-bold text-[#2563eb]">
                  <GraduationCap className="w-4 h-4 text-[#2563eb]" />
                  <span>APPLIED AI CERTIFICATION (2024)</span>
                </div>
                <span className="font-mono-tech text-[10px] text-[#8492a6]">
                  ID: TNINTC24-536
                </span>
              </div>
              <h4 className="font-display text-xl font-bold text-[#0a0a0c]">
                Teachnook × IIT Roorkee Cognizance
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] font-light leading-relaxed">
                Foundations of supervised machine learning algorithms, model loss optimization, and feature engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
