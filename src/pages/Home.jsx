import React from 'react';
import { Link } from 'react-router-dom';
import { Container, LogoLoader, HomeHero } from '../components';
import heroEquipmentImg from '../assets/hero-medical-equipment.webp';
import fabLogoImg from '../assets/fab-logo.webp';
import whoWeAreEquipImg from '../assets/who-we-are-equipment.webp';
import hospitalsImg from '../assets/mulago hospital.jpg';
import labsImg from '../assets/medical laboratory.jpg';
import healthCentresImg from '../assets/who-we-serve-medcare.jpg';
import ngosImg from '../assets/ngos.jpg';
import patientsImg from '../assets/who-we-serve-patient.jpg';
import criticalCareImg from '../assets/category-critical-care.webp';
import theatreRoomImg from '../assets/category-theatre-room.webp';
import laboratoryImg from '../assets/category-laboratory.webp';
import opdConsultationImg from '../assets/category-opd-consultation.webp';
import surgicalKitImg from '../assets/products/surgical_instruments_kit.webp';

export default function Home({ onNavigate }) {
  return (
    <div>
      {/* Clean Professional Logo Loader */}
      <LogoLoader duration={1600} />

      {/* Editorial Medical Equipment Showcase Hero Section (Inspired by reference composition) */}
      <HomeHero />

      {/* Who We Are Section - Partner in Healthcare Supply Editorial Split + Capability Band */}
      <section
        className="bg-white border-b border-border relative overflow-hidden pt-12 sm:pt-16 lg:pt-20"
        aria-labelledby="who-we-are-heading"
      >
        <Container className="relative pb-12 sm:pb-16 lg:pb-20">
          {/* Top Section Banner Header */}
          <div
            className="flex items-center justify-center lg:justify-start space-x-3 mb-8 sm:mb-10 lg:mb-12"
            data-aos="fade-down"
            data-aos-duration="750"
          >
            <span className="w-7 sm:w-8 h-[3px] bg-brand-red rounded-full flex-shrink-0" aria-hidden="true" />
            <span className="text-sm sm:text-base lg:text-lg font-extrabold uppercase tracking-[0.06em] text-brand-blue text-center lg:text-left">
              YOUR PARTNER IN HEALTHCARE SUPPLY
            </span>
          </div>

          {/* Main 2-Column Split: Editorial Content Left | Surgical Instruments Photography Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Eyebrow, Headline, Narrative, CTA & 3 Trust Pillars */}
            <div
              className="lg:col-span-6 space-y-6"
              data-aos="fade-right"
              data-aos-duration="850"
            >
              {/* Eyebrow */}
              <div className="flex items-center justify-center lg:justify-start space-x-2.5">
                <span className="w-4 h-[2px] bg-brand-red rounded-full flex-shrink-0" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">
                  WHO WE ARE
                </span>
              </div>

              {/* Dominant Headline */}
              <h2
                id="who-we-are-heading"
                className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3rem] font-extrabold text-brand-blue tracking-tight leading-[1.1] text-center lg:text-left"
              >
                Reliable equipment.<br />
                Better care.
              </h2>

              {/* Supporting Narrative */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal text-center lg:text-left">
                FAB Medical Supplies Ltd. is a trusted supplier of high-quality medical equipment, instruments, and reagents used in laboratories, theatres, and general clinical care — committed to supporting healthcare facilities across Uganda with reliable products and dedicated service.
              </p>

              {/* Primary CTA Button */}
              <div className="pt-1 flex justify-center lg:justify-start w-full sm:w-auto">
                <Link
                  to="/about"
                  className="group inline-flex items-center justify-center space-x-2.5 bg-brand-red text-white hover:bg-[#cf171e] font-bold text-xs sm:text-sm tracking-wider uppercase px-6 py-3.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 min-h-[46px] cursor-pointer w-full sm:w-auto text-center"
                >
                  <span>ABOUT FAB</span>
                  <span
                    className="text-white text-base font-bold transition-transform duration-150 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                </Link>
              </div>

              {/* 3 Trust Checkmark Pillars (Desktop / Tablet only; hidden on mobile devices) */}
              <div className="hidden md:grid pt-3 grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 border-t border-slate-100">
                {/* Pillar 1: Quality Products */}
                <div className="flex items-center justify-center lg:justify-start space-x-2.5">
                  <div className="w-5 h-5 rounded-full border-[1.5px] border-brand-red flex items-center justify-center text-brand-red flex-shrink-0">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.8} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="text-xs sm:text-[13px] font-bold text-brand-blue block leading-snug">
                      Quality Products
                    </span>
                    <span className="text-[11px] text-slate-500 block leading-tight mt-0.5">
                      Trusted &amp; verified
                    </span>
                  </div>
                </div>

                {/* Pillar 2: Timely Delivery */}
                <div className="flex items-center justify-center lg:justify-start space-x-2.5">
                  <div className="w-5 h-5 rounded-full border-[1.5px] border-brand-red flex items-center justify-center text-brand-red flex-shrink-0">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.8} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="text-xs sm:text-[13px] font-bold text-brand-blue block leading-snug">
                      Timely Delivery
                    </span>
                    <span className="text-[11px] text-slate-500 block leading-tight mt-0.5">
                      When you need it
                    </span>
                  </div>
                </div>

                {/* Pillar 3: Expert Support */}
                <div className="flex items-center justify-center lg:justify-start space-x-2.5">
                  <div className="w-5 h-5 rounded-full border-[1.5px] border-brand-red flex items-center justify-center text-brand-red flex-shrink-0">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.8} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="text-xs sm:text-[13px] font-bold text-brand-blue block leading-snug">
                      Expert Support
                    </span>
                    <span className="text-[11px] text-slate-500 block leading-tight mt-0.5">
                      Service &amp; repair
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Framed Surgical Instruments Flat-Lay Photography */}
            <div
              className="lg:col-span-6"
              data-aos="fade-left"
              data-aos-duration="900"
              data-aos-delay="100"
            >
              <div className="group relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-[0_14px_40px_rgba(33,64,154,0.1)] bg-[#E8F2FC] mx-auto max-w-lg lg:max-w-none">
                <img
                  src={surgicalKitImg}
                  alt="Stainless steel surgical instruments, sterilization tray, and clinical consumables arranged on sterile blue theatre drape"
                  width="720"
                  height="480"
                  decoding="async"
                  loading="lazy"
                  className="w-full h-full aspect-[16/11] object-cover object-center block transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </div>

          </div>
        </Container>

        {/* Bottom Full-Width Light-Blue Capability Band (Supply | Delivery | Service & Repair) */}
        <div className="bg-[#EDF4FC] border-t border-[#D8E6F6]">
          <Container className="py-8 sm:py-10 lg:py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#C6DAF0]">
              
              {/* 1. SUPPLY */}
              <div
                className="py-5 md:py-1 md:pr-8 lg:pr-10 flex flex-col items-center text-center md:flex-row md:items-start md:text-left space-y-3 md:space-y-0 md:space-x-4 sm:space-x-5"
                data-aos="fade-up"
                data-aos-duration="750"
                data-aos-delay="100"
              >
                {/* 3D Supply Cube Icon */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center text-brand-blue flex-shrink-0 mt-0.5">
                  <svg className="w-10 h-10 stroke-[1.7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 4.875l9 5.25" />
                  </svg>
                </div>
                <div className="space-y-1.5 max-w-sm md:max-w-none">
                  <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wide text-brand-blue">
                    SUPPLY
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                    Medical equipment, instruments and reagents sourced from trusted manufacturers worldwide.
                  </p>
                </div>
              </div>

              {/* 2. DELIVERY */}
              <div
                className="py-5 md:py-1 md:px-8 lg:px-10 flex flex-col items-center text-center md:flex-row md:items-start md:text-left space-y-3 md:space-y-0 md:space-x-4 sm:space-x-5"
                data-aos="fade-up"
                data-aos-duration="750"
                data-aos-delay="200"
              >
                {/* Fast Delivery Truck Icon */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center text-brand-blue flex-shrink-0 mt-0.5">
                  <svg className="w-10 h-10 stroke-[1.7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                </div>
                <div className="space-y-1.5 max-w-sm md:max-w-none">
                  <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wide text-brand-blue">
                    DELIVERY
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                    Getting supplies where they are needed, on time and in safe condition across Uganda.
                  </p>
                </div>
              </div>

              {/* 3. SERVICE & REPAIR */}
              <div
                className="py-5 md:py-1 md:pl-8 lg:pl-10 flex flex-col items-center text-center md:flex-row md:items-start md:text-left space-y-3 md:space-y-0 md:space-x-4 sm:space-x-5"
                data-aos="fade-up"
                data-aos-duration="750"
                data-aos-delay="300"
              >
                {/* Wrench & Screwdriver Technical Icon */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center text-brand-blue flex-shrink-0 mt-0.5">
                  <svg className="w-10 h-10 stroke-[1.7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
                <div className="space-y-1.5 max-w-sm md:max-w-none">
                  <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wide text-brand-blue">
                    SERVICE &amp; REPAIR
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                    Keeping supplied equipment in top working condition for better patient outcomes.
                  </p>
                </div>
              </div>

            </div>
          </Container>
        </div>
      </section>

      {/* Key Equipment Categories Section - Interactive Architectural Department Grid */}
      <section
        className="bg-[#FAFCFF] border-b border-border relative overflow-hidden py-14 sm:py-18 lg:py-22"
        aria-labelledby="equipment-categories-heading"
      >
        {/* Subtle red accent tab at bottom-left border */}
        <div
          className="absolute left-0 bottom-10 sm:bottom-14 w-2.5 sm:w-3 h-8 sm:h-10 bg-brand-red rounded-r-md pointer-events-none"
          aria-hidden="true"
        />

        <Container>
          {/* Split Header Introduction */}
          <div
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
              <div className="flex items-center justify-center lg:justify-start space-x-2.5 mb-3">
                <span className="w-6 h-[3px] bg-brand-red rounded-full flex-shrink-0" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">
                  EQUIPMENT CATALOGUE
                </span>
              </div>
              <h2
                id="equipment-categories-heading"
                className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-brand-blue tracking-tight leading-tight"
              >
                Key Equipment Categories
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-3">
                We supply medical equipment across multiple clinical departments, from critical care and surgical theatres to diagnostic laboratories and outpatient consultation.
              </p>
            </div>

            {/* Desktop Header CTA & Department Counter */}
            <div className="hidden lg:flex flex-col items-end space-y-2.5 flex-shrink-0">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-slate-400">
                04 FEATURED • 09 TOTAL DEPARTMENTS
              </span>
              <Link
                to="/products"
                className="group inline-flex items-center space-x-2.5 bg-brand-red text-white hover:bg-[#cf171e] font-bold text-xs xl:text-sm tracking-wider uppercase px-5 py-3 rounded-lg shadow-sm hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 cursor-pointer"
              >
                <span>VIEW ALL EQUIPMENT</span>
                <span
                  className="text-white text-base font-bold transition-transform duration-150 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </div>

          {/* Interactive Asymmetric 2-Row Department Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-7">
            
            {/* 01. CRITICAL CARE (lg:col-span-5) */}
            <Link
              to="/products/emergency-icu"
              className="lg:col-span-5 group bg-white rounded-2xl border border-slate-200/90 hover:border-brand-blue/40 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="50"
            >
              {/* Image Area */}
              <div className="relative h-60 sm:h-64 lg:h-68 overflow-hidden bg-slate-100">
                <img
                  src={criticalCareImg}
                  alt="Critical care medical equipment including specialized patient monitoring and intensive care ventilator system"
                  width="540"
                  height="380"
                  decoding="async"
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 via-transparent to-transparent" />
                <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-xs border border-slate-200/80 px-2.5 py-1 rounded-md shadow-2xs flex items-center space-x-1.5">
                  <span className="text-[11px] font-mono font-bold text-brand-red">01</span>
                  <span className="text-slate-300 font-mono text-[10px]">/</span>
                  <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-brand-blue">
                    EMERGENCY &amp; ICU
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A] group-hover:text-brand-blue transition-colors tracking-tight">
                      Critical Care
                    </h3>
                    <span className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-brand-red text-brand-blue group-hover:text-white flex items-center justify-center transition-all duration-200 group-hover:translate-x-0.5 flex-shrink-0">
                      <svg className="w-4 h-4 stroke-[2.4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Patient monitors, oxygen concentrators, ventilators, and intensive care life-support equipment.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
                  {['Patient Monitors', 'ICU Ventilators', 'Oxygen Systems', 'Defibrillators'].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono font-semibold text-brand-blue bg-[#F0F5FC] px-2 py-1.5 rounded border border-[#D7E2F2] flex items-center justify-center text-center leading-tight min-h-[32px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>

            {/* 02. THEATRE ROOM (lg:col-span-7) */}
            <Link
              to="/products/theatre-room"
              className="lg:col-span-7 group bg-white rounded-2xl border border-slate-200/90 hover:border-brand-blue/40 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="150"
            >
              {/* Image Area */}
              <div className="relative h-60 sm:h-64 lg:h-68 overflow-hidden bg-slate-100">
                <img
                  src={theatreRoomImg}
                  alt="Surgical operating theatre equipped with operating table, surgical lighting, and clinical anesthesia monitoring"
                  width="760"
                  height="380"
                  decoding="async"
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 via-transparent to-transparent" />
                <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-xs border border-slate-200/80 px-2.5 py-1 rounded-md shadow-2xs flex items-center space-x-1.5">
                  <span className="text-[11px] font-mono font-bold text-brand-red">02</span>
                  <span className="text-slate-300 font-mono text-[10px]">/</span>
                  <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-brand-blue">
                    SURGERY &amp; ANAESTHESIA
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A] group-hover:text-brand-blue transition-colors tracking-tight">
                      Theatre Room
                    </h3>
                    <span className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-brand-red text-brand-blue group-hover:text-white flex items-center justify-center transition-all duration-200 group-hover:translate-x-0.5 flex-shrink-0">
                      <svg className="w-4 h-4 stroke-[2.4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Anesthesia workstations, multi-position operating tables, electrosurgical diathermy units, and surgical instruments.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
                  {['Anesthesia Units', 'Operating Tables', 'Diathermy Units', 'Surgical Instruments'].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono font-semibold text-brand-blue bg-[#F0F5FC] px-2 py-1.5 rounded border border-[#D7E2F2] flex items-center justify-center text-center leading-tight min-h-[32px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>

            {/* 03. LABORATORY (lg:col-span-7) */}
            <Link
              to="/products/laboratory"
              className="lg:col-span-7 group bg-white rounded-2xl border border-slate-200/90 hover:border-brand-blue/40 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              {/* Image Area */}
              <div className="relative h-60 sm:h-64 lg:h-68 overflow-hidden bg-slate-100">
                <img
                  src={laboratoryImg}
                  alt="Clinical laboratory diagnostic automated chemistry and immunoassay analyzer system"
                  width="760"
                  height="380"
                  decoding="async"
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 via-transparent to-transparent" />
                <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-xs border border-slate-200/80 px-2.5 py-1 rounded-md shadow-2xs flex items-center space-x-1.5">
                  <span className="text-[11px] font-mono font-bold text-brand-red">03</span>
                  <span className="text-slate-300 font-mono text-[10px]">/</span>
                  <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-brand-blue">
                    DIAGNOSTICS &amp; REAGENTS
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A] group-hover:text-brand-blue transition-colors tracking-tight">
                      Laboratory
                    </h3>
                    <span className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-brand-red text-brand-blue group-hover:text-white flex items-center justify-center transition-all duration-200 group-hover:translate-x-0.5 flex-shrink-0">
                      <svg className="w-4 h-4 stroke-[2.4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Diagnostic analyzers, binocular research microscopes, centrifuges, Class II biosafety cabinets, and reagents.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
                  {['Diagnostic Analyzers', 'Microscopes', 'Centrifuges', 'Biosafety Cabinets'].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono font-semibold text-brand-blue bg-[#F0F5FC] px-2 py-1.5 rounded border border-[#D7E2F2] flex items-center justify-center text-center leading-tight min-h-[32px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>

            {/* 04. OPD & CONSULTATION (lg:col-span-5) */}
            <Link
              to="/products/opd-consultation"
              className="lg:col-span-5 group bg-white rounded-2xl border border-slate-200/90 hover:border-brand-blue/40 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              {/* Image Area */}
              <div className="relative h-60 sm:h-64 lg:h-68 overflow-hidden bg-slate-100">
                <img
                  src={opdConsultationImg}
                  alt="Outpatient department diagnostic ultrasound machine and clinical examination couch"
                  width="540"
                  height="380"
                  decoding="async"
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 via-transparent to-transparent" />
                <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-xs border border-slate-200/80 px-2.5 py-1 rounded-md shadow-2xs flex items-center space-x-1.5">
                  <span className="text-[11px] font-mono font-bold text-brand-red">04</span>
                  <span className="text-slate-300 font-mono text-[10px]">/</span>
                  <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-brand-blue">
                    OUTPATIENT &amp; WARD
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A] group-hover:text-brand-blue transition-colors tracking-tight">
                      OPD &amp; Consultation
                    </h3>
                    <span className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-brand-red text-brand-blue group-hover:text-white flex items-center justify-center transition-all duration-200 group-hover:translate-x-0.5 flex-shrink-0">
                      <svg className="w-4 h-4 stroke-[2.4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Examination couches, blood pressure monitors, stethoscopes, and outpatient consultation room equipment.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
                  {['Examination Couches', 'BP Monitors', 'Diagnostic Tools', 'Stethoscopes'].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono font-semibold text-brand-blue bg-[#F0F5FC] px-2 py-1.5 rounded border border-[#D7E2F2] flex items-center justify-center text-center leading-tight min-h-[32px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>

          </div>

          {/* Bottom Additional Clinical Specialties Strip (05–09) + CTA */}
          <div
            className="mt-8 bg-white border border-slate-200/90 rounded-xl p-4 sm:p-5 shadow-2xs space-y-3.5"
            data-aos="fade-up"
            data-aos-duration="750"
          >
            {/* Header: Label + View All Link */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center space-x-2.5">
                <span className="w-2 h-2 rounded-full bg-brand-red" aria-hidden="true" />
                <span className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-brand-blue">
                  MORE SPECIALTIES:
                </span>
              </div>
              <Link
                to="/products"
                className="hidden sm:inline-flex items-center space-x-1.5 text-xs font-mono font-bold uppercase tracking-wider text-brand-red hover:text-brand-blue transition-colors"
              >
                <span>EXPLORE ALL 9 CATEGORIES</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            {/* Symmetrical 1-Column List on Mobile (< md) / 5-Column Single Row on Tablet & Desktop (md:) */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
              {[
                { num: '05', label: 'Radiology & Imaging', path: '/products/radiology-imaging' },
                { num: '06', label: 'Maternity & Pediatrics', path: '/products/maternity-pediatrics' },
                { num: '07', label: 'Hospital Furniture', path: '/products/hospital-furniture' },
                { num: '08', label: 'Specialized Departments', path: '/products/specialized-departments' },
                { num: '09', label: 'Supporting & Utility', path: '/products/utility-services' },
              ].map((dept) => (
                <Link
                  key={dept.num}
                  to={dept.path}
                  className="flex items-center justify-between md:justify-center space-x-2 text-xs font-medium text-slate-700 hover:text-brand-blue bg-slate-50 hover:bg-[#EDF4FC] border border-slate-200/80 hover:border-brand-blue/30 px-3.5 py-2.5 md:py-2 rounded-lg transition-all"
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono font-bold text-brand-red">{dept.num}</span>
                    <span className="font-semibold text-[#0F172A]">{dept.label}</span>
                  </div>
                  <span className="text-xs text-[#21409A] md:hidden" aria-hidden="true">&rarr;</span>
                </Link>
              ))}
            </div>

            {/* Mobile View All Button */}
            <div className="sm:hidden pt-1">
              <Link
                to="/products"
                className="group inline-flex items-center justify-center space-x-2 bg-brand-red text-white hover:bg-[#cf171e] font-bold text-xs tracking-wider uppercase px-5 py-2.5 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red w-full cursor-pointer"
              >
                <span>EXPLORE ALL 9 CATEGORIES</span>
                <span className="ml-1 text-white text-base font-bold transition-transform duration-150 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Sectors Served Section - Card-Free Open Architectural Editorial Composition */}
      <section
        className="bg-white border-b border-border relative overflow-hidden py-14 sm:py-18 lg:py-24"
        aria-labelledby="sectors-served-heading"
      >
        {/* Subtle red accent tab on left edge */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-2 sm:w-2.5 h-10 sm:h-12 bg-brand-red rounded-r-md pointer-events-none"
          aria-hidden="true"
        />

        <Container>
          {/* 1. Open Editorial Header Row */}
          <div
            className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6 pb-8 sm:pb-10 border-b border-slate-200 text-center lg:text-left"
            data-aos="fade-up"
            data-aos-duration="750"
          >
            <div className="max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center justify-center lg:justify-start space-x-2.5 mb-3">
                <span className="w-6 h-[3px] bg-brand-red rounded-full flex-shrink-0" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">
                  SECTORS SERVED
                </span>
              </div>
              <h2
                id="sectors-served-heading"
                className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-[#0A192F] tracking-tight leading-[1.15]"
              >
                Supporting Healthcare <span className="text-brand-blue">Across Uganda</span>
              </h2>
            </div>

            <div className="max-w-md mx-auto lg:mx-0 text-center lg:text-right flex flex-col items-center lg:items-end justify-end space-y-3">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                From national and private hospitals to diagnostic laboratories, health centres, NGOs, and individual patients, we supply medical equipment across diverse healthcare settings.
              </p>
              <Link
                to="/who-we-serve"
                className="group inline-flex items-center justify-center lg:justify-end space-x-2 px-4 py-2 rounded-lg border border-slate-200 hover:border-[#21409A] bg-slate-50/80 hover:bg-[#21409A] text-[#21409A] hover:text-white text-xs font-mono font-bold uppercase tracking-[0.16em] transition-all duration-200 cursor-pointer"
              >
                <span>EXPLORE ALL SECTORS</span>
                <span
                  className="text-[#ED1C24] group-hover:text-white font-bold text-sm transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </div>

          {/* 2. Flagship Sector Split — 01. HOSPITALS (Open Canvas, No Card) */}
          <div
            className="py-10 sm:py-12 lg:py-14 border-b border-slate-200"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <Link
              to="/who-we-serve"
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center cursor-pointer"
            >
              {/* Left Column: Open Editorial Typography */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center space-x-2.5">
                  <span className="text-sm font-mono font-extrabold text-brand-red">01</span>
                  <span className="w-6 h-[1.5px] bg-brand-blue/40" aria-hidden="true" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-brand-blue">
                    PUBLIC &amp; PRIVATE HOSPITALS
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-extrabold text-[#0A192F] group-hover:text-brand-blue transition-colors tracking-tight leading-tight">
                  Hospitals &amp; Referral Centres
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Equipping national referral hospitals, regional facilities, and private medical centres with reliable, high-performance clinical equipment—from intensive care units and operating theatres to general inpatient wards.
                </p>

                <div className="pt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-mono font-semibold text-slate-500 uppercase tracking-wider">
                  <span>ICU &amp; Theatre</span>
                  <span className="text-brand-red">&bull;</span>
                  <span>Ward Furniture</span>
                  <span className="text-brand-red">&bull;</span>
                  <span>Patient Monitoring</span>
                </div>

                <div className="pt-2">
                  <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg border border-slate-200 group-hover:border-[#21409A] bg-slate-50/80 group-hover:bg-[#21409A] text-[#21409A] group-hover:text-white text-xs font-bold uppercase tracking-[0.15em] transition-all duration-200">
                    <span>VIEW HOSPITAL SUPPLY SCOPE</span>
                    <span
                      className="text-[#ED1C24] group-hover:text-white text-base transition-transform duration-200 group-hover:translate-x-1.5"
                      aria-hidden="true"
                    >
                      &rarr;
                    </span>
                  </span>
                </div>
              </div>

              {/* Right Column: Unobstructed Frameless Architectural Photograph */}
              <div className="lg:col-span-7 relative">
                {/* Subtle offset architectural corner line */}
                <div
                  className="hidden sm:block absolute -top-3 -right-3 w-28 h-28 border-t-2 border-r-2 border-brand-blue/25 pointer-events-none"
                  aria-hidden="true"
                />
                <div className="overflow-hidden bg-slate-100 aspect-[16/10] sm:aspect-[16/9]">
                  <img
                    src={hospitalsImg}
                    alt="Hospitals and specialized health facilities equipped by FAB Medical Supplies"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="mt-2.5 flex items-center justify-between text-[10.5px] font-mono uppercase tracking-[0.16em] text-slate-400">
                  <span>TERTIARY &amp; REGIONAL HOSPITAL INFRASTRUCTURE</span>
                  <span className="text-brand-blue font-semibold">SECTOR // 01</span>
                </div>
              </div>
            </Link>
          </div>

          {/* 3. Open Architectural Cross-Grid Row A — 02. LABORATORIES & 03. HEALTH CENTRES */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x lg:divide-slate-200 border-b border-slate-200">
            
            {/* 02. Diagnostic Laboratories (Text Left, Frameless Photo Right) */}
            <Link
              to="/who-we-serve"
              className="group py-9 sm:py-10 lg:py-12 lg:pr-10 xl:pr-12 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center cursor-pointer"
              data-aos="fade-up"
              data-aos-duration="750"
              data-aos-delay="50"
            >
              <div className="sm:col-span-7 space-y-2.5 order-2 sm:order-1">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono font-extrabold text-brand-red">02</span>
                  <span className="w-5 h-[1.5px] bg-brand-blue/35" aria-hidden="true" />
                  <span className="text-[10.5px] font-mono font-bold uppercase tracking-[0.16em] text-brand-blue">
                    DIAGNOSTICS &amp; PATHOLOGY
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A192F] group-hover:text-brand-blue transition-colors tracking-tight">
                  Diagnostic Laboratories
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Providing accurate and reliable clinical analyzers, research microscopes, centrifuges, biosafety cabinets, and diagnostic reagents for better clinical outcomes.
                </p>
                <div className="pt-1.5">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md border border-slate-200 group-hover:border-[#21409A] bg-slate-50/80 group-hover:bg-[#21409A] text-[#21409A] group-hover:text-white text-[11px] font-mono font-bold uppercase tracking-[0.15em] transition-all duration-200">
                    <span>EXPLORE SECTOR</span>
                    <span className="text-[#ED1C24] group-hover:text-white transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                      &rarr;
                    </span>
                  </span>
                </div>
              </div>

              <div className="sm:col-span-5 order-1 sm:order-2">
                <div className="overflow-hidden bg-slate-100 aspect-[4/3] sm:aspect-square">
                  <img
                    src={labsImg}
                    alt="Diagnostic Laboratories equipped by FAB"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </Link>

            {/* 03. Health Centres (Text Left, Frameless Photo Right) */}
            <Link
              to="/who-we-serve"
              className="group py-9 sm:py-10 lg:py-12 lg:pl-10 xl:pl-12 border-t lg:border-t-0 border-slate-200 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center cursor-pointer"
              data-aos="fade-up"
              data-aos-duration="750"
              data-aos-delay="150"
            >
              <div className="sm:col-span-7 space-y-2.5 order-2 sm:order-1">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono font-extrabold text-brand-red">03</span>
                  <span className="w-5 h-[1.5px] bg-brand-blue/35" aria-hidden="true" />
                  <span className="text-[10.5px] font-mono font-bold uppercase tracking-[0.16em] text-brand-blue">
                    COMMUNITY HEALTHCARE
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A192F] group-hover:text-brand-blue transition-colors tracking-tight">
                  Health Centres &amp; Clinics
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Extending quality healthcare to communities across urban and rural regions with dependable outpatient examination tools, maternity kits, and sterilization equipment.
                </p>
                <div className="pt-1.5">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md border border-slate-200 group-hover:border-[#21409A] bg-slate-50/80 group-hover:bg-[#21409A] text-[#21409A] group-hover:text-white text-[11px] font-mono font-bold uppercase tracking-[0.15em] transition-all duration-200">
                    <span>EXPLORE SECTOR</span>
                    <span className="text-[#ED1C24] group-hover:text-white transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                      &rarr;
                    </span>
                  </span>
                </div>
              </div>

              <div className="sm:col-span-5 order-1 sm:order-2">
                <div className="overflow-hidden bg-slate-100 aspect-[4/3] sm:aspect-square">
                  <img
                    src={healthCentresImg}
                    alt="Health Centres equipped by FAB"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </Link>

          </div>

          {/* 4. Open Architectural Cross-Grid Row B — 04. NGOs & 05. INDIVIDUAL PATIENTS (Alternated Photo Left, Text Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x lg:divide-slate-200 border-b border-slate-200">
            
            {/* 04. NGOs & Health Programs (Frameless Photo Left, Text Right) */}
            <Link
              to="/who-we-serve"
              className="group py-9 sm:py-10 lg:py-12 lg:pr-10 xl:pr-12 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center cursor-pointer"
              data-aos="fade-up"
              data-aos-duration="750"
              data-aos-delay="100"
            >
              <div className="sm:col-span-5">
                <div className="overflow-hidden bg-slate-100 aspect-[4/3] sm:aspect-square">
                  <img
                    src={ngosImg}
                    alt="NGOs and Health Programs supported by FAB"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="sm:col-span-7 space-y-2.5">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono font-extrabold text-brand-red">04</span>
                  <span className="w-5 h-[1.5px] bg-brand-blue/35" aria-hidden="true" />
                  <span className="text-[10.5px] font-mono font-bold uppercase tracking-[0.16em] text-brand-blue">
                    OUTREACH &amp; HEALTH PROGRAMS
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A192F] group-hover:text-brand-blue transition-colors tracking-tight">
                  NGOs &amp; Health Programs
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Partnering with non-governmental organizations and public health initiatives to strengthen medical supply chains and expand access to care across Uganda.
                </p>
                <div className="pt-1.5">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md border border-slate-200 group-hover:border-[#21409A] bg-slate-50/80 group-hover:bg-[#21409A] text-[#21409A] group-hover:text-white text-[11px] font-mono font-bold uppercase tracking-[0.15em] transition-all duration-200">
                    <span>EXPLORE SECTOR</span>
                    <span className="text-[#ED1C24] group-hover:text-white transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                      &rarr;
                    </span>
                  </span>
                </div>
              </div>
            </Link>

            {/* 05. Individual Patients (Frameless Photo Left, Text Right) */}
            <Link
              to="/who-we-serve"
              className="group py-9 sm:py-10 lg:py-12 lg:pl-10 xl:pl-12 border-t lg:border-t-0 border-slate-200 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center cursor-pointer"
              data-aos="fade-up"
              data-aos-duration="750"
              data-aos-delay="200"
            >
              <div className="sm:col-span-5">
                <div className="overflow-hidden bg-slate-100 aspect-[4/3] sm:aspect-square">
                  <img
                    src={patientsImg}
                    alt="Individual Patients supported by FAB"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="sm:col-span-7 space-y-2.5">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono font-extrabold text-brand-red">05</span>
                  <span className="w-5 h-[1.5px] bg-brand-blue/35" aria-hidden="true" />
                  <span className="text-[10.5px] font-mono font-bold uppercase tracking-[0.16em] text-brand-blue">
                    PATIENT &amp; HOME CARE
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A192F] group-hover:text-brand-blue transition-colors tracking-tight">
                  Individual Patients
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Supporting individual recovery and home-care needs with direct access to wheelchairs, patient beds, blood pressure monitors, and essential medical supplies.
                </p>
                <div className="pt-1.5">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md border border-slate-200 group-hover:border-[#21409A] bg-slate-50/80 group-hover:bg-[#21409A] text-[#21409A] group-hover:text-white text-[11px] font-mono font-bold uppercase tracking-[0.15em] transition-all duration-200">
                    <span>EXPLORE SECTOR</span>
                    <span className="text-[#ED1C24] group-hover:text-white transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                      &rarr;
                    </span>
                  </span>
                </div>
              </div>
            </Link>

          </div>

          {/* 5. Open Editorial Footer Bar (No Card) */}
          <div
            className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
            data-aos="fade-up"
            data-aos-duration="750"
          >
            <div className="flex items-center justify-center sm:justify-start space-x-2.5 text-xs font-mono uppercase tracking-[0.15em] text-slate-500">
              <span className="w-2 h-2 rounded-full bg-brand-red flex-shrink-0" aria-hidden="true" />
              <span>SUPPLYING HEALTHCARE INSTITUTIONS &amp; INDIVIDUALS NATIONWIDE</span>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 w-full sm:w-auto">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center space-x-2.5 bg-white hover:bg-[#21409A] border-2 border-[#21409A] text-[#21409A] hover:text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer w-full sm:w-auto text-center"
              >
                <span>REQUEST SUPPLY QUOTE</span>
                <span className="text-[#ED1C24] group-hover:text-white font-bold text-sm transition-all duration-200 group-hover:translate-x-1" aria-hidden="true">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
