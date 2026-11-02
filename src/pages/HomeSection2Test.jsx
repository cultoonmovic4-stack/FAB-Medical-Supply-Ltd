import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

// Verified photographic assets for spatial scene compositions
import theatreImg from '../assets/service-hero-theatre.webp';
import surgicalKitImg from '../assets/products/surgical_instruments_kit.webp';
import envTheatreWideImg from '../assets/env_theatre_wide.webp';

export default function HomeSection2Test() {
  const [activeScene, setActiveScene] = useState('2A');

  return (
    <div className="min-h-screen bg-[#FAFCFE] text-[#0F172A] antialiased">
      {/* ========================================================
          STICKY SCENE CONTROLLER BAR
          ======================================================== */}
      <aside aria-label="Testing Console" className="sticky top-0 z-50 bg-[#0F172A] text-white border-b border-slate-800 shadow-md">
        <Container>
          <div className="py-3 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#ED1C24] animate-pulse" aria-hidden="true" />
              <span className="font-bold uppercase tracking-wider text-slate-300">
                SECTION 2 SCENE LAB:
              </span>
              <span className="text-white font-bold">
                {activeScene === '2A' && 'Scene 2A (Feathered Surgical Panorama)'}
                {activeScene === '2B' && 'Scene 2B (Architectural Flat-Lay Broadsheet)'}
                {activeScene === '2C' && 'Scene 2C (High-Key Clinical Stage & Ledger)'}
              </span>
            </div>

            {/* Scene Selector Buttons */}
            <div className="flex items-center space-x-1.5 bg-slate-900 p-1 border border-slate-700 rounded-xs">
              <button
                type="button"
                onClick={() => setActiveScene('2A')}
                className={`px-3 py-1.5 text-xs font-mono font-bold uppercase transition-all rounded-xs ${
                  activeScene === '2A'
                    ? 'bg-[#21409A] text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Scene 2A (Feathered Panorama)
              </button>
              <button
                type="button"
                onClick={() => setActiveScene('2B')}
                className={`px-3 py-1.5 text-xs font-mono font-bold uppercase transition-all rounded-xs ${
                  activeScene === '2B'
                    ? 'bg-[#21409A] text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Scene 2B (Flat-Lay Broadsheet)
              </button>
              <button
                type="button"
                onClick={() => setActiveScene('2C')}
                className={`px-3 py-1.5 text-xs font-mono font-bold uppercase transition-all rounded-xs ${
                  activeScene === '2C'
                    ? 'bg-[#21409A] text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Scene 2C (High-Key Stage)
              </button>
            </div>
          </div>
        </Container>
      </aside>

      {/* ========================================================
          CONCEPT DESCRIPTION BANNER
          ======================================================== */}
      <div className="bg-slate-100 border-b border-slate-200 py-2.5 text-[11.5px] font-mono text-slate-600">
        <Container>
          {activeScene === '2A' && (
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <strong className="text-[#0F172A] uppercase">SCENE 2A HIGHLIGHTS:</strong> Centered editorial typography &bull; Wide feathered surgical theatre panorama dissolving softly into the white page &bull; 3 spatial technical markers &bull; Open 3-column hairline operations ledger. Zero left/right card boxes.
              </div>
              <span className="text-[#21409A] font-bold uppercase">FEATHERED PANORAMA</span>
            </div>
          )}
          {activeScene === '2B' && (
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <strong className="text-[#0F172A] uppercase">SCENE 2B HIGHLIGHTS:</strong> Architectural surgical flat-lay broadsheet &bull; High-definition stainless steel instruments laid out on sterile blue surgical drape &bull; Fine hairline measurement scales and registration crosshairs &bull; Integrated operational telemetry bar.
              </div>
              <span className="text-[#21409A] font-bold uppercase">SURGICAL BROADSHEET</span>
            </div>
          )}
          {activeScene === '2C' && (
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <strong className="text-[#0F172A] uppercase">SCENE 2C HIGHLIGHTS:</strong> High-key clinical environment panorama &bull; Seamless floating architectural glass ledger anchored within the scene &bull; Integrated tripartite operations strip (Supply &bull; Delivery &bull; Service).
              </div>
              <span className="text-[#21409A] font-bold uppercase">HIGH-KEY STAGE</span>
            </div>
          )}
        </Container>
      </div>

      {/* RENDER ACTIVE SCENE */}
      {activeScene === '2A' && <Scene2A />}
      {activeScene === '2B' && <Scene2B />}
      {activeScene === '2C' && <Scene2C />}

      {/* CONTEXT FOOTER: Transition into Key Categories */}
      <div className="border-t border-slate-200 py-10 bg-white text-center">
        <Container>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#21409A] font-bold block mb-1">
            SCENE FLOW CONTEXT
          </span>
          <p className="text-xs font-mono text-slate-400">
            Next section below will be Section 3: Key Equipment Categories Directory
          </p>
        </Container>
      </div>
    </div>
  );
}

/* =========================================================================
   SCENE 2A: The Feathered Surgical Panorama + Spatial Hotspots & Ledger
   - Wide continuous panorama dissolving seamlessly into white background
   - Spatial technical markers (Bombo Road, NDA QA, Biomedical Installation)
   - Open 3-column hairline operations ledger at the base
   ========================================================================= */
function Scene2A() {
  return (
    <section className="bg-white border-b border-slate-200 pt-12 sm:pt-16 pb-0 overflow-hidden">
      <Container>
        {/* Editorial Narrative Header (Centered, Authoritative) */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 text-[11px] font-mono font-bold tracking-[0.25em] text-[#ED1C24] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#ED1C24]" aria-hidden="true" />
            <span>WHO WE ARE • NATIONAL HEALTHCARE SUPPLY CHAIN</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black uppercase text-[#0F172A] tracking-tight leading-[1.06]">
            Reliable Equipment. <br />
            <span className="text-[#21409A]">Better Care Across Uganda.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            FAB Medical Supplies Ltd. is Uganda's dedicated partner in medical equipment importation, warehousing, and clinical lifecycle support. From our central inventory on Bombo Road, Kampala, we supply diagnostic systems, operating theatre infrastructure, and surgical instruments to regional referral hospitals, health centers, and diagnostic laboratories nationwide.
          </p>

          <div className="pt-2">
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] hover:text-[#21409A] transition-colors py-1 border-b border-[#0F172A] hover:border-[#21409A]"
            >
              <span>DISCOVER OUR COMPANY INFRASTRUCTURE</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Container>

      {/* Spatial Scene: Feathered Operating Suite Panorama with Spatial Markers */}
      <div className="relative mt-10 sm:mt-12 h-[340px] sm:h-[440px] lg:h-[480px] select-none overflow-hidden">
        {/* Background Image */}
        <img
          src={theatreImg}
          alt="Sterile surgical operating room with anesthesia machines, surgical lighting, and clinical telemetry"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Feathered Horizon Vignettes (Dissolves softly into white page) */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/85 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        {/* Spatial Technical Hotspots / Environmental Coordinates */}
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-between py-12 px-6 sm:px-12 max-w-6xl mx-auto">
          {/* Hotspot 1: Top Left */}
          <div className="self-start bg-white/95 backdrop-blur-xs border border-slate-200/90 py-1.5 px-3 rounded-xs shadow-xs text-[10.5px] font-mono text-[#0F172A]">
            <span className="text-[#ED1C24] font-bold">+ 01</span> // CENTRAL WAREHOUSING • BOMBO ROAD, KAMPALA
          </div>

          {/* Hotspot 2: Center Right */}
          <div className="self-end bg-white/95 backdrop-blur-xs border border-slate-200/90 py-1.5 px-3 rounded-xs shadow-xs text-[10.5px] font-mono text-[#0F172A]">
            <span className="text-[#21409A] font-bold">+ 02</span> // PRE-DISPATCH QA &amp; NDA IMPORT COMPLIANCE
          </div>

          {/* Hotspot 3: Bottom Left */}
          <div className="self-start bg-white/95 backdrop-blur-xs border border-slate-200/90 py-1.5 px-3 rounded-xs shadow-xs text-[10.5px] font-mono text-[#0F172A]">
            <span className="text-emerald-600 font-bold">+ 03</span> // ON-SITE BIOMEDICAL CALIBRATION &amp; TRAINING
          </div>
        </div>
      </div>

      {/* Open 3-Column Hairline Operations Ledger */}
      <div className="bg-[#F8FAFC] border-t border-slate-200">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 py-6 sm:py-8">
            {/* 01. SUPPLY */}
            <div className="py-4 md:py-0 md:pr-8 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#21409A] font-bold block">
                01 // DIRECT IMPORTATION
              </span>
              <h3 className="text-sm font-bold uppercase tracking-tight text-[#0F172A]">
                Certified Global Supply
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Diagnostic imaging, critical care monitors, and surgical apparatus sourced from verified global manufacturers conforming to ISO &amp; NDA standards.
              </p>
            </div>

            {/* 02. LOGISTICS */}
            <div className="py-4 md:py-0 md:px-8 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#21409A] font-bold block">
                02 // REGIONAL DISTRIBUTION
              </span>
              <h3 className="text-sm font-bold uppercase tracking-tight text-[#0F172A]">
                Nationwide Logistics
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Rapid 48-hour secure road freight delivering to hospitals, clinics, and emergency facilities across both urban centers and upcountry Uganda.
              </p>
            </div>

            {/* 03. ENGINEERING */}
            <div className="py-4 md:py-0 md:pl-8 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#21409A] font-bold block">
                03 // LIFECYCLE SUPPORT
              </span>
              <h3 className="text-sm font-bold uppercase tracking-tight text-[#0F172A]">
                Biomedical Engineering
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Dedicated local biomedical engineers providing on-site commissioning, preventative maintenance, emergency repair, and genuine Kampala spare parts.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

/* =========================================================================
   SCENE 2B: Architectural Flat-Lay Broadsheet (The Sterile Surgical Stage)
   - Expansive horizontal presentation of precision stainless steel instruments
   - Embedded technical ledger with hairline measurement scale
   - 3-metric verifiable telemetry bar
   ========================================================================= */
function Scene2B() {
  return (
    <section className="bg-[#FAFCFE] border-b border-slate-200 py-12 sm:py-16">
      <Container>
        {/* Top Header Strip with Monospace Index */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center space-x-2 text-[10.5px] font-mono font-bold uppercase tracking-[0.2em] text-[#21409A] mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
              <span>THE CLINICAL SUPPLY ENVIRONMENT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#0F172A]">
              Equipping Uganda's Healthcare Providers
            </h2>
          </div>

          <div className="text-left sm:text-right text-xs font-mono text-slate-500">
            <div>REF: FAB-CORP-2026</div>
            <div className="text-[#0F172A] font-bold">KAMPALA CENTRAL REPOSITORY</div>
          </div>
        </div>

        {/* The Surgical Flat-Lay Spatial Stage */}
        <div className="relative mt-8 bg-white border border-slate-200 overflow-hidden rounded-xs">
          {/* Measurement Grid Scale along Top Border */}
          <div className="bg-slate-50 border-b border-slate-200 py-1.5 px-4 flex items-center justify-between text-[9.5px] font-mono text-slate-400 select-none">
            <span>SCALE: 1:1 CALIBRATED</span>
            <span className="hidden sm:inline">0mm ─── 100mm ─── 200mm ─── 300mm ─── 400mm ─── 500mm</span>
            <span>GRADE 316 STAINLESS STEEL</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left 7-Cols: Panoramic Flat-Lay Visual */}
            <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] bg-[#E8F2FC] overflow-hidden">
              <img
                src={surgicalKitImg}
                alt="Sterile surgical scissors, forceps, scalpel handles, and diagnostic equipment laid out on sterile drape"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#0F172A] border border-slate-200">
                SURGICAL THEATRE APPARATUS
              </div>
            </div>

            {/* Right 5-Cols: Editorial Broadsheet Ledger */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 bg-white border-t lg:border-t-0 lg:border-l border-slate-200">
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#21409A] font-bold block">
                  INSTITUTIONAL COMMITMENT
                </span>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-[#0F172A] tracking-tight leading-snug">
                  Precision Tools for Critical Patient Outcomes
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  FAB Medical Supplies Ltd. guarantees direct supply chain integrity for hospital equipment and clinical consumables. We eliminate the uncertainty of grey-market imports by providing fully documented, NDA-cleared instrumentation backed by local biomedical engineers.
                </p>
              </div>

              {/* Monospace 3-Point Bullet Strip */}
              <div className="border-t border-slate-100 pt-4 space-y-2 text-xs font-mono text-slate-700">
                <div className="flex items-center space-x-2">
                  <span className="text-[#ED1C24] font-bold">01.</span>
                  <span>Authentic CE &amp; ISO 13485 Certified Machinery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#ED1C24] font-bold">02.</span>
                  <span>Complete Sterile Packaging &amp; Warranty Seals</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#ED1C24] font-bold">03.</span>
                  <span>Continuous Bombo Road Spares &amp; Consumables Stock</span>
                </div>
              </div>

              <div>
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 px-5 py-3 bg-[#21409A] hover:bg-[#1B3580] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-xs rounded-xs"
                >
                  <span>ABOUT OUR INFRASTRUCTURE</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Telemetry Bar */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 border border-slate-200 bg-white rounded-xs">
          <div className="p-4 text-center sm:text-left space-y-0.5">
            <span className="text-xs font-mono font-bold text-[#21409A] block">500+ HEALTHCARE FACILITIES</span>
            <span className="text-[11px] text-slate-500">Supplied nationwide across Uganda</span>
          </div>
          <div className="p-4 text-center sm:text-left space-y-0.5">
            <span className="text-xs font-mono font-bold text-[#ED1C24] block">09 CLINICAL DEPARTMENTS</span>
            <span className="text-[11px] text-slate-500">From operating theatres to diagnostic labs</span>
          </div>
          <div className="p-4 text-center sm:text-left space-y-0.5">
            <span className="text-xs font-mono font-bold text-emerald-600 block">48H REGIONAL DISPATCH</span>
            <span className="text-[11px] text-slate-500">Central inventory on Bombo Road, Kampala</span>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================================
   SCENE 2C: High-Key Clinical Environment Stage with Integrated Glass Ledger
   - High-key clinical panorama
   - Seamless architectural floating slab with frosted backdrop
   - Consolidated 3-part operational ledger
   ========================================================================= */
function Scene2C() {
  return (
    <section className="relative bg-white border-b border-slate-200 py-16 sm:py-20 overflow-hidden">
      {/* High-Key Clinical Panoramic Scene Backdrop */}
      <div className="absolute inset-0 select-none">
        <img
          src={envTheatreWideImg}
          alt="High-key clinical environment"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-2xl space-y-6">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#ED1C24]">
            <span className="w-2 h-2 rounded-full bg-[#ED1C24]" />
            <span>WHO WE ARE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#0F172A] tracking-tight leading-[1.04]">
            Equipping Healthcare. <br />
            <span className="text-[#21409A]">Empowering Clinicians.</span>
          </h2>

          <p className="text-base text-slate-700 leading-relaxed font-normal">
            FAB Medical Supplies Ltd. provides high-grade diagnostic and therapeutic technology to hospitals, specialized surgical centers, and diagnostic laboratories across Uganda. We manage the complete procurement lifecycle from import clearance to long-term preventative maintenance.
          </p>

          {/* Tripartite Integrated Operational Tabs */}
          <div className="border border-slate-200 divide-y divide-slate-200 bg-white/95 backdrop-blur-xs rounded-xs shadow-xs">
            <div className="p-4 flex items-start space-x-4">
              <span className="font-mono font-bold text-xs text-[#21409A] pt-0.5">01.</span>
              <div>
                <h3 className="text-xs font-mono font-bold uppercase text-[#0F172A]">Direct Equipment Supply</h3>
                <p className="text-xs text-slate-600 mt-0.5">Sourcing verified diagnostic and surgical apparatus from world-leading manufacturers.</p>
              </div>
            </div>

            <div className="p-4 flex items-start space-x-4">
              <span className="font-mono font-bold text-xs text-[#21409A] pt-0.5">02.</span>
              <div>
                <h3 className="text-xs font-mono font-bold uppercase text-[#0F172A]">Secure National Logistics</h3>
                <p className="text-xs text-slate-600 mt-0.5">Ensuring uninterrupted delivery of sensitive medical equipment and diagnostic reagents.</p>
              </div>
            </div>

            <div className="p-4 flex items-start space-x-4">
              <span className="font-mono font-bold text-xs text-[#21409A] pt-0.5">03.</span>
              <div>
                <h3 className="text-xs font-mono font-bold uppercase text-[#0F172A]">On-Site Engineering</h3>
                <p className="text-xs text-slate-600 mt-0.5">Comprehensive maintenance, rapid calibration, and emergency technical call-outs.</p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#0F172A] hover:bg-[#21409A] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-xs"
            >
              <span>LEARN MORE ABOUT FAB</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
