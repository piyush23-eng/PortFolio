import React, { useState } from 'react';
import { PERSONAL } from '../../data/personal';
import { MagneticButton } from '../../components/MagneticButton/MagneticButton';
import { ArrowUpRight, Copy, Check, Send, Phone, Mail } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-20 sm:py-24 md:py-36 px-4 sm:px-12 md:px-16 border-t border-black/[0.08] bg-[#fafafa] overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-14">
        {/* Label */}
        <div className="flex items-center gap-3 font-mono-tech text-[11px] sm:text-xs tracking-wider sm:tracking-widest text-[#8492a6] uppercase">
          <span className="text-[#2563eb] font-bold">[ 09 ]</span>
          <span>GET IN TOUCH // CONTACT &amp; INQUIRIES</span>
        </div>

        {/* Monolithic Editorial Typography CTA - Clamped to prevent viewport overflow */}
        <div className="w-full max-w-full overflow-hidden space-y-1 sm:space-y-2 py-1">
          <h2 className="font-display text-[6.8vw] xs:text-[7.2vw] sm:text-[7.2vw] md:text-[5.6vw] lg:text-[5.2rem] xl:text-[6.4rem] font-black tracking-tight leading-[0.95] text-[#0a0a0c] uppercase break-words">
            LET'S BUILD
          </h2>
          <h2 className="font-display text-[6.8vw] xs:text-[7.2vw] sm:text-[7.2vw] md:text-[5.6vw] lg:text-[5.2rem] xl:text-[6.4rem] font-black tracking-tight leading-[0.95] text-[#2563eb] uppercase break-words">
            SOMETHING
          </h2>
          <h2 className="font-display text-[6.8vw] xs:text-[7.2vw] sm:text-[7.2vw] md:text-[5.6vw] lg:text-[5.2rem] xl:text-[6.4rem] font-black tracking-tight leading-[0.95] text-[#0a0a0c] uppercase break-words">
            INTERESTING.
          </h2>
        </div>

        {/* Actions & Direct Contact Details */}
        <div className="pt-8 sm:pt-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 sm:gap-10 border-t border-black/[0.08]">
          <div className="space-y-4 w-full lg:w-auto">
            <div className="font-mono-tech text-[11px] sm:text-xs uppercase tracking-wider text-[#8492a6]">
              Direct Inquiries For Software &amp; AI Engineering
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 font-mono-tech text-xs w-full">
              {/* Primary Email CTA */}
              <MagneticButton
                href={`mailto:${PERSONAL.email}?subject=Excited%20to%20connect%20with%20Piyush%20Pankaj`}
                cursorMode="cta"
                className="w-full sm:w-auto justify-center px-8 py-4 rounded-full bg-[#0a0a0c] text-white font-bold tracking-wider flex items-center gap-2.5 hover:bg-[#2563eb] transition-all shadow-md"
              >
                <span>GET IN TOUCH</span>
                <Send className="w-3.5 h-3.5" />
              </MagneticButton>

              {/* Copy Email Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full sm:w-auto justify-center px-5 sm:px-6 py-4 rounded-full border border-black/[0.1] bg-white hover:bg-black/[0.03] text-[#0a0a0c] flex items-center gap-2 transition-all active:scale-95 shadow-2xs font-medium text-[11px] sm:text-xs"
                data-cursor="hover"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-emerald-600 font-semibold">COPIED TO CLIPBOARD</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-[#2563eb] shrink-0" />
                    <span className="truncate">{PERSONAL.email}</span>
                    <Copy className="w-3.5 h-3.5 text-[#8492a6] ml-1 shrink-0" />
                  </>
                )}
              </button>
            </div>

            {/* Direct Phone */}
            <div className="flex items-center gap-2 font-mono-tech text-xs text-[#475569] pt-1">
              <Phone className="w-3.5 h-3.5 text-[#2563eb]" />
              <a href={`tel:${PERSONAL.phone.replace(/\s+/g, '')}`} className="hover:text-[#0a0a0c] font-medium">
                {PERSONAL.phone}
              </a>
              <span className="text-[#cbd5e1]">•</span>
              <span>{PERSONAL.location}</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 font-mono-tech text-xs sm:text-sm tracking-wider">
            <MagneticButton
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              cursorMode="hover"
              className="text-[#475569] hover:text-[#0a0a0c] flex items-center gap-1 font-semibold transition-colors"
            >
              <span>GITHUB</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </MagneticButton>

            <MagneticButton
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              cursorMode="hover"
              className="text-[#475569] hover:text-[#0a0a0c] flex items-center gap-1 font-semibold transition-colors"
            >
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};
