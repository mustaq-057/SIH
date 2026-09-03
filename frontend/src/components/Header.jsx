import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ArrowRight, Sun, Moon, Languages, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from './ui/select';
import { useWizard } from '../context/WizardContext';
import { LANGUAGES } from '../data/mock';
import { LogoFull } from './Logo';

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Voice Discovery', to: '/discover' },
  { label: 'Document Audit', to: '/documents' },
  { label: 'My Schemes', to: '/results' },
  { label: 'CSC Bridge', to: '/csc-bridge' },
];

const Header = () => {
  const { language, setLanguage, theme, setTheme } = useWizard();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="tricolor-strip h-1.5 w-full" />

      {/* Gov top bar */}
      <div className="bg-secondary/60 border-b border-border/70">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-10 text-[12px] text-muted-foreground">
          <div className="flex items-center gap-2.5">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" alt="Emblem of India" className="h-7 w-7" />
            <span className="font-medium hidden sm:inline">Government of India</span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="max-w-7xl mx-auto px-4 h-[68px] flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <LogoFull compact />
        </Link>

        <div className="hidden lg:flex flex-1 max-w-md items-center gap-2 bg-secondary/70 border border-border rounded-full px-4 h-11">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input className="bg-transparent outline-none text-sm font-mono w-full placeholder:text-muted-foreground/70" placeholder="Search scheme name..." />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden xl:flex items-center gap-1 mr-1">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="px-3 py-2 text-sm font-medium rounded-lg hover:bg-secondary transition-colors">{n.label}</Link>
            ))}
          </div>

          <div className="hidden sm:block w-[130px]">
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="h-9 rounded-full border-primary/40">
                <Languages className="h-4 w-4 text-primary" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="max-h-72">
                {LANGUAGES.map((l) => (<SelectItem key={l} value={l}>{l}</SelectItem>))}
              </SelectContent>
            </Select>
          </div>

          <Button onClick={() => navigate('/discover')} className="rounded-full gap-1 hidden sm:flex">
            Sign In <ArrowRight className="h-4 w-4" />
          </Button>

          <button className="xl:hidden h-9 w-9 grid place-items-center rounded-full border border-border" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden border-t border-border bg-background px-4 py-3 flex flex-col gap-1">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-secondary text-sm font-medium">{n.label}</Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
