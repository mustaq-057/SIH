import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Mic, ScanText, ShieldCheck, Layers, QrCode, ArrowRight,
  Sprout, Landmark, Handshake, GraduationCap, HeartPulse, Home as HomeIcon, Scale,
  Accessibility, Users, Sparkles,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from '../components/ui/accordion';
import Hero from '../components/Hero';
import AnimatedCounter from '../components/AnimatedCounter';
import { STATS, PIPELINE, CATEGORIES, FAQS } from '../data/mock';

const ICONS = {
  Mic, ScanText, ShieldCheck, Layers, QrCode, Sprout, Landmark, Handshake,
  GraduationCap, HeartPulse, Home: HomeIcon, Scale, Accessibility, Users, Sparkles,
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <main>
      <Hero />

      {/* STATS */}
      <section className="section-soft py-14">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map((s, i) => (
            <Card key={s.label} className="rounded-2xl border-transparent p-6 text-center hover-lift relative overflow-hidden"
              style={{ background: i % 2 ? 'hsl(var(--saffron) / 0.08)' : 'hsl(var(--primary) / 0.06)' }}>
              <p className={`font-head font-extrabold text-3xl md:text-4xl ${i % 2 ? 'text-[hsl(var(--saffron))]' : 'text-primary'}`}>
                <AnimatedCounter value={s.value} />
              </p>
              <p className="font-semibold mt-1">{s.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{s.sub}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* PIPELINE — from just speaking to a sanctioned scheme */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-[hsl(var(--saffron))] font-semibold tracking-wide uppercase text-sm">The SUVIDHA Pipeline</p>
          <h2 className="font-head font-extrabold text-3xl md:text-5xl mt-2 leading-tight">
            From <span className="grad-text">just speaking</span><br className="hidden sm:block" /> to a sanctioned scheme
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Five guided steps. Zero typing. No rejections. Follow the journey end-to-end.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          {PIPELINE.map((p, i) => {
            const Icon = ICONS[p.icon];
            const routes = ['/discover', '/documents', '/results', '/results', '/csc-bridge'];
            const saffron = i % 2 === 1;
            return (
              <Card key={p.id} onClick={() => navigate(routes[i])}
                className="rounded-2xl p-6 cursor-pointer hover-lift group border-border">
                <div className="flex items-center justify-between mb-4">
                  <div className={`h-12 w-12 rounded-xl grid place-items-center transition-colors ${saffron ? 'bg-[hsl(var(--saffron))]/12 text-[hsl(var(--saffron))] group-hover:bg-[hsl(var(--saffron))] group-hover:text-white' : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground'}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className={`font-head font-extrabold text-2xl ${saffron ? 'text-[hsl(var(--saffron))]/25' : 'text-primary/20'}`}>0{p.id}</span>
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

      {/* WHY SUVIDHA band */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 relative overflow-hidden">
          <div className="dotgrid absolute inset-0 opacity-10 text-white" />
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full" style={{ background: 'radial-gradient(circle,#FF9933,transparent 70%)', opacity: .5 }} />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-head font-extrabold text-3xl md:text-4xl leading-tight">Not just a search bar. <br /> A full application engine.</h2>
              <p className="mt-4 text-primary-foreground/85 leading-relaxed max-w-lg">
                Existing portals stop at links. SUVIDHA guides you through auto-filling, document auditing, offline CSC bridging and live tracking — built for every Indian, in every language.
              </p>
              <Button onClick={() => navigate('/discover')} className="cta-saffron rounded-full mt-6 gap-2 border-0 h-12 px-7">
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
        <div className="rounded-3xl border border-[hsl(var(--saffron))]/25 p-10 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(120deg, hsl(var(--saffron)/0.08), hsl(var(--primary)/0.07))' }}>
          <h2 className="font-head font-extrabold text-3xl md:text-4xl">Your scheme is one sentence away</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Tap the mic, say what you want to build, and let SUVIDHA do the rest.</p>
          <Button size="lg" onClick={() => navigate('/discover')} className="cta-saffron rounded-full h-12 px-8 mt-6 gap-2 border-0">
            <Mic className="h-5 w-5" /> Start now
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Home;
