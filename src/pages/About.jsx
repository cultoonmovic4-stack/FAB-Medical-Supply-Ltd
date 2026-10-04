import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components';
import { companyInfo } from '../data/company';
import fabLogoImg from '../assets/fab-logo.webp';
import aboutCompanyEquipImg from '../assets/about-company-equipment.webp';
import aboutMicroscopeImg from '../assets/about-microscope-clean.webp';
import categoryLabImg from '../assets/category-laboratory.webp';
import categoryTheatreImg from '../assets/category-theatre-room.webp';
import categoryCriticalImg from '../assets/category-critical-care.webp';
import categoryOpdImg from '../assets/category-opd-consultation.webp';
import envWardImg from '../assets/env_ward_clean.webp';
import envLabImg from '../assets/env_lab_clean.webp';
import envTheatreImg from '../assets/env_theatre_clean.webp';
import envWardSqImg from '../assets/env_ward_sq.webp';
import envLabSqImg from '../assets/env_lab_sq.webp';
import envTheatreSqImg from '../assets/env_theatre_sq.webp';
import envWardHeroImg from '../assets/env_ward_pure.webp';
import envLabHeroImg from '../assets/env_lab_wide.webp';
import envTheatreHeroImg from '../assets/env_theatre_wide.webp';
import serviceHeroTheatreImg from '../assets/service-hero-theatre.webp';
import serviceProcurementImg from '../assets/service-procurement.jpg';
import serviceMarketingImg from '../assets/service-marketing.jpg';
import serviceDeliveryImg from '../assets/service-delivery.jpg';
import serviceRepairImg from '../assets/service-repair.jpg';
import contactStethImg from '../assets/contact_steth_circle.webp';
import whoHospitalImg from '../assets/who-we-serve-hospital.jpg';
import whoLabImg from '../assets/who-we-serve-laboratory.jpg';
import whoClinicImg from '../assets/who-we-serve-clinic.jpg';
import whoPharmacyImg from '../assets/who-we-serve-pharmacy.jpg';
import whoMedCareImg from '../assets/who-we-serve-medcare.jpg';
import whoBedsImg from '../assets/who-we-serve-beds.jpg';
import whoPatientImg from '../assets/who-we-serve-patient.jpg';
import whoLabDiagnosticImg from '../assets/who-we-serve-lab-diagnostic.jpg';

const servicesList = [
  {
    id: 'procurement',
    num: '01',
    title: 'PROCUREMENT',
    description: 'Source the right equipment, instruments and reagents.',
    image: serviceProcurementImg,
    alt: 'Medical equipment procurement warehouse with clinical stock',
  },
  {
    id: 'marketing-sales',
    num: '02',
    title: 'MARKETING & SALES',
    description: 'Product support and market development.',
    image: serviceMarketingImg,
    alt: 'Healthcare consultation and medical equipment sales support',
  },
  {
    id: 'delivery',
    num: '03',
    title: 'DELIVERY',
    description: 'On-time, secure supply.',
    image: serviceDeliveryImg,
    alt: 'FAB Medical Supplies dedicated delivery van and logistics personnel',
  },
  {
    id: 'service-repair',
    num: '04',
    title: 'SERVICE & REPAIR',
    description: 'Technical support and equipment maintenance.',
    image: serviceRepairImg,
    alt: 'Certified medical engineering technician servicing healthcare monitoring machinery',
  },
];

const clinicalEnvironments = [
  {
    id: 'general-ward',
    num: '01',
    title: 'GENERAL WARD',
    tags: 'Beds • Monitoring • Mobility',
    image: envWardHeroImg,
    thumbnail: envWardSqImg,
    alt: 'Clinical general ward equipped with hospital beds, patient monitoring systems and mobility aids',
    categoryId: 'hospital-furniture',
  },
  {
    id: 'laboratory',
    num: '02',
    title: 'LABORATORY',
    tags: 'Diagnostics • Reagents • Analysis',
    image: envLabHeroImg,
    thumbnail: envLabSqImg,
    alt: 'Professional medical diagnostic laboratory environment equipped with research microscopes, test kits and reagents',
    categoryId: 'laboratory',
  },
  {
    id: 'theatre',
    num: '03',
    title: 'THEATRE',
    tags: 'Surgical Equipment • Sterile Solutions',
    image: envTheatreHeroImg,
    thumbnail: envTheatreSqImg,
    alt: 'Modern operating surgical theatre room with operating table, surgical lamps, anaesthesia machines and vital monitoring',
    categoryId: 'theatre-room',
  },
];

export default function About({ onNavigate }) {
  const [activeEnvIndex, setActiveEnvIndex] = useState(0);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const activeEnv = clinicalEnvironments[activeEnvIndex];
  const companionEnvs = clinicalEnvironments.filter((_, idx) => idx !== activeEnvIndex);

  const handlePrevService = () => {
    setActiveServiceIndex((prev) => (prev - 1 + servicesList.length) % servicesList.length);
  };

  const handleNextService = () => {
    setActiveServiceIndex((prev) => (prev + 1) % servicesList.length);
  };

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
            src={serviceHeroTheatreImg}
            alt="Clinical operating theatre equipped with patient vital signs monitor and medical instruments"
            className="w-full h-full object-cover object-left block"
            width="960"
            height="600"
            fetchpriority="high"
            loading="eager"
            decoding="async"
          />
        </div>

        <Container className="relative z-10 py-14 sm:py-18 lg:py-22 xl:py-26">
          <div
            className="max-w-2xl xl:max-w-[620px]"
            data-aos="fade-right"
            data-aos-duration="900"
          >
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
            <div
              className="block lg:hidden my-7 sm:my-9 relative rounded-xl overflow-hidden shadow-sm border border-slate-200"
              data-aos="zoom-in"
              data-aos-duration="900"
            >
              <img
                src={serviceHeroTheatreImg}
                alt="Clinical operating theatre equipped with patient vital signs monitor and medical instruments"
                className="w-full h-64 sm:h-80 object-cover object-center block"
                width="640"
                height="320"
                fetchpriority="high"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Bottom-Left Identity & Metadata Cluster */}
            <div
              className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 pt-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* Authentic FAB Logo Wordmark */}
              <div className="flex-shrink-0">
                <img
                  src={fabLogoImg}
                  alt="FAB Medical Supplies Ltd."
                  className="h-10 sm:h-12 w-auto object-contain block"
                  width="48"
                  height="50"
                  decoding="async"
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

      {/* Section 2: THE COMPANY - Approved Design 5 Immersive Editorial Composition */}
      <section
        className="bg-[#F8FAFC] py-14 sm:py-18 lg:py-24 xl:py-28 border-b border-border relative overflow-hidden"
        aria-labelledby="the-company-heading"
      >
        <Container>
          {/* Distinct Framed Editorial Architecture — Generously Separated from Hero */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] bg-white">
            
            {/* UPPER PART: Immersive Editorial Photography Block with Refined Subtle Overlay */}
            <div className="relative w-full min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] xl:min-h-[600px] flex items-center overflow-hidden">
              {/* Background Clinical Operating Theatre / Equipment Photograph */}
              <img
                src={aboutCompanyEquipImg}
                alt="Clinical patient vital signs monitor and surgical operating theatre equipped by FAB Medical Supplies Ltd."
                className="absolute inset-0 w-full h-full object-cover object-center scale-100"
                width="1200"
                height="600"
                loading="lazy"
                decoding="async"
              />

              {/* Refined, Soft, Semi-Transparent Light Overlay (Preserves authentic photography without heavy blue wash) */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `
                    linear-gradient(to right, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.88) 32%, rgba(255, 255, 255, 0.45) 58%, rgba(255, 255, 255, 0.05) 82%, transparent 100%),
                    linear-gradient(to bottom, rgba(240, 246, 252, 0.35) 0%, transparent 40%, rgba(255, 255, 255, 0.4) 100%)
                  `,
                }}
                aria-hidden="true"
              />

              {/* Content Layer Inside Upper Immersive Photography */}
              <div className="relative z-10 p-6 sm:p-10 lg:p-14 xl:p-16 w-full">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                  
                  {/* Left Side: Editorial Typography & Statement */}
                  <div
                    className="max-w-xl xl:max-w-2xl"
                    data-aos="fade-right"
                    data-aos-duration="900"
                  >
                    {/* Small Red Line Indicator + THE COMPANY */}
                    <div className="flex items-center space-x-2.5 mb-5 sm:mb-6">
                      <span className="w-5 h-[2px] bg-[#ED1C24] inline-block flex-shrink-0" aria-hidden="true" />
                      <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.24em] text-[#0F172A] uppercase">
                        THE COMPANY
                      </span>
                    </div>

                    {/* Dominant Company Identity Headline */}
                    <h2
                      id="the-company-heading"
                      className="text-3xl sm:text-5xl lg:text-[3.5rem] xl:text-[4.25rem] font-black text-[#0F172A] leading-[1.04] tracking-tight uppercase mb-6 sm:mb-8"
                    >
                      FAB MEDICAL<br />
                      <span className="text-[#21409A]">SUPPLIES LTD.</span>
                    </h2>

                    {/* Left Red Vertical Accent Rule + Concise Statement */}
                    <div className="border-l-2 border-[#ED1C24] pl-4 sm:pl-5 max-w-md bg-white/40 backdrop-blur-[2px] py-1 rounded-r">
                      <p className="text-xs sm:text-sm lg:text-[14.5px] text-slate-800 leading-relaxed font-semibold">
                        Procurement, importation, and supply of medical equipment, instruments and reagents used in laboratories, theatres and general medical products.
                      </p>
                    </div>
                  </div>

                  {/* Right Side: Technical Category Indicator (Matches target screenshot upper right) */}
                  <div
                    className="hidden md:flex flex-col items-start pl-3.5 border-l border-white/70 text-[10.5px] sm:text-[11px] font-mono tracking-[0.22em] text-[#0F172A] font-bold space-y-1 bg-white/50 backdrop-blur-[4px] py-2 px-3 rounded shadow-xs"
                    data-aos="fade-left"
                    data-aos-duration="900"
                  >
                    <span>MEDICAL EQUIPMENT</span>
                    <span>INSTRUMENTS</span>
                    <span>REAGENTS</span>
                  </div>

                </div>
              </div>
            </div>

            {/* LOWER PART: Clean White Editorial Statement & Supply Chain Strip */}
            <div className="bg-white p-6 sm:p-10 lg:p-12 xl:p-14 border-t border-slate-200/80">
              {/* Split Statement & Explanatory Paragraph */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Headline Area */}
                <div
                  className="lg:col-span-7"
                  data-aos="fade-up"
                  data-aos-duration="850"
                >
                  {/* Eyebrow with Blue Rule */}
                  <div className="flex items-center space-x-2.5 mb-3 sm:mb-4">
                    <span className="w-6 h-[2px] bg-[#21409A] flex-shrink-0" aria-hidden="true" />
                    <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] text-[#21409A] uppercase">
                      SUPPORTING A HEALTHIER UGANDA
                    </span>
                  </div>

                  {/* Main Headline */}
                  <h3 className="text-2xl sm:text-3xl lg:text-[2.5rem] xl:text-[2.85rem] font-black text-[#0F172A] tracking-tight leading-[1.08] uppercase">
                    EQUIPMENT TODAY.<br />
                    <span className="text-[#21409A]">BETTER CARE TOMORROW.</span>
                  </h3>
                </div>

                {/* Right Supporting Description */}
                <div
                  className="lg:col-span-5 lg:border-l lg:border-slate-300 lg:pl-8 flex items-center"
                  data-aos="fade-up"
                  data-aos-duration="850"
                  data-aos-delay="100"
                >
                  <p className="text-xs sm:text-sm lg:text-[14.5px] text-slate-600 leading-relaxed font-normal">
                    FAB Medical Supplies Ltd. deals in the procurement and supply of medical equipment, instruments and reagents used in laboratories, theatres and general medical products.
                  </p>
                </div>

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
            <div
              className="absolute left-0 top-0 max-w-[340px] xl:max-w-[380px] z-10"
              data-aos="fade-right"
              data-aos-duration="900"
            >
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
            <div className="absolute right-0 top-0 z-10" data-aos="fade-left" data-aos-delay="150">
              <img
                src={fabLogoImg}
                alt="FAB Medical Supplies Ltd."
                className="h-10 xl:h-11 w-auto object-contain block"
                width="44"
                height="45"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* 3. Center Laboratory Microscope Photographic Anchor (V-Point Cut) */}
            <div
              className="absolute left-[36%] xl:left-[35%] -top-6 xl:-top-8 w-[380px] xl:w-[420px] z-10 pointer-events-none select-none"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="150"
            >
              <img
                src={aboutMicroscopeImg}
                alt="High-precision laboratory research microscope optics supplied by FAB Medical Supplies Ltd."
                className="w-full h-auto object-contain block filter drop-shadow-[0_8px_24px_rgba(33,64,154,0.06)]"
                width="420"
                height="420"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* 4. Function 01: PROCUREMENT & SUPPLY (Upper-Right below logo) */}
            <div
              className="absolute right-0 top-[150px] xl:top-[165px] max-w-[240px] xl:max-w-[260px] z-10"
              data-aos="fade-left"
              data-aos-delay="200"
            >
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
            <div
              className="absolute left-[16%] xl:left-[17%] top-[370px] xl:top-[390px] max-w-[240px] xl:max-w-[260px] z-10"
              data-aos="fade-right"
              data-aos-delay="300"
            >
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
            <div
              className="absolute left-[44%] xl:left-[43%] top-[450px] xl:top-[475px] max-w-[220px] xl:max-w-[240px] z-10"
              data-aos="fade-up"
              data-aos-delay="350"
            >
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
            <div
              className="absolute right-[4%] xl:right-[6%] top-[450px] xl:top-[475px] max-w-[230px] xl:max-w-[250px] z-10"
              data-aos="fade-left"
              data-aos-delay="400"
            >
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
                width="36"
                height="37"
                loading="lazy"
                decoding="async"
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
                width="340"
                height="340"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Four Responsive Capability Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {/* Function 01 */}
              <div className="space-y-1.5 border-l-2 border-[#21409A] pl-3.5 bg-slate-50/50 py-2.5 pr-2">
                <div className="flex items-center space-x-2.5 mb-1">
                  <span className="text-sm font-bold text-[#21409A]">01</span>
                  <span className="w-6 h-[1.5px] bg-[#93C5FD]" aria-hidden="true" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0F172A]">
                  PROCUREMENT &amp; SUPPLY
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Medical equipment, instruments and reagents.
                </p>
              </div>

              {/* Function 02 */}
              <div className="space-y-1.5 border-l-2 border-[#21409A] pl-3.5 bg-slate-50/50 py-2.5 pr-2">
                <div className="flex items-center space-x-2.5 mb-1">
                  <span className="text-sm font-bold text-[#21409A]">02</span>
                  <span className="w-6 h-[1.5px] bg-[#93C5FD]" aria-hidden="true" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0F172A]">
                  MARKETING &amp; SALES
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Supporting the marketing and sales of medical products and equipment.
                </p>
              </div>

              {/* Function 03 */}
              <div className="space-y-1.5 border-l-2 border-[#21409A] pl-3.5 bg-slate-50/50 py-2.5 pr-2">
                <div className="flex items-center space-x-2.5 mb-1">
                  <span className="text-sm font-bold text-[#21409A]">03</span>
                  <span className="w-6 h-[1.5px] bg-[#93C5FD]" aria-hidden="true" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0F172A]">
                  DELIVERY
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Delivery of medical supplies and equipment.
                </p>
              </div>

              {/* Function 04 */}
              <div className="space-y-1.5 border-l-2 border-[#21409A] pl-3.5 bg-slate-50/50 py-2.5 pr-2">
                <div className="flex items-center space-x-2.5 mb-1">
                  <span className="text-sm font-bold text-[#21409A]">04</span>
                  <span className="w-6 h-[1.5px] bg-[#93C5FD]" aria-hidden="true" />
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
                width="36"
                height="37"
                loading="lazy"
                decoding="async"
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
                width="310"
                height="310"
                loading="lazy"
                decoding="async"
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
                width="335"
                height="220"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* 5. Item 03: CRITICAL CARE (Mid-Right) */}
            {/* Soft Arch / Capsule Photographic Crop */}
            <div className="absolute left-[52%] xl:left-[53%] top-[305px] xl:top-[315px] w-[215px] h-[265px] xl:w-[245px] xl:h-[300px] rounded-t-[120px] rounded-b-[40px] xl:rounded-t-[140px] xl:rounded-b-[50px] overflow-hidden border-4 border-white shadow-[0_16px_36px_rgba(33,64,154,0.08)] ring-1 ring-slate-100 z-10">
              <img
                src={categoryCriticalImg}
                alt="Critical care patient monitoring and life support systems supplied by FAB Medical Supplies Ltd."
                className="w-full h-full object-cover object-center block"
                width="245"
                height="300"
                loading="lazy"
                decoding="async"
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
                width="315"
                height="210"
                loading="lazy"
                decoding="async"
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
                  width="32"
                  height="33"
                  loading="lazy"
                  decoding="async"
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
                  width="224"
                  height="224"
                  loading="lazy"
                  decoding="async"
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
                  width="272"
                  height="176"
                  loading="lazy"
                  decoding="async"
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
                  width="208"
                  height="256"
                  loading="lazy"
                  decoding="async"
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
                  width="256"
                  height="176"
                  loading="lazy"
                  decoding="async"
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

      {/* Section 5: CLINICAL ENVIRONMENTS - Approved Design 2 Full-Bleed Image Gallery with Captions */}
      <section
        className="bg-white border-b border-border py-16 sm:py-20 lg:py-24 xl:py-28 relative overflow-hidden"
        aria-labelledby="clinical-environments-heading"
      >
        <Container className="max-w-7xl relative">
          {/* SECTION HEADER: Dual-Column Composition (Approved Design 2 Header) */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
            <div className="max-w-2xl" data-aos="fade-right">
              {/* Eyebrow with Red Rule */}
              <div className="flex items-center space-x-2.5 mb-4 sm:mb-5">
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] text-[#21409A]">
                  CLINICAL ENVIRONMENTS
                </span>
                <span className="w-7 h-[2px] bg-[#E11D48] rounded-full inline-block" aria-hidden="true" />
              </div>

              {/* Dominant Headline */}
              <h2
                id="clinical-environments-heading"
                className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold uppercase tracking-tight text-[#0F172A] leading-[1.08]"
              >
                REAL ENVIRONMENTS.<br />
                LASTING IMPACT.
              </h2>
            </div>

            {/* Supporting Introduction */}
            <div className="max-w-md lg:max-w-lg lg:pb-1" data-aos="fade-left" data-aos-delay="100">
              <p className="text-xs sm:text-sm lg:text-[15px] text-slate-600 leading-relaxed font-normal">
                FAB supplies medical equipment, instruments and reagents across the environments where care happens — from general wards to laboratories and theatre rooms.
              </p>
            </div>
          </div>

          {/* DESIGN 2 GALLERY: Featured Large Image with Captions + Companion Cards Below */}
          <div className="space-y-5 sm:space-y-6" data-aos="fade-up" data-aos-duration="800">
            {/* 1. Large Featured Full-Bleed Environment Card */}
            <div
              className="relative w-full aspect-[16/10] sm:aspect-[2/1] lg:aspect-[2.35/1] overflow-hidden rounded-sm bg-slate-900 group shadow-[0_12px_36px_rgba(15,23,42,0.08)] cursor-pointer"
              onClick={() => onNavigate && onNavigate('products', activeEnv.categoryId)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onNavigate && onNavigate('products', activeEnv.categoryId);
                }
              }}
            >
              {/* High-Resolution Photography */}
              <img
                key={activeEnv.id}
                src={activeEnv.image}
                alt={activeEnv.alt}
                className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
                width="1200"
                height="510"
                loading="lazy"
                decoding="async"
              />

              {/* Subtle Vignette for Photography Clarity & Caption Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Bottom-Left Overlay Caption (Design 2 Reference) */}
              <div className="absolute left-6 sm:left-8 lg:left-10 bottom-6 sm:bottom-8 lg:bottom-10 z-10 text-left pointer-events-none max-w-md">
                <div className="text-xs sm:text-sm font-mono font-medium text-white/90 mb-1">
                  {activeEnv.num}
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase tracking-tight text-white leading-tight mb-1.5 drop-shadow-sm">
                  {activeEnv.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-normal tracking-wide">
                  {activeEnv.tags}
                </p>
              </div>

              {/* Bottom-Right Circular Button with Arrow (Design 2 Reference) */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveEnvIndex((prev) => (prev + 1) % clinicalEnvironments.length);
                }}
                aria-label="Next clinical environment"
                className="absolute right-6 sm:right-8 lg:right-10 bottom-6 sm:bottom-8 lg:bottom-10 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#0F172A] hover:bg-[#21409A] hover:text-white flex items-center justify-center shadow-lg transition-all duration-300 transform group-hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 fill-current transform transition-transform group-hover:translate-x-0.5"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {/* 2. Directly Below: Two Companion Environment Cards (Design 2 Reference) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-1">
              {companionEnvs.map((env) => (
                <div
                  key={env.id}
                  onClick={() => {
                    const targetIndex = clinicalEnvironments.findIndex((e) => e.id === env.id);
                    if (targetIndex !== -1) setActiveEnvIndex(targetIndex);
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      const targetIndex = clinicalEnvironments.findIndex((item) => item.id === env.id);
                      if (targetIndex !== -1) setActiveEnvIndex(targetIndex);
                    }
                  }}
                  className="flex items-center space-x-4 sm:space-x-5 p-2.5 sm:p-3 rounded-sm border border-slate-100 hover:border-slate-200/90 hover:bg-slate-50/80 transition-all duration-300 group cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-[#21409A]"
                >
                  {/* Left Full Square Thumbnail Image */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-28 md:h-28 lg:w-32 lg:h-32 aspect-square overflow-hidden rounded-sm flex-shrink-0 bg-slate-100 shadow-sm border border-slate-200/80">
                    <img
                      src={env.thumbnail}
                      alt={env.alt}
                      className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-out group-hover:scale-105"
                      width="128"
                      height="128"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Right Typography Block */}
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] sm:text-xs font-mono font-bold text-[#21409A] mb-0.5">
                      {env.num}
                    </div>
                    <h4 className="text-sm sm:text-base lg:text-lg font-bold uppercase tracking-tight text-[#0F172A] leading-tight group-hover:text-[#21409A] transition-colors">
                      {env.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-normal mt-1 leading-snug">
                      {env.tags}
                    </p>
                  </div>
                </div>
              ))}
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
                  width="32"
                  height="33"
                  loading="lazy"
                  decoding="async"
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
          {/* MOBILE & TABLET EDITORIAL PHOTO-BREAK COMPOSITION (<lg) */}
          {/* ======================================================== */}
          <div className="block lg:hidden space-y-10 sm:space-y-12 max-w-2xl">
            {/* LEVEL 01: HEALTHCARE ORGANIZATIONS */}
            <div className="space-y-6 sm:space-y-8">
              {/* Level 01 Section Divider */}
              <div className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#21409A] font-bold flex items-center space-x-2 border-b border-slate-200 pb-2.5">
                <span className="w-2.5 h-[2px] bg-[#21409A]" aria-hidden="true" />
                <span>LEVEL 01 // HEALTHCARE ORGANIZATIONS</span>
              </div>

              {/* IMAGE PAIR 01: Hospital & Laboratory (Square Photos Side-by-Side) */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-1">
                <div className="aspect-square relative rounded-lg overflow-hidden border border-slate-200/90 shadow-sm bg-slate-100 select-none">
                  <img
                    src={whoHospitalImg}
                    alt="Mulago Specialised Hospital healthcare infrastructure"
                    className="w-full h-full object-cover"
                    width="320"
                    height="320"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden border border-slate-200/90 shadow-sm bg-slate-100 select-none">
                  <img
                    src={whoLabImg}
                    alt="Clinical diagnostic testing laboratory environment"
                    className="w-full h-full object-cover"
                    width="320"
                    height="320"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Level 01 Content Group A (01, 02) */}
              <div className="space-y-6 sm:space-y-7 pt-1">
                {/* 01 */}
                <div className="space-y-1.5 max-w-lg">
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#21409A]">
                    <span>01</span>
                    <span className="w-8 h-[1.5px] bg-[#93C5FD]" aria-hidden="true" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-[#0F172A] leading-snug">
                    HOSPITALS &amp; HEALTH FACILITIES
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Healthcare facilities requiring medical equipment, instruments and supplies.
                  </p>
                </div>

                {/* 02 */}
                <div className="space-y-1.5 max-w-lg">
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#21409A]">
                    <span>02</span>
                    <span className="w-8 h-[1.5px] bg-[#93C5FD]" aria-hidden="true" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-[#0F172A] leading-snug">
                    LABORATORIES &amp; DIAGNOSTIC CENTRES
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Facilities using laboratory equipment, reagents and diagnostic supplies.
                  </p>
                </div>
              </div>

              {/* IMAGE PAIR 02: Clinic & Pharmacy (Square Photos Side-by-Side Visual Break) */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
                <div className="aspect-square relative rounded-lg overflow-hidden border border-slate-200/90 shadow-sm bg-slate-100 select-none">
                  <img
                    src={whoClinicImg}
                    alt="Modern clinical examination and consultation environment"
                    className="w-full h-full object-cover"
                    width="320"
                    height="320"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden border border-slate-200/90 shadow-sm bg-slate-100 select-none">
                  <img
                    src={whoPharmacyImg}
                    alt="Professional healthcare pharmacy and dispensary"
                    className="w-full h-full object-cover"
                    width="320"
                    height="320"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Level 01 Content Group B (03, 04) */}
              <div className="space-y-6 sm:space-y-7 pt-1">
                {/* 03 */}
                <div className="space-y-1.5 max-w-lg">
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#21409A]">
                    <span>03</span>
                    <span className="w-8 h-[1.5px] bg-[#93C5FD]" aria-hidden="true" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-[#0F172A] leading-snug">
                    CLINICS &amp; MEDICAL PRACTICES
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Healthcare practices requiring equipment and general medical supplies.
                  </p>
                </div>

                {/* 04 */}
                <div className="space-y-1.5 max-w-lg">
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#21409A]">
                    <span>04</span>
                    <span className="w-8 h-[1.5px] bg-[#93C5FD]" aria-hidden="true" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-[#0F172A] leading-snug">
                    GOVERNMENT HEALTH BODIES
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Public-sector health organizations involved in healthcare delivery.
                  </p>
                </div>
              </div>

              {/* IMAGE PAIR 03: Medical Care & Diagnostic Facilities (Square Photos Side-by-Side Visual Break) */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
                <div className="aspect-square relative rounded-lg overflow-hidden border border-slate-200/90 shadow-sm bg-slate-100 select-none">
                  <img
                    src={whoMedCareImg}
                    alt="Medical care and healthcare supply delivery"
                    className="w-full h-full object-cover"
                    width="320"
                    height="320"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden border border-slate-200/90 shadow-sm bg-slate-100 select-none">
                  <img
                    src={whoLabDiagnosticImg}
                    alt="Healthcare diagnostic equipment and laboratory facility"
                    className="w-full h-full object-cover"
                    width="320"
                    height="320"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Level 01 Content Group C (05, 06) */}
              <div className="space-y-6 sm:space-y-7 pt-1">
                {/* 05 */}
                <div className="space-y-1.5 max-w-lg">
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#21409A]">
                    <span>05</span>
                    <span className="w-8 h-[1.5px] bg-[#93C5FD]" aria-hidden="true" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-[#0F172A] leading-snug">
                    PHARMACIES
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Pharmacies within the wider healthcare supply network.
                  </p>
                </div>

                {/* 06 */}
                <div className="space-y-1.5 max-w-lg">
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#21409A]">
                    <span>06</span>
                    <span className="w-8 h-[1.5px] bg-[#93C5FD]" aria-hidden="true" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-[#0F172A] leading-snug">
                    HEALTHCARE INSTITUTIONS &amp; ORGANIZATIONS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Organizations supporting healthcare delivery and related services.
                  </p>
                </div>
              </div>
            </div>

            {/* LEVEL 02: PEOPLE AT THE CENTRE OF HEALTHCARE */}
            <div className="space-y-6 sm:space-y-8 pt-4 border-t border-slate-200/80">
              {/* Level 02 Section Divider */}
              <div className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#21409A] font-bold flex items-center space-x-2 border-b border-slate-200 pb-2.5">
                <span className="w-2.5 h-[2px] bg-[#E11D48]" aria-hidden="true" />
                <span>LEVEL 02 // PEOPLE AT THE CENTRE OF HEALTHCARE</span>
              </div>

              {/* Level 02 Content (07, 08) */}
              <div className="space-y-6 sm:space-y-7 pt-1">
                {/* 07 */}
                <div className="space-y-1.5 max-w-lg">
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#21409A]">
                    <span>07</span>
                    <span className="w-8 h-[1.5px] bg-[#E11D48]" aria-hidden="true" />
                    <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400">CLINICAL PRACTICE</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-[#0F172A] leading-snug">
                    INDIVIDUAL HEALTHCARE PROFESSIONALS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Professionals working within clinical and healthcare environments.
                  </p>
                </div>

                {/* 08 */}
                <div className="space-y-1.5 max-w-lg">
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#21409A]">
                    <span>08</span>
                    <span className="w-8 h-[1.5px] bg-[#E11D48]" aria-hidden="true" />
                    <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400">END BENEFICIARIES</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-[#0F172A] leading-snug">
                    INDIVIDUALS &amp; PATIENTS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    People who ultimately benefit from the healthcare services supported by reliable medical supply.
                  </p>
                </div>
              </div>

              {/* IMAGE PAIR 04: Hospital Inpatient Beds & Patient Recovery Room (Clean Authentic Equipment & Setting) */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
                <div className="aspect-square relative rounded-lg overflow-hidden border border-slate-200/90 shadow-sm bg-slate-100 select-none">
                  <img
                    src={whoBedsImg}
                    alt="Hospital inpatient beds and patient ward infrastructure"
                    className="w-full h-full object-cover"
                    width="320"
                    height="320"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden border border-slate-200/90 shadow-sm bg-slate-100 select-none">
                  <img
                    src={whoPatientImg}
                    alt="Patient recovery room and authentic inpatient care setting"
                    className="w-full h-full object-cover"
                    width="320"
                    height="320"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
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

      {/* Section 7: SERVICES - Approved Premium Modern Healthcare-Corporate Aesthetic */}
      <section
        className="bg-white border-b border-border py-16 sm:py-20 lg:py-24 xl:py-28 relative overflow-hidden"
        aria-labelledby="services-heading"
      >
        <Container className="relative max-w-7xl">
          {/* ======================================================== */}
          {/* 1. HERO VISUAL BLOCK: Operating Theatre + Editorial Intro */}
          {/* ======================================================== */}
          <div
            className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#FAFCFE] border border-slate-200/90 shadow-[0_8px_32px_rgba(15,23,42,0.05)] min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] flex items-center"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            {/* Background Operating Theatre Photograph spanning right portion */}
            <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[85%] md:w-[76%] lg:w-[70%] xl:w-[68%] h-full pointer-events-none select-none z-0">
              <img
                src={serviceHeroTheatreImg}
                alt="Modern clinical operating theatre with healthcare professional interacting with patient monitoring equipment"
                className="w-full h-full object-cover object-right block"
                width="1024"
                height="365"
                loading="lazy"
                decoding="async"
              />
              {/* Soft Light Gradient on Left to ensure 100% typography legibility without heavy blue overlays */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to right, #FAFCFE 0%, #FAFCFE 18%, rgba(250, 252, 254, 0.94) 34%, rgba(250, 252, 254, 0.5) 58%, transparent 82%)',
                }}
                aria-hidden="true"
              />
            </div>

            {/* Editorial Content on Left */}
            <div className="relative z-10 p-6 sm:p-10 lg:p-14 xl:p-16 max-w-xl lg:max-w-2xl">
              {/* Eyebrow with red accent line */}
              <div className="flex items-center space-x-2.5 mb-4 sm:mb-5">
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.18em] text-[#0F172A]">
                  SERVICES
                </span>
                <span className="w-8 h-[2px] bg-[#E11D48] rounded-full inline-block" aria-hidden="true" />
              </div>

              {/* Main Headline */}
              <h2
                id="services-heading"
                className="text-3xl sm:text-4xl lg:text-[48px] xl:text-[54px] font-black uppercase tracking-tight text-[#0F172A] leading-[1.04] mb-4 sm:mb-5"
              >
                FROM SUPPLY<br />
                TO SERVICE.
              </h2>

              {/* Supporting Paragraph */}
              <p className="text-xs sm:text-sm lg:text-[15px] text-slate-600 leading-relaxed font-normal max-w-md">
                FAB Medical Supplies Ltd. supports healthcare providers through the procurement, marketing, delivery, servicing and repair of medical equipment, instruments and reagents.
              </p>
            </div>
          </div>

          {/* ======================================================== */}
          {/* 2. HORIZONTAL SERVICE CAROUSEL: 4 Cards with Nav Arrows  */}
          {/* ======================================================== */}
          <div className="relative mt-8 sm:mt-10 lg:mt-12" data-aos="fade-up" data-aos-duration="900" data-aos-delay="150">
            {/* Left Circular Navigation Arrow */}
            <button
              type="button"
              onClick={handlePrevService}
              aria-label="Previous service"
              className="hidden xl:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(15,23,42,0.08)] text-slate-600 hover:text-[#21409A] hover:border-[#21409A] hover:scale-105 active:scale-95 items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#21409A] focus:ring-offset-2"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Circular Navigation Arrow */}
            <button
              type="button"
              onClick={handleNextService}
              aria-label="Next service"
              className="hidden xl:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(15,23,42,0.08)] text-slate-600 hover:text-[#21409A] hover:border-[#21409A] hover:scale-105 active:scale-95 items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#21409A] focus:ring-offset-2"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* 4 Cards Grid (Swipeable on mobile, 4-column on desktop) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
              {servicesList.map((service, idx) => {
                const isActive = idx === activeServiceIndex;
                return (
                  <div
                    key={service.id}
                    onClick={() => setActiveServiceIndex(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveServiceIndex(idx);
                      }
                    }}
                    aria-label={`Service ${service.num}: ${service.title}`}
                    className={`flex flex-col justify-between rounded-xl overflow-hidden bg-white cursor-pointer transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#21409A] focus:ring-offset-2 ${
                      isActive
                        ? 'border border-[#21409A]/30 shadow-[0_12px_28px_rgba(33,64,154,0.1)] ring-1 ring-[#21409A]/15'
                        : 'border border-slate-200/80 shadow-sm hover:border-slate-300 hover:shadow-md'
                    }`}
                  >
                    {/* Large Photographic Thumbnail */}
                    <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100 relative">
                      <img
                        src={service.image}
                        alt={service.alt}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        width="380"
                        height="238"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    {/* Card Content Block */}
                    <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                      <div>
                        {/* Number with Horizontal Line */}
                        <div className="flex items-center space-x-2 mb-2.5">
                          <span
                            className={`text-xs sm:text-sm font-mono font-bold tracking-wider transition-colors ${
                              isActive ? 'text-[#21409A]' : 'text-[#21409A]/80'
                            }`}
                          >
                            {service.num}
                          </span>
                          <span
                            className={`w-6 h-[1.5px] transition-colors ${
                              isActive ? 'bg-[#21409A]' : 'bg-slate-300'
                            }`}
                            aria-hidden="true"
                          />
                        </div>

                        {/* Service Title */}
                        <h3 className="text-sm sm:text-base font-bold uppercase tracking-tight text-[#0F172A] mb-1.5 leading-snug">
                          {service.title}
                        </h3>

                        {/* Short Description */}
                        <p className="text-xs text-slate-500 leading-relaxed font-normal">
                          {service.description}
                        </p>
                      </div>

                      {/* Subtle Arrow Indicator */}
                      <div className="flex justify-end pt-4">
                        <span
                          className={`text-xs font-bold transition-all duration-300 group-hover:translate-x-1 ${
                            isActive ? 'text-[#21409A]' : 'text-slate-400 group-hover:text-[#21409A]'
                          }`}
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </div>
                    </div>

                    {/* Bottom Blue Accent Underline for Active Card (As shown in target design) */}
                    <div
                      className={`h-[3px] w-full transition-all duration-300 ${
                        isActive ? 'bg-[#21409A]' : 'bg-transparent'
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                );
              })}
            </div>

            {/* Mobile / Tablet Circular Navigation Arrows (< xl) */}
            <div className="flex xl:hidden items-center justify-center space-x-4 mt-6">
              <button
                type="button"
                onClick={handlePrevService}
                aria-label="Previous service"
                className="w-10 h-10 rounded-full bg-white border border-slate-200/90 shadow-sm text-slate-600 hover:text-[#21409A] hover:border-[#21409A] flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#21409A]"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="text-xs font-mono font-bold text-[#21409A]">
                {servicesList[activeServiceIndex].num} / 04
              </div>
              <button
                type="button"
                onClick={handleNextService}
                aria-label="Next service"
                className="w-10 h-10 rounded-full bg-white border border-slate-200/90 shadow-sm text-slate-600 hover:text-[#21409A] hover:border-[#21409A] flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#21409A]"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* ======================================================== */}
          {/* 3. BOTTOM STATEMENT: Quality Suppliers + Accent Line     */}
          {/* ======================================================== */}
          <div
            className="mt-14 sm:mt-18 lg:mt-20 pt-8 border-t border-slate-100 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div>
              {/* Short red horizontal accent line */}
              <span className="w-8 h-[2px] bg-[#E11D48] rounded-full inline-block mb-3.5" aria-hidden="true" />
              {/* Statement */}
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#21409A] leading-tight">
                QUALITY SUPPLIERS.<br />
                HEALTHIER TOMORROWS.
              </h3>
            </div>

            {/* Subtle Technical Architectural Guideline matching target mockup */}
            <div className="hidden sm:flex items-center space-x-3 text-slate-300 select-none pointer-events-none pb-1" aria-hidden="true">
              <span className="w-10 h-[2.5px] bg-[#E11D48] rounded-full inline-block" />
              <svg className="w-24 h-6 text-slate-200" viewBox="0 0 100 24" fill="none">
                <path d="M 0 16 L 55 16 L 75 4 L 100 4" stroke="currentColor" strokeWidth="1.5" />
              </svg>
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
                  width="40"
                  height="41"
                  loading="lazy"
                  decoding="async"
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
                    width="240"
                    height="240"
                    loading="lazy"
                    decoding="async"
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
                  <Link
                    to="/contact"
                    className="group inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-[0.22em] text-[#0F172A] hover:text-[#21409A] transition-colors"
                  >
                    <span>LET'S TALK</span>
                    <span className="text-[#E11D48] font-bold text-sm transition-transform group-hover:translate-x-1.5" aria-hidden="true">
                      →
                    </span>
                  </Link>
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
