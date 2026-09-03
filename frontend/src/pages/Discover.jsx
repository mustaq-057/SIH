import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mic, ArrowRight, Sparkles, Languages, RotateCcw, Waves } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import FlowStepper from '../components/FlowStepper';
import { useWizard } from '../context/WizardContext';
import { LANGUAGES, SAMPLE_TRANSCRIPT, SAMPLE_PROFILE } from '../data/mock';

const QUICK_LANGS = ['English', 'हिन्दी (Hindi)', 'தமிழ் (Tamil)', 'मराठी (Marathi)', 'বাংলা (Bengali)', 'తెలుగు (Telugu)'];

const Discover = () => {
  const navigate = useNavigate();
  const { language, setLanguage, setTranscript, setProfile } = useWizard();
  const [state, setState] = useState('idle'); // idle | listening | done
  const [text, setText] = useState('');
  const timer = useRef(null);

  const startListening = () => {
    setState('listening');
    setText('');
    const full = SAMPLE_TRANSCRIPT.raw;
    let i = 0;
    clearInterval(timer.current);
    timer.current = setInterval(() => {
      i += 2;
      setText(full.slice(0, i));
      if (i >= full.length) {
        clearInterval(timer.current);
        setTimeout(() => setState('done'), 500);
      }
    }, 60);
  };

  useEffect(() => {
    if (state === 'done') {
      setTranscript(SAMPLE_TRANSCRIPT);
      setProfile(SAMPLE_PROFILE);
    }
  }, [state, setTranscript, setProfile]);

  useEffect(() => () => clearInterval(timer.current), []);

  return (
    <main className="min-h-screen">
      <div className="section-soft pt-10 pb-8"><FlowStepper current={0} /></div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="text-center mb-8">
          <Badge className="rounded-full bg-primary/10 text-primary border-0 mb-4"><Sparkles className="h-4 w-4 mr-1.5" /> Bhashini Voice Engine</Badge>
          <h1 className="font-head font-extrabold text-3xl md:text-4xl">Just speak your business idea</h1>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Choose your language, tap the mic, and describe what you want to start. No typing needed.</p>
        </div>

        {/* language chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {QUICK_LANGS.map((l) => (
            <button key={l} onClick={() => setLanguage(l)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${language === l ? 'bg-primary text-primary-foreground border-primary' : 'border-border hover:border-primary/50 bg-background'}`}>
              {l}
            </button>
          ))}
          <div className="px-4 py-2 rounded-full text-sm font-medium border border-border bg-background flex items-center gap-1.5 text-muted-foreground">
            <Languages className="h-4 w-4" /> +{LANGUAGES.length - QUICK_LANGS.length} more
          </div>
        </div>

        {/* mic */}
        <div className="flex flex-col items-center">
          <button onClick={startListening} disabled={state === 'listening'}
            className={`relative h-32 w-32 rounded-full grid place-items-center text-primary-foreground transition-all ${state === 'listening' ? 'bg-primary animate-mic scale-105' : 'bg-primary hover:scale-105'}`}>
            {state === 'listening' ? <Waves className="h-14 w-14" /> : <Mic className="h-14 w-14" />}
          </button>
          <p className="mt-5 text-muted-foreground font-medium">
            {state === 'idle' && `Tap to speak in ${language}`}
            {state === 'listening' && 'Listening… speak clearly'}
            {state === 'done' && 'Got it! Here is what we understood'}
          </p>
        </div>

        {/* transcript */}
        {(state === 'listening' || state === 'done') && (
          <Card className="mt-10 rounded-2xl p-6 border-border fade-up">
            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Your words</p>
            <p className="text-lg font-medium leading-relaxed min-h-[2rem]">{text}<span className="animate-pulse">|</span></p>
            {state === 'done' && (
              <>
                <div className="h-px bg-border my-5" />
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">English translation</p>
                <p className="leading-relaxed">{SAMPLE_TRANSCRIPT.translated}</p>
              </>
            )}
          </Card>
        )}

        {/* detected intent */}
        {state === 'done' && (
          <Card className="mt-5 rounded-2xl p-6 border-primary/25 bg-primary/[0.04] fade-up">
            <div className="flex items-center gap-2 mb-4"><Sparkles className="h-5 w-5 text-primary" /><h3 className="font-head font-bold text-lg">Detected intent</h3></div>
            <p className="font-semibold text-primary">{SAMPLE_TRANSCRIPT.intent}</p>
            <p className="text-sm text-muted-foreground mt-3 mb-2">Identified needs:</p>
            <div className="flex flex-wrap gap-2">
              {SAMPLE_TRANSCRIPT.needs.map((n) => (
                <Badge key={n} variant="secondary" className="rounded-full py-1.5 px-3">{n}</Badge>
              ))}
            </div>
          </Card>
        )}

        {/* actions */}
        <div className="mt-8 flex justify-center gap-3">
          {state === 'done' && (
            <>
              <Button variant="outline" onClick={startListening} className="rounded-full gap-2 border-primary/40"><RotateCcw className="h-4 w-4" /> Speak again</Button>
              <Button onClick={() => navigate('/documents')} className="rounded-full gap-2 h-11 px-6">Continue to documents <ArrowRight className="h-4 w-4" /></Button>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Discover;
