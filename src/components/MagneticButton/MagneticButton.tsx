import React from 'react';
import { useMagnetic } from '../../hooks/useMagnetic';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  cursorMode?: 'hover' | 'cta' | 'project' | 'open' | 'explore';
  cursorText?: string;
  strength?: number;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  href,
  target,
  rel,
  onClick,
  cursorMode = 'hover',
  cursorText,
  strength = 0.35,
}) => {
  const ref = useMagnetic<HTMLDivElement>({ strength });

  const content = (
    <div
      ref={ref}
      className={`inline-flex items-center justify-center will-change-transform ${className}`}
      data-cursor={cursorMode}
      data-cursor-text={cursorText}
      onClick={onClick}
    >
      {children}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className="inline-block bg-transparent border-0 p-0 m-0 cursor-pointer">
      {content}
    </button>
  );
};
