import React, { useEffect, useRef } from 'react';
import Container from './Container';
import { products } from '../data/products';
import { companyInfo } from '../data/company';
import { getProductDetails } from '../data/productKnowledge';

/**
 * ProductDetail Component — Architectural Medical Equipment Dossier
 * 
 * Features:
 * - Institutional broadsheet dossier layout with open hairline divisions
 * - Clean, authentic equipment photography without fake duplicate thumbnail galleries
 * - Zero bubbly rounded-xl cards or generic SaaS shadows
 * - No pulsing dots (clean institutional status indicators)
 * - Direct procurement inquiry buttons (WhatsApp pre-filled with product name & phone link)
 * - 2-Column Clinical Overview & Indications Ledger
 * - Crisp 4-Column Architectural Features Strip
 * - Monospace Technical Specifications Table
 * - Compact horizontal related equipment cards
 */
export default function ProductDetail({ product, onBack, onSelectProduct }) {
  const topHeadingRef = useRef(null);

  // Scroll to top and focus heading on product change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (topHeadingRef.current) {
      topHeadingRef.current.focus();
    }
  }, [product]);

  // Load clinical knowledge for this equipment
  const details = getProductDetails(product);

  // Find 2-3 related products from the same category
  const relatedProducts = products
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id && Boolean(p.image))
    .slice(0, 3);

  const refCode = `FAB-${product.id.toUpperCase()}`;

  // WhatsApp inquiry URL pre-filled with product name and reference code
  const whatsappInquiryUrl = `https://wa.me/256704757991?text=${encodeURIComponent(
    `Hello FAB Medical Supplies Ltd., I am reaching out regarding procurement and specifications for the ${product.name} (Ref: ${refCode}).`
  )}`;

  // Understated SVG icons for Key Features
  const renderFeatureIcon = (iconName) => {
    const iconProps = {
      className: 'w-4 h-4 text-[#21409A]',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      strokeWidth: 2,
      'aria-hidden': 'true',
    };

    switch (iconName) {
      case 'scan':
      case 'probe':
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7V5a2 2 0 012-2h2m10 0h2a2 2 0 012 2v2m0 10v2a2 2 0 01-2 2h-2m-10 0H5a2 2 0 01-2-2v-2" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        );
      case 'shield':
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 'refresh':
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        );
      case 'network':
      case 'database':
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        );
      case 'monitor':
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'pulse':
      case 'activity':
      case 'wave':
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'bell':
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        );
      case 'battery':
      case 'cpu':
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        );
      default:
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  return (
    <div className="bg-[#FAFCFE] min-h-screen text-[#0F172A] antialiased">
      {/* ========================================================
          TOP BREADCRUMB STRIP (ARCHITECTURAL LEDGER BAR)
          ======================================================== */}
      <div className="bg-[#F8FAFC] border-b border-slate-300 py-3 sm:py-3.5">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 sm:gap-4 text-xs font-mono min-w-0">
            {/* Return Action */}
            <button
              type="button"
              onClick={onBack}
              className="group inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] hover:text-[#21409A] transition-colors py-1 cursor-pointer w-fit"
              aria-label="Back to equipment catalogue"
            >
              <span className="text-[#ED1C24] transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">
                ←
              </span>
              <span>BACK TO CATALOGUE</span>
            </button>

            {/* Breadcrumb Hierarchy */}
            <nav className="flex items-center space-x-2 text-[11px] sm:text-xs text-slate-500 min-w-0 max-w-full overflow-hidden" aria-label="Breadcrumb">
              <span className="uppercase truncate shrink min-w-0 max-w-[45%] sm:max-w-[220px]">
                {product.categoryName?.split('(')[0]?.trim() || product.categoryName}
              </span>
              <span className="text-slate-300 shrink-0">/</span>
              <span className="text-[#0F172A] font-bold uppercase truncate shrink min-w-0 max-w-[50%] sm:max-w-[260px]">
                {product.name}
              </span>
            </nav>
          </div>
        </Container>
      </div>

      {/* ========================================================
          SECTION 1: SPECIFICATION DOSSIER HEADER
          ======================================================== */}
      <section className="bg-white border-b border-slate-300 py-8 sm:py-12 lg:py-14">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column (6-Col): High-Clarity Equipment Display */}
            <div className="lg:col-span-6 space-y-3" data-aos="fade-right" data-aos-duration="650">
              <div className="relative bg-white border border-slate-300 p-6 sm:p-8 flex items-center justify-center min-h-[300px] sm:min-h-[380px] aspect-[4/3] overflow-hidden select-none shadow-xs">
                {/* Technical Registration Crosshairs */}
                <div className="absolute top-2 left-2 text-[10px] font-mono text-slate-300 select-none">+</div>
                <div className="absolute top-2 right-2 text-[10px] font-mono text-slate-300 select-none">+</div>
                <div className="absolute bottom-2 left-2 text-[10px] font-mono text-slate-300 select-none">+</div>
                <div className="absolute bottom-2 right-2 text-[10px] font-mono text-slate-300 select-none">+</div>

                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                    width="540"
                    height="405"
                    loading="eager"
                  />
                ) : (
                  <div className="text-center p-6 text-slate-400 font-mono text-xs">
                    Official product photography on record
                  </div>
                )}

                {/* Technical Corner Badge */}
                <div className="absolute top-3.5 right-3.5 bg-white px-2.5 py-1 border border-slate-300 text-[10px] font-mono font-bold text-[#0F172A] uppercase tracking-wider">
                  KAMPALA DISPATCH
                </div>
              </div>

              {/* Technical Caption Bar */}
              <div className="px-1 text-[10px] sm:text-[11px] font-mono text-slate-500 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
                <span>REF CODE: <strong className="text-[#0F172A]">{refCode}</strong></span>
                <span className="uppercase text-slate-400">UGANDA HEALTHCARE SPECIFICATION</span>
              </div>
            </div>

            {/* Right Column (6-Col): Title, Clinical Role, Ledger & Actions */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6" data-aos="fade-left" data-aos-duration="700">
              <div className="space-y-3">
                {/* Department Eyebrow */}
                <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#21409A]">
                  <span className="w-2 h-2 rounded-full bg-[#ED1C24]" aria-hidden="true" />
                  <span>{product.categoryName}</span>
                </div>

                {/* Large Product Name */}
                <h1
                  tabIndex={-1}
                  ref={topHeadingRef}
                  className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#0F172A] tracking-tight leading-tight focus:outline-none"
                >
                  {product.name}
                </h1>

                {/* Concise Clinical Summary */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {product.summary || details.overview}
                </p>
              </div>

              {/* Architectural Spec Matrix Ledger */}
              <div className="border border-slate-300 divide-y divide-slate-200 bg-[#F8FAFC]">
                <div className="p-3 sm:p-3.5 flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                    PROCUREMENT REF
                  </span>
                  <span className="font-mono font-bold text-xs text-[#0F172A]">
                    {refCode}
                  </span>
                </div>

                <div className="p-3 sm:p-3.5 flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                    STOCK AVAILABILITY
                  </span>
                  <span className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold text-[#21409A]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
                    <span>In Stock / Kampala Warehouse</span>
                  </span>
                </div>

                <div className="p-3 sm:p-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                    PRIMARY APPLICATION
                  </span>
                  <span className="text-xs font-semibold text-[#0F172A] text-left sm:text-right">
                    {details.application || details.productType}
                  </span>
                </div>

                <div className="p-3 sm:p-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                    CLINICAL INDICATION
                  </span>
                  <span className="text-xs font-semibold text-[#0F172A] text-left sm:text-right">
                    {details.clinicalUse}
                  </span>
                </div>
              </div>

              {/* Highlighted Direct Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* WhatsApp Inquiry Button */}
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-5 py-3 bg-[#21409A] hover:bg-[#1B3580] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-sm flex-1 text-center"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.419-.101.824z" />
                  </svg>
                  <span>INQUIRE VIA WHATSAPP</span>
                  <span aria-hidden="true">→</span>
                </a>

                {/* Direct Phone Call Button */}
                <a
                  href={companyInfo.phones[0].link}
                  className="inline-flex items-center justify-center space-x-2 px-5 py-3 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-mono font-bold uppercase tracking-wider transition-all flex-1 text-center"
                >
                  <svg className="w-4 h-4 text-[#21409A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>CALL {companyInfo.phones[0].number}</span>
                </a>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================
          SECTION 2: CLINICAL OVERVIEW & INDICATIONS
          ======================================================== */}
      <section className="bg-[#F8FAFC] border-b border-slate-300 py-10 sm:py-12 lg:py-14">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column (6-Col): Overview & How It Works */}
            <div className="lg:col-span-6 space-y-6" data-aos="fade-right" data-aos-duration="650">
              {/* Subsection 1: Overview */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#21409A] font-bold block">
                  01. CLINICAL OVERVIEW
                </span>
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0F172A]">
                  System Purpose &amp; Capability
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal pt-1">
                  {details.overview}
                </p>
              </div>

              {/* Subsection 2: Operating Principle */}
              <div className="space-y-2 pt-4 border-t border-slate-200">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#21409A] font-bold block">
                  02. OPERATING PRINCIPLE
                </span>
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-[#0F172A]">
                  How the Equipment Works
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal pt-1">
                  {details.howItWorks}
                </p>
              </div>
            </div>

            {/* Right Column (6-Col): Indications & Clinical Applications */}
            <div className="lg:col-span-6 space-y-4" data-aos="fade-left" data-aos-duration="700">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#21409A] font-bold block">
                03. INDICATIONS &amp; USE CASES
              </span>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0F172A]">
                What It Is Used For
              </h3>

              <div className="border border-slate-300 bg-white divide-y divide-slate-200 mt-2">
                {details.whatItIsUsedFor.map((useCase, idx) => (
                  <div key={idx} className="p-3.5 sm:p-4 flex items-start space-x-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <span className="text-[#21409A] font-bold font-mono text-xs mt-0.5 shrink-0">
                      {String(idx + 1).padStart(2, '0')}.
                    </span>
                    <span>{useCase}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================
          SECTION 3: SYSTEM CAPABILITIES & KEY FEATURES
          ======================================================== */}
      <section className="bg-white border-b border-slate-300 py-10 sm:py-12 lg:py-14">
        <Container>
          <div className="pb-4 mb-8 border-b border-slate-300 flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#21409A] font-bold block mb-1">
                ENGINEERING HIGHLIGHTS
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0F172A]">
                Key System Features
              </h2>
            </div>
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
              NDA GUIDELINE COMPLIANT
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {details.features.map((feature, idx) => (
              <div key={idx} className="border border-slate-300 bg-[#F8FAFC] p-5 space-y-3 shadow-xs">
                <div className="w-8 h-8 bg-white border border-slate-300 flex items-center justify-center">
                  {renderFeatureIcon(feature.icon)}
                </div>
                <h3 className="text-sm font-bold text-[#0F172A] tracking-tight uppercase">
                  {feature.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================
          SECTION 4: TECHNICAL SPECIFICATIONS (ARCHITECTURAL TABLE)
          ======================================================== */}
      <section className="bg-[#F8FAFC] border-b border-slate-300 py-10 sm:py-12 lg:py-14">
        <Container>
          <div className="pb-4 mb-6 border-b border-slate-300 flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#21409A] font-bold block mb-1">
                STRUCTURED DATA SHEET
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0F172A]">
                Technical Specifications
              </h2>
            </div>
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
              REF: {refCode}
            </span>
          </div>

          <div className="border border-slate-300 bg-white overflow-hidden shadow-xs">
            <table className="w-full text-left font-mono">
              <tbody className="divide-y divide-slate-200">
                {details.specifications.map((spec, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? 'bg-[#FAFCFE]' : 'bg-white'}
                  >
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-[#21409A] uppercase tracking-wider w-5/12 sm:w-1/3 text-xs align-top border-r border-slate-200">
                      {spec.label}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-800 text-xs leading-relaxed align-top">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-[10px] sm:text-[11px] font-mono text-slate-500">
            * Specifications confirmed directly against manufacturer importation documentation. On-site commissioning and user training provided by FAB Medical biomedical engineers.
          </div>
        </Container>
      </section>

      {/* ========================================================
          SECTION 5: MORE IN THIS CATEGORY
          ======================================================== */}
      {relatedProducts.length > 0 && (
        <section className="bg-white py-10 sm:py-12 lg:py-14">
          <Container>
            <div className="flex items-center justify-between border-b border-slate-300 pb-4 mb-8">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#21409A] font-bold block mb-1">
                  RELATED CLINICAL INVENTORY
                </span>
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0F172A]">
                  More in {product.categoryName?.split('(')[0]?.trim() || product.categoryName}
                </h2>
              </div>

              <button
                type="button"
                onClick={onBack}
                className="hidden sm:inline-flex items-center space-x-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#21409A] hover:underline cursor-pointer"
              >
                <span>BACK TO ALL</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>

            {/* Horizontal Split Cards matching the approved catalogue layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {relatedProducts.map((relProduct) => (
                <article
                  key={relProduct.id}
                  onClick={() => {
                    if (onSelectProduct) {
                      onSelectProduct(relProduct);
                    }
                    window.scrollTo({ top: 0, behavior: 'instant' });
                  }}
                  className="group cursor-pointer bg-white border border-slate-300 hover:border-[#21409A] transition-all duration-200 p-3 sm:p-4 flex items-center gap-3.5 sm:gap-4 shadow-xs hover:shadow-md"
                >
                  {/* Thumbnail */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 bg-[#F8FAFC] border border-slate-200 p-2 flex items-center justify-center overflow-hidden">
                    <img
                      src={relProduct.image}
                      alt={relProduct.name}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      width="112"
                      height="112"
                      loading="lazy"
                    />
                  </div>

                  {/* Body */}
                  <div className="flex-grow flex flex-col justify-between min-w-0 h-full py-0.5 space-y-2">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-1.5 text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#21409A] truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" aria-hidden="true" />
                        <span className="truncate">
                          {relProduct.categoryName?.split('(')[0]?.trim()}
                        </span>
                      </div>
                      <h3 className="font-bold text-[#0F172A] text-sm leading-snug tracking-tight group-hover:text-[#21409A] transition-colors line-clamp-2">
                        {relProduct.name}
                      </h3>
                    </div>

                    <div>
                      <span className="inline-flex items-center space-x-1 px-2.5 py-1 bg-[#21409A] group-hover:bg-[#1B3580] text-white text-[10px] font-mono font-bold uppercase tracking-wider transition-colors">
                        <span>VIEW SHEET</span>
                        <span>→</span>
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}
    </div>
  );
}
