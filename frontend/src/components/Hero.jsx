import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { SCHEME_BANNERS } from '../data/mock';

const Hero = () => {
  const navigate = useNavigate();
  const [i, setI] = useState(0);
  const n = SCHEME_BANNERS.length;

  const next = useCallback(() => setI((p) => (p + 1) % n), [n]);
  const prev = () => setI((p) => (p - 1 + n) % n);

  useEffect(() => {
    const t = setInterval(next, 6500);
    return () => clearInterval(t);
  }, [next]);

  const s = SCHEME_BANNERS[i];

  return (
    <section className="scheme-hero relative overflow-hidden bg-background">
      {/* ---- decorative background ---- */}
      {/* concentric arcs bottom-left */}
      <svg className="absolute -left-24 bottom-0 w-[420px] h-[420px] text-primary/45" viewBox="0 0 200 200" fill="none" aria-hidden>
        {[30, 45, 60, 75, 90, 105].map((r) => (
          <circle key={r} cx="30" cy="180" r={r} stroke="currentColor" strokeWidth="1.4" />
        ))}
      </svg>
      {/* concentric arcs top-center-right */}
      <svg className="absolute left-[46%] top-2 w-[320px] h-[320px] text-primary/40" viewBox="0 0 200 200" fill="none" aria-hidden>
        {[26, 40, 54, 68, 82, 96].map((r) => (
          <circle key={r} cx="70" cy="70" r={r} stroke="currentColor" strokeWidth="1.3" />
        ))}
      </svg>
      {/* dotted grid */}
      <div className="dotgrid absolute left-[42%] bottom-8 w-40 h-36 text-primary/30 hidden md:block" aria-hidden />
      {/* green spheres */}
      <div className="hero-sphere absolute left-[58%] top-6 h-16 w-16 hidden md:block" aria-hidden />
      <div className="hero-sphere absolute left-24 bottom-6 h-14 w-14 hidden md:block" aria-hidden />
      {/* navy quarter dot + purple overlap circles */}
      <div className="absolute left-[52%] top-1/2 h-6 w-6 rounded-full bg-[hsl(var(--gov-navy))] hidden lg:block" aria-hidden />
      <div className="absolute right-[16%] bottom-6 h-40 w-40 rounded-full bg-[hsl(var(--gov-navy))]/10 hidden lg:block" aria-hidden />
      <div className="absolute right-[22%] bottom-14 h-32 w-32 rounded-full bg-[hsl(var(--gov-navy))]/10 hidden lg:block" aria-hidden />

      {/* ---- carousel arrows ---- */}
      <button onClick={prev} aria-label="Previous" className="scheme-arrow left-0 rounded-r-xl">
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button onClick={next} aria-label="Next" className="scheme-arrow right-0 rounded-l-xl">
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* ---- content ---- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16 grid lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* LEFT: photo card + badge */}
        <div className="relative lg:-mr-6">
          <div className="absolute -top-4 -left-4 h-28 w-48 rounded-3xl bg-primary/20 hidden sm:block" aria-hidden />
          <div key={s.image} className="relative rounded-[1.5rem] overflow-hidden shadow-2xl fade-up">
            <img src={s.image} alt={s.title.join(' ')} className="w-full h-[340px] md:h-[460px] object-cover" />
          </div>
          <div className="absolute -bottom-5 left-6 right-10 sm:right-20 bg-[hsl(var(--gov-navy))] text-white rounded-xl px-5 py-4 shadow-xl">
            <p className="font-head font-bold text-lg leading-snug">
              {s.badge[0]}<span className="text-[hsl(var(--saffron))] text-2xl">{s.badge[1]}</span>{s.badge[2] || ''}
            </p>
          </div>
        </div>

        {/* RIGHT: heading + lines + button */}
        <div key={i} className="text-center lg:text-right fade-up">
          <h1 className="font-head font-extrabold text-4xl md:text-6xl leading-[1.05] text-[hsl(var(--gov-navy))] dark:text-foreground">
            {s.title[0]}<br />{s.title[1]}
          </h1>
          <div className="mt-6 space-y-1.5 text-[hsl(var(--gov-navy))]/80 dark:text-muted-foreground text-lg">
            {s.lines.map((l) => (<p key={l}>{l}</p>))}
          </div>
          <button onClick={() => navigate('/results')}
            className="mt-8 inline-flex items-center gap-2 bg-[hsl(var(--gov-navy))] hover:bg-[hsl(var(--gov-navy))]/90 text-white font-semibold rounded-lg px-7 h-12 shadow-lg transition-colors">
            Click to More <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* dots */}
      <div className="relative z-10 flex justify-center gap-2 pb-8">
        {SCHEME_BANNERS.map((_, idx) => (
          <button key={idx} onClick={() => setI(idx)} aria-label={`Slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all ${idx === i ? 'w-8 bg-primary' : 'w-2 bg-primary/30'}`} />
        ))}
      </div>

      {/* hashtag strip */}
      <div className="section-soft py-5 border-t border-border/60 relative z-10">
        <p className="text-center font-head font-bold tracking-wide text-lg md:text-xl">
          <span className="text-foreground">#GOVERNMENTSCHEMES</span>
          <span className="text-muted-foreground"> / </span>
          <span className="text-foreground">#SCHEMESFORYOU</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
