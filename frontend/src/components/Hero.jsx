import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Mic, ArrowRight, Search, Sparkles, HeartPulse, GraduationCap, Sprout, Home as HomeIcon,
  TrendingUp, Layers, ShieldCheck,
} from 'lucide-react';
import { Button } from './ui/button';

const MiniQR = () => {
  const cells = useMemo(() => {
    const seed = 'SUVIDHA-VOICE';
    return Array.from({ length: 256 }, (_, i) =>
      (seed.charCodeAt(i % seed.length) * (i + 5) * 29) % 100 > 50);
  }, []);
  return (
    <div className="bg-white p-2 rounded-xl shadow-md border border-border w-fit">
      <div className="grid" style={{ gridTemplateColumns: 'repeat(16,1fr)', width: 84, height: 84 }}>
        {cells.map((on, i) => (<div key={i} style={{ background: on ? '#0f5132' : 'transparent' }} />))}
      </div>
    </div>
  );
};

const FLOAT_ICONS = [
  { Icon: HeartPulse, color: '#16a085', top: '4%', left: '2%', d: '0s' },
  { Icon: GraduationCap, color: '#2563eb', top: '30%', left: '-6%', d: '.5s' },
  { Icon: Sprout, color: '#d97706', top: '58%', left: '0%', d: '1s' },
  { Icon: HomeIcon, color: '#e14b2f', top: '80%', left: '12%', d: '1.5s' },
];

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero-vibrant relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 pt-12 lg:pt-16 pb-24 lg:pb-28 grid lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* LEFT */}
        <div className="fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-[hsl(var(--saffron))]/30 px-4 py-1.5 mb-6 shadow-sm">
            <Sparkles className="h-4 w-4 text-[hsl(var(--saffron))]" />
            <span className="text-sm font-semibold text-foreground/80">Ministry of Social Justice &amp; Empowerment</span>
          </div>

          <h1 className="font-head font-extrabold leading-[1.02] tracking-tight">
            <span className="block text-4xl md:text-5xl text-foreground">One Voice,</span>
            <span className="block text-5xl md:text-7xl grad-text">Every Scheme.</span>
          </h1>

          <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Just <span className="font-semibold text-foreground">speak</span> in your language — SUVIDHA AI discovers,
            audits and <span className="font-semibold text-primary">stacks</span> the right Government schemes for you.
            Zero typing. Rejection-proof.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" onClick={() => navigate('/discover')} className="cta-saffron rounded-full h-13 px-7 text-base gap-2 border-0">
              <Mic className="h-5 w-5" /> Start Speaking <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/results')} className="rounded-full h-13 px-7 text-base border-primary/40 bg-white/70 backdrop-blur">
              Explore Schemes
            </Button>
          </div>

          <div className="mt-9 flex items-center gap-4">
            <MiniQR />
            <div>
              <p className="font-head font-bold text-lg leading-tight">Scan the QR Code</p>
              <p className="text-sm text-muted-foreground">Open SUVIDHA AI on your mobile &amp; speak on the go.</p>
            </div>
          </div>
        </div>

        {/* RIGHT visual */}
        <div className="relative h-[440px] md:h-[540px]">
          <div className="hero-blob" />

          {/* dotted path */}
          <svg className="absolute inset-0 w-full h-full hidden sm:block" viewBox="0 0 400 500" fill="none" aria-hidden>
            <path d="M40 60 C 120 120, 20 220, 120 260 S 60 400, 170 440" stroke="hsl(var(--primary))" strokeOpacity="0.35" strokeWidth="2.5" strokeDasharray="3 9" strokeLinecap="round" />
          </svg>

          {/* floating scheme icons */}
          {FLOAT_ICONS.map(({ Icon, color, top, left, d }, i) => (
            <div key={i} className="absolute animate-floaty hidden sm:grid place-items-center h-14 w-14 rounded-2xl bg-white shadow-lg border border-border z-30"
              style={{ top, left, animationDelay: d, color }}>
              <Icon className="h-6 w-6" />
            </div>
          ))}

          {/* person photo */}
          <img src="https://images.unsplash.com/photo-1603578011446-4e8969bcbe71"
            alt="citizen using SUVIDHA AI"
            className="absolute right-0 bottom-0 h-[92%] w-auto object-cover object-top rounded-b-[2rem] z-10 hidden md:block drop-shadow-2xl"
            style={{ maskImage: 'linear-gradient(to left, black 78%, transparent)' }} />

          {/* PHONE MOCKUP */}
          <div className="phone-mock absolute left-1/2 md:left-[8%] -translate-x-1/2 md:translate-x-0 top-1/2 -translate-y-1/2 z-20">
            <div className="phone-notch" />
            <div className="phone-screen">
              <div className="flex items-center gap-2 bg-secondary rounded-xl px-3 h-9 mb-3">
                <Search className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-[11px] text-muted-foreground font-mono">Search for schemes</span>
                <Mic className="h-3.5 w-3.5 text-primary ml-auto" />
              </div>
              <div className="cta-saffron rounded-xl p-3 text-white mb-3">
                <p className="text-[11px] font-bold leading-snug">Explore schemes by your voice, age, gender &amp; region</p>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold mt-1.5 bg-white/25 rounded-full px-2 py-0.5">Access SUVIDHA</span>
              </div>
              <p className="text-[11px] font-bold mb-2 flex items-center gap-1"><Sparkles className="h-3 w-3 text-primary" /> Recommended stack</p>
              <div className="grid grid-cols-3 gap-1.5 mb-3">
                {[['Training', GraduationCap], ['Capital', Layers], ['Credit', ShieldCheck]].map(([t, Ic], i) => (
                  <div key={i} className="rounded-lg bg-primary/10 p-2 text-center">
                    <Ic className="h-4 w-4 text-primary mx-auto" />
                    <span className="text-[9px] font-semibold text-primary block mt-1">{t}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] font-bold mb-2">Trending schemes</p>
              {['PM-DAKSH Skilling', 'Stand-Up India', 'NSFDC Micro-Credit'].map((s) => (
                <div key={s} className="flex items-center gap-2 py-1.5 border-b border-border/60 last:border-0">
                  <div className="h-5 w-5 rounded-md bg-primary/10 grid place-items-center"><TrendingUp className="h-3 w-3 text-primary" /></div>
                  <span className="text-[10px] font-medium">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* rolling hills */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden>
        <path d="M0 80 C 240 20, 480 110, 720 70 S 1200 20, 1440 70 L1440 120 L0 120 Z" fill="hsl(var(--primary))" fillOpacity="0.12" />
        <path d="M0 96 C 300 50, 600 120, 900 86 S 1300 60, 1440 92 L1440 120 L0 120 Z" fill="hsl(var(--primary))" fillOpacity="0.2" />
      </svg>
    </section>
  );
};

export default Hero;
