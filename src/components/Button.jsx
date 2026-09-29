import React from 'react';

/**
 * Button component
 * Accessible interactive element or link supporting approved brand variants.
 * 
 * Rules:
 * - Solid colors only (no gradients, no artificial glow)
 * - Accessible focus rings
 * - Restrained use of brand red accent
 */
export default function Button({
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  disabled = false,
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  }[size] || 'px-4 py-2 text-sm';

  const variantClasses = {
    primary: 'bg-brand-red text-white hover:bg-[#cf171e] focus:ring-brand-red shadow-sm',
    accent: 'bg-brand-red text-white hover:bg-[#cf171e] focus:ring-brand-red shadow-sm',
    outline: 'bg-brand-red text-white hover:bg-[#cf171e] focus:ring-brand-red shadow-sm',
    ghost: 'text-brand-red hover:bg-red-50 focus:ring-brand-red',
  }[variant] || 'bg-brand-red text-white hover:bg-[#cf171e] focus:ring-brand-red shadow-sm';

  return (
    <Component
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      disabled={Component === 'button' ? disabled : undefined}
      aria-disabled={disabled ? 'true' : undefined}
      {...props}
    >
      {children}
    </Component>
  );
}
