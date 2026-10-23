import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

// Authentic clinical assets
import heroPhotoImg from '../assets/service-hero-photo.webp';
import procurementImg from '../assets/service-procurement.jpg';
import marketingImg from '../assets/service-marketing.jpg';
import deliveryImg from '../assets/service-delivery.jpg';
import repairImg from '../assets/service-repair.jpg';

/**
 * Services Page — FAB Medical Supplies Ltd.
 * 
 * Strict architectural broadsheet layout:
 * 1. Hero: Minimalist 2-column broadsheet with punchy copy, hairline micro-workflow ledger, and framed clinical photo.
 * 2. Core Capabilities: 2x2 architectural grid with high-visibility solid interactive action buttons.
 * 3. Institutional Service Boundary: Hairline clarification ledger note.
 * (Redundant pre-footer contact block removed to prevent duplication of master footer).
 */
export default function Services() {
  const coreServices = [
    {
      num: '01',
      title: 'PROCUREMENT & IMPORTATION',
      tag: 'GLOBAL SOURCING',
      description:
        'Direct sourcing and regulatory importation of verified medical machinery, diagnostic instruments, and reagents from certified international manufacturers.',
      highlights: ['Authorized Global Manufacturers', 'Cold-Chain & Regulatory Compliance', 'Customs Clearance & Verification'],
      image: procurementImg,
      alt: 'International cargo container vessel and air freight representing medical supply importation',
      actionText: 'INQUIRE SOURCING',
      actionHref: `https://wa.me/256704757991?text=${encodeURIComponent(
        'Hello FAB Medical Supplies Ltd., I am inquiring about medical equipment procurement and importation.'
      )}`,
      isExternal: true,
    },
    {
      num: '02',
      title: 'MARKETING & SALES',
      tag: 'FACILITY DEPLOYMENT',
      description:
        'Comprehensive supply consultations, clinical product demonstrations, and competitive supply contracts for hospitals, health centres, and private clinics across Uganda.',
      highlights: ['Hospitals & Diagnostic Centres', 'Clinics & Specialized Practices', 'Practitioner Wholesale Access'],
      image: marketingImg,
      alt: 'Advanced patient monitors and clinical machinery supplied to healthcare facilities',
      actionText: 'VIEW PRODUCT CATALOG',
      actionHref: '/products',
      isExternal: false,
    },
    {
      num: '03',
      title: 'DELIVERY & LOGISTICS',
      tag: 'NATIONWIDE DISPATCH',
      description:
        'Secure, rapid transit and professional handling of sensitive diagnostic equipment, hospital furniture, and temperature-controlled medical consumables.',
      highlights: ['Kampala Same-Day Dispatch', 'Upcountry Secure Ground Transit', 'Sterile Shock-Proof Packaging'],
      image: deliveryImg,
      alt: 'FAB Medical Supplies logistics personnel handling medical delivery cargo',
      actionText: 'COORDINATE DELIVERY',
      actionHref: `https://wa.me/256704757991?text=${encodeURIComponent(
        'Hello FAB Medical Supplies Ltd., I need to arrange delivery for medical equipment and supplies.'
      )}`,
      isExternal: true,
    },
    {
      num: '04',
      title: 'SERVICING & REPAIR',
      tag: 'BIOMEDICAL SUPPORT',
      description:
        'Routine preventive maintenance, diagnostic testing, precision calibration, and genuine spare parts replacement dedicated to equipment supplied through our network.',
      highlights: ['Preventive Calibration', 'Biomedical Diagnostic Testing', 'Genuine Manufacturer Spares'],
      image: repairImg,
      alt: 'Biomedical engineer calibrating and repairing electronic medical device components',
      actionText: 'REQUEST SERVICING',
      actionHref: `https://wa.me/256704757991?text=${encodeURIComponent(
        'Hello FAB Medical Supplies Ltd., I am requesting servicing or technical maintenance for supplied equipment.'
      )}`,
      isExternal: true,
    },
  ];

  return (
    <div className="bg-white min-h-screen text-[#0F172A] selection:bg-[#21409A] selection:text-white">
      {/* ========================================================
          1. HERO: MINIMALIST ARCHITECTURAL BROADSHEET
          ======================================================== */}
      <section
        className="relative bg-[#F8FAFC] border-b border-slate-300 pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20"
        aria-labelledby="services-hero-heading"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column (Col 7): Concise Headline & Architectural Ledger */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left" data-aos="fade-right" data-aos-duration="800">
              {/* Eyebrow */}
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-[11px] font-mono font-bold tracking-[0.25em] text-[#ED1C24] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#ED1C24]" aria-hidden="true" />
                <span>SERVICES &amp; CAPABILITIES</span>
              </div>

              {/* Main Heading */}
              <h1
                id="services-hero-heading"
                className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#0F172A] tracking-tight uppercase leading-[1.06] text-center lg:text-left"
              >
                CLINICAL SUPPLY &amp; <br />
                <span className="text-[#21409A]">TECHNICAL SUPPORT</span>
              </h1>

              {/* Punchy Minimal Description */}
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                End-to-end medical supply chain solutions across Uganda — from international procurement and
                distribution to on-site clinical servicing and calibration.
              </p>

              {/* Architectural Micro-Workflow Strip */}
              <div className="pt-2 text-center lg:text-left">
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-2 text-center lg:text-left">
                  OPERATIONAL LIFECYCLE
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 border border-slate-300 bg-white divide-x divide-y sm:divide-y-0 divide-slate-200">
                  <div className="p-3">
                    <span className="text-[10px] font-mono font-bold text-[#ED1C24] block">01</span>
                    <span className="text-[11px] font-mono font-bold text-[#0F172A] tracking-wide uppercase block mt-0.5">
                      PROCUREMENT
                    </span>
                  </div>
                  <div className="p-3">
                    <span className="text-[10px] font-mono font-bold text-[#ED1C24] block">02</span>
                    <span className="text-[11px] font-mono font-bold text-[#0F172A] tracking-wide uppercase block mt-0.5">
                      DISTRIBUTION
                    </span>
                  </div>
                  <div className="p-3">
                    <span className="text-[10px] font-mono font-bold text-[#ED1C24] block">03</span>
                    <span className="text-[11px] font-mono font-bold text-[#0F172A] tracking-wide uppercase block mt-0.5">
                      LOGISTICS
                    </span>
                  </div>
                  <div className="p-3">
                    <span className="text-[10px] font-mono font-bold text-[#ED1C24] block">04</span>
                    <span className="text-[11px] font-mono font-bold text-[#0F172A] tracking-wide uppercase block mt-0.5">
                      SERVICING
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
                    alt="Clinical biomedical patient monitoring system in modern hospital facility"
                    className="w-full h-full object-cover object-center block"
                    width="768"
                    height="576"
                    fetchpriority="high"
                    loading="eager"
                  />
                  <div className="absolute top-2 left-2 bg-[#0F172A]/90 text-white font-mono text-[9px] px-2 py-0.5 uppercase tracking-widest">
                    FIG. 04 — CLINICAL HARDWARE
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-slate-200 pt-2.5 mt-2 text-[10px] font-mono uppercase tracking-wider text-slate-500">
                  <span>BIOMEDICAL CALIBRATION • KAMPALA</span>
                  <span className="text-[#21409A] font-bold">VERIFIED</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          2. CORE FUNCTIONS: 2x2 ARCHITECTURAL BROADSHEET
          ======================================================== */}
      <section
        className="py-14 sm:py-18 lg:py-24 bg-white border-b border-slate-300"
        aria-labelledby="core-services-heading"
      >
        <Container>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12 border-b border-slate-200 pb-6 text-center md:text-left">
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start space-x-2 text-[11px] font-mono font-bold tracking-[0.22em] text-[#ED1C24] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#ED1C24]" aria-hidden="true" />
                <span>CORE PILLARS</span>
              </div>
              <h2
                id="core-services-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight uppercase text-center md:text-left"
              >
                OUR SERVICES &amp; FUNCTIONS
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto md:mx-0 font-mono text-center md:text-right">
              // Direct supply chain, quality deployment, and operational maintenance for healthcare facilities.
            </p>
          </div>

          {/* 2x2 Architectural Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {coreServices.map((service, idx) => (
              <article
                key={service.num}
                className="border border-slate-300 bg-white hover:border-[#21409A] transition-colors duration-200 flex flex-col justify-between"
                data-aos="fade-up"
                data-aos-duration="850"
                data-aos-delay={idx * 100}
              >
                {/* Image Section with Technical Ratio & Corner Label */}
                <div className="relative aspect-[16/9] bg-slate-100 overflow-hidden border-b border-slate-200">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    width="600"
                    height="338"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#0F172A]/90 text-white font-mono text-[9px] px-2.5 py-1 tracking-widest uppercase">
                    {service.tag}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/95 border border-slate-300 text-[#21409A] font-mono font-bold text-xs px-2.5 py-0.5">
                    {service.num}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-lg sm:text-xl font-black font-mono tracking-tight text-[#0F172A] uppercase">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      {service.description}
                    </p>

                    {/* Architectural Checklist Ledger */}
                    <div className="pt-2 border-t border-slate-100 space-y-1.5">
                      {service.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-center space-x-2 text-[11px] sm:text-xs text-slate-700 font-mono">
                          <span className="w-1.5 h-1.5 bg-[#ED1C24]" aria-hidden="true" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* High-Visibility Action Button */}
                  <div className="pt-2">
                    {service.isExternal ? (
                      <a
                        href={service.actionHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#21409A] hover:bg-[#172e70] text-white text-xs font-mono font-bold uppercase tracking-wider py-3 px-4 inline-flex items-center justify-between transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#21409A] focus:ring-offset-2"
                      >
                        <span>{service.actionText}</span>
                        <span aria-hidden="true">→</span>
                      </a>
                    ) : (
                      <Link
                        to={service.actionHref}
                        className="w-full bg-[#21409A] hover:bg-[#172e70] text-white text-xs font-mono font-bold uppercase tracking-wider py-3 px-4 inline-flex items-center justify-between transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#21409A] focus:ring-offset-2"
                      >
                        <span>{service.actionText}</span>
                        <span aria-hidden="true">→</span>
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================
          3. SERVICE BOUNDARY / OPERATIONAL DISCLAIMER
          ======================================================== */}
      <section
        className="py-10 bg-[#F8FAFC] border-b border-slate-300"
        aria-labelledby="service-boundary-heading"
      >
        <Container>
          <div
            className="border-l-4 border-[#ED1C24] border-y border-r border-slate-300 bg-white p-6 sm:p-7 shadow-sm"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 text-center lg:text-left">
              <div className="space-y-1.5">
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#ED1C24]">
                  <span className="w-1.5 h-1.5 bg-[#ED1C24]" aria-hidden="true" />
                  <h3 id="service-boundary-heading">OPERATIONAL SCOPE &amp; BOUNDARY</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto lg:mx-0">
                  FAB Medical Supplies Ltd. operates as a certified medical equipment procurement and supply partner.
                  We do not manufacture equipment. Engineering servicing, calibration, and repair are dedicated exclusively
                  to equipment supplied through our authorized network.
                </p>
              </div>

              <div className="flex-shrink-0 w-full sm:w-auto flex justify-center lg:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center space-x-2 bg-[#0F172A] hover:bg-[#21409A] text-white text-xs font-mono font-bold uppercase tracking-wider px-6 py-3.5 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0F172A] w-full sm:w-auto text-center"
                >
                  <span>TECHNICAL INQUIRY</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
