import { useState, useEffect, useRef, useCallback } from 'react';
import { TOTAL_FRAMES, getFrameUrl } from '../utils/frameUtils';

// Key milestone frames corresponding to the 7 horizontal story panels
const STORY_MILESTONES = [0, 35, 70, 105, 140, 175, 210, TOTAL_FRAMES - 1];

export function useFrameSequence() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isInitialReady, setIsInitialReady] = useState(false);
  const imagesRef = useRef(new Array(TOTAL_FRAMES).fill(null));
  const isLoadedMapRef = useRef(new Array(TOTAL_FRAMES).fill(false));
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    let loadedCount = 0;

    // Detect mobile device and network condition
    const isMobile =
      typeof window !== 'undefined' &&
      (window.innerWidth < 768 || /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent || ''));

    const conn =
      typeof navigator !== 'undefined'
        ? navigator.connection || navigator.mozConnection || navigator.webkitConnection
        : null;

    const isSlowConnection = Boolean(
      conn &&
        (conn.saveData === true ||
          conn.effectiveType === 'slow-2g' ||
          conn.effectiveType === '2g' ||
          conn.effectiveType === '3g')
    );

    // Adaptive subsampling:
    // - On slow connection (2G/3G/saveData): step = 3 (~80 frames, saving ~95MB, 70% RAM)
    // - On mobile devices: step = 2 (~120 frames, saving ~67MB, 50% RAM)
    // - On desktop: step = 1 (complete sequence)
    const frameStep = isSlowConnection ? 3 : isMobile ? 2 : 1;

    // Helper to load and decode an individual frame
    const loadFrame = (index) => {
      return new Promise((resolve) => {
        if (!isMountedRef.current) return resolve(null);
        if (isLoadedMapRef.current[index] && imagesRef.current[index]) {
          return resolve(imagesRef.current[index]);
        }

        const img = new Image();
        img.src = getFrameUrl(index);

        const onFinish = () => {
          if (!isMountedRef.current) return resolve(null);
          imagesRef.current[index] = img;
          isLoadedMapRef.current[index] = true;
          loadedCount++;
          setLoadingProgress((prev) =>
            Math.max(prev, Math.min(100, Math.round((loadedCount / 30) * 100)))
          );
          resolve(img);
        };

        if ('decode' in img) {
          img.decode().then(onFinish).catch(onFinish);
        } else {
          img.onload = onFinish;
          img.onerror = onFinish;
        }
      });
    };

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const loadSequence = async () => {
      // 1. TIER 1 (INSTANT READY): Load Frame 0 first
      await loadFrame(0);

      // Dismiss loader immediately so hero is interactive in under 300ms
      if (isMountedRef.current) {
        setIsInitialReady(true);
        setLoadingProgress(100);
      }

      // 2. TIER 2 (MILESTONES): Load key milestone frames for each story panel
      const milestonePromises = STORY_MILESTONES.map((idx) => loadFrame(idx));
      await Promise.all(milestonePromises);

      // 3. TIER 3 (PROGRESSIVE ADAPTIVE FILL):
      // Build target frames matching the device's adaptive step
      const targetIndices = [];
      for (let i = 0; i < TOTAL_FRAMES; i += frameStep) {
        if (!isLoadedMapRef.current[i]) {
          targetIndices.push(i);
        }
      }

      // Load in small non-blocking batches
      const batchSize = isSlowConnection ? 2 : isMobile ? 4 : 6;
      const batchDelay = isSlowConnection ? 75 : 30;

      for (let i = 0; i < targetIndices.length; i += batchSize) {
        if (!isMountedRef.current) break;
        const currentBatch = targetIndices.slice(i, i + batchSize);
        await Promise.all(currentBatch.map((idx) => loadFrame(idx)));
        await sleep(batchDelay);
      }
    };

    // Safety fallback: Never trap the user behind a loading screen if network stalls
    const fallbackTimer = setTimeout(() => {
      if (isMountedRef.current && !isInitialReady) {
        setIsInitialReady(true);
      }
    }, 1500);

    loadSequence();

    return () => {
      clearTimeout(fallbackTimer);
      isMountedRef.current = false;
      imagesRef.current.forEach((img) => {
        if (img) {
          img.onload = null;
          img.onerror = null;
        }
      });
    };
  }, []);

  /**
   * Returns the best available frame for a requested index.
   * If the requested frame is not yet ready, searches for the nearest loaded frame.
   */
  const getFrame = useCallback((index) => {
    const clampedIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(index)));
    if (isLoadedMapRef.current[clampedIndex] && imagesRef.current[clampedIndex]) {
      return imagesRef.current[clampedIndex];
    }

    // Search nearest loaded frame
    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      const prev = clampedIndex - offset;
      if (prev >= 0 && isLoadedMapRef.current[prev] && imagesRef.current[prev]) {
        return imagesRef.current[prev];
      }
      const next = clampedIndex + offset;
      if (next < TOTAL_FRAMES && isLoadedMapRef.current[next] && imagesRef.current[next]) {
        return imagesRef.current[next];
      }
    }

    return null;
  }, []);

  return {
    loadingProgress,
    isInitialReady,
    getFrame,
    totalFrames: TOTAL_FRAMES,
  };
}
