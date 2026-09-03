import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  QrCode, Download, MapPin, Clock, CheckCircle2, Circle, ArrowLeft,
  Store, FileCheck2, Smartphone, ArrowRight,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import FlowStepper from '../components/FlowStepper';
import { useWizard } from '../context/WizardContext';
import { CSC_CENTRES, TRACKING, SAMPLE_PROFILE, RECOMMENDED_STACK } from '../data/mock';
import { useToast } from '../hooks/use-toast';

// deterministic stylised QR (mock)
const FakeQR = () => {
  const cells = useMemo(() => {
    const seed = 'SUVIDHA-AI-SIH26093';
    const arr = [];
    for (let i = 0; i < 441; i++) {
      const v = (seed.charCodeAt(i % seed.length) * (i + 7) * 31) % 100;
      arr.push(v > 52);
    }
    return arr;
  }, []);
  return (
    <div className="bg-white p-4 rounded-2xl shadow-inner border border-border w-fit mx-auto">
      <div className="grid" style={{ gridTemplateColumns: 'repeat(21,1fr)', width: 210, height: 210 }}>
        {cells.map((on, i) => (<div key={i} style={{ background: on ? '#0f5132' : 'transparent' }} />))}
      </div>
    </div>
  );
};

const CSCBridge = () => {
  const navigate = useNavigate();
  const { profile } = useWizard();
  const { toast } = useToast();
  const p = profile || SAMPLE_PROFILE;

  return (
    <main className="min-h-screen">
      <div className="section-soft pt-10 pb-8"><FlowStepper current={4} /></div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="text-center mb-8">
          <Badge className="rounded-full bg-primary/10 text-primary border-0 mb-4"><QrCode className="h-4 w-4 mr-1.5" /> CSC Agent Express Bridge</Badge>
          <h1 className="font-head font-extrabold text-3xl md:text-4xl">Your application package is ready</h1>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Show this QR at any Jan Seva Kendra. The operator processes your verified application in under 30 seconds.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* QR card */}
          <Card className="rounded-3xl p-8 border-primary/25 bg-primary/[0.04] text-center">
            <FakeQR />
            <p className="font-head font-bold text-lg mt-5">CSC Operator Pass</p>
            <p className="text-sm text-muted-foreground">Ref: SUVIDHA/26093/{p.name.split(' ')[0].toUpperCase()}</p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <Button onClick={() => toast({ title: 'Package downloaded', description: 'Auto-filled forms + QR saved to device.' })} className="rounded-full gap-2"><Download className="h-4 w-4" /> Download package</Button>
            </div>
          </Card>

          {/* package summary */}
          <Card className="rounded-3xl p-6 border-border">
            <div className="flex items-center gap-2 mb-4"><FileCheck2 className="h-5 w-5 text-primary" /><p className="font-head font-bold text-lg">Auto-filled package</p></div>
            <div className="space-y-3 text-sm">
              {[['Applicant', p.name], ['Category', p.category], ['State', p.state], ['Bundled schemes', `${RECOMMENDED_STACK.schemes.length} stacked`], ['Total benefit', RECOMMENDED_STACK.totalValue]].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-3 py-2 border-b border-border last:border-0"><span className="text-muted-foreground">{k}</span><span className="font-medium text-right">{v}</span></div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-primary"><CheckCircle2 className="h-4 w-4" /> All documents pre-verified &amp; audited</div>
          </Card>
        </div>

        {/* nearby CSC */}
        <div className="mt-10">
          <div className="flex items-center gap-2 mb-4"><Store className="h-5 w-5 text-primary" /><h2 className="font-head font-bold text-2xl">Nearest Jan Seva Kendras</h2></div>
          <div className="grid sm:grid-cols-3 gap-4">
            {CSC_CENTRES.map((c) => (
              <Card key={c.name} className="rounded-2xl p-5 border-border hover-lift">
                <div className="flex items-center justify-between mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <Badge className={`rounded-full border-0 ${c.open ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>{c.open ? 'Open now' : 'Closed'}</Badge>
                </div>
                <p className="font-semibold leading-snug">{c.name}</p>
                <p className="text-sm text-muted-foreground mt-1">{c.dist}</p>
                <p className="text-sm font-medium text-primary mt-2">{c.distance} away</p>
              </Card>
            ))}
          </div>
        </div>

        {/* tracking */}
        <div className="mt-10">
          <div className="flex items-center gap-2 mb-5"><Smartphone className="h-5 w-5 text-primary" /><h2 className="font-head font-bold text-2xl">Application tracking</h2></div>
          <Card className="rounded-2xl p-6 border-border">
            <div className="space-y-1">
              {TRACKING.map((t, i) => (
                <div key={t.step} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    {t.done ? <CheckCircle2 className="h-6 w-6 text-primary" /> : <Circle className="h-6 w-6 text-muted-foreground" />}
                    {i < TRACKING.length - 1 && <div className={`w-0.5 h-10 ${t.done ? 'bg-primary' : 'bg-border'}`} />}
                  </div>
                  <div className="pb-4">
                    <p className={`font-semibold ${t.done ? '' : 'text-muted-foreground'}`}>{t.step}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {t.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="flex flex-wrap justify-between gap-3 mt-8">
          <Button variant="outline" onClick={() => navigate('/results')} className="rounded-full gap-2 border-primary/40"><ArrowLeft className="h-4 w-4" /> Back to schemes</Button>
          <Button onClick={() => navigate('/')} className="rounded-full gap-2 h-11 px-6">Finish &amp; go home <ArrowRight className="h-4 w-4" /></Button>
        </div>
      </div>
    </main>
  );
};

export default CSCBridge;
