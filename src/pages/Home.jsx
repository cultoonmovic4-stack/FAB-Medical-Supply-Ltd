import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, LogoLoader, HomeHero } from '../components';
import envTheatreWideImg from '../assets/env_theatre_wide.webp';

// Verified high-clarity equipment photography for Section 3
import ctScannerImg from '../assets/products/ct_scanner_siemens.webp';
import monitorImg from '../assets/products/patient_monitor_icu_ge.webp';
import anesthesiaImg from '../assets/products/anesthesia_machine.webp';
import microscopeImg from '../assets/products/microscope_optical.webp';

// Section 4: Complete Healthcare Ecosystem Scene
import { CompleteHealthcareEcosystemScene } from './HomeSection4Test';

const AUTOPLAY_INTERVAL = 5500;

function EquipmentDepartmentsScene() {
  const [selectedZone, setSelectedZone] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const zones = [
    {
      num: '01',
      code: 'RAD-IMG',
      title: 'Radiology & Imaging',
      image: ctScannerImg,
      link: '/products/radiology-imaging',
      role: 'Cross-Sectional CT & Ultrasound Doppler Systems',
      desc: 'High-contrast volumetric imaging enabling clinicians across Uganda to detect acute hemorrhages, evaluate polytrauma, and stage oncological conditions with sub-millimeter precision.',
      specs: ['16-Slice CT Scanners', 'Color Doppler Ultrasound', 'Mobile X-Ray Units', 'Clinical ECG Analyzers'],
      stock: '06 Units in Kampala Stock',
    },
    {
      num: '02',
      code: 'ICU-CC',
      title: 'Critical Care & ICU',
      image: monitorImg,
      link: '/products/emergency-icu',
      role: 'Continuous Physiological Telemetry & Life Support',
      desc: 'Continuous multi-parameter monitoring of ECG, SpO2, and non-invasive blood pressure, coupled with hospital-grade ventilators calibrated for regional referral high-dependency units.',
      specs: ['Multi-Parameter Telemetry', 'ICU Ventilators', 'High-Output Concentrators', 'Defibrillators'],
      stock: '05 Units in Kampala Stock',
    },
    {
      num: '03',
      code: 'THR-SURG',
      title: 'Operating Theatre',
      image: anesthesiaImg,
      link: '/products/theatre-room',
      role: 'Surgical Anesthesia & Intraoperative Infrastructure',
      desc: 'Complete surgical suite installations including multi-gas anesthesia workstations, multi-position hydraulic operating tables, and electrosurgical generators for controlled hemostasis.',
      specs: ['Anesthesia Workstations', 'Operating Tables', 'Diathermy Generators', 'Sterile Instrument Kits'],
      stock: '05 Units in Kampala Stock',
    },
    {
      num: '04',
      code: 'LAB-DIAG',
      title: 'Clinical Laboratory',
      image: microscopeImg,
      link: '/products/laboratory',
      role: 'Diagnostic Pathology & Bio-Containment Workstations',
      desc: 'Precision diagnostic equipment engineered for clinical microbiology, hematology, and biochemistry with on-site biomedical calibration and continuous consumable support.',
      specs: ['Automated Analyzers', 'Binocular Research Optics', 'High-Speed Centrifuges', 'Biosafety Hoods'],
      stock: '05 Units in Kampala Stock',
    },
  ];

  const current = zones[selectedZone];

  // Auto-scroll timer
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedZone((prev) => (prev + 1) % zones.length);
        setIsTransitioning(false);
      }, 150);
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, zones.length]);

  const handleSelectZone = (idx) => {
    if (idx === selectedZone) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedZone(idx);
      setIsTransitioning(false);
    }, 150);
  };

  return (
    <section
      className="bg-white border-b border-slate-200 py-12 sm:py-16 lg:py-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      aria-labelledby="equipment-departments-heading"
    >
      {/* CSS Keyframes for the active runway tab progress bar */}
      <style>{`
        @keyframes scene3BProgress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>

      <Container>
        {/* Header Introduction */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-200 mb-8 sm:mb-10">
          <div>
            <div className="flex items-center space-x-2 text-[10.5px] font-mono font-bold uppercase tracking-[0.2em] text-[#21409A] mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
              <span>02 / CLINICAL EQUIPMENT DIRECTORY</span>
            </div>
            <h2 id="equipment-departments-heading" className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#0F172A]">
              Core Healthcare Departments
            </h2>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] hover:text-[#21409A] transition-colors py-1 group w-fit"
          >
            <span>VIEW COMPLETE CATALOGUE (27 UNITS)</span>
            <span className="text-[#ED1C24] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </Link>
        </div>

        {/* ========================================================
            THE MAIN SPATIAL STAGE (NO OVERLAYS • 100% CLEAR VISIBILITY)
            ======================================================== */}
        <div className="border border-slate-200 bg-[#FAFCFE] rounded-xs overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Visual Column: Clear, High-Definition Photographic Display */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white border-b lg:border-b-0 lg:border-r border-slate-200 relative">
              {/* Technical Registration Crosshairs */}
              <div className="absolute top-3 left-3 text-[10px] font-mono text-slate-300 select-none">+</div>
              <div className="absolute top-3 right-3 text-[10px] font-mono text-slate-300 select-none">+</div>
              <div className="absolute bottom-3 left-3 text-[10px] font-mono text-slate-300 select-none">+</div>
              <div className="absolute bottom-3 right-3 text-[10px] font-mono text-slate-300 select-none">+</div>

              {/* Top Meta Tag on the Visual */}
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-3 border-b border-slate-100">
                <span className="font-bold text-[#ED1C24]">{current.code} // REF SPEC</span>
                <span className="text-[10.5px] uppercase text-emerald-600 font-semibold">{current.stock}</span>
              </div>

              {/* Crystal-Clear Product Image (100% Opacity • ZERO Washing-Out Overlays) */}
              <div className="my-4 sm:my-6 flex items-center justify-center min-h-[240px] sm:min-h-[320px] lg:min-h-[360px] aspect-[4/3] overflow-hidden select-none">
                <img
                  src={current.image}
                  alt={current.title}
                  width="480"
                  height="360"
                  className={`w-full h-full object-contain transition-all duration-300 ${
                    isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                  }`}
                  loading="eager"
                />
              </div>

              {/* Bottom Caption Bar */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>AUTHENTIC EQUIPMENT RECORD</span>
                <span className="text-[#0F172A] font-bold">KAMPALA CENTRAL WAREHOUSE</span>
              </div>
            </div>

            {/* Editorial Dossier Column: In-Depth Narrative & Specifications */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 bg-slate-50/50">
              <div className="space-y-4">
                {/* Zone Eyebrow */}
                <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#ED1C24] uppercase tracking-[0.2em]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
                  <span>ZONE {current.num} OF 04 • {current.code}</span>
                </div>

                {/* Department Title */}
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0F172A] tracking-tight leading-tight">
                  {current.title}
                </h3>

                {/* Clinical Role Subheading */}
                <p className="text-xs sm:text-sm font-mono font-bold text-[#21409A] leading-snug">
                  {current.role}
                </p>

                {/* Rich Editorial Narrative */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {current.desc}
                </p>

                {/* Structured Hardware Tags */}
                <div className="pt-2 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate-400 font-bold block">
                    CORE SUPPLIED HARDWARE:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-700">
                    {current.specs.map((spec, i) => (
                      <div
                        key={i}
                        className="p-2 bg-white border border-slate-200 rounded-xs flex items-center space-x-2 shadow-2xs"
                      >
                        <span className="text-[#ED1C24] font-bold">•</span>
                        <span className="truncate">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Action Link */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <Link
                  to={current.link}
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-[#21409A] hover:bg-[#1B3580] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-xs rounded-xs"
                >
                  <span>EXPLORE {current.title.toUpperCase()} CATALOGUE</span>
                  <span aria-hidden="true">→</span>
                </Link>

                <span className="text-[11px] font-mono text-slate-400 text-center sm:text-right">
                  NDA Import Cleared &amp; Certified
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================
            4-ZONE RUNWAY CONTROLLER (WITH ANIMATED LIVE PROGRESS BAR)
            ======================================================== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 border-x border-b border-slate-200 bg-white">
          {zones.map((zone, idx) => {
            const isActive = selectedZone === idx;

            return (
              <button
                key={zone.num}
                type="button"
                onClick={() => handleSelectZone(idx)}
                className={`group relative p-4 sm:p-5 text-left transition-colors cursor-pointer overflow-hidden min-h-[64px] ${
                  isActive ? 'bg-slate-50' : 'hover:bg-[#FAFCFE]'
                }`}
              >
                {/* Live Animated Progress Bar for Active Tab */}
                {isActive && (
                  <div
                    key={selectedZone}
                    className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#ED1C24] origin-left"
                    style={{
                      animation: isPaused
                        ? 'none'
                        : `scene3BProgress ${AUTOPLAY_INTERVAL}ms linear forwards`,
                    }}
                  />
                )}

                <div className="flex items-center justify-between text-xs font-mono mb-1">
                  <span className={isActive ? 'text-[#ED1C24] font-bold' : 'text-slate-400'}>
                    {zone.num}.
                  </span>
                  <span className="text-[9.5px] font-semibold uppercase text-slate-400">
                    {zone.code}
                  </span>
                </div>

                <h4 className="font-bold text-xs sm:text-sm text-[#0F172A] uppercase tracking-tight group-hover:text-[#21409A] transition-colors truncate">
                  {zone.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Ambient Acknowledgment of Other 5 Departments */}
        <div className="mt-8 py-4 px-5 bg-slate-50 border border-slate-200 rounded-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-600">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
            <span>ALSO EQUIPPING: HOSPITAL FURNITURE • OPD • MATERNITY • UTILITY &amp; STERILIZATION</span>
          </div>
          <Link
            to="/products"
            className="text-[#21409A] font-bold uppercase tracking-wider hover:underline flex items-center space-x-1"
          >
            <span>FULL 9-DEPARTMENT REPOSITORY</span>
            <span>→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default function Home({ onNavigate }) {
  return (
    <div>
      {/* Brand Transition Loader */}
      <LogoLoader duration={1600} />

      {/* Editorial Medical Equipment Showcase Hero Section (Inspired by reference composition) */}
      <HomeHero />

      {/* ========================================================
          SECTION 2: WHO WE ARE (HIGH-KEY CLINICAL SCENE & OPERATIONS LEDGER)
          ======================================================== */}
      <section
        className="relative bg-white border-b border-slate-200 py-16 sm:py-20 lg:py-24 overflow-hidden"
        aria-labelledby="who-we-are-heading"
      >
        {/* High-Key Clinical Panoramic Scene Backdrop */}
        <div className="absolute inset-0 select-none pointer-events-none">
          <img
            src={envTheatreWideImg}
            alt=""
            className="w-full h-full object-cover object-center opacity-30"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent sm:via-white/80" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-2xl space-y-6">
            {/* Monospace Eyebrow */}
            <div className="flex items-center space-x-2 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#ED1C24]">
              <span className="w-2 h-2 rounded-full bg-[#ED1C24]" aria-hidden="true" />
              <span>WHO WE ARE • KAMPALA, UGANDA</span>
            </div>

            {/* Dominant Architectural Headline */}
            <h2
              id="who-we-are-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#0F172A] tracking-tight leading-[1.04]"
            >
              Equipping Healthcare. <br />
              <span className="text-[#21409A]">Empowering Clinicians.</span>
            </h2>

            {/* Institutional Narrative */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              FAB Medical Supplies Ltd. provides high-grade diagnostic and therapeutic technology to hospitals, specialized surgical centers, and diagnostic laboratories across Uganda. We manage the complete procurement lifecycle from import clearance to long-term preventative maintenance.
            </p>

            {/* Tripartite Integrated Operational Ledger */}
            <div className="border border-slate-200 divide-y divide-slate-200 bg-white/95 backdrop-blur-xs rounded-xs shadow-xs">
              <div className="p-4 flex items-start space-x-4">
                <span className="font-mono font-bold text-xs text-[#21409A] pt-0.5">01.</span>
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase text-[#0F172A]">Direct Equipment Supply</h3>
                  <p className="text-xs text-slate-600 mt-0.5">Sourcing verified diagnostic and surgical apparatus from world-leading manufacturers conforming to ISO &amp; NDA guidelines.</p>
                </div>
              </div>

              <div className="p-4 flex items-start space-x-4">
                <span className="font-mono font-bold text-xs text-[#21409A] pt-0.5">02.</span>
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase text-[#0F172A]">Secure National Logistics</h3>
                  <p className="text-xs text-slate-600 mt-0.5">Ensuring uninterrupted, cold-chain compliant delivery of sensitive medical equipment and diagnostic reagents across Uganda.</p>
                </div>
              </div>

              <div className="p-4 flex items-start space-x-4">
                <span className="font-mono font-bold text-xs text-[#21409A] pt-0.5">03.</span>
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase text-[#0F172A]">On-Site Engineering</h3>
                  <p className="text-xs text-slate-600 mt-0.5">Comprehensive commissioning, preventative maintenance, rapid calibration, and emergency technical call-outs from Bombo Road.</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#0F172A] hover:bg-[#21409A] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-xs rounded-xs"
              >
                <span>LEARN MORE ABOUT FAB</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </Container>

        {/* Ambient Bottom Telemetry Strip */}
        <div className="mt-12 sm:mt-16 border-t border-slate-200 bg-white/70 backdrop-blur-xs">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 py-3.5 text-xs font-mono text-slate-500">
              <div className="py-1 sm:py-0 sm:pr-4 flex items-center justify-center sm:justify-start space-x-2">
                <span className="font-bold text-[#21409A]">500+</span>
                <span className="text-[11px] uppercase">FACILITIES SUPPLIED NATIONWIDE</span>
              </div>
              <div className="py-1 sm:py-0 sm:px-4 flex items-center justify-center space-x-2">
                <span className="font-bold text-[#ED1C24]">09</span>
                <span className="text-[11px] uppercase">CLINICAL DEPARTMENTS</span>
              </div>
              <div className="py-1 sm:py-0 sm:pl-4 flex items-center justify-center sm:justify-end space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
                <span className="text-[11px] uppercase text-[#0F172A] font-semibold">48H REGIONAL DISPATCH</span>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: CORE CLINICAL EQUIPMENT SCENE & RUNWAY DIRECTORY
          ======================================================== */}
      <EquipmentDepartmentsScene />

      {/* ========================================================
          SECTION 4: COMPLETE HEALTHCARE ECOSYSTEM SCENE
          ======================================================== */}
      <CompleteHealthcareEcosystemScene />
    </div>
  );
}