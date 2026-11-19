import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

// Section 1 & 2 photographic assets
import heroRadiologyImg from '../assets/about/about-who-radiology.webp';
import zoneTheatreImg from '../assets/about/about-company-operating-room.webp';
import zoneRadiologyImg from '../assets/about/about-company-control-suite.webp';
import zoneWardImg from '../assets/about/about-company-ward-interior.webp';
import zoneOutpatientImg from '../assets/env_outpatient.jpg';

/**
 * Who We Serve Page — FAB Medical Supplies Ltd.
 *
 * 1. Hero: Architectural broadsheet split with full-height clinical photography and bottom sector strip.
 * 2. Clinical Scope: Four core clinical zones (open hairline layout, concise hardware specs).
 * 3. The Institutions We Supply: Open hairline index of the four client groups.
 * 4. From Source to Facility: Typographic 4-stage delivery path.
 */
export default function WhoWeServe() {
  // Four Core Clinical Zones (R3)
  const clinicalZones = [
    {
      num: '01',
      title: 'Surgical & Acute Care',
      coverage: 'Operating Theatres, ICU & Resuscitation',
      hardware: 'Operating Tables, Shadowless Lamps, Patient Monitors, Diathermy',
      image: zoneTheatreImg,
      alt: 'Operating theatre equipped with shadowless lamps and surgical systems',
      category: 'theatre-room',
    },
    {
      num: '02',
      title: 'Diagnostics & Pathology',
      coverage: 'Radiology Suites, Ultrasound & Labs',
      hardware: 'Color Doppler Ultrasound, Optical Microscopes, Centrifuges',
      image: zoneRadiologyImg,
      alt: 'Diagnostic control suite and medical imaging equipment',
      category: 'radiology-imaging',
    },
    {
      num: '03',
      title: 'Inpatient & Maternity',
      coverage: 'Recovery Wards, Delivery Suites & Nursery',
      hardware: 'Hydraulic Delivery Beds, Hospital Beds, Infant Warmers',
      image: zoneWardImg,
      alt: 'Hospital inpatient ward beds and patient recovery infrastructure',
      category: 'hospital-furniture',
    },
    {
      num: '04',
      title: 'Primary Care & Utilities',
      coverage: 'OPD Clinics, Sterilization & Waste',
      hardware: 'Examination Couches, Diagnostic Sets, Vertical Autoclaves',
      image: zoneOutpatientImg,
      alt: 'Outpatient consultation room and examination couch',
      category: 'opd-consultation',
    },
  ];

  // Sector line shown under the hero headline
  const heroSectors = ['Hospitals', 'Clinics', 'Laboratories', 'NGOs & Partners'];

  // The four institution groups FAB supplies (Section 3: Variation 3A)
  const institutionSectors = [
    {
      num: '01',
      tier: 'TERTIARY CARE',
      title: 'Hospitals & Referral Facilities',
      desc: 'Turnkey outfitting for surgical theatres, intensive care units, inpatient wards, and imaging suites.',
      focus: ['Operating Theatres', 'ICU Resuscitation', 'Inpatient Wards', 'Imaging Consoles'],
      link: '/products',
      cta: 'View Hospital Equipment',
    },
    {
      num: '02',
      tier: 'PRIMARY CARE',
      title: 'Clinics & Specialized Practices',
      desc: 'Reliable primary diagnostic equipment, examination furniture, and maternal health monitoring.',
      focus: ['OPD Consultation', 'Delivery Beds', 'Vital Signs Screening', 'Infant Care'],
      link: '/products',
      cta: 'View Clinic Equipment',
    },
    {
      num: '03',
      tier: 'DIAGNOSTIC PATHOLOGY',
      title: 'Diagnostic & Research Labs',
      desc: 'High-precision analytical instrumentation, microscopy, specimen centrifugation, and cold-chain storage.',
      focus: ['Optical Microscopy', 'Clinical Centrifuges', 'Digital Autoclaves', 'Reagent Cold Storage'],
      link: '/products/laboratory',
      cta: 'View Lab Equipment',
    },
    {
      num: '04',
      tier: 'HUMANITARIAN RELIEF',
      title: 'NGOs & Global Health Partners',
      desc: 'Vetted equipment packages, portable diagnostics, and emergency response kits for upcountry deployment.',
      focus: ['Mobile Diagnostics', 'Emergency Trauma Kits', 'Consumables Supply', 'Upcountry Delivery'],
      link: '/products',
      cta: 'View Partner Solutions',
    },
  ];

  // 4 connected stages for Section 4 (From Source to Facility - Variation 4B)
  const supplyChainStages = [
    {
      step: '01',
      phase: 'GLOBAL SOURCING',
      title: 'Sourced & Verified',
      desc: 'Medical equipment, surgical instruments, and diagnostics imported directly from certified international manufacturers.',
    },
    {
      step: '02',
      phase: 'LOGISTICS & INSPECTION',
      title: 'Secure Dispatch',
      desc: 'Stored at Emka House, Bombo Road Kampala, quality-checked, and safely dispatched to Kampala or upcountry facilities.',
    },
    {
      step: '03',
      phase: 'ON-SITE DELIVERY',
      title: 'Facility Handover',
      desc: 'Direct handover to biomedical engineers, hospital administrators, or clinic superintendents with verified manifests.',
    },
    {
      step: '04',
      phase: 'LIFECYCLE SERVICE',
      title: 'Ongoing Support',
      desc: 'Local calibration, maintenance, warranty servicing, and technical repairs provided by FAB biomedical technicians.',
    },
  ];

  return (
    <div className="bg-white min-h-screen text-[#0F172A] selection:bg-[#21409A] selection:text-white">
      {/* ========================================================
          1. HERO: Architectural Broadsheet Split + Sector Anchor Strip
          ======================================================== */}
      <section
        className="bg-white border-b border-slate-200 overflow-hidden"
        aria-labelledby="wws-hero-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column (7 cols): Editorial Copy & Primary Actions */}
            <div className="lg:col-span-7 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex flex-col justify-center">
              <div className="max-w-xl space-y-5">
                <div className="flex items-center space-x-2 text-[11px] font-mono font-bold tracking-[0.24em] text-[#ED1C24] uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#ED1C24]" aria-hidden="true" />
                  <span>WHO WE SERVE &bull; UGANDA</span>
                </div>

                <h1
                  id="wws-hero-heading"
                  className="text-3xl sm:text-5xl lg:text-[52px] font-black uppercase text-[#0F172A] tracking-tight leading-[1.03]"
                >
                  Equipping the facilities that{' '}
                  <span className="text-[#21409A]">care for Uganda.</span>
                </h1>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Hospitals, clinics, diagnostic laboratories, and health partners depend on FAB for reliable procurement, importation, and biomedical servicing.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="#clinical-zones-heading"
                    className="inline-flex items-center space-x-2 bg-[#21409A] hover:bg-[#0F172A] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xs transition-colors"
                  >
                    <span>See Clinical Coverage</span>
                    <span aria-hidden="true">&darr;</span>
                  </a>
                  <a
                    href={`https://wa.me/256704757991?text=${encodeURIComponent(
                      'Hello FAB Medical Supplies Ltd., our healthcare facility would like to request an institutional equipment quote.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 border border-slate-300 hover:border-[#0F172A] text-[#0F172A] text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xs transition-colors"
                  >
                    <span>Request Institutional Quote</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Full-Bleed Sharp-Edged Clinical Photo */}
            <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-[380px] border-t lg:border-t-0 lg:border-l border-slate-200 bg-slate-100">
              <img
                src={heroRadiologyImg}
                alt="Hospital radiology and clinical diagnostic facility equipped by FAB Medical Supplies"
                className="absolute inset-0 w-full h-full object-cover object-center"
                fetchpriority="high"
                loading="eager"
                decoding="async"
              />
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs border border-slate-200 px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#0F172A] flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
                <span>NATIONWIDE UGANDA DISPATCH</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Bottom 4-Sector Architectural Index Strip */}
        <div className="bg-[#F8FAFC] border-t border-slate-200">
          <Container>
            <div className="py-3.5 grid grid-cols-2 md:grid-cols-4 gap-3 text-[11px] font-mono uppercase tracking-wider text-slate-600">
              {heroSectors.map((sector, idx) => (
                <a
                  key={sector}
                  href="#institutions-heading"
                  className="flex items-center space-x-2 group hover:text-[#21409A] transition-colors"
                >
                  <span className="font-black text-[#ED1C24]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <strong className="text-[#0F172A] group-hover:text-[#21409A] transition-colors">
                    {sector}
                  </strong>
                </a>
              ))}
            </div>
          </Container>
        </div>
      </section>

      {/* ========================================================
          2. CLINICAL SCOPE: FOUR CORE CLINICAL ZONES (R3)
          (Open hairline 4-column layout — no box frames, no card traps)
          ======================================================== */}
      <section
        className="py-14 sm:py-18 lg:py-24 bg-white border-b border-slate-200"
        aria-labelledby="clinical-zones-heading"
      >
        <Container>
          {/* Section Header */}
          <div className="max-w-2xl mb-10 space-y-1">
            <div className="flex items-center space-x-2 text-[11px] font-mono font-bold tracking-[0.25em] text-[#ED1C24] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#ED1C24]" aria-hidden="true" />
              <span>FACILITY COVERAGE</span>
            </div>
            <h2
              id="clinical-zones-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight uppercase"
            >
              Four Core Clinical Zones
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              From emergency intervention to routine diagnostics, FAB delivers complete departmental setups.
            </p>
          </div>

          {/* 4 Open Hairline Columns (Clean architectural dividers) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-t border-b border-slate-200">
            {clinicalZones.map((zone) => (
              <div key={zone.num} className="p-6 flex flex-col justify-between space-y-6 group">
                <div className="space-y-4">
                  {/* Frameless Photo */}
                  <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={zone.image}
                      alt={zone.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      width="600"
                      height="375"
                      loading="lazy"
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-[#ED1C24] block">
                      ZONE {zone.num}
                    </span>
                    <h3 className="text-lg font-black uppercase tracking-tight text-[#0F172A]">
                      {zone.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400">
                      {zone.coverage}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      PRIMARY HARDWARE
                    </span>
                    <p className="text-xs font-mono text-slate-700 leading-relaxed">
                      {zone.hardware}
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to={`/products/${zone.category}`}
                    className="text-xs font-mono font-bold uppercase tracking-wider text-[#21409A] hover:text-[#ED1C24] inline-flex items-center space-x-1.5 transition-colors"
                  >
                    <span>Explore Zone</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>


      {/* ========================================================
          3. THE INSTITUTIONS WE SUPPLY (Variation 3A)
          (Swiss Architectural Directory — ultra-clean hairline rows)
          ======================================================== */}
      <section
        className="py-14 sm:py-18 lg:py-24 bg-slate-50/60 border-b border-slate-200"
        aria-labelledby="institutions-heading"
      >
        <Container>
          {/* Header */}
          <div className="max-w-2xl mb-10 sm:mb-12 space-y-1">
            <div className="flex items-center space-x-2 text-[11px] font-mono font-bold tracking-[0.25em] text-[#ED1C24] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#ED1C24]" aria-hidden="true" />
              <span>CLIENT PROFILES</span>
            </div>
            <h2
              id="institutions-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight uppercase"
            >
              The Institutions We Supply
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Four sectors rely on FAB Medical Supplies for vetted hardware and ongoing technical support across Uganda.
            </p>
          </div>

          {/* Hairline Directory List */}
          <div className="border-t border-b border-slate-200 divide-y divide-slate-200">
            {institutionSectors.map((item) => (
              <Link
                key={item.num}
                to={item.link}
                className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group hover:bg-white transition-colors px-2 sm:px-4"
              >
                {/* Number & Tier (Mobile) */}
                <div className="md:col-span-2 flex items-center space-x-3">
                  <span className="text-2xl sm:text-3xl font-mono font-black text-[#ED1C24]">
                    {item.num}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block md:hidden">
                    {item.tier}
                  </span>
                </div>

                {/* Title & Tier (Desktop) */}
                <div className="md:col-span-4 space-y-0.5">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest hidden md:block">
                    {item.tier}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-[#0F172A] uppercase tracking-tight group-hover:text-[#21409A] transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Scope & Focus Tags */}
                <div className="md:col-span-4 space-y-1.5">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.focus.slice(0, 3).map((f) => (
                      <span key={f} className="text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Link */}
                <div className="md:col-span-2 flex md:justify-end items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-[#21409A] group-hover:text-[#ED1C24] transition-colors pt-2 md:pt-0">
                  <span>View Scope</span>
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================
          4. FROM SOURCE TO FACILITY (Variation 4B)
          (Open 4-Column Hairline Ledger — crisp, symmetrical, no stock photos)
          ======================================================== */}
      <section
        className="py-14 sm:py-18 lg:py-24 bg-white border-b border-slate-200"
        aria-labelledby="supply-chain-heading"
      >
        <Container>
          {/* Header */}
          <div className="max-w-2xl mb-12 sm:mb-16 space-y-1">
            <div className="flex items-center space-x-2 text-[11px] font-mono font-bold tracking-[0.25em] text-[#ED1C24] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#ED1C24]" aria-hidden="true" />
              <span>SUPPLY CHAIN INTEGRITY</span>
            </div>
            <h2
              id="supply-chain-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight uppercase"
            >
              From Source to Facility
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Four stages of quality control ensuring every delivery arrives calibrated and intact.
            </p>
          </div>

          {/* 4 Open Hairline Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-t border-b border-slate-200">
            {supplyChainStages.map((stage) => (
              <div key={stage.step} className="p-6 sm:p-7 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-black text-[#ED1C24]">
                    STAGE {stage.step}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase">
                    {stage.phase}
                  </span>
                </div>

                <h3 className="text-lg font-black uppercase tracking-tight text-[#0F172A]">
                  {stage.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
