import React, { useEffect, useState, useRef } from 'react';
import fabLogoWebp from '../assets/fab-logo.webp';
import fabLogoPng from '../assets/fab-logo.png';

/**
 * LogoLoader Component — Clean, Solid Dark Brand Transition
 * 
 * Specifically calibrated for the Home page:
 * - Solid dark background (no AI radial gradients or glow halos)
 * - Authentic FAB Medical Supplies Ltd logo in a clean, sharp white card
 * - Small solid circulating ring spinner
 * - 6.0-second display duration with instant skip option
 */
export default function LogoLoader({
  duration = 6000,
  onComplete,
}) {
  const [visible, setVisible] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return false;
    }
    return true;
  });

  const [fading, setFading] = useState(false);
  const timerRef = useRef(null);

  const dismiss = () => {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      setVisible(false);
      if (onComplete) onComplete();
    }, 350);
  };

  useEffect(() => {
    if (!visible) {
      if (onComplete) onComplete();
      return;
    }

    // Auto-dismiss after 6.0 seconds (6000ms)
    timerRef.current = setTimeout(() => {
      dismiss();
    }, duration);

    // Escape key listener to skip immediately
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        dismiss();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [visible, duration]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading FAB Medical Supplies Ltd."
      onClick={dismiss}
      className={`fixed inset-0 z-[120] flex flex-col items-center justify-center bg-[#0B132B] select-none cursor-pointer transition-opacity duration-350 ease-out ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      title="Click or press Esc to skip"
    >
      {/* Top Right Skip Button */}
      <div className="absolute top-6 right-6 sm:top-8 sm:right-10 z-20">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            dismiss();
          }}
          className="text-xs font-mono tracking-widest text-slate-400 hover:text-white uppercase transition-colors px-2 py-1"
          aria-label="Skip loader"
        >
          Skip &rarr;
        </button>
      </div>

      {/* Main Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 max-w-md w-full text-center">
        
        {/* FAB Logo Card — Sharp, Solid, Clean */}
        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-2xl flex items-center justify-center mb-8">
          <picture>
            <source srcSet={fabLogoWebp} type="image/webp" />
            <img
              src={fabLogoPng}
              alt="FAB Medical Supplies Ltd."
              width="100"
              height="103"
              className="h-20 sm:h-24 w-auto object-contain block drop-shadow-sm"
            />
          </picture>
        </div>

        {/* Small Solid Circulating Ring Spinner (Non-transparent, High-Contrast) */}
        <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center mb-6">
          <svg
            className="w-full h-full animate-spin"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Solid base ring track */}
            <circle
              cx="18"
              cy="18"
              r="14"
              stroke="#1E293B"
              strokeWidth="3"
              fill="none"
            />

            {/* Solid circulating arc */}
            <circle
              cx="18"
              cy="18"
              r="14"
              stroke="#0284C7"
              strokeWidth="3"
              strokeDasharray="88"
              strokeDashoffset="62"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Clean Corporate Brand Marker */}
        <div className="flex items-center space-x-2 text-[10.5px] font-mono tracking-[0.2em] text-slate-400 uppercase">
          <span>FAB MEDICAL SUPPLIES LTD.</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48]" aria-hidden="true" />
        </div>

      </div>
    </div>
  );
}
