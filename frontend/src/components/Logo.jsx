import React from 'react';

// Official Ministry of Social Justice & Empowerment emblem.
export const LogoMark = ({ className = 'h-10 w-10' }) => (
  <img src="/suvidha-logo.png" alt="SUVIDHA AI — MoSJE" className={`${className} object-contain`} />
);

export const LogoFull = ({ compact = false }) => (
  <div className="flex items-center gap-3">
    <LogoMark className="h-12 w-12 drop-shadow-sm shrink-0" />
    <div className="leading-none">
      <div className="font-head font-extrabold text-2xl tracking-tight">
        <span className="text-primary">SUVIDHA</span>
        <span className="text-[hsl(var(--saffron))]"> AI</span>
      </div>
      {!compact && (
        <div className="text-[11px] font-semibold tracking-wide text-muted-foreground mt-1">
          Ministry of Social Justice &amp; Empowerment
        </div>
      )}
    </div>
  </div>
);

export default LogoFull;
