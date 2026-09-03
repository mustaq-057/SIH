import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Mic, CheckCircle2, FileText, ListChecks, Gift, ArrowRight,
  Building2, Users, MapPin, Layers,
} from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { SCHEMES } from '../data/mock';

const SchemeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const scheme = SCHEMES.find((s) => s.id === id);

  if (!scheme) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="font-head font-extrabold text-3xl">Scheme not found</h1>
        <Button onClick={() => navigate('/schemes')} className="rounded-full mt-6">Back to Explorer</Button>
      </main>
    );
  }

  const related = SCHEMES.filter((s) => s.id !== scheme.id && s.category === scheme.category).slice(0, 3);

  return (
    <main className="min-h-screen">
      {/* hero */}
      <section className="section-soft border-b border-border/60">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <button onClick={() => navigate('/schemes')} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Scheme Explorer
          </button>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge className="rounded-full bg-primary/10 text-primary border-0">{scheme.category}</Badge>
            <Badge variant="secondary" className="rounded-full">{scheme.type}</Badge>
          </div>
          <h1 className="font-head font-extrabold text-4xl md:text-5xl text-[hsl(var(--gov-navy))] dark:text-foreground leading-tight">{scheme.name}</h1>
          <p className="text-lg text-muted-foreground mt-3 max-w-3xl">{scheme.tagline}</p>

          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <span className="flex items-center gap-2"><Building2 className="h-4 w-4 text-primary" /> {scheme.ministry}</span>
            <span className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" /> {scheme.groups.join(', ')}</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> {scheme.states.join(', ')}</span>
          </div>

          <div className="mt-6 inline-flex items-center gap-3 bg-[hsl(var(--saffron))]/10 border border-[hsl(var(--saffron))]/30 rounded-2xl px-5 py-4">
            <Gift className="h-7 w-7 text-[hsl(var(--saffron))]" />
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Key benefit</p>
              <p className="font-head font-bold text-lg text-[hsl(var(--saffron))]">{scheme.benefit}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* overview */}
          <div>
            <h2 className="font-head font-bold text-2xl mb-3">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">{scheme.desc}</p>
          </div>

          {/* eligibility */}
          <div>
            <h2 className="font-head font-bold text-2xl mb-4 flex items-center gap-2"><ListChecks className="h-6 w-6 text-primary" /> Eligibility</h2>
            <div className="space-y-2.5">
              {scheme.eligibility.map((e) => (
                <div key={e} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm leading-relaxed">{e}</p>
                </div>
              ))}
            </div>
          </div>

          {/* benefits */}
          <div>
            <h2 className="font-head font-bold text-2xl mb-4 flex items-center gap-2"><Gift className="h-6 w-6 text-primary" /> Benefits</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {scheme.benefits.map((b) => (
                <Card key={b} className="rounded-xl p-4 border-border">
                  <p className="text-sm leading-relaxed">{b}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* documents */}
          <div>
            <h2 className="font-head font-bold text-2xl mb-4 flex items-center gap-2"><FileText className="h-6 w-6 text-primary" /> Documents required</h2>
            <div className="flex flex-wrap gap-2">
              {scheme.documents.map((d) => (
                <span key={d} className="text-sm font-medium bg-secondary rounded-full px-4 py-2">{d}</span>
              ))}
            </div>
          </div>

          {/* how to apply */}
          <div>
            <h2 className="font-head font-bold text-2xl mb-4">How to apply with SUVIDHA</h2>
            <div className="space-y-1">
              {scheme.steps.map((st, i) => (
                <div key={st} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-9 w-9 rounded-full bg-primary text-primary-foreground grid place-items-center font-bold text-sm shrink-0">{i + 1}</div>
                    {i < scheme.steps.length - 1 && <div className="w-0.5 h-8 bg-border" />}
                  </div>
                  <p className="text-sm leading-relaxed pt-1.5 pb-4">{st}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* sidebar CTA */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 space-y-4">
            <Card className="rounded-2xl p-6 border-primary/25 bg-primary/[0.04]">
              <p className="font-head font-bold text-lg">Ready to apply?</p>
              <p className="text-sm text-muted-foreground mt-1">Start by speaking — SUVIDHA auto-fills and audits everything for you.</p>
              <Button onClick={() => navigate('/discover')} className="cta-saffron rounded-full w-full mt-4 gap-2 border-0">
                <Mic className="h-4 w-4" /> Start with voice
              </Button>
              <Button variant="outline" onClick={() => navigate('/results')} className="rounded-full w-full mt-2 gap-2 border-primary/40">
                <Layers className="h-4 w-4" /> Add to my stack
              </Button>
            </Card>

            {related.length > 0 && (
              <Card className="rounded-2xl p-6 border-border">
                <p className="font-head font-bold mb-3">Related schemes</p>
                <div className="space-y-2">
                  {related.map((r) => (
                    <button key={r.id} onClick={() => navigate(`/schemes/${r.id}`)}
                      className="w-full text-left flex items-center justify-between gap-2 py-2 border-b border-border last:border-0 group">
                      <span className="text-sm font-medium group-hover:text-primary">{r.name}</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                    </button>
                  ))}
                </div>
              </Card>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SchemeDetail;
