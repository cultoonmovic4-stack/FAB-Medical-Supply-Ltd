import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

// Authentic project photography (zero AI generation)
import mulagoHospitalImg from '../assets/new images/mulago hospital.jpg';
import labsImg from '../assets/medical laboratory.jpg';
import healthCentresImg from '../assets/who-we-serve-medcare.jpg';
import ngosImg from '../assets/ngos.jpg';
import patientsImg from '../assets/who-we-serve-patient.jpg';

const SECTORS = [
  {
    num: '01',
    title: 'Hospitals & Referral Centres',
    tagline: 'Advanced solutions for better care.',
    image: mulagoHospitalImg,
    alt: 'Mulago National Referral Hospital and tertiary healthcare infrastructure in Uganda',
  },
  {
    num: '02',
    title: 'Diagnostic Laboratories',
    tagline: 'Precision tools for accurate results.',
    image: labsImg,
    alt: 'Clinical laboratory diagnostic reference setting equipped with optical microscope',
  },
  {
    num: '03',
    title: 'Health Centres & Clinics',
    tagline: 'Quality care, closer to communities.',
    image: healthCentresImg,
    alt: 'Community health centre and outpatient facility in Uganda',
  },
  {
    num: '04',
    title: 'NGOs & Health Programs',
    tagline: 'Supporting healthier communities.',
    image: ngosImg,
    alt: 'NGO public health outreach and community medical mission across Uganda',
  },
  {
    num: '05',
    title: 'Individual Patients',
    tagline: 'Care for every individual.',
    image: patientsImg,
    alt: 'Compassionate individual patient recovery and home care support in Uganda',
  },
];

export default function HomeSection4Test() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A] antialiased">
      {/* Testing Console */}
      <aside aria-label="Testing Console" className="sticky top-0 z-50 bg-[#0F172A] text-white border-b border-slate-800 shadow-md">
        <Container>
          <div className="py-2.5 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#ED1C24] animate-pulse" />
              <span className="font-bold uppercase tracking-wider text-white">
                SECTION 4: COMPLETE HEALTHCARE ECOSYSTEM
              </span>
            </div>
            <span className="text-slate-400 text-[11px] hidden sm:inline">
              RIGHT-FACING SLANTS (/) &bull; NO WHITE SEPARATING LINES &bull; VERTICAL MOBILE &bull; RED ACCENTS
            </span>
          </div>
        </Container>
      </aside>

      {/* THE COMPLETE HEALTHCARE ECOSYSTEM SCENE */}
      <CompleteHealthcareEcosystemScene />

      {/* Page Flow Footer */}
      <div className="border-t border-slate-200 py-10 bg-white text-center">
        <Container>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#21409A] font-bold block mb-1">
            HOME PAGE FLOW CONTEXT
          </span>
          <p className="text-xs font-mono text-slate-400">
            Preceded by Section 3: Core Equipment Scene &bull; Followed by Global Footer
          </p>
        </Container>
      </div>
    </div>
  );
}

/* =========================================================================
   THE COMPLETE HEALTHCARE ECOSYSTEM SCENE
   - Full-bleed edge-to-edge cinematic composition
   - Upper Composition: Hospital building in daylight + African healthcare professional
   - Oversized editorial serif headline with red script italic "Across Uganda"
   - Top-right Uganda map outline + "BETTER HEALTH. A HEALTHIER UGANDA."
   - Lower Composition (Desktop):
       * 5 full-width interlocking slanted photographic panels
       * Seams facing RIGHT (/) - bottom left to top right
       * ZERO white separating lines in between
   - Lower Composition (Mobile):
       * 100% VERTICAL stacked layout (one full-width photographic sector after another)
   - Closing: Deep navy sweeping curved wave with fine red hairline
   ========================================================================= */
export function CompleteHealthcareEcosystemScene() {
  return (
    <section
      className="relative w-full overflow-hidden bg-white select-none"
      aria-labelledby="ecosystem-heading"
    >
      {/* ========================================================
          1. UPPER VISUAL COMPOSITION (HOSPITAL ARCHITECTURE + DOCTOR)
          ======================================================== */}
      <div className="relative w-full min-h-[460px] sm:min-h-[500px] lg:min-h-[540px] flex flex-col justify-between pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 overflow-hidden">
        
        {/* Hospital Architecture Anchored Exclusively to the Right Side (Left Side is 100% Pure Solid White) */}
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 lg:w-[50%] pointer-events-none select-none overflow-hidden">
          <img
            src={mulagoHospitalImg}
            alt="Mulago National Referral Hospital"
            className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.02]"
            loading="eager"
          />
          {/* Soft Left Feathering from pure white into the hospital image */}
          <div className="absolute inset-y-0 left-0 w-24 sm:w-36 lg:w-48 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
          {/* Mobile Overlay: Ensures 100% text contrast on phones */}
          <div className="md:hidden absolute inset-0 bg-white/90" />
        </div>

        {/* Text Positioned at the Far Left with Clean Edge Padding */}
        <div className="relative z-20 w-full px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="max-w-xl space-y-5">
            
            {/* Eyebrow with Red Accent Bar */}
            <div className="flex items-center space-x-2.5 text-xs font-mono font-bold tracking-[0.2em] text-[#0A192F] uppercase">
              <span className="w-8 h-[2.5px] bg-[#ED1C24] rounded-full" aria-hidden="true" />
              <span>SECTORS SERVED</span>
            </div>

            {/* Main Headline (Oversized Editorial Serif with Red Italic Accent) */}
            <h2
              id="ecosystem-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[58px] font-serif font-black tracking-tight text-[#0A192F] leading-[1.08]"
            >
              Supporting Healthcare <br className="hidden sm:inline" />
              <span className="italic font-serif font-bold text-[#ED1C24]">Across Uganda</span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed max-w-lg font-normal">
              From national and private hospitals to diagnostic laboratories, health centres, NGOs and individual patients, we supply medical equipment across diverse healthcare settings.
            </p>

            {/* Refined Dark-Blue Call-to-Action Pill Button */}
            <div className="pt-2">
              <Link
                to="/who-we-serve"
                className="group inline-flex items-center space-x-2.5 bg-[#0B1938] hover:bg-[#162850] text-white font-mono font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span>EXPLORE OUR SECTORS</span>
                <span
                  className="text-[#ED1C24] text-sm transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          2. THE FIVE HEALTHCARE SECTORS
          ======================================================== */}
      <div className="relative z-20 w-full">
        
        {/* ========================================================
            DESKTOP (lg:): 5 FULL-WIDTH INTERLOCKING SLANTED PANELS
            - Seams facing RIGHT (/) from bottom-left to top-right
            - ZERO separating lines in between (seamless photo transition)
            ======================================================== */}
        <div className="hidden lg:flex items-stretch h-[360px] xl:h-[400px] w-full overflow-hidden bg-slate-950">
          {SECTORS.map((sector, idx) => {
            // Right-facing slant (/):
            // Bottom-left starts at 0, top-left is shifted right by 50px (50px 0)
            // Bottom-right is shifted left by 50px, top-right is at 100% (100% 0)
            // Adjacent panels overlap by exactly 50px with -ml-[50px] so they touch seamlessly with ZERO gap or white line!
            const slantOffset = 50;

            let clipStyle = {};
            if (idx === 0) {
              // First panel: Left edge is straight (0 0 and 0 100%), right edge slants right (100% 0 down to calc(100% - 50px) 100%)
              clipStyle = {
                clipPath: `polygon(0 0, 100% 0, calc(100% - ${slantOffset}px) 100%, 0 100%)`,
              };
            } else if (idx === SECTORS.length - 1) {
              // Last panel: Left edge slants right (50px 0 down to 0 100%), right edge is straight (100% 0 and 100% 100%)
              clipStyle = {
                clipPath: `polygon(${slantOffset}px 0, 100% 0, 100% 100%, 0 100%)`,
              };
            } else {
              // Middle panels: Both left and right edges slant right (/)
              clipStyle = {
                clipPath: `polygon(${slantOffset}px 0, 100% 0, calc(100% - ${slantOffset}px) 100%, 0 100%)`,
              };
            }

            return (
              <Link
                key={sector.num}
                to="/who-we-serve"
                style={clipStyle}
                className={`flex-1 relative overflow-hidden group cursor-pointer transition-all duration-500 bg-slate-900 ${
                  idx > 0 ? '-ml-[50px]' : ''
                }`}
              >
                {/* 100% Clear Authentic Photograph (ZERO white separator line) */}
                <img
                  src={sector.image}
                  alt={sector.alt}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 opacity-85 group-hover:opacity-100"
                />

                {/* Legibility Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A101D] via-[#0A101D]/45 to-transparent transition-opacity duration-300 group-hover:via-[#0A101D]/30" />

                {/* Content Overlay */}
                <div className="relative z-20 h-full flex flex-col justify-end p-6 xl:p-8 space-y-2 select-none">
                  
                  {/* Number in Brand Red with trailing dash */}
                  <div className="text-base xl:text-lg font-mono font-black text-[#ED1C24] tracking-wider flex items-center space-x-1.5">
                    <span>{sector.num}</span>
                    <span className="w-5 h-[1.5px] bg-[#ED1C24]" />
                  </div>

                  {/* Sector Title in Bold White */}
                  <h3 className="text-lg xl:text-xl font-bold uppercase text-white tracking-tight leading-snug group-hover:text-slate-100 transition-colors">
                    {sector.title}
                  </h3>

                  {/* Supporting Description */}
                  <p className="text-xs text-slate-300 leading-relaxed font-normal line-clamp-2">
                    {sector.tagline}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* ========================================================
            MOBILE (< lg): 100% VERTICAL STACK (NOT HORIZONTAL!)
            ======================================================== */}
        <div className="lg:hidden flex flex-col divide-y divide-slate-800 bg-slate-950">
          {SECTORS.map((sector) => (
            <Link
              key={sector.num}
              to="/who-we-serve"
              className="relative w-full h-[220px] sm:h-[260px] overflow-hidden flex flex-col justify-end p-6 bg-slate-900 group"
            >
              {/* Full-Width Authentic Photograph */}
              <img
                src={sector.image}
                alt={sector.alt}
                className="absolute inset-0 w-full h-full object-cover object-center opacity-75 group-hover:opacity-90 transition-opacity"
              />

              {/* Gradient for 100% Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A101D] via-[#0A101D]/65 to-transparent" />

              {/* Content Overlay */}
              <div className="relative z-10 space-y-1.5">
                <div className="flex items-center space-x-2 text-base font-mono font-black text-[#ED1C24]">
                  <span>{sector.num}</span>
                  <span className="w-6 h-[2px] bg-[#ED1C24]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold uppercase text-white tracking-tight leading-tight">
                  {sector.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                  {sector.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>

      {/* ========================================================
          3. CLOSING COMPOSITION (SWEEPING NAVY CURVE + RED HAIRLINE)
          ======================================================== */}
      <div className="relative w-full overflow-hidden leading-none bg-[#0B1938] -mt-1">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 lg:h-20 block bg-slate-950"
          preserveAspectRatio="none"
        >
          {/* Fine Brand-Red Curved Line following the boundary */}
          <path
            d="M0 45 C380 85 1060 5 1440 45 L1440 49 C1060 9 380 89 0 49 Z"
            fill="#ED1C24"
          />
          {/* Deep Navy-Blue Sweeping Curved Boundary */}
          <path
            d="M0 47 C380 87 1060 7 1440 47 L1440 90 L0 90 Z"
            fill="#0B1938"
          />
        </svg>

        {/* Central Closing Statement inside Deep Navy Base */}
        <div className="bg-[#0B1938] py-5 sm:py-6 text-center border-t border-slate-900/40">
          <Container>
            <p className="text-xs sm:text-sm font-mono font-bold tracking-[0.25em] text-white uppercase">
              BETTER HEALTH. <span className="text-[#ED1C24]">A HEALTHIER UGANDA.</span>
            </p>
          </Container>
        </div>
      </div>
    </section>
  );
}
