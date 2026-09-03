import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, ArrowRight, X, LayoutGrid } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '../components/ui/select';
import { SCHEMES, SCHEME_CATEGORIES, BENEFICIARY_GROUPS, STATES } from '../data/mock';

const ANY = 'Any';

const SchemeExplorer = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [q, setQ] = useState(params.get('q') || '');
  const [category, setCategory] = useState(params.get('category') || ANY);
  const [group, setGroup] = useState(ANY);
  const [state, setState] = useState(ANY);

  useEffect(() => {
    setQ(params.get('q') || '');
    if (params.get('category')) setCategory(params.get('category'));
  }, [params]);

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    return SCHEMES.filter((s) => {
      const matchQ = !query || s.name.toLowerCase().includes(query) || s.tagline.toLowerCase().includes(query) || s.desc.toLowerCase().includes(query);
      const matchCat = category === ANY || s.category === category;
      const matchGroup = group === ANY || s.groups.includes(group);
      const matchState = state === ANY || s.states.includes('All India') || s.states.includes(state);
      return matchQ && matchCat && matchGroup && matchState;
    });
  }, [q, category, group, state]);

  const reset = () => { setQ(''); setCategory(ANY); setGroup(ANY); setState(ANY); };
  const activeFilters = [category, group, state].filter((f) => f !== ANY).length + (q ? 1 : 0);

  return (
    <main className="min-h-screen">
      {/* header band */}
      <section className="section-soft py-12 border-b border-border/60">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 text-primary font-semibold uppercase tracking-wide text-sm mb-2">
            <LayoutGrid className="h-4 w-4" /> Scheme Explorer
          </div>
          <h1 className="font-head font-extrabold text-3xl md:text-4xl">Browse Government schemes</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">Search and filter across MoSJE welfare, skilling and entrepreneurship schemes for every beneficiary group.</p>

          <div className="mt-6 flex items-center gap-2 bg-background border border-border rounded-full px-4 h-12 max-w-xl shadow-sm">
            <Search className="h-5 w-5 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search scheme name or keyword..."
              className="bg-transparent outline-none w-full text-sm" />
            {q && <button onClick={() => setQ('')}><X className="h-4 w-4 text-muted-foreground" /></button>}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8">
        {/* filters */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground"><SlidersHorizontal className="h-4 w-4" /> Filters</span>
          <div className="w-full sm:w-52">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="rounded-full h-10"><SelectValue placeholder="Category" /></SelectTrigger>
              <SelectContent>
                <SelectItem value={ANY}>All categories</SelectItem>
                {SCHEME_CATEGORIES.map((c) => (<SelectItem key={c} value={c}>{c}</SelectItem>))}
              </SelectContent>
            </Select>
          </div>
          <div className="w-full sm:w-48">
            <Select value={group} onValueChange={setGroup}>
              <SelectTrigger className="rounded-full h-10"><SelectValue placeholder="Group" /></SelectTrigger>
              <SelectContent>
                <SelectItem value={ANY}>All groups</SelectItem>
                {BENEFICIARY_GROUPS.map((g) => (<SelectItem key={g} value={g}>{g}</SelectItem>))}
              </SelectContent>
            </Select>
          </div>
          <div className="w-full sm:w-48">
            <Select value={state} onValueChange={setState}>
              <SelectTrigger className="rounded-full h-10"><SelectValue placeholder="State" /></SelectTrigger>
              <SelectContent>
                <SelectItem value={ANY}>All states</SelectItem>
                {STATES.map((st) => (<SelectItem key={st} value={st}>{st}</SelectItem>))}
              </SelectContent>
            </Select>
          </div>
          {activeFilters > 0 && (
            <Button variant="ghost" onClick={reset} className="rounded-full gap-1 text-muted-foreground h-10"><X className="h-4 w-4" /> Clear</Button>
          )}
        </div>

        <p className="text-sm text-muted-foreground mb-5"><span className="font-bold text-foreground">{results.length}</span> schemes found</p>

        {results.length === 0 ? (
          <Card className="rounded-2xl p-12 text-center border-dashed">
            <p className="font-head font-bold text-lg">No schemes match your filters</p>
            <p className="text-muted-foreground text-sm mt-1">Try clearing a filter or searching a different keyword.</p>
            <Button onClick={reset} className="rounded-full mt-4">Reset filters</Button>
          </Card>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {results.map((s) => (
              <Card key={s.id} onClick={() => navigate(`/schemes/${s.id}`)}
                className="rounded-2xl p-5 border-border hover-lift cursor-pointer flex flex-col">
                <div className="flex items-center gap-2 flex-wrap mb-3">
                  <Badge className="rounded-full bg-primary/10 text-primary border-0">{s.category}</Badge>
                  <Badge variant="secondary" className="rounded-full">{s.ministry}</Badge>
                </div>
                <h3 className="font-head font-bold text-lg leading-snug">{s.name}</h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed flex-1">{s.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.groups.slice(0, 3).map((g) => (<span key={g} className="text-[11px] font-medium text-muted-foreground bg-secondary rounded-full px-2 py-0.5">{g}</span>))}
                </div>
                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-sm font-semibold text-[hsl(var(--saffron))]">{s.benefit}</span>
                  <ArrowRight className="h-4 w-4 text-primary" />
                </div>
              </Card>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default SchemeExplorer;
