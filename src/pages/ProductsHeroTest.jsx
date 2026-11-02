import React, { useState } from 'react';
import { Container } from '../components';
import heroEquipmentPhoto from '../assets/products-hero-equipment.webp';
import controlSuitePhoto from '../assets/about/about-company-control-suite.webp';

/* =========================================================================
   VARIATION 1A: Centered Editorial + Feathered Equipment Horizon
   - Matches Who We Serve Hero (1A) which the user loved.
   - High-impact centered typography + dot-separated micro-ledger.
   - Wide, frameless feathered horizon dissolving softly into the white page.
   ========================================================================= */
function Hero1A() {
  return (
    <section className="relative bg-white border-b border-slate-200 pt-14 sm:pt-18 pb-0 overflow-hidden">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 text-[11px] font-mono font-bold tracking-[0.25em] text-brand-red uppercase">
            <span className="w-2 h-2 rounded-full bg-brand-red" aria-hidden="true" />
            <span>EQUIPMENT CATALOGUE &bull; UGANDA</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black uppercase text-[#0F172A] tracking-tight leading-[1.04]">
            Medical Equipment <br />
            <span className="text-brand-blue">&amp; Hospital Supplies.</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
            Certified clinical diagnostic systems, surgical apparatus, and hospital infrastructure supplied across Uganda.
          </p>

          {/* Clean Hairline Micro-Ledger */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 pt-2 text-xs font-mono text-slate-500">
            <div className="flex items-center space-x-1.5">
              <span className="font-black text-[#0F172A]">27</span>
              <span className="uppercase text-[11px] text-slate-500">VERIFIED UNITS</span>
            </div>
            <span className="text-brand-red">&bull;</span>
            <div className="flex items-center space-x-1.5">
              <span className="font-black text-brand-blue">09</span>
              <span className="uppercase text-[11px] text-slate-500">DEPARTMENTS</span>
            </div>
            <span className="text-brand-red">&bull;</span>
            <div className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span className="uppercase text-[11px] text-slate-700 font-semibold">KAMPALA CENTRAL STOCK</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Feathered equipment panorama — dissolves seamlessly into the page */}
      <div className="relative mt-8 h-[240px] sm:h-[320px] lg:h-[360px] select-none">
        <img
          src={heroEquipmentPhoto}
          alt="Clinical diagnostic monitors, vital signs meters, and medical equipment"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}

/* =========================================================================
   VARIATION 1B: Swiss Gallery Minimalist (Frameless Technical Dossier Split)
   - Matches About Us Hero.
   - Left: Typography + status chips.
   - Right: Frameless photographic window with fine registration crosshairs (+).
   - Zero outer container box, zero heavy drop shadows.
   ========================================================================= */
function Hero1B() {
  return (
    <section className="bg-white border-b border-slate-200 py-12 sm:py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (7-Col): Clean Editorial Typography */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-[11px] font-mono font-bold tracking-[0.25em] text-brand-red uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-red" aria-hidden="true" />
              <span>CENTRAL INVENTORY INDEX</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black uppercase text-[#0F172A] tracking-tight leading-[1.06]">
              Medical Equipment <br />
              <span className="text-brand-blue">&amp; Hospital Supplies.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Direct importer and supplier of certified clinical diagnostic systems, surgical apparatus, and hospital infrastructure across Uganda.
            </p>

            {/* Micro-Ledger Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <div className="px-3 py-1.5 bg-slate-50 border border-slate-200 flex items-center space-x-2 text-xs font-mono">
                <span className="font-black text-[#0F172A]">27</span>
                <span className="text-slate-500 uppercase text-[10px]">UNITS IN STOCK</span>
              </div>
              <div className="px-3 py-1.5 bg-slate-50 border border-slate-200 flex items-center space-x-2 text-xs font-mono">
                <span className="font-black text-brand-blue">09</span>
                <span className="text-slate-500 uppercase text-[10px]">CLINICAL WINGS</span>
              </div>
              <div className="px-3 py-1.5 bg-slate-50 border border-slate-200 flex items-center space-x-1.5 text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span className="text-slate-700 font-semibold uppercase text-[10px]">KAMPALA DISPATCH</span>
              </div>
            </div>
          </div>

          {/* Right Column (5-Col): Frameless Swiss Gallery Window with crosshairs */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
              {/* Registration crosshairs */}
              <div className="absolute top-2 left-2 text-[10px] font-mono text-slate-400 select-none z-10">+</div>
              <div className="absolute top-2 right-2 text-[10px] font-mono text-slate-400 select-none z-10">+</div>
              <div className="absolute bottom-2 left-2 text-[10px] font-mono text-slate-400 select-none z-10">+</div>
              <div className="absolute bottom-2 right-2 text-[10px] font-mono text-slate-400 select-none z-10">+</div>

              <img
                src={heroEquipmentPhoto}
                alt="Clinical diagnostic monitors and vital signs equipment"
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-3 left-3 bg-white/95 px-2.5 py-1 text-[10px] font-mono font-black uppercase text-[#0F172A] border-l-2 border-brand-red">
                CENTRAL INVENTORY
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================================
   VARIATION 1C: High-Density Architectural Band (Ultra-Compact Above-the-Fold)
   - Extremely low height.
   - Puts all focus on the products below so users browse immediately.
   - Right side features an open 3-stat architectural grid with red numerals.
   ========================================================================= */
function Hero1C() {
  return (
    <section className="bg-slate-50/70 border-b border-slate-200 py-10 sm:py-12">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Column (8-Col): Compact Headline */}
          <div className="lg:col-span-8 space-y-2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-[11px] font-mono font-bold tracking-[0.25em] text-brand-red uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-red" aria-hidden="true" />
              <span>EQUIPMENT CATALOGUE</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#0F172A] tracking-tight">
              Medical Equipment <span className="text-brand-blue">&amp; Hospital Supplies</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto lg:mx-0">
              Verified clinical hardware for hospitals, clinics, and laboratories across Uganda.
            </p>
          </div>

          {/* Right Column (4-Col): 3-Stat Hairline Matrix */}
          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-slate-200 pt-4 lg:pt-0 lg:pl-6">
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <div className="text-xl sm:text-2xl font-mono font-black text-brand-red">27</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mt-0.5">UNITS</div>
              </div>
              <div className="border-x border-slate-200">
                <div className="text-xl sm:text-2xl font-mono font-black text-brand-blue">09</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mt-0.5">WINGS</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-mono font-black text-emerald-600">100%</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mt-0.5">TESTED</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const VARIATIONS = [
  {
    id: '1a',
    label: '1A: Centered Editorial + Feathered Equipment Horizon',
    node: <Hero1A />,
    note: 'Matches Who We Serve hero: centered title, micro-ledger, and panoramic feathered horizon dissolving into the page.',
  },
  {
    id: '1b',
    label: '1B: Swiss Gallery Minimalist (Frameless Technical Dossier)',
    node: <Hero1B />,
    note: 'Matches About Us hero: left typography with status chips, right frameless photo with registration crosshairs (+).',
  },
  {
    id: '1c',
    label: '1C: High-Density Architectural Band (Ultra-Compact)',
    node: <Hero1C />,
    note: 'Low-profile header with 3-stat metric grid. Pushes product grid directly above the fold for fast browsing.',
  },
];

export default function ProductsHeroTest() {
  const [selected, setSelected] = useState('1a');
  const visible = selected === 'all' ? VARIATIONS : VARIATIONS.filter((v) => v.id === selected);

  return (
    <div className="bg-white min-h-screen text-[#0F172A] pb-24">
      {/* Test Lab Bar */}
      <div className="sticky top-0 z-50 bg-[#0F172A] text-white border-b border-slate-800 shadow-md">
        <Container>
          <div className="py-3 flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center space-x-2.5">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-200">
                PRODUCTS CATALOGUE &bull; SECTION 1 HERO LAB
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[...VARIATIONS.map((v) => ({ id: v.id, label: v.id.toUpperCase() })), { id: 'all', label: 'Compare All 3' }].map((b) => (
                <button
                  key={b.id}
                  onClick={() => setSelected(b.id)}
                  className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded transition-all cursor-pointer ${
                    selected === b.id ? 'bg-brand-red text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Variations List */}
      <div className="space-y-16 mt-6">
        {visible.map((v) => (
          <div key={v.id}>
            <Container>
              <div className="mb-3 flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="text-xs font-extrabold uppercase tracking-wide text-brand-blue">{v.label}</span>
                <span className="text-[11px] text-slate-500 hidden sm:inline">{v.note}</span>
              </div>
            </Container>
            {v.node}
          </div>
        ))}
      </div>
    </div>
  );
}
