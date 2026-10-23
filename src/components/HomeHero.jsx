import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

// Verified client medical equipment photography assets (optimized WebP)
import patientMonitorImg from '../assets/products/patient_monitor_icu_ge.webp';
import anesthesiaMachineImg from '../assets/products/anesthesia_machine.webp';
import microscopeImg from '../assets/products/microscope_optical.webp';
import operatingTableImg from '../assets/products/operating_table.webp';
import electrosurgicalUnitImg from '../assets/products/electrosurgical_unit.webp';
import autoclaveImg from '../assets/products/autoclave_benchtop.webp';
import stethImg from '../assets/contact_steth_circle.webp';

const AUTOPLAY_MS = 6000;

/**
 * Editorial Medical Equipment Showcase Products
 * Directly linked to client-supplied equipment inventory, verified photography, and catalogue routes.
 */
export const HERO_PRODUCTS = [
  {
    id: 'patient-monitor',
    productId: 'patient-monitor-icu',
    categoryId: 'emergency-icu',
    refCode: 'FAB-ICU-01',
    index: '01',
    category: 'EMERGENCY & ICU',
    name: 'Multi-Parameter Patient Monitor',
    shortName: 'Patient Monitor',
    description:
      'Continuous vital signs monitoring for intensive care, surgical theatres, and emergency departments across Uganda.',
    specs: 'ECG • SpO2 • NIBP • Multi-Lead Telemetry',
    specList: ['ECG', 'SpO2', 'NIBP', 'Multi-Lead Telemetry'],
    image: patientMonitorImg,
    alt: 'Multi-parameter clinical patient monitor with vital signs telemetry',
    scaleClass: 'max-h-[260px] sm:max-h-[310px] lg:max-h-[350px] xl:max-h-[380px]',
  },
  {
    id: 'anesthesia-machine',
    productId: 'anesthesia-machine',
    categoryId: 'theatre-room',
    refCode: 'FAB-THR-02',
    index: '02',
    category: 'THEATRE ROOM',
    name: 'Anesthesia Workstation System',
    shortName: 'Anesthesia Machine',
    description:
      'Advanced surgical anesthesia delivery workstation featuring integrated ventilator and precision gas delivery controls.',
    specs: 'Integrated Ventilator • Vaporizer Mounts • O2 Monitoring',
    specList: ['Integrated Ventilator', 'Vaporizer Mounts', 'O2 Monitoring'],
    image: anesthesiaMachineImg,
    alt: 'Surgical theatre anesthesia delivery workstation',
    scaleClass: 'max-h-[265px] sm:max-h-[315px] lg:max-h-[360px] xl:max-h-[390px]',
  },
  {
    id: 'microscope',
    productId: 'microscopes',
    categoryId: 'laboratory',
    refCode: 'FAB-LAB-03',
    index: '03',
    category: 'LABORATORY',
    name: 'Clinical Laboratory Microscope',
    shortName: 'Microscope',
    description:
      'Precision optical examination platform engineered for clinical pathology, hematology, and microbiological investigation.',
    specs: 'Binocular Optics • Coaxial Focus • High-Intensity LED',
    specList: ['Binocular Optics', 'Coaxial Focus', 'High-Intensity LED'],
    image: microscopeImg,
    alt: 'High-precision clinical laboratory binocular microscope',
    scaleClass: 'max-h-[255px] sm:max-h-[305px] lg:max-h-[345px] xl:max-h-[375px]',
  },
  {
    id: 'operating-table',
    productId: 'operating-table',
    categoryId: 'theatre-room',
    refCode: 'FAB-THR-04',
    index: '04',
    category: 'THEATRE ROOM',
    name: 'Multi-Position Operating Table',
    shortName: 'Operating Table',
    description:
      'Versatile surgical operating bed with multi-position articulation for general, orthopedic, and gynecological surgical procedures.',
    specs: 'Hydraulic Elevation • Trendelenburg • Stainless Chassis',
    specList: ['Hydraulic Elevation', 'Trendelenburg', 'Stainless Chassis'],
    image: operatingTableImg,
    alt: 'Multi-position surgical operating table',
    scaleClass: 'max-h-[245px] sm:max-h-[290px] lg:max-h-[330px] xl:max-h-[360px]',
  },
  {
    id: 'electrosurgical-unit',
    productId: 'electrosurgical-units',
    categoryId: 'theatre-room',
    refCode: 'FAB-THR-05',
    index: '05',
    category: 'THEATRE ROOM',
    name: 'Electrosurgical Diathermy Unit',
    shortName: 'Electrosurgical Unit',
    description:
      'High-frequency surgical diathermy generator designed for precise tissue cutting and reliable hemostasis coagulation.',
    specs: 'Monopolar & Bipolar • Pure & Blend Cut • Digital Control',
    specList: ['Monopolar & Bipolar', 'Pure & Blend Cut', 'Digital Control'],
    image: electrosurgicalUnitImg,
    alt: 'Surgical electrosurgical diathermy generator unit',
    scaleClass: 'max-h-[245px] sm:max-h-[290px] lg:max-h-[330px] xl:max-h-[360px]',
  },
  {
    id: 'autoclave-sterilizer',
    productId: 'autoclave-sterilizer',
    categoryId: 'utility-services',
    refCode: 'FAB-UTL-06',
    index: '06',
    category: 'SUPPORTING & UTILITY',
    name: 'Autoclave Steam Sterilizer',
    shortName: 'Autoclave Sterilizer',
    description:
      'Clinical steam sterilizer engineered for reliable, high-temperature sterilization of surgical and laboratory instruments.',
    specs: 'High-Pressure Chamber • Automated Cycles • Safety Interlock',
    specList: ['High-Pressure Chamber', 'Automated Cycles', 'Safety Interlock'],
    image: autoclaveImg,
    alt: 'Benchtop clinical autoclave steam sterilizer',
    scaleClass: 'max-h-[250px] sm:max-h-[300px] lg:max-h-[340px] xl:max-h-[370px]',
  },
];

export default function HomeHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const activeProduct = HERO_PRODUCTS[activeIndex];
  const autoPlayRef = useRef(null);

  // Smooth automatic carousel rotation (every 6 seconds unless hovered or paused)
  useEffect(() => {
    if (isPaused) return;

    autoPlayRef.current = setInterval(() => {
      switchProduct((activeIndex + 1) % HERO_PRODUCTS.length);
    }, AUTOPLAY_MS);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [activeIndex, isPaused, isTransitioning]);

  const switchProduct = (newIndex) => {
    if (newIndex === activeIndex || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setIsTransitioning(false);
    }, 200);
  };

  const handleNext = () => {
    switchProduct((activeIndex + 1) % HERO_PRODUCTS.length);
  };

  const handlePrev = () => {
    switchProduct((activeIndex - 1 + HERO_PRODUCTS.length) % HERO_PRODUCTS.length);
  };

  const productSheetUrl = `/products/${activeProduct.categoryId}?product=${activeProduct.productId}`;
  const categoryUrl = `/products/${activeProduct.categoryId}`;

  return (
    <section
      className="relative bg-[#FAFCFF] border-b border-[#E2E8F0] overflow-hidden select-none py-8 sm:py-12 lg:py-14 xl:py-18"
      aria-label="Medical Equipment Showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Inline keyframe for smooth carousel progress indicator */}
      <style>{`
        @keyframes fabHeroProgress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>

      {/* 1. Subtle Clinical Technical Grid & Blueprint Watermark */}
      <div
        className="absolute inset-0 pointer-events-none opacity-45"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(33, 64, 154, 0.038) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(33, 64, 154, 0.038) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      {/* 2. Soft Ambient Radial Illumination behind Floating Products */}
      <div
        className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[680px] lg:w-[920px] h-[520px] pointer-events-none opacity-70 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(33, 64, 154, 0.09) 0%, rgba(241, 245, 249, 0.45) 46%, transparent 74%)',
        }}
        aria-hidden="true"
      />

      {/* 3. Subtle Peripheral Organic Depth Accent */}
      <div
        className="hidden xl:block absolute -left-12 bottom-10 pointer-events-none opacity-15 filter blur-[0.5px] transform -rotate-12 transition-transform duration-700"
        aria-hidden="true"
      >
        <img src={stethImg} alt="" className="w-36 h-36 object-contain" />
      </div>

      <Container className="relative z-10">
        {/* UPPER HERO GRID: Left Typography | Center Calibrated Product Stage | Right Specification Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">
          
          {/* LEFT COLUMN (Col 1-5): Editorial Typography & Call To Actions */}
          <div
            className="lg:col-span-5 flex flex-col justify-center items-center text-center lg:items-start lg:text-left space-y-5 sm:space-y-6"
            data-aos="fade-right"
            data-aos-duration="850"
          >
            {/* Small Editorial Eyebrow with Precision Red Accent */}
            <div className="flex items-center justify-center lg:justify-start space-x-2.5">
              <span className="w-6 h-[2.5px] bg-[#ED1C24] rounded-full flex-shrink-0" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#21409A]">
                MEDICAL EQUIPMENT • SUPPLIES • SUPPORT
              </span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-[3.15rem] xl:text-[3.65rem] font-black text-[#0F172A] tracking-tight leading-[1.04] uppercase text-center lg:text-left"
            >
              EQUIPPING<br />
              HEALTHCARE.<br />
              SUPPORTING<br />
              <span className="text-[#21409A]">BETTER CARE.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-md mx-auto lg:mx-0 font-normal text-center lg:text-left">
              FAB Medical Supplies Ltd. supplies medical equipment, diagnostic instruments and related products to healthcare providers across Uganda.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-3.5 w-full sm:w-auto">
              {/* PRIMARY: Explore Equipment */}
              <Link
                to="/products"
                className="group inline-flex items-center justify-center space-x-2.5 bg-[#21409A] hover:bg-[#1A337A] text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-6 py-3.5 rounded-lg shadow-sm hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#21409A] focus:ring-offset-2 min-h-[46px] w-full sm:w-auto text-center"
              >
                <span>EXPLORE EQUIPMENT</span>
                <span className="text-[#ED1C24] text-base font-bold transition-transform duration-150 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              {/* SECONDARY: Contact FAB */}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-white/80 hover:bg-white border border-[#CBD5E1] hover:border-[#21409A] text-[#0F172A] hover:text-[#21409A] font-bold text-xs sm:text-sm tracking-wider uppercase px-5 py-3.5 rounded-lg transition-all shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#21409A] min-h-[46px] w-full sm:w-auto text-center"
              >
                <span>CONTACT FAB →</span>
              </Link>
            </div>

            {/* Subtle Trust / Operational Metadata Strip */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-1.5 text-[11px] font-mono text-[#64748B]">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#21409A]" aria-hidden="true" />
                <span>9 CLINICAL DEPARTMENTS</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" aria-hidden="true" />
                <span>SUPPLY &amp; TECHNICAL SERVICE</span>
              </span>
            </div>
          </div>

          {/* CENTER STAGE (Col 6-9): Fixed-Height Calibrated Reticle & Floating Equipment */}
          <div
            className="lg:col-span-4 relative flex items-center justify-center h-[310px] sm:h-[360px] lg:h-[420px]"
            data-aos="zoom-in"
            data-aos-duration="900"
          >
            {/* Technical Calibration Reticle SVG Backdrop (Anchors floating products in space) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
              viewBox="0 0 400 400"
              fill="none"
              aria-hidden="true"
            >
              {/* Outer dashed technical ring */}
              <circle
                cx="200"
                cy="195"
                r="155"
                stroke="#CBD5E1"
                strokeWidth="1"
                strokeDasharray="4 4"
                opacity="0.7"
              />
              {/* Inner subtle solid calibration ring */}
              <circle
                cx="200"
                cy="195"
                r="118"
                stroke="#E2E8F0"
                strokeWidth="1"
                opacity="0.85"
              />
              {/* Subtle horizontal & vertical axis hairlines */}
              <line x1="25" y1="195" x2="65" y2="195" stroke="#CBD5E1" strokeWidth="1" />
              <line x1="335" y1="195" x2="375" y2="195" stroke="#CBD5E1" strokeWidth="1" />
              <line x1="200" y1="20" x2="200" y2="55" stroke="#CBD5E1" strokeWidth="1" />

              {/* Top-left & Bottom-right corner registration ticks */}
              <g stroke="#94A3B8" strokeWidth="1.2" opacity="0.6">
                <path d="M 48 62 L 48 48 L 62 48" />
                <path d="M 352 328 L 352 342 L 338 342" />
              </g>
            </svg>

            {/* Studio Ground Pedestal Shadow beneath the floating equipment */}
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 w-56 sm:w-64 h-7 rounded-full pointer-events-none transition-all duration-300"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(15, 23, 42, 0.16) 0%, rgba(33, 64, 154, 0.05) 55%, transparent 80%)',
                transform: isTransitioning
                  ? 'translateX(-50%) scale(0.88)'
                  : 'translateX(-50%) scale(1)',
              }}
              aria-hidden="true"
            />

            {/* Clickable Floating Product Image */}
            <Link
              to={productSheetUrl}
              aria-label={`View technical specifications for ${activeProduct.name}`}
              className={`group/img relative z-10 flex items-center justify-center w-full h-full transition-all duration-300 ease-out transform focus:outline-none ${
                isTransitioning ? 'opacity-0 scale-95 translate-y-2' : 'opacity-100 scale-100 translate-y-0'
              }`}
            >
              <img
                src={activeProduct.image}
                alt={activeProduct.alt}
                width="420"
                height="420"
                fetchPriority="high"
                decoding="async"
                className={`w-auto object-contain transition-transform duration-500 ease-out group-hover/img:scale-[1.04] ${activeProduct.scaleClass}`}
                style={{
                  filter:
                    'drop-shadow(0 22px 30px rgba(15, 23, 42, 0.14)) drop-shadow(0 6px 14px rgba(33, 64, 154, 0.08))',
                }}
                loading="eager"
              />
            </Link>
          </div>

          {/* RIGHT COLUMN (Col 10-12): Structured Editorial Specification Panel */}
          <div
            className="lg:col-span-3 flex flex-col justify-center"
            data-aos="fade-left"
            data-aos-duration="850"
          >
            <div
              className={`bg-white/90 backdrop-blur-xs border border-[#E2E8F0] border-l-[3px] border-l-[#ED1C24] rounded-r-xl p-5 sm:p-6 shadow-[0_8px_28px_rgba(15,23,42,0.04)] min-h-[265px] flex flex-col justify-between transition-all duration-200 ${
                isTransitioning ? 'opacity-0 translate-x-2' : 'opacity-100 translate-x-0'
              }`}
            >
              {/* Top Meta Header: Index + Department Link + Ref Code */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                  <Link
                    to={categoryUrl}
                    className="inline-flex items-center space-x-1.5 text-[10.5px] sm:text-[11px] font-mono font-bold tracking-[0.16em] text-[#ED1C24] hover:text-[#21409A] uppercase transition-colors"
                  >
                    <span>{activeProduct.index}</span>
                    <span className="text-slate-300">/</span>
                    <span className="underline decoration-transparent hover:decoration-[#21409A] underline-offset-4">
                      {activeProduct.category}
                    </span>
                  </Link>

                  <span className="text-[10px] font-mono font-semibold text-slate-400 tracking-wider">
                    {activeProduct.refCode}
                  </span>
                </div>

                {/* Clickable Product Headline */}
                <Link to={productSheetUrl} className="block group/title">
                  <h2 className="text-lg sm:text-xl font-black text-[#0F172A] group-hover/title:text-[#21409A] tracking-tight leading-snug transition-colors">
                    {activeProduct.name}
                  </h2>
                </Link>

                {/* Product Brief Description */}
                <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed font-normal">
                  {activeProduct.description}
                </p>
              </div>

              {/* Bottom Spec Chips & Direct Technical Sheet Link */}
              <div className="pt-4 mt-4 border-t border-slate-100 space-y-3.5">
                {/* Individual Technical Specification Chips */}
                <div className="flex flex-wrap gap-1.5" aria-label="Key specifications">
                  {activeProduct.specList.map((specItem) => (
                    <span
                      key={specItem}
                      className="inline-block text-[10px] font-mono text-[#21409A] font-semibold bg-[#F0F5FC] px-2 py-0.5 rounded border border-[#D7E2F2]"
                    >
                      {specItem}
                    </span>
                  ))}
                </div>

                {/* Direct Link to Product Technical Sheet */}
                <div className="flex items-center justify-between pt-0.5">
                  <Link
                    to={productSheetUrl}
                    className="group/spec inline-flex items-center space-x-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-[#21409A] hover:text-[#0F172A] transition-colors"
                  >
                    <span>VIEW TECHNICAL SHEET</span>
                    <span
                      className="text-[#ED1C24] text-xs font-bold transition-transform duration-150 group-hover/spec:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* LOWER SECTION: Interactive Horizontal Thumbnail Carousel & Live Progress Controls */}
        <div
          className="mt-8 sm:mt-10 pt-5 border-t border-[#E2E8F0]/90 flex flex-col md:flex-row items-center justify-between gap-5"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Thumbnails Row: Direct clickable selection with 01-06 index badges */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 w-full md:w-auto md:flex-1 max-w-3xl">
            {HERO_PRODUCTS.map((prod, idx) => {
              const isActive = idx === activeIndex;

              return (
                <button
                  key={prod.id}
                  type="button"
                  onClick={() => switchProduct(idx)}
                  className={`group relative flex flex-col items-center p-2 sm:p-2.5 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#21409A] overflow-hidden cursor-pointer ${
                    isActive
                      ? 'bg-white shadow-md border border-[#21409A]/50 -translate-y-0.5'
                      : 'bg-white/65 hover:bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] opacity-80 hover:opacity-100'
                  }`}
                  aria-label={`Select ${prod.name}`}
                  aria-pressed={isActive}
                >
                  {/* Top-left numeric index marker */}
                  <span
                    className={`self-start text-[9px] font-mono font-bold tracking-wider leading-none mb-0.5 ${
                      isActive ? 'text-[#ED1C24]' : 'text-slate-400 group-hover:text-slate-600'
                    }`}
                  >
                    {prod.index}
                  </span>

                  {/* Thumbnail Image */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center mb-1.5">
                    <img
                      src={prod.image}
                      alt=""
                      width="48"
                      height="48"
                      decoding="async"
                      className={`max-w-full max-h-full object-contain transition-transform duration-200 ${
                        isActive ? 'scale-110 drop-shadow-xs' : 'group-hover:scale-105'
                      }`}
                      loading="lazy"
                    />
                  </div>

                  {/* Short Name Label */}
                  <span
                    className={`text-[10px] sm:text-[11px] font-semibold tracking-tight text-center truncate w-full leading-tight ${
                      isActive ? 'text-[#21409A] font-bold' : 'text-[#64748B] group-hover:text-[#0F172A]'
                    }`}
                  >
                    {prod.shortName}
                  </span>

                  {/* Bottom Animated Progress Bar on Active Thumbnail */}
                  <div className="w-full h-[2.5px] bg-slate-100 rounded-full mt-1.5 overflow-hidden">
                    {isActive && (
                      <div
                        key={`${activeIndex}-${isPaused ? 'paused' : 'playing'}`}
                        className="h-full w-full bg-[#ED1C24] origin-left rounded-full"
                        style={{
                          animation: isPaused
                            ? 'none'
                            : `fabHeroProgress ${AUTOPLAY_MS}ms linear forwards`,
                        }}
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Carousel Progress & Navigation Controls */}
          <div className="flex items-center space-x-3.5 flex-shrink-0 self-center">
            {/* Pause / Play Status + Step Counter Indicator */}
            <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#475569] tracking-wider">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isPaused ? 'bg-amber-500' : 'bg-emerald-500 animate-pulse'
                }`}
                title={isPaused ? 'Carousel paused' : 'Auto-rotating'}
                aria-hidden="true"
              />
              <span className="text-[#21409A]">{activeProduct.index}</span>
              <span className="text-[#CBD5E1]">/</span>
              <span>06</span>
            </div>

            {/* Previous / Next Tactical Arrows */}
            <div className="flex items-center space-x-1.5">
              <button
                type="button"
                onClick={handlePrev}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white hover:bg-[#21409A] border border-[#CBD5E1] hover:border-[#21409A] text-[#0F172A] hover:text-white flex items-center justify-center transition-colors shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#21409A] cursor-pointer"
                aria-label="Previous equipment product"
                title="Previous equipment"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white hover:bg-[#21409A] border border-[#CBD5E1] hover:border-[#21409A] text-[#0F172A] hover:text-white flex items-center justify-center transition-colors shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#21409A] cursor-pointer"
                aria-label="Next equipment product"
                title="Next equipment"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

