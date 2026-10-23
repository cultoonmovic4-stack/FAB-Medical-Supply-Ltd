import React, { useState, useEffect, useRef } from 'react';
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

// Section 3 photographic assets
import supplyTheatreImg from '../assets/wws-supply-theatre.webp';
import supplyLabImg from '../assets/wws-supply-lab.webp';
import categoryCriticalCareImg from '../assets/category-critical-care.webp';
import categoryTheatreImg from '../assets/category-theatre-room.webp';

// Section 4 photographic assets (Continuous Healthcare Supply Chain)
import chainSuppliersImg from '../assets/chain_suppliers.webp';
import deliveryImg from '../assets/service-delivery.webp';
import chainHospitalsImg from '../assets/chain_hospitals.webp';
import repairImg from '../assets/service-repair.webp';

/**
 * Who We Serve Page — FAB Medical Supplies Ltd.
 * 
 * Strict architectural editorial layout:
 * 1. Hero: Minimalist 2-column broadsheet with concise copy, framed clinical photo, and sector index.
 * 2. Clinical Scope: Interactive Architectural Master-Detail Console (no repetitive card grids).
 * 3. What We Supply Across Healthcare: 2 core clinical showcases + 9-department directory matrix (no AI gradients).
 * 4. Healthcare Supply Chain Pipeline: 3-stage distribution architecture with authentic Uganda hub mapping.
 */
export default function WhoWeServe() {
  const [activeDept, setActiveDept] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const tabsContainerRef = useRef(null);
  const tabRefs = useRef([]);

  // 8 Clinical Environments with deep operational specifications
  const clinicalEnvironments = [
    {
      num: '01',
      id: 'radiology-imaging',
      title: 'RADIOLOGY & IMAGING',
      tag: 'DIAGNOSTIC TELEMETRY',
      subtitle: 'Imaging suites, ultrasound centers & radiography',
      desc: 'High-precision diagnostic imaging systems engineered for hospital radiology suites, private imaging clinics, and specialized ultrasound scan centers across Uganda.',
      equipment: [
        'Color Doppler & Portable Ultrasound Units',
        'X-Ray Accessories & Radiation Lead Apparel',
        'Diagnostic Radiographic Telemetry Monitors',
        'Medical Image Archiving Consoles',
      ],
      image: envRadiologyImg,
      alt: 'Clinical radiology and ultrasound diagnostic imaging environment',
      category: 'radiology-imaging',
    },
    {
      num: '02',
      id: 'opd-consultation',
      title: 'OUTPATIENT & OPD',
      tag: 'PRIMARY HEALTHCARE',
      subtitle: 'Consultation rooms & high-throughput examination',
      desc: 'Essential practitioner tools, examination couches, and diagnostic screening sets tailored for high-volume outpatient clinics and specialized practitioner suites.',
      equipment: [
        'Hydraulic Examination Couches & Step Stools',
        'Diagnostic Wall & Desk Sets (Oto/Ophthalmoscopes)',
        'Digital Precision Scales & Height Stadiometers',
        'Point-of-Care Multiparameter Vital Signs Monitors',
      ],
      image: envOutpatientImg,
      alt: 'Outpatient consultation room and examination couch environment',
      category: 'opd-consultation',
    },
    {
      num: '03',
      id: 'emergency-icu',
      title: 'EMERGENCY & CRITICAL CARE',
      tag: 'INTENSIVE CARE / ICU',
      subtitle: 'Continuous life support & emergency resuscitation',
      desc: 'Critical care monitoring, resuscitation equipment, and emergency trauma apparatus engineered for rapid clinical intervention in high-acuity environments.',
      equipment: [
        'Multiparameter ICU Monitors (ECG/SpO2/NIBP/Temp)',
        'Automated & Manual Cardiac Defibrillators',
        'Emergency Crash Carts with Modular Trays',
        'High-Flow Medical Suction Pumps & Regulators',
      ],
      image: envEmergencyImg,
      alt: 'Intensive care patient monitor and diagnostic telemetry equipment',
      category: 'emergency-icu',
    },
    {
      num: '04',
      id: 'maternity-pediatrics',
      title: 'MATERNITY & PEDIATRICS',
      tag: 'MATERNAL & NEONATAL',
      subtitle: 'Labour delivery suites & neonatal intensive care',
      desc: 'Specialized obstetrics and pediatric solutions supporting safe clinical deliveries, neonatal vital monitoring, and infant phototherapy in healthcare centres.',
      equipment: [
        'Multi-Position Hydraulic Delivery Beds',
        'Infant Radiant Warmers & Incubators',
        'High-Sensitivity Ultrasound Fetal Dopplers',
        'Pediatric Emergency Resuscitation Sets',
      ],
      image: envMaternityImg,
      alt: 'Maternity and pediatric hospital ward infrastructure',
      category: 'maternity-pediatrics',
    },
    {
      num: '05',
      id: 'theatre-room',
      title: 'SURGICAL THEATRE',
      tag: 'ASEPTIC SURGERY',
      subtitle: 'Sterile surgical suites & operating rooms',
      desc: 'Robust surgical infrastructure, shadowless ceiling illumination, and electrosurgical generators engineered to maintain strict sterility and operational reliability.',
      equipment: [
        'Electro-Hydraulic Universal Operating Tables',
        'Dual-Head Shadowless LED Ceiling Lamps',
        'High-Frequency Electrosurgical Diathermy Units',
        'Precision General & Orthopaedic Surgical Toolsets',
      ],
      image: envTheatreImg,
      alt: 'Surgical operating theatre with operating bed and shadowless lamp',
      category: 'theatre-room',
    },
    {
      num: '06',
      id: 'laboratory',
      title: 'DIAGNOSTIC LABORATORY',
      tag: 'PATHOLOGY & SCREENING',
      subtitle: 'Pathology testing, blood banking & microscopy',
      desc: 'Precision analytical machinery, optical microscopes, and temperature-controlled storage solutions ensuring diagnostic accuracy for clinical laboratories.',
      equipment: [
        'Binocular & Trinocular Laboratory Microscopes',
        'High-Speed Clinical Centrifuges & Rotors',
        'Digital Autoclaves & Sterilization Chambers',
        'Laboratory Reagent & Blood Bank Refrigerators',
      ],
      image: envLabImg,
      alt: 'Clinical laboratory diagnostic benches and microscopes',
      category: 'laboratory',
    },
    {
      num: '07',
      id: 'hospital-furniture',
      title: 'GENERAL HOSPITAL WARD',
      tag: 'WARD INFRASTRUCTURE',
      subtitle: 'Inpatient recovery wards & patient comfort',
      desc: 'Durable hospital beds, pressure-relief mattresses, and ward support furniture built for patient safety, comfort, and clinical sanitation standards.',
      equipment: [
        'Multi-Function Manual & Electric Hospital Beds',
        'Anti-Bedsore Ripple Air Mattress Systems',
        'Stainless Steel Bedside Lockers & Overbed Tables',
        'Mobile IV Drip Stands & Privacy Screen Partitions',
      ],
      image: envWardImg,
      alt: 'Hospital ward beds and clinical inpatient care facilities',
      category: 'hospital-furniture',
    },
    {
      num: '08',
      id: 'utility-services',
      title: 'SUPPORTING UTILITIES',
      tag: 'CENTRAL STERILIZATION',
      subtitle: 'Infection control, utility sterilization & waste',
      desc: 'Heavy-duty sterilization autoclaves, clinical waste management machinery, and mortuary infrastructure required for comprehensive hospital operations.',
      equipment: [
        'High-Capacity Vertical Autoclaves',
        'Ultrasonic Medical Instrument Cleaners',
        'Clinical Medical Waste Incinerators',
        'Mortuary Cold Storage & Body Handling Trolleys',
      ],
      image: envUtilityImg,
      alt: 'Clinical utility equipment and sterilization machinery',
      category: 'utility-services',
    },
  ];

  const currentDept = clinicalEnvironments[activeDept];

  const handlePrevDept = () => {
    setActiveDept((prev) => (prev === 0 ? clinicalEnvironments.length - 1 : prev - 1));
  };

  const handleNextDept = () => {
    setActiveDept((prev) => (prev === clinicalEnvironments.length - 1 ? 0 : prev + 1));
  };

  // Keep active pill scrolled into center view on mobile tab strip
  useEffect(() => {
    const activeTabEl = tabRefs.current[activeDept];
    const container = tabsContainerRef.current;
    if (activeTabEl && container) {
      const containerRect = container.getBoundingClientRect();
      const tabRect = activeTabEl.getBoundingClientRect();
      const scrollOffset = (tabRect.left - containerRect.left) - (containerRect.width / 2) + (tabRect.width / 2);
      container.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  }, [activeDept]);

  // Auto-cycle through the 8 clinical environments every 4 seconds (pauses on user hover/touch)
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setActiveDept((prev) => (prev + 1) % clinicalEnvironments.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isHovered, clinicalEnvironments.length]);

  // 9-Department Directory Listing (Anchors + Complementary Specialties)
  const directoryDepartments = [
    {
      num: '01',
      name: 'Radiology & Imaging',
      tag: 'DIAGNOSTICS',
      link: '/products',
      isFlagship: true,
      image: envRadiologyImg,
      highlight: 'Ultrasound, X-ray & radiography telemetry',
    },
    {
      num: '02',
      name: 'Emergency & Critical Care',
      tag: 'ICU / CRITICAL',
      link: '/products',
      isFlagship: true,
      image: categoryCriticalCareImg,
      highlight: 'Multiparameter life support & telemetry',
    },
    { num: '03', name: 'Maternity & Pediatrics', tag: 'NEONATAL', link: '/products' },
    { num: '04', name: 'Outpatient & Consultation', tag: 'PRIMARY CARE', link: '/products' },
    {
      num: '05',
      name: 'Surgery & Anaesthesia',
      tag: 'THEATRE',
      link: '/products',
      isFlagship: true,
      image: categoryTheatreImg,
      highlight: 'Turnkey theatre suites, lamps & tables',
    },
    { num: '06', name: 'Laboratory & Reagents', tag: 'PATHOLOGY', link: '/products' },
    { num: '07', name: 'General Hospital Furniture', tag: 'WARD CARE', link: '/products' },
    { num: '08', name: 'Specialized Departments', tag: 'CLINICAL', link: '/products' },
    { num: '09', name: 'Supporting & Utility Services', tag: 'FACILITY', link: '/products' },
  ];

  const featuredFlagshipDepts = directoryDepartments.filter((d) => d.isFlagship);
  const complementaryDepts = directoryDepartments.filter((d) => !d.isFlagship);

  // 4 Connected Stages for Section 4 (The Continuous Healthcare Supply Chain)
  const supplyChainStages = [
    {
      step: '01',
      heading: 'Suppliers & Manufacturers',
      description: 'Medical equipment, instruments and reagents.',
      image: chainSuppliersImg,
      alt: 'Medical equipment, surgical instruments, and diagnostic reagents from international manufacturers',
    },
    {
      step: '02',
      heading: 'Delivery & Distribution',
      description: 'Coordinated delivery of medical supplies and equipment.',
      image: deliveryImg,
      alt: 'Coordinated delivery vehicle transporting medical supplies and equipment across Uganda',
    },
    {
      step: '03',
      heading: 'Healthcare Providers',
      description: 'Supporting hospitals, laboratories and healthcare organisations.',
      image: chainHospitalsImg,
      alt: 'Equipped hospital clinical facility and healthcare provider environment',
    },
    {
      step: '04',
      heading: 'Servicing & Repair',
      description: 'Servicing and repair of equipment supplied by FAB.',
      image: repairImg,
      alt: 'Biomedical technician inspecting and servicing clinical medical equipment',
    },
  ];

  return (
    <div className="bg-white min-h-screen text-[#0F172A] selection:bg-[#21409A] selection:text-white">
      {/* ========================================================
          1. HERO: MINIMALIST ARCHITECTURAL BROADSHEET
          ======================================================== */}
      <section
        className="relative bg-[#F8FAFC] border-b border-slate-300 pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20"
        aria-labelledby="wws-hero-heading"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column (Col 7): Concise Headline & Sector Ledger */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left" data-aos="fade-right" data-aos-duration="800">
              {/* Eyebrow */}
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-[11px] font-mono font-bold tracking-[0.25em] text-[#ED1C24] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#ED1C24]" aria-hidden="true" />
                <span>HEALTHCARE ENVIRONMENTS &amp; AUDIENCE</span>
              </div>

              {/* Main Heading */}
              <h1
                id="wws-hero-heading"
                className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#0F172A] tracking-tight uppercase leading-[1.06] text-center lg:text-left"
              >
                EQUIPPING HEALTHCARE <br />
                <span className="text-[#21409A]">FACILITIES ACROSS UGANDA</span>
              </h1>

              {/* Punchy Minimal Description */}
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                Supplying certified diagnostic machinery, surgical theatre tools, and hospital infrastructure
                to medical practitioners, private clinics, and regional health centres.
              </p>

              {/* Architectural Key Sectors Bar */}
              <div className="pt-2 text-center lg:text-left">
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-2 text-center lg:text-left">
                  CLIENT &amp; FACILITY SECTORS
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 border border-slate-300 bg-white divide-x divide-y sm:divide-y-0 divide-slate-200">
                  <div className="p-3">
                    <span className="text-[10px] font-mono font-bold text-[#ED1C24] block">01</span>
                    <span className="text-[11px] font-mono font-bold text-[#0F172A] tracking-wide uppercase block mt-0.5">
                      HOSPITALS &amp; ICUs
                    </span>
                  </div>
                  <div className="p-3">
                    <span className="text-[10px] font-mono font-bold text-[#ED1C24] block">02</span>
                    <span className="text-[11px] font-mono font-bold text-[#0F172A] tracking-wide uppercase block mt-0.5">
                      SURGERY SUITES
                    </span>
                  </div>
                  <div className="p-3">
                    <span className="text-[10px] font-mono font-bold text-[#ED1C24] block">03</span>
                    <span className="text-[11px] font-mono font-bold text-[#0F172A] tracking-wide uppercase block mt-0.5">
                      DIAGNOSTIC LABS
                    </span>
                  </div>
                  <div className="p-3">
                    <span className="text-[10px] font-mono font-bold text-[#ED1C24] block">04</span>
                    <span className="text-[11px] font-mono font-bold text-[#0F172A] tracking-wide uppercase block mt-0.5">
                      WHOLESALERS
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (Col 5): Framed Authentic Clinical Photo */}
            <div className="lg:col-span-5" data-aos="fade-left" data-aos-duration="850">
              <div className="border border-slate-300 bg-white p-2 sm:p-2.5 shadow-sm">
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={heroPhotoImg}
                    alt="Clinical healthcare environment perspective in modern Ugandan hospital"
                    className="w-full h-full object-cover object-right block"
                    width="768"
                    height="576"
                    fetchpriority="high"
                    loading="eager"
                  />
                  <div className="absolute top-2 left-2 bg-[#0F172A]/90 text-white font-mono text-[9px] px-2 py-0.5 uppercase tracking-widest">
                    FIG. 05 — CLINICAL ECOSYSTEM
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-slate-200 pt-2.5 mt-2 text-[10px] font-mono uppercase tracking-wider text-slate-500">
                  <span>HEALTHCARE INFRASTRUCTURE • UGANDA</span>
                  <span className="text-[#21409A] font-bold">NATIONWIDE</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          2. CLINICAL SCOPE: INTERACTIVE MASTER-DETAIL CONSOLE
          (Architectural Dossier Layout — replaces repetitive card grids)
          ======================================================== */}
      <section
        className="py-14 sm:py-18 lg:py-24 bg-white border-b border-slate-300"
        aria-labelledby="ecosystem-heading"
      >
        <Container>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12 border-b border-slate-200 pb-6 text-center md:text-left">
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start space-x-2 text-[11px] font-mono font-bold tracking-[0.22em] text-[#ED1C24] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#ED1C24]" aria-hidden="true" />
                <span>CLINICAL SCOPE &amp; SPECIFICATIONS</span>
              </div>
              <h2
                id="ecosystem-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight uppercase text-center md:text-left"
              >
                HEALTHCARE ENVIRONMENTS WE EQUIP
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto md:mx-0 font-mono text-center md:text-right">
              // Select any clinical environment below to inspect supplied infrastructure, key equipment, and technical specifications.
            </p>
          </div>

          {/* Unified Architectural Console Frame (Locked heights ending on the exact same baseline) */}
          <div
            className="border border-slate-300 bg-white shadow-sm grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-300 items-stretch"
            data-aos="fade-up"
            data-aos-duration="850"
            onMouseEnter={() => {
              if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(hover: hover)').matches) {
                setIsHovered(true);
              }
            }}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* ========================================================
                LEFT COLUMN (Col 5): High-Density Master Index Ledger (Desktop Only)
                Stretches 100% of height, evenly distributing all 8 departments
                ======================================================== */}
            <div className="hidden lg:flex lg:col-span-5 flex-col justify-between bg-slate-50/50">
              {/* Header Bar */}
              <div className="border-b border-slate-200 px-5 py-3.5 bg-slate-100/70 flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                <span>DEPARTMENT INDEX (01–08)</span>
                <span className="text-slate-400 text-[10px] font-bold">
                  UGANDA CLINICAL SPECIFICATION
                </span>
              </div>

              {/* 8 Evenly Stretched Rows (flex-1 dynamically equalizes height) */}
              <div className="flex-1 flex flex-col divide-y divide-slate-200" role="tablist" aria-label="Clinical Departments Index">
                {clinicalEnvironments.map((env, idx) => {
                  const isActive = activeDept === idx;
                  return (
                    <button
                      key={env.num}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveDept(idx)}
                      onMouseEnter={() => setActiveDept(idx)}
                      className={`flex-1 w-full text-left px-5 py-3.5 transition-all duration-150 flex items-center justify-between group focus:outline-none ${
                        isActive
                          ? 'bg-[#21409A] text-white shadow-xs'
                          : 'bg-white hover:bg-slate-50 text-slate-800'
                      }`}
                    >
                      <div className="flex items-center space-x-3.5 min-w-0">
                        <span
                          className={`text-xs font-mono font-bold px-2 py-0.5 border ${
                            isActive
                              ? 'bg-[#ED1C24] border-[#ED1C24] text-white'
                              : 'bg-slate-100 border-slate-200 text-[#ED1C24]'
                          }`}
                        >
                          {env.num}
                        </span>
                        <div className="truncate">
                          <span className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wide block truncate">
                            {env.title}
                          </span>
                          <span
                            className={`text-[10px] font-mono block mt-0.5 ${
                              isActive ? 'text-blue-100' : 'text-slate-400'
                            }`}
                          >
                            {env.tag}
                          </span>
                        </div>
                      </div>
                      <span
                        className={`text-sm font-bold transition-transform group-hover:translate-x-1 flex-shrink-0 ml-2 ${
                          isActive ? 'text-white' : 'text-slate-400 group-hover:text-[#21409A]'
                        }`}
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Bottom Institutional Ledger Footer */}
              <div className="border-t border-slate-200 px-5 py-3 bg-slate-100/70 flex items-center justify-between text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                <span>8 SPECIALIZED CLINICAL SETTINGS</span>
                <span className="text-[#21409A] font-bold">UGANDA SPECIFICATION</span>
              </div>
            </div>

            {/* ========================================================
                RIGHT COLUMN (Col 7): Clinical Dossier Stage
                On mobile: includes horizontal tabs + tactile stepper console
                Stretches 100% of height, with actions anchored to bottom
                ======================================================== */}
            <div className="lg:col-span-7 flex flex-col justify-between p-4 sm:p-6 lg:p-8 bg-white">
              {/* MOBILE ONLY (< lg): Department Stepper & Horizontal Pill Tabs */}
              <div className="block lg:hidden border-b border-slate-200 pb-4 mb-5 space-y-3">
                {/* Stepper Bar: Prev / Counter / Next */}
                <div className="flex items-center justify-between bg-slate-50 border border-slate-200 p-1.5">
                  <button
                    type="button"
                    onClick={handlePrevDept}
                    aria-label="Previous department"
                    className="min-h-[44px] px-3 font-mono text-xs font-bold text-slate-800 hover:text-white hover:bg-[#21409A] active:bg-[#172e70] inline-flex items-center space-x-1 transition-colors border border-slate-300 bg-white"
                  >
                    <span>←</span>
                    <span>PREV</span>
                  </button>

                  <div className="text-center">
                    <span className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider block">
                      DEPARTMENT
                    </span>
                    <span className="text-sm font-mono font-black text-[#21409A]">
                      {currentDept.num} <span className="text-slate-400 font-normal">/ 08</span>
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleNextDept}
                    aria-label="Next department"
                    className="min-h-[44px] px-3 font-mono text-xs font-bold text-slate-800 hover:text-white hover:bg-[#21409A] active:bg-[#172e70] inline-flex items-center space-x-1 transition-colors border border-slate-300 bg-white"
                  >
                    <span>NEXT</span>
                    <span>→</span>
                  </button>
                </div>

                {/* Horizontal Scrollable Department Tabs */}
                <div
                  ref={tabsContainerRef}
                  className="flex space-x-2 overflow-x-auto pb-1 scrollbar-none snap-x"
                  role="tablist"
                  aria-label="Clinical Departments"
                >
                  {clinicalEnvironments.map((env, idx) => {
                    const isActive = activeDept === idx;
                    return (
                      <button
                        key={env.num}
                        ref={(el) => (tabRefs.current[idx] = el)}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveDept(idx)}
                        className={`min-h-[44px] px-3 py-2 flex-shrink-0 text-xs font-mono font-bold uppercase tracking-wider border transition-colors snap-center inline-flex items-center space-x-1.5 focus:outline-none ${
                          isActive
                            ? 'bg-[#21409A] border-[#21409A] text-white shadow-xs'
                            : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <span
                          className={`text-[10px] px-1.5 py-0.5 border ${
                            isActive
                              ? 'bg-[#ED1C24] border-[#ED1C24] text-white'
                              : 'bg-slate-100 border-slate-200 text-[#ED1C24]'
                          }`}
                        >
                          {env.num}
                        </span>
                        <span>{env.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-5">
                {/* Framed Image with Technical Metadata Bar */}
                <div className="relative aspect-[16/9] bg-slate-100 overflow-hidden border border-slate-200">
                  <img
                    key={currentDept.num}
                    src={currentDept.image}
                    alt={currentDept.alt}
                    className="w-full h-full object-cover transition-opacity duration-300"
                    width="700"
                    height="394"
                  />
                  <div className="absolute top-3 left-3 bg-[#0F172A]/90 text-white font-mono text-[9px] px-2.5 py-1 tracking-widest uppercase">
                    DEP. {currentDept.num} • {currentDept.tag}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/95 border border-slate-300 text-[#21409A] font-mono font-bold text-[10px] px-2.5 py-0.5 uppercase">
                    CERTIFIED SUPPLY
                  </div>
                </div>

                {/* Department Meta & Title */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#ED1C24]">
                    <span>SECTOR {currentDept.num}</span>
                    <span>•</span>
                    <span className="uppercase tracking-wider">{currentDept.subtitle}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black font-mono text-[#0F172A] uppercase tracking-tight">
                    {currentDept.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed min-h-[38px]">
                    {currentDept.desc}
                  </p>
                </div>

                {/* Supplied Equipment Checklist */}
                <div className="border-t border-slate-200 pt-3.5 space-y-2">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    SUPPLIED CLINICAL EQUIPMENT &amp; HARDWARE
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentDept.equipment.map((item, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs font-mono text-slate-700">
                        <span className="w-1.5 h-1.5 bg-[#ED1C24] mt-1.5 flex-shrink-0" aria-hidden="true" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* High-Visibility Action Buttons Anchored to Bottom */}
              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-3 mt-6">
                <Link
                  to="/products"
                  className="flex-1 min-h-[44px] bg-[#21409A] hover:bg-[#172e70] text-white text-xs font-mono font-bold uppercase tracking-wider py-3.5 px-4 inline-flex items-center justify-between transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#21409A]"
                >
                  <span>EXPLORE {currentDept.title.split('&')[0].trim()} PRODUCTS</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <a
                  href={`https://wa.me/256704757991?text=${encodeURIComponent(
                    `Hello FAB Medical Supplies Ltd., I am inquiring about equipment and supplies for ${currentDept.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] bg-[#0F172A] hover:bg-slate-800 text-white text-xs font-mono font-bold uppercase tracking-wider py-3.5 px-4 inline-flex items-center justify-center transition-colors shadow-sm"
                >
                  <span>INQUIRE FOR FACILITY</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          3. WHAT WE SUPPLY ACROSS HEALTHCARE
          (Broadsheet Split + 9-Department Matrix Directory, NO AI Gradients)
          ======================================================== */}
      <section
        className="py-14 sm:py-18 lg:py-24 bg-[#F8FAFC] border-b border-slate-300"
        aria-labelledby="supply-contexts-heading"
      >
        <Container>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12 border-b border-slate-200 pb-6 text-center md:text-left">
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start space-x-2 text-[11px] font-mono font-bold tracking-[0.22em] text-[#ED1C24] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#ED1C24]" aria-hidden="true" />
                <span>CLINICAL DEPLOYMENT</span>
              </div>
              <h2
                id="supply-contexts-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight uppercase text-center md:text-left"
              >
                SPECIALIZED SUPPLY CATEGORIES
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto md:mx-0 font-mono text-center md:text-right">
              // Rigorously tested hardware and sterile consumables ready for clinical installation.
            </p>
          </div>

          {/* Two Featured Broadsheet Clinical Showcases */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Showcase 01: Surgical Operating Theatre */}
            <div
              className="border border-slate-300 bg-white p-6 sm:p-7 flex flex-col justify-between shadow-sm"
              data-aos="fade-right"
              data-aos-duration="850"
            >
              <div className="space-y-4">
                <div className="relative aspect-[16/9] bg-slate-100 overflow-hidden border border-slate-200">
                  <img
                    src={supplyTheatreImg}
                    alt="Surgical operating theatre equipment including operating tables, shadowless lamps, and anesthesia monitors"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    width="600"
                    height="338"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#0F172A]/90 text-white font-mono text-[9px] px-2.5 py-1 tracking-widest uppercase">
                    FEATURED CLINICAL SECTOR
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#ED1C24]">
                    <span>01</span>
                    <span>•</span>
                    <span className="uppercase tracking-wider">CRITICAL SURGERY</span>
                  </div>
                  <h3 className="text-xl font-black font-mono text-[#0F172A] uppercase">
                    Operating Theatre Suites
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Turnkey equipment packages for surgical suites, including heavy-duty hydraulic operating
                    tables, dual-head shadowless LED ceiling lamps, suction units, and electrosurgical generators.
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-3 space-y-1.5">
                  <div className="flex items-center space-x-2 text-[11px] font-mono text-slate-700">
                    <span className="w-1.5 h-1.5 bg-[#ED1C24]" aria-hidden="true" />
                    <span>Hydraulic &amp; Electric Operating Beds</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[11px] font-mono text-slate-700">
                    <span className="w-1.5 h-1.5 bg-[#ED1C24]" aria-hidden="true" />
                    <span>Shadowless Ceiling &amp; Mobile Lamps</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[11px] font-mono text-slate-700">
                    <span className="w-1.5 h-1.5 bg-[#ED1C24]" aria-hidden="true" />
                    <span>Precision Sterilized Surgical Toolsets</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  to="/products"
                  className="w-full bg-[#21409A] hover:bg-[#172e70] text-white text-xs font-mono font-bold uppercase tracking-wider py-3 px-4 inline-flex items-center justify-between transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#21409A]"
                >
                  <span>EXPLORE THEATRE EQUIPMENT</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Showcase 02: Diagnostic Laboratory */}
            <div
              className="border border-slate-300 bg-white p-6 sm:p-7 flex flex-col justify-between shadow-sm"
              data-aos="fade-left"
              data-aos-duration="850"
            >
              <div className="space-y-4">
                <div className="relative aspect-[16/9] bg-slate-100 overflow-hidden border border-slate-200">
                  <img
                    src={supplyLabImg}
                    alt="Clinical pathology laboratory workspace with diagnostic microscopes and centrifuges"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    width="600"
                    height="338"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#0F172A]/90 text-white font-mono text-[9px] px-2.5 py-1 tracking-widest uppercase">
                    FEATURED CLINICAL SECTOR
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#ED1C24]">
                    <span>02</span>
                    <span>•</span>
                    <span className="uppercase tracking-wider">PATHOLOGY &amp; SCREENING</span>
                  </div>
                  <h3 className="text-xl font-black font-mono text-[#0F172A] uppercase">
                    Diagnostic Laboratories
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    High-accuracy analytical instruments and temperature-controlled storage solutions for
                    hospital laboratories, blood banks, and independent pathology facilities.
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-3 space-y-1.5">
                  <div className="flex items-center space-x-2 text-[11px] font-mono text-slate-700">
                    <span className="w-1.5 h-1.5 bg-[#ED1C24]" aria-hidden="true" />
                    <span>Optical &amp; Digital Binocular Microscopes</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[11px] font-mono text-slate-700">
                    <span className="w-1.5 h-1.5 bg-[#ED1C24]" aria-hidden="true" />
                    <span>High-Speed Medical Centrifuges</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[11px] font-mono text-slate-700">
                    <span className="w-1.5 h-1.5 bg-[#ED1C24]" aria-hidden="true" />
                    <span>Cold-Chain Biological Storage Units</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  to="/products"
                  className="w-full bg-[#21409A] hover:bg-[#172e70] text-white text-xs font-mono font-bold uppercase tracking-wider py-3 px-4 inline-flex items-center justify-between transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#21409A]"
                >
                  <span>EXPLORE LABORATORY SUPPLIES</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 9-Department Matrix Directory Ledger */}
          <div className="border border-slate-300 bg-white">
            <div className="bg-slate-50 border-b border-slate-300 px-5 py-3.5 flex items-center justify-between">
              <span className="text-xs font-mono font-bold tracking-[0.18em] text-[#0F172A] uppercase">
                COMPLETE 9-DEPARTMENT CLINICAL DIRECTORY
              </span>
              <span className="text-[10px] font-mono font-bold text-[#ED1C24] uppercase">
                INSTITUTIONAL SCOPE
              </span>
            </div>

            {/* DESKTOP & TABLET VIEW (md and up): 3-Column Ledger Matrix */}
            <div className="hidden md:grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              {/* Col 1 */}
              <div className="divide-y divide-slate-200">
                {directoryDepartments.slice(0, 3).map((dept) => (
                  <Link
                    key={dept.num}
                    to={dept.link}
                    className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors group"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-mono font-bold text-[#ED1C24]">{dept.num}</span>
                        <span className="text-xs font-mono font-bold text-[#0F172A] uppercase group-hover:text-[#21409A] transition-colors">
                          {dept.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 block tracking-wider">
                        {dept.tag}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#21409A] group-hover:translate-x-1 transition-transform" aria-hidden="true">
                      →
                    </span>
                  </Link>
                ))}
              </div>

              {/* Col 2 */}
              <div className="divide-y divide-slate-200">
                {directoryDepartments.slice(3, 6).map((dept) => (
                  <Link
                    key={dept.num}
                    to={dept.link}
                    className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors group"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-mono font-bold text-[#ED1C24]">{dept.num}</span>
                        <span className="text-xs font-mono font-bold text-[#0F172A] uppercase group-hover:text-[#21409A] transition-colors">
                          {dept.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 block tracking-wider">
                        {dept.tag}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#21409A] group-hover:translate-x-1 transition-transform" aria-hidden="true">
                      →
                    </span>
                  </Link>
                ))}
              </div>

              {/* Col 3 */}
              <div className="divide-y divide-slate-200">
                {directoryDepartments.slice(6, 9).map((dept) => (
                  <Link
                    key={dept.num}
                    to={dept.link}
                    className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors group"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-mono font-bold text-[#ED1C24]">{dept.num}</span>
                        <span className="text-xs font-mono font-bold text-[#0F172A] uppercase group-hover:text-[#21409A] transition-colors">
                          {dept.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 block tracking-wider">
                        {dept.tag}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#21409A] group-hover:translate-x-1 transition-transform" aria-hidden="true">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* MOBILE ONLY (< md): Flagship Photo Anchors (3) + Balanced 2x3 Grid (6) */}
            <div className="block md:hidden">
              {/* Flagship Header Bar */}
              <div className="px-4 py-2.5 bg-slate-100/70 border-b border-slate-200 flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600">
                <span>FLAGSHIP CLINICAL ANCHORS</span>
                <span className="text-[#ED1C24]">FEATURED HARDWARE</span>
              </div>

              {/* 3 Flagship Anchor Cards with Photography */}
              <div className="p-3 space-y-2.5 bg-slate-50/60">
                {featuredFlagshipDepts.map((dept) => (
                  <Link
                    key={dept.num}
                    to={dept.link}
                    className="flex bg-white border border-slate-300 shadow-xs hover:border-[#21409A] transition-all group overflow-hidden"
                  >
                    {/* Thumbnail Left */}
                    <div className="w-24 sm:w-28 flex-shrink-0 relative bg-slate-100 border-r border-slate-200 overflow-hidden">
                      <img
                        src={dept.image}
                        alt={dept.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        width="112"
                        height="84"
                      />
                      <div className="absolute top-1 left-1 bg-[#0F172A]/90 text-white font-mono text-[9px] px-1.5 py-0.2 tracking-wider">
                        {dept.num}
                      </div>
                    </div>

                    {/* Content Right */}
                    <div className="flex-1 p-2.5 flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="text-[10px] font-mono font-bold text-[#ED1C24] tracking-wide">
                            {dept.tag}
                          </span>
                          <span className="text-xs font-bold text-[#21409A] group-hover:translate-x-0.5 transition-transform">
                            →
                          </span>
                        </div>
                        <h4 className="text-xs font-mono font-bold text-[#0F172A] uppercase leading-tight group-hover:text-[#21409A] transition-colors">
                          {dept.name}
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 truncate block mt-1">
                        {dept.highlight}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Grid Header Bar */}
              <div className="px-4 py-2.5 bg-slate-100/70 border-y border-slate-200 flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600">
                <span>COMPLEMENTARY SPECIALTIES</span>
                <span className="text-slate-400">6 SECTORS</span>
              </div>

              {/* Balanced 2x3 Grid of 6 Complementary Departments */}
              <div className="grid grid-cols-2 divide-x divide-y divide-slate-200 bg-white">
                {complementaryDepts.map((dept) => (
                  <Link
                    key={dept.num}
                    to={dept.link}
                    className="p-3.5 flex flex-col justify-between hover:bg-slate-50 transition-colors group min-h-[76px]"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-mono font-bold text-[#ED1C24]">
                          {dept.num}
                        </span>
                        <span className="text-xs font-bold text-[#21409A] group-hover:translate-x-0.5 transition-transform">
                          →
                        </span>
                      </div>
                      <h4 className="text-[11px] font-mono font-bold text-[#0F172A] uppercase leading-tight group-hover:text-[#21409A] transition-colors">
                        {dept.name}
                      </h4>
                    </div>
                    <span className="text-[9px] font-mono text-slate-400 block tracking-wider mt-2">
                      {dept.tag}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          4. CONNECTED TO THE HEALTHCARE SUPPLY CHAIN
          (Hybrid Concept C: Bold Continuous Photo Strip +
           Concept A: Continuous Connector Line)
          ======================================================== */}
      <section
        className="py-14 sm:py-18 lg:py-24 bg-white border-b border-slate-200"
        aria-labelledby="supply-chain-heading"
      >
        <Container>
          {/* Section Heading & Introduction */}
          <div className="max-w-2xl mb-12 sm:mb-16 space-y-3">
            <span className="text-[11px] font-mono font-bold tracking-[0.22em] text-[#21409A] uppercase block">
              OUR SUPPLY CHAIN
            </span>
            <h2
              id="supply-chain-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight uppercase"
            >
              CONNECTED TO THE HEALTHCARE SUPPLY CHAIN
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed pt-1">
              FAB connects medical equipment sourcing with delivery, healthcare providers and ongoing equipment support.
            </p>
          </div>

          {/* DESKTOP & TABLET: Continuous Strip + Unbroken Connector Line */}
          <div className="hidden md:block">
            {/* 1. Continuous Panoramic Photographic Band (Concept C) */}
            <div className="grid grid-cols-4 border border-slate-200 divide-x divide-slate-200 overflow-hidden bg-slate-100">
              {supplyChainStages.map((stage) => (
                <div key={stage.step} className="relative aspect-[4/3] lg:aspect-[16/11] overflow-hidden group">
                  <img
                    src={stage.image}
                    alt={stage.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    width="400"
                    height="300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* 2. The Continuous Connector Line & Numbered Markers (Concept A) */}
            <div className="relative mt-8 mb-6">
              {/* Unbroken horizontal FAB-blue connector line linking Stage 01 center (12.5%) to Stage 04 center (87.5%) */}
              <div
                className="absolute top-1/2 left-[12.5%] right-[12.5%] h-[2px] bg-[#21409A] -translate-y-1/2 z-0"
                aria-hidden="true"
              />

              {/* Directional arrow cues between stages along the line */}
              <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
                {/* Arrow 01 -> 02 at 25% */}
                <div className="absolute top-1/2 left-[25%] -translate-y-1/2 -translate-x-1/2 bg-white px-1.5 text-xs font-bold text-[#21409A]">
                  →
                </div>
                {/* Arrow 02 -> 03 at 50% */}
                <div className="absolute top-1/2 left-[50%] -translate-y-1/2 -translate-x-1/2 bg-white px-1.5 text-xs font-bold text-[#21409A]">
                  →
                </div>
                {/* Arrow 03 -> 04 at 75% */}
                <div className="absolute top-1/2 left-[75%] -translate-y-1/2 -translate-x-1/2 bg-white px-1.5 text-xs font-bold text-[#21409A]">
                  →
                </div>
              </div>

              {/* 4 Numbered Marker Nodes aligned with the 4 columns */}
              <div className="grid grid-cols-4 relative z-10">
                {supplyChainStages.map((stage) => (
                  <div key={stage.step} className="flex justify-center">
                    <div
                      className="w-10 h-10 rounded-full bg-white border-2 border-[#21409A] flex items-center justify-center font-mono font-bold text-sm text-[#21409A] shadow-sm"
                      aria-label={`Stage ${stage.step}`}
                    >
                      {stage.step}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Stage Descriptions in Open Whitespace */}
            <div className="grid grid-cols-4 gap-6 lg:gap-8 pt-2">
              {supplyChainStages.map((stage) => (
                <div key={stage.step} className="text-center px-2">
                  <h3 className="text-base lg:text-lg font-black text-[#0F172A] uppercase tracking-tight mb-1.5">
                    {stage.heading}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* MOBILE: Continuous Vertical Sequence */}
          <div className="block md:hidden">
            <div className="relative pl-10 sm:pl-12 space-y-10">
              {/* Continuous vertical FAB-blue connector line */}
              <div
                className="absolute left-[19px] sm:left-[23px] top-5 bottom-8 w-[2px] bg-[#21409A]"
                aria-hidden="true"
              />

              {supplyChainStages.map((stage, idx) => (
                <div key={stage.step} className="relative">
                  {/* Numbered marker node */}
                  <div
                    className="absolute -left-[39px] sm:-left-[43px] top-0 w-9 h-9 rounded-full bg-white border-2 border-[#21409A] flex items-center justify-center font-mono font-bold text-xs text-[#21409A] shadow-sm z-10"
                    aria-label={`Stage ${stage.step}`}
                  >
                    {stage.step}
                  </div>

                  {/* Directional arrow downwards between stages */}
                  {idx < supplyChainStages.length - 1 && (
                    <div
                      className="absolute -left-[39px] sm:-left-[43px] -bottom-6 w-9 flex justify-center text-[11px] font-bold text-[#21409A] z-10 bg-white"
                      aria-hidden="true"
                    >
                      ↓
                    </div>
                  )}

                  {/* Stage Image */}
                  <div className="aspect-[16/10] overflow-hidden border border-slate-200 bg-slate-100 mb-3 shadow-sm">
                    <img
                      src={stage.image}
                      alt={stage.alt}
                      className="w-full h-full object-cover"
                      width="480"
                      height="300"
                      loading="lazy"
                    />
                  </div>

                  {/* Stage Content in open whitespace */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#21409A] block">
                      STAGE {stage.step}
                    </span>
                    <h3 className="text-base font-black text-[#0F172A] uppercase tracking-tight">
                      {stage.heading}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
