import React from 'react';
import { Container, ParticleRingLoader } from '../components';
import heroEquipmentImg from '../assets/hero-medical-equipment.jpg';
import fabLogoImg from '../assets/fab-logo.png';
import whoWeAreEquipImg from '../assets/who-we-are-equipment.png';
import hospitalsImg from '../assets/ecosystem-hospitals.jpg';
import labsImg from '../assets/ecosystem-laboratories.jpg';
import healthCentresImg from '../assets/ecosystem-health-centres.jpg';
import ngosImg from '../assets/ecosystem-ngos.jpg';
import patientsImg from '../assets/ecosystem-patients.jpg';
import ugandaMapImg from '../assets/ecosystem-uganda-map.png';
import criticalCareImg from '../assets/category-critical-care.jpg';
import theatreRoomImg from '../assets/category-theatre-room.jpg';
import laboratoryImg from '../assets/category-laboratory.jpg';
import opdConsultationImg from '../assets/category-opd-consultation.jpg';

export default function Home({ onNavigate }) {
  return (
    <div>
      {/* Luminous Particle Ring Page Transition Loader */}
      <ParticleRingLoader
        label="FAB MEDICAL SUPPLIES LTD."
        sublabel="Service That Exceeds"
        duration={12000}
      />

      {/* Hero Section - Approved Wireframe Direction */}
      <section className="bg-white border-b border-border" aria-labelledby="hero-heading">
        <Container className="py-12 sm:py-16 lg:py-20 xl:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
            {/* Left Column: Copy & Action Buttons */}
            <div
              className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-8"
              data-aos="fade-right"
              data-aos-duration="950"
            >
              {/* Eyebrow with Accent Red Rule */}
              <div className="flex items-center space-x-3">
                <span className="w-8 h-[3px] bg-brand-red rounded-full flex-shrink-0" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-blue">
                  MEDICAL EQUIPMENT &amp; SUPPORT · UGANDA
                </span>
              </div>

              {/* Main Headline */}
              <h1
                id="hero-heading"
                className="text-3xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-bold text-dark tracking-tight leading-[1.14]"
              >
                Equipping healthcare.<br />
                Supporting care.
              </h1>

              {/* Body Copy */}
              <p className="text-base sm:text-lg text-muted leading-relaxed max-w-xl">
                Medical equipment supply, delivery, servicing and repair for healthcare facilities across Uganda.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
                <button
                  type="button"
                  onClick={() => onNavigate('products')}
                  className="group inline-flex items-center justify-center space-x-2 bg-brand-red text-white hover:bg-[#cf171e] font-semibold text-base px-6 py-3.5 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 min-h-[46px] w-full sm:w-auto cursor-pointer"
                >
                  <span>Explore products</span>
                  <svg
                    className="w-4 h-4 ml-1.5 transition-transform duration-150 group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center bg-brand-red text-white hover:bg-[#cf171e] font-semibold text-base px-6 py-3.5 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 min-h-[46px] w-full sm:w-auto cursor-pointer"
                >
                  <span>Contact our team</span>
                </button>
              </div>
            </div>

            {/* Right Column: Verified Medical Equipment Photograph */}
            <div
              className="lg:col-span-6 xl:col-span-6 flex items-center justify-center w-full"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="150"
            >
              <div className="w-full overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-surface-light shadow-sm">
                <img
                  src={heroEquipmentImg}
                  alt="Clinical examination room featuring diagnostic ultrasound equipment and medical furniture"
                  className="w-full h-[300px] sm:h-[380px] lg:h-[440px] xl:h-[480px] object-cover object-[center_65%] block"
                  loading="eager"
                  width="1400"
                  height="2100"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Who We Are Section - Approved Design 2: Central Image Focus */}
      <section className="bg-white border-b border-border relative overflow-hidden py-14 sm:py-16 lg:py-20 xl:py-24" aria-labelledby="who-we-are-heading">
        <Container className="relative">
          {/* DESKTOP EDITORIAL FIELD (lg+) — Controlled Asymmetric Composition */}
          <div className="hidden lg:block relative min-h-[560px] xl:min-h-[590px]">
            {/* 1. Header / Identity Block (Upper-Left) */}
            <div
              className="absolute left-0 top-0 max-w-[280px] z-10"
              data-aos="fade-down"
              data-aos-duration="850"
            >
              <div className="flex items-center space-x-2.5 mb-3.5">
                <span className="w-5 h-[2px] bg-brand-red rounded-full flex-shrink-0" aria-hidden="true" />
                <span id="who-we-are-heading" className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                  WHO WE ARE
                </span>
              </div>
              <img
                src={fabLogoImg}
                alt="FAB Medical Supplies Ltd."
                className="h-10 xl:h-11 w-auto object-contain block"
              />
            </div>

            {/* 2. Capability: SUPPLY (Mid-Left, below FAB Logo) */}
            <div
              className="absolute left-0 top-[185px] xl:top-[195px] max-w-[210px] z-10"
              data-aos="fade-right"
              data-aos-duration="850"
              data-aos-delay="200"
            >
              <div className="flex items-center space-x-2 mb-1.5">
                <span className="w-3.5 h-[2px] bg-brand-red flex-shrink-0" aria-hidden="true" />
                <h3 className="text-xs xl:text-sm font-bold uppercase tracking-wider text-dark">
                  SUPPLY
                </h3>
              </div>
              <p className="text-xs text-muted leading-relaxed pl-[22px]">
                Medical equipment, instruments and reagents
              </p>
            </div>

            {/* 3. Central Equipment Image (Hero Centerpiece) */}
            <div
              className="absolute left-[24%] xl:left-[25%] top-[8px] w-[46%] xl:w-[45%] max-w-[500px] z-0 select-none pointer-events-none"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <img
                src={whoWeAreEquipImg}
                alt="Clinical operating theatre equipped with patient vital signs monitor and medical instruments"
                className="w-full h-auto object-contain block filter drop-shadow-[0_4px_20px_rgba(33,64,154,0.06)]"
                loading="lazy"
              />
            </div>

            {/* 4. Company Statement & About FAB Link (Upper-Right) */}
            <div
              className="absolute right-0 top-[10px] max-w-[310px] xl:max-w-[340px] z-10"
              data-aos="fade-left"
              data-aos-duration="900"
              data-aos-delay="250"
            >
              <div className="mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-blue block">
                  WHAT WE DO
                </span>
              </div>
              <p className="text-xs xl:text-sm text-dark/90 leading-relaxed font-normal mb-3.5">
                We deal with the procurement and supply of medical equipments, instruments, and reagents used in the laboratory, theatres, and general medical products. Our core functions include marketing, sales, and delivery of supplies, as well as servicing and repair of the equipment that we supply.
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="group inline-flex items-center text-xs xl:text-sm font-bold text-brand-blue hover:text-brand-red transition-colors focus:outline-none focus:underline cursor-pointer"
                >
                  <span>About FAB</span>
                  <span className="ml-1.5 text-brand-red text-base font-bold transition-transform duration-150 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </button>
              </div>
            </div>

            {/* 5. Capability: DELIVERY (Lower-Left under central image) */}
            <div
              className="absolute left-[7%] xl:left-[8%] top-[435px] xl:top-[455px] max-w-[210px] z-10"
              data-aos="fade-right"
              data-aos-duration="850"
              data-aos-delay="300"
            >
              <div className="flex items-center space-x-2 mb-1.5">
                <span className="w-3.5 h-[2px] bg-brand-red flex-shrink-0" aria-hidden="true" />
                <h3 className="text-xs xl:text-sm font-bold uppercase tracking-wider text-dark">
                  DELIVERY
                </h3>
              </div>
              <p className="text-xs text-muted leading-relaxed pl-[22px]">
                Getting supplies where they are needed
              </p>
            </div>

            {/* 6. Capability: MARKETING & SALES (Lower-Right under central image) */}
            <div
              className="absolute left-[45%] xl:left-[46%] top-[465px] xl:top-[485px] max-w-[220px] z-10"
              data-aos="fade-up"
              data-aos-duration="850"
              data-aos-delay="350"
            >
              <div className="flex items-center space-x-2 mb-1.5">
                <span className="w-3.5 h-[2px] bg-brand-red flex-shrink-0" aria-hidden="true" />
                <h3 className="text-xs xl:text-sm font-bold uppercase tracking-wider text-dark">
                  MARKETING &amp; SALES
                </h3>
              </div>
              <p className="text-xs text-muted leading-relaxed pl-[22px]">
                Connecting solutions with healthcare needs
              </p>
            </div>

            {/* 7. Capability: SERVICE & REPAIR (Mid-Right under What We Do) */}
            <div
              className="absolute right-[2%] top-[355px] xl:top-[375px] max-w-[220px] z-10"
              data-aos="fade-left"
              data-aos-duration="850"
              data-aos-delay="400"
            >
              <div className="flex items-center space-x-2 mb-1.5">
                <span className="w-3.5 h-[2px] bg-brand-red flex-shrink-0" aria-hidden="true" />
                <h3 className="text-xs xl:text-sm font-bold uppercase tracking-wider text-dark">
                  SERVICE &amp; REPAIR
                </h3>
              </div>
              <p className="text-xs text-muted leading-relaxed pl-[22px]">
                Keeping supplied equipment running
              </p>
            </div>

            {/* Delicate Connecting Lines (SVG Flow Overlay) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 1000 600"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {/* Curve 1: From near DELIVERY to MARKETING & SALES */}
              <path
                d="M 270 460 C 330 500, 395 510, 445 485"
                stroke="#cbd5e1"
                strokeWidth="1"
                strokeOpacity="0.8"
              />
              <circle cx="360" cy="495" r="2.5" fill="#ED1C24" />

              {/* Curve 2: From MARKETING & SALES across to SERVICE & REPAIR */}
              <path
                d="M 640 485 C 695 465, 740 425, 785 380"
                stroke="#cbd5e1"
                strokeWidth="1"
                strokeOpacity="0.8"
              />
              <circle cx="720" cy="440" r="2.5" fill="#ED1C24" />
            </svg>
          </div>

          {/* MOBILE & TABLET ASYMMETRIC EDITORIAL RECOMPOSITION (<lg) */}
          <div className="block lg:hidden space-y-8" data-aos="fade-up" data-aos-duration="850">
            {/* 1. Eyebrow + Logo */}
            <div>
              <div className="flex items-center space-x-2.5 mb-3">
                <span className="w-5 h-[2px] bg-brand-red rounded-full flex-shrink-0" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                  WHO WE ARE
                </span>
              </div>
              <img
                src={fabLogoImg}
                alt="FAB Medical Supplies Ltd."
                className="h-9 sm:h-11 w-auto object-contain block"
              />
            </div>

            {/* 2. Central Equipment Image */}
            <div className="relative w-full max-w-md mx-auto my-4" data-aos="zoom-in" data-aos-duration="900">
              <img
                src={whoWeAreEquipImg}
                alt="Clinical operating theatre equipped with patient vital signs monitor and medical instruments"
                className="w-full h-auto object-contain block filter drop-shadow-[0_4px_16px_rgba(33,64,154,0.06)]"
                loading="lazy"
              />
            </div>

            {/* 3. What We Do + Company Statement */}
            <div className="space-y-2.5 pl-3 sm:pl-4 border-l-2 border-brand-blue/30" data-aos="fade-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue block">
                WHAT WE DO
              </span>
              <p className="text-sm text-dark/90 leading-relaxed font-normal">
                We deal with the procurement and supply of medical equipments, instruments, and reagents used in the laboratory, theatres, and general medical products. Our core functions include marketing, sales, and delivery of supplies, as well as servicing and repair of the equipment that we supply.
              </p>
            </div>

            {/* 4. Four Responsive Capability Annotations */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Function 1: SUPPLY */}
              <div className="space-y-1 bg-slate-50/70 p-3 border-l-2 border-[#21409A]" data-aos="fade-right" data-aos-delay="100">
                <div className="flex items-center space-x-2">
                  <span className="w-3.5 h-[2px] bg-brand-red flex-shrink-0" aria-hidden="true" />
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-dark">
                    SUPPLY
                  </h3>
                </div>
                <p className="text-xs text-muted leading-relaxed pl-[22px]">
                  Medical equipment, instruments and reagents
                </p>
              </div>

              {/* Function 2: DELIVERY */}
              <div className="space-y-1 bg-slate-50/70 p-3 border-l-2 border-[#21409A]" data-aos="fade-right" data-aos-delay="200">
                <div className="flex items-center space-x-2">
                  <span className="w-3.5 h-[2px] bg-brand-red flex-shrink-0" aria-hidden="true" />
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-dark">
                    DELIVERY
                  </h3>
                </div>
                <p className="text-xs text-muted leading-relaxed pl-[22px]">
                  Getting supplies where they are needed
                </p>
              </div>

              {/* Function 3: MARKETING & SALES */}
              <div className="space-y-1 bg-slate-50/70 p-3 border-l-2 border-[#21409A]" data-aos="fade-up" data-aos-delay="300">
                <div className="flex items-center space-x-2">
                  <span className="w-3.5 h-[2px] bg-brand-red flex-shrink-0" aria-hidden="true" />
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-dark">
                    MARKETING &amp; SALES
                  </h3>
                </div>
                <p className="text-xs text-muted leading-relaxed pl-[22px]">
                  Connecting solutions with healthcare needs
                </p>
              </div>

              {/* Function 4: SERVICE & REPAIR */}
              <div className="space-y-1 bg-slate-50/70 p-3 border-l-2 border-[#21409A]" data-aos="fade-left" data-aos-delay="400">
                <div className="flex items-center space-x-2">
                  <span className="w-3.5 h-[2px] bg-brand-red flex-shrink-0" aria-hidden="true" />
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-dark">
                    SERVICE &amp; REPAIR
                  </h3>
                </div>
                <p className="text-xs text-muted leading-relaxed pl-[22px]">
                  Keeping supplied equipment running
                </p>
              </div>
            </div>

            {/* 5. About FAB Link */}
            <div className="pt-2" data-aos="fade-up" data-aos-delay="450">
              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="group inline-flex items-center text-xs sm:text-sm font-bold text-brand-blue hover:text-brand-red transition-colors focus:outline-none focus:underline cursor-pointer"
              >
                <span>About FAB</span>
                <span className="ml-1.5 text-brand-red text-base font-bold transition-transform duration-150 group-hover:translate-x-1">
                  &rarr;
                </span>
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Key Equipment Categories Section - Approved Editorial Spread */}
      <section className="bg-white border-b border-border relative overflow-hidden py-14 sm:py-18 lg:py-22" aria-labelledby="equipment-categories-heading">
        {/* Subtle red accent tab at bottom-left border */}
        <div className="absolute left-0 bottom-10 sm:bottom-14 w-2.5 sm:w-3 h-8 sm:h-10 bg-brand-red rounded-r-md pointer-events-none" aria-hidden="true" />

        <Container>
          {/* Header Introduction */}
          <div className="mb-10 sm:mb-12 lg:mb-14" data-aos="fade-up" data-aos-duration="850">
            <div className="flex items-center space-x-2.5 mb-3">
              <span className="w-6 h-[3px] bg-brand-red rounded-full flex-shrink-0" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                EQUIPMENT
              </span>
            </div>
            <h2
              id="equipment-categories-heading"
              className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-brand-blue tracking-tight leading-tight"
            >
              Key Equipment Categories
            </h2>
            <p className="text-sm sm:text-base text-muted max-w-2xl leading-relaxed mt-3">
              We supply medical equipment across multiple clinical departments, from critical care and surgical theatres to outpatient consultation
            </p>
          </div>

          {/* DESKTOP & TABLET ASYMMETRIC EDITORIAL SPREAD (lg+) */}
          <div className="hidden lg:block relative w-full aspect-[1024/550] max-w-[1280px] mx-auto select-none">
            {/* SVG Editorial Divider Rules */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 1024 550"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Critical Care Rule */}
              <line x1="281" y1="38" x2="385" y2="38" stroke="#E2E8F0" strokeWidth="0.9" />

              {/* Theatre Room Rule */}
              <line x1="732" y1="24" x2="975" y2="24" stroke="#E2E8F0" strokeWidth="0.9" />

              {/* Laboratory Rule */}
              <line x1="530" y1="335" x2="710" y2="335" stroke="#E2E8F0" strokeWidth="0.9" />

              {/* OPD & Consultation Rule */}
              <line x1="896" y1="260" x2="980" y2="260" stroke="#E2E8F0" strokeWidth="0.9" />

              {/* Subtle bottom-left orbital arc */}
              <path d="M 0 430 C 50 430, 75 490, 75 550" stroke="#CBD5E1" strokeWidth="0.8" fill="none" opacity="0.6" />
            </svg>

            {/* 1. Critical Care */}
            <div
              className="absolute left-[4.8%] top-[8%] w-[21.1%] aspect-[216/354] rounded-sm overflow-hidden border border-border/70 shadow-xs z-10 transition-transform duration-200 hover:scale-[1.01]"
              data-aos="fade-right"
              data-aos-duration="900"
              data-aos-delay="100"
            >
              <img
                src={criticalCareImg}
                alt="Critical care medical equipment including specialized patient monitoring and intensive care ventilator system"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div
              className="absolute left-[27.5%] top-[2.2%] z-20"
              data-aos="fade-down"
              data-aos-delay="150"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                CRITICAL CARE
              </h3>
              <div className="w-6 h-[2px] bg-brand-red mt-1.5 mb-2" />
            </div>

            {/* 2. Theatre Room */}
            <div
              className="absolute left-[39.3%] top-[8%] w-[30.5%] aspect-[312/196] rounded-sm overflow-hidden border border-border/70 shadow-xs z-10 transition-transform duration-200 hover:scale-[1.01]"
              data-aos="fade-down"
              data-aos-duration="900"
              data-aos-delay="200"
            >
              <img
                src={theatreRoomImg}
                alt="Surgical operating theatre equipped with operating table, surgical lighting, and clinical anesthesia monitoring"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div
              className="absolute left-[71.5%] top-[0%] z-20"
              data-aos="fade-down"
              data-aos-delay="250"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                THEATRE ROOM
              </h3>
              <div className="w-6 h-[2px] bg-brand-red mt-1.5 mb-2" />
            </div>

            {/* 3. Laboratory */}
            <div
              className="absolute left-[27.5%] top-[50.5%] w-[22.6%] aspect-[231/168] rounded-sm overflow-hidden border border-border/70 shadow-xs z-10 transition-transform duration-200 hover:scale-[1.01]"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="300"
            >
              <img
                src={laboratoryImg}
                alt="Clinical laboratory diagnostic automated chemistry and immunoassay analyzer system"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div
              className="absolute left-[51.8%] top-[57.5%] z-20"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                LABORATORY
              </h3>
              <div className="w-6 h-[2px] bg-brand-red mt-1.5 mb-2" />
            </div>

            {/* 4. OPD & Consultation */}
            <div
              className="absolute left-[71.4%] top-[30%] w-[14.8%] aspect-[151/245] rounded-sm overflow-hidden border border-border/70 shadow-xs z-10 transition-transform duration-200 hover:scale-[1.01]"
              data-aos="fade-left"
              data-aos-duration="900"
              data-aos-delay="400"
            >
              <img
                src={opdConsultationImg}
                alt="Outpatient department diagnostic ultrasound machine and clinical examination couch"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div
              className="absolute left-[87.5%] top-[43.5%] z-20"
              data-aos="fade-left"
              data-aos-delay="450"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-blue leading-snug">
                OPD &amp;<br />CONSULTATION
              </h3>
              <div className="w-6 h-[2px] bg-brand-red mt-1.5 mb-2" />
            </div>

            {/* Bottom-Right CTA Button */}
            <div
              className="absolute right-[4.8%] bottom-[4%] z-20"
              data-aos="zoom-in"
              data-aos-duration="850"
              data-aos-delay="500"
            >
              <button
                type="button"
                onClick={() => onNavigate('products', 'all')}
                className="group inline-flex items-center space-x-2 bg-brand-red text-white hover:bg-[#cf171e] font-bold text-xs xl:text-sm tracking-wider uppercase px-5 py-2.5 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 min-h-[42px] cursor-pointer"
              >
                <span>VIEW ALL EQUIPMENT</span>
                <span className="ml-1 text-white text-base font-bold transition-transform duration-150 group-hover:translate-x-1">
                  &rarr;
                </span>
              </button>
            </div>
          </div>

          {/* MOBILE & TABLET EDITORIAL SEQUENCE (<lg) */}
          <div className="block lg:hidden space-y-10">
            {/* Category 1: Critical Care */}
            <div className="space-y-3" data-aos="fade-up" data-aos-duration="850">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-blue">
                  CRITICAL CARE
                </h3>
                <div className="w-6 h-[2px] bg-brand-red mt-1" />
              </div>
              <div className="rounded-sm overflow-hidden border border-border/80 shadow-xs max-w-sm">
                <img
                  src={criticalCareImg}
                  alt="Critical care medical equipment including specialized patient monitoring and intensive care ventilator system"
                  className="w-full h-72 sm:h-80 object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Category 2: Theatre Room */}
            <div className="space-y-3" data-aos="fade-up" data-aos-duration="850">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-blue">
                  THEATRE ROOM
                </h3>
                <div className="w-6 h-[2px] bg-brand-red mt-1" />
              </div>
              <div className="rounded-sm overflow-hidden border border-border/80 shadow-xs max-w-md">
                <img
                  src={theatreRoomImg}
                  alt="Surgical operating theatre equipped with operating table, surgical lighting, and clinical anesthesia monitoring"
                  className="w-full h-48 sm:h-56 object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Category 3: Laboratory */}
            <div className="space-y-3" data-aos="fade-up" data-aos-duration="850">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-blue">
                  LABORATORY
                </h3>
                <div className="w-6 h-[2px] bg-brand-red mt-1" />
              </div>
              <div className="rounded-sm overflow-hidden border border-border/80 shadow-xs max-w-sm">
                <img
                  src={laboratoryImg}
                  alt="Clinical laboratory diagnostic automated chemistry and immunoassay analyzer system"
                  className="w-full h-44 sm:h-52 object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Category 4: OPD & Consultation */}
            <div className="space-y-3" data-aos="fade-up" data-aos-duration="850">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-blue">
                  OPD &amp; CONSULTATION
                </h3>
                <div className="w-6 h-[2px] bg-brand-red mt-1" />
              </div>
              <div className="rounded-sm overflow-hidden border border-border/80 shadow-xs max-w-xs">
                <img
                  src={opdConsultationImg}
                  alt="Outpatient department diagnostic ultrasound machine and clinical examination couch"
                  className="w-full h-64 sm:h-72 object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="pt-4" data-aos="fade-up">
              <button
                type="button"
                onClick={() => onNavigate('products', 'all')}
                className="group inline-flex items-center justify-center space-x-2 bg-brand-red text-white hover:bg-[#cf171e] font-bold text-xs sm:text-sm tracking-wider uppercase px-5 py-2.5 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 min-h-[42px] w-full sm:w-auto cursor-pointer"
              >
                <span>VIEW ALL EQUIPMENT</span>
                <span className="ml-1 text-white text-base font-bold transition-transform duration-150 group-hover:translate-x-1">
                  &rarr;
                </span>
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Sectors Served Section - Approved Editorial Healthcare Ecosystem */}
      <section className="bg-white border-b border-border relative overflow-hidden py-14 sm:py-18 lg:py-20" aria-labelledby="sectors-served-heading">
        {/* Subtle red accent tab at bottom-left border */}
        <div className="absolute left-0 bottom-10 sm:bottom-14 w-2.5 sm:w-3 h-8 sm:h-10 bg-brand-red rounded-r-md pointer-events-none" aria-hidden="true" />

        <Container>
          {/* DESKTOP & TABLET EDITORIAL COMPOSITION (lg+) */}
          <div className="hidden lg:block relative w-full aspect-[1024/682] max-w-[1280px] mx-auto select-none">
            {/* SVG Connector & Orbit Layer */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 1024 682"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Outer faint orbit ring */}
              <circle cx="657" cy="338" r="142" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" />
              {/* Mid connector ring */}
              <circle cx="657" cy="338" r="92" stroke="#D9E0E7" strokeWidth="1.2" />

              {/* Red orbital arc connecting the healthcare sectors */}
              <path
                d="M 450 190 C 510 110, 600 75, 680 85 C 750 95, 800 135, 770 240 C 740 335, 700 420, 630 480 C 560 540, 480 500, 470 470"
                stroke="#ED1C24"
                strokeWidth="0.9"
                strokeOpacity="0.4"
                fill="none"
              />

              {/* 1. Hospitals Connector: from image right (828, 132) to label */}
              <line x1="828" y1="132" x2="855" y2="132" stroke="#CBD5E1" strokeWidth="1" />
              <line x1="855" y1="132" x2="975" y2="132" stroke="#E2E8F0" strokeWidth="0.8" />
              <circle cx="828" cy="132" r="3" fill="#21409A" />

              {/* 2. Diagnostic Labs Connector: from label to image left (364, 290) */}
              <line x1="200" y1="290" x2="364" y2="290" stroke="#CBD5E1" strokeWidth="1" />
              <circle cx="364" cy="290" r="3" fill="#21409A" />

              {/* 3. Health Centres Connector: from label to image left (400, 440) */}
              <line x1="220" y1="440" x2="400" y2="440" stroke="#CBD5E1" strokeWidth="1" />
              <circle cx="400" cy="440" r="3" fill="#21409A" />

              {/* 4. NGOs Connector: from image right (885, 355) to label */}
              <line x1="885" y1="355" x2="905" y2="355" stroke="#CBD5E1" strokeWidth="1" />
              <line x1="905" y1="355" x2="985" y2="355" stroke="#E2E8F0" strokeWidth="0.8" />
              <circle cx="885" cy="355" r="3" fill="#21409A" />

              {/* 5. Individual Patients Connector: from image right (760, 515) to label */}
              <line x1="760" y1="515" x2="800" y2="515" stroke="#CBD5E1" strokeWidth="1" />
              <line x1="800" y1="515" x2="920" y2="515" stroke="#E2E8F0" strokeWidth="0.8" />
              <circle cx="760" cy="515" r="3" fill="#21409A" />
            </svg>

            {/* Left Introduction Header */}
            <div
              className="absolute left-[4.7%] top-[5%] w-[26%] max-w-[270px] xl:max-w-[295px] z-10"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              <div className="flex items-center space-x-2.5 mb-2.5">
                <span className="w-6 h-[3px] bg-brand-red rounded-full flex-shrink-0" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                  SECTORS SERVED
                </span>
              </div>
              <h2
                id="sectors-served-heading"
                className="text-2xl xl:text-[2.1rem] font-bold text-brand-blue tracking-tight leading-[1.15]"
              >
                Supporting Healthcare Across Uganda
              </h2>
              <p className="text-xs xl:text-sm text-muted leading-relaxed mt-2.5 max-w-[250px] xl:max-w-[270px]">
                From national and private hospitals to diagnostic laboratories, NGOs, rural health centres, and individual patients, our supply network supports diverse medical requirements.
              </p>
            </div>

            {/* Bottom-Left CTA Button */}
            <div
              className="absolute left-[8.3%] bottom-[10%] z-10"
              data-aos="zoom-in"
              data-aos-duration="850"
              data-aos-delay="450"
            >
              <button
                type="button"
                onClick={() => onNavigate('who-we-serve')}
                className="group inline-flex items-center space-x-2 bg-brand-red text-white hover:bg-[#cf171e] font-bold text-xs xl:text-sm tracking-wider uppercase px-5 py-2.5 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 min-h-[42px] cursor-pointer"
              >
                <span>EXPLORE WHO WE SERVE</span>
                <span className="ml-1 text-white text-base font-bold transition-transform duration-150 group-hover:translate-x-1">
                  &rarr;
                </span>
              </button>
            </div>

            {/* Central Uganda Map Graphic */}
            <div
              className="absolute left-[58%] top-[25.2%] w-[14.8%] aspect-square z-10 flex items-center justify-center pointer-events-none"
              style={{ filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.04))' }}
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <img
                src={ugandaMapImg}
                alt="Graphic representation of Uganda healthcare hub"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Image 1: Hospitals */}
            <div
              className="absolute left-[54.7%] top-[8.6%] w-[26.2%] aspect-[268/188] rounded-sm overflow-hidden shadow-xs border border-border/60 z-20 transition-transform duration-200 hover:scale-[1.01]"
              data-aos="fade-left"
              data-aos-duration="850"
              data-aos-delay="150"
            >
              <img
                src={hospitalsImg}
                alt="Modern critical care hospital room with patient monitoring equipment and beds"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Label 1: Hospitals */}
            <div
              className="absolute left-[83.5%] top-[13.9%] w-[15.5%] z-20"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                HOSPITALS
              </h3>
              <div className="w-6 h-[2px] bg-brand-red mt-1.5 mb-2" />
              <p className="text-[11px] leading-snug text-muted">
                Supporting regional and national hospitals with reliable, high-quality equipment and service.
              </p>
            </div>

            {/* Image 2: Diagnostic Laboratories */}
            <div
              className="absolute left-[35.5%] top-[27.1%] w-[20.8%] aspect-[214/171] rounded-sm overflow-hidden shadow-xs border border-border/60 z-20 transition-transform duration-200 hover:scale-[1.01]"
              data-aos="fade-right"
              data-aos-duration="850"
              data-aos-delay="200"
            >
              <img
                src={labsImg}
                alt="Diagnostic medical laboratory with precision microscope and testing analyzers"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Label 2: Diagnostic Laboratories */}
            <div
              className="absolute left-[19.5%] top-[38%] w-[15%] max-w-[145px] z-20 text-left"
              data-aos="fade-right"
              data-aos-delay="250"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                DIAGNOSTIC LABORATORIES
              </h3>
              <div className="w-6 h-[2px] bg-brand-red mt-1.5 mb-2" />
              <p className="text-[11px] leading-snug text-muted">
                Equipping laboratories with the tools for accurate, reliable diagnostics.
              </p>
            </div>

            {/* Image 3: Health Centres */}
            <div
              className="absolute left-[39.1%] top-[55.1%] w-[17.1%] aspect-[175/121] rounded-sm overflow-hidden shadow-xs border border-border/60 z-20 transition-transform duration-200 hover:scale-[1.01]"
              data-aos="fade-right"
              data-aos-duration="850"
              data-aos-delay="300"
            >
              <img
                src={healthCentresImg}
                alt="Community health centre facility providing localized patient medical care"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Label 3: Health Centres */}
            <div
              className="absolute left-[22.5%] top-[62.5%] w-[15.5%] max-w-[145px] z-20 text-left"
              data-aos="fade-right"
              data-aos-delay="350"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                HEALTH CENTRES
              </h3>
              <div className="w-6 h-[2px] bg-brand-red mt-1.5 mb-2" />
              <p className="text-[11px] leading-snug text-muted">
                Extending quality healthcare to communities across urban and rural regions.
              </p>
            </div>

            {/* Image 4: NGOs */}
            <div
              className="absolute left-[73.9%] top-[40.9%] w-[12.5%] aspect-[128/163] rounded-sm overflow-hidden shadow-xs border border-border/60 z-20 transition-transform duration-200 hover:scale-[1.01]"
              data-aos="fade-left"
              data-aos-duration="850"
              data-aos-delay="350"
            >
              <img
                src={ngosImg}
                alt="Humanitarian community medical supply container and mobile health distribution cases"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Label 4: NGOs */}
            <div
              className="absolute left-[88.4%] top-[46.9%] w-[11.5%] z-20"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                NGOS
              </h3>
              <div className="w-6 h-[2px] bg-brand-red mt-1.5 mb-2" />
              <p className="text-[11px] leading-snug text-muted">
                Partnering with NGOs to strengthen health outcomes and expand access to care.
              </p>
            </div>

            {/* Image 5: Individual Patients */}
            <div
              className="absolute left-[58.2%] top-[65.7%] w-[16.1%] aspect-[165/142] rounded-sm overflow-hidden shadow-xs border border-border/60 z-20 transition-transform duration-200 hover:scale-[1.01]"
              data-aos="fade-up"
              data-aos-duration="850"
              data-aos-delay="400"
            >
              <img
                src={patientsImg}
                alt="Outpatient clinical examination suite featuring ultrasound system and diagnostic patient couch"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Label 5: Individual Patients */}
            <div
              className="absolute left-[78.1%] top-[71.8%] w-[17%] z-20"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                INDIVIDUAL PATIENTS
              </h3>
              <div className="w-6 h-[2px] bg-brand-red mt-1.5 mb-2" />
              <p className="text-[11px] leading-snug text-muted">
                Supporting individual health needs with access to essential medical equipment and supplies.
              </p>
            </div>
          </div>

          {/* MOBILE & TABLET RECOMPOSED EDITORIAL SEQUENCE (<lg) */}
          <div className="block lg:hidden space-y-10" data-aos="fade-up" data-aos-duration="850">
            {/* Mobile Header */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2.5">
                <span className="w-6 h-[3px] bg-brand-red rounded-full flex-shrink-0" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                  SECTORS SERVED
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-blue tracking-tight">
                Supporting Healthcare Across Uganda
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                From national and private hospitals to diagnostic laboratories, NGOs, rural health centres, and individual patients, our supply network supports diverse medical requirements.
              </p>
            </div>

            {/* Central Uganda Map Anchor */}
            <div className="flex flex-col items-center justify-center py-4 relative" data-aos="zoom-in">
              <div className="relative w-36 h-36 flex items-center justify-center">
                {/* Concentric rings */}
                <div className="absolute inset-0 rounded-full border border-dashed border-[#CBD5E1]" />
                <div className="absolute inset-3 rounded-full border border-[#D9E0E7]" />
                <img
                  src={ugandaMapImg}
                  alt="Uganda healthcare supply network map graphic"
                  className="w-28 h-28 object-contain relative z-10"
                />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-blue mt-3">
                UGANDA HEALTHCARE NETWORK
              </span>
              <div className="w-8 h-[2px] bg-brand-red mt-1" />
            </div>

            {/* Editorial Vertical Sequence with Connecting Line */}
            <div className="relative pl-6 sm:pl-8 space-y-8 before:content-[''] before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-[1.5px] before:bg-[#D9E0E7]">
              {/* Sector 1: Hospitals */}
              <div className="relative space-y-2" data-aos="fade-up" data-aos-delay="100">
                <span className="absolute -left-[21px] sm:-left-[25px] top-1.5 w-3 h-3 rounded-full bg-brand-blue ring-4 ring-white" aria-hidden="true" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-blue">
                  HOSPITALS
                </h3>
                <div className="w-6 h-[2px] bg-brand-red" />
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  Supporting regional and national hospitals with reliable, high-quality equipment and service.
                </p>
                <div className="rounded-md overflow-hidden border border-border max-w-sm mt-3 shadow-xs">
                  <img
                    src={hospitalsImg}
                    alt="Modern critical care hospital room with patient monitoring equipment and beds"
                    className="w-full h-44 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Sector 2: Diagnostic Laboratories */}
              <div className="relative space-y-2" data-aos="fade-up" data-aos-delay="150">
                <span className="absolute -left-[21px] sm:-left-[25px] top-1.5 w-3 h-3 rounded-full bg-brand-blue ring-4 ring-white" aria-hidden="true" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-blue">
                  DIAGNOSTIC LABORATORIES
                </h3>
                <div className="w-6 h-[2px] bg-brand-red" />
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  Equipping laboratories with the tools for accurate, reliable diagnostics.
                </p>
                <div className="rounded-md overflow-hidden border border-border max-w-sm mt-3 shadow-xs">
                  <img
                    src={labsImg}
                    alt="Diagnostic medical laboratory with precision microscope and testing analyzers"
                    className="w-full h-44 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Sector 3: Health Centres */}
              <div className="relative space-y-2" data-aos="fade-up" data-aos-delay="200">
                <span className="absolute -left-[21px] sm:-left-[25px] top-1.5 w-3 h-3 rounded-full bg-brand-blue ring-4 ring-white" aria-hidden="true" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-blue">
                  HEALTH CENTRES
                </h3>
                <div className="w-6 h-[2px] bg-brand-red" />
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  Extending quality healthcare to communities across urban and rural regions.
                </p>
                <div className="rounded-md overflow-hidden border border-border max-w-sm mt-3 shadow-xs">
                  <img
                    src={healthCentresImg}
                    alt="Community health centre facility providing localized patient medical care"
                    className="w-full h-44 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Sector 4: NGOs */}
              <div className="relative space-y-2" data-aos="fade-up" data-aos-delay="250">
                <span className="absolute -left-[21px] sm:-left-[25px] top-1.5 w-3 h-3 rounded-full bg-brand-blue ring-4 ring-white" aria-hidden="true" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-blue">
                  NGOS
                </h3>
                <div className="w-6 h-[2px] bg-brand-red" />
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  Partnering with NGOs to strengthen health outcomes and expand access to care.
                </p>
                <div className="rounded-md overflow-hidden border border-border max-w-sm mt-3 shadow-xs">
                  <img
                    src={ngosImg}
                    alt="Humanitarian community medical supply container and mobile health distribution cases"
                    className="w-full h-44 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Sector 5: Individual Patients */}
              <div className="relative space-y-2" data-aos="fade-up" data-aos-delay="300">
                <span className="absolute -left-[21px] sm:-left-[25px] top-1.5 w-3 h-3 rounded-full bg-brand-blue ring-4 ring-white" aria-hidden="true" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-blue">
                  INDIVIDUAL PATIENTS
                </h3>
                <div className="w-6 h-[2px] bg-brand-red" />
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  Supporting individual health needs with access to essential medical equipment and supplies.
                </p>
                <div className="rounded-md overflow-hidden border border-border max-w-sm mt-3 shadow-xs">
                  <img
                    src={patientsImg}
                    alt="Outpatient clinical examination suite featuring ultrasound system and diagnostic patient couch"
                    className="w-full h-44 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="pt-2" data-aos="fade-up" data-aos-delay="350">
              <button
                type="button"
                onClick={() => onNavigate('who-we-serve')}
                className="group inline-flex items-center justify-center space-x-2 bg-brand-red text-white hover:bg-[#cf171e] font-bold text-xs sm:text-sm tracking-wider uppercase px-5 py-2.5 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 min-h-[42px] w-full sm:w-auto cursor-pointer"
              >
                <span>EXPLORE WHO WE SERVE</span>
                <span className="ml-1 text-white text-base font-bold transition-transform duration-150 group-hover:translate-x-1">
                  &rarr;
                </span>
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
