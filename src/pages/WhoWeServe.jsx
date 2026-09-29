import React from 'react';
import Container from '../components/Container';

// Section 1 & 2 photographic assets
import heroPhotoImg from '../assets/wws-hero-photo.png';
import envRadiologyImg from '../assets/env_radiology.png';
import envOutpatientImg from '../assets/env_outpatient.png';
import envEmergencyImg from '../assets/env_emergency.png';
import envMaternityImg from '../assets/env_maternity.png';
import envTheatreImg from '../assets/env_theatre.png';
import envWardImg from '../assets/env_ward.png';
import envLabImg from '../assets/env_lab.png';
import envUtilityImg from '../assets/env_utility.png';

// Section 3 & 4 photographic assets (Design D: Supply Network)
import supplyNetworkDiagramImg from '../assets/supply_network_diagram.png';
import chainSuppliersImg from '../assets/chain_suppliers.png';
import chainPartnersImg from '../assets/chain_partners.png';
import chainHospitalsImg from '../assets/chain_hospitals.png';
import ugandaMapImg from '../assets/ecosystem-uganda-map.png';

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
      alt: 'Advanced CT scanner and clinical radiology imaging equipment',
    },
    {
      id: 'outpatient',
      title: 'OUTPATIENT & CONSULTATION',
      image: envOutpatientImg,
      alt: 'Outpatient consultation room and clinical examination couch',
    },
    {
      id: 'emergency',
      title: 'EMERGENCY & ICU',
      image: envEmergencyImg,
      alt: 'Intensive care patient monitor and critical care diagnostic system',
    },
    {
      id: 'maternity',
      title: 'MATERNITY & PEDIATRICS',
      image: envMaternityImg,
      alt: 'Mother and newborn baby in pediatric care ward',
    },
    {
      id: 'lab',
      title: 'LABORATORY',
      image: envLabImg,
      alt: 'Diagnostic laboratory optical microscope and chemical reagents',
    },
    {
      id: 'theatre',
      title: 'THEATRE',
      image: envTheatreImg,
      alt: 'Surgical operating theatre with clinical lamps and operating table',
    },
    {
      id: 'ward',
      title: 'GENERAL WARD',
      image: envWardImg,
      alt: 'General inpatient hospital ward beds and patient care infrastructure',
    },
    {
      id: 'utility',
      title: 'SUPPORTING / UTILITY SERVICES',
      image: envUtilityImg,
      alt: 'Sterilization autoclave and healthcare facility utility services',
    },
  ];

  // Section 3: Supply Network Environments List
  const supplyEnvironments = [
    'RADIOLOGY & IMAGING',
    'OUTPATIENT & CONSULTATION',
    'EMERGENCY & ICU',
    'MATERNITY & PEDIATRICS',
    'LABORATORY',
    'THEATRE',
    'GENERAL WARD',
    'SPECIALIZED DEPARTMENTS',
    'SUPPORTING / UTILITY SERVICES',
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
            <div className="lg:col-span-5 space-y-6 z-10">
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
            <div className="lg:col-span-4 flex items-center space-x-6 sm:space-x-8 z-10">
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
                  {heroLeftLabels.map((lbl) => (
                    <div key={lbl.name} className="space-y-1">
                      <span className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-[0.14em] text-[#21409A] block leading-tight">
                        {lbl.name}
                      </span>
                      <span className="w-5 h-[1.5px] bg-[#21409A] block" aria-hidden="true" />
                    </div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="space-y-6 sm:space-y-7">
                  {heroRightLabels.map((lbl) => (
                    <div key={lbl.name} className="space-y-1">
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
            <div className="lg:col-span-3 flex justify-end relative">
              <div className="relative w-56 sm:w-64 lg:w-full max-w-[320px] xl:max-w-[360px] h-64 sm:h-80 lg:h-96 overflow-hidden flex items-center justify-end select-none">
                <img
                  src={heroPhotoImg}
                  alt="Clinical healthcare environment perspective with modern hospital illumination"
                  className="w-full h-full object-cover object-right block drop-shadow-sm"
                  loading="eager"
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
          <div className="max-w-2xl mb-12 lg:mb-16 space-y-3">
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
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
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
                <div className="col-span-4 flex items-center space-x-3.5 group">
                  <div className="w-40 sm:w-48 lg:w-56 xl:w-60 h-auto flex-shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.03]">
                    <img src={envRadiologyImg} alt="Radiology & Imaging" className="w-full h-auto block select-none" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#21409A] block leading-tight">
                      RADIOLOGY &amp; <br />IMAGING
                    </span>
                    <span className="w-6 h-[1.5px] bg-[#21409A] block" aria-hidden="true" />
                  </div>
                </div>

                <div className="col-span-4 flex items-center space-x-3.5 pl-2 lg:pl-4 group">
                  <div className="w-40 sm:w-48 lg:w-56 xl:w-60 h-auto flex-shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.03]">
                    <img src={envOutpatientImg} alt="Outpatient & Consultation" className="w-full h-auto block select-none" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#21409A] block leading-tight">
                      OUTPATIENT &amp; <br />CONSULTATION
                    </span>
                    <span className="w-6 h-[1.5px] bg-[#21409A] block" aria-hidden="true" />
                  </div>
                </div>

                <div className="col-span-4 flex items-center space-x-3.5 pl-2 lg:pl-4 group">
                  <div className="w-40 sm:w-48 lg:w-56 xl:w-60 h-auto flex-shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.03]">
                    <img src={envEmergencyImg} alt="Emergency & ICU" className="w-full h-auto block select-none" />
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
                <div className="col-span-4 flex items-center space-x-3.5 group">
                  <div className="w-40 sm:w-48 lg:w-56 xl:w-60 h-auto flex-shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.03]">
                    <img src={envMaternityImg} alt="Maternity & Pediatrics" className="w-full h-auto block select-none" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#21409A] block leading-tight">
                      MATERNITY &amp; <br />PEDIATRICS
                    </span>
                    <span className="w-6 h-[1.5px] bg-[#21409A] block" aria-hidden="true" />
                  </div>
                </div>

                <div className="col-span-4 pointer-events-none" />

                <div className="col-span-4 flex items-center space-x-3.5 pl-2 lg:pl-4 group">
                  <div className="w-40 sm:w-48 lg:w-56 xl:w-60 h-auto flex-shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.03]">
                    <img src={envLabImg} alt="Laboratory" className="w-full h-auto block select-none" />
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
                <div className="col-span-4 flex items-center space-x-3.5 group">
                  <div className="w-40 sm:w-48 lg:w-56 xl:w-60 h-auto flex-shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.03]">
                    <img src={envTheatreImg} alt="Theatre" className="w-full h-auto block select-none" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#21409A] block leading-tight">
                      THEATRE
                    </span>
                    <span className="w-6 h-[1.5px] bg-[#21409A] block" aria-hidden="true" />
                  </div>
                </div>

                <div className="col-span-4 flex items-center space-x-3.5 pl-2 lg:pl-4 group">
                  <div className="w-40 sm:w-48 lg:w-56 xl:w-60 h-auto flex-shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.03]">
                    <img src={envWardImg} alt="General Ward" className="w-full h-auto block select-none" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#21409A] block leading-tight">
                      GENERAL WARD
                    </span>
                    <span className="w-6 h-[1.5px] bg-[#21409A] block" aria-hidden="true" />
                  </div>
                </div>

                <div className="col-span-4 flex items-center space-x-3.5 pl-2 lg:pl-4 group">
                  <div className="w-40 sm:w-48 lg:w-56 xl:w-60 h-auto flex-shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.03]">
                    <img src={envUtilityImg} alt="Supporting / Utility Services" className="w-full h-auto block select-none" />
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
            <div className="w-44 h-44 mx-auto rounded-full border border-blue-200 bg-white shadow-sm flex flex-col items-center justify-center p-4 text-center relative mb-8">
              <div className="absolute inset-[-5px] rounded-full border border-dashed border-blue-200" aria-hidden="true" />
              <span className="text-[#E11D48] text-sm font-mono font-bold leading-none mb-1 select-none" aria-hidden="true">+</span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#21409A] leading-tight block">
                HEALTHCARE <br />
                ENVIRONMENTS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {environmentNodes.map((node) => (
                <div key={node.id} className="flex items-center space-x-4 bg-slate-50/50 p-3.5 border border-slate-100">
                  <div className="w-36 sm:w-40 h-auto flex-shrink-0 drop-shadow-sm">
                    <img src={node.image} alt={node.alt} className="w-full h-auto block" loading="lazy" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#21409A] block leading-tight">
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
          (Approved Design D: Supply Network Concept)
          ======================================================== */}
      <section
        className="py-16 lg:py-24 bg-white border-b border-slate-200 overflow-hidden"
        aria-labelledby="supply-contexts-heading"
      >
        <Container className="max-w-7xl">
          {/* Section Introduction */}
          <div className="max-w-3xl mb-12 lg:mb-16 space-y-3">
            <div className="flex items-center space-x-2.5">
              <span className="px-2 py-0.5 bg-[#21409A] text-white text-[10px] font-mono font-bold tracking-wider">
                03
              </span>
              <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#21409A] uppercase">
                EQUIPMENT &amp; SUPPLY CONTEXTS
              </span>
            </div>
            <h2
              id="supply-contexts-heading"
              className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0F172A] tracking-tight uppercase leading-[1.08]"
            >
              WHAT WE SUPPLY <br />
              ACROSS HEALTHCARE
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl">
              FAB Medical Supplies Ltd. supplies medical equipment, instruments and reagents across a 
              range of clinical environments and departments.
            </p>
          </div>

          {/* Supply Network Composition (Design D Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: 9 Environments Network List with Circuit Nodes */}
            <div className="lg:col-span-5 space-y-4">
              <div className="border border-slate-100 bg-[#FAFCFE] p-6 sm:p-8 space-y-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400 block pb-1 border-b border-slate-200">
                  HEALTHCARE SUPPLY SCOPE
                </span>

                <div className="space-y-3.5">
                  {supplyEnvironments.map((env) => (
                    <div key={env} className="flex items-center justify-between group">
                      <span className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-[0.14em] text-[#0F172A] group-hover:text-[#21409A] transition-colors">
                        {env}
                      </span>
                      <div className="flex items-center pl-3 space-x-1.5" aria-hidden="true">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#21409A]" />
                        <span className="w-8 h-[1.5px] bg-[#93C5FD] group-hover:bg-[#21409A] transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Visual Network Diagram with Stepped Parallelogram Photos */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-2xl overflow-hidden bg-white">
                <img
                  src={supplyNetworkDiagramImg}
                  alt="FAB Medical Supplies Network linking clinical environments with diagnostic machinery, ICU systems, surgical theatres, and hospital ward infrastructure"
                  className="w-full h-auto object-contain block drop-shadow-sm select-none"
                  loading="lazy"
                />
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
          <div className="max-w-3xl mb-12 lg:mb-16 space-y-3">
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
          <div className="bg-white border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-4 items-center">
              {/* Stage 1: Suppliers & Manufacturers (Col 1-3) */}
              <div className="md:col-span-3 space-y-3 text-center sm:text-left">
                <div className="w-full aspect-[16/9] sm:aspect-[2/1] overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
                  <img
                    src={chainSuppliersImg}
                    alt="International medical equipment warehouses and verified manufacturers"
                    className="w-full h-full object-cover block"
                    loading="lazy"
                  />
                </div>
                <div>
                  <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] block leading-tight">
                    SUPPLIERS &amp; <br className="hidden sm:inline" />MANUFACTURERS
                  </span>
                </div>
              </div>

              {/* Connecting Arrow 1 (Col 4) */}
              <div className="hidden md:flex md:col-span-1 items-center justify-center" aria-hidden="true">
                <div className="w-full flex items-center">
                  <span className="flex-1 h-[1.5px] bg-[#21409A]" />
                  <span className="text-[#21409A] font-bold text-sm ml-0.5">→</span>
                </div>
              </div>

              {/* Stage 2: Central FAB Anchor (Col 4-5) */}
              <div className="md:col-span-3 relative flex flex-col items-center justify-center p-4 text-center">
                {/* Background Uganda Map Silhouette */}
                <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none select-none" aria-hidden="true">
                  <img src={ugandaMapImg} alt="" className="w-28 h-auto object-contain" />
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

              {/* Connecting Arrow 2 (Col 6) */}
              <div className="hidden md:flex md:col-span-1 items-center justify-center" aria-hidden="true">
                <div className="w-full flex items-center">
                  <span className="flex-1 h-[1.5px] bg-[#21409A]" />
                  <span className="text-[#21409A] font-bold text-sm ml-0.5">→</span>
                </div>
              </div>

              {/* Stage 3: Supply Partners (Col 7-9) */}
              <div className="md:col-span-2 space-y-3 text-center sm:text-left">
                <div className="w-full aspect-[16/9] sm:aspect-[2/1] overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
                  <img
                    src={chainPartnersImg}
                    alt="Healthcare supply partners, pharmacies, retail and wholesale sellers"
                    className="w-full h-full object-cover block"
                    loading="lazy"
                  />
                </div>
                <div>
                  <span className="text-[10.5px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#0F172A] block leading-tight">
                    SUPPLY PARTNERS <br />
                    <span className="text-slate-500 font-normal text-[9.5px]">(RETAIL &amp; WHOLESALE)</span>
                  </span>
                </div>
              </div>

              {/* Stage 4: Healthcare Environments (Col 10-12) */}
              <div className="md:col-span-2 space-y-3 text-center sm:text-left">
                <div className="w-full aspect-[16/9] sm:aspect-[2/1] overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
                  <img
                    src={chainHospitalsImg}
                    alt="Clinical healthcare environments, hospitals, and outpatient facilities"
                    className="w-full h-full object-cover block"
                    loading="lazy"
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
