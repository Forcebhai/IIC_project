import { useState, useEffect, useRef, useCallback } from 'react';
import { TOTAL_FRAMES, getFrameUrl } from '../utils/frameUtils';

export function useFrameSequence() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isInitialReady, setIsInitialReady] = useState(false);
  const imagesRef = useRef(new Array(TOTAL_FRAMES).fill(null));
  const isLoadedMapRef = useRef(new Array(TOTAL_FRAMES).fill(false));
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    let loadedCount = 0;
    const initialBatchSize = 20;

    // Helper to load an individual frame
    const loadFrame = (index) => {
      return new Promise((resolve) => {
        if (!isMountedRef.current) return resolve(null);

        const img = new Image();
        img.src = getFrameUrl(index);

        const onFinish = () => {
          if (!isMountedRef.current) return resolve(null);
          imagesRef.current[index] = img;
          isLoadedMapRef.current[index] = true;
          loadedCount++;
          setLoadingProgress((loadedCount / TOTAL_FRAMES) * 100);
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

    // Load initial critical batch first to show hero fast
    const loadSequence = async () => {
      const initialPromises = [];
      for (let i = 0; i < initialBatchSize; i++) {
        initialPromises.push(loadFrame(i));
      }
      await Promise.all(initialPromises);
      if (isMountedRef.current) {
        setIsInitialReady(true);
      }

      // Load remaining frames in batches of 10 to prevent saturating the network
      const batchSize = 10;
      for (let i = initialBatchSize; i < TOTAL_FRAMES; i += batchSize) {
        if (!isMountedRef.current) break;
        const batch = [];
        for (let j = i; j < Math.min(i + batchSize, TOTAL_FRAMES); j++) {
          batch.push(loadFrame(j));
        }
        await Promise.all(batch);
      }
    };

    loadSequence();

    return () => {
      isMountedRef.current = false;
      // Cleanup image sources to free GPU/RAM
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

