import React from 'react';
import { Link } from 'react-router-dom';
import { Mic, ScanText, ShieldCheck, Layers, QrCode, Phone, Mail, MapPin } from 'lucide-react';

const COLS = [
  { title:'The Journey', links:[
    { t:'Voice Discovery', to:'/discover', icon:Mic },
    { t:'Document Audit', to:'/documents', icon:ScanText },
    { t:'Scheme Match', to:'/results', icon:ShieldCheck },
    { t:'Stacking & Bundling', to:'/results', icon:Layers },
    { t:'CSC Agent Bridge', to:'/csc-bridge', icon:QrCode },
  ]},
  { title:'MoSJE Corporations', links:[
    { t:'NSFDC', to:'/results' }, { t:'NSKFDC', to:'/results' },
    { t:'NBCFDC', to:'/results' }, { t:'PM-DAKSH', to:'/results' },
    { t:'Stand-Up India', to:'/results' },
  ]},
  { title:'Support', links:[
    { t:'FAQs', to:'/' }, { t:'Accessibility', to:'/' },
    { t:'Terms of Use', to:'/' }, { t:'Privacy Policy', to:'/' },
    { t:'Grievance Redressal', to:'/' },
  ]},
];

const Footer = () => (
  <footer className="mt-4 border-t border-border bg-secondary/40">
    <div className="max-w-7xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <div className="flex items-center gap-2.5 mb-4">
          <img src="/suvidha-logo.png" alt="SUVIDHA AI" className="h-11 w-11 object-contain" />
          <div className="font-head font-extrabold text-xl"><span className="text-primary">SUVIDHA</span> <span className="text-[hsl(var(--saffron))]">AI</span></div>
        </div>
        <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
          A voice-first, rejection-proof digital pipeline that helps marginalised entrepreneurs discover, audit and stack Government of India schemes — end to end.
        </p>
        <div className="mt-5 space-y-2 text-sm text-muted-foreground">
          <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> Toll Free: 1800-11-0031</p>
          <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> help-suvidha@gov.in</p>
          <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Shastri Bhawan, New Delhi - 110001</p>
        </div>
      </div>
      {COLS.map((c) => (
        <div key={c.title}>
          <h4 className="font-head font-bold mb-4">{c.title}</h4>
          <ul className="space-y-2.5">
            {c.links.map((l) => (
              <li key={l.t}>
                <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  {l.icon && <l.icon className="h-3.5 w-3.5" />} {l.t}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="tricolor-strip h-1 w-full" />
    <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
      <p>© 2025 SUVIDHA AI — Ministry of Social Justice &amp; Empowerment, Government of India. (Demo)</p>
      <p>Built for Smart India Hackathon • SIH26093 • GIGW 3.0</p>
    </div>
  </footer>
);

export default Footer;
