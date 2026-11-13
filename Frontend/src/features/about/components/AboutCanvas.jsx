import React, { useRef, useEffect, useCallback } from 'react';

export default function AboutCanvas({ currentFrameIndex, getFrame, isReady }) {
  const canvasRef = useRef(null);
  const rafIdRef = useRef(null);
  const lastRenderedRef = useRef(-1);

  const renderFrame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const img = getFrame(currentFrameIndex);
    if (!img) return;

    const canvasW = canvas.width;
    const canvasH = canvas.height;
    const imgW = img.naturalWidth || 1280;
    const imgH = img.naturalHeight || 720;

    const canvasRatio = canvasW / canvasH;
    const imgRatio = imgW / imgH;

    let drawW, drawH, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      // Screen is wider than 16:9
      drawW = canvasW;
      drawH = canvasW / imgRatio;
      offsetX = 0;
      offsetY = (canvasH - drawH) / 2;
    } else {
      // Screen is taller/narrower than 16:9 (e.g. mobile portrait or tablet)
      drawH = canvasH;
      drawW = canvasH * imgRatio;
      offsetX = (canvasW - drawW) / 2;
      offsetY = 0;
    }

    ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
    lastRenderedRef.current = currentFrameIndex;
  }, [currentFrameIndex, getFrame]);

  // Window resize & DPR handling
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;

      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
      }
      renderFrame();
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [renderFrame]);

  // Render on index change or when ready
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
  }, [renderFrame, isReady, currentFrameIndex]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
}

