import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components';
import companyControlSuiteImg from '../assets/about/about-company-control-suite.webp';
import companyOperatingRoomImg from '../assets/about/about-company-operating-room.webp';
import companyWardInteriorImg from '../assets/about/about-company-ward-interior.webp';
import heroMicroscopeDeskImg from '../assets/about/about-hero-microscope.webp';
import serviceProcurementImg from '../assets/about/about-service-procurement.webp';
import serviceSalesImg from '../assets/about/about-service-sales.webp';
import serviceDeliveryImg from '../assets/about/about-service-delivery.webp';
import serviceRepairTechImg from '../assets/about/about-service-repair.webp';

export default function About() {
  return (
    <div>
      {/* Section 1: Hero Section — Swiss Gallery Minimalist */}
      <section
        className="bg-white border-b border-slate-200 py-16 sm:py-20 lg:py-24"
        aria-labelledby="about-hero-heading"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column (6 Cols): Restrained, commanding prose */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="text-[11px] font-mono font-bold tracking-[0.25em] text-brand-red uppercase">
                FAB MEDICAL SUPPLIES &bull; UGANDA
              </div>

              <h1
                id="about-hero-heading"
                className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-[#0F172A] leading-[1.04]"
              >
                Equipping healthcare with{' '}
                <span className="text-brand-blue">clinical certainty.</span>
              </h1>

              <p className="text-base text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                We support hospitals, diagnostic laboratories, and medical practices across Uganda with vetted clinical technology—bridging global standards with frontline healthcare delivery.
              </p>

              <div className="pt-2 flex items-center justify-center lg:justify-start space-x-4">
                <a
                  href="#the-company-heading"
                  className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider bg-[#0F172A] text-white hover:bg-brand-blue px-5 py-3 rounded transition-colors"
                >
                  <span>Read Our Story</span>
                  <span aria-hidden="true">&darr;</span>
                </a>
              </div>
            </div>

            {/* Right Column (6 Cols): Gallery Frame with Crosshair Corners */}
            <div className="lg:col-span-6">
              <div className="relative p-2 bg-slate-50 border border-slate-200/90 rounded-2xl">
                {/* Swiss crosshair markers on corners */}
                <span className="absolute -top-1.5 -left-1.5 text-xs text-slate-400 font-mono font-light select-none" aria-hidden="true">+</span>
                <span className="absolute -top-1.5 -right-1.5 text-xs text-slate-400 font-mono font-light select-none" aria-hidden="true">+</span>
                <span className="absolute -bottom-1.5 -left-1.5 text-xs text-slate-400 font-mono font-light select-none" aria-hidden="true">+</span>
                <span className="absolute -bottom-1.5 -right-1.5 text-xs text-slate-400 font-mono font-light select-none" aria-hidden="true">+</span>

                <div className="overflow-hidden rounded-xl bg-slate-200 aspect-[16/11]">
                  <img
                    src={companyOperatingRoomImg}
                    alt="Operating theatre clinical infrastructure"
                    className="w-full h-full object-cover object-center block"
                    width="720"
                    height="495"
                    fetchpriority="high"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Micro Monospace Architectural Ledger */}
          <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-3">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
              <span className="font-bold text-[#0F172A]">FAB MEDICAL SUPPLIES LIMITED</span>
            </div>
            <div>IMPORTATION &bull; WAREHOUSE DISTRIBUTION &bull; NATIONWIDE LOGISTICS</div>
            <div className="text-slate-400">KAMPALA, UGANDA</div>
          </div>
        </Container>
      </section>

      {/* Section 2: CORPORATE PROFILE — Scene 2B-1: The Seamless Feathered Clinical Horizon */}
      <section
        className="relative bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200 overflow-hidden"
        aria-labelledby="the-company-heading"
      >
        <Container className="relative z-10">
          {/* 1. Centered 2B Editorial Opening */}
          <div
            className="max-w-3xl mx-auto text-center space-y-4 mb-8 sm:mb-10"
            data-aos="fade-up"
            data-aos-duration="750"
          >
            <div className="inline-flex items-center space-x-2">
              <span className="w-6 h-[2px] bg-brand-red" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue">
                THE COMPANY &bull; CORPORATE PROFILE
              </span>
            </div>

            <h2
              id="the-company-heading"
              className="text-3xl sm:text-5xl lg:text-[46px] font-extrabold text-[#0F172A] tracking-tight leading-[1.08]"
            >
              Built to Strengthen Clinical Care{' '}
              <span className="text-brand-blue">Across Uganda.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              From diagnostic sample benches to surgical control suites and recovery wards, we work alongside healthcare facilities to supply durable equipment matched to daily patient workload.
            </p>
          </div>

          {/* 2. THE UNFRAMED SCENE CANVAS: Continuous Feathered Horizon + Spatial Callouts */}
          <div className="relative mt-4" data-aos="fade-up" data-aos-duration="850">
            
            {/* Seamless Blended Panorama Stage (Mathematically parallel diagonal channels + 4-edge atmospheric feathering into white) */}
            <div className="relative h-[340px] sm:h-[420px] lg:h-[470px] w-full select-none">
              
              {/* Left Horizon Zone: Scientific Microscope & Laboratory Desk (from new images) */}
              <div
                className="absolute inset-y-0 left-0 w-full sm:w-[50%] lg:w-[38%] overflow-hidden"
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 84% 100%, 0% 100%)',
                }}
              >
                <img
                  src={heroMicroscopeDeskImg}
                  alt="Scientific laboratory microscope desk with diagnostic research instruments"
                  className="w-full h-full object-cover object-center"
                  width="540"
                  height="470"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Center Horizon Zone: Modern Clinical Diagnostic & Surgical Control Suite (from new images) */}
              <div
                className="hidden lg:block absolute inset-y-0 left-[32.5%] w-[39%] overflow-hidden"
                style={{
                  clipPath: 'polygon(15.6% 0%, 100% 0%, 84.4% 100%, 0% 100%)',
                }}
              >
                <img
                  src={companyControlSuiteImg}
                  alt="Modern clinical diagnostic imaging and hybrid surgical control suite"
                  className="w-full h-full object-cover object-center"
                  width="560"
                  height="470"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Right Horizon Zone: Hospital Inpatient Ward Interior (from new images) */}
              <div
                className="hidden sm:block absolute inset-y-0 right-0 w-[52%] lg:left-[66%] lg:w-[34%] overflow-hidden"
                style={{
                  clipPath: 'polygon(17.9% 0%, 100% 0%, 100% 100%, 0% 100%)',
                }}
              >
                <img
                  src={companyWardInteriorImg}
                  alt="Hospital inpatient recovery ward room equipped with clinical beds"
                  className="w-full h-full object-cover object-center"
                  width="500"
                  height="470"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Top, Bottom, Left & Right Atmospheric Feathering Gradients (Dissolves scene into white page with zero box edges) */}
              <div
                className="absolute inset-x-0 top-0 h-24 sm:h-28 bg-gradient-to-b from-white via-white/75 to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-white via-white/85 to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/70 to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/70 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Architectural Blueprint Vector Lines & Spatial Target Nodes (Desktop) */}
              <svg
                className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-10"
                viewBox="0 0 1200 470"
                fill="none"
                aria-hidden="true"
              >
                {/* Connecting Horizon Arc */}
                <path
                  d="M 180 210 Q 600 130 1020 205"
                  stroke="#21409A"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  opacity="0.45"
                />

                {/* Node 01 Pin (Lab Microscope Bench) */}
                <circle cx="180" cy="210" r="5" fill="#ED1C24" />
                <circle cx="180" cy="210" r="12" stroke="#ED1C24" strokeWidth="1.2" opacity="0.5" />
                <path d="M 180 210 L 180 335 L 205 335" stroke="#0F172A" strokeWidth="1.2" />

                {/* Node 02 Pin (Clinical Control Suite) */}
                <circle cx="560" cy="172" r="5" fill="#21409A" />
                <circle cx="560" cy="172" r="12" stroke="#21409A" strokeWidth="1.2" opacity="0.5" />
                <path d="M 560 172 L 560 82 L 585 82" stroke="#0F172A" strokeWidth="1.2" />

                {/* Node 03 Pin (Inpatient Recovery Ward) */}
                <circle cx="1020" cy="205" r="5" fill="#ED1C24" />
                <circle cx="1020" cy="205" r="12" stroke="#ED1C24" strokeWidth="1.2" opacity="0.5" />
                <path d="M 1020 205 L 1020 320 L 990 320" stroke="#0F172A" strokeWidth="1.2" />
              </svg>

              {/* SPATIAL CALLOUT 02 — Floating in Upper-Center Atmosphere of the Scene */}
              <div className="hidden lg:block absolute top-6 left-[49.5%] z-20 max-w-[310px]">
                <div className="bg-white/90 backdrop-blur-md px-4 py-3 rounded-lg shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-blue">
                    02 &mdash; Uninterrupted Supply Continuity
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    Reliable stock continuity for diagnostic reagents, test kits, and surgical consumables so clinical operations never stall.
                  </p>
                </div>
              </div>

              {/* SPATIAL CALLOUT 01 — Anchored in Lower-Left Foreground of the Scene */}
              <div className="hidden lg:block absolute bottom-4 left-[17.5%] z-20 max-w-[310px]">
                <div className="bg-white/95 backdrop-blur-md px-4 py-3 rounded-lg shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-red">
                    01 &mdash; Vetted Clinical Suitability
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    Diagnostic and clinical systems selected for accuracy, durability, and straightforward daily operation by medical staff.
                  </p>
                </div>
              </div>

              {/* SPATIAL CALLOUT 03 — Anchored in Lower-Right Foreground of the Scene */}
              <div className="hidden lg:block absolute bottom-6 right-[18%] z-20 max-w-[310px] text-right">
                <div className="bg-white/95 backdrop-blur-md px-4 py-3 rounded-lg shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-red">
                    03 &mdash; Technical Accountability
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    Post-handover preventative maintenance, calibration, and responsive biomedical repair dedicated to supplied equipment.
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile / Tablet Fallback for the 3 Spatial Callouts (Vertical Timeline Flow) */}
            <div className="lg:hidden relative pl-6 border-l-2 border-brand-blue/25 space-y-5 mt-2 max-w-xl mx-auto">
              <div className="relative">
                <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-brand-red ring-4 ring-white" aria-hidden="true" />
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
                  01 &mdash; Vetted Clinical Suitability
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mt-1">
                  Diagnostic and clinical systems selected for accuracy, durability, and straightforward daily operation by medical staff.
                </p>
              </div>
              <div className="relative">
                <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-brand-blue ring-4 ring-white" aria-hidden="true" />
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue">
                  02 &mdash; Uninterrupted Supply Continuity
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mt-1">
                  Reliable stock continuity for diagnostic reagents, test kits, and surgical consumables so clinical operations never stall.
                </p>
              </div>
              <div className="relative">
                <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-brand-red ring-4 ring-white" aria-hidden="true" />
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
                  03 &mdash; Technical Accountability
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mt-1">
                  Post-handover preventative maintenance, calibration, and responsive biomedical repair dedicated to supplied equipment.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Section 3: WHAT FAB DOES — 4-Column Alternating Editorial Workflow Strip (No Cards, Open Hairlines) */}
      <section
        className="bg-[#F5F8FC] border-b border-slate-200 py-12 sm:py-16 lg:py-20"
        aria-labelledby="what-fab-does-heading"
      >
        <Container>
          {/* Top Broadsheet Header Row */}
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-8 sm:pb-10"
            data-aos="fade-up"
            data-aos-duration="750"
          >
            {/* Left Column (7 Cols): Eyebrow & Headline */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-3">
                <span className="w-8 h-[2.5px] bg-brand-red flex-shrink-0" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
                  WHAT FAB DOES
                </span>
              </div>

              <h2
                id="what-fab-does-heading"
                className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#0F172A] leading-[1.08] text-center lg:text-left"
              >
                Four Core Functions.{' '}
                <span className="text-brand-blue">One Accountable Workflow.</span>
              </h2>
            </div>

            {/* Right Column (5 Cols): Narrative & Direct Link */}
            <div className="lg:col-span-5 space-y-3.5 text-center lg:text-left">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                An integrated supply framework spanning international sourcing, facility matching, secure nationwide dispatch, and post-delivery maintenance.
              </p>
              <div className="flex justify-center lg:justify-start w-full sm:w-auto">
                <Link
                  to="/services"
                  className="group inline-flex items-center justify-center space-x-2 bg-brand-blue hover:bg-brand-red text-white text-xs font-bold uppercase tracking-[0.14em] px-5 py-3 rounded transition-colors duration-200 w-full sm:w-auto text-center"
                >
                  <span>EXPLORE FULL SERVICE DETAILS</span>
                  <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* 4-Column Alternating Hairline Strip (Photo-Top / Text-Top Chessboard Rhythm — Zero Cards) */}
          <div
            className="border-t border-b border-slate-300/90 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-slate-300/90"
            data-aos="fade-up"
            data-aos-duration="850"
          >
            {/* STAGE 01: PROCUREMENT & SUPPLY (Photo Top → Text Bottom) */}
            <article className="py-6 sm:py-8 md:pr-5 lg:pr-6 flex flex-col justify-between">
              <div className="overflow-hidden bg-slate-200 h-44 sm:h-48 lg:h-44 mb-4">
                <img
                  src={serviceProcurementImg}
                  alt="Procurement and quality inspection of medical supplies and laboratory reagents"
                  className="w-full h-full object-cover object-center block"
                  width="360"
                  height="260"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl font-extrabold text-brand-red tracking-tight">
                    01
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    Sourcing
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-tight text-[#0F172A] mb-1.5">
                  Procurement &amp; Supply
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Direct importation and verified supply of hospital machinery, surgical instruments, and laboratory reagents suited for clinical durability.
                </p>
                <div className="pt-2.5 border-t border-slate-200/80 text-[11px] font-bold uppercase tracking-wider text-brand-blue">
                  Equipment • Instruments • Reagents
                </div>
              </div>
            </article>

            {/* STAGE 02: MARKETING & SALES (Text Top → Photo Bottom on Desktop) */}
            <article className="py-6 sm:py-8 md:pl-5 lg:px-6 md:border-l lg:border-l-0 border-slate-300/90 flex flex-col justify-between">
              <div className="order-2 lg:order-1 lg:mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl font-extrabold text-brand-red tracking-tight">
                    02
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    Consultation
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-tight text-[#0F172A] mb-1.5">
                  Marketing &amp; Sales
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Consultative specification matching, technical demos, and transparent quotations tailored to facility clinical caseloads.
                </p>
                <div className="pt-2.5 border-t border-slate-200/80 text-[11px] font-bold uppercase tracking-wider text-brand-blue">
                  Clinical Matching • Quotations
                </div>
              </div>

              <div className="order-1 lg:order-2 overflow-hidden bg-slate-200 h-44 sm:h-48 lg:h-44 mb-4 lg:mb-0">
                <img
                  src={serviceSalesImg}
                  alt="Marketing and sales support for medical equipment and healthcare supplies"
                  className="w-full h-full object-cover object-center block"
                  width="360"
                  height="260"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </article>

            {/* STAGE 03: DELIVERY (Photo Top → Text Bottom) */}
            <article className="py-6 sm:py-8 md:pr-5 lg:px-6 md:border-t lg:border-t-0 border-slate-300/90 flex flex-col justify-between">
              <div className="overflow-hidden bg-slate-200 h-44 sm:h-48 lg:h-44 mb-4">
                <img
                  src={serviceDeliveryImg}
                  alt="Dedicated medical supplies delivery vehicle for healthcare facilities across Uganda"
                  className="w-full h-full object-cover object-center block"
                  width="360"
                  height="260"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl font-extrabold text-brand-red tracking-tight">
                    03
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    Logistics
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-tight text-[#0F172A] mb-1.5">
                  Safe Delivery
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Secure transit and timely dispatch of sensitive diagnostic instruments, temperature-controlled reagents, and ward equipment across Uganda.
                </p>
                <div className="pt-2.5 border-t border-slate-200/80 text-[11px] font-bold uppercase tracking-wider text-brand-blue">
                  Nationwide Dispatch • On-Site Handover
                </div>
              </div>
            </article>

            {/* STAGE 04: SERVICE & REPAIR (Text Top → Photo Bottom on Desktop) */}
            <article className="py-6 sm:py-8 md:pl-5 lg:pl-6 md:border-t md:border-l lg:border-t-0 lg:border-l-0 border-slate-300/90 flex flex-col justify-between">
              <div className="order-2 lg:order-1 lg:mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl font-extrabold text-brand-red tracking-tight">
                    04
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    Aftercare
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-tight text-[#0F172A] mb-1.5">
                  Service &amp; Repair
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Preventative maintenance, precision calibration, and responsive technical repair dedicated to the medical equipment supplied through our network.
                </p>
                <div className="pt-2.5 border-t border-slate-200/80 text-[11px] font-bold uppercase tracking-wider text-brand-blue">
                  Maintenance • Technical Repair
                </div>
              </div>

              <div className="order-1 lg:order-2 overflow-hidden bg-slate-200 h-44 sm:h-48 lg:h-44 mb-4 lg:mb-0">
                <img
                  src={serviceRepairTechImg}
                  alt="Biomedical technician servicing and repairing clinical equipment on-site"
                  className="w-full h-full object-cover object-center block"
                  width="360"
                  height="260"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </article>
          </div>
        </Container>
      </section>
    </div>
  );
}
