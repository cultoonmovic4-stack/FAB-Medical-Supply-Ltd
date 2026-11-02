import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components';

const STAGES = [
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

/* =========================================================================
   VARIATION 4A: The Precision Hairline Track (Minimalist Architectural Timeline)
   - Consistent with Section 2 & 3.
   - Clean continuous top line with red active indicator ticks.
   - Generous breathing room, pure typography, zero box frames.
   ========================================================================= */
function Section4A() {
  return (
    <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
      <Container>
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16 space-y-1">
          <div className="flex items-center space-x-2 text-[11px] font-mono font-bold tracking-[0.25em] text-brand-red uppercase">
            <span className="w-2 h-2 rounded-full bg-brand-red" aria-hidden="true" />
            <span>OPERATIONAL PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight uppercase">
            From Source to Facility
          </h2>
          <p className="text-sm text-slate-500">
            A verified, accountable chain of custody from international manufacturing to patient bedside.
          </p>
        </div>

        {/* Continuous Process Track */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 relative">
          {/* Subtle connecting track line behind steps on desktop */}
          <div className="hidden lg:block absolute top-[11px] left-4 right-4 h-[1px] bg-slate-200 -z-0" />

          {STAGES.map((stage) => (
            <div key={stage.step} className="relative z-10 space-y-4">
              {/* Step indicator node */}
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 rounded-full bg-white border-2 border-brand-red flex items-center justify-center text-[10px] font-mono font-black text-brand-red">
                  {stage.step}
                </span>
                <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                  {stage.phase}
                </span>
              </div>

              <div className="space-y-1.5 pt-1">
                <h3 className="text-lg font-black text-[#0F172A] uppercase tracking-tight">
                  {stage.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* =========================================================================
   VARIATION 4B: The Open 4-Column Hairline Ledger
   - Hairline grid mirroring Section 2's structure.
   - Clean top-to-bottom cards with fine borders.
   ========================================================================= */
function Section4B() {
  return (
    <section className="bg-slate-50/50 py-16 sm:py-20 border-b border-slate-200">
      <Container>
        {/* Header */}
        <div className="max-w-2xl mb-12 space-y-1">
          <div className="flex items-center space-x-2 text-[11px] font-mono font-bold tracking-[0.25em] text-brand-red uppercase">
            <span className="w-2 h-2 rounded-full bg-brand-red" aria-hidden="true" />
            <span>SUPPLY CHAIN INTEGRITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight uppercase">
            From Source to Facility
          </h2>
          <p className="text-sm text-slate-500">
            Four stages of quality control ensuring every delivery arrives calibrated and intact.
          </p>
        </div>

        {/* 4 Open Hairline Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-t border-b border-slate-200 bg-white">
          {STAGES.map((stage) => (
            <div key={stage.step} className="p-6 sm:p-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-black text-brand-red">
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
  );
}

const VARIATIONS = [
  {
    id: '4a',
    label: '4A: The Precision Hairline Track (Recommended)',
    node: <Section4A />,
    note: 'Architectural horizontal timeline with delicate red nodes, clean phase tags, and 1-sentence explanations.',
  },
  {
    id: '4b',
    label: '4B: The Open 4-Column Hairline Ledger',
    node: <Section4B />,
    note: '4-column hairline quad mirroring the exact structure of Section 2. Symmetrical and crisp.',
  },
];

export default function WhoWeServeHeroTest() {
  const [selected, setSelected] = useState('4a');
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
                WHO WE SERVE &bull; SECTION 4 LAB (FROM SOURCE TO FACILITY)
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[...VARIATIONS.map((v) => ({ id: v.id, label: v.id.toUpperCase() })), { id: 'all', label: 'Compare Both' }].map((b) => (
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
