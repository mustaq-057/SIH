import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ShieldCheck, Layers, ArrowRight, ArrowLeft, User, CheckCircle2, TrendingUp,
  GraduationCap, Coins, Landmark, Sparkles,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import FlowStepper from '../components/FlowStepper';
import { useWizard } from '../context/WizardContext';
import { MATCHED_SCHEMES, RECOMMENDED_STACK, SAMPLE_PROFILE } from '../data/mock';

const TAG_ICON = { Training: GraduationCap, Capital: Coins, Credit: Landmark };

const Results = () => {
  const navigate = useNavigate();
  const { profile } = useWizard();
  const p = profile || SAMPLE_PROFILE;
  const stacked = MATCHED_SCHEMES.filter((s) => RECOMMENDED_STACK.schemes.includes(s.id));

  return (
    <main className="min-h-screen">
      <div className="section-soft pt-10 pb-8"><FlowStepper current={2} /></div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="text-center mb-8">
          <Badge className="rounded-full bg-primary/10 text-primary border-0 mb-4"><ShieldCheck className="h-4 w-4 mr-1.5" /> Deterministic Match Engine</Badge>
          <h1 className="font-head font-extrabold text-3xl md:text-4xl">Schemes matched to your profile</h1>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Matched strictly against official MoSJE eligibility matrices &mdash; rules first, no AI guesswork.</p>
        </div>

        {/* profile summary */}
        <Card className="rounded-2xl p-5 border-border mb-8">
          <div className="flex items-center gap-3 mb-4"><div className="h-10 w-10 rounded-full bg-primary/10 text-primary grid place-items-center"><User className="h-5 w-5" /></div><p className="font-head font-bold text-lg">Verified profile</p></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[['Name', p.name], ['Category', p.category], ['Gender', p.gender], ['State', p.state], ['Annual income', p.annualIncome], ['Occupation', p.occupation]].map(([k, v]) => (
              <div key={k}><p className="text-xs uppercase tracking-wide text-muted-foreground">{k}</p><p className="font-medium mt-0.5">{v}</p></div>
            ))}
          </div>
        </Card>

        {/* recommended stack */}
        <Card className="rounded-3xl p-6 md:p-8 border-primary/25 bg-primary/[0.04] mb-10 relative overflow-hidden">
          <div className="flex items-center gap-2 mb-1"><Layers className="h-5 w-5 text-primary" /><span className="text-primary font-semibold uppercase tracking-wide text-sm">Scheme Stacking</span></div>
          <h2 className="font-head font-extrabold text-2xl md:text-3xl">{RECOMMENDED_STACK.title}</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl leading-relaxed">{RECOMMENDED_STACK.note}</p>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {stacked.map((s, i) => {
              const Icon = TAG_ICON[s.tag] || Sparkles;
              return (
                <div key={s.id} className="relative bg-background rounded-2xl p-5 border border-border">
                  <span className="absolute -top-3 -left-2 h-7 w-7 rounded-full bg-primary text-primary-foreground grid place-items-center text-xs font-bold">{i + 1}</span>
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary grid place-items-center mb-3"><Icon className="h-5 w-5" /></div>
                  <p className="font-head font-bold">{s.name}</p>
                  <p className="text-xs text-muted-foreground">{s.type}</p>
                  <p className="text-sm font-semibold text-primary mt-2">{s.benefit}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 bg-background rounded-2xl p-5 border border-border">
            <div className="flex items-center gap-3"><TrendingUp className="h-8 w-8 text-primary" /><div><p className="text-sm text-muted-foreground">Combined benefit value</p><p className="font-head font-extrabold text-2xl text-primary">{RECOMMENDED_STACK.totalValue}</p></div></div>
            <Button size="lg" onClick={() => navigate('/csc-bridge')} className="rounded-full gap-2">Generate application package <ArrowRight className="h-5 w-5" /></Button>
          </div>
        </Card>

        {/* all matches */}
        <h2 className="font-head font-bold text-2xl mb-5">All matched schemes</h2>
        <div className="space-y-4">
          {MATCHED_SCHEMES.map((s) => (
            <Card key={s.id} className="rounded-2xl p-5 border-border hover-lift">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-head font-bold text-lg">{s.name}</p>
                    <Badge variant="secondary" className="rounded-full">{s.ministry}</Badge>
                    <Badge className="rounded-full bg-primary/10 text-primary border-0">{s.type}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{s.desc}</p>
                  <p className="text-sm font-semibold text-primary mt-2">{s.benefit}</p>
                </div>
                <div className="md:w-40 shrink-0">
                  <div className="flex items-center justify-between text-sm mb-1"><span className="text-muted-foreground">Eligibility</span><span className="font-bold text-primary">{s.eligibility}%</span></div>
                  <Progress value={s.eligibility} className="h-2" />
                  <div className="flex items-center gap-1 mt-2 text-xs text-primary"><CheckCircle2 className="h-3.5 w-3.5" /> Rule-verified</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap justify-between gap-3 mt-8">
          <Button variant="outline" onClick={() => navigate('/documents')} className="rounded-full gap-2 border-primary/40"><ArrowLeft className="h-4 w-4" /> Back to audit</Button>
          <Button onClick={() => navigate('/csc-bridge')} className="rounded-full gap-2 h-11 px-6">Continue to CSC bridge <ArrowRight className="h-4 w-4" /></Button>
        </div>
      </div>
    </main>
  );
};

export default Results;
