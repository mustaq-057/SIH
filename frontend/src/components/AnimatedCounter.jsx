import React, { useEffect, useRef, useState } from 'react';

// Parses "2,400+", "96%", "30 sec", "22" -> animates the numeric part on scroll-in.
const parse = (str) => {
  const m = String(str).match(/^([\d,]+)(.*)$/);
  if (!m) return { target: 0, suffix: str };
  return { target: parseInt(m[1].replace(/,/g, ''), 10), suffix: m[2] };
};

const AnimatedCounter = ({ value, className = '', duration = 1600 }) => {
  const { target, suffix } = parse(value);
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString('en-IN')}{suffix}
    </span>
  );
};

export default AnimatedCounter;
