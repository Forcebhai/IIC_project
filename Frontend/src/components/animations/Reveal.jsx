import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../../lib/gsap';

export default function Reveal({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  y = 30,
  opacity = 0,
}) {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          y,
          opacity,
        },
        {
          y: 0,
          opacity: 1,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [delay, duration, y, opacity]);

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
}

