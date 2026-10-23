import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components';
import fabLogoImg from '../assets/fab-logo.webp';
import whoMulagoHospitalImg from '../assets/about/about-who-mulago-hospital.webp';
import whoReferenceLabImg from '../assets/about/about-who-reference-lab.webp';
import whoRadiologyCareImg from '../assets/about/about-who-radiology.webp';
import whoInpatientWardBedsImg from '../assets/about/about-who-inpatient-beds.webp';
import heroInstrumentsWideImg from '../assets/about/about-hero-instruments.webp';
import heroMicroscopeDeskImg from '../assets/about/about-hero-microscope.webp';
import heroMonitorWardImg from '../assets/about/about-hero-monitor.webp';
import companyControlSuiteImg from '../assets/about/about-company-control-suite.webp';
import companyOperatingRoomImg from '../assets/about/about-company-operating-room.webp';
import companySteelInstrumentsImg from '../assets/about/about-company-steel-instruments.webp';
import companyWardInteriorImg from '../assets/about/about-company-ward-interior.webp';
import serviceProcurementImg from '../assets/about/about-service-procurement.webp';
import serviceSalesImg from '../assets/about/about-service-sales.webp';
import serviceDeliveryImg from '../assets/about/about-service-delivery.webp';
import serviceRepairTechImg from '../assets/about/about-service-repair.webp';
import areaLabBioImg from '../assets/about/about-area-lab-bio.webp';
import areaTheatreDragerImg from '../assets/about/about-area-theatre-drager.webp';
import areaCriticalMonitorImg from '../assets/about/about-area-critical-monitor.webp';
import areaGeneralDiagnosticImg from '../assets/about/about-area-general-diagnostic.webp';

export default function About() {
  return (
    <div>
      {/* About Page Hero Section - Human-Crafted Editorial Masthead & Staggered Gallery */}
      <section
        className="bg-[#F5F8FC] border-b border-slate-200 py-12 sm:py-16 lg:py-20 relative"
        aria-labelledby="about-hero-heading"
      >
        {/* Solid left-edge brand-red architectural tab */}
        <div
          className="hidden sm:block absolute left-0 top-14 w-2 h-12 bg-brand-red"
          aria-hidden="true"
        />

        <Container>
          {/* 1. Top Editorial Masthead Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-10 sm:pb-12 border-b border-slate-300/80">
            
            {/* Left Column (Col 1–7): Eyebrow & Two-Tone Dominant H1 */}
            <div
              className="lg:col-span-7"
              data-aos="fade-up"
              data-aos-duration="750"
            >
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4 sm:mb-5">
                <span className="w-8 h-[2.5px] bg-brand-red flex-shrink-0" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
                  ABOUT FAB MEDICAL SUPPLIES LTD.
                </span>
              </div>

              <h1
                id="about-hero-heading"
                className="text-3xl sm:text-5xl lg:text-[48px] xl:text-[54px] font-extrabold tracking-tight text-[#0F172A] leading-[1.06] text-center lg:text-left"
              >
                Procurement, Supply{' '}
                <span className="text-brand-blue">&amp; Service for Healthcare.</span>
              </h1>
            </div>

            {/* Right Column (Col 8–12): Lead Narrative & Actions */}
            <div
              className="lg:col-span-5 space-y-6"
              data-aos="fade-up"
              data-aos-duration="750"
              data-aos-delay="100"
            >
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed border-l-0 lg:border-l-2 border-brand-red pl-0 lg:pl-5 text-center lg:text-left max-w-lg mx-auto lg:mx-0">
                FAB Medical Supplies Ltd. supplies medical equipment, surgical instruments, and diagnostic reagents across Uganda—supported by dependable delivery, servicing, and repair of the equipment we supply.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-6 pl-0 lg:pl-5 w-full sm:w-auto">
                <Link
                  to="/products"
                  className="group inline-flex items-center justify-center space-x-2.5 bg-brand-red hover:bg-[#cf171e] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded shadow-2xs transition-colors cursor-pointer w-full sm:w-auto text-center"
                >
                  <span>VIEW EQUIPMENT</span>
                  <span
                    className="transition-transform duration-150 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                </Link>

                <Link
                  to="/services"
                  className="group inline-flex items-center justify-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-brand-blue hover:text-brand-red border-b border-brand-blue/30 sm:border-b-2 hover:border-brand-red py-2 sm:py-0 sm:pb-1 transition-colors cursor-pointer w-full sm:w-auto text-center"
                >
                  <span>OUR SERVICES</span>
                  <span
                    className="transition-transform duration-150 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>

          </div>

          {/* 2. Staggered 3-Column Editorial Gallery with Tactile White Print Frames */}
          <div
            className="pt-8 sm:pt-10 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-7 items-start"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            {/* Column 01: Wide Surgical Instruments & Theatre Kit (6 Cols — Tall Anchor) */}
            <Link
              to="/products/theatre-room"
              className="group md:col-span-12 lg:col-span-6 bg-white p-3 sm:p-4 border border-slate-200/90 hover:border-brand-blue/40 shadow-2xs transition-colors block cursor-pointer"
            >
              <div className="overflow-hidden bg-slate-100 h-52 sm:h-72 lg:h-[380px]">
                <img
                  src={heroInstrumentsWideImg}
                  alt="Surgical instruments, forceps, and clinical theatre supplies on sterile drape"
                  className="w-full h-full object-cover object-center block transition-transform duration-700 ease-out group-hover:scale-105"
                  width="720"
                  height="480"
                  fetchpriority="high"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="pt-3.5 pb-1 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-xs font-bold text-brand-red">01</span>
                    <span className="w-4 h-[1.5px] bg-slate-300" aria-hidden="true" />
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A] group-hover:text-brand-blue transition-colors">
                      Surgical Instruments &amp; Theatre
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Forceps, operating tables, electrosurgical units, and sterile theatre consumables.
                  </p>
                </div>
                <span
                  className="text-sm font-bold text-brand-blue group-hover:text-brand-red transition-transform duration-200 group-hover:translate-x-1 pt-0.5"
                  aria-hidden="true"
                >
                  &rarr;
                </span>
              </div>
            </Link>

            {/* Column 02: Laboratory Microscope & Diagnostics (3 Cols — Stepped Down on Desktop) */}
            <Link
              to="/products/laboratory"
              className="group md:col-span-6 lg:col-span-3 lg:mt-8 bg-white p-3 sm:p-3.5 border border-slate-200/90 hover:border-brand-blue/40 shadow-2xs transition-colors block cursor-pointer"
            >
              <div className="overflow-hidden bg-slate-100 h-48 sm:h-64 lg:h-[310px]">
                <img
                  src={heroMicroscopeDeskImg}
                  alt="Binocular clinical research microscope and diagnostic laboratory instruments"
                  className="w-full h-full object-cover object-center block transition-transform duration-700 ease-out group-hover:scale-105"
                  width="380"
                  height="480"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="pt-3 pb-1">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-brand-red">02</span>
                    <span className="w-3.5 h-[1.5px] bg-slate-300" aria-hidden="true" />
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A] group-hover:text-brand-blue transition-colors">
                      Laboratory &amp; Reagents
                    </span>
                  </div>
                  <span
                    className="text-xs font-bold text-brand-blue group-hover:text-brand-red transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-snug">
                  Microscopes, centrifuges, analyzers, and diagnostic reagents.
                </p>
              </div>
            </Link>

            {/* Column 03: Medical Equipment + Solid Brand-Blue Statement Block (3 Cols) */}
            <div className="md:col-span-6 lg:col-span-3 space-y-5">
              <Link
                to="/products/emergency-icu"
                className="group bg-white p-3 sm:p-3.5 border border-slate-200/90 hover:border-brand-blue/40 shadow-2xs transition-colors block cursor-pointer"
              >
                <div className="overflow-hidden bg-slate-100 h-44 sm:h-56 lg:h-[245px]">
                  <img
                    src={heroMonitorWardImg}
                    alt="Clinical vital signs patient monitor and resuscitation equipment in hospital ward"
                    className="w-full h-full object-cover object-center block transition-transform duration-700 ease-out group-hover:scale-105"
                    width="380"
                    height="400"
                    loading="eager"
                    decoding="async"
                  />
                </div>
                <div className="pt-3 pb-1">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-bold text-brand-red">03</span>
                      <span className="w-3.5 h-[1.5px] bg-slate-300" aria-hidden="true" />
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A] group-hover:text-brand-blue transition-colors">
                        Medical Equipment
                      </span>
                    </div>
                    <span
                      className="text-xs font-bold text-brand-blue group-hover:text-brand-red transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    >
                      &rarr;
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-snug">
                    Patient monitors, life support, and clinical ward systems.
                  </p>
                </div>
              </Link>

              {/* Solid Brand-Blue Editorial Stamp Block (Flat, Human-Made) */}
              <div className="bg-brand-blue p-5 text-white border-l-4 border-brand-red">
                <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-200 mb-1.5">
                  NATIONWIDE REACH
                </div>
                <p className="text-xs sm:text-sm font-semibold leading-snug text-white mb-3">
                  Equipping hospitals, diagnostic laboratories, and clinics across Uganda.
                </p>
                <Link
                  to="/contact"
                  className="group inline-flex items-center space-x-1.5 text-[11px] font-bold uppercase tracking-wider text-white hover:text-blue-200 border-b border-white/40 pb-0.5 transition-colors"
                >
                  <span>TALK TO OUR TEAM</span>
                  <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* 3. Structured 4-Column Bottom Fact Ledger */}
          <div className="mt-10 sm:mt-12 pt-6 border-t border-slate-300/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-3 flex items-center space-x-3.5">
              <img
                src={fabLogoImg}
                alt="FAB Medical Supplies Ltd."
                className="h-9 w-auto object-contain block flex-shrink-0"
                width="42"
                height="44"
                decoding="async"
              />
              <div className="text-xs">
                <div className="font-extrabold text-[#0F172A] uppercase tracking-wide">
                  FAB Medical Supplies
                </div>
                <div className="text-slate-500">Kampala, Uganda</div>
              </div>
            </div>

            <div className="lg:col-span-3 sm:border-l sm:border-slate-300/80 sm:pl-5 text-xs">
              <div className="font-bold uppercase tracking-wider text-brand-blue mb-0.5">
                Headquarters
              </div>
              <div className="text-slate-600">
                Emka House, Bombo Rd, Shop G01
              </div>
            </div>

            <div className="lg:col-span-3 lg:border-l lg:border-slate-300/80 lg:pl-5 text-xs">
              <div className="font-bold uppercase tracking-wider text-brand-blue mb-0.5">
                Core Supply
              </div>
              <div className="text-slate-600">
                Equipment, Instruments &amp; Reagents
              </div>
            </div>

            <div className="lg:col-span-3 sm:border-l sm:border-slate-300/80 sm:pl-5 text-xs">
              <div className="font-bold uppercase tracking-wider text-brand-blue mb-0.5">
                Technical Support
              </div>
              <div className="text-slate-600">
                Delivery, Servicing &amp; Repair
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 2: CORPORATE PROFILE — Woven Multi-Tier Editorial Spread (No Left/Right Split, No Cards) */}
      <section
        className="bg-white py-16 sm:py-20 lg:py-28 border-b border-slate-200"
        aria-labelledby="the-company-heading"
      >
        <Container>
          {/* ACT 1: Full-Width Editorial Broadsheet Header & Newspaper Two-Column Story */}
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pb-12 sm:pb-16 border-b border-slate-200"
            data-aos="fade-up"
            data-aos-duration="750"
          >
            {/* Left Index Column (3 Cols) */}
            <div className="lg:col-span-3 flex flex-col justify-between">
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-2 lg:mb-0">
                <span className="w-7 h-[2.5px] bg-brand-red flex-shrink-0" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
                  THE COMPANY
                </span>
              </div>

              <div className="hidden lg:block pt-8 border-t border-slate-200 mt-auto text-xs text-slate-500 space-y-1">
                <div className="font-bold uppercase tracking-wider text-[#0F172A]">
                  Established in Kampala
                </div>
                <div>Emka House, Bombo Road</div>
              </div>
            </div>

            {/* Right Broadsheet Manifesto & Dual-Column Editorial Copy (9 Cols) */}
            <div className="lg:col-span-9">
              <h2
                id="the-company-heading"
                className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-extrabold text-[#0F172A] tracking-tight leading-[1.08] mb-8 text-center lg:text-left"
              >
                Built to Strengthen Clinical Care Across Uganda —{' '}
                <span className="text-brand-blue">
                  From Diagnostic Bench to Operating Theatre.
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p className="font-semibold text-[#0F172A]">
                  Clinical teams depend on accurate diagnostics and reliable ward and theatre infrastructure when patient outcomes are on the line. FAB Medical Supplies Ltd. was founded to connect Ugandan healthcare providers with vetted, durable medical technology from trusted international manufacturers.
                </p>
                <p>
                  Rather than treating medical supply as a one-time transaction, we work alongside hospital administrators, laboratory heads, and clinical engineers to ensure every installation fits the practical realities of their facility and daily patient workload.
                </p>
              </div>
            </div>
          </div>

          {/* ACT 2: Woven Asymmetric 4-Photograph Architectural Collage + Inline Editorial Interlude (Zero Cards) */}
          <div className="py-12 sm:py-16 space-y-10 sm:space-y-14">
            
            {/* Upper Asymmetric Photo Row: Wide Panoramic Control Suite (8 Cols) + Stepped Operating Theatre Portrait (4 Cols) */}
            <div
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {/* Photo 01: Wide Panoramic Clinical Control & Imaging Suite */}
              <figure className="lg:col-span-8">
                <div className="overflow-hidden bg-slate-100 h-64 sm:h-80 md:h-96 lg:h-[420px]">
                  <img
                    src={companyControlSuiteImg}
                    alt="Hospital diagnostic imaging control room and hybrid surgical suite"
                    className="w-full h-full object-cover object-center block"
                    width="860"
                    height="480"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="pt-3 mt-1 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <span>
                    <strong className="text-[#0F172A] uppercase tracking-wider mr-2">01</strong>
                    Diagnostic &amp; Surgical Suite Infrastructure
                  </span>
                  <span className="hidden sm:inline text-slate-400">Hospital Systems</span>
                </figcaption>
              </figure>

              {/* Photo 02: Stepped Vertical Operating Room Interior */}
              <figure className="lg:col-span-4 lg:mt-14">
                <div className="overflow-hidden bg-slate-100 h-72 sm:h-80 lg:h-[364px]">
                  <img
                    src={companyOperatingRoomImg}
                    alt="Sterile surgical operating room equipped with overhead surgical lighting and anaesthesia workstation"
                    className="w-full h-full object-cover object-center block"
                    width="440"
                    height="520"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="pt-3 mt-1 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <span>
                    <strong className="text-[#0F172A] uppercase tracking-wider mr-2">02</strong>
                    Operating Theatre Readiness
                  </span>
                  <span className="text-slate-400">Acute Care</span>
                </figcaption>
              </figure>
            </div>

            {/* Lower Woven Row: Macro Surgical Steel (4 Cols) + Open Typographic Interlude (4 Cols) + Inpatient Recovery Ward (4 Cols) */}
            <div
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              {/* Photo 03: Macro Stainless Steel Surgical Instruments */}
              <figure className="lg:col-span-4">
                <div className="overflow-hidden bg-slate-100 h-60 sm:h-64 lg:h-[260px]">
                  <img
                    src={companySteelInstrumentsImg}
                    alt="Precision stainless steel surgical forceps and scissors in sterile clinical tray"
                    className="w-full h-full object-cover object-center block"
                    width="440"
                    height="300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="pt-3 mt-1 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <span>
                    <strong className="text-[#0F172A] uppercase tracking-wider mr-2">03</strong>
                    Surgical Grade Instrumentation
                  </span>
                  <span className="text-slate-400">Theatre</span>
                </figcaption>
              </figure>

              {/* Center Woven Typographic Interlude (Open Whitespace — No Card, No Border Box) */}
              <div className="lg:col-span-4 py-2 lg:px-2 text-center lg:text-left">
                <div className="w-10 h-[2.5px] bg-brand-red mb-4 mx-auto lg:mx-0" aria-hidden="true" />
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight leading-snug mb-3">
                  Equipment Today.{' '}
                  <span className="text-brand-blue">Better Care Tomorrow.</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  Every piece of equipment placed in a hospital or clinic carries a long-term clinical responsibility. We back our supply with consistent consumable availability and dedicated servicing.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-brand-blue hover:text-brand-red border-b-2 border-brand-blue/30 hover:border-brand-red pb-1 transition-colors"
                  >
                    <span>PARTNER WITH FAB MEDICAL</span>
                    <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </div>

              {/* Photo 04: Clinical Inpatient Ward Interior */}
              <figure className="lg:col-span-4">
                <div className="overflow-hidden bg-slate-100 h-60 sm:h-64 lg:h-[260px]">
                  <img
                    src={companyWardInteriorImg}
                    alt="Bright hospital inpatient ward room equipped with adjustable clinical beds"
                    className="w-full h-full object-cover object-center block"
                    width="440"
                    height="300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="pt-3 mt-1 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <span>
                    <strong className="text-[#0F172A] uppercase tracking-wider mr-2">04</strong>
                    Inpatient Ward &amp; Recovery
                  </span>
                  <span className="text-slate-400">Hospital Care</span>
                </figcaption>
              </figure>
            </div>

          </div>

          {/* ACT 3: Open 3-Column Hairline Institutional Standards (No Cards, Pure Architectural Dividers) */}
          <div
            className="pt-10 sm:pt-12 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
            data-aos="fade-up"
            data-aos-duration="750"
          >
            <div className="md:pr-4">
              <div className="flex items-baseline space-x-2.5 mb-2">
                <span className="text-xs font-bold text-brand-red">01</span>
                <h3 className="text-sm sm:text-base font-extrabold text-[#0F172A] tracking-tight">
                  Vetted Clinical Suitability
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Systems selected for demanding clinical workloads, diagnostic accuracy, and straightforward operation by frontline medical staff.
              </p>
            </div>

            <div className="md:border-l md:border-slate-200 md:pl-8 md:pr-4">
              <div className="flex items-baseline space-x-2.5 mb-2">
                <span className="text-xs font-bold text-brand-red">02</span>
                <h3 className="text-sm sm:text-base font-extrabold text-[#0F172A] tracking-tight">
                  Uninterrupted Supply Continuity
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Laboratories and surgical units cannot afford stockouts. We maintain reliable availability of essential consumables and testing reagents.
              </p>
            </div>

            <div className="md:border-l md:border-slate-200 md:pl-8">
              <div className="flex items-baseline space-x-2.5 mb-2">
                <span className="text-xs font-bold text-brand-red">03</span>
                <h3 className="text-sm sm:text-base font-extrabold text-[#0F172A] tracking-tight">
                  Long-Term Technical Accountability
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our commitment continues long after handover through dedicated maintenance, calibration, and repair for the equipment we supply.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 3: WHAT FAB DOES — 4-Column Alternating Editorial Workflow Strip (No Cards, Open Hairlines) */}
      <section
        className="bg-[#F5F8FC] border-b border-slate-200 py-16 sm:py-20 lg:py-28"
        aria-labelledby="what-fab-does-heading"
      >
        <Container>
          {/* Top Broadsheet Header Row */}
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-12 sm:pb-14"
            data-aos="fade-up"
            data-aos-duration="750"
          >
            {/* Left Column (7 Cols): Eyebrow & Headline */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                <span className="w-8 h-[2.5px] bg-brand-red flex-shrink-0" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
                  WHAT FAB DOES
                </span>
              </div>

              <h2
                id="what-fab-does-heading"
                className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-extrabold tracking-tight text-[#0F172A] leading-[1.06] text-center lg:text-left"
              >
                Four Core Functions.{' '}
                <span className="text-brand-blue">One Accountable Workflow.</span>
              </h2>
            </div>

            {/* Right Column (5 Cols): Narrative & Direct Link */}
            <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                From international sourcing and specification matching to nationwide dispatch and post-handover technical maintenance, our four operational stages work together to keep clinical departments running.
              </p>
              <div className="flex justify-center lg:justify-start w-full sm:w-auto">
                <Link
                  to="/services"
                  className="group inline-flex items-center justify-center space-x-2.5 bg-brand-blue hover:bg-brand-red text-white text-xs font-bold uppercase tracking-[0.14em] px-6 py-3.5 rounded transition-colors duration-200 w-full sm:w-auto text-center"
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
            <article className="py-8 md:py-10 md:pr-6 lg:pr-7 flex flex-col justify-between">
              <div className="overflow-hidden bg-slate-200 h-56 sm:h-60 lg:h-56 mb-6">
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
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-extrabold text-brand-red tracking-tight">
                    01
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    Sourcing
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-tight text-[#0F172A] mb-2.5">
                  Procurement &amp; Supply
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Direct importation and supply of vetted hospital equipment, surgical instruments, and diagnostic reagents suited for clinical durability.
                </p>
                <div className="pt-3 border-t border-slate-200/80 text-[11px] font-bold uppercase tracking-wider text-brand-blue">
                  Equipment • Instruments • Reagents
                </div>
              </div>
            </article>

            {/* STAGE 02: MARKETING & SALES (Text Top → Photo Bottom on Desktop) */}
            <article className="py-8 md:py-10 md:pl-6 lg:px-7 md:border-l lg:border-l-0 border-slate-300/90 flex flex-col justify-between">
              <div className="order-2 lg:order-1 lg:mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-extrabold text-brand-red tracking-tight">
                    02
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    Consultation
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-tight text-[#0F172A] mb-2.5">
                  Marketing &amp; Sales
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Working closely with medical directors, laboratory heads, and procurement teams to match technical specifications to facility caseloads.
                </p>
                <div className="pt-3 border-t border-slate-200/80 text-[11px] font-bold uppercase tracking-wider text-brand-blue">
                  Clinical Matching • Quotations
                </div>
              </div>

              <div className="order-1 lg:order-2 overflow-hidden bg-slate-200 h-56 sm:h-60 lg:h-56 mb-6 lg:mb-0">
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
            <article className="py-8 md:py-10 md:pr-6 lg:px-7 md:border-t lg:border-t-0 border-slate-300/90 flex flex-col justify-between">
              <div className="overflow-hidden bg-slate-200 h-56 sm:h-60 lg:h-56 mb-6">
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
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-extrabold text-brand-red tracking-tight">
                    03
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    Logistics
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-tight text-[#0F172A] mb-2.5">
                  Safe Delivery
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Careful handling and timely dispatch of sensitive diagnostic instruments, reagents, and ward systems from Kampala to facilities across Uganda.
                </p>
                <div className="pt-3 border-t border-slate-200/80 text-[11px] font-bold uppercase tracking-wider text-brand-blue">
                  Nationwide Dispatch • On-Site Handover
                </div>
              </div>
            </article>

            {/* STAGE 04: SERVICE & REPAIR (Text Top → Photo Bottom on Desktop) */}
            <article className="py-8 md:py-10 md:pl-6 lg:pl-7 md:border-t md:border-l lg:border-t-0 lg:border-l-0 border-slate-300/90 flex flex-col justify-between">
              <div className="order-2 lg:order-1 lg:mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-extrabold text-brand-red tracking-tight">
                    04
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    Aftercare
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-tight text-[#0F172A] mb-2.5">
                  Service &amp; Repair
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Ongoing preventative maintenance, calibration, and responsive technical repair for the medical equipment that FAB supplies.
                </p>
                <div className="pt-3 border-t border-slate-200/80 text-[11px] font-bold uppercase tracking-wider text-brand-blue">
                  Maintenance • Technical Repair
                </div>
              </div>

              <div className="order-1 lg:order-2 overflow-hidden bg-slate-200 h-56 sm:h-60 lg:h-56 mb-6 lg:mb-0">
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

      {/* Section 4: AREAS OF MEDICAL SUPPLY — Staggered Open Architectural Spread (No Shape Cutouts, No Cards, Zero Repetition) */}
      <section
        className="bg-white border-b border-slate-200 py-16 sm:py-20 lg:py-28"
        aria-labelledby="areas-of-medical-supply-heading"
      >
        <Container>
          {/* 1. Top Editorial Header Row */}
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-12 sm:pb-16 border-b border-slate-200"
            data-aos="fade-up"
            data-aos-duration="750"
          >
            <div className="lg:col-span-7">
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                <span className="w-8 h-[2.5px] bg-brand-red flex-shrink-0" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
                  AREAS OF MEDICAL SUPPLY
                </span>
              </div>

              <h2
                id="areas-of-medical-supply-heading"
                className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-extrabold tracking-tight text-[#0F172A] leading-[1.06] text-center lg:text-left"
              >
                Supporting Healthcare Across{' '}
                <span className="text-brand-blue">Key Clinical Areas.</span>
              </h2>
            </div>

            <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Our supply catalog is structured around the four core clinical departments of modern healthcare facilities—from diagnostic benches and operating theatres to intensive care and outpatient consultation rooms.
              </p>
              <div className="flex justify-center lg:justify-start w-full sm:w-auto">
                <Link
                  to="/products"
                  className="group inline-flex items-center justify-center space-x-2.5 bg-[#0F172A] hover:bg-brand-blue text-white text-xs font-bold uppercase tracking-[0.14em] px-6 py-3.5 rounded transition-colors duration-200 w-full sm:w-auto text-center"
                >
                  <span>EXPLORE FULL EQUIPMENT CATALOG</span>
                  <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* 2. Tier 1: Staggered Editorial Pair (01 Laboratory + 02 Surgical Theatres) */}
          <div
            className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start border-b border-slate-200"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {/* AREA 01: LABORATORY (Cols 1–6) */}
            <article className="lg:col-span-6 lg:pr-4">
              <Link to="/products/laboratory" className="group block cursor-pointer">
                <div className="overflow-hidden bg-slate-100 h-68 sm:h-80 lg:h-[360px] mb-6">
                  <img
                    src={areaLabBioImg}
                    alt="Clinical laboratory biological safety cabinet, pipettes, and diagnostic sample racks"
                    className="w-full h-full object-cover object-center block transition-transform duration-700 ease-out group-hover:scale-105"
                    width="600"
                    height="400"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-extrabold text-brand-red">01</span>
                    <span className="w-5 h-[1.5px] bg-slate-300" aria-hidden="true" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-blue">
                      Diagnostics • Reagents • Test Kits
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#0F172A] group-hover:text-brand-blue transition-colors mb-2.5">
                  Laboratory
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mb-5">
                  Equipping hospital and reference laboratories with biological safety cabinets, benchtop centrifuges, binocular microscopes, and chemical reagents for accurate daily pathology and blood analysis.
                </p>

                <div>
                  <span className="inline-flex items-center space-x-2.5 bg-brand-blue group-hover:bg-brand-red text-white text-xs font-bold uppercase tracking-[0.14em] px-5 py-2.5 transition-colors duration-200">
                    <span>Explore More</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                      &rarr;
                    </span>
                  </span>
                </div>
              </Link>
            </article>

            {/* AREA 02: SURGICAL THEATRES (Cols 7–12 — Stepped Down on Desktop) */}
            <article className="lg:col-span-6 lg:mt-16 lg:pl-8 lg:border-l lg:border-slate-200">
              <Link to="/products/theatre-room" className="group block cursor-pointer">
                <div className="overflow-hidden bg-slate-100 h-68 sm:h-80 lg:h-[360px] mb-6">
                  <img
                    src={areaTheatreDragerImg}
                    alt="Dräger anaesthesia workstation and sterile surgical instrument table in operating theatre"
                    className="w-full h-full object-cover object-center block transition-transform duration-700 ease-out group-hover:scale-105"
                    width="600"
                    height="400"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-extrabold text-brand-red">02</span>
                    <span className="w-5 h-[1.5px] bg-slate-300" aria-hidden="true" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-blue">
                      Instruments • Equipment • Consumables
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#0F172A] group-hover:text-brand-blue transition-colors mb-2.5">
                  Surgical Theatres
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mb-5">
                  Supplying operating rooms with anaesthesia workstations, electrosurgical units, hydraulic operating tables, autoclaves, and precision stainless-steel surgical instrumentation.
                </p>

                <div>
                  <span className="inline-flex items-center space-x-2.5 bg-brand-blue group-hover:bg-brand-red text-white text-xs font-bold uppercase tracking-[0.14em] px-5 py-2.5 transition-colors duration-200">
                    <span>Explore More</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                      &rarr;
                    </span>
                  </span>
                </div>
              </Link>
            </article>
          </div>

          {/* 3. Tier 2: Asymmetric Editorial Pair (03 Critical Care + 04 General Medical & Consultation) */}
          <div
            className="pt-12 sm:pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            {/* AREA 03: CRITICAL CARE (Cols 1–5) */}
            <article className="lg:col-span-5 lg:pr-4">
              <Link to="/products/emergency-icu" className="group block cursor-pointer">
                <div className="overflow-hidden bg-slate-100 h-64 sm:h-72 lg:h-[310px] mb-6">
                  <img
                    src={areaCriticalMonitorImg}
                    alt="GE Carescape multi-parameter ICU patient monitor in critical care unit"
                    className="w-full h-full object-cover object-center block transition-transform duration-700 ease-out group-hover:scale-105"
                    width="500"
                    height="360"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-extrabold text-brand-red">03</span>
                    <span className="w-5 h-[1.5px] bg-slate-300" aria-hidden="true" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-blue">
                      Monitors • Ventilators • Life Support
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#0F172A] group-hover:text-brand-blue transition-colors mb-2.5">
                  Critical Care
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  Outfitting intensive care and high-dependency units with continuous vital-signs monitors, medical oxygen concentrators, and emergency resuscitation equipment.
                </p>

                <div>
                  <span className="inline-flex items-center space-x-2.5 bg-brand-blue group-hover:bg-brand-red text-white text-xs font-bold uppercase tracking-[0.14em] px-5 py-2.5 transition-colors duration-200">
                    <span>Explore More</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                      &rarr;
                    </span>
                  </span>
                </div>
              </Link>
            </article>

            {/* AREA 04: GENERAL MEDICAL & CONSULTATION (Cols 6–12 — Stepped Down on Desktop) */}
            <article className="lg:col-span-7 lg:mt-12 lg:pl-8 lg:border-l lg:border-slate-200">
              <Link to="/products/diagnostics" className="group block cursor-pointer">
                <div className="overflow-hidden bg-slate-100 h-64 sm:h-72 lg:h-[310px] mb-6">
                  <img
                    src={areaGeneralDiagnosticImg}
                    alt="Mindray clinical diagnostic ultrasound console and transducer probes for outpatient consultation"
                    className="w-full h-full object-cover object-center block transition-transform duration-700 ease-out group-hover:scale-105"
                    width="700"
                    height="360"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-extrabold text-brand-red">04</span>
                    <span className="w-5 h-[1.5px] bg-slate-300" aria-hidden="true" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-blue">
                      Diagnostic Systems • Examination Tools • Consumables
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#0F172A] group-hover:text-brand-blue transition-colors mb-2.5">
                  General Medical &amp; Consultation
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mb-5">
                  Supporting outpatient clinics, maternity wards, and general consultation rooms with diagnostic ultrasound consoles, resting ECG analyzers, hospital beds, and everyday clinical supplies.
                </p>

                <div>
                  <span className="inline-flex items-center space-x-2.5 bg-brand-blue group-hover:bg-brand-red text-white text-xs font-bold uppercase tracking-[0.14em] px-5 py-2.5 transition-colors duration-200">
                    <span>Explore More</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                      &rarr;
                    </span>
                  </span>
                </div>
              </Link>
            </article>
          </div>
        </Container>
      </section>

      {/* Section 5: WHO FAB SUPPORTS — Editorial Institutional Index & Documentary Photo-Ledger (No Grid Paper, No SVG Webs, No Cards) */}
      <section
        className="bg-[#F5F8FC] border-b border-slate-200 py-16 sm:py-20 lg:py-28"
        aria-labelledby="who-fab-supports-heading"
      >
        <Container>
          {/* 1. Top Broadsheet Header Row */}
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-12 sm:pb-16 border-b border-slate-300/90"
            data-aos="fade-up"
            data-aos-duration="750"
          >
            <div className="lg:col-span-7">
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                <span className="w-8 h-[2.5px] bg-brand-red flex-shrink-0" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
                  WHO FAB SUPPORTS
                </span>
              </div>

              <h2
                id="who-fab-supports-heading"
                className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-extrabold tracking-tight text-[#0F172A] leading-[1.06] text-center lg:text-left"
              >
                Supporting the Healthcare{' '}
                <span className="text-brand-blue">Ecosystem Across Uganda.</span>
              </h2>
            </div>

            <div className="lg:col-span-5 text-center lg:text-left">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                FAB partners with national and regional hospitals, diagnostic laboratories, private clinics, public health programs, and the medical professionals and patients who depend on reliable clinical infrastructure.
              </p>
            </div>
          </div>

          {/* 2. TIER 1: HEALTHCARE INSTITUTIONS & ORGANIZATIONS (Interlocking Photo + Open Hairline Ledger) */}
          <div className="pt-8 sm:pt-10">
            <div className="flex items-center justify-center sm:justify-between pb-4 border-b border-slate-300/90">
              <div className="flex items-center space-x-2.5">
                <span className="w-2.5 h-2.5 bg-brand-blue inline-block" aria-hidden="true" />
                <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand-blue text-center sm:text-left">
                  Part I — Healthcare Institutions &amp; Supply Network
                </span>
              </div>
              <span className="hidden sm:inline text-[11px] font-bold uppercase tracking-widest text-slate-400">
                01 — 04 / Facility Coverage
              </span>
            </div>

            {/* Row A: Documentary Hospital Photo (Left 5 Cols) + Sectors 01 & 02 (Right 7 Cols) */}
            <div
              className="py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch border-b border-slate-300/90"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {/* Left Documentary Photo: Mulago Specialised Hospital */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div className="overflow-hidden bg-slate-200 h-64 sm:h-72 lg:h-full min-h-[260px]">
                  <img
                    src={whoMulagoHospitalImg}
                    alt="Mulago Specialised Hospital Maternal and Neonatal Centre in Kampala, Uganda"
                    className="w-full h-full object-cover object-center block"
                    width="540"
                    height="360"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="pt-2.5 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  <span>Referral &amp; Regional Hospital Infrastructure</span>
                  <span className="text-brand-blue">Kampala, Uganda</span>
                </div>
              </div>

              {/* Right 2-Column Open Hairline Ledger: 01 Hospitals & 02 Clinics */}
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-300/90">
                {/* 01: Hospitals & Health Facilities */}
                <div className="pb-8 md:pb-0 md:pr-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-2xl font-extrabold text-brand-red">01</span>
                      <span className="w-6 h-[1.5px] bg-slate-300" aria-hidden="true" />
                      <span className="text-[11px] font-bold uppercase tracking-widest text-brand-blue">
                        Primary Care &amp; Referral
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#0F172A] mb-3 leading-snug">
                      Hospitals &amp; Health Facilities
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Supplying national referral centres, regional hospitals, and faith-based mission hospitals with operating theatre systems, ICU monitors, inpatient beds, and central sterilization units.
                    </p>
                  </div>
                  <div className="pt-5 mt-6 border-t border-slate-200/90 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Theatres • Wards • ICU • Sterilization
                  </div>
                </div>

                {/* 02: Clinics & Medical Practices */}
                <div className="pt-8 md:pt-0 md:pl-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-2xl font-extrabold text-brand-red">02</span>
                      <span className="w-6 h-[1.5px] bg-slate-300" aria-hidden="true" />
                      <span className="text-[11px] font-bold uppercase tracking-widest text-brand-blue">
                        Outpatient &amp; Specialist
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#0F172A] mb-3 leading-snug">
                      Clinics &amp; Medical Practices
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Equipping private medical centres, maternity clinics, and outpatient practices with diagnostic ultrasound consoles, ECG machines, examination couches, and daily medical consumables.
                    </p>
                  </div>
                  <div className="pt-5 mt-6 border-t border-slate-200/90 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Consultation • Maternity • Diagnostics
                  </div>
                </div>
              </div>
            </div>

            {/* Row B: Sectors 03 & 04 (Left 7 Cols) + Documentary Laboratory Photo (Right 5 Cols) */}
            <div
              className="py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch border-b border-slate-300/90"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {/* Left 2-Column Open Hairline Ledger: 03 Laboratories & 04 Public Health / NGOs / Pharmacies */}
              <div className="order-2 lg:order-1 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-300/90">
                {/* 03: Laboratories & Diagnostic Centres */}
                <div className="pb-8 md:pb-0 md:pr-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-2xl font-extrabold text-brand-red">03</span>
                      <span className="w-6 h-[1.5px] bg-slate-300" aria-hidden="true" />
                      <span className="text-[11px] font-bold uppercase tracking-widest text-brand-blue">
                        Pathology &amp; Testing
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#0F172A] mb-3 leading-snug">
                      Laboratories &amp; Diagnostic Centres
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Supporting hospital and independent reference laboratories with biosafety cabinets, benchtop centrifuges, binocular microscopes, chemical reagents, and rapid diagnostic test kits.
                    </p>
                  </div>
                  <div className="pt-5 mt-6 border-t border-slate-200/90 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Analyzers • Biosafety • Reagents
                  </div>
                </div>

                {/* 04: Government Bodies, NGOs & Pharmacies */}
                <div className="pt-8 md:pt-0 md:pl-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-2xl font-extrabold text-brand-red">04</span>
                      <span className="w-6 h-[1.5px] bg-slate-300" aria-hidden="true" />
                      <span className="text-[11px] font-bold uppercase tracking-widest text-brand-blue">
                        Institutional &amp; Retail Network
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#0F172A] mb-3 leading-snug">
                      Public Health Bodies, NGOs &amp; Pharmacies
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Working with government health agencies, humanitarian healthcare programs, and community pharmacies across Uganda to maintain dependable supply chains for essential medical devices.
                    </p>
                  </div>
                  <div className="pt-5 mt-6 border-t border-slate-200/90 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Public Sector • NGOs • Pharmacies
                  </div>
                </div>
              </div>

              {/* Right Documentary Photo: Multi-Bench Reference Laboratory */}
              <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col justify-between">
                <div className="overflow-hidden bg-slate-200 h-64 sm:h-72 lg:h-full min-h-[260px]">
                  <img
                    src={whoReferenceLabImg}
                    alt="Clinical diagnostic and reference laboratory benches with fume extraction hoods"
                    className="w-full h-full object-cover object-center block"
                    width="540"
                    height="360"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="pt-2.5 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  <span>Reference &amp; Hospital Laboratory Systems</span>
                  <span className="text-brand-blue">Diagnostics</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. TIER 2: PEOPLE AT THE CENTRE OF HEALTHCARE (05 Clinicians + Center Documentary Pair + 06 Patients) */}
          <div
            className="pt-10 sm:pt-12"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="flex items-center justify-center sm:justify-between pb-4 border-b border-slate-300/90">
              <div className="flex items-center space-x-2.5">
                <span className="w-2.5 h-2.5 bg-brand-red inline-block" aria-hidden="true" />
                <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#0F172A] text-center sm:text-left">
                  Part II — People at the Centre of Healthcare
                </span>
              </div>
              <span className="hidden sm:inline text-[11px] font-bold uppercase tracking-widest text-slate-400">
                05 — 06 / Human Impact
              </span>
            </div>

            <div className="py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center border-b border-slate-300/90">
              {/* 05: Healthcare Professionals (Cols 1–4) */}
              <div className="lg:col-span-4 lg:pr-4">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-2xl font-extrabold text-brand-red">05</span>
                  <span className="w-6 h-[1.5px] bg-brand-red" aria-hidden="true" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-brand-blue">
                    Clinical Practice
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#0F172A] mb-3 leading-snug">
                  Healthcare Professionals
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Surgeons, physicians, nurses, laboratory technologists, and biomedical engineers who rely on accurate diagnostic readings and dependable surgical instruments every shift.
                </p>
              </div>

              {/* Center Dual Documentary Photographs (Cols 5–8) */}
              <div className="lg:col-span-4 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="overflow-hidden bg-slate-200 h-48 sm:h-56">
                  <img
                    src={whoRadiologyCareImg}
                    alt="Clinician operating diagnostic imaging scanner with patient"
                    className="w-full h-full object-cover object-center block"
                    width="280"
                    height="240"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="overflow-hidden bg-slate-200 h-48 sm:h-56">
                  <img
                    src={whoInpatientWardBedsImg}
                    alt="Prepared hospital inpatient recovery ward with medical beds and privacy curtains"
                    className="w-full h-full object-cover object-center block"
                    width="280"
                    height="240"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* 06: Individuals & Patients (Cols 9–12) */}
              <div className="lg:col-span-4 lg:pl-4">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-2xl font-extrabold text-brand-red">06</span>
                  <span className="w-6 h-[1.5px] bg-brand-red" aria-hidden="true" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-brand-blue">
                    End Beneficiaries
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#0F172A] mb-3 leading-snug">
                  Individuals &amp; Patients
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The individuals, mothers, and families across Uganda who ultimately benefit from timely laboratory results, safe surgical procedures, and well-equipped recovery wards.
                </p>
              </div>
            </div>

            {/* Editorial Closing Brand Line */}
            <div className="pt-6 flex flex-col sm:flex-row items-center sm:justify-between gap-3 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start space-x-3 text-xs font-extrabold uppercase tracking-[0.16em] text-brand-blue">
                <span className="w-8 h-[2px] bg-brand-red inline-block" aria-hidden="true" />
                <span>SUPPORTING THE SYSTEMS BEHIND BETTER HEALTHCARE.</span>
              </div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                FAB MEDICAL SUPPLIES LTD. • NATIONWIDE COVERAGE
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
