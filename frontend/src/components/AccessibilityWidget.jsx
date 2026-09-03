import React, { useState } from 'react';
import { Accessibility, Plus, Minus, Contrast, RotateCcw, X } from 'lucide-react';

const AccessibilityWidget = () => {
  const [open, setOpen] = useState(false);
  const [fs, setFs] = useState(0); // 0 normal, 1 lg, 2 xl
  const [contrast, setContrast] = useState(false);

  const applyFs = (n) => {
    const root = document.documentElement;
    root.classList.remove('fs-lg', 'fs-xl');
    if (n === 1) root.classList.add('fs-lg');
    if (n === 2) root.classList.add('fs-xl');
    setFs(n);
  };
  const toggleContrast = () => {
    const root = document.documentElement;
    root.classList.toggle('contrast-high');
    setContrast(!contrast);
  };
  const reset = () => { applyFs(0); document.documentElement.classList.remove('contrast-high'); setContrast(false); };

  return (
    <div className="fixed right-4 bottom-4 z-[60] flex flex-col items-end gap-3">
      {open && (
        <div className="w-64 rounded-2xl border border-border bg-background shadow-2xl p-4 fade-up">
          <div className="flex items-center justify-between mb-3">
            <h5 className="font-head font-bold text-sm">Accessibility</h5>
            <button onClick={() => setOpen(false)}><X className="h-4 w-4 text-muted-foreground" /></button>
          </div>
          <p className="text-xs text-muted-foreground mb-2">Text Size</p>
          <div className="flex gap-2 mb-4">
            <button onClick={() => applyFs(Math.max(0, fs - 1))} className="flex-1 h-9 rounded-lg border border-border grid place-items-center hover:bg-secondary"><Minus className="h-4 w-4" /></button>
            <div className="flex-1 h-9 rounded-lg bg-secondary grid place-items-center text-sm font-medium">{['A','A+','A++'][fs]}</div>
            <button onClick={() => applyFs(Math.min(2, fs + 1))} className="flex-1 h-9 rounded-lg border border-border grid place-items-center hover:bg-secondary"><Plus className="h-4 w-4" /></button>
          </div>
          <button onClick={toggleContrast} className={`w-full h-10 rounded-lg border flex items-center justify-center gap-2 text-sm mb-2 ${contrast ? 'bg-primary text-primary-foreground border-primary' : 'border-border hover:bg-secondary'}`}>
            <Contrast className="h-4 w-4" /> High Contrast
          </button>
          <button onClick={reset} className="w-full h-10 rounded-lg border border-border flex items-center justify-center gap-2 text-sm hover:bg-secondary">
            <RotateCcw className="h-4 w-4" /> Reset
          </button>
        </div>
      )}
      <button onClick={() => setOpen(!open)} aria-label="Accessibility options" className="h-12 w-12 rounded-full bg-[hsl(var(--gov-navy))] text-white grid place-items-center shadow-xl hover:scale-105 transition-transform">
        <Accessibility className="h-6 w-6" />
      </button>
    </div>
  );
};

export default AccessibilityWidget;
