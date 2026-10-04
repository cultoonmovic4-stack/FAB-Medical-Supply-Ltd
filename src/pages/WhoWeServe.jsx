import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

// Section 1 & 2 photographic assets
import heroPhotoImg from '../assets/wws-hero-photo.webp';
import envRadiologyImg from '../assets/env_radiology.jpg';
import envOutpatientImg from '../assets/env_outpatient.jpg';
import envEmergencyImg from '../assets/env_emergency.jpg';
import envMaternityImg from '../assets/env_maternity.jpg';
import envTheatreImg from '../assets/env_theatre.jpg';
import envWardImg from '../assets/env_ward.jpg';
import envLabImg from '../assets/env_lab.jpg';
import envUtilityImg from '../assets/env_utility.jpg';

// Section 3 photographic assets (Two Featured Clinical Environments)
import supplyTheatreImg from '../assets/wws-supply-theatre.webp';
import supplyLabImg from '../assets/wws-supply-lab.webp';

// Section 4 photographic assets (Supply Chain Pipeline)
import chainSuppliersImg from '../assets/chain_suppliers.webp';
import chainPartnersImg from '../assets/chain_partners.webp';
import chainHospitalsImg from '../assets/chain_hospitals.webp';
import ugandaMapImg from '../assets/ecosystem-uganda-map.webp';

/**
 * Who We Serve Page — FAB Medical Supplies Ltd.
 * 
 * Complete implementation:
 * - Section 1: Who We Serve Hero
 * - Section 2: Healthcare Environment / Ecosystem (Enlarged Parallelograms)
 * - Section 3: What We Supply Across Healthcare (Design D — Supply Network)
 * - Section 4: Connected to the Healthcare Supply Chain (Design D — Pipeline)
 */
export default function WhoWeServe() {
  // Hero environment labels
  const heroLeftLabels = [
    { name: 'RADIOLOGY & IMAGING' },
    { name: 'MATERNITY & PEDIATRICS' },
    { name: 'THEATRE' },
  ];

  const heroRightLabels = [
    { name: 'OUTPATIENT & CONSULTATION' },
    { name: 'EMERGENCY & ICU' },
    { name: 'LABORATORY' },
  ];

  // Section 2: Documented Clinical Environment Nodes
  const environmentNodes = [
    {
      id: 'radiology',
      title: 'RADIOLOGY & IMAGING',
      image: envRadiologyImg,
      alt: 'Clinical radiology and diagnostic imaging equipment',
    },
    {
      id: 'outpatient',
      title: 'OUTPATIENT & CONSULTATION',
      image: envOutpatientImg,
      alt: 'Outpatient consultation room and clinical examination environment',
    },
    {
      id: 'emergency',
      title: 'EMERGENCY & ICU',
      image: envEmergencyImg,
      alt: 'Electrocardiograph ECG monitor and intensive care diagnostic telemetry',
    },
    {
      id: 'maternity',
      title: 'MATERNITY & PEDIATRICS',
      image: envMaternityImg,
      alt: 'Maternity and pediatric care ward environment',
    },
    {
      id: 'lab',
      title: 'LABORATORY',
      image: envLabImg,
      alt: 'Clinical diagnostic laboratory and testing facility',
    },
    {
      id: 'theatre',
      title: 'THEATRE',
      image: envTheatreImg,
      alt: 'Surgical operating theatre with operating bed and shadowless lamp',
    },
    {
      id: 'ward',
      title: 'GENERAL WARD',
      image: envWardImg,
      alt: 'General inpatient hospital ward beds and clinical care infrastructure',
    },
    {
      id: 'utility',
      title: 'SUPPORTING / UTILITY SERVICES',
      image: envUtilityImg,
      alt: 'Clinical utility equipment and healthcare support machinery',
    },
  ];

  // Section 3: 9 Clinical Departments Directory
  const supplyDepartments = [
    { num: '01', id: 'radiology-imaging', name: 'RADIOLOGY & IMAGING', desc: 'Fixed & mobile X-ray, CT scanners, ultrasound' },
    { num: '02', id: 'opd-consultation', name: 'OUTPATIENT & CONSULTATION', desc: 'Examination couches, diagnostic sets, BP monitors' },
    { num: '03', id: 'emergency-icu', name: 'EMERGENCY & ICU', desc: 'Critical care monitors, ventilators, oxygen systems' },
    { num: '04', id: 'maternity-pediatrics', name: 'MATERNITY & PEDIATRICS', desc: 'Infant incubators, warmers, fetal monitors' },
    { num: '05', id: 'laboratory', name: 'LABORATORY', desc: 'Clinical microscopes, diagnostic analyzers, centrifuges' },
    { num: '06', id: 'theatre-room', name: 'THEATRE ROOM', desc: 'Anesthesia machines, operating tables, electrosurgical units' },
    { num: '07', id: 'hospital-furniture', name: 'GENERAL HOSPITAL FURNITURE', desc: 'Ward beds, bedside lockers, stretchers, wheelchairs' },
    { num: '08', id: 'specialized-departments', name: 'SPECIALIZED DEPARTMENTS', desc: 'Dialysis machines, dental chair units, ENT units' },
    { num: '09', id: 'utility-services', name: 'SUPPORTING / UTILITY SERVICES', desc: 'Autoclave sterilizers, pharmacy fridges, waste bins' },
  ];

  return (
    <div className="bg-white min-h-screen text-[#0F172A] selection:bg-[#21409A] selection:text-white">
      {/* ========================================================
          SECTION 1 — WHO WE SERVE HERO
          ======================================================== */}
      <section
        className="relative bg-[#F4F8FC] border-b border-slate-200/90 pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden"
        aria-labelledby="wws-hero-heading"
      >
        <Container className="relative max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
            {/* Primary Area: Eyebrow, Large H1 & Supporting Paragraph (Col 5) */}
            <div
              className="lg:col-span-5 space-y-6 z-10"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              {/* Eyebrow */}
              <div className="flex items-center space-x-2.5">
                <span className="w-5 h-[2px] bg-[#21409A]" aria-hidden="true" />
                <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#21409A] uppercase">
                  AUDIENCE &amp; HEALTHCARE ENVIRONMENTS
                </span>
              </div>

              {/* Main Heading */}
              <h1
                id="wws-hero-heading"
                className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-black text-[#0F172A] tracking-tight leading-[1.08] uppercase"
              >
                MEDICAL SUPPLIES <br />
                ACROSS THE <br />
                HEALTHCARE <br />
                <span className="text-[#21409A]">ENVIRONMENT</span>
              </h1>

              {/* Supporting Paragraph */}
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-md">
                FAB Medical Supplies Ltd. supplies medical equipment, instruments and reagents across a 
                range of healthcare environments and clinical departments in Uganda.
              </p>
            </div>

            {/* Center Area: Diagonal Rule + 2-Column Environment Label Index (Col 4) */}
            <div
              className="lg:col-span-4 flex items-center space-x-6 sm:space-x-8 z-10"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="150"
            >
              {/* Slanted Connecting Rule (SVG) */}
              <div className="hidden lg:block w-8 h-48 flex-shrink-0" aria-hidden="true">
                <svg className="w-full h-full" viewBox="0 0 32 160" fill="none">
                  <line x1="8" y1="152" x2="28" y2="8" stroke="#21409A" strokeWidth="1.5" />
                </svg>
              </div>

              {/* 2-Column Labels Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-7 sm:gap-y-8 flex-1">
                {/* Column 1 */}
                <div className="space-y-6 sm:space-y-7">
                  {heroLeftLabels.map((lbl, idx) => (
                    <div
                      key={lbl.name}
                      className="space-y-1"
                      data-aos="fade-up"
                      data-aos-delay={100 + idx * 80}
                    >
                      <span className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-[0.14em] text-[#21409A] block leading-tight">
                        {lbl.name}
                      </span>
                      <span className="w-5 h-[1.5px] bg-[#21409A] block" aria-hidden="true" />
                    </div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="space-y-6 sm:space-y-7">
                  {heroRightLabels.map((lbl, idx) => (
                    <div
                      key={lbl.name}
                      className="space-y-1"
                      data-aos="fade-up"
                      data-aos-delay={150 + idx * 80}
                    >
                      <span className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-[0.14em] text-[#21409A] block leading-tight">
                        {lbl.name}
                      </span>
                      <span className="w-5 h-[1.5px] bg-[#21409A] block" aria-hidden="true" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Area: Partially Cropped Editorial Clinical Photographic Fragment (Col 3) */}
            <div
              className="lg:col-span-3 flex justify-end relative"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="250"
            >
              <div className="relative w-56 sm:w-64 lg:w-full max-w-[320px] xl:max-w-[360px] h-64 sm:h-80 lg:h-96 overflow-hidden flex items-center justify-end select-none">
                <img
                  src={heroPhotoImg}
                  alt="Clinical healthcare environment perspective with modern hospital illumination"
                  className="w-full h-full object-cover object-right block drop-shadow-sm"
                  width="360"
                  height="384"
                  fetchpriority="high"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          SECTION 2 — HEALTHCARE ENVIRONMENT / ECOSYSTEM
          ======================================================== */}
      <section
        className="py-16 lg:py-24 bg-white border-b border-slate-200 overflow-hidden relative"
        aria-labelledby="ecosystem-heading"
      >
        <Container className="max-w-7xl">
          {/* Section Introduction */}
          <div
            className="max-w-2xl mb-12 lg:mb-16 space-y-3"
            data-aos="fade-up"
            data-aos-duration="850"
          >
            <div className="flex items-center space-x-2">
              <span className="w-5 h-[2px] bg-[#21409A]" aria-hidden="true" />
              <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#21409A] uppercase">
                HEALTHCARE ENVIRONMENTS
              </span>
            </div>
            <h2
              id="ecosystem-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight uppercase"
            >
              Equipment for Different <br className="hidden sm:inline" />
              Clinical Settings
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              FAB Medical Supplies Ltd. supplies equipment, instruments and reagents across a range 
              of clinical departments and healthcare environments.
            </p>
          </div>

          {/* ECOSYSTEM FIELD (DESKTOP & TABLET LANDSCAPE VIEW) */}
          <div className="relative hidden md:block w-full mx-auto py-10 lg:py-14">
            {/* SVG Connecting Guidelines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
              viewBox="0 0 1100 640"
              fill="none"
              aria-hidden="true"
            >
              <line x1="550" y1="320" x2="420" y2="130" stroke="#93C5FD" strokeWidth="1.2" strokeDasharray="3 3" />
              <line x1="550" y1="320" x2="620" y2="130" stroke="#93C5FD" strokeWidth="1.2" strokeDasharray="3 3" />
              <line x1="550" y1="320" x2="820" y2="130" stroke="#93C5FD" strokeWidth="1.2" strokeDasharray="3 3" />
              <line x1="550" y1="320" x2="310" y2="320" stroke="#93C5FD" strokeWidth="1.2" strokeDasharray="3 3" />
              <line x1="550" y1="320" x2="790" y2="320" stroke="#93C5FD" strokeWidth="1.2" strokeDasharray="3 3" />
              <line x1="550" y1="320" x2="370" y2="510" stroke="#93C5FD" strokeWidth="1.2" strokeDasharray="3 3" />
              <line x1="550" y1="320" x2="590" y2="510" stroke="#93C5FD" strokeWidth="1.2" strokeDasharray="3 3" />
              <line x1="550" y1="320" x2="820" y2="510" stroke="#93C5FD" strokeWidth="1.2" strokeDasharray="3 3" />
            </svg>

            {/* Central Ecosystem Hub */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="relative w-40 h-40 rounded-full border border-blue-200 bg-white shadow-[0_12px_32px_rgba(33,64,154,0.08)] flex flex-col items-center justify-center p-4 text-center">
                <div className="absolute inset-[-7px] rounded-full border border-dashed border-blue-200/80" aria-hidden="true" />
                <span className="text-[#E11D48] text-sm font-mono font-bold leading-none mb-1.5 select-none" aria-hidden="true">+</span>
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#21409A] leading-tight block">
                  HEALTHCARE <br />
                  ENVIRONMENTS
                </span>
              </div>
            </div>

            {/* 3-Tier Grid System */}
            <div className="space-y-24 lg:space-y-28 xl:space-y-32 relative z-10">
              {/* TOP TIER */}
              <div className="grid grid-cols-12 gap-4 lg:gap-6 items-center">
                <div
                  className="col-span-4 flex items-center space-x-3.5 group"
                  data-aos="fade-right"
                  data-aos-duration="850"
                  data-aos-delay="100"
                >
                  <div className="w-40 sm:w-48 lg:w-56 xl:w-60 aspect-[16/9] flex-shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.03] overflow-hidden rounded-md border border-slate-200/80 bg-slate-100">
                    <img src={envRadiologyImg} alt="Radiology & Imaging" className="w-full h-full object-cover block select-none" width="240" height="135" loading="lazy" decoding="async" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#21409A] block leading-tight">
                      RADIOLOGY &amp; <br />IMAGING
                    </span>
                    <span className="w-6 h-[1.5px] bg-[#21409A] block" aria-hidden="true" />
                  </div>
                </div>

                <div
                  className="col-span-4 flex items-center space-x-3.5 pl-2 lg:pl-4 group"
                  data-aos="fade-down"
                  data-aos-duration="850"
                  data-aos-delay="150"
                >
                  <div className="w-40 sm:w-48 lg:w-56 xl:w-60 aspect-[16/9] flex-shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.03] overflow-hidden rounded-md border border-slate-200/80 bg-slate-100">
                    <img src={envOutpatientImg} alt="Outpatient & Consultation" className="w-full h-full object-cover block select-none" width="240" height="135" loading="lazy" decoding="async" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#21409A] block leading-tight">
                      OUTPATIENT &amp; <br />CONSULTATION
                    </span>
                    <span className="w-6 h-[1.5px] bg-[#21409A] block" aria-hidden="true" />
                  </div>
                </div>

                <div
                  className="col-span-4 flex items-center space-x-3.5 pl-2 lg:pl-4 group"
                  data-aos="fade-left"
                  data-aos-duration="850"
                  data-aos-delay="200"
                >
                  <div className="w-40 sm:w-48 lg:w-56 xl:w-60 aspect-[16/9] flex-shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.03] overflow-hidden rounded-md border border-slate-200/80 bg-slate-100">
                    <img src={envEmergencyImg} alt="Emergency & ICU" className="w-full h-full object-cover block select-none" width="240" height="135" loading="lazy" decoding="async" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#21409A] block leading-tight">
                      EMERGENCY &amp; <br />ICU
                    </span>
                    <span className="w-6 h-[1.5px] bg-[#21409A] block" aria-hidden="true" />
                  </div>
                </div>
              </div>

              {/* MIDDLE TIER */}
              <div className="grid grid-cols-12 gap-4 lg:gap-6 items-center">
                <div
                  className="col-span-4 flex items-center space-x-3.5 group"
                  data-aos="fade-right"
                  data-aos-duration="850"
                  data-aos-delay="250"
                >
                  <div className="w-40 sm:w-48 lg:w-56 xl:w-60 aspect-[16/9] flex-shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.03] overflow-hidden rounded-md border border-slate-200/80 bg-slate-100">
                    <img src={envMaternityImg} alt="Maternity & Pediatrics" className="w-full h-full object-cover block select-none" width="240" height="135" loading="lazy" decoding="async" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#21409A] block leading-tight">
                      MATERNITY &amp; <br />PEDIATRICS
                    </span>
                    <span className="w-6 h-[1.5px] bg-[#21409A] block" aria-hidden="true" />
                  </div>
                </div>

                <div className="col-span-4 pointer-events-none" />

                <div
                  className="col-span-4 flex items-center space-x-3.5 pl-2 lg:pl-4 group"
                  data-aos="fade-left"
                  data-aos-duration="850"
                  data-aos-delay="300"
                >
                  <div className="w-40 sm:w-48 lg:w-56 xl:w-60 aspect-[16/9] flex-shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.03] overflow-hidden rounded-md border border-slate-200/80 bg-slate-100">
                    <img src={envLabImg} alt="Laboratory" className="w-full h-full object-cover block select-none" width="240" height="135" loading="lazy" decoding="async" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#21409A] block leading-tight">
                      LABORATORY
                    </span>
                    <span className="w-6 h-[1.5px] bg-[#21409A] block" aria-hidden="true" />
                  </div>
                </div>
              </div>

              {/* BOTTOM TIER */}
              <div className="grid grid-cols-12 gap-4 lg:gap-6 items-center">
                <div
                  className="col-span-4 flex items-center space-x-3.5 group"
                  data-aos="fade-right"
                  data-aos-duration="850"
                  data-aos-delay="350"
                >
                  <div className="w-40 sm:w-48 lg:w-56 xl:w-60 aspect-[16/9] flex-shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.03] overflow-hidden rounded-md border border-slate-200/80 bg-slate-100">
                    <img src={envTheatreImg} alt="Theatre" className="w-full h-full object-cover block select-none" width="240" height="135" loading="lazy" decoding="async" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#21409A] block leading-tight">
                      THEATRE
                    </span>
                    <span className="w-6 h-[1.5px] bg-[#21409A] block" aria-hidden="true" />
                  </div>
                </div>

                <div
                  className="col-span-4 flex items-center space-x-3.5 pl-2 lg:pl-4 group"
                  data-aos="fade-up"
                  data-aos-duration="850"
                  data-aos-delay="400"
                >
                  <div className="w-40 sm:w-48 lg:w-56 xl:w-60 aspect-[16/9] flex-shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.03] overflow-hidden rounded-md border border-slate-200/80 bg-slate-100">
                    <img src={envWardImg} alt="General Ward" className="w-full h-full object-cover block select-none" width="240" height="135" loading="lazy" decoding="async" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#21409A] block leading-tight">
                      GENERAL WARD
                    </span>
                    <span className="w-6 h-[1.5px] bg-[#21409A] block" aria-hidden="true" />
                  </div>
                </div>

                <div
                  className="col-span-4 flex items-center space-x-3.5 pl-2 lg:pl-4 group"
                  data-aos="fade-left"
                  data-aos-duration="850"
                  data-aos-delay="450"
                >
                  <div className="w-40 sm:w-48 lg:w-56 xl:w-60 aspect-[16/9] flex-shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.03] overflow-hidden rounded-md border border-slate-200/80 bg-slate-100">
                    <img src={envUtilityImg} alt="Supporting / Utility Services" className="w-full h-full object-cover block select-none" width="240" height="135" loading="lazy" decoding="async" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#21409A] block leading-tight">
                      SUPPORTING / <br />UTILITY SERVICES
                    </span>
                    <span className="w-6 h-[1.5px] bg-[#21409A] block" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RESPONSIVE MOBILE SEQUENCE */}
          <div className="block md:hidden space-y-8 pt-4">
            <div
              className="w-44 h-44 mx-auto rounded-full border border-blue-200 bg-white shadow-sm flex flex-col items-center justify-center p-4 text-center relative mb-8"
              data-aos="zoom-in"
              data-aos-duration="850"
            >
              <div className="absolute inset-[-5px] rounded-full border border-dashed border-blue-200" aria-hidden="true" />
              <span className="text-[#E11D48] text-sm font-mono font-bold leading-none mb-1 select-none" aria-hidden="true">+</span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#21409A] leading-tight block">
                HEALTHCARE <br />
                ENVIRONMENTS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {environmentNodes.map((node, idx) => (
                <div
                  key={node.id}
                  className="flex items-center space-x-3 sm:space-x-4 bg-slate-50/60 p-3 sm:p-3.5 border border-slate-100 rounded-lg"
                  data-aos="fade-up"
                  data-aos-delay={idx * 80}
                >
                  <div className="w-24 xs:w-28 sm:w-36 md:w-40 aspect-[16/9] flex-shrink-0 drop-shadow-sm overflow-hidden rounded-md border border-slate-200/80 bg-slate-100">
                    <img src={node.image} alt={node.alt} className="w-full h-full object-cover block select-none" width="160" height="90" loading="lazy" decoding="async" />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#21409A] block leading-tight">
                      {node.title}
                    </span>
                    <span className="w-6 h-[1.5px] bg-[#21409A] block" aria-hidden="true" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          SECTION 3 — WHAT WE SUPPLY ACROSS HEALTHCARE
          (Editorial Two-Image Client Photography Spread)
          ======================================================== */}
      <section
        className="py-16 lg:py-24 bg-white border-b border-slate-200 overflow-hidden"
        aria-labelledby="supply-contexts-heading"
      >
        <Container className="max-w-7xl">
          {/* Section Introduction */}
          <div
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-14"
            data-aos="fade-up"
            data-aos-duration="850"
          >
            <div className="space-y-3">
              <div className="flex items-center space-x-2.5">
                <span className="text-xs font-mono font-bold text-[#21409A]">03</span>
                <span className="w-5 h-[2px] bg-[#E11D48]" aria-hidden="true" />
                <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#21409A] uppercase">
                  EQUIPMENT &amp; SUPPLY CONTEXTS
                </span>
              </div>
              <h2
                id="supply-contexts-heading"
                className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-black text-[#0F172A] tracking-tight uppercase leading-[1.06]"
              >
                WHAT WE SUPPLY <br />
                <span className="text-[#21409A]">ACROSS HEALTHCARE</span>
              </h2>
            </div>

            <div className="border-l-2 border-[#E11D48] pl-4 sm:pl-5 max-w-sm lg:max-w-md pb-1 self-start lg:self-end">
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                FAB Medical Supplies Ltd. supplies medical equipment, instruments and reagents across a 
                range of clinical environments and departments.
              </p>
            </div>
          </div>

          {/* Paired Client Clinical Photography Showcase (2 Editorial Panels) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 lg:mb-14">
            {/* Panel 1: Surgical Theatres & Critical Care */}
            <div
              className="lg:col-span-7 group bg-[#FAFCFE] border border-slate-200/90 overflow-hidden shadow-xs"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={supplyTheatreImg}
                  alt="Modern surgical operating theatre equipped with operating bed, shadowless lamps, and vital signs monitoring"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  width="1200"
                  height="750"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 border border-slate-200 shadow-xs">
                  <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#21409A]">
                    FACILITY: THEATRE &amp; CRITICAL CARE
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-6 space-y-1.5 bg-white border-t border-slate-100">
                <h3 className="text-base sm:text-lg font-bold font-mono text-[#0F172A] uppercase tracking-wide">
                  Surgical Theatres &amp; Operative Suites
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Supplying operating tables, anesthesia machines, electrosurgical units, shadowless theatre illumination, and patient telemetry systems.
                </p>
              </div>
            </div>

            {/* Panel 2: Clinical Laboratories & Diagnostics */}
            <div
              className="lg:col-span-5 group bg-[#FAFCFE] border border-slate-200/90 overflow-hidden shadow-xs flex flex-col justify-between"
              data-aos="fade-left"
              data-aos-duration="900"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={supplyLabImg}
                  alt="Diagnostic clinical laboratory desk with research microscopes and diagnostic instruments"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  width="1200"
                  height="750"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 border border-slate-200 shadow-xs">
                  <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#21409A]">
                    FACILITY: LABORATORY &amp; DIAGNOSTICS
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-6 space-y-1.5 bg-white border-t border-slate-100 flex-grow">
                <h3 className="text-base sm:text-lg font-bold font-mono text-[#0F172A] uppercase tracking-wide">
                  Clinical Diagnostics &amp; Pathology
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Equipping diagnostic laboratories with optical microscopes, automated analyzers, benchtop centrifuges, and cold-chain storage.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive 9-Department Navigation Grid */}
          <div className="space-y-4" data-aos="fade-up" data-aos-duration="900">
            <div className="flex items-center space-x-2 pb-2 border-b border-slate-200 text-xs font-mono font-bold uppercase tracking-[0.18em] text-slate-500">
              <span className="text-[#21409A] font-bold">CATALOGUE DIRECTORY</span>
              <span>/</span>
              <span>EXPLORE ALL 9 CLINICAL DEPARTMENTS</span>
            </div>

            {/* Desktop / Tablet Grid (md+) */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {supplyDepartments.map((dept) => (
                <Link
                  key={dept.num}
                  to={`/products/${dept.id}`}
                  className="group p-4 bg-[#FAFCFE] hover:bg-white border border-slate-200/90 hover:border-[#21409A] transition-all duration-200 shadow-2xs hover:shadow-xs flex flex-col justify-between cursor-pointer"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-mono font-bold text-[#21409A]">{dept.num}</span>
                        <span className="text-[#E11D48] text-xs font-bold">—</span>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] group-hover:text-[#21409A] transition-colors">
                          {dept.name}
                        </span>
                      </div>
                      <span className="text-[#21409A] text-xs font-bold transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                        &rarr;
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed pl-6">
                      {dept.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile Editorial Photo-Break Composition (<md) */}
            <div className="block md:hidden space-y-6">
              {/* Group 1: Departments 01, 02, 03 */}
              <div className="space-y-3.5">
                {/* PHOTO BREAK 01: Radiology & Outpatient Consultation */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="aspect-square relative rounded-lg overflow-hidden border border-slate-200/90 shadow-sm bg-slate-100 select-none">
                    <img
                      src={envRadiologyImg}
                      alt="Radiology and clinical imaging equipment"
                      className="w-full h-full object-cover"
                      width="320"
                      height="320"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="aspect-square relative rounded-lg overflow-hidden border border-slate-200/90 shadow-sm bg-slate-100 select-none">
                    <img
                      src={envOutpatientImg}
                      alt="Outpatient consultation room and examination couch"
                      className="w-full h-full object-cover"
                      width="320"
                      height="320"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                {/* Department Links 01-03 */}
                <div className="space-y-2.5 pt-1">
                  {supplyDepartments.slice(0, 3).map((dept) => (
                    <Link
                      key={dept.num}
                      to={`/products/${dept.id}`}
                      className="group block p-3.5 bg-[#FAFCFE] active:bg-white border border-slate-200/90 active:border-[#21409A] transition-all rounded-lg shadow-2xs"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-mono font-bold text-[#21409A]">{dept.num}</span>
                          <span className="text-[#E11D48] text-xs font-bold">—</span>
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] group-hover:text-[#21409A] transition-colors">
                            {dept.name}
                          </span>
                        </div>
                        <span className="text-[#21409A] text-xs font-bold transition-transform group-hover:translate-x-1" aria-hidden="true">
                          &rarr;
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed pl-6">
                        {dept.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Group 2: Departments 04, 05, 06 */}
              <div className="space-y-3.5 pt-2">
                {/* PHOTO BREAK 02: Maternity & Laboratory */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="aspect-square relative rounded-lg overflow-hidden border border-slate-200/90 shadow-sm bg-slate-100 select-none">
                    <img
                      src={envMaternityImg}
                      alt="Maternity and pediatric care environment"
                      className="w-full h-full object-cover"
                      width="320"
                      height="320"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="aspect-square relative rounded-lg overflow-hidden border border-slate-200/90 shadow-sm bg-slate-100 select-none">
                    <img
                      src={envLabImg}
                      alt="Clinical diagnostic laboratory environment"
                      className="w-full h-full object-cover"
                      width="320"
                      height="320"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                {/* Department Links 04-06 */}
                <div className="space-y-2.5 pt-1">
                  {supplyDepartments.slice(3, 6).map((dept) => (
                    <Link
                      key={dept.num}
                      to={`/products/${dept.id}`}
                      className="group block p-3.5 bg-[#FAFCFE] active:bg-white border border-slate-200/90 active:border-[#21409A] transition-all rounded-lg shadow-2xs"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-mono font-bold text-[#21409A]">{dept.num}</span>
                          <span className="text-[#E11D48] text-xs font-bold">—</span>
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] group-hover:text-[#21409A] transition-colors">
                            {dept.name}
                          </span>
                        </div>
                        <span className="text-[#21409A] text-xs font-bold transition-transform group-hover:translate-x-1" aria-hidden="true">
                          &rarr;
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed pl-6">
                        {dept.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Group 3: Departments 07, 08, 09 */}
              <div className="space-y-3.5 pt-2">
                {/* PHOTO BREAK 03: Theatre & Ward Furniture */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="aspect-square relative rounded-lg overflow-hidden border border-slate-200/90 shadow-sm bg-slate-100 select-none">
                    <img
                      src={envTheatreImg}
                      alt="Operating theatre room and surgical suite"
                      className="w-full h-full object-cover"
                      width="320"
                      height="320"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="aspect-square relative rounded-lg overflow-hidden border border-slate-200/90 shadow-sm bg-slate-100 select-none">
                    <img
                      src={envWardImg}
                      alt="General hospital ward beds and furniture infrastructure"
                      className="w-full h-full object-cover"
                      width="320"
                      height="320"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                {/* Department Links 07-09 */}
                <div className="space-y-2.5 pt-1">
                  {supplyDepartments.slice(6, 9).map((dept) => (
                    <Link
                      key={dept.num}
                      to={`/products/${dept.id}`}
                      className="group block p-3.5 bg-[#FAFCFE] active:bg-white border border-slate-200/90 active:border-[#21409A] transition-all rounded-lg shadow-2xs"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-mono font-bold text-[#21409A]">{dept.num}</span>
                          <span className="text-[#E11D48] text-xs font-bold">—</span>
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] group-hover:text-[#21409A] transition-colors">
                            {dept.name}
                          </span>
                        </div>
                        <span className="text-[#21409A] text-xs font-bold transition-transform group-hover:translate-x-1" aria-hidden="true">
                          &rarr;
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed pl-6">
                        {dept.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          SECTION 4 — THE FAB CONNECTION / THE SUPPLY CHAIN
          (Approved Design D: Horizontal Pipeline Architecture)
          ======================================================== */}
      <section
        className="py-16 lg:py-24 bg-[#FAFCFE] border-b border-slate-200 overflow-hidden"
        aria-labelledby="supply-chain-heading"
      >
        <Container className="max-w-7xl">
          {/* Section Introduction */}
          <div
            className="max-w-3xl mb-12 lg:mb-16 space-y-3"
            data-aos="fade-up"
            data-aos-duration="850"
          >
            <div className="flex items-center space-x-2.5">
              <span className="px-2 py-0.5 bg-[#21409A] text-white text-[10px] font-mono font-bold tracking-wider">
                04
              </span>
              <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#21409A] uppercase">
                THE SUPPLY CHAIN
              </span>
            </div>
            <h2
              id="supply-chain-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight uppercase"
            >
              CONNECTED TO THE HEALTHCARE SUPPLY CHAIN
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl">
              FAB Medical Supplies Ltd. connects medical equipment supply with healthcare-related 
              businesses and supply partners across Uganda, helping make the required equipment, 
              instruments and supplies accessible to the organisations it serves.
            </p>
          </div>

          {/* 4-Stage Horizontal Supply Network (Design D Pipeline) */}
          <div
            className="bg-white border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-sm"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-4 items-center">
              {/* Stage 1: Suppliers & Manufacturers (Col 1-3) */}
              <div
                className="md:col-span-3 space-y-3 text-center sm:text-left"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <div className="w-full aspect-[16/9] sm:aspect-[2/1] overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
                  <img
                    src={chainSuppliersImg}
                    alt="Surgical operating equipment, instruments, and sterile supplies from verified manufacturers"
                    className="w-full h-full object-cover block"
                    width="280"
                    height="158"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] block leading-tight">
                    SUPPLIERS &amp; <br className="hidden sm:inline" />MANUFACTURERS
                  </span>
                </div>
              </div>

              {/* Connecting Arrow 1 (Col 4 on desktop, vertical on mobile) */}
              <div className="hidden md:flex md:col-span-1 items-center justify-center" aria-hidden="true">
                <div className="w-full flex items-center">
                  <span className="flex-1 h-[1.5px] bg-[#21409A]" />
                  <span className="text-[#21409A] font-bold text-sm ml-0.5">→</span>
                </div>
              </div>
              <div className="flex md:hidden items-center justify-center text-[#21409A] font-bold text-lg -my-2" aria-hidden="true">
                ↓
              </div>

              {/* Stage 2: Central FAB Anchor (Col 4-5) */}
              <div
                className="md:col-span-3 relative flex flex-col items-center justify-center p-4 text-center"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                {/* Background Uganda Map Silhouette */}
                <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none select-none" aria-hidden="true">
                  <img src={ugandaMapImg} alt="" className="w-28 h-auto object-contain" width="112" height="112" loading="lazy" decoding="async" />
                </div>

                <div className="relative z-10 space-y-1">
                  <span className="text-2xl sm:text-3xl font-black font-mono text-[#21409A] tracking-wider block">
                    FAB
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#0F172A] block">
                    MEDICAL SUPPLIES LTD.
                  </span>
                </div>
              </div>

              {/* Connecting Arrow 2 (Col 6 on desktop, vertical on mobile) */}
              <div className="hidden md:flex md:col-span-1 items-center justify-center" aria-hidden="true">
                <div className="w-full flex items-center">
                  <span className="flex-1 h-[1.5px] bg-[#21409A]" />
                  <span className="text-[#21409A] font-bold text-sm ml-0.5">→</span>
                </div>
              </div>
              <div className="flex md:hidden items-center justify-center text-[#21409A] font-bold text-lg -my-2" aria-hidden="true">
                ↓
              </div>

              {/* Stage 3: Supply Partners (Col 7-9) */}
              <div
                className="md:col-span-2 space-y-3 text-center sm:text-left"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="w-full aspect-[16/9] sm:aspect-[2/1] overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
                  <img
                    src={chainPartnersImg}
                    alt="Equipped clinical healthcare facility and medical consultation room for healthcare supply partners"
                    className="w-full h-full object-cover block"
                    width="280"
                    height="158"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <span className="text-[10.5px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#0F172A] block leading-tight">
                    SUPPLY PARTNERS <br />
                    <span className="text-slate-500 font-normal text-[9.5px]">(RETAIL &amp; WHOLESALE)</span>
                  </span>
                </div>
              </div>

              {/* Mobile transition indicator between Stage 3 and Stage 4 */}
              <div className="flex md:hidden items-center justify-center text-[#21409A] font-bold text-lg -my-2" aria-hidden="true">
                ↓
              </div>

              {/* Stage 4: Healthcare Environments (Col 10-12) */}
              <div
                className="md:col-span-2 space-y-3 text-center sm:text-left"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <div className="w-full aspect-[16/9] sm:aspect-[2/1] overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
                  <img
                    src={chainHospitalsImg}
                    alt="Clinical hospital ward beds and patient care infrastructure in healthcare environments"
                    className="w-full h-full object-cover block"
                    width="280"
                    height="158"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <span className="text-[10.5px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#0F172A] block leading-tight">
                    HEALTHCARE <br />
                    ENVIRONMENTS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
