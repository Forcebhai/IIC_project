import { useEffect } from 'react';
import { initLenis, destroyLenis, getLenis, scrollTo } from '../lib/lenis';

export function useLenis() {
  useEffect(() => {
    const lenis = initLenis();
    return () => {
      destroyLenis();
    };
  }, []);

  return { getLenis, scrollTo };
}

