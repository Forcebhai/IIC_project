import { useState, useEffect, useRef, useCallback } from 'react';
import manifest from '../aboutFramesManifest.json';

const FRAME_DIR = '/frame-sequence/about';

export function useAboutFrameSequence() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isInitialReady, setIsInitialReady] = useState(false);
  const totalFrames = manifest.length;

  const imagesRef = useRef(new Array(totalFrames).fill(null));
  const isLoadedMapRef = useRef(new Array(totalFrames).fill(false));
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    let loadedCount = 0;
    const initialBatchSize = 15;

    const loadFrame = (index) => {
      return new Promise((resolve) => {
        if (!isMountedRef.current) return resolve(null);

        const fileName = manifest[index];
        const img = new Image();
        img.src = `${FRAME_DIR}/${fileName}`;

        const onFinish = () => {
          if (!isMountedRef.current) return resolve(null);
          imagesRef.current[index] = img;
          isLoadedMapRef.current[index] = true;
          loadedCount++;
          setLoadingProgress((loadedCount / totalFrames) * 100);
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

    const loadSequence = async () => {
      // 1. Load initial critical batch to show first visual immediately
      const initialBatch = [];
      for (let i = 0; i < Math.min(initialBatchSize, totalFrames); i++) {
        initialBatch.push(loadFrame(i));
      }
      await Promise.all(initialBatch);
      if (isMountedRef.current) {
        setIsInitialReady(true);
      }

      // 2. Load remaining frames progressively in batches of 8
      const batchSize = 8;
      for (let i = initialBatchSize; i < totalFrames; i += batchSize) {
        if (!isMountedRef.current) break;
        const batch = [];
        for (let j = i; j < Math.min(i + batchSize, totalFrames); j++) {
          batch.push(loadFrame(j));
        }
        await Promise.all(batch);
      }
    };

    loadSequence();

    return () => {
      isMountedRef.current = false;
      imagesRef.current.forEach((img) => {
        if (img) {
          img.onload = null;
          img.onerror = null;
        }
      });
    };
  }, [totalFrames]);

  /**
   * Retrieves the best available frame for a requested index.
   * If not yet decoded, seamlessly retrieves the nearest loaded frame to eliminate flickering.
   */
  const getFrame = useCallback((index) => {
    const clamped = Math.max(0, Math.min(totalFrames - 1, Math.round(index)));
    if (isLoadedMapRef.current[clamped] && imagesRef.current[clamped]) {
      return imagesRef.current[clamped];
    }

    // Bidirectional fallback
    for (let offset = 1; offset < totalFrames; offset++) {
      const prev = clamped - offset;
      if (prev >= 0 && isLoadedMapRef.current[prev] && imagesRef.current[prev]) {
        return imagesRef.current[prev];
      }
      const next = clamped + offset;
      if (next < totalFrames && isLoadedMapRef.current[next] && imagesRef.current[next]) {
        return imagesRef.current[next];
      }
    }

    return null;
  }, [totalFrames]);

  return {
    loadingProgress,
    isInitialReady,
    getFrame,
    totalFrames,
  };
}

