import React from 'react';

/**
 * Heading component
 * Semantic, accessible heading typography aligned with the approved brand hierarchy.
 */
export default function Heading({
  level = 2,
  children,
  className = '',
  ...props
}) {
  const Tag = `h${Math.min(Math.max(level, 1), 6)}`;

  const sizeClasses = {
    1: 'text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-dark',
    2: 'text-2xl sm:text-3xl font-bold tracking-tight text-dark',
    3: 'text-xl sm:text-2xl font-semibold text-dark',
    4: 'text-lg sm:text-xl font-semibold text-dark',
    5: 'text-base font-semibold text-dark',
    6: 'text-sm font-semibold uppercase tracking-wider text-muted',
  }[level] || 'text-2xl font-bold text-dark';

  return (
    <Tag className={`${sizeClasses} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
