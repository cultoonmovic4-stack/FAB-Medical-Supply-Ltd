import React, { useState } from 'react';
import { Container } from '../components';
import ProductCard from '../components/ProductCard';
import { categories, products } from '../data/products';

// Authentic clinical & equipment photography
import ctScannerImg from '../assets/products/ct_scanner_siemens.webp';
import patientMonitorImg from '../assets/products/patient_monitor_icu_ge.webp';
import anesthesiaImg from '../assets/products/anesthesia_machine.webp';
import microscopeImg from '../assets/products/microscope_optical.webp';
import operatingTableImg from '../assets/products/operating_table.webp';
import operatingRoomImg from '../assets/about/about-company-operating-room.webp';
import controlSuiteImg from '../assets/about/about-company-control-suite.webp';

const activeProducts = products.filter((p) => Boolean(p.image));
const totalUnits = activeProducts.length;
const totalDepts = String(categories.length).padStart(2, '0');

const WHATSAPP_QUOTE_URL = `https://wa.me/256704757991?text=${encodeURIComponent(
  'Hello FAB Medical Supplies Ltd., I would like to request a quotation from your medical equipment catalogue.'
)}`;

/* =========================================================================
   CONCEPT A: Split Authentic Equipment Bento (Light Editorial)
   - Replaces soft-focus banner with 3 crisp studio product tiles on the right.
   - Left column carries strong editorial typography, inventory strip, and CTAs.
   ========================================================================= */
function HeroConceptA() {
  return (
    <section className="bg-white border-b border-slate-200 py-10 sm:py-14 lg:py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (6 cols) */}
          <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono font-bold tracking-[0.22em] text-[#ED1C24] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#ED1C24]" aria-hidden="true" />
              <span>EQUIPMENT CATALOGUE &bull; UGANDA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-black uppercase text-[#0F172A] tracking-tight leading-[1.04]">
              Medical Equipment <br />
              <span className="text-[#21409A]">&amp; Hospital Supplies.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Direct importation and supply of certified diagnostic imaging systems, critical care monitors, surgical suites, and laboratory instruments across Uganda.
            </p>

            {/* Hairline Micro-Metrics */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 pt-1 text-xs font-mono border-t border-slate-100 mt-4 pt-4">
              <div className="flex items-center space-x-1.5">
                <span className="font-black text-[#0F172A] text-sm">{totalUnits}</span>
                <span className="uppercase text-[11px] text-slate-500">VERIFIED UNITS</span>
              </div>
              <span className="text-slate-300">|</span>
              <div className="flex items-center space-x-1.5">
                <span className="font-black text-[#21409A] text-sm">{totalDepts}</span>
                <span className="uppercase text-[11px] text-slate-500">DEPARTMENTS</span>
              </div>
              <span className="text-slate-300">|</span>
              <div className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span className="uppercase text-[11px] text-slate-700 font-semibold">KAMPALA STOCK</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#preview-catalogue"
                className="inline-flex items-center space-x-2 bg-[#0F172A] hover:bg-[#21409A] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xs transition-colors"
              >
                <span>Browse Inventory</span>
                <span aria-hidden="true">&darr;</span>
              </a>
              <a
                href={WHATSAPP_QUOTE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white hover:bg-slate-50 text-[#0F172A] border border-slate-300 hover:border-[#21409A] text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xs transition-colors"
              >
                <span>Request Bulk Quote</span>
              </a>
            </div>
          </div>

          {/* Right Column (6 cols): Crisp 3-Tile Authentic Equipment Bento */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-12 gap-3">
              {/* Primary Large Tile */}
              <div className="col-span-7 bg-[#F8FAFC] border border-slate-200 hover:border-[#21409A] transition-colors rounded-xs p-4 flex flex-col justify-between group relative overflow-hidden min-h-[270px] sm:min-h-[320px]">
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-500 z-10">
                  <span className="font-bold text-[#21409A]">01 / RADIOLOGY</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
                </div>
                <div className="my-auto py-3 flex items-center justify-center">
                  <img
                    src={ctScannerImg}
                    alt="CT Scanner clinical diagnostic unit"
                    className="w-full max-h-[190px] object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="border-t border-slate-200/80 pt-2.5 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0F172A] uppercase tracking-tight">CT Scanner Systems</span>
                  <span className="text-[10px] font-mono text-slate-400">DIAGNOSTIC</span>
                </div>
              </div>

              {/* Right Stacked 2 Tiles */}
              <div className="col-span-5 grid grid-rows-2 gap-3">
                <div className="bg-[#F8FAFC] border border-slate-200 hover:border-[#21409A] transition-colors rounded-xs p-3.5 flex flex-col justify-between group">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#21409A]">
                    03 / ICU &amp; CRITICAL
                  </div>
                  <div className="my-1.5 flex items-center justify-center">
                    <img
                      src={patientMonitorImg}
                      alt="ICU Patient Monitor"
                      className="h-20 sm:h-24 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-[11px] font-bold text-[#0F172A] uppercase tracking-tight truncate">
                    ICU Patient Monitors
                  </div>
                </div>

                <div className="bg-[#F8FAFC] border border-slate-200 hover:border-[#21409A] transition-colors rounded-xs p-3.5 flex flex-col justify-between group">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#21409A]">
                    09 / THEATRE
                  </div>
                  <div className="my-1.5 flex items-center justify-center">
                    <img
                      src={anesthesiaImg}
                      alt="Anesthesia Machine Workstation"
                      className="h-20 sm:h-24 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-[11px] font-bold text-[#0F172A] uppercase tracking-tight truncate">
                    Anesthesia Workstations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================================
   CONCEPT B: Deep Navy / Brand-Blue Clinical Command (High-Contrast Dark)
   - Strong visual anchor separating hero from the white filter console below.
   - Precision subtle grid background + crisp framed clinical theatre image.
   ========================================================================= */
function HeroConceptB() {
  return (
    <section
      className="relative bg-[#0B162C] text-white border-b-4 border-[#21409A] py-12 sm:py-16 overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    >
      {/* Subtle brand blue atmospheric accent */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#21409A]/30 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2.5 text-[11px] font-mono font-bold tracking-[0.22em] text-slate-300 uppercase">
              <span className="w-5 h-0.5 bg-[#ED1C24]" aria-hidden="true" />
              <span>CENTRAL EQUIPMENT CATALOGUE &bull; UGANDA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black uppercase tracking-tight leading-[1.04]">
              <span className="text-white">Medical Equipment</span> <br />
              <span className="text-[#7EA2FF]">&amp; Hospital Supplies.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Certified clinical diagnostic systems, surgical apparatus, and hospital infrastructure imported and dispatched nationwide from Kampala.
            </p>

            {/* Dark Structured Metric Ledger */}
            <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 pt-2">
              <div className="bg-white/5 border border-white/10 px-3.5 py-3 rounded-xs">
                <div className="text-xl sm:text-2xl font-mono font-black text-white">{totalUnits}</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mt-0.5">
                  Verified Units
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 px-3.5 py-3 rounded-xs">
                <div className="text-xl sm:text-2xl font-mono font-black text-[#7EA2FF]">{totalDepts}</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mt-0.5">
                  Departments
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 px-3.5 py-3 rounded-xs">
                <div className="flex items-center justify-center lg:justify-start space-x-1.5 text-sm sm:text-base font-mono font-black text-emerald-400 pt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>READY</span>
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mt-1">
                  Kampala Stock
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Crisp Framed Clinical Theatre Photo */}
          <div className="lg:col-span-5">
            <div className="relative p-1.5 bg-white/10 border border-white/15 rounded-xs">
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                <img
                  src={operatingRoomImg}
                  alt="Modern hospital operating theatre equipped with clinical apparatus"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B162C]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-white">
                  <span className="bg-[#0B162C]/90 border-l-2 border-[#ED1C24] px-2.5 py-1 font-bold">
                    HOSPITAL-GRADE INFRASTRUCTURE
                  </span>
                  <span className="text-slate-300 hidden sm:inline">ISO / CE SOURCED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================================
   CONCEPT C: Compact Utility-First Catalogue Header (Zero-Fluff Fast Browse)
   - Minimal vertical height so Search, Filters & Product Cards appear immediately.
   - Crisp Swiss architectural typography + 3-stat metric block + Direct Quote CTA.
   ========================================================================= */
function HeroConceptC() {
  return (
    <section
      className="bg-white border-b border-slate-200 relative"
      style={{
        backgroundImage: 'radial-gradient(#cbd5e1 0.85px, transparent 0.85px)',
        backgroundSize: '20px 20px',
      }}
    >
      {/* Thin Dual-Brand Top Accent Bar */}
      <div className="h-1 w-full flex">
        <div className="w-2/3 bg-[#21409A]" />
        <div className="w-1/3 bg-[#ED1C24]" />
      </div>

      {/* White softening veil so text remains crisp */}
      <div className="bg-white/85 py-8 sm:py-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left (7 cols) */}
            <div className="lg:col-span-7 space-y-2.5 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 text-[11px] font-mono font-bold tracking-[0.22em] text-[#ED1C24] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#ED1C24]" aria-hidden="true" />
                <span>FAB MEDICAL SUPPLIES &bull; UGANDA CATALOGUE</span>
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black uppercase text-[#0F172A] tracking-tight leading-[1.06]">
                Medical Equipment <span className="text-[#21409A]">&amp; Hospital Supplies.</span>
              </h1>
              <p className="text-sm text-slate-600 max-w-2xl mx-auto lg:mx-0">
                Browse certified diagnostic, ICU, surgical, and laboratory equipment available for procurement across Uganda.
              </p>
            </div>

            {/* Right (5 cols): Compact Architectural Ledger + CTA */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center justify-center lg:justify-end gap-4">
              <div className="flex items-center divide-x divide-slate-200 bg-white border border-slate-200 px-2 py-2.5 rounded-xs shadow-xs">
                <div className="px-3.5 text-center">
                  <div className="text-lg font-mono font-black text-[#0F172A]">{totalUnits}</div>
                  <div className="text-[10px] font-mono uppercase text-slate-500">Units</div>
                </div>
                <div className="px-3.5 text-center">
                  <div className="text-lg font-mono font-black text-[#21409A]">{totalDepts}</div>
                  <div className="text-[10px] font-mono uppercase text-slate-500">Depts</div>
                </div>
                <div className="px-3.5 text-center">
                  <div className="flex items-center justify-center space-x-1 text-xs font-mono font-black text-emerald-700 pt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    <span>KLA</span>
                  </div>
                  <div className="text-[10px] font-mono uppercase text-slate-500 mt-0.5">Stock</div>
                </div>
              </div>

              <a
                href={WHATSAPP_QUOTE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center bg-[#21409A] hover:bg-[#0F172A] text-white text-xs font-bold uppercase tracking-wider px-5 py-3.5 rounded-xs transition-colors whitespace-nowrap"
              >
                Request Quotation
              </a>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

/* =========================================================================
   CONCEPT D: Interactive Department Spotlight Strip (Enterprise Medical Style)
   - Tight editorial header paired with 5 clickable visual department tiles.
   - Turns hero space into instant visual category navigation.
   ========================================================================= */
function HeroConceptD() {
  const [activeTile, setActiveTile] = useState('all');

  const spotlightDepartments = [
    {
      id: 'radiology-imaging',
      code: '01',
      label: 'Radiology & Imaging',
      img: ctScannerImg,
      count: activeProducts.filter((p) => p.categoryId === 'radiology-imaging').length,
    },
    {
      id: 'emergency-icu',
      code: '03',
      label: 'Emergency & ICU',
      img: patientMonitorImg,
      count: activeProducts.filter((p) => p.categoryId === 'emergency-icu').length,
    },
    {
      id: 'theatre-room',
      code: '09',
      label: 'Operating Theatre',
      img: anesthesiaImg,
      count: activeProducts.filter((p) => p.categoryId === 'theatre-room').length,
    },
    {
      id: 'laboratory',
      code: '08',
      label: 'Clinical Laboratory',
      img: microscopeImg,
      count: activeProducts.filter((p) => p.categoryId === 'laboratory').length,
    },
    {
      id: 'hospital-furniture',
      code: '07',
      label: 'Hospital Furniture',
      img: operatingTableImg,
      count: activeProducts.filter((p) => p.categoryId === 'hospital-furniture').length,
    },
  ];

  return (
    <section className="bg-white border-b border-slate-200 pt-10 sm:pt-12 pb-8 sm:pb-10">
      <Container>
        {/* Top Row: Split Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-7 border-b border-slate-200">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono font-bold tracking-[0.22em] text-[#ED1C24] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#ED1C24]" aria-hidden="true" />
              <span>EQUIPMENT CATALOGUE &bull; UGANDA</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black uppercase text-[#0F172A] tracking-tight leading-[1.04]">
              Medical Equipment <span className="text-[#21409A]">&amp; Hospital Supplies.</span>
            </h1>
          </div>

          <div className="lg:max-w-sm space-y-2 lg:text-right">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Certified clinical diagnostics, critical care, surgical, and ward equipment supplied nationwide.
            </p>
            <div className="inline-flex items-center space-x-3 text-[11px] font-mono text-slate-500">
              <span>
                <strong className="text-[#0F172A]">{totalUnits}</strong> UNITS
              </span>
              <span className="text-[#ED1C24]">&bull;</span>
              <span>
                <strong className="text-[#21409A]">{totalDepts}</strong> DEPARTMENTS
              </span>
              <span className="text-[#ED1C24]">&bull;</span>
              <span className="text-emerald-700 font-semibold">KAMPALA STOCK</span>
            </div>
          </div>
        </div>

        {/* Bottom Row: Visual Department Spotlight Tiles */}
        <div className="pt-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400">
              SELECT A FEATURED DEPARTMENT TO FILTER
            </span>
            {activeTile !== 'all' && (
              <button
                type="button"
                onClick={() => setActiveTile('all')}
                className="text-[11px] font-mono font-bold text-[#ED1C24] hover:underline uppercase cursor-pointer"
              >
                Reset Selection &times;
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {spotlightDepartments.map((dept) => {
              const isSelected = activeTile === dept.id;
              return (
                <button
                  key={dept.id}
                  type="button"
                  onClick={() => setActiveTile(isSelected ? 'all' : dept.id)}
                  className={`group text-left rounded-xs border transition-all p-3 flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-[#21409A]/5 border-[#21409A] ring-1 ring-[#21409A]'
                      : 'bg-[#F8FAFC] border-slate-200 hover:border-[#21409A] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                    <span className={isSelected ? 'font-black text-[#21409A]' : 'text-slate-400 font-bold'}>
                      {dept.code}
                    </span>
                    <span className="text-slate-500 bg-white border border-slate-200 px-1.5 py-0.5 rounded-xs">
                      {dept.count} units
                    </span>
                  </div>

                  <div className="h-20 sm:h-24 flex items-center justify-center my-1">
                    <img
                      src={dept.img}
                      alt={dept.label}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="pt-2 mt-1 border-t border-slate-200/80 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0F172A] leading-tight">{dept.label}</span>
                    <span className="text-[#21409A] text-xs font-bold opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                      &rarr;
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================================
   CONCEPT E: Architectural Broadsheet Split (Full-Height Editorial Photo)
   - Zero gradient feathering; crisp 50/50 architectural divider on desktop.
   - Full-width bottom specification ribbon anchors the whole section.
   ========================================================================= */
function HeroConceptE() {
  return (
    <section className="bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column (7 cols): Crisp Editorial Padding */}
          <div className="lg:col-span-7 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex flex-col justify-center">
            <div className="max-w-xl space-y-5">
              <div className="flex items-center space-x-2 text-[11px] font-mono font-bold tracking-[0.24em] text-[#ED1C24] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#ED1C24]" aria-hidden="true" />
                <span>EQUIPMENT CATALOGUE &bull; UGANDA</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black uppercase text-[#0F172A] tracking-tight leading-[1.03]">
                Medical Equipment <br />
                <span className="text-[#21409A]">&amp; Hospital Supplies.</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Certified clinical diagnostic systems, surgical apparatus, and hospital infrastructure procured and supplied to facilities across Uganda.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#preview-catalogue"
                  className="inline-flex items-center space-x-2 bg-[#21409A] hover:bg-[#0F172A] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xs transition-colors"
                >
                  <span>Explore {totalUnits} Units</span>
                  <span aria-hidden="true">&darr;</span>
                </a>
                <a
                  href={WHATSAPP_QUOTE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 border border-slate-300 hover:border-[#0F172A] text-[#0F172A] text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xs transition-colors"
                >
                  <span>Institutional Inquiry</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Full-Bleed Sharp-Edged Clinical Photo */}
          <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-[380px] border-t lg:border-t-0 lg:border-l border-slate-200 bg-slate-100">
            <img
              src={controlSuiteImg}
              alt="Clinical diagnostic control suite and imaging monitoring workstation"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs border border-slate-200 px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#0F172A] flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>KAMPALA CENTRAL STOCK</span>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Bottom Architectural Spec Strip */}
      <div className="bg-[#F8FAFC] border-t border-slate-200">
        <Container>
          <div className="py-3.5 grid grid-cols-2 md:grid-cols-4 gap-3 text-[11px] font-mono uppercase tracking-wider text-slate-600">
            <div className="flex items-center space-x-2">
              <span className="font-black text-[#ED1C24]">01</span>
              <span>
                <strong className="text-[#0F172A]">{totalUnits}</strong> Verified Units
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-black text-[#21409A]">02</span>
              <span>
                <strong className="text-[#0F172A]">{totalDepts}</strong> Clinical Departments
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-black text-[#21409A]">03</span>
              <span>Direct Global Importation</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-black text-[#21409A]">04</span>
              <span>Nationwide UG Delivery</span>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

/* =========================================================================
   REALISTIC BELOW-THE-FOLD PREVIEW (Filter Bar + 3 Real Product Cards)
   Helps evaluate how each hero transitions into the actual Products catalogue.
   ========================================================================= */
function CatalogueContinuationPreview() {
  const sampleProducts = activeProducts.slice(0, 3);
  return (
    <div id="preview-catalogue" className="bg-[#FAFCFE] border-b border-slate-200">
      {/* Mock of existing Filter Console */}
      <div className="bg-white border-b border-slate-200 py-5">
        <Container>
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center opacity-90">
            <div className="flex-grow bg-[#FAFCFE] border border-slate-300 rounded-xs px-4 py-2.5 text-xs text-slate-400 flex items-center space-x-2">
              <span>Search equipment by name, department, or technical specification...</span>
            </div>
            <div className="flex gap-2">
              <div className="bg-white border border-slate-300 rounded-xs px-3.5 py-2.5 text-xs text-slate-600 font-medium">
                All Applications ▾
              </div>
              <div className="bg-white border border-slate-300 rounded-xs px-3.5 py-2.5 text-xs text-slate-600 font-medium">
                Default Order ⇅
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* First Row of Real Product Cards */}
      <div className="py-8">
        <Container>
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400">
              LIVE CATALOGUE CONTINUATION PREVIEW (SHOWING 3 OF {totalUnits} UNITS)
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pointer-events-none select-none opacity-95">
            {sampleProducts.map((p, idx) => (
              <ProductCard key={p.id} product={p} onSelect={() => {}} index={idx} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}

const CONCEPTS = [
  {
    id: 'a',
    shortLabel: 'Option A: Equipment Bento',
    title: 'Option A — Split Authentic Equipment Bento (Light Editorial)',
    note: 'Replaces the soft banner with 3 crisp studio product tiles (CT Scanner, ICU Monitor, Anesthesia) + clear actions.',
    node: <HeroConceptA />,
  },
  {
    id: 'b',
    shortLabel: 'Option B: Navy Command',
    title: 'Option B — Deep Navy Clinical Command (High-Contrast Dark)',
    note: 'Bold flagship dark-navy block with framed operating theatre visual; high contrast before the white filter bar.',
    node: <HeroConceptB />,
  },
  {
    id: 'c',
    shortLabel: 'Option C: Compact Utility',
    title: 'Option C — Compact Utility-First Header (Above-the-Fold Speed)',
    note: 'Ultra-clean, low-height architectural header that brings search, filters, and product cards right into view.',
    node: <HeroConceptC />,
  },
  {
    id: 'd',
    shortLabel: 'Option D: Dept Spotlight',
    title: 'Option D — Interactive Department Spotlight Strip',
    note: 'Turns hero space into visual navigation with 5 clickable department cards using real equipment photography.',
    node: <HeroConceptD />,
  },
  {
    id: 'e',
    shortLabel: 'Option E: Editorial Split',
    title: 'Option E — Architectural Broadsheet Split (Full-Height Photo)',
    note: 'Clean 50/50 editorial split with sharp-edged clinical photo and a full-width specification strip at the bottom.',
    node: <HeroConceptE />,
  },
];

export default function ProductsHeroTest() {
  const [selected, setSelected] = useState('a');
  const visible = selected === 'all' ? CONCEPTS : CONCEPTS.filter((c) => c.id === selected);

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-[#0F172A] pb-24">
      {/* Sticky Hero Lab Switcher Bar */}
      <div className="sticky top-0 z-50 bg-[#0F172A] text-white border-b border-slate-800 shadow-md">
        <Container>
          <div className="py-3 flex flex-col lg:flex-row items-center justify-between gap-3">
            <div className="flex items-center space-x-2.5">
              <span className="w-2 h-2 rounded-full bg-[#ED1C24] animate-pulse" aria-hidden="true" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-slate-200">
                PRODUCTS HERO REDESIGN LAB
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              {CONCEPTS.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelected(c.id)}
                  className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-xs transition-all cursor-pointer ${
                    selected === c.id
                      ? 'bg-[#ED1C24] text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {c.shortLabel}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setSelected('all')}
                className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-xs transition-all cursor-pointer border ${
                  selected === 'all'
                    ? 'bg-[#21409A] border-[#21409A] text-white'
                    : 'bg-transparent border-slate-600 text-slate-300 hover:border-white hover:text-white'
                }`}
              >
                Compare All 5
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Render Selected Concept(s) */}
      <div className={selected === 'all' ? 'space-y-16 pt-8' : ''}>
        {visible.map((c) => (
          <div key={c.id}>
            {/* Concept Metadata Banner */}
            <div className="bg-slate-100 border-b border-slate-200 py-2.5">
              <Container>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-xs font-extrabold uppercase tracking-wide text-[#21409A]">
                    {c.title}
                  </span>
                  <span className="text-[11px] text-slate-500">{c.note}</span>
                </div>
              </Container>
            </div>

            {/* The Hero Concept */}
            {c.node}

            {/* When viewing a single concept, show realistic continuation into Filter Console + Product Cards */}
            {selected !== 'all' && <CatalogueContinuationPreview />}
          </div>
        ))}
      </div>
    </div>
  );
}
