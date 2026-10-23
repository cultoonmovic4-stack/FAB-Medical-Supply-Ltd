import React from 'react';
import Container from '../components/Container';
import { companyInfo } from '../data/company';

// Authentic clinical photographic asset
import contactReachUsDoctorImg from '../assets/contact-reach-us-doctor.webp';

/**
 * Contact Page — FAB Medical Supplies Ltd.
 * 
 * Strict Architectural Layout:
 * - Section 1: Hero Broadsheet with "LET'S TALK.", direct support guarantee, and framed clinical photography.
 * - Section 2: Three Open Communication Channels (Call, WhatsApp, Office Visit) with solid action buttons.
 * - Strictly NO contact form, NO fake gradients, and NO artificial SVG lines.
 */
export default function Contact() {
  const primaryPhoneFormatted = '0786 062 191';
  const primaryPhoneTel = 'tel:0786062191';
  const whatsappFormatted = '0704 757 991';
  const whatsappUrl = `https://wa.me/256704757991?text=${encodeURIComponent(
    'Hello FAB Medical Supplies Ltd., I am reaching out regarding medical equipment and supply inquiries.'
  )}`;
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Emka+House+Bombo+Road+Kampala+Uganda';

  return (
    <div className="bg-white min-h-screen text-[#0F172A] selection:bg-[#21409A] selection:text-white">
      {/* ========================================================
          SECTION 1 — CONTACT INTRODUCTION (HERO)
          ======================================================== */}
      <section
        className="relative bg-[#F8FAFC] pt-12 pb-14 sm:pt-16 sm:pb-18 lg:pt-20 lg:pb-24 border-b border-slate-200"
        aria-labelledby="contact-hero-heading"
      >
        <Container className="relative max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Area (Col 7): Eyebrow, Headline & Direct Access Premise */}
            <div
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
              data-aos="fade-right"
              data-aos-duration="850"
            >
              {/* Eyebrow */}
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-[11px] font-mono font-bold tracking-[0.22em] text-[#21409A] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#21409A]" aria-hidden="true" />
                <span>CONTACT / DIRECT ACCESS</span>
              </div>

              {/* Oversized Headline */}
              <h1
                id="contact-hero-heading"
                className="text-4xl xs:text-5xl sm:text-7xl lg:text-[84px] xl:text-[92px] font-black tracking-tight leading-[0.92] uppercase select-none text-center lg:text-left"
              >
                <span className="text-[#0F172A] block">LET&apos;S</span>
                <span className="text-[#21409A] block">TALK<span className="text-[#ED1C24]">.</span></span>
              </h1>

              {/* Supporting Premise */}
              <div className="space-y-2 max-w-xl mx-auto lg:mx-0 pt-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <span className="w-6 h-[1.5px] bg-[#21409A]" aria-hidden="true" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#21409A]">
                    DIRECT ACCESS TO
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight leading-tight text-center lg:text-left">
                  FAB Medical Supplies Ltd.
                </h2>

                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed pt-1 text-center lg:text-left">
                  Whether you&apos;re sourcing medical equipment, making an inquiry, or looking for assistance, 
                  connect directly with our team in Kampala.
                </p>
              </div>

              {/* Direct Support Guarantee */}
              <div className="flex items-center justify-center lg:justify-start space-x-3 pt-3 border-t border-slate-200">
                <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-[#21409A] flex-shrink-0 bg-white">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-slate-500 font-semibold leading-relaxed text-center lg:text-left">
                  REAL PEOPLE • DIRECT SUPPORT • FAST RESPONSE
                </div>
              </div>
            </div>

            {/* Right Area (Col 5): Framed Authentic Clinical Photograph */}
            <div
              className="lg:col-span-5"
              data-aos="fade-left"
              data-aos-duration="850"
            >
              <div className="border border-slate-200 bg-white p-2.5 sm:p-3 shadow-sm">
                <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-slate-100 border border-slate-200">
                  <img
                    src={contactReachUsDoctorImg}
                    alt="Clinical professional with digital tablet and stethoscope in a modern healthcare environment"
                    className="w-full h-full object-cover object-right"
                    width="720"
                    height="500"
                    loading="lazy"
                  />
                </div>
                <div className="pt-3 px-1 flex items-center justify-between text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                  <span className="font-semibold text-[#0F172A]">KAMPALA OPERATIONS</span>
                  <span>UGANDA HEALTHCARE SUPPLY</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          SECTION 2 — HOW DO YOU WANT TO REACH US?
          ======================================================== */}
      <section
        className="py-14 sm:py-18 lg:py-24 bg-white border-b border-slate-200"
        aria-labelledby="contact-channels-heading"
      >
        <Container className="max-w-7xl">
          {/* Section Header */}
          <div
            className="max-w-2xl mb-12 sm:mb-16 space-y-3 text-center md:text-left mx-auto md:mx-0"
            data-aos="fade-right"
            data-aos-duration="850"
          >
            <div className="flex items-center justify-center md:justify-start space-x-2.5">
              <span className="text-xs sm:text-sm font-mono font-bold text-[#21409A]">02</span>
              <span className="w-5 h-[2px] bg-[#ED1C24]" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.24em] text-[#0F172A] uppercase">
                COMMUNICATION CHANNELS
              </span>
            </div>

            <h2
              id="contact-channels-heading"
              className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0F172A] tracking-tight uppercase leading-[1.05] text-center md:text-left"
            >
              HOW DO YOU WANT TO <br className="hidden sm:inline" />
              <span className="text-[#21409A]">REACH US?</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed pt-1 text-center md:text-left">
              Select your preferred communication channel below for immediate assistance from our team.
            </p>
          </div>

          {/* 3 Channels: Clean Open Layout with Hairline Dividers (No Boxed Cards) */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 pt-4"
            data-aos="fade-up"
            data-aos-duration="850"
          >
            {/* ---------------------------------------------------- */}
            {/* 01: CALL FAB */}
            {/* ---------------------------------------------------- */}
            <div className="py-8 md:py-0 md:pr-8 lg:pr-10 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold text-[#21409A]">01</span>
                    <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#0F172A]">
                      CALL FAB
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#21409A]">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>

                <div>
                  <a
                    href={primaryPhoneTel}
                    className="text-2xl sm:text-[28px] lg:text-3xl font-black font-mono text-[#0F172A] tracking-tight hover:text-[#21409A] transition-colors block leading-tight"
                    aria-label={`Call ${primaryPhoneFormatted}`}
                  >
                    {primaryPhoneFormatted}
                  </a>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mt-1">
                    Primary Phone Line
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  Direct telephone line for equipment procurement inquiries, product availability, and urgent orders.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={primaryPhoneTel}
                  className="inline-flex items-center justify-center space-x-2 bg-[#21409A] hover:bg-[#172e70] text-white text-xs font-mono font-bold uppercase tracking-wider py-3.5 px-6 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#21409A] w-full sm:w-auto text-center"
                >
                  <span>CALL NOW</span>
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>

            {/* ---------------------------------------------------- */}
            {/* 02: MESSAGE FAB */}
            {/* ---------------------------------------------------- */}
            <div className="py-8 md:py-0 md:px-8 lg:px-10 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold text-[#21409A]">02</span>
                    <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#0F172A]">
                      MESSAGE FAB
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#21409A]">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                </div>

                <div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl sm:text-[28px] lg:text-3xl font-black font-mono text-[#0F172A] tracking-tight hover:text-[#21409A] transition-colors block leading-tight"
                    aria-label={`Open WhatsApp with ${whatsappFormatted}`}
                  >
                    {whatsappFormatted}
                  </a>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mt-1">
                    WhatsApp &amp; Phone Line
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  Send equipment lists, tender documents, or questions directly to our team via WhatsApp message.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-[#21409A] hover:bg-[#172e70] text-white text-xs font-mono font-bold uppercase tracking-wider py-3.5 px-6 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#21409A] w-full sm:w-auto text-center"
                >
                  <span>OPEN WHATSAPP</span>
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>

            {/* ---------------------------------------------------- */}
            {/* 03: VISIT OUR OFFICE */}
            {/* ---------------------------------------------------- */}
            <div className="py-8 md:py-0 md:pl-8 lg:pl-10 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold text-[#21409A]">03</span>
                    <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#0F172A]">
                      VISIT OUR OFFICE
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#21409A]">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-[28px] lg:text-3xl font-black font-mono text-[#0F172A] tracking-tight block leading-tight uppercase">
                    EMKA HOUSE
                  </div>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mt-1">
                    Bombo Road, Shop G01, Kampala
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  Ground Floor, Shop G01, Bombo Road, Kampala, Uganda. Visit us for in-person consultation and procurement review.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-[#0F172A] text-xs font-mono font-bold uppercase tracking-wider py-3.5 px-6 transition-colors focus:outline-none w-full sm:w-auto text-center"
                >
                  <span>GET DIRECTIONS</span>
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Technical Identity Marker */}
          <div className="pt-10 sm:pt-14 mt-10 sm:mt-14 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono font-semibold tracking-wider text-slate-400">
            <div className="flex items-center space-x-2">
              <span className="w-4 h-[1.5px] bg-[#21409A]" aria-hidden="true" />
              <span className="text-[#21409A] font-bold">FAB MEDICAL SUPPLIES LTD.</span>
            </div>
            <span className="hidden sm:inline-block">KAMPALA, UGANDA</span>
          </div>
        </Container>
      </section>
    </div>
  );
}
