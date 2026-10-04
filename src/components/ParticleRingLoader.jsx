import React, { useEffect, useRef, useState } from 'react';

/**
 * ParticleRingLoader Component
 * 
 * Recreates the glowing circular stardust particle vortex loader shown in the reference image:
 * - Swirling ring of luminous cyan, electric blue, violet, and bright white particles
 * - High-density glowing head with an ethereal fading trail
 * - Smooth 60fps canvas animation with additive glow
 * - Elegant deep space backdrop with smooth fade-out transition
 */
export default function ParticleRingLoader({
  isLoading = true,
  label = 'FAB MEDICAL SUPPLIES LTD.',
  sublabel = 'Service That Exceeds',
  duration = 750,
  onComplete,
}) {
  const canvasRef = useRef(null);
  const [visible, setVisible] = useState(() => {
    // Respect user's motion preferences
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return false;
    }
    // Only display once per session so browsing routes is non-blocking and immediate
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const alreadySeen = window.sessionStorage.getItem('fab_loader_seen');
      if (alreadySeen) return false;
    }
    return true;
  });
  const [fading, setFading] = useState(false);

  const dismiss = () => {
    setFading(true);
    setTimeout(() => {
      setVisible(false);
      if (typeof window !== 'undefined' && window.sessionStorage) {
        window.sessionStorage.setItem('fab_loader_seen', 'true');
      }
      if (onComplete) onComplete();
    }, 350);
  };

  useEffect(() => {
    if (!visible) {
      if (onComplete) onComplete();
      return;
    }

    if (!isLoading) {
      dismiss();
      return;
    }

    // Auto-dismiss after non-blocking duration
    const autoTimer = setTimeout(() => {
      dismiss();
    }, duration);

    return () => clearTimeout(autoTimer);
  }, [visible, isLoading, duration]);

  // Particle Canvas Animation
  useEffect(() => {
    if (!visible) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const dpr = window.devicePixelRatio || 1;
    const width = 360;
    const height = 360;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const cx = width / 2;
    const cy = height / 2;
    const radius = 100;

    // Palette matching the reference image: cyan, electric blue, soft lavender, white
    const colors = [
      { r: 255, g: 255, b: 255 }, // brilliant white
      { r: 160, g: 235, b: 255 }, // bright cyan
      { r: 100, g: 210, b: 255 }, // vivid sky blue
      { r: 60, g: 150, b: 255 },  // electric blue
      { r: 165, g: 180, b: 252 }, // soft lavender/violet
      { r: 80, g: 195, b: 220 },  // medtech aqua
    ];

    // Generate 260 particles distributed along the ring
    const particleCount = 260;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      // Offset along the ring arc [0, 2PI]
      // Biased slightly toward the head for organic density
      const arcOffset = Math.pow(Math.random(), 1.4) * Math.PI * 2;
      
      // Radial spread from base ring radius (slight Gaussian-like scattering)
      const radialSpread = (Math.random() - 0.5 + (Math.random() - 0.5)) * 26;
      
      // Individual particle attributes
      particles.push({
        arcOffset,
        radiusOffset: radialSpread,
        baseSize: Math.random() * 2.4 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        twinkleSpeed: Math.random() * 0.08 + 0.03,
        twinklePhase: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.03 + 0.01,
        wobbleAmp: Math.random() * 3 + 1,
      });
    }

    let headAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Advance rotation angle smoothly
      headAngle += 0.038;

      // Draw each particle with distance-based alpha and glow
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];

        // Current particle angle along the circle
        const angle = (headAngle - p.arcOffset) % (Math.PI * 2);
        const normalizedAngle = (angle + Math.PI * 2) % (Math.PI * 2);

        // Distance from the bright head (0 is head, 2PI is full tail)
        const distFromHead = normalizedAngle;

        // Density & Alpha gradient: Head is brilliant, tail fades away
        let headFalloff = Math.cos(distFromHead / 2); // 1.0 at head, 0.0 at opposite
        if (headFalloff < 0) headFalloff = 0;
        headFalloff = Math.pow(headFalloff, 1.8);

        // Twinkle oscillation
        p.twinklePhase += p.twinkleSpeed;
        const twinkle = 0.7 + 0.3 * Math.sin(p.twinklePhase);

        // Particle radial position with gentle organic wobble
        const currentR = radius + p.radiusOffset + Math.sin(headAngle * p.wobbleSpeed) * p.wobbleAmp;

        // Coordinates
        const x = cx + Math.cos(headAngle - p.arcOffset) * currentR;
        const y = cy + Math.sin(headAngle - p.arcOffset) * currentR;

        // Alpha calculation
        const alpha = Math.min(1.0, Math.max(0.08, headFalloff * twinkle));
        const size = p.baseSize * (0.6 + 0.6 * headFalloff);

        // Render particle with glow
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);

        // For bright particles near head, apply subtle bloom glow
        if (headFalloff > 0.4 && p.baseSize > 1.8) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha * 0.8})`;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-label="Loading page content"
      onClick={dismiss}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070D18]/90 backdrop-blur-sm transition-opacity duration-350 select-none cursor-pointer ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      title="Click to dismiss loader"
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Canvas Particle Ring Loader - Responsive sizing */}
        <canvas
          ref={canvasRef}
          style={{ width: 'min(340px, 82vw)', height: 'min(340px, 82vw)' }}
          className="block max-w-full"
        />

        {/* Minimalist Medical Brand Metadata Below Ring */}
        <div className="mt-3 text-center space-y-1.5 z-10 px-4 max-w-xs sm:max-w-none">
          <span className="text-[11px] sm:text-xs md:text-[13px] font-mono font-bold tracking-[0.24em] sm:tracking-[0.28em] text-white uppercase block drop-shadow-sm">
            {label}
          </span>
          <div className="flex items-center justify-center space-x-2 text-[9.5px] sm:text-[10px] font-mono tracking-[0.2em] text-[#38BDF8] uppercase font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-ping" aria-hidden="true" />
            <span>{sublabel}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
