import React from 'react';

// SUVIDHA AI mark: a voice mic (voice-first) fused with a verified check
// (rejection-proof) inside a tricolour badge = "from your voice to a verified scheme".
export const LogoMark = ({ className = 'h-10 w-10' }) => (
  <svg viewBox="0 0 48 48" className={className} role="img" aria-label="SUVIDHA AI">
    <defs>
      <linearGradient id="suvGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#FF9933" />
        <stop offset="0.55" stopColor="#FF7A1A" />
        <stop offset="1" stopColor="#138808" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="44" height="44" rx="13" fill="url(#suvGrad)" />
    {/* sound waves */}
    <path d="M13 20 a3 3 0 0 0 0 8" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M35 20 a3 3 0 0 1 0 8" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* mic body */}
    <rect x="20" y="11" width="8" height="15" rx="4" fill="#ffffff" />
    <path d="M17 23 a7 7 0 0 0 14 0" stroke="#ffffff" strokeWidth="2.4" fill="none" strokeLinecap="round" />
    <line x1="24" y1="30" x2="24" y2="34" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" />
    {/* verified check badge */}
    <circle cx="34" cy="33" r="6.5" fill="#ffffff" />
    <path d="M31 33 l2.2 2.2 l3.8 -4.2" stroke="#138808" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
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
