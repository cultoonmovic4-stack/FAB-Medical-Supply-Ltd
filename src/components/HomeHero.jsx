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

/**
 * Editorial Medical Equipment Showcase Products
 * Directly linked to client-supplied equipment inventory and verified photography.
 */
export const HERO_PRODUCTS = [
  {
    id: 'patient-monitor',
    index: '01',
    category: 'EMERGENCY & ICU',
    name: 'Multi-Parameter Patient Monitor',
    shortName: 'Patient Monitor',
    description:
      'Continuous vital signs monitoring for intensive care, surgical theatres, and emergency departments across Uganda.',
    specs: 'ECG • SpO2 • NIBP • Multi-Lead Telemetry',
    image: patientMonitorImg,
    alt: 'Multi-parameter clinical patient monitor with vital signs telemetry',
    scaleClass: 'max-h-[290px] sm:max-h-[340px] lg:max-h-[380px] xl:max-h-[420px]',
  },
  {
    id: 'anesthesia-machine',
    index: '02',
    category: 'THEATRE ROOM',
    name: 'Anesthesia Workstation System',
    shortName: 'Anesthesia Machine',
    description:
      'Advanced surgical anesthesia delivery workstation featuring integrated ventilator and precision gas delivery controls.',
    specs: 'Integrated Ventilator • Vaporizer Mounts • Oxygen Monitoring',
    image: anesthesiaMachineImg,
    alt: 'Surgical theatre anesthesia delivery workstation',
    scaleClass: 'max-h-[290px] sm:max-h-[340px] lg:max-h-[380px] xl:max-h-[420px]',
  },
  {
    id: 'microscope',
    index: '03',
    category: 'LABORATORY',
    name: 'Clinical Laboratory Microscope',
    shortName: 'Microscope',
    description:
      'Precision optical examination platform engineered for clinical pathology, hematology, and microbiological investigation.',
    specs: 'Binocular Optical System • Coaxial Focusing • High-Intensity LED',
    image: microscopeImg,
    alt: 'High-precision clinical laboratory binocular microscope',
    scaleClass: 'max-h-[280px] sm:max-h-[330px] lg:max-h-[370px] xl:max-h-[400px]',
  },
  {
    id: 'operating-table',
    index: '04',
    category: 'THEATRE ROOM',
    name: 'Multi-Position Operating Table',
    shortName: 'Operating Table',
    description:
      'Versatile surgical operating bed with multi-position articulation for general, orthopedic, and gynecological surgical procedures.',
    specs: 'Hydraulic Elevation • Trendelenburg Articulation • Robust Chassis',
    image: operatingTableImg,
    alt: 'Multi-position surgical operating table',
    scaleClass: 'max-h-[260px] sm:max-h-[310px] lg:max-h-[350px] xl:max-h-[380px]',
  },
  {
    id: 'electrosurgical-unit',
    index: '05',
    category: 'THEATRE ROOM',
    name: 'Electrosurgical Diathermy Unit',
    shortName: 'Electrosurgical Unit',
    description:
      'High-frequency surgical diathermy generator designed for precise tissue cutting and reliable hemostasis coagulation.',
    specs: 'Monopolar & Bipolar Modes • Pure & Blend Cut • Digital Control',
    image: electrosurgicalUnitImg,
    alt: 'Surgical electrosurgical diathermy generator unit',
    scaleClass: 'max-h-[260px] sm:max-h-[310px] lg:max-h-[350px] xl:max-h-[380px]',
  },
  {
    id: 'autoclave-sterilizer',
    index: '06',
    category: 'SUPPORTING & UTILITY',
    name: 'Autoclave Steam Sterilizer',
    shortName: 'Autoclave Sterilizer',
    description:
      'Clinical steam sterilizer engineered for reliable, high-temperature sterilization of surgical and laboratory instruments.',
    specs: 'High-Pressure Chamber • Automated Cycles • Safety Interlock',
    image: autoclaveImg,
    alt: 'Benchtop clinical autoclave steam sterilizer',
    scaleClass: 'max-h-[270px] sm:max-h-[320px] lg:max-h-[360px] xl:max-h-[390px]',
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
      handleNext();
    }, 6000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [activeIndex, isPaused]);

  const switchProduct = (newIndex) => {
    if (newIndex === activeIndex || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setIsTransitioning(false);
    }, 220);
  };

  const handleNext = () => {
    switchProduct((activeIndex + 1) % HERO_PRODUCTS.length);
  };

  const handlePrev = () => {
    switchProduct((activeIndex - 1 + HERO_PRODUCTS.length) % HERO_PRODUCTS.length);
  };

  return (
    <section
      className="relative bg-[#FAFCFF] border-b border-[#E2E8F0] overflow-hidden select-none py-8 sm:py-12 lg:py-16 xl:py-20"
      aria-label="Medical Equipment Showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. Subtle Clinical Technical Grid & Blueprint Watermark */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(33, 64, 154, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(33, 64, 154, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      {/* 2. Soft Ambient Radial Illumination behind Floating Products */}
      <div
        className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[700px] lg:w-[950px] h-[550px] pointer-events-none opacity-60 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(33, 64, 154, 0.08) 0%, rgba(241, 245, 249, 0.4) 45%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      {/* 3. Subtle Peripheral Organic Depth Accents (Inspired by reference styling) */}
      <div
        className="hidden xl:block absolute -left-12 bottom-12 pointer-events-none opacity-20 filter blur-[0.5px] transform -rotate-12 transition-transform duration-700"
        aria-hidden="true"
      >
        <img
          src={stethImg}
          alt=""
          className="w-36 h-36 object-contain"
        />
      </div>

      <Container className="relative z-10">
        {/* UPPER HERO GRID: Left Typography | Center Dominant Floating Product | Right Technical Label */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center min-h-[460px] lg:min-h-[500px]">
          
          {/* LEFT COLUMN: Editorial Typography & Call To Actions */}
          <div
            className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center space-y-5 sm:space-y-6 text-left"
            data-aos="fade-right"
            data-aos-duration="850"
          >
            {/* Small Editorial Eyebrow with Precision Red Accent */}
            <div className="flex items-center space-x-2.5">
              <span className="w-6 h-[2.5px] bg-[#ED1C24] rounded-full flex-shrink-0" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.22em] uppercase text-[#21409A]">
                MEDICAL EQUIPMENT • SUPPLIES • SUPPORT
              </span>
            </div>

            {/* Main Headline (Oversized, bold, deep navy with selective FAB blue accent) */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-black text-[#0F172A] tracking-tight leading-[1.06] uppercase"
            >
              EQUIPPING<br />
              HEALTHCARE.<br />
              SUPPORTING<br />
              <span className="text-[#21409A]">BETTER CARE.</span>
            </h1>

            {/* Supporting Copy (Restrained, factual, accurate to company profile) */}
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-md font-normal">
              FAB Medical Supplies Ltd. supplies medical equipment, diagnostic instruments and related products to healthcare providers across Uganda.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              {/* PRIMARY: Explore Equipment */}
              <Link
                to="/products"
                className="group inline-flex items-center justify-center space-x-2.5 bg-[#21409A] hover:bg-[#1A337A] text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-6 py-3.5 rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#21409A] focus:ring-offset-2 min-h-[46px]"
              >
                <span>EXPLORE EQUIPMENT</span>
                <span className="text-[#ED1C24] text-base font-bold transition-transform duration-150 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              {/* SECONDARY: Contact FAB (Restrained outlined action) */}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-[#F1F5F9] border border-[#CBD5E1] hover:border-[#21409A] text-[#0F172A] hover:text-[#21409A] font-bold text-xs sm:text-sm tracking-wider uppercase px-5 py-3.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#21409A] min-h-[46px]"
              >
                <span>CONTACT FAB →</span>
              </Link>
            </div>
          </div>

          {/* CENTER STAGE: Floating Dominant Product with Realistic Ambient Depth */}
          <div
            className="lg:col-span-4 xl:col-span-4 relative flex items-center justify-center py-4 lg:py-0"
            data-aos="zoom-in"
            data-aos-duration="900"
          >
            {/* Interactive Image Frame with Smooth Scale & Opacity Transition */}
            <div
              className={`relative z-10 flex items-center justify-center w-full transition-all duration-300 ease-out transform ${
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
                className={`w-auto object-contain transition-transform duration-700 hover:scale-105 ${activeProduct.scaleClass}`}
                style={{
                  filter: 'drop-shadow(0 24px 34px rgba(15, 23, 42, 0.14)) drop-shadow(0 8px 16px rgba(33, 64, 154, 0.08))',
                }}
                loading="eager"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Active Product Information Card (Editorial layout inspired by reference) */}
          <div
            className="lg:col-span-3 xl:col-span-3 flex flex-col justify-center text-left border-l-2 border-[#ED1C24] pl-4 sm:pl-5 py-2 my-auto"
            data-aos="fade-left"
            data-aos-duration="850"
          >
            <div
              className={`space-y-2.5 transition-all duration-300 ${
                isTransitioning ? 'opacity-0 -translate-x-2' : 'opacity-100 translate-x-0'
              }`}
            >
              {/* Category & Index Label */}
              <div className="flex items-center space-x-2">
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] text-[#ED1C24] uppercase">
                  {activeProduct.index} / {activeProduct.category}
                </span>
              </div>

              {/* Active Product Headline */}
              <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight leading-snug">
                {activeProduct.name}
              </h2>

              {/* Product Brief Description */}
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                {activeProduct.description}
              </p>

              {/* Technical Specifications Pill */}
              <div className="pt-1">
                <span className="inline-block text-[10.5px] font-mono text-[#21409A] font-semibold bg-[#EEF2F9] px-2.5 py-1 rounded border border-[#D7E2F2]">
                  {activeProduct.specs}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* LOWER SECTION: Interactive Horizontal Thumbnail Carousel & Controls */}
        <div
          className="mt-8 sm:mt-12 pt-6 border-t border-[#E2E8F0]/80 flex flex-col md:flex-row items-center justify-between gap-6"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Thumbnails Row: Direct clickable selection */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 overflow-x-auto pb-2 w-full md:w-auto scrollbar-none justify-start md:justify-center">
            {HERO_PRODUCTS.map((prod, idx) => {
              const isActive = idx === activeIndex;

              return (
                <button
                  key={prod.id}
                  type="button"
                  onClick={() => switchProduct(idx)}
                  className={`group relative flex flex-col items-center p-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#21409A] flex-shrink-0 min-w-[76px] sm:min-w-[88px] ${
                    isActive
                      ? 'bg-white shadow-md border border-[#21409A]/40 -translate-y-1'
                      : 'bg-white/60 hover:bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] opacity-75 hover:opacity-100'
                  }`}
                  aria-label={`Select ${prod.name}`}
                  aria-pressed={isActive}
                >
                  {/* Subtle active glow behind thumbnail */}
                  {isActive && (
                    <span
                      className="absolute inset-0 rounded-xl bg-[#21409A]/5 pointer-events-none"
                      aria-hidden="true"
                    />
                  )}

                  {/* Thumbnail Image */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-1.5">
                    <img
                      src={prod.image}
                      alt=""
                      width="56"
                      height="56"
                      decoding="async"
                      className={`max-w-full max-h-full object-contain transition-transform duration-200 ${
                        isActive ? 'scale-110 drop-shadow-sm' : 'group-hover:scale-105'
                      }`}
                      loading="lazy"
                    />
                  </div>

                  {/* Short Name Label */}
                  <span
                    className={`text-[10px] sm:text-[11px] font-semibold tracking-tight text-center truncate max-w-[84px] leading-tight ${
                      isActive ? 'text-[#21409A] font-bold' : 'text-[#64748B] group-hover:text-[#0F172A]'
                    }`}
                  >
                    {prod.shortName}
                  </span>

                  {/* Red Active Indicator Line */}
                  {isActive && (
                    <span
                      className="w-5 h-[2px] bg-[#ED1C24] rounded-full mt-1"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Carousel Progress & Navigation Controls */}
          <div className="flex items-center space-x-4 flex-shrink-0 self-center md:self-auto">
            {/* Step Counter Indicator (e.g. 01 / 06) */}
            <div className="text-xs font-mono font-bold text-[#475569] tracking-wider">
              <span className="text-[#21409A]">{activeProduct.index}</span>
              <span className="mx-1 text-[#CBD5E1]">/</span>
              <span>06</span>
            </div>

            {/* Previous / Next Tactical Arrows */}
            <div className="flex items-center space-x-1.5">
              <button
                type="button"
                onClick={handlePrev}
                className="w-8 h-8 rounded-full bg-white hover:bg-[#F1F5F9] border border-[#CBD5E1] text-[#0F172A] hover:text-[#21409A] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#21409A]"
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
                className="w-8 h-8 rounded-full bg-white hover:bg-[#F1F5F9] border border-[#CBD5E1] text-[#0F172A] hover:text-[#21409A] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#21409A]"
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
