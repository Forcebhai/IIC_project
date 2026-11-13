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

  // Handle Resize and DPR
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2 for optimal GPU performance
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      renderFrame();
    };

    handleResize();
    window.addEventListener('resize', handleResize);
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
