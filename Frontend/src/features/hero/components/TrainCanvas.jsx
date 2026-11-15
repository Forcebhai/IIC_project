import React, { useRef, useEffect, useCallback } from 'react';
import { drawImageCover } from '../utils/frameUtils';

export default function TrainCanvas({ currentFrameIndex, getFrame, isReady }) {
  const canvasRef = useRef(null);
  const rafIdRef = useRef(null);
  const lastRenderedIndexRef = useRef(-1);

  const renderFrame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const img = getFrame(currentFrameIndex);
    if (!img) return;

    drawImageCover(ctx, img, canvas.width, canvas.height);
    lastRenderedIndexRef.current = currentFrameIndex;
  }, [currentFrameIndex, getFrame]);

  // Handle Resize and DPR with adaptive mobile scaling
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      // Cap DPR to 1 on mobile to eliminate GPU fill-rate strain and cut canvas GPU memory by 75%
      const maxDpr = isMobile ? 1 : 1.5;
      const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
      const width = window.innerWidth;
      const height = window.innerHeight;

      const targetW = Math.round(width * dpr);
      const targetH = Math.round(height * dpr);

      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
      }

      renderFrame();
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [renderFrame]);

  // Render when isReady turns true or currentFrameIndex changes
  useEffect(() => {
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
    }
    rafIdRef.current = requestAnimationFrame(renderFrame);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [renderFrame, isReady]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
}
