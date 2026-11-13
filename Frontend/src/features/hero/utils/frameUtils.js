import { padZero } from '../../../utils/helpers';

export const TOTAL_FRAMES = 241;
export const FRAME_DIR = '/frame-sequence/train';

/**
 * Generates the URL for a given frame index (0-based)
 */
export function getFrameUrl(index) {
  const frameNumber = padZero(index + 1, 3);
  return `${FRAME_DIR}/frame_${frameNumber}.jpg`;
}

/**
 * Draw an image onto a 2D canvas with object-fit: cover behavior.
 * Restored to original clean edge-to-edge full-bleed configuration.
 */
export function drawImageCover(ctx, img, canvasWidth, canvasHeight) {
  if (!img || !img.complete || img.naturalWidth === 0) return;

  const imgW = img.naturalWidth;
  const imgH = img.naturalHeight;

  const canvasRatio = canvasWidth / canvasHeight;
  const imgRatio = imgW / imgH;

  let drawW, drawH, offsetX, offsetY;

  if (canvasRatio > imgRatio) {
    // Canvas is wider than image
    drawW = canvasWidth;
    drawH = canvasWidth / imgRatio;
    offsetX = 0;
    offsetY = (canvasHeight - drawH) / 2;
  } else {
    // Canvas is taller than image
    drawH = canvasHeight;
    drawW = canvasHeight * imgRatio;
    offsetX = (canvasWidth - drawW) / 2;
    offsetY = 0;
  }

  ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
}
