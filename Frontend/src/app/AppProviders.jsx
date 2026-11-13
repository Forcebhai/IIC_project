import React from 'react';
import { useLenis } from '../hooks/useLenis';

export default function AppProviders({ children }) {
  // Initialize Lenis smooth scroll and synchronization with GSAP ScrollTrigger
  useLenis();

  return <>{children}</>;
}

