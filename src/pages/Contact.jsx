import React from 'react';
import Container from '../components/Container';
import { companyInfo } from '../data/company';

// Photographic assets cropped and optimized from the approved design direction
import contactPhoneImg from '../assets/contact_phone.png';
import contactWhatsappImg from '../assets/contact_whatsapp.png';
import contactMapImg from '../assets/contact_map.png';

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

              {/* Oversized Headline */}
              <h1
                id="contact-hero-heading"
                className="text-6xl sm:text-7xl lg:text-[88px] xl:text-[96px] font-black tracking-tight leading-[0.92] uppercase select-none"
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
          SECTION 2 — CONTACT CHANNELS
          ======================================================== */}
      <section
        className="py-16 lg:py-24 bg-[#FAFCFE] border-b border-slate-200"
        aria-labelledby="contact-channels-heading"
      >
        <Container className="max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
            {/* Introduction: Headline & Premise (Col 3) */}
            <div
              className="lg:col-span-3 space-y-4"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono font-bold text-[#21409A]">02</span>
                <span className="w-6 h-[1.5px] bg-[#21409A]" aria-hidden="true" />
              </div>

              <h2
                id="contact-channels-heading"
                className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight uppercase leading-[1.12]"
              >
                HOW DO YOU WANT <br />
                TO REACH US?
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                We&apos;re here to help. Choose the contact method that works best for you and 
                get in touch with our team directly.
              </p>
            </div>

            {/* 3 Channels Grid (Col 9) */}
            <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-slate-200/90">
              {/* ======================================================== */}
              {/* CHANNEL 1: CALL FAB */}
              {/* ======================================================== */}
              <div
                className="flex flex-col justify-between space-y-6 md:px-6 lg:px-8 group"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="150"
              >
                <div className="space-y-4">
                  {/* Channel Index Tag */}
                  <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
                    <span className="text-[#21409A] font-bold">╭ 01</span>
                    <span className="w-6 h-[1px] bg-slate-300" aria-hidden="true" />
                  </div>

                  {/* Channel Eyebrow */}
                  <span className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#21409A] block">
                    CALL FAB
                  </span>

                  {/* Main Contact Value Display */}
                  <div className="flex items-center space-x-3 pt-1">
                    <div className="w-10 h-10 rounded-lg bg-[#21409A] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <a
                      href={companyInfo.phones[0].link}
                      className="text-xl sm:text-2xl font-black font-mono text-[#0F172A] tracking-tight hover:text-[#21409A] transition-colors"
                      aria-label={`Call ${primaryPhone}`}
                    >
                      {primaryPhone}
                    </a>
                  </div>

                  {/* Factual Description */}
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Speak directly with our team for immediate assistance.
                  </p>

                  {/* Action Link */}
                  <div className="pt-2">
                    <a
                      href={companyInfo.phones[0].link}
                      className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#21409A] hover:text-[#0F172A] transition-colors"
                    >
                      <span>CALL NOW</span>
                      <span className="font-bold text-sm transition-transform group-hover:translate-x-1" aria-hidden="true">
                        —→
                      </span>
                    </a>
                  </div>
                </div>

                {/* Supporting Photographic Image */}
                <div className="w-full aspect-[16/10] overflow-hidden bg-white border border-slate-200/90 shadow-sm relative mt-4">
                  <img
                    src={contactPhoneImg}
                    alt="Professional office telephone for direct calls to FAB Medical Supplies"
                    className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* ======================================================== */}
              {/* CHANNEL 2: MESSAGE FAB */}
              {/* ======================================================== */}
              <div
                className="flex flex-col justify-between space-y-6 md:px-6 lg:px-8 group"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="250"
              >
                <div className="space-y-4">
                  {/* Channel Index Tag */}
                  <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
                    <span className="text-[#21409A] font-bold">╭ 02</span>
                    <span className="w-6 h-[1px] bg-slate-300" aria-hidden="true" />
                  </div>

                  {/* Channel Eyebrow */}
                  <span className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#21409A] block">
                    MESSAGE FAB
                  </span>

                  {/* Main Contact Value Display */}
                  <div className="flex items-center space-x-3 pt-1">
                    <div className="w-10 h-10 rounded-lg bg-[#21409A] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <a
                      href={`https://wa.me/256704757991?text=${encodeURIComponent(
                        'Hello FAB Medical Supplies Ltd., I am reaching out regarding medical equipment and supply inquiries.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl sm:text-2xl font-black font-mono text-[#0F172A] tracking-tight hover:text-[#21409A] transition-colors"
                      aria-label={`Open WhatsApp with ${whatsappPhone}`}
                    >
                      {whatsappPhone}
                    </a>
                  </div>

                  {/* Factual Description */}
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Send an inquiry or equipment request directly via WhatsApp.
                  </p>

                  {/* Action Link */}
                  <div className="pt-2">
                    <a
                      href={`https://wa.me/256704757991?text=${encodeURIComponent(
                        'Hello FAB Medical Supplies Ltd., I am reaching out regarding medical equipment and supply inquiries.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#21409A] hover:text-[#0F172A] transition-colors"
                    >
                      <span>OPEN WHATSAPP</span>
                      <span className="font-bold text-sm transition-transform group-hover:translate-x-1" aria-hidden="true">
                        —→
                      </span>
                    </a>
                  </div>
                </div>

                {/* Supporting Photographic Image */}
                <div className="w-full aspect-[16/10] overflow-hidden bg-white border border-slate-200/90 shadow-sm relative mt-4">
                  <img
                    src={contactWhatsappImg}
                    alt="Smartphone display with WhatsApp messaging for direct inquiries to FAB"
                    className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* ======================================================== */}
              {/* CHANNEL 3: VISIT OUR OFFICE */}
              {/* ======================================================== */}
              <div
                className="flex flex-col justify-between space-y-6 md:px-6 lg:px-8 group"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="350"
              >
                <div className="space-y-4">
                  {/* Channel Index Tag */}
                  <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
                    <span className="text-[#21409A] font-bold">╭ 03</span>
                    <span className="w-6 h-[1px] bg-slate-300" aria-hidden="true" />
                  </div>

                  {/* Channel Eyebrow */}
                  <span className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#21409A] block">
                    VISIT OUR OFFICE
                  </span>

                  {/* Main Contact Value Display */}
                  <div className="flex items-start space-x-3 pt-1">
                    <div className="w-10 h-10 rounded-lg bg-[#21409A] text-white flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-base sm:text-lg font-black text-[#0F172A] tracking-tight block leading-snug">
                        Emka House
                      </span>
                      <span className="text-xs text-slate-600 block leading-tight mt-0.5">
                        Bombo Road, <br />
                        Ground Floor, Shop G01 <br />
                        Kampala, Uganda
                      </span>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-2">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Emka+House+Bombo+Road+Kampala+Uganda"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#21409A] hover:text-[#0F172A] transition-colors"
                    >
                      <span>GET DIRECTIONS</span>
                      <span className="font-bold text-sm transition-transform group-hover:translate-x-1" aria-hidden="true">
                        —→
                      </span>
                    </a>
                  </div>
                </div>

                {/* Supporting Photographic Image */}
                <div className="w-full aspect-[16/10] overflow-hidden bg-white border border-slate-200/90 shadow-sm relative mt-4">
                  <img
                    src={contactMapImg}
                    alt="Map visual showing Emka House on Bombo Road, Kampala"
                    className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
