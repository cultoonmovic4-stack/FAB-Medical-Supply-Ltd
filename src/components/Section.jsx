import React from 'react';

/**
 * Section component
 * Provides standardized vertical spacing and optional neutral surface styling.
 */
export default function Section({
  children,
  className = '',
  bg = 'white', // 'white' | 'light' | 'dark'
  id,
  ...props
}) {
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-surface-light',
    dark: 'bg-dark text-white',
  }[bg] || 'bg-white';

  return (
    <section
      id={id}
      className={`py-12 sm:py-16 lg:py-20 ${bgClasses} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
