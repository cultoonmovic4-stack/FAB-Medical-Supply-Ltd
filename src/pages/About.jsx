import React from 'react';
import { Container } from '../components';
import { companyInfo } from '../data/company';
import fabLogoImg from '../assets/fab-logo.png';
import aboutHeroEquipImg from '../assets/about-hero-equipment-clean.png';
import aboutCompanyEquipImg from '../assets/about-company-equipment.jpg';
import aboutMicroscopeImg from '../assets/about-microscope-clean.png';
import categoryLabImg from '../assets/category-laboratory.jpg';
import categoryTheatreImg from '../assets/category-theatre-room.jpg';
import categoryCriticalImg from '../assets/category-critical-care.jpg';
import categoryOpdImg from '../assets/category-opd-consultation.jpg';
import envWardImg from '../assets/env_ward_clean.png';
import envLabImg from '../assets/env_lab_clean.png';
import envTheatreImg from '../assets/env_theatre_clean.png';
import servicesCCompImg from '../assets/services_c_composition.png';
import contactStethImg from '../assets/contact_steth_circle.png';

export default function About({ onNavigate }) {
  return (
    <div>
      {/* About Page Hero Section - Approved Editorial Asymmetry */}
      <section
        className="bg-[#F2F6FA] border-b border-border relative overflow-hidden"
        aria-labelledby="about-hero-heading"
      >
        {/* Desktop Photographic Object & Slanted Geometry (Touches top/right/bottom edges) */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[48%] xl:w-[50%] h-full pointer-events-none select-none z-0">
          <img
            src={aboutHeroEquipImg}
            alt="Clinical operating theatre equipped with patient vital signs monitor and medical instruments"
            className="w-full h-full object-cover object-left block"
            loading="eager"
          />
        </div>

        <Container className="relative z-10 py-14 sm:py-18 lg:py-22 xl:py-26">
          <div className="max-w-2xl xl:max-w-[620px]">
            {/* Eyebrow with Blue Rule */}
            <div className="flex items-center space-x-3 mb-5 sm:mb-7">
              <span className="w-8 h-[2.5px] bg-[#21409A] rounded-full flex-shrink-0" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#21409A]">
                ABOUT FAB MEDICAL SUPPLIES LTD.
              </span>
            </div>

            {/* Dominant Headline (One H1 Only) */}
            <h1
              id="about-hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[60px] font-black uppercase tracking-tight text-[#0F172A] leading-[1.02]"
            >
              PROCUREMENT,<br />
              SUPPLY &amp; SERVICE<br />
              FOR HEALTHCARE
            </h1>

            {/* Supporting Paragraph */}
            <p className="mt-6 sm:mt-7 mb-7 sm:mb-9 lg:mb-11 text-sm sm:text-base xl:text-[17px] text-slate-600 leading-relaxed font-normal max-w-xl">
              FAB Medical Supplies Ltd. supplies medical equipment, instruments and reagents, with services that include delivery, servicing and repair of equipment supplied.
            </p>

            {/* Mobile / Tablet Photographic Object (<lg) */}
            <div className="block lg:hidden my-7 sm:my-9 relative rounded-xl overflow-hidden shadow-sm border border-slate-200">
              <img
                src={aboutHeroEquipImg}
                alt="Clinical operating theatre equipped with patient vital signs monitor and medical instruments"
                className="w-full h-64 sm:h-80 object-cover object-center block"
                loading="eager"
              />
            </div>

            {/* Bottom-Left Identity & Metadata Cluster */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 pt-1">
              {/* Authentic FAB Logo Wordmark */}
              <div className="flex-shrink-0">
                <img
                  src={fabLogoImg}
                  alt="FAB Medical Supplies Ltd."
                  className="h-10 sm:h-12 w-auto object-contain block"
                />
              </div>

              {/* Thin Vertical Divider (Desktop/Tablet) */}
              <div className="hidden sm:block h-10 w-[1px] bg-slate-300 flex-shrink-0" aria-hidden="true" />

              {/* Metadata Details */}
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold tracking-wider text-[#21409A] uppercase">
                  <svg className="w-4 h-4 text-[#21409A] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  <span>KAMPALA, UGANDA</span>
                </div>
                <div className="text-[11px] sm:text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  MEDICAL EQUIPMENT • INSTRUMENTS • REAGENTS
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 2: THE COMPANY - Calm Editorial Asymmetry */}
      <section
        className="bg-white border-b border-border py-16 sm:py-20 lg:py-28 xl:py-32 relative overflow-hidden"
        aria-labelledby="the-company-heading"
      >
        <Container>
          {/* Section Label: THE COMPANY */}
          <div className="flex items-center space-x-3 mb-10 sm:mb-14 lg:mb-16">
            <span className="w-8 h-[2px] bg-[#21409A] rounded-full flex-shrink-0" aria-hidden="true" />
            <h2
              id="the-company-heading"
              className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#21409A]"
            >
              THE COMPANY
            </h2>
          </div>

          {/* Asymmetric Composition Field */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
            {/* Main Company Statement - Dominant Editorial Typography (Left / Middle) */}
            <div className="lg:col-span-8 xl:col-span-8 lg:pl-4 xl:pl-8">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[44px] font-bold text-[#0F172A] leading-[1.3] sm:leading-[1.25] lg:leading-[1.22] tracking-tight">
                FAB Medical Supplies Ltd. provides medical equipment, instruments and reagents through procurement, supply, delivery, marketing, sales, servicing and repair.
              </p>
            </div>

            {/* Existing Medical Equipment Photograph - Detached Lower-Right Visual Object */}
            <div className="lg:col-span-4 xl:col-span-4 flex justify-end lg:pt-16 xl:pt-20">
              <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none ml-auto">
                <img
                  src={aboutCompanyEquipImg}
                  alt="Clinical patient vital signs monitor and medical equipment supplied by FAB Medical Supplies Ltd."
                  className="w-full h-auto object-cover shadow-[0_12px_36px_rgba(15,23,42,0.07)] border border-slate-200/90"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 3: What FAB Does - Approved Design 2 Editorial Operating-System Composition */}
      <section
        className="bg-white border-b border-border py-16 sm:py-20 lg:py-24 xl:py-28 relative overflow-hidden"
        aria-labelledby="what-fab-does-heading"
      >
        {/* Subtle Geometric Background Corner Accents */}
        <div
          className="absolute left-0 bottom-0 w-44 sm:w-60 h-44 sm:h-60 bg-[#F0F6FB] -z-10 pointer-events-none select-none"
          style={{ clipPath: 'polygon(0 40%, 100% 100%, 0 100%)' }}
          aria-hidden="true"
        />
        <div
          className="absolute right-0 bottom-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#F0F6FB] -z-10 pointer-events-none select-none"
          style={{ clipPath: 'polygon(100% 30%, 100% 100%, 0 100%)' }}
          aria-hidden="true"
        />

        <Container className="relative">
          {/* DESKTOP ASYMMETRIC OPERATING-SYSTEM FIELD (lg+) */}
          <div className="hidden lg:block relative min-h-[640px] xl:min-h-[680px]">
            {/* 1. Top-Left Eyebrow, Dominant Headline & Supporting Statement */}
            <div className="absolute left-0 top-0 max-w-[340px] xl:max-w-[380px] z-10">
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#21409A] block mb-1.5">
                  WHAT FAB DOES
                </span>
                <span className="w-8 h-[2px] bg-[#21409A] block" aria-hidden="true" />
              </div>

              <h2
                id="what-fab-does-heading"
                className="text-4xl xl:text-[52px] font-black tracking-tight leading-[1.05] text-[#0F172A] mb-5"
              >
                Four services.<br />One mission.
              </h2>

              <p className="text-xs xl:text-sm text-slate-600 leading-relaxed font-normal">
                From procurement and supply to delivery, servicing and repair, FAB supports the medical equipment needs of healthcare providers and related organizations.
              </p>
            </div>

            {/* 2. Top-Right FAB Brand Anchor */}
            <div className="absolute right-0 top-0 z-10">
              <img
                src={fabLogoImg}
                alt="FAB Medical Supplies Ltd."
                className="h-10 xl:h-11 w-auto object-contain block"
              />
            </div>

            {/* 3. Center Laboratory Microscope Photographic Anchor (V-Point Cut) */}
            <div className="absolute left-[36%] xl:left-[35%] -top-6 xl:-top-8 w-[380px] xl:w-[420px] z-10 pointer-events-none select-none">
              <img
                src={aboutMicroscopeImg}
                alt="High-precision laboratory research microscope optics supplied by FAB Medical Supplies Ltd."
                className="w-full h-auto object-contain block filter drop-shadow-[0_8px_24px_rgba(33,64,154,0.06)]"
                loading="lazy"
              />
            </div>

            {/* 4. Function 01: PROCUREMENT & SUPPLY (Upper-Right below logo) */}
            <div className="absolute right-0 top-[150px] xl:top-[165px] max-w-[240px] xl:max-w-[260px] z-10">
              <div className="flex items-center space-x-2.5 mb-2">
                <span className="text-sm xl:text-base font-bold text-[#21409A]">01</span>
                <span className="w-10 h-[1.5px] bg-[#93C5FD]" aria-hidden="true" />
              </div>
              <h3 className="text-xs xl:text-sm font-bold uppercase tracking-wider text-[#0F172A] mb-1">
                PROCUREMENT &amp; SUPPLY
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Medical equipment, instruments and reagents.
              </p>
              {/* Technical square accent tab */}
              <div className="absolute -right-4 top-8 w-4 h-4 bg-[#21409A] pointer-events-none" aria-hidden="true" />
            </div>

            {/* 5. Function 02: MARKETING & SALES (Mid-Left below headline) */}
            <div className="absolute left-[16%] xl:left-[17%] top-[370px] xl:top-[390px] max-w-[240px] xl:max-w-[260px] z-10">
              <div className="flex items-center space-x-2.5 mb-2">
                <span className="text-sm xl:text-base font-bold text-[#21409A]">02</span>
                <span className="w-10 h-[1.5px] bg-[#93C5FD]" aria-hidden="true" />
              </div>
              <h3 className="text-xs xl:text-sm font-bold uppercase tracking-wider text-[#0F172A] mb-1">
                MARKETING &amp; SALES
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Supporting the marketing and sales of medical products and equipment.
              </p>
            </div>

            {/* 6. Function 03: DELIVERY (Center-Bottom under microscope V-point) */}
            <div className="absolute left-[44%] xl:left-[43%] top-[450px] xl:top-[475px] max-w-[220px] xl:max-w-[240px] z-10">
              <div className="flex items-center space-x-2.5 mb-2">
                <span className="text-sm xl:text-base font-bold text-[#21409A]">03</span>
                <span className="w-10 h-[1.5px] bg-[#93C5FD]" aria-hidden="true" />
              </div>
              <h3 className="text-xs xl:text-sm font-bold uppercase tracking-wider text-[#0F172A] mb-1">
                DELIVERY
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Delivery of medical supplies and equipment.
              </p>
            </div>

            {/* 7. Function 04: SERVICE & REPAIR (Lower-Right) */}
            <div className="absolute right-[4%] xl:right-[6%] top-[450px] xl:top-[475px] max-w-[230px] xl:max-w-[250px] z-10">
              <div className="flex items-center space-x-2.5 mb-2">
                <span className="text-sm xl:text-base font-bold text-[#21409A]">04</span>
                <span className="w-10 h-[1.5px] bg-[#93C5FD]" aria-hidden="true" />
              </div>
              <h3 className="text-xs xl:text-sm font-bold uppercase tracking-wider text-[#0F172A] mb-1">
                SERVICE &amp; REPAIR
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Servicing and repair of the equipment that FAB supplies.
              </p>
            </div>

            {/* 8. Bottom-Left Technical Metadata */}
            <div className="absolute left-0 bottom-2 z-10">
              <div className="flex items-center space-x-2.5">
                <span className="w-6 h-[1.5px] bg-[#21409A]" aria-hidden="true" />
                <div className="space-y-0.5">
                  <span className="block font-bold tracking-wider text-[#21409A] uppercase text-[10.5px]">
                    KAMPALA, UGANDA
                  </span>
                  <span className="block font-semibold tracking-wider text-slate-400 uppercase text-[9.5px]">
                    MEDICAL EQUIPMENT • INSTRUMENTS • REAGENTS
                  </span>
                </div>
              </div>
            </div>

            {/* 9. Technical Connector Lines (SVG Flow Overlay) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 1000 680"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {/* Connector from Function 02 towards microscope left edge */}
              <line x1="380" y1="330" x2="465" y2="245" stroke="#93C5FD" strokeWidth="1.2" />
              <circle cx="380" cy="330" r="2.5" fill="#21409A" />

              {/* Connector from bottom V-point towards Function 04 */}
              <line x1="605" y1="520" x2="720" y2="420" stroke="#93C5FD" strokeWidth="1.2" />
              <circle cx="605" cy="520" r="2.5" fill="#21409A" />
              <circle cx="720" cy="420" r="2.5" fill="#21409A" />
            </svg>
          </div>

          {/* MOBILE & TABLET EDITORIAL SEQUENCE (<lg) */}
          <div className="block lg:hidden space-y-10">
            {/* Header: Eyebrow + Logo */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#21409A] block mb-1">
                  WHAT FAB DOES
                </span>
                <span className="w-8 h-[2px] bg-[#21409A] block" aria-hidden="true" />
              </div>
              <img
                src={fabLogoImg}
                alt="FAB Medical Supplies Ltd."
                className="h-8 sm:h-9 w-auto object-contain block"
              />
            </div>

            {/* Dominant Headline & Intro */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-[1.08] text-[#0F172A] mb-3">
                Four services.<br />One mission.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal max-w-lg">
                From procurement and supply to delivery, servicing and repair, FAB supports the medical equipment needs of healthcare providers and related organizations.
              </p>
            </div>

            {/* Microscope Photographic Object */}
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] mx-auto my-6">
              <img
                src={aboutMicroscopeImg}
                alt="High-precision laboratory research microscope optics supplied by FAB Medical Supplies Ltd."
                className="w-full h-auto object-contain block filter drop-shadow-[0_6px_20px_rgba(33,64,154,0.07)]"
                loading="lazy"
              />
            </div>

            {/* Four Staggered Functions */}
            <div className="space-y-6 pt-2">
              {/* Function 01 */}
              <div className="space-y-1 max-w-sm pl-2">
                <div className="flex items-center space-x-2.5 mb-1.5">
                  <span className="text-sm font-bold text-[#21409A]">01</span>
                  <span className="w-8 h-[1.5px] bg-[#93C5FD]" aria-hidden="true" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0F172A]">
                  PROCUREMENT &amp; SUPPLY
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Medical equipment, instruments and reagents.
                </p>
              </div>

              {/* Function 02 */}
              <div className="space-y-1 max-w-sm pl-6 sm:pl-10">
                <div className="flex items-center space-x-2.5 mb-1.5">
                  <span className="text-sm font-bold text-[#21409A]">02</span>
                  <span className="w-8 h-[1.5px] bg-[#93C5FD]" aria-hidden="true" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0F172A]">
                  MARKETING &amp; SALES
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Supporting the marketing and sales of medical products and equipment.
                </p>
              </div>

              {/* Function 03 */}
              <div className="space-y-1 max-w-sm pl-10 sm:pl-16">
                <div className="flex items-center space-x-2.5 mb-1.5">
                  <span className="text-sm font-bold text-[#21409A]">03</span>
                  <span className="w-8 h-[1.5px] bg-[#93C5FD]" aria-hidden="true" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0F172A]">
                  DELIVERY
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Delivery of medical supplies and equipment.
                </p>
              </div>

              {/* Function 04 */}
              <div className="space-y-1 max-w-sm pl-14 sm:pl-20">
                <div className="flex items-center space-x-2.5 mb-1.5">
                  <span className="text-sm font-bold text-[#21409A]">04</span>
                  <span className="w-8 h-[1.5px] bg-[#93C5FD]" aria-hidden="true" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0F172A]">
                  SERVICE &amp; REPAIR
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Servicing and repair of the equipment that FAB supplies.
                </p>
              </div>
            </div>

            {/* Bottom Metadata */}
            <div className="pt-4 border-t border-slate-200">
              <div className="flex items-center space-x-2.5">
                <span className="w-5 h-[1.5px] bg-[#21409A]" aria-hidden="true" />
                <div className="space-y-0.5">
                  <span className="block font-bold tracking-wider text-[#21409A] uppercase text-[10px]">
                    KAMPALA, UGANDA
                  </span>
                  <span className="block font-semibold tracking-wider text-slate-400 uppercase text-[9px]">
                    MEDICAL EQUIPMENT • INSTRUMENTS • REAGENTS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 4: AREAS OF MEDICAL SUPPLY - Approved Design 3 Editorial Clinical Composition */}
      <section
        className="bg-white border-b border-border py-16 sm:py-20 lg:py-24 xl:py-28 relative overflow-hidden"
        aria-labelledby="areas-of-medical-supply-heading"
      >
        <Container className="relative max-w-7xl">
          {/* ======================================================== */}
          {/* DESKTOP ASYMMETRIC CLINICAL EDITORIAL COMPOSITION (lg+) */}
          {/* ======================================================== */}
          <div className="hidden lg:block relative min-h-[820px] xl:min-h-[860px]">
            {/* 1. Top-Left Header: FAB Logo, Eyebrow, Large Heading & Intro */}
            <div className="absolute left-0 top-0 max-w-[340px] xl:max-w-[370px] z-10">
              <img
                src={fabLogoImg}
                alt="FAB Medical Supplies Ltd."
                className="h-8 xl:h-9 w-auto object-contain block mb-6"
              />

              <div className="flex items-center space-x-2.5 mb-4">
                <span className="text-xs xl:text-[13px] font-bold uppercase tracking-[0.16em] text-[#21409A]">
                  AREAS OF MEDICAL SUPPLY
                </span>
                <span className="w-7 h-[2px] bg-[#E11D48] rounded-full inline-block" aria-hidden="true" />
              </div>

              <h2
                id="areas-of-medical-supply-heading"
                className="text-3xl xl:text-[44px] font-normal uppercase tracking-tight text-[#0F172A] leading-[1.08] mb-5"
              >
                SUPPORTING<br />
                HEALTHCARE<br />
                ACROSS KEY AREAS
              </h2>

              <p className="text-xs xl:text-sm text-slate-600 leading-relaxed font-normal">
                FAB supplies medical equipment, instruments and reagents across the most critical areas of healthcare, from diagnostics to surgery and beyond.
              </p>
            </div>

            {/* 2. Top-Right Slogan */}
            <div className="absolute right-0 top-2 z-10 flex items-center space-x-2.5 text-xs font-bold uppercase tracking-[0.16em] text-[#21409A]">
              <span>BETTER EQUIPMENT. BETTER CARE.</span>
              <span className="w-6 h-[2px] bg-[#E11D48] rounded-full inline-block" aria-hidden="true" />
            </div>

            {/* 3. Item 01: LABORATORY (Top-Center / Right) */}
            {/* Circular Photographic Crop */}
            <div className="absolute left-[38%] xl:left-[39%] -top-2 w-[270px] h-[270px] xl:w-[310px] xl:h-[310px] rounded-full overflow-hidden border-4 border-white shadow-[0_16px_36px_rgba(33,64,154,0.08)] ring-1 ring-slate-100 z-10">
              <img
                src={categoryLabImg}
                alt="Laboratory diagnostic microscope and reagents supplied by FAB Medical Supplies Ltd."
                className="w-full h-full object-cover object-center block"
                loading="lazy"
              />
            </div>

            {/* 01 Content Block */}
            <div className="absolute left-[68%] xl:left-[69%] top-[75px] xl:top-[85px] max-w-[260px] xl:max-w-[280px] z-10">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-xs xl:text-sm font-bold text-[#21409A] tracking-wider">01</span>
                <span className="w-8 h-[1.5px] bg-[#3B82F6]" aria-hidden="true" />
              </div>
              <h3 className="text-2xl xl:text-3xl font-black uppercase tracking-tight text-[#0F172A] mb-1.5">
                LABORATORY
              </h3>
              <div className="text-[10px] xl:text-[11px] font-bold tracking-[0.16em] text-[#2563EB] uppercase mb-1">
                DIAGNOSTICS. REAGENTS. TEST KITS.
              </div>
              <div className="w-12 h-[1.5px] bg-[#93C5FD] mb-2.5" aria-hidden="true" />
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Diagnostic equipment, reagents and test kits.
              </p>
            </div>

            {/* 4. Item 02: SURGICAL THEATRES (Mid-Left / Center) */}
            {/* 02 Content Block on Left */}
            <div className="absolute left-0 top-[370px] xl:top-[385px] max-w-[220px] xl:max-w-[240px] z-10">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-xs xl:text-sm font-bold text-[#21409A] tracking-wider">02</span>
                <span className="w-8 h-[1.5px] bg-[#3B82F6]" aria-hidden="true" />
              </div>
              <h3 className="text-2xl xl:text-3xl font-black uppercase tracking-tight text-[#0F172A] mb-1.5 leading-tight">
                SURGICAL<br />THEATRES
              </h3>
              <div className="text-[10px] xl:text-[11px] font-bold tracking-[0.16em] text-[#2563EB] uppercase mb-1">
                INSTRUMENTS. EQUIPMENT. CONSUMABLES.
              </div>
              <div className="w-12 h-[1.5px] bg-[#93C5FD] mb-2.5" aria-hidden="true" />
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Surgical instruments, equipment and consumables.
              </p>
            </div>

            {/* Parallelogram Photographic Crop */}
            <div
              className="absolute left-[21%] xl:left-[22%] top-[335px] xl:top-[345px] w-[290px] h-[195px] xl:w-[335px] xl:h-[220px] z-10 overflow-hidden shadow-[0_12px_28px_rgba(33,64,154,0.06)]"
              style={{ clipPath: 'polygon(18% 0%, 100% 0%, 82% 100%, 0% 100%)' }}
            >
              <img
                src={categoryTheatreImg}
                alt="Operating theatre surgical instruments supplied by FAB Medical Supplies Ltd."
                className="w-full h-full object-cover object-center block"
                loading="lazy"
              />
            </div>

            {/* 5. Item 03: CRITICAL CARE (Mid-Right) */}
            {/* Soft Arch / Capsule Photographic Crop */}
            <div className="absolute left-[52%] xl:left-[53%] top-[305px] xl:top-[315px] w-[215px] h-[265px] xl:w-[245px] xl:h-[300px] rounded-t-[120px] rounded-b-[40px] xl:rounded-t-[140px] xl:rounded-b-[50px] overflow-hidden border-4 border-white shadow-[0_16px_36px_rgba(33,64,154,0.08)] ring-1 ring-slate-100 z-10">
              <img
                src={categoryCriticalImg}
                alt="Critical care patient monitoring and life support systems supplied by FAB Medical Supplies Ltd."
                className="w-full h-full object-cover object-center block"
                loading="lazy"
              />
            </div>

            {/* 03 Content Block on Right */}
            <div className="absolute left-[76%] xl:left-[77%] top-[345px] xl:top-[360px] max-w-[240px] xl:max-w-[260px] z-10">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-xs xl:text-sm font-bold text-[#21409A] tracking-wider">03</span>
                <span className="w-8 h-[1.5px] bg-[#3B82F6]" aria-hidden="true" />
              </div>
              <h3 className="text-2xl xl:text-3xl font-black uppercase tracking-tight text-[#0F172A] mb-1.5 leading-tight">
                CRITICAL<br />CARE
              </h3>
              <div className="text-[10px] xl:text-[11px] font-bold tracking-[0.16em] text-[#2563EB] uppercase mb-1">
                MONITORS. VENTILATORS. LIFE SUPPORT.
              </div>
              <div className="w-12 h-[1.5px] bg-[#93C5FD] mb-2.5" aria-hidden="true" />
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Monitoring, ventilators and life support equipment.
              </p>
            </div>

            {/* 6. Item 04: GENERAL MEDICAL & CONSULTATION (Bottom-Left / Center) */}
            {/* Quarter-Curve Photographic Crop */}
            <div className="absolute left-[8%] xl:left-[9%] top-[575px] xl:top-[595px] w-[275px] h-[185px] xl:w-[315px] xl:h-[210px] rounded-tr-[140px] xl:rounded-tr-[160px] rounded-bl-[40px] overflow-hidden border-2 border-white shadow-[0_12px_28px_rgba(33,64,154,0.08)] ring-1 ring-slate-100 z-10">
              <img
                src={categoryOpdImg}
                alt="General medical consultation and diagnostic equipment supplied by FAB Medical Supplies Ltd."
                className="w-full h-full object-cover object-center block"
                loading="lazy"
              />
            </div>

            {/* 04 Content Block on Right */}
            <div className="absolute left-[36%] xl:left-[37%] top-[585px] xl:top-[605px] max-w-[340px] xl:max-w-[380px] z-10">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-xs xl:text-sm font-bold text-[#21409A] tracking-wider">04</span>
                <span className="w-8 h-[1.5px] bg-[#3B82F6]" aria-hidden="true" />
              </div>
              <h3 className="text-xl xl:text-2xl font-black uppercase tracking-tight text-[#0F172A] mb-1.5 leading-tight">
                GENERAL MEDICAL<br className="hidden sm:inline" /> &amp; CONSULTATION
              </h3>
              <div className="text-[10px] xl:text-[11px] font-bold tracking-[0.16em] text-[#2563EB] uppercase mb-1">
                DIAGNOSTIC EQUIPMENT. EXAMINATION TOOLS. CONSUMABLES. CLINICAL SUPPLIES.
              </div>
              <div className="w-12 h-[1.5px] bg-[#93C5FD] mb-2.5" aria-hidden="true" />
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Diagnostic equipment, examination tools, consumables and clinical supplies.
              </p>
            </div>

            {/* 7. Bottom-Right FAB Brand Anchor */}
            <div className="absolute right-0 top-[660px] xl:top-[680px] z-10 text-left">
              <div className="space-y-3">
                <div className="flex items-center space-x-2.5">
                  <span className="text-2xl xl:text-3xl font-black text-[#21409A] tracking-wider">FAB</span>
                  <span className="w-6 h-[3px] bg-[#E11D48] rounded-full inline-block" aria-hidden="true" />
                </div>
                <div className="space-y-1 text-xs xl:text-[13px] font-bold uppercase tracking-[0.18em] text-[#21409A]">
                  <div>THE RIGHT SUPPLIES.</div>
                  <div>THE RIGHT AREAS.</div>
                  <div>BETTER HEALTHCARE.</div>
                </div>
              </div>
            </div>

            {/* 8. Fine Technical Connector Lines (SVG Flow Overlay) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 1200 840"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {/* Connector from Laboratory Circle perimeter to 01 header */}
              <path
                d="M 720 180 L 760 180 L 795 105 L 815 105"
                stroke="#93C5FD"
                strokeWidth="1.2"
              />
              <circle cx="720" cy="180" r="3" fill="#21409A" />

              {/* Connector from 02 text to Surgical Theatre Parallelogram */}
              <path
                d="M 225 405 L 320 405"
                stroke="#93C5FD"
                strokeWidth="1.2"
              />
              <circle cx="320" cy="405" r="3" fill="#21409A" />

              {/* Connector from Critical Care Arch right perimeter to 03 header */}
              <path
                d="M 870 415 L 905 375 L 915 375"
                stroke="#93C5FD"
                strokeWidth="1.2"
              />
              <circle cx="870" cy="415" r="3" fill="#21409A" />

              {/* Connector from Consultation Curve top perimeter to 04 header */}
              <path
                d="M 410 635 L 435 605 L 450 605"
                stroke="#93C5FD"
                strokeWidth="1.2"
              />
              <circle cx="410" cy="635" r="3" fill="#21409A" />
            </svg>
          </div>

          {/* ======================================================== */}
          {/* MOBILE & TABLET EDITORIAL CLINICAL SEQUENCE (<lg) */}
          {/* ======================================================== */}
          <div className="block lg:hidden space-y-12 sm:space-y-16">
            {/* Header: FAB Logo, Eyebrow & Slogan */}
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <img
                  src={fabLogoImg}
                  alt="FAB Medical Supplies Ltd."
                  className="h-8 w-auto object-contain block"
                />
                <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] text-[#21409A]">
                  <span>BETTER EQUIPMENT. BETTER CARE.</span>
                  <span className="w-5 h-[2px] bg-[#E11D48] rounded-full inline-block" aria-hidden="true" />
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#21409A]">
                  AREAS OF MEDICAL SUPPLY
                </span>
                <span className="w-6 h-[2px] bg-[#E11D48] rounded-full inline-block" aria-hidden="true" />
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal uppercase tracking-tight text-[#0F172A] leading-[1.1]">
                SUPPORTING HEALTHCARE ACROSS KEY AREAS
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-xl">
                FAB supplies medical equipment, instruments and reagents across the most critical areas of healthcare, from diagnostics to surgery and beyond.
              </p>
            </div>

            {/* 01 LABORATORY */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pt-2">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white shadow-[0_12px_28px_rgba(33,64,154,0.08)] ring-1 ring-slate-100 flex-shrink-0">
                <img
                  src={categoryLabImg}
                  alt="Laboratory diagnostic equipment"
                  className="w-full h-full object-cover object-center block"
                  loading="lazy"
                />
              </div>
              <div className="space-y-1.5 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start space-x-2 mb-1">
                  <span className="text-xs font-bold text-[#21409A] tracking-wider">01</span>
                  <span className="w-8 h-[1.5px] bg-[#3B82F6]" aria-hidden="true" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0F172A]">
                  LABORATORY
                </h3>
                <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.16em] text-[#2563EB] uppercase">
                  DIAGNOSTICS. REAGENTS. TEST KITS.
                </div>
                <div className="w-10 h-[1.5px] bg-[#93C5FD] my-2 mx-auto sm:mx-0" aria-hidden="true" />
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-md">
                  Diagnostic equipment, reagents and test kits.
                </p>
              </div>
            </div>

            {/* 02 SURGICAL THEATRES */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pt-2">
              <div
                className="w-60 sm:w-68 h-40 sm:h-44 overflow-hidden shadow-[0_12px_28px_rgba(33,64,154,0.06)] flex-shrink-0"
                style={{ clipPath: 'polygon(18% 0%, 100% 0%, 82% 100%, 0% 100%)' }}
              >
                <img
                  src={categoryTheatreImg}
                  alt="Surgical theatre instruments and equipment"
                  className="w-full h-full object-cover object-center block"
                  loading="lazy"
                />
              </div>
              <div className="space-y-1.5 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start space-x-2 mb-1">
                  <span className="text-xs font-bold text-[#21409A] tracking-wider">02</span>
                  <span className="w-8 h-[1.5px] bg-[#3B82F6]" aria-hidden="true" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0F172A]">
                  SURGICAL THEATRES
                </h3>
                <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.16em] text-[#2563EB] uppercase">
                  INSTRUMENTS. EQUIPMENT. CONSUMABLES.
                </div>
                <div className="w-10 h-[1.5px] bg-[#93C5FD] my-2 mx-auto sm:mx-0" aria-hidden="true" />
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-md">
                  Surgical instruments, equipment and consumables.
                </p>
              </div>
            </div>

            {/* 03 CRITICAL CARE */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pt-2">
              <div className="w-48 sm:w-52 h-60 sm:h-64 rounded-t-[100px] rounded-b-[30px] overflow-hidden border-4 border-white shadow-[0_12px_28px_rgba(33,64,154,0.08)] ring-1 ring-slate-100 flex-shrink-0">
                <img
                  src={categoryCriticalImg}
                  alt="Critical care monitors and life support"
                  className="w-full h-full object-cover object-center block"
                  loading="lazy"
                />
              </div>
              <div className="space-y-1.5 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start space-x-2 mb-1">
                  <span className="text-xs font-bold text-[#21409A] tracking-wider">03</span>
                  <span className="w-8 h-[1.5px] bg-[#3B82F6]" aria-hidden="true" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0F172A]">
                  CRITICAL CARE
                </h3>
                <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.16em] text-[#2563EB] uppercase">
                  MONITORS. VENTILATORS. LIFE SUPPORT.
                </div>
                <div className="w-10 h-[1.5px] bg-[#93C5FD] my-2 mx-auto sm:mx-0" aria-hidden="true" />
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-md">
                  Monitoring, ventilators and life support equipment.
                </p>
              </div>
            </div>

            {/* 04 GENERAL MEDICAL & CONSULTATION */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pt-2">
              <div className="w-56 sm:w-64 h-38 sm:h-44 rounded-tr-[100px] rounded-bl-[30px] overflow-hidden border-2 border-white shadow-[0_12px_28px_rgba(33,64,154,0.08)] ring-1 ring-slate-100 flex-shrink-0">
                <img
                  src={categoryOpdImg}
                  alt="General medical consultation examination tools"
                  className="w-full h-full object-cover object-center block"
                  loading="lazy"
                />
              </div>
              <div className="space-y-1.5 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start space-x-2 mb-1">
                  <span className="text-xs font-bold text-[#21409A] tracking-wider">04</span>
                  <span className="w-8 h-[1.5px] bg-[#3B82F6]" aria-hidden="true" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0F172A]">
                  GENERAL MEDICAL &amp; CONSULTATION
                </h3>
                <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.16em] text-[#2563EB] uppercase">
                  DIAGNOSTIC EQUIPMENT. EXAMINATION TOOLS. CONSUMABLES. CLINICAL SUPPLIES.
                </div>
                <div className="w-10 h-[1.5px] bg-[#93C5FD] my-2 mx-auto sm:mx-0" aria-hidden="true" />
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-md">
                  Diagnostic equipment, examination tools, consumables and clinical supplies.
                </p>
              </div>
            </div>

            {/* Bottom Anchor */}
            <div className="pt-6 border-t border-slate-200">
              <div className="flex items-center space-x-2.5 mb-2">
                <span className="text-2xl font-black text-[#21409A] tracking-wider">FAB</span>
                <span className="w-6 h-[3px] bg-[#E11D48] rounded-full inline-block" aria-hidden="true" />
              </div>
              <div className="space-y-1 text-xs font-bold uppercase tracking-[0.16em] text-[#21409A]">
                <div>THE RIGHT SUPPLIES.</div>
                <div>THE RIGHT AREAS.</div>
                <div>BETTER HEALTHCARE.</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 5: CLINICAL ENVIRONMENTS - Approved Design A Editorial Split Composition */}
      <section
        className="bg-white border-b border-border py-16 sm:py-20 lg:py-24 xl:py-28 relative overflow-hidden"
        aria-labelledby="clinical-environments-heading"
      >
        <Container className="max-w-7xl relative">
          <div className="flex flex-col lg:flex-row items-stretch lg:justify-between gap-12 lg:gap-8 xl:gap-12">
            {/* ======================================================== */}
            {/* LEFT SIDE: Spacious Editorial Information Area (40-45%) */}
            {/* ======================================================== */}
            <div className="w-full lg:w-[42%] xl:w-[40%] flex flex-col justify-between py-2 lg:py-4 z-10">
              <div>
                {/* Authentic FAB Logo */}
                <div className="mb-6 xl:mb-8">
                  <img
                    src={fabLogoImg}
                    alt="FAB Medical Supplies Ltd."
                    className="h-8 sm:h-9 xl:h-10 w-auto object-contain block"
                  />
                </div>

                {/* Eyebrow with Red Rule */}
                <div className="flex items-center space-x-2.5 mb-5 sm:mb-6">
                  <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] text-[#21409A]">
                    CLINICAL ENVIRONMENTS
                  </span>
                  <span className="w-7 h-[2px] bg-[#E11D48] rounded-full inline-block" aria-hidden="true" />
                </div>

                {/* Dominant Headline */}
                <h2
                  id="clinical-environments-heading"
                  className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-bold uppercase tracking-tight text-[#0F172A] leading-[1.05] mb-5 sm:mb-6"
                >
                  REAL<br />
                  ENVIRONMENTS.<br />
                  LASTING IMPACT.
                </h2>

                {/* Supporting Introduction */}
                <p className="text-xs sm:text-sm lg:text-[15px] text-slate-600 leading-relaxed font-normal max-w-md">
                  FAB supplies medical equipment, instruments and reagents across the environments where care happens — from general wards to laboratories and theatre rooms.
                </p>
              </div>

              {/* Bottom-Left Technical Brand Statement */}
              <div className="mt-12 sm:mt-16 lg:mt-24 pt-2">
                <div className="w-8 h-[2px] bg-[#E11D48] mb-3 sm:mb-4" aria-hidden="true" />
                <div className="space-y-1 text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] text-[#21409A]">
                  <div>QUALITY SUPPLIERS.</div>
                  <div>HEALTHIER TOMORROWS.</div>
                </div>
              </div>
            </div>

            {/* ======================================================== */}
            {/* RIGHT SIDE: Vertical Photographic Ribbon (55-60%) */}
            {/* ======================================================== */}
            <div className="w-full lg:w-[58%] xl:w-[60%] flex flex-col space-y-3 sm:space-y-4 relative">
              {/* Panel 01: GENERAL WARD */}
              <div className="relative group overflow-hidden shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                <img
                  src={envWardImg}
                  alt="Clinical general ward equipped with hospital beds, patient monitoring systems and mobility aids"
                  className="w-full h-auto object-cover object-left-top block"
                  loading="lazy"
                />
                {/* Editorial Annotation Label */}
                <div className="absolute right-3 sm:right-6 lg:right-7 bottom-2 sm:bottom-4 md:bottom-5 text-left max-w-[210px] sm:max-w-[260px] xl:max-w-[280px]">
                  <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-bold text-[#21409A] mb-0.5">
                    <span>01</span>
                    <span className="w-5 h-[1.5px] bg-[#3B82F6]" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold uppercase tracking-tight text-[#0F172A] leading-tight">
                    GENERAL WARD
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5 leading-snug">
                    Beds • Monitoring • Mobility
                  </p>
                  <div className="text-xs sm:text-sm font-bold text-[#21409A] mt-1" aria-hidden="true">
                    →
                  </div>
                </div>
              </div>

              {/* Panel 02: LABORATORY */}
              <div className="relative group overflow-hidden shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                <img
                  src={envLabImg}
                  alt="Professional medical diagnostic laboratory environment equipped with research microscopes, test kits and reagents"
                  className="w-full h-auto object-cover object-left-top block"
                  loading="lazy"
                />
                {/* Editorial Annotation Label */}
                <div className="absolute right-3 sm:right-6 lg:right-7 bottom-2 sm:bottom-4 md:bottom-5 text-left max-w-[210px] sm:max-w-[260px] xl:max-w-[280px]">
                  <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-bold text-[#21409A] mb-0.5">
                    <span>02</span>
                    <span className="w-5 h-[1.5px] bg-[#3B82F6]" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold uppercase tracking-tight text-[#0F172A] leading-tight">
                    LABORATORY
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5 leading-snug">
                    Diagnostics • Reagents • Analysis
                  </p>
                  <div className="text-xs sm:text-sm font-bold text-[#21409A] mt-1" aria-hidden="true">
                    →
                  </div>
                </div>
              </div>

              {/* Panel 03: THEATRE ROOM */}
              <div className="relative group overflow-hidden shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                <img
                  src={envTheatreImg}
                  alt="Modern operating surgical theatre room with operating table, surgical lamps, anaesthesia machines and vital monitoring"
                  className="w-full h-auto object-cover object-left-top block"
                  loading="lazy"
                />
                {/* Editorial Annotation Label */}
                <div className="absolute right-3 sm:right-6 lg:right-7 bottom-2 sm:bottom-4 md:bottom-5 text-left max-w-[210px] sm:max-w-[260px] xl:max-w-[280px]">
                  <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-bold text-[#21409A] mb-0.5">
                    <span>03</span>
                    <span className="w-5 h-[1.5px] bg-[#3B82F6]" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold uppercase tracking-tight text-[#0F172A] leading-tight">
                    THEATRE ROOM
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5 leading-snug">
                    Anaesthesia • Surgical • Life Support
                  </p>
                  <div className="text-xs sm:text-sm font-bold text-[#21409A] mt-1" aria-hidden="true">
                    →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 6: WHO FAB SUPPORTS - Approved Design A Healthcare Ecosystem */}
      <section
        className="bg-[#FAFCFE] border-b border-border py-16 sm:py-20 lg:py-26 xl:py-30 relative overflow-hidden"
        aria-labelledby="who-fab-supports-heading"
      >
        {/* Subtle Architectural Hairline Grid Guidelines */}
        <div
          className="absolute inset-0 pointer-events-none select-none opacity-[0.4]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(203, 213, 225, 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(203, 213, 225, 0.25) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
          aria-hidden="true"
        />

        <Container className="relative max-w-7xl">
          {/* ======================================================== */}
          {/* SECTION HEADER: Eyebrow, Main Heading & Intro */}
          {/* ======================================================== */}
          <div className="max-w-3xl mb-14 sm:mb-18 lg:mb-20">
            {/* Eyebrow with Red Rule */}
            <div className="flex items-center space-x-2.5 mb-4 sm:mb-5">
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.18em] text-[#21409A]">
                WHO FAB SUPPORTS
              </span>
              <span className="w-8 h-[2px] bg-[#E11D48] rounded-full inline-block" aria-hidden="true" />
            </div>

            {/* Dominant Headline */}
            <h2
              id="who-fab-supports-heading"
              className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] font-bold uppercase tracking-tight text-[#0F172A] leading-[1.06] mb-5 sm:mb-6"
            >
              SUPPORTING THE<br />
              HEALTHCARE ECOSYSTEM
            </h2>

            {/* Supporting Paragraph */}
            <p className="text-sm sm:text-base lg:text-[16px] text-slate-600 leading-relaxed font-normal max-w-2xl">
              FAB supports a broad healthcare ecosystem, supplying medical equipment, instruments and reagents to organizations, professionals and the people who depend on quality healthcare.
            </p>
          </div>

          {/* ======================================================== */}
          {/* DESKTOP ASYMMETRIC HEALTHCARE ECOSYSTEM CANVAS (lg+) */}
          {/* ======================================================== */}
          <div className="hidden lg:block relative min-h-[740px] xl:min-h-[780px]">
            {/* Central Understated FAB Identity Anchor */}
            <div className="absolute left-[41%] xl:left-[42%] top-[34%] z-20 pointer-events-none select-none text-center">
              <div className="inline-flex flex-col items-center bg-white/95 backdrop-blur-sm px-6 py-4 border border-slate-200/90 shadow-[0_12px_28px_rgba(33,64,154,0.06)] rounded-sm">
                <img
                  src={fabLogoImg}
                  alt="FAB Medical Supplies Ltd."
                  className="h-7 xl:h-8 w-auto object-contain mb-2"
                />
                <div className="flex items-center space-x-2 text-[9px] font-mono uppercase tracking-[0.22em] text-[#21409A] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] inline-block" />
                  <span>SUPPLY &amp; SERVICE HUB</span>
                </div>
                <div className="text-[8px] font-mono text-slate-400 tracking-wider uppercase mt-0.5">
                  UGANDA HEALTHCARE INFRASTRUCTURE
                </div>
              </div>
            </div>

            {/* Subtle Level Tag 01: Healthcare Organizations */}
            <div className="absolute left-0 top-0 text-[10px] font-mono uppercase tracking-[0.2em] text-[#21409A] font-bold flex items-center space-x-2">
              <span className="w-2 h-[1.5px] bg-[#21409A]" />
              <span>LEVEL 01 // HEALTHCARE ORGANIZATIONS</span>
            </div>

            {/* Node 01: HOSPITALS & HEALTH FACILITIES (Top-Left / Primary Scale) */}
            <div className="absolute left-0 top-[35px] max-w-[310px] xl:max-w-[330px] z-10">
              <div className="flex items-center space-x-2.5 mb-2">
                <span className="text-xs font-mono font-bold text-[#21409A] tracking-wider">01</span>
                <span className="w-10 h-[1.5px] bg-[#93C5FD]" aria-hidden="true" />
                <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400">CORE NODE</span>
              </div>
              <h3 className="text-lg xl:text-xl font-bold uppercase tracking-tight text-[#0F172A] mb-1.5">
                HOSPITALS &amp; HEALTH FACILITIES
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Healthcare facilities requiring medical equipment, instruments and supplies.
              </p>
            </div>

            {/* Node 02: LABORATORIES & DIAGNOSTIC CENTRES (Top-Right / Primary Scale) */}
            <div className="absolute left-[63%] xl:left-[64%] top-[30px] max-w-[320px] xl:max-w-[340px] z-10">
              <div className="flex items-center space-x-2.5 mb-2">
                <span className="text-xs font-mono font-bold text-[#21409A] tracking-wider">02</span>
                <span className="w-10 h-[1.5px] bg-[#93C5FD]" aria-hidden="true" />
                <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400">DIAGNOSTIC NODE</span>
              </div>
              <h3 className="text-lg xl:text-xl font-bold uppercase tracking-tight text-[#0F172A] mb-1.5">
                LABORATORIES &amp; DIAGNOSTIC CENTRES
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Facilities using laboratory equipment, reagents and diagnostic supplies.
              </p>
            </div>

            {/* Node 03: CLINICS & MEDICAL PRACTICES (Mid-Left) */}
            <div className="absolute left-0 top-[220px] max-w-[270px] xl:max-w-[290px] z-10">
              <div className="flex items-center space-x-2.5 mb-2">
                <span className="text-xs font-mono font-bold text-[#21409A] tracking-wider">03</span>
                <span className="w-8 h-[1.5px] bg-[#93C5FD]" aria-hidden="true" />
              </div>
              <h3 className="text-sm xl:text-base font-bold uppercase tracking-tight text-[#0F172A] mb-1.5">
                CLINICS &amp; MEDICAL PRACTICES
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Healthcare practices requiring equipment and general medical supplies.
              </p>
            </div>

            {/* Node 04: GOVERNMENT HEALTH BODIES (Mid-Right) */}
            <div className="absolute left-[73%] xl:left-[74%] top-[200px] max-w-[270px] xl:max-w-[290px] z-10">
              <div className="flex items-center space-x-2.5 mb-2">
                <span className="text-xs font-mono font-bold text-[#21409A] tracking-wider">04</span>
                <span className="w-8 h-[1.5px] bg-[#93C5FD]" aria-hidden="true" />
              </div>
              <h3 className="text-sm xl:text-base font-bold uppercase tracking-tight text-[#0F172A] mb-1.5">
                GOVERNMENT HEALTH BODIES
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Public-sector health organizations involved in healthcare delivery.
              </p>
            </div>

            {/* Node 05: PHARMACIES (Center-Left Lower) */}
            <div className="absolute left-[8%] xl:left-[10%] top-[390px] max-w-[250px] xl:max-w-[270px] z-10">
              <div className="flex items-center space-x-2.5 mb-2">
                <span className="text-xs font-mono font-bold text-[#21409A] tracking-wider">05</span>
                <span className="w-8 h-[1.5px] bg-[#93C5FD]" aria-hidden="true" />
              </div>
              <h3 className="text-sm xl:text-base font-bold uppercase tracking-tight text-[#0F172A] mb-1.5">
                PHARMACIES
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Pharmacies within the wider healthcare supply network.
              </p>
            </div>

            {/* Node 06: HEALTHCARE INSTITUTIONS & ORGANIZATIONS (Center-Right Lower) */}
            <div className="absolute left-[67%] xl:left-[69%] top-[360px] max-w-[290px] xl:max-w-[310px] z-10">
              <div className="flex items-center space-x-2.5 mb-2">
                <span className="text-xs font-mono font-bold text-[#21409A] tracking-wider">06</span>
                <span className="w-8 h-[1.5px] bg-[#93C5FD]" aria-hidden="true" />
              </div>
              <h3 className="text-sm xl:text-base font-bold uppercase tracking-tight text-[#0F172A] mb-1.5">
                HEALTHCARE INSTITUTIONS &amp; ORGANIZATIONS
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Organizations supporting healthcare delivery and related services.
              </p>
            </div>

            {/* Subtle Level Tag 02: People & Patient Centricity */}
            <div className="absolute left-[8%] top-[515px] text-[10px] font-mono uppercase tracking-[0.2em] text-[#21409A] font-bold flex items-center space-x-2">
              <span className="w-2 h-[1.5px] bg-[#E11D48]" />
              <span>LEVEL 02 // PEOPLE AT THE CENTRE OF HEALTHCARE</span>
            </div>

            {/* Node 07: INDIVIDUAL HEALTHCARE PROFESSIONALS (Lower Left / Human Dimension) */}
            <div className="absolute left-[8%] xl:left-[10%] top-[550px] max-w-[320px] xl:max-w-[350px] z-10">
              <div className="flex items-center space-x-2.5 mb-2">
                <span className="text-xs font-mono font-bold text-[#21409A] tracking-wider">07</span>
                <span className="w-10 h-[1.5px] bg-[#E11D48]" aria-hidden="true" />
                <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400">CLINICAL PRACTICE</span>
              </div>
              <h3 className="text-base xl:text-lg font-bold uppercase tracking-tight text-[#0F172A] mb-1.5">
                INDIVIDUAL HEALTHCARE PROFESSIONALS
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Professionals working within clinical and healthcare environments.
              </p>
            </div>

            {/* Node 08: INDIVIDUALS & PATIENTS (Lower Right / Ultimate Beneficiaries) */}
            <div className="absolute left-[54%] xl:left-[56%] top-[550px] max-w-[360px] xl:max-w-[400px] z-10">
              <div className="flex items-center space-x-2.5 mb-2">
                <span className="text-xs font-mono font-bold text-[#21409A] tracking-wider">08</span>
                <span className="w-10 h-[1.5px] bg-[#E11D48]" aria-hidden="true" />
                <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400">END BENEFICIARIES</span>
              </div>
              <h3 className="text-base xl:text-lg font-bold uppercase tracking-tight text-[#0F172A] mb-1.5">
                INDIVIDUALS &amp; PATIENTS
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                People who ultimately benefit from the healthcare services supported by reliable medical supply.
              </p>
            </div>

            {/* Technical SVG Connector Lines & Annotation Grid */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 1200 740"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {/* Connector from Central Hub to Node 01 Hospitals */}
              <path
                d="M 480 270 L 380 180 L 320 180 L 290 120"
                stroke="#CBD5E1"
                strokeWidth="1.2"
                strokeDasharray="4 4"
              />
              <circle cx="290" cy="120" r="2.5" fill="#21409A" />

              {/* Connector from Central Hub to Node 02 Laboratories */}
              <path
                d="M 680 270 L 760 170 L 800 170 L 820 110"
                stroke="#CBD5E1"
                strokeWidth="1.2"
                strokeDasharray="4 4"
              />
              <circle cx="820" cy="110" r="2.5" fill="#21409A" />

              {/* Connector from Central Hub to Node 03 Clinics */}
              <path
                d="M 460 300 L 320 280 L 260 280"
                stroke="#CBD5E1"
                strokeWidth="1.2"
              />
              <circle cx="260" cy="280" r="2.5" fill="#21409A" />

              {/* Connector from Central Hub to Node 04 Government Bodies */}
              <path
                d="M 720 300 L 820 270 L 880 270"
                stroke="#CBD5E1"
                strokeWidth="1.2"
              />
              <circle cx="880" cy="270" r="2.5" fill="#21409A" />

              {/* Connector from Central Hub to Node 06 Institutions */}
              <path
                d="M 700 340 L 790 380 L 820 400"
                stroke="#CBD5E1"
                strokeWidth="1.2"
              />
              <circle cx="820" cy="400" r="2.5" fill="#21409A" />

              {/* Connector from Central Hub to Node 07 Professionals */}
              <path
                d="M 520 370 L 420 480 L 320 540"
                stroke="#E2E8F0"
                strokeWidth="1.2"
                strokeDasharray="3 3"
              />
              <circle cx="320" cy="540" r="2.5" fill="#E11D48" />

              {/* Connector from Central Hub to Node 08 Patients */}
              <path
                d="M 620 370 L 680 470 L 720 540"
                stroke="#E2E8F0"
                strokeWidth="1.2"
                strokeDasharray="3 3"
              />
              <circle cx="720" cy="540" r="2.5" fill="#E11D48" />

              {/* Technical Blueprint Crosshairs & Grid Coordinates */}
              <g stroke="#CBD5E1" strokeWidth="1" opacity="0.6">
                <line x1="80" y1="180" x2="90" y2="180" />
                <line x1="85" y1="175" x2="85" y2="185" />

                <line x1="1120" y1="160" x2="1130" y2="160" />
                <line x1="1125" y1="155" x2="1125" y2="165" />

                <line x1="1080" y1="520" x2="1090" y2="520" />
                <line x1="1085" y1="515" x2="1085" y2="525" />
              </g>
            </svg>
          </div>

          {/* ======================================================== */}
          {/* MOBILE & TABLET STAGGERED EDITORIAL SEQUENCE (<lg) */}
          {/* ======================================================== */}
          <div className="block lg:hidden space-y-12">
            {/* Central Identity Card Badge */}
            <div className="inline-flex flex-col items-start bg-white p-4 border border-slate-200 shadow-sm rounded-sm max-w-xs">
              <img
                src={fabLogoImg}
                alt="FAB Medical Supplies Ltd."
                className="h-7 w-auto object-contain mb-1.5"
              />
              <div className="flex items-center space-x-1.5 text-[9px] font-mono uppercase tracking-[0.18em] text-[#21409A] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] inline-block" />
                <span>CENTRAL HEALTHCARE SUPPLY HUB</span>
              </div>
            </div>

            {/* LEVEL 01: HEALTHCARE ORGANIZATIONS */}
            <div className="space-y-8">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#21409A] font-bold flex items-center space-x-2 border-b border-slate-200 pb-2">
                <span className="w-2 h-[2px] bg-[#21409A]" />
                <span>LEVEL 01 — HEALTHCARE ORGANIZATIONS</span>
              </div>

              {/* 01 */}
              <div className="space-y-1.5 pl-2 max-w-lg">
                <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#21409A]">
                  <span>01</span>
                  <span className="w-8 h-[1.5px] bg-[#93C5FD]" aria-hidden="true" />
                </div>
                <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-[#0F172A]">
                  HOSPITALS &amp; HEALTH FACILITIES
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Healthcare facilities requiring medical equipment, instruments and supplies.
                </p>
              </div>

              {/* 02 */}
              <div className="space-y-1.5 pl-5 sm:pl-8 max-w-lg">
                <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#21409A]">
                  <span>02</span>
                  <span className="w-8 h-[1.5px] bg-[#93C5FD]" aria-hidden="true" />
                </div>
                <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-[#0F172A]">
                  LABORATORIES &amp; DIAGNOSTIC CENTRES
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Facilities using laboratory equipment, reagents and diagnostic supplies.
                </p>
              </div>

              {/* 03 */}
              <div className="space-y-1.5 pl-2 max-w-lg">
                <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#21409A]">
                  <span>03</span>
                  <span className="w-8 h-[1.5px] bg-[#93C5FD]" aria-hidden="true" />
                </div>
                <h3 className="text-sm sm:text-base font-bold uppercase tracking-tight text-[#0F172A]">
                  CLINICS &amp; MEDICAL PRACTICES
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Healthcare practices requiring equipment and general medical supplies.
                </p>
              </div>

              {/* 04 */}
              <div className="space-y-1.5 pl-6 sm:pl-10 max-w-lg">
                <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#21409A]">
                  <span>04</span>
                  <span className="w-8 h-[1.5px] bg-[#93C5FD]" aria-hidden="true" />
                </div>
                <h3 className="text-sm sm:text-base font-bold uppercase tracking-tight text-[#0F172A]">
                  GOVERNMENT HEALTH BODIES
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Public-sector health organizations involved in healthcare delivery.
                </p>
              </div>

              {/* 05 */}
              <div className="space-y-1.5 pl-3 sm:pl-4 max-w-lg">
                <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#21409A]">
                  <span>05</span>
                  <span className="w-8 h-[1.5px] bg-[#93C5FD]" aria-hidden="true" />
                </div>
                <h3 className="text-sm sm:text-base font-bold uppercase tracking-tight text-[#0F172A]">
                  PHARMACIES
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Pharmacies within the wider healthcare supply network.
                </p>
              </div>

              {/* 06 */}
              <div className="space-y-1.5 pl-6 sm:pl-10 max-w-lg">
                <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#21409A]">
                  <span>06</span>
                  <span className="w-8 h-[1.5px] bg-[#93C5FD]" aria-hidden="true" />
                </div>
                <h3 className="text-sm sm:text-base font-bold uppercase tracking-tight text-[#0F172A]">
                  HEALTHCARE INSTITUTIONS &amp; ORGANIZATIONS
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Organizations supporting healthcare delivery and related services.
                </p>
              </div>
            </div>

            {/* LEVEL 02: PEOPLE AT THE CENTRE OF HEALTHCARE */}
            <div className="space-y-8 pt-4">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#21409A] font-bold flex items-center space-x-2 border-b border-slate-200 pb-2">
                <span className="w-2 h-[2px] bg-[#E11D48]" />
                <span>LEVEL 02 — PEOPLE AT THE CENTRE OF HEALTHCARE</span>
              </div>

              {/* 07 */}
              <div className="space-y-1.5 pl-3 sm:pl-5 max-w-lg">
                <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#21409A]">
                  <span>07</span>
                  <span className="w-8 h-[1.5px] bg-[#E11D48]" aria-hidden="true" />
                  <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400">CLINICAL PRACTICE</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-[#0F172A]">
                  INDIVIDUAL HEALTHCARE PROFESSIONALS
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Professionals working within clinical and healthcare environments.
                </p>
              </div>

              {/* 08 */}
              <div className="space-y-1.5 pl-6 sm:pl-10 max-w-lg">
                <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#21409A]">
                  <span>08</span>
                  <span className="w-8 h-[1.5px] bg-[#E11D48]" aria-hidden="true" />
                  <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400">END BENEFICIARIES</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-[#0F172A]">
                  INDIVIDUALS &amp; PATIENTS
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  People who ultimately benefit from the healthcare services supported by reliable medical supply.
                </p>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* CLOSING STATEMENT: Editorial Brand Anchor (Not a CTA) */}
          {/* ======================================================== */}
          <div className="mt-16 sm:mt-20 lg:mt-24 pt-8 border-t border-slate-200/90 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-3 text-xs sm:text-[13px] font-bold uppercase tracking-[0.18em] text-[#21409A]">
              <span className="w-8 h-[2px] bg-[#E11D48] rounded-full inline-block" aria-hidden="true" />
              <span>SUPPORTING THE SYSTEMS BEHIND BETTER HEALTHCARE.</span>
            </div>
            <div className="text-[10px] sm:text-[11px] text-slate-400 font-mono tracking-wider uppercase">
              FAB MEDICAL SUPPLIES LTD. • HEALTHCARE ECOSYSTEM
            </div>
          </div>
        </Container>
      </section>

      {/* Section 7: SERVICES - Approved Design C Integrated Editorial Typography */}
      <section
        className="bg-white border-b border-border py-16 sm:py-20 lg:py-24 xl:py-28 relative overflow-hidden"
        aria-labelledby="services-heading"
      >
        {/* Subtle Technical Engineering / Architectural Hairline Grid */}
        <div
          className="absolute inset-0 pointer-events-none select-none opacity-[0.35]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(203, 213, 225, 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(203, 213, 225, 0.25) 1px, transparent 1px)',
            backgroundSize: '70px 70px',
          }}
          aria-hidden="true"
        />

        <Container className="relative max-w-7xl">
          <div className="flex flex-col lg:flex-row items-stretch lg:justify-between gap-12 lg:gap-8 xl:gap-12">
            {/* ======================================================== */}
            {/* LEFT SIDE: Editorial Information & Statement Area (~40%) */}
            {/* ======================================================== */}
            <div className="w-full lg:w-[40%] xl:w-[38%] flex flex-col justify-between py-2 lg:py-4 z-10">
              <div>
                {/* Authentic FAB Logo */}
                <div className="mb-6 xl:mb-8">
                  <img
                    src={fabLogoImg}
                    alt="FAB Medical Supplies Ltd."
                    className="h-8 sm:h-9 xl:h-10 w-auto object-contain block"
                  />
                </div>

                {/* Eyebrow with Red Rule */}
                <div className="flex items-center space-x-2.5 mb-5 sm:mb-6">
                  <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.18em] text-[#21409A]">
                    SERVICES
                  </span>
                  <span className="w-7 h-[2px] bg-[#E11D48] rounded-full inline-block" aria-hidden="true" />
                </div>

                {/* Dominant Headline */}
                <h2
                  id="services-heading"
                  className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[52px] font-bold uppercase tracking-tight text-[#0F172A] leading-[1.05] mb-5 sm:mb-6"
                >
                  FROM SUPPLY<br />
                  TO SERVICE.
                </h2>

                {/* Supporting Paragraph */}
                <p className="text-xs sm:text-sm lg:text-[15px] text-slate-600 leading-relaxed font-normal max-w-md">
                  FAB Medical Supplies Ltd. supports healthcare providers through the procurement, marketing, delivery, servicing and repair of medical equipment, instruments and reagents.
                </p>
              </div>

              {/* Bottom-Left Editorial Brand Statement (Not a CTA) */}
              <div className="mt-12 sm:mt-16 lg:mt-24 pt-2">
                <div className="w-8 h-[2px] bg-[#E11D48] mb-3 sm:mb-4" aria-hidden="true" />
                <div className="space-y-1 text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] text-[#21409A]">
                  <div>QUALITY SUPPLIERS.</div>
                  <div>HEALTHIER TOMORROWS.</div>
                </div>
              </div>
            </div>

            {/* ======================================================== */}
            {/* RIGHT SIDE: Integrated Visual Landscape (~60%) */}
            {/* ======================================================== */}
            <div className="w-full lg:w-[60%] xl:w-[62%] relative">
              {/* DESKTOP INTEGRATED COMPOSITION (lg+) */}
              <div className="hidden lg:block relative min-h-[640px] xl:min-h-[700px]">
                {/* Central / Right Curvilinear Photographic Composition Backdrop */}
                <div className="w-full h-full flex justify-end">
                  <img
                    src={servicesCCompImg}
                    alt="FAB Medical Services lifecycle showing procurement, marketing, delivery, and equipment servicing"
                    className="w-full max-w-[580px] xl:max-w-[640px] h-auto object-contain block ml-auto select-none pointer-events-none"
                    loading="lazy"
                  />
                </div>

                {/* 01 — PROCUREMENT & SUPPLY (Upper-Right) */}
                <div className="absolute right-0 top-[30px] xl:top-[35px] max-w-[240px] xl:max-w-[270px] z-10 text-left">
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#21409A] mb-1">
                    <span>01</span>
                    <span className="w-6 h-[1.5px] bg-[#3B82F6]" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm xl:text-base font-bold uppercase tracking-tight text-[#0F172A] leading-tight mb-1">
                    PROCUREMENT &amp; SUPPLY
                  </h3>
                  <p className="text-[11px] xl:text-xs text-slate-600 leading-snug font-normal mb-1">
                    Medical equipment, instruments and reagents.
                  </p>
                  <p className="text-[10px] xl:text-[11px] text-[#2563EB] font-semibold tracking-wide">
                    Global sourcing. Quality assurance. Reliable supply.
                  </p>
                </div>

                {/* 02 — MARKETING & SALES (Mid-Right) */}
                <div className="absolute right-0 top-[205px] xl:top-[225px] max-w-[240px] xl:max-w-[270px] z-10 text-left">
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#21409A] mb-1">
                    <span>02</span>
                    <span className="w-6 h-[1.5px] bg-[#3B82F6]" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm xl:text-base font-bold uppercase tracking-tight text-[#0F172A] leading-tight mb-1">
                    MARKETING &amp; SALES
                  </h3>
                  <p className="text-[11px] xl:text-xs text-slate-600 leading-snug font-normal mb-1">
                    Supporting the marketing and sales of medical products and equipment.
                  </p>
                  <p className="text-[10px] xl:text-[11px] text-[#2563EB] font-semibold tracking-wide">
                    Expert advice. Product support. Long-term partnerships.
                  </p>
                </div>

                {/* 03 — DELIVERY OF SUPPLIES (Middle-Left next to van) */}
                <div className="absolute left-[2%] xl:left-[3%] top-[345px] xl:top-[375px] max-w-[220px] xl:max-w-[250px] z-10 text-left">
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#21409A] mb-1">
                    <span>03</span>
                    <span className="w-6 h-[1.5px] bg-[#3B82F6]" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm xl:text-base font-bold uppercase tracking-tight text-[#0F172A] leading-tight mb-1">
                    DELIVERY OF SUPPLIES
                  </h3>
                  <p className="text-[11px] xl:text-xs text-slate-600 leading-snug font-normal mb-1">
                    Delivery of medical supplies and equipment.
                  </p>
                  <p className="text-[10px] xl:text-[11px] text-[#2563EB] font-semibold tracking-wide">
                    On-time. Secure. Efficient.
                  </p>
                </div>

                {/* 04 — SERVICE & REPAIR (Lower-Left / Strongest Secondary Focal Point) */}
                <div className="absolute left-[6%] xl:left-[7%] bottom-[50px] xl:bottom-[55px] max-w-[310px] xl:max-w-[350px] z-10 text-left bg-white/95 backdrop-blur-sm p-4 border-l-2 border-[#21409A] shadow-[0_8px_20px_rgba(33,64,154,0.06)]">
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#21409A] mb-1">
                    <span>04</span>
                    <span className="w-8 h-[1.5px] bg-[#E11D48]" aria-hidden="true" />
                    <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400">CORE SUPPORT</span>
                  </div>
                  <h3 className="text-base xl:text-lg font-black uppercase tracking-tight text-[#0F172A] leading-tight mb-1">
                    SERVICE &amp; REPAIR
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-1.5">
                    Servicing and repair of the equipment that FAB supplies.
                  </p>
                  <p className="text-[10.5px] xl:text-xs text-[#2563EB] font-bold tracking-wide mb-2">
                    Expert support. Maximum uptime. Longer equipment life.
                  </p>
                  {/* Subtle technical annotations around Service & Repair */}
                  <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-x-2 gap-y-1 text-[9px] font-mono uppercase tracking-wider text-slate-400">
                    <span>MAINTENANCE</span>
                    <span>•</span>
                    <span>REPAIRS</span>
                    <span>•</span>
                    <span>TECHNICAL SUPPORT</span>
                    <span>•</span>
                    <span>EQUIPMENT SERVICE</span>
                  </div>
                </div>

                {/* Bottom-Right Editorial Tracker */}
                <div className="absolute right-0 bottom-1 z-10 text-right">
                  <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-slate-400">
                    SUPPORT / SUPPLY / SERVICE / TOGETHER
                  </span>
                </div>
              </div>

              {/* MOBILE & TABLET STAGGERED EDITORIAL SEQUENCE (<lg) */}
              <div className="block lg:hidden space-y-10">
                {/* Photographic Composite Graphic */}
                <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm max-w-lg mx-auto">
                  <img
                    src={servicesCCompImg}
                    alt="FAB Medical Services lifecycle showing procurement, marketing, delivery, and equipment servicing"
                    className="w-full h-auto object-contain block"
                    loading="lazy"
                  />
                </div>

                {/* 4 Staggered Service Items */}
                <div className="space-y-6 pt-2">
                  {/* 01 */}
                  <div className="space-y-1 pl-2 border-l-2 border-slate-200">
                    <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#21409A]">
                      <span>01</span>
                      <span className="w-6 h-[1.5px] bg-[#3B82F6]" aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-bold uppercase tracking-tight text-[#0F172A]">
                      PROCUREMENT &amp; SUPPLY
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Medical equipment, instruments and reagents.
                    </p>
                    <p className="text-[11px] text-[#2563EB] font-medium">
                      Global sourcing. Quality assurance. Reliable supply.
                    </p>
                  </div>

                  {/* 02 */}
                  <div className="space-y-1 pl-5 sm:pl-8 border-l-2 border-slate-200">
                    <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#21409A]">
                      <span>02</span>
                      <span className="w-6 h-[1.5px] bg-[#3B82F6]" aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-bold uppercase tracking-tight text-[#0F172A]">
                      MARKETING &amp; SALES
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Supporting the marketing and sales of medical products and equipment.
                    </p>
                    <p className="text-[11px] text-[#2563EB] font-medium">
                      Expert advice. Product support. Long-term partnerships.
                    </p>
                  </div>

                  {/* 03 */}
                  <div className="space-y-1 pl-2 border-l-2 border-slate-200">
                    <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#21409A]">
                      <span>03</span>
                      <span className="w-6 h-[1.5px] bg-[#3B82F6]" aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-bold uppercase tracking-tight text-[#0F172A]">
                      DELIVERY OF SUPPLIES
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Delivery of medical supplies and equipment.
                    </p>
                    <p className="text-[11px] text-[#2563EB] font-medium">
                      On-time. Secure. Efficient.
                    </p>
                  </div>

                  {/* 04 */}
                  <div className="space-y-1.5 pl-4 sm:pl-6 border-l-2 border-[#21409A] bg-slate-50/60 p-4 rounded-r-md">
                    <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#21409A]">
                      <span>04</span>
                      <span className="w-6 h-[1.5px] bg-[#E11D48]" aria-hidden="true" />
                      <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400">CORE SUPPORT</span>
                    </div>
                    <h3 className="text-lg font-black uppercase tracking-tight text-[#0F172A]">
                      SERVICE &amp; REPAIR
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Servicing and repair of the equipment that FAB supplies.
                    </p>
                    <p className="text-xs text-[#2563EB] font-bold">
                      Expert support. Maximum uptime. Longer equipment life.
                    </p>
                    <div className="pt-2 border-t border-slate-200/80 flex flex-wrap gap-x-2 gap-y-1 text-[9px] font-mono uppercase tracking-wider text-slate-400">
                      <span>MAINTENANCE</span>
                      <span>•</span>
                      <span>REPAIRS</span>
                      <span>•</span>
                      <span>TECHNICAL SUPPORT</span>
                      <span>•</span>
                      <span>EQUIPMENT SERVICE</span>
                    </div>
                  </div>
                </div>

                {/* Mobile Bottom Tracker */}
                <div className="pt-2 text-center">
                  <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-slate-400">
                    SUPPORT / SUPPLY / SERVICE / TOGETHER
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final Closing + Contact Section - Approved Design D Graphic Focus */}
      <section
        className="bg-white border-b border-border py-18 sm:py-22 lg:py-28 xl:py-32 relative overflow-hidden"
        aria-labelledby="about-closing-heading"
      >
        <Container className="relative max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-10 items-start">
            {/* ======================================================== */}
            {/* LEFT: Dominant Headline, Paragraph & FAB Brand Wordmark (Col 5) */}
            {/* ======================================================== */}
            <div className="lg:col-span-5 flex flex-col justify-between z-10">
              <div>
                {/* Eyebrow with Red Dash */}
                <div className="flex items-center space-x-2.5 mb-6">
                  <span className="w-5 h-[2px] bg-[#E11D48] inline-block" aria-hidden="true" />
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#0F172A]">
                    FAB MEDICAL SUPPLIES LTD.
                  </span>
                </div>

                {/* Dominant Editorial Serif Headline */}
                <h2
                  id="about-closing-heading"
                  className="text-4xl sm:text-5xl lg:text-[46px] xl:text-[54px] font-serif font-black uppercase tracking-tight text-[#0F172A] leading-[1.04] mb-6 sm:mb-8"
                >
                  SUPPORTING<br />
                  THE SUPPLY<br />
                  OF <span className="text-[#3B82F6]">BETTER</span><br />
                  <span className="text-[#2563EB]">HEALTHCARE.</span>
                </h2>

                {/* Supporting Paragraph */}
                <p className="text-xs sm:text-sm lg:text-[15px] text-slate-600 leading-relaxed font-normal max-w-md mb-12 lg:mb-16">
                  From procurement and supply to delivery, servicing and repair, FAB Medical Supplies Ltd. supports the equipment and supply needs of healthcare providers across Uganda.
                </p>
              </div>

              {/* Lower-Left Authentic FAB Logo */}
              <div className="pt-2">
                <img
                  src={fabLogoImg}
                  alt="FAB Medical Supplies Ltd."
                  className="h-9 xl:h-10 w-auto object-contain block"
                />
              </div>
            </div>

            {/* ======================================================== */}
            {/* CENTER: Medical-Equipment Graphic & Technical Construction (Col 4) */}
            {/* ======================================================== */}
            <div className="lg:col-span-4 flex items-center justify-center relative py-6 lg:py-0">
              {/* Technical Blueprint SVG Guidelines & Axes */}
              <div className="relative flex items-center justify-center w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] xl:w-[350px] xl:h-[350px]">
                {/* SVG Construction System */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
                  viewBox="0 0 350 350"
                  fill="none"
                  aria-hidden="true"
                >
                  {/* Outer Technical Guide Circle */}
                  <circle cx="175" cy="175" r="145" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="175" cy="175" r="115" stroke="#E2E8F0" strokeWidth="1" />

                  {/* Horizontal & Vertical Crosshair Hairlines */}
                  <line x1="175" y1="10" x2="175" y2="340" stroke="#CBD5E1" strokeWidth="1" />
                  <line x1="10" y1="175" x2="340" y2="175" stroke="#CBD5E1" strokeWidth="1" />

                  {/* Diagonal Lead Guideline to Contact Info */}
                  <path d="M 245 105 L 310 50 L 350 50" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="2 2" />

                  {/* Red Center / Registration Crosshair Marks */}
                  <g stroke="#E11D48" strokeWidth="1.5">
                    <line x1="175" y1="315" x2="175" y2="330" />
                    <line x1="167" y1="322.5" x2="183" y2="322.5" />
                  </g>
                </svg>

                {/* Circular Stethoscope Graphic */}
                <div className="w-48 h-48 sm:w-56 sm:h-56 xl:w-60 xl:h-60 rounded-full overflow-hidden border-2 border-white shadow-[0_16px_40px_rgba(33,64,154,0.1)] relative z-10 ring-1 ring-slate-200">
                  <img
                    src={contactStethImg}
                    alt="Precision medical stethoscope examination equipment supplied by FAB Medical Supplies Ltd."
                    className="w-full h-full object-cover object-center block"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* ======================================================== */}
            {/* RIGHT: Precise Contact Info & Restrained LET'S TALK Link (Col 3) */}
            {/* ======================================================== */}
            <div className="lg:col-span-3 flex flex-col justify-between py-2 lg:pl-4 xl:pl-6 z-10">
              <div>
                {/* Eyebrow */}
                <div className="flex items-center space-x-2 mb-2">
                  <span className="w-5 h-[2px] bg-[#E11D48] inline-block" aria-hidden="true" />
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#21409A]">
                    GET IN TOUCH
                  </span>
                </div>

                {/* Subhead */}
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F172A] tracking-tight mb-6">
                  Kampala, Uganda
                </h3>

                {/* Contact List */}
                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  {/* Phone */}
                  <div className="flex items-start space-x-3">
                    <svg className="w-4 h-4 text-[#21409A] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a
                      href={companyInfo.phones[0].link}
                      className="hover:text-[#21409A] font-semibold text-[#0F172A] transition-colors"
                      aria-label="Call +256 786 062 191"
                    >
                      +256 786 062 191
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-3">
                    <svg className="w-4 h-4 text-[#21409A] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a
                      href="mailto:info@fabmedsupplies.com"
                      className="hover:text-[#21409A] font-medium text-slate-700 transition-colors"
                    >
                      info@fabmedsupplies.com
                    </a>
                  </div>

                  {/* Physical Address */}
                  <div className="flex items-start space-x-3">
                    <svg className="w-4 h-4 text-[#21409A] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-normal text-slate-600 leading-snug">
                      Emka House, Bombo Road, Ground Floor, Shop G01, Kampala
                    </span>
                  </div>

                  {/* Website */}
                  <div className="flex items-start space-x-3">
                    <svg className="w-4 h-4 text-[#21409A] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <span className="font-medium text-slate-700">
                      www.fabmedsupplies.com
                    </span>
                  </div>
                </div>

                {/* Thin Divider Line */}
                <div className="w-full h-[1px] bg-slate-200 my-6" aria-hidden="true" />

                {/* Restrained Text-Style Contact Link: LET'S TALK → */}
                <div>
                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="group inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-[0.22em] text-[#0F172A] hover:text-[#21409A] transition-colors"
                  >
                    <span>LET'S TALK</span>
                    <span className="text-[#E11D48] font-bold text-sm transition-transform group-hover:translate-x-1.5" aria-hidden="true">
                      →
                    </span>
                  </button>
                </div>
              </div>

              {/* Bottom Right Brand Signature */}
              <div className="mt-12 lg:mt-16 pt-4 flex items-center space-x-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.16em] text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] inline-block" aria-hidden="true" />
                <span className="leading-tight">QUALITY SUPPLIERS. HEALTHIER TOMORROWS.</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
