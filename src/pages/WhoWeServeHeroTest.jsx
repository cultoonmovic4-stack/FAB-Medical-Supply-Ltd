import React, { useState } from 'react';
import { Container } from '../components';

// Authentic clinical & institutional photography
import mulagoHospitalImg from '../assets/about/about-who-mulago-hospital.webp';
import radiologyImg from '../assets/about/about-who-radiology.webp';
import referenceLabImg from '../assets/about/about-who-reference-lab.webp';
import inpatientBedsImg from '../assets/about/about-who-inpatient-beds.webp';
import operatingRoomImg from '../assets/about/about-company-operating-room.webp';
import controlSuiteImg from '../assets/about/about-company-control-suite.webp';
import wardInteriorImg from '../assets/about/about-company-ward-interior.webp';
import outpatientImg from '../assets/env_outpatient.jpg';

const WHATSAPP_INSTITUTIONAL_URL = `https://wa.me/256704757991?text=${encodeURIComponent(
  'Hello FAB Medical Supplies Ltd., our healthcare facility would like to discuss medical equipment supply and procurement.'
)}`;

const SECTORS = [
  { num: '01', name: 'Hospitals', sub: 'Referral & Regional' },
  { num: '02', name: 'Clinics', sub: 'Primary & Specialized' },
  { num: '03', name: 'Laboratories', sub: 'Diagnostic & Research' },
  { num: '04', name: 'NGOs & Partners', sub: 'Relief & Upcountry' },
];

/* =========================================================================
   OPTION A: Compact Architectural Masthead (Consistent Sibling to Products)
   - Matches the clean dot-grid + dual blue/red rule chosen for Products.
   - Brings the "Four Core Clinical Zones" right above the fold.
   ========================================================================= */
function HeroOptionA() {
  return (
    <section
      className="bg-white border-b border-slate-200 relative"
      style={{
        backgroundImage: 'radial-gradient(#cbd5e1 0.85px, transparent 0.85px)',
        backgroundSize: '20px 20px',
      }}
    >
      {/* Dual-Brand Top Accent Rule */}
      <div className="h-1 w-full flex" aria-hidden="true">
        <div className="w-2/3 bg-[#21409A]" />
        <div className="w-1/3 bg-[#ED1C24]" />
      </div>

      <div className="bg-white/85 py-8 sm:py-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left (7 cols): Tight Editorial Title */}
            <div className="lg:col-span-7 space-y-2.5 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 text-[11px] font-mono font-bold tracking-[0.22em] text-[#ED1C24] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#ED1C24]" aria-hidden="true" />
                <span>WHO WE SERVE &bull; UGANDA HEALTHCARE</span>
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black uppercase text-[#0F172A] tracking-tight leading-[1.06]">
                Equipping the facilities that{' '}
                <span className="text-[#21409A]">care for Uganda.</span>
              </h1>
              <p className="text-sm text-slate-600 max-w-2xl mx-auto lg:mx-0">
                Hospitals, clinics, laboratories, and global health partners rely on FAB Medical for vetted, hospital-grade equipment and nationwide support.
              </p>
            </div>

            {/* Right (5 cols): 4-Sector Compact Matrix + Direct Inquiry CTA */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2">
                {SECTORS.map((s) => (
                  <div
                    key={s.num}
                    className="bg-white border border-slate-200 px-3 py-2 rounded-xs flex items-center space-x-2.5 shadow-xs"
                  >
                    <span className="text-[11px] font-mono font-black text-[#21409A]">{s.num}</span>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-[#0F172A] truncate">{s.name}</div>
                      <div className="text-[10px] font-mono text-slate-400 truncate">{s.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center lg:justify-end gap-3">
                <a
                  href="#preview-clinical-zones"
                  className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600 hover:text-[#21409A] transition-colors"
                >
                  View Clinical Zones &darr;
                </a>
                <a
                  href={WHATSAPP_INSTITUTIONAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#21409A] hover:bg-[#0F172A] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xs transition-colors"
                >
                  Institutional Inquiry
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

/* =========================================================================
   OPTION B: 2-Column Institutional Dossier + 4-Facility Photo Mosaic
   - Replaces single washed-out ward photo with a crisp 2x2 mosaic of all 4 environments.
   ========================================================================= */
function HeroOptionB() {
  const mosaicItems = [
    { img: mulagoHospitalImg, tag: '01 / HOSPITALS', alt: 'Hospital facility infrastructure' },
    { img: radiologyImg, tag: '02 / DIAGNOSTICS', alt: 'Radiology and imaging clinic suite' },
    { img: referenceLabImg, tag: '03 / LABORATORIES', alt: 'Reference diagnostic laboratory' },
    { img: inpatientBedsImg, tag: '04 / WARDS & CLINICS', alt: 'Prepared inpatient ward beds' },
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-10 sm:py-14 lg:py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left (6 cols) */}
          <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono font-bold tracking-[0.22em] text-[#ED1C24] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#ED1C24]" aria-hidden="true" />
              <span>WHO WE SERVE &bull; UGANDA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-black uppercase text-[#0F172A] tracking-tight leading-[1.04]">
              Equipping the facilities that{' '}
              <span className="text-[#21409A]">care for Uganda.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              From national referral hospitals and private clinics to diagnostic laboratories and humanitarian NGOs, FAB supplies certified clinical hardware built for frontline reliability.
            </p>

            {/* Hairline Sector Ledger */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-1.5 pt-4 border-t border-slate-100 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600">
              <span>Hospitals</span>
              <span className="text-[#ED1C24]">&bull;</span>
              <span>Clinics</span>
              <span className="text-[#ED1C24]">&bull;</span>
              <span>Laboratories</span>
              <span className="text-[#ED1C24]">&bull;</span>
              <span>NGOs &amp; Partners</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                href="#preview-clinical-zones"
                className="inline-flex items-center space-x-2 bg-[#0F172A] hover:bg-[#21409A] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xs transition-colors"
              >
                <span>Explore Clinical Zones</span>
                <span aria-hidden="true">&darr;</span>
              </a>
              <a
                href={WHATSAPP_INSTITUTIONAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white hover:bg-slate-50 text-[#0F172A] border border-slate-300 hover:border-[#21409A] text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xs transition-colors"
              >
                <span>Partner With FAB</span>
              </a>
            </div>
          </div>

          {/* Right (6 cols): Crisp 2x2 Healthcare Environment Mosaic */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-3">
              {mosaicItems.map((item) => (
                <div
                  key={item.tag}
                  className="relative aspect-[16/11] overflow-hidden border border-slate-200 bg-slate-100 rounded-xs group"
                >
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/75 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-[#0F172A]/80 border-l-2 border-[#ED1C24] px-2 py-0.5">
                    {item.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================================
   OPTION C: Deep Navy Institutional Mandate Banner (High-Contrast Dark)
   - Flagship authority with clean sector cards and framed hospital photo.
   ========================================================================= */
function HeroOptionC() {
  return (
    <section
      className="relative bg-[#0B162C] text-white border-b-4 border-[#21409A] py-12 sm:py-16 overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    >
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#21409A]/30 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* Left (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2.5 text-[11px] font-mono font-bold tracking-[0.22em] text-slate-300 uppercase">
              <span className="w-5 h-0.5 bg-[#ED1C24]" aria-hidden="true" />
              <span>WHO WE SERVE &bull; NATIONWIDE COVERAGE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black uppercase tracking-tight leading-[1.04]">
              <span className="text-white">Equipping the facilities that</span>{' '}
              <span className="text-[#7EA2FF]">care for Uganda.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Hospitals, clinics, laboratories, and health partners across every region rely on FAB Medical Supplies Ltd. for vetted clinical equipment.
            </p>

            {/* 4 Sector Micro-Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              {SECTORS.map((s) => (
                <div
                  key={s.num}
                  className="bg-white/5 border border-white/10 px-3 py-2.5 rounded-xs text-left"
                >
                  <div className="text-[10px] font-mono font-bold text-[#ED1C24]">{s.num}</div>
                  <div className="text-xs font-bold text-white mt-0.5">{s.name}</div>
                  <div className="text-[10px] text-slate-400 truncate">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right (5 cols): Crisp Framed Hospital Photo */}
          <div className="lg:col-span-5">
            <div className="relative p-1.5 bg-white/10 border border-white/15 rounded-xs">
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                <img
                  src={mulagoHospitalImg}
                  alt="Major Ugandan healthcare institution served by FAB Medical Supplies"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B162C]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-white">
                  <span className="bg-[#0B162C]/90 border-l-2 border-[#ED1C24] px-2.5 py-1 font-bold">
                    KAMPALA &amp; UPCOUNTRY SUPPLY
                  </span>
                  <span className="text-slate-300 hidden sm:inline">4 CORE SECTORS</span>
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
   OPTION D: Full-Width Architectural Broadsheet Split + Sector Anchor Strip
   - Sharp 1px geometry, zero white-gradient feathering, clean bottom index bar.
   ========================================================================= */
function HeroOptionD() {
  return (
    <section className="bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left (7 cols) */}
          <div className="lg:col-span-7 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex flex-col justify-center">
            <div className="max-w-xl space-y-5">
              <div className="flex items-center space-x-2 text-[11px] font-mono font-bold tracking-[0.24em] text-[#ED1C24] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#ED1C24]" aria-hidden="true" />
                <span>WHO WE SERVE &bull; UGANDA</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black uppercase text-[#0F172A] tracking-tight leading-[1.03]">
                Equipping the facilities that{' '}
                <span className="text-[#21409A]">care for Uganda.</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Hospitals, clinics, diagnostic laboratories, and health partners depend on FAB for reliable procurement, importation, and biomedical servicing.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#preview-clinical-zones"
                  className="inline-flex items-center space-x-2 bg-[#21409A] hover:bg-[#0F172A] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xs transition-colors"
                >
                  <span>See Clinical Coverage</span>
                  <span aria-hidden="true">&darr;</span>
                </a>
                <a
                  href={WHATSAPP_INSTITUTIONAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 border border-slate-300 hover:border-[#0F172A] text-[#0F172A] text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xs transition-colors"
                >
                  <span>Request Institutional Quote</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right (5 cols): Full-Bleed Sharp-Edged Clinical Photo */}
          <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-[380px] border-t lg:border-t-0 lg:border-l border-slate-200 bg-slate-100">
            <img
              src={radiologyImg}
              alt="Hospital radiology and clinical diagnostic facility"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs border border-slate-200 px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#0F172A] flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>NATIONWIDE UGANDA DISPATCH</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom 4-Sector Architectural Index Strip */}
      <div className="bg-[#F8FAFC] border-t border-slate-200">
        <Container>
          <div className="py-3.5 grid grid-cols-2 md:grid-cols-4 gap-3 text-[11px] font-mono uppercase tracking-wider text-slate-600">
            {SECTORS.map((s) => (
              <div key={s.num} className="flex items-center space-x-2">
                <span className="font-black text-[#ED1C24]">{s.num}</span>
                <span>
                  <strong className="text-[#0F172A]">{s.name}</strong>
                </span>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}

/* =========================================================================
   OPTION E: Editorial Header + 3-Panel Framed Clinical Strip (Refined Upgrade)
   - Fixes the washed-out feathered ward image with 3 sharp, crisp framed panels.
   ========================================================================= */
function HeroOptionE() {
  const panels = [
    {
      img: mulagoHospitalImg,
      code: '01 / HOSPITALS & REFERRALS',
      caption: 'Turnkey surgical suites, ICU & wards',
    },
    {
      img: radiologyImg,
      code: '02 / DIAGNOSTICS & CLINICS',
      caption: 'Imaging suites & outpatient screening',
    },
    {
      img: referenceLabImg,
      code: '03 / LABORATORIES & NGOS',
      caption: 'Analytical systems & field readiness',
    },
  ];

  return (
    <section className="bg-white border-b border-slate-200 pt-10 sm:pt-12 pb-10">
      <Container>
        {/* Top Row: Split Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-end pb-7 border-b border-slate-200">
          <div className="lg:col-span-7 space-y-2">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono font-bold tracking-[0.22em] text-[#ED1C24] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#ED1C24]" aria-hidden="true" />
              <span>WHO WE SERVE &bull; UGANDA</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black uppercase text-[#0F172A] tracking-tight leading-[1.04]">
              Equipping the facilities that{' '}
              <span className="text-[#21409A]">care for Uganda.</span>
            </h1>
          </div>

          <div className="lg:col-span-5 lg:text-right space-y-2">
            <p className="text-sm text-slate-600 leading-relaxed">
              Hospitals, clinics, laboratories, and health partners rely on FAB for vetted medical equipment and biomedical support.
            </p>
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
              <span className="text-[#0F172A]">Hospitals</span>
              <span className="mx-2 text-[#ED1C24]">&bull;</span>
              <span className="text-[#0F172A]">Clinics</span>
              <span className="mx-2 text-[#ED1C24]">&bull;</span>
              <span className="text-[#0F172A]">Labs</span>
              <span className="mx-2 text-[#ED1C24]">&bull;</span>
              <span className="text-[#0F172A]">NGOs</span>
            </div>
          </div>
        </div>

        {/* Bottom Row: 3 Crisp Framed Clinical Panels (Zero Feathering) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
          {panels.map((p) => (
            <div
              key={p.code}
              className="border border-slate-200 bg-[#F8FAFC] rounded-xs overflow-hidden group"
            >
              <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                <img
                  src={p.img}
                  alt={p.caption}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="px-3.5 py-2.5 flex items-center justify-between border-t border-slate-200 bg-white">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#21409A]">
                  {p.code}
                </span>
                <span className="text-[11px] text-slate-500 truncate ml-2">{p.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* =========================================================================
   REALISTIC SECTION 2 CONTINUATION PREVIEW ("Four Core Clinical Zones")
   Shows how each Hero flows directly into Section 2 of WhoWeServe.jsx.
   ========================================================================= */
function ClinicalZonesPreview() {
  const zones = [
    { num: '01', title: 'Surgical & Acute Care', coverage: 'Operating Theatres, ICU & Resuscitation', img: operatingRoomImg },
    { num: '02', title: 'Diagnostics & Pathology', coverage: 'Radiology Suites, Ultrasound & Labs', img: controlSuiteImg },
    { num: '03', title: 'Inpatient & Maternity', coverage: 'Recovery Wards, Delivery Suites & Nursery', img: wardInteriorImg },
    { num: '04', title: 'Primary Care & Utilities', coverage: 'OPD Clinics, Sterilization & Waste', img: outpatientImg },
  ];

  return (
    <section id="preview-clinical-zones" className="py-12 bg-white border-b border-slate-200">
      <Container>
        <div className="max-w-2xl mb-8 space-y-1">
          <div className="flex items-center space-x-2 text-[11px] font-mono font-bold tracking-[0.25em] text-[#ED1C24] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#ED1C24]" aria-hidden="true" />
            <span>FACILITY COVERAGE (SECTION 2 PREVIEW)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight uppercase">
            Four Core Clinical Zones
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-t border-b border-slate-200 opacity-90 pointer-events-none select-none">
          {zones.map((z) => (
            <div key={z.num} className="p-5 space-y-3">
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img src={z.img} alt={z.title} className="w-full h-full object-cover" />
              </div>
              <div className="text-[11px] font-mono font-bold text-[#21409A]">{z.num}</div>
              <div className="text-sm font-black uppercase text-[#0F172A]">{z.title}</div>
              <div className="text-xs text-slate-500">{z.coverage}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const OPTIONS = [
  {
    id: 'a',
    shortLabel: 'Option A: Compact Header',
    title: 'Option A — Compact Architectural Masthead (Consistent with Products)',
    note: 'Matches the clean dot-grid + blue/red top rule from Products; brings Four Core Clinical Zones right above the fold.',
    node: <HeroOptionA />,
  },
  {
    id: 'b',
    shortLabel: 'Option B: 4-Photo Mosaic',
    title: 'Option B — 2-Column Dossier + 4-Facility Photo Mosaic',
    note: 'Clean split layout pairing editorial copy with a crisp 2x2 photo grid of hospitals, diagnostics, labs, and wards.',
    node: <HeroOptionB />,
  },
  {
    id: 'c',
    shortLabel: 'Option C: Navy Mandate',
    title: 'Option C — Deep Navy Institutional Mandate (High-Contrast Dark)',
    note: 'Authoritative deep-navy hero with 4 structured sector cards and a sharp framed hospital image.',
    node: <HeroOptionC />,
  },
  {
    id: 'd',
    shortLabel: 'Option D: Broadsheet Split',
    title: 'Option D — Architectural Broadsheet Split + Sector Strip',
    note: 'Clean 50/50 sharp-edged split with full-height radiology photo and a 4-sector bottom ribbon.',
    node: <HeroOptionD />,
  },
  {
    id: 'e',
    shortLabel: 'Option E: 3-Panel Strip',
    title: 'Option E — Editorial Header + 3-Panel Framed Clinical Strip',
    note: 'Replaces the washed-out feathered ward panorama with a split top header and 3 razor-sharp framed facility panels.',
    node: <HeroOptionE />,
  },
];

export default function WhoWeServeHeroTest() {
  const [selected, setSelected] = useState('a');
  const visible = selected === 'all' ? OPTIONS : OPTIONS.filter((o) => o.id === selected);

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-[#0F172A] pb-24">
      {/* Sticky Switcher Bar */}
      <div className="sticky top-0 z-50 bg-[#0F172A] text-white border-b border-slate-800 shadow-md">
        <Container>
          <div className="py-3 flex flex-col lg:flex-row items-center justify-between gap-3">
            <div className="flex items-center space-x-2.5">
              <span className="w-2 h-2 rounded-full bg-[#ED1C24] animate-pulse" aria-hidden="true" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-slate-200">
                WHO WE SERVE &bull; HERO REDESIGN LAB
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              {OPTIONS.map((o) => (
                <button
                  key={o.id}
                  type="button"
                  onClick={() => setSelected(o.id)}
                  className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-xs transition-all cursor-pointer ${
                    selected === o.id
                      ? 'bg-[#ED1C24] text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {o.shortLabel}
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

      {/* Render Selected Option(s) */}
      <div className={selected === 'all' ? 'space-y-16 pt-8' : ''}>
        {visible.map((o) => (
          <div key={o.id}>
            <div className="bg-slate-100 border-b border-slate-200 py-2.5">
              <Container>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-xs font-extrabold uppercase tracking-wide text-[#21409A]">
                    {o.title}
                  </span>
                  <span className="text-[11px] text-slate-500">{o.note}</span>
                </div>
              </Container>
            </div>

            {o.node}

            {selected !== 'all' && <ClinicalZonesPreview />}
          </div>
        ))}
      </div>
    </div>
  );
}
