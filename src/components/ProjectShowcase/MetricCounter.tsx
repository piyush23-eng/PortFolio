import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProjectMetric } from '../../data/projects';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface MetricCounterProps {
  metrics: ProjectMetric[];
}

export const MetricCounter: React.FC<MetricCounterProps> = ({ metrics }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setAnimated] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => setAnimated(true),
    });
  }, []);

  return (
    <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {metrics.map((metric, idx) => {
        const hasBaseline = metric.startValue && metric.startValue !== "0";

        return (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white border border-black/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-black/[0.2] transition-all flex flex-col justify-between group min-w-0"
          >
            {/* Top Label */}
            <div className="font-mono-tech text-[11px] font-semibold text-[#8492a6] tracking-wider uppercase mb-2 truncate">
              {metric.label}
            </div>

            {/* Value Display */}
            <div className="py-2">
              {hasBaseline ? (
                <div className="space-y-1.5">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-display text-3xl sm:text-3xl lg:text-3xl font-black text-[#0a0a0c] tracking-tight group-hover:text-[#2563eb] transition-colors">
                      {metric.endValue}{metric.unit}
                    </span>
                    <span className="font-mono-tech text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
                      BENCHMARKED
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono-tech text-xs text-[#8492a6]">
                    <span className="text-[11px]">Baseline:</span>
                    <span className="line-through font-medium">{metric.startValue}{metric.unit}</span>
                    <ArrowRight className="w-3 h-3 text-[#2563eb] shrink-0" />
                  </div>
                </div>
              ) : (
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="font-display text-3xl sm:text-4xl font-black text-[#0a0a0c] tracking-tight group-hover:text-[#2563eb] transition-colors">
                    {metric.endValue}{metric.unit}
                  </span>
                  <span className="font-mono-tech text-[10px] font-bold text-[#2563eb] bg-blue-50 border border-blue-200 px-1.5 py-0.5 rounded">
                    PRODUCTION
                  </span>
                </div>
              )}
            </div>

            {/* Bottom Status */}
            <div className="mt-3 pt-2.5 border-t border-black/[0.05] flex items-center gap-1.5 font-mono-tech text-[10px] text-[#8492a6] truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              <span className="truncate">PRODUCTION BENCHMARK</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
