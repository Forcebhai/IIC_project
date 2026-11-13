import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../../lib/gsap';

export default function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 2,
  className = '',
}) {
  const nodeRef = useRef(null);

  useEffect(() => {
    const el = nodeRef.current;
    if (!el) return;

    const numericValue = typeof value === 'number' ? value : parseFloat(value) || 0;
    const targetObj = { val: 0 };

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          gsap.to(targetObj, {
            val: numericValue,
            duration,
            ease: 'power2.out',
            onUpdate: () => {
              if (el) {
                const formatted = decimals > 0
                  ? targetObj.val.toFixed(decimals)
                  : Math.round(targetObj.val).toLocaleString('en-IN');
                el.innerText = `${prefix}${formatted}${suffix}`;
              }
            },
          });
        },
      });
    });

    return () => ctx.revert();
  }, [value, prefix, suffix, decimals, duration]);

  return (
    <span ref={nodeRef} className={className}>
      {prefix}0{suffix}
    </span>
  );
}

