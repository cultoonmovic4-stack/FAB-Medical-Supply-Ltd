import React, { useState } from 'react';
import { Container } from '../components';
import { products } from '../data/products';

const TEST_IDS = [
  'vital-signs-monitor',
  'surgical-instruments',
  'surgical-procedure-kit',
  'surgical-instrument-sterilization-tray',
  'ct-scanner',
  'patient-monitors-theatre',
];

const testProducts = TEST_IDS.map((id) => products.find((p) => p.id === id)).filter(Boolean);

function getDept(product) {
  return product.categoryName?.split('(')[0]?.trim() || product.categoryName;
}

/* =========================================================================
   OPTION 1: Vertical Full-Width Cards (Crisp Uncropped Equipment Stage)
   - Large full-width top stage (h-56) with minimal padding (p-2) and object-contain.
   - Zero cropping of tall or wide equipment photos; ~3.5x larger than current 76px box.
   ========================================================================= */
function Option1VerticalContained({ items }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {items.map((product) => (
        <article
          key={product.id}
          className="group bg-white border border-slate-200 hover:border-[#21409A] transition-all rounded-xs overflow-hidden shadow-xs"
        >
          {/* Large Top Image Stage */}
          <div className="w-full h-56 bg-[#F8FAFC] border-b border-slate-100 p-2.5 flex items-center justify-center relative">
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute top-2.5 right-2.5 bg-white/95 border border-slate-200 px-2 py-0.5 text-[10px] font-mono font-semibold text-emerald-700 rounded-xs">
              In Stock
            </span>
          </div>

          {/* Info & Action Footer */}
          <div className="p-4 space-y-3">
            <div className="space-y-1">
              <div className="flex items-center space-x-1.5 text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#21409A]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
                <span>{getDept(product)}</span>
              </div>
              <h3 className="font-bold text-[#0F172A] text-base leading-snug tracking-tight">
                {product.name}
              </h3>
              {product.summary && (
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {product.summary}
                </p>
              )}
            </div>

            <div className="pt-1">
              <span className="w-full inline-flex items-center justify-center space-x-1.5 px-4 py-2.5 bg-[#21409A] text-white text-[11px] font-mono font-bold uppercase tracking-wider rounded-xs">
                <span>VIEW DETAILS</span>
                <span>&rarr;</span>
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

/* =========================================================================
   OPTION 2: 2-Column Mobile Grid (Modern E-Commerce Catalogue)
   - Two vertical cards side-by-side (grid-cols-2 gap-3).
   - Much larger square photo (~160px+) + fast 4-items-per-screen scanning.
   ========================================================================= */
function Option2TwoColumnGrid({ items }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((product) => (
        <article
          key={product.id}
          className="group bg-white border border-slate-200 hover:border-[#21409A] transition-all rounded-xs overflow-hidden shadow-xs flex flex-col justify-between"
        >
          <div>
            {/* Generous Square Image Box */}
            <div className="w-full aspect-square bg-[#F8FAFC] border-b border-slate-100 p-2 flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Compact Info */}
            <div className="p-2.5 space-y-1">
              <div className="flex items-center space-x-1 text-[9.5px] font-mono font-bold uppercase tracking-wider text-[#21409A]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24] flex-shrink-0" />
                <span className="truncate">{getDept(product)}</span>
              </div>
              <h3 className="font-bold text-[#0F172A] text-[13px] leading-snug tracking-tight line-clamp-2">
                {product.name}
              </h3>
            </div>
          </div>

          <div className="px-2.5 pb-2.5 pt-1">
            <span className="w-full inline-flex items-center justify-center space-x-1 px-2.5 py-2 bg-[#21409A] text-white text-[10px] font-mono font-bold uppercase tracking-wider rounded-xs">
              <span>VIEW DETAILS</span>
              <span>&rarr;</span>
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}

/* =========================================================================
   OPTION 3: Enlarged Horizontal Card (Balanced Split — 144px Image)
   - Keeps horizontal list layout but bumps image from 96px (76px inner) to 144px (p-1).
   - Almost 2x wider & 4x larger area while staying compact vertically.
   ========================================================================= */
function Option3LargerHorizontal({ items }) {
  return (
    <div className="grid grid-cols-1 gap-3.5">
      {items.map((product) => (
        <article
          key={product.id}
          className="group bg-white border border-slate-200 hover:border-[#21409A] transition-all p-2.5 flex items-stretch gap-3 shadow-xs rounded-xs"
        >
          {/* Enlarged 144px Square Thumbnail with tight padding */}
          <div className="w-36 h-36 flex-shrink-0 bg-[#F8FAFC] border border-slate-100 p-1.5 flex items-center justify-center overflow-hidden rounded-xs">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Right Info Column */}
          <div className="flex-grow flex flex-col justify-between min-w-0 py-1">
            <div className="space-y-1">
              <div className="flex items-center space-x-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#21409A]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24] flex-shrink-0" />
                <span className="truncate">{getDept(product)}</span>
              </div>
              <h3 className="font-bold text-[#0F172A] text-[14.5px] leading-snug tracking-tight line-clamp-3">
                {product.name}
              </h3>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#21409A] text-white text-[10.5px] font-mono font-bold uppercase tracking-wider rounded-xs">
                <span>VIEW DETAILS</span>
                <span>&rarr;</span>
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

/* =========================================================================
   OPTION 4: Full-Bleed Visual Showcase Card (Edge-to-Edge Cover)
   - Full-width 16:10 edge-to-edge image (object-cover) with floating department badge.
   - Maximum visual impact, though rectangular cutouts/tall units may crop slightly.
   ========================================================================= */
function Option4VerticalFullBleed({ items }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {items.map((product) => (
        <article
          key={product.id}
          className="group bg-white border border-slate-200 hover:border-[#21409A] transition-all rounded-xs overflow-hidden shadow-xs"
        >
          {/* Full-Bleed Edge-to-Edge Image */}
          <div className="w-full aspect-[16/10] bg-[#F8FAFC] relative overflow-hidden border-b border-slate-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs border border-slate-200 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#21409A] flex items-center space-x-1.5 rounded-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
              <span>{getDept(product)}</span>
            </div>
          </div>

          {/* Compact Footer Bar */}
          <div className="p-3.5 flex items-center justify-between gap-3">
            <h3 className="font-bold text-[#0F172A] text-[15px] leading-snug tracking-tight line-clamp-2">
              {product.name}
            </h3>
            <span className="flex-shrink-0 inline-flex items-center space-x-1 px-3 py-2 bg-[#21409A] text-white text-[10.5px] font-mono font-bold uppercase tracking-wider rounded-xs">
              <span>VIEW</span>
              <span>&rarr;</span>
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}

const OPTIONS = [
  {
    id: '1',
    shortLabel: 'Option 1: Vertical Large',
    title: 'Option 1 — Vertical Full-Width Card (Uncropped Stage)',
    note: 'Full-width h-56 top photo with object-contain. Every piece of equipment is crisp, large, and never cut off.',
    render: (items) => <Option1VerticalContained items={items} />,
  },
  {
    id: '2',
    shortLabel: 'Option 2: 2-Col Grid',
    title: 'Option 2 — 2-Column Mobile Grid (E-Commerce Store Style)',
    note: 'Two vertical cards per row with square photos. Much bigger images while showing 4 products per screen.',
    render: (items) => <Option2TwoColumnGrid items={items} />,
  },
  {
    id: '3',
    shortLabel: 'Option 3: Bigger Horizontal',
    title: 'Option 3 — Enlarged Horizontal Card (144px Thumbnail)',
    note: 'Keeps the horizontal row layout, nearly doubling the image size (96px → 144px) with tighter padding.',
    render: (items) => <Option3LargerHorizontal items={items} />,
  },
  {
    id: '4',
    shortLabel: 'Option 4: Full-Bleed Cover',
    title: 'Option 4 — Vertical Full-Bleed Card (Edge-to-Edge Cover)',
    note: 'Edge-to-edge 16:10 photo with floating department pill. Boldest photo presence (crops tall edges slightly).',
    render: (items) => <Option4VerticalFullBleed items={items} />,
  },
];

export default function ProductCardTest() {
  const [selected, setSelected] = useState('1');
  const [phoneFrame, setPhoneFrame] = useState(true);

  const visible = selected === 'all' ? OPTIONS : OPTIONS.filter((o) => o.id === selected);

  return (
    <div className="bg-[#F1F5F9] min-h-screen text-[#0F172A] pb-24">
      {/* Sticky Lab Switcher Bar */}
      <div className="sticky top-0 z-50 bg-[#0F172A] text-white border-b border-slate-800 shadow-md">
        <Container>
          <div className="py-3 flex flex-col lg:flex-row items-center justify-between gap-3">
            <div className="flex items-center space-x-2.5">
              <span className="w-2 h-2 rounded-full bg-[#ED1C24] animate-pulse" aria-hidden="true" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-slate-200">
                MOBILE PRODUCT CARD LAB
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
                Compare All 4
              </button>

              {/* Desktop Mobile-Frame Toggle */}
              <button
                type="button"
                onClick={() => setPhoneFrame((prev) => !prev)}
                className="hidden sm:inline-flex items-center space-x-1.5 text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1.5 rounded-xs bg-slate-700 hover:bg-slate-600 text-emerald-300 cursor-pointer ml-1"
                title="Toggle 390px phone viewport simulator"
              >
                <span>{phoneFrame ? '📱 Phone View (390px)' : '🖥 Full Width'}</span>
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Render Selected Option(s) */}
      <div className="py-8 space-y-12">
        {visible.map((o) => (
          <div key={o.id}>
            <Container>
              <div className="mb-4 bg-white border border-slate-200 px-4 py-3 rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-xs font-extrabold uppercase tracking-wide text-[#21409A]">
                  {o.title}
                </span>
                <span className="text-[11px] text-slate-500">{o.note}</span>
              </div>

              {/* Mobile Phone Simulator Wrapper on Desktop (natural full width on actual phone) */}
              <div
                className={
                  phoneFrame
                    ? 'mx-auto w-full max-w-[390px] bg-[#FAFCFE] sm:border-4 sm:border-[#0F172A] sm:rounded-2xl sm:shadow-xl overflow-hidden'
                    : 'w-full bg-[#FAFCFE] border border-slate-200 rounded-xs'
                }
              >
                {/* Simulated Mobile Header Bar when in Phone Frame */}
                {phoneFrame && (
                  <div className="hidden sm:flex items-center justify-between px-4 py-2.5 bg-white border-b border-slate-200 text-[10px] font-mono text-slate-500">
                    <span className="font-bold text-[#21409A]">FAB MEDICAL • MOBILE 390px</span>
                    <span>PRODUCTS CATALOGUE</span>
                  </div>
                )}

                <div className="p-3.5">{o.render(testProducts)}</div>
              </div>
            </Container>
          </div>
        ))}
      </div>
    </div>
  );
}
