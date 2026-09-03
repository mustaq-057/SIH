import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Mic, ScanText, ShieldCheck, Layers, QrCode, ArrowRight, ChevronLeft, ChevronRight,
  Sprout, Landmark, Handshake, GraduationCap, HeartPulse, Home as HomeIcon, Scale,
  Accessibility, Users, Sparkles, Quote, Volume2, BadgeCheck,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from '../components/ui/accordion';
import { HERO_SLIDES, STATS, PIPELINE, CATEGORIES, FAQS, TESTIMONIALS } from '../data/mock';

const ICONS = {
  Mic, ScanText, ShieldCheck, Layers, QrCode, Sprout, Landmark, Handshake,
  GraduationCap, HeartPulse, Home: HomeIcon, Scale, Accessibility, Users, Sparkles,
};

const Home = () => {
  const navigate = useNavigate();
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  const hero = HERO_SLIDES[slide];

  return (
    <main>
      {/* HERO */}
      <section className="hero-glow relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-14 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div key={slide} className="fade-up">
            <Badge className="rounded-full bg-primary/10 text-primary hover:bg-primary/10 border-0 mb-5 py-1.5 px-4">
              <BadgeCheck className="h-4 w-4 mr-1.5" /> {hero.tagTop}
            </Badge>
            <h1 className="font-head font-extrabold text-4xl md:text-6xl leading-[1.05] tracking-tight">
              {hero.title}
            </h1>
            <p className="font-head font-bold text-3xl md:text-4xl mt-2 text-primary">
              {hero.highlight}
            </p>
            <p className="mt-5 text-muted-foreground text-lg max-w-xl leading-relaxed">
              {hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" onClick={() => navigate('/discover')} className="rounded-full h-12 px-7 text-base gap-2">
                <Mic className="h-5 w-5" /> Start with your voice
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/results')} className="rounded-full h-12 px-7 text-base border-primary/40">
                Explore schemes <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-2">
              {HERO_SLIDES.map((_, i) => (
                <button key={i} onClick={() => setSlide(i)}
                  className={`h-2 rounded-full transition-all ${i === slide ? 'w-8 bg-primary' : 'w-2 bg-primary/30'}`} />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-white/10 animate-floaty">
              <img key={hero.image} src={hero.image} alt="entrepreneur" className="w-full h-[360px] md:h-[440px] object-cover" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="absolute -left-4 top-10 bg-background rounded-2xl shadow-xl border border-border p-3 flex items-center gap-2 animate-floaty" style={{ animationDelay: '.6s' }}>
              <div className="h-9 w-9 rounded-full bg-primary text-primary-foreground grid place-items-center animate-mic"><Volume2 className="h-4 w-4" /></div>
              <div className="text-xs"><p className="font-semibold">Listening…</p><p className="text-muted-foreground">22 languages</p></div>
            </div>
            <div className="absolute -right-3 bottom-10 bg-background rounded-2xl shadow-xl border border-border p-3 flex items-center gap-2 animate-floaty" style={{ animationDelay: '1.2s' }}>
              <ShieldCheck className="h-8 w-8 text-primary" />
              <div className="text-xs"><p className="font-semibold">Rejection-proof</p><p className="text-muted-foreground">audit passed</p></div>
            </div>
          </div>
        </div>
        <div className="tricolor-strip h-1.5 w-full" />
      </section>

      {/* HASHTAG + STATS */}
      <section className="section-soft py-12">
        <p className="text-center font-head font-bold text-xl md:text-2xl tracking-wide text-muted-foreground mb-8">
          #SCHEMESFOREVERYONE / #आपकीसुविधा
        </p>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map((s) => (
            <Card key={s.label} className="rounded-2xl border-primary/15 bg-primary/[0.04] p-6 text-center hover-lift">
              <p className="font-head font-extrabold text-3xl md:text-4xl text-primary">{s.value}</p>
              <p className="font-semibold mt-1">{s.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{s.sub}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* JOURNEY CTA */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm">The SUVIDHA Pipeline</p>
          <h2 className="font-head font-extrabold text-3xl md:text-4xl mt-2">
            From <span className="text-primary">just speaking</span> to a sanctioned scheme
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Five guided steps. Zero typing. No rejections. Follow the journey end-to-end.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          {PIPELINE.map((p, i) => {
            const Icon = ICONS[p.icon];
            const routes = ['/discover', '/documents', '/results', '/results', '/csc-bridge'];
            return (
              <Card key={p.id} onClick={() => navigate(routes[i])}
                className="rounded-2xl p-6 cursor-pointer hover-lift group border-border">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-head font-extrabold text-2xl text-primary/20">0{p.id}</span>
                </div>
                <h3 className="font-head font-bold text-lg">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{p.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Open <ArrowRight className="h-4 w-4" />
                </span>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section-soft py-16">
        <div className="text-center mb-12">
          <h2 className="font-head font-extrabold text-3xl md:text-4xl">Find schemes based <br className="hidden sm:block" /> on categories</h2>
        </div>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {CATEGORIES.map((c) => {
            const Icon = ICONS[c.icon];
            return (
              <button key={c.name} onClick={() => navigate('/results')}
                className="group bg-background rounded-2xl border border-border p-6 flex flex-col items-center text-center hover-lift">
                <div className="h-14 w-14 rounded-2xl grid place-items-center mb-3 transition-transform group-hover:scale-110"
                  style={{ background: `${c.color}1a`, color: c.color }}>
                  <Icon className="h-7 w-7" />
                </div>
                <span className="text-sm font-semibold text-primary">{c.count} Schemes</span>
                <span className="text-sm text-muted-foreground mt-0.5 leading-snug">{c.name}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* PIPELINE STRIP */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 relative overflow-hidden">
          <div className="dotgrid absolute inset-0 opacity-10 text-white" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-head font-extrabold text-3xl md:text-4xl leading-tight">Not just a search bar. <br /> A full application engine.</h2>
              <p className="mt-4 text-primary-foreground/85 leading-relaxed max-w-lg">
                Existing portals stop at links. SUVIDHA guides you through auto-filling, document auditing, offline CSC bridging and live tracking — designed for GIGW 3.0 accessibility.
              </p>
              <Button onClick={() => navigate('/discover')} variant="secondary" size="lg" className="rounded-full mt-6 gap-2 text-primary">
                Begin your journey <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[['End-to-end', 'Discovery to disbursement'], ['Deterministic', 'No AI hallucinations'], ['Vernacular', '22 Indian languages'], ['Offline bridge', 'CSC QR in 30 sec']].map(([t, d]) => (
                <div key={t} className="bg-white/10 rounded-2xl p-5 backdrop-blur border border-white/15">
                  <p className="font-head font-bold text-lg">{t}</p>
                  <p className="text-sm text-primary-foreground/80 mt-1">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-soft py-16">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm">Success Stories</p>
          <h2 className="font-head font-extrabold text-3xl md:text-4xl mt-2">Real entrepreneurs, real sanctions</h2>
        </div>
        <div className="max-w-6xl mx-auto px-4 grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name} className="rounded-2xl p-6 hover-lift border-border">
              <Quote className="h-8 w-8 text-primary/25" />
              <p className="mt-3 leading-relaxed">{t.quote}</p>
              <div className="mt-5 flex items-center gap-3">
                <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover border-2 border-primary/20" />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="font-head font-extrabold text-3xl md:text-4xl">Frequently asked questions</h2>
          <p className="text-muted-foreground mt-3">Everything you need to know about SUVIDHA AI.</p>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-2xl px-5 bg-background">
              <AccordionTrigger className="text-left font-semibold hover:no-underline py-4">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="rounded-3xl border border-primary/20 bg-primary/[0.05] p-10 text-center">
          <h2 className="font-head font-extrabold text-3xl md:text-4xl">Your scheme is one sentence away</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Tap the mic, say what you want to build, and let SUVIDHA do the rest.</p>
          <Button size="lg" onClick={() => navigate('/discover')} className="rounded-full h-12 px-8 mt-6 gap-2">
            <Mic className="h-5 w-5" /> Start now
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Home;
