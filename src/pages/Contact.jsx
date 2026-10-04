import React from 'react';
import Container from '../components/Container';
import { companyInfo } from '../data/company';

// Photographic asset: Approved Design 2 large healthcare environment composition
import contactReachUsDoctorImg from '../assets/contact-reach-us-doctor.webp';

/**
 * Contact Page — FAB Medical Supplies Ltd.
 * 
 * Implemented to precisely match the approved visual mockup:
 * - Section 1: Contact Introduction (Bold typography-led hero with "LET'S TALK.", 
 *   asymmetrical premise, subtle background geometric guidelines, and direct service guarantee)
 * - Section 2: Contact Channels (Editorial communication layout with Call, WhatsApp, 
 *   and Office Visit channels, each paired with authentic supporting imagery)
 */
export default function Contact() {
  const primaryPhone = companyInfo.phones[0].number;
  const whatsappPhone = companyInfo.phones[1].number;

  return (
    <div className="bg-white min-h-screen text-[#0F172A] selection:bg-[#21409A] selection:text-white">
      {/* ========================================================
          SECTION 1 — CONTACT INTRODUCTION
          ======================================================== */}
      <section
        className="relative bg-white pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-slate-200/80"
        aria-labelledby="contact-hero-heading"
      >
        {/* Subtle Background Geometric Architectural Guidelines */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
          <svg className="w-full h-full" viewBox="0 0 1440 400" fill="none" preserveAspectRatio="none">
            {/* Elegant Large Arc sweeping through the background */}
            <path
              d="M 1000 -100 C 1150 100, 1120 300, 1050 450"
              stroke="#E2E8F0"
              strokeWidth="1.2"
              fill="none"
            />
            {/* Thin diagonal guide crossing the right field */}
            <line x1="1050" y1="450" x2="1440" y2="210" stroke="#CBD5E1" strokeWidth="1.2" />
          </svg>
        </div>

        <Container className="relative max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Area: Eyebrow & Oversized Headline (Col 5) */}
            <div
              className="lg:col-span-5 space-y-4 z-10"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              {/* Eyebrow */}
              <div className="flex items-center space-x-2.5">
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#21409A] uppercase">
                  CONTACT / INQUIRIES
                </span>
                <span className="w-8 h-[1.5px] bg-[#21409A]" aria-hidden="true" />
              </div>

              {/* Oversized Headline - Responsive scaling */}
              <h1
                id="contact-hero-heading"
                className="text-5xl xs:text-6xl sm:text-7xl lg:text-[88px] xl:text-[96px] font-black tracking-tight leading-[0.92] uppercase select-none"
              >
                <span className="text-[#0F172A] block">LET&apos;S</span>
                <span className="text-[#21409A] block">TALK<span className="text-[#21409A]">.</span></span>
              </h1>
            </div>

            {/* Middle-Right Area: Asymmetrical Supporting Premise (Col 4) */}
            <div
              className="lg:col-span-4 space-y-3 z-10 lg:pl-4"
              data-aos="fade-left"
              data-aos-duration="900"
              data-aos-delay="150"
            >
              <div className="flex items-center space-x-2">
                <span className="w-6 h-[1.5px] bg-[#21409A]" aria-hidden="true" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#21409A]">
                  DIRECT ACCESS TO
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                FAB Medical <br />
                Supplies Ltd.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-md pt-1">
                Whether you&apos;re sourcing medical equipment, making an inquiry, or looking for assistance, 
                connect directly with our team.
              </p>

              {/* Mobile / Tablet Direct Support Guarantee */}
              <div className="flex lg:hidden items-center space-x-3 pt-3 border-t border-slate-200/80">
                <div className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-[#21409A] flex-shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.14em] text-slate-500 font-semibold">
                  REAL PEOPLE • DIRECT SUPPORT • FAST RESPONSE
                </span>
              </div>
            </div>

            {/* Far-Right Area: Vertical Service Guarantee (Col 3) */}
            <div
              className="lg:col-span-3 hidden lg:flex items-center justify-end z-10"
              data-aos="zoom-in"
              data-aos-duration="850"
              data-aos-delay="250"
            >
              <div className="border-l border-slate-200 pl-6 py-6 space-y-3">
                <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-[#21409A]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate-500 leading-relaxed font-semibold">
                  REAL PEOPLE. <br />
                  DIRECT SUPPORT. <br />
                  FAST RESPONSE.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          SECTION 2 — HOW DO YOU WANT TO REACH US?
          (Approved Design 2: Large Continuous Editorial Composition)
          ======================================================== */}
      <section
        className="relative bg-white border-b border-slate-200 overflow-hidden"
        aria-labelledby="contact-channels-heading"
      >
        {/* Background Full-Width Photographic Composition (Design 2) */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          {/* Natural Clinical Healthcare Photograph on Right Half */}
          <div className="absolute top-0 right-0 bottom-0 w-full lg:w-3/5 xl:w-[58%] overflow-hidden">
            <img
              src={contactReachUsDoctorImg}
              alt="Healthcare professional with digital tablet and stethoscope in a modern clinic environment"
              className="w-full h-full object-cover object-right-top lg:object-right opacity-90 lg:opacity-100"
              width="1920"
              height="1071"
              loading="lazy"
              decoding="async"
            />
            {/* Seamless Soft Fade Gradient: Preserves natural photography while transitioning to pure white on left */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(to right, #FFFFFF 0%, rgba(255, 255, 255, 0.95) 25%, rgba(255, 255, 255, 0.65) 50%, rgba(255, 255, 255, 0.15) 80%, transparent 100%),
                  linear-gradient(to bottom, rgba(255, 255, 255, 0.35) 0%, transparent 30%, rgba(255, 255, 255, 0.45) 100%)
                `,
              }}
              aria-hidden="true"
            />
          </div>

          {/* Solid White Base for Left Area */}
          <div className="hidden lg:block absolute top-0 left-0 bottom-0 w-2/5 bg-white" aria-hidden="true" />
        </div>

        {/* Foreground Content Container */}
        <Container className="relative z-10 max-w-7xl pt-14 pb-14 sm:pt-18 sm:pb-18 lg:pt-20 lg:pb-20">
          <div className="flex flex-col justify-between min-h-[500px] lg:min-h-[560px] xl:min-h-[600px]">
            {/* Upper Portion: Editorial Section Eyebrow & Oversized Heading */}
            <div
              className="max-w-xl xl:max-w-2xl"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              {/* Eyebrow: 02 — CONTACT */}
              <div className="flex items-center space-x-2.5 mb-5 sm:mb-6">
                <span className="text-xs sm:text-sm font-mono font-bold text-[#21409A]">02</span>
                <span className="w-5 h-[2px] bg-[#E11D48]" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.24em] text-[#0F172A] uppercase">
                  CONTACT
                </span>
              </div>

              {/* Dominant Editorial Heading */}
              <h2
                id="contact-channels-heading"
                className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[64px] font-black text-[#0F172A] tracking-tight uppercase leading-[0.98]"
              >
                HOW DO YOU <br />
                WANT TO <br />
                <span className="text-[#21409A]">REACH US?</span>
              </h2>
            </div>

            {/* Lower Portion: Integrated 3-Zone Contact Channels */}
            <div
              className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-10 border-t border-slate-200/90"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="150"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/90">
                {/* ---------------------------------------------------- */}
                {/* ZONE 01: CALL FAB */}
                {/* ---------------------------------------------------- */}
                <div className="py-6 md:py-0 md:pr-8 lg:pr-10 space-y-4 group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-mono font-bold text-[#21409A]">01</span>
                      <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#0F172A]">
                        CALL FAB
                      </span>
                    </div>
                    {/* Clean Outline Phone Icon */}
                    <div className="w-8 h-8 rounded-full bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#21409A] transition-colors group-hover:bg-[#21409A] group-hover:text-white">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <a
                      href={companyInfo.phones[0].link}
                      className="text-2xl sm:text-[28px] lg:text-3xl font-black font-mono text-[#0F172A] tracking-tight hover:text-[#21409A] transition-colors block leading-tight"
                      aria-label={`Call ${primaryPhone}`}
                    >
                      {primaryPhone}
                    </a>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mt-1">
                      Primary Phone
                    </span>
                  </div>

                  <div className="pt-1">
                    <a
                      href={companyInfo.phones[0].link}
                      className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#21409A] hover:text-[#0F172A] transition-all group/link"
                    >
                      <span className="border-b border-transparent group-hover/link:border-[#21409A] transition-all">CALL NOW</span>
                      <span className="transition-transform group-hover/link:translate-x-1" aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>

                {/* ---------------------------------------------------- */}
                {/* ZONE 02: MESSAGE FAB */}
                {/* ---------------------------------------------------- */}
                <div className="py-6 md:py-0 md:px-8 lg:px-10 space-y-4 group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-mono font-bold text-[#21409A]">02</span>
                      <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#0F172A]">
                        MESSAGE FAB
                      </span>
                    </div>
                    {/* Clean Outline WhatsApp / Message Icon */}
                    <div className="w-8 h-8 rounded-full bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#21409A] transition-colors group-hover:bg-[#21409A] group-hover:text-white">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <a
                      href={`https://wa.me/256704757991?text=${encodeURIComponent(
                        'Hello FAB Medical Supplies Ltd., I am reaching out regarding medical equipment and supply inquiries.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl sm:text-[28px] lg:text-3xl font-black font-mono text-[#0F172A] tracking-tight hover:text-[#21409A] transition-colors block leading-tight"
                      aria-label={`Open WhatsApp with ${whatsappPhone}`}
                    >
                      {whatsappPhone}
                    </a>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mt-1">
                      WhatsApp / Phone
                    </span>
                  </div>

                  <div className="pt-1">
                    <a
                      href={`https://wa.me/256704757991?text=${encodeURIComponent(
                        'Hello FAB Medical Supplies Ltd., I am reaching out regarding medical equipment and supply inquiries.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#21409A] hover:text-[#0F172A] transition-all group/link"
                    >
                      <span className="border-b border-transparent group-hover/link:border-[#21409A] transition-all">OPEN WHATSAPP</span>
                      <span className="transition-transform group-hover/link:translate-x-1" aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>

                {/* ---------------------------------------------------- */}
                {/* ZONE 03: VISIT OUR OFFICE */}
                {/* ---------------------------------------------------- */}
                <div className="py-6 md:py-0 md:pl-8 lg:pl-10 space-y-4 group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-mono font-bold text-[#21409A]">03</span>
                      <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#0F172A]">
                        VISIT OUR OFFICE
                      </span>
                    </div>
                    {/* Clean Outline Location Icon */}
                    <div className="w-8 h-8 rounded-full bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#21409A] transition-colors group-hover:bg-[#21409A] group-hover:text-white">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <span className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight block leading-tight uppercase font-mono">
                      EMKA HOUSE
                    </span>
                    <span className="text-xs font-mono text-slate-500 leading-relaxed block mt-1">
                      Bombo Road, Ground Floor, Shop G01, Kampala, Uganda
                    </span>
                  </div>

                  <div className="pt-1">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Emka+House+Bombo+Road+Kampala+Uganda"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#21409A] hover:text-[#0F172A] transition-all group/link"
                    >
                      <span className="border-b border-transparent group-hover/link:border-[#21409A] transition-all">GET DIRECTIONS</span>
                      <span className="transition-transform group-hover/link:translate-x-1" aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Technical Identity Marker */}
              <div className="pt-8 sm:pt-10 flex items-center justify-between text-[11px] font-mono font-semibold tracking-wider text-slate-400">
                <div className="flex items-center space-x-2">
                  <span className="w-4 h-[1.5px] bg-[#21409A]" aria-hidden="true" />
                  <span className="text-[#21409A] font-bold">FAB MEDICAL SUPPLIES LTD.</span>
                </div>
                <span className="hidden sm:inline-block">KAMPALA, UGANDA</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
