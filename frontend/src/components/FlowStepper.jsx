import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mic, ScanText, ShieldCheck, Layers, QrCode, Check } from 'lucide-react';

const STEPS = [
  { icon: Mic, label: 'Voice', to: '/discover' },
  { icon: ScanText, label: 'Documents', to: '/documents' },
  { icon: ShieldCheck, label: 'Match', to: '/results' },
  { icon: Layers, label: 'Stack', to: '/results' },
  { icon: QrCode, label: 'CSC Bridge', to: '/csc-bridge' },
];

const FlowStepper = ({ current = 0 }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="flex items-center justify-between">
        {STEPS.map((s, i) => {
          const done = i < current;
          const active = i === current;
          const Icon = s.icon;
          return (
            <React.Fragment key={s.label}>
              <button onClick={() => navigate(s.to)} className="flex flex-col items-center gap-2 group">
                <div className={`h-11 w-11 rounded-full grid place-items-center border-2 transition-all ${
                  active ? 'bg-primary border-primary text-primary-foreground scale-110 shadow-lg' :
                  done ? 'bg-primary/15 border-primary text-primary' :
                  'bg-background border-border text-muted-foreground group-hover:border-primary/50'}`}>
                  {done ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                </div>
                <span className={`text-xs font-medium ${active ? 'text-primary' : 'text-muted-foreground'}`}>{s.label}</span>
              </button>
              {i < STEPS.length - 1 && (
                <div className={`flex-1 h-0.5 mx-1 -mt-6 rounded ${i < current ? 'bg-primary' : 'bg-border'}`} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default FlowStepper;
