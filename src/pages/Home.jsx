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

export default function Home({ onNavigate }) {
  return (
    <div>
      {/* Clean Professional Logo Loader (6-Second Sequence) */}
      <LogoLoader duration={6000} />

      {/* Editorial Medical Equipment Showcase Hero Section (Inspired by reference composition) */}
      <HomeHero />

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
                <h2 id="who-we-are-heading" className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                  WHO WE ARE
                </h2>
              </div>
              <img
                src={fabLogoImg}
                alt="FAB Medical Supplies Ltd."
                width="48"
                height="49"
                decoding="async"
                className="h-11 xl:h-12 w-auto object-contain block"
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
                width="550"
                height="350"
                decoding="async"
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
                <Link
                  to="/about"
                  className="group inline-flex items-center text-xs xl:text-sm font-bold text-brand-blue hover:text-brand-red transition-colors focus:outline-none focus:underline cursor-pointer"
                >
                  <span>About FAB</span>
                  <span className="ml-1.5 text-brand-red text-base font-bold transition-transform duration-150 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
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
                width="44"
                height="45"
                decoding="async"
                className="h-10 sm:h-11 w-auto object-contain block"
              />
            </div>

            {/* 2. Central Equipment Image */}
            <div className="relative w-full max-w-md mx-auto my-4" data-aos="zoom-in" data-aos-duration="900">
              <img
                src={whoWeAreEquipImg}
                alt="Clinical operating theatre equipped with patient vital signs monitor and medical instruments"
                width="550"
                height="350"
                decoding="async"
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
              <Link
                to="/about"
                className="group inline-flex items-center text-xs sm:text-sm font-bold text-brand-blue hover:text-brand-red transition-colors focus:outline-none focus:underline cursor-pointer"
              >
                <span>About FAB</span>
                <span className="ml-1.5 text-brand-red text-base font-bold transition-transform duration-150 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
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
                width="216"
                height="354"
                decoding="async"
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
                width="311"
                height="196"
                decoding="async"
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
                width="231"
                height="168"
                decoding="async"
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
                width="151"
                height="245"
                decoding="async"
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
              <Link
                to="/products"
                className="group inline-flex items-center space-x-2 bg-brand-red text-white hover:bg-[#cf171e] font-bold text-xs xl:text-sm tracking-wider uppercase px-5 py-2.5 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 min-h-[42px] cursor-pointer"
              >
                <span>VIEW ALL EQUIPMENT</span>
                <span className="ml-1 text-white text-base font-bold transition-transform duration-150 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
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
                  width="216"
                  height="354"
                  decoding="async"
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
                  width="311"
                  height="196"
                  decoding="async"
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
                  width="231"
                  height="168"
                  decoding="async"
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
                  width="151"
                  height="245"
                  decoding="async"
                  className="w-full h-64 sm:h-72 object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="pt-4" data-aos="fade-up">
              <Link
                to="/products"
                className="group inline-flex items-center justify-center space-x-2 bg-brand-red text-white hover:bg-[#cf171e] font-bold text-xs sm:text-sm tracking-wider uppercase px-5 py-2.5 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 min-h-[42px] w-full sm:w-auto cursor-pointer"
              >
                <span>VIEW ALL EQUIPMENT</span>
                <span className="ml-1 text-white text-base font-bold transition-transform duration-150 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Sectors Served Section - Modern Responsive Bento Composition */}
      <section className="bg-white border-b border-border relative overflow-hidden py-14 sm:py-18 lg:py-24" aria-labelledby="sectors-served-heading">
        {/* Subtle red accent tab on left edge */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 sm:w-2.5 h-10 sm:h-12 bg-brand-red rounded-r-md pointer-events-none" aria-hidden="true" />

        <Container>
          <div className="space-y-6 lg:space-y-8">
            {/* ROW 1: Eyebrow + Headline + Paragraph (Left) & Featured Hospitals Card (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              {/* Left Column: Heading and Intro */}
              <div
                className="lg:col-span-5 flex flex-col justify-center py-2 lg:py-4"
                data-aos="fade-right"
                data-aos-duration="750"
              >
                <div className="flex items-center space-x-2.5 mb-3.5">
                  <span className="w-5 h-[2.5px] bg-brand-red rounded-full flex-shrink-0" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                    SECTORS SERVED
                  </span>
                </div>
                <h2
                  id="sectors-served-heading"
                  className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A192F] tracking-tight leading-[1.2]"
                >
                  Supporting Healthcare <span className="text-brand-blue">Across Uganda</span>
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4 max-w-xl">
                  From national and private hospitals to diagnostic laboratories, health centres, NGOs and individual patients, we supply medical equipment across diverse healthcare settings in Uganda.
                </p>
              </div>

              {/* Right Column: Hospitals Card */}
              <div
                className="lg:col-span-7"
                data-aos="fade-left"
                data-aos-duration="750"
              >
                <Link
                  to="/who-we-serve"
                  className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-full min-h-[260px] lg:min-h-[290px] border border-slate-200/80 cursor-pointer"
                >
                  <img
                    src={hospitalsImg}
                    alt="Hospitals & Health Facilities equipped by FAB"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061224]/90 via-[#061224]/35 to-transparent" />
                  <div className="absolute inset-0 p-6 sm:p-7 flex items-end justify-between gap-4">
                    <div className="max-w-md">
                      <h3 className="text-white font-bold text-lg sm:text-xl lg:text-2xl tracking-tight mb-1.5 drop-shadow-sm">
                        Hospitals
                      </h3>
                      <p className="text-slate-200/90 text-xs sm:text-sm leading-relaxed drop-shadow-sm">
                        Equipping hospitals and medical centres with reliable, high-quality equipment.
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white shrink-0 transition-all duration-300 group-hover:bg-brand-red group-hover:border-brand-red group-hover:translate-x-1 shadow-sm">
                      <svg className="w-4 h-4 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* ROW 2: 3-Column Equal Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1: Diagnostic Laboratories */}
              <div data-aos="fade-up" data-aos-duration="750" data-aos-delay="100">
                <Link
                  to="/who-we-serve"
                  className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:h-[280px] lg:h-[310px] border border-slate-200/80 cursor-pointer"
                >
                  <img
                    src={labsImg}
                    alt="Diagnostic Laboratories equipped by FAB"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061224]/90 via-[#061224]/35 to-transparent" />
                  <div className="absolute inset-0 p-6 sm:p-7 flex items-end justify-between gap-4">
                    <div className="max-w-xs">
                      <h3 className="text-white font-bold text-lg sm:text-xl tracking-tight mb-1.5 drop-shadow-sm">
                        Diagnostic Laboratories
                      </h3>
                      <p className="text-slate-200/90 text-xs sm:text-sm leading-relaxed drop-shadow-sm">
                        Providing accurate and reliable diagnostic tools for better outcomes.
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white shrink-0 transition-all duration-300 group-hover:bg-brand-red group-hover:border-brand-red group-hover:translate-x-1 shadow-sm">
                      <svg className="w-4 h-4 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Card 2: Health Centres */}
              <div data-aos="fade-up" data-aos-duration="750" data-aos-delay="200">
                <Link
                  to="/who-we-serve"
                  className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:h-[280px] lg:h-[310px] border border-slate-200/80 cursor-pointer"
                >
                  <img
                    src={healthCentresImg}
                    alt="Health Centres equipped by FAB"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061224]/90 via-[#061224]/35 to-transparent" />
                  <div className="absolute inset-0 p-6 sm:p-7 flex items-end justify-between gap-4">
                    <div className="max-w-xs">
                      <h3 className="text-white font-bold text-lg sm:text-xl tracking-tight mb-1.5 drop-shadow-sm">
                        Health Centres
                      </h3>
                      <p className="text-slate-200/90 text-xs sm:text-sm leading-relaxed drop-shadow-sm">
                        Extending quality healthcare to communities across urban and rural regions.
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white shrink-0 transition-all duration-300 group-hover:bg-brand-red group-hover:border-brand-red group-hover:translate-x-1 shadow-sm">
                      <svg className="w-4 h-4 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Card 3: NGOs & Health Programs */}
              <div data-aos="fade-up" data-aos-duration="750" data-aos-delay="300">
                <Link
                  to="/who-we-serve"
                  className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:h-[280px] lg:h-[310px] border border-slate-200/80 cursor-pointer"
                >
                  <img
                    src={ngosImg}
                    alt="NGOs and Health Programs supported by FAB"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061224]/90 via-[#061224]/35 to-transparent" />
                  <div className="absolute inset-0 p-6 sm:p-7 flex items-end justify-between gap-4">
                    <div className="max-w-xs">
                      <h3 className="text-white font-bold text-lg sm:text-xl tracking-tight mb-1.5 drop-shadow-sm">
                        NGOs &amp; Health Programs
                      </h3>
                      <p className="text-slate-200/90 text-xs sm:text-sm leading-relaxed drop-shadow-sm">
                        Partnering with NGOs to strengthen health outcomes and expand access to care.
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white shrink-0 transition-all duration-300 group-hover:bg-brand-red group-hover:border-brand-red group-hover:translate-x-1 shadow-sm">
                      <svg className="w-4 h-4 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* ROW 3: Panoramic Wide Card (Individual Patients) */}
            <div data-aos="fade-up" data-aos-duration="750" data-aos-delay="150">
              <Link
                to="/who-we-serve"
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block aspect-[16/7] sm:aspect-[21/9] md:h-[220px] lg:h-[250px] w-full border border-slate-200/80 cursor-pointer"
              >
                <img
                  src={patientsImg}
                  alt="Individual Patients supported by FAB"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061224]/90 via-[#061224]/35 to-transparent" />
                <div className="absolute inset-0 p-6 sm:p-7 lg:px-8 flex items-end justify-between gap-4">
                  <div className="max-w-xl">
                    <h3 className="text-white font-bold text-lg sm:text-xl lg:text-2xl tracking-tight mb-1.5 drop-shadow-sm">
                      Individual Patients
                    </h3>
                    <p className="text-slate-200/90 text-xs sm:text-sm leading-relaxed drop-shadow-sm">
                      Supporting individual health needs with access to essential medical equipment and supplies.
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white shrink-0 transition-all duration-300 group-hover:bg-brand-red group-hover:border-brand-red group-hover:translate-x-1 shadow-sm">
                    <svg className="w-4 h-4 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
