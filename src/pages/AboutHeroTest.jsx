import React, { useState } from 'react';
import { Container } from '../components';

// Authentic "new images" assets (optimized .webp in src/assets/about/)
import heroMicroscopeDeskImg from '../assets/about/about-hero-microscope.webp'; // scientific-microscope-laboratory-desk-with-researching-instruments.jpg
import companyControlSuiteImg from '../assets/about/about-company-control-suite.webp'; // modern clinical environment.jpg
import companyWardInteriorImg from '../assets/about/about-company-ward-interior.webp'; // hospital-room-interior.jpg
import theatreDragerImg from '../assets/about/about-area-theatre-drager.webp'; // many-kind-medical-equipment-manage-surgeon-start-operations-operating-room.jpg
import inpatientCurtainBedsImg from '../assets/about/about-who-inpatient-beds.webp'; // general ward.jpg
import labBiosafetyImg from '../assets/about/about-area-lab-bio.webp'; // biosafety cabinet.jpg
import radiologyMriImg from '../assets/about/about-who-radiology.webp'; // radiology.jpg
import preparedHospitalRoomImg from '../assets/about/raw-empty-hospital-room.webp'; // empty-hospital-room-with-nobody-it-having-single-bed.jpg

export default function AboutHeroTest() {
  const [selectedSet, setSelectedSet] = useState('set-a');

  const imageSets = [
    {
      id: 'set-a',
      badge: '2B-1 (APPLIED TO /about)',
      title: 'Set A: Lab Microscope Desk + Control Suite + Inpatient Ward Interior',
      subtitle: 'scientific-microscope-laboratory-desk • modern clinical environment • hospital-room-interior',
      leftImg: heroMicroscopeDeskImg,
      leftAlt: 'Scientific laboratory microscope desk with diagnostic research instruments',
      centerImg: companyControlSuiteImg,
      centerAlt: 'Modern clinical diagnostic imaging and hybrid surgical control suite',
      rightImg: companyWardInteriorImg,
      rightAlt: 'Hospital inpatient recovery ward room equipped with clinical beds',
    },
    {
      id: 'set-b',
      badge: '2B-1 (NEW IMAGES SET B)',
      title: 'Set B: Lab Microscope Desk + Dräger Surgical Theatre + General Ward Curtains',
      subtitle: 'scientific-microscope-laboratory-desk • many-kind-medical-equipment • general ward',
      leftImg: heroMicroscopeDeskImg,
      leftAlt: 'Scientific laboratory microscope desk with diagnostic research instruments',
      centerImg: theatreDragerImg,
      centerAlt: 'Dräger surgical theatre anesthesia workstation and sterile surgical instruments table',
      rightImg: inpatientCurtainBedsImg,
      rightAlt: 'Multi-bed hospital general ward with clinical beds and privacy curtains',
    },
    {
      id: 'set-c',
      badge: '2B-1 (NEW IMAGES SET C)',
      title: 'Set C: Biosafety Lab Cabinet + Radiology Imaging Suite + Monitored Recovery Room',
      subtitle: 'biosafety cabinet • radiology • empty-hospital-room-with-single-bed',
      leftImg: labBiosafetyImg,
      leftAlt: 'Clinical laboratory biosafety cabinet and analytical workstation',
      centerImg: radiologyMriImg,
      centerAlt: 'Hospital radiology diagnostic imaging scanner suite',
      rightImg: preparedHospitalRoomImg,
      rightAlt: 'Equipped hospital patient room with bed, vital signs monitor, and wheelchair',
    },
  ];

  const visibleSets =
    selectedSet === 'all'
      ? imageSets
      : imageSets.filter((s) => s.id === selectedSet);

  return (
    <div className="bg-white min-h-screen text-[#0F172A] selection:bg-[#21409A] selection:text-white pb-24">
      {/* Sticky Top Switcher Bar */}
      <div className="sticky top-0 z-50 bg-[#0F172A] text-white border-b border-slate-800 shadow-md">
        <Container>
          <div className="py-3 sm:py-3.5 flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center space-x-2.5">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-200">
                SCENE 2B-1 WITH NEW IMAGES &bull; LIVE PREVIEW
              </span>
            </div>

            {/* Switcher Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[
                { id: 'set-a', label: 'Set A (Live on /about)' },
                { id: 'set-b', label: 'Set B (Lab + Dräger + General Ward)' },
                { id: 'set-c', label: 'Set C (Biosafety + Radiology + Room)' },
                { id: 'all', label: 'Compare All 3 Sets' },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setSelectedSet(btn.id)}
                  className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded transition-all cursor-pointer ${
                    selectedSet === btn.id
                      ? 'bg-brand-red text-white shadow-sm'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <div className="space-y-20 mt-6">
        {visibleSets.map((set) => (
          <section key={set.id} className="relative">
            <Container>
              <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-2">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 bg-brand-red text-white text-[10px] font-bold uppercase tracking-wider rounded">
                    {set.badge}
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-wide text-[#0F172A]">
                    {set.title}
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 hidden sm:inline font-mono">
                  {set.subtitle}
                </span>
              </div>
            </Container>

            {/* Scene 2B-1 with New Images */}
            <div className="relative bg-white border-y border-slate-200 py-16 sm:py-20 lg:py-24 overflow-hidden">
              <Container className="relative z-10">
                {/* 1. Centered 2B Editorial Opening */}
                <div className="max-w-3xl mx-auto text-center space-y-4 mb-8 sm:mb-10">
                  <div className="inline-flex items-center space-x-2">
                    <span className="w-6 h-[2px] bg-brand-red" aria-hidden="true" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue">
                      THE COMPANY &bull; CORPORATE PROFILE
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-5xl lg:text-[46px] font-extrabold text-[#0F172A] tracking-tight leading-[1.08]">
                    Built to Strengthen Clinical Care{' '}
                    <span className="text-brand-blue">Across Uganda.</span>
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
                    From diagnostic sample benches to surgical control suites and recovery wards, we work alongside healthcare facilities to supply durable equipment matched to daily patient workload.
                  </p>
                </div>

                {/* 2. THE UNFRAMED SCENE CANVAS: Continuous Feathered Horizon + Spatial Callouts */}
                <div className="relative mt-4">
                  <div className="relative h-[340px] sm:h-[420px] lg:h-[470px] w-full select-none">
                    {/* Left Horizon Zone */}
                    <div
                      className="absolute inset-y-0 left-0 w-full sm:w-[50%] lg:w-[38%] overflow-hidden"
                      style={{
                        clipPath: 'polygon(0% 0%, 100% 0%, 84% 100%, 0% 100%)',
                      }}
                    >
                      <img
                        src={set.leftImg}
                        alt={set.leftAlt}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    {/* Center Horizon Zone */}
                    <div
                      className="hidden lg:block absolute inset-y-0 left-[32.5%] w-[39%] overflow-hidden"
                      style={{
                        clipPath: 'polygon(15.6% 0%, 100% 0%, 84.4% 100%, 0% 100%)',
                      }}
                    >
                      <img
                        src={set.centerImg}
                        alt={set.centerAlt}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    {/* Right Horizon Zone */}
                    <div
                      className="hidden sm:block absolute inset-y-0 right-0 w-[52%] lg:left-[66%] lg:w-[34%] overflow-hidden"
                      style={{
                        clipPath: 'polygon(17.9% 0%, 100% 0%, 100% 100%, 0% 100%)',
                      }}
                    >
                      <img
                        src={set.rightImg}
                        alt={set.rightAlt}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    {/* Top, Bottom, Left & Right Atmospheric Feathering Gradients */}
                    <div
                      className="absolute inset-x-0 top-0 h-24 sm:h-28 bg-gradient-to-b from-white via-white/75 to-transparent pointer-events-none"
                      aria-hidden="true"
                    />
                    <div
                      className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-white via-white/85 to-transparent pointer-events-none"
                      aria-hidden="true"
                    />
                    <div
                      className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/70 to-transparent pointer-events-none"
                      aria-hidden="true"
                    />
                    <div
                      className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/70 to-transparent pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* Architectural Blueprint Vector Lines & Spatial Target Nodes (Desktop) */}
                    <svg
                      className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-10"
                      viewBox="0 0 1200 470"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M 180 210 Q 600 130 1020 205"
                        stroke="#21409A"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        opacity="0.45"
                      />

                      {/* Node 01 Pin */}
                      <circle cx="180" cy="210" r="5" fill="#ED1C24" />
                      <circle cx="180" cy="210" r="12" stroke="#ED1C24" strokeWidth="1.2" opacity="0.5" />
                      <path d="M 180 210 L 180 335 L 205 335" stroke="#0F172A" strokeWidth="1.2" />

                      {/* Node 02 Pin */}
                      <circle cx="560" cy="172" r="5" fill="#21409A" />
                      <circle cx="560" cy="172" r="12" stroke="#21409A" strokeWidth="1.2" opacity="0.5" />
                      <path d="M 560 172 L 560 82 L 585 82" stroke="#0F172A" strokeWidth="1.2" />

                      {/* Node 03 Pin */}
                      <circle cx="1020" cy="205" r="5" fill="#ED1C24" />
                      <circle cx="1020" cy="205" r="12" stroke="#ED1C24" strokeWidth="1.2" opacity="0.5" />
                      <path d="M 1020 205 L 1020 320 L 990 320" stroke="#0F172A" strokeWidth="1.2" />
                    </svg>

                    {/* SPATIAL CALLOUT 02 */}
                    <div className="hidden lg:block absolute top-6 left-[49.5%] z-20 max-w-[310px]">
                      <div className="bg-white/90 backdrop-blur-md px-4 py-3 rounded-lg shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
                        <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-blue">
                          02 &mdash; Uninterrupted Supply Continuity
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed mt-1">
                          Reliable stock continuity for diagnostic reagents, test kits, and surgical consumables so clinical operations never stall.
                        </p>
                      </div>
                    </div>

                    {/* SPATIAL CALLOUT 01 */}
                    <div className="hidden lg:block absolute bottom-4 left-[17.5%] z-20 max-w-[310px]">
                      <div className="bg-white/95 backdrop-blur-md px-4 py-3 rounded-lg shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
                        <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-red">
                          01 &mdash; Vetted Clinical Suitability
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed mt-1">
                          Diagnostic and clinical systems selected for accuracy, durability, and straightforward daily operation by medical staff.
                        </p>
                      </div>
                    </div>

                    {/* SPATIAL CALLOUT 03 */}
                    <div className="hidden lg:block absolute bottom-6 right-[18%] z-20 max-w-[310px] text-right">
                      <div className="bg-white/95 backdrop-blur-md px-4 py-3 rounded-lg shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
                        <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-red">
                          03 &mdash; Technical Accountability
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed mt-1">
                          Post-handover preventative maintenance, calibration, and responsive biomedical repair dedicated to supplied equipment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
