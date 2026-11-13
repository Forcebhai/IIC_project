import React from 'react';

/**
 * BlurWords - Splits a string into accessible span elements for word-by-word blur-to-focus reveal.
 */
export function BlurWords({ text, className = '', wordClassName = '' }) {
  if (!text) return null;
  const words = text.split(' ');
  return (
    <span className={`inline ${className}`} aria-label={text}>
      {words.map((word, idx) => (
        <span
          key={idx}
          className={`inline-block mr-[0.26em] last:mr-0 will-change-transform ${wordClassName}`}
          aria-hidden="true"
        >
          {word}
        </span>
      ))}
    </span>
  );
}

/**
 * BlurLine - Wraps an entire element or sentence for line-by-line blur reveal.
 */
export function BlurLine({ children, className = '' }) {
  return (
    <span className={`inline-block will-change-transform ${className}`}>
      {children}
    </span>
  );
}

