import React from 'react';

/**
 * Container component
 * Provides consistent maximum width and responsive horizontal padding.
 */
export default function Container({ children, className = '', ...props }) {
  return (
    <div
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
