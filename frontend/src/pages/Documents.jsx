import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  IdCard, FileBadge, ReceiptIndianRupee, BookText, UploadCloud, ArrowRight,
  CheckCircle2, AlertTriangle, ScanText, Loader2, ArrowLeft,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import FlowStepper from '../components/FlowStepper';
import { useWizard } from '../context/WizardContext';
import { DOC_TYPES, AUDIT_RESULT } from '../data/mock';
import { useToast } from '../hooks/use-toast';

const ICONS = { IdCard, FileBadge, ReceiptIndianRupee, BookText };

const Documents = () => {
  const navigate = useNavigate();
  const { setDocuments } = useWizard();
  const { toast } = useToast();
  const [uploaded, setUploaded] = useState({});
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [audited, setAudited] = useState(false);

  const handleUpload = (id, name) => {
    setUploaded((u) => ({ ...u, [id]: true }));
    toast({ title: `${name} uploaded`, description: 'Queued for OCR extraction.' });
  };

  const allUploaded = DOC_TYPES.every((d) => uploaded[d.id]);

  const runAudit = () => {
    setScanning(true);
    setProgress(0);
    const t = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(t);
          setScanning(false);
          setAudited(true);
          setDocuments(Object.keys(uploaded));
          return 100;
        }
        return p + 5;
      });
    }, 90);
  };

  return (
    <main className="min-h-screen">
      <div className="section-soft pt-10 pb-8"><FlowStepper current={1} /></div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="text-center mb-8">
          <Badge className="rounded-full bg-primary/10 text-primary border-0 mb-4"><ScanText className="h-4 w-4 mr-1.5" /> AI Document Audit</Badge>
          <h1 className="font-head font-extrabold text-3xl md:text-4xl">Upload once. We catch the errors.</h1>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Our OCR reads your documents and cross-checks them for the small mismatches that cause bank rejections.</p>
        </div>

        {/* upload grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {DOC_TYPES.map((d) => {
            const Icon = ICONS[d.icon];
            const done = uploaded[d.id];
            return (
              <Card key={d.id} className={`rounded-2xl p-5 border-2 border-dashed transition-colors ${done ? 'border-primary bg-primary/[0.04]' : 'border-border'}`}>
                <div className="flex items-start gap-4">
                  <div className={`h-12 w-12 rounded-xl grid place-items-center shrink-0 ${done ? 'bg-primary text-primary-foreground' : 'bg-secondary text-primary'}`}>
                    {done ? <CheckCircle2 className="h-6 w-6" /> : <Icon className="h-6 w-6" />}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">{d.name}</p>
                    <p className="text-sm text-muted-foreground">{d.hint}</p>
                    <Button size="sm" variant={done ? 'secondary' : 'outline'} onClick={() => handleUpload(d.id, d.name)}
                      className="mt-3 rounded-full gap-1.5 text-xs h-8">
                      <UploadCloud className="h-3.5 w-3.5" /> {done ? 'Re-upload' : 'Upload'}
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* audit trigger */}
        {!audited && (
          <div className="mt-8 text-center">
            {scanning ? (
              <Card className="rounded-2xl p-6 border-primary/25">
                <div className="flex items-center justify-center gap-2 mb-3 text-primary"><Loader2 className="h-5 w-5 animate-spin" /><span className="font-semibold">Running OCR &amp; cross-document audit…</span></div>
                <Progress value={progress} className="h-2" />
                <p className="text-sm text-muted-foreground mt-3">{progress}% — extracting parameters, matching fields</p>
              </Card>
            ) : (
              <Button size="lg" disabled={!allUploaded} onClick={runAudit} className="rounded-full h-12 px-7 gap-2">
                <ScanText className="h-5 w-5" /> {allUploaded ? 'Run AI audit' : 'Upload all 4 documents to audit'}
              </Button>
            )}
          </div>
        )}

        {/* audit result */}
        {audited && (
          <div className="mt-8 space-y-5 fade-up">
            <h2 className="font-head font-bold text-2xl">Audit report</h2>

            {AUDIT_RESULT.flags.map((f, i) => (
              <Card key={i} className={`rounded-2xl p-5 border-l-4 ${f.type === 'error' ? 'border-l-destructive bg-destructive/[0.04]' : 'border-l-primary bg-primary/[0.04]'}`}>
                <div className="flex gap-3">
                  {f.type === 'error' ? <AlertTriangle className="h-6 w-6 text-destructive shrink-0" /> : <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />}
                  <div>
                    <p className="font-semibold">{f.title}</p>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{f.detail}</p>
                  </div>
                </div>
              </Card>
            ))}

            <Card className="rounded-2xl p-5 border-border overflow-hidden">
              <p className="font-semibold mb-4">Extracted fields</p>
              <div className="space-y-2">
                {AUDIT_RESULT.extracted.map((e) => (
                  <div key={e.field} className="flex items-center justify-between gap-3 py-2 border-b border-border last:border-0">
                    <span className="text-sm text-muted-foreground w-28 shrink-0">{e.field}</span>
                    <span className="text-sm font-medium flex-1">
                      {e.aadhaar || e.caste || e.income}
                      {e.bank && e.status === 'mismatch' && <span className="text-destructive"> ≠ {e.bank}</span>}
                    </span>
                    {e.status === 'ok'
                      ? <Badge className="rounded-full bg-primary/10 text-primary border-0">Matched</Badge>
                      : <Badge variant="destructive" className="rounded-full">Mismatch</Badge>}
                  </div>
                ))}
              </div>
            </Card>

            <div className="flex flex-wrap justify-between gap-3 pt-2">
              <Button variant="outline" onClick={() => navigate('/discover')} className="rounded-full gap-2 border-primary/40"><ArrowLeft className="h-4 w-4" /> Back</Button>
              <Button onClick={() => navigate('/results')} className="rounded-full gap-2 h-11 px-6">See matched schemes <ArrowRight className="h-4 w-4" /></Button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Documents;
