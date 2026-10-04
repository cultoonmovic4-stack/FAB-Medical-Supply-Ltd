import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import { companyInfo } from '../data/company';

// Asset imports matching the target visual direction
import heroPhotoImg from '../assets/service-hero-photo.webp';
import procurementImg from '../assets/service-procurement.jpg';
import marketingImg from '../assets/service-marketing.jpg';
import deliveryImg from '../assets/service-delivery.jpg';
import repairImg from '../assets/service-repair.jpg';

// Assets for the Design D Graphic Focus closing section (matching About page)
import fabLogoImg from '../assets/fab-logo.webp';
import contactStethImg from '../assets/contact_steth_circle.webp';

/**
 * Services Page — FAB Medical Supplies Ltd.
 * 
 * Implemented to precisely match the approved visual direction:
 * 1. Services Hero: Asymmetric editorial composition with vertical technical line index (01-04) and angled photographic object.
 * 2. Our Services / Core Functions: 2x2 editorial layout with alternating photographic & information relationships.
 * 3. Service Boundary / Clarification: Horizontal technical clarification panel.
 * 4. Closing Contact CTA: Design D Graphic Focus matching the About page (Headline + Blueprint Stethoscope + Contact List).
 */
export default function Services({ onNavigate }) {
  // Hero overview index points
  const heroIndexPoints = [
    { num: '01', title: 'PROCUREMENT & IMPORTATION' },
    { num: '02', title: 'MARKETING & SALES' },
    { num: '03', title: 'DELIVERY OF SUPPLIES' },
    { num: '04', title: 'SERVICING & REPAIR' },
  ];

  // Core functions detailed entries
  const servicesList = [
    {
      num: '01',
      title: 'PROCUREMENT & IMPORTATION',
      description:
        'We source and import quality medical equipment, instruments and reagents from trusted international manufacturers.',
      image: procurementImg,
      alt: 'Cargo container ship and cargo aircraft representing international medical equipment procurement and importation',
    },
    {
      num: '02',
      title: 'MARKETING & SALES',
      description:
        'We market and sell medical equipment, instruments and reagents to healthcare facilities, practitioners and wholesalers across Uganda.',
      image: marketingImg,
      alt: 'Advanced patient monitors and clinical machinery supplied to healthcare facilities',
    },
    {
      num: '03',
      title: 'DELIVERY OF SUPPLIES',
      description:
        'We ensure timely and safe delivery of all supplied equipment, instruments and reagents to our clients.',
      image: deliveryImg,
      alt: 'FAB Medical Supplies delivery vehicle and logistics staff handling clinical cargo at loading bay',
    },
    {
      num: '04',
      title: 'SERVICING & REPAIR',
      description:
        'We provide servicing and repair for the equipment we supply, helping our clients maintain optimal performance and uptime.',
      image: repairImg,
      alt: 'Biomedical technician in sterile gloves calibrating and repairing electronic medical device components',
    },
  ];

  return (
    <div className="bg-white min-h-screen text-[#0F172A] selection:bg-[#21409A] selection:text-white">
      {/* ========================================================
          1. SERVICES HERO
          ======================================================== */}
      <section
        className="relative bg-[#FAFCFE] border-b border-slate-200/90 pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden"
        aria-labelledby="services-hero-heading"
      >
        {/* Subtle Background Structural Accent Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-40" aria-hidden="true">
          <div className="absolute top-0 right-1/4 w-[1px] h-full bg-slate-100" />
          <div className="absolute top-0 left-1/3 w-[1px] h-full bg-slate-100" />
        </div>

        <Container>
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
            {/* Left Column: Eyebrow, Main Headline & Supporting Text */}
            <div
              className="lg:col-span-5 space-y-6"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              {/* Eyebrow */}
              <div className="flex items-center space-x-2.5">
                <span className="w-5 h-[2px] bg-[#21409A]" aria-hidden="true" />
                <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#21409A] uppercase">
                  SERVICES &amp; CORE FUNCTIONS
                </span>
              </div>

              {/* Main Heading */}
              <h1
                id="services-hero-heading"
                className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-black text-[#0F172A] tracking-tight leading-[1.08] uppercase"
              >
                MEDICAL EQUIPMENT <br />
                SUPPLY &amp; TECHNICAL <br />
                <span className="text-[#21409A]">SUPPORT</span>
              </h1>

              {/* Supporting Factual Paragraph */}
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-md">
                FAB Medical Supplies Ltd. provides medical equipment, instruments and reagents through 
                procurement, marketing, sales and delivery, with servicing and repair for equipment supplied.
              </p>
            </div>

            {/* Center Column: Vertical Technical Line with 4 Numbered Points */}
            <div
              className="lg:col-span-3 py-2"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="150"
            >
              <nav aria-label="Services overview index" className="relative pl-2 sm:pl-4">
                {/* Continuous thin blue vertical connecting line */}
                <div
                  className="absolute left-[19px] sm:left-[27px] top-4 bottom-4 w-[1.5px] bg-[#21409A]/50 pointer-events-none"
                  aria-hidden="true"
                />

                <ol className="space-y-6 sm:space-y-7 list-none m-0 p-0">
                  {heroIndexPoints.map((pt, idx) => (
                    <li
                      key={pt.num}
                      className="relative flex items-center space-x-3.5 group"
                      data-aos="fade-up"
                      data-aos-delay={100 + idx * 80}
                    >
                      {/* Circular Number Marker */}
                      <span
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#21409A] bg-white flex items-center justify-center text-[11px] sm:text-xs font-mono font-bold text-[#21409A] z-10 shadow-sm flex-shrink-0"
                        aria-hidden="true"
                      >
                        {pt.num}
                      </span>
                      {/* Point Title */}
                      <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.14em] text-[#21409A] group-hover:text-[#0F172A] transition-colors leading-tight">
                        {pt.title}
                      </span>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

            {/* Right Column: Editorial Photographic Composition */}
            <div
              className="lg:col-span-4 flex flex-col items-center lg:items-end"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="250"
            >
              <div className="relative w-full max-w-md lg:max-w-none">
                {/* Dynamic Angled Medical Equipment Photographic Object */}
                <div className="relative overflow-hidden shadow-[0_12px_36px_rgba(33,64,154,0.08)] bg-white border border-slate-100">
                  <img
                    src={heroPhotoImg}
                    alt="Clinical ICU patient monitoring system with electronic vitals display in modern hospital ward"
                    className="w-full h-auto object-cover block"
                    width="768"
                    height="380"
                    fetchpriority="high"
                    loading="eager"
                    decoding="async"
                  />
                </div>

                {/* Subtitle / Caption beneath image matching target design */}
                <div className="mt-3.5 flex items-center justify-end space-x-2.5 text-right">
                  <span className="w-8 h-[1.5px] bg-[#21409A]" aria-hidden="true" />
                  <div className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-[0.2em]">
                    <span className="font-bold text-[#21409A]">TRUSTED SOLUTIONS</span>{' '}
                    <span className="text-slate-500 font-medium">FOR BETTER HEALTHCARE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          2. OUR SERVICES / CORE FUNCTIONS
          ======================================================== */}
      <section
        className="py-16 lg:py-24 bg-white border-b border-slate-200"
        aria-labelledby="core-services-heading"
      >
        <Container>
          {/* Section Introduction */}
          <div
            className="max-w-2xl mb-12 lg:mb-16 space-y-3"
            data-aos="fade-up"
            data-aos-duration="850"
          >
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-[#21409A]" aria-hidden="true" />
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#21409A] uppercase">
                OUR SERVICES
              </span>
            </div>
            <h2
              id="core-services-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight uppercase"
            >
              Built Around Your Healthcare Needs
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              We deliver more than equipment — we deliver reliable solutions, from sourcing
              to support, so your facilities can provide better care.
            </p>
          </div>

          {/* 2x2 Alternating Editorial Services Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-16 gap-y-12 lg:gap-y-16">
            {servicesList.map((service, idx) => (
              <article
                key={service.num}
                className="flex flex-col sm:flex-row items-start gap-5 lg:gap-6 group"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay={idx * 150}
              >
                {/* Supporting Photographic Image */}
                <div className="w-full sm:w-48 md:w-52 lg:w-48 xl:w-52 aspect-[16/9] sm:aspect-[4/3] flex-shrink-0 overflow-hidden bg-slate-100 border border-slate-200 shadow-sm relative">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width="208"
                    height="156"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Subtle Corner Registration Crosshair */}
                  <div className="absolute top-1 left-1.5 text-[8px] font-mono text-white/80 select-none drop-shadow" aria-hidden="true">+</div>
                </div>

                {/* Information Block with Blue Divider */}
                <div className="border-l-2 border-[#21409A] pl-4 sm:pl-5 flex-1 space-y-1.5">
                  {/* Service Number */}
                  <span className="text-xl sm:text-2xl font-black font-mono text-[#21409A] block leading-none">
                    {service.num}
                  </span>

                  {/* Service Title */}
                  <h3 className="text-sm sm:text-base font-bold font-mono text-[#0F172A] tracking-wide uppercase leading-snug group-hover:text-[#21409A] transition-colors">
                    {service.title}
                  </h3>

                  {/* Factual Description */}
                  <p className="text-xs sm:text-[13px] text-slate-600 font-normal leading-relaxed pt-1">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================
          3. SERVICE BOUNDARY / CLARIFICATION
          ======================================================== */}
      <section
        className="py-10 bg-[#FAFCFE] border-b border-slate-200"
        aria-labelledby="service-boundary-heading"
      >
        <Container>
          <div
            className="border border-[#DCE7F2] bg-white p-5 sm:p-6 lg:p-7 shadow-[0_2px_12px_rgba(33,64,154,0.02)]"
            data-aos="zoom-in"
            data-aos-duration="850"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8">
              {/* Left Label with Blue Vertical Accent */}
              <div className="flex items-center space-x-3 flex-shrink-0">
                <span className="w-1 self-stretch min-h-[28px] bg-[#21409A] rounded-none" aria-hidden="true" />
                <h3
                  id="service-boundary-heading"
                  className="text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.2em] text-[#21409A]"
                >
                  SERVICE BOUNDARY
                </h3>
              </div>

              {/* Factual Clarification Statement */}
              <div className="flex-1 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed border-t md:border-t-0 md:border-l border-slate-200 pt-3 md:pt-0 md:pl-6">
                <p>
                  FAB Medical Supplies Ltd. operates as a medical equipment procurement and supply business.
                  We do not manufacture equipment. Servicing and repair are provided specifically for the equipment that we supply.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================
          4. CLOSING CONTACT CTA — DESIGN D GRAPHIC FOCUS
          (Matching the About Page Editorial Architecture)
          ======================================================== */}
      <section
        className="bg-white border-t border-slate-200 py-16 sm:py-20 lg:py-24 xl:py-28 relative overflow-hidden"
        aria-labelledby="services-closing-heading"
      >
        <Container className="relative max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-10 items-start">
            {/* ======================================================== */}
            {/* LEFT: Dominant Headline, Paragraph & FAB Brand Wordmark (Col 5) */}
            {/* ======================================================== */}
            <div
              className="lg:col-span-5 flex flex-col justify-between z-10"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              <div>
                {/* Eyebrow with Red Dash */}
                <div className="flex items-center space-x-2.5 mb-6">
                  <span className="w-5 h-[2px] bg-[#E11D48] inline-block" aria-hidden="true" />
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#0F172A]">
                    FAB MEDICAL SUPPLIES LTD.
                  </span>
                </div>

                {/* Dominant Editorial Headline */}
                <h2
                  id="services-closing-heading"
                  className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-black uppercase tracking-tight text-[#0F172A] leading-[1.06] mb-6 sm:mb-8"
                >
                  HAVE A SUPPLY<br />
                  OR EQUIPMENT<br />
                  <span className="text-[#21409A]">INQUIRY?</span>
                </h2>

                {/* Supporting Paragraph */}
                <p className="text-xs sm:text-sm lg:text-[15px] text-slate-600 leading-relaxed font-normal max-w-md mb-8 lg:mb-12">
                  Contact our team directly to discuss equipment requirements, delivery coordination, or servicing for supplied items.
                </p>
              </div>

              {/* Lower-Left Authentic FAB Logo */}
              <div className="pt-2">
                <img
                  src={fabLogoImg}
                  alt="FAB Medical Supplies Ltd."
                  className="h-9 xl:h-10 w-auto object-contain block"
                  width="40"
                  height="41"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* ======================================================== */}
            {/* CENTER: Medical-Equipment Graphic & Technical Construction (Col 4) */}
            {/* ======================================================== */}
            <div
              className="lg:col-span-4 flex items-center justify-center relative py-6 lg:py-0"
              data-aos="zoom-in"
              data-aos-duration="950"
              data-aos-delay="150"
            >
              {/* Technical Blueprint SVG Guidelines & Axes */}
              <div className="relative flex items-center justify-center w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] xl:w-[350px] xl:h-[350px]">
                {/* SVG Construction System */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
                  viewBox="0 0 350 350"
                  fill="none"
                  aria-hidden="true"
                >
                  {/* Outer Technical Guide Circles */}
                  <circle cx="175" cy="175" r="145" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="175" cy="175" r="115" stroke="#E2E8F0" strokeWidth="1" />

                  {/* Horizontal & Vertical Crosshair Hairlines */}
                  <line x1="175" y1="10" x2="175" y2="340" stroke="#CBD5E1" strokeWidth="1" />
                  <line x1="10" y1="175" x2="340" y2="175" stroke="#CBD5E1" strokeWidth="1" />

                  {/* Diagonal Lead Guideline to Contact Info */}
                  <path d="M 245 105 L 310 50 L 350 50" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="2 2" />

                  {/* Red Center / Registration Crosshair Marks */}
                  <g stroke="#E11D48" strokeWidth="1.5">
                    <line x1="175" y1="315" x2="175" y2="330" />
                    <line x1="167" y1="322.5" x2="183" y2="322.5" />
                  </g>
                </svg>

                {/* Circular Stethoscope Graphic */}
                <div className="w-48 h-48 sm:w-56 sm:h-56 xl:w-60 xl:h-60 rounded-full overflow-hidden border-2 border-white shadow-[0_16px_40px_rgba(33,64,154,0.1)] relative z-10 ring-1 ring-slate-200">
                  <img
                    src={contactStethImg}
                    alt="Precision medical stethoscope examination equipment supplied by FAB Medical Supplies Ltd."
                    className="w-full h-full object-cover object-center block"
                    width="240"
                    height="240"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            {/* ======================================================== */}
            {/* RIGHT: Precise Contact Info & Restrained LET'S TALK Link (Col 3) */}
            {/* ======================================================== */}
            <div
              className="lg:col-span-3 flex flex-col justify-between py-2 lg:pl-4 xl:pl-6 z-10"
              data-aos="fade-left"
              data-aos-duration="900"
              data-aos-delay="250"
            >
              <div>
                {/* Eyebrow */}
                <div className="flex items-center space-x-2 mb-2">
                  <span className="w-5 h-[2px] bg-[#E11D48] inline-block" aria-hidden="true" />
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#21409A]">
                    GET IN TOUCH
                  </span>
                </div>

                {/* Subhead */}
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F172A] tracking-tight mb-6">
                  Kampala, Uganda
                </h3>

                {/* Contact List */}
                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  {/* Phone */}
                  <div className="flex items-start space-x-3">
                    <svg className="w-4 h-4 text-[#21409A] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a
                      href={companyInfo.phones[0].link}
                      className="hover:text-[#21409A] font-semibold text-[#0F172A] transition-colors"
                      aria-label={`Call ${companyInfo.phones[0].number}`}
                    >
                      {companyInfo.phones[0].number}
                    </a>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start space-x-3">
                    <svg className="w-4 h-4 text-[#21409A] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <a
                      href={`https://wa.me/256704757991?text=${encodeURIComponent(
                        'Hello FAB Medical Supplies Ltd., I am inquiring about medical equipment supply and technical services.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#21409A] font-semibold text-[#0F172A] transition-colors"
                      aria-label="WhatsApp Inquiry (opens in new tab)"
                    >
                      {companyInfo.phones[1].number} (WhatsApp)
                    </a>
                  </div>

                  {/* Physical Address */}
                  <div className="flex items-start space-x-3">
                    <svg className="w-4 h-4 text-[#21409A] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-normal text-slate-600 leading-snug">
                      Emka House, Bombo Road, Ground Floor, Shop G01, Kampala
                    </span>
                  </div>

                  {/* Website */}
                  <div className="flex items-start space-x-3">
                    <svg className="w-4 h-4 text-[#21409A] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <span className="font-medium text-slate-700">
                      www.fabmedsupplies.com
                    </span>
                  </div>
                </div>

                {/* Thin Divider Line */}
                <div className="w-full h-[1px] bg-slate-200 my-6" aria-hidden="true" />

                {/* Restrained Text-Style Contact Link: LET'S TALK → */}
                <div>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-[0.22em] text-[#0F172A] hover:text-[#21409A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#21409A] rounded p-1"
                  >
                    <span>LET'S TALK</span>
                    <span className="text-[#E11D48] font-bold text-sm transition-transform group-hover:translate-x-1.5" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              </div>

              {/* Bottom Right Brand Signature */}
              <div className="mt-12 lg:mt-16 pt-4 flex items-center space-x-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.16em] text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] inline-block" aria-hidden="true" />
                <span className="leading-tight">QUALITY SUPPLIERS. HEALTHIER TOMORROWS.</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
