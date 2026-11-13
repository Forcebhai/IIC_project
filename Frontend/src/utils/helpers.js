/**
 * Common math and UI helpers
 */

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function padZero(num, size = 3) {
  let s = num + '';
  while (s.length < size) s = '0' + s;
  return s;
}

export function lerp(start, end, factor) {
  return start + (end - start) * factor;
}

export function formatNumber(num) {
  return new Intl.NumberFormat('en-IN').format(num);
}

